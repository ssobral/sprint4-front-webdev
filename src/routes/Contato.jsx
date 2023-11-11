import { useRef } from 'react'

function Contato() {
    const nome = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Obrigado pelo contato " + nome.current.value + ". Responderemos sua mensagem o mais rápido possível!")
    }
    return (
        <>
            <div className='contato'>
                <h1 className='contato-titulo'>Como podemos ajuda-lo?</h1>
                <form className='contato-dados' onSubmit={handleSubmit}>
                    <p className='contato-texto'>Caso possua alguma dúvida sobre nossa forma de trabalho, sistema ou aplicativo. Nos envie uma mensagem!</p>
                    <div className='contato-info'>
                        <input class="form-control contato-form" type="text" placeholder="Digite seu nome." id='nome-cliente' ref={nome} required="required"></input>
                        <input class="form-control contato-form" type="email" placeholder="Digite seu email." id='nome' required="required"></input>
                    </div>
                    <textarea class="form-control contato-mensagem" id="exampleFormControlTextarea1" rows="3" placeholder='Digite a sua mensagem.' required="required"></textarea>
                    <button type="submit" class="btn contato-button">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Contato