import { ListGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ListGallery>
      {images.map(({ id, webformatURL }) => (
        <li key={id}>
          <img src={webformatURL} alt={id} />
        </li>
      ))}
    </ListGallery>
  );
};
