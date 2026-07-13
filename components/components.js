// Using and rendering components

// index.js
import { createRoot } from 'react-dom/client';
import MyComponent from './App';

createRoot(document.getElementById('app')).render(<MyComponent />);

//app.js

function MyComponent() {
  return <h1>Hello world</h1>;
}

export default MyComponent;


//index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <main id="app">
  </main>
	<script src="https://static-assets.codecademy.com/react-19-course-bundle.min.js"></script>
  <script src="/index.compiled.js"></script>
</body>
</html>
