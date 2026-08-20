import Button from "./Button";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCcw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const Triggers = () => {
  return (
    <div className=" m-auto flex flex-col justify-center gap-4">
      <Button
        icon={<ArrowLeft color="#5b4ae8" size={"20px"} />}
        text={"Previous"}
        
      />
      <Button
        icon={<ZoomIn color="#5b4ae8" size={"20px"} />}
        text={"Zoom in"}
      />
      <Button
        icon={<ZoomOut color="#5b4ae8" size={"20px"} />}
        text={"Zoom out"}
      />
      <Button
        icon={<RefreshCcw color="#5b4ae8" size={"20px"} />}
        text={"Reset Zoom"}
      />
      <Button
        icon={<ArrowRight color="#5b4ae8" size={"20px"} />}
        text={"Next"}
        
      />
    </div>
  );
};

export default Triggers;
