import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
// import second from 'a'

// import styles
import 'lightgallery.js/dist/css/lightgallery.css';

const GROUP2 = [
  { image: 'images/g-img-1.jpg', title: 'title 1', desc: '1' },
  { image: 'images/g-img-2.jpg', title: 'title 2', desc: '2' },
  { image: 'images/g-img-3.jpg', title: 'title 3', desc: '3' },
  { image: 'images/g-img-4.jpg', title: 'title 4', desc: '4' },
  { image: 'images/g-img-5.jpg', title: 'title 5', desc: '5' },
  { image: 'images/g-img-6.jpg', title: 'title 6', desc: '6' },
];

interface iPhotoItem {
  image: string;
  thumb: string;
  group: string;
  title?: string;
}

const PhotoItem = ({ image, thumb, group, title }: iPhotoItem) => (
  <div className="box">
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} alt={''} />
    </LightgalleryItem>
  </div>
);

const GallerySection = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        our <span>gallery</span>
      </h1>

      <div className="gallery-container">
        <LightgalleryProvider>
          {GROUP2.map((imag, idx) => (
            <PhotoItem
              key={idx}
              thumb={imag.image}
              image={imag.image}
              title={imag.title}
              group="group2"
            />
          ))}
        </LightgalleryProvider>
      </div>
    </section>
  );
};

export default GallerySection;
