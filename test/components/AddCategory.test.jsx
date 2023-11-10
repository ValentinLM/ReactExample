import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

/* eslint-disable no-undef */
describe('Preuba de <AddCategory />', () => {
    const value = 'Harry Potter';

    test('Debe de cambiar el valor de input de texto', () => {
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole( 'textbox' );

        fireEvent.input( input, { target: { value: value } } );
        expect( input.value ).toBe( value );
    });

    test('Debe de llamar onNewCategory si el input tiene valor', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: value } } );
        fireEvent.submit( form );
        expect( input.value ).toBe( '' );

        expect( onNewCategory ).toHaveBeenCalled();//Si se esta llamando la funcion
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );//Cuantas veces se esta llamando
        expect( onNewCategory ).toHaveBeenCalledWith( value );
    });

    test('No debe de llamar onNewCategory si el input esta vacío', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole( 'form' );
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();//Si se esta llamando la funcion
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );//Cuantas veces se esta llamando
    });
});