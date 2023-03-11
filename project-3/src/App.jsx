import {
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Button,
  Text,
  keyframes,
} from "@chakra-ui/react";
import FrontCard from "../components/FrontCard";
import { useState } from "react";
import BackCard from "../components/BackCard";
import data from "../Quiz/data";
import "./App.css";
import UserInput from '../components/UserInput';


const rotate180 = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(180deg);
}
`;
const App = () => {
  const [count, setCount] = useState(0);
  const [quiz, setQuiz] = useState(data[0].quiz);
  const [ans, setAnswer] = useState(data[0].answer);
  const [toggle, setToggle] = useState(true);
  const [img, setImg] = useState(data[0].img);

  const [isRotated, setIsRotated] = useState(false);

  const handleComponentClick = () => {
    setIsRotated(!isRotated);
  };

  const increment = (count) => {
    setCount((count + 1) % data.length);
    setQuiz(data[count].quiz);
    setAnswer(data[count].answer);
    setImg(data[count].img);
    setToggle(true);
  };
  const decrement = (count) => {
    if (count > 0) {
      setCount(count - 1);
      setQuiz(data[count - 1].quiz);
      setAnswer(data[count - 1].answer);
      setImg(data[count - 1].img);
      setToggle(true);
    }
  };
  const getToggle = () => {
    setToggle(!toggle);
  };

  const handleCorrectAnswer = () => {
    alert("Correct answer!");
    // Do whatever you want to do when the user inputs the correct answer
  };
  
  const handleWrongAnswer = () => {
    alert("Wrong answer. Try again!");
    // Do whatever you want to do when the user inputs the wrong answer
  };
  

  return (
    <div className="bg-color">
    <ChakraProvider>
       <Heading className="main-heading"  fontSize="6xl">How much do you know about doggos?</Heading>
        <Text className="text-heading" fontSize="3xl">
          Doggos are really cute! But how much do you know about dogs? Test it out with this flash game!
        </Text>
        <Text className="card-heading"  fontSize="2xl">Number of cards: {data.length}</Text>
      <Flex
        width='100vw'
        h='80vh'
        direction='column'
        alignItems="flex-start"
        justifyContent='center'
        paddingLeft='5rem'
        gap='4'
      >
       

        <div>
          <div onClick={getToggle}>
            {toggle ? (
              <FrontCard
                data={quiz}
                image={img}
                handleComponentClick={handleComponentClick}
              />
            ) : (
              <BackCard
                data={ans}
                handleComponentClick={handleComponentClick}
              />
            )}
          </div>

        </div>
        <HStack>
          <div className="button-group">
          <Button   marginRight="1rem"         
          onClick={() => decrement(count)}>previous quiz</Button>
          <Button onClick={() => increment(count)}>Next quiz</Button>
          </div>
        </HStack>
        <div className="user-input">
        
          <UserInput
              
              correctAnswer={ans}
              onCorrectAnswer={handleCorrectAnswer}
              onWrongAnswer={handleWrongAnswer}
          />


        </div>
      
      </Flex>
    
    </ChakraProvider>
    </div>
  );
};

export default App;
