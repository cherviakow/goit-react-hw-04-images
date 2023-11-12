import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'




export const ImageGallery = ({pictures, onClick}) => {
    return (
        <div className={css.imageGallery}>
            <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
        </div>
    )
}


ImageGallery.propTypes = {
    pictures: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}



// export const ImageGallery = ({pictures, onClick}) => {
//     return (
//         <div className={css.imageGallery}>
//             <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
//         </div>
//     )
// }


// ImageGallery.propTypes = {
//     pictures: PropTypes.array.isRequired,
//     onClick: PropTypes.func.isRequired,
// }