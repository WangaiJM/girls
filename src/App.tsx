import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <AppRoutes />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
