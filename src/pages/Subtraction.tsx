import React, { useState, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Button from "./../components/customButton";
import Form from "../components/customForm1";

const SubtractionPage: React.FC<PageProps> = () => {
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
    
      const tempAns = tempVal1.map((val, index) => val - tempVal2[index]);
    
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
      <h1>Subtraction</h1>
      <h1>Pick Number of digits</h1>
    </div>
    

    {(showButtons === true) ? 

    <div>
        <div className="w-full mx-auto max-w-sm flex justify-between mb-6">
             <Button 
                border="none"
                color="red"
                height = "50px"
                onClick={() => {
                    if (currProb > 1) {
                        setCurrProb(currProb-1); 
                    }
                }}
                radius = "5%"
                width = "50px"
                children = {<svg className="-mr-1 h-full w-full text-white rotate-90 hover:bg-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>}
            />   
            <div className="p-4">
                {currProb} / {numProb}
            </div>
          
            <Button 
                border="none"
                color="green"
                height = "50px"
                onClick={() => {
                    if (currProb < numProb) {
                        setCurrProb(currProb+1); 
                    }
                }}
                radius = "5%"
                width = "50px"
                children = {<svg className="-mr-1 h-full w-full text-white -rotate-90 hover:bg-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>}  
            />
        </div>
        <div className="p-5 w-full mx-auto max-w-sm grid grid-col-1 mb-6 bg-gray-100">
          <div className="bg-gray-200 m-5 p-2 flex justify-center">
            {problems.val1[currProb-1]} - {problems.val2[currProb-1]}
          </div>
          <div className="flex justify-center">
          <Button
            border="none"
            color="#BBDBDE"
            height = "50px"
            onClick={() => {
              setShowAnswer(!showAnswer);
              (showAnswer) ? setButtonText("Show Answer") : setButtonText("Hide Answer"); 
            }}
            radius = "5%"
            width = "120px"
            children = {buttonText}
          />
          </div>
          {
            (showAnswer === true) ? 
            <div className="bg-gray-200 m-5 p-2 flex justify-center">
              {problems.ans[currProb-1]}
            </div> :
            <div></div>
          }
          
        </div>
          
    </div>
    : <div></div>
              }

      <Form handleSubmit={handleSubmit}/>

      


  </main>
  )
}

export default SubtractionPage

export const Head: HeadFC = () => <title>Subtraction Page</title>
