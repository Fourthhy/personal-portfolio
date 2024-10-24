import image7 from "/image/gallery/GalleryIMG7.jpg";
import image8 from "/image/gallery/GalleryIMG8.jpg";
import image9 from "/image/gallery/GalleryIMG9.jpg";
import image10 from "/image/gallery/GalleryIMG10.jpg";
import image11 from "/image/gallery/GalleryIMG11.jpg";
import image12 from "/image/gallery/GalleryIMG12.jpg";
import "/src/css/gallery.css";

function ImageSet1() {
  return (
    <div className="galleryGrid ">
      <div
        className="galleryIMG"
        style={{
            'backgroundImage': `url(${image7})`,
          backgroundPositionY: "-110px",
          backgroundPositionX: "center",
        }}
      ></div>
      <div
        className="galleryIMG"
        style={{
            'backgroundImage': `url(${image8})`,
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      ></div>
      <div
        className="galleryIMG"
        style={{
            'backgroundImage': `url(${image9})`,
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      ></div>
      <div
        className="galleryIMG"
        style={{
            'backgroundImage': `url(${image10})`,
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      ></div>
      <div
        className="galleryIMG"
        style={{
            'backgroundImage': `url(${image11})`,
          backgroundPositionY: "0",
          backgroundPositionX: "center",
        }}
      ></div>
      <div
        className="galleryIMG"
        style={{
            'backgroundImage': `url(${image12})`,
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      ></div>
    </div>
  );
}

export default ImageSet1;

