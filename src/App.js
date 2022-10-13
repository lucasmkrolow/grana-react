import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Despesas from "./components/despesas";
import Despesa from "./components/despesa";
//import { useSnipcartState } from "./snipcart";

function App() {
  /*  const isSignedIn = useSnipcartState(
    (state) => state.customer.status === "SignedIn"
  );

  function signOut(ev) {
    ev.preventDefault();
    window.Snipcart.api.customer.signout();
  }
*/
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
