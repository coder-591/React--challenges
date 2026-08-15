import { useEffect, useState, useRef } from "react";
import Toast from "./Toast";
import { idGenerator, notifications } from "../../assets";

const Notification = () => {
  const [toasts, setToasts] = useState([]);
  const [counter, setCounter] = useState(3);

  const addToast = () => {
    const id = Math.floor(Math.random() * notifications.length);
    const toastId = idGenerator();

    const toast = {
      id: toastId,
      message: notifications[id].message,
      type: notifications[id].type,
    };

    setToasts((prev) => [...prev, toast]);

    // const counter = setInterval(() => {
      
    //   setCounter((prev) => Math.max(prev - 1, 0));
    // }, 1000);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
      // setCounter(0);
      // clearInterval(counter);
    }, 3000);
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-4 fixed top-5 right-5 ">
          {toasts.map((toast) => (
            <div key={toast.id}>
              <Toast text={toast} counter={counter} />
            </div>
          ))}
        </div>
        <button
          onClick={addToast}
          className=" fixed border border-borderColor px-6 py-3 rounded-2xl shadow-sm font-semibold text-sm cursor-pointer  bottom-40 left-150"
        >
          Show Notification
        </button>
      </div>
    </>
  );
};

export default Notification;
