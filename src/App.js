import "./App.css";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import bg from "./images/bg.mp4";
function App() {
  // Rendering of all the components
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={bg} type="video/mp4" />
      </video>
      <Navbar></Navbar>
      <Input></Input>
    </>
  );
}

export default App;
