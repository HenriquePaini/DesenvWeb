import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FornecedorForm = ({ onFornecedorSubmit }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('blog/api/v1/rest/post', {
        nome,
        email,
        cnpj,
        cep,
        estado,
        cidade,
        endereco,
        telefone,
      });

      if (typeof onFornecedorSubmit === 'function') {
        onFornecedorSubmit(response.data);
      }

      // Limpar os campos do formulário após o envio
      setNome('');
      setEmail('');
      setCnpj('');
      setCep('');
      setEstado('');
      setCidade('');
      setEndereco('');
      setTelefone('');
      alert("Fornecedor cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <h1>Cadastro de Fornecedor</h1>
      </header>
      <main>
        <section>
          <form onSubmit={submit}>
            <label htmlFor="fornecedor-nome">Nome do Fornecedor:</label>
            <input type="text" id="fornecedor-nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>

            <label htmlFor="fornecedor-email">Email:</label>
            <input type="email" id="fornecedor-email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

            <label htmlFor="fornecedor-cnpj">CNPJ:</label>
            <input type="tel" id="fornecedor-cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required/>

            <label htmlFor="fornecedor-cep">CEP:</label>
            <input type="tel" id="fornecedor-cep" value={cep} onChange={(e) => setCep(e.target.value)} required/>

            <label htmlFor="fornecedor-estado">Estado:</label>
            <input type="text" id="fornecedor-estado" value={estado} onChange={(e) => setEstado(e.target.value)} required/>

            <label htmlFor="fornecedor-cidade">Cidade:</label>
            <input type="text" id="fornecedor-cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required/>

            <label htmlFor="fornecedor-endereco">Endereço:</label>
            <input type="text" id="fornecedor-endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required/>

            <label htmlFor="fornecedor-telefone">Telefone:</label>
            <input type="tel" id="fornecedor-telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>

            <button type="submit">Cadastrar Fornecedor</button>
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
            background-color: #e0f7fa;
            color: #333;
          }
          header {
            background-color: #00796b;
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
          input[type="email"],
          input[type="tel"] {
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          button {
            padding: 10px;
            background-color: #00796b;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #004d40;
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
            background-color: #00796b;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 18px;
            transition: background-color 0.3s ease;
            display: inline-block;
          }
          nav ul li a:hover {
            background-color: #004d40;
          }
        `}
      </style>
    </div>
  );
};

export default FornecedorForm;
