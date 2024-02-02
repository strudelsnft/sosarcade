import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useTransactionError } from 'gamba-react-v2'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Modal } from './components/Modal'
import { StyledSection } from './components/Slider'
import { useToast } from './hooks/useToast'
import Dashboard from './sections/Dashboard/Dashboard'
import Game from './sections/Game/Game'
import Header from './sections/Header'
import RecentPlays from './sections/RecentPlays/RecentPlays'
import Toasts from './sections/Toasts'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function ErrorHandler() {
  const walletModal = useWalletModal()
  const toast = useToast()
  const [error, setError] = React.useState<Error>()

  useTransactionError(
    (error) => {
      if (error.message === 'NOT_CONNECTED') {
        walletModal.setVisible(true)
        return
      }
      toast({ title: '❌ Transaction error', description: error?.error?.errorMessage ?? error.message })
    },
  )

  return (
    <>
      {error && (
        <Modal onClose={() => setError(undefined)}>
          <h1>Error occured</h1>
          <p>{error.message}</p>
        </Modal>
      )}
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ErrorHandler />
      <Header />
      <Toasts />
      <StyledSection>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:gameId" element={<Game />} />
        </Routes>
        <ColorfulHeading text="RECENT PLAYS" />
        <RecentPlays />
      </StyledSection>
    </>
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
