import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://mainnet.helius-rpc.com/?api-key=bd860cfe-6109-4edb-baa9-205561d2bbaa"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = 'HBQpKxK2Wdscn4kEBZWyXQ2GuCAEVeH6yinVnc736MVL'

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  // {
  //   mint: new PublicKey("2mnGSkXH1h6x5qmhwoQzAZDKa83vnRf8wNkNWVbdv7w5"),
  //   symbol: '$SOS',
  //   name: 'Strudels on Solana',
  //   image: "https://img.fotofolio.xyz/?url=https%3A%2F%2Farweave.net%2FQbMVjKRsPJp2mghhed--03EhCeSS68Vum6QlxPgCRvo",
  //   decimals: 1e9,
  //   baseWager: 1,
  // }
]
