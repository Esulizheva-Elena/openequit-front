import Crowd  from './Crowd'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    contracts: state.contracts
  }
}

const CrowdSale = drizzleConnect(Crowd, mapStateToProps);

export default CrowdSale