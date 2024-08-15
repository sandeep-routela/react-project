const heading1 = React.createElement(
    "h1",
    { id: "heading1", key: "element1" },
    "First Line of Code Through React Library!"
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

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(rootData);

  const containerDiv = ReactDOM.createRoot(document.getElementById("containerDiv"));
  containerDiv.render(parent)