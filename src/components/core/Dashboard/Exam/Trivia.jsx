import { useEffect, useState } from "react";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setEarned,
  setTimeOut,
  
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

 

  useEffect(() => {
    questionNumber === 11 ? (setTimeOut(true))  : (setQuestion(data[questionNumber - 1]))
    
  }, [data, questionNumber,setTimeOut]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
   
      delay(1000, () => {
      if (a.correct) {
       
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setEarned((prev)=>prev + 1);
          setSelectedAnswer(null);

        });
      
      } else {
       
        delay(1000, () => {
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
        });
       
      }
   
      })
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a,index) => (
          <div
          key = {index}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
