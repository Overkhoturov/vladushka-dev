import Tag from "@/components/Tag";
import Image from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  mainTags: string[];
  additionalTags: string[];
}

const PortfolioCard:FC<Props> = (props) => {
  return (
    <div className="flex gap-8 flex-wrap w-full p-8 bg-[#F7F7F7] border border-solid border-[#DFDEDE] rounded-4xl">
      {/* <Image src="#" /> */}
      <div className="">img</div>
      <div className="">
        <h3>{props.title}</h3>

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
