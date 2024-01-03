import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary">Teste</Button>}/>

            <Route path="*" element={<><h1>Erro 404</h1> <p>Página não Encontrada</p></>} />
        </Routes>
    );
}