import HomePage from './HomePage';
import AboutUS from "./AboutUS";
import Course from "./Course";
import Register from "./Register";
import UserBioDataList from "./Admin/UserBioDataList";
import Dashboard from "./Admin/Dashboard";
import AdminIndex from './Admin/Index';
import Gallery from "./Gallery";

export const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutUS},
    {path: '/courses', component: Course},
    {path: '/register', component: Register},
    {path: '/gallery', component: Gallery},
    {path: '/admin', component: AdminIndex, children: [
            {path: '', component: Dashboard},
            {path: '/admin/user-list', component: UserBioDataList}
    ]},

];