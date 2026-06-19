# 模擬試験モード改善 v14

## 実装内容

- 第7章・第8章の模擬試験答案を演習履歴から分離。
- 模擬試験履歴を attempts 配列として保存。
- 各 attempt に以下を保存。
  - attemptId
  - chapterId
  - startedAt
  - finishedAt
  - durationSec
  - active
  - answers
  - flags
  - answerEvents
  - score
- 模擬試験開始時に確認ダイアログを表示。
- 模擬試験中は演習用絞り込みと周回切替を無効化。
- 模擬試験中のボタン文言を「解答を保存」「保存し直す」に変更。
- 採点前に未回答数を確認。
- 採点後の結果カードを追加。
- 結果履歴の選択を追加。
- 不正解、未回答、見直し、見直し不正解、見直し正解への確認導線を追加。
- タイマーの残り時間警告表示を追加。
- スマホ下部でタイマーと操作フッターが重ならないように余白を追加。
- トップ導線を「模擬試験①」「模擬試験②」に分離。

## 変更ファイル

- assets/js/app.js
- assets/css/styles.css
- data/questions.js
- index.html
- ch01.html〜ch08.html
- DESIGN.md
- EXAM_MODE_IMPLEMENTATION_V14.md

## 未実行

- 実ブラウザでのクリック確認。
- Android / iPhone 実機での固定タイマー重なり確認。
