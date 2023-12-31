var todoList;//グローバル変数todoListを定義
window.onload=function(){
    todoList=document.getElementById('todo-list');
}//HTMLを読み込んでから、変数にHTMLのidを設定

function addTask(){//タスクを追加ボタンをクリックしたら実行される関数
    var taskName=document.getElementById('task-name');//変数varにHTMLのid(inputで入力される部分の)を設定

    if(taskName.value.trim()=="")return;//タスクの入力値が前後空白を除いても空なら処理終了

    var li=document.createElement('li');//変数liにHTMLのli要素を設定

    var input=document.createElement('input');//変数inputにHTMLのinput要素を設定
    input.setAttribute('type','checkbox');//HTMLのinput要素のtype属性をcheckboxに変更
    input.setAttribute('name','task');//HTMLのinout要素のname属性の値をtaskとして新規追加
    li.appendChild(input);//親ノードのliに子ノードのinputを末尾に追加

    var p=document.createElement('p');//変数ｐにHTMLのｐ要素を設定
    p.innerHTML=taskName.value;//そのｐ要素の中身は入力されたタスクの値
    li.appendChild(p);//親ノードのliに子ノードのｐを末尾に追加

    var endButton=createTaskButton('end-button','完了');//createTaskButton関数に二つの引数を渡した結果を変数endButtonに代入
    li.appendChild(endButton);//liに完了buttonを末尾に追加

    var deleteButton = createTaskButton('delete-button', '削除');
    li.appendChild(deleteButton);//liに削除buttonを末尾に追加

    todoList.appendChild(li);//ulにliを追加

    taskName.value="";//inputで入力されたタスクを削除して値を初期化

    endButton.addEventListener('click',function(e){//endButtonボタンにクリック時のイベントを設定
        e.preventDefault();//イベントのデフォルト動作を発生させない
        this.setAttribute('class','end-button disabled');
        //このボタンのclass属性の値をend-button disabledにして、ボタンを非活性化
        this.previousElementSibling.setAttribute('class','line-through');
        //endButton要素の一つ前の要素であるｐ(タスク入力されたもの)のクラス属性の値をline-throughにして
        //取り消し線を引く
    });

    deleteButton.addEventListener('click',function(e){//deleteButtonボタンにクリック時のイベントを設定
        e.preventDefault();//イベントのデフォルト動作を発生させない
        todoList.removeChild(this.closest('li'));//この削除buttonの直近要素の中でli要素のものをulから削除
    });
}

function deleteTask(){//「チェックしたタスクを削除」のボタンクリック時に呼ばれる関数
    var inputList=document.task_form.task;
    //name属性がtask_formの(<form>タグの)中の、name属性がtaskの(<input>タグの)ものを取得
    for(var i=inputList.length;i>=0;i--){//存在するタスクの数分、処理を繰り返す
        if(inputList[i].checked){
            //inputListのインデックス番号が大きいものから、チェックボックスにチェックされているかtrue・falseで返す
            todoList.removeChild(inputList[i].closest('li'));
            //チェックがあれば、このインデックス番号の直近要素でli要素のものを削除
        }
    }
}

function createTaskButton(className,name){
    //完了ボタンと削除ボタンの作成(作るだけで、HTMLに追加して表示はしていない)
    var btn=document.createElement('button');//
    btn.setAttribute('class',className);//
    btn.innerHTML=name;//
    return btn;
    //～完了ボタンの場合～
    //btnの中身：<button class="end-button">完了</button>
    //～削除ボタンの場合～
    //btnの中身：<button class="delete-button">削除</button>
}