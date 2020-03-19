import About from "./About";
import Faq from "./Faq";
import Home from "./Home";
import Login from "./Login";
import Test from "./Test";
import Notice from "./Notice";

const pages = [
    {
        exact: true,
        path: '/',
        component:Home,
        menuName :'홈',
    },
    {
        path: '/About',
        component:About,
        menuName :'어바웃',
    },
    {
        path: '/Faq',
        component:Faq,
        menuName :'Faq',
    },
    {
        path: '/Login',
        component:Login,
        menuName :'로그인',
    },
    {
        path: '/Test',
        component:Test,
        menuName :'테스트',
        role:'admin',
    },
    {
        path: '/Notice',
        component:Notice,
        menuName :'공지사항',
    },
];

export default pages;