var k = new Date();

window.onload=
function today(){
    var todayyear = document.getElementById('text');
    var todaymonth = document.getElementById('text1');
    var todaydate = document.getElementById('text2');

    var setyear = document.getElementById('text0000');
    var setmonth = document.getElementById('text00');

    todayyear.innerHTML = k.getFullYear();
    todaymonth.innerHTML = k.getMonth()+1;
    todaydate.innerHTML = k.getDate();
    
    setyear.innerHTML = k.getFullYear();
    setmonth.innerHTML = k.getMonth()+1;

    var pTable = document.getElementById('tab');
    add_calendar(pTable, year, month);
}

var year = k.getFullYear();
var month = k.getMonth()+1;

function add_calendar(pTable, year, month) {
    // 現在カレンダーが追加されている場合は一旦削除する
    pTable.textContent = null;
 
    // カレンダーに表示する内容を取得
    /*var headData = generate_calendar_header(ptable, year, month);*/
    var bodyData = generate_month_calendar(year, month);
 
    // カレンダーの要素を追加
    /*ptable.appendChild(headData);*/
    pTable.appendChild(bodyData);
}





function generate_month_calendar(){
    var weekdata=['日','月','火','水','木','金','土'];

    var calendarData = get_month_calendar(year,month);
    var i = get_month_calendar[0]['weekday'];//その月の初日は何曜日か

    while(i>0){//日曜日以外だったら
        i--;
        calendarData.unshift({
            day: '',
            weekday: i
        });//一つ前の日付を空白に
    }

    var i = generate_month_calendar[calendarData.length-1]['weekday'];//末日は何曜日か
    console.log(i);

    while(i < 6) {
        i++;
        calendarData.push({
            day: '',
            weekday: i
        });//一つ次の日付を空白に
    }


    // カレンダーの要素を生成
    var pTable = document.createElement('tbody');
    pTable.idName = 'tab';

    var pTable = docment.getElementById('tab');
    var insertData = '';
    
    for (var i = 0; i < calendarData.length; i++) {
        if(calendarData[i]['weekday'] <= 0) {
            insertData += '<tr>';
        }
        insertData += '<td>';
        insertData += calendarData[i]['day'];
        insertData += '</td>';
        if(calendarData[i]['weekday'] >= 6) {
            insertData += '</tr>';
        }
    }
    pTable.innerHTML=insertData;
    return pTable;
}    


function get_month_calendar(year,month){
    var firstDate=new Date(year,(month-1),1);
    var lastDay=new Date(year,(firstDate.getMonth()+1),0).getDate();
    var weekday=firstDate.getDate();

    var calendarData = []; // カレンダーの情報を格納
    var weekdayCount = weekday; // 曜日のカウント用
    for (var i = 0; i < lastDay; i++) {
        calendarData[i] = {
            day: i + 1,
            weekday: weekdayCount
        }
        // 曜日のカウントが6(土曜日)まできたら0(日曜日)に戻す
        if(weekdayCount >= 6) {
            weekdayCount = 0;
        } else {
            weekdayCount++;
        }
    }
    return calendarData;//日付と曜日を返す

}

