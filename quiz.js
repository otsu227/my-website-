//変数の宣言と代入
let number = 0;
let number_FALSE = 0;
let all = 0;
let serch = 0
let b = document.getElementById("b");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let h2_1 = document.getElementById("h2_1");
let insize = "";
let a = document.getElementById("a");
let a_2 = document.getElementById("a_2");


//ボタンが押されたのを判断する
b.addEventListener("click",function(b){
    number = 0;
    number_FALSE = 0;
    event_1();
});

//ボタンが押されたときの処理
function event_1(){
    //入力情報を取得
    let matigai = document.getElementsByName("FALSE");
    let seikai = document.getElementsByName("TRUE");

    //一つずつ確認
    choose();

    //正解数を取得
    for(let i = 0 ; seikai.length>i ; i++) {
        if (seikai[i].checked){
            number++
        }
    }

    //不正解の数を取得
    for(let j = 0 ; matigai.length>j; j++){

        if (matigai[j].checked){
            number_FALSE = number_FALSE + 1;
        };

    };


//不正防止
all = number + number_FALSE;

    //表示
    if (all>10){
        alert("number error:選択された数が10以上です。複数選択されていませんか？");
        serch = 1;
    }

    if (all<10){
        alert("number error:選択数の合計が10より少ないです。選択されていない問題はありませんか？");
        serch = 2;
    }


//メッセージを決める

    if (number==0){
        //内容
        insize = "勉強したほうがいいよ"
        add(number,insize)

    }else if( number>0 && number<=3){
        
        insize = "英語苦手かな...? "
        add(number,insize);

    }else if (number>=4&&number<=5) {
        insize = "君、英語の通知表3でしょ!"
        add(number,insize);

    }else if (number>=6&&number<=8){
        insize = "すげぇ！"
        add(number,insize);

    }else if (number==9){
        insize = "もう一歩だ！"
        add(number,insize)

    }else if (number==10){
        insize = "これで10点を取るなんて.. 君は稀代の変人だね"
        add(number,insize)
    }

//ボタンを消す
b.remove();
    
};

//メッセージの中身
function add(number,insize){
    //もし点数が0点ならば
    if (number == 0){
        //表示
        h2.innerHTML = "全問不正解...."
        h3.innerHTML = insize

    }else{ h2.innerHTML = "あなたの点数は"+number+"点です";
    h3.innerHTML = insize;}

    if (serch == 1){
        h2_1.innerHTML="不正の疑いがあります....."
    }else if(serch ==2){
        h2_1.innerHTML = "選択されていない欄がある可能性があります"
    }
    
    a.innerHTML="答えのページに飛ばします"
    a_2.innerHTML="もう一度チャレンジ！"



};

function choose(){
    //一つずつ正解なのかを確認
    //変数宣言
    let ul = document.getElementById("ul");
    let li = [];
    for(let k=0;k<11;k++){
        li[k] = document.createElement("li");
    }

    //入力情報を取得
    let T1 = document.getElementById("TRUE1");

    //判定
    if (T1.checked){
        li[1].innerText = "第1問目 : 正解";
    }else{
        li[1].innerText = "第1問目 : 不正解";
        
    }
    //ulの子要素にする
    ul.appendChild(li[1]);

    //二問目に
    //繰り返し
    let T2 = document.getElementById("TRUE2");

    if (T2.checked){
        li[2].innerText = "第2問目 : 正解";
        
    }else{
        li[2].innerText = "第2問目 : 不正解";
        
    }
    ul.appendChild(li[2]);


    let T3 = document.getElementById("TRUE3");

    if (T3.checked){
        li[3].innerText = "第3問目 : 正解";
        
    }else{
        li[3].innerText = "第3問目 : 不正解";
        
    }
    ul.appendChild(li[3]);

    let T4 = document.getElementById("TRUE4");

    if (T4.checked){
        li[4].innerText = "第4問目 : 正解";
        
    }else{
        li[4].innerText = "第4問目 : 不正解";
        
    }
    ul.appendChild(li[4]);


    let T5 = document.getElementById("TRUE5");

    if (T5.checked){
        li[5].innerText = "第5問目 : 正解";
        
    }else{
        li[5].innerText = "第5問目 : 不正解";
        
    }
    ul.appendChild(li[5]);

    let T6 = document.getElementById("TRUE6");

    if (T6.checked){
        li[6].innerText = "第6問目 : 正解";
        
    }else{
        li[6].innerText = "第6問目 : 不正解";
        
    }
    ul.appendChild(li[6]);

    let T7 = document.getElementById("TRUE7");

    if (T7.checked){
        li[7].innerText = "第7問目 : 正解";
        
    }else{
        li[7].innerText = "第7問目 : 不正解";
        
    }
    ul.appendChild(li[7]);

    let T8 = document.getElementById("TRUE8");

    if (T8.checked){
        li[8].innerText = "第8問目 : 正解";
        
    }else{
        li[8].innerText = "第8問目 : 不正解";
        
    }
    ul.appendChild(li[8]);

    let T9 = document.getElementById("TRUE9");

    if (T9.checked){
        li[9].innerText = "第9問目 : 正解";
        
    }else{
        li[9].innerText = "第9問目 : 不正解";
        
    }
    ul.appendChild(li[9]);

    let T10 = document.getElementById("TRUE10");

    if (T10.checked){
        li[10].innerText = "第10問目 : 正解";
        
    }else{
        li[10].innerText = "第10問目 : 不正解";
        
    }
    ul.appendChild(li[10]);

    //ulのクラスを追加
    ul.classList.add("ul");

}