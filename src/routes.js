import Dashboard from "./views/Dashboard";

import Newspeper from "./views/newspeper";
import pagemodify from "./views/pagemodify";

import UserPage from "./views/User";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "lnr lnr-diamond",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/Pagemodify",
    name: "Modify Page",
    icon: "lnr lnr-laptop-phone",
    component: pagemodify,
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
    path: "/newspeper",
    name: "newspeper",
    icon: "fa fa-newspaper-o",
    component: Newspeper,
    layout: "/admin"
  }
];

export default routes;
