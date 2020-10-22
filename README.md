# QuestionForm
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport"
  content="width=device-width,initial-scale=1.0,minimum-scale=1,maximam-scale=1,user-scalable=no">
  <title>Question Form</title>
  <link rel="stylesheet" href="QF.css">
  <link rel="stylesheet" href="QF_res.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://smtpjs.com/v3/smtp.js"></script>
</head>
<body>
  <header>
    <div class="header-container">
      <div class="header-title">質問フォーム</div>
      <div class="header-icon">
        <div class="btn menu">
          <input class="acd_check" id="menu_bar" type="checkbox"/><!--labelのforにinputのIDを入れることで、非表示のチェックボックスにチェックの付け外しができる。-->
          <label class="acd_label" for="menu_bar"><span i class="fa fa-bars fa-2x"></span></label>
          <div class="acd_contents">
            <ul>
              <li><a href="https://twitter.com/zl4Plz9kHlqVLve/">Twitter</a></li>
              <li><a href="https://www.instagram.com/ysk1089/">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div>
          <a href="https://twitter.com/zl4Plz9kHlqVLve/" class="btn twitter"><span i class="fab fa-twitter fa-2x"></span>
            Twitter</a>
          <a href="https://www.instagram.com/ysk1089/" class="btn insta"><span i class="fab fa-instagram fa-2x"></span>
            Instagram</a>
        </div>
      </div>
      <ul class="nav">
        <li><a href="#">Preoccupied with you</a></li>
        <li><a href="#">学問</a>
          <ul>
          <li><a href="#">数学</a></li>
          <li><a href="#">物理</a></li>
          <li><a href="#">英語</a></li>
          </ul>
        </li>
        <li><a href="#">プログラミング</a>
        <ul>
        <li><a href="#">HTML&CSS</a></li>
        <li><a href="#">javascript</a></li>
        <li><a href="#">python</a></li>
        <li><a href="#">PHP</a></li>
        </ul>
        </li>
      </ul>
      <div class="content">
      <p>質問は以下のフォームからお願いします。</p>
      </div>
    </div>
  </header>
  <div class="main">
    <div clasa="line">
      <input type="file" id="gazou" multiple>
      <!--ここにプレビューを追加する-->
      <div id="preview"></div>
    </div>
    <!--質問用フォーム
    <form id="form1" action="#">ユーザー名
      <input type="text" id="user_name" value=""><br>質問事項
     <input type="text" id="input_message" value="">
     <input type="button" onclick="func1()" value="送信">
   </form>-->
    <!--回答用フォーム
    <form id="form2" action="#">回答
      <input type="text" id="answer_message" value="">
      <input type="button" onclick="passCheck()" value="回答">
    </form>
    <div class="message_box">
      <div class="output_message" id="output_message"></div>
      <div class="output_message" id="outputans_message"></div>
    </div>-->
  </div>
  <footer>
  </footer>
  <script type="text/javascript" src="QF.js"></script>
</body>
</html>
