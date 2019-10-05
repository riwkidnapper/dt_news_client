import Dashboard from "./views/Dashboard";

import Typography from "./views/Typography";
import TableList from "./views/Table";

import UserPage from "./views/User";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "lnr lnr-chart-bars",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/user-page",
    name: "user",
    icon: "lnr lnr-user",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Accounts",
    icon: "fa fa-address-card-o",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "lnr lnr-diamond",
    component: Typography,
    layout: "/admin"
  },

];

export default routes;
