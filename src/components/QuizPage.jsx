import React, { useState } from 'react';
import { Award, RotateCw, CheckCircle, XCircle, Lightbulb, ArrowRight } from 'lucide-react';
import Button from './Button';

const quizQuestions = [
  {
    question: "Pada tahun berapa Nabi Muhammad ﷺ lahir?",
    options: ["571 M", "610 M", "622 M", "632 M"],
    correctAnswer: "571 M",
    explanation: "Nabi Muhammad ﷺ lahir pada Tahun Gajah, yang bertepatan dengan tahun 571 Masehi."
  },
  {
    question: "Siapakah nama ibu Nabi Muhammad ﷺ?",
    options: ["Khadijah", "Fatimah", "Aminah", "Aisyah"],
    correctAnswer: "Aminah",
    explanation: "Aminah binti Wahab adalah ibunda dari Nabi Muhammad ﷺ. Beliau wafat saat Nabi berusia 6 tahun."
  },
  {
    question: "Perang besar pertama dalam sejarah Islam adalah...",
    options: ["Perang Uhud", "Perang Khandaq", "Perang Badar", "Perang Tabuk"],
    correctAnswer: "Perang Badar",
    explanation: "Perang Badar terjadi pada tahun 2 Hijriah dan merupakan kemenangan besar pertama bagi kaum Muslimin."
  },
  {
    question: "Siapakah sahabat yang memberikan ide untuk menggali parit dalam Perang Khandaq?",
    options: ["Umar bin Khattab", "Ali bin Abi Thalib", "Abu Bakar As-Siddiq", "Salman Al-Farisi"],
    correctAnswer: "Salman Al-Farisi",
    explanation: "Salman Al-Farisi, seorang sahabat dari Persia, mengusulkan strategi pembuatan parit (khandaq) yang belum pernah digunakan di Jazirah Arab sebelumnya."
  },
  {
    question: "Di kota manakah Nabi Muhammad ﷺ wafat?",
    options: ["Makkah", "Madinah", "Thaif", "Yerusalem"],
    correctAnswer: "Madinah",
    explanation: "Nabi Muhammad ﷺ wafat di Madinah pada tahun 11 Hijriah (632 M) dan dimakamkan di kompleks Masjid Nabawi."
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (option) => {
    if (selectedAnswer) return; // Mencegah pemilihan ulang

    setSelectedAnswer(option);
    const isAnswerCorrect = option === quizQuestions[currentQuestionIndex].correctAnswer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <div className="py-12 md:py-20 px-4 container mx-auto bg-[#E5E7EB] min-h-screen flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#A67C52] mb-4">
          Kuis Islami
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Uji pengetahuanmu tentang sejarah Islam!
        </p>
      </div>

      <div
        className="w-full max-w-2xl bg-[#E5E7EB] p-6 md:p-8 rounded-2xl"
        style={{ boxShadow: '12px 12px 24px #bebebe, -12px -12px 24px #ffffff' }}
      >
        {showResult ? (
          <div className="text-center">
            <Award className="w-24 h-24 text-[#A67C52] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#A67C52] mb-4">Kuis Selesai!</h2>
            <p className="text-xl text-gray-700 mb-6">
              Skor akhir kamu: <span className="font-bold text-2xl text-[#A67C52]">{score}</span> dari {quizQuestions.length}
            </p>
            <Button
              onClick={restartQuiz}
              className="bg-[#A67C52] hover:bg-[#936A45] text-white px-8 py-4 rounded-2xl text-lg transition-all duration-300"
              style={{ boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff' }}
            >
              <RotateCw className="w-5 h-5 mr-2" />
              Coba Lagi
            </Button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6 text-center">
              <p className="text-lg text-gray-700">Pertanyaan {currentQuestionIndex + 1}/{quizQuestions.length}</p>
              <p className="text-lg text-[#A67C52] font-semibold">Skor: {score}</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#A67C52] mt-2 text-center">
              {quizQuestions[currentQuestionIndex].question}
            </h2>

            <div className="space-y-4 mt-6">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                let buttonClass = 'bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#A67C52]';
                if (isSelected) {
                  buttonClass = isCorrect ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800';
                }

                return (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-lg p-4 justify-start ${buttonClass}`}
                    style={{ boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff' }}
                  >
                    {isSelected && (isCorrect ? <CheckCircle className="mr-3"/> : <XCircle className="mr-3"/>)}
                    {option}
                  </Button>
                );
              })}
            </div>

            {selectedAnswer && (
              <div className="mt-6">
                <div
                  className="p-4 bg-[#F3F4F6] rounded-lg transition-opacity duration-500"
                  style={{ boxShadow: 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff' }}
                >
                  <div className="flex items-center font-bold text-[#A67C52]">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    <h4>Penjelasan</h4>
                  </div>
                  <p className="text-gray-700 mt-2">
                    {quizQuestions[currentQuestionIndex].explanation}
                  </p>
                </div>
                <div className="text-right mt-6">
                  <Button
                    onClick={handleNext}
                    className="bg-[#A67C52] hover:bg-[#936A45] text-white px-6 py-3 rounded-xl text-lg"
                    style={{ boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff' }}
                  >
                    {currentQuestionIndex < quizQuestions.length - 1 ? 'Berikutnya' : 'Lihat Hasil'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
