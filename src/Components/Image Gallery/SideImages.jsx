const SideImages = ({ photos, setImgId ,imgId }) => {
  return (
    <>
      <div className="max-h-115 overflow-y-scroll scrollbar-none pt-4 pb-4 px-6 flex flex-col gap-4 mb-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative"
            onClick={() => setImgId(photo)}
          >
            <span className={` ${imgId.id === photo.id ? "bg-purpleColor":"bg-headingTextColor "} absolute top-2 left-5 w-8 h-8 flex items-center justify-center rounded-2xl font-semibold text-sm text-white`}>
              {photo.count}
            </span>
            <img
              src={photo.img}
              alt={`Photo ${photo.count}`}
              className={` cursor-pointer w-60 h-40 object-cover rounded-2xl`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SideImages;
