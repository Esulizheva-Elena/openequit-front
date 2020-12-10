
import CoinCreator from './artifacts/CoinCreator.json'
// import FinalizableCrowdsale from './artifacts/FinalizableCrowdsale.json'
const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
      // url: "wss://rinkeby.infura.io/ws",
    }
  },
  // contracts: [CoinCreator, FinalizableCrowdsale],
  contracts: [CoinCreator],
}

export default drizzleOptions