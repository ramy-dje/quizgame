import React from 'react';
import { Trophy } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function ScoreDisplay({ score, totalQuestions, onRestart }: ScoreDisplayProps) {
  const percentage = (score / totalQuestions) * 100;
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
      <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
      <p className="text-xl mb-6">
        Your score: <span className="font-bold text-blue-600">{score}</span> out of{' '}
        {totalQuestions}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-gray-600 mb-8">
        {percentage === 100
          ? '🎉 Perfect score! You\'re a tech genius!'
          : percentage >= 80
          ? '🌟 Great job! You really know your stuff!'
          : percentage >= 60
          ? '👍 Good effort! Keep learning!'
          : '📚 Keep studying and try again!'}
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}