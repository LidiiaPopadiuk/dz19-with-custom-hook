import { memo } from "react"

export const Button = memo(({ info, btn }) => {
    return (
        info.length > 0 && <button onClick={btn} className="Button">Load More</button>
    )
});