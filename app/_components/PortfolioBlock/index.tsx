import { BasicContainer } from "@/components/layout/Container";
import PortfolioCard from "./PortfolioCard";

const cards = [
  {
    title: 'Pixual',
    mainTags: ['web app', 'admin panel'],
    additionalTags: ['Content generation', 'Detalisation', 'management', 'Transactions', 'credit history']
  },
  {
    title: 'Pixuals',
    mainTags: ['web app', 'admin panel'],
    additionalTags: ['Content generation', 'Detalisation', 'management', 'Transactions', 'credit history']
  },
]

const PortfolioBlock = () => {
  return (
    <BasicContainer className="grid md:grid-cols-2 gap-8 px-12 md:px-[120px] py-[88px]">
      {cards.map(card => (
        <PortfolioCard key={card.title} title={card.title} mainTags={card.mainTags} additionalTags={card.additionalTags} />
      ))}
      {/* <div>
        Card 1
      </div> */}
      {/* <div>
        Card 2
      </div> */}
    </BasicContainer>
  )
}

export default PortfolioBlock;
