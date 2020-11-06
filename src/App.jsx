import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Boxes from "./components/Boxes";

function App() {
  const [color, setColor] = useState("");
  const [score, setScore] = useState(0);
  const [boxes, setBoxes] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]);

  const randomId = () => {
    const randomBox = Math.floor(Math.random() * boxes.length + 1);
    return randomBox;
  };

  const addBoxes = () => {
    const boxList = {
      id: 5,
    };
    let boxCount = 3;
    for (let i = 1; i <= boxCount ** 2; i++) {
      setBoxes(boxList);
    }

    boxCount++;
  };

  useEffect(() => {
    setColor(randomRgb());
  }, [score]);

  return (
    <>
      <div className={styles.app}>
        <Boxes
          boxes={boxes}
          colors={color}
          setScore={setScore}
          score={score}
          randomId={randomId()}
          addBoxes={addBoxes}
        />
      </div>
      <p>score : {score}</p>
    </>
  );
}
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export default App;
