import { Modal } from "./Modal"
import { memo } from "react"

export const ImageGalleryItem = memo(({ info, onclick }) => {
    return (
        <li className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={info.webformatURL} alt="photo"
                onClick={() => onclick(info.webformatURL)} />
        </li>
    )
});