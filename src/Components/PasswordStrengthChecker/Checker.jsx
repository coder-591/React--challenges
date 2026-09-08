import { Archive, CropIcon, Eye, EyeOff, LockKeyhole, Ticket, X } from "lucide-react";
import { useEffect, useState } from "react";

const Checker = () => {
  const requirments = [
    "At least 8 Character",
    "Contains uppercase letters(A-Z)",
    "Contains lowercase letters(a-z)",
    "Contains numbers(0-9)",
    "Contains special characters (!@#$%^&*)",
  ];
  const [veiwPassword, setVeiwPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [contains, setContains] = useState({
    lowerCase: false,
    upperCase: false,
    nums: false,
    specialChar: false,
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      let score = 0;
      for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
          setContains((prev) => ({ ...prev, lowerCase: true }));
          score++;
          break;
        }
      }

      for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          setContains((prev) => ({ ...prev, upperCase: true }));
          score++;
          break;
        }
      }

      for (let i = 0; i < password.length; i++) {
        if (password[i] >= 0 && password[i] <= 9) {
          setContains((prev) => ({ ...prev, nums: true }));
          score++;
          break;
        }
      }

      for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if (charCode >= 33 && charCode <= 47) {
          setContains((prev) => ({ ...prev, specialChar: true }));
          score++;
          break;
        }
      }

      setScore(score);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [password]);

  return (
    <>
      <div className="flex items-center justify-center mt-15">
        <div className=" px-10 pt-8 bg-cardColor w-150 h-125 border border-borderColor shadow-sm rounded-2xl">
          <div className="flex  items-center gap-4 mb-6">
            <LockKeyhole size={"50px"} color="#5b4ae8" />
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl ">Password Strength Checker</h1>
              <p className="font-medium text-sm text-bodyTextColor">
                Create a strong password for better security
              </p>
            </div>
          </div>

          <div className="relative mb-6">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={veiwPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="px-6 outline-0 border border-borderColor py-2 w-full rounded-full"
            />
            <span
              onClick={() => setVeiwPassword((prev) => !prev)}
              className="absolute top-2 right-5 cursor-pointer"
            >
              {veiwPassword ? <Eye /> : <EyeOff />}
            </span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">Password Strength</h2>
              <div className="h-4 bg-gray-300 rounded-2xl w-100">
                <div
                  className={`h-4 rounded-2xl transition-all duration-300
                   ${score === 0 && "bg-red-500 w-[10%]"}
                   ${score === 1 && "bg-red-500 w-[25%]"}
                   ${score === 2 && "bg-yellow-500 w-[50%]"}
                   ${score === 3 && "bg-yellow-500 w-[75%]"}
                   ${score === 4 && "bg-green-500 w-full"}

                   `}
                />
              </div>
            </div>
            <div>
              {score === 0 && (
                <p className="font-semibold text-red-600 text-lg">Weak</p>
              )}
              {score === 1 && (
                <p className="font-semibold text-red-600 text-lg">Weak</p>
              )}
              {score === 2 && (
                <p className="font-semibold text-yellow-600 text-lg">Medium</p>
              )}
              {score === 3 && (
                <p className="font-semibold text-yellow-600 text-lg">Good</p>
              )}
              {score === 4 && password.length >= 8 && (
                <p className="font-semibold text-green-600 text-lg">Strong</p>
              )}
            </div>
          </div>

          <p className="font-semibold text-lg mb-2">Requirments</p>

          {requirments.map((req, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              {contains.lowerCase ? (
                <div className="flex items-center justify-between mr-4">
                  <p className="font-medium text-sm text-bodyTextColor line-through">
                    {req}
                  </p>
                <p className="font-bold text-green-500"> ✓ </p>
                </div>

              ) : (
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm text-bodyTextColor">
                    {req}
                  </p>
                  <X color="red" />
                </div>
              )}
              {idx !== requirments.length - 1 && (
                <hr className="mb-2 outline-0 text-borderColor" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Checker;
