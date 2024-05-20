import ImageGallery from "react-image-gallery";
import classes from "./SneakerGallery.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import imageProduct1 from "../../assets/image-product-1.jpg";
import imageProduct2 from "../../assets/image-product-2.jpg";
import imageProduct3 from "../../assets/image-product-3.jpg";
import imageProduct4 from "../../assets/image-product-4.jpg";
import imageProductThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import imageProductThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import imageProductThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import imageProductThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

const Gallery = () => {
  const images = [
    {
      original: imageProduct1,
      thumbnail: imageProductThumbnail1,
    },
    {
      original: imageProduct2,
      thumbnail: imageProductThumbnail2,
    },
    {
      original: imageProduct3,
      thumbnail: imageProductThumbnail3,
    },
    {
      original: imageProduct4,
      thumbnail: imageProductThumbnail4,
    },
  ];

  return (
    <div className={classes.img}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        slideOnThumbnailOver={true}
        showNav={false}
      />
    </div>
  );
};

export default Gallery;
