import "/src/css/gallery.css";
import ImageSet0 from "./galleryComponents/ImageSet0";
import ImageSet1 from "./galleryComponents/ImageSet1";
import ImageSet2 from "./galleryComponents/ImageSet2";
import { useState } from "react";
function Next(props) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 25 24"
      fill="#3CBDBD"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0 0 0)"
    >
      <path
        d="M19.0854 4.5C19.0854 4.08579 18.7496 3.75 18.3354 3.75C17.9212 3.75 17.5854 4.08579 17.5854 4.5V9.83812L9.43248 4.27346C7.939 3.2541 5.91406 4.32365 5.91406 6.13185V17.868C5.91406 19.6762 7.939 20.7457 9.43248 19.7264L17.5854 14.1617V19.4999C17.5854 19.9142 17.9212 20.25 18.3354 20.25C18.7496 20.25 19.0854 19.9142 19.0854 19.4999V4.5ZM17.1843 12.6194C17.6206 12.3216 17.6206 11.6782 17.1843 11.3805L8.58687 5.51238C8.08904 5.1726 7.41406 5.52912 7.41406 6.13185L7.41406 17.868C7.41406 18.4707 8.08904 18.8272 8.58687 18.4875L17.1843 12.6194Z"
        fill="#3CBDBD"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
function Previous(props) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 25 24"
      fill="#3CBDBD"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0 0 0)"
    >
      <path
        d="M5.91406 4.5C5.91406 4.08579 6.24985 3.75 6.66406 3.75C7.07828 3.75 7.41406 4.08579 7.41406 4.5V9.83812L15.567 4.27346C17.0605 3.2541 19.0854 4.32365 19.0854 6.13185L19.0854 17.868C19.0854 19.6762 17.0605 20.7457 15.567 19.7264L7.41406 14.1617V19.4999C7.41406 19.9142 7.07828 20.25 6.66406 20.25C6.24985 20.25 5.91406 19.9142 5.91406 19.4999V4.5ZM7.81514 12.6194C7.37888 12.3216 7.37888 11.6782 7.81514 11.3805L16.4126 5.51238C16.9104 5.1726 17.5854 5.52912 17.5854 6.13185L17.5854 17.868C17.5854 18.4707 16.9104 18.8272 16.4126 18.4875L7.81514 12.6194Z"
        fill="#3CBDBD"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
//public




function Gallery() {
  const [images, setImages] = useState(0);

  function handleNext() {
    if (images == 2){
      setImages(0);
    } else {
      setImages(images + 1);
    }
  }

  function handlePrevious() {
    if (images == 0){
      setImages(2);
    } else {
        setImages(images - 1);
    }
  }

  return (
    <>
      <div className="galleryContainer">
        <div className="galleryHeader">
          <p class="text"> Memorable Images page {images}</p>
          <div className="galleryButtons">
            <div className="galleryButton" onClick={handlePrevious}>
              <Previous />
            </div>
            <div className="galleryButton" onClick={handleNext}>
              <Next />
            </div>
          </div>
        </div>
        {images === 0 && <ImageSet0 />}
        {images === 1 && <ImageSet1 />}
        {images === 2 && <ImageSet2 />}
      </div>
    </>
  );
}

export default Gallery;