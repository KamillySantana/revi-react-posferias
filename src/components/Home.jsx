import React, { useState } from 'react';
import Receitas from "./Receitas";
import css from "./Home.module.css"

function Home() {
    const [clique, setClique] = useState('')
    return (
        <div className={css.tot}>
            {/*Header*/}

            <div className={css.divo}>
                <div>
                    <img className={css.logo} src="/img/logo.png"/>
                </div>

                <div>
                    <nav>
                        <a className={css.nav} href="#categoria">Para a familia</a>
                        <a className={css.nav} href="#categoria">Doces</a>
                        <a className={css.nav} href="#categoria">Salgados</a>
                        <a className={css.nav} href="#categoria">Bebidas</a>
                    </nav>
                </div>

                <div>
                    <input placeholder="Encontre receitas"/>
                    <button><img src="/img/lupa.png"/></button>
                </div>

            </div>


            {/*#banner*/}
            <div className={css.arca}>
                <div>
                <h1>Sabores que inspiram receitas que transformam!</h1>
                    <p>Compartilhe a sua receita e faça parte da nossa história</p>
                </div>

                <div>
                    <img src="/img/banner1.png"/>
                </div>
            </div>

            {/*categorias*/}
            <div className={css.dado} >
                <div id="categoria">
                    <button className={css.five} onClick={() => setClique("ParaFami")}><img className={css.btnn} src="/img/botao1.png"/>Para a familia</button>
                    <button className={css.five} onClick={() => setClique("Doces")}><img className={css.btnn} src="/img/cup.png"/>Doces</button>
                    <button className={css.five} onClick={() => setClique("salgados")}><img className={css.btnn} src="/img/botao3.png"/>Salgados</button>
                    <button className={css.five} onClick={() => setClique("Bebidas")}><img className={css.btnn} src="/img/botao4.png"/>Bebidas</button>
                </div>

                <div className={css.favela}>
                    <img src="/img/banner2.png"/>
                    {clique !== "" && <Receitas categoria={clique}></Receitas>}
                </div>
            </div>
            <div className={css.papel}>
                <p>fotter</p>
                <p>fotter</p>
                <p>fotter</p>
                <p>fotter</p>
            </div>
        </div>
    )
}

export default Home;
