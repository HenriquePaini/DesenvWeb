import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProdutoForm = ({ onProdutoSubmit }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('blog/api/v1/rest/post', {
        nome,
        descricao,
        preco,
        quantidade,
      });

      if (typeof onProdutoSubmit === 'function') {
        onProdutoSubmit(response.data);
      }

      // Limpar os campos do formulário após o envio
      setNome('');
      setDescricao('');
      setPreco('');
      setQuantidade('');
      alert("Produto cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <h1>Cadastro de Produto</h1>
      </header>
      <main>
        <section>
          <form onSubmit={submit}>
            <label htmlFor="produto-nome">Nome do Produto:</label>
            <input type="text" id="produto-nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>

            <label htmlFor="produto-descricao">Descrição:</label>
            <input type="text" id="produto-descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required/>

            <label htmlFor="produto-preco">Preço:</label>
            <input type="number" id="produto-preco" value={preco} onChange={(e) => setPreco(e.target.value)} required/>

            <label htmlFor="produto-quantidade">Quantidade:</label>
            <input type="number" id="produto-quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required/>

            <button type="submit">Cadastrar Produto</button>
          </form>
        </section>
        <section>
          <nav>
            <ul>
              <li><a href="/">Início</a></li>
            </ul>
          </nav>
        </section>
      </main>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }
          body {
            background-color: #fce4ec;
            color: #333;
          }
          header {
            background-color: #d81b60;
            color: white;
            padding: 20px;
            text-align: center;
          }
          h1 {
            margin-bottom: 20px;
          }
          main {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          section {
            background-color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          form {
            display: flex;
            flex-direction: column;
          }
          label {
            margin-bottom: 5px;
            font-weight: bold;
          }
          input[type="text"],
          input[type="number"] {
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          button {
            padding: 10px;
            background-color: #d81b60;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #ad1457;
          }
          nav ul {
            list-style-type: none;
            padding: 0;
            text-align: center;
          }
          nav ul li {
            display: inline-block;
          }
          nav ul li a {
            text-decoration: none;
            background-color: #ad1457;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 18px;
            transition: background-color 0.3s ease;
          }
          nav ul li a:hover {
            background-color: #ad1457;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default ProdutoForm;
