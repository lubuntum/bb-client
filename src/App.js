import logo from './logo.svg';
import './App.css';
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'
import { ROUTES } from './routes';
import { AuthPage } from './components/auth/AuthPage';
import { CreateOrderPage } from './components/orders/CreateOrderPage';
import { AccountInfoPage } from './components/AccountInfoPage';
import { HomePage } from './components/HomePage';
import { ProtectedRoute } from './services/auth/ProtectedRoute';
import { AuthProvider } from './services/auth/AuthProvider';
import { HeaderComponent } from './components/header/HeaderComponent';
import { AuthProtectedRoute } from './services/auth/AuthProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HeaderComponent />
        <MainPage />
      </AuthProvider>
    </BrowserRouter>
  );
}
const MainPage = () => {
  return (
    <div className='pageWrapper'>
      <Routes>
        <Route path='/*' element = {<p>404 NOT FOUND</p>} />
        <Route path='/' element = {<Navigate to={ROUTES.HOME} replace/>} />
        <Route path={ROUTES.HOME} element = {<HomePage/>} />
        <Route path={ROUTES.AUTH} element = {<AuthProtectedRoute element={<AuthPage/>}/>}/>
        <Route path={ROUTES.ACCOUNT} element = {<ProtectedRoute element={<AccountInfoPage/>}/>} />
        <Route path={ROUTES.CREATE_ORDER} element = {<ProtectedRoute element={<CreateOrderPage/>}/>} />
      </Routes>
    </div>
  )
}

export default App;
