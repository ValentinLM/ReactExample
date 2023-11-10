import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


/* eslint-disable no-undef */
describe('Prueba de <GifItem/>', () => {
    const title = 'Harry potter';
    const url = 'https://media2.giphy.com/media/Tl2AK8HOHj7SU/giphy.gif?cid=8928e654l5ctb40tmbpx2trlv1cyz51opp3fg8ah3jgdu24p&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={title} url={url} /> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={title} url={url} /> );
        //una solución
        //expect( screen.getByRole( 'img' ).src ).toBe( url );
        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={title} url={url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });
});