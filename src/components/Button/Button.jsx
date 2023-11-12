import PropTypes from 'prop-types';
import css from './button.module.css'



export const Button = ({onClick}) => {
    return (
        <button className={css.buttonLoad} type="button" onClick={onClick}>
            Load More
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};