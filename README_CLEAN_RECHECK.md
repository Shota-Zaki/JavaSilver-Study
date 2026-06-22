# JavaSilver Study v37 clean recheck base

## 目的
第1章〜第8章のPDF原文寄せ解説差し替え後のクリーン版です。
次作業では、第7章・第8章の解説内容をPDF原本画像と照合し、必要な修正だけを行ってください。

## 収録内容
- 実行用HTML一式
- assets/css/styles.css
- assets/js/app.js
- data/questions.js
- DESIGN.md
- transcription/ch07_pdf_explanations_v35/
- transcription/ch08_pdf_explanations_v36/

## 整理方針
再確認に直接不要な過去レポート、旧AI_WORK_STATE、旧NEXT_WORK、旧validation JSON、旧差分ログ、未参照CSS、作業用tools、過去章の分割transcriptionは除外しています。

## 次に行う作業
1. 第7章60問の解説をPDF原本画像と照合する。
2. 第8章60問の解説をPDF原本画像と照合する。
3. OCR由来の誤字、問題番号ずれ、正答見出し、コード・記号の崩れ、ページまたぎ文を修正する。
4. 修正後に data/questions.js と ch07/ch08 の分割transcriptionを同期する。
5. node --check assets/js/app.js / data/questions.js を実行する。

## 未実施
- ブラウザ実表示確認
- スマホ実機確認
- 実HTTP smoke
- PDF原本との1文字単位の全文二重照合
- javac/java 実行検証
