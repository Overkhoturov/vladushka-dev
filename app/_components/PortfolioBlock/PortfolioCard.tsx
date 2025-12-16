import Tag from "@/components/Tag";
import Image from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  img: string;
  mainTags: string[];
  additionalTags: string[];
}

const   PortfolioCard:FC<Props> = (props) => {
  return (
    <div className="flex flex-col max-w-[824px] w-full 2xl:flex-row items-center gap-4 lg:gap-8 p-8 bg-[#F7F7F7] border border-solid border-[#DFDEDE] rounded-4xl">
      <Image className="w-full max-w-[364px] max-h-64 transition duration-300 ease-in-out hover:scale-110" src={props.img} alt="project-cover" width={364} height={256} />
      <div className="max-w-[364px] w-full">
        <h3 className="font-medium text-[32px] leading-10 mb-3">{props.title}</h3>

        <div className="flex flex-wrap items-center gap-3 mb-[58px]">
          {props.mainTags.map((tag, index) => (
            <Tag key={index} text={tag} variant="outlined" />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {props.additionalTags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard;
