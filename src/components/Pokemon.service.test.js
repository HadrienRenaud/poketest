import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};

describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', function () {
    it('0 pounds -> 0 kilograms', () => {
        expect(convertPoundsToKilograms(0)).toEqual(0);
    })
    it('1 pound -> 0.4535924 kilograms', () => {
        expect(convertPoundsToKilograms(1)).toEqual(0.4535924);
    })
});