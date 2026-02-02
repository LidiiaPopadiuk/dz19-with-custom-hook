import "./styles.css";
import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { Modal } from "./components/Modal";
import { ImageGallery } from "./components/ImageGallery";
import { Button } from "./components/Button";
import { Loader } from "./components/Loader";
import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    setSearchName,
    setImg,
    setPage,
    setIsOpen,
    setIsSelected,
    setIsLoading,
    searchName,
    img,
    page,
    isOpen,
    isSelected,
    isLoading,
    addPage,
    openModal,
    closeModal,
    infoInput,
  } = useFetch();

  return (
    <div className="App">
      <Searchbar onSubmit={infoInput} />
      <ImageGallery stateInfo={img} onImageClick={openModal} />
      <Button info={img} btn={addPage} />
      {isOpen && <Modal modalInfo={isSelected} onclose={closeModal} />}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
