var startButton;    // スタートボタン
var finishButton;     // 終了ボタン
var resetButton;    // リセットボタン
var showTime;       // 表示時間

var timer1;              // setTimeout, clearTimeoutで使用
var startTime;          // 開始時間
var elapsedTime = 0;    // 経過時間

var answer;
var showText;
var showCount;
var holdTime;


var textLists = [
    'おはようございます',
    'ミョウバンは染色の色止めとして使われます',
    '家族旅行でハワイに行きました',
    'スペインは生ハムが美味しいです',
    '後悔のない決断をしてください',
    'コツコツ努力することが大事です',
    '仕事があれば人が集まり、人が増えれば家賃が上がります',
    'アイルランドは一年を通して寒く、雨がよく降ります',
    '家族は仕事より大事です',
    'すもももももももものうち、もももすももももものうち',
    '私はパエリアよりフィデワが大好きです',
    'スペインでは年明けの瞬間にマスカットを12個食べます',
];


window.onload = function(){
    startButton = document.getElementById('startbutton');
    finishButton = document.getElementById('finishbutton');
    resetButton = document.getElementById('resetbutton');
    answer = document.getElementById('typ');
    showTime = document.getElementById('show');
    showText = document.getElementById('text');
    showCount = document.getElementById('count');

    startButton.disabled = false;
    finishButton.disabled = true;
    resetButton.disabled = true;
}

function selectText(){
    var no = Math.floor(Math.random()*textLists.length);

    showText.textContent = (textLists[no]);
}

function enter(event){
    if(event.key === "Enter" && answer.value =="")
    {
        alert("入力してください");
        answer.value = "";
    }
    else if(event.key === "Enter" && answer.value !=="")
    {
        check();
    };

    
}

function check(){
    if(showText.textContent === answer.value){
        selectText();
        answer.value = "";

        var time = holdTime/answer.value.length;
        showCount.textContent = ("あなたは一文字" + time + "秒で入力することができました");
    }else{

    };
}



function start(){
    startTime = Date.now();
    timer();

    selectText();

    startButton.disabled = true;
    finishButton.disabled = false;
    resetButton.disabled = false;
}

function finish(){
    holdTime = new Date(elapsedTime).toISOString().slice(17, 19) + (new Date(elapsedTime).toISOString().slice(14, 16))*60;
    clearTimeout(timer1);

    startButton.disabled = true;
    finishButton.disabled = true;
    resetButton.disabled = false;
}

function reset(){
    clearTimeout(timer1);
    showTime.textContent = ("00:00.000");

    answer.value = "";
    showText.textContent = ("");

    startButton.disabled = false;
    finishButton.disabled = true;
    resetButton.disabled = true;
}

function timer(){
    timer1 = setTimeout(function(){
        elapsedTime = Date.now() - startTime;
        showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 23);

        timer();
    },10);
}