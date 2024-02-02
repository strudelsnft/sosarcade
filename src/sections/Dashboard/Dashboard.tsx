import React from 'react'
import styled from 'styled-components'
import { SlideSection } from '../../components/Slider'
import { GAMES } from '../../games'
import { GameCard } from './GameCard'
import { WelcomeBanner } from './WelcomeBanner'

export function GameSlider() {
  return (
    <SlideSection>
      {GAMES.map((game) => (
        <div key={game.id} style={{ width: '160px', display: 'flex' }}>
          <GameCard game={game} />
        </div>
      ))}
    </SlideSection>
  )
}

function ColorfulHeading({ text }) {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F6FF33']

  const textStyle = {
    color: 'white',
    textShadow: `
      -1px -1px 0 #808080,  
       1px -1px 0 #808080,
      -1px  1px 0 #808080,
       1px  1px 0 #808080`,
    margin: '0 2px', 
  };

  return (
    <h2 style={{ textAlign: 'center' }}>
      {text.split('').map((letter, index) => (
        <span key={index} style={{ ...textStyle, color: colors[index % colors.length] }}>
          {letter}
        </span>
      ))}
    </h2>
  )
}



const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`

export function GameGrid() {
  return (
    <Grid>
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  )
}

export default function Dashboard() {
  return (
    <>
      <WelcomeBanner />
      <ColorfulHeading text="GAMES" />
      <GameGrid />
    </>
  )
}
