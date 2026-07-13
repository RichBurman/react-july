const owl = {
  title: "Excellent Owl",
  src: "https://content.codecademy.com/courses/React/react_photo-owl.jpg",
};

//Define function component here:
function Owl() {
  return (
    <div>
      <h1>{owl.title}</h1>
      <img src = {owl.src} alt = {owl.title} />
    </div>
  );
}

export default Owl;


// Putting logic in a function component

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg",
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg",
  },
];

// New function component starts here:
function Friend() {
  const friend = friends[0];
  return (
    <div>
      <h1>{friend.title}</h1>
      <img src= {friend.src } />
    </div>
  );
}

export default Friend;


// Conditional Rendering

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan() {
  if (fiftyFifty) {
    return <h1>Tonight I'm going out WOOO</h1>
  } else {
    return <h1>Tonight I'm going to bed WOOO</h1>
  }
}

export default TonightsPlan;