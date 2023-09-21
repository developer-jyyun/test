import React from 'react';
import { ImageList } from '../../components/Gallery';

const MainGalleryContents = ({ docList, onImageClick, likeImage, deleteData }) => {
  return (
    <div>
      <ImageList />
    </div>
  );
};

export default MainGalleryContents;
