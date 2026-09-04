import { useState } from "react";
import Header from "./Header";
import { images } from "./images";
import SideImages from "./SideImages";
import PreviewImg from "./PreviewImg";
import Triggers from "./Triggers";

const Gallery = () => {
  const [photos, setPhotos] = useState(images);
  const [imgId, setImgId] = useState(0);
  const [zoom ,setZoom] = useState(1)
  

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-cardColor border border-borderColor rounded-2xl shadow-sm w-full h-140 m-4">
          <div className="flex flex-col gap-2">
            <Header photos={photos} imgId={imgId} />
            <div className="flex gap-7 ">
              <SideImages photos={photos} imgId={imgId} setImgId={setImgId} />
              <PreviewImg imgId={imgId} photos={photos} zoom = {zoom} />
              <Triggers imgId={imgId} setImgId={setImgId} photos={photos} setZoom = {setZoom} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Gallery;
