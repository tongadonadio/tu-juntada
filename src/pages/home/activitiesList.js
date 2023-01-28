import * as React from "react";
import Link from "@mui/material/Link";
import { Chip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16/04/2023",
    "Asado",
    "Ortitos",
    "Edificio Meliton",
    <div>
      <Chip label="Aceptar" color="primary" size="small" />
      <Chip label="Rechazar" color="error" size="small" />
    </div>
  ),
  createData(
    1,
    "13/03/2023 - 16/04/2023",
    "Escapada a Punta del Este",
    "Koba Sports",
    "Playa mansa, Parada 3",
    <Chip label="Aceptado" color="primary" variant="outlined" size="small" />
  ),
  createData(
    0,
    "14/02/2023",
    "Asado",
    "Ortitos",
    "Edificio Meliton",
    <Chip label="Rechazado" color="error" variant="outlined" size="small" />
  ),
  createData(
    0,
    "04/02/2023",
    "Asado",
    "Ortitos",
    "Edificio Meliton",
    <Chip label="Aceptado" color="primary" variant="outlined" size="small" />
  ),
  createData(
    0,
    "07/01/2023",
    "Asado",
    "Ortitos",
    "Edificio Meliton",
    <Chip label="Aceptado" color="primary" variant="outlined" size="small" />
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Lista de actividades</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Grupo</TableCell>
            <TableCell>Lugar</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver más
      </Link>
    </React.Fragment>
  );
}
