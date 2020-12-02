import logo from "./logo.svg";
import "./App.css";
import users from "./allUsers";
import React from "react";

console.log("users:", users.length);

// ["UK", "Spain", "Sweeden", "Portugal"]

// const countries = users.map((user) => user.from)
// const filtered = countries.filter((el, i) => countries.indexOf(el) === i)

// function expects(arg) {}

// const onClick = () => {
//   return expects("arg");
// }

const uniqueCountries = [...new Set(users.map((e) => e.from))];

class App extends React.Component {
  state = {
    selected: "",
  };

  selectNewCountry = (selection) => {
    this.setState({
      selected: selection,
    });
  };

  consoleHi = () => {
    console.log("Hi");
  };

  render() {
    const filteredUsers = users.filter((user) =>
      user.from.includes(this.state.selected)
    );

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={() => this.selectNewCountry("")}>
              All countries
            </button>
            {uniqueCountries.map((el) => (
              <button onClick={() => this.selectNewCountry(el)} key={el}>
                {el}
              </button>
            ))}
          </div>
          <div>
            {filteredUsers.map((user) =>
              user.age >= 16 ? (
                <Usercard key={user.catchPhrase} user={user} />
              ) : (
                <h1 style={{ color: "red", fontSize: "50px" }}>
                  {user.username} is a minor. Shoo, leave
                </h1>
              )
            )}
          </div>
        </header>
      </div>
    );
  }
}

function Usercard(props) {
  return (
    <div>
      <h1>
        I am {props.user.username}{" "}
        {props.user.from === "Portugal" && "I am Portuguese"}
      </h1>
      <h4>And I can{props.user.age >= 16 ? "" : "'t"} drive a car</h4>
    </div>
  );
}

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

export default App;
