import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ContextProvider from './Context/context';
import ProductDetails from './Pages/ProductDetailPage/ProductDetails';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import contactImg from './Assets/AboutUs/contact.png'
import Cart from './Pages/Cart/Cart';
import { Provider } from 'react-redux';
import { store } from './Store';

const rootElement = document.getElementById('root');
const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to={"home"} />,
  },
  {
    path: "home",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "contact",
        element: <ContactUs img={contactImg} />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
])



if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ContextProvider>
          <RouterProvider router={router} />
        </ContextProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}



