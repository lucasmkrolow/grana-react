import React from "react";
import { DataGrid, GridColDef, GridToolbar, ptBR } from "@mui/x-data-grid";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ButtonAppBar from "./appBar";

export default function Despesas() {
  const linkStyle = {
    color: "black",
  };
  const columns: GridColDef[] = [
    {
      field: "valor_previsto",
      headerName: "Valor Previsto",
      width: 100,
      disableClickEventBubbling: true,
    },
    {
      field: "data_prevista",
      headerName: "Data Prevista",
      width: 100,
      disableClickEventBubbling: true,
    },
    {
      field: "valor_executado",
      headerName: "Valor Executado",
      width: 100,
      disableClickEventBubbling: true,
    },
    {
      field: "data_executada",
      headerName: "Data Executada",
      width: 100,
      disableClickEventBubbling: true,
    },
    {
      field: "centro_de_custo",
      headerName: "Centro de Custo",
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <p className="flex">
          {params.value !== false && params.value[0].post_title}
        </p>
      ),
      type: "string",
    },
    {
      field: "origem",
      headerName: "Conta",
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <p className="flex">
          {params.value !== false && params.value[0].post_title}
        </p>
      ),
      type: "string",
    },
    {
      field: "id",
      headerName: "Ações",
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <Link to={`editardespesa/${params.row.id}`} title="Editar Despesa">
          <EditIcon style={linkStyle} />
        </Link>
      ),
      type: "string",
    },
  ];
  const url =
    "https://grana.mkrolow.com/wp-json/wp/v2/transacao?tipo=d&per_page=100";

  const data = useFetch(url);
  return (
    <div
      style={{
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        position: "absolute",
      }}
    >
      <ButtonAppBar nome="Despesas" />{" "}
      <DataGrid
        rows={data}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
}
