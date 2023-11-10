import PropTyes from 'prop-types';

/* eslint-disable react/prop-types */
export const GifItem = ( { title, url } ) => {
  return (
    <div>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTyes.string.isRequired,
  url: PropTyes.string.isRequired
}