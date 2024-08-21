import React from "react";
import ReactDOM from "react-dom/client"

/* Noot:: React.createElement is not a dom element it is just an object */
const heading1 = React.createElement(
    "h1",
    { id: "heading1", key: "element1" },
    "First Line of Code Through React Library!!"
  );

  const heading2 = React.createElement(
    "h2",
    { id: "heading2", key: "element2" },
    "Second Line Of Code Through React Library!"
  );

  const rootData = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
    React.createElement(
      "h3",
      { id: "heading3", key: "element3" },
      "Third Line of Code Through React Library!"
    )
  ]);

  const child = React.createElement("div",{"id":"child","className":"child"},heading1)
  const parent = React.createElement("div",{"id":"parent","className":"parent"},child);

  //const root = ReactDOM.createRoot(document.getElementById("root"));
  //root.render(rootData);

  const containerDiv = ReactDOM.createRoot(document.getElementById("containerDiv"));
  containerDiv.render(parent)


  /* JSX */

  const jsxHeading = (<h1 id="heading3" className="heading">Jsx Heading Output</h1>);
  const jsxDiv = ReactDOM.createRoot(document.getElementById("jsxDiv"));
  jsxDiv.render(jsxHeading)

  /* ----------------- Chapter 2 --------------------------- */ 

import React from "react";
import ReactDOM from "react-dom/client";

const number = 10000;

/** React Component */
const element = <span>Hurrey</span>
const heading = (<h1 id="headingCmp" className="headingCmp">{element} This is my react Component</h1>);


/** Functional Components */
const HeadingComponent = () => {
    return heading;
}

const HeadingComponent1 = () => { 
    return (<div className="head">
        {heading}
        <h1>{number}</h1>
        <HeadingComponent />
        {/* <HeadingComponent></HeadingComponent>  :: can write this as well, same as above */}
        {/* {HeadingComponent ()}  :: can write this as well, same as above */}
        <h1 id="headingFunCmp" className="headingFunCmp">This is my functional Component</h1>
        </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< HeadingComponent1 />)