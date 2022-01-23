/**
 * 問題データ
 * id 問題ID
 * title 問題タイトル
 * body 問題本文
 * correctAnswer 正解の選択肢のvalue
 */

export default [
    {
        id: 0,
        title: '問題1',
        body: '問題の本文(正解はB)',
        correctAnswer: 1,
        choices: [
            {
                label: '選択肢A',
                value: 0
            },
            {
                label: '選択肢B',
                value: 1,
            },
            {
                label: '選択肢C',
                value: 2,
            }
        ]
    },
    {
        id: 1,
        title: '問題2',
        body: '問題の本文(正解はC)',
        correctAnswer: 2,
        choices: [
            {
                label: '選択肢A',
                value: 0
            },
            {
                label: '選択肢B',
                value: 1,
            },
            {
                label: '選択肢C',
                value: 2,
            }
        ]
    },
    {
        id: 2,
        title: '問題3',
        body: '問題の本文(正解はA)',
        correctAnswer: 0,
        choices: [
            {
                label: '選択肢A',
                value: 0
            },
            {
                label: '選択肢B',
                value: 1,
            },
            {
                label: '選択肢C',
                value: 2,
            }
        ]
    },
    {
        id: 3,
        title: '問題4',
        body: '問題の本文(正解はC)',
        correctAnswer: 2,
        choices: [
            {
                label: '選択肢A',
                value: 0
            },
            {
                label: '選択肢B',
                value: 1,
            },
            {
                label: '選択肢C',
                value: 2,
            }
        ]
    },
    {
        id: 4,
        title: '問題5',
        body: '問題の本文(正解はA)',
        correctAnswer: 0,
        choices: [
            {
                label: '選択肢A',
                value: 0
            },
            {
                label: '選択肢B',
                value: 1,
            },
            {
                label: '選択肢C',
                value: 2,
            }
        ]
    }
]