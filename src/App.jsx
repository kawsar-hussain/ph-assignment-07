import Footer from "./component/Footer";
import Main from "./component/Main";
import Nav from "./component/nav";
import Banner from "./component/Banner";
import "./styles/style.css";
import "./styles/mobile.css";
import { useState } from "react";

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const incrementInProgress = () => {
    setInProgressCount((prevCount) => prevCount + 1);
  };

  const decrementInProgress = () => {
    setInProgressCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const incrementResolved = () => {
    setResolvedCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Nav></Nav>
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <Main incrementInProgress={incrementInProgress} decrementInProgress={decrementInProgress} incrementResolved={incrementResolved}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
