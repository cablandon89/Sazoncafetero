import "./styles/App.css";
import "./styles/header.css";

import "./fontello/css/fontello.css"

import Header from "./components/header.jsx";

function App() {
  return (
    <>
     <Header/>
     <i className="icon-basket" style={{color:'#ccc'}} />
     <p>Otro subtitulo</p>
    </>
  );
}

export default App;
