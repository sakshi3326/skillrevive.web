import React, { useState, useEffect } from "react";
import "./chatpopup.css";

const ChatPopup = () => {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [inputValue, setInputValue] = useState(""); // State to store user input

  // Define a list of questions and answers
  const questions = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "Where are you from?", answer: "I am from the internet." },
    // Add more questions and answers as needed
  ];

  // Function to handle user input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle sending message
  const sendMessage = () => {
    // Add user message to chat
    setMessages([...messages, { text: "User: " + inputValue, sender: "user" }]);

    // Analyze user input (question number) and generate response
    const response = analyzeUserInput(inputValue);
    setMessages([...messages, { text: "Chatbot: " + response, sender: "bot" }]);

    // Clear input field
    setInputValue("");
  };

  // Function to analyze user input (question number) and generate response
  const analyzeUserInput = (input) => {
    const questionNumber = parseInt(input);
    if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > questions.length) {
      return "Please enter a valid question number.";
    }
    const selectedQuestion = questions[questionNumber - 1];
    return selectedQuestion.answer;
  };

  // Automatically send initial message from bot when component mounts
  useEffect(() => {
    setMessages([{ text: "Chatbot: Please select a question number to get the answer.", sender: "bot" }]);
  }, []);

  return (
    <div className="chat-popup">
      <div className="chat-popup-messages">
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <div key={index} className={`chat-popup-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-popup-input">
        <input
          type="text"
          placeholder="Enter question number..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div className="question-list">
        <h3>Question List:</h3>
        <ul>
          {questions.map((item, index) => (
            <li key={index}>{`${index + 1}. ${item.question}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatPopup;
