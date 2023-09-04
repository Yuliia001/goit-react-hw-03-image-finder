import { Image, WrapperItem } from './ImageGalleryItem.styled';

export const ImageItem = ({
  image: { id, webformatURL, largeImageURL },
  onImageClick,
}) => {
  return (
    <WrapperItem key={id}>
      <Image
        src={webformatURL}
        alt={id}
        onClick={() => onImageClick(largeImageURL)}
      />
    </WrapperItem>
  );
};
