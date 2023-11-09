import { } from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div class="container text-center footer">
                <div class="row">
                    <div class="col coluna">
                        <Link to="armario" className='footer-link'>Seu Armário</Link>
                    </div>
                    <div class="col coluna">
                        <Link to="contato" className='footer-link'>Contato</Link>
                    </div>
                    <div class="col coluna">
                        <Link to="login" className='footer-link'>Login/Cadastro</Link>
                    </div>
                    <div class="col coluna">
                        <p className='footer-link'>Termos de Uso</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer