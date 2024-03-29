import "./index.css";
import {useEffect, useMemo, useState } from "react";
import Timer from "./Timer";
import Trivia from "./Trivia";
import data from "./data.js";
import { useNavigate } from "react-router-dom";
import {  updateScore, generateLincence } from "../../../../services/operations/profileAPI"
import { useDispatch, useSelector } from "react-redux"

export default function Exam() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState(0);
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector(
    (state) => state.profile
)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, about : "Question"  },
        { id: 2, about : "Question"  },
        { id: 3, about : "Question" },
        { id: 4, about : "Question" },
        { id: 5, about : "Question" },
        { id: 6, about : "Question"  },
        { id: 7, about : "Question" },
        { id: 8,  about : "Question" },
        { id: 9,  about : "Question" },
        { id: 10, about : "Question"  },
       
      ].reverse(),
    []
  );
  useEffect(() => {
    questionNumber > 1 &&
      <></>
  }, [questionNumber, moneyPyramid]);
  

  const handlesubmit = async (data) => {
    // console.log("Form Data - ", data)
    try {
        const body = {score : data} ;
     await dispatch(updateScore(token, body));
      if (user?.score > 7) {
      await  dispatch(generateLincence(token));
    }
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <div className="app rounded-md border-[1px] border-richblack-700 bg-richblack-800">
      <button className="flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900" onClick={()=>{
        navigate("/dashboard/my-profile");
      }}>Cancel Exam</button>
         
        
          <div className="main ">
            {timeOut ? (
              <div className="endText  font-bold">Your score : {earned}
              <button className="flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900  " onClick={()=>{handlesubmit(earned)}}> Save Your Responce and Go back To profile</button>
              </div>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      questionNumber={questionNumber}
                      setTimeOut = {setTimeOut}
                      setQuestionNumber={setQuestionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setEarned={setEarned}
                    setTimeOut = {setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList px-5 py-5">
              {moneyPyramid.map((m,index) => (
                <li
                  key={index}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem border bg-yellow-50 bg-transparent flex flex-row justify-between items-center "
                      : "moneyListItem flex flex-row justify-between items-center"
                  }
                >
                 <span className="  moneyListItemAmount m-2">{m.about}</span>
                  <span className="moneyListItemNumber">{m.id}</span>
                  
                </li>
              ))}
            </ul>
          </div>
        
      
    </div>
  );
}



