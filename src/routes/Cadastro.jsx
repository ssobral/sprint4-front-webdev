import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { ListaSenhas, ListaUsuarios } from '../components/ListaUsuarios';
import { useForm } from 'react-hook-form'

function Cadastro() {

    const navigate = useNavigate();
    const nome = useRef();
    const cpf = useRef();
    const email = useRef();
    const confirmaemail = useRef();
    const senha = useRef();
    const confirmasenha = useRef();

    const { register, setValue, setFocus } = useForm([])


    function buscarCep(e) {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setValue('rua', data.logradouro);
                setValue('bairro', data.bairro);
                setValue('cidade', data.localidade);
                setValue('estado', data.uf);
                setFocus('numero');
            })

    }

    const handleSubmit = (e) => {
        if (validation()) {
            e.preventDefault();
            ListaUsuarios.push(nome.current.value);
            ListaSenhas.push(senha.current.value);
            navigate('/login');
        } else {
            navigate('/cadastro');
        }
    }

    const validation = (e) =>{
        e.preventDefault();
        if (email.current.value !== confirmaemail.current.value) {
            alert('Os emails devem ser iguais.')
            navigate('/cadastro')
        } else if (senha.current.value !== confirmasenha.current.value) {
            alert('As senhas devem ser iguais.')
            navigate('/cadastro')
        } else if (cpf.current.value.length !== 11) {
            alert('CPF deve conter 11 digitos')
            navigate('/cadastro')
        } else {
            return true
        }
    }



    return (
        <>
            <div className='cadastro'>
                <div>
                    <form className='cadastro-card' onSubmit={handleSubmit}>
                        <div className='cadastro-enfeite'>
                            <img src={Logo} className='cadastro-enfeite-img'></img>
                            <p className='cadastro-enfeite-texto'>Sejá bem-vindo a KIT ON!</p>
                        </div>
                        <div className='cadastro-dados'>
                            <div className="mb-3 cadastro-nome">
                                <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Digite seu nome:</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1 email nome" placeholder="Digite seu nome aqui" required="required" {...register('nome')} ref={nome}></input>

                            </div>
                            <div className="mb-3 cadastro-nome">
                                <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Seu CPF:</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1 email telefone" placeholder="Digite seu CPF aqui" required="required" {...register('cpf')} ref={cpf}></input>

                            </div>
                        </div>
                        <div className='cadastro-emails'>
                            <div className="mb-3 cadastro-email">
                                <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Email de usuário:</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1 email email1" placeholder="name@example.com" required="required"{...register('email')} ref={email}></input>

                            </div>
                            <div className="mb-3 cadastro-email">
                                <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto" >Confirme seu email:</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1 email email2" placeholder="name@example.com" required="required" ref={confirmaemail}></input>

                            </div>
                        </div>
                        <div className='cadastro-endereco'>
                            <div className="mb-3 cadastro-endereco-section">
                                <div className="cadastro-endereco-item">
                                    <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">CEP:</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digite seu CEP" required="required" {...register('cep')} onBlur={buscarCep}></input>
                                </div>
                                <div className="cadastro-endereco-item">
                                    <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Endereço:</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digite seu endereço" required="required" {...register('rua')}></input>
                                </div>
                            </div>
                            <div className="mb-3 cadastro-endereco-section">
                                <div className="cadastro-endereco-item">
                                    <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Número:</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digite seu número" required="required" {...register('numero')}></input>
                                </div>
                                <div className="cadastro-endereco-item">
                                    <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Complemento:</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digite o complemento"></input>
                                </div>
                            </div>
                            <div className="mb-3 cadastro-endereco-section">
                                <div className="cadastro-endereco-item">
                                    <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Estado:</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digite seu estado" required="required" {...register('estado')}></input>
                                </div>
                                <div className="cadastro-endereco-item">
                                    <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Cidade:</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digite sua cidade"  {...register('cidade')}></input>
                                </div>
                            </div>

                        </div>
                        <div className='cadastro-senhas'>
                            <div>
                                <label for="inputPassword5" className="form-label cadastro-enfeite-texto">Crie uma senha</label>
                                <input type="password" placeholder='******' id="inputPassword5 senha1" className="form-control" aria-describedby="passwordHelpBlock" required="required" ref={senha}></input>
                            </div>
                            <div>
                                <label for="inputPassword5" className="form-label cadastro-enfeite-texto">Confirme sua senha</label>
                                <input type="password" id="inputPassword5 senha2" className="form-control" placeholder='******' aria-describedby="passwordHelpBlock" required="required" ref={confirmasenha}></input>
                            </div>
                        </div>

                        <button type="submit" className="btn cadastro-button">Cadastrar</button>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Cadastro