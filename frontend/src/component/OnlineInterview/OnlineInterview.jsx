import React, { useState, useEffect, useRef } from 'react';
import './OnlineInterview.css';

const OnlineInterview = () => {
  const languages = ['JavaScript', 'Python', 'C++', 'Java'];
  const questions = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', topic: 'Array', company: 'Google',
      description: 'Find two numbers that add up to a target.',
      examples: [
        { input: '[2, 7, 11, 15], target = 9', output: '[0, 1]' },
        { input: '[3, 2, 4], target = 6', output: '[1, 2]' }
      ]
    },
    // Other questions here...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [code, setCode] = useState('// Start coding here...');
  const [isFocused, setIsFocused] = useState(false);
  const [time, setTime] = useState(900);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const timerRef = useRef(null);

  // Detect copy-paste events and block them
  const handleCopyPasteDetection = (e) => {
    e.preventDefault();
    alert('Copy-paste detected. This is not allowed.');
  };

  useEffect(() => {
    const textarea = document.querySelector('.code-editor');
    textarea.addEventListener('copy', handleCopyPasteDetection);
    textarea.addEventListener('paste', handleCopyPasteDetection);
    textarea.addEventListener('cut', handleCopyPasteDetection);

    return () => {
      textarea.removeEventListener('copy', handleCopyPasteDetection);
      textarea.removeEventListener('paste', handleCopyPasteDetection);
      textarea.removeEventListener('cut', handleCopyPasteDetection);
    };
  }, []);

  // Timer logic
  useEffect(() => {
    if (isRunning && time > 0) {
      timerRef.current = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timerRef.current);
    }
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleQuestionChange = (question) => {
    setCurrentQuestion(question);
    setCode('// Start coding here...');
    setIsFocused(false);
    setTime(900);
    setIsRunning(false);
  };

  const handleFocus = () => {
    if (!isFocused) {
      setCode('');
      setIsFocused(true);
    }
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(900);
    setIsRunning(false);
  };

  const handleSubmitSolution = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:3000/submit-solution', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          code,
          language: selectedLanguage,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert(data.result);  // Show Accepted or Wrong Output
      setCode('// Start coding here...'); // Reset code after submission
    } catch (error) {
      alert('Error submitting solution: ' + error.message);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="online-interview-container">
      <div className="question-list">
        <h2>Practice Questions</h2>
        <ul>
          {questions.map((question) => (
            <li
              key={question.id}
              className={`question-item ${currentQuestion.id === question.id ? 'active' : ''}`}
              onClick={() => handleQuestionChange(question)}
            >
              {question.title} ({question.difficulty})
            </li>
          ))}
        </ul>
      </div>

      <div className="coding-area">
        <h2>{currentQuestion.title}</h2>
        <p>{currentQuestion.description}</p>
        <div className="examples">
          <h3>Examples:</h3>
          <ul>
            {currentQuestion.examples.map((example, index) => (
              <li key={index}>
                <strong>Input:</strong> {example.input} <br />
                <strong>Output:</strong> {example.output}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="language-select">
          <label htmlFor="language">Choose Language:</label>
          <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map((lang, index) => (
              <option key={index} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        
        <textarea
          className="code-editor"
          value={code}
          onFocus={handleFocus}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="interview-footer">
          <button className="submit-btn" onClick={handleSubmitSolution} disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit Solution'}
          </button>
          <span className="timer">Time Left: {formatTime(time)}</span>
          <div className="timer-controls">
            <button onClick={startTimer} disabled={isRunning}>Start</button>
            <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineInterview;
