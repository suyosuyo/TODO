
// このIDを(getElementById)クリックしたとき(addEventListener)に以下の動作をします
document.getElementById("add_button").addEventListener("click",() => onclickAdd());

const onclickAdd = () => {


    // 入力してなかったらかけないようにする
    if(!document.getElementById("add_text").value == ""){


    // 入力された値の代入
    // class.add_textの中に入れたのをだします みたいな？ valueは値のこと 中に書いてるやつのこと
    const inputText = document.getElementById("add_text").value;
    // console.log(inputText);
    // 次にそれを消しますよ
    document.getElementById("add_text").value = "";


    // タグの作成
    const li = document.createElement("li");
    const div = document.createElement("div");
    const ptag = document.createElement("p");
    const completebutton = document.createElement("button");
    const deletebutton = document.createElement("button");

    // クラス名を付与する
    div.classList = "list_row";

    // タグの中のHTMLを変更する
    completebutton.innerHTML = "完了";
    deletebutton.innerHTML = "削除";

    // liタグの子要素を設定
    li.appendChild(div);
    div.appendChild(ptag);
    div.appendChild(completebutton);
    div.appendChild(deletebutton);
    // ptagにinputTextで設定した入力したものをいれる
    ptag.innerHTML = inputText;

    // 未完了のTODOに追加
    document.getElementById("incomplete_list").appendChild(li);


    // 削除ボタン
    deletebutton.addEventListener("click" , () => {
        // divタグの親要素を調べる、見つける parentNode 親要素がありますか？
        const deletetarget = div.parentNode;
        // 見つけた親要素を削除する ↑のdivの親 listを削除する
        document.getElementById("incomplete_list").removeChild(deletetarget);
    })

    // 完了ボタン
    completebutton.addEventListener("click",() => {
        
        // 完了ボタンを押されたリストを削除
        const deletetarget = div.parentNode;
        document.getElementById("incomplete_list").removeChild(deletetarget);

        // 完了したTODOにリストを追加
        const addtarget = ptag.parentNode;
        // firstElementChild 親の最初の子要素 innnerHTML その中の文字
        const text = addtarget.firstElementChild.innerHTML;
        // console.log(text);
        // 完了のところと未完了のところでボタンの数とかが違うので、一回addtarget(list)の中身を削除する
        addtarget.textContent = null;

        // 絵
        
        document.getElementById("Irasuto").style.backgroundImage = "url(./img/sugoi.png)";
        window.setTimeout(function(){
            document.getElementById("Irasuto").style.backgroundImage = "url(./img/kuma.png)";;
        }, 3000);



        // ボタン作成
        // ボタンを作って、その中に戻るを書いて、戻るボタンを作成する
        const backbutton = document.createElement("button");
        backbutton.innerHTML = "戻す";

        // addtargetの中に入れる
        addtarget.appendChild(ptag);
        addtarget.appendChild(backbutton);
        ptag.innerHTML = text;

        // 完了リストの中に入れる
        document.getElementById("complete_list").appendChild(addtarget.parentNode);




        // 戻すボタン
        backbutton.addEventListener( "click", () => {
        // 戻すボタンを押されたときにリストを削除
        const deletetarget = div.parentNode;
        document.getElementById("complete_list").removeChild(deletetarget);

        const backtarget = ptag.parentNode;
        const backtext = backtarget.firstElementChild.innerHTML;
        backtarget.textContent = null;

        // リスト作成
        backtarget.appendChild(ptag);
        backtarget.appendChild(completebutton);
        backtarget.appendChild(deletebutton);
        ptag.innerHTML = backtext;

        document.getElementById("incomplete_list").appendChild(backtarget.parentNode);
        })

        
    })




}

}