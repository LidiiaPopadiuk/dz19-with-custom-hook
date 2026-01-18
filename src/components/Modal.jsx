import { useEffect } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

export const Modal = ({ modalInfo, onclose }) => {

    useEffect(() => {

        const keyDown = (e) => {
            if (e.key === 'Escape') {
                onclose()
            }
        }

        window.addEventListener("keydown", keyDown)

        return () => {
            window.removeEventListener("keydown", keyDown)
        }
    }, [onclose])

    return (
        <div onClick={onclose} class="Overlay">
            <div class="Modal">
                <img src={modalInfo} alt="modal" />
                {/* <span className="span" onClick={onclose}>
                    <IoCloseCircleSharp />
                </span> */}
            </div>
        </div>
    )
}