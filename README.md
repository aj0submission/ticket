## URLの注意
[http://XXXX.sakura.ne.jp/gift/](http://XXXX.sakura.ne.jp/ticket/) の「/ticket」はシンボリックを張って再現しています。  
そのため、コードのURL関係の記載はすべて「/ticket」から始まるようになっています。　  
ローカルやご自身の利用している環境にgit cloneする場合には、同様にシンボリックを張って再現するか、  
ソースファイルの「public」配下に「ticket」というフォルダを作り階層下げをした上で「public」をドキュメントルートに指定して下さい。  

## 使用言語やライブラリなど  
html,css,sass,javascript  
webpack,gulp,browserSync  
  

## 内容の説明
※sp対応はしておりません。

### newsページ
・マウスでクリック時にカードに影が出る効果  

### ticketページ
・javascriptでモーダルウィンドウで入力項目の表示  
・javascriptでcsvを読み込み、入力値と一致したデータを取得後、javascriptでエレメントを作成し結果表として出力  
(csv読み込みは「env.js」でサーバー用とローカル用を管理)  

### CONTACTページ
・問い合わせフォームの入力欄
 
