// customProblem.tsx
import React from 'react';
import Button from './customButton';

const CustomProblem = ({
    currProb,
    numProb,
    setCurrProb,
    showAnswer,
    setShowAnswer,
    buttonText,
    setButtonText,
    problems,
 }) => {
  return (
    <div>
    <div className="w-full mx-auto max-w-sm flex justify-between mb-6">
      <Button
        border="none"
        color="red"
        height="50px"
        onClick={() => {
          if (currProb > 1) {
            setCurrProb(currProb - 1);
          }
        }}
        radius="5%"
        width="50px"
      >
        <svg
          className="-mr-1 h-full w-full text-white rotate-90 hover:bg-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <div className="p-4">
        {currProb} / {numProb}
      </div>
      <Button
        border="none"
        color="green"
        height="50px"
        onClick={() => {
          if (currProb < numProb) {
            setCurrProb(currProb + 1);
          }
        }}
        radius="5%"
        width="50px"
      >
        <svg
          className="-mr-1 h-full w-full text-white -rotate-90 hover:bg-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </div>
    <div>
        
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
    </div>
  );
};

export default CustomProblem;
