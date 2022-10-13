import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Despesas from "./components/despesas";
import Despesa from "./components/despesa";

function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<Despesas />} />
          <Route
            path="/editardespesa/:idDaDespesaParam"
            element={<Despesa />}
          />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
