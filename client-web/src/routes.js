import { 
  Home,
  About,
  Contact,
  Store,
  StoreDetail,
  Blog,
  BlogDetail,
  CompareProduct,
  Wishlist,
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
  PrivacyPolicy,
  RefundPolicy,
  ShippingPolicy,
  TermsConditionPolicy,
  Cart,
} from './app'

const routes = [
  { key: 'home', path: '/', component: <Home /> },
  { key: 'about', path: '/about', component: <About /> },
  { key: 'contact', path: '/contact', component: <Contact /> },
  { key: 'store', path: '/store', component: <Store /> },
  { key: 'store-detail', path: '/store/store-detail/:id', component: <StoreDetail /> },
  { key: 'blog', path: '/blog', component: <Blog /> },
  { key: 'blog-detail', path: '/blog/:id', component: <BlogDetail /> },
  { key: 'compare-product', path: '/compare-product', component: <CompareProduct /> },
  { key: 'wishlist', path: '/wishlist', component: <Wishlist /> },
  { key: 'sign-in', path: '/sign-in', component: <SignIn />},
  { key: 'sign-up', path: '/sign-up', component: <SignUp /> },
  { key: 'forgot-password', path: '/forgot-password', component: <ForgotPassword /> },
  { key: 'reset-password', path: '/reset-password', component: <ResetPassword /> },
  { key: 'privacy-policy', path: '/privacy-policy', component: <PrivacyPolicy /> },
  { key: 'refund-policy', path: '/refund-policy', component: <RefundPolicy /> },
  { key: 'shipping-policy', path: '/shipping-policy', component: <ShippingPolicy /> },
  { key: 'terms-condition-policy', path: '/terms-condition-policy', component: <TermsConditionPolicy /> },
  { key: 'cart', path: '/cart', component: <Cart /> },

]

export default routes