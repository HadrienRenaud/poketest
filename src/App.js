import React from 'react';
import './App.css';
import {Pokemon} from "./components/Pokemon.js"
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {DetailPage} from "./components/DetailPage";

function createRange(n) {
    return Array.apply(null, {length: n - 1}).map(Number.call, Number).map(i => i + 1)
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <Link to={'/'}>Home</Link>
                </header>
                <Switch>
                    <Route path={'/detail-page/:idPokemon'}
                           render={({match}) => <DetailPage idPokemon={match.params.idPokemon}/>}
                    />
                    <Route path={'/'}
                           exact={true}
                           render={() => <div>
                               {createRange(10).map(i =>
                                   <Pokemon idPokemon={i} key={i}/>
                               )}
                           </div>}
                    />
                    <Route path={'/'}
                           render={() => <h1>404</h1>}
                    />
                </Switch>
            </BrowserRouter>
            <footer>
                Made by <a href="https://github.com/HadrienRenaud/">Hadrien</a> on Jun 9 2019
            </footer>
        </div>
    );
}

export default App;
