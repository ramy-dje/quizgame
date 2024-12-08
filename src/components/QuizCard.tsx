import React from 'react';
import { motion } from 'framer-motion';

interface QuizCardProps {
  question: string;
  options: string[];
  onSelect: (index: number) => void;
  currentQuestion: number;
  isAnswered: boolean;
  selectedAnswer: number | null;
  correctAnswer: number;
}

export function QuizCard({
  question,
  options,
  onSelect,
  currentQuestion,
  isAnswered,
  selectedAnswer,
  correctAnswer,
}: QuizCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full"
    >
      <div className="mb-6">
        <span className="text-sm text-gray-500 mb-2 block">
          Question {currentQuestion + 1} of 10
        </span>
        <h2 className="text-2xl font-bold text-gray-800">{question}</h2>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && onSelect(index)}
            disabled={isAnswered}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              isAnswered
                ? index === correctAnswer
                  ? 'bg-green-100 border-green-500 text-green-700'
                  : index === selectedAnswer
                  ? 'bg-red-100 border-red-500 text-red-700'
                  : 'bg-gray-50 text-gray-500'
                : 'hover:bg-blue-50 hover:border-blue-500 bg-gray-50'
            } border-2 ${
              !isAnswered && 'hover:shadow-md cursor-pointer'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}