import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
/* eslint-disable no-undef */
describe('Prueba en el hooks useFetchGifs', () => {
    const category = 'Power Rangers'
    test('Debe de regresar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifs( category) );

        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();

    });

    test('Debe de regresar un arreglo de imagenes y false en isLoading', async() => {
        
        const { result } = renderHook( () => useFetchGifs( category) );

        await waitFor( //Esperar que el arrelo sea mayor a 0
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();

    });
});