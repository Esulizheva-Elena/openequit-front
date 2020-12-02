
import CoinCreator from '../build/contracts/CoinCreator.json'
const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [CoinCreator],
  // events: {
  //   CoinCreator: ['allEvents'],
  // },
  // polls: {}
}

export default drizzleOptions