import Tag from "@/components/Tag";
import Image from "next/image";
import { FC, useState } from "react";
import { StyledPortfolioCard } from "./PortfolioCard.styles";
import classNames from "classnames";

type Props = {
  title: string;
  img: string;
  mainTags: string[];
  additionalTags: string[];
}

const PortfolioCard:FC<Props> = (props) => {
  const [isOver, setOver] = useState(false);
  return (
    <StyledPortfolioCard
      className="flex flex-col max-w-[824px] w-full transition duration-300 ease-in-out 2xl:flex-row items-center gap-4 lg:gap-8 p-8 bg-[#F7F7F7] rounded-4xl"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <div className="relative w-full max-w-[364px] max-h-64 overflow-hidden rounded-xl">
        <Image
          className={classNames({
            'porfolio-img w-full h-full object-cover transition duration-300 ease-in-out': true,
            'scale-110': isOver,
            'scale-100': !isOver,
          })}
          src={props.img}
          alt="project-cover"
          width={364}
          height={256}
        />
      </div>
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
    </StyledPortfolioCard>
  )
}

export default PortfolioCard;