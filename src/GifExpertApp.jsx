import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['One Piece', 'Pokemon'] );

  const onAddCategory = ( newCategory ) => {
    //setCategories( categories.concat("Dragon ball"));
    if ( categories.includes( newCategory) ) return;
    setCategories( [...categories, newCategory] );
    //setCategories( cat => [...cat, 'Dragon ball']);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      
      {/* Input */}
      <AddCategory onNewCategory={ (value) => onAddCategory(value) } />

      {/*Listado de Gif*/}
      {/*<button onClick={ onAddCategory }>Agregar</button>*/}
      {
        categories.map( category => ( 
          <GifGrid
            key={ category }
            category={ category }
          />
          //return <li key={ category }> { category } </li>
        ))
      }
        {/*<li> ABC </li>*/}
      {/*Item Gif*/}
      {/**/}
    </>
  )
}