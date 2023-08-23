import React from 'react';

interface ProductGalleryProps {
  mainImage?: string;
  galleryImages?: typeof images;
}

const images = [
  {
    image: 'assets/images/products/single/centered/1.jpg',
    bigImage: 'assets/images/products/single/centered/1-big.jpg',
    smallImage: 'assets/images/products/single/centered/1-small.jpg',
  },
  {
    image: 'assets/images/products/single/centered/2.jpg',
    bigImage: 'assets/images/products/single/centered/2-big.jpg',
    smallImage: 'assets/images/products/single/centered/2-small.jpg'
  },
  {
    image: 'assets/images/products/single/centered/3.jpg',
    bigImage: 'assets/images/products/single/centered/3-big.jpg',
    smallImage: 'assets/images/products/single/centered/3-small.jpg'
  },
  {
    image: 'assets/images/products/single/centered/4.jpg',
    bigImage: 'assets/images/products/single/centered/4-big.jpg',
    smallImage: 'assets/images/products/single/centered/4-small.jpg'
  }
];


type ProductGalleryItemProps = typeof images[number]

const ProductGallery = ({ mainImage, galleryImages }: ProductGalleryProps) => {

  const [activeProductImage, setActiveProductImage] = React.useState(images[0]);

  const ProductGalleryItem = ({ bigImage, smallImage, image }: ProductGalleryItemProps) => {
    return (
      <a
        className="product-gallery-item active"
        data-image={image}
        onClick={e => {
          e.preventDefault();
          setActiveProductImage({image, smallImage, bigImage});
        }}
        data-zoom-image={bigImage}
      >
        <img
          src={smallImage}
          alt="product side"
        />
      </a>
    );
  };

  return (
    <div className="col-md-6">
      <div className="product-gallery product-gallery-vertical">
        <div className="row">
          <figure className="product-main-image">
            <img
              id="product-zoom"
              src={activeProductImage.image}
              data-zoom-image={activeProductImage.bigImage}
              alt="product image"
            />

            <a
              href="#"
              id="btn-product-gallery"
              className="btn-product-gallery"
            >
              <i className="icon-arrows"></i>
            </a>
          </figure>

          <div id="product-zoom-gallery" className="product-image-gallery">
            {
              images && images.map((image, index) => (
                <ProductGalleryItem key={index} {...image} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
