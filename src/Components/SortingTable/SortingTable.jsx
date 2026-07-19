import { useState, useEffect } from "react";
import {
  employees,
  sortByAscendingA,
  sortByAscendingN,
  sortByAscendingS,
  sortByDecendingA,
  sortByDecendingN,
  sortByDecendingS,
} from "./employee";

const SortingTable = () => {
  const [isActive, setIsActive] = useState("");
  const [direction, setDirection] = useState("");

  const clickHandler = (e) => {
    setIsActive(e.target.textContent);
    setDirection((prev) => (prev === "ascending" ? "decending" : "ascending"));
  };

  //   console.log("Active ", isActive);
  //   console.log("Direction is", direction);

  return (
    <div className="emp w-[50%] m-auto h-screen overflow-scroll cursor-pointer">
      <div className="flex items-center justify-around list-none mb-5 mt-5">
        <li onClick={clickHandler} className="font-bold">
          Name
        </li>
        <li onClick={clickHandler} className="font-bold">
          Age
        </li>
        <li onClick={clickHandler} className="font-bold">
          Salary
        </li>
      </div>

      {direction === "" &&
        employees.map((emp, idx) => (
          <ul
            key={idx}
            className="flex items-center justify-around  gap-4 space-y-4"
          >
            <li>{emp.name}</li>
            <li>{emp.age}</li>
            <li>{emp.salary}</li>
          </ul>
        ))}

      {/* sorting by age */}

      {isActive === "Age" &&
        (direction === "ascending"
          ? sortByAscendingA.map((emp, idx) => (
              <ul
                key={idx}
                className="flex items-center justify-around gap-4 space-y-4"
              >
                <li>{emp.name}</li>
                <li>{emp.age}</li>
                <li>{emp.salary}</li>
              </ul>
            ))
          : sortByDecendingA.map((emp, idx) => (
              <ul
                key={idx}
                className="flex items-center justify-around gap-4 space-y-4"
              >
                <li>{emp.name}</li>
                <li>{emp.age}</li>
                <li>{emp.salary}</li>
              </ul>
            )))}

      {/* sorting by salary
       */}

      {isActive === "Salary" &&
        (direction === "ascending"
          ? sortByAscendingS.map((emp, idx) => (
              <ul
                key={idx}
                className="flex items-center justify-around gap-4 space-y-4"
              >
                <li>{emp.name}</li>
                <li>{emp.age}</li>
                <li>{emp.salary}</li>
              </ul>
            ))
          : sortByDecendingS.map((emp, idx) => (
              <ul
                key={idx}
                className="flex items-center justify-around gap-4 space-y-4"
              >
                <li>{emp.name}</li>
                <li>{emp.age}</li>
                <li>{emp.salary}</li>
              </ul>
            )))}

      {isActive === "Name" &&
        (direction === "ascending"
          ? sortByAscendingN.map((emp, idx) => (
              <ul
                key={idx}
                className="flex items-center justify-around gap-4 space-y-4"
              >
                <li>{emp.name}</li>
                <li>{emp.age}</li>
                <li>{emp.salary}</li>
              </ul>
            ))
          : sortByDecendingN.map((emp, idx) => (
              <ul
                key={idx}
                className="flex items-center justify-around gap-4 space-y-4"
              >
                <li>{emp.name}</li>
                <li>{emp.age}</li>
                <li>{emp.salary}</li>
              </ul>
            )))}
    </div>
  );
};

export default SortingTable;
