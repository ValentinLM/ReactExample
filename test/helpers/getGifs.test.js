import { getGifs } from "../../src/helpers/getGifs";

/* eslint-disable no-undef */
describe('Prueba de grtGifs', () => {

    test('Debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('Pokemon');
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });
});