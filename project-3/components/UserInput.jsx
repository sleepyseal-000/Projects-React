import { border } from "@chakra-ui/react";
import { useState } from "react";

const UserInput = ({ correctAnswer, onCorrectAnswer, onWrongAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userAnswer} onChange={handleChange}  style={{marginRight: "1rem"}}/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInput;
