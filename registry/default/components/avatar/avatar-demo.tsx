import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export default function AvatarDemo() {
    return (
      <Avatar>
        <AvatarImage src="https://res.cloudinary.com/dphulm0s9/image/upload/v1739106437/a1.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  