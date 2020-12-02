import logo from "./logo.svg";
import "./App.css";
import users from "./allUsers";
import React from "react";

console.log("users:", users.length);

// ["UK", "Spain", "Sweeden", "Portugal"]

class App extends React.Component {
  render() {
    const usersFromGermany = users.filter((user) => {
      return user.from === "Germany";
    });

    return (
      <div className="App">
        <header className="App-header">
          {/* {{#each users}} */}
          {/* <h1>Username: {users[0].username}</h1> [
          <h1>Username: {users[0].username}</h1>{{/each}} */}
          {users.map((user) => {
            return <Usercard key={user.username} user={user} />;
          })}

          <h4>All the users from Germany</h4>
          {usersFromGermany.map((user) => {
            return <Usercard key={user.username} user={user} />;
          })}
        </header>
      </div>
    );
  }
}
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* {{#each users}} */}
//         {/* <h1>Username: {users[0].username}</h1> [
//         <h1>Username: {users[0].username}</h1>{{/each}} */}
//         {users.map((user) => {
//           return <Usercard key={user.username} user={user} />;
//         })}

//         <h4>All the users from Germany</h4>
//         {usersFromGermany.map((user) => {
//           return <Usercard key={user.username} user={user} />;
//         })}
//       </header>
//     </div>
//   );
// }

function Usercard(props) {
  return (
    <div>
      <h1>{props.user.username}</h1>
    </div>
  );
}

export default App;
