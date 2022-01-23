import logo from './logo.svg';
import './App.css';
import { useCallback, useMemo, useState } from 'react';
import QUIZ_LIST from './mock/QUIZ_LIST';
import QuizCard from './components/QuizCard';
import QuizResult from './components/QuizResult';

const App = () => {
  // 現在表示しているクイズデータ(初期値は0番目の問題)
  const [currentQuiz, setCurrentQuiz] = useState(QUIZ_LIST[0]);

  // 確定した回答データ(初期値は空配列)
  const [answers, setAnswers] = useState([]);

  // 今選んでいる問題が最後の問題かどうかのフラグ
  const isLastQuestion = useMemo(() => {
    const LAST_QUIZ = QUIZ_LIST[QUIZ_LIST.length - 1];
    return currentQuiz.id === LAST_QUIZ.id
  }, [currentQuiz]);

  // すべての問題に回答済みかどうか
  const [isFinished, setIsFinished] = useState(false);

  // 「回答」ボタンを押した時の処理
  const onClickAnswerButton = useCallback((value) => {
    // 回答データに回答を入れる
    setAnswers((currentAnsers) => [...currentAnsers, value]);

    // 次の問題が存在するかチェックする
    const currentQuizIndex = QUIZ_LIST.findIndex((q) => q.id === currentQuiz.id);

    // 最後の問題でない場合は現在表示しているクイズデータを次のものに置き換える
    if(currentQuizIndex + 1 !== QUIZ_LIST.length) {
      setCurrentQuiz(QUIZ_LIST[currentQuizIndex+1]);
    }else {
      // 最後の問題ならフラグを立てる
      setIsFinished(true);
    }

  },[currentQuiz, answers]);

  return (
    <div className="App">
      {isFinished? (
        <QuizResult answers={answers} />
      ) : (
        <QuizCard 
          quiz={currentQuiz} 
          isLastQuestion={isLastQuestion} 
          onClickAnswerButton={onClickAnswerButton} 
        />
      )}
    </div>
  );
}

export default App;
