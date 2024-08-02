import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpperClick = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerClick = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text is cleared!", "success");
  };
  const handleCapitalizedClick = () => {
    let words = text.split(" ");
    let capitalizedCaseWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    setText(capitalizedCaseWords.join(" "));
    props.showAlert("Converted to capitalized case!", "success");
  };
  const handleAlternateClick = () => {
    const alternateText = text
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");
    setText(alternateText);
    props.showAlert("Converted to alternate case", "success");
  };
  const handleCopyClick = () => {
    const copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("Copied to clipboard!!", "success");
  }
  const handleReverseClick = () => {
    const reverseText = text.split("").reverse().join("");
    setText(reverseText);
    props.showAlert("Text is reversed!!", "success");
  }
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container mb-3"
        style={{color: props.mode === "dark" ? "white" : "black"}}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control mb-2"
            id="myBox"
            rows="10"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#374286" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border:
                props.mode === "dark" ? "2px solid white" : "2px solid black",
            }}
            onChange={handleOnChange}
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpperClick}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowerClick}
          >
            Convert to LowerCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCapitalizedClick}
          >
            Convert to title case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleAlternateClick}
          >
            Convert to alternate case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopyClick}
          >
            Copy text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleReverseClick}
          >
            Reverse text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "black"}}
      >
        <h1>Your text summary</h1>
        <p>
          Word Count :{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          | Character Count : {text.length}
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
