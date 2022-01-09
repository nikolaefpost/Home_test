
import Start from "./Pages/Start";
import {useState} from "react";

function App() {
  const [start, setStart] = useState(false)
    console.log(start)
  return (
      <>
        {!start && <Start
            setStart={setStart}
        />}
      </>

  );
}

export default App;
