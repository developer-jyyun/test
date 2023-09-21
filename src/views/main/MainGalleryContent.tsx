import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { UploadedImage } from '../../components/Gallery/types';
import useMainGalleryList from '../../hooks/gallery/query/useMainGalleryList';
import '../../scss/mainGallery.scss';

interface MainGallery {
  mainGalleryList: UploadedImage[];
}

const MainGalleryContents = () => {
  const queryClient = useQueryClient();
  const { data: mainGalleryList } = useMainGalleryList();
  return (
    <Link to="/gallery">
      <div className="mainPage__content__gallery">
        {mainGalleryList.map((item: UploadedImage, index: number) => {
          return (
            <figure key={item.id} style={{ backgroundImage: `url(${item.url})` }} onClick={() => {}}>
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.timestamp}</p>
              </figcaption>
            </figure>
          );
        })}
        {/* <ImageList /> */}
      </div>
    </Link>
  );
};

export default MainGalleryContents;
