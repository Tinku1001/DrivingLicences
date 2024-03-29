// import { useEffect, useState } from "react";

// export default function Timer({  questionNumber , setQuestionNumber }) {
//   const [timer, setTimer] = useState(15);

//   useEffect(() => {
//     if (timer === 0){
//         return (setQuestionNumber(questionNumber+1))
//     };
//     const interval = setInterval(() => {
//       setTimer(Timer-1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [timer, questionNumber]);

//   useEffect(() => {
//     setTimer(30);
//   }, [questionNumber]);
//   return timer;
// }

import { useEffect, useState } from "react";

export default function Timer({ setTimeOut, questionNumber , setQuestionNumber }) {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (timer === 0){
                return (setQuestionNumber(questionNumber+1))
            };
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(15);
  }, [questionNumber]);
  return timer;
}

