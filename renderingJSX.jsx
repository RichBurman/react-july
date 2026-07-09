import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

// Passing a variable to render()

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const myList = (
  <ul>
    <li>Test 1</li>
    <li>Test 2</li>
    <li>Test 3</li>
  </ul>
);

root.render(myList);

// The virtual DOM
// One special thing about a React root’s render() method is that it only updates DOM elements that have changed.
// That means that if you render the exact same thing twice in a row, the second render will do nothing:

const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
root.render(hello, document.getElementById('app'));

// This won't do anything at all:
root.render(hello, document.getElementById('app'));
