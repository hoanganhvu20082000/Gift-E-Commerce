import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import SortPage from "./pages/SortPage";
import ProductLayout from "./layout/ProductLayout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import UserProfile from "./pages/UserProfile/UserProfile";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Order from "./pages/Order/Order";
import PrivateRoute from "./routes/PrivateRoute";
import Search from "./pages/Search/Search";
import WishList from "./pages/Whislist/Whislist";
import AdminPage from "./pages/AdminPage";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen max-h-max">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />}></Route>
              <Route path="products/:id" element={<ProductDetail />}></Route>
              <Route path="search" element={<Search />}></Route>
              <Route
                path="/shopping-cart"
                element={
                  <PrivateRoute>
                    <ShoppingCart />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/checkout"
                element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/order-detail/:id"
                element={
                  <PrivateRoute>
                    <OrderDetail />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/order"
                element={
                  <PrivateRoute>
                    <Order />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/wish-list"
                element={
                  <PrivateRoute>
                    <WishList />
                  </PrivateRoute>
                }
              ></Route>
            </Route>
            <Route path="/store" element={<ProductLayout />}>
              <Route path="sort" element={<SortPage />}></Route>
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="admin"
              element={
                <AdminRoute>
                  <AdminPage />
                </AdminRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
