import { useEffect, useState } from "react";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPictures } from "../API/Api";
import  Modal  from "./Modal/Modal";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  
  const [pictures, setPictures] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const getLargeImgUrl = imgUrl => {
    setLargeImageUrl(imgUrl);
    toggleModal();
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1,
    );
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const searchResult = value => {
    if (value === '') {
    toast.warning('Please write something', {
      position: 'top-center',
      autoClose:2000,
    })
    } else {
    setQuery(value);
    setPage(1);
    setPictures([]);
    }
  };

  useEffect(() =>{
    async function getImages(){
      if (query === ''){
        return;
      }
      setIsLoading(true);

      try {
        const data = await fetchPictures(query, page);
        
        if(data.hits.length){
          setPictures(prevPictures => [...prevPictures, ...data.hits]);
          setTotal(data.totalHits);
          setIsLoading(false);
        } else {
          setError(
            toast.error(
              'Sorry canot find your request',
              {position: 'top-center', autoClose: 2000}
            )
          );
        }
      } catch(error){
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }getImages();
  },[query, page]);
  
    const totalPage = pictures.length / total;

    return (
      <div>
      <SearchBar onSubmit={searchResult} />
          {error && <p>Something went wrong. Please refresh the page</p>}
          {isLoading && <Loader />}
          {showModal && (
            <Modal imgUrl={largeImageUrl} onClose={toggleModal} />
          )}
          <ImageGallery pictures={pictures} onClick={getLargeImgUrl} />
          {totalPage < 1 && <Button onClick={handleLoadMore} />}
    </div>
    
    );
  }
 
export default App;






// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
