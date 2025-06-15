FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Add build-time arguments
ARG RESEND_API_KEY
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL
ARG NEXT_PUBLIC_APP_URL
ARG STRIPE_API_KEY
ARG NEXT_PUBLIC_STRIPE_PAYMENT_LINK
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE
ARG NEXT_PUBLIC_POSTHOG_API_KEY
ARG NODE_ENV=production
ARG SERVER_URL
ARG STRIPE_SECRET_KEY_LIVE
ARG STRIPE_WEBHOOK_SECRET
ARG NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
ARG NEXT_PUBLIC_CLOUDINARY_API_KEY
ARG NEXT_PUBLIC_CLOUDINARY_API_SECRET
ARG NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

# Set build-time environment variables
ENV RESEND_API_KEY=${RESEND_API_KEY}
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
ENV NEXTAUTH_URL=${NEXTAUTH_URL}
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
ENV STRIPE_API_KEY=${STRIPE_API_KEY}
ENV NEXT_PUBLIC_STRIPE_PAYMENT_LINK=${NEXT_PUBLIC_STRIPE_PAYMENT_LINK}
ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE=${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE}
ENV NEXT_PUBLIC_POSTHOG_API_KEY=${NEXT_PUBLIC_POSTHOG_API_KEY}
ENV NODE_ENV=${NODE_ENV}
ENV SERVER_URL=${SERVER_URL}
ENV STRIPE_SECRET_KEY_LIVE=${STRIPE_SECRET_KEY_LIVE}
ENV STRIPE_WEBHOOK_SECRET=${STRIPE_WEBHOOK_SECRET}
ENV NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=${NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
ENV NEXT_PUBLIC_CLOUDINARY_API_KEY=${NEXT_PUBLIC_CLOUDINARY_API_KEY}
ENV NEXT_PUBLIC_CLOUDINARY_API_SECRET=${NEXT_PUBLIC_CLOUDINARY_API_SECRET}
ENV NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=${NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json

# Set proper permissions
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application using the standalone server
CMD ["node", "server.js"]
