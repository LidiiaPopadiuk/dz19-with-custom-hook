import { Modal } from "./Modal"

export const ImageGalleryItem = ({info, onclick}) => {
    return (
        <li className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={info.webformatURL} alt="photo"
            onClick={() => onclick(info.webformatURL)} />
        </li>
    )
}