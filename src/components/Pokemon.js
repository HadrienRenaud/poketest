import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {getFirstAbility, convertPoundsToKilograms, getPokemon} from "./Pokemon.service";

export class Pokemon extends React.Component {
    state = {
        loading: true,
        error: false,
        pokemon: {}
    }

    static propTypes = {
        idPokemon: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }

    componentWillMount() {
        getPokemon(this.props.idPokemon)
            .then(data => {
                this.setState({
                    loading: false,
                    pokemon: data
                })
            })
    }

    render () {
        if (this.state.loading)
            return <div>Chargement en cours ... </div>
        else if (this.state.error)
            return <div>Une erreur a eu lieu. Regarde la console !</div>
        else {
            let p = this.state.pokemon;
            let ability = getFirstAbility(p);
            return <div>
                <h3>{p.name}</h3>
                <img src={p.sprites.front_default} alt={p.name}/>
                {ability && <div>Frist ability: {ability}</div>}
                <div>Weight: {Math.floor(convertPoundsToKilograms(p.weight))} kg</div>
                <div><Link to={'/detail-page/' + this.props.idPokemon}>See More</Link></div>
            </div>
        }
    }
}
