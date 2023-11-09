import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ListaArmario } from '../components/ListaArmario';


function EditarProduto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recProdutoListaById = ListaArmario.filter((item) => item.id == id);

    const [produto, setProduto] = useState({
        id: recProdutoListaById[0].id,
        nome: recProdutoListaById[0].nome,
        embalagem: recProdutoListaById[0].embalagem,
        dia: recProdutoListaById[0].dia,
        mes: recProdutoListaById[0].mes,
        ano: recProdutoListaById[0].ano,
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        let indice;
        ListaArmario.forEach((item, index) => {
            if (item.id == produto.id) {
                indice = index;
            }
        });

        ListaArmario.splice(indice, 1, produto);
        navigate('/armario');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduto({ ...produto, [name]: value });
    };

    return (
        <>
            <div className='editarproduto'>
                <h1 className='editar-titulo'>Editar Produto:</h1>
                <form onSubmit={handleSubmit} className='editar-form'>
                    <div>
                        <input type='hidden' name='id' value={produto.id} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='idNome' className='form-item'>Nome do alimento:</label>
                        <input className="form-control editar-form-input" type="text" placeholder="Digite o nome do alimento." name='nome' id='idnome' value={produto.nome} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='idValor' className='form-item'>Embalagem do alimento:</label>
                        <select className="form-control editar-form-input" name='embalagem' id='idembalagem' value={produto.embalagem} onChange={handleChange}>
                            <option>Selecione o tipo de embalagem</option>
                            <option value='Vidro'>Vidro</option>
                            <option value='Plástico'>Plástico</option>
                            <option value='Metal'>Metal</option>
                            <option value='Papel'>Papel</option>
                        </select>
                    </div>
                    <div className='armario-form-datas-info'>
                        <p className='form-item'>Preencha com a data de valdiade do produto:</p>
                        <div className='editar-form-datas'>
                            <input class="form-control editar-form-input" type="number" placeholder="Dia" id='dia' name='dia' aria-label="default input example" value={produto.dia} onChange={handleChange}></input>
                            <input class="form-control editar-form-input" type="number" placeholder="Mês" id='mes' name='mes' aria-label="default input example" value={produto.mes} onChange={handleChange}></input>
                            <input class="form-control editar-form-input" type="number" placeholder="Ano" id='ano' name='ano' aria-label="default input example" value={produto.ano} onChange={handleChange}></input>
                        </div>
                    </div>
                    <button type='submit' className='btn editar-button'>Editar</button>
                </form>
            </div>
        </>
    )
}

export default EditarProduto