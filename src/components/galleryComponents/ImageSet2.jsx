import image13 from "/image/gallery/GalleryIMG13.jpg";
import image14 from "/image/gallery/GalleryIMG14.jpg";
import image15 from "/image/gallery/GalleryIMG15.jpg";
import image16 from "/image/gallery/GalleryIMG16.jpeg";
import image17 from "/image/gallery/GalleryIMG17.jpg";
import "/src/css/gallery.css";

function ImageSet2() {
    return(
      <div className="galleryGrid ">
        <div className="galleryIMG" 
          style={{
            'backgroundImage': `url(${image13})`,
            'backgroundPositionY': 'center',
            'backgroundPositionX': 'center'
          }}>
        </div>
        <div className="galleryIMG" 
          style={{
            'backgroundImage': `url(${image14})`,
            'backgroundPositionY': 'center',
            'backgroundPositionX': 'center'
          }}>
        </div>
        <div className="galleryIMG" 
          style={{
            'backgroundImage': `url(${image15})`,
            'backgroundPositionY': 'center',
            'backgroundPositionX': 'center'
          }}>
        </div>
        <div className="galleryIMG" 
          style={{
            'backgroundImage': `url(${image16})`,
            'backgroundPositionY': 'center',
            'backgroundPositionX': 'center'
          }}>
        </div>
        <div className="galleryIMG" 
          style={{
            'backgroundImage': `url(${image17})`,
            'backgroundPositionY': 'center',
            'backgroundPositionX': 'center'
          }}>
        </div>
      </div>
    )
  }

export default ImageSet2;

