/* eslint-disable react/prop-types */
import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ( { target } ) => {
        setInputValue( target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if( newValue.length <= 1 ) return;
        //console.log(inputValue);
        //setCategories( categories => [...categories, inputValue] );
        setInputValue('');//Se limpia
        onNewCategory(newValue);
    }

    return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}