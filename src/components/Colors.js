import React from "react";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";
import ListData from "../../src/ListData.json";

function Colors({ noteColor }) {
  /*
  const [data, setData] = useState([
    { id: 1, color: "lightblue", check: true },
    { id: 2, color: "purple", check: false },
    { id: 3, color: "pink", check: false },
    { id: 4, color: "blue", check: false },
    { id: 5, color: "orange", check: false },
    { id: 6, color: "yellow", check: false },
  ]);
  */
  const [data, setData] = useState(ListData);

  let i = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i].check === true) {
      noteColor(data[i].color);
    }
  }

  return (
    <div id="colorsSpan">
      {data.map((color) => (
        <div
          className="colors"
          key={color.id}
          style={{ backgroundColor: color.color }}
          onClick={() => {
            let newArr = [...data];

            let i = 0;
            for (i = 0; i < newArr.length; i++) {
              newArr[i].check = false;
            }

            newArr[color.id - 1].check = true;
            noteColor(color.color);
            /*
newArr[color.id - 1].check === true
? (newArr[color.id - 1].check = false)
: (newArr[color.id - 1].check = true);
*/
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
