import { useEffect, useState } from "react";

/**
 * クイズカードコンポーネント
 */
const QuizCard = (props) => {
    // Propsからデータを取り出す
    const {quiz, isLastQuestion, onClickAnswerButton} = props;
    // 現在選択している選択肢(初期値は0番目)
    const [selectValue, setSelectValue] = useState(0);

    // useEffect(第二引数の配列に含めた値が変わったら発火する)
    // ここではquiz(問題データ)が切り替わったら、選択肢を0番目を選んだ状態にしたいので使っている
    useEffect(() => {
        // 現在選択している選択肢を0番目にする
        setSelectValue(0);
    }, [quiz]);

    return (
        <div style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <p>問題タイトル：{quiz?.title}</p>
            <p>{quiz?.body}</p>
            <div>
                {quiz?.choices?.map?.((choice) => {
                    // 選択肢を描画する
                    return (
                        <>
                            <label>{choice.label}</label>
                            <input type="radio" name="aradio" value={choice.value} checked={selectValue == choice.value} onChange={(e) => setSelectValue(e.currentTarget.value)} />
                            <br />
                        </>
                    )
                })}
            </div>
            <button onClick={() => {
                onClickAnswerButton(selectValue);
            }}>
                {isLastQuestion ? '結果を表示' : '次の問題へ'}
            </button>
        </div>
    )
}

export default QuizCard;