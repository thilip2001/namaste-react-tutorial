const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello World from React written by Thiliban"
    ),
    React.createElement(
      "h1",
      { id: "heading" },
      "React Always special for me! "
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello World from React written by Thiliban"
    ),
    React.createElement(
      "h1",
      { id: "heading" },
      "React Always special for me! "
    ),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
