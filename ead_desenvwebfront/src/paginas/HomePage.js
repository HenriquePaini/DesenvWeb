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
    const res = axios.get("blog/api/v1/rest/post");
    res.then((query) => {
        setListaPosts(query.data);
        console.log(query.data);
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="row">
         <div className="col-4">
             <p>Count com state: {countState}</p>
             <button
                type="button"
                className="btn btn-primary"
                onClick={counterState}
            >
                Clique aqui!
            </button>
        </div>
    </div>

    <div>
        <Link to="/NovoPost">
            <button>Novo Post</button>
        </Link>
    </div>

        <div className="row">
                 {listaPosts.length > 0 && (<table className="table">
                     <thead>
                         <tr>
                             <th scope="col">ID</th>
                             <th scope="col">Título</th>
                             <th scope="col">Post</th>
                         </tr>
                     </thead>
                     <tbody>
                         {listaPosts &&
                             listaPosts.map((post, index) => (
                                 <tr key={index}>
                                     <th scope="row" key={post.id}>{post.id}</th>
                                     <td key={post.title}><a href={`/post/${post.id}`}>{post.title}</a></td>
                                     <td key={post.post}>{post.post}</td>
                                 </tr>
                             ))}
                     </tbody>
                 </table>)}
             </div>

      {/* Conteúdo da página principal */}
    </div>
  );
};

export default HomePage;