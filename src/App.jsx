import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    setColor(randomRgb());
  }, [score]);

  const nextId = useRef(5);

  const createBox = () => {
    const box = {
      id: nextId.current,
    };
    setBoxes([...boxes, box]);
    nextId.current += 1;
  };

  return (
    <>
      <div className={styles.app}>
        <Boxes
          boxes={boxes}
          colors={color}
          setScore={setScore}
          score={score}
          randomId={randomId()}
          createBox={createBox}
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
