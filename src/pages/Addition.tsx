import React, { useState, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Form from "../components/customForm1";
import CustomProblem from "../components/customProblems";

const AdditionPage: React.FC<PageProps> = () => {
  const [digitVal, setDigitVal] = useState(0);
  const [currProb, setCurrProb] = useState(0);
  const [numProb, setNumProb] = useState(0);
  const [problems, setProblems] = useState({
    val1: [],
    val2: [],
    ans: [],
  });
  const [showButtons, setShowButtons] = useState(false);
  const [showAnswer, setShowAnswer]   = useState(false); 
  const [buttonText, setButtonText]   = useState("Show Answer");

  useEffect(() => {
    if (problems.val1.length > 0) {
      setShowButtons(true);
    }
  }, [problems]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Extracting values from the form
    const numDigits = parseInt(
      (document.getElementById("numberDigits") as HTMLInputElement).value,
      10
    );
    const numProblems = parseInt(
      (document.getElementById("numberProblems") as HTMLInputElement).value,
      10
    );

    // Set the values and show the buttons
    setDigitVal(numDigits);
    setNumProb(numProblems);

    const min = Math.pow(10, digitVal - 1);
    const max = Math.pow(10, digitVal);

    const generateProblemSet = () => {
      const tempVal1 = Array.from({ length: numProb }, () =>
        Math.floor(Math.random() * (max - min) + min)
      );
    
      const tempVal2 = tempVal1.map(val1 =>
        Math.floor(Math.random() * (val1 - min) + min)
      );
    
      const tempAns = tempVal1.map((val, index) => val + tempVal2[index]);
    
      return { tempVal1, tempVal2, tempAns };
    };
    

    const { tempVal1, tempVal2, tempAns } = generateProblemSet();

    setCurrProb(1);
    setProblems({
      ...problems,
      val1: tempVal1,
      val2: tempVal2,
      ans: tempAns,
    });

    console.log(problems);
  };

  return (
    <main className='p-5'>
    
    <div className="m-5 justify-center">
      <h1>Addition</h1>
      <h1>Pick Number of digits</h1>
    </div>
    

    {(showButtons === true) ? 
    <CustomProblem
    currProb={currProb}
    numProb={numProb}
    setCurrProb={setCurrProb}
    showAnswer={showAnswer}
    setShowAnswer={setShowAnswer}
    buttonText={buttonText}
    setButtonText={setButtonText}
    problems={problems} 
    />
    : <div></div>
              }

      <Form handleSubmit={handleSubmit}/>

  </main>
  )
}

export default AdditionPage

export const Head: HeadFC = () => <title>Addition Page</title>
