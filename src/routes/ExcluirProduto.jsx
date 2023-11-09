import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaArmario } from '../components/ListaArmario';

function ExcluirProduto() {

    const { id } = useParams();
    const navigate = useNavigate();

    const recProdutoListaById = ListaArmario.filter((item) => item.id == id);

    const [produto] = useState({
        id: recProdutoListaById[0].id,
        nome: recProdutoListaById[0].nome,
        embalagem: recProdutoListaById[0].embalagem,
        dia: recProdutoListaById[0].dia,
        mes: recProdutoListaById[0].mes,
        ano: recProdutoListaById[0].ano,
    });

    const handleExclude = (event) => {
        event.preventDefault();
        let indice;
        ListaArmario.forEach((item, index) => {
            if (item.id == produto.id) {
                indice = index;
            }
        });
        ListaArmario.splice(indice, 1);
        navigate('/armario');
    };
    return (
        <>
            <div className='excluirproduto'>
                <h1 className='editar-titulo'>Excluir produto do armário:</h1>
                <div>
                    <p>Nome : {produto.nome}</p>
                </div>
                <div className='excluir-buttons'>
                    <button onClick={handleExclude} className='btn excluir-button'>EXCLUIR</button>
                    <button onClick={() => navigate('/armario')} className='btn excluir-button'>CANCELAR</button>
                </div>
            </div>
        </>
    )
}

export default ExcluirProduto