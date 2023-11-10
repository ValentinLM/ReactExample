/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
 
describe('Pruebas en <GifExpertApp />', () => {
 
    
 
    test('debe añadir una categoría no existente', () => {
 
        render( <GifExpertApp />);
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
       
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        fireEvent.submit( form );
        
        expect( screen.getByText('Saitama') ).toBeTruthy();
 
    });
 
    test('Validar que no se agregue una categoría existente', () => {
        const inputValue = 'One iece';
        render( <GifExpertApp /> );
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, inputValue );
        fireEvent.submit( form );

        expect( screen.getAllByText(inputValue).length ).toBeLessThan(2);
    });
 
 
});