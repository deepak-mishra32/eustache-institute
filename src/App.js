import "./App.css";
import Headers from "./components/header/Header";
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <Headers />
    </ContextProvider>
  );
}

export default App;
