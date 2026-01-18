export const Button = ({ info, btn }) => {
    return (
        info.length > 0 && <button onClick={btn} className="Button">Load More</button>
    )
}