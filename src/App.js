
import Start from "./Pages/Start";
import {useState} from "react";
import CharactersItems from "./Pages/CharactersItems";

function App() {
  const [start, setStart] = useState(false)
    console.log(start)
  return (
      <div >
        {!start && <Start
            setStart={setStart}
        />}
          {start && <CharactersItems
              setStart={setStart}
          />}
      </div>

  );
}

export default App;
