function Picture() {
  return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

function Profile() {
  return (
    <>
      <Picture />
      <h1>Name: Octavia</h1>
      <h2>Species: Octopus</h2>
       <h2>Class: Cephalopoda</h2>
    </>
  )
}

export default Profile;

// Apply a component in a render function

import NavBar from './NavBar';
function ProfilePage() {
  return (
    <div>
        <NavBar />
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
    </div>
  );
}

export default ProfilePage;
