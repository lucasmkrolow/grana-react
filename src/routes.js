import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Despesas from "./components/despesas";
import Despesa from "./components/despesa";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Despesas />} />
      <Route path='/editardespesa/:idDaDespesaParam' element={<Despesa />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);