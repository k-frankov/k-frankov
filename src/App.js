import { useState, useEffect } from "react";
import DesktopVersion from "./desktop/DesktopVersion";
import MobileVersion from "./mobile/MobileVersion";

function App() {
  const size = WindowSize();
  if (size.width > 600) {
    return <DesktopVersion />
  }
  else {
    return <MobileVersion />
  }
}

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default App;
