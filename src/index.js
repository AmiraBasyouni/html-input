// importing React and createRoot into our project
import React from "react";
import { createRoot } from "react-dom/client";

// importing our React application component
import App from "./App";

// selecting a DOM object to inject our application components into it
const root = createRoot(document.querySelector("#root"));

// rendering our App component inside of the DOM object
root.render(<App />);
