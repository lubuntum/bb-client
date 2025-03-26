import logo from './logo.svg';
import './App.css';
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'
import { ROUTES } from './routes';
import { AuthPage } from './components/auth/AuthPage';
import { AccountInfoPage } from './components/AccountInfoPage';
import { HomePage } from './components/HomePage';
import { ProtectedRoute } from './services/auth/ProtectedRoute';
import { AuthProvider } from './services/auth/AuthProvider';
import { HeaderComponent } from './components/header/HeaderComponent';
import { AuthProtectedRoute } from './services/auth/AuthProtectedRoute';
import { ProductPage } from './components/products/ProductPage';
import { ConfigurePage } from './components/configure/ConfigurePage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainPage />
      </AuthProvider>
    </BrowserRouter>
  );
}
const MainPage = () => {
  return (
    <div className='pageWrapper'>
      <Routes>
        <Route path='/*'                  element = {<p>404 NOT FOUND</p>}/>
        <Route path='/'                   element = {<Navigate to={ROUTES.HOME} replace/>}/>
        <Route path={ROUTES.HOME}         element = {<HomePage/>}/>
        <Route path={ROUTES.PRODUCTS}     element = {<ProductPage/>}/>
        <Route path={ROUTES.CONFIGURE}    element = {<ConfigurePage/>}/>
        <Route path={ROUTES.AUTH}         element = {<AuthProtectedRoute element={<AuthPage/>}/>}/>
        <Route path={ROUTES.ACCOUNT}      element = {<ProtectedRoute element={<AccountInfoPage/>}/>}/>
      </Routes>
    </div>
  )
}

export default App;
