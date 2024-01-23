
document.getElementById("add_button").addEventListener("click",() => onclickAdd());

const onclickAdd = () => {


    // 入力してなかったらかけないようにする
    if(!document.getElementById("add_text").value == ""){


    // 入力された値の代入
    const inputText = document.getElementById("add_text").value;
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
    ptag.innerHTML = inputText;

    // 未完了のTODOに追加
    document.getElementById("incomplete_list").appendChild(li);


    // 削除ボタン
    deletebutton.addEventListener("click" , () => {
        const deletetarget = div.parentNode;
        document.getElementById("incomplete_list").removeChild(deletetarget);
    })

    // 完了ボタン
    completebutton.addEventListener("click",() => {
        
        // 完了ボタンを押されたリストを削除
        const deletetarget = div.parentNode;
        document.getElementById("incomplete_list").removeChild(deletetarget);

        // 完了したTODOにリストを追加
        const addtarget = ptag.parentNode;
        const text = addtarget.firstElementChild.innerHTML;
        addtarget.textContent = null;

        // 絵

        var num = Math.floor(10 * Math.random());
            if(num <= 5){
                document.getElementById("Irasuto").style.backgroundImage = "url(./img/sugo-i.png)";

            } else if(num >= 5) {
                document.getElementById("Irasuto").style.backgroundImage = "url(./img/otukaresama.png)";
           
            } 
        
        window.setTimeout(function(){
            document.getElementById("Irasuto").style.backgroundImage = "url(./img/kumasan.png)";
        }, 3000);



        // ボタン作成
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