

const PreviewImg = ({ photos, imgId }) => {
  return (
    <>
      <div>
        {photos.map(
          (photo) =>
            photo.id === imgId.id && (
              <div key={photo.id} className="">
                <img
                  src={photo.img}
                  alt={`Photo ${photo.count}`}
                  className="h-115 w-180 object-cover rounded-3xl"
                />
              </div>
            ),
        )}
      </div>
    </>
  );
};

export default PreviewImg;
