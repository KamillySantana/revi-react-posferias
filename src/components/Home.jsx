import React, { useState } from 'react';
import Receitas from "./Receitas";
import css from "./Home.module.css"

function Home() {
    const [clique, setClique] = useState('')

    return (
        <div className={css.tot}>
            {/*Header*/}

            <div className={css.divo}>

                <img className={css.logo} src="/img/logo.png"/>
                <nav>
                    <a className={css.nav}>Para a familia</a>
                    <a className={css.nav}>Doces</a>
                    <a className={css.nav}>Salgados</a>
                    <a className={css.nav}>Bebidas</a>
                </nav>

                <button className={css.botaozinho}><img src="/img/image-removebg-preview%201.png"/></button>
            </div>


            {/*#banner*/}
            <div className={css.arca}>
                <div>
                    <img src="/img/banner.png"/>
                </div>
            </div>

            {/*categorias*/}
            <div className={css.dado}>
                <div>
                    <button className={css.five} onClick={() => setClique("ParaFami")}>Para a familia</button>
                    <button className={css.five} onClick={() => setClique("Doces")}>Doces</button>
                    <button className={css.five} onClick={() => setClique("salgados")}>Salgados</button>
                    <button className={css.five} onClick={() => setClique("Bebidas")}>Bebidas</button>
                </div>
            </div>
            <br/>
            <br/>
            <div className={css.favela}>
                {clique !== "" && <Receitas categoria={clique}></Receitas>}
            </div>

            <div className={css.clas}>
                <img className={css.logo} src="/img/logo.png"/>
                <p> Chef em casa </p>
            </div>

        </div>
    )
}

export default Home;
