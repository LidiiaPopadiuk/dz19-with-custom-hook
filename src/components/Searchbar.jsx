import '../styles.css'
import { FaSearch } from "react-icons/fa";


export const Searchbar = ({ onSubmit }) => {

    const dataSubmite = (e) => {
        e.preventDefault()

        const inputValue = e.target.elements.searchName.value.trim()
        if (!inputValue) return

        onSubmit(inputValue)
    }

    return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={dataSubmite}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label"><FaSearch size={20} /></span>
                    </button>

                    <input
                        name='searchName'
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
    )
}