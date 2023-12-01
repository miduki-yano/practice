
function telling(){
    let num1 = Math.floor(Math.random*5);
    let num2 = Math.floor(Math.random*5);
    let num3 = Math.floor(Math.random*5);
    let num4 = Math.floor(Math.random*8);

    const momo = document.getElementById('text-1');
    const momomo = document.getElementById('text-2');
    const momomomo = document.getElementById('text-3');
    const col = document.getElementById('color');
    const coltxt = document.getElementById('colortext');

    switch(num1){
        case 1:
            momo.innerHTML("恋愛運はめったにないほどいいです。何の行動をとっても上手くいきます。");
            break;
        case 2:
            momo.innerHTML("恋愛運はまあまあいいです。ただ今は待つのが良さそうです。");
            break;
        case 3:
            momo.innerHTML("恋愛運は悪くないです。ただ、待っているだけでは変化はないでしょう。");
            break;
        case 4:
            momo.innerHTML("恋愛運は最悪です。静かに自分自身のことを深く考える時間を作りましょう。");
            break;
    }

    switch(num2){
        case 1:
            momomo.innerHTML("学業・仕事運は最強です。頭の回転が速く、怖いものなしです。");
            break;
        case 2:
            momomo.innerHTML("学業・仕事運は良い方です。人とコミュニケーションを上手に取ることができます。");
            break;
        case 3:
            momomo.innerHTML("学業・仕事運ははっきり言って微妙です。小さなミスによって時間が取られますが、リカバリーできます。");
            break;
        case 4:
            momomo.innerHTML("学業・仕事運は悪いです。あなたの予想が外れて取り返しのつかない失敗をします。");
            break;
        }

    switch(num3){
        case 1:
            momomomo.innerHTML("メッセージ：お母さんかお父さんに「最近どう？」とメールか電話をしてみましょう。");
            break;
        case 2:
            momomomo.innerHTML("メッセージ：夜寝る前にスマホをいじるのを、とりあえず今日だけやめてみましょう。");
            break;
        case 3:
            momomomo.innerHTML("メッセージ：自分または大切な人の貴重品を気にしていてください。ぼーっとしていたら盗まれるかも。");
            break;
        case 4:
            momomomo.innerHTML("メッセージ：自分のことを一番に考えてください。選択するのはあなたです。");
            break;
    }
    
    switch(num4){
        case 1:
            col.innerHTML(red);
            coltxt.innerHTML("エネルギッシュな赤色です。");
            break;
        case 2:
            col.innerHTML(lime);
            coltxt.innerHTML("癒されるライム色です。");
            break;
        case 3:
            col.innerHTML(blue);
            coltxt.innerHTML("クールで知的な青色です。");
            break;
        case 4:
            col.innerHTML(aqua);
            coltxt.innerHTML("優しくヘルシーな水色です。");
            break;
        case 5:
            col.innerHTML(maroon);
            coltxt.innerHTML("大人っぽいワインレッドです。");
            break;
        case 6:
            col.innerHTML(green);
            coltxt.innerHTML("落ち着きのある緑色です。");
            break;
        case 7:
            col.innerHTML(yellow);
            coltxt.innerHTML("明るく目立つ黄色です。");
            break;
        }
}
