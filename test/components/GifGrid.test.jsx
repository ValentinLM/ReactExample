import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

/* eslint-disable no-undef */
jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en <GifGrid/>', () => {
    const category = 'paisaje';
    test('Debe mostrar inicialmente el loading', () => {

        useFetchGifs.mockReturnValue({
           images: [],
           isLoading: true, 
        });
        
        render( <GifGrid category={ category }/> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    });

    test('Debe mostrar las imagenes de useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Batman',
                url: 'https://i.pinimg.com/originals/4a/96/54/4a9654af99c46f673428d9d05c38490d.jpg'
            },
            {
                id: '123',
                title: 'DeadPool',
                url: 'https://i.pinimg.com/originals/59/ed/43/59ed437e3836512b9d3327d072667b4c.png'
            },
        ];

        useFetchGifs.mockReturnValue({
           images: gifs,
           isLoading: false, 
        });
        
        render( <GifGrid category={ category }/> );
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);
    });
});