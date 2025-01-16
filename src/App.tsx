// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
// import { Greet } from "./components/Greet";
// import { Status } from "./components/Status";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Button } from "./components/Button";
// import { Input } from "./components/Input";
// import { Container } from "./components/Container";
// import { Box } from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
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

      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Vishwas" isLoggedIn={true} /> */}

      {/* <Button
        handleClick={(event, id) => {
          console.log("Button click", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
