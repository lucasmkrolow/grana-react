import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./appBar.css";

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grana - {props.nome}
          </Typography>
          <Link to="/">
            <Button className="Button" color="inherit">
              Despesas
            </Button>
          </Link>

          <Link to="/compras">
            <Button color="inherit">Compras</Button>
          </Link>
          <Link to="/vendas">
            <Button color="inherit">Vendas</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
