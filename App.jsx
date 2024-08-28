import "./App.scss";
// import "swiper/swiper-bundle.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./coponents/header/Header";
import Footer from "./coponents/footer/Footer";
import SelectInput from "./coponents/optionInput/Select-Input";

import Routes from "./config/Routes";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <SelectInput
        value={"number"}
        onChange={(e) => console.log(e ? e : null)}
        label={"number"}
        placeholder={"number"}
        options={[
          { label: "one", value: 1 },
          { label: "two", value: 2 },
          { label: "three", value: 3 },
        ]}
      />
      <Footer />
    </Router>
  );
}

export default App;
