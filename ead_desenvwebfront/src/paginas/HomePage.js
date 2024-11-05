import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [countState, setCountState] = React.useState(0);
    const [listaPosts, setListaPosts] = React.useState([]);

  function counterState() {
    setCountState(countState + 1);
  }

  React.useEffect(() => {
    // const res = axios.get("blog/api/v1/rest/post");
    // res.then((query) => {
    //     setListaPosts(query.data);
    //     console.log(query.data);
    // });
  }, []);
  return (
    <form onSubmit={HomePage}>
      <div>
        <main>
            <section>
                <h2>Escolha uma opção de cadastro</h2>
                    <nav>
                        <ul>
                            <li><a href="fornecedor">Cadastro de Fornecedor</a></li>
                            <li><a href="cliente">Cadastro de Cliente</a></li>
                            <li><a href="produtos">Cadastro de Produto</a></li>
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
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            background-color: #4CAF50;
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

        h2 {
            margin-bottom: 15px;
            color: #4CAF50;
        }

        nav ul {
            list-style-type: none;
        }

        nav ul li {
            margin-bottom: 10px;
        }

        nav ul li a {
            text-decoration: none;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            display: inline-block;
        }

        nav ul li a:hover {
            background-color: #45a049;
        }
          }
        `}
      </style>
      </div>
    </form>
  );
};

export default HomePage;