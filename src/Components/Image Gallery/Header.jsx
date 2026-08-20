import { Image } from "lucide-react";

const Header = ({ photos, imgId }) => {
  return (
    <div className="flex items-center justify-between px-8 py-3">
      <div className=" flex items-center gap-4">
        <Image color="#5b4ae8" size={"50px"} />
        <p className="font-semibold text-lg">Image Gallery</p>
      </div>

      <p className="font-semibold text-md text-purpleColor">
        {imgId.count || 0} / {photos.length}
      </p>
    </div>
  );
};

export default Header;
