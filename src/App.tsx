import {BrowserRouter,Route,Routes} from "react-router-dom"
import * as ROUTE from "./Routes";
import { GlobalStyle } from "./styles/theme";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<ROUTE.Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
