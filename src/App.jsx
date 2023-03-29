import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Header/Main/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App lg:mx-12">
      <Header></Header>
      <Main></Main>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
