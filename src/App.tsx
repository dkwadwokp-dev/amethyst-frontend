import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleGuide from "./style-guide";
import HomePage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";
import DishesPage from "./pages/DishesPage";
import RoomsPage from "./pages/RoomsPage";
import SingleRoomPage from "./pages/SingleRoomPage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import CheckBookingPage from "./pages/CheckBookingPage";
import ViewBookingPage from "./pages/ViewBookingPage";
import BookingsPage from "./pages/BookingsPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import FaqPage from "./pages/FaqPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dishes" element={<DishesPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:roomId" element={<SingleRoomPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/check-booking" element={<CheckBookingPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/bookings/:bookingId" element={<ViewBookingPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
