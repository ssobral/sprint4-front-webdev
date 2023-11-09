import { } from 'react'
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import Logo from '../assets/Logo.png';
import Enfeite from '../assets/Enfeite.svg';
import Enfeite2 from '../assets/Enfeite2.svg';
import ImagemIngredientes from '../assets/ImagemIngredientes.svg';
import ImagemReceitas from '../assets/ImagemReceitas.svg';
import Ruas from '../assets/Ruas.svg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <main className='main'>
                <div id="carouselExampleAutoplaying" className="carousel slide banner" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <section className='sobre_nos'>
                    <img src={Logo} alt='Logo da empresa' className='sobre_nos-logo'/>
                    <div className="sobre_nos-textos">
                        <h1 className="sobre_nos-textos-titulo">Sobre nós</h1>
                        <p className="sobre_nos-textos-texto">O projeto KIT ON nasceu da ideia de diminuir a quantidade de lixo nas ruas. E para fazer isso, escolhemos o método de conscientizar as pessoas, porém, não entregando informações massantes e desncessárias para o público, e sim, de maneira interativa. De forma que os usuários teriam um meio de administrar seus alimentos e receber informações sobre o formas de utiliza-lo e a maneira correta de descarta-lo, junto de avisos sobre a importância o descarte de lixo correto.</p>
                    </div>
                </section>

                <section className='importancia'>
                    <article className='importancia_div'>
                        <div className='importancia_textos'>
                            <h1 className='importancia_titulo'>Importância</h1>
                            <p className="importancia-texto">Descartar o lixo de maneira correta pode trazer diversos benefícios para toda a humanidade. Quando se é separado o lixo de maneira correta, se facilita os meios de tratamento deles e diminuem a chance de ter impactos nocivos para o ambiente.
                            </p>
                        </div>
                        <img src={Enfeite} className='importancia_enfeite' alt='Enfeite visual' />
                    </article>
                    <article className='importancia_div'>
                        <img src={Enfeite} className='importancia_enfeite2' alt='Enfeite visual' />
                        <p className="importancia-texto2">Alguns dos benefícios do descarte apropriado do lixo seria a diminuição da poluição, diminuição de situações de alagamento, diminuição do gasto com limpezas urbanas, valorização dos pontos turísticos, Descontaminação do lençol freático.</p>
                    </article>
                </section>


                <section className="como_trabalhamos">
                    <div className="como_trabalhamos-info">
                        <h1 className="como_trabalhamos-titulo">Como trabalhamos</h1>
                        <p className="como_trabalhamos-texto">Ao acessar a rede KIT ON, você poderá registrar todos os alimentos presentes na sua casa, sendo necessário junto deles adicionar suas respectivas datas de validade. Após isso, nós separaremos receitas que podem ser cozinhadas utilizando os ingredientes registrados.</p>
                        <p className="como_trabalhamos-texto2">E caso a data de validade se aproxime, você receberá a avisos, a forma correta de descarta-lo e a importância disso.</p>
                        <p className="como_trabalhamos-texto3">Para aproveitar nossos benefícios, basta entrar na rede KIT ON:</p>
                        <div className="como_trabalhamos-botoes">
                            <Link className="btn btn-primary como_trabalhamos-button" to="login" role="button">Login</Link>
                            <Link className="btn btn-primary como_trabalhamos-button" to="contato" role="button">Duvidas</Link>
                        </div>
                    </div>
                    <img src={Enfeite2} alt="Enfeite visual" className="trabalhamos_enfeite"/>
                </section>

                <section className='vantagens'>
                    <h1 className="vantagens-titulo">Vantagens</h1>
                    <div className="cards">
                        <article className="card">
                            <img src={ImagemReceitas} alt="Imagem-Desbrave novas receitas" className="imagem-card"></img>
                            <p className="card-texto">Desbrave novas receitas</p>
                        </article>
                        <article className="card">
                            <img src={ImagemIngredientes} alt="Imagem-Controle seus ingredientes" className="imagem-card"></img>
                            <p className="card-texto">Controle seus ingredientes</p>
                        </article>
                        <article className="card">
                            <img src={Ruas} alt="Imagem-Ajude a limpar as ruas" className="imagem-card"></img>
                            <p className="card-texto">Ajude a limpar as ruas</p>
                        </article>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home