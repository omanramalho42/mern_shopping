import React, { lazy, Suspense, Fragment, useState, useEffect } from 'react'

import { 
  BrowserRouter,
  Route,
  Routes 
} from 'react-router-dom'

import { 
  Header,
  Footer
} from './components'

import { GlobalStyle } from './styles/Global'

import { Container, Nav, ToastContainer } from 'react-bootstrap'

import { AppContainer } from './styles/App'

import { LinkContainer } from 'react-router-bootstrap'

import { getError } from './util/utils'

import { toast } from 'react-toastify'

import axios from 'axios'
import ProtectedRoute from './components/ProtecetedRoute'
import Dashboard from './screens/Dashboard'
import AdminRoute from './components/AdminRoute'

const SearchScreen = lazy(() => import('./screens/SearchScreen'));
const OrderHistory =lazy(() => import('./screens/OrderHistory'));
const Profile =lazy(() => import('./screens/Profile'));
const Payament = lazy(() => import('./screens/Payament'));
const PlaceOrder = lazy(() => import('./screens/PlaceOrder'));
const Order = lazy(() => import('./screens/Order'));
const SignUp = lazy(() => import('./screens/SignupScreen'));
const Cart = lazy(() => import('./screens/Cart'));
const SignIn = lazy(() => import('./screens/SigninScreen'));
const ShippingScreen = lazy(() => import('./screens/ShippingScreen')); 
const Home = lazy(() => import('./screens/Home'));
const ProductScreen = lazy(() => import('./screens/ProductScreen'));

const Loading: React.FC = () => {
  return (
    <div>
      <h1>
        loading.........
      </h1>
    </div>
  )
}

function App() {  
  const [sidebar, setSidebar] = useState(false);
  
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data }: any = await axios.get('http://localhost:3001/api/products/categories');
        setCategories(data);
      } catch (error) {
        toast.error(getError(error));
      }
    };

    fetchCategories();
  },[]);
  
  return (
    <BrowserRouter>
      <div 
        className={
          sidebar 
          ? 'd-flex flex-column side-container active-cont' 
          : 'd-flex flex-column side-container'
        }
      >
        <AppContainer>
          <ToastContainer position='bottom-center' />
          <GlobalStyle />

          <Header setSidebar={setSidebar} />
          <div
            className={
              sidebar 
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column' 
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
            }
          >
            <Nav className="flex-column text-white w-100 p-2">
              <Nav.Item>
                <strong>Categorias</strong>
                {categories?.map((category: string) => (
                  <Nav.Item key={category}>
                    <LinkContainer
                      to={{ pathname: '/search', search: `category=${category}` }}
                      onClick={() => setSidebar((value:Boolean) => !value)}
                    >
                      <Nav.Link>{ category }</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                ))}
              </Nav.Item>
            </Nav>
          </div>

          <Container className='mt-3'>
            <Routes>
              <Fragment>
                <Route 
                  path='/' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <Home />
                    </Suspense>
                  }
                />
                <Route 
                  path='/product/:slug' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <ProductScreen />
                    </Suspense>
                  }
                />
                <Route 
                  path='/cart' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <Cart />
                    </Suspense>
                  }
                />
                <Route 
                  path='/search' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <SearchScreen />
                    </Suspense>
                  }
                />
                <Route 
                  path='/profile' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    </Suspense>
                  }
                />
                <Route 
                  path='/shipping' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <ShippingScreen />
                    </Suspense>
                  }
                />
                <Route 
                  path='/payament' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <Payament />
                    </Suspense>
                  }
                />
                <Route 
                  path='/placeorder' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <ProtectedRoute>
                        <PlaceOrder />
                      </ProtectedRoute>
                    </Suspense>
                  }
                />
                <Route 
                  path='/order/:id' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <Order />
                    </Suspense>
                  }
                />
                <Route 
                  path='/orderhistory' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <ProtectedRoute>
                        <OrderHistory />
                      </ProtectedRoute>
                    </Suspense>
                  }
                />
                <Route 
                  path='/signin' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <SignIn />
                    </Suspense>
                  }
                />
                <Route 
                  path='/signup' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <SignUp />
                    </Suspense>
                  }
                />

                {/* ASDMIN ROUTES */}
                <Route 
                  path='/admin/dashboard' 
                  element={
                    <Suspense fallback={<Loading />}>
                      <AdminRoute>
                        <Dashboard />
                      </AdminRoute>
                    </Suspense>
                  }
                />
              </Fragment>
            </Routes>
          </Container>

            <Footer />
        </AppContainer>
      </div>
    </BrowserRouter>
  );
}

export default App
