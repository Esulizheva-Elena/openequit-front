// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

import Assignment from "@material-ui/icons/Assignment";
// core components/views


import LibraryBooks from "@material-ui/icons/LibraryBooks";

// import HistoryContainer from "../views/History/HistoryContainer";
// import CoinContainer from "../views/CoinCreation/CoinContainer";
import DeployCoin from "../views/DeployCoin/DeployCoin";
import CrowdSale from "../views/CrowdSale/CrowdSale";
import PurchaseCoin from "../views/PurchaseCoin/PurchaseCoin";

const routes = [
  
  // {
  //   path: "/transaction-history",
  //   sidebarName: "History",
  //   navbarName: "History",
  //   icon: LibraryBooks,
  //   component: HistoryContainer
  // },
  // {
  //   path: "/CreateCoin",
  //   sidebarName: "Coin Creation",
  //   navbarName: "Coin Creation",
  //   icon: LibraryBooks,
  //   component: CoinContainer
  // },
  {
    path: "/DeployCoin",
    sidebarName: "Deploy Coin",
    navbarName: "Deploy Coin",
    icon: LibraryBooks,
    component: DeployCoin
  },
  {
    path: "/CrowdSale",
    sidebarName: "Crowdsale",
    navbarName: "Crowdsale",
    icon: LibraryBooks,
    component: CrowdSale
  },
  {
    path: "/PurchaseCoin",
    sidebarName: "PurchaseCoin",
    navbarName: "PurchaseCoin",
    icon: LibraryBooks,
    component: PurchaseCoin
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default routes;
