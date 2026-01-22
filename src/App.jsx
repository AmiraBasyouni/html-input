import React from "react";

const INPUT_TYPES = [
  "text",
  "radio",
  "checkbox",
  "file",
  "number",
  "range",
  "color",
  "submit",
  "button",
];

function App() {
  return (
    <main>
      <h1>{"<input />"}</h1>
      <Section1 />
      <Section2 />
    </main>
  );
}

function Section1() {
  return (
    <section>
      <h2>Input Types</h2>
      <ul>
        {INPUT_TYPES.map((type) => (
          <li key={type}>
            <button>{`<input type="${type}">`}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Section2() {
  return (
    <section>
      <h2>Input Attributes</h2>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Applied To</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>checked</td>
            <td>radio buttons and checkboxes</td>
            <td>sets checked to true</td>
          </tr>
          <tr>
            <td>selected</td>
            <td>an {"<option>"} within the select tag</td>
            <td>selects option by default</td>
          </tr>
          <tr>
            <td>required</td>
            <td>inputs</td>
            <td>rejects an empty entry</td>
          </tr>
          <tr>
            <td>autofocus</td>
            <td>inputs (does not work reliably in React)</td>
            <td>focuses element on page load</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default App;
