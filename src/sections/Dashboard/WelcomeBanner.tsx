import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: black;
    cursor: pointer;
  }
`

const Welcome = styled.div`
  @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(-45deg, #df9eee, #FFF5C3, #91f2df, #FFF5C3, #ff3c87);
  background-size: 300% 300%, contain;
  animation: welcome-fade-in .5s ease, backgroundGradient 30s ease infinite;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }


  & > div {
    padding: 0px;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
  z-index: 1;
`

const ImageWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 35%;
  bottom: -5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // This ensures the image covers the div without stretching
  }
`;



export function WelcomeBanner() {
  return (
    <Welcome>
      <ImageWrapper>
        <img src={"/logo.svg" }/>
      </ImageWrapper>
      <div>
        {/* <h1>Welcome to $SOS Arcade 👋</h1> */}
      </div>
      <Buttons>
        <button onClick={() => window.open('https://jup.ag/swap/SOL-2mnGSkXH1h6x5qmhwoQzAZDKa83vnRf8wNkNWVbdv7w5', '_blank')}>
          🚀 Buy $SOS
        </button>
        <button onClick={() => window.open('https://discord.gg/APnPYusjFb', '_blank')}>
          💬 Join Discord
        </button>
      </Buttons>
    </Welcome>
  )
}
