import Dashboard from "./views/Dashboard";
import NewsPeper from "./views/newspeper";
import PageModify from "./views/pagemodify";
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
    path: "/pagemodify",
    name: "Modify Page",
    icon: "lnr lnr-laptop-phone",
    component: PageModify,
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
    component: NewsPeper,
    layout: "/admin"
  }
];

export default routes;
