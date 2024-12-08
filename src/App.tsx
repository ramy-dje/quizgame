import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { questions } from './data/questions';
import { QuizCard } from './components/QuizCard';
import { ProgressBar } from './components/ProgressBar';
import { ScoreDisplay } from './components/ScoreDisplay';
import logo from './imgs/sccLogo.png';
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setQuizComplete(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizComplete(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="flex items-center mb-8">

        <img src={logo} className="w-8 h-8 mr-2"/>
        <h1 className="text-3xl font-bold text-gray-800">SCC Culture Quiz</h1>
      </div>

      {!quizComplete ? (
        <>
          <ProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
          <QuizCard
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSelect={handleAnswerSelect}
            currentQuestion={currentQuestion}
            isAnswered={isAnswered}
            selectedAnswer={selectedAnswer}
            correctAnswer={questions[currentQuestion].correctAnswer}
          />
        </>
      ) : (
        <ScoreDisplay
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;