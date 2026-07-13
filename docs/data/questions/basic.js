(function(){
  window.JAVA_STUDY_DATA = window.JAVA_STUDY_DATA || {};
  window.JAVA_STUDY_DATA.questions = window.JAVA_STUDY_DATA.questions || {};
  Object.assign(window.JAVA_STUDY_DATA.questions, {
  "basic-p1": [
    {
      "id": "basic-p1-001",
      "number": 1,
      "title": "Java基礎判定：mainと出力 #1",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Java\" + 1 + 2);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "Java12"
        },
        {
          "key": "B",
          "text": "Java3"
        },
        {
          "key": "C",
          "text": "12Java"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. Java12 です。",
      "contentExplanation": "### 文字列連結と左からの評価\n\n`+` は数値同士なら加算、どちらか一方が文字列なら文字列連結として働きます。この式では最初の左辺が文字列の `\"Java\"` です。\n\n```java\nSystem.out.println(\"Java\" + 1 + 2);\n```\n\n同じ優先順位の `+` は左から評価されます。\n\n| 手順 | 評価する部分 | 結果 |\n|---|---|---|\n| 1 | `\"Java\" + 1` | `\"Java1\"` |\n| 2 | `\"Java1\" + 2` | `\"Java12\"` |\n\n最初の連結で結果が文字列になっているため、後ろの `2` も数値加算には使われません。出力は `Java12` です。",
      "optionDetails": [
        {
          "key": "A",
          "label": "Java12",
          "judgement": "correct",
          "explanation": "正解です。`\"Java\" + 1` が `\"Java1\"` になり、続く `+ 2` も文字列連結になるため `Java12` が表示されます。"
        },
        {
          "key": "B",
          "label": "Java3",
          "judgement": "incorrect",
          "explanation": "不正解です。`1 + 2` を先に計算する括弧はなく、左端の文字列から連結が始まります。"
        },
        {
          "key": "C",
          "label": "12Java",
          "judgement": "incorrect",
          "explanation": "不正解です。演算の順番を入れ替える処理はないため、数値が文字列の前へ移動して `12Java` にはなりません。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。Javaでは文字列と数値を `+` で連結でき、この式の型も正しく決まります。"
        }
      ],
      "rememberPoint": "`+` が連続する式は左から追い、どの段階で結果が文字列になるかを確認します。数値加算を先にしたい場合は `\"Java\" + (1 + 2)` のように括弧を付けます。",
      "explanationMarkdown": "正答は A. Java12 です。\n\n### 文字列連結と左からの評価\n\n`+` は数値同士なら加算、どちらか一方が文字列なら文字列連結として働きます。この式では最初の左辺が文字列の `\"Java\"` です。\n\n```java\nSystem.out.println(\"Java\" + 1 + 2);\n```\n\n同じ優先順位の `+` は左から評価されます。\n\n| 手順 | 評価する部分 | 結果 |\n|---|---|---|\n| 1 | `\"Java\" + 1` | `\"Java1\"` |\n| 2 | `\"Java1\" + 2` | `\"Java12\"` |\n\n最初の連結で結果が文字列になっているため、後ろの `2` も数値加算には使われません。出力は `Java12` です。\n\n## 覚えるポイント\n\n`+` が連続する式は左から追い、どの段階で結果が文字列になるかを確認します。数値加算を先にしたい場合は `\"Java\" + (1 + 2)` のように括弧を付けます。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "string_concatenation_left_associativity"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。"
      },
      "explanation": {
        "summary": "### 文字列連結と左からの評価\n\n`+` は数値同士なら加算、どちらか一方が文字列なら文字列連結として働きます。この式では最初の左辺が文字列の `\"Java\"` です。\n\n```java\nSystem.out.println(\"Java\" + 1 + 2);\n```\n\n同じ優先順位の `+` は左から評価されます。\n\n| 手順 | 評価する部分 | 結果 |\n|---|---|---|\n| 1 | `\"Java\" + 1` | `\"Java1\"` |\n| 2 | `\"Java1\" + 2` | `\"Java12\"` |\n\n最初の連結で結果が文字列になっているため、後ろの `2` も数値加算には使われません。出力は `Java12` です。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "string"
      },
      "tags": [
        "basic",
        "string",
        "output"
      ],
      "examFocus": "",
      "qaCategory": "string",
      "summary": "Java基礎判定：mainと出力 #1"
    },
    {
      "id": "basic-p1-002",
      "number": 2,
      "title": "Java基礎判定：変数初期化 #2",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードについて正しい説明を選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int x;\n        // System.out.println(x);\n        x = 10;\n        System.out.println(x);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "10が表示される"
        },
        {
          "key": "B",
          "text": "0が表示される"
        },
        {
          "key": "C",
          "text": "コメントを外しても0が表示される"
        },
        {
          "key": "D",
          "text": "常にコンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 10が表示される です。",
      "contentExplanation": "### ローカル変数は代入後に参照する\n\nメソッド内で宣言したローカル変数には自動的な初期値が入りません。`int x;` の直後では、`x` は宣言されただけで値が確定していない状態です。\n\n```java\nint x;\n// System.out.println(x);\nx = 10;\nSystem.out.println(x);\n```\n\n未代入の `x` を参照する行は `//` で始まるコメントなので、コンパイル対象にも実行対象にもなりません。実際の参照は `x = 10;` の後です。\n\n| 行 | `x` の状態 |\n|---|---|\n| `int x;` | 未代入 |\n| `x = 10;` | `10` が代入済み |\n| `System.out.println(x);` | `10` を表示 |\n\nしたがってコードはコンパイルでき、`10` が表示されます。",
      "optionDetails": [
        {
          "key": "A",
          "label": "10が表示される",
          "judgement": "correct",
          "explanation": "正解です。実行される出力文より前に `x = 10;` があるため、表示時の値は `10` です。"
        },
        {
          "key": "B",
          "label": "0が表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。ローカル変数 `x` に既定値 `0` は入りません。また、このコードでは明示的に `10` を代入しています。"
        },
        {
          "key": "C",
          "label": "コメントを外しても0が表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。コメントを外すと代入前の `x` を参照するため、`0` の表示ではなくコンパイル時に未初期化と判定されます。"
        },
        {
          "key": "D",
          "label": "常にコンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。未代入参照はコメント内にあり、実際の参照前には代入が完了しています。"
        }
      ],
      "rememberPoint": "ローカル変数は参照前に確実な代入が必要です。コメント行は処理されないため、実際にコンパイルされる実行経路だけを追います。",
      "explanationMarkdown": "正答は A. 10が表示される です。\n\n### ローカル変数は代入後に参照する\n\nメソッド内で宣言したローカル変数には自動的な初期値が入りません。`int x;` の直後では、`x` は宣言されただけで値が確定していない状態です。\n\n```java\nint x;\n// System.out.println(x);\nx = 10;\nSystem.out.println(x);\n```\n\n未代入の `x` を参照する行は `//` で始まるコメントなので、コンパイル対象にも実行対象にもなりません。実際の参照は `x = 10;` の後です。\n\n| 行 | `x` の状態 |\n|---|---|\n| `int x;` | 未代入 |\n| `x = 10;` | `10` が代入済み |\n| `System.out.println(x);` | `10` を表示 |\n\nしたがってコードはコンパイルでき、`10` が表示されます。\n\n## 覚えるポイント\n\nローカル変数は参照前に確実な代入が必要です。コメント行は処理されないため、実際にコンパイルされる実行経路だけを追います。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "local_variable_definite_assignment"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。"
      },
      "explanation": {
        "summary": "### ローカル変数は代入後に参照する\n\nメソッド内で宣言したローカル変数には自動的な初期値が入りません。`int x;` の直後では、`x` は宣言されただけで値が確定していない状態です。\n\n```java\nint x;\n// System.out.println(x);\nx = 10;\nSystem.out.println(x);\n```\n\n未代入の `x` を参照する行は `//` で始まるコメントなので、コンパイル対象にも実行対象にもなりません。実際の参照は `x = 10;` の後です。\n\n| 行 | `x` の状態 |\n|---|---|\n| `int x;` | 未代入 |\n| `x = 10;` | `10` が代入済み |\n| `System.out.println(x);` | `10` を表示 |\n\nしたがってコードはコンパイルでき、`10` が表示されます。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "operator"
      },
      "tags": [
        "basic",
        "variable",
        "output"
      ],
      "examFocus": "",
      "qaCategory": "operator",
      "summary": "Java基礎判定：変数初期化 #2"
    },
    {
      "id": "basic-p1-003",
      "number": 3,
      "title": "Java基礎判定：boolean #3",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int score = 70;\n        boolean pass = score >= 60;\n        System.out.println(pass);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "true"
        },
        {
          "key": "B",
          "text": "false"
        },
        {
          "key": "C",
          "text": "1"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. true です。",
      "contentExplanation": "### 比較式が返す `boolean` 値\n\n`>=` は左右の大小関係を調べ、結果として `true` または `false` を返す比較演算子です。\n\n```java\nint score = 70;\nboolean pass = score >= 60;\nSystem.out.println(pass);\n```\n\n`score >= 60` は `70 >= 60` として評価されます。この条件は成立するため、式の結果は `true` です。その値が `pass` に代入され、`println` によって `true` と表示されます。\n\nJavaの `boolean` は数値型ではありません。真を `1`、偽を `0` として出力する仕組みではありません。",
      "optionDetails": [
        {
          "key": "A",
          "label": "true",
          "judgement": "correct",
          "explanation": "正解です。`70 >= 60` が成立するため、`pass` の値は `true` になります。"
        },
        {
          "key": "B",
          "label": "false",
          "judgement": "incorrect",
          "explanation": "不正解です。`score` は合格基準の `60` 以上なので、比較結果は `false` ではありません。"
        },
        {
          "key": "C",
          "label": "1",
          "judgement": "incorrect",
          "explanation": "不正解です。Javaの `boolean` は整数の `1` へ変換されず、出力も `true` または `false` です。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。`>=` の結果は `boolean` 型なので、`boolean pass` への代入と型が一致しています。"
        }
      ],
      "rememberPoint": "比較演算子の結果は `boolean` です。条件式を読むときは、具体的な値を代入して `true` か `false` かを決めます。",
      "explanationMarkdown": "正答は A. true です。\n\n### 比較式が返す `boolean` 値\n\n`>=` は左右の大小関係を調べ、結果として `true` または `false` を返す比較演算子です。\n\n```java\nint score = 70;\nboolean pass = score >= 60;\nSystem.out.println(pass);\n```\n\n`score >= 60` は `70 >= 60` として評価されます。この条件は成立するため、式の結果は `true` です。その値が `pass` に代入され、`println` によって `true` と表示されます。\n\nJavaの `boolean` は数値型ではありません。真を `1`、偽を `0` として出力する仕組みではありません。\n\n## 覚えるポイント\n\n比較演算子の結果は `boolean` です。条件式を読むときは、具体的な値を代入して `true` か `false` かを決めます。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "boolean_comparison_result"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。"
      },
      "explanation": {
        "summary": "### 比較式が返す `boolean` 値\n\n`>=` は左右の大小関係を調べ、結果として `true` または `false` を返す比較演算子です。\n\n```java\nint score = 70;\nboolean pass = score >= 60;\nSystem.out.println(pass);\n```\n\n`score >= 60` は `70 >= 60` として評価されます。この条件は成立するため、式の結果は `true` です。その値が `pass` に代入され、`println` によって `true` と表示されます。\n\nJavaの `boolean` は数値型ではありません。真を `1`、偽を `0` として出力する仕組みではありません。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "boolean"
      },
      "tags": [
        "basic",
        "boolean",
        "type",
        "operator"
      ],
      "examFocus": "",
      "qaCategory": "boolean",
      "summary": "Java基礎判定：boolean #3"
    },
    {
      "id": "basic-p1-004",
      "number": 4,
      "title": "Java基礎判定：if文 #4",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        if (n % 2 == 0) {\n            System.out.println(\"even\");\n        } else {\n            System.out.println(\"odd\");\n        }\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "even"
        },
        {
          "key": "B",
          "text": "odd"
        },
        {
          "key": "C",
          "text": "true"
        },
        {
          "key": "D",
          "text": "何も表示されない"
        }
      ],
      "answer": [
        "B"
      ],
      "correctAnswerText": "正答は B. odd です。",
      "contentExplanation": "### 剰余を使った偶数・奇数の分岐\n\n`%` は割り算の余りを求める演算子です。整数を `2` で割った余りが `0` なら偶数、`1` または `-1` なら奇数と判断できます。\n\n```java\nint n = 3;\nif (n % 2 == 0) {\n    System.out.println(\"even\");\n} else {\n    System.out.println(\"odd\");\n}\n```\n\n`3 % 2` は `1` です。したがって条件式は `1 == 0` となり、評価結果は `false` です。`if` の本体は実行されず、`else` の `System.out.println(\"odd\");` が実行されます。",
      "optionDetails": [
        {
          "key": "A",
          "label": "even",
          "judgement": "incorrect",
          "explanation": "不正解です。`3 % 2` は `1` なので、偶数を表す条件 `n % 2 == 0` は成立しません。"
        },
        {
          "key": "B",
          "label": "odd",
          "judgement": "correct",
          "explanation": "正解です。条件式が `false` となり、`else` 側から `odd` が表示されます。"
        },
        {
          "key": "C",
          "label": "true",
          "judgement": "incorrect",
          "explanation": "不正解です。条件式の値自体は `false` ですが、出力文が表示するのは文字列 `odd` です。"
        },
        {
          "key": "D",
          "label": "何も表示されない",
          "judgement": "incorrect",
          "explanation": "不正解です。`if` と `else` が対になっているため、条件に応じてどちらか一方の出力文が実行されます。"
        }
      ],
      "rememberPoint": "偶数判定は `n % 2 == 0` で行えます。`if` 問題では条件式の真偽を決めた後、実行されるブロックだけを追います。",
      "explanationMarkdown": "正答は B. odd です。\n\n### 剰余を使った偶数・奇数の分岐\n\n`%` は割り算の余りを求める演算子です。整数を `2` で割った余りが `0` なら偶数、`1` または `-1` なら奇数と判断できます。\n\n```java\nint n = 3;\nif (n % 2 == 0) {\n    System.out.println(\"even\");\n} else {\n    System.out.println(\"odd\");\n}\n```\n\n`3 % 2` は `1` です。したがって条件式は `1 == 0` となり、評価結果は `false` です。`if` の本体は実行されず、`else` の `System.out.println(\"odd\");` が実行されます。\n\n## 覚えるポイント\n\n偶数判定は `n % 2 == 0` で行えます。`if` 問題では条件式の真偽を決めた後、実行されるブロックだけを追います。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "remainder_if_else_branch"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。"
      },
      "explanation": {
        "summary": "### 剰余を使った偶数・奇数の分岐\n\n`%` は割り算の余りを求める演算子です。整数を `2` で割った余りが `0` なら偶数、`1` または `-1` なら奇数と判断できます。\n\n```java\nint n = 3;\nif (n % 2 == 0) {\n    System.out.println(\"even\");\n} else {\n    System.out.println(\"odd\");\n}\n```\n\n`3 % 2` は `1` です。したがって条件式は `1 == 0` となり、評価結果は `false` です。`if` の本体は実行されず、`else` の `System.out.println(\"odd\");` が実行されます。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "control"
      },
      "tags": [
        "basic",
        "if",
        "operator"
      ],
      "examFocus": "",
      "qaCategory": "control",
      "summary": "Java基礎判定：if文 #4"
    },
    {
      "id": "basic-p1-006",
      "number": 5,
      "title": "Java基礎判定：配列 #6",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int[] nums = new int[3];\n        nums[1] = 5;\n        System.out.println(nums[0] + nums[1] + nums.length);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "5"
        },
        {
          "key": "B",
          "text": "8"
        },
        {
          "key": "C",
          "text": "3"
        },
        {
          "key": "D",
          "text": "実行時例外"
        }
      ],
      "answer": [
        "B"
      ],
      "correctAnswerText": "正答は B. 8 です。",
      "contentExplanation": "### 配列要素の初期値と `length`\n\n`new int[3]` は、`int` 型の要素を3個持つ配列を作ります。配列の要素はフィールドと同様に既定値で初期化され、`int` の既定値は `0` です。\n\n```java\nint[] nums = new int[3];\nnums[1] = 5;\nSystem.out.println(nums[0] + nums[1] + nums.length);\n```\n\n長さ3の配列で使用できる添字は `0`、`1`、`2` です。\n\n| 対象 | 値 |\n|---|---:|\n| `nums[0]` | 0 |\n| `nums[1]` | 5 |\n| `nums.length` | 3 |\n\n出力式は `0 + 5 + 3` となるため、結果は `8` です。参照している添字は有効範囲内なので例外も発生しません。",
      "optionDetails": [
        {
          "key": "A",
          "label": "5",
          "judgement": "incorrect",
          "explanation": "不正解です。`nums[1]` の `5` に加えて、式には `nums.length` の `3` も含まれます。"
        },
        {
          "key": "B",
          "label": "8",
          "judgement": "correct",
          "explanation": "正解です。`nums[0]` は `0`、`nums[1]` は `5`、`nums.length` は `3` なので合計は `8` です。"
        },
        {
          "key": "C",
          "label": "3",
          "judgement": "incorrect",
          "explanation": "不正解です。`3` は配列の要素数であり、要素値 `0` と `5` も同じ式で加算されます。"
        },
        {
          "key": "D",
          "label": "実行時例外",
          "judgement": "incorrect",
          "explanation": "不正解です。長さ3の配列で添字 `0` と `1` は有効なため、範囲外アクセスはありません。"
        }
      ],
      "rememberPoint": "配列の要素数は `array.length`、有効な添字は `0` から `length - 1` です。基本型配列の各要素には型ごとの既定値が入ります。",
      "explanationMarkdown": "正答は B. 8 です。\n\n### 配列要素の初期値と `length`\n\n`new int[3]` は、`int` 型の要素を3個持つ配列を作ります。配列の要素はフィールドと同様に既定値で初期化され、`int` の既定値は `0` です。\n\n```java\nint[] nums = new int[3];\nnums[1] = 5;\nSystem.out.println(nums[0] + nums[1] + nums.length);\n```\n\n長さ3の配列で使用できる添字は `0`、`1`、`2` です。\n\n| 対象 | 値 |\n|---|---:|\n| `nums[0]` | 0 |\n| `nums[1]` | 5 |\n| `nums.length` | 3 |\n\n出力式は `0 + 5 + 3` となるため、結果は `8` です。参照している添字は有効範囲内なので例外も発生しません。\n\n## 覚えるポイント\n\n配列の要素数は `array.length`、有効な添字は `0` から `length - 1` です。基本型配列の各要素には型ごとの既定値が入ります。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "array_defaults_index_length"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "### 配列要素の初期値と `length`\n\n`new int[3]` は、`int` 型の要素を3個持つ配列を作ります。配列の要素はフィールドと同様に既定値で初期化され、`int` の既定値は `0` です。\n\n```java\nint[] nums = new int[3];\nnums[1] = 5;\nSystem.out.println(nums[0] + nums[1] + nums.length);\n```\n\n長さ3の配列で使用できる添字は `0`、`1`、`2` です。\n\n| 対象 | 値 |\n|---|---:|\n| `nums[0]` | 0 |\n| `nums[1]` | 5 |\n| `nums.length` | 3 |\n\n出力式は `0 + 5 + 3` となるため、結果は `8` です。参照している添字は有効範囲内なので例外も発生しません。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "array"
      },
      "tags": [
        "basic",
        "array",
        "output"
      ],
      "examFocus": "",
      "qaCategory": "array",
      "summary": "Java基礎判定：配列 #6"
    },
    {
      "id": "basic-p1-007",
      "number": 6,
      "title": "Java基礎判定：メソッド #7",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    static int twice(int x) {\n        return x * 2;\n    }\n    public static void main(String[] args) {\n        System.out.println(twice(4));\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "4"
        },
        {
          "key": "B",
          "text": "8"
        },
        {
          "key": "C",
          "text": "16"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "B"
      ],
      "correctAnswerText": "正答は B. 8 です。",
      "contentExplanation": "### 引数から戻り値までを追う\n\n`twice` は `int` を1つ受け取り、計算結果を `int` として返すメソッドです。\n\n```java\nstatic int twice(int x) {\n    return x * 2;\n}\n```\n\n`twice(4)` を呼び出すと、仮引数 `x` に `4` が渡されます。`return x * 2;` で `8` が呼び出し元へ返り、次の式は実質的に `System.out.println(8);` となります。\n\n```java\nSystem.out.println(twice(4));\n```\n\n`twice` は `static` なので、同じく `static` な `main` からオブジェクトを作らずに呼び出せます。",
      "optionDetails": [
        {
          "key": "A",
          "label": "4",
          "judgement": "incorrect",
          "explanation": "不正解です。引数 `4` はメソッド内で `2` 倍され、そのまま返されるわけではありません。"
        },
        {
          "key": "B",
          "label": "8",
          "judgement": "correct",
          "explanation": "正解です。`x` に `4` が入り、`return 4 * 2;` の結果 `8` が `println` へ渡されます。"
        },
        {
          "key": "C",
          "label": "16",
          "judgement": "incorrect",
          "explanation": "不正解です。処理は `x * 2` であり、`4 * 4` や二重の2倍処理はありません。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。戻り値の型、引数の型、`static` からの呼び出し方がすべて整合しています。"
        }
      ],
      "rememberPoint": "メソッド呼び出しは、実引数を仮引数へ渡し、`return` の値を呼び出し位置へ戻して置き換える流れで追います。",
      "explanationMarkdown": "正答は B. 8 です。\n\n### 引数から戻り値までを追う\n\n`twice` は `int` を1つ受け取り、計算結果を `int` として返すメソッドです。\n\n```java\nstatic int twice(int x) {\n    return x * 2;\n}\n```\n\n`twice(4)` を呼び出すと、仮引数 `x` に `4` が渡されます。`return x * 2;` で `8` が呼び出し元へ返り、次の式は実質的に `System.out.println(8);` となります。\n\n```java\nSystem.out.println(twice(4));\n```\n\n`twice` は `static` なので、同じく `static` な `main` からオブジェクトを作らずに呼び出せます。\n\n## 覚えるポイント\n\nメソッド呼び出しは、実引数を仮引数へ渡し、`return` の値を呼び出し位置へ戻して置き換える流れで追います。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "method_argument_return_static"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "### 引数から戻り値までを追う\n\n`twice` は `int` を1つ受け取り、計算結果を `int` として返すメソッドです。\n\n```java\nstatic int twice(int x) {\n    return x * 2;\n}\n```\n\n`twice(4)` を呼び出すと、仮引数 `x` に `4` が渡されます。`return x * 2;` で `8` が呼び出し元へ返り、次の式は実質的に `System.out.println(8);` となります。\n\n```java\nSystem.out.println(twice(4));\n```\n\n`twice` は `static` なので、同じく `static` な `main` からオブジェクトを作らずに呼び出せます。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "method"
      },
      "tags": [
        "basic",
        "method",
        "output"
      ],
      "examFocus": "",
      "qaCategory": "method",
      "summary": "Java基礎判定：メソッド #7"
    },
    {
      "id": "basic-p1-010",
      "number": 7,
      "title": "Java基礎判定：例外の入口 #10",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String s = null;\n        System.out.println(s.length());\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "0"
        },
        {
          "key": "B",
          "text": "null"
        },
        {
          "key": "C",
          "text": "コンパイルエラー"
        },
        {
          "key": "D",
          "text": "NullPointerExceptionが発生する"
        }
      ],
      "answer": [
        "D"
      ],
      "correctAnswerText": "正答は D. NullPointerExceptionが発生する です。",
      "contentExplanation": "### `null` と実行時例外の区別\n\n参照型変数には `null` を代入できます。したがって、`String s = null;` 自体はコンパイルエラーではありません。\n\n```java\nString s = null;\nSystem.out.println(s.length());\n```\n\n`null` は空文字列ではなく、参照先のオブジェクトが存在しない状態です。`s.length()` を評価するには `String` オブジェクトの `length()` を呼び出す必要がありますが、呼び出し先がありません。\n\nそのため、出力処理へ値を渡す前に `s.length()` の位置で `NullPointerException` が発生します。これはコンパイル時ではなく実行時のエラーです。",
      "optionDetails": [
        {
          "key": "A",
          "label": "0",
          "judgement": "incorrect",
          "explanation": "不正解です。`null` は長さ0の文字列ではなく、`length()` を呼び出す対象そのものがありません。"
        },
        {
          "key": "B",
          "label": "null",
          "judgement": "incorrect",
          "explanation": "不正解です。`s` を直接出力するコードではありません。先に `s.length()` を評価するため例外が発生します。"
        },
        {
          "key": "C",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。参照型変数への `null` 代入は許可されるため、コードはコンパイルできます。"
        },
        {
          "key": "D",
          "label": "NullPointerExceptionが発生する",
          "judgement": "correct",
          "explanation": "正解です。参照先がない `s` に対してインスタンスメソッド `length()` を呼ぶため、実行時に `NullPointerException` が発生します。"
        }
      ],
      "rememberPoint": "`null` は「空」ではなく「参照先なし」です。`null` からインスタンスメソッドやフィールドへアクセスすると、実行時に `NullPointerException` が発生します。",
      "explanationMarkdown": "正答は D. NullPointerExceptionが発生する です。\n\n### `null` と実行時例外の区別\n\n参照型変数には `null` を代入できます。したがって、`String s = null;` 自体はコンパイルエラーではありません。\n\n```java\nString s = null;\nSystem.out.println(s.length());\n```\n\n`null` は空文字列ではなく、参照先のオブジェクトが存在しない状態です。`s.length()` を評価するには `String` オブジェクトの `length()` を呼び出す必要がありますが、呼び出し先がありません。\n\nそのため、出力処理へ値を渡す前に `s.length()` の位置で `NullPointerException` が発生します。これはコンパイル時ではなく実行時のエラーです。\n\n## 覚えるポイント\n\n`null` は「空」ではなく「参照先なし」です。`null` からインスタンスメソッドやフィールドへアクセスすると、実行時に `NullPointerException` が発生します。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "null_dereference_runtime_exception"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "### `null` と実行時例外の区別\n\n参照型変数には `null` を代入できます。したがって、`String s = null;` 自体はコンパイルエラーではありません。\n\n```java\nString s = null;\nSystem.out.println(s.length());\n```\n\n`null` は空文字列ではなく、参照先のオブジェクトが存在しない状態です。`s.length()` を評価するには `String` オブジェクトの `length()` を呼び出す必要がありますが、呼び出し先がありません。\n\nそのため、出力処理へ値を渡す前に `s.length()` の位置で `NullPointerException` が発生します。これはコンパイル時ではなく実行時のエラーです。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "exception"
      },
      "tags": [
        "basic",
        "null",
        "runtime",
        "string"
      ],
      "examFocus": "",
      "qaCategory": "exception",
      "summary": "Java基礎判定：例外の入口 #10"
    },
    {
      "id": "basic-p1-005",
      "number": 8,
      "title": "Java基礎判定：for文 #5",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            total += i;\n        }\n        System.out.println(total);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "3"
        },
        {
          "key": "B",
          "text": "6"
        },
        {
          "key": "C",
          "text": "7"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "B"
      ],
      "correctAnswerText": "正答は B. 6 です。",
      "contentExplanation": "### `for` 文で合計値を更新する\n\n`for (初期化; 条件; 更新)` は、初期化を1回行った後、条件が `true` の間だけ本体と更新を繰り返します。\n\n```java\nint total = 0;\nfor (int i = 1; i <= 3; i++) {\n    total += i;\n}\nSystem.out.println(total);\n```\n\n`total += i` は `total = total + i` と同じ意味です。\n\n| 回 | `i` | 更新後の `total` |\n|---|---:|---:|\n| 1 | 1 | 1 |\n| 2 | 2 | 3 |\n| 3 | 3 | 6 |\n\n3回目の後に `i++` で `i` は `4` となり、`i <= 3` が `false` になって終了します。`4` は加算されないため、表示される値は `6` です。",
      "optionDetails": [
        {
          "key": "A",
          "label": "3",
          "judgement": "incorrect",
          "explanation": "不正解です。`3` は最後に本体を実行したときの `i` であり、`total` には `1`、`2`、`3` のすべてが加算されています。"
        },
        {
          "key": "B",
          "label": "6",
          "judgement": "correct",
          "explanation": "正解です。`total` は `0 → 1 → 3 → 6` と更新され、ループ終了後に `6` が表示されます。"
        },
        {
          "key": "C",
          "label": "7",
          "judgement": "incorrect",
          "explanation": "不正解です。`i` が `4` になるのは更新後で、その直後の条件判定が偽になるため `4` は加算されません。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。初期化、条件、更新、複合代入の型と構文はいずれも正しく、コンパイルできます。"
        }
      ],
      "rememberPoint": "合計値を求めるループでは、各回のカウンタ値と更新後の合計を並べます。条件が偽になった回の値は本体で処理されません。",
      "explanationMarkdown": "正答は B. 6 です。\n\n### `for` 文で合計値を更新する\n\n`for (初期化; 条件; 更新)` は、初期化を1回行った後、条件が `true` の間だけ本体と更新を繰り返します。\n\n```java\nint total = 0;\nfor (int i = 1; i <= 3; i++) {\n    total += i;\n}\nSystem.out.println(total);\n```\n\n`total += i` は `total = total + i` と同じ意味です。\n\n| 回 | `i` | 更新後の `total` |\n|---|---:|---:|\n| 1 | 1 | 1 |\n| 2 | 2 | 3 |\n| 3 | 3 | 6 |\n\n3回目の後に `i++` で `i` は `4` となり、`i <= 3` が `false` になって終了します。`4` は加算されないため、表示される値は `6` です。\n\n## 覚えるポイント\n\n合計値を求めるループでは、各回のカウンタ値と更新後の合計を並べます。条件が偽になった回の値は本体で処理されません。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "for_loop_accumulation"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "### `for` 文で合計値を更新する\n\n`for (初期化; 条件; 更新)` は、初期化を1回行った後、条件が `true` の間だけ本体と更新を繰り返します。\n\n```java\nint total = 0;\nfor (int i = 1; i <= 3; i++) {\n    total += i;\n}\nSystem.out.println(total);\n```\n\n`total += i` は `total = total + i` と同じ意味です。\n\n| 回 | `i` | 更新後の `total` |\n|---|---:|---:|\n| 1 | 1 | 1 |\n| 2 | 2 | 3 |\n| 3 | 3 | 6 |\n\n3回目の後に `i++` で `i` は `4` となり、`i <= 3` が `false` になって終了します。`4` は加算されないため、表示される値は `6` です。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "loop"
      },
      "tags": [
        "basic",
        "loop",
        "operator"
      ],
      "examFocus": "",
      "qaCategory": "loop",
      "summary": "Java基礎判定：for文 #5"
    },
    {
      "id": "basic-p1-011",
      "number": 9,
      "title": "変数を宣言してから代入する",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int count;\n        count = 3;\n        System.out.println(count);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "3"
        },
        {
          "key": "B",
          "text": "0"
        },
        {
          "key": "C",
          "text": "コンパイルエラー"
        },
        {
          "key": "D",
          "text": "実行時に例外が発生する"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 3 です。",
      "contentExplanation": "`int count;` は変数の宣言で、まだ値は入りません。次の `count = 3;` で初めて値を代入しています。`println` を実行する時点では `count` は3で初期化済みなので、`3` が表示されます。",
      "optionDetails": [
        {
          "key": "A",
          "label": "3",
          "judgement": "correct",
          "explanation": "正解です。出力前に `count = 3;` が実行されているため、現在値の3が表示されます。"
        },
        {
          "key": "B",
          "label": "0",
          "judgement": "incorrect",
          "explanation": "不正解です。ローカル変数は自動的に0へ初期化されず、このコードでは明示的に3を代入しています。"
        },
        {
          "key": "C",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。使用前に `count` へ値を代入しているため、未初期化エラーにはなりません。"
        },
        {
          "key": "D",
          "label": "実行時に例外が発生する",
          "judgement": "incorrect",
          "explanation": "不正解です。整数3の代入と出力だけなので、実行時例外を発生させる処理はありません。"
        }
      ],
      "rememberPoint": "ローカル変数は宣言しただけでは使えません。読み出す前に、すべての実行経路で値が代入されている必要があります。",
      "explanationMarkdown": "正答は A. 3 です。\n\n`int count;` は変数の宣言で、まだ値は入りません。次の `count = 3;` で初めて値を代入しています。`println` を実行する時点では `count` は3で初期化済みなので、`3` が表示されます。\n\n## 覚えるポイント\n\nローカル変数は宣言しただけでは使えません。読み出す前に、すべての実行経路で値が代入されている必要があります。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_javac_release11",
        "runtimeCheck": "passed_expected_output:3",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "`int count;` は変数の宣言で、まだ値は入りません。次の `count = 3;` で初めて値を代入しています。`println` を実行する時点では `count` は3で初期化済みなので、`3` が表示されます。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "variable"
      },
      "tags": [
        "basic",
        "variable",
        "assignment",
        "output",
        "basic-p1"
      ],
      "examFocus": "",
      "qaCategory": "declaration",
      "summary": "変数を宣言してから代入する"
    },
    {
      "id": "basic-p1-012",
      "number": 10,
      "title": "final変数への再代入",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードについて正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        final int limit = 2;\n        limit++;\n        System.out.println(limit);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "3が表示される"
        },
        {
          "key": "B",
          "text": "2が表示される"
        },
        {
          "key": "C",
          "text": "limit++の行でコンパイルエラー"
        },
        {
          "key": "D",
          "text": "実行時に例外が発生する"
        }
      ],
      "answer": [
        "C"
      ],
      "correctAnswerText": "正答は C. limit++の行でコンパイルエラー です。",
      "contentExplanation": "`final` を付けたローカル変数は、一度代入した後に別の値へ変更できません。`limit++` は `limit = limit + 1` 相当の更新を行うため、再代入に該当します。したがって実行前にコンパイルエラーが確定します。",
      "optionDetails": [
        {
          "key": "A",
          "label": "3が表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。`limit++` は値を3へ更新しようとしますが、`final` 変数は更新できません。"
        },
        {
          "key": "B",
          "label": "2が表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。出力まで進むのではなく、その前の `limit++` がコンパイルを妨げます。"
        },
        {
          "key": "C",
          "label": "limit++の行でコンパイルエラー",
          "judgement": "correct",
          "explanation": "正解です。初期化済みの `final int limit` に対するインクリメントは再代入なので許可されません。"
        },
        {
          "key": "D",
          "label": "実行時に例外が発生する",
          "judgement": "incorrect",
          "explanation": "不正解です。禁止されている更新はコンパイル時に検出され、クラスは実行されません。"
        }
      ],
      "rememberPoint": "`++` と `--` も変数の値を書き換える演算です。`final` 変数には使用できません。",
      "explanationMarkdown": "正答は C. limit++の行でコンパイルエラー です。\n\n`final` を付けたローカル変数は、一度代入した後に別の値へ変更できません。`limit++` は `limit = limit + 1` 相当の更新を行うため、再代入に該当します。したがって実行前にコンパイルエラーが確定します。\n\n## 覚えるポイント\n\n`++` と `--` も変数の値を書き換える演算です。`final` 変数には使用できません。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_expected_compile_failure_javac_release11",
        "runtimeCheck": "not_applicable_compile_error",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "`final` を付けたローカル変数は、一度代入した後に別の値へ変更できません。`limit++` は `limit = limit + 1` 相当の更新を行うため、再代入に該当します。したがって実行前にコンパイルエラーが確定します。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "final"
      },
      "tags": [
        "basic",
        "final",
        "variable",
        "compile-error",
        "basic-p1"
      ],
      "examFocus": "",
      "qaCategory": "declaration",
      "summary": "final変数への再代入"
    },
    {
      "id": "basic-p1-013",
      "number": 11,
      "title": "printとprintlnの改行位置",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードの表示結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.print(\"A\");\n        System.out.println(\"B\");\n        System.out.print(\"C\");\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "1行目にAB、2行目にC"
        },
        {
          "key": "B",
          "text": "1行目にA、2行目にB、3行目にC"
        },
        {
          "key": "C",
          "text": "ABCが1行で表示される"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 1行目にAB、2行目にC です。",
      "contentExplanation": "最初の `print(\"A\")` は改行しません。続く `println(\"B\")` は同じ行にBを出力した後で改行します。最後の `print(\"C\")` は新しい行にCを出力し、末尾の改行は追加しません。",
      "optionDetails": [
        {
          "key": "A",
          "label": "1行目にAB、2行目にC",
          "judgement": "correct",
          "explanation": "正解です。AとBは同じ行に続き、`println` の後で改行されてCが次の行へ移ります。"
        },
        {
          "key": "B",
          "label": "1行目にA、2行目にB、3行目にC",
          "judgement": "incorrect",
          "explanation": "不正解です。`print(\"A\")` はAの直後に改行しません。"
        },
        {
          "key": "C",
          "label": "ABCが1行で表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。`println(\"B\")` がBの後で改行するため、Cは同じ行には続きません。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。`print` と `println` はどちらも有効な出力メソッドです。"
        }
      ],
      "rememberPoint": "`print` は出力後も同じ行を維持し、`println` は値を出力した後に改行します。",
      "explanationMarkdown": "正答は A. 1行目にAB、2行目にC です。\n\n最初の `print(\"A\")` は改行しません。続く `println(\"B\")` は同じ行にBを出力した後で改行します。最後の `print(\"C\")` は新しい行にCを出力し、末尾の改行は追加しません。\n\n## 覚えるポイント\n\n`print` は出力後も同じ行を維持し、`println` は値を出力した後に改行します。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_javac_release11",
        "runtimeCheck": "passed_expected_output:AB\\nC",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "最初の `print(\"A\")` は改行しません。続く `println(\"B\")` は同じ行にBを出力した後で改行します。最後の `print(\"C\")` は新しい行にCを出力し、末尾の改行は追加しません。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "output"
      },
      "tags": [
        "basic",
        "output",
        "print",
        "println",
        "basic-p1"
      ],
      "examFocus": "",
      "qaCategory": "output",
      "summary": "printとprintlnの改行位置"
    },
    {
      "id": "basic-p1-008",
      "number": 12,
      "title": "Java基礎判定：クラス #8",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "class Item {\n    int price = 100;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Item item = new Item();\n        item.price += 50;\n        System.out.println(item.price);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "100"
        },
        {
          "key": "B",
          "text": "150"
        },
        {
          "key": "C",
          "text": "50"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "B"
      ],
      "correctAnswerText": "正答は B. 150 です。",
      "contentExplanation": "### オブジェクト生成とフィールドの更新\n\n`new Item()` で `Item` のインスタンスが作られます。フィールド `price` には宣言時の初期化式によって `100` が設定されます。\n\n```java\nclass Item {\n    int price = 100;\n}\n```\n\n変数 `item` は作成したインスタンスを参照し、`item.price` でそのフィールドへアクセスします。\n\n```java\nItem item = new Item();\nitem.price += 50;\n```\n\n`+=` は現在値へ右辺を加えて同じ場所へ代入する演算子です。したがって `price` は `100 + 50` によって `150` となり、その値が表示されます。",
      "optionDetails": [
        {
          "key": "A",
          "label": "100",
          "judgement": "incorrect",
          "explanation": "不正解です。生成直後は `100` ですが、出力前に `item.price += 50;` が実行されています。"
        },
        {
          "key": "B",
          "label": "150",
          "judgement": "correct",
          "explanation": "正解です。フィールドの初期値 `100` に `50` が加算され、`150` が表示されます。"
        },
        {
          "key": "C",
          "label": "50",
          "judgement": "incorrect",
          "explanation": "不正解です。`+= 50` はフィールドを `50` へ置き換えるのではなく、現在値へ `50` を加えます。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。`Item` と `Main` は同じパッケージにあり、パッケージアクセスの `price` を参照できます。"
        }
      ],
      "rememberPoint": "インスタンス生成後は、参照変数を通してフィールドの現在値を追います。`a += b` は `a = a + b` に相当します。",
      "explanationMarkdown": "正答は B. 150 です。\n\n### オブジェクト生成とフィールドの更新\n\n`new Item()` で `Item` のインスタンスが作られます。フィールド `price` には宣言時の初期化式によって `100` が設定されます。\n\n```java\nclass Item {\n    int price = 100;\n}\n```\n\n変数 `item` は作成したインスタンスを参照し、`item.price` でそのフィールドへアクセスします。\n\n```java\nItem item = new Item();\nitem.price += 50;\n```\n\n`+=` は現在値へ右辺を加えて同じ場所へ代入する演算子です。したがって `price` は `100 + 50` によって `150` となり、その値が表示されます。\n\n## 覚えるポイント\n\nインスタンス生成後は、参照変数を通してフィールドの現在値を追います。`a += b` は `a = a + b` に相当します。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "object_field_initialization_compound_assignment"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "### オブジェクト生成とフィールドの更新\n\n`new Item()` で `Item` のインスタンスが作られます。フィールド `price` には宣言時の初期化式によって `100` が設定されます。\n\n```java\nclass Item {\n    int price = 100;\n}\n```\n\n変数 `item` は作成したインスタンスを参照し、`item.price` でそのフィールドへアクセスします。\n\n```java\nItem item = new Item();\nitem.price += 50;\n```\n\n`+=` は現在値へ右辺を加えて同じ場所へ代入する演算子です。したがって `price` は `100 + 50` によって `150` となり、その値が表示されます。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "class"
      },
      "tags": [
        "basic",
        "class",
        "field"
      ],
      "examFocus": "",
      "qaCategory": "class",
      "summary": "Java基礎判定：クラス #8"
    },
    {
      "id": "basic-p1-009",
      "number": 13,
      "title": "Java基礎判定：String #9",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abc\";\n        s.toUpperCase();\n        System.out.println(s);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "ABC"
        },
        {
          "key": "B",
          "text": "abc"
        },
        {
          "key": "C",
          "text": "null"
        },
        {
          "key": "D",
          "text": "実行時例外"
        }
      ],
      "answer": [
        "B"
      ],
      "correctAnswerText": "正答は B. abc です。",
      "contentExplanation": "### `String` は元の内容を書き換えない\n\n`String` オブジェクトは不変です。`toUpperCase()` は参照中の文字列を直接変更せず、大文字化した別の `String` を戻り値として返します。\n\n```java\nString s = \"abc\";\ns.toUpperCase();\nSystem.out.println(s);\n```\n\n2行目で得られる `\"ABC\"` は、変数へ代入されずに捨てられます。`s` が参照しているのは最後まで元の `\"abc\"` なので、出力は `abc` です。\n\n結果を保持するなら、次のように戻り値を代入します。\n\n```java\ns = s.toUpperCase();\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "ABC",
          "judgement": "incorrect",
          "explanation": "不正解です。`toUpperCase()` の戻り値は `\"ABC\"` ですが、`s` へ再代入していないため出力には使われません。"
        },
        {
          "key": "B",
          "label": "abc",
          "judgement": "correct",
          "explanation": "正解です。`s` は元の `\"abc\"` を参照したままなので、`abc` が表示されます。"
        },
        {
          "key": "C",
          "label": "null",
          "judgement": "incorrect",
          "explanation": "不正解です。`s` には `\"abc\"` が代入されており、メソッド呼び出しによって `null` にはなりません。"
        },
        {
          "key": "D",
          "label": "実行時例外",
          "judgement": "incorrect",
          "explanation": "不正解です。`s` は有効な文字列を参照しているため、`toUpperCase()` も出力も正常に実行されます。"
        }
      ],
      "rememberPoint": "`String` の変換メソッドは新しい文字列を返します。結果を残すには、戻り値を変数へ代入するか、その戻り値を直接利用します。",
      "explanationMarkdown": "正答は B. abc です。\n\n### `String` は元の内容を書き換えない\n\n`String` オブジェクトは不変です。`toUpperCase()` は参照中の文字列を直接変更せず、大文字化した別の `String` を戻り値として返します。\n\n```java\nString s = \"abc\";\ns.toUpperCase();\nSystem.out.println(s);\n```\n\n2行目で得られる `\"ABC\"` は、変数へ代入されずに捨てられます。`s` が参照しているのは最後まで元の `\"abc\"` なので、出力は `abc` です。\n\n結果を保持するなら、次のように戻り値を代入します。\n\n```java\ns = s.toUpperCase();\n```\n\n## 覚えるポイント\n\n`String` の変換メソッドは新しい文字列を返します。結果を残すには、戻り値を変数へ代入するか、その戻り値を直接利用します。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "final_cross_static_audit",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass_no_explanation_consists_only_of_banned_phrase",
        "identifierLiteralContaminationAudit": "pass_no_high_confidence_foreign_identifier_found",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "listed_not_deleted",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-03 JST",
        "styleRevision": "v716-final-cross-static-audit",
        "priorReviewMetadata": {
          "method": "static_review_with_auxiliary_openjdk21_release11",
          "styleRevision": "v714-basic-concept-introduction-role-audit",
          "updatedAt": "2026-07-03 JST",
          "verifiedBy": "static_consistency_and_auxiliary_openjdk21_release11",
          "compileCheck": "matched_expected_result_openjdk21_javac_release11",
          "runtimeCheck": "matched_expected_result_openjdk21",
          "conceptKey": "string_immutability_ignored_return"
        },
        "note": "全2,505問を横断し、禁止定型文の単独使用、選択肢固有理由、問題間の識別子・リテラル混入、解説フィールドの役割、完全重複、正答・選択肢のデータ整合を静的に再監査した。全問一括のコンパイル・実行、アプリ、Markdownレンダリング、ブラウザ表示は未実行のため、qaStatusはverified_staticを維持する。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "### `String` は元の内容を書き換えない\n\n`String` オブジェクトは不変です。`toUpperCase()` は参照中の文字列を直接変更せず、大文字化した別の `String` を戻り値として返します。\n\n```java\nString s = \"abc\";\ns.toUpperCase();\nSystem.out.println(s);\n```\n\n2行目で得られる `\"ABC\"` は、変数へ代入されずに捨てられます。`s` が参照しているのは最後まで元の `\"abc\"` なので、出力は `abc` です。\n\n結果を保持するなら、次のように戻り値を代入します。\n\n```java\ns = s.toUpperCase();\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "string"
      },
      "tags": [
        "basic",
        "string",
        "immutability"
      ],
      "examFocus": "",
      "qaCategory": "string",
      "summary": "Java基礎判定：String #9"
    },
    {
      "id": "basic-p1-014",
      "number": 14,
      "title": "ブロック内で宣言した変数の有効範囲",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードについて正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        if (true) {\n            int value = 5;\n        }\n        System.out.println(value);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "5が表示される"
        },
        {
          "key": "B",
          "text": "0が表示される"
        },
        {
          "key": "C",
          "text": "printlnの行でコンパイルエラー"
        },
        {
          "key": "D",
          "text": "実行時に例外が発生する"
        }
      ],
      "answer": [
        "C"
      ],
      "correctAnswerText": "正答は C. printlnの行でコンパイルエラー です。",
      "contentExplanation": "`value` は `if` の波かっこ内で宣言されています。ローカル変数の有効範囲は宣言されたブロックの終わりまでなので、閉じ波かっこの後では名前 `value` を参照できません。条件が常に `true` であることは、スコープを広げる理由にはなりません。",
      "optionDetails": [
        {
          "key": "A",
          "label": "5が表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。実行時には値5が代入されますが、そもそもブロック外から変数名を参照できません。"
        },
        {
          "key": "B",
          "label": "0が表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。値が0になる問題ではなく、`value` という変数が参照位置のスコープに存在しません。"
        },
        {
          "key": "C",
          "label": "printlnの行でコンパイルエラー",
          "judgement": "correct",
          "explanation": "正解です。`value` のスコープは `if` ブロック内だけなので、`println` からは見えません。"
        },
        {
          "key": "D",
          "label": "実行時に例外が発生する",
          "judgement": "incorrect",
          "explanation": "不正解です。変数名を解決できない問題はコンパイル時に検出されます。"
        }
      ],
      "rememberPoint": "変数のスコープは実行されたかどうかではなく、宣言を囲む波かっこの構造で決まります。",
      "explanationMarkdown": "正答は C. printlnの行でコンパイルエラー です。\n\n`value` は `if` の波かっこ内で宣言されています。ローカル変数の有効範囲は宣言されたブロックの終わりまでなので、閉じ波かっこの後では名前 `value` を参照できません。条件が常に `true` であることは、スコープを広げる理由にはなりません。\n\n## 覚えるポイント\n\n変数のスコープは実行されたかどうかではなく、宣言を囲む波かっこの構造で決まります。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_expected_compile_failure_javac_release11",
        "runtimeCheck": "not_applicable_compile_error",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "`value` は `if` の波かっこ内で宣言されています。ローカル変数の有効範囲は宣言されたブロックの終わりまでなので、閉じ波かっこの後では名前 `value` を参照できません。条件が常に `true` であることは、スコープを広げる理由にはなりません。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "scope"
      },
      "tags": [
        "basic",
        "scope",
        "if",
        "compile-error",
        "basic-p1"
      ],
      "examFocus": "",
      "qaCategory": "scope",
      "summary": "ブロック内で宣言した変数の有効範囲"
    },
    {
      "id": "basic-p1-015",
      "number": 15,
      "title": "数値加算から文字列連結へ切り替わる位置",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(1 + 2 + \"3\" + 4);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "334"
        },
        {
          "key": "B",
          "text": "1234"
        },
        {
          "key": "C",
          "text": "37"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 334 です。",
      "contentExplanation": "`+` は左から評価されます。最初の `1 + 2` は整数加算なので3です。次の `3 + \"3\"` で文字列連結へ切り替わり `\"33\"` になります。その後の `+ 4` も文字列連結となるため、最終結果は `\"334\"` です。",
      "optionDetails": [
        {
          "key": "A",
          "label": "334",
          "judgement": "correct",
          "explanation": "正解です。整数加算で3を作った後、文字列 `\"3\"` と4が順に連結されます。"
        },
        {
          "key": "B",
          "label": "1234",
          "judgement": "incorrect",
          "explanation": "不正解です。先頭の1と2は文字列が現れる前に整数同士として加算されます。"
        },
        {
          "key": "C",
          "label": "37",
          "judgement": "incorrect",
          "explanation": "不正解です。`\"3\"` が含まれた時点から `+` は数値加算ではなく文字列連結になります。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。数値と文字列を `+` で連結する構文は有効です。"
        }
      ],
      "rememberPoint": "`+` を左から追い、どの時点でオペランドの一方が文字列になるかを確認します。文字列になった後の `+` は連結です。",
      "explanationMarkdown": "正答は A. 334 です。\n\n`+` は左から評価されます。最初の `1 + 2` は整数加算なので3です。次の `3 + \"3\"` で文字列連結へ切り替わり `\"33\"` になります。その後の `+ 4` も文字列連結となるため、最終結果は `\"334\"` です。\n\n## 覚えるポイント\n\n`+` を左から追い、どの時点でオペランドの一方が文字列になるかを確認します。文字列になった後の `+` は連結です。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_javac_release11",
        "runtimeCheck": "passed_expected_output:334",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "`+` は左から評価されます。最初の `1 + 2` は整数加算なので3です。次の `3 + \"3\"` で文字列連結へ切り替わり `\"33\"` になります。その後の `+ 4` も文字列連結となるため、最終結果は `\"334\"` です。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "string-concat"
      },
      "tags": [
        "basic",
        "string",
        "operator",
        "evaluation-order",
        "basic-p1"
      ],
      "examFocus": "",
      "qaCategory": "operator",
      "summary": "数値加算から文字列連結へ切り替わる位置"
    }
  ],
  "basic-p2": [
    {
      "id": "basic-p2-001",
      "number": 1,
      "title": "Java基礎文法：剰余演算",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(17 % 5);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "2"
        },
        {
          "key": "B",
          "text": "3"
        },
        {
          "key": "C",
          "text": "12"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 2 です。",
      "contentExplanation": "`%` は除算の余りを求める演算子です。`17 = 5 × 3 + 2` なので、結果は `2` です。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(17 % 5);\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "2",
          "judgement": "correct",
          "explanation": "正解です。`17` を `5` で割った余りは `2` です。"
        },
        {
          "key": "B",
          "label": "3",
          "judgement": "incorrect",
          "explanation": "不正解です。商ではなく余りを求めるため、`3` にはなりません。"
        },
        {
          "key": "C",
          "label": "12",
          "judgement": "incorrect",
          "explanation": "不正解です。`%` は減算ではありません。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。整数同士の剰余演算は有効です。"
        }
      ],
      "rememberPoint": "`/` は商、`%` は余りです。偶数判定では `n % 2 == 0` のように使います。",
      "explanationMarkdown": "正答は A. 2 です。\n\n`%` は除算の余りを求める演算子です。`17 = 5 × 3 + 2` なので、結果は `2` です。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(17 % 5);\n    }\n}\n```\n\n## 覚えるポイント\n\n`/` は商、`%` は余りです。偶数判定では `n % 2 == 0` のように使います。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "post_rebuild_exact_duplicate_patch",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "全体重複監査で検出した完全一致を解消し、正答・選択肢・解説を静的に確認した。実行確認とブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "`%` は除算の余りを求める演算子です。`17 = 5 × 3 + 2` なので、結果は `2` です。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(17 % 5);\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "operator"
      },
      "tags": [
        "basic",
        "basic-p2",
        "operator"
      ],
      "examFocus": "",
      "qaCategory": "operator",
      "summary": "Java基礎文法：剰余演算"
    },
    {
      "id": "basic-p2-002",
      "number": 2,
      "title": "Java基礎文法：ローカル変数の初期化",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードについて正しい説明を選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int count;\n        System.out.println(count);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "0が表示される"
        },
        {
          "key": "B",
          "text": "nullが表示される"
        },
        {
          "key": "C",
          "text": "コンパイルエラーになる"
        },
        {
          "key": "D",
          "text": "実行時例外になる"
        }
      ],
      "answer": [
        "C"
      ],
      "correctAnswerText": "正答は C. コンパイルエラーになる です。",
      "contentExplanation": "フィールドとは異なり、メソッド内で宣言したローカル変数にはデフォルト値が入りません。読み取る前に、すべての実行経路で値が代入されている必要があります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int count;\n        System.out.println(count);\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "0が表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。ローカル変数には自動の初期値が設定されません。"
        },
        {
          "key": "B",
          "label": "nullが表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。`int` はプリミティブ型であり、`null` を値にできません。"
        },
        {
          "key": "C",
          "label": "コンパイルエラーになる",
          "judgement": "correct",
          "explanation": "正解です。代入前のローカル変数 `count` を読み取っているため、確実な初期化の規則に違反します。"
        },
        {
          "key": "D",
          "label": "実行時例外になる",
          "judgement": "incorrect",
          "explanation": "不正解です。この問題は実行前のコンパイル段階で検出されます。"
        }
      ],
      "rememberPoint": "ローカル変数は「宣言しただけ」では使えません。フィールドのデフォルト値と区別します。",
      "explanationMarkdown": "正答は C. コンパイルエラーになる です。\n\nフィールドとは異なり、メソッド内で宣言したローカル変数にはデフォルト値が入りません。読み取る前に、すべての実行経路で値が代入されている必要があります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int count;\n        System.out.println(count);\n    }\n}\n```\n\n## 覚えるポイント\n\nローカル変数は「宣言しただけ」では使えません。フィールドのデフォルト値と区別します。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "フィールドとは異なり、メソッド内で宣言したローカル変数にはデフォルト値が入りません。読み取る前に、すべての実行経路で値が代入されている必要があります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int count;\n        System.out.println(count);\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "declaration"
      },
      "tags": [
        "basic",
        "declaration",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "declaration",
      "summary": "Java基礎文法：ローカル変数の初期化"
    },
    {
      "id": "basic-p2-003",
      "number": 3,
      "title": "Java基礎文法：論理演算子",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean allowed = age >= 18 && age < 65;\n        System.out.println(allowed);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "true"
        },
        {
          "key": "B",
          "text": "false"
        },
        {
          "key": "C",
          "text": "20"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. true です。",
      "contentExplanation": "`&&` は左右の条件が両方とも `true` のときだけ `true` になります。年齢20は下限18以上かつ上限65未満です。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean allowed = age >= 18 && age < 65;\n        System.out.println(allowed);\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "true",
          "judgement": "correct",
          "explanation": "正解です。`20 >= 18` と `20 < 65` の両方が `true` です。"
        },
        {
          "key": "B",
          "label": "false",
          "judgement": "incorrect",
          "explanation": "不正解です。`&&` の左右はどちらも成立しています。"
        },
        {
          "key": "C",
          "label": "20",
          "judgement": "incorrect",
          "explanation": "不正解です。表示しているのは `int` 変数ではなく `boolean` 変数です。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。比較式と `&&` の組み合わせは有効です。"
        }
      ],
      "rememberPoint": "`&&` はAND、`||` はORです。複数の比較結果を結合するときは、各比較式を個別に評価します。",
      "explanationMarkdown": "正答は A. true です。\n\n`&&` は左右の条件が両方とも `true` のときだけ `true` になります。年齢20は下限18以上かつ上限65未満です。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean allowed = age >= 18 && age < 65;\n        System.out.println(allowed);\n    }\n}\n```\n\n## 覚えるポイント\n\n`&&` はAND、`||` はORです。複数の比較結果を結合するときは、各比較式を個別に評価します。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "`&&` は左右の条件が両方とも `true` のときだけ `true` になります。年齢20は下限18以上かつ上限65未満です。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean allowed = age >= 18 && age < 65;\n        System.out.println(allowed);\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "boolean"
      },
      "tags": [
        "basic",
        "boolean",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "boolean",
      "summary": "Java基礎文法：論理演算子"
    },
    {
      "id": "basic-p2-006",
      "number": 4,
      "title": "Java基礎文法：配列要素の更新",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int[] values = {2, 4, 6};\n        values[1] += 3;\n        System.out.println(values[1]);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "3"
        },
        {
          "key": "B",
          "text": "4"
        },
        {
          "key": "C",
          "text": "7"
        },
        {
          "key": "D",
          "text": "9"
        }
      ],
      "answer": [
        "C"
      ],
      "correctAnswerText": "正答は C. 7 です。",
      "contentExplanation": "配列の添字は0から始まるため、`values[1]` は2番目の要素4です。複合代入で3を加えた結果、7になります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] values = {2, 4, 6};\n        values[1] += 3;\n        System.out.println(values[1]);\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "3",
          "judgement": "incorrect",
          "explanation": "不正解です。`+= 3` は3を代入する処理ではありません。"
        },
        {
          "key": "B",
          "label": "4",
          "judgement": "incorrect",
          "explanation": "不正解です。添字1の要素は更新されています。"
        },
        {
          "key": "C",
          "label": "7",
          "judgement": "correct",
          "explanation": "正解です。添字1の元の値4に3を加えるため7です。"
        },
        {
          "key": "D",
          "label": "9",
          "judgement": "incorrect",
          "explanation": "不正解です。添字2の値6は対象ではありません。"
        }
      ],
      "rememberPoint": "配列の先頭は添字0です。要素更新では、どの添字を参照しているかを先に確認します。",
      "explanationMarkdown": "正答は C. 7 です。\n\n配列の添字は0から始まるため、`values[1]` は2番目の要素4です。複合代入で3を加えた結果、7になります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] values = {2, 4, 6};\n        values[1] += 3;\n        System.out.println(values[1]);\n    }\n}\n```\n\n## 覚えるポイント\n\n配列の先頭は添字0です。要素更新では、どの添字を参照しているかを先に確認します。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "配列の添字は0から始まるため、`values[1]` は2番目の要素4です。複合代入で3を加えた結果、7になります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] values = {2, 4, 6};\n        values[1] += 3;\n        System.out.println(values[1]);\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "array"
      },
      "tags": [
        "basic",
        "array",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "array",
      "summary": "Java基礎文法：配列要素の更新"
    },
    {
      "id": "basic-p2-009",
      "number": 5,
      "title": "Java基礎文法：Stringの比較",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String a = new String(\"java\");\n        String b = new String(\"java\");\n        System.out.println(a.equals(b));\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "true"
        },
        {
          "key": "B",
          "text": "false"
        },
        {
          "key": "C",
          "text": "java"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. true です。",
      "contentExplanation": "`new` により参照先は別々ですが、`equals` は参照そのものではなく文字列の内容を比較します。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String a = new String(\"java\");\n        String b = new String(\"java\");\n        System.out.println(a.equals(b));\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "true",
          "judgement": "correct",
          "explanation": "正解です。`equals` は2つの文字列内容が同じかを比較します。"
        },
        {
          "key": "B",
          "label": "false",
          "judgement": "incorrect",
          "explanation": "不正解です。別インスタンスでも、文字列内容が同じなら `equals` は `true` です。"
        },
        {
          "key": "C",
          "label": "java",
          "judgement": "incorrect",
          "explanation": "不正解です。`equals` の戻り値は文字列ではなく `boolean` です。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。`String.equals` の呼び出しは有効です。"
        }
      ],
      "rememberPoint": "参照の同一性は `==`、`String` の内容比較は通常 `equals` を使います。",
      "explanationMarkdown": "正答は A. true です。\n\n`new` により参照先は別々ですが、`equals` は参照そのものではなく文字列の内容を比較します。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String a = new String(\"java\");\n        String b = new String(\"java\");\n        System.out.println(a.equals(b));\n    }\n}\n```\n\n## 覚えるポイント\n\n参照の同一性は `==`、`String` の内容比較は通常 `equals` を使います。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "`new` により参照先は別々ですが、`equals` は参照そのものではなく文字列の内容を比較します。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String a = new String(\"java\");\n        String b = new String(\"java\");\n        System.out.println(a.equals(b));\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "string"
      },
      "tags": [
        "basic",
        "string",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "string",
      "summary": "Java基礎文法：Stringの比較"
    },
    {
      "id": "basic-p2-011",
      "number": 6,
      "title": "整数除算の後でdoubleへ代入する",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        double result = 7 / 2;\n        System.out.println(result);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "3.0"
        },
        {
          "key": "B",
          "text": "3.5"
        },
        {
          "key": "C",
          "text": "3"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 3.0 です。",
      "contentExplanation": "右辺の `7 / 2` は、代入先を見る前に `int` 同士の除算として評価されます。その結果は小数部分を切り捨てた整数3です。最後に3が `double` へ拡大変換されるため、変数 `result` の値は `3.0` になります。",
      "optionDetails": [
        {
          "key": "A",
          "label": "3.0",
          "judgement": "correct",
          "explanation": "正解です。整数除算の結果3が、その後でdoubleへ変換されます。"
        },
        {
          "key": "B",
          "label": "3.5",
          "judgement": "incorrect",
          "explanation": "不正解です。代入先がdoubleでも、右辺の除算時点では両オペランドがintなので小数部分は失われます。"
        },
        {
          "key": "C",
          "label": "3",
          "judgement": "incorrect",
          "explanation": "不正解です。数値としては3ですが、printlnがdouble値を表示するため表記は3.0です。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。intの結果をdoubleへ拡大変換して代入することは許可されます。"
        }
      ],
      "rememberPoint": "式は代入前に右辺だけで評価されます。小数結果が必要なら、除算前に `7.0 / 2` や `(double) 7 / 2` とします。",
      "explanationMarkdown": "正答は A. 3.0 です。\n\n右辺の `7 / 2` は、代入先を見る前に `int` 同士の除算として評価されます。その結果は小数部分を切り捨てた整数3です。最後に3が `double` へ拡大変換されるため、変数 `result` の値は `3.0` になります。\n\n## 覚えるポイント\n\n式は代入前に右辺だけで評価されます。小数結果が必要なら、除算前に `7.0 / 2` や `(double) 7 / 2` とします。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_javac_release11",
        "runtimeCheck": "passed_expected_output:3.0",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "右辺の `7 / 2` は、代入先を見る前に `int` 同士の除算として評価されます。その結果は小数部分を切り捨てた整数3です。最後に3が `double` へ拡大変換されるため、変数 `result` の値は `3.0` になります。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "operator"
      },
      "tags": [
        "basic",
        "division",
        "numeric-promotion",
        "assignment",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "operator",
      "summary": "整数除算の後でdoubleへ代入する"
    },
    {
      "id": "basic-p2-012",
      "number": 7,
      "title": "charと整数の加算",
      "type": "single",
      "selectCount": 1,
      "difficulty": "basic",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        char c = 'A';\n        System.out.println(c + 1);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "66"
        },
        {
          "key": "B",
          "text": "B"
        },
        {
          "key": "C",
          "text": "A1"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 66 です。",
      "contentExplanation": "`char` は文字を表しますが、算術演算では数値として扱われます。`'A'` の文字コード値は65なので、`c + 1` は整数66になります。結果の型は `int` であり、自動的に文字Bへ戻るわけではありません。",
      "optionDetails": [
        {
          "key": "A",
          "label": "66",
          "judgement": "correct",
          "explanation": "正解です。`'A'` の数値65に1を加えた `int` 値66が表示されます。"
        },
        {
          "key": "B",
          "label": "B",
          "judgement": "incorrect",
          "explanation": "不正解です。文字Bとして表示するには `(char) (c + 1)` のような明示的な変換が必要です。"
        },
        {
          "key": "C",
          "label": "A1",
          "judgement": "incorrect",
          "explanation": "不正解です。文字列が含まれていないため、文字列連結にはなりません。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。`char` は整数へ数値昇格して算術演算できます。"
        }
      ],
      "rememberPoint": "`char` が算術演算に入ると整数へ昇格します。計算後に文字として扱うなら、範囲を確認して `char` へ明示変換します。",
      "explanationMarkdown": "正答は A. 66 です。\n\n`char` は文字を表しますが、算術演算では数値として扱われます。`'A'` の文字コード値は65なので、`c + 1` は整数66になります。結果の型は `int` であり、自動的に文字Bへ戻るわけではありません。\n\n## 覚えるポイント\n\n`char` が算術演算に入ると整数へ昇格します。計算後に文字として扱うなら、範囲を確認して `char` へ明示変換します。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_javac_release11",
        "runtimeCheck": "passed_expected_output:66",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "`char` は文字を表しますが、算術演算では数値として扱われます。`'A'` の文字コード値は65なので、`c + 1` は整数66になります。結果の型は `int` であり、自動的に文字Bへ戻るわけではありません。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "type-promotion"
      },
      "tags": [
        "basic",
        "char",
        "numeric-promotion",
        "operator",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "type",
      "summary": "charと整数の加算"
    },
    {
      "id": "basic-p2-004",
      "number": 8,
      "title": "Java基礎文法：else if",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int score = 72;\n        if (score >= 80) {\n            System.out.print(\"A\");\n        } else if (score >= 60) {\n            System.out.print(\"B\");\n        } else {\n            System.out.print(\"C\");\n        }\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "A"
        },
        {
          "key": "B",
          "text": "B"
        },
        {
          "key": "C",
          "text": "C"
        },
        {
          "key": "D",
          "text": "AB"
        }
      ],
      "answer": [
        "B"
      ],
      "correctAnswerText": "正答は B. B です。",
      "contentExplanation": "条件は上から順に判定され、最初に成立した分岐だけが実行されます。72点は80点未満で60点以上なので、2番目のブロックへ進みます。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int score = 72;\n        if (score >= 80) {\n            System.out.print(\"A\");\n        } else if (score >= 60) {\n            System.out.print(\"B\");\n        } else {\n            System.out.print(\"C\");\n        }\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "A",
          "judgement": "incorrect",
          "explanation": "不正解です。`72 >= 80` は `false` です。"
        },
        {
          "key": "B",
          "label": "B",
          "judgement": "correct",
          "explanation": "正解です。最初の条件は不成立ですが、`72 >= 60` が成立します。"
        },
        {
          "key": "C",
          "label": "C",
          "judgement": "incorrect",
          "explanation": "不正解です。2番目の条件が成立するため、最後の `else` には進みません。"
        },
        {
          "key": "D",
          "label": "AB",
          "judgement": "incorrect",
          "explanation": "不正解です。`if` / `else if` / `else` では、実行される分岐は1つだけです。"
        }
      ],
      "rememberPoint": "`else if` の並びでは、広い条件を先に置くと後続条件へ到達しない場合があります。",
      "explanationMarkdown": "正答は B. B です。\n\n条件は上から順に判定され、最初に成立した分岐だけが実行されます。72点は80点未満で60点以上なので、2番目のブロックへ進みます。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int score = 72;\n        if (score >= 80) {\n            System.out.print(\"A\");\n        } else if (score >= 60) {\n            System.out.print(\"B\");\n        } else {\n            System.out.print(\"C\");\n        }\n    }\n}\n```\n\n## 覚えるポイント\n\n`else if` の並びでは、広い条件を先に置くと後続条件へ到達しない場合があります。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "条件は上から順に判定され、最初に成立した分岐だけが実行されます。72点は80点未満で60点以上なので、2番目のブロックへ進みます。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int score = 72;\n        if (score >= 80) {\n            System.out.print(\"A\");\n        } else if (score >= 60) {\n            System.out.print(\"B\");\n        } else {\n            System.out.print(\"C\");\n        }\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "control"
      },
      "tags": [
        "basic",
        "control",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "control",
      "summary": "Java基礎文法：else if"
    },
    {
      "id": "basic-p2-005",
      "number": 9,
      "title": "Java基礎文法：while文",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        while (n > 0) {\n            System.out.print(n);\n            n--;\n        }\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "123"
        },
        {
          "key": "B",
          "text": "321"
        },
        {
          "key": "C",
          "text": "210"
        },
        {
          "key": "D",
          "text": "無限ループ"
        }
      ],
      "answer": [
        "B"
      ],
      "correctAnswerText": "正答は B. 321 です。",
      "contentExplanation": "`while` は条件を確認してから本体を実行します。各周回で現在値を表示してから1減らします。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        while (n > 0) {\n            System.out.print(n);\n            n--;\n        }\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "123",
          "judgement": "incorrect",
          "explanation": "不正解です。`n` は3から減少するため、1から増える順序ではありません。"
        },
        {
          "key": "B",
          "label": "321",
          "judgement": "correct",
          "explanation": "正解です。`3`、`2`、`1` を表示した後、`n` が0になって終了します。"
        },
        {
          "key": "C",
          "label": "210",
          "judgement": "incorrect",
          "explanation": "不正解です。表示はデクリメントより先なので、最初に2は表示されません。"
        },
        {
          "key": "D",
          "label": "無限ループ",
          "judgement": "incorrect",
          "explanation": "不正解です。ループ本体で `n--` が実行され、条件はやがて `false` になります。"
        }
      ],
      "rememberPoint": "繰り返し問題では、初期値・継続条件・更新処理の3点を順に追います。",
      "explanationMarkdown": "正答は B. 321 です。\n\n`while` は条件を確認してから本体を実行します。各周回で現在値を表示してから1減らします。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        while (n > 0) {\n            System.out.print(n);\n            n--;\n        }\n    }\n}\n```\n\n## 覚えるポイント\n\n繰り返し問題では、初期値・継続条件・更新処理の3点を順に追います。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "`while` は条件を確認してから本体を実行します。各周回で現在値を表示してから1減らします。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        while (n > 0) {\n            System.out.print(n);\n            n--;\n        }\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "loop"
      },
      "tags": [
        "basic",
        "loop",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "loop",
      "summary": "Java基礎文法：while文"
    },
    {
      "id": "basic-p2-007",
      "number": 10,
      "title": "Java基礎文法：戻り値",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        int result = add(5, 8);\n        System.out.println(result);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "5"
        },
        {
          "key": "B",
          "text": "8"
        },
        {
          "key": "C",
          "text": "13"
        },
        {
          "key": "D",
          "text": "58"
        }
      ],
      "answer": [
        "C"
      ],
      "correctAnswerText": "正答は C. 13 です。",
      "contentExplanation": "`add(5, 8)` の仮引数 `a` と `b` には5と8が入り、`return` で13が呼び出し元へ返ります。\n\n```java\npublic class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        int result = add(5, 8);\n        System.out.println(result);\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "5",
          "judgement": "incorrect",
          "explanation": "不正解です。第1引数だけを返すメソッドではありません。"
        },
        {
          "key": "B",
          "label": "8",
          "judgement": "incorrect",
          "explanation": "不正解です。第2引数だけを返すメソッドではありません。"
        },
        {
          "key": "C",
          "label": "13",
          "judgement": "correct",
          "explanation": "正解です。`return a + b` により5と8の和が返されます。"
        },
        {
          "key": "D",
          "label": "58",
          "judgement": "incorrect",
          "explanation": "不正解です。引数は `int` なので文字列連結にはなりません。"
        }
      ],
      "rememberPoint": "メソッド呼び出しでは、引数が仮引数へ入る流れと、`return` で戻る値を分けて追います。",
      "explanationMarkdown": "正答は C. 13 です。\n\n`add(5, 8)` の仮引数 `a` と `b` には5と8が入り、`return` で13が呼び出し元へ返ります。\n\n```java\npublic class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        int result = add(5, 8);\n        System.out.println(result);\n    }\n}\n```\n\n## 覚えるポイント\n\nメソッド呼び出しでは、引数が仮引数へ入る流れと、`return` で戻る値を分けて追います。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "`add(5, 8)` の仮引数 `a` と `b` には5と8が入り、`return` で13が呼び出し元へ返ります。\n\n```java\npublic class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        int result = add(5, 8);\n        System.out.println(result);\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "method"
      },
      "tags": [
        "basic",
        "method",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "method",
      "summary": "Java基礎文法：戻り値"
    },
    {
      "id": "basic-p2-008",
      "number": 11,
      "title": "Java基礎文法：コンストラクタ",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "class Book {\n    String title;\n    Book(String title) {\n        this.title = title;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Book book = new Book(\"Java\");\n        System.out.println(book.title);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "Java"
        },
        {
          "key": "B",
          "text": "title"
        },
        {
          "key": "C",
          "text": "null"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. Java です。",
      "contentExplanation": "`new Book(\"Java\")` によりコンストラクタが呼ばれ、引数の文字列がインスタンスフィールドへ保存されます。\n\n```java\nclass Book {\n    String title;\n    Book(String title) {\n        this.title = title;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Book book = new Book(\"Java\");\n        System.out.println(book.title);\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "Java",
          "judgement": "correct",
          "explanation": "正解です。コンストラクタ引数が `this.title` へ代入されています。"
        },
        {
          "key": "B",
          "label": "title",
          "judgement": "incorrect",
          "explanation": "不正解です。識別子名そのものを表示する処理ではありません。"
        },
        {
          "key": "C",
          "label": "null",
          "judgement": "incorrect",
          "explanation": "不正解です。フィールドはコンストラクタ内で初期化されています。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。クラス名と同じ名前のコンストラクタ定義は有効です。"
        }
      ],
      "rememberPoint": "`this.field = parameter` は、同名のフィールドと引数を区別する基本的な書き方です。",
      "explanationMarkdown": "正答は A. Java です。\n\n`new Book(\"Java\")` によりコンストラクタが呼ばれ、引数の文字列がインスタンスフィールドへ保存されます。\n\n```java\nclass Book {\n    String title;\n    Book(String title) {\n        this.title = title;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Book book = new Book(\"Java\");\n        System.out.println(book.title);\n    }\n}\n```\n\n## 覚えるポイント\n\n`this.field = parameter` は、同名のフィールドと引数を区別する基本的な書き方です。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": true,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "`new Book(\"Java\")` によりコンストラクタが呼ばれ、引数の文字列がインスタンスフィールドへ保存されます。\n\n```java\nclass Book {\n    String title;\n    Book(String title) {\n        this.title = title;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Book book = new Book(\"Java\");\n        System.out.println(book.title);\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "constructor"
      },
      "tags": [
        "basic",
        "constructor",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "constructor",
      "summary": "Java基礎文法：コンストラクタ"
    },
    {
      "id": "basic-p2-010",
      "number": 12,
      "title": "Java基礎文法：配列境界",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードを実行した結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int[] values = new int[2];\n        System.out.println(values[2]);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "0が表示される"
        },
        {
          "key": "B",
          "text": "nullが表示される"
        },
        {
          "key": "C",
          "text": "コンパイルエラー"
        },
        {
          "key": "D",
          "text": "ArrayIndexOutOfBoundsExceptionが発生する"
        }
      ],
      "answer": [
        "D"
      ],
      "correctAnswerText": "正答は D. ArrayIndexOutOfBoundsExceptionが発生する です。",
      "contentExplanation": "`new int[2]` の有効な添字は0と1です。添字2へのアクセスはコンパイル可能ですが、実行時の境界検査で例外になります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] values = new int[2];\n        System.out.println(values[2]);\n    }\n}\n```",
      "optionDetails": [
        {
          "key": "A",
          "label": "0が表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。要素の初期値は0ですが、添字2の要素自体が存在しません。"
        },
        {
          "key": "B",
          "label": "nullが表示される",
          "judgement": "incorrect",
          "explanation": "不正解です。`int` 配列の要素は `null` になりません。"
        },
        {
          "key": "C",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。添字値はコンパイルできますが、実行時に範囲が検査されます。"
        },
        {
          "key": "D",
          "label": "ArrayIndexOutOfBoundsExceptionが発生する",
          "judgement": "correct",
          "explanation": "正解です。長さ2の配列で有効な添字は0と1だけです。"
        }
      ],
      "rememberPoint": "配列の最大添字は `length - 1` です。コンパイルエラーと実行時例外を区別します。",
      "explanationMarkdown": "正答は D. ArrayIndexOutOfBoundsExceptionが発生する です。\n\n`new int[2]` の有効な添字は0と1です。添字2へのアクセスはコンパイル可能ですが、実行時の境界検査で例外になります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] values = new int[2];\n        System.out.println(values[2]);\n    }\n}\n```\n\n## 覚えるポイント\n\n配列の最大添字は `length - 1` です。コンパイルエラーと実行時例外を区別します。",
      "qaStatus": "verified_static",
      "explanationReview": {
        "method": "question_integrity_rebuild",
        "answerChoiceConsistency": "verified_static",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "replaced_or_reassigned",
        "fullBatchCompileCheck": "not_run",
        "fullBatchRuntimeCheck": "not_run",
        "applicationTest": "not_run",
        "markdownRenderCheck": "not_run",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-07 JST",
        "styleRevision": "v721-question-integrity-update-history",
        "note": "問題・正答・選択肢・解説の整合を静的に確認した。実行確認、ブラウザ表示確認は未実行。",
        "latestMaintenance": "v16-unit-only-quality-merge",
        "latestMaintenanceAt": "2026-07-13 JST"
      },
      "explanation": {
        "summary": "`new int[2]` の有効な添字は0と1です。添字2へのアクセスはコンパイル可能ですが、実行時の境界検査で例外になります。\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int[] values = new int[2];\n        System.out.println(values[2]);\n    }\n}\n```",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "exception"
      },
      "tags": [
        "basic",
        "exception",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "exception",
      "summary": "Java基礎文法：配列境界"
    },
    {
      "id": "basic-p2-013",
      "number": 13,
      "title": "後置インクリメントの代入",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 3;\n        int y = x++;\n        System.out.println(x + \":\" + y);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "4:3"
        },
        {
          "key": "B",
          "text": "3:4"
        },
        {
          "key": "C",
          "text": "4:4"
        },
        {
          "key": "D",
          "text": "3:3"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 4:3 です。",
      "contentExplanation": "後置の `x++` は、式の値として更新前の3を返した後で `x` を4へ増やします。そのため `y` には3が代入され、出力時の `x` は4です。",
      "optionDetails": [
        {
          "key": "A",
          "label": "4:3",
          "judgement": "correct",
          "explanation": "正解です。`y` は更新前の3、`x` は更新後の4になります。"
        },
        {
          "key": "B",
          "label": "3:4",
          "judgement": "incorrect",
          "explanation": "不正解です。後置演算子が返す値と、更新後に変数へ残る値を逆にしています。"
        },
        {
          "key": "C",
          "label": "4:4",
          "judgement": "incorrect",
          "explanation": "不正解です。`y` へ代入されるのはインクリメント前の値です。"
        },
        {
          "key": "D",
          "label": "3:3",
          "judgement": "incorrect",
          "explanation": "不正解です。式の評価後に `x` 自体は1増えます。"
        }
      ],
      "rememberPoint": "後置 `x++` は「現在値を式へ渡してから増やす」、前置 `++x` は「増やしてから新しい値を式へ渡す」と追います。",
      "explanationMarkdown": "正答は A. 4:3 です。\n\n後置の `x++` は、式の値として更新前の3を返した後で `x` を4へ増やします。そのため `y` には3が代入され、出力時の `x` は4です。\n\n## 覚えるポイント\n\n後置 `x++` は「現在値を式へ渡してから増やす」、前置 `++x` は「増やしてから新しい値を式へ渡す」と追います。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_javac_release11",
        "runtimeCheck": "passed_expected_output:4:3",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "後置の `x++` は、式の値として更新前の3を返した後で `x` を4へ増やします。そのため `y` には3が代入され、出力時の `x` は4です。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "operator"
      },
      "tags": [
        "basic",
        "increment",
        "evaluation-order",
        "assignment",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "operator",
      "summary": "後置インクリメントの代入"
    },
    {
      "id": "basic-p2-014",
      "number": 14,
      "title": "短絡評価で右辺を実行しない",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 0;\n        boolean result = false && (++x > 0);\n        System.out.println(x + \":\" + result);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "0:false"
        },
        {
          "key": "B",
          "text": "1:false"
        },
        {
          "key": "C",
          "text": "1:true"
        },
        {
          "key": "D",
          "text": "実行時に例外が発生する"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 0:false です。",
      "contentExplanation": "`&&` は左辺が `false` なら、式全体が必ず `false` と確定するため右辺を評価しません。したがって `++x` は実行されず、`x` は0のままです。`result` は `false` になります。",
      "optionDetails": [
        {
          "key": "A",
          "label": "0:false",
          "judgement": "correct",
          "explanation": "正解です。短絡評価により右辺の `++x` が実行されず、0とfalseが表示されます。"
        },
        {
          "key": "B",
          "label": "1:false",
          "judgement": "incorrect",
          "explanation": "不正解です。左辺だけで結果が決まるため、`x` は増加しません。"
        },
        {
          "key": "C",
          "label": "1:true",
          "judgement": "incorrect",
          "explanation": "不正解です。`&&` の左辺がfalseなので、式全体がtrueになることはありません。"
        },
        {
          "key": "D",
          "label": "実行時に例外が発生する",
          "judgement": "incorrect",
          "explanation": "不正解です。実行されない右辺は副作用も例外も発生させません。"
        }
      ],
      "rememberPoint": "`&&` は左辺false、`||` は左辺trueで右辺を省略します。右辺に更新処理やメソッド呼び出しがある場合は、実行される条件を先に確認します。",
      "explanationMarkdown": "正答は A. 0:false です。\n\n`&&` は左辺が `false` なら、式全体が必ず `false` と確定するため右辺を評価しません。したがって `++x` は実行されず、`x` は0のままです。`result` は `false` になります。\n\n## 覚えるポイント\n\n`&&` は左辺false、`||` は左辺trueで右辺を省略します。右辺に更新処理やメソッド呼び出しがある場合は、実行される条件を先に確認します。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_javac_release11",
        "runtimeCheck": "passed_expected_output:0:false",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "`&&` は左辺が `false` なら、式全体が必ず `false` と確定するため右辺を評価しません。したがって `++x` は実行されず、`x` は0のままです。`result` は `false` になります。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "short-circuit"
      },
      "tags": [
        "basic",
        "short-circuit",
        "boolean",
        "evaluation-order",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "operator",
      "summary": "短絡評価で右辺を実行しない"
    },
    {
      "id": "basic-p2-015",
      "number": 15,
      "title": "プリミティブ引数は値がコピーされる",
      "type": "single",
      "selectCount": 1,
      "difficulty": "standard",
      "level": "basic",
      "prompt": "次のコードの実行結果として正しいものを選びなさい。",
      "codeBlocks": [
        {
          "title": "コード",
          "code": "public class Main {\n    static void update(int value) {\n        value = 9;\n    }\n\n    public static void main(String[] args) {\n        int n = 4;\n        update(n);\n        System.out.println(n);\n    }\n}"
        }
      ],
      "options": [
        {
          "key": "A",
          "text": "4"
        },
        {
          "key": "B",
          "text": "9"
        },
        {
          "key": "C",
          "text": "0"
        },
        {
          "key": "D",
          "text": "コンパイルエラー"
        }
      ],
      "answer": [
        "A"
      ],
      "correctAnswerText": "正答は A. 4 です。",
      "contentExplanation": "メソッド呼び出し `update(n)` では、`n` が持つ整数値4が仮引数 `value` へコピーされます。メソッド内の `value = 9;` はコピー側だけを書き換えるため、呼び出し元の `n` は4のままです。",
      "optionDetails": [
        {
          "key": "A",
          "label": "4",
          "judgement": "correct",
          "explanation": "正解です。メソッド内で変更したのは仮引数 `value` であり、呼び出し元の `n` ではありません。"
        },
        {
          "key": "B",
          "label": "9",
          "judgement": "incorrect",
          "explanation": "不正解です。Javaの引数渡しは値渡しで、プリミティブ値の代入は呼び出し元へ逆流しません。"
        },
        {
          "key": "C",
          "label": "0",
          "judgement": "incorrect",
          "explanation": "不正解です。`n` は呼び出し前に4で初期化され、その値は保持されます。"
        },
        {
          "key": "D",
          "label": "コンパイルエラー",
          "judgement": "incorrect",
          "explanation": "不正解です。`int` 値を `int` 仮引数へ渡す呼び出しは型として正しいです。"
        }
      ],
      "rememberPoint": "Javaの引数は常に値渡しです。プリミティブ型では値そのものがコピーされ、参照型では参照値がコピーされます。",
      "explanationMarkdown": "正答は A. 4 です。\n\nメソッド呼び出し `update(n)` では、`n` が持つ整数値4が仮引数 `value` へコピーされます。メソッド内の `value = 9;` はコピー側だけを書き換えるため、呼び出し元の `n` は4のままです。\n\n## 覚えるポイント\n\nJavaの引数は常に値渡しです。プリミティブ型では値そのものがコピーされ、参照型では参照値がコピーされます。",
      "qaStatus": "verified_runtime",
      "explanationReview": {
        "method": "v22_static_and_release_runtime_validation",
        "answerChoiceConsistency": "verified_runtime",
        "protectedFieldsChanged": false,
        "forbiddenGenericPhraseAudit": "pass",
        "identifierLiteralContaminationAudit": "pass",
        "fieldRoleAudit": "pass",
        "duplicateProblemPolicy": "new_unique_question",
        "compileCheck": "passed_javac_release11",
        "runtimeCheck": "passed_expected_output:4",
        "applicationTest": "not_run",
        "markdownRenderCheck": "static_structure_pass",
        "browserCheck": "not_run",
        "updatedAt": "2026-07-13 JST",
        "styleRevision": "v22-two-column-expanded-exercises",
        "note": "対象リリースで個別にコンパイルし、正常系は出力、異常系は想定コンパイルエラーまたは想定例外を確認した。ブラウザ操作確認は別途扱う。"
      },
      "explanation": {
        "summary": "メソッド呼び出し `update(n)` では、`n` が持つ整数値4が仮引数 `value` へコピーされます。メソッド内の `value = 9;` はコピー側だけを書き換えるため、呼び出し元の `n` は4のままです。",
        "relatedKnowledge": [],
        "examTips": [],
        "judgeSteps": [],
        "topic": "method"
      },
      "tags": [
        "basic",
        "method",
        "parameter",
        "pass-by-value",
        "basic-p2"
      ],
      "examFocus": "",
      "qaCategory": "method",
      "summary": "プリミティブ引数は値がコピーされる"
    }
  ]
});
})();
