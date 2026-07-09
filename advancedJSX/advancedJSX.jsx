// className

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const myDiv = <div className="big">I AM A BIG DIV</div>;

root.render(myDiv);

// Self-closing tags. You have to close self-closing tags in JSX, even if they are empty. For example, <img> and <br> tags must be written as <img /> and <br /> in JSX.

const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png" />
    <article>
      My name is John Smith.
      <br />
      I am a software developer.
      <br />
      I specialize in creating React applications.
    </article>
  </div>
);

// Curly Braces in JSX


import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>{2 + 3}</h1>)

// Will result in the following being rendered to the screen: <h1>5</h1>
// Whereas without the curly braces, it would render <h1>2 + 3</h1> to the screen.
