# TEMPLATE_REMOVAL_REPORT.md

## 実施内容

- v2で追加された定型的な詳細セクションを削除
- 広範囲に反復していた汎用リスト項目を削除
- 汎用的な選択肢別説明を削除
- `optionAnalysis` は `isCorrect/detail` 形式へ正規化
- 解説表示UIから、v2追加の定型セクションを除去

## 削除数

- v2追加キー削除: {'diagnosticFlow': 307, 'finePoints': 307, 'codeTraceNotes': 307, 'trapNotes': 307, 'choiceAudit': 307, 'auditStatus': 307, 'auditVersion': 307}
- 汎用リスト項目削除: 4000
- 汎用的な選択肢別説明削除: 77
- 個別性が残る選択肢別説明維持: 1473

## 注意

今回の処理は、v2の定型追加を取り除く修正であり、全307問をPDF画像から再照合して個別解説を書き直したものではない。
次に解説品質を上げる場合は、章または問題番号の範囲を区切り、PDF本文・選択肢・正解と照合しながら個別に書く。
