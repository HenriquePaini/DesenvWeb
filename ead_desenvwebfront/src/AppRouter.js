import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './paginas/HomePage';
import Sobre from './paginas/Sobre';
import NotFound from './paginas/NotFound';
import Post from './paginas/Post';
import NovoPost from './paginas/NovoPost';
import Cliente from './paginas/Cliente';
import Fornecedor from './paginas/Fornecedor';
import Produtos from './paginas/Produtos';

/*Importar a nova page*/

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/novopost" element={<NovoPost />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/fornecedor" element={<Fornecedor />} />
        <Route path="/Produtos" element={<Produtos />} />
        
      </Routes>
    </Router>
  );
};
/*Definir a rota*/
export default AppRouter;