import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ListaSenhas, ListaUsuarios } from '../components/ListaUsuarios';


function Login() {

  const navigate = useNavigate();
  const user = useRef();
  const password = useRef();

  function validade() {
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nome === user.current.value && usuarios[i].senha === password.current.value) {
        return true
      }
    }
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validade()) {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('usuario', user.current.value);
      sessionStorage.setItem('senha', token);
      navigate('/armario');
    } else {
      alert('Dados inválidos.');
    }
  };

  const [usuarios, setUsuarios]= useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/usuarios')
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        setUsuarios(res);
    })
},[]);

  return (
    <>
      <div className='login'>
        <form className='login-card' onSubmit={handleSubmit}>
          <h1 className='login-card-title'>Login</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nome de usuário:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" required="required" ref={user}></input>
          </div>
          <div>
            <label for="inputPassword5" class="form-label">Password</label>
            <input type="password" id="inputPassword5" class="form-control" placeholder='******' aria-describedby="passwordHelpBlock" required="required" ref={password}></input>
          </div>
          <button type="submit" class="btn login-button">Entrar</button>
          <p className='texto-cadastro'>Se não possue conta <Link to="/cadastro" className="texto-cadastro-cadastre_se">Cadastre-se!</Link></p>
        </form>
      </div>
    </>
  )
}

export default Login