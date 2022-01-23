import { useMemo } from "react";
import QUIZ_LIST from "../mock/QUIZ_LIST";

/**
 * クイズ結果
 */
const QuizResult = (props) => {
    const {answers} = props;
    
    // 正解と不正解の数を取得する
    const {correct, unCorrect} = useMemo(() => {
        return answers?.reduce?.((acc, cur, index) => {
            // 正解
            if(QUIZ_LIST[index].correctAnswer === cur) {
                acc = {
                    correct: acc.correct + 1,
                    unCorrect: acc.unCorrect
                }
            } else {
                acc = {
                    correct: acc.correct,
                    unCorrect: acc.unCorrect + 1
                }
            }
            return acc;
        }, {
            correct : 0,
            unCorrect: 0
        })
    }, [answers]);

    return (
        <div>
            <p>正解：{correct}</p>
            <p>不正解：{unCorrect}</p>
        </div>
    )
}

export default QuizResult;