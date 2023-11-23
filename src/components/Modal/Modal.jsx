import { useEffect } from "react";
import PropTypes from 'prop-types';
import css from './Modal.module.css'


const Modal = ({onClose, imgUrl}) => {

    useEffect(() => {
        const handleKeydown = event => {
            if (event.code === 'Escape'){
               onClose();
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => {
        window.removeEventListener('keydown', handleKeydown);
        }
    },[onClose]);

    const handleBackdropClick = (event) => {
        if (event.currentTarget === event.target){
            onClose();
        }
    }

        return(
            <div className={css.overlay} onClick={handleBackdropClick}>
                <div className={css.modal}>
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        )
    }

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
}