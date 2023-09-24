import About from "./components/about/about";
import Command from "./components/command/command";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Information from "./components/information/information";
import News from "./components/news/news";
import Products from "./components/products/products";
import Sertificate from "./components/sertificate/sertificate";



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Sertificate />
      <Products />
      <Information />
      <Command />
      <News />
      <Footer />
    </div>
  );
}

export default App;
