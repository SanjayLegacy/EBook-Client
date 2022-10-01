import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AddNewBook from "./Container/AddNewBook";
import BookDetailsPage from "./Container/BookDetailsPage";
import CartPage from "./Container/CartPage";
import HomePage from "./Container/HomePage";
import LandingPage from "./Container/LandingPage";
import LoginPage from "./Container/LoginPage";
import MyBooks from "./Container/MyBooks";
import Register from "./Container/Register";
import TransactionPage from "./Container/TransactionPage";
import UserDetailsPage from "./Container/UserDetailsPage";
import UsersPage from "./Container/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route element={<NavBar />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/bookDetails/:id" element={<BookDetailsPage />} />
          <Route path="/myBooks" element={<MyBooks />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/userDetailsPage/:id" element={<UserDetailsPage />} />
          <Route path="/newBook" element={<AddNewBook />} />
          <Route path="/ledger" element={<TransactionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
