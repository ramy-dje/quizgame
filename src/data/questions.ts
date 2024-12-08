interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hybrid Text Making Language",
      "Hyper Transfer Markup Logic"
    ],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Which company created JavaScript?",
    options: ["Microsoft", "Netscape", "Apple", "IBM"],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "What year was the first iPhone released?",
    options: ["2005", "2006", "2007", "2008"],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Color and Style Sheets"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 5,
    question: "Which protocol is used to secure web traffic?",
    options: ["FTP", "HTTP", "HTTPS", "SMTP"],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 6,
    question: "Who is considered the father of modern computer science?",
    options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 7,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 8,
    question: "Which of these is not a JavaScript data type?",
    options: ["undefined", "boolean", "float", "symbol"],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 9,
    question: "What is the main purpose of a REST API?",
    options: [
      "To style web pages",
      "To handle server-side logic",
      "To provide a standardized way for systems to communicate",
      "To manage database connections"
    ],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 10,
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP is connection-oriented, UDP is connectionless",
      "TCP is faster, UDP is slower",
      "TCP is for web browsing only, UDP is for email only",
      "TCP is newer, UDP is older"
    ],
    correctAnswer: 0,
    difficulty: 'hard'
  }
];