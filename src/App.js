import "bootstrap/dist/css/bootstrap.min.css";
// imported swiper css (imported twice)
import "swiper/css";
import "./App.css";
import Banner from "./pages/Banner";
import Header from "./pages/Header";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />

    </>
  );
}

export default App;
