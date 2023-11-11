import { useRef, useState } from 'react';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import { ListaArmario } from '../components/ListaArmario';
import { Link, useNavigate } from 'react-router-dom';



function Armario() {

    const navigate = useNavigate();
    let newId = ListaArmario[ListaArmario.length - 1].id + 1;

    const [produto, setProduto] = useState({
        id: newId,
        nome: '',
        embalagem: '',
        dia: '',
        mes: '',
        ano: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ListaArmario)
        ListaArmario.push(produto);
        navigate('/armario')
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };


    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <p className='armario-form-titulo'>Preencha o formulário com os dados do alimento que deseja registrar:</p>
                            <form className='armario-form' onSubmit={handleSubmit}>
                                <div className='armario-form-info'>
                                    <input className="form-control armario-form-nome" type="text" placeholder="Digite o nome do alimento." name='nome' id='idnome' value={produto.nome} required="required" onChange={handleChange}></input>
                                    <select className="form-control form-embalagens" name='embalagem' id='idembalagem' value={produto.embalagem} onChange={handleChange} >
                                        <option>Selecione o tipo de embalagem</option>
                                        <option>Nenhuma</option>
                                        <option value='Vidro'>Vidro</option>
                                        <option value='Plástico'>Plástico</option>
                                        <option value='Metal'>Metal</option>
                                        <option value='Papel'>Papel</option>
                                    </select>
                                </div>
                                <div className='armario-form-datas-info'>
                                    <p className='armario-form-datas-titulo'>Preencha com a data de valdiade do produto:</p>
                                    <div className='armario-form-datas'>
                                        <input class="form-control armario-form-datas-data" required="required" type="number" placeholder="Dia" id='dia' name='dia' aria-label="default input example" value={produto.dia} onChange={handleChange}></input>
                                        <input class="form-control armario-form-datas-data" required="required" type="number" placeholder="Mês" id='mes' name='mes' aria-label="default input example" value={produto.mes} onChange={handleChange}></input>
                                        <input class="form-control armario-form-datas-data" required="required" type="number" placeholder="Ano" id='ano' name='ano' aria-label="default input example" value={produto.ano} onChange={handleChange}></input>
                                    </div>
                                </div>
                                <button type="submit" class="btn armario-form-button" id='btnSubmit'>Registrar Alimento</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='armario'>
                <h1 className='armario-titulo'>Confira o seu armário de alimentos</h1>
                <button type="button" class="btn modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Registre um alimento!
                </button>

                <div className='armario-table-info'>
                    <p className='armario-table-titulo'>Seus produtos:</p>
                    <table class="table armario-table">
                        <thead>
                            <tr>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Id do produto</th>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Nome do produto</th>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Tipo de embalagem</th>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Dia de vencimento do produto</th>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Editar / Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ListaArmario.map((item, indice) => (
                                <tr key={indice}>
                                    <td className='armario-table-item'>{item.id}</td>
                                    <td className='armario-table-item'>{item.nome}</td>
                                    <td className='armario-table-item'>{item.embalagem}</td>
                                    <td className='armario-table-item'>{item.dia} / {item.mes} / {item.ano}</td>
                                    <td>
                                        <Link to={`/editar/produto/${item.id}`}>
                                            <Editar />
                                        </Link>{' '}
                                        <Link to={`/excluir/produto/${item.id}`}>
                                            <Excluir />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Armario