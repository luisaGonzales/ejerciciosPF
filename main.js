'use strict';
let assert = require('assert');

// Ejercicio 1 
let l1 = [1, 2, 3];
let l2 = [2, 3, 4];

function intersection(l1, l2) {
    let l3 = [];
    for (let i = 0; i < l1.length; i++) {
        for (let j = 0; j < l2.length; j++) {
            if (l1[i] == l2[j]) {
                l3.push(l1[i]);
            }
        }
    }
    return l3;
}

function intersectionSet2(l1, l2) {
    return l1.filter(function (n) {
        return l2.indexOf(n) !== -1;
    });
}

// Ejercicio 2

let productos = [{
        nombre: 'pijama',
        tipo: 'ropa'
    },
    {
        nombre: 'nevera',
        tipo: 'electrodoméstico'
    },
    {
        nombre: 'asus',
        tipo: 'computador'
    },
    {
        nombre: 'macbook',
        tipo: 'computador'
    },
    {
        nombre: 'pijama',
        tipo: 'ropa'
    },
    {
        nombre: 'toshiba',
        tipo: 'computador'
    }
];

function filtrar(productos) {
    let computadores = [];
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].tipo === 'computador') {
            computadores.push(productos[i]);
        }
    }
    return computadores;
}

function filtrarSet2(productos) {
    let computadores2 = productos.filter(function (producto) {
        return producto.tipo === 'computador';
    });
}


describe('Ejercicios Guiados', () => {

    it('Retornar los valores que existen en dos arreglos', () => {
        assert.apply(intersection(l1, l2), [2, 3]);
    });

    it('Retorna los valores PF', () => {
        assert.apply(intersectionSet2(l1, l2), [2, 3]);
    });

    it('Filtrar propiedad de un objeto', () => {
        assert.apply(filtrar(productos), [{
                nombre: 'asus',
                tipo: 'computador'
            },
            {
                nombre: 'macbook',
                tipo: 'computador'
            },
            {
                nombre: 'toshiba',
                tipo: 'computador'
            }
        ]);
    });
    it('Filtrar una propiedad PF', () => {
        assert.apply(filtrarSet2(productos), [{
                nombre: 'asus',
                tipo: 'computador'
            },
            {
                nombre: 'macbook',
                tipo: 'computador'
            },
            {
                nombre: 'toshiba',
                tipo: 'computador'
            }
        ]);
    });
});