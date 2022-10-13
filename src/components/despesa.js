import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

export default function Despesa() {
  const iurlParams = useParams();
  const [id, setId] = useState(0);
  const [despesa, setDespesa] = useState([]);
  const [origem, setOrigem] = useState([]);
  const [valor_executado, setValorExecutado] = useState("");
  const [valor_previsto, setValorPrevisto] = useState("");
  const [data_executada, setDataExecutada] = useState("");
  const [data_prevista, setDataPrevista] = useState("");
  const [isLoading, setLoading] = useState(true);

  const url =
    "https://grana.mkrolow.com/wp-json/wp/v2/transacao/" +
    iurlParams.idDaDespesaParam;
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const response = await fetch(url);
      // convert the data to json
      const json = await response.json();

      // set state with the result
      setDespesa(json);
      setDataExecutada(despesa.data_executada);
      setDataPrevista(despesa.data_prevista);
      setId(despesa.id);
      setOrigem(despesa.origem[0].post_title);
      /*const origemTitle = await despesa.*/
      setValorPrevisto(despesa.valor_previsto);
      setValorExecutado(despesa.valor_executado);

      console.log(despesa);
      setLoading(false);
    };

    fetchData();
  }, [isLoading]);
  if (isLoading) {
    return <div> Loading ... </div>;
  }
  return (
    <div>
      {" "}
      {
        <div>
          <TextField
            disabled
            required
            fullWidth
            id="filled-basic"
            label="ID"
            variant="filled"
            value={id}
            type="number"
          />
          <TextField
            disabled
            required
            fullWidth
            id="filled-basic"
            label="Origem"
            variant="filled"
            value={origem}
            type="text"
          />
          <TextField
            disabled
            required
            fullWidth
            id="filled-basic"
            label="Data Prevista"
            variant="filled"
            value={data_prevista}
            type="date"
          />
          <TextField
            disabled
            required
            fullWidth
            id="filled-basic"
            label="Valor Previsto"
            variant="filled"
            value={valor_previsto}
            type="number"
          />
          <TextField
            disabled
            required
            fullWidth
            id="filled-basic"
            label="Data Executada"
            variant="filled"
            value={data_executada}
            type="date"
          />
          <TextField
            disabled
            required
            fullWidth
            id="filled-basic"
            label="Valor Executado"
            variant="filled"
            value={valor_executado}
            type="number"
          />
        </div>
      }
    </div>
  );
}
