let score=0;
function showScore(){
    const totalscore=document.getElementById("score-message");

    switch(score){
        case 3:
            totalscore.innerHTML=score+"点：満点！おめでとう！";
            break;
        case 2:
            totalscore.innerHTML=score+"点：もう少し！";
            break;
        case 1:
            totalscore.innerHTML=score+"点：まあまあ";
            break;
        case 0:
            totalscore.innerHTML=score+"点：残念…";
            break;
        /*default:
            totalscore.innerHTML="もう一度読み込んで受けてください。";*/
    }
}

const correct='正解です';
const incorrect='不正解です';

function answerQuiz1(){
    const quiz_1=document.getElementById('quiz-1');
    const answerflg_1=document.getElementById('btn1');
    const select='1問目:'+quiz_1.answer.value+'を選択しました';

    switch(quiz_1.answer.value){
        case 'a':
            console.log(select);
            console.log(incorrect);
            break;
        case 'b':
            console.log(select);
            console.log(incorrect);
            break;
        case 'c':
            console.log(select);
            console.log(correct);
            score++;
            break;
        default:
            alert('1問目の回答を選択してください');
    }
    console.log('現在の点数:'+score);

    answerflg_1.disabled=true;

}

function answerQuiz2(){
    const quiz_2=document.getElementById('quiz-2');
    const answerflg_2=document.getElementById('btn2');
    const select='2問目:'+quiz_2.answer.value+'を選択しました';

    switch(quiz_2.answer.value){
        case 'a':
            console.log(select);
            console.log(correct);
            score++;
            break;
        case 'b':
            console.log(select);
            console.log(incorrect);
            break;
        case 'c':
            console.log(select);
            console.log(incorrect);
            break;
        default:
            alert('2問目の回答を選択してください');
    }
    console.log('現在の点数:'+score);

    answerflg_2.disabled=true;
}

function answerQuiz3(){
    const quiz_3=document.getElementById('quiz-3');
    const answerflg_3=document.getElementById('btn3');
    const select='3問目:'+quiz_3.answer.value+'を選択してください';

    switch(quiz_3.answer.value){
        case 'a':
            console.log(select);
            console.log(incorrect);
            break;
        case 'b':
            console.log(select);
            console.log(incorrect);
            break;
        case 'c':
            console.log(select);
            console.log(correct);
            score++;
            break;
        default:
            alert('3問目の回答を選択してください');
    }
    console.log('現在の点数:'+score);
    answerflg_3.disabled=true;
}
