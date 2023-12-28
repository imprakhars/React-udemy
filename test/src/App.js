import TabButton1 from "./components/TabButton1";

function App(){
  function handleClick(){
    console.log("Hello World -- selected");
  }

  return(
    <TabButton1 onSelect = {handleClick}>Components</TabButton1>
  );
}

export default App;