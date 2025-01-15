// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
import { Greet } from "./components/Greet";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import "./App.css";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   { first: "Bruce", last: "Wayne" },
  //   { first: "Clark", last: "Kent" },
  //   { first: "Princess", last: "Diana" },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Vishwas" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}

      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Vishwas" isLoggedIn={true} />
    </div>
  );
}

export default App;
