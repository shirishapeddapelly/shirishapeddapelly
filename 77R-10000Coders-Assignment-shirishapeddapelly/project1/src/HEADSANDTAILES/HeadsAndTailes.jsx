// // import React, { useState } from "react";

// // export const HeadsAndTailes = () => {
// //   const [input, setInput] = useState(" ");
// //   const [result, setResult] = useState("");

// //   return (
// //     <>
// //       <center>
// //         <h1>Heads or Tails</h1>
// //         <select
// //           value={result}
// //           onChange={(e) => {
// //             // setInput(
// //             //   document.getElementById("select" === input + e.target.value)
// //             //     ? "select proper option"
// //             //     : input + e.target.value
// //             // );
// //             setInput(
// //               input.length <= Number(4)
// //                 ? input + "\n" + e.target.value
// //                 : input + e.target.value
// //             );
// //           }}
// //         >
// //           <option value="select" id="select">
// //             select
// //           </option>

// //           <option value="H" id="head">
// //             H
// //           </option>

// //           <option value="T " id="tail">
// //             T
// //           </option>
// //         </select>

// //         <input
// //           type="submit"
// //           name="submit"
// //           id="submit"
// //           style={{ padding: 0 }}
// //           onClick={() => setResult(input)}
// //         />

// //         <h1 value={input} name="input">
// //           {result}
// //         </h1>
// //       </center>
// //     </>
// //   );
// // };

// //

// /////////
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

const choices = [
  {
    id: 0,
    value: "",
    name: "-Select-",
  },
  {
    id: 1,
    value: "H",
    name: "H",
  },
  {
    id: 2,
    value: "T",
    name: "T",
  },
];
const styles = {
  item: {
    background: "bisque",
    padding: "10px",
    hover: {
      cursor: "pointer",

      color: "red",
    },
  },
};
export const HeadTailGame = () => {
  const [Input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [hover, setHover] = useState({ row: "0", col: "0" });
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const Submit = (e) => {
    // e.preventDefault();

    if (Input) {
      let lastIndex = result.length - 1;
      let lastVal = result[lastIndex];

      if (lastVal && lastVal.includes(Input)) {
        lastVal.push(Input);
        setResult((prev) => [...prev.slice(0, lastIndex), lastVal]);
        setError("");
      } else {
        setResult((prev) => [...prev, [Input]]);
        setError("");
      }
    } else {
      setError(" Please pick any value");
    }
    setInput("");
  };

  const deleteItems = (x, y) => {
    let result1 = [...result];
    result1[x].splice(y, 1);
    setResult(result1);
  };
  const getIndex = (x, y) => {
    setHover({ row: y + 1, col: x + 1 });
  };
  const getIndex1 = (x, y) => {
    setHover({ row: (y = 0), col: (x = 0) });
  };

  return (
    <>
      <center>
        <h2>Heads or Tails</h2>
        <div className="container p-3">
          <div className="d-flex justify-content-center">
            <select className="mx-3 w-25 " id="id" onChange={handleChange}>
              {choices.map((option) => (
                <option
                  value={option.value}
                  key={option.id}
                  selected={option.name === Input}
                >
                  {option.name}
                </option>
              ))}
            </select>

            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={Submit}
            >
              Submit
            </button>
          </div>
          {error && <p className="text-danger mx-3 f-bold">{error}</p>}
          <Tooltip>
            <div style={{ cursor: "pointer " }} width="0rem" height="0rem">
              position:{`row:${hover.row},col:${hover.col}`};
            </div>
          </Tooltip>

          <div className="d-flex justify-content-center flex-wrap mt-3">
            {result.map((major, x) => {
              return (
                <>
                  <div className="flex-column">
                    {major.map((minor, y) => (
                      <>
                        <a onMouseOver={() => getIndex(x, y)}>
                          <a onMouseLeave={() => getIndex1(x, y)}>
                            <div
                              className={` d-flex m-1 px-4 py-3  `}
                              onClick={() => deleteItems(x, y)}
                              style={styles.item}
                            >
                              <div style={{ cursor: "pointer " }}>{minor}</div>
                            </div>
                          </a>
                        </a>
                      </>
                    ))}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </center>
    </>
  );
};
