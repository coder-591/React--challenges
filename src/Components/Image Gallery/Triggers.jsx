import Button from "./Button";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCcw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const Triggers = ({ imgId, setImgId, photos, setZoom }) => {
  const previousBtn = () => {
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].id === imgId.id && i === 0) {
        alert("This the first photo of the gallery ");
        break;
      }
      if (photos[i].id === imgId.id) {
        setImgId(photos[i - 1]);
      }
    }
  };

  const nextBtn = () => {
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].id === imgId.id && i === photos.length - 1) {
        alert("No more photos in the gallery ");
        break;
      }
      if (photos[i].id === imgId.id) {
        setImgId(photos[i + 1]);
      }
    }
  };

  const zoomInOut = (e) => {
    if (e.target.childNodes[1].wholeText.trim() === "Zoom in") {
      setZoom((prev) => Math.min(1.3, prev + 0.1));
    } else {
      setZoom((prev) => Math.max(1, prev - 0.1));
    }
    if (e.target.childNodes[1].wholeText.trim() === "Reset Zoom") {
      console.log(" in reset zoom block");

      setZoom(1);
    }
  };

  return (
    <div className=" m-auto flex flex-col justify-center gap-4">
      <Button
        icon={<ArrowLeft color="#5b4ae8" size={"20px"} />}
        text={"Previous"}
        func={previousBtn}
      />

      <Button
        icon={<ZoomIn color="#5b4ae8" size={"20px"} />}
        text={"Zoom in"}
        func={zoomInOut}
      />

      <Button
        icon={<ZoomOut color="#5b4ae8" size={"20px"} />}
        text={"Zoom out"}
        func={zoomInOut}
      />

      <Button
        icon={<RefreshCcw color="#5b4ae8" size={"20px"} />}
        text={"Reset Zoom"}
        func={zoomInOut}
      />

      <Button
        icon={<ArrowRight color="#5b4ae8" size={"20px"} />}
        text={"Next"}
        func={nextBtn}
      />
    </div>
  );
};

export default Triggers;
