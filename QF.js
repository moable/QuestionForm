function func1() {
    var user_name=document.getElementById("user_name").value;
    var input_message = document.getElementById("input_message").value;
    input_message = "ユーザー名："+user_name+"　質問：" + input_message;
    document.getElementById("output_message").innerHTML = input_message;
  }
function func2() {
   var answer_message=document.getElementById("answer_message").value;
   answer_message="回答："+answer_message;
   document.getElementById("outputans_message").innerHTML = answer_message;
}
function passCheck(){
  pass=window.prompt("パスワードを入力してください","");
  if(pass=="saku0809"){
    func2();
  }
  else{
    alert("パスワードが違います")
  }
}

function previewFile(file){
  //プレビュー画像を追加する要素
  const preview=document.getElementById("preview");
  //FileReaderオブジェクトを作成
  const reader=new FileReader();

  //URLとして読み込まれた時に実行する処理
  reader.onload=function(e){
    const imageUrl=e.target.result;//URLはevent.target.resultで呼び寄せる
    const img=document.createElement("img");//img要素を作成
    img.src=imageUrl;//URLをimg要素にセット
    preview.appendChild(img);//previewの中に追加
  }
  //ファイルを読み込む
  reader.readAsDataURL(file);
}
// <input>でファイルが選択されたときの処理
const fileInput = document.getElementById('gazou');
const handleFileSelect = () => {
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    previewFile(files[i]);
  }
}

fileInput.addEventListener('change', handleFileSelect);
$(function() {
var nav = $('.nav');
$('li', nav)
.mouseover(function(e) {
$('ul', this).stop().slideDown('fast');
})
.mouseout(function(e) {
$('ul', this).stop().slideUp('fast');
});
});
