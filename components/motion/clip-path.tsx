"use client";
import Image from "next/image";
import React from "react";

// Clip path variants configuration
const clipPathVariants = {
    squiggle: "clip-squiggle",
    rectangle: "clip-rect",
    abstract: "clip-another",
    variant1: "clip-another1",
    variant2: "clip-another2",
    variant3: "clip-another3",
} as const;

type ClipPathVariant = keyof typeof clipPathVariants;

interface ClippedFigureProps {
    variant: ClipPathVariant;
    src: string;
    alt: string;
    type?: "image" | "video";
    className?: string;
    hoverScale?: boolean;
    aspectRatio?: string;
    videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
}

export const ClipPaths = () => (
    <svg className="clipppy absolute -top-[999px] -left-[999px] h-0 w-0">
        <defs>
            {/* Squiggle variant */}
            <clipPath
                id={clipPathVariants.squiggle}
                clipPathUnits="objectBoundingBox"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.434125 0.00538712C0.56323 -0.00218488 0.714575 -0.000607013 0.814404 0.00302954L0.802642 0.163537C0.813884 0.167475 0.824927 0.172002 0.835358 0.177236C0.869331 0.194281 0.909224 0.225945 0.90824 0.27348C0.907177 0.324883 0.858912 0.354946 0.822651 0.36933C0.857426 0.376783 0.894591 0.387558 0.925837 0.404287C0.968002 0.426862 1.00569 0.464702 0.999287 0.515878C0.993163 0.564818 0.950731 0.597642 0.904098 0.615682C0.88204 0.624216 0.858239 0.62992 0.834803 0.633808C0.858076 0.639299 0.881603 0.646639 0.90267 0.656757C0.946271 0.677698 0.986875 0.715485 0.978905 0.768037C0.972241 0.811979 0.93615 0.843109 0.895204 0.862035C0.858032 0.879217 0.815169 0.887544 0.778534 0.892219C0.704792 0.901628 0.614366 0.901003 0.535183 0.899176C0.508115 0.898551 0.482286 0.89779 0.45773 0.897065C0.404798 0.895504 0.357781 0.894117 0.317008 0.894657C0.301552 0.894862 0.289265 0.895348 0.279749 0.895976C0.251913 0.937168 0.226467 0.980907 0.216015 1L0 0.941216C0.0140558 0.915539 0.051354 0.851547 0.0902557 0.797766C0.118421 0.758828 0.1722 0.745373 0.200402 0.740217C0.168437 0.733484 0.134299 0.723597 0.105102 0.708076C0.0614715 0.684884 0.0263696 0.64687 0.0325498 0.596965C0.0385804 0.548267 0.0803829 0.515256 0.12709 0.496909C0.146901 0.489127 0.168128 0.483643 0.189242 0.479724C0.163739 0.476035 0.137977 0.471053 0.115188 0.463936C0.0874831 0.455285 0.00855855 0.424854 0.016569 0.357817C0.0231721 0.302559 0.0838593 0.276249 0.116031 0.266164C0.149646 0.255625 0.188201 0.2505 0.221821 0.247468C0.208809 0.243824 0.195905 0.239492 0.183801 0.234287C0.152543 0.220846 0.101565 0.189547 0.105449 0.136312C0.108467 0.0949629 0.144168 0.0682612 0.171101 0.0543099C0.197578 0.0405945 0.227933 0.032236 0.25348 0.0267029C0.305656 0.0154021 0.370636 0.00911076 0.434125 0.00538712ZM0.255401 0.898975C0.255284 0.898935 0.256335 0.898631 0.258905 0.89818C0.256803 0.898788 0.255518 0.899014 0.255401 0.898975ZM0.20705 0.314027C0.207064 0.314025 0.207349 0.31412 0.207858 0.314314C0.20729 0.314126 0.207035 0.314028 0.20705 0.314027Z"
                />
            </clipPath>

            {/* Rectangle variant */}
            <clipPath
                id={clipPathVariants.rectangle}
                clipPathUnits="objectBoundingBox"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.390478 6.58202e-07C0.390501 1.11185e-05 0.390428 0.000146337 0.390297 0.000414375L0.550709 0.0469566C0.541963 0.0649609 0.528578 0.0800179 0.513027 0.0926371C0.520456 0.0916318 0.527892 0.0906235 0.535322 0.0896161C0.611493 0.0792885 0.687008 0.0690499 0.74727 0.0629569C0.784018 0.0592414 0.81958 0.0565718 0.848085 0.0569497C0.861663 0.0571297 0.879579 0.0580145 0.897003 0.0620009C0.909779 0.0649241 0.953305 0.0766464 0.966627 0.114815C0.981722 0.158066 0.941632 0.186391 0.934622 0.191283C0.921226 0.200632 0.905329 0.2078 0.892499 0.213018C0.870649 0.221904 0.842659 0.231045 0.811999 0.240157C0.83681 0.237559 0.861008 0.23616 0.882435 0.237113C0.898377 0.237821 0.921559 0.240104 0.943733 0.249163C0.970081 0.259927 0.995291 0.280954 0.999439 0.312025C1.00342 0.341836 0.985349 0.364276 0.972847 0.376207C0.959707 0.388746 0.943414 0.398747 0.928912 0.406485C0.908422 0.417419 0.883341 0.428079 0.856112 0.43835C0.864364 0.437769 0.872329 0.437442 0.879902 0.437424C0.894726 0.437388 0.918867 0.438342 0.942277 0.44699C0.955191 0.451761 0.970509 0.459852 0.982453 0.473222C0.994857 0.487108 0.999891 0.502536 0.999891 0.516826C0.999891 0.546017 0.979611 0.566515 0.967435 0.576649C0.953994 0.587837 0.937862 0.59683 0.923325 0.60391C0.898842 0.615835 0.868113 0.627441 0.834975 0.638567C0.839838 0.638299 0.844565 0.638126 0.849131 0.63806C0.862911 0.637862 0.885294 0.638334 0.907315 0.645204C0.91929 0.64894 0.935423 0.655885 0.948734 0.668812C0.96307 0.682734 0.969583 0.699213 0.969583 0.715144C0.969583 0.757071 0.930027 0.782614 0.913544 0.792306C0.891777 0.805106 0.864569 0.81609 0.838085 0.825532C0.790903 0.842353 0.729751 0.859825 0.669115 0.877149C0.66103 0.879459 0.652955 0.881767 0.644923 0.884069C0.574356 0.904301 0.504814 0.924801 0.447288 0.946442C0.385857 0.969552 0.354123 0.988333 0.343618 1L0.202975 0.924364C0.215492 0.910462 0.231313 0.897768 0.249116 0.886159C0.245423 0.886714 0.241771 0.88725 0.238165 0.887765C0.198801 0.893386 0.158749 0.897473 0.125136 0.896319C0.10872 0.895755 0.0869428 0.893786 0.0658381 0.886559C0.0427862 0.878665 0.0145658 0.861971 0.00449554 0.832076C-0.00578947 0.801544 0.00946469 0.776376 0.0226997 0.762007C0.035552 0.748054 0.0521939 0.737513 0.0660449 0.729918C0.0763777 0.724251 0.0879781 0.718724 0.10046 0.713344C0.0918192 0.712303 0.0828788 0.710698 0.0740174 0.708273C0.051902 0.70222 0.0213516 0.688215 0.00720087 0.659093C-0.00776423 0.628295 0.00549259 0.601064 0.0189035 0.585011C0.0314198 0.570028 0.048329 0.558847 0.0619247 0.551036C0.0899175 0.534954 0.127869 0.519813 0.167323 0.505895C0.189196 0.498179 0.213195 0.490274 0.238664 0.482253C0.201179 0.487186 0.163943 0.490484 0.131973 0.4895C0.114641 0.488967 0.0935233 0.487067 0.0730307 0.480935C0.0519069 0.474613 0.0244292 0.461469 0.00936765 0.435777C-0.00727697 0.407385 0.000740456 0.37998 0.0141717 0.361214C0.0260363 0.344637 0.0431738 0.33256 0.0566002 0.324433C0.0841667 0.307745 0.121704 0.292692 0.159992 0.279324C0.179936 0.27236 0.2017 0.265311 0.224764 0.258231C0.191619 0.2599 0.158935 0.260172 0.131101 0.257267C0.115367 0.255624 0.0954683 0.252431 0.0765248 0.245037C0.0569955 0.237415 0.0302689 0.221804 0.0199113 0.193469C0.0063026 0.156242 0.0281728 0.126119 0.0509681 0.109093C0.0703582 0.0946113 0.0944643 0.0856752 0.112073 0.0800026C0.142823 0.0700962 0.183388 0.0613096 0.219871 0.0534073C0.226304 0.0520139 0.232611 0.0506479 0.238714 0.0493082C0.283575 0.0394604 0.323527 0.029893 0.35429 0.0184811C0.384352 0.0073296 0.390302 -8.03862e-05 0.390478 6.58202e-07ZM0.875253 0.36952C0.875244 0.369526 0.875006 0.369505 0.874568 0.369438C0.875043 0.36948 0.875262 0.369514 0.875253 0.36952ZM0.883121 0.569927C0.883106 0.569937 0.882763 0.569927 0.882136 0.569864C0.882823 0.569885 0.883137 0.569917 0.883121 0.569927ZM0.855623 0.770513C0.855611 0.770521 0.855324 0.770513 0.854795 0.770466C0.85537 0.770482 0.855634 0.770505 0.855623 0.770513ZM0.811187 0.686078C0.812317 0.685123 0.813077 0.684647 0.813175 0.684648C0.813272 0.684649 0.812707 0.685126 0.811187 0.686078ZM0.128533 0.763746C0.128534 0.763745 0.128605 0.763753 0.128741 0.763774C0.128599 0.763757 0.128531 0.763747 0.128533 0.763746ZM0.159219 0.430692C0.159215 0.430691 0.159291 0.430628 0.15946 0.430504C0.159308 0.43063 0.159223 0.430692 0.159219 0.430692Z"
                />
            </clipPath>

            {/* Abstract variant */}
            <clipPath
                id={clipPathVariants.abstract}
                clipPathUnits="objectBoundingBox"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.75212 0.0637058C0.746781 0.0531565 0.740564 0.040872 0.737887 0.0334864L0.936579 0.00016607C0.936484 -9.48586e-05 0.936497 -6.66481e-05 0.936705 0.000382241C0.937051 0.00112847 0.937935 0.00303728 0.939758 0.00671297C0.941192 0.00960479 0.942627 0.0124478 0.944264 0.015692C0.945763 0.018661 0.947431 0.021966 0.949423 0.0259519C0.957095 0.0413005 0.966826 0.0613222 0.975597 0.0828921C0.984278 0.104239 0.992659 0.128636 0.996959 0.152724C1.00103 0.175515 1.00276 0.204629 0.990697 0.232208C0.980685 0.255101 0.955521 0.281472 0.908742 0.291922C0.916072 0.299633 0.922806 0.30733 0.928689 0.314918C0.941677 0.331671 0.956287 0.354981 0.957388 0.381047C0.958693 0.411941 0.94036 0.443862 0.896253 0.465044C0.89431 0.465978 0.892362 0.466866 0.890411 0.467711C0.895729 0.471705 0.900782 0.475615 0.905538 0.47943C0.918484 0.489812 0.931099 0.500932 0.94145 0.512321C0.951014 0.522844 0.962993 0.538241 0.967621 0.55657C0.972813 0.577133 0.969151 0.605972 0.936458 0.629605C0.924636 0.638151 0.911497 0.644133 0.898614 0.648344C0.913991 0.658695 0.928984 0.669785 0.941345 0.681191C0.952538 0.69152 0.96827 0.708075 0.97426 0.728748C0.981711 0.75446 0.973011 0.786276 0.933888 0.808864C0.928534 0.811955 0.923002 0.814627 0.917406 0.816938C0.925529 0.83579 0.926948 0.860056 0.908257 0.884087C0.889464 0.908248 0.858704 0.921114 0.835639 0.927997C0.784674 0.943205 0.732693 0.941327 0.689267 0.93407C0.646181 0.926871 0.604385 0.913257 0.566558 0.898286C0.540564 0.887998 0.514111 0.8761 0.487845 0.863426C0.521648 0.900409 0.545067 0.945246 0.545067 1H0.340424C0.340424 0.940284 0.283232 0.903277 0.188247 0.855105C0.183721 0.85281 0.178981 0.850429 0.174078 0.847966C0.135329 0.828502 0.0864189 0.803935 0.0530001 0.776309C0.0324435 0.759317 0.0128082 0.737525 0.00431929 0.710523C-0.00447536 0.68255 0.000431888 0.654497 0.0165653 0.627696C0.0261608 0.611756 0.0413931 0.595372 0.0652466 0.582459C0.0746035 0.577393 0.0844552 0.573315 0.0945665 0.570115C0.0874092 0.56516 0.0806826 0.560142 0.074501 0.555072C0.0519777 0.536603 0.00891492 0.494785 0.0352255 0.444831C0.044106 0.42797 0.0616707 0.40832 0.0942864 0.395567C0.105024 0.391369 0.115836 0.388528 0.126361 0.386704C0.123797 0.384392 0.121313 0.382082 0.118914 0.379775C0.0960358 0.357778 0.0600023 0.316728 0.0777568 0.270221C0.0837298 0.254575 0.0966195 0.234029 0.125381 0.218433C0.156097 0.201778 0.191093 0.198171 0.21915 0.199947C0.226445 0.200409 0.233601 0.201252 0.24058 0.202393C0.226967 0.177725 0.217407 0.141639 0.249005 0.106647C0.262595 0.0915979 0.283519 0.0766241 0.313911 0.0678238C0.344236 0.0590427 0.374021 0.0592941 0.397945 0.062754C0.440583 0.0689203 0.476228 0.0869109 0.500076 0.100634C0.501387 0.101388 0.502702 0.102154 0.504021 0.10293C0.50836 0.0937463 0.51561 0.0843813 0.526996 0.0753472C0.56786 0.0429231 0.623477 0.0442635 0.653879 0.0494569C0.681638 0.0541989 0.705685 0.0640958 0.721623 0.0713381C0.736276 0.0779968 0.751922 0.0861739 0.76724 0.0946149C0.763308 0.0861727 0.759362 0.0781352 0.75567 0.0707486C0.754573 0.0685531 0.75337 0.0661771 0.75212 0.0637058ZM0.888379 0.159516C0.888397 0.159547 0.887838 0.159412 0.886643 0.159018C0.887763 0.159287 0.88836 0.159484 0.888379 0.159516ZM0.431108 0.151577C0.431167 0.151596 0.43143 0.15205 0.431723 0.152878C0.431197 0.151971 0.43105 0.151557 0.431108 0.151577ZM0.27615 0.28809C0.276181 0.288096 0.276351 0.288361 0.27657 0.288868C0.27623 0.288338 0.27612 0.288084 0.27615 0.28809ZM0.226365 0.460855C0.226469 0.460872 0.227057 0.461446 0.227816 0.462522C0.226641 0.461375 0.226262 0.460837 0.226365 0.460855ZM0.827785 0.693178C0.828746 0.693035 0.829286 0.692994 0.829315 0.693009C0.829344 0.693024 0.828864 0.693095 0.827785 0.693178ZM0.725527 0.863334C0.725524 0.863334 0.725478 0.863289 0.725393 0.863199C0.725487 0.863289 0.725529 0.863334 0.725527 0.863334Z"
                />
            </clipPath>

            <clipPath
                id={clipPathVariants.variant1}
                clipPathUnits="objectBoundingBox"
            >
                <path
                    d="M0 0.0417599C0 0.0186966 0.0250721 0 0.056 0H0.6105C0.641428 0 0.6665 0.0186965 0.6665 0.0417599V0.148024C0.6665 0.171087 0.691572 0.189784 0.7225 0.189784H0.944C0.974928 0.189784 1 0.20848 1 0.231544V0.95824C1 0.981303 0.974928 1 0.944 1H0.056C0.0250721 1 0 0.981303 0 0.95824V0.0417599Z"
                    fill="#D9D9D9"
                />
            </clipPath>

            <clipPath
                id={clipPathVariants.variant2}
                clipPathUnits="objectBoundingBox"
            >
                <path
                    d="M0.1145 0.139138L0.235656 0.0147291C0.244771 0.0053695 0.257945 0 0.271794 0H0.5H0.96C0.982091 0 1 0.016076 1 0.0359066V0.964093C1 0.983924 0.982091 1 0.96 1H0.04C0.0179086 1 0 0.983924 0 0.964093V0.5V0.265845C0 0.255659 0.00428628 0.24585 0.0120005 0.238381L0.1145 0.139138Z"
                    fill="#D9D9D9"
                />
            </clipPath>

            <clipPath
                id={clipPathVariants.variant3}
                clipPathUnits="objectBoundingBox"
            >
                <path
                    d="M0 0.0351351C0 0.0157306 0.0174609 0 0.039 0H0.5H0.727414C0.741798 0 0.755513 0.00547207 0.765179 0.0150678L0.858 0.107207L0.98622 0.236143C0.995093 0.245066 1 0.256625 1 0.268605V0.5V0.964865C1 0.984269 0.982539 1 0.961 1H0.039C0.0174609 1 0 0.984269 0 0.964865V0.0351351Z"
                    fill="#D9D9D9"
                />
            </clipPath>
        </defs>
    </svg>
);

export const ClippedFigure = ({
    variant = "squiggle",
    src,
    alt,
    type = "image",
    className = "",
    hoverScale = true,
    aspectRatio = "4/3",
    videoProps = { autoPlay: true, muted: true, loop: true },
}: ClippedFigureProps) => {
    const clipPathId = clipPathVariants[variant];

    return (
        <figure style={{ clipPath: `url(#${clipPathId})` }}>
            {type === "video" ? (
                <video
                    {...videoProps}
                    className={`min-h-full object-cover align-bottom transition-all duration-300 ${
                        hoverScale ? "hover:scale-105" : ""
                    } w-full ${className}`}
                    style={{ aspectRatio }}
                >
                    <source src={src} type="video/mp4" />
                </video>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    className={`min-h-full object-cover align-bottom transition-all duration-300 ${
                        hoverScale ? "hover:scale-105" : ""
                    } w-full ${className}`}
                    style={{ aspectRatio }}
                />
            )}
        </figure>
    );
};

// Main component using the new structure
