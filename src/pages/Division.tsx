import React, { useState, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import CustomProblem from "../components/customProblems";
import Form from "./../components/customForm2";

const DivisionPage: React.FC<PageProps> = () => {
  const [digitVal1, setDigitVal1] = useState(0);
  const [digitVal2, setDigitVal2] = useState(0);
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
    const numDigits1 = parseInt(
      (document.getElementById("numberDigits1") as HTMLInputElement).value,
      10
    );
    const numDigits2 = parseInt(
      (document.getElementById("numberDigits2") as HTMLInputElement).value,
      10
    );
    const numProblems = parseInt(
      (document.getElementById("numberProblems") as HTMLInputElement).value,
      10
    );

    // Set the values and show the buttons
    setDigitVal1(numDigits1);
    setDigitVal2(numDigits2);
    setNumProb(numProblems);

    const min1 = Math.pow(10, digitVal1 - 1);
    const max1 = Math.pow(10, digitVal1);
    const min2 = Math.pow(10, digitVal2 - 1);
    const max2 = Math.pow(10, digitVal2);

    const generateProblemSet = () => {
      const tempVal1 = Array.from({ length: numProb }, () =>
        Math.floor(Math.random() * (max1 - min1) + min1)
      );
    
      const tempVal2 = Array.from({ length: numProb }, () =>
        Math.floor(Math.random() * (max2 - min2) + min2)
      );
    
      const tempAns = tempVal1.map((val, index) => val / tempVal2[index]);
    
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
      <h1>Division</h1>
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

export default DivisionPage

export const Head: HeadFC = () => <title>Division Page</title>
