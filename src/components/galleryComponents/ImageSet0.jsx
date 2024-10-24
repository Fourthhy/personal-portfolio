import image1 from "/image/gallery/GalleryIMG1.jpg";
import image2 from "/image/gallery/GalleryIMG2.jpg";
import image3 from "/image/gallery/GalleryIMG3.jpg";
import image4 from "/image/gallery/GalleryIMG4.jpg";
import image5 from "/image/gallery/GalleryIMG5.jpg";
import image6 from "/image/gallery/GalleryIMG6.jpg";
import "/src/css/gallery.css";

function ImageSet0() {
    return (
      <div className="galleryGrid ">
          <div className="galleryIMG"
            style={{
              'backgroundImage': `url(${image1})`,
              'backgroundPositionY': '-170px',
              'backgroundPositionX': 'left',
            }}
          >
          </div>
          <div className="galleryIMG" 
            style={{
              'backgroundImage': `url(${image2})`,
              'backgroundPositionY': 'center',
               'backgroundPositionX': 'center'
            }}>
          </div>
          <div className="galleryIMG" 
            style={{
              'backgroundImage': `url(${image3})`,
              'backgroundPositionY': 'center',
               'backgroundPositionX': 'center'
            }}>
          </div>
          <div className="galleryIMG" 
            style={{
              'backgroundImage': `url(${image4})`,
              'backgroundPositionY': 'center',
               'backgroundPositionX': 'center'
            }}>
          </div>
          <div className="galleryIMG" 
            style={{
              'backgroundImage': `url(${image5})`,
              'backgroundPositionY': 'center',
               'backgroundPositionX': 'center'
            }}>
          </div>
          <div className="galleryIMG" 
            style={{
              'backgroundImage': `url(${image6})`,
              'backgroundPositionY': 'center',
              'backgroundPositionX': 'center'
            }}>
          </div>
        </div>
  )
}

export default ImageSet0;