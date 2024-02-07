// formUtils.ts
import { useState, useEffect, useCallback } from 'react';

interface ProblemType {
  val1: number[];
  val2: number[];
  ans: number[];
}

export const useFormSubmit = () => {
  const [digitVal, setDigitVal] = useState<number>(0);
  const [currProb, setCurrProb] = useState<number>(0);
  const [numProb, setNumProb] = useState<number>(0);
  const [problems, setProblems] = useState<ProblemType>({
    val1: [],
    val2: [],
    ans: [],
  });
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Show Answer');

  useEffect(() => {
    if (problems.val1.length > 0) {
      setShowButtons(true);
    }
  }, [problems]);

  const generateProblemSet = useCallback(() => {
    const min = Math.pow(10, digitVal - 1);
    const max = Math.pow(10, digitVal);

    const tempVal1 = Array.from({ length: numProb }, () =>
      Math.floor(Math.random() * (max - min) + min)
    );

    const tempVal2 = Array.from({ length: numProb }, () =>
      Math.floor(Math.random() * (max - min) + min)
    );

    const tempAns = tempVal1.map((val, index) => val + tempVal2[index]);

    return { tempVal1, tempVal2, tempAns };
  }, [digitVal, numProb]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Extracting values from the form
    const numDigits = parseInt((document.getElementById('numberDigits') as HTMLInputElement).value, 10);
    const numProblems = parseInt((document.getElementById('numberProblems') as HTMLInputElement).value, 10);
    setDigitVal(numDigits);
    setNumProb(numProblems);

    const { tempVal1, tempVal2, tempAns } = generateProblemSet();

    setCurrProb(1);
    setProblems({
      val1: tempVal1,
      val2: tempVal2,
      ans: tempAns,
    });
    console.log(problems);
  };

  return {
    handleSubmit,
    digitVal,
    numProb,
    currProb,
    problems,
    showButtons,
    setShowButtons,
    showAnswer,
    setShowAnswer,
    buttonText,
    setButtonText,
  };
};
