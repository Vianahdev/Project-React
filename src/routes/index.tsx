import { Routes, Route , Navigate} from "react-router-dom"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<p>Página Inicial</p>}/>

            <Route path="*" element={<><h1>Erro 404</h1> <p>Página não Encontrada</p></>} />
        </Routes>
    );
}