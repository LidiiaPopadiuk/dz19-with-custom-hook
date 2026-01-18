import '../styles.css'
import { ImageGalleryItem } from './ImageGalleryItem'
export const ImageGallery = ({ stateInfo, onImageClick }) => {
    return (
        <ul className="ImageGallery">
            {stateInfo.map(info => {
                return (
                    <ImageGalleryItem key={info.id} info={info} onclick={onImageClick} />)
            })}
        </ul>
    )
}