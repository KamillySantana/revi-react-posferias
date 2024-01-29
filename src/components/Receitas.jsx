import React, { useState } from 'react';
import css from "./Home.module.css"

function Receitas() {
    //Cada estado representa diferentes partes de uma receita
    const [nomeReceita, setNomeReceita] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [modoPreparo, setModoPreparo] = useState('');
    const [adicionais, setAdicionais] = useState('');
    const [listaReceitas, setListaReceitas] = useState([]);

    // responsavel por criar uma nova receita e adicionar a lista de receitas
    function adicionartextos() {
        //criando um obj
        // os valores das propriedades serao os inputs
        const novaReceita = {
            nome: nomeReceita,
            ingredientes: ingredientes,
            modoPreparo: modoPreparo,
            adicionais: adicionais
        }

        // Atualiza a lista de receitas
        // adicionando a nova receita ao final do array de receitas existente
        setListaReceitas([...listaReceitas, novaReceita]);
    }

    function pegarNome(pegar) {
        // sempre atualizar com dos dados do input digitados pelo usuario
        // value vai servir para pegar o conteudo atual do input
        setNomeReceita(pegar.target.value);
    }

    function pegarIngre(pegar) {
        setIngredientes(pegar.target.value);
    }

    function pegarModo(pegar) {
        setModoPreparo(pegar.target.value);
    }

    function pegarAdi(pegar) {
        setAdicionais(pegar.target.value);
    }

    return (
        <div>
            <div>
                <div className={css.linhas}>
                    <label>
                        Nome da Receita:
                        <input className={css.input} onChange={pegarNome}/>
                    </label>

                    <label>
                        Ingredientes:
                        <input className={css.input} onChange={pegarIngre}/>
                    </label>

                    <label>
                        Modo de preparo:
                        <input className={css.input} onChange={pegarModo}/>
                    </label>

                    <label>
                        Adicionais(se tiver):
                        <input className={css.input} onChange={pegarAdi}/>
                    </label>

                </div>
                <button className={css.button} onClick={adicionartextos}>Adicionar</button>

                <div>
                    <h2>Suas Receitas:</h2>
                    {/*renderizar a lista de receitas na interface do usuário.*/}
                    {/*sendo o map q percorre a lista, produzindo uma novo array com os valores*/}
                    {listaReceitas.map((receita) => (
                        <div className={css.receita}>
                            <p>Nome: {receita.nome}</p>
                            <p>Ingredientes: {receita.ingredientes}</p>
                            <p>Modo de preparo: {receita.modoPreparo}</p>
                            <p>Adicionais: {receita.adicionais}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Receitas;
