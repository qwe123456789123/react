import Button from "./Button";
import Up from "./Up";
import Counter from "./Counter";
import Ably from "./Ably";

function App() {
  return (
    <div>
      <Button></Button>
      <Up></Up>
      <Counter></Counter>
      <Ably name={"이름"} price={20000000000}></Ably>
    </div>
  );
}

export default App;
