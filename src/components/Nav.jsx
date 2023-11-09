import { } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LogoBranco from '../assets/LogoBranco.png'
import iconuser from '../assets/iconuser.png'

function Nav() {
    const navigate = useNavigate();

    const handleLogout = async() =>{
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('senha');
        alert('Sua sessão foi finalizada.')
        navigate('/')
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link to='/' className='link-home'><img src={LogoBranco} width="50" height="40" /><p className='header_titulo'><strong className='header_titulo_destaque'>KIT</strong> ON</p></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav lista-ancoras">
                            <li class="nav-item">
                                <Link to="armario" className='nav-link'>Seu Armário</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="contato" className='nav-link'>Contato</Link>
                            </li>
                            <li className='nav-item'>

                                <button className='nav-drowdown-login dropdown-toggle right-dropdown' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="dropdown-img" src={iconuser} />
                                </button>

                                <ul class="dropdown-menu">
                                    <li><Link to="/login" className='nav-link-dropdown dropdown-item'>Login</Link></li>
                                    <li><Link to="cadastro" className='nav-link-dropdown dropdown-item'>Cadastro</Link></li>
                                    <li><button className='dropdown-item' onClick={handleLogout}>Logout</button></li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Nav