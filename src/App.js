import "./styles.css";
import "./App.css";
import { useState, useEffect } from "react";
import { Searchbar } from "./components/Searchbar";
import { Modal } from "./components/Modal";
import { ImageGallery } from "./components/ImageGallery";
import { Button } from "./components/Button";
import axios from "axios";
import { Loader } from "./components/Loader";

function App() {
  const [searchName, setSearchName] = useState("");
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (imgUrl) => {
    setIsOpen(true);
    setIsSelected(imgUrl);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsSelected(null);
  };

  const infoInput = (value) => {
    setSearchName(value);
    setPage(1);
    setImg([]);
    console.log(value); // інформація з інпуту
  };

  const API = `https://pixabay.com/api/?q=${searchName}&page=${page}&key=53835167-c7d1482498fed66d7f39b6868&image_type=photo&orientation=horizontal&per_page=12`;

  useEffect(() => {
    if (!searchName) return;
    // setPage(1);
    // setImg([]);
    setIsLoading(true);
    console.log("isLoading", isLoading);

    const apiGet = async () => {
      try {
        const getImg = await axios.get(API);

        // await new Promise(resolve => setTimeout(resolve, 2000))

        if (page === 1) {
          setImg(getImg.data.hits);
        } else {
            setImg((prev) => [...prev, ...getImg.data.hits]);
        }

        // console.log("img", getImg.data.hits);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    apiGet();
  }, [searchName, page]);

  const addPage = async () => {
    setPage((prev) => prev + 1);
    // setIsLoading(true);
    // console.log("isLoading", isLoading);
    // try {
    //   const getImages = await axios.get(API);
    //   // setTimeout(() => {
    //   setImg((prev) => [...prev, ...getImages.data.hits]);
    //   // }, 2000);
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   setIsLoading(false);
    // }
  };

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
