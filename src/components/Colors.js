import React from "react";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";

function Colors() {
  const [data, setData] = useState([
    { id: 1, color: "lightblue", check: true },
    { id: 2, color: "purple", check: false },
    { id: 3, color: "pink", check: false },
    { id: 4, color: "blue", check: false },
    { id: 5, color: "orange", check: false },
    { id: 6, color: "yellow", check: false },
  ]);

  return (
    <div id="colorsSpan">
      {data.map((color) => (
        <div
          className="colors"
          key={color.id}
          style={{ backgroundColor: color.color }}
          onClick={() => {
            let newArr = [...data];
            if (newArr[color.id - 1].check == true) {
              newArr[color.id - 1].check = false
            } else {
              newArr[color.id - 1].check = false;
            }
            //(console.log(newArr[2].check)
            //newArr[2].check = true;
            //console.log(newArr[2].check)
            console.log("onclick")
            setData(newArr);
          }}
        >
          {color.check && <BiCheck size={40} />}
        </div>
      ))}
    </div>
  );
}

export default Colors;
