const h1 = <h1>Hello world</h1>;

// JSX Elements and their surroundings

const navBar = <nav>I am a nav bar</nav>;

const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

const myArticle = <article></article>;

// JSX elements can have atributes, just like how HTML elements can. 
const p1 = <p id='large'>foo</p>;
const p2 = <p id='small'>bar</p>;

// Nested JSX

const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);
