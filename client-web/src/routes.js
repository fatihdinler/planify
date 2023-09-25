import { 
  Home,
  About,
  Contact,
  Store,
  Blog
} from './app'

const routes = [
  { key: 'home', path: '/', component: <Home /> },
  { key: 'about', path: '/about', component: <About /> },
  { key: 'contact', path: '/contact', component: <Contact /> },
  { key: 'store', path: '/store', component: <Store /> },
  { key: 'blog', path: '/blog', component: <Blog /> },
]

export default routes