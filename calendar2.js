const week=["日","月","火","水","木","金","土"];
const today=new Date();//今日の日付

var showDate=new Date(today.getFullYear(),today.getMonth(),1);//表示日付（年月）

window.onload=function(){
    showProcess(today,calendar);
};//HTML読み込み直後に実行

function prev(){
    showDate.setMonth(showDate.getMonth()-1);
    showProcess(showDate);
}//showProcess関数の引数であるshowDate変数に前の月の情報を格納

function next(){
    showDate.setMonth(showDate.getMonth()+1);
    showProcess(showDate);
}//showProcess関数の引数であるshowDate変数に次の月の情報を格納

function showProcess(date){
    var year=date.getFullYear();//引数であるdate変数に格納された情報から年を取得
    var month=date.getMonth();//引数であるdate変数に格納された情報から月を取得
    document.querySelector('#header').innerHTML=year+"年"+(month+1)+"月";
    //idがheaderの部分に年月を表示

    /**/ 
    var calendar=createProcess(year,month);//createProcess関数の結果をcalrendar変数に代入
    document.querySelector('#calendar').innerHTML=calendar;//calendar変数をidがcalendarの部分のHTML情報として代入
}

/*カレンダー作成*/
function createProcess(year,month){
    var calendar="<table><tr class='dayOfWeek'>";
    for(var i=0;i<week.length;i++){//week定数の0~6で表される曜日を一つずつカレンダー上部に表示
        calendar+="<th>"+week[i]+"</th>";
    }
    calendar+="</tr>";

    var count=0;//日付のカウント
    var startDayOfWeek=new Date(year,month,1).getDay();//表示月の初日の曜日を代入
    var endDate=new Date(year,month+1,0).getDate();//表示月の末日の日にちを代入
    var lastMonthEndDate=new Date(year,month,0).getDate();//表示月の前の月の末日の日にちを代入
    var row=Math.ceil((startDayOfWeek+endDate)/week.length);//表示月の初日の曜日＋末日を７で割って切り上げた値を代入
    //→これによって表示月には第何週目まであるのかわかる。

    for(var i=0;i<row;i++){//1～row週目を回す
        calendar+="<tr>";
    
        for(var j=0;j<week.length;j++){//（０～６）曜日分回す
            if(i==0&&j<startDayOfWeek){//表示月第一週目の初日より前の日にち（グレー表示）
                calendar+="<td class='disabled'>"+(lastMonthEndDate-startDayOfWeek+j+1)+"</td>";
                //前月の末日ー表示月の初日の曜日＋曜日＋１
            }else if(count>=endDate){//表示月の末日より先の日にち
                count++;
                calendar+="<td class='disabled'>"+(count-endDate)+"</td>";
            }else{
                count++;
                if(year==today.getFullYear()//もし年が今年で、
                && month==(today.getMonth())//かつ月が今月で
                && count==today.getDate()){//かつ今日の日にちが同じなら
                    calendar+="<td class='today'>"+count+"</td>";
                }else{
                    calendar+="<td>"+count+"</td>";//それ以外は日付の表セルを作る
                }
            }
        }
        calendar+="</tr>";
    }
    return calendar;
}


