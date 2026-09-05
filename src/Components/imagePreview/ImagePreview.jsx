import { useState } from "react";

const ImagePreview = () => {
  const [imageURL, setImageURL] = useState(null);

  const previewImage = (e) => {
    const img = e.target.files[0];
    console.log(img.size);

    // 1KB  = 1024 bytes
    // 1MB  = 1024 KB
    // 1GB  = 1024 MB
    // 1TB  = 1024 GB
    if (img.type.includes("image/") && img.size <= 5 * 1024 * 1024) {
      const preview = URL.createObjectURL(img);
      setImageURL(preview);
    } else {
      alert("Please upload your image");
    }
  };

  const removePreview = () => {
    setImageURL(null);
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5">
        <label
          htmlFor="upload"
          className=" cursor-pointer mt-6 border border-borderColor w-50 h-50 rounded-full"
        >
          <img
            src={imageURL}
            alt=""
            className="rounded-full object-cover  w-50 h-50"
          />
        </label>
        <input
          type="file"
          id="upload"
          className="hidden"
          onChange={previewImage}
        />

        <div className="flex items-center justify-center gap-20 mt-10">
          <label
            htmlFor="upload"
            className="border border-borderColor px-4 py-2 rounded-2xl font-semibold text-sm cursor-pointer"
          >
            Upload
          </label>
          <button
            onClick={removePreview}
            className="border border-borderColor px-4 py-2 rounded-2xl font-semibold text-sm cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default ImagePreview;
