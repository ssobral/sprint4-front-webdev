import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ListaSenhas, ListaUsuarios } from '../components/ListaUsuarios';


function Login() {

    const navigate = useNavigate();
    const user = useRef();
    const password = useRef();

    function validade(){
      for (var i=0; i < ListaUsuarios.length; i++){
        if (ListaUsuarios[i] === user.current.value && ListaSenhas[i] === password.current.value){
          return true
        }
      }
    }

    const handleSubmit = () => {
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

    return (
        <>
            <div className='login'>
                <form className='login-card' onSubmit={handleSubmit}>
                    <h1 className='login-card-title'>Login</h1>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nome de usuário:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"  required="required" ref={user}></input>
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