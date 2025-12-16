'use client';
import { BasicContainer } from "@/components/layout/Container";
import PortfolioCard from "./PortfolioCard";
import styled from "styled-components";

const cards = [
  {
    title: 'Pixual',
    mainTags: ['web app', 'admin panel'],
    additionalTags: ['Content generation', 'Detalisation', 'management', 'Transactions', 'credit history'],
    img: '/portfolio/pixual.png',
  },
  {
    title: 'eXpenso',
    mainTags: ['Mobile app'],
    additionalTags: ['Content generation', 'Detalisation', 'management', 'Transactions', 'credit history'],
    img: '/portfolio/expenso.png',
  },
  {
    title: 'Breezify',
    mainTags: ['web app', 'admin panel'],
    additionalTags: ['Content generation', 'Detalisation', 'management', 'Transactions', 'credit history'],
    img: '/portfolio/breezify.png',
  },
  {
    title: 'Lettuce',
    mainTags: ['dashboard'],
    additionalTags: ['Content generation', 'Detalisation', 'management', 'Transactions', 'credit history'],
    img: '/portfolio/lettuce.png',
  },
  {
    title: 'GTS-3100',
    mainTags: ['Mobile app'],
    additionalTags: ['Content generation', 'Detalisation', 'management', 'Transactions', 'credit history'],
    img: '/portfolio/gts.png',
  },
]

const PortfolioBlock = () => {
  return (
    <StyledContainer className="grid grid-cols-1 lg:grid-cols-2 py-[88px] px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-[120px]">
      {cards.map(card => (
        <PortfolioCard
          key={card.title}
          {...card}
        />
      ))}
    </StyledContainer>
  )
}

export default PortfolioBlock;

const StyledContainer = styled(BasicContainer)`
  // display: grid;
  // grid-template-columns: auto 1fr;
  gap: 32px;
`
