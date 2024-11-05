import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClienteForm = ({ onClienteSubmit }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('blog/api/v1/rest/cliente', {
        nome,
        email,
        estado,
        cidade,
        endereco,
        telefone,
      });

      if (typeof onClienteSubmit === 'function') {
        onClienteSubmit(response.data);
      }

      // Limpar os campos do formulário após o envio
      setNome('');
      setEmail('');
      setEstado('');
      setCidade('');
      setEndereco('');
      setTelefone('');
      alert("Cliente cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <h1>Cadastro de Cliente</h1>
      </header>

      <main>
        <section>
          <form onSubmit={submit}>
            <label htmlFor="cliente-nome">Nome do Cliente:</label>
            <input type="text" id="cliente-nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>

            <label htmlFor="cliente-email">Email:</label>
            <input type="email" id="cliente-email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

            <label htmlFor="cliente-estado">Estado:</label>
            <input type="text" id="cliente-estado" value={estado} onChange={(e) => setEstado(e.target.value)} required/>

            <label htmlFor="cliente-cidade">Cidade:</label>
            <input type="text" id="cliente-cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required/>

            <label htmlFor="cliente-endereco">Endereço:</label>
            <input type="text" id="cliente-endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required/>

            <label htmlFor="cliente-telefone">Telefone:</label>
            <input type="text" id="cliente-telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>

            <button type="submit">Cadastrar Cliente</button>
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
            background-color: #fff3e0;
            color: #333;
          }

          header {
            background-color: #ef6c00;
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
            width: 100%; /* Preenche a largura do formulário */
          }

          button {
            padding: 10px;
            background-color: #ef6c00;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #e65100;
          }

          nav ul {
            list-style-type: none;
            padding: 0;
            text-align: center; /* Centraliza o botão */
          }

          nav ul li {
            display: inline-block;
          }

          nav ul li a {
            text-decoration: none;
            background-color: #e65100; /* Cor de fundo do botão */
            color: white; /* Cor do texto */
            padding: 10px 20px; /* Tamanho do botão */
            border-radius: 5px; /* Bordas arredondadas */
            font-size: 18px; /* Tamanho do texto */
            transition: background-color 0.3s ease; /* Transição suave na mudança de cor */
          }

          nav ul li a:hover {
            background-color: #e65100; /* Cor de fundo quando o botão é "hovered" */
            color: #fff; /* Cor do texto ao passar o mouse */
          }

          nav ul li a:active {
            background-color: #e65100; /* Cor de fundo ao clicar */
          }
        `}
      </style>
    </div>
  );
};

export default ClienteForm;
