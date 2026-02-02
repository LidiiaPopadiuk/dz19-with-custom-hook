import '../styles.css'
import { ImageGalleryItem } from './ImageGalleryItem'
import { memo } from 'react'
export const ImageGallery = memo(({ stateInfo, onImageClick }) => {
    return (
        <ul className="ImageGallery">
            {stateInfo.map(info => {
                return (
                    <ImageGalleryItem key={info.id} info={info} onclick={onImageClick} />)
            })}
        </ul>
    )
});