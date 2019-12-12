import HomePage from './HomePage';
import AboutUS from "./AboutUS";
import Course from "./Course";

export const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutUS},
    {path: '/courses', component: Course}
];