import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useAuth, AuthProvider } from './routes/AuthContext';


const Page = lazy(() =>import ('./routes/about'));
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/about'));
const Dasboard = lazy(() => import('./routes/Dasboard'));
const  Login = lazy(() => import('./routes/Login'));
const NotFound = lazy(() => import('./routes/NotFound'));

function App() {

const ProtectDasboard = ({children}) => {
  const {isLoggin} = useAuth();
  return isLoggin ? children : <h1>mohon login</h1>
}

const Load = () => {
  return <h1>loading</h1>
}

  return (
    <>
      <AuthProvider>
        <Suspense fallback={<Load/>}>
          <BrowserRouter>
            <nav>
              <Link to={'/'}>Home</Link>
              <Link to={'/login'}>Login</Link>
              <Link to={'dasboard'}>Dasboard</Link>
            </nav>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/dasboard' element={
                <ProtectDasboard>
                  <Dasboard/>
                </ProtectDasboard>
              }>
                <Route path='about' element={<About/>}/>
                <Route path='page' element={<Page/>}/>
              </Route>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </AuthProvider>
    </>
  );
}

export default App;
