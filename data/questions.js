window.JAVA_STUDY_DATA = {
  "title": "Java Silver 勉強用ページ",
  "version": "20260622-code-audit-v36-ch01-ch02-ch03-ch04-ch05-ch06-ch07-ch08-pdf-explanation-integrated",
  "chapters": [
    {
      "id": "ch01",
      "title": "Javaの概要と簡単なJavaプログラムの作成",
      "status": "ready",
      "page": "ch01.html"
    },
    {
      "id": "ch02",
      "title": "Javaの基本データ型と文字列の操作",
      "status": "ready",
      "page": "ch02.html"
    },
    {
      "id": "ch03",
      "title": "演算子と制御構造",
      "status": "ready",
      "page": "ch03.html"
    },
    {
      "id": "ch04",
      "title": "クラスの定義とインスタンスの使用",
      "status": "ready",
      "page": "ch04.html"
    },
    {
      "id": "ch05",
      "title": "継承とインタフェースの使用",
      "status": "ready",
      "page": "ch05.html"
    },
    {
      "id": "ch06",
      "title": "例外処理",
      "status": "ready",
      "page": "ch06.html"
    },
    {
      "id": "ch07",
      "title": "模擬問題①",
      "status": "ready",
      "page": "ch07.html"
    },
    {
      "id": "ch08",
      "title": "模擬問題②",
      "status": "ready",
      "page": "ch08.html"
    }
  ],
  "questions": {
    "ch01": [
      {
        "id": "ch01-q01",
        "number": 1,
        "type": "multi",
        "selectCount": 3,
        "title": "パッケージに関する説明",
        "prompt": "パッケージに関する説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "名前空間を提供する"
          },
          {
            "key": "B",
            "text": "パッケージ名にはドメイン名を逆にしたものを使用しなければならない"
          },
          {
            "key": "C",
            "text": "アクセス制御を提供する"
          },
          {
            "key": "D",
            "text": "クラスの分類を可能にする"
          },
          {
            "key": "E",
            "text": "パッケージに属さないクラスもある"
          }
        ],
        "answer": [
          "A",
          "C",
          "D"
        ],
        "explanation": {
          "summary": "パッケージは、クラス名の衝突を避ける名前空間、パッケージ単位のアクセス制御、関連クラスの分類に使います。逆ドメイン形式の命名は慣習であり、文法上の義務ではありません。package宣言を省略したクラスも無名パッケージに属します。",
          "points": [
            "A: 正しい。完全修飾名により、同名クラスでもパッケージが違えば区別できます。",
            "B: 誤り。逆ドメイン形式は推奨される命名慣習ですが、必須ではありません。",
            "C: 正しい。デフォルトアクセスなど、パッケージ境界はアクセス制御に関係します。",
            "D: 正しい。関連するクラスを機能や用途ごとに分類できます。",
            "E: 誤り。package宣言を書かないクラスは、パッケージなしではなく無名パッケージ所属です。"
          ],
          "correctReason": "正解は A・C・D です。\n\nパッケージは、クラス名の衝突を避ける名前空間、パッケージ単位のアクセス制御、関連クラスの分類に使います。逆ドメイン形式の命名は慣習であり、文法上の義務ではありません。package宣言を省略したクラスも無名パッケージに属します。\n\n選択肢の判定:\n- A: 正しい。完全修飾名により、同名クラスでもパッケージが違えば区別できます。\n- B: 誤り。逆ドメイン形式は推奨される命名慣習ですが、必須ではありません。\n- C: 正しい。デフォルトアクセスなど、パッケージ境界はアクセス制御に関係します。\n- D: 正しい。関連するクラスを機能や用途ごとに分類できます。\n- E: 誤り。package宣言を書かないクラスは、パッケージなしではなく無名パッケージ所属です。\n\n関連知識:\n- 完全修飾名は「パッケージ名 + クラス名」で型を特定します。\n- 無名パッケージは小規模なサンプルでは使えますが、通常のアプリケーション設計では明示的なパッケージを使います。\n\n試験での注意点:\n- 「必ず」「すべて」「一切」のような断定表現を優先して疑います。\n- 逆ドメイン形式は慣習、パッケージ所属は必ず発生、という切り分けが重要です。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": true,
              "detail": "パッケージ名を含めた完全修飾名で型を区別できるため、同じ単純クラス名でも衝突を避けられます。"
            },
            {
              "key": "B",
              "isCorrect": false,
              "detail": "ドメイン名を逆にする書き方は一意性を高めるための慣習です。「使用しなければならない」とまでは言えません。"
            },
            {
              "key": "C",
              "isCorrect": true,
              "detail": "修飾子を省略したクラスやメンバは同じパッケージ内からアクセスできます。パッケージはアクセス制御の単位になります。"
            },
            {
              "key": "D",
              "isCorrect": true,
              "detail": "パッケージを分けることで、多数のクラスを役割ごとに整理できます。"
            },
            {
              "key": "E",
              "isCorrect": false,
              "detail": "package宣言がないソースのクラスも無名パッケージに属します。パッケージに属さないクラスという扱いではありません。"
            }
          ],
          "relatedKnowledge": [
            "完全修飾名は「パッケージ名 + クラス名」で型を特定します。",
            "無名パッケージは小規模なサンプルでは使えますが、通常のアプリケーション設計では明示的なパッケージを使います。"
          ],
          "examTips": [
            "「必ず」「すべて」「一切」のような断定表現を優先して疑います。",
            "逆ドメイン形式は慣習、パッケージ所属は必ず発生、という切り分けが重要です。"
          ],
          "judgeSteps": [
            "パッケージの目的を名前空間・アクセス制御・分類に分ける。",
            "命名慣習と文法上の必須条件を分ける。",
            "package宣言省略時は無名パッケージ扱いと判断する。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：A、C、D\n\nパッケージに関する問題です。パッケージの目的は、次の3つです。\n\n・名前空間を提供し、名前の衝突を避ける\n\n・アクセス修飾子と組み合わせてアクセス制御機能を提供する\n\n・クラスの分類を可能にする\n\n複雑な要件を満たさなければならない現代のソフトウェア開発では、すべての部品をイチから作るわけではありません。過去のプロジェクトで作った部品を再利用したり、無償で公開されているオープンソースの部品を使ったり、有償で販売されている部品を購入することは頻繁に行われます。このように、現代のソフトウェア開発では、開発生産性を高めるために、他者によって作られた部品を使いながら開発するのが一般的です。\n\nこのような開発では、クラス名がほかのソフトウェア部品で使われているクラス名と重複する可能性が高くなります。名前が重複してしまうとコンパイラやJVM（Java仮想マシン）はどちらのクラスを利用してよいか判断できないため、コンパイルエラーが発生したり、設計者が意図したクラスが利用されない事態が発生する可能性があります。このような事態を避けるために、コンパイラやJVMは、クラスを「パッケージ名.クラス名」の完全修飾クラス名で扱います（選択肢A）。\n\nパッケージは名前の重複を避けるために使います。そのため、パッケージ名はできるだけ一意であることが推奨されます。そこで、慣習としてドメイン名を逆にした文字列がパッケージ名に利用されます。たとえば「xxx.co.jp」というドメインであれば、「jp.co.xxx」という具合です。もちろん、これはあくまでも慣習であって決まりごとではないため、パッケージ名にはドメイン名以外の名前も使用できます（選択肢B）。\n\nクラスを複数のパッケージに分けることで、パッケージ単位でアクセス制御ができるようになります。たとえば、次のようなjp.co.xxxパッケージに属する2つのクラスがあるとします。このとき、publicなSampleクラスはほかのパッケージに属するクラスからも使えますが、publicではないTestクラスは使うことができません。\n\n例 jp.co.xxxパッケージに属するpublicなSampleクラスの宣言\n\n```java\npackage jp.co.xxx;\n\npublic class Sample {\n    // any code\n}\n```\n\n例 jp.co.xxxパッケージに属するTestクラスの宣言\n\n```java\npackage jp.co.xxx;\n\nclass Test {   // publicで宣言していないため外部のパッケージからはアクセス不可\n    // any code\n}\n```\n\nこのようにパッケージを使ったアクセス制御をすることで、パッケージ内のクラスを「公開するクラス」と「非公開にするクラス」に分類できます。公開・非公開に分けることで、設計者の意図しないクラスが不用意に使われることを防げます（選択肢C）。\n\nパッケージは、ディレクトリ構造とマッピングされます。たとえば、「jp.co.xxx.Sample」という完全修飾クラス名を持つクラスは、次のようなディレクトリに配置されます。\n\n【jp.co.xxx.Sampleクラスが配置されるディレクトリの構造】\n\n```text\njp\n└─ co\n   └─ xxx\n      └─ Sample.class\n```\n\nこのようにパッケージとディレクトリ構造がマッピングされると、多数のクラスを分類整理することができ、ソフトウェアの管理が容易になります（選択肢D）。\n\nなお、クラスは必ず何らかのパッケージに属します。パッケージ宣言を省略したクラスは、デフォルトで無名パッケージに属するものと解釈されます。パッケージに属さないクラスは存在しません（選択肢E）。\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.12 / 1章 解説PDF p.17",
        "tags": [
          "package/import"
        ]
      },
      {
        "id": "ch01-q02",
        "number": 2,
        "type": "single",
        "selectCount": 1,
        "title": "パッケージ宣言の位置",
        "prompt": "次のうち、パッケージ宣言が正しく記述されているコードを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "import java.io.*;\npackage aaa;\npublic class Sample {}"
          },
          {
            "key": "B",
            "code": "package aaa;\nimport java.io.*;\npublic class Sample {}"
          },
          {
            "key": "C",
            "code": "import java.io.*;\npackage aaa {\n    public class Sample {}\n}"
          },
          {
            "key": "D",
            "code": "import java.io.*;\npackage aaa (\n    public class Sample {}\n);"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "package宣言は、コメントを除いてソースファイルの先頭に書きます。import宣言はpackage宣言の後、class宣言の前です。packageは波かっこや丸かっこで囲むブロック構文ではありません。",
          "points": [
            "A: 誤り。import宣言がpackage宣言より前にあります。",
            "B: 正しい。package → import → class の順になっています。",
            "C: 誤り。package宣言を波かっこで囲む構文はありません。",
            "D: 誤り。package宣言を丸かっこで囲む構文はありません。"
          ],
          "correctReason": "正解は B です。\n\npackage宣言は、コメントを除いてソースファイルの先頭に書きます。import宣言はpackage宣言の後、class宣言の前です。packageは波かっこや丸かっこで囲むブロック構文ではありません。\n\n選択肢の判定:\n- A: 誤り。import宣言がpackage宣言より前にあります。\n- B: 正しい。package → import → class の順になっています。\n- C: 誤り。package宣言を波かっこで囲む構文はありません。\n- D: 誤り。package宣言を丸かっこで囲む構文はありません。\n\n関連知識:\n- ソースファイルの宣言順序は、package宣言、import宣言、型宣言です。\n- package宣言より前に置けるのはコメントだけです。\n\n試験での注意点:\n- importが先に出てきた選択肢は即座に除外できます。\n- packageをブロックのように書く選択肢はJavaの構文ではありません。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": false,
              "detail": "package宣言より前に意味のある宣言や文を書くとコンパイルエラーです。importはpackageの後に置きます。"
            },
            {
              "key": "B",
              "isCorrect": true,
              "detail": "ソース先頭でpackageを宣言し、その後にimport、最後にクラス宣言を書く正しい順序です。"
            },
            {
              "key": "C",
              "isCorrect": false,
              "detail": "Javaのpackage宣言は `package aaa;` の形です。`package aaa { ... }` とは書きません。"
            },
            {
              "key": "D",
              "isCorrect": false,
              "detail": "`package aaa (...)` のような構文はありません。セミコロンで終わる宣言です。"
            }
          ],
          "relatedKnowledge": [
            "ソースファイルの宣言順序は、package宣言、import宣言、型宣言です。",
            "package宣言より前に置けるのはコメントだけです。"
          ],
          "examTips": [
            "importが先に出てきた選択肢は即座に除外できます。",
            "packageをブロックのように書く選択肢はJavaの構文ではありません。"
          ],
          "judgeSteps": [
            "package宣言の位置を確認する。",
            "import宣言との順序を見る。",
            "packageがセミコロンで終わっているか確認する。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：B\n\nパッケージ宣言に関する問題です。クラスが所属するパッケージは、次のようにpackageキーワードを使って宣言します。\n\n例 パッケージ宣言\n\n```java\npackage sample;   // ソースコードの先頭行に記述する\n\npublic class Test {\n    // any code\n}\n```\n\nこのように宣言すると、Testクラスはsampleパッケージに属していることになります。なお、パッケージ宣言は、必ずソースコードの先頭行に記述しなければいけません。間違えやすいのは、次のようにパッケージ宣言とインポート宣言の順番を逆にしてしまうことです。\n\n例 パッケージ宣言（誤り）\n\n```java\nimport aaa.*;\npackage sample;\n\npublic class Test {\n    // any code\n}\n```\n\nこのようにパッケージ宣言よりも前に何らかのコードを記述すると、コンパイルエラーが発生します。パッケージ宣言よりも前に記述できるのはコメントだけです。したがって、選択肢Aは誤りで、選択肢Bが正解です。\n\nほかのプログラミング言語では、選択肢Cのように中カッコ「{}」を使ってパッケージブロックを作り、そのブロック内にクラスを宣言するものもありますが、Javaでこのような宣言はできません。よって、選択肢CとDは誤りです。\n\n試験対策\n\nパッケージ宣言に関するルールを覚えておきましょう。\n\n・パッケージ宣言は必ずソースコードの先頭行に記述する\n\n・パッケージ宣言よりも前に記述できるのはコメントだけである\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.12 / 1章 解説PDF p.19",
        "tags": [
          "package/import"
        ]
      },
      {
        "id": "ch01-q03",
        "number": 3,
        "type": "multi",
        "selectCount": 2,
        "title": "自動的にインポートされるもの",
        "prompt": "次のうち、インポート宣言をしなくても、自動的にインポートされるものはどれか。正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "java.langパッケージに属するクラス"
          },
          {
            "key": "B",
            "text": "java.langパッケージのうち、StringクラスとSystemクラスの2つだけ"
          },
          {
            "key": "C",
            "text": "同じパッケージに属するクラス"
          },
          {
            "key": "D",
            "text": "サブパッケージに属するクラス"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "importしなくても使えるのは、java.langパッケージ内の型と、同じパッケージに属する型です。java.langの一部だけではなく全体が対象です。サブパッケージは親パッケージとは別物なので自動インポートされません。",
          "points": [
            "A: 正しい。java.langの型は自動的に利用できます。",
            "B: 誤り。StringとSystemだけではなく、java.lang配下の型が対象です。",
            "C: 正しい。同じパッケージの型はimportなしで参照できます。",
            "D: 誤り。サブパッケージは別パッケージであり、自動的には取り込まれません。"
          ],
          "correctReason": "正解は A・C です。\n\nimportしなくても使えるのは、java.langパッケージ内の型と、同じパッケージに属する型です。java.langの一部だけではなく全体が対象です。サブパッケージは親パッケージとは別物なので自動インポートされません。\n\n選択肢の判定:\n- A: 正しい。java.langの型は自動的に利用できます。\n- B: 誤り。StringとSystemだけではなく、java.lang配下の型が対象です。\n- C: 正しい。同じパッケージの型はimportなしで参照できます。\n- D: 誤り。サブパッケージは別パッケージであり、自動的には取り込まれません。\n\n関連知識:\n- パッケージ名がドットでつながっていても、サブパッケージは別パッケージとして扱います。\n- ワイルドカードimportでもサブパッケージまでは含みません。\n\n試験での注意点:\n- 「java.langはStringとSystemだけ」といった限定表現は誤りです。\n- サブパッケージを同一パッケージの延長として扱わないようにします。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": true,
              "detail": "StringやSystemに限らず、java.langに属する型は暗黙的に利用できます。"
            },
            {
              "key": "B",
              "isCorrect": false,
              "detail": "java.langの自動利用は2クラス限定ではありません。MathやIntegerなども同じ考え方です。"
            },
            {
              "key": "C",
              "isCorrect": true,
              "detail": "同じパッケージにある型は、import宣言を書かなくても単純名で参照できます。"
            },
            {
              "key": "D",
              "isCorrect": false,
              "detail": "親パッケージとサブパッケージは別のパッケージです。たとえば `a` と `a.b` は自動的につながりません。"
            }
          ],
          "relatedKnowledge": [
            "パッケージ名がドットでつながっていても、サブパッケージは別パッケージとして扱います。",
            "ワイルドカードimportでもサブパッケージまでは含みません。"
          ],
          "examTips": [
            "「java.langはStringとSystemだけ」といった限定表現は誤りです。",
            "サブパッケージを同一パッケージの延長として扱わないようにします。"
          ],
          "judgeSteps": [
            "java.langか確認する。",
            "同一パッケージか確認する。",
            "サブパッケージなら別パッケージとして扱う。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：A、C\n\nクラスのインポートに関する問題です。コンパイラやJVMはクラスを完全修飾クラス名でしか扱えません。パッケージ宣言しなかった場合ですら、そのクラスは無名パッケージ（デフォルトパッケージ）に所属していると見なされます。そのため、本来ソースコードは次のように完全修飾クラス名でクラスを利用しなければいけません。\n\n例 完全修飾クラス名でクラスを指定したソースコード\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        java.lang.String str = \"100\";\n        int val = java.lang.Integer.parseInt(str);\n        java.math.BigDecimal decimal = new java.math.BigDecimal(val);\n        System.out.println(decimal.intValue());\n    }\n}\n```\n\nこのように完全修飾クラス名でプログラムを記述すると、コードは冗長で読みづらくなります。そこで、次のようにインポート宣言をすることで、パッケージ名を省略してクラス名だけで記述できるようにします。\n\n例 クラスのパッケージ名を省略するため、インポート宣言をしたソースコード\n\n```java\nimport java.lang.String;       // 省略可能\nimport java.lang.Integer;      // 省略可能\nimport java.math.BigDecimal;\n\npublic class Main {\n    public static void main(String[] args) {\n        String str = \"100\";\n        int val = Integer.parseInt(str);\n        BigDecimal decimal = new BigDecimal(val);\n        System.out.println(decimal.intValue());\n    }\n}\n```\n\nなお、java.langパッケージは基本的なクラスがまとめられたパッケージであり、このパッケージに所属するクラスは頻繁に利用するためインポート宣言を省略できます。\n\nまた、同じパッケージに属するクラスのインポート宣言も省略可能です。\n\n以上のことから、選択肢AとCが正解です。選択肢Bはjava.lang.Stringとjava.lang.Systemクラスに限定しており、適切ではありません。\n\nインポート宣言時に、利用するクラスの完全修飾クラス名を指定するのではなく、アスタリスク「*」を使ってそのパッケージに属するクラスをすべてインポートできます。たとえば、次のように宣言すれば、java.utilパッケージ内のすべてのクラスをクラス名で表記できます。\n\n例 java.utilパッケージに属する全クラスのインポート宣言\n\n```java\nimport java.util.*;\n```\n\nこのようにアスタリスクを使うことで一度に複数のクラスをインポートできます。ただし、この方法でインポートできるのは、指定したパッケージに属するクラスに限定されます。アスタリスクを使っても、同じ名称を含む別のパッケージがインポートされるわけではありません。上記の宣言でインポートされるのはjava.utilパッケージに属するクラスだけで、java.util.regexパッケージやjava.util.loggingパッケージに属するクラスをインポートできるということではありません。したがって、選択肢Dも誤りです。\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.13 / 1章 解説PDF p.20",
        "tags": [
          "package/import",
          "string/reference"
        ]
      },
      {
        "id": "ch01-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "無名パッケージと明示的パッケージ",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    protected int num = 10;\n}"
          },
          {
            "title": "SampleImpl.java",
            "code": "package ex4;\n\npublic class SampleImpl extends Sample {\n    public static void main(String[] args) {\n        System.out.println(num);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "10が表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "Sampleにはpackage宣言がないため無名パッケージに属します。一方、SampleImplはex4パッケージに属します。名前付きパッケージのクラスから無名パッケージのクラスを参照できないため、SampleImplのコンパイル時点でエラーになります。",
          "points": [
            "A: 誤り。コンパイルできないため0は表示されません。",
            "B: 誤り。コンパイルできないため10は表示されません。",
            "C: 正しい。SampleImplから無名パッケージのSampleを利用できず、コンパイルエラーになります。",
            "D: 誤り。実行前にコンパイルで失敗します。"
          ],
          "correctReason": "正解は C です。\n\nSampleにはpackage宣言がないため無名パッケージに属します。一方、SampleImplはex4パッケージに属します。名前付きパッケージのクラスから無名パッケージのクラスを参照できないため、SampleImplのコンパイル時点でエラーになります。\n\n選択肢の判定:\n- A: 誤り。コンパイルできないため0は表示されません。\n- B: 誤り。コンパイルできないため10は表示されません。\n- C: 正しい。SampleImplから無名パッケージのSampleを利用できず、コンパイルエラーになります。\n- D: 誤り。実行前にコンパイルで失敗します。\n\n関連知識:\n- 無名パッケージのクラスは、他の名前付きパッケージから利用する前提で設計しません。\n- protectedはアクセス許可の話であり、まず型そのものを参照できる必要があります。\n\n試験での注意点:\n- アクセス修飾子を見る前に、パッケージ所属と型解決を確認します。\n- コンパイルエラーと実行時例外を混同しないことが重要です。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": false,
              "detail": "実行まで進まないため、フィールドの初期値とは無関係にこの出力にはなりません。"
            },
            {
              "key": "B",
              "isCorrect": false,
              "detail": "Sampleのnumは10ですが、SampleImplがSampleを解決できないため表示されません。"
            },
            {
              "key": "C",
              "isCorrect": true,
              "detail": "無名パッケージのクラスは、名前付きパッケージ内のクラスから参照できません。`extends Sample` の時点で型解決に失敗します。"
            },
            {
              "key": "D",
              "isCorrect": false,
              "detail": "実行時例外は、コンパイルと実行開始を通過した後に発生するものです。このコードはその前で止まります。"
            }
          ],
          "relatedKnowledge": [
            "無名パッケージのクラスは、他の名前付きパッケージから利用する前提で設計しません。",
            "protectedはアクセス許可の話であり、まず型そのものを参照できる必要があります。"
          ],
          "examTips": [
            "アクセス修飾子を見る前に、パッケージ所属と型解決を確認します。",
            "コンパイルエラーと実行時例外を混同しないことが重要です。"
          ],
          "judgeSteps": [
            "各ソースのpackage宣言を確認する。",
            "参照先クラスが同じパッケージまたはimport可能な場所にあるか確認する。",
            "型解決できなければコンパイルエラーと判断する。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：C\n\nパッケージとクラスのアクセス制御に関する問題です。無名パッケージに属するクラスは、同じ無名パッケージに属するクラスからしかアクセスできません。たとえば、次の2つのクラスは同じパッケージ（無名パッケージ）に属しているため、OfficeクラスからPersonクラスを使うことができます。\n\n例 同じ無名パッケージに属するPersonクラスとOfficeクラス\n\n```java\nclass Person {}\n\npublic class Office {\n    Person p;\n}\n```\n\nしかし、次のように明示的にパッケージ宣言をしたクラスからは、上記のOfficeクラスを使えません。このコードはコンパイルエラーになります。\n\n例 ex4パッケージに属するMainクラス\n\n```java\npackage ex4;\n\npublic class Main {\n    public static void main(String[] args) {\n        Office office = new Office();\n    }\n}\n```\n\n設問のコードでは、Sampleクラスを継承したSampleImplクラスを定義しています。SampleImplでは、Sampleに定義されたnumフィールドの値を表示しようとしています。\n\nしかし、設問のコードの場合、Sampleクラスはパッケージ宣言されていないので無名パッケージに属しており、一方のSampleImplクラスではex4パッケージに属していることに着目しましょう。明示的にパッケージ宣言したクラスから、無名パッケージに属するクラスにアクセスしようとするとコンパイルエラーになります。\n\n以上のことから、選択肢Cが正解です。\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.13 / 1章 解説PDF p.21",
        "tags": [
          "package/import",
          "main/args",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch01-q05",
        "number": 5,
        "type": "multi",
        "selectCount": 3,
        "title": "mainメソッドの条件",
        "prompt": "アプリケーションのエントリーポイントとなるメソッドの条件として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "publicであること"
          },
          {
            "key": "B",
            "text": "staticであること"
          },
          {
            "key": "C",
            "text": "1つのソースファイルに複数記述できる"
          },
          {
            "key": "D",
            "text": "戻り値型はintであること"
          },
          {
            "key": "E",
            "text": "引数はString配列型もしくはString型の可変長引数であること"
          },
          {
            "key": "F",
            "text": "戻り値として0、もしくは1を戻すこと"
          }
        ],
        "answer": [
          "A",
          "B",
          "E"
        ],
        "explanation": {
          "summary": "アプリケーションのエントリーポイントになるmainメソッドは、public、static、戻り値void、名前main、引数がString配列またはString可変長引数である必要があります。戻り値で終了コードを返す形式ではありません。",
          "points": [
            "A: 正しい。外部から起動されるためpublicが必要です。",
            "B: 正しい。インスタンス生成なしで呼び出されるためstaticが必要です。",
            "C: 誤り。この条件自体はmainメソッドのシグネチャ条件ではありません。",
            "D: 誤り。戻り値型はintではなくvoidです。",
            "E: 正しい。String[]またはString...を引数に取ります。",
            "F: 誤り。mainメソッドは戻り値を返しません。"
          ],
          "correctReason": "正解は A・B・E です。\n\nアプリケーションのエントリーポイントになるmainメソッドは、public、static、戻り値void、名前main、引数がString配列またはString可変長引数である必要があります。戻り値で終了コードを返す形式ではありません。\n\n選択肢の判定:\n- A: 正しい。外部から起動されるためpublicが必要です。\n- B: 正しい。インスタンス生成なしで呼び出されるためstaticが必要です。\n- C: 誤り。この条件自体はmainメソッドのシグネチャ条件ではありません。\n- D: 誤り。戻り値型はintではなくvoidです。\n- E: 正しい。String[]またはString...を引数に取ります。\n- F: 誤り。mainメソッドは戻り値を返しません。\n\n関連知識:\n- `String... args` は可変長引数ですが、mainの引数として使用できます。\n- mainをオーバーロードしても、指定シグネチャ以外はエントリーポイントになりません。\n\n試験での注意点:\n- public/static/void/main/String配列または可変長引数、の5点で判定します。\n- 戻り値intやreturn 0を要求する選択肢はJavaのmain条件ではありません。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": true,
              "detail": "起動時にランチャから呼び出されるため、mainはpublicである必要があります。"
            },
            {
              "key": "B",
              "isCorrect": true,
              "detail": "mainはインスタンスを作らずに呼び出されるためstaticである必要があります。"
            },
            {
              "key": "C",
              "isCorrect": false,
              "detail": "複数のmainメソッドをオーバーロードして書くこと自体はあり得ますが、エントリーポイントの条件として選ぶ内容ではありません。"
            },
            {
              "key": "D",
              "isCorrect": false,
              "detail": "Javaのエントリーポイントの戻り値型はvoidです。intを返すmainは起動対象になりません。"
            },
            {
              "key": "E",
              "isCorrect": true,
              "detail": "`String[] args` と `String... args` はどちらも起動引数を受け取るmainとして扱えます。"
            },
            {
              "key": "F",
              "isCorrect": false,
              "detail": "C言語系のmainのように終了コードを戻り値で返す形式ではありません。Javaのmainはvoidです。"
            }
          ],
          "relatedKnowledge": [
            "`String... args` は可変長引数ですが、mainの引数として使用できます。",
            "mainをオーバーロードしても、指定シグネチャ以外はエントリーポイントになりません。"
          ],
          "examTips": [
            "public/static/void/main/String配列または可変長引数、の5点で判定します。",
            "戻り値intやreturn 0を要求する選択肢はJavaのmain条件ではありません。"
          ],
          "judgeSteps": [
            "メソッド名がmainか確認する。",
            "public static voidか確認する。",
            "引数がString[]またはString...か確認する。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：A、B、E\n\nmainメソッドに関する問題です。クラスには複数のメソッドを定義できます。このとき、どのメソッドから処理を始めるのかが決まっていなくてはいけません。処理を始めるためのメソッドのことを、一般的にエントリーポイントと呼びます。JVMは、javaコマンドで指定されたクラスを読み込み、そのクラスに定義されているエントリーポイントから処理を始めます。\n\nJavaでは、エントリーポイントとなるメソッドの定義が決められており、プログラマーが自由に決められるわけではありません。エントリーポイントは、次のように記述します。\n\n例 エントリーポイントとなるメソッドの定義（mainメソッド）\n\n```java\npublic static void main(String[] args) {\n    // any code\n}\n```\n\n上記のコード例のうち、変更できるのは引数名「args」の部分だけで、そのほかの部分については変更できません。引数名の部分は単なる変数名の宣言に過ぎないため、命名規則に従っていれば自由に変更可能です。エントリーポイントに適用されるルールは次のとおりです（選択肢A、B）。\n\n・公開されていること（publicであること）\n\n・インスタンスを生成しなくても実行できること（staticであること）\n\n・戻り値は戻せない（voidであること）\n\n・メソッド名はmainであること\n\n・引数はString配列型を1つ受け取ること\n\nエントリーポイントの引数には、String配列型だけでなく、次のように可変長引数のString型を受け取ることもできます（選択肢E）。\n\n```java\npublic static void main(String... args) {\n}\n```\n\nこれは、可変長の引数はコンパイル時に配列型の引数に変換されるためです。\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.14 / 1章 解説PDF p.22",
        "tags": [
          "main/args",
          "package/import",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch01-q06",
        "number": 6,
        "type": "single",
        "selectCount": 1,
        "title": "コマンドライン引数",
        "prompt": "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。",
        "command": "java Main java one two",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \" \" + args[1]);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「Main java」と表示される"
          },
          {
            "key": "B",
            "text": "「java one」と表示される"
          },
          {
            "key": "C",
            "text": "「one two」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "javaコマンドでは、実行するクラス名の後ろに書いた値だけがargsに入ります。`java Main java one two` では、`Main` はクラス名であり、args[0]は`java`、args[1]は`one`です。",
          "points": [
            "A: 誤り。Mainは実行対象のクラス名であり、argsには入りません。",
            "B: 正しい。args[0]がjava、args[1]がoneです。",
            "C: 誤り。oneはargs[1]であり、twoはargs[2]です。",
            "D: 誤り。コード自体はコンパイルできます。",
            "E: 誤り。args[0]とargs[1]は存在するため例外は発生しません。"
          ],
          "correctReason": "正解は B です。\n\njavaコマンドでは、実行するクラス名の後ろに書いた値だけがargsに入ります。`java Main java one two` では、`Main` はクラス名であり、args[0]は`java`、args[1]は`one`です。\n\n選択肢の判定:\n- A: 誤り。Mainは実行対象のクラス名であり、argsには入りません。\n- B: 正しい。args[0]がjava、args[1]がoneです。\n- C: 誤り。oneはargs[1]であり、twoはargs[2]です。\n- D: 誤り。コード自体はコンパイルできます。\n- E: 誤り。args[0]とargs[1]は存在するため例外は発生しません。\n\n関連知識:\n- コマンドライン引数は0始まりの配列でmainに渡されます。\n- javaコマンドのクラス名部分はargsに含まれません。\n\n試験での注意点:\n- コマンド問題では、まずクラス名と起動引数の境界を切ります。\n- args[0]が最初の引数であり、クラス名ではない点を固定します。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": false,
              "detail": "コマンドの最初のMainは起動対象のクラス名です。起動パラメータとしてargs配列に格納されるわけではありません。"
            },
            {
              "key": "B",
              "isCorrect": true,
              "detail": "クラス名の後ろの `java one two` が起動引数です。したがってargs[0]はjava、args[1]はoneです。"
            },
            {
              "key": "C",
              "isCorrect": false,
              "detail": "oneとtwoを出力するにはargs[1]とargs[2]を参照する必要があります。設問ではargs[0]とargs[1]を出力しています。"
            },
            {
              "key": "D",
              "isCorrect": false,
              "detail": "mainメソッドの形式も配列参照の書き方も文法上問題ありません。"
            },
            {
              "key": "E",
              "isCorrect": false,
              "detail": "起動引数は3つあるため、args[0]とargs[1]の参照でArrayIndexOutOfBoundsExceptionは起きません。"
            }
          ],
          "relatedKnowledge": [
            "コマンドライン引数は0始まりの配列でmainに渡されます。",
            "javaコマンドのクラス名部分はargsに含まれません。"
          ],
          "examTips": [
            "コマンド問題では、まずクラス名と起動引数の境界を切ります。",
            "args[0]が最初の引数であり、クラス名ではない点を固定します。"
          ],
          "judgeSteps": [
            "javaコマンドの実行クラス名を除外する。",
            "残った引数を左からargs[0], args[1]と割り当てる。",
            "コードが参照している添字が存在するか確認する。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：B\n\njavaコマンドの実行に関する問題です。javaコマンドは、JVMを起動するためのコマンドです。JVMは起動後、指定されたクラスをロードし、このクラスのmainメソッドを呼び出します。javaコマンドの構文は次のとおりです。\n\n構文\n\n```text\njava 完全修飾クラス名 [引数 引数 ...]\n```\n\nクラス名の後に続ける引数のことを「起動パラメータ」や「コマンドライン引数」と呼びます。起動パラメータは、スペースで区切って複数指定できます。また、起動パラメータはオプションなので省略可能です。起動パラメータとして指定されたデータは、JVMによってString配列型オブジェクトに格納され、mainメソッドの引数として渡されます。javaコマンドを実行したときの動作は次のとおりです。\n\n・JVMを起動する\n\n・指定されたクラスをクラスパスから探し出してロードする\n\n・String配列型オブジェクトを作成し、起動パラメータを格納する\n\n・起動パラメータを保持したString配列型オブジェクトへの参照を引数に渡してmainメソッドを実行する\n\n設問のコマンドでは、「Main」が実行したいクラス名で、その後に続く「java」「one」「two」の3つの文字列が起動パラメータです。これらの3つの文字列は、mainメソッドの引数である配列型変数argsを使って参照できます。たとえば、args[0]とすれば「java」、args[1]であれば「one」が参照できます。そのため、設問のクラスの3行目では「java one」とコンソールに表示されます。\n\n以上のことから、選択肢Bが正解です。\n\n試験対策\n\njavaコマンドでのクラス実行時に指定する起動パラメータは、String配列型オブジェクトに格納されるため、1番目が配列型変数args[0]、2番目がargs[1]……となります。\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.14 / 1章 解説PDF p.23",
        "tags": [
          "main/args",
          "package/import",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch01-q07",
        "number": 7,
        "type": "multi",
        "selectCount": 2,
        "title": "Javaクラスを実行するコマンド",
        "prompt": "次のうち、Javaのクラスを実行するコマンドとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "javac Test.java"
          },
          {
            "key": "B",
            "code": "java Test"
          },
          {
            "key": "C",
            "code": "java Test.java"
          },
          {
            "key": "D",
            "code": "javac Test"
          },
          {
            "key": "E",
            "code": "javap Test"
          },
          {
            "key": "F",
            "code": "jmod Test.java"
          }
        ],
        "answer": [
          "B",
          "C"
        ],
        "explanation": {
          "summary": "クラスファイルを実行する基本コマンドは`java クラス名`です。また、Java SE 11以降ではソースファイルを直接指定する`java Test.java`のソースファイルモードも使えます。`javac`はコンパイル、`javap`は逆アセンブル、`jmod`はモジュール関連のコマンドです。",
          "points": [
            "A: 誤り。javacはコンパイル用であり、実行コマンドではありません。",
            "B: 正しい。コンパイル済みクラスを実行する基本形です。",
            "C: 正しい。ソースファイルモードで実行できます。",
            "D: 誤り。javacを使っており、かつ通常はソースファイル名を指定します。",
            "E: 誤り。javapはクラス情報を表示するツールで、実行用ではありません。",
            "F: 誤り。jmodはJavaクラスの実行コマンドではありません。"
          ],
          "correctReason": "正解は B・C です。\n\nクラスファイルを実行する基本コマンドは`java クラス名`です。また、Java SE 11以降ではソースファイルを直接指定する`java Test.java`のソースファイルモードも使えます。`javac`はコンパイル、`javap`は逆アセンブル、`jmod`はモジュール関連のコマンドです。\n\n選択肢の判定:\n- A: 誤り。javacはコンパイル用であり、実行コマンドではありません。\n- B: 正しい。コンパイル済みクラスを実行する基本形です。\n- C: 正しい。ソースファイルモードで実行できます。\n- D: 誤り。javacを使っており、かつ通常はソースファイル名を指定します。\n- E: 誤り。javapはクラス情報を表示するツールで、実行用ではありません。\n- F: 誤り。jmodはJavaクラスの実行コマンドではありません。\n\n関連知識:\n- `java Test` ではクラス名を指定し、`.class`は付けません。\n- ソースファイルモードでは `java ファイル名.java` の形で実行できます。\n\n試験での注意点:\n- javacとjavaの役割を分けます。javacはコンパイル、javaは実行です。\n- `.java`を付ける場合と付けない場合の例外は、ソースファイルモードかどうかで判断します。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": false,
              "detail": "`javac Test.java` はソースをコンパイルしてclassファイルを生成するコマンドです。実行はしません。"
            },
            {
              "key": "B",
              "isCorrect": true,
              "detail": "`java Test` はTestクラスのmainメソッドを起動する基本形です。.classは付けません。"
            },
            {
              "key": "C",
              "isCorrect": true,
              "detail": "`java Test.java` はソースファイルモードです。単一ファイルのプログラムをコンパイル手順なしで起動できます。"
            },
            {
              "key": "D",
              "isCorrect": false,
              "detail": "javacは実行用ではありません。またコンパイル時は通常 `Test.java` のようにソースファイル名を指定します。"
            },
            {
              "key": "E",
              "isCorrect": false,
              "detail": "javapはクラスファイルの情報を確認するためのコマンドです。mainを実行するコマンドではありません。"
            },
            {
              "key": "F",
              "isCorrect": false,
              "detail": "jmodはモジュール用のツールであり、通常のクラス実行コマンドではありません。"
            }
          ],
          "relatedKnowledge": [
            "`java Test` ではクラス名を指定し、`.class`は付けません。",
            "ソースファイルモードでは `java ファイル名.java` の形で実行できます。"
          ],
          "examTips": [
            "javacとjavaの役割を分けます。javacはコンパイル、javaは実行です。",
            "`.java`を付ける場合と付けない場合の例外は、ソースファイルモードかどうかで判断します。"
          ],
          "judgeSteps": [
            "コマンド名がjavaかjavacか確認する。",
            "javaならクラス名指定かソースファイルモードかを確認する。",
            "実行対象ではない補助ツールを除外する。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：B、C\n\njavaコマンドに関する問題です。Javaのプログラムを実行するには、javacコマンド（選択肢A、D）ではなく、javaコマンドを使います。javaコマンドでは、次の3つを実行することができます。\n\n・mainメソッドを持つクラスファイル（選択肢B）\n\n・jarファイル内のメインクラス\n\n・モジュールに含まれるメインクラス\n\n1つ目と2つ目はJavaの登場と同時に提供され、3つ目はJava SE 9で導入されたモジュール機能によって追加されたものです。これらに加えて、javacコマンドでコンパイルせずにソースファイルを直接実行できるソースファイルモードがJava SE 11で追加されました。\n\nたとえば次のようなコードを実行するには、Java SE 11よりも前のバージョンではソースファイルをjavacコマンドでコンパイルする必要がありました。\n\n例 Sample.java\n\n```java\npublic class Sample {\n    public static void main(String... args) {\n        for (String arg : args) {\n            System.out.println(arg);\n        }\n    }\n}\n```\n\nしかし、Java SE 11以降であれば、javacコマンドを使わず、次のようにjavaコマンドだけで実行することができます（選択肢C）。\n\n例 javaコマンドでSample.javaを実行\n\n```console\n> java Sample.java a b c\na\nb\nc\n```\n\njavaコマンドだけでJavaプログラムを実行できるようになるので、Javaを学び始めたばかりでとりあえずプログラムを動かしてみたいときや、簡単な処理を行うプログラムを作るときなどに活用できます。\n\nなお、ソースファイルモードでjavaコマンドを実行するといっても、コンパイルをしていないわけではありません。ディスク上にクラスファイルを作らないだけで、メモリ上にコンパイル後のクラスファイルに相当するバイトコードを出力しています。ソースファイルモードでのJavaプログラムの実行は、次のコマンドに置き換えるとわかりやすいでしょう。\n\n```console\n> javac -d メモリ空間 Sample.java\n> java Sample a b c\n```\n\n```text\nこのコマンドでは、-dオプションを使って、コンパイル後のクラスファイルの出力先を指定しています。この出力先にメモリ空間を指定しているため、コンパイルせずに実行できるように見えているだけです。\n```\n\n```text\nまた、拡張子が.javaであれば、javaコマンドは自動的にソースファイルモードで実行されます。拡張子が.javaではないファイルを使ってソースファイルモードで実行する場合は、次のように--sourceオプションを使います。\n```\n\n例 --sourceオプションの使用例\n\n```console\n> mv Sample.java Sample        ← Sample.javaをSampleという名前に変更\n> java --source 17 Sample a b c\na\nb\nc\n```\n\n※上記の例ではUNIX系OSのmvコマンドを使っています。Windowsの場合はrenコマンドを使います。\n\n```text\n--sourceオプションの引数は、ソースファイルに使われているJavaのバージョンです。今回は、Java SE 17を使っているので17としています。\n```\n\nこのようにソースファイルモードでの実行では、.javaという拡張子のJavaファイルである必要はありません。また、Javaにはpublicなクラス名とソースファイルのファイル名は一致させなければいけないというルールがありますが、ソースファイルモードで実行する際には適用されません。たとえば、次のようにSampleという名前の付いたソースファイルをTest.javaに変更しても、ソースファイルモードでは実行できます。\n\n例 クラス名と一致しない名前のソースファイルをソースファイルモードで実行\n\n```console\n> mv Sample Test.java        ← SampleをTest.javaという名前に変更\n> java Test.java a b c\na\nb\nc\n```\n\n※上記の例ではUNIX系OSのmvコマンドを使っています。Windowsの場合はrenコマンドを使います。\n\nなお、このTest.javaをjavacコマンドでコンパイルしようとすると、クラス名とソースファイルのファイル名が一致していないため、コンパイルエラーとなります。\n\n例 クラス名と一致しない名前のソースファイルをjavacコマンドでコンパイル\n\n```console\n> javac Test.java\nTest.java:1: エラー: クラスSampleはpublicであり、ファイルSample.javaで宣言する必要があります\npublic class Sample {\n       ^\nエラー1個\n```\n\n選択肢Eのjavapは、コンパイル後のクラスファイルがどのような中間コードに変換されたかを調べるためのコマンドです。選択肢Fのjmodは、モジュール構造を調べるためのコマンドです。\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.15 / 1章 解説PDF p.24",
        "tags": [
          "package/import"
        ]
      },
      {
        "id": "ch01-q08",
        "number": 8,
        "type": "single",
        "selectCount": 1,
        "title": "起動パラメータの数",
        "prompt": "以下に示したSampleクラスを実行したときの結果として、正しいものを選びなさい。なお、実行時のコマンドは次のとおりとする。",
        "command": "java Sample a \\\" a\\\" \"a \"b c",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String... args) {\n        System.out.println(args.length);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "4が表示される"
          },
          {
            "key": "B",
            "text": "5が表示される"
          },
          {
            "key": "C",
            "text": "6が表示される"
          },
          {
            "key": "D",
            "text": "7が表示される"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "起動パラメータは空白で区切られますが、ダブルクォーテーションで囲んだ範囲は1つの引数として扱われます。エスケープされたダブルクォーテーションは区切り記号ではなく文字として扱われます。設問のコマンドではargsの要素数が5になるため、5が表示されます。",
          "points": [
            "A: 誤り。引数数は4ではありません。",
            "B: 正しい。args.lengthは5です。",
            "C: 誤り。引数数は6ではありません。",
            "D: 誤り。引数数は7ではありません。"
          ],
          "correctReason": "正解は B です。\n\n起動パラメータは空白で区切られますが、ダブルクォーテーションで囲んだ範囲は1つの引数として扱われます。エスケープされたダブルクォーテーションは区切り記号ではなく文字として扱われます。設問のコマンドではargsの要素数が5になるため、5が表示されます。\n\n選択肢の判定:\n- A: 誤り。引数数は4ではありません。\n- B: 正しい。args.lengthは5です。\n- C: 誤り。引数数は6ではありません。\n- D: 誤り。引数数は7ではありません。\n\n関連知識:\n- `String... args` はmainの引数として有効で、内部的には配列として扱えます。\n- コマンドライン引数では、引用符とエスケープの扱いが出力値に影響します。\n\n試験での注意点:\n- args.length問題は、コードではなくコマンド行の分解が主題です。\n- 引用符で囲まれた範囲を1個として数え、エスケープされた引用符は文字として扱います。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": false,
              "detail": "クォーテーションとエスケープの扱いを反映すると、4個にはなりません。"
            },
            {
              "key": "B",
              "isCorrect": true,
              "detail": "空白区切り、引用符で囲んだ範囲、エスケープされた引用符を分けて数えると、起動引数は5個です。"
            },
            {
              "key": "C",
              "isCorrect": false,
              "detail": "引用符で1つにまとめられる部分を分割しすぎています。"
            },
            {
              "key": "D",
              "isCorrect": false,
              "detail": "コマンド文字列中のすべての空白を単純に区切りとして扱うと誤ります。"
            }
          ],
          "relatedKnowledge": [
            "`String... args` はmainの引数として有効で、内部的には配列として扱えます。",
            "コマンドライン引数では、引用符とエスケープの扱いが出力値に影響します。"
          ],
          "examTips": [
            "args.length問題は、コードではなくコマンド行の分解が主題です。",
            "引用符で囲まれた範囲を1個として数え、エスケープされた引用符は文字として扱います。"
          ],
          "judgeSteps": [
            "クラス名を除いた起動引数部分を見る。",
            "引用符でまとまる範囲を1要素にする。",
            "エスケープされた引用符を区切りではなく文字として扱う。",
            "要素数をargs.lengthとして判断する。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：B\n\n起動パラメータの指定に関する問題です。起動パラメータは、javaコマンドのクラス名やソースファイル名の後ろに、スペースを入れて記述します。たとえば、次のコマンドであれば、Sample.javaというソースファイル名の後ろに続く「a b c」が起動パラメータです。\n\n例 起動パラメータ\n\n```console\n> java Sample.java a b c\n```\n\nJavaのプログラムでは、java.ioパッケージに属するクラスを使ってコンソールから値を受け取るプログラムを記述することもできますが、起動パラメータを使えばより簡単に値を受け取るプログラムを記述できます。\n\njavaコマンドの実行によりJVMが起動すると、起動パラメータで渡された値を要素として持つString配列型のインスタンスが生成され、mainメソッドの引数として渡されます。そのため、次のコードを実行すると、「a」「b」「c」と順に表示されます。\n\n例 Sample.java\n\n```java\npublic class Sample {\n    public static void main(String... args) {\n        for (String arg : args) {\n            System.out.println(arg);\n        }\n    }\n}\n```\n\n例 起動パラメータの指定\n\n```console\n> java Sample.java a b c\na\nb\nc\n```\n\n起動パラメータは、スペースで区切って列挙します。スペースを含む文字列を起動パラメータとして渡したい場合には、次のようにダブルクォーテーション「\"」で括ります。\n\n例 スペースを含む文字列を起動パラメータとして指定\n\n```console\n> java Sample.java Hello World \"Hello World\"    ← Hello、World、Hello Worldを起動パラメータとして渡す\nHello\nWorld\nHello World\n```\n\nこのとき、スペースを含む文字列を括っているダブルクォーテーションは含まれないことに注意しましょう。ダブルクォーテーションを文字として使いたい場合には、「¥\"」のように円記号「¥」を前に付けてエスケープします。たとえば、次のコマンドではHelloの前とWorldの後のダブルクォーテーションがエスケープされています。そのため、「Hello World」という1つの文字列ではなく、間にあるスペースが起動パラメータの区切りだと判断され、「\"Hello」と「World\"」という2つの文字列に分割されてしまいます。\n\n例 ダブルクォーテーションをエスケープして起動パラメータを指定\n\n```console\n> java Sample.java Hello World ¥\"Hello World¥\"\nHello\nWorld\n\"Hello\nWorld\"\n```\n\nなお、ダブルクォーテーションはエスケープされない限り、データとしては扱われません。そのため、次のコマンドを実行するとダブルクォーテーションなしで「abc」と表示されます。\n\n例 ダブルクォーテーションをエスケープしないで起動パラメータを指定\n\n```console\n> java Sample.java \"a\"bc\nabc\n```\n\n試験では、次の3つのポイントを押さえておくとよいでしょう。\n\n・スペースが区切り記号として扱われる\n\n・スペースを含む文字列はダブルクォーテーションで括ることで1つとして扱われる\n\n・ダブルクォーテーションそのものは文字として扱われない\n\n以上をふまえて設問のコマンドを見てみます。\n\n例 設問の実行コマンド\n\n```console\n> java Sample a ¥\" a¥\" \"a \"b c\n```\n\nSampleというクラス名以降が起動パラメータです。この起動パラメータは上記の3つのルールに従って分解されます。\n\n```text\n① a\n② \"\n③ a\"\n④ a b\n⑤ c\n```\n\nダブルクォーテーションがエスケープされているので、文字として扱われていることに注意してください。また4つ目のダブルクォーテーションが「a 」というスペースを含む文字列と「b」という文字が連結されて1つの文字列になっている点にも注意しましょう。\n\n以上のことから、起動パラメータの数は5つとなるので、選択肢Bが正解です。\n\n試験対策\n\njavaコマンドの起動パラメータに指定する文字列にスペースやダブルクォーテーションが含まれる場合の挙動を確認しておきましょう。\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.15 / 1章 解説PDF p.27",
        "tags": [
          "main/args",
          "string/reference",
          "field/static/scope"
        ]
      },
      {
        "id": "ch01-q09",
        "number": 9,
        "type": "multi",
        "selectCount": 2,
        "title": "sampleと表示する実行コマンド",
        "prompt": "次のプログラムを実行し、「sample」と表示したい。正しいコマンドを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        System.out.println(\"sample\");\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "code": "java Sample.class"
          },
          {
            "key": "B",
            "code": "javac Sample.java\njava Sample.class"
          },
          {
            "key": "C",
            "code": "java Sample"
          },
          {
            "key": "D",
            "code": "javac Sample.java\njava Sample"
          },
          {
            "key": "E",
            "code": "java Sample.java"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": {
          "summary": "コンパイルして実行する通常の流れでは、`javac Sample.java`でclassファイルを作り、`java Sample`のようにクラス名を指定して実行します。`java Sample.class`のように.class拡張子は付けません。また、ソースファイルモードを使えば`java Sample.java`でも実行できます。",
          "points": [
            "A: 誤り。javaコマンドに.class付きで指定しません。",
            "B: 誤り。コンパイル後の実行コマンドがjava Sample.classになっています。",
            "C: 誤り。事前にコンパイル済みである条件が示されていないため、この選択肢だけでは不足です。",
            "D: 正しい。コンパイル後にクラス名で実行しています。",
            "E: 正しい。ソースファイルモードで実行できます。"
          ],
          "correctReason": "正解は D・E です。\n\nコンパイルして実行する通常の流れでは、`javac Sample.java`でclassファイルを作り、`java Sample`のようにクラス名を指定して実行します。`java Sample.class`のように.class拡張子は付けません。また、ソースファイルモードを使えば`java Sample.java`でも実行できます。\n\n選択肢の判定:\n- A: 誤り。javaコマンドに.class付きで指定しません。\n- B: 誤り。コンパイル後の実行コマンドがjava Sample.classになっています。\n- C: 誤り。事前にコンパイル済みである条件が示されていないため、この選択肢だけでは不足です。\n- D: 正しい。コンパイル後にクラス名で実行しています。\n- E: 正しい。ソースファイルモードで実行できます。\n\n関連知識:\n- 通常実行では、javacの対象はソースファイル名、javaの対象はクラス名です。\n- ソースファイルモードではjavaコマンドに`.java`ファイルを指定できます。\n\n試験での注意点:\n- `java Sample.class`は頻出の誤答です。javaに渡すのはファイル名ではなくクラス名です。\n- コンパイル済み前提がない場合、`java Sample`単独は通常手順として不足します。",
          "optionAnalysis": [
            {
              "key": "A",
              "isCorrect": false,
              "detail": "実行時はクラスファイル名ではなくクラス名を指定します。`.class`は付けません。"
            },
            {
              "key": "B",
              "isCorrect": false,
              "detail": "`javac Sample.java`までは正しいですが、次の`java Sample.class`が誤りです。"
            },
            {
              "key": "C",
              "isCorrect": false,
              "detail": "`java Sample`はコンパイル済みであれば実行できますが、設問はソースを実行してsampleを表示する正しいコマンド列を問うため、単独では不足です。"
            },
            {
              "key": "D",
              "isCorrect": true,
              "detail": "通常の手順です。ソースをjavacでコンパイルし、生成されたクラスを`java Sample`で実行します。"
            },
            {
              "key": "E",
              "isCorrect": true,
              "detail": "ソースファイルモードでは、単一ソースファイルを`java Sample.java`として直接起動できます。"
            }
          ],
          "relatedKnowledge": [
            "通常実行では、javacの対象はソースファイル名、javaの対象はクラス名です。",
            "ソースファイルモードではjavaコマンドに`.java`ファイルを指定できます。"
          ],
          "examTips": [
            "`java Sample.class`は頻出の誤答です。javaに渡すのはファイル名ではなくクラス名です。",
            "コンパイル済み前提がない場合、`java Sample`単独は通常手順として不足します。"
          ],
          "judgeSteps": [
            "通常実行かソースファイルモードかを分ける。",
            "通常実行ならjavacで.javaをコンパイルする。",
            "javaでは.classなしのクラス名を指定する。"
          ],
          "choiceAnalysis": [],
          "pdfExplanation": "正解：D、E\n\nコンパイルと実行コマンドに関する問題です。javacコマンドとjavaコマンドに関しては、次の2点に注意しましょう。\n\n・コンパイルするときのjavacコマンドの引数には、拡張子の.javaまで含むソースファイル名を記述する\n\n・実行するときのjavaコマンドの引数には、クラスファイルのファイル名ではなく完全修飾クラス名を記述する\n\n上記のとおり、\n\n選択肢Dは、手順、引数ともに正しいコマンドです。\n\n選択肢Eは、javaコマンドのソースファイルモードで実行しています。ソースファイルモードは、ソースファイルをコンパイルし、クラスファイルに相当するバイトコードをメモリ上に生成して、そのクラスのバイトコードを実行できるようにする仕組みです。\n\n選択肢Aは、javaコマンドに完全修飾クラス名ではなく、クラスファイル名を引数に渡しています。よって、誤りです。\n\n選択肢Bは、javacコマンドでコンパイルし、javaコマンドで実行する手順は間違っていませんが、選択肢Aと同様にクラスファイル名をjavaコマンドに渡しています。よって、誤りです。\n\n選択肢Cは、javaコマンドとしては正しいですが、コンパイルしていないためクラスファイルが存在せず実行できません。よって、誤りです。\n",
          "pdfAlignmentNote": "PDF解説の原本順・原本文言寄せ文字起こしを第1章の表示用解説として反映。",
          "pdfExplanationOnly": true
        },
        "source": "1章 問題PDF p.16 / 1章 解説PDF p.29",
        "tags": [
          "package/import",
          "main/args",
          "string/reference",
          "array"
        ]
      }
    ],
    "ch02": [
      {
        "id": "ch02-q01",
        "number": 1,
        "type": "single",
        "selectCount": 1,
        "title": "boolean型の誤記",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "7が1回だけ表示される"
          },
          {
            "key": "B",
            "text": "何も表示されない"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問1）。",
          "pdfExplanation": "正解：C\n\nJavaの基本データ型（プリミティブ型）に関する問題です。\nデータ型とは、データの種類を表す情報で、データの扱い方を指定するため\nに記述します。たとえば、「3」という値を整数として扱う場合と、浮動小数\n点数として扱う場合とではコンピュータ内部での扱い方が異なります。これ\nは次のように2進数で表記するだけでも、データの表現方法が異なることが\nわかります。\n\n【数値の2進数表現】\n\n```text\n型             ビット表現\nint型の3       00000000000000000000000000000011\nfloat型の3.0   01000000010000000000000000000000\n```\n\nまた、原則的にプログラムは同じ種類のデータ同士しか演算できません。数\n値の「3」と数字（文字）の「2」を足したり、引いたりはできません。その\nため、暗黙的に型変換が行われます。コンパイラが、データ型を見て型変換\nできるかどうかをチェックします。\n\nJavaには大きく分けて、プリミティブ型と参照型の2つのデータ型があります。\n整数や浮動小数点数といった数値、真偽値、文字を扱うのがプリミティブ型\nです。もう一方の参照型には、オブジェクト型、列挙型、配列型があります。\nプリミティブ型と参照型の違いは、値そのものを扱うか、インスタンスへの\n参照（リンク）を扱うかという点です。プリミティブ型は、次のとおりです。\n\n【プリミティブ型】\n\n```text\nデータ型   値\nboolean    true、false\nchar       16ビットUnicode文字 ¥u0000〜¥uFFFF\nbyte       8ビット整数 -128〜127\nshort      16ビット整数 -32768〜32767\nint        32ビット整数 -2147483648〜2147483647\nlong       64ビット整数 -9223372036854775808〜9223372036854775807\nfloat      32ビット単精度浮動小数点数\ndouble     64ビット倍精度浮動小数点数\n```\n\n設問のコードは、4行目で宣言しているデータ型が「bool」となっているため、\nコンパイルエラーが発生します。Javaのプログラムでは、真偽値を扱うため\nのデータ型は「boolean」です。以上のことから、選択肢Cが正解です。\n\n【試験対策】\nJavaはC言語やC++の影響を強く受けたプログラミング言語ですが、C\n言語で真偽値を表すbool型はJavaには存在しません。ほかのプログラ\nミング言語を学んだことがある方は、Javaで使われている8つのプリミ\nティブ型を正確に覚えておきましょう。\n\n【参考】\n本書では、基本データ型をプリミティブ型という用語で表記しています。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.32 / 2章 解説PDF p.57",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int val = 7;\n        bool flg = true;\n        if (flg == true) {\n            do {\n                System.out.println(val);\n            } while (val > 10);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "boolean",
          "compile-error",
          "main/args",
          "exception",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q02",
        "number": 2,
        "type": "single",
        "selectCount": 1,
        "title": "整数リテラル",
        "prompt": "次の式のうち、コンパイルエラーになるものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "int a = 267;"
          },
          {
            "key": "B",
            "code": "int b = 0413;"
          },
          {
            "key": "C",
            "code": "int c = 0x10B;"
          },
          {
            "key": "D",
            "code": "int d = 0b100001011;"
          },
          {
            "key": "E",
            "code": "int e = 0827;"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問2）。",
          "pdfExplanation": "正解：E\n\n整数リテラルの記述に関する問題です。\nリテラルとは、ソースコード中に記述する値のことです。Javaには、整数、\n浮動小数点数、真偽、文字、そしてnullの5つのリテラルがあります。Javaの\nリテラルは、デフォルトでは、整数値であればint型、浮動小数点数値であれ\nばdouble型、真偽値であればboolean型、文字であればchar型のデータとして\n扱われます。\n\nもし、リテラルがほかのデータ型であることを明示したいときには、「100L」\nや「3.0F」のように、long型であれば「L」や「l」、float型であれば「F」や\n「f」といった接尾辞を値の後ろに付けます。なお、byteやshortに対応した接\n尾辞はありません。これは、int型のリテラルは変数のデータ型に応じて自動\n的に型変換されるからです。たとえば、次の式では代入演算子の右オペラン\nドはint型のリテラルであり、これに対応する左オペランドはshort型の変数で\nす。そのため、右オペランドのリテラルはshort型に型変換されます。\n\n例: int型のリテラルをshort型に代入\n\n```java\nshort a = 10;\n```\n\n整数リテラルの記述は、10進数のほかに8進数や16進数で記述できます。Java\nSE 7からは2進数でも記述できるようになりました。たとえば10進数で「63」\nという整数リテラルを8進数で記述するには、「077」のように「0」を接頭辞\nとして付けます。16進数であれば「0x3F」のように「0x」を、2進数であれば\n「0b0111111」のように「0b」を接頭辞として付けます。\n\n設問の選択肢では、まず接頭辞を確認します。選択肢Aの「267」には接頭辞\nがありません。よって、10進数の整数リテラルです。選択肢Bの「0413」は、0\nから始まっていることから8進数の整数リテラルであることがわかります。選\n択肢Cの「0x10B」は、0xから始まっていることから16進数のリテラルです。選\n択肢Dの「0b100001011」は、0bから始まっていることから2進数のリテラルで\nす。選択肢Eの「0827」は、0から始まっていることから8進数の整数リテラル\nと解釈されます。しかし、8進数は0〜7の8つの数を使って値を表すため、8とい\nう数は使えません。以上のことから、選択肢Eがコンパイルエラーになります。\n\n【試験対策】\nJavaでは、数値を10進数のほかに、2進数、8進数、16進数のリテラルで表\n記でき、それぞれ、0b、0、0xで始めます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.32 / 2章 解説PDF p.58",
        "tags": [
          "literal",
          "integer",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q03",
        "number": 3,
        "type": "multi",
        "selectCount": 5,
        "title": "アンダースコア付き数値リテラル",
        "prompt": "次の式のうち、コンパイルエラーになるものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "int a = 123_456_789;"
          },
          {
            "key": "B",
            "code": "int b = 5_______2;"
          },
          {
            "key": "C",
            "code": "int c = _123_456_789;"
          },
          {
            "key": "D",
            "code": "int d = 123_456_789_;"
          },
          {
            "key": "E",
            "code": "float e = 3_.1415F;"
          },
          {
            "key": "F",
            "code": "long f = 999_99_9999_L;"
          },
          {
            "key": "G",
            "code": "byte g = 0b0_1;"
          },
          {
            "key": "H",
            "code": "int h = 0_52;"
          },
          {
            "key": "I",
            "code": "int i = 0x_52;"
          }
        ],
        "answer": [
          "C",
          "D",
          "E",
          "F",
          "I"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問3）。",
          "pdfExplanation": "正解：C、D、E、F、I\n\n整数リテラル表記に関する問題です。\nアンダースコア「_」を使った数値表記は、桁数の多い数値リテラルの見やす\nさを向上させる目的で導入されました。数値リテラルのアンダースコアは、以\n下のルールに従えば、出現する場所や回数は基本的には自由です。\n\n・リテラルの先頭と末尾には記述できない\n・記号の前後には記述できない\n\nなお、2つ目のルールの記号には、小数点を表すドット「.」、long型やfloat型\nリテラルを表す「L」や「F」、2進数を表す「0b」、16進数を表す「0x」などが\n含まれます。\n\nA、B、G、H 上記の2つのルールに反していません。よって、コンパイルエラー\nは発生しません。\nC、D     1つ目のルールに反しているため、コンパイルエラーが発生します。\nE、F、I   2つ目のルールに反しているため、コンパイルエラーが発生します。\n\n以上のことから、選択肢C、D、E、F、Iが正解です。\n\n【試験対策】\n整数リテラル表記の詳細については、Javaの仕様を確認してください。試\n験対策としては以下のことを覚えておきましょう。\n\n・リテラルの先頭と末尾には記述できない\n・記号の前後には記述できない\n・利用できる記号は、小数点を表すドット「.」、long型やfloat型リテラ\nルを表す「L」や「F」、2進数を表す「0b」、16進数を表す「0x」\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.33 / 2章 解説PDF p.59",
        "tags": [
          "literal",
          "underscore",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q04",
        "number": 4,
        "type": "multi",
        "selectCount": 2,
        "title": "識別子",
        "prompt": "次の式のうち、コンパイルエラーになるものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "int $a = 100;"
          },
          {
            "key": "B",
            "code": "int b_ = 200;"
          },
          {
            "key": "C",
            "code": "int _0 = 300;"
          },
          {
            "key": "D",
            "code": "int ${d} = 400;"
          },
          {
            "key": "E",
            "code": "int g.a = 700;"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問4）。",
          "pdfExplanation": "正解：D、E\n\n識別子の命名規則に関する問題です。\n変数やメソッド、クラスなどの名前のことを「識別子（Identifier）」と呼びます。\n識別子はプログラマーが自由に決められますが、次のような規則があります。\n\n・予約語を識別子として使うことはできない\n・使える記号は、アンダースコア「_」と$マークのみ\n・数字から始めてはいけない（2文字目以降であれば使用可）\n\nJavaでは、プログラムの文を表現するために必要な用語が規定されています。\nこのような用語のことを「予約語」や「キーワード」と呼びます。予約語には、\nデータ型を表現する「int」や「double」、文脈を表現する「for」や「if」など\nがあります。このようなプログラムを表現するための予約語は、識別子とし\nて使えません。予約語と識別子を明確に区別できなければ、プログラムの解\n釈ができなくなるからです。\n\n【Javaの予約語】\n\n```text\nabstract      assert        boolean       break         byte\ncase          catch         char          class         const\ncontinue      default       do            double        else\nenum          extends       final         finally       float\nfor           goto          if            implements    import\ninstanceof    int           interface     long          native\nnew           package       private       protected     public\nreturn        short         static        strictfp      super\nswitch        synchronized  this          throw         throws\ntransient     try           void          volatile      while\n_（アンダースコア）\n```\n\n識別子に使える記号はアンダースコアと$マークだけで、ハイフン「-」は\n使えません。なお、Javaは文字コードとしてUnicodeを採用しています。\nUnicodeは、世界中の文字を扱うことを目的とした文字コード規格です。\nUnicodeには、$マークをはじめとしたさまざまな記号が登録されているため、\n仕様上は識別子にアンダースコアと$マーク以外の記号を使うことも可能で\nす。ただし、可読性を下げるなどの理由から推奨されていません。また、識\n別子は数字から始めてはいけません。数字は2文字目以降に使えます。\n\n選択肢Aは通貨記号であるドル記号「$」、選択肢BとCは、アンダースコアを\n使っています。どちらも許容されている記号であり、問題ありません。\n\nしかし、識別子に中カッコ「{}」やドット「.」は使えません。よって、選択\n肢DとEはコンパイルエラーが発生します。なお、アンダースコアは選択肢Bや\nCのようにほかの文字と組み合わせて識別子とすることができます。もちろん、\nほかの予約語についても同様で、予約語単体ではなく、intXのようにほかの文\n字を含めたり、Intのように文字種を変えたりすることで識別子として使うこと\nができます。ただし、実際の開発では間違えやすい識別子を使うべきではない\nため、このような識別子は推奨されません。\n\n【試験対策】\n識別子に使える記号はアンダースコア「_」とドル記号「$」であることと、\n数字は2文字目以降に使えることを理解しましょう。特に、変数名は数字\nから始めてはいけないことはよく覚えておきましょう。\n\n【参考】\nJavaではUnicodeに定められた文字を識別子として利用できます。ただ\nし、構文を表すために使われる以下のような記号は使えません。\n\n```text\n!  @  #  %  ^  &  *  (  )  .  :  ;  [  /  \\  }\n```\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.33 / 2章 解説PDF p.60",
        "tags": [
          "identifier",
          "literal"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q05",
        "number": 5,
        "type": "multi",
        "selectCount": 4,
        "title": "ステートメントと型変換",
        "prompt": "次のステートメントのうち、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "int[][] a = {{1, 1}, {2, 2}};"
          },
          {
            "key": "B",
            "code": "short b = (short)'A';"
          },
          {
            "key": "C",
            "code": "byte c1 = 10;\nchar c2 = c1;"
          },
          {
            "key": "D",
            "code": "boolean d = (10 == 10);"
          },
          {
            "key": "E",
            "code": "float e = 1.99;"
          },
          {
            "key": "F",
            "code": "int f = 12_34;"
          },
          {
            "key": "G",
            "code": "String g = 'a';"
          }
        ],
        "answer": [
          "A",
          "B",
          "D",
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問5）。",
          "pdfExplanation": "正解：A、B、D、F\n\n変数の型と初期化する値に関する問題です。\n\n選択肢Aは、2次元配列型の変数に、2次元目の配列のインスタンスへの参照を\n代入しています。よって、正解です。\n\n選択肢Bは、char型をshort型にキャストして代入しています。char型で表され\nる文字は、文字番号に相当する数値で管理されています。そのため、キャス\nト式を記述すればchar型をshort型の変数に代入することや、その逆も可能で\nす。よって、正解です。\n\n選択肢Cは、byte型の変数c1を宣言、初期化し、その後char型の変数に代入し\nています。前述のとおり、文字と数値は互換性がありますが、キャスト式を\n記述しなければいけません。よって、誤りです。\n\n選択肢Dは、比較演算子の結果をboolean型の変数dに代入しています。比較\n演算子の結果はboolean型の値なので、代入は成功します。よって、正解です。\n\n選択肢Eは、float型の変数に浮動小数点数を代入しています。浮動小数点数リ\nテラルは、デフォルトではdouble型として解釈されます。もし、float型のリ\nテラルであることを明示したい場合には「1.99f」のようにfを付けなければ\nいけません。よって、誤りです。\n\n選択肢Fは、区切り記号としてのアンダースコア「_」を使って、数値リテラ\nルをint型の変数に代入しています。数値リテラルは暗黙的にint型として解釈\nされるため、int型の値をint型の変数に代入していることになります。よって、\n正解です。\n\n選択肢Gは、シングルクォーテーション「'」で括った文字はchar型として扱\nわれます。String型の変数にchar型のリテラルを代入しようとしていますが、\nString型とchar型に互換性はありません。よって、誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.33 / 2章 解説PDF p.61",
        "tags": [
          "type-conversion",
          "array",
          "literal",
          "string/reference",
          "inheritance/polymorphism"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q06",
        "number": 6,
        "type": "single",
        "selectCount": 1,
        "title": "varの型推論",
        "prompt": "次の変数宣言のうち、コンパイルエラーとならないものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "var a;"
          },
          {
            "key": "B",
            "code": "var b = null;"
          },
          {
            "key": "C",
            "code": "var c = () -> {};"
          },
          {
            "key": "D",
            "code": "var d = {1, 2, 3};"
          },
          {
            "key": "E",
            "code": "var e = new ArrayList<>();"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問6）。",
          "pdfExplanation": "正解：E\n\nvarを使った変数宣言に関する問題です。\nvarは、ローカル変数を宣言する際のデータ型を推論する機能です。型推論を\n行うためには、次のようにデータ型の代わりにvarを使って変数を宣言しま\nす。\n\n例: varを使った変数宣言\n\n```java\nvar a = 10;\n```\n\nvarを使った型推論は、コンパイル時にコンパイラが代入演算子「=」の右辺\nから変数のデータ型を推論し、そのデータ型に置き換える機能です。そのた\nめ、変数が初期化されていなかったり、nullで初期化したりするなど、デー\nタ型を特定できない場合はコンパイルエラーとなります。よって、選択肢A\nとBは誤りです。\n\nローカル変数の型推論は、リテラルだけでなく、次のようにメソッドの戻り\n値を受け取るのにも使えます。これは、メソッドの定義から戻り値の型が判\n別できるためです。\n\n例: メソッドの戻り値からローカル変数の型を推論する\n\n```java\nvar a = sample();\n```\n\n一方、ラムダ式だけではその式を扱う変数の型を推論できないため、ラムダ式\nを受け取るための変数宣言に型推論は使えません。よって、選択肢Cも誤りです。\n\n例: ラムダ式からは変数の型を推論できない（コンパイルエラー）\n\n```java\nvar a = () -> {};\n```\n\nほかにも、具体的な型を変数の型から推論している例として、配列の初期化\n式があります。配列の初期化式は、配列型変数の宣言と同時に記述すること\nで、変数の型で宣言されている配列インスタンスを生成し、要素を初期化し\nます。そのため、配列の初期化式を代入する変数をvarで宣言すると、何型の\n配列インスタンスを生成すればよいのかを判断できず、コンパイルエラーと\nなります。よって、選択肢Dも誤りです。\n\n例: 配列の初期化式を使うと型推論できない\n\n```java\nint[] array = {1, 2, 3};  ← 変数の型からint配列型のインスタンスを生成している\nvar a = {1, 2, 3};        ← 型を特定できない\n```\n\nなお、ジェネリクスのダイヤモンド演算子「<>」による型推論では、変数宣\n言時のジェネリクスで指定された型パラメータを参照します。もし、参照でき\nる型情報がなければObject型が型パラメータとして与えられます。そのため、\n選択肢Eは以下のコードと同じ意味を持つことになり、右辺を参照することで\n変数の型推論を行うことができます。以上のことから、選択肢Eが正解です。\n\n例: ダイヤモンド演算子で型が推論できない場合にはObject型が使われる\n\n```java\nvar e = new ArrayList<Object>();\n```\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.34 / 2章 解説PDF p.62",
        "tags": [
          "var",
          "type-inference",
          "string/reference",
          "collection",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q07",
        "number": 7,
        "type": "single",
        "selectCount": 1,
        "title": "varを使えない場所",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「sample」と表示される"
          },
          {
            "key": "B",
            "text": "「null」と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問7）。",
          "pdfExplanation": "正解：C\n\nvarを使った変数宣言に関する問題です。\nvarによる型推論は、ローカル変数の宣言にしか使えません。\nフィールドの宣言にはvarを使って型推論を行うことができないため、次のよ\nうなコードはコンパイルエラーとなります。\n\n例: フィールドの宣言に型推論は使えない（コンパイルエラー）\n\n```java\npublic class Sample {\n    var name = \"\";\n    var price = 0;\n}\n```\n\nまた、次のような引数宣言のコードもコンパイルエラーとなります。varは値\nの代入式を見て、代入する値の型から変数の型を推論します。メソッドの定\n義をコンパイルしようとしたときに、どのコードからこのメソッドが使われ\nているかを探して型推論することはできないため、コンパイルエラーになり\nます。\n\n例: 引数の型宣言に型推論は使えない（コンパイルエラー）\n\n```java\npublic class Sample {\n    public void test(var value) {\n        System.out.println(value);\n    }\n}\n```\n\n設問のコードでは、Sampleクラスのフィールドの宣言にvarを使っています。\nまた、コンストラクタの引数宣言にもvarを使っているため、コンパイルエ\nラーとなります。よって、選択肢Cが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.34 / 2章 解説PDF p.63",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private var value;\n    public Sample(var value) {\n        this.value = value;\n    }\n    public void test() {\n        System.out.println(value);\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample(\"sample\");\n        s.test();\n    }\n}"
          }
        ],
        "tags": [
          "var",
          "compile-error",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q08",
        "number": 8,
        "type": "single",
        "selectCount": 1,
        "title": "varで推論された参照型",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "実行時例外がスローされる"
          },
          {
            "key": "C",
            "text": "Aが表示される"
          },
          {
            "key": "D",
            "text": "Bが表示される"
          },
          {
            "key": "E",
            "text": "Cが表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問8）。",
          "pdfExplanation": "正解：A\n\nvarを使った変数宣言に関する問題です。\nvarによる型推論は、コンパイル時に行われます。コードをコンパイルする際\nに型が決まるため、設問のコードではMainクラスの3行目をコンパイルする\n段階で、変数aの型は右オペランドの型であるBとして判断されます。そのた\nめ、Mainクラスのコードは次のコードと同じ意味を持ちます。\n\n例: 型推論された結果のコード\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        B a = new B();\n        a = new C();\n        a.test();\n    }\n}\n```\n\n設問のA、B、Cの3つのクラスの関係は次の図のようになっており、Bクラス\nとCクラスには互換性がありません。\n\n【設問のクラスの関係】\n\n```text\n        A\n        △\n   ┌────┴────┐\n   B         C\n```\n\nこのような関係であるにもかかわらず、B型の変数aにCクラスのインスタン\nスへの参照を代入しようとしているため、コンパイルエラーが発生します。\nよって、選択肢Aが正解です。\n\n【試験対策】\nvarを使った型推論では、コンパイル時に代入演算子の右辺から変数の\nデータ型が推論され、そのデータ型に置き換えられます。変数宣言以\n降の行で、その変数がどのように使われているかは考慮されません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.35 / 2章 解説PDF p.64",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    public void test() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    @Override\n    public void test() {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "C.java",
            "code": "public class C extends A {\n    @Override\n    public void test() {\n        System.out.println(\"C\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        var a = new B();\n        a = new C();\n        a.test();\n    }\n}"
          }
        ],
        "tags": [
          "var",
          "polymorphism",
          "inheritance/polymorphism",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q09",
        "number": 9,
        "type": "multi",
        "selectCount": 2,
        "title": "Stringオブジェクトの作成",
        "prompt": "Stringオブジェクトを作成するコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "String a = new String(\"sample\");"
          },
          {
            "key": "B",
            "code": "String b = \"sample\";"
          },
          {
            "key": "C",
            "code": "String c = String.newInstance(\"sample\");"
          },
          {
            "key": "D",
            "code": "String d = String.valueOf('sample');"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問9）。",
          "pdfExplanation": "正解：A、B\n\nStringオブジェクトの作成に関する問題です。\n複数の文字を集めたものを「文字列」と呼びます。C言語などのプログラミ\nング言語では、文字列を扱うためにchar型の配列を使っていました。配列へ\nの操作はとても煩雑な作業です。たとえば、プログラム中では文字列を連結\nしたり、途中の数文字だけを抜き出すなどの操作を頻繁に行う必要がありま\nす。そこでJavaでは、配列を内部に隠蔽し、文字列操作のためのメソッドを\n提供するクラスが用意されています。それがjava.lang.Stringクラスです。\n\nStringクラスは、ほかのクラスと同様にインスタンスを生成して利用します。\nStringクラスのインスタンスを生成するにはいくつかの方法がありますが、\n代表的なのは次の2通りです。\n\n・newを使ってインスタンス化する\n・ダブルクォーテーション「\"」で括った文字列リテラルを記述する\n\nインスタンスの生成は、ほかのクラス同様、newを使って行うのが基本です。\nしかし、文字列を使うたびにnewとコンストラクタを記述していては煩雑な\nうえ、コードの可読性が低下します。そこで、Stringに限ってはダブルクォー\nテーションで括った文字列リテラルを記述するだけでも、Stringのインスタ\nンスを生成できるようになっています。以上のことから、選択肢AとBが正解\nです。\n\nほかにも、StringクラスのvalueOfメソッドを使ってStringインスタンスを生\n成する方法があります。このメソッドはstaticなメソッドであるため、イン\nスタンスを生成しなくても使えます。選択肢Dは、このメソッドにシングル\nクォーテーションで括った文字列を引数として渡しています。文字はシング\nルクォーテーションで、文字列はダブルクォーテーションで括らなければい\nけません。そのため、この選択肢のコードはコンパイルエラーとなります。\nまた、選択肢Cのようなメソッドは存在しません。よって、選択肢CとDは誤\nりです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.36 / 2章 解説PDF p.65",
        "tags": [
          "String",
          "string/reference",
          "literal",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q10",
        "number": 10,
        "type": "single",
        "selectCount": 1,
        "title": "Stringの不変性",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「hoge, world.」と表示される"
          },
          {
            "key": "B",
            "text": "「hello, world.」と表示される"
          },
          {
            "key": "C",
            "text": "「hello」と表示される"
          },
          {
            "key": "D",
            "text": "「hello, hello.」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問10）。",
          "pdfExplanation": "正解：A\n\nStringオブジェクトが不変なオブジェクトであることを理解するための問題\nです。\nオブジェクトは、何らかのデータを内部に持っています。このとき、一度セッ\nトしたフィールドの値を、後から変更できるオブジェクトと、変更できない\nオブジェクトがあります。変更できるオブジェクトのことを「mutable（可変）\nなオブジェクト」、変更できないオブジェクトのことを「immutable（不変）\nなオブジェクト」と呼びます。\n\nインスタンスへの参照をほかのメソッドの引数に渡すと、そのメソッド内で\nインスタンスが持つデータが不適切に変更されてしまう可能性があります。\nこのような事態を防ぐには、インスタンスのクローン（コピー）を作って、\nクローンへの参照を渡すという方法があります。しかし、メソッド呼び出し\nのたびにクローンを作っていては非効率的です。そこで、内部のデータを変\n更できないように定義されたオブジェクトを使って、データが不適切に変更\nされるのを防ぎます。このようなimmutableなオブジェクトを定義するには、\n次のようにします。\n\n・すべてのフィールドをprivateで修飾する\n・オブジェクト内部の状態を変更可能なメソッドは提供しない（たとえば\nsetterメソッドを提供しない）\n・クラスをfinalで宣言し、メソッドがオーバーライドされないことを保証す\nる（サブクラスからの変更を防ぐ）\n・内部に可変オブジェクトを保持している場合、そのオブジェクトを外部に\n提供しない（たとえばgetterメソッドを提供しない）\n\n次のクラスは、immutableなクラスの例です。このクラスは1つだけprivateな\nフィールドを持ちますが、コンストラクタで初期化した後は、このフィール\nドを変更することはできません。このクラスを継承したサブクラスを用意し、\nサブクラスでフィールドのsetterメソッドを提供するという方法も考えられま\nすが、このクラスの宣言がfinalで修飾されているため、継承したサブクラス\nを定義することもできません。\n\n例: immutableなクラス\n\n```java\npublic final class Sample {\n    private final String name;\n    public Sample(String name) {\n        this.name = name;\n    }\n    public void greet() {\n        System.out.println(\"hello,\" + name);\n    }\n}\n```\n\nimmutableオブジェクトの代表例は、java.lang.Stringクラスやjava.io.Fileク\nラスのインスタンスです。これらのインスタンスでは、生成時に与えられた\n文字列やファイルへの抽象パスなどの値を後から変更できません。新しい文\n字列やファイルへの抽象パスを扱いたい場合は、新しいインスタンスを作ら\nなければいけません。\n\n設問では、replaceAllメソッドを使って文字列を置換しています。このメソッ\nドは、置換した結果の文字列を持った新しいStringインスタンスを作り、そ\nのインスタンスへの参照を戻します。そのため、引数で渡した参照の先にあ\nるStringインスタンスの値が変わることはありません。コンソールに出力さ\nれるのは、変更前の文字列です。以上のことから、選択肢Aが正解です。\n\n【試験対策】\nStringクラスについて、以下の2点を確認しておきましょう。\n・Stringはimmutableなオブジェクトであるため、文字列を変更するに\nは新しくインスタンスを作らなければいけない\n・replaceAllメソッドをはじめとするStringクラスのメソッドの挙動\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.36 / 2章 解説PDF p.66",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"hoge, world.\";\n        hello(str);\n        System.out.println(str);\n    }\n    private static void hello(String msg) {\n        msg.replaceAll(\"hoge\", \"hello\");\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "immutable",
          "string/reference",
          "main/args",
          "exception",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q11",
        "number": 11,
        "type": "single",
        "selectCount": 1,
        "title": "charAtの範囲",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "dが表示される"
          },
          {
            "key": "B",
            "text": "eが表示される"
          },
          {
            "key": "C",
            "text": "何も表示されない"
          },
          {
            "key": "D",
            "text": "nullが表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問11）。",
          "pdfExplanation": "正解：F\n\nStringクラスのcharAtメソッドに関する問題です。\njava.lang.Stringクラスには、インスタンスが保持している文字列を使ったさ\nまざまなメソッドが用意されています。設問で使われているcharAtメソッド\nも、Stringクラスの代表的なメソッドの1つです。このメソッドは、インスタ\nンスが保持している文字列から、引数で指定された位置にある1文字だけを\n抜き出して戻します。引数には抜き出したい文字の位置を指定しますが、文\n字の位置は、次のように0から順に番号を振っていくとわかりやすいでしょう。\n\n【設問のコードの文字列】\n\n```text\n a  b  c  d  e\n 0  1  2  3  4\n```\n\n文字番号の開始は0から始まるため、5番目の文字を取り出したければ引数に\nは4を指定します。設問のように5を指定すると6番目の文字を取り出すとい\nう意味になりますが、文字列は5文字で構成されており、6番目の文字はあり\nません。そのため、このコードを実行すると文字列の範囲外にアクセスした\nことを示す例外java.lang.StringIndexOutOfBoundsExceptionがスローされ\nます。以上のことから、選択肢Fが正解です。\n\n【試験対策】\ncharAtメソッドの引数に指定する文字番号は、0から始まります。5番目\nの文字を取り出す場合は、引数には4を指定します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.37 / 2章 解説PDF p.67",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"abcde\";\n        System.out.println(str.charAt(5));\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "charAt",
          "runtime-exception",
          "operator/control",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q12",
        "number": 12,
        "type": "single",
        "selectCount": 1,
        "title": "indexOf",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "1が表示される"
          },
          {
            "key": "C",
            "text": "4が表示される"
          },
          {
            "key": "D",
            "text": "5が表示される"
          },
          {
            "key": "E",
            "text": "-1が表示される"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問12）。",
          "pdfExplanation": "正解：E\n\nStringクラスのindexOfメソッドに関する問題です。\n設問で使われているStringクラスのindexOfメソッドは、引数で指定された文\n字が文字列のどの位置に存在するかを調べるためのメソッドです。文字の位\n置は、次のように0から順に番号を振っていくとわかりやすいでしょう。\n\n【設問の文字列のイメージ】\n\n```text\n a  b  c  d  e\n 0  1  2  3  4\n```\n\nたとえば、図のような文字列を持つStringインスタンスがあったとき、次の\nようにこのインスタンスのindexOfメソッドの引数に「c」という文字を渡すと、\n2が戻されます。また、引数で指定した文字が存在しなければ-1が戻されます。\n\n例: indexOfメソッド（引数が文字）\n\n```java\nString str = \"abcde\";\nSystem.out.println(str.indexOf('c'));\n```\n\nこのメソッドはオーバーロードされており、位置を調べたい文字をchar型で\n渡す以外に、次のように文字列を渡すこともできます。文字列を引数に渡し\nた場合、このメソッドは、その文字列が始まる最初の文字位置を戻します。\nたとえば、前述の図のような文字列を持つStringの場合、indexOfメソッドに\n\n「cd」という文字列を渡すと、2が戻されます。もし、文字列が存在しなければ、\n-1が戻されます。\n\n例: indexOfメソッド（引数が文字列）\n\n```java\nString str = \"abcde\";\nSystem.out.println(str.indexOf(\"cd\"));\n```\n\n設問のコードでは、「abcde」という文字列を持つStringインスタンスに対し、\n「abcdef」という文字列が始まる文字位置をindexOfメソッドで調べようとし\nています。しかし、調査対象の文字列は5文字しかないのに対し、引数に指\n定した文字列は6文字あります。5文字の文字列の中に、6文字の文字列は存在\nしないため、結果は「-1」が戻されます。以上のことから、選択肢Eが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.37 / 2章 解説PDF p.68",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"abcde\";\n        System.out.println(str.indexOf(\"abcdef\"));\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "indexOf",
          "main/args",
          "exception",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q13",
        "number": 13,
        "type": "single",
        "selectCount": 1,
        "title": "substringの範囲",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「bcd」と表示される"
          },
          {
            "key": "B",
            "text": "「cde」と表示される"
          },
          {
            "key": "C",
            "text": "「bc」と表示される"
          },
          {
            "key": "D",
            "text": "「cd」と表示される"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問13）。",
          "pdfExplanation": "正解：D\n\nStringクラスのsubstringメソッドに関する問題です。\njava.lang.Stringクラスのsubstringメソッドは、文字列から任意の文字列を\n抽出するメソッドです。抽出する文字列を指定するために使う範囲は、次の\n図のように文字と文字の間に線を引き、番号を振るとわかりやすいでしょう。\n\n【設問の文字列のイメージ】\n\n```text\n| a | b | c | d | e |\n0   1   2   3   4   5\n```\n\n設問のコードでは、substringメソッドの引数に2と4を渡しています。そのた\nめ、次の図の範囲が抽出されます。\n\n【設問の文字列抽出のイメージ】\n\n```text\n| a | b | c | d | e |\n0   1   2   3   4   5\n        <---切り取る範囲--->\n```\n\n以上のことから、選択肢Dが正解です。\n\n選択肢Aのように抽出するためには、引数に1と4を渡さなければいけません。\n選択肢Bであれば2と5、選択肢Cであれば1と3を渡します。\n\n【試験対策】\nsubstringメソッドで文字列を抽出する範囲を考えるときは、文字の間\nに線を引いて0から番号を振っていくとわかりやすくなります。\n\n【参考】\nsubstringメソッドには、1つしか引数を取らないものもあります。その\n場合は開始位置だけを指定していることになり、開始位置以降に現れ\nるすべての文字を抽出します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.38 / 2章 解説PDF p.69",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"abcde\";\n        System.out.println(str.substring(2, 4));\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "substring",
          "string/reference",
          "main/args",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "replace",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「baa」と表示される"
          },
          {
            "key": "B",
            "text": "「aab」と表示される"
          },
          {
            "key": "C",
            "text": "「bb」と表示される"
          },
          {
            "key": "D",
            "text": "「aba」と表示される"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問14）。",
          "pdfExplanation": "正解：C\n\nStringクラスのreplaceメソッドに関する問題です。\njava.lang.Stringクラスのreplaceメソッドは、文字列を置き換えるためのメ\nソッドです。文字列の置き換えは先頭から始まり、文字列の最後まで行われ\nます。設問のコードでは、次のような順番で処理されます。\n\n・先頭の2文字「aa」が「b」に置き換わり、「baa」という文字列が戻される\n・置き換え後の文字列「baa」のうち、次に現れる「aa」が「b」に置き換わり、\n「bb」という文字列が戻される\n\n以上のことから、選択肢Cが正解です。\n\n選択肢Aは、最初の「aa」しか置換していません。また、選択肢Bは最後の「aa」\nしか置換していません。選択肢Dは、真ん中の「aa」しか置換していません。\nよって、これらは誤りです。\n\nなお、replaceメソッドはオーバーロードされており、char型の引数を2つ受\nけ取るものと、CharSequence型の引数を2つ受け取るものの2種類がありま\nす。設問のようにString型の引数を渡せるのは、StringクラスがCharSequence\nインタフェースの実装クラスだからです。注意しなければいけないのは、次\nのようにchar型とCharSequence型の引数を渡しているような場合です。\n\n例: replaceメソッド（コンパイルエラー）\n\n```java\nstr.replace(\"aa\", 'b');\n```\n\nreplaceメソッドのオーバーロードは、char型かCharSequence型のうち、どち\nらか片方しか受け取りません。このような2つの型が混在するオーバーロー\nドは存在しないため、間違えないよう注意しましょう\n\n【試験対策】\nreplaceメソッドは、第1引数に指定した文字列があれば、順番にすべて\n置換します。\nreplaceメソッドの引数は、char型かCharSequence型のうち、どちらか\n片方しか受け取りません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.38 / 2章 解説PDF p.70",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"aaaa\";\n        System.out.println(str.replace(\"aa\", \"b\"));\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "replace",
          "string/reference",
          "main/args",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "lengthとcharAt",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "aが表示される"
          },
          {
            "key": "B",
            "text": "eが表示される"
          },
          {
            "key": "C",
            "text": "5が表示される"
          },
          {
            "key": "D",
            "text": "-1が表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問15）。",
          "pdfExplanation": "正解：F\n\nStringクラスのlengthメソッドに関する問題です。\njava.lang.Stringクラスのlengthメソッドは文字数を戻すメソッドです。間\n違えやすいのは、半角英数字も全角文字も同じように文字数を戻す点です。\nUnicode以外の文字コードでは、半角英数字は1バイト、全角文字は2バイト\nとして扱うものがあります。しかし、Javaが採用しているUnicodeでは半角も\n全角も同じ1文字として扱います。そのため、半角も全角も1文字としてカウ\nントします。\n\n設問のコードでは、文字列「abcde」の文字数を取得し、その結果をcharAtメソッ\nドに渡すことで、その位置にある文字だけを抽出しようとしています。前述\nのとおり、lengthメソッドは文字数を戻します。この文字列は5文字なのでメ\nソッドの結果は「5」です。\n\n一方、その結果を受け取るcharAtメソッドは、引数で指定された位置に\nある文字を抽出します。このとき、文字位置は0から始まるため、5文字の\n文字列であれば0〜4の数値で位置を特定します。そのため、引数に5が\n渡されると、charAtメソッドは範囲外の位置であることを示すjava.lang.\nStringIndexOutOfBoundsExceptionをスローします。以上のことから、選\n択肢Fが正解です。\n\n【試験対策】\ncharAtメソッドに渡される文字位置は0から始まります。\nlengthメソッドは、半角文字・全角文字のいずれも1文字として扱い、「文\n字数」を戻します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.39 / 2章 解説PDF p.71",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"abcde\";\n        System.out.println(str.charAt(str.length()));\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "length",
          "charAt",
          "operator/control",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q16",
        "number": 16,
        "type": "single",
        "selectCount": 1,
        "title": "メソッドチェーン",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「true」と表示される"
          },
          {
            "key": "B",
            "text": "「false」と表示される"
          },
          {
            "key": "C",
            "text": "「bce」と表示される"
          },
          {
            "key": "D",
            "text": "「abc」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問16）。",
          "pdfExplanation": "正解：A\n\nStringクラスのstartsWithメソッドに関する問題です。\njava.lang.StringクラスのstartsWithメソッドは、文字列が引数で指定された\n文字で始まるかどうかを調べるためのメソッドです。調べた結果は真偽値で\n戻されます。たとえば次のコードの場合、文字列は「a」から始まっているた\nめ、「true」とコンソールに表示されます。\n\n例: startsWithメソッド\n\n```java\nString str = \"abc\";\nSystem.out.println(str.startsWith(\"a\"));\n```\n\nStringクラスにはendsWithというメソッドもあります。startsWithメソッドが\n引数の文字から文字列が始まっているかどうかを調べるのに対し、endsWith\nメソッドは引数の文字で終わっているかどうかを調べます。startsWithメソッ\nドと一緒に覚えておきましょう。\n\n例: endsWithメソッド\n\n```java\nString str = \"abc\";\nSystem.out.println(str.endsWith(\"c\"));\n```\n\n上記のコードでは、文字列が「c」で終わっているかどうかを調べているため、\nコンソールには「true」が表示されます。\n\nsubstringメソッドに限らず、Stringクラスの文字列を操作するためのメソッド\nは、新しいStringインスタンスを作り、その参照を戻します。たとえば、次\nのコードはreplaceメソッドを使って置換していますが、このコードを実行す\nると、置換対象のStringインスタンス（str）はそのままで、新しく作られた\nStringインスタンス（str2）が戻されることが確認できます。\n\n例: Stringインスタンスの保持する参照\n\n```java\nString str = \"abc\";\nString str2 = str.replace(\"a\", \"b\");\nSystem.out.println(str);  ←こちらは元のまま\nSystem.out.println(str2);\n```\n\nこれは、解答10で解説したとおり、Stringはimmutable（不変）なオブジェク\nトであるためです。\n\nこのようにStringクラスに用意されているさまざまなメソッドの多くは、新\nしく作られたStringインスタンスへの参照を戻します。そのため、次のよう\nにメソッドの戻り値に対してさらにメソッドを呼び出すような記述ができま\nす。なお、このような記述方法を「メソッドチェイン」と呼びます。\n\n例: メソッドチェイン\n\n```java\nString str = \"abcde\";\nString str2 = str.substring(1,3).replace(\"b\", \"c\");\nSystem.out.println(str2);\n```\n\nこのコードでは、substringメソッドで「bc」という2文字だけを抽出し、そ\nの文字列（bc）に対して置換をしています。そのため、コンソールには「cc」\nが表示されます。なお、このコードは、次のコードと同じ意味です。\n\n例: メソッドチェインで記述した場合と同等の内容のコード\n\n```java\nString str = \"abcde\";\nString str2 = str.substring(1,3);\nString str3 = str2.replace(\"b\", \"c\");\nSystem.out.println(str3);\n```\n\n設問のコードは、substringメソッドで抽出した文字列が「b」で始まってい\nるかどうかを調べています。substringメソッドで抽出する範囲は、解答13で\n解説したとおり、次のように線を引いて番号を振ると範囲が特定しやすくな\nります。\n\n【設問の文字列のイメージ】\n\n```text\n| a | b | c | d | e |\n0   1   2   3   4   5\n    <---抽出する範囲--->\n```\n\nこの図からわかるとおり、substringメソッドで抽出した結果は「bc」という\n文字列です。そのため、メソッドチェインで続いて実行されるstartsWithメソッ\nドは「true」を戻します。以上のことから、選択肢Aが正解です。\n\n【試験対策】\nStringクラスの多くのメソッドは、新しいStringインスタンスを作って\n戻します。Stringはimmutableなクラスであるため、元の文字列が変更\nされることはありません。\n\n【参考】\nあるメソッドが戻すオブジェクトのメソッドをさらに呼び出すことが\nできます。これを「メソッドチェイン」と呼びます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.39 / 2章 解説PDF p.72",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"abcde\";\n        System.out.println(str.substring(1, 3).startsWith(\"b\"));\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "substring",
          "startsWith",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q17",
        "number": 17,
        "type": "single",
        "selectCount": 1,
        "title": "文字列連結メソッド",
        "prompt": "次のプログラムを実行し、「Hello, Java!」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "\"Hello, \".concat(\"Java!\")"
          },
          {
            "key": "B",
            "code": "\"Hello, \".append(\"Java!\")"
          },
          {
            "key": "C",
            "code": "\"Hello, \".add(\"Java!\")"
          },
          {
            "key": "D",
            "code": "\"Hello, \".plus(\"Java!\")"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問17）。",
          "pdfExplanation": "正解：A\n\nStringオブジェクトに関する問題です。\n文字列を扱うStringには、インスタンスが保持する文字列を操作するときさまざま\nなメソッドが用意されています。concatメソッドはStringクラスに用意され\nているメソッドの1つで、インスタンスが保持する文字列を、引数として渡\nされた文字列と連結し、新しい文字列を戻すメソッドです。+演算子による\n文字列連結と同じ効果があると考えてよいでしょう。設問では「Hello, Java!」\nという文字列を作らなければいけません。そのため、選択肢Aのように\n「Hello,」という文字列のconcatメソッドを使って文字列を連結する必要があ\nります。よって、選択肢Aが正解です。\n\n選択肢Bのappendは、StringBuilderクラスのメソッドです。間違えやすいので\n注意しましょう。選択肢Cや選択肢DのようなメソッドはStringクラスには存\n在しません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.40 / 2章 解説PDF p.74",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String str = /* blank */;\n        System.out.println(str);\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "concat",
          "string/reference",
          "main/args",
          "collection",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q18",
        "number": 18,
        "type": "single",
        "selectCount": 1,
        "title": "StringBuilderのcapacity",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "5が表示される"
          },
          {
            "key": "C",
            "text": "16が表示される"
          },
          {
            "key": "D",
            "text": "21が表示される"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問18）。",
          "pdfExplanation": "正解：D\n\nStringBuilderクラスに関する問題です。\n解答10で解説したように、Stringクラスはimmutable（不変）なクラスであり、\nインスタンスが保持している文字列を変更することはできません。文字列に\n新しい文字列を追加したり、文字列を変更したりすると、その結果を保持す\nる新しいStringインスタンスが生成されます。たとえば、次のように+演算子\nで文字列連結をした場合、新しいStringインスタンスが生成されます。\n\n例: 文字列の連結\n\n```java\nString str = \"abc\";\nstr += \"de\";\n```\n\nこのコードでは、文字列「abcde」を持った新しいStringインスタンスが生成\nされ、変数には新しいインスタンスへの参照が代入されます。そのため、次\nのように+演算子で複数の文字列をつなげる場合、文字列の分だけStringイン\nスタンスが生成されてしまいます。\n\n例: 文字列の連結\n\n```java\nString str = \"abc\" + \"de\" + \"fg\";\n```\n\nこの例では、まず「abc」「de」「fg」を持つ3つのStringインスタンスが作ら\nれ、次に「abc」と「de」が+演算子で連結されて「abcde」という文字列を\n持ったStringインスタンスが作られます。その後、「abcde」と「fg」が連結\n\nされた「abcdefg」という文字列を持ったStringインスタンスが作られます。\n「abcdefg」という文字列を作るのに、合計5つもインスタンスを作る必要が\nあり、メモリを無駄に消費しています（後述の参考を参照）。\n\nそこで変更可能な文字列を扱うクラスとして、java.lang.StringBuilderクラ\nスが用意されています。StringBuilderは、内部にバッファを持った文字列を扱\nうためのクラスです。Stringが文字列と同じ長さのbyte配列を扱うのに対し、\nStringBuilderは保持している文字列＋余分のバッファを持っています。バッ\nファはデフォルトで16文字分です。たとえば、StringBuilderの引数なしのコ\nンストラクタは、次のような定義を持っています。\n\n```java\npublic StringBuilder() {\n    super(16);\n}\n```\n\nStringBuilderは、AbstractStringBuilderクラスのサブクラスです。StringBuilder\nのコンストラクタから呼び出しているAbstractStringBuilderクラスのコンスト\nラクタを確認すると、次のように引数で指定された文字数分のchar配列イン\nスタンスを作っていることがわかります。\n\n```java\nabstract class AbstractStringBuilder implements Appendable,\n        CharSequence {\n\n    // 文字列を保持するためのbyte配列\n    byte[] value;\n\n    // コンストラクタ\n    AbstractStringBuilder(int capacity) {\n        value = new byte[capacity];\n    }\n    // 以下省略\n}\n```\n\nStringBuilderのコンストラクタはオーバーロードされ、いくつかの種類を持ち\nます。たとえば、Stringを引数に受け取るコンストラクタは次のように定義\nされています。\n\n```java\npublic StringBuilder(String str) {\n    super(str.length() + 16);\n    append(str);\n}\n```\n\nこのコードからわかるように、StringBuilderは初期状態で16文字分のバッファ\nを余分に持って文字列を扱おうとしています。このことからもStringBuilder\nが、文字列の変更を前提としたクラスであることがわかります。なお、\nStringBuilderのバッファは必ず16文字分というわけではありません。バッファ\nする文字数を指定するコンストラクタも存在します。引数を渡さないコンス\nトラクタの場合は、16文字分のバッファを持ったインスタンスが作られます。\n\ncapacityメソッドは、StringBuilderのインスタンスの現在のバッファの容量を\n戻します。設問のコードは、StringBuilderのインスタンスを5文字の文字列で\n初期化していますから、バッファの容量はこれに16文字分を加えた21となり\nます。以上のことから、選択肢Dが正解です。\n\n【試験対策】\nStringBuilderは、デフォルトで16文字分のバッファを持っています。\n\n【試験対策】\n文字列を引数に渡すコンストラクタを使った場合、StringBuilderのイン\nスタンスは、「文字列の長さ＋16文字分」のバッファを持っています。\n\n【参考】\n\"abc\"+\"de\"+\"fg\"のようなコードは、実際にはコンパイラによって最適\n化されます。コンパイル後のクラスファイルを確認すると「abc」「de」\n「fg」という3つの文字列ではなく、「abcdefg」という1つの文字列に置\nき換えられていることがわかります。インスタンスが無駄に作られる\nことはありません。ここでは、あくまでも原理についての解説をして\nいます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.40 / 2章 解説PDF p.75",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder(\"abcde\");\n        System.out.println(sb.capacity());\n    }\n}"
          }
        ],
        "tags": [
          "StringBuilder",
          "capacity",
          "string/reference",
          "main/args",
          "array",
          "constructor"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q19",
        "number": 19,
        "type": "single",
        "selectCount": 1,
        "title": "StringBuilderのreverseとreplace",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「aade」と表示される"
          },
          {
            "key": "B",
            "text": "「ade」と表示される"
          },
          {
            "key": "C",
            "text": "「aba」と表示される"
          },
          {
            "key": "D",
            "text": "「eaba」と表示される"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問19）。",
          "pdfExplanation": "正解：D\n\nStringBuilderクラスのappendメソッド、reverseメソッド、replaceメソッドに\n関する問題です。\njava.lang.StringBuilderクラスのappendメソッドは、文字列に新しい文字\n列を追加するメソッドです。追加された文字列は、既存の文字列の後ろに追\n加されます。次のコードは、appendメソッドを使って、文字列を組み立てて\n\nいる例です。\n\n例: appendメソッド\n\n```java\nStringBuilder sb = new StringBuilder();\nsb.append(\"SELECT * FROM employee \");\nsb.append(\"WHERE empno = '\");\nsb.append(empno);\nsb.append(\"';\");\n```\n\nこのように実際の開発では、文字列リテラルと変数の値を使って動的に文字列を組み立てる際にStringBuilderをよく使います。\n\nreverseメソッドは、文字列を反転するメソッドです。設問のコード（4行目）では、StringBuilderインスタンスにappendメソッドで文字列「abcde」を追加した後、5行目ではreverseメソッドで反転させています。そのため、文字列は反転し、「abcde」から「edcba」に変更されます。\n\nその後、6行目ではreplaceメソッドを使っています。このメソッドは、第1引数と第2引数で指定した範囲の文字列を、第3引数の文字列に置き換えるメソッドです。\n設問のコードでは、1〜3の範囲にある文字列を「a」に置き換えています。文字列の範囲は、範囲を使うほかのメソッドと同様に文字間に線を引き、番号を振って確認します。\n\n【設問のコード6行目の文字列】\n\n```text\n| e | d | c | b | a |\n0   1   2   3   4   5\n    <---置き換える範囲--->\n```\n\n上記の図からわかるとおり、replaceメソッドでは「dc」を「a」に置き換えます。そのため、コンソールには「eaba」と表示されます。よって、選択肢Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.41 / 2章 解説PDF p.76",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append(\"abcde\");\n        sb.reverse();\n        sb.replace(1, 3, \"a\");\n        System.out.println(sb);\n    }\n}"
          }
        ],
        "tags": [
          "StringBuilder",
          "reverse",
          "replace",
          "string/reference",
          "main/args",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q20",
        "number": 20,
        "type": "single",
        "selectCount": 1,
        "title": "StringBuilderのindexOf",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "1が表示される"
          },
          {
            "key": "B",
            "text": "2が表示される"
          },
          {
            "key": "C",
            "text": "3が表示される"
          },
          {
            "key": "D",
            "text": "4が表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問20）。",
          "pdfExplanation": "正解：A\n\nStringBuilderクラスのindexOfメソッドに関する問題です。\njava.lang.StringBuilderクラスのindexOfメソッドは、StringBuilderのインスタンスが保持している文字列のうち、引数で受け取った文字列の「開始位置」を戻します。文字列内の文字位置を調べるには、次のように0から順に番号\n\nを振るとよいでしょう。\n\n【設問の文字列のイメージ】\n\n```text\n| a | b | c | d | e |\n0   1   2   3   4\n```\n\n設問のコードでは「bcd」という文字列の開始位置を調べているため、コンソールには1が表示されます。よって、選択肢Aが正解です。\n文字の位置は0から始まります。選択肢Bのように1からではないので注意しましょう。また、indexOfメソッドは、文字列が始まる位置を調べるためのもので、文字列が終わる位置を調べるものではありません。よって、選択肢CとDも誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.41 / 2章 解説PDF p.77",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder(\"abcde\");\n        System.out.println(sb.indexOf(\"bcd\"));\n    }\n}"
          }
        ],
        "tags": [
          "StringBuilder",
          "indexOf",
          "string/reference",
          "main/args",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "テキストブロック",
        "prompt": "テキストブロックの説明として、誤っているものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "トリプルクォーテーション（\"\"\"）で文字列リテラルを囲む"
          },
          {
            "key": "B",
            "text": "+演算子を使った複数行の連結が不要である"
          },
          {
            "key": "C",
            "text": "文中に利用するダブルクォーテーションのエスケープ（\\\"）は不要である"
          },
          {
            "key": "D",
            "text": "改行するときは改行文字（\\n）を使う"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問21）。",
          "pdfExplanation": "正解：D\n\nテキストブロックに関する問題です。\nJava SE 15で導入されたテキストブロックは、複数行に渡る文字列を簡単に記述できるようにするものです。従来の文字列リテラルと比べて、より読みやすいため、プログラム中に長い文字列リテラルを記述するのに向いています。また、リテラル内に記述するダブルクォーテーションや改行といった特殊文字のエスケープが不要になるなどの利点もあります。\n\n従来のJavaでは、複数行の文字列を記述するために各行の末尾に改行文字を追加したり、行と行の連結に+演算子を使用したりする必要がありました。これは読みにくく、エラーを起こしやすいコードになりがちでした。\n\nたとえば、次のような文字列リテラルがあったとしましょう。この文字列リテラルは長いので、4つに分割して+演算子を使って連結しています。しかし、よく見ると1行目と2行目の最後にはスペースが入っているのに、3行目の最後にはスペースが入っていません。\n\n例: 長い文字列リテラルを+で連結\n\n```java\nString msg = \"I've learned that people will forget what you said, \"\n        + \"people will forget what you did, \"\n        + \"but people will never forget\"  // スペース忘れ\n        + \"how you made them feel.\";\n```\n\nこのリテラルをコンソールなどに出力すると、次のような文になってしまいます。forgetとhowがつながって「forgethow」という単語になってしまっています。\n\n```text\nI've learned that people will forget what you said, people will forget\nwhat you did, but people will never forgethow you made them feel.\n```\n\nあるいは、次のように文中にダブルクォーテーションを使った文を例に考えてみましょう。この文はアインシュタインの名言の1つですが、彼は「Imagination」と「Knowledge」という2つの単語をダブルクォーテーションで括ることで強調して表現しています。\n\n```text\n\"Imagination\" is more important than knowledge. \"Knowledge\" is limited.\nImagination encircles the world.\n```\n\nこのような文を文字列リテラルとして表現するには、次の例のようにエスケープシーケンス（¥）を使わなければいけません。これは、とても読みづらい文になっています。\n\n例: ダブルクォーテーションをエスケープする\n\n```java\nString msg = \"¥\"Imagination¥\" is more important \"\n        + \"than knowledge. \"\n        + \"¥\"Knowledge¥\" is limited. \"\n        + \"Imagination encircles the world.\";\n```\n\n他にも、たとえば次のように、ごく短いHTMLデータを文字列リテラルで記述してみましょう。\n\n例: HTMLデータを文字列リテラルで記述\n\n```java\nString msg = \"<html lang=¥\"ja¥\">¥n\"\n        + \"<head>¥n\"\n        + \"  <meta charset=¥\"UTF-8¥\">¥n\"\n        + \"  <title>Sample</title>¥n\"\n        + \"</head>¥n\"\n        + \"<body>¥n\"\n        + \"  <h1>Hello World</h1>¥n\"\n        + \"</body>¥n\"\n        + \"</html>\";\n```\n\nダブルクォーテーションに加えて、改行をするためのエスケープシーケンス（\\n）が使われており、とても読みにくくなっていますし、メンテナンスの\n\n際に改行を入れ忘れるケースも考えられます。\n\nこういった問題を解決するために導入されたのがテキストブロックです。前出の短いHTMLデータをテキストブロックを使ったものに変更したものが次のコードです。ずいぶんとスッキリして読みやすくなりました。\n\n例: HTMLデータをテキストブロックで記述\n\n```java\nString msg = \"\"\"\n        <html lang=\"ja\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <title>Sample</title>\n        </head>\n        <body>\n          <h1>Hello World</h1>\n        </body>\n        </html>\n        \"\"\";\n```\n\nテキストブロックを利用することで、変わった点は次のとおりです。\n\n1. トリプルクォーテーション（\"\"\"）で文字列リテラルを囲んだ。\n2. +演算子を使った複数行の連結が不要になった。\n3. ダブルクォーテーションのエスケープ（\\\"）が不要になった。\n4. 改行文字（\\n）も不要になった。\n\nテキストブロックは、従来の文字列リテラルのダブルクォーテーションではなく、トリプルクォーテーションで文字列を括ります（選択肢A）。トリプルクォーテーションで括られた範囲は、改行なども含めてほぼそのまま文字列リテラルとして扱われるため、従来の文字列リテラルのように+演算子で連結する必要はありません（選択肢B）。またダブルクォーテーションや改行なども、エスケープすることなくトリプルクォーテーションで囲まれた範囲であればそのまま記述することができます（選択肢C）。\n\nテキストブロック内に記述した改行は、そのまま保持されます。もし、文字列としては改行したくないけれど、コードの見やすさを優先して改行する場合には、その行の末尾に円記号「¥」を記述します。次のコードは、2行に渡る文を1行として続けて保持するために、1行目の末尾に円記号を追加しています。\n\n例: 1行のテキストを2行に分けて記述\n\n```java\nString msg = \"\"\"\n        this is ¥  ← 改行をエスケープ\n        long sample text\"\"\";\n```\n\nこの文字列リテラルをコンソールなどに出力すると、次のように1行で表示されます。\n\n```text\nthis is long sample text\n```\n\n以上のことから、選択肢Dが誤った説明です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.42 / 2章 解説PDF p.78",
        "tags": [
          "text-block",
          "literal",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q22",
        "number": 22,
        "type": "single",
        "selectCount": 1,
        "title": "テキストブロックの構文",
        "prompt": "次のコードのうち、正しくコンパイルできるものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "String str = \"\nthis is textblock sample.\n\";"
          },
          {
            "key": "B",
            "code": "String str = \"\"this is textblock sample.\"\";"
          },
          {
            "key": "C",
            "code": "String str = \"\"\"this is textblock sample.\"\"\";"
          },
          {
            "key": "D",
            "code": "String str = \"\"\"\nthis is textblock sample.\"\"\";"
          },
          {
            "key": "E",
            "code": "String str = \"\"\"this is textblock sample.\n\"\"\";"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問22）。",
          "pdfExplanation": "正解：D\n\nテキストブロックについての問題です。\nテキストブロックが開始されるトリプルクォーテーションの後は改行しなければいけません。記述できるのは改行やスペース、タブ文字といった空白文字です。たとえば、次のように最初のトリプルクォーテーションの後に文字列を記述するとコンパイルエラーとなります。\n\n例: トリプルクォーテーションの後に改行がない（コンパイルエラー）\n\n```java\nString msg = \"\"\"this is\nsample text\n\"\"\";\n```\n\n一方で、テキストブロックの終わりを示すトリプルクォーテーションの前であれば、次の例のように自由に文字列リテラルを記述できます。\n\n例: テキストブロックの末尾は改行は不要\n\n```java\nString msg = \"\"\"\nthis is sample text\"\"\";\n```\n\n選択肢AとBは、トリプルクォーテーションではなくダブルクォーテーションを使っています。また、選択肢CとEは、はじまりのトリプルクォーテーションの後で改行せずに文字列リテラルを記述しています。そのため、これらの選択肢は誤りです。テキストブロックは、はじまりのトリプルクォーテーションの後で改行を入れなければいけません。以上のことから、選択肢Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.42 / 2章 解説PDF p.81",
        "tags": [
          "text-block",
          "compile-error",
          "string/reference",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q23",
        "number": 23,
        "type": "single",
        "selectCount": 1,
        "title": "テキストブロックのインデント",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。なお、インデント量を表すために _（アンダースコア）を使って表記するものとする。",
        "options": [
          {
            "key": "A",
            "code": "__A\n____B\n______C"
          },
          {
            "key": "B",
            "code": "A\n__B\n____C"
          },
          {
            "key": "C",
            "code": "A\nB\n__C"
          },
          {
            "key": "D",
            "code": "A\nB\nC"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問23）。",
          "pdfExplanation": "正解：A\n\nテキストブロックのインデントに関する問題です。\nテキストブロック内の各行は、インデントが自動的に調整されます。これにより、テキストブロック全体を一定の幅でインデントすることができます。たとえば、次のテキストブロックには、左側にインデントが入っているため、読みやすくなっています。\n\n例: インデントがあるテキストブロック\n\n```java\nString html = \"\"\"\n        <html lang=\"ja\">\n          <head>\n            <meta charset=\"UTF-8\">\n            <title>Sample</title>\n          </head>\n          <body>\n            <h1>Hello World</h1>\n          </body>\n        </html>\"\"\";\n```\n\nこれをコンソールに出力すると、インデントが自動的に調整されて、次のように不要なインデントがない状態で出力されます。\n\n例: 出力結果\n\n```html\n<html lang=\"ja\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Sample</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>\n```\n\nインデントの調整は、テキストブロック内の最もインデント量が少ない行に基づいて行われます。たとえば前述のコードであれば、|を入れた箇所の左側のインデント部分が削除されることになります。\n\n例: インデントの基準位置①\n\n```java\nString html = \"\"\"\n        |<html lang=\"ja\">\n        |  <head>\n        |    <meta charset=\"UTF-8\">\n        |    <title>Sample</title>\n        |  </head>\n        |  <body>\n        |    <h1>Hello World</h1>\n        |  </body>\n        |</html>\"\"\";\n```\n\nもし、次のように途中の行だけインデント量が少ない場合、その行を基準にしてインデント調整が行われることになります。なお、この例では、基準位置をわかりやすくするために|を入れています。\n\n例: インデントの基準位置②\n\n```java\nString html = \"\"\"\n        |  <html lang=\"ja\">\n        |  <head>\n        |    <meta charset=\"UTF-8\">\n        |    <title>Sample</title>\n        |</head>\n        |  <body>\n        |    <h1>Hello World</h1>\n        |  </body>\n        |  </html>\"\"\";\n```\n\nこの文字列リテラルをコンソールに出力すると、次のように表示されます。もっとも少ないインデント量で調整されていることがわかります。\n\n例: 出力結果\n\n```html\n<html lang=\"ja\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Sample</title>\n</head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n  </html>\n```\n\n設問のコードでもっとも少ないインデント量の行は、7行目のトリプルクォーテーションです。そのため、7行目のトリプルクォーテーションのインデント量を基準として、ほかの行のインデント量が決まります。基準となる線を入れたものが次のコード例です。\n\n例: 設問のコード例\n\n```java\nString str = \"\"\"\n        |A\n        |  B\n        |    C\n        |\"\"\";\nSystem.out.println(str);\n```\n\n以上のことから、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.43 / 2章 解説PDF p.82",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String str = \"\"\"\n          A\n            B\n              C\n        \"\"\";\n        System.out.println(str);\n    }\n}"
          }
        ],
        "tags": [
          "text-block",
          "indent",
          "main/args",
          "string/reference",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "Stringリテラルとequals",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「false, true」と表示される"
          },
          {
            "key": "B",
            "text": "「false, false」と表示される"
          },
          {
            "key": "C",
            "text": "「true, false」と表示される"
          },
          {
            "key": "D",
            "text": "「true, true」と表示される"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問24）。",
          "pdfExplanation": "正解：D\n\n文字列リテラルの同一性を確認する問題です。\nJavaにおける「同じ」という言葉には、同一と同値という2つの意味があります。同一を確認するには==演算子を使い、同値を確認するにはequalsメソッドを使います。\n\nStringのインスタンスは、文字列リテラル（ダブルクォーテーションで括られた文字列）を記述するだけで作られます。設問のコードの3行目と4行目では、2つの文字列インスタンスを作り、変数aとbにそれぞれの参照を代入しています。変数aとbには、異なる参照が代入されているので、==演算子で比較すれば「false」が戻されるはずです。ところが、設問の次のコードは、コンソールに「true」と出力します。\n\n例: 設問のコード3〜5行目\n\n```java\nString a = \"sample\";\nString b = \"sample\";\nSystem.out.print(a == b);\n```\n\nこれは「コンスタントプール」という仕組みがあるためです。文字列リテラルは、プログラム中に頻繁に現れます。しかし、そのたびにStringのインスタンスを生成していては、処理の負荷が高くなるばかりでなく、メモリも大量に消費することになります。そこで、文字列リテラルは、定数値としてインスタンスとは異なる定数用のメモリ空間に作られ、そこへの参照がString型変数に代入されます。\n\nもし、同じ文字列リテラルがプログラム内に再び登場すれば、定数用のメモリ空間にある文字列インスタンスへの参照が「使い回し」されます。こうすることで、新しいインスタンスを作る負荷もかからず、メモリ消費を抑制してプログラムを実行できるのです。このような仕組みのことを「コンスタントプール」と呼びます。\n\n設問のコードでは、「sample」という同じ文字列リテラルを使っています。そのため、変数aとbには同じ参照値が代入され、==演算子で同一性を確認すると「true」と表示されます。よって、選択肢AとBは誤りです。\n\nまた、同じ参照をequalsメソッドで比較しているため、7行目のコードは「true」を表示します。以上のことから、選択肢Cは誤りで、選択肢Dが正解です。\n\n【試験対策】\nコード中に同じ文字列リテラルが登場した場合、同じStringインスタンスへの参照が使い回されます。そのため、==演算子を使って同一性を判定するとtrueとなります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.44 / 2章 解説PDF p.85",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"sample\";\n        String b = \"sample\";\n        System.out.print(a == b);\n        System.out.print(\", \");\n        System.out.println(a.equals(b));\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "equals",
          "==",
          "literal",
          "string/reference",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q25",
        "number": 25,
        "type": "single",
        "selectCount": 1,
        "title": "new Stringと文字列リテラル",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「false, true」と表示される"
          },
          {
            "key": "B",
            "text": "「false, false」と表示される"
          },
          {
            "key": "C",
            "text": "「true, false」と表示される"
          },
          {
            "key": "D",
            "text": "「true, true」と表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問25）。",
          "pdfExplanation": "正解：A\n\n同一性・同値性とequalsメソッドに関する問題です。\n解答24では、コンスタントプールという仕組みがあるため、コード中で複数回使われる同じ文字列リテラルには、同じインスタンスへの参照が使い回されることを学びました。\n\nこのコンスタントプールは、文字列リテラルを使ったときだけ有効です。そのため、設問のコードのようにnew演算子を使ってプログラマーが明示的に「新しいインスタンスを作る」ことを記述した場合には、その都度、インスタンスが作られ、それぞれの変数が異なる参照を持ちます。\n\nこれにより、変数aにはインスタンス用のメモリ空間に作られたStringインスタンスへの参照、変数bにはコンスタントプールによって定数用のメモリ空間に作られたStringインスタンスへの参照が代入されます。よって、==演算子の結果はfalseを戻します。以上のことから、選択肢CとDは誤りです。\n\n7行目では、equalsメソッドを使って「同値」であることを確認しています。Stringクラスのequalsメソッドは次のような定義になっており、内部に持っている文字列から1文字ずつ取り出して、同じ文字かどうかを確認します。\n\n```java\npublic boolean equals(Object anObject) {\n    // 省略\n    if (anObject instanceof String) {\n        // 省略\n        if (n == anotherString.value.length) {\n            char v1[] = value;                 // 内部に持っている文字列\n            char v2[] = anotherString.value;   // 引数で渡された文字列\n            int i = 0;\n            while (n-- != 0) {\n                if (v1[i] != v2[i])            // 1文字ずつ確認\n                    return false;\n                i++;\n            }\n            return true;\n        }\n    }\n    return false;\n}\n```\n\n設問のコードでは、変数aとbのどちらの参照先にあるStringインスタンスも「sample」という同じ文字列を持っています。そのため、equalsメソッドはtrueを戻します。よって、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.44 / 2章 解説PDF p.85",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String a = new String(\"sample\");\n        String b = \"sample\";\n        System.out.print(a == b);\n        System.out.print(\", \");\n        System.out.println(a.equals(b));\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "equals",
          "==",
          "literal",
          "string/reference",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q26",
        "number": 26,
        "type": "single",
        "selectCount": 1,
        "title": "intern",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "1が表示される"
          },
          {
            "key": "C",
            "text": "2が表示される"
          },
          {
            "key": "D",
            "text": "3が表示される"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問26）。",
          "pdfExplanation": "正解：D\n\nStringクラスのinternメソッドに関する問題です。\nプログラムに直接記述される文字列リテラルは、メモリ上の「コンスタントプール」と呼ばれる場所に保存されます（解答24を参照）。同じ文字列が何度も使われる場合には、コンスタントプールに保存された文字列が再利用されます。\n\njava.lang.Stringクラスのinternメソッドは、コンスタントプールを含むメモリ内の文字列を探して、再利用するためのメソッドです。たとえば、次のコードは同じ文字列を持つ2つのStringのインスタンスを生成しています。\n\n例: Stringのインスタンス生成\n\n```java\nString str1 = new String(\"def\");\nString str2 = new String(\"def\");\nSystem.out.println(str1 == str2);\n```\n\nnewを使って新しいString型インスタンスを生成しているため、str1とstr2の参照先は異なります。そのため、==演算子を使うとfalseが戻ります。しかし、これを次のようにinternメソッドを使うように変更すると、結果はtrueになります。\n\n例: internメソッドを使って、2つの変数の参照先を比較\n\n```java\nString str1 = new String(\"def\");\nString str2 = new String(\"def\");\nSystem.out.println(str1.intern() == str2.intern());\n```\n\nこれはinternメソッドが、すでにメモリ内にある文字列への参照を戻すためです。メモリ上に複数の同じ文字列を持つStringのインスタンスがあっても、internメソッドが戻す参照は1つだけです。そのため、上記のようにinternメソッドの戻り値を==演算子で比較すると、同じ参照先を持っているためtrueとなるのです。\n\n設問のコードでは、internの結果を文字列リテラルと比較したり（8行目、11行目）、同じ文字列を持つ異なるインスタンスへの参照を使ってそれぞれのinternの結果を比較しています（14行目）。いずれの場合も、同じStringのインスタンスへの参照が戻ってくるため、結果はtrueとなり、count変数を3回インクリメントすることになります。以上のことから、選択肢Dが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.45 / 2章 解説PDF p.87",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"abc\";\n        String b = new String(a);\n\n        int count = 0;\n        if (a.intern() == \"abc\") {\n            count++;\n        }\n        if (b.intern() == \"abc\") {\n            count++;\n        }\n        if (a.intern() == b.intern()) {\n            count++;\n        }\n        System.out.println(count);\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "intern",
          "string/reference",
          "main/args",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q27",
        "number": 27,
        "type": "single",
        "selectCount": 1,
        "title": "配列参照の出力",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
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
            "text": "何も表示されない"
          },
          {
            "key": "D",
            "text": "{}が表示される"
          },
          {
            "key": "E",
            "text": "ハッシュコードが表示される"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問27）。",
          "pdfExplanation": "正解：E\n\n配列の特徴に関する問題です。\n配列は、値の集合を扱うための「インスタンス」です。たとえばC言語などのように、同じ型の変数をまとめたものを「配列」と呼ぶプログラミング言語もあります。しかし、Javaの配列は「配列クラス」から作られた「インスタンス」であり、値の集合を扱うことを目的としています。値そのものと、値の集合を扱うインスタンスは異なるものであることに注意してください。\nなお、配列が扱う値のことを「要素」と呼びます。\n\n【配列】\n\n```text\n配列クラス\n  言語仕様に組み込まれているため見ることはできない\n        ↓ newによるインスタンス化\n配列インスタンス\n  インスタンス化する段階でいくつまでの値を扱えるか、要素数を指定する\n        ↓ 扱う\n値の集合\n  この1つひとつが要素\n```\n\n配列には、次のような2つの特徴があります。\n\n・同じ型、もしくは互換性のある型の値しか扱えない\n・扱える要素数はインスタンス生成時に決める。後で要素数を変えることはできない\n\nなお、配列にはプリミティブ型の要素を持つものとオブジェクト型の要素を持つものの2種類があります。これらは、要素で値そのものを扱うのか、参照（リンク情報）を扱うのかだけの違いであり、どちらも値をひとまとめにして扱う点に違いはありません。\n\n配列を使うには、ほかのオブジェクトと同様にnewキーワードを使って、配列のインスタンスを生成しなければいけません。また、配列インスタンスの生成時には、要素数を指定します。たとえば、次のように記述すると、「3つのint型の値しか扱えない配列インスタンス」を生成します。\n\n例 配列インスタンスの生成\n\n```java\nnew int[3];\n```\n\n配列は、ほかのオブジェクトのように、変数に格納した参照を経由して扱います。配列型変数は、次のように大カッコ「[]」を使って配列型変数であることを表します。\n\n例 配列型変数の宣言\n\n```java\nint[] array;\n```\n\n配列型変数には、配列インスタンスへの参照を代入します。変数に値が直接入るわけではないことに注意してください。特にJava入門者は、1つの変数内に複数の値が入ると思い違いしてしまうことがあるので注意しましょう。次\n\nのコードは、これまでのコード例をつなげ、3つのint型の要素を扱う配列インスタンスを生成し、その参照を配列型変数arrayに代入している例です。\n\n例 配列インスタンスの生成、配列型変数への代入\n\n```java\nint[] array = new int[3];\n```\n\n設問のコードは、次のように配列インスタンスの生成時に指定する要素数を0にしています。\n\n例 設問のコード3行目\n\n```java\nint[] array = new int[0];\n```\n\nこれは、「要素を1つも扱わない配列インスタンス」を生成しているだけです。複数の要素をひとまとめにして扱うのが配列の役割であることを考えれば、このインスタンスは何の役目も果たしませんが、文法的に間違っているわけではありません。そのため、選択肢Fのようにコンパイルエラーが発生することはありません。\n\n4行目のprintlnメソッドは、引数に渡された値をコンソールに表示するメソッドです。このメソッドの引数にオブジェクトへの参照を渡すと、参照先にあるインスタンスのtoStringメソッドを呼び出し、その結果を表示します。配列も同様で、引数に配列（への参照）を渡すと、参照先にある配列インスタンスのtoStringメソッドを呼び出します。\n\n配列クラスは、ほかのクラスと同様にObjectクラスを継承しており、toStringメソッドもObjectクラスから引き継いでいます。ObjectクラスのtoStringメソッドは次のような定義になっており、クラス名とインスタンスを一意に見分けるためのハッシュコードを組み合わせた値を戻します。\n\n```java\npublic String toString() {\n    return getClass().getName() + \"@\" + Integer.toHexString(hashCode());\n}\n```\n\nprintlnメソッドに配列を渡すと、このコードが実行され、その戻り値がコンソールに表示されます。以上のことから、選択肢Eが正解です。\n\n【参考】\n\n配列がクラスから作られたインスタンスであることは、次のようなコードで確かめることができます。\n\n例 配列インスタンスの生成元情報を取得\n\n```java\nint[] array = new int[3];\nClass clazz = array.getClass();\nSystem.out.println(clazz.getCanonicalName());\n```\n\nすべてのインスタンスは、どのクラスから作られたのかという「生成元の情報」を持っています。その情報を扱うのがClassクラスです。このコードは、配列インスタンスの生成元情報を取り出し、正式名称をコンソールに表示するものです。なお、コードの実行結果は「int[]」です。\n\nこのようなコードが実行できることからも、配列がクラスから作られたインスタンスであることがわかります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.45-46 / 2章 解説PDF p.89",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[] array = new int[0];\n        System.out.println(array);\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "println",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q28",
        "number": 28,
        "type": "single",
        "selectCount": 1,
        "title": "配列変数の宣言",
        "prompt": "次のプログラムの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "3行目でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "4行目でコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "5行目でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "6行目でコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "4行目と6行目でコンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "7行目と8行目でコンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "コンパイルエラーは発生しない"
          }
        ],
        "answer": [
          "G"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問28）。",
          "pdfExplanation": "正解：G\n\n配列型変数の宣言方法に関する問題です。\n配列型変数は、次のように大カッコ「[]」を使って宣言します。\n\n例 配列型変数の宣言①\n\n```java\nint[] array;\n```\n\nこの大カッコは、データ型の後ろに記述するだけでなく、変数名の後ろに記述することもできます。このような柔軟性は、ほかのプログラミング言語から移行してくる技術者のために用意されているものです。\n\n例 配列型変数の宣言②\n\n```java\nint array[];\n```\n\n上記のように、設問の3行目と4行目のコードは正しい配列型変数の宣言であるため、選択肢AとBは誤りです。\n\n配列は複数の要素をひとまとめにして扱います。要素は大きく分けて、プリミティブ型とオブジェクト型の2種類の値があります。解答27では、配列は\n\nクラスから作られたインスタンスであること、ほかのクラスのインスタンスと同じように参照を使って扱うことを学びました。このことから、次の2点がわかります。\n\n・配列は複数の参照をひとまとめにして扱うことができる\n・配列そのものもインスタンスであり、参照を通して扱える\n\nこれらを組み合わせると、配列の要素として、ほかの配列への参照を扱えることがわかります。このように、さらにほかの配列への参照を持っている配列のことを「多次元配列」と呼びます。次の図は、多次元配列の例です。この図では、配列が配列を持っており、2層の配列で成り立っています。このような2層で成り立つ多次元配列のことを「2次元配列」と呼びます。\n\n【2次元配列】\n\n```text\n1次元目: [0] [1] [2]\n          ↓   ↓   ↓\n2次元目: [A B C] [D E F] [G H I]\n```\n\n2次元配列の2次元目の配列が、次の図のようにさらに配列への参照を持つこともできます。このように3層で成り立つ多次元配列のことを、「3次元配列」と呼びます。\n\n【3次元配列】\n\n```text\n1次元目: [0] [1] [2]\n          ↓   ↓   ↓\n2次元目: [0 1 2] [0 1 2] [0 1 2]\n          ↓ ↓ ↓   ↓ ↓ ↓   ↓ ↓ ↓\n3次元目: [A B C] [D E F] [G H I] [J K L] [M N O] [P Q R] [S T U] [V W X] [Y Z A]\n```\n\nこのような多次元配列のインスタンスを扱う変数は、配列であることを表す大カッコを、次元数の分だけ記述します。たとえば、次のコードは2次元と3次元の配列型変数の宣言です。\n\n例 2次元配列、3次元配列の配列型変数の宣言①\n\n```java\nint[][] arrayA;      // 2次元配列型変数の宣言\nint arrayB[][][];    // 3次元配列型変数の宣言\n```\n\n1次元配列のときと同様に、大カッコはデータ型の後ろだけでなく、変数名の後ろに記述できます。よって、設問のコード5行目と6行目は正しい変数宣言であるため、選択肢CとDは誤りです。また、前述のとおり4行目のコードは正しく記述されているため、選択肢Eも誤りです。\n\n多次元配列の場合には、複数記述する大カッコを一度にまとめて記述する必要はありません。次のようにデータ型と変数名の後ろに分けて記述することもできます。次のコードは2次元と3次元の配列型変数の宣言をしている例です。\n\n例 2次元配列、3次元配列の配列型変数の宣言②\n\n```java\nint[] arrayA[];      // 2次元配列型変数の宣言\nint[][] arrayB[];    // 3次元配列型変数の宣言\n```\n\n上記のとおり、7行目と8行目でもコンパイルエラーは発生しないので、選択肢Fは誤りです。以上のことから、設問のプログラムでコンパイルエラーは発生しません。よって、選択肢Gが正解です。\n\n【参考】\n\n配列型変数の宣言に使う大カッコ「[]」を、データ型の後ろだけでなく、変数名の後ろに記述してもコンパイルエラーは発生しません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.46 / 2章 解説PDF p.90",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[] a;\n        int b[];\n        int[][] c;\n        int d[][];\n        int[] e[];\n        int[][] f[];\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "declaration",
          "main/args",
          "string/reference",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q29",
        "number": 29,
        "type": "single",
        "selectCount": 1,
        "title": "配列型変数の宣言",
        "prompt": "配列型変数の宣言として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "int[3] a;"
          },
          {
            "key": "B",
            "code": "int b[2];"
          },
          {
            "key": "C",
            "code": "int[2] c[];"
          },
          {
            "key": "D",
            "code": "int d[3][];"
          },
          {
            "key": "E",
            "text": "選択肢A〜Dまですべて誤りである"
          },
          {
            "key": "F",
            "text": "選択肢A〜Dまですべて正しい"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問29）。",
          "pdfExplanation": "正解：E\n\n配列型変数の宣言方法に関する問題です。\n設問のような配列型変数についての問題を正しく解くためには、配列型変数と配列インスタンス、要素の違いを明確に理解しておく必要があります。これらの概念は次の図のように、まったく異なるものです。\n\n【配列型変数、配列】\n\n```text\n配列型変数 --参照する--> 配列インスタンス --扱う--> 要素\n\nint[] array = new int[3];\n^^^^^^^^^^^   ^^^^^^^^^^\n配列型変数     配列インスタンス\n\n両方合わせて「配列」と呼ぶ\n```\n\n配列型変数には、配列インスタンスへの参照を代入するだけで、参照先の配列がいくつの要素を扱えるかは関係ありません。そのため、配列型変数を宣言するときは、次のように要素数を指定することはできません。\n\n例 配列型変数の宣言（コンパイルエラー）\n\n```java\nint[2] array;\n```\n\n以上のことから、要素数を指定している選択肢A〜Dはすべて間違った配列型変数の宣言です。よって、選択肢Eが正解です。\n\n【試験対策】\n\n配列型変数の宣言時に、要素数は指定できません。配列に関する問題では、変数宣言とインスタンス生成のどちらで要素数が指定されているかをチェックしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.46 / 2章 解説PDF p.92",
        "tags": [
          "array",
          "declaration"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q30",
        "number": 30,
        "type": "multi",
        "selectCount": 3,
        "title": "配列生成式",
        "prompt": "次の中から、コンパイルエラーになるコードを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "int a[] = new int[2][3];"
          },
          {
            "key": "B",
            "code": "int[] b = new int[2.3];"
          },
          {
            "key": "C",
            "code": "int c[] = new int[2 * 3];"
          },
          {
            "key": "D",
            "code": "int x = 2, y = 3;\nint[] d = new int[x * y];"
          },
          {
            "key": "E",
            "code": "int[][] e = new int[2][];"
          },
          {
            "key": "F",
            "code": "int f[][] = new int[][3];"
          }
        ],
        "answer": [
          "A",
          "B",
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問30）。",
          "pdfExplanation": "正解：A、B、F\n\n配列インスタンスの生成方法に関する問題です。\n配列インスタンスの生成には、必ず扱える要素数を指定しなければいけません。たとえば、次のようなコードはコンパイルエラーになります。\n\n例 要素数を指定しなかった場合（コンパイルエラー）\n\n```java\nint[] array = new int[];    // 要素数を指定していない\n```\n\n要素数の指定は、整数値で記述しなくてはいけません。次のように浮動小数点数は記述できません。よって、選択肢Bはコンパイルエラーになります。\n\n例 要素数に浮動小数点数を記述した場合（コンパイルエラー）\n\n```java\nint[] array = new int[2.3];\n```\n\nなお、要素数の指定にはint型の値を使います。同じ整数値でもlong型は使えないことに注意してください。\n\nまた、要素数の指定は、選択肢CやDのようにint型の値を戻す式を使って指定することもできます。よって、選択肢CとDはコンパイルエラーにはなりません。\n\n解答28で、多次元配列は配列の要素として配列への参照を扱うということを学びました。たとえば、2次元配列のインスタンスを生成するには、次のように1次元目と2次元目の要素数を指定します。\n\n例 2次元配列のインスタンスを生成①\n\n```java\nint[][] array = new int[3][3];\n```\n\nこのように記述すると、1次元目と2次元目の配列インスタンスが同時に生成されます。このコードは、次のような順序で動作します。\n\n・3つの要素を持った1次元目の配列インスタンスが作られる\n・3つの要素を持った2次元目の配列インスタンスが3つ作られる\n・1次元目の要素として、3つの2次元目の配列インスタンスへの参照が代入される\n\n1次元目と2次元目の配列インスタンスを同時に生成するのではなく、まず1次元目の配列インスタンスを生成し、2次元目の配列インスタンスは後から生成することもできます。その場合には、次のように1次元目だけ要素数を記述します。次のコードは、1次元目の配列インスタンスだけを生成し、2次元目は後から生成して、1次元目の配列の要素として参照を代入している例です。\n\n例 2次元配列のインスタンスを生成②\n\n```java\nint[][] array = new int[3][];\narray[0] = new int[3];\narray[1] = new int[3];\narray[2] = new int[3];\n```\n\nこのように、1次元目と2次元目を別々のタイミングで生成することができます。このとき、1次元目の要素数は省略できないことに注意してください。選\n\n択肢Fのように1次元目の要素数を指定せずに、2次元目の要素数を指定することはできません。以上のことから、選択肢Fはコンパイルエラーになります。\n\nなお、選択肢Aは1次元配列の変数を宣言しているにもかかわらず、2次元配列のインスタンスを生成して参照を代入しようとしています。多次元配列を使う場合には、変数とインスタンスの間で次元数を一致させなくてはいけません。よって、選択肢Aはコンパイルエラーになります。\n\n多次元配列では、2次元目以降の配列の要素数を揃える必要がありません。たとえば、次の図のように3つの要素を持つ1次元目の配列が、2次元目に2つ、3つ、4つとそれぞれ異なる要素数を持つ配列への参照を持つことも可能です。\n\n【多次元配列と配列の要素数】\n\n```text\n1次元目: [0] [1] [2]\n          ↓   ↓   ↓\n2次元目: [A B] [C D E] [F G H I]\n```\n\n解答29で説明したとおり、配列型変数は参照先の配列インスタンスがいくつ要素を扱っていても関係ありません。それと同じように、配列内の要素を管理するための変数も、参照先の配列インスタンスの要素数と関係がありません。そのため、1次元目の配列の要素は、参照先にある（2次元目の）配列がいくつ要素を管理する配列であっても問題ありません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.47 / 2章 解説PDF p.93",
        "tags": [
          "array",
          "compile-error",
          "literal",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q31",
        "number": 31,
        "type": "single",
        "selectCount": 1,
        "title": "参照型配列の初期値",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "200が表示される"
          },
          {
            "key": "C",
            "text": "300が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問31）。",
          "pdfExplanation": "正解：E\n\n配列インスタンスと要素の値に関する問題です。\n初心者が陥りやすい間違いとして、オブジェクト型配列を生成したときに、オブジェクトそのものを同時に作っていると錯覚しがちなことが挙げられます。これまで解説してきたとおり、配列型変数や配列インスタンスと、要素は異なるものであることを思い出してください。\n\n【配列インスタンスと配列の要素】\n\n```text\n配列インスタンス --扱う--> 値の集合\n```\n\nこの図からもわかるとおり、配列インスタンスと要素は異なるものであるため、配列インスタンスを生成しただけでは要素の中身が作られることはありません。配列インスタンスを生成するとき、要素の値は次のように代入しなければいけません。\n\n例 配列インスタンスの生成と配列の要素への値の代入\n\n```java\nint[] array = new int[3];\narray[0] = 10;\narray[1] = 20;\narray[2] = 30;\n```\n\n要素のデフォルト値は次の表のように決まっており、配列インスタンスを生成した直後は、これらの値で要素は初期化されています。\n\n【配列の要素のデフォルト値】\n\n| 型 | デフォルト値 |\n|---|---|\n| 整数型 | 0 |\n| 浮動小数点数型 | 0.0 |\n| 真偽型 | false |\n| 文字型 | \\u0000 |\n| オブジェクト型 | null |\n\nそのため、次のコードはコンソールに0を表示します。\n\n例 配列の要素がデフォルト値で初期化\n\n```java\nint[] array = new int[3];    // 配列インスタンスを作っただけ\nSystem.out.println(array[0]);\n```\n\nもし、配列インスタンスの生成と同時に要素の値を初期化したい場合には、次のように初期化子「{}」を使います。\n\n例 初期化子を使用して要素の値を初期化\n\n```java\nint[] array = {10, 20, 30};\n```\n\n初期化子は、配列のインスタンス生成と要素の初期化を同時に行えるため便利です。\n\n設問のコードは、Mainクラスの3行目で「3つのItemしか扱わない配列インスタンス」を生成しています。このとき、生成しているのは「配列インスタン\n\nス」であって、Itemのインスタンスを生成しているわけではないことに注意してください。この配列インスタンスの要素は、前述のとおりオブジェクト型配列のデフォルト値である「null」で初期化されています。そのため、6行目でpriceフィールドにアクセスする段階で、変数の参照先がないという意味のNullPointerExceptionが発生します。以上のことから、選択肢Eが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.47 / 2章 解説PDF p.95",
        "codeBlocks": [
          {
            "title": "Item.java",
            "code": "public class Item {\n    String name;\n    int price = 100;\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Item[] items = new Item[3];\n        int total = 0;\n        for (int i = 0; i < items.length; i++) {\n            total += items[i].price;\n        }\n        System.out.println(total);\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "reference",
          "runtime-exception",
          "inheritance/polymorphism",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q32",
        "number": 32,
        "type": "single",
        "selectCount": 1,
        "title": "配列要素へのnull代入",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「ABCD」と表示される"
          },
          {
            "key": "B",
            "text": "「BCD」と表示される"
          },
          {
            "key": "C",
            "text": "「nullBCD」と表示される"
          },
          {
            "key": "D",
            "text": "「null」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問32）。",
          "pdfExplanation": "正解：C\n\n配列の要素に関する問題です。\n配列インスタンスの生成時に、いくつの要素を持てるかを指定します。配列インスタンスは、指定された要素数分の変数を内部に持っており、各変数には添字を使ってアクセスします。配列インスタンスの生成時に要素数を指定すると、配列の要素はその数で固定され、後から変更することはできません。もちろん、値の代入によって要素数が変わることもありません。\n\n設問のコード3行目では、初期化子「{}」を使って配列インスタンスの生成と要素の初期化を同時に行っています。そのため、この配列インスタンスは4つの要素を持ち、各要素にはStringへの参照が代入されていることになります。\n\n【設問の配列インスタンス（3行目）】\n\n```text\narray -> 配列インスタンス\n         [0] [1] [2] [3]\n          ↓   ↓   ↓   ↓\n          A   B   C   D\n          Stringインスタンス\n```\n\n設問では、4行目で最初の要素の値を変更しています。これは「要素の値」を変更しただけであり、配列自身が変わったわけではありません。要素にnullを代入しても、順番が繰り上がるわけではないことに注意しましょう。\n\n「null」はどこも参照していないことを表す「リテラル」です（第4章の解答3を参照）。そのため、4行目が実行されると、配列インスタンスは次の図のようになります。\n\n【設問の配列インスタンス（4行目）】\n\n```text\narray -> 配列インスタンス\n         [0] [1] [2] [3]\n        null  ↓   ↓   ↓\n              B   C   D\n              Stringインスタンス\n\n要素の値としてnullが入っている\n```\n\n5行目からは拡張for文を使って、1つずつ要素の値を取り出し、コンソールに出力しています。前述の図からわかるとおり、配列インスタンスの4つの要素は「null」と「B、C、DのStringインスタンスへの参照」です。そのため、コンソールには「nullBCD」と表示されます。よって、選択肢Cが正解です。\n\n【試験対策】\n\n配列インスタンスと要素の値は異なるものです。混同しないように気を付けましょう。要素の値が変わっても、配列そのものが影響を受けることがないことを覚えておきましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.48 / 2章 解説PDF p.97",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[] array = {\"A\", \"B\", \"C\", \"D\"};\n        array[0] = null;\n        for (String str : array) {\n            System.out.print(str);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "null",
          "string/reference",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q33",
        "number": 33,
        "type": "multi",
        "selectCount": 3,
        "title": "配列初期化",
        "prompt": "次の中から、コンパイルエラーにならないコードを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "int[] a = new int[2]{2, 3};"
          },
          {
            "key": "B",
            "code": "int b[][] = {};"
          },
          {
            "key": "C",
            "code": "int[][] c = new int[][]{};"
          },
          {
            "key": "D",
            "code": "int[] d;\nd = new int[]{2, 3};"
          },
          {
            "key": "E",
            "code": "int e[];\ne = {2, 3};"
          }
        ],
        "answer": [
          "B",
          "C",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問33）。",
          "pdfExplanation": "正解：B、C、D\n\n配列インスタンスの生成と初期化、配列型変数の宣言と参照の代入の書式を問う問題です。\n配列インスタンスの生成、初期化、そして配列型変数の宣言と参照の代入といった4つのステップを一度に行うことができます。これらを一度に行うには、次のように初期化子「{}」を使う方法が一番簡単です。\n\n例 配列インスタンスの生成・初期化と配列型変数の宣言と参照の代入①\n\n```java\nint[] array = { 2, 3 };\n```\n\n上記は、次のようなコードでも表せます。\n\n例 配列インスタンスの生成・初期化と配列型変数の宣言と参照の代入②\n\n```java\nint[] array = new int[]{ 2, 3 };\n```\n\nどちらのコードも同じ意味を持ちますが、後者の方法には1つ注意点があります。通常、newだけを使って配列のインスタンスを生成するときには、大カッコ「[]」の中に要素数を指定します（解答27を参照）。しかし、newと初期化子の両方を使った場合、大カッコの中に要素数を指定してはいけませ\n\nん。大カッコに続く初期化子の中に記述した値の数によって、自動的に配列の要素数が決まります。もし、次のように要素数を記述するとコンパイルエラーになります。\n\n例 配列の要素数を指定した場合（コンパイルエラー）\n\n```java\nint[] array = new int[2]{ 2, 3 };\n```\n\n初期化子が出てきたときには、要素数は自動計算されると覚えておきましょう。以上のことから、要素数を指定している選択肢Aは誤りです。\n\nなお、次のように初期化子だけを記述した場合、要素数ゼロの配列インスタンスが生成されます。複数の要素をひとまとめにして扱うのが配列の役割であることを考えれば、このインスタンスは何の役目も果たしませんが、文法的に間違っているわけではありません。\n\n例 要素数ゼロの配列インスタンスの生成①\n\n```java\nint[] array = {};\n```\n\n上記は、次のコードと同じです。\n\n例 要素数ゼロの配列インスタンスの生成②\n\n```java\nint[] array = new int[0];\n```\n\nまた、多次元配列の場合は、次のように初期化子の中に、さらに初期化子をカンマ区切りで列挙します。\n\n例 多次元配列の生成・宣言・初期化①\n\n```java\nint[][] array = { { 2, 3 }, { 4, 5 } };\n```\n\n多次元配列は、次の図のように配列の要素として配列の参照を持つ配列のことです。そのため、多次元配列型変数には1次元目の配列インスタンスへの参照が代入されます。\n\n【多次元配列】\n\n```text\n多次元配列でも変数に入るのは1次元目の参照だけ\n\narray -> 1次元目 [0] [1] [2]\n             ↓   ↓   ↓\n2次元目     [A B C] [D E F] [G H I]\n```\n\nどれだけ次元数が多い配列型変数であっても、変数には1次元目の参照が入ります。問題は、変数の次元数と参照先の次元数が一致するかどうかです。たとえば、次のコードは、変数は2次元、参照先の配列インスタンスは1次元であるため、コンパイルエラーになります。\n\n例 多次元配列の生成・宣言・初期化②（コンパイルエラー）\n\n```java\nint[][] array = new int[]{};\n```\n\nこのコードは、次のように修正すれば変数と配列インスタンスの次元数が一致するため、コンパイルエラーは発生しません。よって、選択肢Cは正解です。\n\n例 多次元配列の生成・宣言・初期化③\n\n```java\nint[][] array = new int[][]{};\n```\n\nこのほかにも、newを使わずに初期化子だけで記述するとコンパイルエラーは発生しません。\n\n例 多次元配列の生成・宣言・初期化④\n\n```java\nint[][] array = {};\n```\n\nこれは、初期化子が自動的に必要な次元数を算出して、必要な初期化を行うためです。よって、選択肢Bは正解です。\n\nこのように初期化子はとても便利なものですが、利用するときには「変数宣言と同時にしか使えない」というルールがあることを覚えておきましょう。このルールは、前述の多次元配列の場合を想定すると理解しやすいでしょう。多次元配列であっても、初期化子は必要な次元数を自動的に算出します。こ\n\nの算出に使われるのが、変数の次元数です。初期化子は、変数の次元数と同じ次元数で配列を作るようにしているため、変数宣言と同時にしか使えないのです。よって、変数宣言と配列のインスタンス生成を分けて2行に記述している選択肢Eは誤りです。\n次のように配列インスタンスを作るときに大カッコを使ってプログラマーが明示的に次元数を記述すれば、問題ありません。\n\n例 大カッコを使い、明示的に次元数を記述した場合\n\n```java\nint[][] array;\narray = new int[][]{};    // 次元数を明示している\n```\n\n以上のことから、選択肢Dは正解です。\n\n【試験対策】\n\nnewと初期化子の両方を使って配列のインスタンス生成と初期化を同時に行う場合、要素数は自動算出されるため、大カッコの中に要素数は指定できません。\n\n【試験対策】\n\n初期化子を使って、配列のインスタンス生成と初期化を同時に行う場合、変数の宣言と参照の代入も同時に行います。セミコロン「;」を使って変数宣言と配列のインスタンス生成のタイミングを分けることはできません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.48 / 2章 解説PDF p.98",
        "tags": [
          "array",
          "initializer"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q34",
        "number": 34,
        "type": "single",
        "selectCount": 1,
        "title": "多次元配列とnull",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "5が表示される"
          },
          {
            "key": "C",
            "text": "9が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問34）。",
          "pdfExplanation": "正解：E\n\n多次元配列に関する問題です。\n解答30で解説したとおり、多次元配列では、2次元目以降の配列の要素数を揃える必要がありません。たとえば、次の図のように3つの要素を持つ1次元目の配列が、2つ、3つ、4つとそれぞれ異なる要素数を持つ配列への参照を持つことも可能です。\n\n【多次元配列】\n\n```text\n1次元目: [0] [1] [2]\n          ↓   ↓   ↓\n2次元目: [A B] [C D E] [F G H I]\n```\n\nこのような配列のことを「非対称な多次元配列」と呼びます。設問のコードでは、この非対称な多次元配列を使っています。このコードは、次の図のように表すことができます。\n\n【nullが含まれている多次元配列】\n\n```text\n2つ目の要素が\nどこも参照していない\n\n1次元目: [0] [1] [2]\n          ↓  null ↓\n2次元目: [A B]     [C D E]\n```\n\n1次元目の2つ目の要素はnullで初期化されており、どこも参照していません。設問のコードでは、arrayで参照できる1次元目の配列から要素を取り出し、lengthを使って要素数を数えようとしています。しかし、前述のとおり2つ目の要素の値はnullであり、参照先は存在しません。そのため、NullPointerExceptionが発生します。以上のことから、選択肢Eが正解です。\n\n【試験対策】\n\n多次元配列は、非対称な配列を保持できます。\n\n【参考】\n\n配列のlengthはフィールドではありません。コンパイル時に配列の要素数を数える命令に置き換えられるため、メソッドに近い働きをします。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.49 / 2章 解説PDF p.100",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[][] array = {{\"A\", \"B\"}, null, {\"C\", \"D\", \"E\"}};\n        int total = 0;\n        for (String[] tmp : array) {\n            total += tmp.length;\n        }\n        System.out.println(total);\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "null",
          "runtime-exception",
          "string/reference",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q35",
        "number": 35,
        "type": "single",
        "selectCount": 1,
        "title": "配列の共変性",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Mainクラスの3行目でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "Mainクラスの4行目でコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "実行時に例外がスローされる"
          },
          {
            "key": "D",
            "text": "コンパイルも実行もできる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問35）。",
          "pdfExplanation": "正解：D\n\n継承・実現関係にあるクラスやインタフェースのインスタンスの動作に関する問題です。\nあるクラスが継承関係にあるとき、スーパークラス型の配列型変数で、サブクラスのインスタンスの集合を扱えます。たとえば、次のコード例では、Object型しか扱わない配列型変数を宣言し、その変数にString型インスタンスの参照を持つ配列インスタンスを作って、変数に参照を代入しています。\n\n例 スーパークラス型の配列型変数にサブクラスのインスタンスへの参照を代入\n\n```java\nObject[] obj = {\"A\", \"B\", \"C\"};\n```\n\nObject型しか扱わない配列型変数と、String型しか扱わない配列インスタンスは、扱う型が異なりますが、StringクラスはObjectクラスを継承しているため、このコードは問題なくコンパイル、実行できます。このように継承関係にある型同士であれば、配列として扱うことができます。\n\nこの関係は、インタフェースと実現クラス、抽象クラスとそれを継承した具象クラスの間にも適用できます。たとえば、Aというインタフェースがあり、それをimplementsしたBというクラスがあったとします。\n\n例 AインタフェースとAをimplementsしたBクラス\n\n```java\npublic interface A {}\npublic class B implements A {}\n```\n\nAクラスとBクラスがこのような実現関係にある場合、次のようにBしか扱わない配列インスタンスの参照を、Aしか扱わない配列型変数に代入できます。\n\n例 A型の配列型変数にB型の配列インスタンスの参照を代入\n\n```java\nA[] array = new B[]{ new B(), new B() };\n```\n\nこのような型変換ができるのは、実現や継承の関係にあるときだけです。そのため、複数のクラスやインタフェースが関係する問題が出題されたときは、まずUMLのクラス図を描いてみて、関係を確認するようにしましょう。次の図は、設問のコードをクラス図で表したものです。\n\n【設問のコードのクラス図】\n\n```text\n<<interface>>\n     A\n     △\n     |\n     B\n  {abstract}\n     △\n     |\n     C\n     △\n     |\n     D\n```\n\nこの図からわかるとおり、CやDはAの実現クラスであるBを継承しています。そのため、CとDのどちらもA型として扱うことができます。設問のコードでは、\n\nMainクラスの3行目で初期化子「{}」を使って配列インスタンスを生成し、Cのインスタンスへの参照、null、Dのインスタンスへの参照で初期化しています。前述のとおり、CとDのどちらもA型として扱うことができるため、この行でコンパイルエラーは発生しません。よって、選択肢Aは誤りです。\n\nまた、すべての配列型変数は、Object配列型変数に暗黙的に型変換できます。これは、すべてのクラスはObject型を暗黙的に継承しているためです。そのため、次のコードは問題なくコンパイル、実行できます。\n\n例 配列インスタンスをObject配列型変数に代入\n\n```java\nA[] array = new B[]{ new B(), new B() };\nObject[] objArray = array;\n```\n\n設問のMainクラスの4行目も、Aしか扱わない配列型変数を、Objectしか扱わない配列型変数に代入しています。このコードは、暗黙的に型変換が行われるため、4行目でコンパイルエラーは発生しません。よって、選択肢Bも誤りです。\n\n実行時に例外が発生する可能性があるのは、キャスト演算子を使って明示的に型変換をしたものの、実行してみると型に互換性がなかった場合が考えられます。たとえば、設問のMainクラスの3行目を次のように書き換えた場合は、プログラマーが明示的にキャスト式を記述しているためコンパイルエラーは起きません。しかし、実行してみるとCクラスはDに変換できないため、ClassCastExceptionがスローされます。\n\n例 明示的な型変換\n\n```java\nA[] array = new D[]{ (D) new C(), null, new D() };\n```\n\n設問のコードは、このように明示的なキャストを行っていません。もう1点考えられるのが配列の要素にnullを渡しているため、NullPointerExceptionが発生する可能性があることです。しかし、設問のコードでは変数arrayやobjArrayを使っている箇所がないため、発生する可能性がありません。よって、選択肢Cも誤りです。\n\n以上のことから、選択肢Dが正解です。\n\n【試験対策】\n\nインタフェースや抽象クラス、スーパークラスを使って配列型変数を宣言した場合、配列インスタンスは、インタフェースの実現クラスや抽象クラス、具象クラスのサブクラス型のインスタンスの集合を扱えることを理解しておきましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.50 / 2章 解説PDF p.102",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {}"
          },
          {
            "title": "B.java",
            "code": "public abstract class B implements A {}"
          },
          {
            "title": "C.java",
            "code": "public class C extends B {}"
          },
          {
            "title": "D.java",
            "code": "public class D extends C {}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A[] array = {new C(), null, new D()};\n        Object[] objArray = array;\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "polymorphism",
          "interface/default",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q36",
        "number": 36,
        "type": "single",
        "selectCount": 1,
        "title": "2次元配列のclone",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "12が表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問36）。",
          "pdfExplanation": "正解：B\n\ncloneメソッドを使用した配列のコピーに関する問題です。\n配列をコピーする方法はいくつかありますが、cloneメソッドもそのうちの1つです。cloneメソッドを使うと、同じ値を持った配列インスタンスが複製されます。たとえば、次のコードでは、cloneメソッドを使って、arrayAで参照する配列を次の行でコピーしています。\n\n例 cloneメソッドを使った配列のコピー\n\n```java\nint[] arrayA = { 1, 2, 3, 4 };\nint[] arrayB = arrayA.clone();\nSystem.out.println(arrayA == arrayB);\nfor (int i : arrayB) {\n    System.out.println(i);\n}\n```\n\n変数arrayBには、arrayAの参照先にある配列インスタンスを複製したインスタンスへの参照が代入されています。3行目のように変数arrayAとarrayBの値を==演算子で比較すると、その結果は「false」となるため、変数arrayAとarrayBの参照先が異なることがわかります。\n\narrayBの参照先にある配列インスタンスの要素には、何も値を入れていません。しかし、このインスタンスはarrayAで参照できる配列インスタンスの複製であるため、上記のコードを実行すればコンソールに1〜4の数字が表示されます。\n\n設問のコードは、2次元配列に対してcloneメソッドを使っています。これを図示すると次のようになります。\n\n【cloneメソッドによる配列のコピー】\n\n```text\narrayA -> 1次元目 [0] [1] [2]\n            ↓   ↓   ↓\n          [1 2] [1 2] [1 2 3]\n\narrayB -> 1次元目 [0] [1] [2]\n            ↓   ↓   ↓\n          [1 2] [1 2] [1 2 3]\n\n呼び出したのがarrayAの参照先にあるインスタンスのcloneメソッドなので、\nそのインスタンスだけのコピーが作られる。\n```\n\ncloneメソッドは、変数の参照先にあるインスタンスをそのままコピーします。変数arrayAの参照先にあるインスタンスは1次元目のインスタンスなので、1次元目のインスタンスとそのインスタンスが持つ参照もそのまま複製されます。変数arrayAとarrayBの先にある1次元目のインスタンスは異なりますが、その1次元目のインスタンスが持つ2次元目のインスタンスは図のように共有されている点に注意してください。\n\n設問のコードは、6行目以降の二重ループで、2次元目の配列から1つずつ値を取り出し、合計しています。合計値は1+2+1+2+1+2+3=12となるため、コンソールには12が表示されます。以上のことから、選択肢Bが正解です。\n\n【試験対策】\n\ncloneメソッドは、配列の内容をそのままコピーします。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.50-51 / 2章 解説PDF p.104",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] arrayA = {{1, 2}, {1, 2}, {1, 2, 3}};\n        int[][] arrayB = arrayA.clone();\n        int total = 0;\n        for (int[] tmp : arrayB) {\n            for (int val : tmp) {\n                total += val;\n            }\n        }\n        System.out.println(total);\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "clone",
          "enhanced-for",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q37",
        "number": 37,
        "type": "multi",
        "selectCount": 3,
        "title": "ArrayListの性質",
        "prompt": "次のうち、ArrayListの説明として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "nullは扱えない"
          },
          {
            "key": "B",
            "text": "動的な配列として動作する"
          },
          {
            "key": "C",
            "text": "重複した値は扱えない"
          },
          {
            "key": "D",
            "text": "スレッドセーフではない"
          },
          {
            "key": "E",
            "text": "値を追加する箇所を制御できる"
          }
        ],
        "answer": [
          "B",
          "D",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問37）。",
          "pdfExplanation": "正解：B、D、E\n\njava.util.ArrayListクラスの特徴に関する問題です。\nJavaでは、何らかの集合のことを「コレクション」と呼びます。配列は、コレクションを扱うクラスの1つですが、次のようないくつかの制約があります。\n\n1. 同じ型、もしくは互換性のある型しか扱えない\n2. 扱える要素数を最初に決めなくてはいけない\n3. 要素アクセスには添字を使わなければいけない\n4. 要素アクセスの際には、要素数を超えないよう配慮しなければいけない\n\n特に2番目と4番目は、要素数を超えて扱いたいが扱えない、実行時に例外がスローされないように要素数を意識しなければいけないということを意味\n\nし、プログラミングを煩雑にする原因の1つです。\n\nJavaには、もっと簡単にコレクションを扱える機能が用意されています。それが「コレクションAPI」や「コレクション・フレームワーク」と呼ばれる複数のインタフェースやクラスで構成されるクラス群です。これらのインタフェースやクラスの多くは、java.utilパッケージに配置されており、実際の開発プロジェクトではなくてはならないものとなっています。\n\nコレクションAPIには、数多くのインタフェースやクラスが存在します。そのうちの1つであるjava.util.ArrayListクラスは「動的配列」とも呼ばれ、配列のように使えることが特徴です（選択肢B）。\n\nArrayListクラスの特徴は、次のとおりです。\n\n1. オブジェクトであればどのような型でも扱える\n2. 必要に応じて要素数を自動的に増やす\n3. 追加した順に並ぶ\n4. nullも値として追加できる\n5. 重複した値も追加できる\n6. スレッドセーフではない\n\n1番目と2番目の特徴は、配列の問題点をカバーするものです。そのため、実際の開発プロジェクトでは、配列よりもArrayListのようなコレクションAPIが好んで使われます。\n\nコレクションAPIの中には、nullを許容しないものや、重複した値を許容しないものもあります。ArrayListには、このような制約はありません（選択肢A、C）。\n\nまた、最後の「スレッドセーフであるかどうか」は、並行処理をしたときに意図しない結果になることを防ぐ機能が備わっているかどうかです。通常、プログラムの処理には、1つの流れ（処理の順番）だけがあります。この流れのことを「スレッド」と呼びます。並行処理は、スレッドを複数作って動作する処理形態です。並行処理のメリットは、ある処理を実行しながらほかの処理も実行できるため、先行する処理が終わるのを待つ必要がないことです。結果として、全体のパフォーマンスを上げることもできます。\n\nこのような並行処理で問題になるのが、複数のスレッドによるデータ（インスタンス）の共有です。片方のスレッドから、あるインスタンスの値を変更している最中に、もう片方のスレッドから値をさらに変更されてしまうという事態が発生する可能性があります。このような事態を防ぐためにインスタンスにロックを掛けることができますが、ロックを掛けて、ロックを外して…と\n\nいうことを何度も行うとパフォーマンスに悪影響を与えてしまいます。\n\nそこでコレクションAPIには、遅くても安全に並行処理ができるクラスと、安全な並行処理はできないけれど高速な単一処理専用のクラスがあります。前者を「スレッドセーフなクラス」、後者を「スレッドセーフではないクラス」と呼び、ArrayListはスレッドセーフではないクラスです（選択肢D）。\n\nArrayListには、値を（理論上）無限に追加できます。ArrayListは、配列のように値を番号で管理するため、追加した順に値が並びます。このように値が順番に並んだ構造を「リスト構造」と呼びます。ただし、ArrayListには追加だけでなく、任意の場所に値を挿入することもできます（解答39を参照）。よって、選択肢Eも正解です。\n\n【試験対策】\n\nArrayListの特徴は、nullと重複を許容し、スレッドセーフではないコレクションであることです。\n\n【参考】\n\nスレッドセーフなリストを扱いたい場合には、java.util.Vectorを使います。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.51 / 2章 解説PDF p.106",
        "tags": [
          "ArrayList",
          "collection",
          "array",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q38",
        "number": 38,
        "type": "single",
        "selectCount": 1,
        "title": "raw型ArrayList",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "5行目でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "6行目でコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "7行目でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "8行目でコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "9行目でコンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "「A10B」と表示される"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問38）。",
          "pdfExplanation": "正解：F\n\nジェネリクスを指定していないArrayListインスタンスの型推論について問う問題です。\n解答37で学んだように、コレクションAPIはオブジェクトであればどのような型の集合でも扱えます。たとえば、次のようにObject、String、Integerと3つの種類が混在するコレクションも扱えます。\n\n例 リストへの追加\n\n```java\nArrayList list = new ArrayList();\nlist.add(new Object());\nlist.add(\"test\");\nlist.add(new Integer(10));\n```\n\nArrayListの値を追加するaddメソッドの引数や、反対に値を取り出すgetメソッドの戻り値はObject型となっているため、Object型に変換できるもの（つまり、すべてのクラス）であれば、何でも扱うことができるためです。しかし、このようなさまざまな型が混在するコレクションは、次のように実行時にダウンキャストをするタイミングで例外が発生する可能性があります。\n\n例 Object型からString型へのダウンキャスト\n\n```java\nfor ( int i = 0; i < list.size(); i++ ) {\n    String str = (String) list.get(i);    ← ここでClassCastException\n}\n```\n\nそこで、型が混在しないようにするために、ジェネリクスを利用します。ジェネリクスは、クラスが扱える型をコンパイル時に決めることができる仕組みです。この仕組みを使うことで、コレクションで扱える型を制限することができます。たとえば、次のコードはStringしか扱えないArrayListを作っています。\n\n例 ジェネリクス\n\n```java\nArrayList<String> list = new ArrayList<String>();\n```\n\nなお、指定している型のことを「型パラメータ」と呼びます。上記のコードであれば、<>内に記述しているStringが型パラメータです。\n\nまた、ダイヤモンド演算子「<>」を使うことにより、ジェネリクスがより簡潔に記述できるようになりました。\n\n【ジェネリクスの記述】\n\n```text\nバージョン      記述\nJava SE 6まで   List<String> list = new ArrayList<String>();\nJava SE 7から   List<String> list = new ArrayList<>();\n```\n\nこの機能は、インスタンスへの参照を保持する変数がどのような型変数で宣言しているかをコンパイラが判断し、同じ型を使ってインスタンス生成時の型変数を決定するというものです。このような機能を「型推論」と呼びます。\n\n設問のコードのように、変数宣言時に型変数を指定しなかった場合、その変数はObject型を型変数に渡されたものとしてコンパイルされます。そのため、その変数に代入されるArrayListのインスタンスも、Object型を型変数に渡されたものと推論されることになります。以上のことから、5行目でコンパイルエラーは発生しません。よって、選択肢Aは誤りです。\n\n6行目はString型に、7行目はint型がボクシングされてInteger型に、8行目もchar型がボクシングされてCharacter型が引数に渡されています。これらは、すべてObject型として扱えるためコンパイルエラーは発生しません。よって、選択肢B、C、Dも誤りです。\n\n9行目では、拡張for文を使ってArrayListから1つずつ値を取り出し、Object型の一時変数objに代入しています。一時変数の型がすべてのクラスのスーパークラスであるObject型になっているため、代入時にコンパイルエラーは発生しません。また、実行時に例外も発生しません。よって、選択肢EとGは誤りです。\n\n以上のことから、選択肢Fが正解です。\n\n【試験対策】\n\nジェネリクスを使って、扱える型を制限することができます。\n\n【試験対策】\n\nArrayListのようなジェネリックなクラスに型パラメータを渡さなければ、Object型を扱うクラスとなります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.51 / 2章 解説PDF p.107",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList list = new ArrayList<>();\n        list.add(\"A\");\n        list.add(10);\n        list.add('B');\n        for (Object obj : list) {\n            System.out.print(obj);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "ArrayList",
          "raw-type",
          "collection",
          "array",
          "package/import",
          "main/args"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q39",
        "number": 39,
        "type": "single",
        "selectCount": 1,
        "title": "ArrayList.add(index, value)",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「ABCD」と表示される"
          },
          {
            "key": "B",
            "text": "「ACBD」と表示される"
          },
          {
            "key": "C",
            "text": "「ACDB」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問39）。",
          "pdfExplanation": "正解：E\n\nArrayListのaddメソッドに関する問題です。\nArrayListに要素を追加するには、addメソッドを使います。addメソッドは引数で渡された要素をリストの後ろに追加するメソッドです。そのため、addメソッドで追加された要素は、ArrayList内で順番に並びます。\n\nただし、addメソッドはオーバーロードされており、追加する場所を指定することもできます。設問の場合は7行目のコードです。\n\n例 addメソッドでリストへの追加の場所を指定\n\n```java\nlist.add(2, \"B\");\n```\n\n上記のコードは、文字列「B」を「2番目」に追加するという意味です。addメソッドで追加する場所の番号は0番から始まります。各要素間に次のように線を引いて番号を振るとわかりやすいでしょう。次の図は、「a」「b」「c」「d」「e」という5つのStringがArrayListで扱われていることを想定しています。\n\n【リストの要素】\n\n```text\n| a | b | c | d | e |\n0   1   2   3   4   5\n```\n\nこの図に基づくと、「b」と「c」の間が2番目ということになります。\n\n設問のコードでは、5行目でStringしか扱わないArrayListのインスタンスを作り、6行目で文字列「A」をArrayListに追加しています。そのため、7行目を実行する時点では、ArrayListのインスタンスは、次の図のような状態にあります。\n\n【設問のコード6行目で追加されたリストの状態】\n\n```text\n| A |\n0   1\n```\n\nしかし、7行目では存在しない2番目に文字列「B」を追加しようとしています。このコード自体は文法上誤りではないため、コンパイルエラーは発生しませんが、実行すると次のような例外がスローされます。\n\n例 Mainクラスの実行時にスローされる例外\n\n```text\nException in thread \"main\" java.lang.IndexOutOfBoundsException: Index: 2, Size: 1\n    at java.util.ArrayList.rangeCheckForAdd(ArrayList.java:643)\n    at java.util.ArrayList.add(ArrayList.java:455)\n    at arraylist3.addMethod.Main.main(Main.java:9)\n```\n\n以上のことから、選択肢Eが正解です。\n\n【試験対策】\n\nArrayListのaddメソッドは、要素を最後に追加します。ただし、インデックスを使って、追加する箇所を指定することもできます。インデックスは、0から始まることに注意しましょう。\n\n【試験対策】\n\n引数を任意の場所に追加するときには、リスト内の要素の間に線を引き、番号を振るとわかりやすくなります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.52 / 2章 解説PDF p.108",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"A\");\n        list.add(2, \"B\");\n        list.add(\"C\");\n        list.add(\"D\");\n        for (String str : list) {\n            System.out.print(str);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "ArrayList",
          "add",
          "runtime-exception",
          "collection",
          "array",
          "package/import"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q40",
        "number": 40,
        "type": "single",
        "selectCount": 1,
        "title": "ArrayList.set",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「BD」と表示される"
          },
          {
            "key": "B",
            "text": "「AD」と表示される"
          },
          {
            "key": "C",
            "text": "「BC」と表示される"
          },
          {
            "key": "D",
            "text": "「BCD」と表示される"
          },
          {
            "key": "E",
            "text": "「ABCD」と表示される"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問40）。",
          "pdfExplanation": "正解：A\n\nArrayListのsetメソッドに関する問題です。\n解答39で学習したaddメソッドは要素を追加するメソッドでしたが、本設問で使われているsetメソッドは追加ではなく、置き換えをするためのメソッドです。setメソッドは元の要素を上書きすることに注意してください。\n\nsetメソッドは、第1引数に置き換えるインデックス、第2引数に置き換える要素を受け取ります。設問のコードでは、addメソッドで文字列「A」を追加した後に、setメソッドを使っています。\n\n例 設問のコード7行目\n\n```java\nlist.set(0, \"B\");\n```\n\nインデックスは0から始まるため、前の行で追加した文字列「A」を「B」に置き換えます。その後、addメソッドで文字列「C」を追加しているので、この段階でリストの要素は「B」「C」という順番で並んでいることになります。\n\n9行目では、setメソッドを使って1番目の要素を文字列「D」に置き換えています。そのため、「B」「C」だった要素は「B」「D」に変わります。以上のことから、選択肢Aが正解です。\n\n【試験対策】\n\nsetメソッドは、指定位置にある値を置き換えます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.53 / 2章 解説PDF p.110",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"A\");\n        list.set(0, \"B\");\n        list.add(\"C\");\n        list.set(1, \"D\");\n        for (String str : list) {\n            System.out.print(str);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "ArrayList",
          "set",
          "collection",
          "array",
          "package/import",
          "main/args"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q41",
        "number": 41,
        "type": "single",
        "selectCount": 1,
        "title": "ArrayList.removeとequals",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「C」「A」と表示される"
          },
          {
            "key": "B",
            "text": "「B」「C」「A」と表示される"
          },
          {
            "key": "C",
            "text": "「B」「C」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問41）。",
          "pdfExplanation": "正解：B\n\nArrayListのremoveメソッドに関する問題です。\nこれまでの設問で、ArrayListの追加と置換について学びました。本設問では、削除を取り上げています。リストから要素を削除するには、removeメソッドを使います。たとえば、次のコードを実行すると、リストの要素は「A」「B」「C」から、「A」「C」になります。\n\n例 removeメソッド\n\n```java\nArrayList list = new ArrayList();\nlist.add(\"A\");\nlist.add(\"B\");\nlist.add(\"C\");\nlist.remove(1);\n```\n\nremoveメソッドでは、削除する要素を0から始まるインデックスで指定します。上記のコード例では、removeメソッドの引数に1を渡しているため、2番目の「B」が削除されます。\n\nremoveメソッドは、このように削除対象のインデックスを指定するもの以外にも、Object型を受け取るメソッドがオーバーロードされています。Object型を受け取るremoveメソッドは、引数で受け取ったインスタンスと同じ要素を削除します。このときの「同じ」とは、同値であることを指します。そのため、equalsメソッドがtrueを戻す要素を「同じ」ものとして削除します。\n\n設問では、Itemのコレクションを扱うArrayListを作っています。Itemクラスの定義を確認すると、equalsメソッドがオーバーライドされており、price属性の値が一致しなくても、name属性の値が一致すれば同じであるという判定になっていることがわかります。\n\nMainクラスの6〜9行目では、Itemのインスタンスを4つ生成してリストに追加しています。10行目では新しいItemのインスタンスを作って、このインスタンスの値を条件として削除しています。前述のとおり、Itemクラスのequalsメソッドは、price属性の値が一致しなくても、name属性の値が一致すれば同じであると判定するため、リストにはこの条件（name属性の値が「A」である）に合致するインスタンスが2つあることになります。\n\nremoveメソッドは、条件に合致する最初の要素を削除します。そのため、設問のコードのように条件に合致する要素が複数あったとしても、削除されるのは1つだけです。条件に合致するかどうかは、リストの先頭から順番に見ていくため、条件に合致する要素が複数あっても、インデックスの若いほうが削除されます。以上のことから、選択肢Bが正解となります。\n\n【試験対策】\n\nremoveメソッドは、リストから要素を削除します。削除対象の要素が複数ある場合は、equalsメソッドがtrueを戻す最初の対象を削除します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.54-55 / 2章 解説PDF p.111",
        "codeBlocks": [
          {
            "title": "Item.java",
            "code": "public class Item {\n    private String name;\n    private int price;\n    public Item(String name, int price) {\n        this.name = name;\n        this.price = price;\n    }\n    public boolean equals(Object obj) {\n        if (obj instanceof Item) {\n            Item tmp = (Item) obj;\n            if (tmp.name.equals(this.name)) {\n                return true;\n            }\n        }\n        return false;\n    }\n    public String getName() {\n        return name;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Item> list = new ArrayList<>();\n        list.add(new Item(\"A\", 100));\n        list.add(new Item(\"B\", 200));\n        list.add(new Item(\"C\", 300));\n        list.add(new Item(\"A\", 100));\n        list.remove(new Item(\"A\", 500));\n        for (Item item : list) {\n            System.out.println(item.getName());\n        }\n    }\n}"
          }
        ],
        "tags": [
          "ArrayList",
          "remove",
          "equals",
          "string/reference",
          "collection",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q42",
        "number": 42,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文中のremove 1",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「B」「C」と表示される"
          },
          {
            "key": "C",
            "text": "「A」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問42）。",
          "pdfExplanation": "正解：C\n\nArrayListのremoveメソッドに関する問題です。\nremoveメソッドは、リストから要素を削除するメソッドです。リストから要素を削除した場合、後ろの要素が繰り上がります。\n\n【removeメソッドが実行されたリストの要素】\n\n```text\n[A] [B] [C] [D] [E]\n     ↓ remove(\"B\")\n[A] [C] [D] [E]\n```\n\n設問のコードでは、「A」「B」「C」の3つの文字列をリストに追加し、その後、拡張for文で1つずつ取り出しています。リストの要素は追加された順番通りに並ぶため、最初に取り出されるのは「A」です。10行目のif文により、removeメソッドは「B」のときだけ実行されるため、コンソールに「A」が表示されます。このとき、拡張for文では、どの位置を取り出したかを覚えてい\n\nます。これをここでは「カーソル」と呼びます。\n\n【拡張for文で、最初に取り出された位置】\n\n```text\nここ\n↓\n[A] [B] [C] [ ] [ ]\n```\n\n次に、「B」が取り出されます。そのため、次のようにカーソルが1つ動きます。\n\n【拡張for文で、次に取り出された位置】\n\n```text\n    ここ\n    ↓\n[A] [B] [C] [ ] [ ]\n```\n\nこの後、removeメソッドによってこの要素は削除されます。そのため、隣の要素が1つ繰り上がります。\n\n【要素が繰り上がった後のカーソル位置】\n\n```text\n    ここ\n    ↓\n[A] [C] [ ] [ ] [ ]\n    ↑\n  繰り上がる\n```\n\nこのとき、カーソルの位置が変わっていないことに注意してください。拡張for文は、次の要素があれば取り出して一時変数に代入し、繰り返し処理を実行します。しかし、この図からわかるとおり、カーソルの次の要素はありません。そのため、ここで繰り返し処理が終了します。以上のことから、コンソールには「A」しか表示されません。よって、選択肢Cが正解です。\n\n【試験対策】\n\nremoveメソッドで値を削除した場合、後ろの要素が繰り上がります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.55 / 2章 解説PDF p.113",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"A\");\n        list.add(\"B\");\n        list.add(\"C\");\n        for (String str : list) {\n            if (\"B\".equals(str)) {\n                list.remove(str);\n            } else {\n                System.out.println(str);\n            }\n        }\n    }\n}"
          }
        ],
        "tags": [
          "ArrayList",
          "enhanced-for",
          "remove",
          "collection",
          "array",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q43",
        "number": 43,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文中のremove 2",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「D」「E」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「B」「C」「D」「E」と表示される"
          },
          {
            "key": "C",
            "text": "「A」「B」「E」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問43）。",
          "pdfExplanation": "正解：E\n\nArrayListへのアクセスに関する問題です。\n解答37で解説したように、ArrayListはスレッドセーフなクラスではありません。そのため、2つのスレッドで並行処理をしているとき、片方のスレッドがArrayListから値を読み出している最中に、もう片方のスレッドが同じArrayListのインスタンスから要素を削除してしまう可能性があります。そのため、読み出しの最中に要素を削除しようとすると、次のような例外がスローされます。\n\n例 例外ConcurrentModificationException\n\n```text\nException in thread \"main\" java.util.ConcurrentModificationException\n    at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:859)\n    at java.util.ArrayList$Itr.next(ArrayList.java:831)\n    at arraylist7.remove3.Main.main(Main.java:13)\n```\n\nこの例外は、マルチスレッド環境だけでなく、シングルスレッド環境下でも発生します。\n\n設問のコードでは、11行目から始まる拡張for文で要素を1つずつ取り出し、その途中でremoveメソッドを使って要素を削除しています。解答42で解説したように、removeメソッドで要素を削除すると、後ろの要素が繰り上がります。このように要素が前に移動した後に繰り返し処理で読み出すと、java.util.ConcurrentModificationExceptionがスローされます（選択肢E）。問題42も同じようにremoveメソッドで要素を削除していますが、削除後に読み出していないため、例外がスローされません。本設問では、削除後に読み出しているため、例外がスローされている点に注意してください。\n\n【試験対策】\n\nremoveメソッドの実行後に読み出しをすると、例外がスローされます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.56 / 2章 解説PDF p.114",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"A\");\n        list.add(\"B\");\n        list.add(\"C\");\n        list.add(\"D\");\n        list.add(\"E\");\n        for (String str : list) {\n            if (\"C\".equals(str)) {\n                list.remove(str);\n            }\n        }\n        for (String str : list) {\n            System.out.println(str);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "ArrayList",
          "enhanced-for",
          "remove",
          "runtime-exception",
          "collection",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch02-q44",
        "number": 44,
        "type": "multi",
        "selectCount": 2,
        "title": "固定長・変更不可リスト",
        "prompt": "次のうち、値を変更できないか、固定長のリストを作るものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "var list = List.of(1, 2, 3);"
          },
          {
            "key": "B",
            "code": "var list = new ArrayList<Integer>();"
          },
          {
            "key": "C",
            "code": "var list = Arrays.asList(new Integer[]{1, 2, 3});"
          },
          {
            "key": "D",
            "code": "var list = new ArrayList<Integer>(3);"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第2章 問44）。",
          "pdfExplanation": "正解：A、C\n\nArraysクラスのasListメソッドとListインタフェースのofメソッドに関する問題です。\nリストは要素を順番に並べて管理するデータ構造で、Javaではjava.util.Listインタフェースとその実装クラスを使って扱います。Listインタフェースの実装クラスの代表例はjava.util.ArrayListクラスです。このクラスは一般的に「動的配列」とも呼ばれ、要素数を変えられない配列とは異なり、要素数を動的に増やせることが特徴です（選択肢B、D）。\n\n反対に固定長のリストを作る方法には、次の2通りがあります。\n\n・ArraysクラスのasListメソッドを使い、配列からリストのインスタンスを生成する（選択肢C）\n・Listインタフェースのofメソッドを使いインスタンスを生成する（選択肢A）\n\n1番目のArraysクラスを使えば、配列からリストのインスタンスを生成することができます。次のコードは3つの要素を持つInteger配列型インスタンス\n\nを作り、asListメソッドを使いその配列からリストのインスタンスを生成し、addメソッドで要素を追加しています。\n\n例 asListメソッドを用いた固定長のリスト生成と要素の追加\n\n```java\nInteger[] array = {1, 2, 3};\nvar list = Arrays.asList(array);\nlist.add(9);\n```\n\nしかし、前述のとおり、ここで生成されるリストのインスタンスは要素を増やしたり減らしたりできない固定長のリストです。そのため、このコードを実行すると、java.lang.UnsupportedOperationExceptionという「サポートしていない処理が実行された」ことを表す例外がスローされます。なお、追加するだけでなく、次のようにremoveメソッドで要素を減らしても同じ例外がスローされます。\n\n例 asListメソッドを用いた固定長のリスト生成と要素の削除\n\n```java\nInteger[] array = {1, 2, 3};\nvar list = Arrays.asList(array);\nlist.remove(1);\n```\n\n2番目の方法である、Listインタフェースのofメソッドを使う場合も固定長のリストを生成します。staticメソッドとしてListインタフェースに実装されているため、インスタンスを生成しなくても使えます。\n\n例 ofメソッドを用いた固定長のリスト生成と要素の追加\n\n```java\nvar list = List.of(1,2,3);\nlist.add(9);\n```\n\nこのコードでは、ofメソッドを使って1、2、3という3つの要素を持つリストのインスタンスを生成しています。次の行で要素を追加しているため、ArraysクラスのasListメソッドと同様に、UnsupportedOperationExceptionがスローされます。\n\n以上のことから、選択肢AとCが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter2_original_order_transcription_v6 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "2章 問題PDF p.56 / 2章 解説PDF p.115",
        "tags": [
          "List.of",
          "Arrays.asList",
          "ArrayList",
          "collection",
          "array",
          "var"
        ],
        "status": "pdf_visual_focused_audit"
      }
    ],
    "ch03": [
      {
        "id": "ch03-q01",
        "number": 1,
        "type": "single",
        "selectCount": 1,
        "title": "加算代入演算子",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "8が表示される"
          },
          {
            "key": "B",
            "text": "10が表示される"
          },
          {
            "key": "C",
            "text": "16が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問1）。",
          "pdfExplanation": "正解：C\n\n代入演算子と演算子の動作についての問題です。代入演算子「=」は、値を変数に代入するための演算子ですが、加算代入「+=」や減算代入「-=」のようなバリエーションがあります。\n\n【代入演算子】\n\n```text\n演算子   使用例      意味\n=        a = 10;     変数aに10を代入する\n+=       a += 10;    「a = a + 10」と同じ。変数aの値に10を足してから、\n                     変数aに結果を代入する\n-=       a -= 10;    「a = a - 10」と同じ。変数aの値から10を引いてから、\n                     変数aに結果を代入する\n*=       a *= 10;    「a = a * 10」と同じ。変数aの値に10を掛けてから、\n                     変数aに結果を代入する\n/=       a /= 10;    「a = a / 10」と同じ。変数aの値を10で割ってから、\n                     変数aに結果を代入する\n\n```\n\n代入演算子は左右のオペランドの評価が終わっていなければ代入できません。たとえば、「a = b + 5」という式であれば、b + 5の演算が終わらなければ変数aに値が代入されることはありません。そのため、設問のコード4行目の「b = a += 5」という式は、「a += 5」が終わらなければ変数bに値が代入されることはありません。よって、この式を分解すると次のような順番で実行されます。\n\n```java\n① a = a + 5;    (a += 5)\n② b = a;\n\n```\n\n設問のコード3行目で、変数aは3で初期化されているため、上記①の式は「a = 3 + 5」と同じです。そのため、変数aの値は8となり、②の式でその値を代入した変数bの値も、aと同様に8となります。設問のコード5行目で変数aとbの値を合計して出力しているため、コンソールには16が表示されます。以上のことから、選択肢Cが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.118 / 3章 解説PDF p.144",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = a += 5;\n        System.out.println(a + b);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q02",
        "number": 2,
        "type": "multi",
        "selectCount": 3,
        "title": "型変換と数値リテラル",
        "prompt": "次の式のうち、コンパイルエラーになるものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "byte a = 0b10000000;"
          },
          {
            "key": "B",
            "code": "short b = 128 + 128;"
          },
          {
            "key": "C",
            "code": "int c = 2 * 3L;"
          },
          {
            "key": "D",
            "code": "float d = 10.0;"
          }
        ],
        "answer": [
          "A",
          "C",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問2）。",
          "pdfExplanation": "正解：A、C、D\n\n型変換に関する問題です。大きな範囲の値を小さな変数に代入するときには、次のように明示的なキャストが必要です。\n\n例　明示的なキャスト\n\n```java\nint a = 10;\nshort b = (short) a;\n\n```\n\n整数や浮動小数点数といった数値リテラルは、デフォルトで特定の型を持っています。整数の数値リテラルはint型、浮動小数点数の場合はdouble型が基本です。そのため次の式は、本来は明示的なキャストをしなければいけません。\n\n例　int型のリテラルをshort型へ代入\n\n```java\nshort b = 10;    // int型のリテラルをshort型の変数に代入しようとしている\n\n```\n\nしかし、byte型やshort型の変数に代入する整数リテラルの場合、その値が型の範囲内であればコンパイラはエラーを出しません。たとえば、byte型は-128〜127の範囲の値を扱うため、次の1行目の式はコンパイルエラーになりますが、2行目の式はコンパイルエラーにはなりません。\n\n例　int型のリテラルをbyte型へ代入\n\n```java\nbyte a = 128;    // byteの範囲に収まらないint型のリテラルのためコンパイルエラー\nbyte b = 127;    // byteの範囲に収まるint型のリテラルのためコンパイルできる\n\n```\n\n選択肢Aは、128を2進数で表記したものです。2進数表記された値は、次のように右のビットから1、2、4、8…と順に書いて、ビットが1の箇所を合計すると計算できます。\n\n【2進数表記から10進数表記への計算】\n\n```text\n0 1 0 0 1 0 0 1 0\n256 128 64 32 16 8 4 2 1\n\n128 + 16 + 2 = 146\n\n```\n\n前述のとおり、byte型は-128〜127までの範囲を扱うデータ型です。そのため、選択肢Aのように128を表す2進数リテラルは、byte型ではなくint型の値と見なされるため、「互換性がない」というコンパイルエラーが発生します。なお、\n\n次のように明示的にキャストすれば、コンパイルエラーは発生しません。\n\n例　byte型へキャストして代入\n\n```java\nbyte a = (byte) 0b10000000;\n\n```\n\n数値を演算するとき、演算子の両側のオペランドは同じ型でなければいけません。もし、オペランドの型が異なる場合には、小さいほうの型は大きいほうの型に自動的に変換されます。たとえば、次のようにint型の値とlong型の値を演算する際には、int型の値はlong型に変換され、long型同士の演算として扱われます。\n\n例　int型とlong型の演算\n\n```java\nint a = 10;\nlong b = 20;\nlong c = a + b;\n\n```\n\n選択肢Bは、int型のリテラル同士の演算です。そのため、演算結果はint型のデータになります。しかし、この演算結果の256はshort型の範囲内（-32768〜32767）であるため、コンパイルエラーは発生しません。\n\n選択肢Cは、乗算演算子の右オペランドのリテラルにlong型を表す接尾辞（L）が付いています。そのため、int型とlong型の演算となるこの式は、演算子の左オペランドをlong型に変換してから演算されます。前述のとおり、long型同士の演算の結果はlong型となるため、この式は次の式と同じ意味を持ちます。\n\n例　long型のリテラルをint型の変数に代入（コンパイルエラー）\n\n```java\nint c = 6L;\n\n```\n\n上記の式のようにlong型の値をint型の変数に代入することはできないため、この式はコンパイルエラーになります。\n\n整数リテラルのデフォルトの型はint型ですが、浮動小数点数リテラルの場合にはdoubleがデフォルトの型です。そのため、選択肢Dはdouble型の値をより小さい範囲しか扱えないfloat型の変数に代入しようとしていることになります。よって、この式はコンパイルエラーとなります。\n\n以上のことから、選択肢A、C、Dが正解です。\n\n試験対策\nbyteとshortは扱う範囲が狭いデータ型です。この2つのデータ型については、正確に範囲を覚えておきましょう。\n\n試験対策\nJavaではbyte型のような数値型とboolean型に互換性はありません。そのため、byte型に真偽値（true/false）を代入したり、boolean型に0や1という数値を代入することはできません。このような互換性がある、そのほかのプログラミング言語を学んだ方は注意しましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.118 / 3章 解説PDF p.145",
        "tags": [
          "literal",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q03",
        "number": 3,
        "type": "single",
        "selectCount": 1,
        "title": "前置・後置インクリメント",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "7が表示される"
          },
          {
            "key": "B",
            "text": "32が表示される"
          },
          {
            "key": "C",
            "text": "33が表示される"
          },
          {
            "key": "D",
            "text": "43が表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問3）。",
          "pdfExplanation": "正解：B\n\nインクリメントとデクリメントに関する問題です。インクリメント演算子「++」とデクリメント演算子「--」は、変数の値に1を加算したり、1を減算したりするための演算子です。この演算子は、次のように単独で記述した場合は、単に1を加算・減算するシンプルな動作をします。\n\n例　インクリメント演算子の利用\n\n```java\nint a = 10;\na++;    // a = 10 + 1; と同じ\n++a;    // a = 11 + 1; と同じ\n\n```\n\nしかし、これらの演算子がほかの演算子と組み合わさると動作が複雑になります。たとえば、次のように変数aを変数bに代入する場合、インクリメント演算子を前置するか後置するかでその動作が変わります。前置した場合は、演算結果が代入されます。しかし、後置した場合は、元の値のコピーが戻されてから、変数の値が加算されます。\n\n例　前置インクリメントと後置インクリメント\n\n```java\nint a = 10;\nint b = ++a;    // 前置：int b = 1 + 10; と同じ\nint c = a++;    // 後置：元の値である11が戻されてcに代入されてから、aが12になる\n\n```\n\nでは、演算子を後置したときに、代入だけでなく、ほかの演算をさらに追加した場合はどうなるかを考えてみましょう。次の式では、後置インクリメントの後に+演算子を追加しています。\n\n例　後置インクリメントの後ろに+演算子を追加\n\n```java\nint a = 10;\nint b = a++ + 10;    // int b = 10 + 10; a = 10 + 1;\n\n```\n\nこの場合も元の値のコピーを使って演算してから、変数aの値を1増やします。そのため、変数aの値は11に、変数bの値は20になります。この例では、わかりやすくするために2つの変数を使いました。もし、次のように1つの変数だけを使った場合は、次の図に示したように一時変数を使って考えます。インクリメント演算子が出てくれば、演算対象の値を保持した一時変数を用意し、その値を1増やします。その後、同じ変数が登場すれば、この一時変数の値を適用します。\n\n【インクリメント演算①】\n\n```text\na = a++ + a;  ⇒  a = 10 + 11\n    +1 ↓  ↑\n      11\n    一時変数\n\n```\n\nこのように、先にインクリメントしてから式を組み立てると簡単に解けるようになります。先にインクリメントやデクリメントを実行して式を組み立てるのは、これらの演算子の優先順位が、ほかの算術演算子よりも高いからです。インクリメント演算子・デクリメント演算子と算術演算子の優先順位は異なるため、式の左から順に実行してはいけない点に注意してください。\n\nまた、インクリメントされた結果は演算子の後に出てくる変数に適用されることを覚えておきましょう。これは次のように適用すべき変数が複数現れた場合も同じです。\n\n【インクリメント演算②】\n\n```text\na = a++ + a + a;  ⇒  a = 10 + 11 + 11\n    +1 ↓  ↑   ↑\n      11\n    一時変数\n\n```\n\n前置の場合もインクリメントされた一時変数の値が適用されるタイミングが異なるだけで、「インクリメントされた結果は演算子の後に出てくる変数に適用される」というルールは同じです。\n\n【インクリメント演算③】\n\n```text\na = ++a + a;  ⇒  a = 11 + 11\n    +1 ↓ ↑\n      11\n    一時変数\n\n```\n\nたとえば、次のように1つの式の中に複数のインクリメント演算やデクリメント演算がある場合は、演算子が出てきたタイミングで一時変数の値を変更して、適用していきます。\n\n【インクリメント演算④】\n\n```text\na = a++ + a + ++a + a;  ⇒  a = 10 + 11 + 12 + 12\n    +1 ↓  ↑    +1 ↓ ↑\n      11          12\n    一時変数     一時変数\n\n```\n\nこのように演算子が出てきたタイミングで一時変数の値を変更し、それ以降に登場する変数に適用するというルールを覚えておけば、設問のコードのように複雑に見える式でも簡単に解けるようになります。\n\n【インクリメント演算⑤】\n\n```text\na = a++ + a + a-- - a-- + ++a; ⇒ a = 10 + 11 + 11 - 10 + 10\n    +1 ↓  ↑   ↑   -1 ↓  ↑   -1 ↓  +1 ↓\n      11          10          9       10\n    一時変数    一時変数    一時変数  一時変数\n\n```\n\n以上のことから、選択肢Bが正解です。\n\n試験対策\nインクリメント演算子やデクリメント演算子の前置と後置の違いによる演算の動作順序は重要なポイントです。一時変数がどのタイミングで加算・減算されるかをしっかりと覚えておきましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.118-119 / 3章 解説PDF p.147",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = a++ + a + a-- - a-- + ++a;\n        System.out.println(b);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "booleanと大小比較",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "trueが表示される"
          },
          {
            "key": "B",
            "text": "falseが表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問4）。",
          "pdfExplanation": "正解：C\n\nJavaには、数値演算をするための算術演算子のほかに、関係演算子や論理演算子など多くの演算子が用意されています。設問は、関係演算子についての問題です。\n\n関係演算子は、左右オペランドの値を比較し、真偽値を戻す演算子です。たとえば、==演算子は左右のオペランドの値が等しければtrueを、等しくな\n\nければfalseを戻します。関係演算子には、次のような種類があります。\n\n【関係演算子】\n\n```text\n演算子       使用例             意味\n==           a == b             aとbが等しければtrue\n!=           a != b             aとbが等しくなければtrue\n>            a > b              bがaよりも小さければtrue\n>=           a >= b             bがa以下であればtrue\n<            a < b              bがaよりも大きければtrue\n<=           a <= b             bがa以上であればtrue\ninstanceof   a instanceof b     aがbと同じクラスかbのサブクラスのインス\n                                タンスであればtrue\n\n```\n\nこれらの演算子は、数値や文字、真偽値、参照などさまざまな対象を比較できます。しかし、このうち、「>」「>=」「<」「<=」の4つの演算子は、数値の大小を比較するもので、数値以外の比較はできません。以上のことから、選択肢Cが正解です。\n\n試験対策\n「>」「>=」「<」「<=」の4つの関係演算子に関する問題では、オペランドの値を含むかどうかを確認しましょう。「>」と「<」はオペランドの値を含まず、「>=」と「<=」はオペランドの値を含みます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.119 / 3章 解説PDF p.149",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        boolean a = true;\n        boolean b = true;\n        System.out.println(a <= b);\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "exception",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q05",
        "number": 5,
        "type": "single",
        "selectCount": 1,
        "title": "ショートサーキット演算子",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "20が表示される"
          },
          {
            "key": "B",
            "text": "21が表示される"
          },
          {
            "key": "C",
            "text": "22が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問5）。",
          "pdfExplanation": "正解：A\n\n論理演算子に関する問題です。複数の関係演算を組み合わせ、複雑な条件を指定するために使うのが論理演算子です。論理演算子を使うことで「10より大きく、かつ20より小さい」や「xが10と等しいか、またはyが20と等しい」などのような複雑な条件を記述できます。論理演算子には、次のような種類があります。\n\n【論理演算子】\n\n```text\n演算子   使用例    意味\n&        a & b     aとbの両方がtrueであればtrue\n&&       a && b    aとbの両方がtrueであればtrue\n|        a | b     aもしくはbのいずれかがtrueであればtrue\n||       a || b    aもしくはbのいずれかがtrueであればtrue\n!        !a        aがtrueであればfalse、falseであればtrue\n\n```\n\n論理演算子の左右オペランドの組み合わせによる結果は次のとおりです。&や&&は両方がtrueのときだけtrue、|や||は両方がfalseのときだけfalseとなります。\n\n【論理演算子】\n\n```text\n&および&&                 |および||\n左      右      結果       左      右      結果\ntrue    true    true       true    true    true\ntrue    false   false      true    false   true\nfalse   true    false      false   true    true\nfalse   false   false      false   false   false\n\n```\n\n&と&&、|と||の違いは、左オペランドの結果で右オペランドを評価するか、評価しないかという点です。&&や||は「ショートサーキット演算子」とも呼ばれ、左オペランドの結果によっては右オペランドを評価しません。\n\n&&演算子は、もし左オペランドの式がfalseを戻すのであれば、右オペランドを評価しません。前述のとおり、&や&&の2つの演算子は、両方がtrueのときだけtrueを戻すため、左オペランドの式がfalseを戻した段階で、この論理演算の結果はfalseであることが確定します。&&演算子は、このような場合に右オペランドの式を評価するような無駄を省きます。たとえば、次の式は左オペランドの式がfalseを戻すため、右オペランドのインクリメントは実行されず、変数aの値は「5」のままです。\n\n例　&&演算子\n\n```java\nint a = 5;\nboolean b = a < 3 && ++a < 10;\n\n```\n\n||演算子も同様に、もし左オペランドがtrueを戻すのであれば、この演算は常にtrueを戻すことが確定するため、右オペランドを評価しません。\n\nもし、必ず両オペランドとも評価したいのであれば、&演算子や|演算子を使います。たとえば、先ほどの式を次のように&&演算子から&演算子に変更します。\n\n例　&演算子\n\n```java\nint a = 5;\nboolean b = a < 3 & ++a < 10;\n\n```\n\n左オペランドの式「a < 3」はfalseを戻しますが、そのまま右オペランドも評価されるため、変数aの値はインクリメントされて「6」に変わります。左オペランドがfalseを、右オペランドがtrueを戻すため、論理演算の結果はfalseです。このように&&演算子から&演算子に変更しても式の結果は同じです。\n\nしかし、式の途中で変数aの値が「5」から「6」に変わっているため、その後の処理で違いが生じる可能性があります。\n\n設問のコード5行目の論理演算は、ショートサーキット演算子「&&」を使っています。そのため、左オペランドの式がfalseを戻す段階で、右オペランドは評価されません。よって、変数aとbのインクリメントは両方とも実行されません。以上のことから、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.119-120 / 3章 解説PDF p.151",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 10;\n        if (10 < a && 10 < ++b) {\n            a++;\n        }\n        System.out.println(a + b);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q06",
        "number": 6,
        "type": "single",
        "selectCount": 1,
        "title": "演算子の優先順位",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "5が表示される"
          },
          {
            "key": "B",
            "text": "35が表示される"
          },
          {
            "key": "C",
            "text": "90が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問6）。",
          "pdfExplanation": "正解：A\n\n演算子の優先順位についての問題です。Javaのプログラムでは、複数の演算子を組み合わせて複雑な式を表現できます。演算子には優先順位があり、同じ優先順位であれば式は左から順に実行されます。もし、異なる優先順位の演算子が含まれていた場合は、優先順位の高いものから演算されます。演算子の優先順位は、次のとおりです。\n\n【演算子の優先順位】\n\n```text\n優先順位   演算子\n高い       []   .   (パラメータのリスト)   x++   x--\n           ++x   --x   +x   ~   !\n           new   (型)x\n           *   /   %\n           +   -\n           <<   >>   >>>\n           <   >   <=   >=   instanceof\n           ==   !=\n           &\n           ^\n           |\n           &&\n           ||\n           ?:\n低い       =   +=   -=   *=   /=   %=   &=   ^=   |=   <<=   >>=   >>>=\n\n```\n\n設問の式は、次のようにカッコで括ると優先順位がわかりやすいでしょう。\n\n例　設問のコード4行目の式①\n\n```java\n(a % b * c) + (a / b)\n\n```\n\nこれに数値を代入してみると、次のような式になります。\n\n例　設問のコード4行目の式②\n\n```java\n(100 % 20 * 30) + (100 / 20)\n\n```\n\n優先順位が同じ演算子が式に複数含まれていた場合、左から順に実行していきます。そのため、最初に実行されるのは「100 % 20」の剰余算です。余りを求めるこの式は0を戻すため、次の式と同じ意味を持ちます。\n\n例　設問のコード4行目の式③\n\n```java\n(0 * 30) + (100 / 20)\n\n```\n\n+演算子の左側の式は、0と30を掛けているため、その結果は0のままです。一方、右側の式は100を20で割っているため結果は5になります。左右両方の式の評価が終わった段階で、優先順位が低かった加算演算子が実行されるため、0 + 5 = 5で結果は「5」となります。以上のことから、選択肢Aが正解です。\n\n試験対策\nJavaには数多くの演算子があり、それぞれ優先順位が異なります。試験対策としてすべてを覚える必要はありませんが、以下のことを覚えておきましょう。\n\n・カッコやインクリメント、デクリメントが最優先である\n・数学と同じで乗算や除算、剰余算が、加算や減算よりも優先される\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.120 / 3章 解説PDF p.152",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 100, b = 20, c = 30;\n        System.out.println(a % b * c + a / b);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q07",
        "number": 7,
        "type": "single",
        "selectCount": 1,
        "title": "算術演算の評価順",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "2が表示される"
          },
          {
            "key": "B",
            "text": "3が表示される"
          },
          {
            "key": "C",
            "text": "28が表示される"
          },
          {
            "key": "D",
            "text": "29が表示される"
          },
          {
            "key": "E",
            "text": "30が表示される"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問7）。",
          "pdfExplanation": "正解：E\n\n演算子の優先順位に関する問題です。数学の計算順と同じように考えて解きましょう。\n\n設問の計算式は、まずカッコ「()」で括られた掛け算から実行されます。実行後の式は次のとおりです。\n\n例　設問のコード3行目実行後の式①\n\n```java\nint result = 30 - 12 / 10 + 1;\n\n```\n\n数学と同様、加算や減算よりも除算（割り算）が優先されます。数値リテラルはデフォルトでint型として扱われるため、12 ÷ 10の結果は、小数点以下が切り捨てられて1になります。\n\n例　設問のコード3行目実行後の式②\n\n```java\nint result = 30 - 1 + 1;\n\n```\n\n加算と減算は同じ優先順位なので、そのまま計算すると変数resultには30が代入されます。以上のことから、選択肢Eが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.120 / 3章 解説PDF p.153",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int result = 30 - 12 / (2 * 5) + 1;\n        System.out.println(result);\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "string/reference",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q08",
        "number": 8,
        "type": "single",
        "selectCount": 1,
        "title": "参照の同一性",
        "prompt": "次のクラスを利用するプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "trueが表示される"
          },
          {
            "key": "B",
            "text": "falseが表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問8）。",
          "pdfExplanation": "正解：B\n\n同一性と同値性に関する問題です。Javaでは「同じ」という言葉が、2つの意味を持っています。1つ目は、同じインスタンスであること。もう1つは、同じ値であることです。前者を「同一」、後者を「同値」と呼びます（同値については解答9を参照してください）。\n\n同一であるとは、複数の変数が同じインスタンスを参照していることを指します。たとえば、次のコードはインスタンスを1つ作り、そのインスタンスへの参照を2つの変数で共有しています。このとき、「変数aと変数bは同一である」といいます。このような性質のことを、「同一性」と呼びます。\n\n例　2つの変数が同じ参照を共有\n\n```java\nObject a = new Object();\nObject b = a;    // 変数aの参照をコピーして変数bに代入\n\n```\n\n【同一性】\n\n```text\n100 101 102 103 104\n[○][ ][ ][ ][ ]\n  ↑\n  └── 100\n      a\n      b\n\n```\n\n同一性は、==演算子で判定します。次のコードは、前述の変数aとbを比較しています。どちらの変数も同じ参照を持っているため、結果は「true」と表示されます。\n\n例　==演算子で同一性を判定\n\n```java\nSystem.out.println(a == b);\n\n```\n\n設問では、mainメソッドでSampleのインスタンスを1つ作っています。その後、\n\nSample型変数をもう1つ用意し、1つ目のインスタンスへの参照を代入しています。そのため、変数s1とs2は同じ参照を持っています。つまり、同一です。しかし、5行目でさらにSampleのインスタンスを作り、そのインスタンスへの参照を変数s1に代入しています。この段階で変数s1とs2は、異なるインスタンスへの参照を持っており、同一ではなくなります。そのため、==演算子で比べた結果はfalseとなります。以上のことから、選択肢Bが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.121 / 3章 解説PDF p.154",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private int num;\n    public Sample(int num) {\n        this.num = num;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s1 = new Sample(10);\n        Sample s2 = s1;\n        s1 = new Sample(10);\n        System.out.println(s1 == s2);\n    }\n}"
          }
        ],
        "tags": [
          "string/reference",
          "main/args",
          "exception",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q09",
        "number": 9,
        "type": "single",
        "selectCount": 1,
        "title": "equalsのオーバーライド",
        "prompt": "次のクラスを利用するプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "trueが表示される"
          },
          {
            "key": "B",
            "text": "falseが表示される"
          },
          {
            "key": "C",
            "text": "Sampleクラスでコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問9）。",
          "pdfExplanation": "正解：A\n\n解答8では、Javaの「同じ」という言葉には同一と同値があることを学びました。本設問は、同値性についての問題です。同値性とは、インスタンスは異なるけれど、同じ値を持っている性質のことです。たとえば、次のようなクラスを例に同値性について考えます。\n\n例　Personクラス\n\n```java\npublic class Person {\n    private String name;\n    public Person(String name) {\n        this.name = name;\n    }\n}\n\n```\n\nこのクラスを使って、次のように、まったく同じ値を持った2つのインスタンスを作ります。\n\n例　Personクラスのインスタンスの作成\n\n```java\nPerson a = new Person(\"taro\");\nPerson b = new Person(\"taro\");\n\n```\n\nインスタンスを2つ作って、それぞれ異なる変数に代入しているため、それぞれの変数が持っている参照は異なります。しかし、参照先のインスタンスは共に同じ値を持っています。このような状態を「2つのインスタンスは同値である」といいます。\n\n同値性は、同一性のように==演算子で確認することはできません。==演算子は、変数内の値、つまり参照同士を比較する演算子だからです。参照の先にあるインスタンスが同じ値を持っているかどうかはequalsメソッドを使って確認します。\n\nequalsメソッドは、Objectクラスに定義されている、同値性を確かめるためのメソッドです。ただし、Objectクラスに定義されているequalsメソッドは、次のように同一性を確認する実装になっています。\n\n```java\npublic boolean equals(Object obj) {\n    return (this == obj);    // 受け取った参照が自分自身かを確認\n}\n\n```\n\n「同じ値を持っている」という定義は、すべてのフィールドが一致することを条件とするのか、それとも一部のフィールドでも一致すればよいと判断するのかが、クラスごとに異なります。そのため、どのような条件にするかは各クラスの設計者に委ねられています。クラスを設計するにあたっては、同値であることの条件を定め、equalsメソッドをオーバーライドすることで実装します。\n\n設問のSampleクラスは、numとnameという2つあるフィールドのうち、numの値だけ一致すれば同値であると判断するように、equalsメソッドをオーバーライドしています。\n\n例　設問のSampleクラスのequalsメソッド\n\n```java\npublic boolean equals(Object obj) {\n    if (obj == null) {\n        return false;\n    }\n    if (obj instanceof Sample) {\n        Sample s = (Sample) obj;\n        return s.num == this.num;    // numだけを比較している\n    }\n    return false;\n}\n\n```\n\n設問のMainクラスでは、Sampleクラスのインスタンスを2つ作っています。コンストラクタの引数を見ると、nameの値は異なるものの、numの値は同じです。そのため、この2つのインスタンスをequalsメソッドで比較すると「同値である」ことになり、その結果、コンソールには「true」と表示されます。以上のことから、選択肢Aが正解です。\n\n試験対策\n異なるインスタンス同士が同じ値を持っているか（同値であるか）を確認するには、equalsメソッドを使います。\n\n参考\nequalsメソッドはオーバーライドを前提としているメソッドです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.122 / 3章 解説PDF p.155",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private int num;\n    private String name;\n    public Sample(int num, String name) {\n        this.num = num;\n        this.name = name;\n    }\n    public boolean equals(Object obj) {\n        if (obj == null) {\n            return false;\n        }\n        if (obj instanceof Sample) {\n            Sample s = (Sample) obj;\n            return s.num == this.num;\n        }\n        return false;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(10, \"a\");\n        Sample b = new Sample(10, \"b\");\n        System.out.println(a.equals(b));\n    }\n}"
          }
        ],
        "tags": [
          "string/reference",
          "override/overload",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q10",
        "number": 10,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーロードされたequals",
        "prompt": "次のクラスを利用するプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Sampleクラスでコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "「true」と表示される"
          },
          {
            "key": "D",
            "text": "「false」と表示される"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問10）。",
          "pdfExplanation": "正解：D\n\nインスタンスの同値性に関する問題です。インスタンスの同値性を確認するには、equalsメソッドを使うことを解答9で学びました。equalsメソッドはObjectクラスに定義されているメソッドで、すべてのクラスが持っています。しかし、同値性の確認方法は各クラスによって異なるため（解答9を参照）、equalsメソッドはオーバーライドして使うことを前提としています。\n\nObjectクラスのequalsメソッドの定義は、次のとおりです。\n\n```java\npublic boolean equals(Object obj) {\n    return (this == obj);\n}\n\n```\n\nこのメソッドをオーバーライドする場合は、メソッドのシグニチャを変更してはいけません。しかし、設問のSampleクラスに定義されているequalsメソッドは、引数にObject型ではなく、Sample型を受け取ります。これはメソッドのオーバーロードです。\n\nそのため、mainメソッドでObject型の引数を渡してequalsメソッドを呼び出したときは、Objectクラスに定義されたequalsメソッドが実行されます。Objectクラスに定義されているequalsメソッドは、前述の定義からもわかるとおり、同一性の判定をします。変数aとbは異なる参照を持っており、同一ではありません。よって、コンソールには「false」と表示されます。以上のことから、選択肢Dが正解です。\n\nなお、ここでは同値性だけについて解説をしています。同一性については、解答8を参照してください。\n\n試験対策\nObjectクラスのequalsメソッドは、Object型を引数に受け取り、boolean型の戻り値を戻します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.123 / 3章 解説PDF p.157",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private int num;\n    public Sample(int num) {\n        this.num = num;\n    }\n    public boolean equals(Sample obj) {\n        if (obj == null) {\n            return false;\n        }\n        return this.num == obj.num;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Object a = new Sample(10);\n        Object b = new Sample(10);\n        System.out.println(a.equals(b));\n    }\n}"
          }
        ],
        "tags": [
          "string/reference",
          "override/overload",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q11",
        "number": 11,
        "type": "single",
        "selectCount": 1,
        "title": "Object.equalsとnull",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "trueが表示される"
          },
          {
            "key": "B",
            "text": "falseが表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問11）。",
          "pdfExplanation": "正解：B\n\n同値性とequalsメソッドのオーバーライドに関する問題です。\n\nequalsメソッドは、同値性を確認するためのメソッドです。このメソッドはObjectクラスに定義されているため、すべてのクラスが引き継いでいます。しかし、同値性の確認方法は各クラスによって異なるため、equalsメソッドはオーバーライドして使うことを前提としています。このメソッドをオーバーライドするときには、次のような条件を満たさなければいけません。\n\n・null以外の参照値xがあったとき、x.equals(x)はtrueを返すこと\n・null以外の参照値xとyがあったとき、y.equals(x)がtrueを返す場合は、x.equals(y)はtrueを返すこと\n・null以外の参照値xとy、zがあったとき、x.equals(y)がtrueを返し、y.equals(z)がtrueを返す場合、x.equals(z)はtrueを返すこと\n・null以外の参照値xとyがあったとき、x.equals(y)を複数回呼び出しても、比較で使われた情報が変更されていなければ、一貫してtrueを返すか、一貫してfalseを返すこと\n・null以外の参照値xについて、x.equals(null)はfalseを返すこと\n\nこれらの条件は、APIドキュメントに掲載されており、オーバーライドするときには条件を満たすよう実装しなければいけません。試験対象として覚えておくべきなのは、最後の条件です。\n\nこの条件に従えば、equalsメソッドは、nullが渡されたときには、常にfalseを戻さなければいけません。そのため、引数にnullを渡している設問のコードもfalseを表示しなければいけません。実際にObjectクラスに定義されたequalsメソッドを確認すると、次のような定義になっています。\n\n```java\npublic boolean equals(Object obj) {\n    return (this == obj);\n}\n\n```\n\nこのようにObjectクラスのequalsメソッドでは、==演算子を使って、自分自身への参照を表すthisと、引数で渡された参照を比較しています。そのため、引数にnullを渡せば、falseが戻されます。以上のことから、選択肢Bが正解です。\n\n試験対策\nequalsメソッドは、引数にnullを渡されるとfalseを戻します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.124 / 3章 解説PDF p.158",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Object a = new Object();\n        Object b = null;\n        System.out.println(a.equals(b));\n    }\n}"
          }
        ],
        "tags": [
          "string/reference",
          "main/args",
          "exception",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q12",
        "number": 12,
        "type": "single",
        "selectCount": 1,
        "title": "ビットANDによるフラグ判定",
        "prompt": "次のプログラムを実行したとき、コンソールに「false」と表示されるようにしたい。空欄に入るものとして正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "&"
          },
          {
            "key": "B",
            "text": "|"
          },
          {
            "key": "C",
            "text": "&&"
          },
          {
            "key": "D",
            "text": "||"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問12）。",
          "pdfExplanation": "正解：A\n\nビット演算子についての問題です。ビット演算とは、コンピュータの基本的な情報単位であるビット（0または1）を直接操作する演算のことです。ビット演算は、ハードウェアの制御やデータ圧縮、データの暗号化などの分野で利用されています。Javaによるプログラミングでも、ハードウェアの制御をしたり設定情報を取得したりするために利用されます。\n\nたとえば、ディップスイッチと呼ばれる部品があります。次のディップスイッチには8つのスイッチがありますが、どのスイッチがオンになっていて、どのスイッチがオフになっているかを0と1で表して、「01010010」のような2進数のデータで表現するのです。\n\n```text\nDIPスイッチの例\n1 2 3 4 5 6 7 8  →  01010010\n\n```\n\nこのようなビットのデータを扱うための演算が、ビット演算です。ビット演算を行うための演算子をビット演算子と呼びますが、この演算子には次のような種類があります。\n\n【ビット演算子】\n\n```text\n演算子   演算              説明\n&        AND               両方のビットが1の場合に1を返す\n|        OR                片方または両方のビットが1の場合に1を返す\n^        XOR               片方のビットのみが1の場合に1を返す\n~        NOT               ビットを反転させる\n<<       左シフト          ビットを左にシフトする\n>>       右シフト          ビットを右にシフトする\n>>>      ゼロ埋め右シフト  符号に関係なく、左側をゼロで埋めながら右にシフトする\n\n```\n\n数値を10進数ではなく2進数で表すには、接頭辞として「0b」を付けて0と1を列挙します。たとえば、10進数の5は「0b0101」、11は「0b1011」になります。この2つの数値を使ってビット演算をした例が次のコードです。\n\n例　ビット演算の例\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        int a = 0b1011; // 11\n        int b = 0b0101; // 5\n        System.out.println(a & b); // 1\n        System.out.println(a | b); // 15\n        System.out.println(a ^ b); // 14\n        System.out.println(~a);    // -12\n    }\n}\n\n```\n\nAND演算子はビット列を順番に評価していって、両方のビットが1であれば1を戻します。それ以外は0を戻します。そのため、3行目のAND演算をやっている箇所は、次の図のように2つのビット列を縦に並べて、1ビットずつ上下で比較していくとわかりやすいでしょう。\n\n```text\n1011\n0101\n----\n0001\n\n```\n\n左から順に、1ビット目は1と0なので0、2ビット目は0と1なので0、3ビット目は1と0なので0、最後の4ビット目は両方とも1なので1となり、0001（つまり1）という結果になります。\n\nまた、コードの4行目ではOR演算子を使っています。この演算子は、2つのビット列を順番に評価していって、どちらか片方でも1だったら1を戻します。そのため、0b1011と0b0101という2つの数値であれば、図のようにどちらかが1（もしくは両方が1）になるため、1111（10進数なら15）という結果を戻します。\n\n```text\n1011\n0101\n----\n1111\n\n```\n\n5行目のXOR演算子は、どちらか片方だけが1なら1を戻します。OR演算子がどちらかが1、もしくは両方が1であれば1を戻したのに対し、XOR演算子は片方だけが1のときに1を戻す点がOR演算子との違いです。0b1011と0b0101という2つの数値であれば、図のように左の1〜3ビット目までは1となり、最後の4ビット目だけが0になるため、1110（10進数なら14）という結果を戻します。\n\n```text\n1011\n0101\n----\n1110\n\n```\n\n最後の反転「~」は、ビットを反転させるものです。ビットを反転するとき注意すべきなのが、Javaの整数型のデータは符号付きである（負の数を扱える）ことです。前述の例のようにint型の値として1011を扱うと、int型が32ビットなので内部的には32桁の2進数である「00000000000000000000000000001011」という値で表されています。ビットの反転を行うと、すべての0は1に、すべての1は0に変わるため、「11111111111111111111111111110100」となります。ビット列の最上位ビット（一番左のビット）は、符号を表すビットです。このビットが0なら正の数、1なら負の数を表します。「11111111111111111111111111110100」は最上位ビットが1であるため、負の数であることがわかります。なお、このようにビットを単純反転したもののことを「1の補数」と呼びます。\n\n符号付きの整数の符号を反転させるには、ビットを反転させた後、さらに1を足した「2の補数」を求めます。たとえば「11111111111111111111111111110100」を反転して元の値である「00000000000000000000000000001011」を求めて、さらに1を足すと、「00000000000000000000000000001100」になります。この値は10進数でいうと「12」です。これは、元の数の符号を反転したものですから、元の数は「-12」であることがわかります。\n\n参考\n補数というコンピュータ内部での演算処理に使われる用語が出てきました。補数は、コンピュータが負の数を扱うために便利な仕組みですが、この仕組みがあるおかげで、コンピュータは加算処理だけで引き算ができるようになります。「8-5」という演算を「8+(-5)」として表現できるイメージです。4ビットの計算の場合、8を2進数で表すと1000、5を2進数で表すと0101になります。次に、5の2進数表現である0101の各ビットを反転させると、1010になります。これを「1の補数」と呼びます。この0101に1を加えると、1011になります。これが5の「2の補数」で、負の数である-5を表します。「8+(-5)」という式は、8の2進数表現である1000と、-5の2進数表現である1011を足し算するものです。その結果は10011になりますが、4ビットで扱う計算だったので、桁あふれした5ビット目を無視すると0011になります。0011は10進数で3となるため、「8-5=3」という計算結果が求められたことになります。コンピュータのCPUは、加算器という回路を使って足し算を行います。他にもかけ算には乗算器、割り算には除算器という回路が用意されていますが、引き算は補数を使うことで加算器で表現できるため、専用の減算器という回路は不要です。加算器だけで加算も減算もできるので、CPUの回路がシンプルになり、コストの削減ができたり、演算の種類に応じて回路を切り替える必要が減る分、パフォーマンスの向上が見込めるのです。\n\n左シフト演算子「<<」と右シフト演算子「>>」は、ビットを左右にずらす演算子です。たとえば、次のように左シフト演算子を使って0001というビットを2つ左にずらすと0100、つまり10進数で4になります。\n\n例　左シフト演算\n\n```java\nint a = 0b0001;\nSystem.out.println(Integer.toBinaryString(a << 2)); // 4\n\n```\n\n次は右シフト演算子を使って1000という値を2つ右にずらすと0010、つまり10進数で2になります。\n\n例　右シフト演算\n\n```java\nint a = 0b1000;\nSystem.out.println(Integer.toBinaryString(a >> 2)); // 2\n\n```\n\nこれらの演算子は、かけ算や割り算の演算を高速にするために使われます。たとえば、数値を2倍する場合、論理左シフト演算を1回行います。00111100（10進数の60）という数値に対して1ビット左にシフトすると、01111000（10進数の120）となり、数値が2倍されます。他にも、00111100（10進数の60）に対して1ビット右にシフトすると、00011110（10進数の30）となり、数値が半分になるのです。\n\n最後のゼロ埋めシフト演算「>>>」は、符号なし右シフト演算子とも呼ばれ、指定されたビット数だけ数値のビットを右にシフトします。右シフト演算と異なるのは、左端には常に0が挿入される点です。これにより、符号ビットが保持されず、常に正の結果が得られます。たとえば、次のように負の値-10を1ビットだけゼロ埋めシフトすると、2147483643という大きな正の数値に変換されます。\n\n例　ゼロ埋め右シフト演算\n\n```java\nint a = -10;\nSystem.out.println(a >>> 1);\n\n```\n\n-10の絶対値である10を2進数で表すと00000000000000000000000000001010です。-10はその2の補数で表すので、反転し（11111111111111111111111111110101）、さらに1を足して11111111111111111111111111110110になります。この数値を1ビット右にずらし、左にずらした分だけ0を入れると、011111\n\n11111111111111111111111011という値になります。これを10進数で表すと2147483643という数値になるのです。右シフト演算子（>>）は、左側のビットを符号ビットで埋めるため、負の数を右シフトすると常に負の数のままになります。しかし、ゼロ埋めシフト演算は、左側のビットを0で埋めます。そのため、ビット列を符号なし整数として扱いたい場合に利用します。\n\n設問のコードでは、resultがfalseとなるように、1011と0100の2つの値をビット演算した結果を0にする必要があります。Javaのビット演算子は前述のとおり7種類ありますが、単項演算子であるNOTとシフト演算を除くと、ANDかOR、XORのいずれかを使って0にしなければいけません。2つの値は1ビット目から4ビット目まですべて異なるため、片方だけでも1であれば1とするORや、片方だけが1であれば1とするXORでは0にはなりません。一方、両方ともが1でなければ1にならないANDであれば、0が戻ります。\n\n```text\nAND       OR        XOR\n1011      1011      1011\n0100      0100      0100\n----      ----      ----\n0000      1111      1111\n\n```\n\n以上のことから、空欄にはAND演算を行う「&」が入ります。したがって選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.124 / 3章 解説PDF p.160",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private final static int FLAG_A = 0b0001;\n    private final static int FLAG_B = 0b0010;\n    private final static int FLAG_C = 0b0100;\n    private final static int FLAG_D = 0b1000;\n\n    public static void main(String[] args) {\n        int status = 0b1011;\n        boolean result = (status ____ FLAG_C) != 0;\n        System.out.println(result);\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "string/reference",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q13",
        "number": 13,
        "type": "single",
        "selectCount": 1,
        "title": "if文の構文",
        "prompt": "次のプログラムを実行し、「ok」と表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "if (num <= 10) {"
          },
          {
            "key": "B",
            "text": "if num <= 10 {"
          },
          {
            "key": "C",
            "text": "if (num <= 10) then"
          },
          {
            "key": "D",
            "text": "if num <= 10 then {"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問13）。",
          "pdfExplanation": "正解：A\n\nif文の構文に関する問題です。プログラムは、コードの上から下に向かって実行されます。これを「順次処理」と呼びます。この流れの途中で、条件を設けて処理をするか、しないかを分ける制御のことを「分岐処理」と呼びます。プログラムの流れの制御にはもう1つ、同じ処理を繰り返す「反復処理」があります。プログラムの処理の流れは、この順次、分岐、反復の3つの構文を使って組み立てます。\n\n【順次・分岐・反復】\n\n```text\n順次: 処理 → 処理 → 処理\n分岐: 条件式 → 処理 → 処理\n反復: 条件式 → 処理を繰り返す → 処理\n\n```\n\nJavaでは、分岐処理をするための基本的な構文として、if文とswitch文の2つ\n\nが用意されています。設問で出題されているif文には、次の3つの種類があります。\n\n・if\n・if-else\n・if-else if-else\n\nif文の書式は次のとおりです。\n\n構文\n\n```java\nif ( 条件式 ) {\n    // 条件に一致したときに実行する処理\n}\n\n```\n\n以上のことから、選択肢Aが正解です。なお、if文の書式のうち、中カッコ「{}」は省略可能です。省略したときの注意点については、解答14を参照してください。\n\n選択肢Bは、条件式を指定するためのカッコ「()」がありません。また、選択肢CやDのようにthenというキーワードはJavaにはありません。よって、これらは誤りです。\n\n試験対策\nJavaのif文では「then」は使えません。同様に、if文の終わりに「end if」なども不要です。こうした構文で記述する、ほかのプログラミング言語を学んだ人は注意してください。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.125 / 3章 解説PDF p.164",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        ____\n        System.out.println(\"ok\");\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "if文と中カッコ省略",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「B」と表示される"
          },
          {
            "key": "C",
            "text": "「A」「B」と表示される"
          },
          {
            "key": "D",
            "text": "何も表示されない"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問14）。",
          "pdfExplanation": "正解：B\n\nif文の構文に関する問題です。\nif文の中カッコ「{}」内には、条件式に合致したときの処理を記述します。中カッコは省略可能で、省略した場合は次の1文だけがif文の条件に合致したときの処理として実行されます。しかし、中カッコの省略によりコードの可読性が損なわれるため、推奨されません。\n\n設問のコードは、if文の条件式（3行目）の後に、2行の処理（4行目と5行目）が記述されています。前述のとおり、中カッコを省略した場合は次の1文だけ実行されるため、4行目は「if文の条件に合致したときの処理」であると判断されます。一方、5行目は、条件式から2行目に記述されているため、if文とは無関係であると判断されます。\n\n試験では、中カッコなしのif文が出題された場合、迷わないためにもまず中カッコを記述しましょう。設問のコードで中カッコを使うように変更すると、次のようになります。\n\n例　中カッコを省略しなかった場合のコード\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"A\");\n        }\n        System.out.println(\"B\");\n    }\n}\n\n```\n\nこのように中カッコを使えば範囲が明確になり、間違えることもなくなるでしょう。このif文の条件は「false」と真偽リテラルが記述されているため、条件式に合致したときの処理は実行されません。よって、コンソールには「B」だけが表示されます。以上のことから、選択肢Bが正解です。\n\n試験対策\n中カッコが省略されているコードは、中カッコありのコードに書き直して考えましょう。\n\n参考\n中カッコを使わなかった場合、どこまでが条件に合致したときの処理なのかが判別しにくくなってしまいます。そのような混乱を避けるためにも、実際の開発では中カッコを使って範囲を明示することが推奨されます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.125 / 3章 解説PDF p.165",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        if (false)\n        System.out.println(\"A\");\n        System.out.println(\"B\");\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "if-elseの対応",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「C」と表示される"
          },
          {
            "key": "C",
            "text": "「B」「C」と表示される"
          },
          {
            "key": "D",
            "text": "「A」と表示される"
          },
          {
            "key": "E",
            "text": "「B」と表示される"
          },
          {
            "key": "F",
            "text": "「C」と表示される"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問15）。",
          "pdfExplanation": "正解：C\n\nif-else文の構文に関する問題です。\nif-else文は、条件に合致したときと、合致しなかったときの処理の両方を記述するための文です。if-else文の書式は、次のとおりです。\n\n構文\n\n```java\nif ( 条件式 ) {\n    // 条件に合致したときの処理\n} else {\n    // 条件に合致しなかったときの処理\n}\n\n```\n\nif文と同様、中カッコ「{}」は省略可能です。設問のコードに中カッコを付けると、次のようになります。\n\n例　中カッコを省略しなかった場合のコード\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        if (num < 10) {\n            System.out.println(\"A\");\n        } else {\n            System.out.println(\"B\");\n        }\n        if (num == 10) {\n            System.out.println(\"C\");\n        }\n    }\n}\n\n```\n\n設問のコードでは、numの値を比較し、その結果によって処理を分岐しています。numは10で初期化されているため、最初のif文の条件「numの値が10よりも小さい」を満たしません。よって、else文が実行され、コンソールには「B」が表示されます。その後、2つ目のif文が実行され、条件「numの値が10と等しい」を満たすため、コンソールには「C」が表示されます。以上のことから、選択肢Cが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.126 / 3章 解説PDF p.166",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        if (num < 10)\n        System.out.println(\"A\");\n        else\n        System.out.println(\"B\");\n        if (num == 10)\n        System.out.println(\"C\");\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q16",
        "number": 16,
        "type": "single",
        "selectCount": 1,
        "title": "else-ifチェーン",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「C」と表示される"
          },
          {
            "key": "B",
            "text": "「D」と表示される"
          },
          {
            "key": "C",
            "text": "「C」「D」と表示される"
          },
          {
            "key": "D",
            "text": "何も表示されない"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問16）。",
          "pdfExplanation": "正解：A\n\nif-else if-else文の構文に関する問題です。\nif-else if-else文は、複数の分岐条件を一度に記述できる文です。if-else if-else文の書式は次のとおりです。\n\n構文\n\n```java\nif ( 条件式A ) {\n    // 条件式Aに合致したときの処理\n} else if ( 条件式B ) {\n    // 条件式Bに合致したときの処理\n} else if ( 条件式C ) {\n    // 条件式Cに合致したときの処理\n} else {\n    // すべての条件に合致しなかったときの処理\n}\n\n```\n\nelse ifを使った条件式は、いくつでも記述できます。また、if文やif-else文と同様に、中カッコ「{}」は省略できます。省略した場合は次の1文だけが条件に合致したときの処理として実行されます。\n\n注意しなければいけないのは、else if文は「else」と「if」の間で改行することはできないことです。もし中カッコを使わずに、次のようにelseとifの間で改行した場合、elseブロック内に新しいif文が記述されているものと解釈されます。\n\n例　ifとelseの間で改行した場合\n\n```java\nif ( 条件式A )\n    // 条件式Aに合致したときの処理\nelse\nif ( 条件式B )\n    // 条件式Bに合致したときの処理\nelse\n    // 条件式Bに合致しなかったときの処理\n\n```\n\nこのコードに中カッコを付けると、次のようになります。\n\n例　上記のコードに中カッコを付けた場合\n\n```java\nif ( 条件式A ) {\n    // 条件式Aに合致したときの処理\n} else {\n    if ( 条件式B )\n        // 条件式Bに合致したときの処理\n    else\n        // 条件式Bに合致しなかったときの処理\n}\n\n```\n\n設問のコードも中カッコが省略されています。このように中カッコが省略された設問が出題された場合には、まず中カッコを記述しましょう。中カッコを付けた設問のコードは、次のとおりです。\n\n例　中カッコを省略しなかった場合のコード\n\n```java\nif (num == 100) {\n    System.out.println(\"A\");\n} else if (10 < num) {\n    System.out.println(\"B\");\n} else {\n    if (num == 10) {\n        System.out.println(\"C\");\n    } else {\n        if (num == 10) {\n            System.out.println(\"D\");\n        }\n    }\n}\n\n```\n\nelseの後に改行が入っていた場合、中カッコを入れる点に注意してください。このコードで設問を解くと、numの値は10であるため、「numが100と等しい」とした1つ目のif文はfalse、次の「numは10よりも大きい」としたelse ifもfalseとなるため、else文に制御が移ります。else文の中では、さらにif文が始まっており、1つ目の条件「numが10と等しい」に合致するためコンソールには「C」が表示されます。ここで条件に合致したため、その後に出てくるelse文は実行されません。よって、コンソールに「D」が表示されることはありません。以上のことから、選択肢Aが正解です。\n\n試験対策\nelse-if文は、elseとifの間で改行することはできません。改行すると、else節はif-else文として扱われ、2つ目のif文はelse文の中にある分岐として解釈されます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.126-127 / 3章 解説PDF p.166",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        if (num == 100)\n        System.out.println(\"A\");\n        else if (10 < num)\n        System.out.println(\"B\");\n        else\n        if (num == 10)\n        System.out.println(\"C\");\n        else\n        if (num == 10)\n        System.out.println(\"D\");\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q17",
        "number": 17,
        "type": "multi",
        "selectCount": 6,
        "title": "switch文の条件式の型",
        "prompt": "switch文の条件式が戻せる型として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "char"
          },
          {
            "key": "B",
            "text": "byte"
          },
          {
            "key": "C",
            "text": "short"
          },
          {
            "key": "D",
            "text": "int"
          },
          {
            "key": "E",
            "text": "long"
          },
          {
            "key": "F",
            "text": "String"
          },
          {
            "key": "G",
            "text": "enum"
          },
          {
            "key": "H",
            "text": "boolean"
          }
        ],
        "answer": [
          "A",
          "B",
          "C",
          "D",
          "F",
          "G"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問17）。",
          "pdfExplanation": "正解：A、B、C、D、F、G\n\nswitch文に関する問題です。条件によって分岐をするif文に対し、switch文の特徴は、値によって処理を分岐する点です。switch文の書式は、次のとおりです。\n\n構文\n\n```java\nswitch (条件式) {\n    case 値:\n        処理\n        break;\n    case 値:\n        処理\n        break;\n    default:\n        処理\n        break;\n}\n\n```\n\nswitch文は、条件式が戻す値と一致するcase式を実行します。条件式が戻せる値の型には制限があり、条件式は次の型の値を戻す式でなくてはいけません。\n\n```text\nchar\nbyte\nshort\nint\nCharacter\nByte\nShort\nInteger\nString\nEnum\n\n```\n\nたくさんの種類がありますが、次のように覚えましょう。\n\n・int以下の整数型とそのラッパークラス\n・文字と文字列\n・列挙型\n\nしたがって、選択肢A、B、C、D、F、Gが正解です。間違えやすいのはlong型が含まれていない点です。ほかにもdoubleやfloatといった浮動小数点数を扱う型や、booleanも含まれません。したがって、選択肢EとHは誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.127 / 3章 解説PDF p.168",
        "tags": [
          "operator/control",
          "string/reference",
          "boxing/instanceof"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q18",
        "number": 18,
        "type": "multi",
        "selectCount": 2,
        "title": "caseラベルの制約",
        "prompt": "次のプログラムのコンパイルエラーが発生するのは何行目か。正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "6行目"
          },
          {
            "key": "B",
            "text": "8行目"
          },
          {
            "key": "C",
            "text": "10行目"
          },
          {
            "key": "D",
            "text": "12行目"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問18）。",
          "pdfExplanation": "正解：A、B\n\nswitch文のcase値として使用できる値に関する問題です。switch文は、条件式が戻す値によって処理を分岐します。分岐するために使う値のことを「case値」と呼びます。case値として使用できる値は、次の条件を満たす必要があります。\n\n・条件式が戻す値と同じ型か互換性がある型であること\n・定数であるか、コンパイル時に値を決めることができること\n・nullでないこと\n\n試験対策として、特に注意すべきは2番目の「定数であること」です。これはfinal宣言された定数か、もしくはリテラルを表します。変数はcase値として使えません。変数は、プログラムの実行中に値を変更できるため、2つのcase値が同じになってしまうなど、分岐が成り立たない可能性があるからです。\n\n設問のコードは、6行目にある最初のcase値に文字列を指定しています。しかし、条件式に記述されている変数の型はint型です。このように互換性のない型を使って分岐はできません。よって、6行目はコンパイルエラーが発生します。\n\n8行目にある2番目のcase値には、変数を指定しています。前述のとおりcase値には、定数やリテラルなど、後から変更できない値しか記述できません。よって、8行目もコンパイルエラーが発生します。\n\n10行目にある3番目のcase値には、リテラル同士の式が記述されています。この式は、コンパイル時に結果を決定することができるため、「10」というリテラルを直接記述したものと同じ意味を持ちます。よって、10行目ではコンパイルエラーは発生しません。\n\n12行目にある4番目のcase値には、定数を指定しています。この定数はfinalで修飾されており、後から値を変更できません。よって、12行目でコンパイルエラーは発生しません。以上のことから、選択肢AとBが正解です。\n\n試験対策\n変数はcase値として使用できません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.127-128 / 3章 解説PDF p.170",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        final int NUM = 0;\n        int num = 10;\n        switch (num) {\n        case \"10\": System.out.println(\"A\");\n                break;\n        case num: System.out.println(\"B\");\n                break;\n        case 2 * 5: System.out.println(\"C\");\n                break;\n        case NUM: System.out.println(\"D\");\n                break;\n        }\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "string/reference",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q19",
        "number": 19,
        "type": "single",
        "selectCount": 1,
        "title": "switch文のフォールスルー",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「B」と表示される"
          },
          {
            "key": "C",
            "text": "「A」「B」「C」と表示される"
          },
          {
            "key": "D",
            "text": "何も表示されない"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問19）。",
          "pdfExplanation": "正解：C\n\nswitch文のbreakに関する問題です。switch文では、case値に合致する処理が実行されます。処理が終われば、breakを使ってswitch文を抜けるようにします。breakを記述しなかった場合は、後ろに現れるすべてのcase式の処理が、breakが現れるまで実行されます。これを「フォールスルー」といいます。\n\nたとえば、次のコードではnumの値は10であるため、1番目のcase式に合致します。そのため、コンソールには「A」が表示されます。しかし、breakが記述されていないため、その後ろにあるすべてのcase式の処理が実行され、コンソールには「B」「C」「D」「E」と順に表示されることになります。このとき、defaultも処理対象になることに注意しましょう。\n\n例　breakが記述されていないswitch文\n\n```java\nint num = 10;\nswitch (num) {\n    case 10: System.out.println(\"A\");\n    case 11: System.out.println(\"B\");\n    case 12: System.out.println(\"C\");\n    case 13: System.out.println(\"D\");\n    default: System.out.println(\"E\");\n}\n\n```\n\n設問のコードのように、case式に何の処理も記述しないこともできます。これは「何も処理しない」という処理を意味するため、コンパイルエラーにはなりません。よって、選択肢Eは誤りです。設問の変数numの値は1であるため、1つ目のcase式がマッチします。前述のとおり、「何も処理しない」という処理を実行した後にbreakが現れないため、続けて2番目、3番目、4番目と実行し、defaultのcase式まで次々に実行していきます。以上のことから、選択肢Cが正解です。\n\n試験対策\nswitch文のcase式では、breakが現れるまで次のcase式の処理を実行します。試験でswitch文が出題された場合には、まずbreakの有無を確認するようにしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.128 / 3章 解説PDF p.171",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 1;\n        switch (num) {\n        case 1:\n        case 2:\n        case 3: System.out.println(\"A\");\n        case 4: System.out.println(\"B\");\n        default:\n                System.out.println(\"C\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "interface/default",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q20",
        "number": 20,
        "type": "single",
        "selectCount": 1,
        "title": "default位置とbreak",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「C」と表示される"
          },
          {
            "key": "C",
            "text": "「CA」と表示される"
          },
          {
            "key": "D",
            "text": "「CAB」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問20）。",
          "pdfExplanation": "正解：C\n\nswitch文のdefaultに関する問題です。switch文のdefaultは、どのcaseにも当てはまらなかったときに実行する処理を記述するものです。多くの場合、最後のcaseを記述した後にdefaultを記述しますが、これは文法で決まっているものではなく慣例に過ぎません。defaultはどこに記述してもよく、設問のコードのようにcaseより前に記述することも可能です。\n\ncaseやdefault内にbreakが見つからない場合は、見つかるまで以降のcase内の文を実行し続けます（フォールスルー）。設問のコードでは、どのcaseにも条件式の値が当てはまらないため、defaultが実行されます。まずここで「C」が表示されます。次に、defaultにはbreakが記述されていないため、6行目のcase内の処理が実行されます。ここで「A」が表示され、breakが実行されてswitch文が終了します。よって、選択肢Cが正解です。\n\n条件に一致するcase式が見つかるということは「入り口が見つかる」ということに過ぎません。breakしない限りフォールスルーが発生することを覚えておきましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.129 / 3章 解説PDF p.171",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int data = 1;\n        switch (data) {\n        default: System.out.print(\"C\");\n        case 0: System.out.print(\"A\");\n                break;\n        case 10: System.out.print(\"B\");\n                break;\n        }\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "operator/control",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "switch式の矢印ラベル",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "BCDの順に表示される"
          },
          {
            "key": "B",
            "text": "BCの順に表示される"
          },
          {
            "key": "C",
            "text": "Bのみ表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーとなる"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問21）。",
          "pdfExplanation": "正解：C\n\nswitch式に関する問題です。Javaの条件分岐のための基本的な構文には、if文とswitch文の2つがありました。if文は、条件に幅があったり、複雑な組み合わせ条件であったりするときに利用し、switch文は、条件となる値の種類が少ないときに利用します。しかし、switch文はフォールスルーを避けるために、いくつもbreakを記述する必要があります。そのため冗長なコードになりやすく、可読性を下げる要因になっていました。\n\nそこで、Java SE 12からswitch式という新しい構文が追加されました。switch式を利用したコードは、次のように矢印「->」を使っていることが特徴です。caseごとのbreakは必要ありません。\n\n例　switch式\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 0; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        switch (i) {\n            case 1 -> System.out.println(\"one\");\n            case 2 -> System.out.println(\"two\");\n            case 3 -> System.out.println(\"three\");\n            default -> System.out.println(\"other\");\n        }\n    }\n}\n\n```\n\nこのようにswitch式では、caseごとにbreakを記述しなくてもフォールスルーは発生しません。このコードをswitch式ではなく、これまでのswitch文で記述し直したものが次のコード例です。switch式に比べてコードが冗長であることがわかります。\n\n例　switch式の代わりにswitch文で記述\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 0; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        switch (i) {\n            case 1:\n                System.out.println(\"one\");\n                break;\n            case 2:\n                System.out.println(\"two\");\n                break;\n            case 3:\n                System.out.println(\"three\");\n                break;\n            default:\n                System.out.println(\"other\");\n        }\n    }\n}\n\n```\n\nこれら2つのコードは同じ内容であり、コンソールに出力される結果も同じです。\n\n例　実行結果\n\n```text\n> java Sample\nother\none\ntwo\nthree\n\n```\n\n設問のコードでは、変数aの値に応じてコンソールに文字を出力しています。変数aは2で初期化されており、2のcaseが実行されます。前述のとおり、switch式はbreakを記述しなくてもフォールスルーは発生しないため、コンソールにはBのみが表示されることになります。以上のことから、選択肢Cが正解です。\n\n参考\nswitch式の正式リリースは、Java SE 14以降です。SE 12/13では開発者向けのプレビュー機能となるため、これらのバージョンでswitch式を利用する場合は、javacコマンドやjavaコマンドのオプションとして--enable-previewを付ける必要があります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.129-130 / 3章 解説PDF p.172",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int a = 2;\n        switch (a) {\n            case 1 -> System.out.println(\"A\");\n            case 2 -> System.out.println(\"B\");\n            case 3 -> System.out.println(\"C\");\n            default -> System.out.println(\"D\");\n        };\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "interface/default",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q22",
        "number": 22,
        "type": "single",
        "selectCount": 1,
        "title": "switch式と網羅性",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「Grade: B」と表示される"
          },
          {
            "key": "B",
            "text": "「Grade: BCD」と表示される"
          },
          {
            "key": "C",
            "text": "10と9のcaseが同時に記述されているためコンパイルエラーとなる"
          },
          {
            "key": "D",
            "text": "defaultがないためにコンパイルエラーとなる"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問22）。",
          "pdfExplanation": "正解：D\n\nswitch式についての問題です。従来のswitch文では、defaultは必須ではありませんでした。そのため、次のようにdefaultを省いてもコンパイルエラーにはなりません。\n\n例　defaultを省略したswitch文\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 0; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        switch (i) {\n            case 1: System.out.println(\"one\");\n                    break;\n            case 2: System.out.println(\"two\");\n                    break;\n            case 3: System.out.println(\"three\");\n                    break;\n        }\n    }\n}\n\n```\n\nこのコードを実行すると、コンソールには次のような結果が出力されます。0を処理するためのcaseがないため、コンソールには、何も表示されません。\n\n例　実行結果\n\n```text\n> java Sample\none\ntwo\nthree\n\n```\n\nこのように、従来のswitch文では、もし一致するcaseがなかったときには「何もできない」という状態が発生してしまいます。これが意図しない結果を生む可能性があるため、新しく導入されたswitch式ではすべてのパターンが網羅できるようにcaseを記述しなくてはいけなくなりました。次のコード例のように、defaultを記述しない場合はコンパイルエラーになります。\n\n例　defaultを省略したswitch式（コンパイルエラー）\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 0; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        switch (i) {\n            case 1 -> System.out.println(\"one\");\n            case 2 -> System.out.println(\"two\");\n            case 3 -> System.out.println(\"three\");\n        };\n    }\n}\n\n```\n\n厳密には、caseだけですべてのパターンを網羅できれば、defaultを記述する必要はありません。しかし、int型は-2,147,483,648〜2,147,483,647という膨大な値の範囲を持ちます。一方、上のswitch式のcaseでは1〜3にしか対応していないため、defaultを記述しないとすべての値の範囲を網羅することができず、コンパイルエラーになるのです。\n\n設問のコードのswitch式では、caseですべてのパターンが網羅されていないにもかかわらず、defaultが記述されていないためコンパイルエラーとなります。よって、選択肢Dが正解です。なお、選択肢Cのように、1つのcaseに複数の値をカンマ区切りで列挙することは可能です。\n\n試験対策\nswitch式では、すべてのパターンが網羅されるcaseを用意しなければいけません。そのため、よほど限定された範囲を扱うのでなければ、defaultは欠かせないでしょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.130 / 3章 解説PDF p.174",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int score = 85;\n        String grade = switch (score / 10) {\n            case 10, 9 -> \"A\";\n            case 8 -> \"B\";\n            case 7 -> \"C\";\n            case 6 -> \"D\";\n        };\n        System.out.println(\"Grade: \" + grade);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "interface/default",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q23",
        "number": 23,
        "type": "single",
        "selectCount": 1,
        "title": "switch式と文末セミコロン",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Cが表示される"
          },
          {
            "key": "B",
            "text": "値を戻すときにreturnを記述していないためコンパイルエラーとなる"
          },
          {
            "key": "C",
            "text": "9行目の終わりにセミコロンがないためコンパイルエラーとなる"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問23）。",
          "pdfExplanation": "正解：C\n\n新しく導入されたswitch式と従来のswitch文の構文上の違いは、->（矢印）を使っているか、それとも:（コロン）を使っているかという点であるように思えます。しかし、これは正しくはありません。switch文とswitch式の違いは、文と式の違いにあるのです。文（Statement）は、プログラムで行う手続きを記述するもので、セミコロン\n\nで終わる行や、中カッコで括られた部分が1つの文となります。たとえば、if文や変数宣言、代入などが文に該当します。文は、それ自体で一つの完結した処理であり、プログラムの実行の流れを構成するものです。文の中には式を含むことができますが、文そのものは値を返しません。\n\n一方、式（Expression）は、値を生成し、結果を変数に代入できるものを指します。具体的には、リテラルや変数の利用、メソッドの呼び出し、演算子とそのオペランドの組み合わせなどが挙げられます。式は、文を構成する要素の1つであり、それを評価する（実行する）と結果を得ることができるものです。\n\nswitch文は、その名のとおり「文」です。そのため、値を戻すことはできません。一方、switch式は値を戻すことができます。switch式で値を戻すには、次のコード例のように値を戻す式かリテラルを記述します。\n\n例　値を戻すswitch式\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 0; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        String result = switch (i) {\n            case 1 -> \"one\";\n            case 2 -> \"two\";\n            case 3 -> \"three\";\n            default -> \"default\".toUpperCase();\n        };\n        System.out.println(result);\n    }\n}\n\n```\n\nこのコード例では、caseの値に一致した場合、対応する文字列リテラルを戻し、その結果をString型変数resultに代入しています。caseが1〜3のときは文字列リテラルを戻しますが、defaultのときだけ大文字に変換するメソッド呼び出しになっているため、このコードを実行すると次のような結果がコンソールに表示されます。\n\n例　実行結果\n\n```text\n> java Sample\nDEFAULT\none\ntwo\nthree\n\n```\n\nまた、switch式は式であるため、文の中で利用されている場合には、その文が終わることを示すセミコロンが必要です。前述のコードを簡略化して、switch式の結果をString型の変数resultに代入するというコードに置き換えてみると、セミコロンの必要性がわかると思います。\n\n例　switch式の結果をresultに代入\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 0; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        String result = switch式の結果;    // セミコロンがないと文が終わらない\n        System.out.println(result);\n    }\n}\n\n```\n\n設問のコードは、switch式の結果をString型の変数に代入する文の中でswitch式が使われています。しかし、この文には終わりを示すセミコロンがありません。そのため、コンパイルエラーが発生します。よって、選択肢Cが正解となります。\n\nなお、switch式内では、returnを記述してもメソッドを抜けてしまうだけで式の結果を戻すことはできません。式の結果を戻すには、yieldを使います。詳しくは解答24を参照してください。\n\n試験対策\nswitch式では、値を戻すことができます。switch文では値を戻すことはできません。switch式の終わりにはセミコロンが必要です。どこまでが1文なのかを確認するようにしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.131 / 3章 解説PDF p.175",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int a = 3;\n        String result = switch (a) {\n            case 1 -> \"A\";\n            case 2 -> \"B\";\n            case 3 -> \"C\";\n            default -> \"D\";\n        }\n        System.out.println(result);\n    }\n}"
          }
        ],
        "tags": [
          "switch",
          "switch-expression",
          "semicolon",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "yield",
        "prompt": "次のプログラムの10行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "yield"
          },
          {
            "key": "B",
            "text": "break"
          },
          {
            "key": "C",
            "text": "return"
          },
          {
            "key": "D",
            "text": "throw"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問24）。",
          "pdfExplanation": "正解：A\n\nswitch式の矢印以降に記述できるのは、以下の3つです。\n\n・値を戻す式\n・例外をスローするthrow文\n・ブロック\n\n1つ目の値を戻す式は、解答23で解説しています。caseに一致したとき、単純に値を戻すだけなら、リテラルや戻したい値を保持する変数、もしくは値を戻す式を記述するだけです。\n\n次に、2つ目の例外をスローするthrow文をswitch式の中で使ってみましょう。次のコード例は、引数が1〜3でなければ例外をスローします。\n\n例　switch式の中で例外をスローする\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 1; i < 5; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        String result = switch (i) {\n            case 1 -> \"one\";\n            case 2 -> \"two\";\n            case 3 -> \"three\";\n            default -> throw new IllegalArgumentException(\"value:\" + i);\n        };\n        System.out.println(result);\n    }\n}\n\n```\n\nこのコードを実行すると、次のようにコンソールにスタックトレースが表示され、例外が発生したことがわかります。\n\n例　実行結果\n\n```text\n> java Sample\none\ntwo\nthree\nException in thread \"main\" java.lang.IllegalArgumentException: value:4\n    at Sample.print(Sample.java:14)\n    at Sample.main(Sample.java:4)\n\n```\n\nthrowは例外を呼び出し元に通知するためのものです。式の結果としての値を戻すためのものではありません。そのため、値を戻すためにthrowを利用しようとしている選択肢Dは誤りです。\n\nswitch式の矢印以降に記述できるものの3つ目は、ブロックです。ブロックは、複数の文で構成され、中カッコで括られたコードのかたまりを指します。なお、1つしか文がない場合には、中カッコを省略できます。これはif文などで中カッコを省略できるのと同じです。\n\nswitch式のブロックは、一致するcaseがあったときに複数の処理を実行したい場合に利用します。ブロック内で値を戻すときには、yieldを使います。returnでは呼び出し元のメソッドに処理が戻ってしまいますし、breakではswitch式そのものを抜けてしまうため、switch式内では利用できません。returnやbreakをswitch式の中に記述するとコンパイルエラーが発生します。よって、選択肢BとCは誤りです。\n\n次のコードは、caseに合致したときの処理をブロックで複数行記述した例です。\n\n例　switch式の中にブロックを記述\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 1; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        String result = switch (i) {\n            case 1 -> {\n                System.out.println(\"case 1\");\n                yield \"one\";\n            }\n            case 2 -> \"two\";\n            case 3 -> \"three\";\n            default -> throw new IllegalArgumentException(\"value:\" + i);\n        };\n        System.out.println(result);\n    }\n}\n\n```\n\nこのコードの1のcaseでは、入力された値を一度コンソールに表示してから、yieldを使って結果の文字列を戻しています。このコードを実行すると、コンソールに次のように表示されます。\n\n例　実行結果\n\n```text\n> java Sample\ncase 1\none\ntwo\nthree\n\n```\n\n以上のことから、選択肢Aが正解となります。\n\nなお、switch式では、矢印を使う代わりに従来のswitch文のように「:」（コロン）を使うことも可能です。次のコード例は、前述のコード例を「:」を使うように修正したものです。\n\n例　switch式で矢印「->」の代わりにコロン「:」を使った例\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 1; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        String result = switch (i) {\n            case 1: {\n                System.out.println(\"case 1\");\n                yield \"one\";\n            }\n            case 2:\n                yield \"two\";\n            case 3:\n                yield \"three\";\n            default:\n                throw new IllegalArgumentException(\"value:\" + i);\n        };\n        System.out.println(result);\n    }\n}\n\n```\n\n矢印との違いは、リテラルをそのまま記述しても値を戻すことができないため、値を戻せるよう明示的にyieldを使っている点です。このように、switch式でも「:」は利用できますが、筆者は矢印の利用を推奨します。「:」を使っている場合、yieldを記述し忘れてしまうと、思いがけないフォールスルーが発生する可能性があるためです。\n\nたとえば次のコード例では、2のcaseのときにyieldを記述し忘れてしまったために、コンソールにhelloが表示された後フォールスルーが発生し、3のcaseのyieldによってthreeという文字列が戻されてしまいます。\n\n例　「:」を使ったswitch式で、yieldを記述し忘れてしまった\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 1; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        String result = switch (i) {\n            case 1: {\n                System.out.println(\"case 1\");\n                yield \"one\";\n            }\n            case 2:\n                System.out.println(\"hello\");    // yieldがない\n            case 3:\n                yield \"three\";\n            default:\n                throw new IllegalArgumentException(\"value:\" + i);\n        };\n        System.out.println(result);\n    }\n}\n\n```\n\nそのため、このコードを実行すると、次のようにhelloに続いてthreeが2回表示されることになります。\n\n例　実行結果\n\n```text\n> java Sample\ncase 1\none\nhello\nthree\nthree\n\n```\n\nこのコードを次のように矢印に置き換えると、caseが2のときに値を戻さないためコンパイルエラーになります。このようにswitch式では「:」ではなく、矢印を使うことで、不本意なフォールスルーを防ぐことができます。\n\n例　「->」を使えばyieldの書き忘れによるフォールスルーを防止する\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        for (int i = 1; i < 4; i++) {\n            print(i);\n        }\n    }\n    private static void print(int i) {\n        String result = switch (i) {\n            case 1 -> {\n                System.out.println(\"case 1\");\n                yield \"one\";\n            }\n            case 2 -> System.out.println(\"hello\");    // コンパイルエラーになる\n            case 3 -> \"three\";\n            default -> throw new IllegalArgumentException(\"value:\" + i);\n        };\n        System.out.println(result);\n    }\n}\n\n```\n\n試験対策\nswitch式でブロック内から値を戻すにはyieldを使います。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.131-132 / 3章 解説PDF p.176",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int a = 2;\n        int b = 100;\n\n        int result = switch (a) {\n            case 1 -> b * 2;\n            case 2 -> {\n                b = b * 3;\n                ____ b;\n            }\n            default -> b;\n        };\n        System.out.println(result);\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "interface/default",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q25",
        "number": 25,
        "type": "single",
        "selectCount": 1,
        "title": "while文の条件",
        "prompt": "コンソールに0〜4までの数字を順に表示したい。5行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "b < 5"
          },
          {
            "key": "B",
            "text": "5 < b"
          },
          {
            "key": "C",
            "text": "5 < a"
          },
          {
            "key": "D",
            "text": "a < 5"
          },
          {
            "key": "E",
            "text": "true"
          },
          {
            "key": "F",
            "text": "false"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問25）。",
          "pdfExplanation": "正解：A\n\nwhile文に関する問題です。同じ処理を何度も繰り返して実行するときに使うのが繰り返し構文です。Javaは、次のような4つの繰り返し構文を備えています。\n\n・while文\n・do-while文\n・for文\n・拡張for文\n\n本設問は、while文についての問題です。while文は、条件式がtrueを戻す間、処理を繰り返すための構文です。条件式は、必ず真偽値を戻さなければいけません。また、while文の繰り返し条件として記述できる式は1つだけです。\n\n設問ではコンソールに0〜4の値を表示しなければいけません。表示に使っているのは変数bの値であるため、条件には「変数bの値が0〜4の間、繰り返す」ことを指定すればよいことになります。この条件に合致するのは、選択肢Aの「b < 5」です。よって、選択肢Aが正解です。\n\n選択肢Bの条件では、「変数bの値が5よりも大きい間、繰り返す」ことになります。しかし、変数bの値は0から始まるため、一度も繰り返すことなく処理が終了します。よって、誤りです。\n\n選択肢CとDは変数aを条件に使っています。変数aは11から始まり、繰り返し処理の中でデクリメントによって1ずつ値が減ります。選択肢Cの条件は「5 < a」であるため、変数aの値が11、10、9、8、7、6と1つずつ減っていく間、コンソールに0から始まる変数bの値が1つずつ増えながら表示されます。そのため、11から6までの計6回、変数bはインクリメントされることになり、コンソールには0〜5までの数字が表示されることになります。よって、選択肢Cは誤りです。\n\nまた、選択肢Dは、「変数aの値が5よりも小さい間、繰り返す」ことを条件に指定していますが、変数aの値は11から始まるため、一度もこの条件に合致することはありません。よって、選択肢Dも誤りです。\n\n選択肢Eのようにリテラル「true」を条件式に記述すると、無限ループに陥り、プログラムが終了せずにコンソールに値が表示され続けます。よって、誤りです。一方、選択肢Fは「false」と記述しているので、一度も繰り返し処理が実行されることはありません。よって、選択肢Fも誤りです。\n\n試験対策\nwhile文の条件式は、必ず真偽値を戻さなければいけないことを覚えておきましょう。\n\n試験対策\nこのような問題では、繰り返し処理に使う変数と繰り返す回数に着目して条件式を考えましょう。この設問では、問題文の「コンソールに0〜4の値を表示する」と、コード内で表示に使っているのは変数bの値であることに着目しています。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.132 / 3章 解説PDF p.184",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 11;\n        int b = 0;\n        while (____) {\n            if (5 < a) {\n                System.out.println(b);\n            }\n            a--;\n            b++;\n        }\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q26",
        "number": 26,
        "type": "single",
        "selectCount": 1,
        "title": "do-while文の構文",
        "prompt": "コンソールに0〜4までの数字を表示したい。空欄に入るコードの組み合わせとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "① do(a < 5)　② while;"
          },
          {
            "key": "B",
            "text": "① do(5 < a)　② while;"
          },
          {
            "key": "C",
            "text": "① do　② while (a < 5);"
          },
          {
            "key": "D",
            "text": "① do　② while (5 < a);"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問26）。",
          "pdfExplanation": "正解：C\n\ndo-while文に関する問題です。do-while文はwhile文と同様に、条件に合致している間、処理を繰り返す構文です。while文との違いは、条件判定のタイミングです。while文が繰り返し処理をする前に条件に合致するかどうかを判定するのに対し、do-while文は繰り返し処理を実行してから判定します。そのため、条件に合致するかどうかにかかわらず、1回は処理を実行したい場合には、do-while文を使います。\n\ndo-while文の構文は、次のとおりです。\n\n構文\n\n```java\ndo {\n    // 繰り返し処理\n} while (条件式);\n\n```\n\ndo-while文の構文のポイントは、次の3つです。\n\n・doの後ろにはカッコ「()」が付かない\n・whileの後ろに条件式を記述する\n・セミコロン「;」で終了する\n\n選択肢AとBは、doの後ろに条件式を記述している不正な構文なので誤りです。\n\n設問の変数aの値は0から始まっており、コンソールに表示が終わった段階でインクリメントされて、値が1つずつ増えていきます。そのため、選択肢Dの「変数aの値が5よりも大きい間、繰り返す」という条件は、一度も合致しません。よって、選択肢Dは誤りです。以上のことから、選択肢Cが正解です。\n\n試験対策\ndo-while文では、条件に合致するかどうかに関係なく、最低1回は繰り返し処理が実行されることを覚えておきましょう。\n\n試験対策\ndo-while文の条件式の後ろにはセミコロンが必要です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.133 / 3章 解説PDF p.185",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 0;\n        ① {\n            System.out.println(a++);\n        } ②\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q27",
        "number": 27,
        "type": "single",
        "selectCount": 1,
        "title": "whileとdo-whileのネスト",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "012が表示される"
          },
          {
            "key": "B",
            "text": "012が5回表示される"
          },
          {
            "key": "C",
            "text": "何も表示されない"
          },
          {
            "key": "D",
            "text": "無限ループになる"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問27）。",
          "pdfExplanation": "正解：E\n\nwhile文やdo-while文で中カッコを省略した場合の繰り返し処理に関する問題です。\n\nif文やif-else文と同じように、while文やdo-while文でも中カッコ「{}」を省略できます。中カッコを省略した場合、1つの文だけが繰り返し処理として扱われます。たとえば、次のコードではコンソールに「A」が5回、「B」が1回だけ表示されます。\n\n例　中カッコを省略した記述\n\n```java\nint cnt = 0;\nwhile (cnt++ < 5)\n    System.out.println(\"A\");    // 繰り返しの対象となる文\nSystem.out.println(\"B\");        // 繰り返しの対象にならない文\n\n```\n\nこのコードを中カッコ付きで記述し直すと次のようになります。\n\n例　中カッコを記述したコード\n\n```java\nint cnt = 0;\nwhile (cnt++ < 5) {\n    System.out.println(\"A\");\n}\nSystem.out.println(\"B\");\n\n```\n\nなお、繰り返しの対象になるのは、構文が開始された次の1文だけです。次の1行ではありませんので、注意してください。たとえば、先ほどのコードを次のように改行をなくしても、繰り返されるのは「A」を表示する命令だけです。\n\n例　2つの文を1行に記述したコード\n\n```java\nint cnt = 0;\nwhile (cnt++ < 5)\n    System.out.println(\"A\"); System.out.println(\"B\");\n\n```\n\ndo-while文で中カッコを省略した場合は、doの後ろには1つしか文を記述できません。中カッコを省略しているにもかかわらず、文を複数記述するとコンパイルエラーが発生します。次のコード例では、コンパイルエラーが発生します。\n\n例　中カッコを省略し、2つの文を記述したコード（コンパイルエラー）\n\n```java\nint cnt = 0;\ndo\n    System.out.println(\"A\");\n    System.out.println(\"B\");\nwhile (cnt++ < 5);\n\n```\n\n設問のコードは、while文の中にdo-while文を記述する二重ループを使っています。Javaの文は、セミコロンが現れるまでが1つの文であるため、ネストしたdo-while文の部分は、次のように1行に直せます。\n\n```java\nwhile (条件式)\n    do 文\n    while (条件式);    // 最後のセミコロンが現れるまでが1文\n\n```\n\nそのため、中カッコを使わないwhile文の中に、複数行にわたるdo-while文を記述することは問題ありません。一方、設問のdo-while文は、中カッコを使っていないにもかかわらず、複数の文を記述しています。そのため、このコードは前述のとおり、コンパイルエラーが発生します。以上のことから、選択肢Eが正解です。\n\n試験対策\nwhile文やdo-while文では、中カッコを省略した場合、次の1文だけが繰り返しの対象となります。\n\n試験対策\ndo-while文で中カッコを省略した場合には、doとwhileの間には1文のみを記述できます。2文以上記述した場合には、コンパイルエラーが発生します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.133 / 3章 解説PDF p.186",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 0;\n        while (a < 5)\n        do\n        a++;\n        System.out.print(a);\n        while (true);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q28",
        "number": 28,
        "type": "single",
        "selectCount": 1,
        "title": "for文の初期化文",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「2468」と表示される"
          },
          {
            "key": "B",
            "text": "「246810」と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問28）。",
          "pdfExplanation": "正解：C\n\nfor文の構文について問う問題です。\nfor文は、次のように3つの式で成り立っています。それぞれの文は、セミコロン「;」で区切られている点に注意してください。\n\n構文\n\n```java\nfor (初期化文; 条件文; 更新文) {\n    // 繰り返し処理\n}\n\n```\n\n初期化文では、繰り返し処理内で使用する一時変数の宣言と、その初期化を行います。条件文では、繰り返し処理を実行するか、それともfor文そのものを抜けるかの判定をし、真偽値を戻す式を記述します。式がtrueを戻すと繰り返し処理が実行され、falseを戻すとfor文を抜けます。最後の更新文は、繰り返し処理が終わってから一時変数の値を変更するために記述します。\n\n次のコード例では、コンソールに「hello」を3回表示します。\n\n例　for文\n\n```java\nfor (int i = 0; i < 3; i++) {\n    System.out.println(\"hello\");\n}\n\n```\n\n初期化文は、同時に複数の変数を宣言、初期化できます。複数の変数を宣言、初期化するにはカンマ「,」で区切って列挙します。次の例では、初期化文で変数iとjを宣言し、それぞれ0で初期化しています。\n\n例　複数の一時変数を使用したfor文\n\n```java\nfor (int i = 0, j = 0; i < 3; i++) {\n    // 繰り返し処理\n}\n\n```\n\n初期化文で複数の変数を宣言する場合、変数は同じ型でなければいけません。異なる型の複数の変数を宣言すると、コンパイルエラーが発生します。設問のコードは、初期化文としてint型とlong型の異なる型の変数を同時に宣言しています。そのため、コンパイルエラーが発生します。よって、選択肢Cが正解です。\n\n試験対策\nfor文の初期化文では、同じ型の変数を複数宣言できます。異なる型の変数を同時に宣言することはできません。コンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.134 / 3章 解説PDF p.187",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1, long j = 2; i < 5; i++) {\n            System.out.print(i * j);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q29",
        "number": 29,
        "type": "single",
        "selectCount": 1,
        "title": "for文内変数のスコープ",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「24」と表示される"
          },
          {
            "key": "B",
            "text": "「120」と表示される"
          },
          {
            "key": "C",
            "text": "「0」と表示される"
          },
          {
            "key": "D",
            "text": "何も表示されない"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問29）。",
          "pdfExplanation": "正解：E\n\n変数のスコープに関する問題です。Javaの変数は宣言したブロック内（中カッコの範囲）でのみ有効です。for文についても同じで、for文内で宣言した変数は、for文の外では使えません。\n\n設問のコードは、for文の初期化文でint型の変数bとtotalの2つを宣言しています。この2つの変数は、for文のブロック内で宣言されているため、前述のとおり、for文の外では使えません。しかし、設問のコードでは、7行目で変数totalの値を出力しようとしています。そのため、このコードは、「変数が見つからない」という意味のコンパイルエラーが発生します。\n\n以上のことから、選択肢Eが正解です。\n\n試験対策\nfor文の初期化文で宣言した変数は、for文のブロック外では使うことはできません。コンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.134 / 3章 解説PDF p.187",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 1;\n        for (int b = 2, total = 0; b <= 5; b++) {\n            total += a * b;\n        }\n        System.out.println(total);\n    }\n}"
          }
        ],
        "tags": [
          "field/static/scope",
          "operator/control",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q30",
        "number": 30,
        "type": "single",
        "selectCount": 1,
        "title": "for文の条件式",
        "prompt": "次のプログラムを実行し、コンソールに「0」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "i < 0"
          },
          {
            "key": "B",
            "text": "i == 0"
          },
          {
            "key": "C",
            "text": "0 < i"
          },
          {
            "key": "D",
            "text": "1 < 2"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問30）。",
          "pdfExplanation": "正解：B\n\nfor文の条件文が実行されるタイミングについての問題です。for文は初期化文、条件文、更新文の3つと繰り返し実行したい処理で構成されています。これらが使われるタイミングは、次の図のようになっています。繰り返し処理よりも条件文が先に実行される点に注意してください。\n\n【for文】\n\n```text\n開始\n  ↓\n初期化文\n  ↓\n条件文\n  ↓ true\n繰り返し処理\n  ↓\n更新文\n  └── 条件文へ戻る\n\n条件文がfalse → 終了\n\n```\n\n設問のコードでは初期化文で変数iを宣言し、0で初期化しています。そのため、選択肢Aの条件「i < 0」には合致しません。また、選択肢Cも成り立ちません。したがって、これらの選択肢では、繰り返し処理が実行されることは一度もありません。よって、選択肢AとCは誤りです。\n\n選択肢Bは条件が成り立ちます。そのため、1回目の繰り返し処理が実行され、コンソールには0が表示されます。その後、更新文が実行されて変数iの値は0から1に増え、もう一度条件文が判定されますが、変数iの値は0ではないため、この式はfalseを戻してfor文を抜けます。よって、コンソールには設問の条件のとおり0が1回だけ表示されます。以上のことから、選択肢Bが正解です。\n\n選択肢Dは、固定値であるリテラルの比較を条件文に指定しています。この式の結果は、常にtrueです。そのため、この式を条件文に記述すると無限ループが発生します。よって、選択肢Dも誤りです。\n\n試験対策\n条件文は、繰り返し処理を実行する前に判定されます。条件文の結果がtrueであれば繰り返し処理を実行、falseであればfor文を抜けます。このタイミングを覚えておきましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.135 / 3章 解説PDF p.188",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; ____; i++)\n        System.out.println(i);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q31",
        "number": 31,
        "type": "single",
        "selectCount": 1,
        "title": "for文の条件部",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「0」「1」「2」と表示される"
          },
          {
            "key": "B",
            "text": "「0」「2」「4」と表示される"
          },
          {
            "key": "C",
            "text": "「1」「2」「3」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問31）。",
          "pdfExplanation": "正解：D\n\nfor文に関する問題です。for文は、初期化文、条件文、更新文の3つと繰り返し処理で構成されています。3つの文のうち、複数記述できるのは初期化文と更新文の2つです。初期化文は、一度に同じ型の変数を複数宣言し、初期化できます。更新文は、初期化文で宣言された複数の変数の値を同時に更新できます。\n\nしかし、条件文は初期化文や更新文のようにカンマ「,」で区切って複数記述することはできません。複数の条件を記述したい場合には、論理演算子を使って複合条件の文にしなければいけません。設問のコードは、条件文として「変数iの値が3よりも小さい」という条件と、「変数jの値が5よりも小さい」という2つの条件を、論理演算子を使わずに記述しています。そのため、このコードはコンパイルエラーになります。よって、選択肢Dが正解です。\n\n次のコードは、設問のコードが正しく実行されるように、論理演算子を使って複数の条件で判定した例です。\n\n例　論理演算子を使って複数の条件を記述したコード\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        for (int i = 0, j = 0; i < 3 && j < 5; i++) {\n            System.out.println(i++);\n            j += i;\n        }\n    }\n}\n\n```\n\n試験対策\nfor文で複数の条件文を記述する場合は、論理演算子を使います。初期化文や更新文のように、カンマ「,」で区切って複数の条件を記述するとコンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.135 / 3章 解説PDF p.189",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0, j = 0; i < 3, j < 5; i++) {\n            System.out.println(i++);\n            j += i;\n        }\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q32",
        "number": 32,
        "type": "single",
        "selectCount": 1,
        "title": "for文の更新文",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「0,1,2,」と表示される"
          },
          {
            "key": "B",
            "text": "「,0,1,2」と表示される"
          },
          {
            "key": "C",
            "text": "「0,1,2」と表示される"
          },
          {
            "key": "D",
            "text": "「,0,1,2,」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問32）。",
          "pdfExplanation": "正解：A\n\nfor文の更新文に関する問題です。for文の更新文は、繰り返し処理が終わった後に実行される処理です。一般的にこの処理は、初期化文で宣言した一時変数の値を変更するのに使いますが、設問のコードのようにメソッドを呼び出すことも可能です。また、カンマ「,」で区切って複数の処理を列挙することもできます。そのため、設問のコードに文法的な間違いはありません。よって、選択肢Eは誤りです。\n\nfor文の動作順は、次のとおりです。\n\n1. 変数iが宣言され、0で初期化される2. 条件文（i < 3）が判定される3. コンソールに変数iの値が表示される4. 変数iがインクリメントされる5. periodメソッドが呼び出される6. 2に戻る\n\n繰り返し処理が終わってから、更新文が実行されます。そのため、数字が表示されてから、periodメソッドによってカンマが表示されます。よって、カンマが先に表示されている選択肢BとDは誤りです。\n\n選択肢AとCの違いは、最後にカンマがあるかないかという点です。更新文が実行された後、条件文によって処理を続行するかどうかを判定するという順番を考えると、カンマが表示された後に、条件を判定することになります。そのため、このコードでは、必ず最後にカンマが表示されます。よって、選択肢Aが正解です。\n\n試験対策\n更新文は、繰り返し処理が終わってから実行されます。初期化文 → 条件文 → 繰り返し処理 → 更新文（→ 条件文へ）という、実行の順番を正確に覚えておきましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.136 / 3章 解説PDF p.189",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++, period()) {\n            System.out.print(i);\n        }\n    }\n    private static void period() {\n        System.out.print(\",\");\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q33",
        "number": 33,
        "type": "single",
        "selectCount": 1,
        "title": "二次元配列の拡張for相当",
        "prompt": "次のプログラムを実行し、コンソールに「10」と表示したい。6行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "int j = 0; j < array[i].length; j++"
          },
          {
            "key": "B",
            "text": "int j = 0; j < array[j].length; j++"
          },
          {
            "key": "C",
            "text": "int j = i; j < array[i].length; j++"
          },
          {
            "key": "D",
            "text": "int j = i; j < array[j].length; j++"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問33）。",
          "pdfExplanation": "正解：C\n\n二重ループを使った問題です。\n\n二重ループの場合、外側のループがまわる間に、内側のループがまわります。たとえば、内側のループが3回まわるという条件を持っていた場合、外側のループ1回につき、内側のループは3回まわります。そのため、外側のループが3回という条件だった場合は、外側3回×内側3回の合計9回まわることになります。たとえば、次のコードであれば、「hello」は合計9回表示されます。\n\n例　二重ループ\n\n```java\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        System.out.println(\"hello\");\n    }\n}\n\n```\n\n設問のコードでは、「コンソールに10と表示したい」という条件を満たすために、2次元配列の要素のいくつかを合計する必要（7行目）があることがわかります。このような出題があった場合、落ち着いて1つずつ選択肢を当てはめながら考えたほうがよいでしょう。\n\n選択肢Aは、変数jを0で初期化しています。条件文では、1次元目の配列のi番目の要素を取り出して、その要素数を数えています。そのため、0番目の要素である{1, 2}で初期化された配列が取り出され、要素数である2を使って「変数jの値が2よりも小さければ」という条件になります。また、外側のループの更新文が実行され、変数iの値が1に変わると取り出す要素も変わり、{2, 3, 4}で初期化された配列が取り出され、条件も「変数jの値が3よりも小さければ」に変わります。そのため、この条件に合うような組み合わせを考えると次の表のようになります。\n\n【選択肢Aを当てはめた場合】\n\n```text\n変数iの値  変数jの値  要素の値  条件式  変数totalの値\n0          0          1         j < 2   1\n0          1          2         j < 2   3\n1          0          2         j < 3   5\n1          1          3         j < 3   8\n1          2          4         j < 3   12\n\n```\n\ntotalの値を見るとわかるとおり、結果は12となるため選択肢Aは誤りです。二重ループの問題が出題された場合、このような表を作りながら考えると間違いを減らすことができます。\n\n選択肢Bは、選択肢Aと条件文が異なります。条件文で取り出す添字に変数jを使っているため、内側のループが一度まわるたびに条件文が変わります。この選択肢も表を作りながら考えましょう。\n\n【選択肢Bを当てはめた場合】\n\n```text\n変数iの値  変数jの値  要素の値  条件式   変数totalの値\n0          0          1         j < 2    1\n0          1          2         j < 3    3\n0          2          なし      j < ???\n\n```\n\n表を作ってみるとわかりますが、変数jの値が増えたときに、それに対応する2次元目の配列の要素がありません。そのため、選択肢Bのコードを実行すると、java.lang.ArrayIndexOutOfBoundsExceptionという例外がスローされます。よって、誤りです。\n\n選択肢CとDが選択肢A、Bと異なる点は、変数jの初期化に変数iの値を使っていることです。初期化文には固定値であるリテラルを使うことが多いのですが、これらの選択肢のように変数を使って、動的に初期値を変更することも可能です。\n\n選択肢Dは選択肢Bと同じように条件文で取り出す添字に変数jを使っています。そのため、選択肢Bのように実行時に例外がスローされることになります。よって、誤りです。\n\n選択肢Cは、表を使って確認します。変数iの値で初期化される変数jの値に注意してください。\n\n【選択肢Cを当てはめた場合】\n\n```text\n変数iの値  変数jの値  要素の値  条件式  変数totalの値\n0          0          1         j < 2   1\n0          1          2         j < 2   3\n1          1          3         j < 3   6\n1          2          4         j < 3   10\n\n```\n\nこの表からわかるとおり、選択肢Cを実行するとコンソールには10が表示されます。よって、正解です。\n\n試験対策\n二重ループの問題が出題されたときは、選択肢ごとに表を作って確認していくとよいでしょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.136-137 / 3章 解説PDF p.190",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] array = new int[][] { {1, 2}, {2, 3, 4} };\n        int total = 0;\n        for (int i = 0; i < array.length; i++) {\n            for (____) {\n                total += array[i][j];\n            }\n        }\n        System.out.println(total);\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "operator/control",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q34",
        "number": 34,
        "type": "single",
        "selectCount": 1,
        "title": "二次元配列とlength",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "97 98 / 99 100 null null null と表示される"
          },
          {
            "key": "B",
            "text": "97 98 / 99 100 101 102 103 と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に NullPointerException がスローされる"
          },
          {
            "key": "E",
            "text": "実行時に ArrayIndexOutOfBoundsException がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問34）。",
          "pdfExplanation": "正解：A\n\n配列のlengthに関する問題です。設問のコードでは、Stringの2次元配列のインスタンスを作っています。この2次元配列は、1次元目に2つの要素を扱うことができ、2次元目には2つの要素を持つ配列と5つの要素を持つ配列のインスタンスへの参照が格納されています。\n\nこの2次元配列のlengthは、1次元目の要素数を戻します。つまり、設問のコードでは1次元目の要素数は2つなので2が戻されます。そのため、2次元配列に値を代入している二重ループは、次のような固定値に置き換えることができます。\n\n例　設問のコード7〜12行目\n\n```java\nfor (int a = 0; a < 2; a++) {\n    for (int b = 0; b < 2; b++) {\n        array[a][b] = \"\" + i;\n        i++;\n    }\n}\n\n```\n\n変数aとbが使われている箇所を考えると、外側のループが1次元目、内側のループが2次元目の要素を指定するために使われていることがわかります。どちらのループも初期値が0から始まり、条件式の上限が2となっているので、ループが2回まわることになります。よって、次の表のように変数iには、合計4つの値が配列に代入されることになります。\n\n```text\na  b  i\n0  0  97\n0  1  98\n1  0  99\n1  1  100\n\n```\n\n2次元配列の1次元目には2つのString配列への参照が代入されています。1つ目は2つ、2つ目は5つの要素を持つ配列です。1つ目のString配列には、97と98という2つの文字列が代入されていますが、2つ目のString配列は最初の2つに99と100という文字列が代入されるものの、残りの3つの要素はデフォルト値のままです。String配列のデフォルト値はnullであるため、2つ目のString配列の要素は、99、100、null、null、nullとなります。\n\n以上のことから、選択肢Aが正解です。\n\n試験対策\n配列が出題された場合、NullPointerExceptionやArrayIndexOutOfBoundsExceptionの発生がないかを確認する必要があります。2次元配列の1次元目だけ初期化されており、2次元目が初期化されていない場合には、NullPointerExceptionが発生します。また、ArrayIndexOutOfBoundsExceptionは、宣言した要素数以上の要素番号にアクセスした場合に発生します。設問のコードではどちらも問題ありません。よって、選択肢DとEは誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.137 / 3章 解説PDF p.193",
        "codeBlocks": [
          {
            "title": "Test.java",
            "code": "public class Test {\n    public static void main(String[] args) {\n        String[][] array = new String[2][];\n        array[0] = new String[2];\n        array[1] = new String[5];\n        int i = 97;\n        for (int a = 0; a < array.length; a++) {\n            for (int b = 0; b < array.length; b++) {\n                array[a][b] = \"\" + i;\n                i++;\n            }\n        }\n        for (String[] tmp : array) {\n            for (String s : tmp) {\n                System.out.print(s + \" \" );\n            }\n            System.out.println();\n        }\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "main/args",
          "string/reference",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q35",
        "number": 35,
        "type": "multi",
        "selectCount": 3,
        "title": "無限ループになるfor文",
        "prompt": "次のプログラムの3行目の空欄に記述すると無限ループになるコードを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "int i = 0; true; i++"
          },
          {
            "key": "B",
            "text": "int i = 0; false; i++"
          },
          {
            "key": "C",
            "text": "int i = 0; ; i++"
          },
          {
            "key": "D",
            "text": "int i = 0; i < 5;"
          }
        ],
        "answer": [
          "A",
          "C",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問35）。",
          "pdfExplanation": "正解：A、C、D\n\n無限ループになる条件について問う問題です。終わることなく、繰り返し処理を延々と実行するようなループを「無限ループ」と呼びます。もっとも簡単な無限ループの作り方は、次のようにwhile文を使う例です。\n\n例　無限ループ（while文）\n\n```java\nwhile (true) {\n    // do something\n}\n\n```\n\nwhile文は、「条件に合致している間、繰り返す」繰り返し構文です。このwhile文の条件に固定値であるリテラル「true」を記述すると、常に条件に合致していることになるため、無限ループになります。\n\nfor文で無限ループを作る場合にも、while文と同様にリテラルの「true」を記述します。\n\n例　無限ループ（for文の条件にリテラルを記述）\n\n```java\nfor (int i = 0; true; i++) {\n    // do something\n}\n\n```\n\nほかにも、for文では条件式を省略することでも、無限ループになります。\n\n例　無限ループ（for文の条件式を省略）\n\n```java\nfor (int i = 0; ; i++) {\n    // do something\n}\n\n```\n\n以上のことから、選択肢AとCが正解であることがわかります。また、選択肢Bはfalseを条件に使っているので、一度も条件に合致することなくfor文は終了します。よって、選択肢Bは誤りです。\n\n選択肢Dは、更新文が省略されているため、変数iの値は0のままです。その結果、条件式は何回処理を繰り返しても「0 < 5」のままとなるため、無限ループになります。以上のことから、選択肢Dも正解です。\n\n試験対策\nfor文の条件式と更新式は省略できます。\n\n試験対策\nfor文の条件式を省略した場合は、break（解答40を参照）を使わない限り、無限ループとなります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.138 / 3章 解説PDF p.194",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (____) {\n            System.out.println(i);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q36",
        "number": 36,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文の構文",
        "prompt": "次のプログラムの4行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Object obj : array"
          },
          {
            "key": "B",
            "text": "String str : array"
          },
          {
            "key": "C",
            "text": "String[] array : array"
          },
          {
            "key": "D",
            "text": "array : Object obj"
          },
          {
            "key": "E",
            "text": "array : String str"
          },
          {
            "key": "F",
            "text": "array : String[] array"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問36）。",
          "pdfExplanation": "正解：A\n\n拡張for文に関する問題です。for文は初期化文、条件文、更新文の3つを記述する必要がありましたが、拡張for文はとてもシンプルな構文であるため、for文に比べると簡単に繰り返し処理を実現できます。拡張for文の構文は次のとおりです。\n\n構文\n\n```java\nfor (型 変数名 : 集合) {\n    // 繰り返し処理\n}\n\n```\n\nfor文と比べるとずいぶんとシンプルになったことがわかります。シンプルになった分、細かな制御はできませんが、配列やコレクションなどを全件処理するときなどには使いやすいでしょう。選択肢D〜Fは、集合がコロンの左、変数がコロンの右になっており、この構文に違反しています。よって、これらの選択肢は誤りです。また、選択肢Cはすでに宣言済みの変数名arrayを使って一時変数を宣言しています。そのため、この選択肢もコンパイルエラーになります。よって、選択肢Cも誤りです。\n\n拡張for文では、集合から1つずつ要素を取り出し、それを変数に代入してから繰り返し処理を実行します。拡張for文で扱える集合には、配列のほかjava.lang.Iterableを実装するクラスが使えます。java.lang.Iterableを実装するクラスにはさまざまな種類がありますが、試験対策としてはjava.util.ArrayListを覚えておけばよいでしょう。\n\n設問のコードでは、2次元配列型変数を宣言し、初期化子を使って配列インスタンスを作って初期化しています。拡張for文の集合には、配列を指定できます。2次元配列は、1次元目の配列の要素として、配列を扱っています。そのため、拡張for文では1次元目の配列が集合として扱われ、集合から取り出した要素も1次元の配列になります。\n\nたとえば次のコード例では、int型の要素を持つ2次元配列を作り、拡張for文の集合に指定しています。2次元配列の1次元目から取り出した要素を受け取るために、一時変数が配列型変数になっている点に注意してください。\n\n例　2次元配列を拡張for文で取り出す\n\n```java\nint[][] array = { { 1, 2 }, { 3, 4 } };\n\nfor (int[] tmp : array) {\n    // do something\n}\n\n```\n\n選択肢Bは、2次元配列の集合から取り出した2次元目の配列を受け取る必要があるにもかかわらず、String型で変数を宣言しています。配列とStringには互換性がないため、コンパイルエラーが発生します。よって、選択肢Bも誤りです。\n\n一方、選択肢Aは、Object型の一時変数で受け取ろうとしています。すべてのクラスは暗黙的にjava.lang.Object型を継承していると見なされ、クラスの一種である配列も同様です。このように、配列はObject型と互換性があるため、コンパイルエラーが起きることはありません。よって、選択肢Aが正解です。\n\n試験対策\n拡張for文の構文は、「一時変数の宣言 : コレクション／配列」です。順番を間違えないように気を付けてください。\n\n試験対策\n拡張for文の集合には、配列とjava.util.ArrayListが使えることを覚えておきましょう。\n\n試験対策\n拡張for文で2次元配列を扱う場合、1次元目の配列から要素（2次元目の配列への参照）を取り出して、一時変数に代入します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.138 / 3章 解説PDF p.195",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[][] array = { { \"A\", \"B\", \"C\" } };\n        for (____) {\n            System.out.print(obj);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "operator/control",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q37",
        "number": 37,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文と要素代入",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「DDD」と表示される"
          },
          {
            "key": "B",
            "text": "「ABC」と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問37）。",
          "pdfExplanation": "正解：B\n\n拡張for文に関する問題です。\n\n拡張for文では、集合から取り出した要素を格納するために、一時的な変数を宣言します。集合から要素への参照をコピーして、この一時変数に代入します。\n\nたとえば、設問のコードにある初回の繰り返し処理では、次の図のように配列から要素がコピーされて、変数strに代入されます。そのため、array[0]とstrが参照するStringオブジェクトは同じものです。\n\n【設問のコード、初回の繰り返し処理】\n\n```text\n配列インスタンス\narray[0] ──┐\n           ├── Stringインスタンス \"A\"\nstr    ────┘\narray[1] ───── Stringインスタンス \"B\"\narray[2] ───── Stringインスタンス \"C\"\n\n```\n\n2回目の繰り返しではarray[1]の要素が、3回目ではarray[2]の要素がコピーされて、変数strに代入されます。このように一時変数は、繰り返し処理が実行されるたびにその内容が次の要素に書き換えられます。\n\n設問のコードでは、一時変数strに新しい文字列「D」を代入しています。これによって変数strの参照先は変わりますが、集合の要素が変わるわけではありません。\n\n【設問のコード5行目のイメージ】\n\n```text\n配列インスタンス\narray[0] ───── Stringインスタンス \"A\"\narray[1] ───── Stringインスタンス \"B\"\narray[2] ───── Stringインスタンス \"C\"\n\nstr ────────── Stringインスタンス \"D\"\n\n```\n\nそのため、7行目から9行目までの繰り返しで表示されるのは、元のままの配列の要素です。以上のことから、選択肢Bが正解です。\n\n試験対策\n拡張for文では、繰り返し処理を実行するために一時的に変数を使っています。変数の参照を変更しても、集合には影響しません。変数の参照先のオブジェクトを変更した場合は影響します。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.139 / 3章 解説PDF p.196",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[] array = { \"A\", \"B\", \"C\" };\n        for (String str : array) {\n            str = \"D\";\n        }\n        for (String str : array) {\n            System.out.print(str);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "operator/control",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q38",
        "number": 38,
        "type": "single",
        "selectCount": 1,
        "title": "do-whileとwhileの違い",
        "prompt": "次のコードと同じ結果を出力するコードを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "int num = 10;\nwhile (++num < 10) {\n    num++;\n}\nSystem.out.println(num);"
          },
          {
            "key": "B",
            "code": "int num = 10;\nwhile (++num <= 10) {\n    num++;\n}\nSystem.out.println(num);"
          },
          {
            "key": "C",
            "code": "int num = 10;\nwhile (num++ < 10) {\n    num++;\n}\nSystem.out.println(num);"
          },
          {
            "key": "D",
            "code": "int num = 10;\nwhile (num++ <= 10) {\n    num++;\n}\nSystem.out.println(num);"
          },
          {
            "key": "E",
            "text": "選択肢A〜Dはすべて誤りである"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問38）。",
          "pdfExplanation": "正解：E\n\nwhile文とdo-while文の違いについての問題です。while文とdo-while文の違いは、条件判定をしてから繰り返し処理をするか、繰り返し処理をしてから条件判定をするかという、条件の評価タイミングの違いです。実際の試験では繰り返し構文についての問題は、すべての選択肢で1つずつ値を変更しながら見ている余裕はありません。そこで、条件式の数値を使って考えます。\n\n設問のコードは、int型変数numを宣言し、10で初期化しています。その後、doブロック内でインクリメントされて、値は11になります。続いて条件式の判定をする際に、まず前置インクリメントによって12に変更されてから「10よりも小さいか」という判定をしています。この判定の結果はfalseであるため、これ以上処理を繰り返すことなくdo-while文を抜けて、次の行でコンソールに12が表示されます。\n\n選択肢AとBは、条件式の中でまず前置インクリメントによってnumの値が11に増え、その後、選択肢Aでは「10よりも小さいか」を、選択肢Bでは「10以下か」を判定しています。これらの判定結果はfalseであるため、一度も繰り返し処理をすることなくwhile文は終了します。そのため、どちらの選択肢もコンソールには11が表示されます。よって誤りです。\n\n選択肢Cは、AやBとは異なり後置インクリメントを使っています。そのため、インクリメントされる前にwhile文の条件判定が行われます。変数numの値は10であるにもかかわらず、「10よりも小さいか」を判定しているため、後置インクリメントは実行されるものの、一度も繰り返し処理をすることなくwhile文は終了します。そのため、コンソールには11が表示されます。よって誤りです。\n\n選択肢Dは、後置インクリメントを使い、さらに条件には「10以下か」という指定をしています。変数numの値は10以下であるため、条件式に記述した後置インクリメントを実行してnumの値を11に増やした後、繰り返し処理でさらに値が12に増えます。しかし、その後、もう一度条件式が評価されるタイミングで、変数numの値が「10以下ではない」という判定がされた後、後置インクリメントが実行されて、while文が終了します。そのため、変数numの値は13に増えており、設問の結果とは異なります。\n\n以上のことから、選択肢Eが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.139-140 / 3章 解説PDF p.197",
        "codeBlocks": [
          {
            "title": "元コード",
            "code": "int num = 10;\ndo {\n    num++;\n} while (++num < 10);\nSystem.out.println(num);"
          }
        ],
        "tags": [
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q39",
        "number": 39,
        "type": "multi",
        "selectCount": 2,
        "title": "逆順表示と配列添字",
        "prompt": "次のプログラムを実行して「54321」と表示したい。空欄に入るコードとして正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "while (0 <= x) {\n    System.out.println(array[x]);\n    x--;\n}"
          },
          {
            "key": "B",
            "code": "do {\n    x--;\n    System.out.println(array[x]);\n} while (0 <= x);"
          },
          {
            "key": "C",
            "code": "do {\n    System.out.println(array[x]);\n    x--;\n} while (0 <= x);"
          },
          {
            "key": "D",
            "code": "while (0 < x) {\n    x--;\n    System.out.println(array[x]);\n}"
          },
          {
            "key": "E",
            "code": "while (0 < x) {\n    System.out.println(array[--x]);\n}"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問39）。",
          "pdfExplanation": "正解：D、E\n\nwhile文とdo-while文に関する問題です。設問のコードでは5つの要素を持つ配列を宣言初期化し、その後、配列の要素数を持った変数xを作っています。変数xには、配列の要素数である5が入っています。\n\n選択肢Aは、xの値が0以上であれば繰り返し処理をするという条件になっています。繰り返しを始める段階の変数xの値は5で、これは0以上であり条件に合致するため、繰り返し処理を実行します。この処理では、配列のx番目の要素を取り出してコンソールに表示していますが、変数xの値は5であるため、0から番号が始まる配列にとっては、6番目の要素を取り出すというコードになります。配列の要素は5つしかないため、このコードを実行すると配列の要素外アクセスを表すArrayIndexOutOfBoundsExceptionが発生します。以上のことから、選択肢Aは誤りです。\n\n選択肢Bは、do-while文なので、まず繰り返し処理が先に実行されてから条件判定をします。繰り返し処理では、変数xの値をデクリメントで1減らして4にしてから、その添字の要素を配列から取り出してコンソールに表示しています。その後、変数xの値が0よりも小さくなるまで処理を繰り返します。問題は、変数xの値が1からデクリメントされて0になり、0番目の要素をコンソールに表示し、条件判定をしてからです。この繰り返し条件は、変数xの値が0よりも小さくなるまで実行されるため、0のときはまだ繰り返しをしなければいけません。そのため、xの値がデクリメントされて0から-1になって、-1番目の要素をコンソールに表示しようとしたタイミングで、配列の要素外アクセスを表すArrayIndexOutOfBoundsExceptionが発生します。以上のことから、選択肢Bも誤りです。\n\n選択肢Cもdo-while文なので、まず繰り返し処理が先に実行されてから条件判定をします。この処理では、配列のx番目の要素を取り出してコンソールに表示していますが、変数xの値は5であるため、選択肢Aと同様に6番目の要素を取り出すというコードになります。よって、このコードを実行すると配列の要素外アクセスを表すArrayIndexOutOfBoundsExceptionが発生します。以上のことから、選択肢Cも誤りです。\n\n選択肢DとEは、実は同じコードです。選択肢Dはデクリメントしてからコンソールに表示していますが、選択肢Eは、前置デクリメントでデクリメントしてからコンソールに表示しています。どちらの条件もxの値が0よりも大きければ繰り返し処理をします。つまり、変数xが5〜1の間、繰り返し処理を実行することになります。変数xが5のとき、デクリメントされて5が4に減ってから、その添字の値がコンソールに表示されます。また、変数xが1のとき\n\nはデクリメントで1が0に減ってから、その添字の値がコンソールに表示されます。以上のことから、選択肢DとEが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.140-141 / 3章 解説PDF p.199",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[] array = {1, 2, 3, 4, 5};\n        int x = array.length;\n        ____\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "main/args",
          "string/reference",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q40",
        "number": 40,
        "type": "single",
        "selectCount": 1,
        "title": "breakと二重ループ",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「AA」と表示される"
          },
          {
            "key": "B",
            "text": "「ABAB」と表示される"
          },
          {
            "key": "C",
            "text": "「A」と表示される"
          },
          {
            "key": "D",
            "text": "「AB」と表示される"
          },
          {
            "key": "E",
            "text": "「BB」と表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問40）。",
          "pdfExplanation": "正解：A\n\nbreakを使った繰り返し処理の中断に関する問題です。while文やfor文を使って、繰り返し処理を実行している最中に、その繰り返しを中断したいことがあります。繰り返し処理を中断するには、breakを使います。たとえば、次のコードは無限ループを使った例です。このコードでは、breakを使って変数numの値が3であれば無限ループを抜けます。そのため、コンソールには1、2の2つの数字だけが表示されます。\n\n例　breakの使用例\n\n```java\nint num = 0;\nwhile (true) {\n    num++;\n    if (num == 3) {\n        break;\n    }\n    System.out.println(num);\n}\n\n```\n\n設問のコードでは、二重ループの中でbreakを使って繰り返し処理を中断しています。このとき、中断されるのは直近のループだけです。このような二重ループの問題では、表を使って組み合わせを考えます。そこで、変数aと変数bの組み合わせを使って結果を表で確認すると、次のようになります。\n\n【設問のコードの変数】\n\n```text\na  b  結果\nA  A  Aが表示される\nA  B  breakして外側のループへ\nB  A  Aが表示される\nB  B  breakして外側のループへ\n\n```\n\nこの表からわかるとおり、表示されるのはAが2回です。よって、選択肢Aが正解です。表示に使っている変数bの文字列が「B」だった場合、breakによって繰り返しが中断してしまい、制御が外側のループに移るため、選択肢B、D、Eのように「B」が表示されることはありません。\n\n試験対策\n二重ループの中で使われるbreakによって中断されるのは、直近にあるループだけです。複数のループを一度に中断するにはラベル（解答42を参照）を使います。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.141 / 3章 解説PDF p.200",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[] array = { \"A\", \"B\" };\n        for (String a : array) {\n            for (String b : array) {\n                if (\"B\".equals(b))\n                break;\n                System.out.print(b);\n            }\n        }\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q41",
        "number": 41,
        "type": "single",
        "selectCount": 1,
        "title": "continueと合計",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "1が表示される"
          },
          {
            "key": "B",
            "text": "9が表示される"
          },
          {
            "key": "C",
            "text": "15が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問41）。",
          "pdfExplanation": "正解：B\n\ncontinueを使った繰り返し処理の制御に関する問題です。本設問で出題されているcontinueは、breakと同様に繰り返し処理を制御するためのキーワードです。breakが繰り返しを中断し、ループから抜けてしまうのに対し、continueは残りの繰り返し処理をスキップします。\n\nたとえば次のコードでは、変数iの値が1のときだけ、それ以降の処理をスキップし、更新文に制御が移動します。そのため、コンソールには0と2の2つの数字だけが表示されます。\n\n例　continueの使用例\n\n```java\nfor (int i = 0; i < 3; i++) {\n    if (i == 1) {\n        continue;\n    }\n    System.out.println(i);\n}\n\n```\n\n設問では、変数iを2で割って余りが0のとき、つまり変数iが偶数の値であった場合にcontinueを実行して処理をスキップします。一方、変数iが奇数の場合は、8行目でその値を合計します。よって、変数totalには、1、3、5の3つの数値の合計が代入されます。以上のことから、選択肢Bが正解です。\n\n試験対策\ncontinueは、以降の処理をスキップしてループの条件判定に戻ります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.142 / 3章 解説PDF p.201",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[] array = { 1, 2, 3, 4, 5 };\n        int total = 0;\n        for (int i : array) {\n            if (i % 2 == 0)\n            continue;\n            total += i;\n        }\n        System.out.println(total);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q42",
        "number": 42,
        "type": "single",
        "selectCount": 1,
        "title": "ラベルを付けられる構文",
        "prompt": "次の中から、ラベルが記述できるものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "if文やswitch文"
          },
          {
            "key": "B",
            "text": "while文"
          },
          {
            "key": "C",
            "text": "ブロック"
          },
          {
            "key": "D",
            "text": "return文"
          },
          {
            "key": "E",
            "text": "tryブロック"
          },
          {
            "key": "F",
            "text": "選択肢A〜Eすべて"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問42）。",
          "pdfExplanation": "正解：F\n\nラベルの使用に関する問題です。ラベルを使うことで、breakやcontinueのときに制御を移す箇所を自由に指定できます。たとえば、二重ループの内側でbreakした場合には、元々の動作では内側のループだけを抜けます。しかし、次のようにラベルを使えば、外側のループも一度に抜けることが可能です。\n\n例　二重ループでbreakを使用したコード\n\n```java\nsample:    // 外側のループの外にラベルを入れる\nfor (int i = 0; i < 10; i++) {\n    for (int j = 0; j < 10; j++) {\n        if (3 < j) {\n            break sample;    // ラベルsampleのループを抜ける\n        }\n    }\n}\n\n```\n\nラベルは、ループに付けられることが多くありますが、このほかにもさまざまな箇所に付けることができます。\n\n・コードブロック\n・すべてのループ文と分岐（if、switch）\n・式\n・代入\n・return文\n・tryブロック\n・throw文\n\nコードブロックとは、コードの塊を表すために中カッコ「{}」で括った範囲のことです。コードブロックにラベルを付けた例は次のとおりです。\n\n例　コードブロックにラベルを付けたコード\n\n```java\na: {\n    int i = 10;\n}\n\n```\n\nループ文と分岐にもラベルを付けることができます。\n\n例　ループ文と分岐にラベルを付けたコード\n\n```java\nb: for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\nc: if (true) {\n    // do something\n}\n\n```\n\nほかにも、代入や式にもラベルを付けられます。\n\n例　代入と式にラベルを付けたコード\n\n```java\nint x = 0;\nd: x = 2;                    // 代入\ne: System.out.println(x);    // 式\n\n```\n\n次のコードは、return文にラベルを付けた例です。\n\n例　return文にラベルを付けたコード\n\n```java\nprivate static int sample() {\n    f: return 0;\n}\n\n```\n\n最後に、tryとthrow文にラベルを付けた例を示します。\n\n例　tryとthrow文にラベルを付けたコード\n\n```java\ng: try {\n    System.out.println(\"hello\");\n} finally {\n    h: throw new RuntimeException();\n}\n\n```\n\nこのようにラベルはさまざまな箇所に付けることができます。以上のことから、選択肢Fが正解です。\n\n注意\nラベルは便利な機能である反面コードの制御がさまざまな箇所に移るため、可読性を下げる要因になります。そのため、あまり多用すべきではありません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.142 / 3章 解説PDF p.201",
        "tags": [
          "exception",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch03-q43",
        "number": 43,
        "type": "single",
        "selectCount": 1,
        "title": "ラベル付きcontinueとbreak",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "6が表示される"
          },
          {
            "key": "B",
            "text": "12が表示される"
          },
          {
            "key": "C",
            "text": "20が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第3章 問43）。",
          "pdfExplanation": "正解：B\n\nbreakとcontinue、ラベル、そして二重ループを組み合わせた問題です。まず、外側のループに「a」、内側のループに「b」というラベルが付けられていることを確認しましょう。次に、continueがラベル「a」へ、breakがラベル「b」に移動することも確認します。また、continueする条件式では変数iの値を、breakするときには変数jの値を使っている点にも注意しましょう。\n\nこれらを確認できれば、表を書いて変数の状況に合わせた結果を確認します。6行目のif文によって、変数iの値が偶数の場合には、すぐにcontinueしていることや、7行目のif文によって、変数jの値が3よりも大きくなった場合には、breakしていることに注意してください。\n\n```text\ni  j  結果                      total\n0  0  continueでラベルaへ       0\n1  0  totalに0を加算する        0\n1  1  totalに1を加算する        1\n1  2  totalに2を加算する        3\n1  3  totalに3を加算する        6\n1  4  breakでラベルbへ          6\n2  0  continueでラベルaへ       6\n3  0  totalに0を加算する        6\n3  1  totalに1を加算する        7\n3  2  totalに2を加算する        9\n3  3  totalに3を加算する        12\n3  4  breakでラベルbへ          12\n4  0  continueでラベルaへ       12\n\n```\n\nこの表からわかるとおり、最終的なtotalの値は12です。以上のことから、選択肢Bが正解です。\n\n試験対策\nbreakとcontinue、ラベル、二重ループを組み合わせたコードの問題では、ラベルが付けられている箇所、continueやbreakがどのラベルに移動するかを確認しましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter3_original_order_transcription_v4 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "3章 問題PDF p.143 / 3章 解説PDF p.203",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int total = 0;\n        a: for (int i = 0; i < 5; i++) {\n            b: for (int j = 0; j < 5; j++) {\n                if (i % 2 == 0) continue a;\n                if (3 < j) break b;\n                total += j;\n            }\n        }\n        System.out.println(total);\n    }\n}"
          }
        ],
        "tags": [
          "operator/control",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      }
    ],
    "ch04": [
      {
        "id": "ch04-q01",
        "number": 1,
        "type": "single",
        "selectCount": 1,
        "title": "インスタンスごとのフィールド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "10が表示される"
          },
          {
            "key": "C",
            "text": "20が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問1）。",
          "pdfExplanation": "正解：B\n\nクラスとインスタンスに関する問題です。オブジェクト指向プログラミングでは、クラスを定義し、クラスからインスタンスを生成して、インスタンスが動作することでプログラムを動作させます。プログラムを記述したクラスそのものが動作するのではない点に注意しましょう。\n\nクラスとインスタンスの関係は、コピー元の原本とコピーの関係と同じです。クラスファイルは、ハードディスク上に保存されている単なるファイルに過ぎません。プログラムはハードディスク上では動作しないため、メモリ上に展開する必要があります。そのため、JVMは必要なクラスファイルをハードディスク上から探し出し、読み込んでメモリ上に展開（コピー）します。このコピーのことを「インスタンス」と呼びます。このようにコピーを取るため、インスタンスはクラスに定義した内容をそのまま持っているのです。\n\n【クラスとインスタンスの関係①】\n\n```text\nハードディスク上のクラスファイル\n        ↓ JVMが読み込み\n        ↓ インスタンス化（コピー）\nメモリ空間上のインスタンス\n\n```\n\nなお、厳密にはインスタンスはクラスの完全なコピーではありません。たとえば、staticな変数などはインスタンスにはコピーされません。ただし、ここでは理解しやすくするために単純化して「コピー」と解説しています。\n\nもし、複数のインスタンスを作れば、複数のコピーを作ることになります。この仕組みのおかげで、インスタンスごとに異なる値を保持することができます。\n\n【クラスとインスタンスの関係②】\n\n```text\nハードディスク上のクラスファイル\n        ↓ インスタンス化（コピー）\nメモリ空間上のインスタンス1\n        ↓ インスタンス化（コピー）\nメモリ空間上のインスタンス2\n\n```\n\n設問のコードでは、Mainクラスの3行目と4行目でItemクラスのインスタンスを作っています。そのため、メモリ上にはItemのコピーが2つできることになります。5行目では、2つ目のインスタンスのsetNumメソッドを呼び出しています。そのため、2つ目のインスタンスの値は20に書き換わります。一方、1つ目のインスタンスには何も変化はありません。1つ目のインスタンスの変数numは、インスタンス生成時に10で初期化されたままです。そのため、6行目で出力される値も10となります。\n\n【設問のコードのイメージ】\n\n```text\nメモリ空間\nインスタンス1: 10\nインスタンス2: 20\n\n```\n\n以上のことから、選択肢Bが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.206 / 4章 解説PDF p.231",
        "codeBlocks": [
          {
            "title": "Item.java",
            "code": "public class Item {\n    private int num = 10;\n    public void setNum(int num) { this.num = num; }\n    public int getNum() { return this.num; }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Item a = new Item();\n        Item b = new Item();\n        b.setNum(20);\n        System.out.println(a.getNum());\n    }\n}"
          }
        ],
        "tags": [
          "field/static/scope",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q02",
        "number": 2,
        "type": "single",
        "selectCount": 1,
        "title": "参照の代入",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「apple, 100」と表示される"
          },
          {
            "key": "B",
            "text": "「banana, 100」と表示される"
          },
          {
            "key": "C",
            "text": "「apple, 200」と表示される"
          },
          {
            "key": "D",
            "text": "「banana, 200」と表示される"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問2）。",
          "pdfExplanation": "正解：B\n\n参照型変数が、どのインスタンスへの参照を持っているかを問う問題です。参照型変数には、インスタンスへの参照（リンク）を代入します。設問では、Mainクラスの3行目と4行目で2つの異なるインスタンスを生成し、それぞれ変数aとbという2つの変数に参照を代入しています。5行目から8行目にかけて、2つのインスタンスのフィールドに値を代入しているため、2つのインスタンスは異なるフィールド値を持っていることになります。\n\n【設問のコードのイメージ①】\n\n```text\nメモリ上のインスタンス\n番地100: [200, apple]\n番地101: [100, banana]\n番地102:\n番地103:\n番地104:\n\na -> 100\nb -> 101\n\n変数にはどこを参照すればよいかというリンク情報が入っている\n\n```\n\nしかし、9行目で変数bの参照を変数aに代入しています。そのため、これ以降、変数aとbは、同じインスタンスへの参照を持っていることになります。\n\n【設問のコードのイメージ②】\n\n```text\nメモリ上のインスタンス\n番地100: [200, apple]     このインスタンスはどこからも参照されていない\n番地101: [100, banana]\n番地102:\n番地103:\n番地104:\n\na -> 101\nb -> 101\n\n```\n\n以上のことから、10行目のprintInfoメソッドは、「banana, 100」と出力します。よって、選択肢Bが正解です。\n\n【試験対策】\nこの問題の出題ポイントは、複数のインスタンスを作成し、それぞれ異なる値を持たせた上で、変数がどのインスタンスへの参照を持っているかという点です。変数内の参照が、どのタイミングで変わったのかをしっかりと把握するようにしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "codeBlocks": [
          {
            "title": "Item.java",
            "code": "public class Item {\n    public String name;\n    public int price;\n    public void printInfo() {\n        System.out.println(name + \", \" + price);\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Item a = new Item();\n        Item b = new Item();\n        a.name = \"apple\";\n        b.price = 100;\n        a.price = 200;\n        b.name = \"banana\";\n        a = b;\n        a.printInfo();\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "exception",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q03",
        "number": 3,
        "type": "single",
        "selectCount": 1,
        "title": "nullリテラルと空文字",
        "prompt": "次のプログラムを実行し、「NULL」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Object obj = null;"
          },
          {
            "key": "B",
            "text": "Object obj = false;"
          },
          {
            "key": "C",
            "text": "Object obj = NULL;"
          },
          {
            "key": "D",
            "text": "Object obj = \"\";"
          },
          {
            "key": "E",
            "text": "選択肢AとCのどちらも可能である"
          },
          {
            "key": "F",
            "text": "選択肢A〜Eはすべて誤りである"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問3）。",
          "pdfExplanation": "正解：F\n\nリテラルに関する問題です。Javaのデータ型には、大きく分けてプリミティブ型と参照型の2つがあります。プリミティブ型の変数はデータそのものを保持します。一方、参照型の変数はオブジェクトへの参照（リンク）を保持します。\n\n参照型の変数は、オブジェクトへの参照（リンク）を保持しているか、保持していないかのどちらかしか表現できません。\n\n参照を保持していないことを表現するためのリテラルが「null」です。nullは「NULL」とは表現できません。よって、選択肢Cは誤りです。\n\nまた、選択肢Aのように明示的にnullを代入すると、何も参照していない状態の参照型変数を作れます。この変数を設問のコードのようにコンソールに出力すると、「null」と表示されます。このようにnullを「null」と出力するのは、printlnメソッドの仕様です。以上のことから、選択肢Aも誤りです。\n\n選択肢Bは、参照型変数にプリミティブ型のリテラル「false」を代入しようとしています。プリミティブ型と参照型に互換性はありません。よって、選択肢Bも誤りです。選択肢Dは、文字数0の空文字を表すStringオブジェクトへの参照を代入しています。そのため、この変数を設問のコードのようにコンソールに出力すると、文字数0の空文字オブジェクトが参照され、その中身（空文字）が出力されるため、何も表示されません。\n\n以上のことから、選択肢Fが正解です。\n\n【試験対策】\nnullは変数が何も参照していないことを表すリテラルです。一方、空文字は、文字数0のStringオブジェクトを表します。nullと空文字が異なる点に注意しましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "null",
          "object",
          "string/reference",
          "compile-error",
          "output"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n\n        System.out.println(obj);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "ガベージコレクション対象",
        "prompt": "次のプログラムを実行し、7行目が終了したときにガベージコレクションの対象となるインスタンスはどれか。正しい説明を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "3行目で作成したインスタンスだけが、ガベージコレクションの対象となる"
          },
          {
            "key": "B",
            "text": "4行目で作成したインスタンスだけが、ガベージコレクションの対象となる"
          },
          {
            "key": "C",
            "text": "3行目と4行目で作成したインスタンスが、ガベージコレクションの対象となる"
          },
          {
            "key": "D",
            "text": "ガベージコレクションの対象となるインスタンスは存在しない"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問4）。",
          "pdfExplanation": "正解：B\n\nガベージコレクションのタイミングに関する問題です。インスタンスはメモリ上に作られるため、無制限に作るとメモリ空間を使い切ってしまいます。限りあるメモリを有効に使うためにも、利用されないインスタンスを削除し、空きスペースを作らなければいけません。\n\nC言語などでは、メモリを確保したり解放したりするコードを、プログラムに記述しなければいけません。このようなメモリ操作は、プログラムからハードウェアを自在に扱える高い自由度を与えてくれる反面、コーディングの煩雑さや、バグフィックスの難しさなど、ソフトウェア開発の生産性を左右する大きな障害にもなっていました。\n\n一方、Javaは自動メモリ管理機能を提供することで、メモリ操作といった煩雑なコーディングからプログラマーを解放し、高い生産性を維持できる言語として設計されています。\n\n利用されなくなったインスタンスを解放するのは、JVMの機能の1つである\n\nガベージコレクタが行います。ガベージコレクタは、メモリ上に使われなくなったインスタンスを探し、見つかればそのインスタンスを破棄して、メモリを解放します。\n\nガベージコレクタが不要なインスタンスを探し、破棄することを「ガベージコレクション」と呼びます。ガベージコレクションが起こるタイミングは、プログラマーが制御することはできず、CPUの利用状況などによってJVMが決めます。Systemクラスには、gcメソッドというガベージコレクションを促すメソッドがありますが、これもJVMに実行を促すだけであり、必ずガベージコレクションが起こることを保証するものではありません。\n\nガベージコレクションの対象は、どこからも参照されなくなったインスタンスです。インスタンスへの参照が外れる代表的なタイミングとしては、変数にnullを代入するときがあります。\n\n例　nullを代入しインスタンスへの参照を外す\n\n```java\nObject obj = new Object();\nobj = null;    // このタイミングで、インスタンスへの参照が外れる\n\n```\n\nまた、インスタンスへの参照を保持している変数に、ほかのインスタンスへの参照を代入したときも同様です。\n\n例　新しいインスタンスへの参照で変数を上書き\n\n```java\nObject obj = new Object();\nobj = new Object();    // 新しいインスタンスへの参照で変数を上書き\n\n```\n\nJavaでは、インスタンスを直接扱うことはできず、参照を経由してしか扱えません。そのため、どの変数からも参照されていないインスタンスは、プログラムのどのコードからも使うことはできません。ガベージコレクタは、このような参照されていないインスタンスを探し出して、メモリを無駄に占有しないようにするために破棄するのです。\n\n設問では、2つのObjectクラスのインスタンスを作り、aとbという変数で参照しています。\n\n【設問のコード3〜4行目のイメージ】\n\n```text\nメモリ上のインスタンス\n番地100: インスタンス\n番地101: インスタンス\n番地102:\n番地103:\n番地104:\n\na -> 100\nb -> 101\n\n```\n\n5行目では変数cを宣言し、変数aの参照をコピーして代入しています。そのため、変数aとcは、同じインスタンスへの参照を持っていることになります。\n\n【設問のコード5行目のイメージ】\n\n```text\nメモリ上のインスタンス\n番地100: インスタンス\n番地101: インスタンス\n番地102:\n番地103:\n番地104:\n\nc -> 100\na -> 100\nb -> 101\n\n```\n\n6行目と7行目では、変数a、bにnullを代入し、参照を外しています。しかし、5行目で変数cに参照をコピーしておいたため、7行目が終了した時点でどこからも参照されていないインスタンスは、4行目で作ったインスタンスだけということになります。\n\n【設問のコード6〜7行目のイメージ】\n\n```text\nメモリ上のインスタンス\n番地100: インスタンス\n番地101: インスタンス（どこからも参照されない）\n番地102:\n番地103:\n番地104:\n\nc -> 100\na -> null\nb -> null\n\n```\n\n以上のことから、選択肢Bが正解です。\n\n【試験対策】\nインスタンスの参照がなくなった時点で、ガベージコレクションの対象となります。ガベージコレクションのタイミングはJVMが決めます。gcメソッドはガベージコレクションの実行を促すだけで、ガベージコレクションの実行は保証しません。\n\n【試験対策】\nガベージコレクタには、インスタンスの破棄を繰り返すことで細切れになったメモリをまとめ、大きな空間を確保する「コンパクション」という機能があります。そのため、ガベージコレクションはCPUに対して負荷の高い処理なのです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Object a = new Object();\n        Object b = new Object();\n        Object c = a;\n        a = null;\n        b = null;\n        // more code\n    }\n}"
          }
        ],
        "tags": [
          "collection",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q05",
        "number": 5,
        "type": "single",
        "selectCount": 1,
        "title": "staticフィールドへのアクセス",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のクラスを、コンパイル、実行したときの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "10が表示される"
          },
          {
            "key": "B",
            "text": "20が表示される"
          },
          {
            "key": "C",
            "text": "30が表示される"
          },
          {
            "key": "D",
            "text": "Mainクラスの3行目でコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問5）。",
          "pdfExplanation": "正解：C\n\nstaticなフィールドへのアクセスについて問う問題です。Javaでは、プログラムの実行中に必要なクラスを読み込んで実行します。クラスファイルを読み込むことを「ロード」と呼びますが、ロード後、クラスファイルの内容はstaticな部分とそれ以外に分離され、それぞれ異なるメモリ空間に配置されます。\n\nロード後、staticで修飾されたフィールドやメソッドは、「static領域」と呼ばれる領域に配置されます。それ以外の部分は、「ヒープ領域」と呼ばれる領域に配置されます。インスタンスが生成されるときには、ヒープ領域にあるクラス定義に従ってインスタンスが生成されます。\n\n【static領域とヒープ領域】\n\n```text\nクラスファイル\n    ↓ ロード\nクラス定義\n    ├ staticメンバ        → static領域\n    └ その他定義          → ヒープ領域\n                              newされるたびにヒープ上のクラス定義に従ったインスタンスを生成\n\n```\n\nこの図から、staticで修飾されたフィールドやメソッドはインスタンスを作るための定義とは別の領域に配置されていることがわかります。また、staticな\n\nメンバとそうでないメンバの分離は、ロード後すぐに行われます。この仕組みがあるために、staticなフィールドはインスタンスを作らなくても使えるという性質を持ちます。\n\n同じクラスから作られた異なるインスタンスは、フィールドに異なる値を持つことができます。しかし、staticなフィールドはインスタンスには存在しません。図のとおり、staticなフィールドは、インスタンス生成前に分離され、別の領域に配置されているからです。staticなフィールドは、インスタンスとは別の領域にある変数だと考えてください。\n\nstaticなフィールドにアクセスするには、「クラス名.フィールド名」と記述します。たとえば、設問のコードであれば、次のように記述します。\n\n例　staticなフィールドへのアクセス①\n\n```java\nSample.num = 10;\n\n```\n\nこれで、static領域にある変数numの値は10に置き換わります。よって、設問のMainクラスの3行目でコンパイルエラーにはならないので、選択肢Dは誤りです。\n\n【staticなフィールドの値が10に置き換わった状態】\n\n```text\nstatic領域: Sample.num = 10\nヒープ領域: その他定義\n\n```\n\nstaticなフィールドにアクセスするには、このようにクラス名を使う方法以外に、次のようにインスタンスを生成し、その参照を使ってアクセスする方法もあります。\n\n例　staticなフィールドへのアクセス②\n\n```java\nSample s = new Sample();\ns.num = 20;\n\n```\n\nこのコードは、コンパイル時に「クラス名.フィールド名」に置き換えられます。そのため、このコードは次のコードと同じ意味を表しています。\n\n例　staticなフィールドへのアクセス③\n\n```java\nSample s = new Sample();\nSample.num = 20;    // コンパイル時に置き換えられる\n\n```\n\nそれでは、設問のMainクラスを、置き換えて考えてみましょう。\n\n例　設問のMainクラスの例\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Sample.num = 10;\n        Sample s = new Sample();\n        Sample s2 = new Sample();\n        Sample.num += 10;\n        Sample.num = 30;\n        System.out.println(Sample.num);\n    }\n}\n\n```\n\nこのように置き換えてみると、このコードはstatic領域上にある1つの変数の値を変更し続けていることがわかります。まず、3行目で10を代入し、6行目で10を加算して20に変更、その後、7行目で30を代入して上書きしています。そのため、コンソールには30が表示されます。以上のことから、選択肢Cが正解です。\n\n【試験対策】\nstaticなフィールドは、「クラス名.フィールド名」、もしくはインスタンスの作成後であれば、「参照.フィールド名」のどちらでもアクセスできます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "field/static/scope",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    static int num = 0;\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample.num = 10;\n        Sample s = new Sample();\n        Sample s2 = new Sample();\n        s.num += 10;\n        s2.num = 30;\n        System.out.println(Sample.num);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q06",
        "number": 6,
        "type": "multi",
        "selectCount": 2,
        "title": "staticメンバのアクセス",
        "prompt": "次の中から、正しい説明を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "staticなメソッドからは、staticなメソッドを呼び出せない"
          },
          {
            "key": "B",
            "text": "staticなメソッドからは、staticではないフィールドにアクセスできる"
          },
          {
            "key": "C",
            "text": "staticなメソッドからは、staticではないメソッドを呼び出せる"
          },
          {
            "key": "D",
            "text": "staticなメソッドからは、staticなフィールドにアクセスできる"
          },
          {
            "key": "E",
            "text": "staticではないメソッドからは、staticなフィールドにアクセスできる"
          },
          {
            "key": "F",
            "text": "staticではないメソッドからは、staticなメソッドを呼び出せない"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問6）。",
          "pdfExplanation": "正解：D、E\n\nstaticなメンバのルールに関する問題です。解答5では、staticなメンバ（staticで修飾されたフィールドやメソッド）はインスタンスが作られるメモリ領域とは異なる領域に配置されることを学びました。staticなメンバとそのほかの定義は、クラスのロード後、すぐに行われます。そのため、staticなメンバはインスタンスの有無にかかわらず使えます。一方、staticではないメンバは、インスタンスがないと使えません。\n\nこのようなルールがあるため、インスタンスがなくても使えるstaticなメソッドから、staticではないメンバにはアクセスできません。staticではないメンバは、インスタンスがないと使えないからです。反対に、staticではないメソッドから、staticなメンバにアクセスすることは可能です。よって、選択肢Eは正解で、選択肢Fは誤りです。\n\n【staticなメソッドから、staticではないメンバへのアクセス】\n\n```text\nstatic領域にあるstaticメソッド\n        ↓\nヒープ領域にあるstaticではないメンバ\n        → インスタンスが存在しない場合、存在しないものを使う可能性があるため禁止\n\n```\n\nもし、staticなメソッドから、staticではないフィールドやメソッドにアクセスしようとすると、存在しないものを呼び出すことになるため、コンパイルエラーが発生します。以上のことから、選択肢BとCは誤りです。\n\nstaticなメンバ同士であれば、インスタンスの有無に関係なく使えます。そのため、staticなメソッドから、staticなフィールドやメソッドは自由にアクセスできます。よって、選択肢Aは誤りで、選択肢Dは正解です。\n\n【試験対策】\nstaticなメソッドは、staticなメンバ（staticで修飾されたフィールドやメソッド）にしかアクセスできません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q07",
        "number": 7,
        "type": "single",
        "selectCount": 1,
        "title": "インスタンスメソッド呼び出し",
        "prompt": "次のクラスのhelloメソッドを呼び出し、コンソールに「hello」と表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "hello;"
          },
          {
            "key": "B",
            "code": "hello();"
          },
          {
            "key": "C",
            "code": "Sample.hello;"
          },
          {
            "key": "D",
            "code": "Sample.hello();"
          },
          {
            "key": "E",
            "code": "sample.hello();"
          },
          {
            "key": "F",
            "code": "sample.hello;"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問7）。",
          "pdfExplanation": "正解：E\n\nインスタンスメソッドの呼び出しに関する問題です。\nメソッドを呼び出すには、「メソッド名(引数)」を記述しなければいけません。たとえば、次のようなコードがあったとき、methodAメソッドからmethodBメソッドを呼び出すには、「methodB();」と記述します。\n\n例　メソッドの呼び出し\n\n```java\npublic class Test {\n    public void methodA() {\n        methodB();    // 同じインスタンスに定義されているメソッドの呼び出し\n    }\n    public void methodB() {\n        System.out.println(\"hello.\");\n    }\n}\n\n```\n\nこのような書式は、呼び出すメソッドと呼び出されるメソッドが同じインスタンスにある場合の書式です。異なるインスタンスが持つメソッドを呼び出すには、参照を使って、「参照.メソッド名(引数)」と記述します。設問のコードは、MainクラスのmainメソッドからSampleクラスのインスタンスが持つhelloメソッドを呼び出さなければいけません。したがって、選択肢Eが正解です。\n\n選択肢Aはメソッド名の後ろにカッコ「()」がありません。これでは、メソッドではなくフィールドへのアクセスと解釈されます。よって、選択肢Aは誤りです。\n\n選択肢Bは、メソッド名だけを記述しており、変数sampleを使っていません。そのため、同じクラスに定義されているメソッドを呼び出していると解釈されます。よって、選択肢Bも誤りです。\n\n選択肢CとDは、参照が格納されている変数ではなく、クラス名を記述しています。これはstaticで修飾されたフィールドやメソッドを呼び出すときの書式です。しかし、Sampleクラスのhelloメソッドは、staticで修飾されていません。よって、選択肢CとDも誤りです。\n\n選択肢Fは、参照を使っていますがカッコを付けていません。これでは、インスタンスへのフィールドへのアクセスと解釈されてしまいます。よって、選択肢Fも誤りです。\n\n【試験対策】\nメソッド呼び出しの書式を覚えておきましょう。\n・同じインスタンスに定義されているメソッドの場合は、メソッド名(引数)\n・インスタンスに定義されているメソッドの場合は、変数.メソッド名(引数)\n・staticなメソッドの場合は、クラス名.メソッド名(引数)\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public void hello() {\n        System.out.println(\"hello\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample sample = new Sample();\n\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q08",
        "number": 8,
        "type": "single",
        "selectCount": 1,
        "title": "メソッド引数の個数",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「10」と表示される"
          },
          {
            "key": "B",
            "text": "「10null」と表示される"
          },
          {
            "key": "C",
            "text": "「void」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問8）。",
          "pdfExplanation": "正解：D\n\nメソッドの呼び出しとシグニチャに関する問題です。プログラムから何らかのメソッドを呼び出すと、JVMは指定されたメソッドを読み込み、実行します。このときJVMは次の3つの方法で、多数あるメソッドから実行すべきメソッドを探し出します。\n\n・参照（どのインスタンスのメソッドなのか）\n・クラス名（どのクラスに定義されているstaticなメソッドなのか）\n・シグニチャ\n\n参照やクラス名は、どこに定義されているメソッドなのかを見分けるために必要です。これらを省略したときには、同じクラスやインスタンスに定義されているメソッドであるとコンパイラに解釈されます。\n\n3番目のシグニチャとは、メソッド名と引数のリストのセットのことです。JVMは、メソッドを名前だけで見分けているわけではありません。Javaにはオーバーロードという仕組みがあり、同名のメソッドが複数存在する可能性があるため、メソッド名に加えて引数のリスト（数や種類、順番）を使ってメソッドを見分けます。たとえば、int型の引数を受け取るhelloメソッドと、String型の引数を受け取るhelloメソッドは同名ですが、異なるメソッドとして扱われます。\n\n設問のSampleクラスでは、2つの引数を受け取るaddメソッドは定義されていますが、引数を1つ受け取るaddメソッドは定義されていません。しかし、呼び出しているMainクラスのmainメソッドでは、引数を1つしか渡していません。そのため、このMainクラスはコンパイルエラーが発生します。以上のことから、選択肢Dが正解です。\n\n【試験対策】\n呼び出されるメソッドがインスタンスのメソッドなのか、staticなメソッドなのかを確認しましょう。呼び出し元のメソッドが、呼び出されるメソッドのシグニチャと一致しているかを確認しましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "exception",
          "string/reference",
          "collection"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public int add(Integer a, Integer b) {\n        return a + b;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        System.out.println(s.add(10));\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q09",
        "number": 9,
        "type": "multi",
        "selectCount": 2,
        "title": "ローカル変数のスコープ",
        "prompt": "次のプログラムの5行目に記述できるコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "System.out.println(a);"
          },
          {
            "key": "B",
            "code": "System.out.println(b + 2);"
          },
          {
            "key": "C",
            "code": "System.out.println(c);"
          },
          {
            "key": "D",
            "code": "System.out.println(d);"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問9）。",
          "pdfExplanation": "正解：A、B\n\nローカル変数の宣言に関する問題です。メソッドは、記述した順に実行されます。これを「順次処理」と呼びます。メソッド内の処理は記述順に動作しますが、クラスのメソッドが記述順に実行されるわけではないことに注意しましょう。\n\n順次処理では、後続の処理で使う変数などは、使う箇所よりも前で宣言されていなければいけません。そのため、次のようなコードはコンパイルエラーが発生します。\n\n例　変数が宣言よりも前に使われている\n\n```java\nSystem.out.println(num);\nint num = 10;\n\n```\n\n設問のコード3行目では変数aを、4行目では変数bを宣言しています。選択肢Aの場合は5行目の実行で1が表示され、選択肢Bの場合は4が表示されます。よって、選択肢AとBが正解です。\n\n選択肢Cは変数cの値をコンソールに表示するコードですが、変数cはこのコードの次の行で宣言されています。そのため、このコードはコンパイルエラーになります。よって、選択肢Cは誤りです。選択肢Dは変数dの値をコンソールに表示するコードですが、変数dはどこにも宣言されていません。変数を使うには、まずその変数を宣言しなければいけません。そのため、このコードはコンパイルエラーになります。よって、選択肢Dも誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 1;\n        int b = 2;\n\n        int c = b;\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q10",
        "number": 10,
        "type": "single",
        "selectCount": 1,
        "title": "メソッド宣言",
        "prompt": "次の中から、メソッド宣言の記述として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "Void sample() { }"
          },
          {
            "key": "B",
            "code": "void sample() { return \"sample\"; }"
          },
          {
            "key": "C",
            "code": "sample() { }"
          },
          {
            "key": "D",
            "code": "int sample() { return \"sample\"; }"
          },
          {
            "key": "E",
            "code": "void sample() { }"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問10）。",
          "pdfExplanation": "正解：E\n\nメソッド定義における戻り値型についての問題です。メソッドの定義は、次のような構文で行います。\n\n構文\n\n```java\nアクセス修飾子 戻り値型 メソッド名(引数の型 引数名) {\n    // メソッド内の処理\n}\n\n```\n\n戻り値型は、このメソッドを実行した結果、どのような種類の結果データ（戻り値）を戻すかを表したものです。メソッドを実行しない限り、具体的にどのようなデータが戻るかはわからないため、リテラルなどの固定値は記述で\n\nきません。データの種類を表すために「型」を指定することに注意してください。次のコードは、int型の結果を戻すメソッドの宣言例です。\n\n例　int型を戻すメソッド\n\n```java\nint method(int num) {\n    return num * 2;\n}\n\n```\n\nこの例でも使われているように、呼び出し元のメソッドに値を戻すには、return文を使います。return文で戻すデータの型と、メソッド宣言で宣言した戻り値型は一致しなければいけない点に注意してください。たとえば、次のように戻り値型にはint型を、return文ではdouble型を戻すように記述すると、コンパイルエラーが発生します。\n\n例　戻り値とreturn文が戻す型が異なるメソッド（コンパイルエラー）\n\n```java\nint method(int num) {\n    return num * 2.0;  // intとdoubleの演算結果はdouble\n}\n\n```\n\nまた、戻り値型を宣言しているにもかかわらず、return文を記述しない次のようなコードもコンパイルエラーになります。このコードでは、int型の値を戻すと宣言しているにもかかわらず、何も戻しません。\n\n例　戻り値型を宣言し、return文を戻さないメソッド（コンパイルエラー）\n\n```java\nint method(int num) {\n    System.out.println(num);\n}\n\n```\n\nもし、戻り値を何も戻さない場合には、戻り値型にはvoidを指定します。voidを使って先ほどのコード例を次のように修正すると、コンパイルエラーは発生しなくなります。\n\n例　戻り値型をvoidに変更したメソッド\n\n```java\nvoid method(int num) {  // 戻り値型をvoidに変更\n    System.out.println(num);\n}\n\n```\n\n選択肢Aは、「Void」と1文字目が大文字になっているため誤りです。選択肢Bは、voidの綴りは合っていますが、戻り値を戻さないという宣言をしているにもかかわらず、return文で値を戻そうとしています。そのため、このコードはコンパイルエラーが発生します。よって、選択肢Bも誤りです。選択肢Cは戻り値型を宣言していません。これはメソッド宣言の構文に反します。よって、選択肢Cも誤りです。選択肢Dは、int型の戻り値を戻すと宣言していますが、String型の参照をreturnしようとしています。このように型が一致しない場合もコンパイルエラーが発生します。よって、選択肢Dも誤りです。\n\n選択肢Eは、戻り値を戻さないvoidで戻り値型を宣言し、return文も記述していません。よって、選択肢Eが正解です。\n\n【試験対策】\n戻り値について、以下のことを覚えておきましょう。\n・メソッド宣言で戻り値型の宣言は必須。戻り値を何も戻さない場合には、戻り値型にvoidを指定する\n・戻り値型がvoidであるメソッドは、値を戻せない\n・戻り値型と、実際に戻す値の型は同じでなければいけない\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "override/overload"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q11",
        "number": 11,
        "type": "single",
        "selectCount": 1,
        "title": "voidメソッドの戻り値",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Mainクラスの4行目でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "Mainクラスの5行目でコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "Mainクラスの4行目と5行目でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "何も表示されない"
          },
          {
            "key": "E",
            "text": "nullが表示される"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問11）。",
          "pdfExplanation": "正解：A\n\nメソッドの呼び出しと戻り値に関する問題です。あるメソッド「A」が、ほかのメソッド「B」を呼び出したとき、Bが処理の結果として、何らかの値を戻すことがあります。戻された値を受け取るためには、Aに変数を宣言し、代入式を記述します。このとき、Bが戻す戻り値の型と、Aが受け取る変数の型は同じか、もしくは互換性のある型でなければいけません。以下は、int型を戻すsampleというメソッドを呼び出し、その結果を受け取るコード例です。\n\n例　sampleメソッドの戻り値をresultに代入\n\n```java\nint result = sample();\n\n```\n\nもし、sampleメソッドが10という値を戻した場合、sampleメソッド終了後には、上のコードは以下と同じ意味を持ちます。\n\n例　メソッドの戻り値10をresultに代入\n\n```java\nint result = 10;  // メソッド呼び出し部分を「戻り値」に置き換えて考える\n\n```\n\nもし、戻り値型がvoidで値を何も戻さない場合、戻り値を受け取るような代入式は記述できません。記述した場合には、「何も受け取れないのに代入しようとした」ことを意味するため、コンパイルエラーが発生します。\n\n設問のコードでは、Mainクラスの4行目でSampleクラスのsetValueメソッドを呼び出し、その結果を変数valに代入しようとしています。しかし、setValueメソッドの定義を確認すると、戻り値型がvoidとなっているので、戻り値を戻しません。そのため、Mainクラスの4行目でコンパイルエラーが発生します。以上のことから、選択肢Aが正解です。\n\nなお、戻り値を戻すメソッドを呼び出しても、必ずしもその結果を受け取る必要はありません。次のように、前述のint型を戻すsampleというメソッドを呼び出し、その結果を受け取らないことも可能です。\n\n例　sampleメソッドの呼び出し\n\n```java\nsample();  // メソッドを呼び出すだけで何も受け取らない\n\n```\n\n設問のコードであれば、Mainクラスの5行目でString型の戻り値を戻すgetValueメソッドを呼び出していますが、受け取っていません。前述のとおり、戻された戻り値を使うか使わないかは、呼び出し元のメソッド側の自由です。よって、5行目でコンパイルエラーは発生しません。\n\n【試験対策】\n戻り値を戻さない（戻り値型がvoidである）メソッドに対し、戻り値を受け取る変数を宣言して、受け取ることはできません。コンパイルエラーが発生します。呼び出しているメソッドの定義を確認するようにしましょう。\n\n【試験対策】\n何らかの戻り値を戻すメソッドを呼び出しても、その戻り値を受け取る必要はありません。戻り値を受け取り、変数に代入しなければ、その戻り値は破棄されるだけです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "override/overload",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private String value;\n    public void setValue(String value) {\n        this.value = value;\n    }\n    public String getValue() {\n        return this.value;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        String val = s.setValue(\"hello\");\n        s.getValue();\n        System.out.println(val);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q12",
        "number": 12,
        "type": "multi",
        "selectCount": 2,
        "title": "戻り値型と代入可能性",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムの空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "int"
          },
          {
            "key": "B",
            "text": "float"
          },
          {
            "key": "C",
            "text": "double"
          },
          {
            "key": "D",
            "text": "Integer"
          },
          {
            "key": "E",
            "text": "String"
          },
          {
            "key": "F",
            "text": "dim"
          }
        ],
        "answer": [
          "B",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問12）。",
          "pdfExplanation": "正解：B、C\n\nメソッドの戻り値型と、戻り値を受け取る変数の型との互換性についての問題です。メソッドが戻す戻り値を受け取るためには、メソッドの戻り値型と同じ型、もしくは互換性のある型の変数を宣言して、結果を代入しなければいけません。異なる型や互換性のない型の変数で、戻り値を受け取ることはできません。\n\n設問のコードでは、int型の引数を2つ受け取るdivideメソッドを呼び出しています。このメソッドの戻り値型はfloat型であるため、floatもしくは、floatと互換性のある型で、結果を受け取る変数を宣言する必要があります。\n\n選択肢Aのint型はfloat型のように小数点数を表すことができず、互換性がありません。よって、誤りです。選択肢Bは、divideメソッドの戻り値型と同じ型であるため、問題ありません。よって、正解です。選択肢Cは戻り値型とは一致しませんが、64ビットの浮動小数点数を表せるdouble型は、32ビットの浮動小数点数を表すfloat型と互換性があります。よって、正解です。選択肢DとEは、オブジェクト型であるため、互換性がありません（参考を参照）。選択肢Fは、Javaのキーワードではありません。よって誤りです。\n\n【試験対策】\nメソッドの戻り値の型と、戻り値を受け取るための変数の型は、同じ型か、互換性がなければいけません。呼び出しているメソッドの定義を確認するようにしましょう。\n\n【参考】\nラッパー型の場合は、ボクシングによって自動変換されます。本設問の場合では、Floatであればコンパイル、実行可能です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "override/overload",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    float divide(int a, int b) {\n        return (float) a / (float) b;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        ____ result = s.divide(10, 2);\n        System.out.println(result);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q13",
        "number": 13,
        "type": "single",
        "selectCount": 1,
        "title": "引数リスト不一致",
        "prompt": "次のプログラムを確認してください。\n\nこのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "2が表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問13）。",
          "pdfExplanation": "正解：C\n\n呼び出し元メソッドの引数の数とメソッド宣言で定義している引数の数について問う問題です。メソッドに宣言された引数は、処理を実行するために必要なデータを意味します。そのため、宣言された引数はそのメソッドを呼び出す際に「渡さなければいけないデータ」だと考えてください。たとえば、次のようなメソッドの定義があったとします。\n\n例　sampleメソッドの定義\n\n```java\nvoid sample(int num) {\n    // do something\n}\n\n```\n\nこのメソッドは、int型の引数を1つ受け取ります。これは、int型のデータを1つ渡さなければ「処理ができない」ことを意味しています。そのため、次のように引数なしで、このメソッドを呼び出すことはできません。\n\n例　引数なしでsampleメソッドを呼び出し\n\n```java\nsample();\n\n```\n\nこのコードは、引数なしのsampleメソッドを呼び出すという意味であるため、上記のint型を受け取るsampleメソッドを呼び出すことはできません。\n\nメソッドの引数は、カンマ「,」で区切っていくつでも宣言できます。次のコード例では、2つの引数を受け取るメソッドを定義しています。\n\n例　2つの引数を受け取るsampleメソッドの定義\n\n```java\nvoid sample(int num1, int num2) {\n    // do something\n}\n\n```\n\nこのメソッドは、int型のデータを2つ渡さなければ処理ができないことを宣言しています。そのため、次の2つのコードは、どちらもこのメソッドを呼び出すことはできません。\n\n例　メソッド定義と引数の数が異なるsampleメソッドの呼び出し\n\n```java\nsample();    // 引数なしのメソッドを呼び出している\nsample(10);  // int型の引数1つを受け取るメソッドを呼び出している\n\n```\n\n設問のコードでは、Mainクラスの4行目で引数を1つ渡してmethodメソッドを呼び出しています。しかし、Sampleクラスに定義されているmethodメソッドの定義では、int型の引数を2つ受け取るように宣言されており、呼び出し側と呼び出される側の定義が一致しません。そのため、Mainクラス側で引数を1つ受け取るmethodメソッドは存在しないという旨のコンパイルエラーが発生します。以上のことから、選択肢Cが正解です。\n\n【試験対策】\n呼び出し元メソッドの引数は、メソッドで宣言されている種類、数を一致させなければいけません。一致していない場合は、コンパイルエラーが発生します。\n\n【参考】\nソフトウェアを設計する際には、引数が多ければ多いほど、そのメソッドは使いにくくなってしまいます。たくさんの引数を受け取るメソッドを定義するのであれば、それらの引数をフィールドに持つ1つのオブジェクトを引数に受け取るようにしたほうが、より簡潔で変更にも強くなります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "method",
          "argument",
          "compile-error",
          "overload"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public int method(int a, int b) {\n        return a + b;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        int result = s.method(2);\n        System.out.println(result);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "可変長引数を含むメソッド宣言",
        "prompt": "次の中から、メソッドの宣言として正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "code": "void method(void){}"
          },
          {
            "key": "B",
            "code": "void method(int values...) {}"
          },
          {
            "key": "C",
            "code": "void method(int... values, String name) {}"
          },
          {
            "key": "D",
            "code": "void method(int... a, int... b) {}"
          },
          {
            "key": "E",
            "text": "選択肢CとDの両方とも正しい"
          },
          {
            "key": "F",
            "text": "選択肢A〜Dはすべて正しい"
          },
          {
            "key": "G",
            "text": "選択肢A〜Dはすべて間違っている"
          }
        ],
        "answer": [
          "G"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問14）。",
          "pdfExplanation": "正解：G\n\n可変長引数に関する問題です。メソッドの引数の個数は、宣言した数の分だけの固定数でした。引数を2つ宣言したメソッドでは2つ、3つ宣言したメソッドでは3つだけしか引数を受け取ることができません。引数の個数が決まっていれば問題にはなりませんが、引数の個数が毎回異なる場合に対応できません。このようなときには、可変長引数を使うことで柔軟なメソッドを宣言することができます。\n\n可変長引数は、その名のとおり、その数を自由に変更できる引数のことです。可変長引数は、次のように引数の型の直後にピリオド3つ「...」を付けて宣言します。\n\n例　可変長引数を持つメソッドの宣言\n\n```java\nvoid sample(int... num) {\n    // do something\n}\n\n```\n\nこのように可変長引数を持つメソッドは、理論上は引数をいくつでも渡して呼び出すことができます。渡された複数の値は、JVMによって配列に置き換えられます。そのため、可変長引数として渡された値を使うときには、配列と同じように大カッコ「[]」を使います。\n\n例　可変長引数は配列として扱われている\n\n```java\nvoid sample(int... num) {\n    for (int i = 0; i < num.length; i++) {\n        System.out.println(num[i]);\n    }\n}\n\n```\n\nまた、可変長引数を使うときは、次の2点に注意する必要があります。\n\n・同じ型で数の可変な引数をまとめられるだけで、異なる型はまとめられない\n・可変長引数以外の引数を受け取る必要がある場合は、可変長引数を最後の引数にすること\n\n1番目の注意点は、可変長引数が配列に置き換えられる仕組みになっていることを考えれば当然のことです。2番目の注意点は重要なポイントですが、間違えやすいので忘れないようにしましょう。可変長引数は理論上、同じ型であ\n\nればいくつでもデータを渡せます。たとえば、次のようなメソッド宣言では、どこまでが第1引数で、どこからが第2引数なのか、判断ができません。そのため、このようなコードはコンパイルエラーになります。\n\n例　可変長引数を最初に記述したメソッド（コンパイルエラー）\n\n```java\nvoid sample(int... num, int value) {\n    // do something\n}\n\n```\n\nそれに対して、次のように引数の順番を入れ替えると、第1引数と第2引数以降が区別できるため、コンパイルエラーは発生しません。\n\n例　可変長引数を最後に記述したメソッド\n\n```java\nvoid sample(int value, int... num) {\n    // do something\n}\n\n```\n\n選択肢Aは、引数宣言でvoidとしています。ほかのプログラミング言語では、引数を受け取らないことを明示するためにこのように記述する場合がありますが、Javaでは中身なしのカッコ「()」を記述するだけです。そのため、このコードはコンパイルエラーになります。よって、誤りです。\n\n選択肢Bは、可変長引数を宣言していますが、「...」を変数名の後ろに記述しています。「...」はデータ型の後ろに記述しなければいけません。そのため、このコードもコンパイルエラーになります。よって、誤りです。\n\n選択肢CとDは、どちらも可変長引数の宣言の後ろにカンマ「,」で区切って引数を追加しています。前述のとおり、可変長引数は最後の引数でなければいけません。よって、どちらも誤りです。\n\n以上のことから、選択肢Gが正解です。\n\n【試験対策】\n何も引数を受け取らないメソッドを宣言する場合は、カッコの中には何も記述しません。\n\n【試験対策】\n可変長引数を含む複数の引数を受け取るメソッドを宣言するとき、可変長引数は最後の引数としてのみ使うことができます。重要なポイントですが、間違えやすいので忘れないようにしましょう。\n\n【試験対策】\n可変長引数を表す「...」は、型の後ろに付けます。変数名の後ろに付けるとコンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "method",
          "varargs",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": []
      },
      {
        "id": "ch04-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "到達不能コード",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "3行目でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "5行目でコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "6行目でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "「A」と表示される"
          },
          {
            "key": "E",
            "text": "「A」「B」と表示される"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問15）。",
          "pdfExplanation": "正解：C\n\nreturn文に関する問題です。return文は、呼び出し元のメソッドに値を戻すという機能のほかに、呼び出し元に制御を戻すという機能も備えています。そのため、returnだけを記述することも可能です。なお、「制御を戻す」とは、そのメソッドでの処理を強制終了し、呼び出し元のメソッドに戻るということです。たとえば、次のコードでは、引数の値が負数の場合に、制御をそれ以上進めないようにするためにreturn文を使っています。\n\n例　return文の使用例\n\n```java\nvoid sample(int num) {\n    if (num < 0) {\n        return;  // 負数だった場合には、制御を戻す\n    }\n    System.out.println(num);\n}\n\n```\n\nreturn文が現れた時点で強制的に制御が戻され、return文以降のメソッド内の処理は続行されません。上記のコードであれば、引数に負数を渡すとif文の条件に合致し、return文が実行されます。そのため、その後のコンソール表示は実行されません。\n\nなお、このコードでは、引数が正数の場合にはreturn文が実行されることはありません。このように、return文が実行されない可能性がある場合には問題ありませんが、次のコードのように必ずreturn文が実行される場合には、注意すべき点があります。\n\n例　到達不可能なコード\n\n```java\nvoid sample(int num) {\n    return;\n    System.out.println(num);\n}\n\n```\n\nこのコードでは、メソッド内のreturn文を処理したタイミングで制御が戻されるため、次の行のコンソール表示は実行されることはありません。このよ\n\nうに実行されないことが明白なコードがあった場合、コンパイラは「到達不可能なコードがある」としてコンパイルエラーを発生させます。\n\n以上のことから、選択肢Cが正解です。\n\n【試験対策】\nreturn文の後ろの処理は実行できません。もし、return文を実行したあとに何らかの処理をするようなコードを記述するとコンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "return",
          "unreachable",
          "compile-error",
          "method"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public void method(int num) {\n        if (num < 0) return;\n        System.out.println(\"A\");\n        return;\n        System.out.println(\"B\");\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q16",
        "number": 16,
        "type": "multi",
        "selectCount": 2,
        "title": "オーバーロードしていないメソッド定義",
        "prompt": "次のメソッドをオーバーロードしていないメソッド定義を選びなさい。（2つ選択）",
        "options": [
          {
            "key": "A",
            "code": "int calc(int a) {}"
          },
          {
            "key": "B",
            "code": "double calc(double a, int b) {}"
          },
          {
            "key": "C",
            "code": "int calc(double a, double b) {}"
          },
          {
            "key": "D",
            "code": "int calc(double num1, int num2) {}"
          },
          {
            "key": "E",
            "code": "int calc() {}"
          },
          {
            "key": "F",
            "code": "int calc(int a, double b) {}"
          }
        ],
        "answer": [
          "B",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問16）。",
          "pdfExplanation": "正解：B、D\n\nメソッドのオーバーロードに関する問題です。オーバーロードは、「メソッドの多重定義」とも呼ばれ、同名のメソッドを複数宣言できる機能のことです。たとえば、次のコードでは同名のメソッドを複数定義しています。\n\n例　同名の複数のメソッドを定義\n\n```java\npublic class Sample {\n    void hello() { // do something }\n    void hello() { // do something }\n}\n\n```\n\nしかし、これではhelloメソッドを実行するときに、どちらのメソッドを実行してよいか、JVMは判断できません。そのため、このコードはコンパイルエラーになります。\n\nオーバーロードが成り立つ条件は「引数が異なること」です。引数が異なるとは、引数の数や型、順番が異なることで、これらが異なれば同名のメソッドを複数定義できる機能がオーバーロードです。\n\nJVMは、実行するメソッドを読み込むとき、メソッド名だけで判断するのではなく、メソッド名と引数のセットで見分けています。このセットのことを「シグニチャ」と呼びます。オーバーロードは、この仕組みを利用して、同名のメソッドを複数宣言できるようにしているのです。\n\n設問のコードは、2つの引数を受け取るcalcという名前のメソッドを定義しています。まず、引数の数が異なるものを選択肢から見つけます。選択肢Aは引数の数が1つで、選択肢Eは引数がありません。そのため、これらは正しくオーバーロードしています。\n\n選択肢Bは、引数は同じで戻り値の型が異なります。引数が異なることがオーバーロードの条件で、戻り値型の違いはオーバーロードとは関係がありません。よって、正しくオーバーロードしていません。\n\n選択肢Cは、第2引数の型が異なります。また、選択肢Fは、引数の順番が異なります。よって、これらは正しくオーバーロードしています。\n\n選択肢Dは、引数の変数名が異なります。オーバーロードの条件は、数、型、順番のいずれかが異なることです。変数名が異なっていてもオーバーロードとはいえません。よって、正しくオーバーロードしていません。\n\n【試験対策】\nオーバーロードとは、引数の数、型、順番が異なる同名のメソッドを定義することです。戻り値型だけが異なるメソッドはオーバーロードと見なされず、同じメソッドが重複して存在するとして、コンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "overload",
          "method",
          "signature"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "基準となるメソッド",
            "code": "int calc(double a, int b) {\n    return (int) a + b;\n}"
          }
        ]
      },
      {
        "id": "ch04-q17",
        "number": 17,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーロード解決の曖昧さ",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "4行目でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "6行目でコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "9行目でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "選択肢BとCの両方"
          },
          {
            "key": "E",
            "text": "2.5が表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問17）。",
          "pdfExplanation": "正解：A\n\n呼び出し元のメソッドが、オーバーロードしているどのメソッドを適用するかを問う問題です。設問のコードでは、calcメソッドがオーバーロードされて2つ定義されています。2つのメソッドは、引数の型が異なるため、オーバーロードの条件を満たしています。そのため、この2つのメソッド定義でコンパイルエラーが発生することはありません。よって、選択肢B、C、Dは誤りです。\n\n設問のmainメソッドでは、引数に2と3の2つの数値を渡してcalcメソッドを呼び出しています。数値リテラルは、デフォルトでint型の値として解釈されることに注意してください。mainメソッドは、2つのint型を受け取るcalcメソッドを呼び出していますが、一致するオーバーロードはありません。\n\nしかし、double型はint型よりも範囲が大きく、暗黙の型変換によって互換性が保たれているデータ型です。そのため、2つのint型を渡した呼び出しは、doubleとintを受け取るcalcメソッドにも、intとdoubleを受け取るcalcメソッドにも両方適用できてしまいます。このような場合、JVMはどちらのメソッドを呼び出すべきかを判断できません。そのため、「あいまいなメソッド呼び出し」としてコンパイルエラーが発生します。以上のことから、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "overload",
          "ambiguous",
          "method",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Main m = new Main();\n        System.out.println(m.calc(2, 3));\n    }\n    private double calc(double a, int b) {\n        return (a + b) / 2;\n    }\n    private double calc(int a, double b) {\n        return (a + b) / 2;\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q18",
        "number": 18,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーロード条件",
        "prompt": "次のメソッドをオーバーロードするメソッド定義として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "code": "public void method() {}"
          },
          {
            "key": "B",
            "code": "protected void method() {}"
          },
          {
            "key": "C",
            "code": "private void method() {}"
          },
          {
            "key": "D",
            "text": "選択肢A〜Cまで、すべて正しい"
          },
          {
            "key": "E",
            "text": "選択肢A〜Cまで、すべて誤りである"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問18）。",
          "pdfExplanation": "正解：E\n\nオーバーロードと、アクセス修飾子との関係についての問題です。オーバーロードの条件は、シグニチャが異なることです。シグニチャは、メソッド名と引数のリストからなり、オーバーロードとして見なされるためには、メソッド名が同じで、引数の数、型、順番のいずれかが異なる必要があります。この条件に、アクセス修飾子は含まれません。そのため、アクセス修飾子が異なるだけではオーバーロードとして見なされません。選択肢A〜Cは、同じシグニチャのメソッドで、アクセス修飾子だけが異なります。そのため、これらのいずれもオーバーロードの条件を満たしません。よって、選択肢Eが正解です。\n\n【試験対策】\nアクセス修飾子だけが異なるメソッドはオーバーロードと見なされません。メソッドのシグニチャの違いがオーバーロードの必須条件であることを忘れないようにしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "overload",
          "method",
          "access-modifier",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": [
          {
            "title": "基準となるメソッド",
            "code": "void method() {\n    // do something\n}"
          }
        ]
      },
      {
        "id": "ch04-q19",
        "number": 19,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタのアクセス修飾子",
        "prompt": "Sampleというクラスを定義しようと考えている。このクラスに定義するコンストラクタを修飾できるアクセス修飾子についての説明として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "publicなコンストラクタのみ定義できる"
          },
          {
            "key": "B",
            "text": "publicかprotectedなコンストラクタのみ定義できる"
          },
          {
            "key": "C",
            "text": "private以外のコンストラクタが定義できる"
          },
          {
            "key": "D",
            "text": "コンストラクタを修飾するアクセス修飾子に制限はない"
          },
          {
            "key": "E",
            "text": "アクセス修飾子で修飾することはできない"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問19）。",
          "pdfExplanation": "正解：D\n\nコンストラクタのアクセス修飾子に関する問題です。コンストラクタは、生成されたインスタンスがほかのインスタンスから使われる前に、事前準備を整える「前処理」をするためのメソッドの一種です。コンストラクタは、普通のメソッドと同じようにオーバーロードして複数定義することも可能です。\n\nコンストラクタには、次の3つのルールがあります。\n\n・メソッド名をクラス名と同じにすること\n・戻り値型は記述できない\n・newと一緒にしか使えない（インスタンス生成時以外は呼び出しができない）\n\nこのようなルールに従っていれば、コンストラクタは自由に定義できます。設問で問われているアクセス修飾子についても同様で、どのようなアクセス修飾子であっても自由に修飾できます。以上のことから、選択肢Dが正解です。\n\npublicは、どのクラスからでもこのクラスをインスタンス化できることを表します。protectedやデフォルトは、継承関係にあるサブクラスやパッケージ内のクラスだけが、このクラスをインスタンス化できるように制限をかけるために使用します。privateは、非公開なコンストラクタを定義するために使います。非公開なコンストラクタは、そのクラス以外がインスタンスを生成できないように制限したいときに使います。次のコードは、非公開なコン\n\nストラクタを使ったクラス定義の例です。\n\n例　非公開なコンストラクタを使ったクラス定義\n\n```java\npublic class Sample {\n    private Sample() {}\n    public static Sample getInstance() {\n        return new Sample();\n    }\n}\n\n```\n\nこのクラスはコンストラクタが非公開になっているため、ほかのクラスがnewを使ってインスタンス化できないようにしています。もし、インスタンスを取得したければ、staticなgetInstanceメソッドを使うしか方法はありません。このコードを次のように変更すると、そのアプリケーション内でインスタンスが1つしかないことを保証できます。\n\n例　staticなgetInstanceメソッドを使ったインスタンス化\n\n```java\npublic class Sample {\n    private static Sample instance = null;\n    private Sample() {}\n    public static Sample getInstance() {\n        if ( instance == null ) {\n            instance = new Sample();\n        }\n        return instance;\n    }\n}\n\n```\n\nほかにもprivateなコンストラクタは、コンストラクタをオーバーロードして複数定義し、公開するコンストラクタと非公開にするコンストラクタに分けるときにも使えます。外部のクラスがインスタンス化するときには、公開されているコンストラクタを使い、そのコンストラクタ内で非公開のコンストラクタを呼び出すというような使い方です。\n\n例　非公開のコンストラクタの呼び出し\n\n```java\npublic class Sample {\n    public Sample() {\n        this(\"sample\");\n        // do something\n    }\n    private Sample(String val) {\n        // do something\n    }\n}\n\n```\n\nこれはコンストラクタだけに限ったことではありませんが、アクセス修飾子を活用すると設計に幅ができ、多様なソフトウェアを設計できるようになるでしょう。なお、このように公開すべきものと、非公開にすべきものを明確に分け、公開したものだけを使ったプログラミングを促すように設計する原則を「情報隠蔽」と呼びます。\n\n【試験対策】\nコンストラクタはプログラマーが自由に定義できるメソッドの一種です。コンストラクタを定義する際、アクセス修飾子についての制限はなく、public、protected、デフォルト、privateの4つすべてのアクセス修飾子で、コンストラクタを修飾することができます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "tags": [
          "constructor",
          "access-modifier"
        ],
        "status": "pdf_visual_focused_audit",
        "codeBlocks": []
      },
      {
        "id": "ch04-q20",
        "number": 20,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタではないメソッド",
        "prompt": "次のプログラムを確認してください。\n\nこのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「hello.」と表示される"
          },
          {
            "key": "B",
            "text": "「hello.hello.」と表示される"
          },
          {
            "key": "C",
            "text": "Sampleクラスでコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問20）。",
          "pdfExplanation": "正解：A\n\n解答19で学習したように、コンストラクタには、いくつかのルールがありました。\n\n・メソッド名をクラス名と同じにすること\n・戻り値型は記述できない\n・newと一緒にしか使えない（インスタンス生成時以外は呼び出しができない）\n\n本設問は、2番目のルール「戻り値型は記述できない」についての問題です。\n\n設問のSampleクラスでは、コンストラクタを定義しているように見えますが、戻り値型を記述しています。そのため、この定義は通常のメソッドとして解釈されます。コンストラクタではない通常のメソッドの名前が、クラス名と同じではいけないというルールはありません。よって、Sampleクラスでコンパイルエラーが発生することはありませんので、選択肢Cは誤りです。\n\nSampleクラスには、クラス名と同名のメソッドは存在するものの、コンストラクタが存在しません。そのため、コンパイラによってデフォルトコンストラクタが自動的に追加されます（詳細は解答23を参照）。mainメソッドでは、このデフォルトコンストラクタを使ってインスタンスを生成し、その後、Sampleメソッドを呼び出しています。このコードに問題はないため、Mainクラスでコンパイルエラーは発生しません。よって、選択肢Dは誤りです。\n\nデフォルトコンストラクタは、引数なし、処理なしのコンストラクタであるため、コンソールには、Sampleメソッドによって「hello.」が1回だけ表示されます。以上のことから、選択肢Bは誤りで、選択肢Aが正解です。\n\n【試験対策】\nコンストラクタには、戻り値型を定義できません。戻り値型を定義すると、それはコンストラクタではなく、通常のメソッドとして扱われます。ただし、クラス名と同名のメソッドを定義してはいけないというルールはないため、コンパイルエラーにはなりません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.219 / 4章 解説PDF p.254",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    void Sample() {\n        System.out.println(\"hello.\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        s.Sample();\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "method",
          "default-constructor"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "インスタンス初期化子とコンストラクタ",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」と表示される"
          },
          {
            "key": "B",
            "text": "「B」「A」と表示される"
          },
          {
            "key": "C",
            "text": "「A」と表示される"
          },
          {
            "key": "D",
            "text": "「B」と表示される"
          },
          {
            "key": "E",
            "text": "Sampleクラスでコンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問21）。",
          "pdfExplanation": "正解：B\n\nコンストラクタと初期化子に関する問題です。コンストラクタもメソッドの一種であるため、オーバーロードして複数定義することができます。このとき、すべてのコンストラクタで、一部だけ共通の処理をする必要があったとします。そうした場合に、すべてのコンストラクタに同じコードを記述するのは煩雑です。そこで使うのが初期化子です。\n\n初期化子「{}」は、クラスブロック直下にフィールドやメソッド、コンストラクタと並べて記述します。\n\n例　初期化子の記述\n\n```java\npublic class Sample {\n    {\n        // 初期化子で行う共通の前処理\n    }\n}\n\n```\n\n初期化子は、すべてのコンストラクタで共通する前処理を記述するために使用します。そのため、初期化子は、コンストラクタが実行される前に実行されます。設問のSampleクラスであれば、初期化子によってコンソールに「B」と表示された後に、コンストラクタが実行されてコンソールに「A」と表示されます。以上のことから、選択肢Bが正解です。\n\n【試験対策】\n初期化子を使えば、オーバーロードされたすべてのコンストラクタで共通の前処理を宣言できます。\n\n【試験対策】\n初期化子は、コンストラクタよりも先に実行されます。初期化子とコンストラクタの両方が使われている問題では、実行順を間違えないようにしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.221 / 4章 解説PDF p.257",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    Sample() {\n        System.out.println(\"A\");\n    }\n    {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q22",
        "number": 22,
        "type": "single",
        "selectCount": 1,
        "title": "staticフィールドとインスタンス初期化子",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "10が表示される"
          },
          {
            "key": "C",
            "text": "100が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問22）。",
          "pdfExplanation": "正解：A\n\nクラス変数、static初期化子に関する問題です。staticで修飾されたクラス変数は、インスタンスを生成しなくても使える変数です。そのため、初期化子やコンストラクタで、インスタンス生成前にクラス変数の値を初期化することはできません。初期化子もコンストラクタも、インスタンスを生成するタイミングでしか実行されないからです。そのため、Sampleクラスのクラス変数numはデフォルト値で初期化されたまま変更されません。よって、コンソールには0が表示されます。以上のことから選択肢Aが正解です。\n\n次のように、インスタンスの生成後であれば、初期化子、コンストラクタの順に実行されるため、コンソールにはコンストラクタで設定した値である100が表示されます。\n\n例　インスタンスを生成、利用\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Sample.num);\n        Sample s = new Sample();\n        System.out.println(Sample.num);\n    }\n}\n\n```\n\nもし、クラス変数を初期化するための何らかの処理を記述したいのであれば、初期化子ではなく、static初期化子を使います。static初期化子は、クラスがロードされたタイミングで実行されるため、クラスメソッドやクラス変数が使われる直前に実行できる処理を記述できます。次のコードは、初期化子をstatic初期化子に変更した例です。\n\n例　static初期化子\n\n```java\npublic class Sample {\n    static int num;\n    static {\n        num = 10;\n    }\n    public Sample() {\n        num = 100;\n    }\n}\n\n```\n\nこのように変更すれば、インスタンスを生成しなかった場合には10が表示されます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.222 / 4章 解説PDF p.258",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    static int num;\n    {\n        num = 10;\n    }\n    public Sample() {\n        num = 100;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(Sample.num);\n    }\n}"
          }
        ],
        "tags": [
          "field/static/scope",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q23",
        "number": 23,
        "type": "single",
        "selectCount": 1,
        "title": "デフォルトコンストラクタの有無",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「null」と表示される"
          },
          {
            "key": "C",
            "text": "何も表示されない"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問23）。",
          "pdfExplanation": "正解：D\n\nコンストラクタに関する問題です。コンストラクタは、インスタンスの準備をするために必ず定義されなくてはいけません。しかし、すべてのクラスに何らかの準備が必要なわけではありません。そのため、コンストラクタの定義は省略することができます。もし、プログラマーがコンストラクタの定義を省略した場合、コンパイラは引数なしのコンストラクタをコンパイル時に追加します。この自動的に追加されるコンストラクタのことを、「デフォルトコンストラクタ」と呼びます。\n\nたとえば、次のような中身のないクラスを定義し、コンパイルします。\n\n例　Testクラスの定義\n\n```java\npublic class Test {}\n\n```\n\nコンパイル後に出力されたクラスファイルの内容を確認すると、何も中身がなかったはずのクラスに、コンストラクタが追加されていることがわかります。\n\n例　Testクラスの内容\n\n```text\nCompiled from \"Test.java\"\npublic class Test {\n  public Test();  ← コンストラクタの定義（ここから下の4行が処理内容）\n    Code:\n       0: aload_0\n       1: invokespecial #8  // Method java/lang/Object.\"<init>\":()V\n       4: return\n}\n\n```\n\nデフォルトコンストラクタは、プログラマーがコンストラクタを1つも定義しなかった場合にのみ、追加されます。もし、プログラマーが1つでもコンストラクタを定義すれば、デフォルトコンストラクタは追加されません。\n\n設問のSampleクラスには、String型の引数を受け取るコンストラクタが1つ定義されています。もう1つクラス名と同名のメソッドがありますが、戻り値型が記述されているため、コンストラクタではなく、通常のメソッドとして解釈されます。\n\nMainクラスの3行目に記述しているコードは、Sampleのインスタンスを生成する際に、「引数なしのコンストラクタを使って準備しなさい」という意味です。しかし、Sampleクラスに定義されているのはString型を1つ受け取るコンストラクタだけです。このコンストラクタが定義されているため、デフォルトコンストラクタは追加されません。したがって、「引数なしのコンストラクタは存在しない」という旨のコンパイルエラーが発生します。\n\n以上のことから、選択肢Dが正解です。\n\n【試験対策】\nプログラマーが明示的にコンストラクタを定義した場合は、デフォルトコンストラクタは追加されません。\n\n【参考】\nコンパイルされたクラスファイルの内容を確認するには、javapコマンドを使用します。詳細は、javap -helpコマンドを実行してヘルプを参照してください。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.223 / 4章 解説PDF p.259",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    void Sample() {\n        System.out.println(\"A\");\n    }\n    Sample(String str) {\n        System.out.println(str);\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "thisによるコンストラクタ呼び出し",
        "prompt": "次のプログラムを実行し、コンソールに「ok.」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "Sample(null, 0);"
          },
          {
            "key": "B",
            "text": "this(null, 0);"
          },
          {
            "key": "C",
            "text": "super(null, 0);"
          },
          {
            "key": "D",
            "text": "this.Sample(null, 0);"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問24）。",
          "pdfExplanation": "正解：B\n\nコンストラクタは、いくつかのルールがあるものの、メソッドの一種です。そのため、オーバーロードして複数定義することも可能です。本設問は、オーバーロードされたコンストラクタから、別のコンストラクタを呼び出す方法についての問題です。\n\nオーバーロードされたコンストラクタから、別のコンストラクタを呼び出すにはthisを使います。選択肢Aのようにコンストラクタ名を記述することはできません。これは、外部のクラスがインスタンスを生成するときに使用するコンストラクタを指定するための方法です。よって、選択肢Aは誤りで、選択肢Bが正解です。\n\n選択肢Cで使われているsuperは、スーパークラスのコンストラクタを呼び出すときに使うキーワードです。Sampleクラスは何のクラスも継承していないため、自動的にjava.lang.Objectクラスを継承しているものと解釈されます。当然ながら、Objectクラスのコンストラクタに「ok.」と表示するものはありません。よって、選択肢Cも誤りです。\n\nJavaのthisには、2つの用途があります。1つがオーバーロードされた別のコンストラクタを呼び出すときに使うthisです。もう1つはインスタンスそのものを表す参照を入れる特別な変数として使う場合です。選択肢Dは、後者に相当するもので、そのインスタンスが持つSampleというメソッドを呼び出そうとしています。よって、選択肢Dも誤りです。\n\n【試験対策】\nコンストラクタ内から、オーバーロードされた別のコンストラクタを呼び出すにはthisを使います。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.223-224 / 4章 解説PDF p.260",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public Sample() {\n        // ここにコードを入れる\n    }\n    public Sample(String str, int num) {\n        System.out.println(\"ok.\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "field/static/scope",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q25",
        "number": 25,
        "type": "single",
        "selectCount": 1,
        "title": "this呼び出し位置",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    public Sample() {\n        System.out.println(\"A\");\n        this(\"B\");\n    }\n    public Sample(String str) {\n        System.out.println(str);\n    }\n}"
          },
          {
            "title": "Mainクラス",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「A」「B」と表示される"
          },
          {
            "key": "B",
            "text": "「B」「A」と表示される"
          },
          {
            "key": "C",
            "text": "「A」と表示される"
          },
          {
            "key": "D",
            "text": "「B」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問25）。",
          "pdfExplanation": "正解：E\n\nthisを使った別のコンストラクタの呼び出しに関する問題です。解答24では、オーバーロードされた別のコンストラクタをコンストラクタ内で呼び出すには、thisを使うことを学びました。別のコンストラクタを呼び出すときに注意すべきルールが1つあります。オーバーロードされた別のコンストラクタを呼び出すコードは、最初に記述しなければいけないというルールです。つまりこれは、thisを使って別のコンストラクタを呼び出す前に、何らかの処理を記述してはいけないということを意味します。\n\n設問のSampleクラスに定義されている引数なしのコンストラクタでは、thisを使ってString型の引数を受け取る別のコンストラクタを呼び出しています。\n\nしかし、その前にコンソールに「A」を表示するコードを記述しているため、コンパイルエラーが発生します。以上のことから、選択肢Eが正解です。\n\n【試験対策】\nthisを使って、コンストラクタ内から、オーバーロードされたコンストラクタを呼び出す場合、コンストラクタ呼び出しのコードよりも前には処理を記述できません。記述するとコンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.221 / 4章 解説PDF p.261",
        "tags": [
          "constructor",
          "field/static/scope",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q26",
        "number": 26,
        "type": "single",
        "selectCount": 1,
        "title": "パッケージアクセスとstatic文脈",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "codeBlocks": [
          {
            "title": "Parent.java",
            "code": "package ex26;\n\npublic class Parent {\n    int num = 10;\n}"
          },
          {
            "title": "Child.java",
            "code": "package other;\nimport ex26.Parent;\n\npublic class Child extends Parent {\n    public static void main(String[] args) {\n        System.out.println(num);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "10が表示される"
          },
          {
            "key": "C",
            "text": "Childクラスの4行目でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "Childクラスの6行目でコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問26）。",
          "pdfExplanation": "正解：D\n\nほかのパッケージに属するクラスからフィールドへのアクセス制御に関する問題です。Javaのプログラムには、ほかのクラスから、クラスやフィールド、メソッドなどへのアクセスを制御するためのアクセス修飾子が用意されています。利用できるアクセス修飾子には、次の4種類があります。\n\n【アクセス修飾子】\n\n```text\n修飾子          説明\npublic          すべてのクラスからアクセス可能\nprotected       同じパッケージに属するか、継承しているサブクラスからのみアクセス可能\nなし（デフォルト） 同じパッケージに属するクラスからのみアクセス可能\nprivate         クラス内からのみアクセス可能\n\n```\n\n4つのアクセス修飾子のうち、間違えやすいのは「protected」と「なし（デフォルト）」の違いです。どちらも同じパッケージに属するクラスからのアクセスを受け付ける点は同じですが、スーパークラスとは別のパッケージに属するサブクラスからのアクセスについては異なります。protectedなフィールドやメソッドは、異なるパッケージに属するサブクラスからアクセスできます。一方、アクセス修飾子を指定しなかった場合は、たとえサブクラスであっても別のパッケージに属するクラスからはアクセスできません。\n\nなお、クラス宣言に使えるアクセス修飾子は、publicとなし（デフォルト）の2種類です。privateはインナークラスの宣言時に限って利用できます。フィールドやメソッドは、4種類とも利用可能です。\n\n設問のParentとChildの2つのクラスは、それぞれ異なるパッケージに属しており、さらにChildはParentを継承しています。この2つのクラスの関係を図で表すと、次のとおりです。\n\n【設問のクラスの関係】\n\n```text\nParent  ←  Child\n\n```\n\nParentのnumフィールドには、アクセス修飾子が付いていません。そのため、このフィールドは同じパッケージに属するクラスからしかアクセスできません。それにもかかわらず、Childクラスのmainメソッドでは、numの値をコンソールに出力しようとしています。そのため、Childクラスの6行目でコンパイルエラーが発生します。以上のことから、選択肢Dが正解です。\n\n【試験対策】\n設問の2つのクラスの関係は、「ParentクラスとChildクラスは異なるパッケージに属している」かつ「ChildクラスはParentクラスを継承しており、Parentクラスのnumを使おうとしている」です。これにより、以下のことがいえます。\n・Childクラスに「import ex26.Parent;」が記述されているので完全修飾クラス名での記述は不要\n・numにはアクセス修飾子が指定されていないので、他パッケージからはアクセス不可\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.222 / 4章 解説PDF p.262",
        "tags": [
          "package/import",
          "field/static/scope",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q27",
        "number": 27,
        "type": "single",
        "selectCount": 1,
        "title": "protectedメンバのアクセス",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Bookクラス",
            "code": "package other;\n\npublic class Book {\n    private String isbn;\n    public void setIsbn(String isbn) {\n        this.isbn = isbn;\n    }\n    protected void printInfo() {\n        System.out.println(isbn);\n    }\n}"
          },
          {
            "title": "StoryBookクラス",
            "code": "package ex27;\nimport other.Book;\n\npublic class StoryBook extends Book {}"
          },
          {
            "title": "Mainクラス",
            "code": "package ex27;\n\npublic class Main {\n    public static void main(String[] args) {\n        StoryBook story = new StoryBook();\n        story.setIsbn(\"xxx-x-xxxxx-xx-x\");\n        story.printInfo();\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「null」と表示される"
          },
          {
            "key": "B",
            "text": "「xxx-x-xxxxx-xx-x」と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問27）。",
          "pdfExplanation": "正解：C\n\n異なるパッケージに属するクラスからフィールドへのアクセス制御に関する問題です。解答26で解説したとおり、Javaではクラスやフィールド、メソッドに対するアクセスを制御できます。設問のクラスをUMLのクラス図で表現すると、次の図のようになります。\n\n【設問のクラスの関係】\n\n```text\nother                         ex27\n+-------------------+         +----------------------+\n| Book              |         | StoryBook            |\n| - isbn            | <------ |----------------------|\n| + setIsbn(isbn)   |         | Main                 |\n| # printInfo()     |         | + main(args)         |\n+-------------------+         +----------------------+\n\n```\n\nBookクラスのフィールドやメソッドに付いている「-」や「+」といった記号は、UMLでは「可視性」と呼ばれ、アクセス修飾子の種類を表します。Javaのアクセス修飾子とUMLの可視性は次のように対応します。\n\n【Javaのアクセス修飾子とUMLの可視性】\n\n```text\nアクセス修飾子      可視性\npublic              +\nprotected           #\nなし                ~\nprivate             -\n\n```\n\n図からもわかるとおり、Bookクラスのisbnフィールドはprivateで修飾されており非公開なフィールドです。Bookクラスには2つのメソッドがあり、setIsbnメソッドはpublicですが、printInfoメソッドはprotectedである点に注意しましょう。\n\nprotectedは、同じパッケージに属する、もしくは継承関係にあるクラスのみにアクセスを許可する修飾子です。StoryBookクラスはBookクラスを継承しているため、StoryBookのインスタンスはBookの特徴を引き継ぎます。StoryBookのインスタンスは、BookとStoryBookの2つのクラスの特徴を併せ持っていますが、StoryBookクラスの定義にBookクラスの定義が含まれているわけではありません。インスタンスは1つのクラスから作られているのではなく、次の図のように複数のクラスの定義から作られているのです。\n\n【BookとStoryBookの関係】\n\n```text\nBook              ←  StoryBook\n  ↓                    ↓\nStoryBookのインスタンス（Book由来部分 + StoryBook由来部分）\n\n```\n\nこの図からわかるとおり、StoryBookのインスタンスが引き継いだ特徴は、Bookに定義されたものです。そのため、StoryBookのインスタンスだからといって、printInfoメソッドが持っているアクセス修飾子「protected」の意味が変わるわけではありません。\n\n【Book、StoryBook、Mainの関係】\n\n```text\notherパッケージのBook\n  - isbn\n  + setIsbn(isbn)\n  # printInfo()\n        ↓\nex27パッケージのStoryBook\n        ↑\nex27パッケージのMain.main(args) から StoryBookのインスタンスへアクセス\n\n```\n\nそのため、図のようにMainクラスのmainメソッドからprintInfoメソッドを呼び出すことはできません。以上のことから、選択肢Cが正解です。\n\n【試験対策】\nインスタンスは1つのクラスから作られているのではなく、図【BookとStoryBookの関係】のように複数のクラスの定義から作られていることを理解しましょう。本設問のように継承関係にあるクラスのソースコードを見て解答する問題では、ソースコードで考えるだけでなく、UMLや上の図のようなイメージを描いて関係を考えるとよいでしょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.223 / 4章 解説PDF p.263",
        "tags": [
          "package/import",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q28",
        "number": 28,
        "type": "single",
        "selectCount": 1,
        "title": "プリミティブ引数は値渡し",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    int num;\n    public Sample(int num) {\n        this.num = num;\n    }\n}"
          },
          {
            "title": "Mainクラス",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample(10);\n        modify(s.num);\n        System.out.println(s.num);\n    }\n    private static void modify(int num) {\n        num *= 2;\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "10が表示される"
          },
          {
            "key": "B",
            "text": "20が表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問28）。",
          "pdfExplanation": "正解：A\n\nメソッドの引数がプリミティブ型であるときに、呼び出し先のメソッドの値がどのように渡されるかを問う問題です。メソッドは、処理に必要なデータを引数として受け取ります。このとき、呼び出し元と呼び出し先のメソッドでやり取りされるデータは、コピーされて渡されます。2つのメソッドで同じデータを共有することはありません。\n\n【値渡し】\n\n```text\nメソッド内で使っているデータ 2\n        ↓ コピーされて引数として渡される\n呼び出し先メソッドの引数 2\n\n```\n\n設問のコードでは、10という値を渡したコンストラクタを使って、Sampleクラスのインスタンスを生成しています。Sampleクラスのコンストラクタでは、引数の値でnumフィールドを初期化します。その後、modifyメソッドを呼び出していますが、numフィールドの値を引数に渡しています。前述のとおり、メソッド呼び出し時の引数は値をコピーして渡します。そのため、numフィールドそのものが渡されるのではなくnumフィールドの値がコピーされて、modifyメソッドに渡されます。\n\nmodifyメソッドでは、引数の値を2倍にして変数numに代入し直しています。この変数numは引数で宣言した変数であり、Sampleインスタンスのnumフィールドと同じ変数名ですが、まったく関係ありません。つまり、modifyメソッドは引数を変数numで受け取り、その値を2倍にして、変数numに再代入しているだけです。\n\nそのため、Sampleのインスタンスが持つnumフィールドの値は変更されることなく、コンソールにはコンストラクタで設定した10という値が表示されます。以上のことから、選択肢Aが正解です。\n\n【試験対策】\nプリミティブ型の値をメソッドに渡すとき、その値はコピーされて渡されます。そのため、呼び出したメソッド内で値が変更されても、呼び出し元の値は変わりません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.225 / 4章 解説PDF p.265",
        "tags": [
          "main/args",
          "exception",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q29",
        "number": 29,
        "type": "single",
        "selectCount": 1,
        "title": "参照経由のフィールド変更",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    int num;\n    public Sample(int num) {\n        this.num = num;\n    }\n}"
          },
          {
            "title": "Mainクラス",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample(10);\n        modify(s);\n        System.out.println(s.num);\n    }\n    private static void modify(Sample s) {\n        s.num *= 2;\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "10が表示される"
          },
          {
            "key": "B",
            "text": "20が表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問29）。",
          "pdfExplanation": "正解：B\n\n解答28で、呼び出し関係にあるメソッドでやり取りされるデータはコピーされて渡されることを学びました。問題28はプリミティブ型の変数を使った出題でしたが、本設問はオブジェクト型の変数を使った出題です。\n\nオブジェクト型の変数が持つことができるのはオブジェクトそのものではなく、インスタンスへの参照（リンク情報）です。そのため、メソッド呼び出しの引数として、オブジェクト型変数を渡した場合には、変数が持っている参照がコピーされて渡されます。\n\n【参照渡し】\n\n```text\nメソッド内で使っているデータ\n        ↓ コピーされて引数として渡される\n呼び出し元とは関係を持たないデータ\n\n値としての参照は異なるが、\n参照先にあるインスタンスは同じ\n\n```\n\nこの図からわかるとおり、メソッド呼び出し時に参照はコピーされるため、呼び出し元と呼び出し先のメソッドが持っている参照は異なるものです。しかし、それぞれの参照が示す参照先にあるインスタンスは同じものであることに注意してください。\n\n設問のコードでは、Sampleのインスタンスを生成し、そのインスタンスへの参照を引数にmodifyメソッドを呼び出しています。呼び出し時に参照はコピーされるため、mainメソッドとmodifyメソッドは、それぞれ異なる参照を保持しています。ただし、どちらの参照先にあるインスタンスも同じものです。そのため、modifyメソッドでインスタンスのnumフィールドの値を2倍にすると、mainメソッドでコンソールに表示するフィールド値は変更後のものになります。以上のことから、選択肢Bが正解です。\n\n【試験対策】\nオブジェクト型の引数では、呼び出し元から呼び出し先のメソッドに参照値がコピーされて渡されます。そのため、2つのメソッドから参照するインスタンスは同じになります。メソッドの引数がプリミティブ型なのか、参照型なのかは重要なポイントなので、必ずチェックしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.226 / 4章 解説PDF p.266",
        "tags": [
          "field/static/scope",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q30",
        "number": 30,
        "type": "single",
        "selectCount": 1,
        "title": "パターン変数のスコープ",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Aクラス",
            "code": "public class A {\n    public void test() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "Bクラス",
            "code": "public class B extends A {\n    @Override\n    public void test() {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        A[] array = {new A(), new B(), new A(), new B()};\n        for (A a : array) {\n            if (a instanceof B b) {\n                a.test();\n            } else {\n                b.test();\n            }\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "ABABが表示される"
          },
          {
            "key": "B",
            "text": "BBBBが表示される"
          },
          {
            "key": "C",
            "text": "AAAAが表示される"
          },
          {
            "key": "D",
            "text": "ABBAが表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーになる"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問30）。",
          "pdfExplanation": "正解：E\n\ninstanceof演算子のパターンマッチングに関する問題です。Javaには、「同じ」かどうかを判定する3種類の方法があります。1つ目は、==演算子を使った同一性の確認です。この演算子を使うことで、2つの変数の参照先が同じインスタンスであるかどうかを確認することができます。2つ目は、equalsメソッドをオーバーライドして利用する同値性の確認です。\n\n例　instanceof演算子がfalseを戻す場合\n\n```java\npublic class Sample {\n    public static void main(String[] args) throws Exception {\n        test(new C());\n    }\n    private static void test(A a) {\n        if (a instanceof B) {\n            B b = (B) a;\n            b.hello();\n        }\n    }\n}\n\n```\n\nこの例では、instanceof演算子を使って、変数aの参照先が、B型と互換性があるかを確認しています。前述のとおり、CクラスにはBクラスと互換性がないため、この演算子はfalseを戻します。そのためif文のブロックは実行されず、コンソールには何も表示されることなく終了します。たとえば次のように、testメソッドにCクラスではなくBクラスのインスタンスへの参照を渡せば、コンソールには「B」と表示されます。\n\n例　instanceof演算子がtrueを戻す場合\n\n```java\npublic class Sample {\n    public static void main(String[] args) throws Exception {\n        test(new B());\n    }\n    private static void test(A a) {\n        if (a instanceof B) {\n            B b = (B) a;\n            b.hello();\n        }\n    }\n}\n\n```\n\ninstanceof演算子は、型の互換性を確認するための演算子です。そのため、次のようにBクラスを継承したDクラスのインスタンスへの参照を渡しても正しく動作します。\n\n例　サブクラスのインスタンスへの参照を渡してもtrueを戻す\n\n```java\npublic class D extends B {\n    @Override\n    public void hello() {\n        System.out.println(\"D\");\n    }\n}\n\npublic class Sample {\n    public static void main(String[] args) throws Exception {\n        test(new D());\n    }\n    private static void test(A a) {\n        if (a instanceof B) {\n            B b = (B) a;\n            b.hello();\n        }\n    }\n}\n\n```\n\nこのコードを実行すると、オーバーライドされたhelloメソッドが実行され、コンソールには「D」と表示されます。\n\nこのように、ダウンキャストするときには、型の互換性を確認するためにinstanceof演算子は欠かせません。2021年にリリースされたJava SE 16では、この演算子が改良され、より短いコードで記述できるようになりました。従来のコードでは、まずinstanceof演算子を使って型の互換性を確認してからダウンキャストする必要がありましたが、SE 16以降は、型の互換性のチェックとダウンキャストを一度に記述できるようになりました。\n\n次のコード例は、先ほどのコードを新しいinstanceof演算子の記法で書き換えたものです。修正後のコード例を見てみると、ダウンキャストしていた箇所がなくなり、コード量が少し減って簡潔になったことがわかります。このような互換性の確認とダウンキャストを一度に行うinstanceof演算子の使い方を「instanceof演算子のパターンマッチング」と呼びます。\n\n例　互換性の確認とダウンキャストを一度に行う\n\n```java\npublic class Sample {\n    public static void main(String[] args) throws Exception {\n        test(new D());\n    }\n    private static void test(A a) {\n        if (a instanceof B b) {\n            b.hello();\n        }\n    }\n}\n\n```\n\nパターンマッチング機能は、演算子の左オペランドの変数の参照先が、右オペランドに宣言した「パターン変数」の型と互換性があれば、その参照をパターン変数に代入します。上のコード例の場合、6行目のinstanceof演算子は、変数aの参照先がB型と互換性があれば、変数bに代入してtrueを戻すのです。\n\ninstanceof演算子のパターン変数には、ローカル変数の宣言と同様にスコープ（有効範囲）があります。たとえばif文の条件式として宣言されたパターン変数はifブロック内でしか利用できず、続くelse-ifブロックやelseブロックで利用することはできません。次のコード例は、先ほどのコード例にelseブロックを追加し、そこでパターン変数を利用しようとしています。このコードはコンパイルエラーになります。\n\n例　パターン変数のスコープ\n\n```java\npublic class Sample {\n    public static void main(String[] args) throws Exception {\n        test(new D());\n    }\n    private static void test(A a) {\n        if (a instanceof B b) {\n            b.hello();\n        } else {\n            b.hello(); // スコープの範囲外\n        }\n    }\n}\n\n```\n\n次のコード例では、パターン変数bと同じ名称を持つフィールドbが宣言されています。この場合は、パターン変数のスコープ内であればパターン変数が、スコープ外であればフィールドが利用されます。そのため、4行目でtestメソッドの引数として渡す参照がBクラスと互換性のないCクラスであれば、elseブロックの処理が実行され、フィールドbが利用されます。\n\n例　パターン変数とフィールド\n\n```java\npublic class Sample {\n    private static B b = new B();\n    public static void main(String[] args) throws Exception {\n        test(new C());\n    }\n    private static void test(A a) {\n        if (a instanceof B b) {\n            b.hello();\n        } else {\n            b.hello();\n        }\n    }\n}\n\n```\n\n設問のコードでは、パターン変数bは宣言されているifブロックではなく、elseブロックで使われています。そのため、スコープ外での利用となりコンパイルエラーが発生します。以上のことから、選択肢Eが正解です。\n\n【試験対策】\ninstanceof演算子で利用されるパターン変数のスコープを確認しましょう。スコープ外で利用している場合には、同名のフィールドを確認しましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.226-227 / 4章 解説PDF p.267",
        "tags": [
          "field/static/scope",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q31",
        "number": 31,
        "type": "single",
        "selectCount": 1,
        "title": "レコードの説明",
        "prompt": "レコードに関する説明として、誤っているものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "java.lang.Recordクラスを継承したクラスとして宣言されている"
          },
          {
            "key": "B",
            "text": "レコードを拡張したサブクラスを作ることができる"
          },
          {
            "key": "C",
            "text": "フィールドを初期化するために必要な引数を受け取るコンストラクタが宣言されている"
          },
          {
            "key": "D",
            "text": "フィールド名と同じ名前のgetterメソッドが定義されている"
          },
          {
            "key": "E",
            "text": "toString、hashCode、equalsの3つのメソッドが定義されている"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問31）。",
          "pdfExplanation": "正解：B\n\nレコードに関する問題です。レコードは、Java SE 16から導入されたもので、データを保持する変更不可能なクラスを簡単に記述するための機能です。Pythonなど別の言語では「名前付きタプル」と呼ばれます。\n\n「タプル」とは、名前、年齢、住所など、関係する複数のデータをまとめて1つの単位として扱うデータ構造のことです。タプルでは、構成するデータ要素を配列のように番号で扱うため、どのデータにアクセスしているのかわかりにくいという側面がありました。そこで、データ要素に名前を付けてア\n\nクセスできるようにしたものが「名前付きタプル」です。レコードが導入される以前のJavaであっても、次のようにpublicなフィールドを持つクラスを作ることで、名前付きタプルを実現できます。\n\n例　名前付きタプルNamingTuple\n\n```java\npublic class NamingTuple {\n\n    public final String name;\n    public final int age;\n    public final String address;\n\n    public NamingTuple(String name, int age, String address) {\n        super();\n        this.name = name;\n        this.age = age;\n        this.address = address;\n    }\n}\n\n```\n\nこのクラスからわかるとおり、名前付きタプルの特徴は次のようなものです。\n\n・一度保持したデータは変更できない（不変である）\n・アクセサメソッドを経由せず、フィールドに直接アクセスする（簡易である）\n\nこれらの特徴は、データを交換するようなときに便利です。データを交換するときにはデータへのアクセスは簡易であったほうがよく、意図せずに変更されたりすることがないほうがよいからです。\n\nもっとも、前述の名前付きタプルを実際にJavaのプログラムとして扱うには、実装すべきメソッドがいくつかあります。たとえばこのクラスをコレクションなどで扱ったりするのであれば、次のコードのようにhashCodeメソッドやequalsメソッドなどのオーバーライドは不可欠です。また、ここでは省略していますが、デバッグなどを考えるとtoStringメソッドもオーバーライドしておいたほうがよいでしょう。\n\n例　NamingTupleクラスの実装\n\n```java\nimport java.util.Objects;\n\npublic class NamingTuple {\n\n    public final String name;\n    public final int age;\n    public final String address;\n\n    public NamingTuple(String name, int age, String address) {\n        super();\n        this.name = name;\n        this.age = age;\n        this.address = address;\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(address, age, name);\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj)\n            return true;\n        if (obj == null)\n            return false;\n        if (getClass() != obj.getClass())\n            return false;\n        NamingTuple other = (NamingTuple) obj;\n        return Objects.equals(address, other.address)\n                && age == other.age\n                && Objects.equals(name, other.name);\n    }\n}\n\n```\n\nコード例のhashCodeメソッドやequalsメソッド、publicなコンストラクタなどは、必要なメソッドではありますが、何度も繰り返し記述するのは面倒です。そこで、これらを自動的に作ってくれる機能が導入されました。それがレコードです。\n\nまず、上の名前付きタプルのコード例をレコードに置き換えてみたものを見てみましょう。\n\n例　レコードの宣言（Customer.java）\n\n```java\npublic record Customer(String name, int age, String address) {\n\n}\n\n```\n\nこのように、何も宣言していないように見えるほど、コード量が減ったことがわかります。驚くべきことに、たったこれだけのコードで、このレコードには次のメソッドが自動的に実装されます。\n\n・toStringメソッド\n・hashCodeメソッドとequalsメソッド\n・getterメソッド（フィールドの値を戻すためのメソッド）\n・publicなコンストラクタ\n\nこのレコードを利用すると、次のように各メソッドがちゃんと実装されており、利用できることがわかります。\n\n例　レコードの利用例\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n\n        Customer a = new Customer(\"A\", 20, \"Tokyo\");\n        System.out.println(a.name());\n        System.out.println(a.toString());\n        System.out.println(a.hashCode());\n\n        Customer b = new Customer(\"B\", 20, \"Osaka\");\n        System.out.println(a.equals(b));\n    }\n}\n\n```\n\n次が動作させてみた結果です。正しく動作していることがわかります。\n\n```text\n> java Sample\nA\nCustomer[name=A, age=20, address=Tokyo]\n81052339\nfalse\n\n```\n\nこのように、複数のデータをまとめた複合データを表現しつつ、必須となる基本的なメソッドを自動的に実装してくれるのがレコードです。javapコマンドを使って、レコードをclassファイルから逆コンパイルしてみると、次のような結果が出力されます（メソッドのシグニチャのみ抜粋）。\n\n例　レコードを逆コンパイル\n\n```text\n> javap -c Customer\nCompiled from \"Customer.java\"\npublic final class Customer extends java.lang.Record {\n  public Customer(java.lang.String, int, java.lang.String);\n  ... 省略 ...\n  public java.lang.String name();\n  ... 省略 ...\n  public int age();\n  ... 省略 ...\n  public java.lang.String address();\n  ... 省略 ...\n  public final java.lang.String toString();\n  ... 省略 ...\n  public final int hashCode();\n  ... 省略 ...\n  public final boolean equals(java.lang.Object);\n  ... 省略 ...\n}\n\n```\n\nこのjavapコマンドの結果を見てみると次のようなことがわかります。\n\n・コンパイル後は普通のクラスである\n・java.lang.Recordクラスを継承したクラスとして宣言されている\n・finalで修飾されており、サブクラスを作れない\n・フィールドを初期化するために必要な引数を受け取るコンストラクタが宣言されている\n・フィールド名と同じ名前のgetterメソッドが定義されている（getという接頭辞は付かない）\n・toString、hashCode、equalsの3つメソッドが定義されている\n\nレコードを宣言するには、recordキーワードに続いて型名を宣言し、続いてレコードの構成要素を宣言します。コンパイルすると、レコードの型名はクラス名に、レコードの構成要素はフィールドになります。\n\n構文\n\n```java\nアクセス修飾子 record 型名(カンマ区切りで構成要素の列挙) {\n\n}\n\n```\n\nたとえば、次のように宣言すると、Customerという名前の型名で、String型のname、int型のage、String型のaddressという3つの構成要素を持ったレコードを定義したことになります。\n\n例　Customerレコードの定義\n\n```java\npublic record Customer(String name, int age, String address) {\n\n}\n\n```\n\nこのように、レコードはデータをやりとりするためのオブジェクトを作ることを簡素化し、とても効率的に開発ができるようにしてくれる便利な機能です。\n\n設問の選択肢では、レコードを継承したサブクラスを作れるとした選択肢Bが誤った説明です。レコードはfinalで修飾されており継承できません。よって、選択肢Bが正解です。\n\n【試験対策】\nレコードは、java.lang.Recordクラスを継承したfinalクラスです。toString、hashCode、equalsといった基本的なメソッドのほかに、フィールド名と同じ名前のgetterメソッドが定義されています。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.227 / 4章 解説PDF p.273",
        "tags": [
          "record",
          "string/reference",
          "inheritance/polymorphism",
          "constructor"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q32",
        "number": 32,
        "type": "multi",
        "selectCount": 2,
        "title": "トップレベルrecordの修飾子",
        "prompt": "独立して定義されるレコードに使える修飾子として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "public"
          },
          {
            "key": "B",
            "text": "修飾子なし"
          },
          {
            "key": "C",
            "text": "protected"
          },
          {
            "key": "D",
            "text": "private"
          },
          {
            "key": "E",
            "text": "abstract"
          },
          {
            "key": "F",
            "text": "sealed"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問32）。",
          "pdfExplanation": "正解：A、B\n\nレコードの宣言に関する問題です。レコードを宣言できる箇所はクラスの宣言と同じです。クラスが独立したクラス（トップレベルクラス）やクラス内のメンバとして宣言するインナークラス、メソッド内で宣言するローカルクラスとして宣言できるように、レコードもトップレベルレコード、インナーレコード、ローカルレコードとして宣言できます。これは前問で解説したように、コンパイルするとレコードはクラスになることからもわかります。\n\nレコードの宣言に利用できるアクセス修飾子も、同様の理由でクラスの宣言と同じです。トップレベルレコードは、publicかアクセス修飾子なし（デフォルト）が選べます。インナーレコードであれば、protectedやprivateも選ぶことができます。ローカルレコードには、そもそもアクセス修飾子を付けることはできません。\n\nなお、レコードは暗黙的にfinalで修飾されており、継承してサブクラスを定義することはできません。そのため、abstractやsealedといった継承をすることを前提とした修飾子で修飾することはできません。以上のことから、選択肢AとBが正解です。選択肢CとDは、独立して定義されるトップレベルレコードには使えません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.227 / 4章 解説PDF p.273",
        "tags": [
          "record",
          "sealed"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q33",
        "number": 33,
        "type": "single",
        "selectCount": 1,
        "title": "recordのインスタンス生成",
        "prompt": "次のレコードのインスタンスを生成し、利用するコードとして正しいものを選びなさい。（1つ選択）",
        "codeBlocks": [
          {
            "title": "Data.java",
            "code": "public record Data(String value) {\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Data data = new Data();\ndata.value = \"sample\";"
          },
          {
            "key": "B",
            "text": "Data data = Data.of(\"sample\");"
          },
          {
            "key": "C",
            "text": "Data data = Data.value(\"sample\");"
          },
          {
            "key": "D",
            "text": "Data data = new Data(\"sample\");"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問33）。",
          "pdfExplanation": "正解：D\n\nレコードのインスタンスを生成するには、通常のクラスと同じようにnewを使います。コンストラクタは宣言していませんが、レコードの構成要素の宣言と同じ引数を受け取るコンストラクタが暗黙的に宣言されているため利用できます。たとえば、次のようなレコードがあったとしましょう。\n\n例　Customerレコードのコード例\n\n```java\npublic record Customer(String name, int age, String address) {\n\n}\n\n```\n\nこのレコードのインスタンスを生成するには、次のようにnewを使います。\n\n例　Customerレコードのインスタンスを生成\n\n```java\nCustomer a = new Customer(\"A\", 20, \"Tokyo\");\n\n```\n\nなお、レコードには暗黙的に宣言されているコンストラクタがあるため、引数を持たない「デフォルトコンストラクタ」はありません。クラスの宣言時に明示的なコンストラクタがあれば、デフォルトコンストラクタが追加されないのと同じです（解答23を参照）。よって、次のように引数なしのコンストラクタを利用したコードは、コンパイルエラーとなります。\n\n例　引数なしのコンストラクタは利用できない\n\n```java\nCustomer a = new Customer();\n\n```\n\n引数なしのコンストラクタが使えるのは、フィールドになる構成要素を持たないレコードだけです。ただ、そのようなレコードは構文上可能であっても、データの受け渡しに利用するという目的を果たせず、よほど特殊な用途以外にメリットは考えられません。\n\n以上のことから、選択肢Dが正解となります。選択肢Aのように引数なしのコ\n\nンストラクタは、フィールドを持つレコードにはありません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.228 / 4章 解説PDF p.279",
        "tags": [
          "record",
          "string/reference",
          "constructor"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q34",
        "number": 34,
        "type": "single",
        "selectCount": 1,
        "title": "recordに宣言できないもの",
        "prompt": "レコードに宣言することができるものとして、誤っているものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "コンストラクタ"
          },
          {
            "key": "B",
            "text": "メソッド"
          },
          {
            "key": "C",
            "text": "staticではないフィールド"
          },
          {
            "key": "D",
            "text": "staticフィールド"
          },
          {
            "key": "E",
            "text": "static初期化子"
          },
          {
            "key": "F",
            "text": "インナークラスやインナーインタフェース"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問34）。",
          "pdfExplanation": "正解：C\n\nレコード内には、次のものを宣言することができます。\n\n・コンストラクタ\n・メソッド\n・staticフィールド\n・static初期化子\n・インナークラスやインナーインタフェース\n\nレコードには、宣言した構成要素名と同じ名前のフィールドが、コンパイル時に自動的に生成されます。たとえば、次のような構成要素を持つレコードを宣言した場合、自動的にname、age、addressという3つのフィールドが自動的に生成されます。\n\n例　Customerレコードのコード例\n\n```java\npublic record Customer(String name, int age, String address) {\n    void test() {\n        System.out.println(name);\n    }\n}\n\n```\n\nこの自動的に生成されたフィールドは、privateでかつfinalで修飾されていて、インスタンスを生成するときにコンストラクタに渡された引数の値で初期化されています。そのため、明示的にフィールドが宣言されていなくても、上記のtestメソッドのようにフィールドにアクセスすることが可能です。実際にこのCustomerレコードのインスタンスを生成し、testメソッドを呼び出した例が次のコードです。\n\n例　Customerレコードの使用例\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        Customer a = new Customer(\"A\", 20, \"Tokyo\");\n        a.test();\n    }\n}\n\n```\n\nこのコードをコンパイルし、実行した結果は次のようになります。\n\n例　実行結果\n\n```text\n> java Sample\nA\n\n```\n\nレコードでフィールドを扱うときに注意が必要なのが、プログラマーがフィールドを明示的に追加できないという点です。たとえば、次のように構成要素ではなくフィールドとして定義しようとすると、コンパイルエラーが発生します。\n\n例　レコード内にフィールドを定義（コンパイルエラーになる例）\n\n```java\npublic record Customer() {\n    private String name;\n    private int age;\n    private String address;\n}\n\n```\n\nただし、追加できないのはstaticではないフィールドだけで、staticなものは定義できます。前述のフィールドを、次のようにstaticで修飾するとコンパイルエラーにはなりません。\n\n例　レコード内にフィールドを定義（正常にコンパイルできる例）\n\n```java\npublic record Customer() {\n    private static String name;\n    private static int age;\n    private static String address;\n}\n\n```\n\nstaticではないフィールド（インスタンスごとに持つフィールド）が宣言できないのは、レコードが不変なデータキャリア（データを受け渡すためのもの）として設計されていることに理由があります。以上のことから、選択肢Cが正解です。\n\nこれまでの解説にあったように、レコードは不変なデータキャリアを簡単に記述することを目的とした機能です。そのため、レコードが持つフィールドは、自動的に作られるレコードのコンストラクタによってのみ初期化されるようになっています。また、コンパイル時に生成されるフィールドは、すべて自動的にfinalで修飾されます。こうすることで、プログラマーが自由にフィールドを追加したにもかかわらず初期化を忘れてしまったり、オブジェクトの不変性が損なわれてしまったりすることを防いでいるのです。\n\n試験対策\n\nレコードには、構成要素名と同じ名前のフィールドが自動的に生成されます。\n\n試験対策\n\nレコードにはstaticではないフィールドは定義できません。\n\n参考\n\nレコードの構成要素が可変長引数だった場合、コンパイルすると配列型のフィールドが生成されます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.228 / 4章 解説PDF p.280",
        "tags": [
          "record",
          "interface/default",
          "constructor",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q35",
        "number": 35,
        "type": "single",
        "selectCount": 1,
        "title": "recordのアクセサメソッド",
        "prompt": "次のレコードを利用するコードとして、正しいものを選びなさい。（1つ選択）",
        "codeBlocks": [
          {
            "title": "Data.java",
            "code": "public record Data(String value) {\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Data data = new Data(\"sample\");\nSystem.out.println(data.value());"
          },
          {
            "key": "B",
            "text": "Data data = new Data();\ndata.value = \"sample\";\nSystem.out.println(data.value());"
          },
          {
            "key": "C",
            "text": "Data data = new Data(\"sample\");\nSystem.out.println(data.value);"
          },
          {
            "key": "D",
            "text": "Data data = new Data(\"sample\");\ndata.setValue(\"test\");\nSystem.out.println(data.value());"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問35）。",
          "pdfExplanation": "正解：A\n\nレコードでは、getterメソッド（フィールドの値を得るためのメソッド）はコンパイル時に自動的に生成されます。レコードの宣言時に列挙した構成要素が、そのままフィールドになり、フィールド名と同じ名前のgetterメソッドが自動的に生成されます。なお、setterメソッド（フィールドに値を格納するためのメソッド）は生成されません。\n\nたとえば、次のようなレコードを宣言すると、String型を戻すnameメソッド、int型を戻すageメソッド、String型を戻すaddressメソッドの3つのgetterメソッドが自動的に生成されます。\n\n例　Customerレコードの定義\n\n```java\npublic record Customer(String name, int age, String address) {\n}\n\n```\n\n生成されたgetterメソッドを使ったコード例は次のとおりです。\n\n例　レコードのgetterメソッドの使用例\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        Customer a = new Customer(\"A\", 20, \"Tokyo\");\n        System.out.println(a.name());\n        System.out.println(a.age());\n        System.out.println(a.address());\n    }\n}\n\n```\n\nこのコードをコンパイルし、実行するとコンストラクタで渡した引数の値が正しくコンソールに表示されます。\n\n例　実行結果\n\n```text\n> java Sample\nA\n20\nTokyo\n\n```\n\nレコードで生成されるgetterメソッドは、次のようなルールに基づいて作られます。\n\n・メソッド名は、レコードの構成要素として宣言された構成要素名と同じ\n・戻り値型は、レコードの構成要素として宣言された型と同じ\n・ジェネリックではない（型パラメータを使えない）\n・publicなメソッドとして公開される\n・throws句を持たない\n\n以上のことから、選択肢Aが正解です。レコードのフィールドはfinalで宣言されているため変更できません。よって、選択肢Bのようにフィールドに値を代入することはできません。また、レコードのフィールドのアクセス修飾子はprivateです。選択肢Cのようにフィールドを直接参照することはできません。レコードのgetterメソッドは自動的に生成されますが、setterメソッドは生成されません。よって、選択肢Dも誤りです。\n\n試験対策\n\nレコードの構成要素名と同じ名前のgetterメソッドがコンパイル時に自動的に生成されます。メソッド名には、getXXXやisXXXのような接頭辞は付きません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.228-229 / 4章 解説PDF p.282",
        "tags": [
          "record",
          "string/reference",
          "collection"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q36",
        "number": 36,
        "type": "multi",
        "selectCount": 2,
        "title": "record代替コンストラクタの修正",
        "prompt": "次のコードはコンパイルエラーとなる。修正する候補として正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public record Data(String value) {\n    public Data() {\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "コンストラクタでString型の引数を1つ受け取るようにする"
          },
          {
            "key": "B",
            "text": "コンストラクタ内で、スーパークラスのコンストラクタを呼び出すコードを追加し、スーパークラスのコンストラクタが必要とする引数を渡す"
          },
          {
            "key": "C",
            "text": "コンストラクタでフィールドvalueを初期化する"
          },
          {
            "key": "D",
            "text": "valueフィールドの値を戻すgetterメソッドを追加する"
          },
          {
            "key": "E",
            "text": "valueフィールドを定義する"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問36）。",
          "pdfExplanation": "正解：A、C\n\nレコードには、3種類のコンストラクタがあります。コンパイラによって自動的に生成されるコンストラクタのことを「標準コンストラクタ」または「カノニカルコンストラクタ」と呼びます。もう1つは、プログラマが明示的に宣言する「代替コンストラクタ」です。3つ目のコンストラクタが、標準コンストラクタで受け取る引数の検証を目的とした「コンパクトコンストラクタ」と呼ぶものです。ここではまず、標準コンストラクタと代替コンストラクタについて学習しましょう。コンパクトコンストラクタについては問39で解説をしていますので、\n\nそちらも合わせて参照してください。標準コンストラクタの目的は、フィールドの初期化です。レコードをコンパイルすると自動的にフィールドが生成されますが、それに加えて、生成されたフィールドを初期化するためのコンストラクタも同時に生成されます。これが標準コンストラクタです。\n\n標準コンストラクタは自動的に生成されるため、プログラマが何か処理を追加したりすることはできません。そのような場合には、プログラマが明示的に標準コンストラクタの代わりとなる「代替コンストラクタ」を宣言することができます。なお、代替コンストラクタを宣言する際の注意点は次のとおりです。\n\n・代替コンストラクタは、標準コンストラクタと同じ引数を受け取ること\n・代替コンストラクタ内で、すべてのフィールドを初期化すること\n・代替コンストラクタのアクセス修飾子は、レコードそのもののアクセス修飾子よりも厳しいものを使ってはいけない（同じかより緩くすること）\n\nたとえば、次のように代替コンストラクタを宣言したとしましょう。このコンストラクタは、レコードの構成要素をもとに生成される標準コンストラクタと同じ引数を受け取るため、1つ目のルールには合致しています。しかし、コンストラクタ内で何も初期化していません。これは2つ目のルールに違反していることになります。コンパイル時に生成されるレコードのフィールドはfinalで修飾されているため、コンストラクタで初期化しなければコンパイルエラーとなります。\n\n例　代替コンストラクタの宣言（コンパイルエラーになる）\n\n```java\npublic record Customer(String name, int age, String address) {\n    public Customer(String name, int age, String address) {\n        // do nothing\n    }\n}\n\n```\n\n次のようにフィールドを初期化するようにコードを修正すると、正しくコンパイルできるようになります。\n\n例　代替コンストラクタの宣言（コンパイルエラーにならない）\n\n```java\npublic record Customer(String name, int age, String address) {\n    public Customer(String name, int age, String address) {\n        this.name = name;\n        this.age = age;\n        this.address = address;\n    }\n}\n\n```\n\n設問のプログラムでは、Dataレコードの代替コンストラクタを次のように宣言しています。標準コンストラクタではString型の引数を受け取りますが、代替コンストラクタには引数がありません。また、代替コンストラクタ内でvalueフィールドが初期化されていません。そのため、このプログラムはコンパイルエラーとなります。\n\n例　設問のプログラム\n\n```java\npublic record Data(String value) {\n    public Data() {\n    }\n}\n\n```\n\n次のように、代替コンストラクタにString型の引数を受け取るようにし、valueフィールドを初期化するように修正すれば、コンパイルできるようになります。\n\n例　設問のプログラムを修正\n\n```java\npublic record Data(String value) {\n    public Data(String value) {\n        this.value = value;\n    }\n}\n\n```\n\n以上のことから、選択肢AとCが正解です。レコードのスーパークラスであるjava.lang.Recordクラスには、引数なしのコンストラクタがあるだけです。選択肢Bのように何らかの引数を渡す必要はありません。レコードには、getterメソッドが自動的に生成されるため、選択肢Dのようにgetterメソッドを定義する必要はありません。レコードには、選択肢Eのようにstaticではないフィールドを定義することはできません。\n\n試験対策\n\n代替コンストラクタを定義した場合、フィールドの初期化をしなければコンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.229 / 4章 解説PDF p.283",
        "tags": [
          "constructor",
          "record",
          "string/reference",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q37",
        "number": 37,
        "type": "single",
        "selectCount": 1,
        "title": "recordコンストラクタのアクセス修飾子",
        "prompt": "次のレコードに、コンストラクタを追加しようとしている。コンストラクタに利用できるアクセス修飾子として正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "レコード",
            "code": "record Data(String value) {\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "publicのみ"
          },
          {
            "key": "B",
            "text": "アクセス修飾子なしのみ"
          },
          {
            "key": "C",
            "text": "publicとアクセス修飾子なし"
          },
          {
            "key": "D",
            "text": "privateのみ"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問37）。",
          "pdfExplanation": "正解：C\n\nレコードのコンストラクタは、レコードそのもののアクセス修飾子よりも厳しいものを使えません。\n\nたとえば、次のようにpublicでレコードを宣言しているにもかかわらず、代替コンストラクタのアクセス修飾子を「なし（パッケージアクセス）」に変更するとコンパイルエラーとなります。\n\n例　publicで宣言されたレコードのコンストラクタ\n\n```java\npublic record Customer(String name, int age, String address) {\n    Customer(String name, int age, String address) {\n        this.name = name;\n        this.age = age;\n        this.address = address;\n    }\n}\n\n```\n\n例　コンパイルエラーになる\n\n```text\n> javac Customer.java\nCustomer.java:2: エラー: レコードCustomerに無効な標準コンストラクタがあります\n    Customer(String name, int age, String address) {\n    ^\n  (public)より強いアクセス権限を割り当てようとしました\nエラー1個\n\n```\n\nレコードをpublicで宣言した場合は、そのコンストラクタもpublicでなければいけません。もし、レコードがprotectedであれば、コンストラクタはpublicもしくはprotectedとします。また、レコードがアクセス修飾子なしであれば、コンストラクタはprivateであってはいけません。以上のことから、選択肢Cが正解となります。\n\n試験対策\n\nレコードのコンストラクタは、レコードそのもののアクセス修飾子よりも厳しいものを使えません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.229-230 / 4章 解説PDF p.285",
        "tags": [
          "override/overload",
          "constructor",
          "record",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q38",
        "number": 38,
        "type": "single",
        "selectCount": 1,
        "title": "recordの追加コンストラクタ",
        "prompt": "次のプログラムは、コンパイルエラーとなる。コンパイルエラーを解消するために「// insert code here」の箇所に入るコードとして正しいものを選びなさい。（1つ選択）",
        "codeBlocks": [
          {
            "title": "Data.java",
            "code": "public record Data(String value) {\n    public Data() {\n        // insert code here\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "this();"
          },
          {
            "key": "B",
            "text": "super();"
          },
          {
            "key": "C",
            "text": "this.value = value;"
          },
          {
            "key": "D",
            "text": "this(\"sample\");"
          },
          {
            "key": "E",
            "text": "super(\"sample\");"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問38）。",
          "pdfExplanation": "正解：D\n\nレコードには、標準コンストラクタや代替コンストラクタ以外のコンストラクタをオーバーロードできます。ただし、標準コンストラクタや代替コンストラクタ以外のコンストラクタを定義するときには、明示的に標準コンストラクタや代替コンストラクタを呼び出す必要があります。たとえば、次のように引数が2つしかないコンストラクタを定義したとしましょう。\n\n例　コンストラクタの定義\n\n```java\npublic record Customer(String name, int age, String address) {\n    public Customer(String name, int age) {\n    }\n}\n\n```\n\nこのコードはコンパイルエラーになります。理由は、標準コンストラクタを経由せずにインスタンスの初期化をしてしまうと、自動的に生成されたfinalなフィールドが初期化されないためです。\n\n例　コンパイルエラーになる\n\n```text\n> javac Customer.java\nCustomer.java:2: エラー: コンストラクタが標準でないため、先頭文がクラスCustomer内の他のコンストラクタを呼び出す必要があります\n    public Customer(String name, int age) {\n    ^\nエラー1個\n\n```\n\nオーバーロードされた別のコンストラクタを呼び出すときのように、thisを使って標準コンストラクタの呼び出しを明示的に行うと、正しくコンパイルできるようになります。\n\n例　標準コンストラクタを明示的に呼び出す\n\n```java\npublic record Customer(String name, int age, String address) {\n    public Customer(String name, int age) {\n        this(name, age, \"Tokyo\");\n    }\n}\n\n```\n\nこれで、このレコードは標準コンストラクタとオーバーロードされた別のコンストラクタの2つのコンストラクタを持つことになりました。その結果、次のコード例のように、インスタンス生成時に初期化する方法を選択できるようになります。\n\n例　複数のコンストラクタを利用できる\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        Customer a = new Customer(\"A\", 20);\n        Customer b = new Customer(\"B\", 30, \"Osaka\");\n    }\n}\n\n```\n\n設問のプログラムは、次のように引数のないコンストラクタが定義されており、このままではコンパイルエラーとなります。\n\n例　設問のプログラム\n\n```java\npublic record Data(String value) {\n    public Data() {\n        // insert code here\n    }\n}\n\n```\n\n次のようにthisを使って標準コンストラクタの呼び出しを明示的に行えば、正しくコンパイルできるようになります。\n\n例　設問のプログラム\n\n```java\npublic record Data(String value) {\n    public Data() {\n        this(\"sample\");\n    }\n}\n\n```\n\n以上のことから、選択肢Dが正解となります。\n\nオーバーロードしたコンストラクタ内では、すべてのフィールドが初期化できる別のコンストラクタを呼び出す必要があります。選択肢Aは、引数なしのコンストラクタから同じ引数なしのコンストラクタを呼び出しているだけになるため誤りです。レコードのコンストラクタで、スーパークラスのコンストラクタを呼び出しても、フィールドは初期化されません。よって、選択肢BとEも誤りです。設問のコードのコンストラクタでは引数を受け取っていません。そのため、選択肢Cのvalueはどちらもフィールドを表すことになります。これでは初期化できません。よって選択肢Cも誤りです。\n\n参考\n\nコンストラクタをオーバーロードした際、標準コンストラクタ呼び出しのコードよりも先に何らかのコードを記述するとコンパイルエラーになります。これは、通常のクラスのコンストラクタと同じルールです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.230 / 4章 解説PDF p.286",
        "tags": [
          "constructor",
          "record",
          "string/reference",
          "inheritance/polymorphism"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q39",
        "number": 39,
        "type": "single",
        "selectCount": 1,
        "title": "recordコンパクトコンストラクタ",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Dataレコード",
            "code": "public record Data(String value) {\n    public Data {\n        if (this.value == null) {\n            System.out.println(\"value is null\");\n        }\n    }\n}"
          },
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        Data data = new Data(null);\n        System.out.println(data.value());\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "value is null と表示される"
          },
          {
            "key": "B",
            "text": "null と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーになる"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問39）。",
          "pdfExplanation": "正解：C\n\nレコードのコンパクトコンストラクタに関する問題です。自動的に生成される標準コンストラクタには、渡されてきた引数の妥当性を検証する機能はありません。そのような機能を追加したい場合には、コンパクトコンストラクタを使います。コンパクトコンストラクタは、次のようにレコード名だけで宣言するメソッドです。\n\n例　コンパクトコンストラクタの宣言\n\n```java\nimport java.util.Objects;\n\npublic record Customer(String name, int age, String address) {\n    public Customer {\n        if (Objects.isNull(name) || name.isBlank()) {\n            throw new IllegalArgumentException();\n        }\n        if (age < 0) {\n            throw new IllegalArgumentException();\n        }\n        if (Objects.isNull(address) || address.isBlank()) {\n            throw new IllegalArgumentException();\n        }\n    }\n}\n\n```\n\nこのようなコンパクトコンストラクタを用意することで、自動的に生成される標準コンストラクタでフィールドに引数の値を代入する前に、その値の妥当性を検証することが可能です。上記のコードであれば、名前や住所がnullや空文字でないか、年齢がマイナスの値になっていないかなどの検証を行い、違反があれば例外をスローするように実装しています。このようなコンパクトコンストラクタを用意すれば、不正な値を扱うことがなくなり、安心してデータキャリアとして使うことができます。\n\nコンパクトコンストラクタは、コンパイルすると標準コンストラクタに付け\n\n加える処理を記述するものですが、コンパイルされたクラスファイルをjavapコマンドで逆コンパイルすると、標準コンストラクタとコンパクトコンストラクタの関係がよくわかります。たとえば、次のようなレコードがあったとします。このレコードには単純な処理のコンパクトコンストラクタだけを追加しておきます。\n\n例　標準コンストラクタとコンパクトコンストラクタの関係を調べるためのコード\n\n```java\npublic record Customer(String name, int age, String address) {\n    public Customer {\n        System.out.println(name);\n    }\n}\n\n```\n\nこのレコードをコンパイルし、クラスファイルをjavapコマンドで逆コンパイルすると、次のような結果を得られます。\n\n例　javapコマンドの実行結果\n\n```text\n> javap -c Customer\npublic final class Customer extends java.lang.Record {\n  public Customer(java.lang.String, int, java.lang.String);\n    Code:\n       0: aload_0\n       1: invokespecial #13                 // Method java/lang/Record.\"<init>\":()V\n       4: getstatic     #16                 // Field java/lang/System.out:Ljava/io/PrintStream;\n       7: aload_1\n       8: invokevirtual #22                 // Method java/io/PrintStream.println:(Ljava/lang/String;)V\n      11: aload_0\n      12: aload_3\n      13: putfield      #28                 // Field address:Ljava/lang/String;\n      16: aload_0\n      17: iload_2\n      18: putfield      #30                 // Field age:I\n      21: aload_0\n      22: aload_1\n      23: putfield      #32                 // Field name:Ljava/lang/String;\n      26: return\n  ...省略...\n}\n\n```\n\njavapコマンドの実行結果から、コンストラクタでは、コンパクトコンストラクタの処理（4〜8）が実行されてから、各フィールドが初期化する標準コンストラクタ内の処理（11〜23）が実行されていることがわかります。\n\nコンパクトコンストラクタには次のようなルールがあります。これらのルールに反した場合は、コンパイルエラーになります。\n\n・コンストラクタ内にreturnを記述してはならない\n・明示的に別のコンストラクタ呼び出しをしてはならない\n・フィールドにアクセスしてはならない\n・コンパクトコンストラクタは1つしか宣言できない\n\nコンパクトコンストラクタは、前述のようにコンパイルされることで標準コンストラクタと組み合わさって1つのコンストラクタになります。そのため、まだ標準コンストラクタの処理が終わっていないにもかかわらず、コンパクトコンストラクタ内でreturnされてしまうとフィールドの初期化ができないままのインスタンスができあがってしまいます。\n\nまた、別のコンストラクタ呼び出しを禁止しているのは、コンパクトコンストラクタが標準コンストラクタと組み合わさって1つのコンストラクタになることに由来します。前問の解説で学んだように、レコードではコンストラクタをオーバーロードして複数定義することが可能ですが、そのときにはオーバーロードしたコンストラクタの先頭行で標準コンストラクタを呼び出さなければいけませんでした。コンパクトコンストラクタ内で、別のコンストラクタを呼び出してしまうと、そのコンストラクタから標準コンストラクタが呼び出されるうえに、さらにコンパクトコンストラクタと標準コンストラクタが組み合わさるわけですから、2回も標準コンストラクタが呼び出されることになってしまいます。\n\nコンパクトコンストラクタ内でフィールドにアクセスできないのは、フィールドの初期化は標準コンストラクタ内で実施するものだからです。コンパクトコンストラクタと標準コンストラクタは組み合わさって1つのコンストラクタになりますが、その順番はコンパクトコンストラクタの次に標準コンストラクタです。そのため、コンパクトコンストラクタの処理を実行しているタイミングでは、まだフィールドが初期化されないのです。次のコードは、レコードがコンパイルされ、コンパクトコンストラクタと標準コンストラクタが組み合わさったコンストラクタをイメージしてもらうためのものです。\n\n例　コンパクトコンストラクタが処理される位置\n\n```java\npublic class Customer {\n\n    private String name;\n    private int age;\n    private String address;\n\n    public Customer(String name, int age, String address) {\n\n        // Compact Constructor\n\n        this.name = name;\n        this.age = age;\n        this.address = address;\n    }\n}\n\n```\n\nこのように、コンパクトコンストラクタの処理はフィールドの初期化より先に実行されます。また、コンストラクタの引数とフィールド名が同じなので、this参照（this.xxx）を使わなければフィールドではなく、コンストラクタの引数にアクセスすることになる点も注意してください。\nコンパクトコンストラクタでは、this参照（this.xxx）を使ってフィールドにアクセスすることもできません。コンパクトコンストラクタの処理が実行されているタイミングでは、まだフィールドの初期化が終わっていません。そのため、フィールドの値を参照するようなコードはコンパイルエラーになります。また、フィールドの値をこのタイミングで初期化してしまうと、その後で続く標準コンストラクタの処理ができなくなってしまいます。\n\n最後に、コンパクトコンストラクタは標準コンストラクタと組み合わせるためのものです。そのため、複数のコンパクトコンストラクタがあるとどれと組み合わせてよいのかがわかりません。そのため、コンパクトコンストラクタは1つしか定義できません。たとえば、次のように2つのコンパクトコンストラクタを持つレコードを用意します。\n\n例　2つのコンパクトコンストラクタを定義（コンパイルエラー）\n\n```java\npublic record Customer(String name, int age, String address) {\n    public Customer {\n        System.out.println(\"A\");\n    }\n    public Customer {\n        System.out.println(\"B\");\n    }\n}\n\n```\n\nこのコードをコンパイルすると、次のようにコンパイルエラーが発生します。\n\n例　コンパイルエラーになる\n\n```text\n> javac Customer.java\nCustomer.java:5: エラー: コンストラクタ Customer(String,int,String)はすでにレコードCustomerで定義されています\n    public Customer {\n    ^\nエラー1個\n\n```\n\n設問のコードでは、コンパクトコンストラクタ内でthis参照を使ってフィールドの値を利用しています。しかし、コンパクトコンストラクタが実行されるタイミングでは、まだフィールドの値は初期化されていません。よって、このコードはコンパイルエラーになります。以上のことから、選択肢Cが正解です。\n\n試験対策\n\nコンパクトコンストラクタの構文は、レコード名のみ宣言するものです。引数そのものの宣言はないので注意しましょう。\n\n参考\n\nコンパクトコンストラクタは、引数の検証だけでなく、標準コンストラクタでは実現されない初期化に関するロジックを実装したりすることにも使えます。代替コンストラクタとの違いは、フィールドの初期化がされる前か後かの違いです。フィールドの初期化がされる前に実行したい初期化処理があればコンパクトコンストラクタを使いましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.230 / 4章 解説PDF p.289",
        "tags": [
          "constructor",
          "record",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch04-q40",
        "number": 40,
        "type": "single",
        "selectCount": 1,
        "title": "recordのアクセサとinterface default",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Testインタフェース",
            "code": "public interface Test {\n    default void value() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "Dataレコード",
            "code": "public record Data(String value) implements Test {\n}"
          },
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        Data data = new Data(\"B\");\n        System.out.println(data.value());\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Aと表示される"
          },
          {
            "key": "B",
            "text": "Bと表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラー"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第4章 問40）。",
          "pdfExplanation": "正解：C\n\nレコードは、コンパイルするとjava.lang.Recordクラスを継承したクラスとしてクラスファイルが出力されます。そのため、別の何らかのクラスを継承してレコードを定義することはできません。その代わり、インタフェースを実現することは可能です。\n\nレコードによるインタフェースの実現については、クラスのそれとまったく同じです。ただし、インタフェースから引き継いだデフォルトメソッドが、getterメソッドの代わりになることはありません。たとえレコードの構成要素から自動的に生成されたgetterメソッドと同じ名前のメソッドがインタフェースにあったとしても、レコードをコンパイルしてクラスを生成するタイミングで、getterメソッドはすべてオーバーライドされてしまうからです。なお、デフォルトメソッドについては、第5章の問4以降の解説を参照してください。\n\nたとえば、次のようなTestインタフェースがあったとします。このインタフェースには、nameというデフォルトメソッドがあります。\n\n例　Testインタフェース\n\n```java\npublic interface Test {\n    default String name() {\n        return \"Test:name()\";\n    }\n}\n\n```\n\nこのインタフェースを実装したレコードを定義したのが、次のコード例です。クラスと同様に、レコードでインタフェースを実装する場合にもimplementsを使います。\n\n例　Testインタフェースを実装したCustomerレコード\n\n```java\npublic record Customer(String name, int age, String address)\n        implements Test {\n}\n\n```\n\nこのレコードにはnameという構成要素があるため、コンパイルするとnameという名前のgetterメソッドが自動的に生成されます。この生成されたメソッドは、レコードが実装しているインタフェースのデフォルトメソッドと同じシグニチャであるため、オーバーライドしたメソッドとして動作します。次のコード例は、このレコードを使ったものです。\n\n例　Customerレコードの使用例\n\n```java\npublic class Sample {\n    public static void main(String[] args) {\n        Test a = new Customer(\"A\", 20, \"Tokyo\");\n        System.out.println(a.name());\n    }\n}\n\n```\n\nこのコードを実行すると、インタフェースに実装されているデフォルトメソッドではなく、オーバーライドされたgetterメソッドが動作していることがわかります。\n\n例　実行結果\n\n```text\n> java Sample\nA\n\n```\n\nなお、レコードから生成されるgetterメソッドはオーバーライドと見なされるため、シグニチャは同じでも戻り値型が違ったりすると、レコードのコンパイル時にエラーが起きます。たとえば、前述のインタフェースのデフォルトメソッドの戻り値型をvoidに変更し、処理内容も戻り値を戻さないものに変更すると、インタフェースはコンパイルできても、レコードがコンパイルエラーになるはずです。\n\n例　オーバーライドできないインタフェースのメソッド例\n\n```java\npublic interface Test {\n    default void name() {\n        System.out.println(\"Test:name()\");\n    }\n}\n\n```\n\n例　コンパイルエラーになる\n\n```text\n> javac Customer.java\nCustomer.java:2: エラー: Customerのname()はTestのname()を実装できません\npublic record Customer(String name, int age, String address) implements Test {\n              ^\n  戻り値の型Stringはvoidと互換性がありません\nエラー1個\n\n```\n\n設問のコードでは、Testインタフェースでデフォルトメソッドとしてvalueメソッドを定義しています。このメソッド名は、そのインタフェースを実装しているDataレコードで自動的に生成されるgetterメソッドと同じ名前です。しかし、Testインタフェースのvalueメソッドは戻り値を戻さない（void）であるのに対し、自動生成されるDataレコードのvalueメソッドはString型の戻り値を戻します。そのため、この2つのメソッドに互換性がないとしてコンパイルエラーとなります。以上のことから、選択肢Cが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter4_original_order_transcription_v5 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "4章 問題PDF p.230 / 4章 解説PDF p.294",
        "tags": [
          "interface/default",
          "record",
          "main/args",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      }
    ],
    "ch05": [
      {
        "id": "ch05-q01",
        "number": 1,
        "type": "single",
        "selectCount": 1,
        "title": "継承元クラスに必要な定義",
        "prompt": "次の Child クラスが継承している Parent クラスの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Parentクラスは、helloメソッドの定義を持っていなければいけない"
          },
          {
            "key": "B",
            "text": "Parentクラスには、フィールドを初期化するためのコンストラクタを定義しなければいけない"
          },
          {
            "key": "C",
            "text": "Parentクラスには、helloフィールドを定義しなければいけない"
          },
          {
            "key": "D",
            "text": "Parentクラスには、nameフィールドを定義しなければいけない"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問1）。",
          "pdfExplanation": "正解：D\n\nクラスの継承に関する問題です。継承は、あるクラスを機能拡張した新しいクラスを定義することです。拡張元になるクラスのことを基底クラスやスーパークラス、拡張したクラスのことを派生クラスやサブクラスと呼びます。継承は、生産性を向上させる強力なプログラミング手法です。複数のプログラムがあり、それぞれのコードに共通部分があったとき、同じコードを何度も記述するのは効率的とはいえません。そこで、共通部分を別のプログラムとして分離し、それぞれのプログラムには差分だけを定義しておいて、後で結合すれば、何度も同じコードを書く手間を省き、変更時に修正するコード数も減らせます。このようなプログラミング手法のことを「差分プログラミング」と呼びます。継承のイメージは、たとえばAを継承したBを定義したとき、次の図のようにAのインスタンスと差分のインスタンスの両方を合わせてBのインスタンスとするというものです。そのため、Bのインスタンスは、Aクラスに定義した特徴とBクラスに定義した特徴（差分）の両方を持っています。\n\n【継承のイメージ】\n\n```text\n設計時          実装時                         実行時\nA ───────→     共通 / A.class ───────→       Aのインスタンス\n↑\nB ───────→     差分 / B.class ───────→       差分のインスタンス\n```\n\n※Aのインスタンスと差分のインスタンスの両方を合わせてBのインスタンスとする。\n\n設問のChildクラスは、extendsを使っていることからわかるとおり、Parentクラスを継承して定義されています。そのため、Parentクラスをもとに、差分としてChild クラスを定義していることになります。これを逆に考えれば、Childクラスに定義されていないものは、Parentクラスになければいけないことになります。\n\n選択肢Aは、helloメソッドがParentクラスに定義されていなければならないとしていますが、このメソッドをChildクラスの差分だと考えれば、Parentクラスに定義されている必要はありません。よって、選択肢Aは誤りです。\n\n選択肢Bは、Parentクラスにコンストラクタを定義しなければいけないとしていますが、コンストラクタは引き継がないため（詳細は解答2を参照）、Parentクラスのコンストラクタの有無はChildクラスに影響を及ぼしません。よって、選択肢Bも誤りです。\n\n選択肢Cは、Parentクラスにはhelloフィールドがなければいけないとしていますが、このようなフィールドはChildクラスで使われておらず無関係です。よって、選択肢Cも誤りです。Childクラスのコンストラクタやhelloメソッドでは、nameという変数を使っています。しかし、この変数はChild クラスのどこにも定義されていません。そのため、Parentクラスがフィールドとして定義しなければ、Childクラスのコンパイル時に「宣言されていない変数を使っている」としてコンパイルエラーが発生します。\n\n以上のことから、選択肢Dが正解です。\n\n試験対策\n\n継承をすることで、サブクラスはスーパークラスの特徴を引き継ぎます。サブクラスのインスタンスは、スーパークラスのインスタンスと差分のインスタンスの両方で構成されていることを理解しましょう。継承は、同じコードを何回も書かずに済むようになるため、生産性を向上させる強力な機能です。特に開発時の生産性はかなり高くなるでしょう。しかし最近では、継承を使うことで保守性が低下する可能性が指摘されています。たとえば、次のAクラスのコードを見ても、「どのクラスがこのクラスを継承しているか」という情報はどこにもありません。もし、Aクラスに変更が加わると、その影響がどこに及ぶかがわかりません。ソフトウェアの規模が大きくなれば。その影響範囲を調べることもかなり労力を要するでしょう。そのため、現代のオブジェクト指向設計では、差分プログラミングの実現のために継承を使わないことが推奨になっています。継承を使う主な理由は、変更に強くなるオブジェクト指向の代表的な機能であるポリモーフィズムを実現するためです。変更に弱くなる差分プログラミングはできるだけ避け、変更に強いプログラムを実現するために継承を使うようにしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.298 / 5章 解説PDF p.317",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Child extends Parent {\n    Child() {\n        name = \"java\";\n    }\n    void hello() {\n        System.out.println(\"hello, \" + name);\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "constructor",
          "field/static/scope"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q02",
        "number": 2,
        "type": "single",
        "selectCount": 1,
        "title": "継承で引き継がれないもの",
        "prompt": "継承の説明として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "アクセス修飾子がデフォルトのフィールドは、すべてのサブクラスのメソッドからアクセスできる"
          },
          {
            "key": "B",
            "text": "privateなメソッドであっても、サブクラスからは利用できる"
          },
          {
            "key": "C",
            "text": "サブクラスであっても、コンストラクタは引き継がない"
          },
          {
            "key": "D",
            "text": "protectedなメソッドには、同じパッケージに属するサブクラスのみアクセスできる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問2）。",
          "pdfExplanation": "正解：C\n\n継承では何を引き継ぐかについて問う問題です。継承をすることでサブクラスはスーパークラスの特徴を引き継ぎますが、スーパークラスのすべてを引き継ぐわけではありません。次の2つは、継承していても引き継げません。コンストラクタprivateなフィールドやメソッドコンストラクタは、そのコンストラクタが定義されているインスタンスの準備をするためのものです。解答1 で学んだように、サブクラスのインスタンスとは、スーパークラスのインスタンスと差分のインスタンスの両方で構成されています。スーパークラスのインスタンスが持つコンストラクタは、スーパークラスのインスタンスの準備をするためのものであり、差分のコンストラクタとは分けて考えなくてはいけません。そのため、たとえ次のようにスーパークラスに引数ありのコンストラクタが定義されていても、サブクラスのインスタンスを生成するときには使えません。スーパークラスのコンストラクタでサブクラスのインスタンスを生成（コンパイルエラー）\n\n```java\nclass A {\n```\n\nA(String val) {\n\n```java\n        // any code\n    }\n}\nclass B extends A { }\npublic class Main {\n    public static void main(String[] args) {\n        B b = new B(\"hello\"); // コンパイルエラー\n    }\n}\n```\n\n以上のことから、選択肢Cが正解です。privateなフィールドやメソッドは、アクセス修飾子privateで修飾され、同じクラスのインスタンス同士でしか使えません。これは継承関係にあっても同様です。繰り返しになりますが、サブクラスのインスタンスはスーパークラスのインスタンスと差分のインスタンスの両方で構成されています。差分のインスタンスから、スーパークラスのインスタンスのprivateなメンパにはアクセスできません。これらは異なるクラスから作られたインスタンスであることを忘れないでください。\n\n以上のことから、選択肢Bは誤りです。privateよりも緩いアクセス修飾子であるデフォルトは「パッケージアクセス」とも呼ばれ、同じパッケージに属するクラスのインスタンスからのアクセスだけを許可するものです。たとえ継承関係にあっても、スーパークラスとサブクラスのそれぞれが属するパッケージが異なれば、アクセスできません。\n\n以上のことから、選択肢Aも誤りです。一方、デフォルトよりもさらに緩いアクセス修飾子であるprotectedは、異なるパッケージであっても継承関係にあればアクセスを許可するというものです。よって、選択肢Dも誤りです。継承関係にあっても、スーパークラスのコンストラクタとprivateなフィールドやメソッドはサブクラスには引き継がれません。スーパークラスの何がサブクラスに引き継がれているのかを確認しましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.298 / 5章 解説PDF p.318",
        "tags": [
          "inheritance/polymorphism",
          "package/import",
          "override/overload",
          "constructor"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q03",
        "number": 3,
        "type": "multi",
        "selectCount": 2,
        "title": "インタフェースの基本",
        "prompt": "インタフェースに関する説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "アクセス修飾子を省略しても、publicなメソッドとして扱われる"
          },
          {
            "key": "B",
            "text": "フィールドは一切定義できない"
          },
          {
            "key": "C",
            "text": "クラスは複数のインタフェースを同時に実現できない"
          },
          {
            "key": "D",
            "text": "インタフェースを継承することはできない"
          },
          {
            "key": "E",
            "text": "抽象クラスは、インタフェースに定義されているメソッドを実現しなくてもよい"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問3）。",
          "pdfExplanation": "正解：A、E\n\nインタフェースの基礎知識を問う問題です。インタフェースは、クラスから「型」だけを取り出したものです。型とは、そのものの「扱い方」を決めるための情報で、変数を宣言するときに型を指定するのは、その変数の扱い方を決めるためです。注意すべきなのは、扱う対象そのものと、型で指定する「扱う対象の種類」は異なる概念であることです。たとえば「3」という数値をint型の変数として扱うのか、double型で浮動小数点数として扱うのかを変えられるように、対象と扱い方は異なる概念です。ほかにも、インスタンスの種類と扱い方を切り替えられるため、ポリモーフィズムが成り立ちます。インタフェースは、ほかのクラスからの「扱い方」を定義したものです。ほかのクラスから扱えるようにするために、抽象メソッドはすべてpublicであると解釈されます。たとえアクセス修飾子を記述しなくても、インタフェースは次のようにコンパイラによって自動的にpublicで修飾されます。\n\n例 インタフェースの定義\n\n```java\npublic interface Sample {\n    void hello(); // コンパイラによってpublicで修飾される\n}\n```\n\nなお、インタフェースに定義する抽象メソッドは、protectedやprivateで修飾することはできません。\n\n以上のことから、選択肢Aは正解です。インタフェースは、インスタンス化できません。インタフェースを実現するクラスを作ってインスタンス化します。Javaでは「インタフェースを実現する」ことを、次のコード例のようにimplementsというキーワードで表現します。\n\n例 インタフェースの実現\n\n```java\npublic class ConcreteClass implements InterfaceA, InterfaceB {\n    // any code\n}\n```\n\nなお、Javaでは、クラスの多重継承は禁止されていますが、インタフェースの多重実現は認められています。複数のインタフェースを実現する場合は、上記コード例のようにカンマ区切りで列挙します。\n\n以上のことから、選択肢Cは誤りです。インタフェースには、それを実現したクラス（実現クラス）が持つべき抽象メソッドを宣言します。抽象メソッドの中身（実装）を持つことはできません。間違えやすいポイントとしては、中カッコ「{}」だけを記述して処理を記述しないというものがありますが、これは「処理なし」という中身を持っているものと解釈されます。注意してください。メソッドの実装を持つインタフェースの定義（コンパイルエラー）\n\n```java\npublic interface Sample {\n    public void hello() { } // コンパイルエラー\n}\n```\n\nインタフェースには、以下のルールを満たすフィールドであれば定義できます。\n\n・ public static finalで修飾すること（省略した場合は、暗黙的に指定したと見\n\nなされる）\n\n・定数扱いとなるので、初期値を設定すること\n\n以上のことから、選択肢Bは誤りです。継承は「extends （拡張する）」というキーワードからわかるとおり、あるクラスの機能を拡張した新しいクラスを定義することです。インタフェースにおいても、あるインタフェースを拡張した新しいインタフェースを定義できます。つまり、インタフェースを継承したインタフェースを定義できるのです。インタフェースの継承は、クラスの継承と同じようにextendsを使って宣言します。よって、選択肢Dも誤りです。インタフェースの拡張\n\n```java\npublic interface SubInterface extends SuperInterface {\n    // any definition\n}\n```\n\nインタフェースに宣言されているメソッドは、インタフェースや抽象クラス、具象クラスのヒエラルキーの中で、最初の具象クラスが実現しなければいけません。抽象クラスは、インタフェース同様に動作しないため、インタフェースのメソッドを実現する必要はありません。よって、選択肢Eは正解です。\n\n試験対策\n\nインタフェースに宣言する抽象メソッドには、処理内容をいっさい記述することはできません。継承に関するルールを覚えておきましょう。クラス同士は単一継承のみ可能\n\n・インタフェース同士は多重継承が可能\n\nインタフェースは多重実現ができます（解説中の例「インタフェースの実現」を参照）。\n\n試験対策\n\nJava以外のオブジェクト指向言語には、多重継承を認めているものもあります。しかし、「パンドラの箱を開けた」と揶揄されるように、複数のクラスを一度に継承できることは便利な一方で、スーパークラスの変更が及ぼす影響範囲がより複雑になるため、変更に弱いソフトウェアになりやすいという側面を持ちます。Javaでは、ソフトウェアが長期間使われることを想定し、多重継承を禁止しています。継承は適切に使えば強力な機能ですが、使い方を誤るとソフトウェアを複雑にして保守性を低下させる危険性があることを覚えておきましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.299 / 5章 解説PDF p.319",
        "tags": [
          "interface/default",
          "override/overload",
          "inheritance/polymorphism",
          "field/static/scope"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェースのメソッド実装",
        "prompt": "次のプログラムの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "インタフェースAのsampleメソッドをdefaultで修飾しなければいけない"
          },
          {
            "key": "B",
            "text": "インタフェースAのsampleメソッドを削除し、Bクラスにsampleメソッドを追加しなければいけない"
          },
          {
            "key": "C",
            "text": "実行時に例外がスローされる"
          },
          {
            "key": "D",
            "text": "「sample」と表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問4）。",
          "pdfExplanation": "正解：A\n\nデフォルトメソッドに関する問題です。インタフェースに定義されている抽象メソッドは、そのインタフェースを実現したクラスが必ず実装しなければいけません。たとえば、インタフェースが2つの抽象メソッドを持っていれば、実現クラスは2つとも実装しなければコンパイルエラーとなります。仮に、2つの抽象メソッドを持つインタフェースを複数のクラスが実現していたとして、次のような条件があると想定してみましょう。\n\n・ 2つのうち、1つの抽象メソッドの実装内容は各クラスで共通している\n\n・もう1つの抽象メソッドは各クラスで異なる\n\nこれらの条件をクラス図で表現したのが、次の図です。Aインタフェースにはcommonメソッドとindividualメソッドの2つがあり、このインタフェースを実現するBクラスとCクラスでは、commonメソッドの実装が共通individualメソッドが個別の実装になるメソッドです。\n\n【インタフェースに定められたメソッドはすべて実装しなければならない】\n\n<<interface>>A\n\n```text\n          +common()\n          +individual()\n          △           △\n          │           │\n          B           C\n      +common()   +common()\n   +individual() +individual()\n```\n\nこのように、commonメソッドの実装が複数の実現クラスで重複する場合があります。\n\n【抽象クラスで共通のメソッドを定義する】\n\n<<interface>>A\n\n```text\n          +common()\n          +individual()\n                △\n                │\n```\n\nAbstractClass{abstract}\n\n```text\n          +common()\n          △       △\n         /         \\\n        B           C\n  +individual()  +individual()\n```\n\nまた、他の方法として、デフォルトメソッドを用いることでもインタフェースに実装を記述できます。インタフェースのデフォルトメソッドは、インタフェースを実現したクラスが持つべきデフォルトの実装を定義するものです。これを活用すれば、前述のような共通処理をすべての実現クラスで実装したり、抽象クラスを間に挟んだりする必要がなくなります。デフォルトメソッドは、次のようにdefault修飾を付けて定義します。\n\n```java\ndefault 戻り値型 メソッド名(引数の型 引数名) {\n    // 処理内容\n}\n```\n\ndefault修飾子で修飾されている以外は、クラスに定義するメソッド定義と同じです。なお、デフォルトメソッドもインタフェースに定義するメソッドと同様に、自動的にpublicで修飾されます。設問のAインタフェースに定義されているsampleメソッドは実装を持っていますが、インタフェースにはデフォルトメソッドとインスタンスを作らなくても使えるクラスメソッド(staticで修飾されたメソッド）以外の実装は記述できません。そのため、デフォルトメソッドにする必要があります。よって、defaultで修飾するとした選択肢Aが正解となります。\n\n選択肢Bは、AインタフェースとBクラスのコンパイルは成功しますが、Mainクラスのmainメソッドでコンパイルエラーとなります。Aインタフェースのsampleメソッドを削除し、Bクラスにsampleメソッドを追加しても、Bクラスのインスタンスへの参照をA型の変数で扱っているため、sampleメソッドがないと判断されるからです。よって、選択肢Bは誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.299 / 5章 解説PDF p.320",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    void sample() {\n        System.out.println(\"sample\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B implements A { }"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        a.sample();\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q05",
        "number": 5,
        "type": "single",
        "selectCount": 1,
        "title": "defaultメソッドとObjectのメソッド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Aインタフェースでコンパイルエラーとなる"
          },
          {
            "key": "B",
            "text": "Bクラスでコンパイルエラーとなる"
          },
          {
            "key": "C",
            "text": "Aが表示される"
          },
          {
            "key": "D",
            "text": "Bが表示される"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問5）。",
          "pdfExplanation": "正解：A\n\nインタフェースに定義するデフォルトメソッドは、実現クラスが持つべきテフォルトの実装を定義するものです。複数の実現クラスで同じコードを何度も書いたり、抽象クラスを挟んだりすることを省略するために利用します。もし、サブインタフェースや実現クラスでデフォルトメソッドの処理内容を変更したい場合には、オーバーライドすることで対処します。たとえば、次のようなAインタフェースと、Aを継承したBインタフェースを用意します。継承元のスーパーインタフェースであるAには、sampleメソッドがデフォルトメソッドとして定義・実装されています。\n\n例 sampleメソッドを定義・実装するAインタフェース\n\n```java\npublic interface A {\n    default void sample() {\n        System.out.println(\"A\");\n    }\n}\n```\n\nAインタフェースを継承したサブインタフェースであるBでは次のようにsampleメソッドをオーバーライドすることができます。これは、デフォルトメソッドをデフォルトメソッドでオーバーライドしただけであり、クラスを継承したサブクラスでのオーバーライドと変わりません。デフォルトメソッドのオーバーライド\n\n```java\npublic interface B extends A {\n    @Override\n    default void sample() {\n        System.out.println(\"B\");\n    }\n}\n```\n\n注意しなければいけないのが、java.lang.Objectクラスに定義されているメソッドの扱いです。java.lang.Objectクラスに定義されているメソッドをインタフェースでデフォルトメソッドとしてオーバーライドすると、コンパイルエラーとなります。設問のコードでは、Aインタフェースでjava.lang.Objectクラスに定義されているtoStringメソッドをデフォルトメソッドとしてオーバーライドしているため、コンパイルエラーが発生します。よって、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.300 / 5章 解説PDF p.300",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    @Override\n    default String toString() {\n        return \"A\";\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B implements A {\n    @Override\n    public String toString() {\n        return \"B\";\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a);\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q06",
        "number": 6,
        "type": "single",
        "selectCount": 1,
        "title": "スーパーインタフェースのdefaultメソッド呼び出し",
        "prompt": "以下に示すプログラムをコンパイル、実行し、次のような結果を表示したい。Cクラスの空欄に入るコードとして正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "super.sample();"
          },
          {
            "key": "B",
            "text": "A.super.sample();"
          },
          {
            "key": "C",
            "text": "public.sample();"
          },
          {
            "key": "D",
            "text": "new.sample();"
          },
          {
            "key": "E",
            "text": "上記のいずれも誤りである"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問6）。",
          "pdfExplanation": "正解：E\n\nデフォルトメソッドをオーバーライドしたメソッドから、元のデフォルトメソッドを呼び出すには、次の構文を使います。\n\n```java\nインタフェース名.super.メソッド名();\n```\n\nクラス間の継承で、サブクラスのメソッドからスーパークラスのメソッドを呼び出す際にsuperを使います。デフォルトメソッドを呼び出すには、さらにインタフェース名をsuperの前に付け加えます。設問のようにAインタフェースのsampleメソッドを呼び出すのであれば、次のように記述します。\n\n例 インタフェースが持つデフォルトメソッドを呼び出す\n\n```java\nA.super.sample();\n```\n\nただしこの構文は、サブインタフェースやインタフェースを直接実現したクラスでしか使用できません。オーバーライドしたメソッドから元のデフォルトメソッドの呼び出しは、2つ以上の実現や継承の階層をまたいで行うことはできません。設問のコードは、次のようなインタフェースとクラスの関係になっているため、CクラスのsampleメソッドからAインタフェースのsampleメソッドを呼び出すことはできません。\n\n【設問のインタフェース、クラスの関係】\n\n<<interface>> A\n\n```text\n  +sample(): void\n        △\n        │\n```\n\n<<interface>> B\n\n```text\n        △\n        │\n```\n\nC\n\n```text\n  +sample(): void\n```\n\n以上のことから、選択肢Eが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.301 / 5章 解説PDF p.301",
        "codeBlocks": [
          {
            "title": "出力結果",
            "code": "Hello\nJava"
          },
          {
            "title": "A.java",
            "code": "public interface A {\n    default void sample() {\n        System.out.println(\"Hello\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public interface B extends A {\n\n}"
          },
          {
            "title": "C.java",
            "code": "public class C implements B {\n    @Override\n    public void sample() {\n        // insert code here\n        System.out.println(\"Java\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new C();\n        a.sample();\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "override/overload",
          "inheritance/polymorphism"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q07",
        "number": 7,
        "type": "single",
        "selectCount": 1,
        "title": "複数defaultメソッドの衝突",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Aが表示される"
          },
          {
            "key": "B",
            "text": "Bが表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問7）。",
          "pdfExplanation": "正解：C\n\nJavaでは2つ以上のクラスを同時に継承する多重継承が禁止されていますが、インタフェースの多重実現は可能です。多重実現で注意しなければいけないのが、同じシグニチャのデフォルトメソッドの存在です。同じシグニチャのデフォルトメソッドを持つインタフェースを同時に実現した場合、どちらのデフォルトメソッドの実装を使うのかを宣言しなければいけません。具体的には、デフォルトメソッドをオーバーライドし、その処理内でどちらかのデフォルトメソッドを呼び出します。たとえば、設問のコードであれば、AとBという2つのインタフェースがあり、Main クラスはこれらのインタフェースを同時に実現しています。\n\n【設問のインタフェースとクラスの関係】\n\n```text\n<<interface>> A        <<interface>> B\n    +test()                +test()\n        △                    △\n         \\                  /\n          \\                /\n```\n\nMain\n\n```text\n               +test()\n```\n\nAとB どちらのインタフェースにもtestという同じシグニチャのデフォルトメソッドが定義されているため、Mainクラスはtestメソッドをオーバーライドし、次のようにA （もしくはB) のtestメソッドを呼び出すコードを記述しなければコンパイルエラーとなります。呼び出すデフォルトメソッドを特定する\n\n```java\npublic class Main implements A, B {\n    public static void main(String[] args) {\n        new Main().test();\n    }\n```\n\n```java\n    @Override\n    public void test() {\n        A.super.test();\n    }\n}\n```\n\n以上のことから、選択肢Cが正解となります。\n\nなお、インタフェースの多重実現だけでなく、次のようにインタフェースの多重継承でも同様です。次の例では、前述の2つのインタフェースを多重継承したCインタフェースを定義しています。このインタフェースでも、どちらのデフォルト実装を引き継ぐのかを宣言しなければ、コンパイルエラーとなります。インタフェースの多重継承\n\n```java\npublic interface C extends A, B {\n    @Override\n    default void test() {\n        A.super.test();\n    }\n}\n```\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.302 / 5章 解説PDF p.302",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    default void test() { System.out.println(\"A\"); }\n}"
          },
          {
            "title": "B.java",
            "code": "public interface B {\n    default void test() { System.out.println(\"B\"); }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main implements A, B {\n    public static void main(String[] args) {\n        new Main().test();\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q08",
        "number": 8,
        "type": "multi",
        "selectCount": 3,
        "title": "抽象クラス",
        "prompt": "抽象クラスに関する説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "インスタンスを生成することはできない"
          },
          {
            "key": "B",
            "text": "抽象クラスのメソッドはオーバーライドできない"
          },
          {
            "key": "C",
            "text": "サブクラスから抽象クラスの公開フィールドに自由にアクセスできる"
          },
          {
            "key": "D",
            "text": "抽象クラスを継承した抽象クラスを定義できる"
          },
          {
            "key": "E",
            "text": "抽象メソッドは、すべてのサブクラスが実装しなければいけない"
          }
        ],
        "answer": [
          "A",
          "C",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問8）。",
          "pdfExplanation": "正解：A、C、D\n\n抽象クラスの基礎知識を問う問題です。抽象クラスは、インタフェースとクラスの両方の性質を持ったクラスです。つまり、抽象クラスは、実装を持つ具象メソッドと、実装を持たない抽象メソッドの両方を持つことができます。抽象クラスに定義した具象メソッドは、その抽象クラスを継承したサブクラスが引き継ぎます。また、抽象メソッドは、そのサブクラスでオーバーライドして実装し直さなければいけません。よって、選択肢Bは誤りです。抽象クラス\n\n```java\npublic abstract class AbstractSample {\n    // 具象メソッド（サブクラスが引き継ぐ）\n    public void methodA() {\n        // any code\n    }\n```\n\n```java\n    // 抽象メソッド（サブクラスで実装する）\n    public abstract void methodB();\n}\n```\n\nインタフェースはメソッドの実装を持たないため、インスタンス化できません。インタフェースの特性（抽象メソッド）を持った抽象クラスも、インタフェース同様にインスタンス化できません。よって、選択肢Aは正解です。抽象クラスは、インスタンス化できないことからわかるとおり、継承して利用されることが前提のクラスです。抽象クラスに定義した抽象メソッドは、それを継承した具象クラスが実装を提供します。抽象クラスの継承は具象クラスだけでなく抽象クラスでも可能です。抽象クラスを継承した抽象クラスは、元の抽象クラスを拡張し、新しい抽象メソッドを追加したり、既存の抽象メソッドをオーバーライドして実装することができます。\n\n以上のことから、選択肢Dも正解です。\n\nなお、抽象クラスに定義された抽象メソッドは、これを継承した具象クラスが実装を提供しなければいけません。しかし、抽象クラスを継承した抽象クラスは、このルールに従う必要はありません。抽象メソッドを実装するのは、具象クラスの役割だからです。よって、「すべてのサブクラス」とした選択肢Eは誤りです。\n\nインタフェースには定数フィールドしか定義できませんが、抽象クラスにはフィールドが定義できます。そのため、型だけを提供するインタフェースと違って、抽象クラスには動的に値が変更できるフィールドを定義できます。\n\n【スーパークラスと差分のインスタンス】\n\n```text\n設計時          実装時                 実行時\nA {abstract} -> A.class  --------->  Aのインスタンス\n    ↑                                （これ単体では動作できない）\n    │\n    B          -> B.class  --------->  差分のインスタンス\n                                      両方合わせてBのインスタンス\n```\n\n解答1で学習したように、サブクラスのインスタンスとは、スーパークラスのインスタンスと差分のインスタンスの両方で構成されています。つまり、抽象クラスを継承したサブクラスのインスタンスには、抽象クラスのインスタンスが含まれます。このようにサブクラスのインスタンスは、2つのインスタンスから成り立っているため、たとえそれが抽象クラスであっても、差分のインスタンスからスーパークラスのインスタンスの公開フィールドにアクセスすることができます。\n\n以上のことから、選択肢Cは正解です。\n\n試験対策\n\n抽象クラスはインスタンス化できません。\n\n試験対策\n\n抽象メソッドは、具象クラスが実装しなければいけません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.302 / 5章 解説PDF p.302",
        "tags": [
          "override/overload",
          "inheritance/polymorphism",
          "field/static/scope"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q09",
        "number": 9,
        "type": "single",
        "selectCount": 1,
        "title": "抽象メソッドと動的ディスパッチ",
        "prompt": "次のクラスを利用するプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「C」と表示される"
          },
          {
            "key": "C",
            "text": "AbstractSampleクラスでコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "ConcreteSampleクラスでコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問9）。",
          "pdfExplanation": "正解：A\n\n抽象クラスからのメソッド呼び出しに関する問題です。設問のコードでは、AbstractSampleクラスを継承したConcreteSampleクラスを定義し、mainメソッドでは、そのインスタンスをAbstractSample型で扱っています。Mainクラスの4行目で呼び出しているsampleメソッドは、AbstractSampleに定義されている具象メソッドです。このメソッドでは、コンソールに「A」と表示した後、testメソッドを呼び出しています。このときに実行されるのはAbstractSampleに定義されたtestメソッドではなく、ConcreteSampleに定義されたtestメソッドであることに注意してください。\n\n抽象メソッドは実装を持ちません。その代わり、サブクラスがそのメソッドをオーバーライドして、実装を提供しなければいけません。そのため、AbstractSampleのsampleメソッドが呼び出しているのは、ConcreteSampleに定義されたtestメソッドです。\n\n【設問のConcreteSampleとAbstractSampleのイメージ】\n\n```text\n実装時                         実行時\nAbstractSample.class           sample\n  sample                  ┌────────────┐\n                          │            │ 呼び出し\nConcreteSample.class      │            ↓\n  test                    └───────── test\n```\n\nConcreteSampleのtestメソッドでは、コンソールに「B」を表示し、処理を終了します。その後、sampleメソッドに制御が戻ってコンソールに「C」が表示されるため、コンソールには「A」「B」「C」の3つの文字が表示されることになります。\n\n以上のことから、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.303 / 5章 解説PDF p.303",
        "codeBlocks": [
          {
            "title": "AbstractSample クラス",
            "code": "abstract class AbstractSample {\n    public void sample() {\n        System.out.println(\"A\");\n        test();\n        System.out.println(\"C\");\n    }\n    protected abstract void test();\n}"
          },
          {
            "title": "ConcreteSample クラス",
            "code": "class ConcreteSample extends AbstractSample {\n    protected void test() { System.out.println(\"B\"); }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        AbstractSample s = new ConcreteSample();\n        s.sample();\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "exception",
          "string/reference",
          "array"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q10",
        "number": 10,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーライドの条件",
        "prompt": "オーバーライドに関する説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "引数リストの定義は、型、数、順番のすべてが同じでなければいけない"
          },
          {
            "key": "B",
            "text": "戻り値型は同じでなければいけない"
          },
          {
            "key": "C",
            "text": "抽象メソッドはオーバーライドできない"
          },
          {
            "key": "D",
            "text": "オーバーロードされたメソッドはオーバーライドできない"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問10）。",
          "pdfExplanation": "正解：A\n\nメソッドのオーバーライドの基礎知識を問う問題です。オーバーライドは、サブクラスでスーパークラスに定義されたメソッドを「再定義」することです。「多重定義」を表すオーバーロードと間違えやすいので注意しましょう。\n\nメソッドを再定義するため、メソッドのシグニチャ（メソッド名、引数リストの型、数、順番）は同じでなければいけません。よって、選択肢Aは正解です。戻り値は同じ型であることが基本ですが、同じ型かそのサブクラスであれば、オーバーライドしたメソッドの戻り値型に指定できます。これを共変戻り値と呼びます。たとえば、java.lang.Number型を戻す次のメソッドがあったとします。\n\n例 共変戻り値①\n\n```java\npublic Number method() {\n    // any code\n}\n```\n\n共変戻り値によって、このメソッドをオーバーライドして、次のようにNumber型のサブクラスであるInteger型を戻すメソッドを定義できます。\n\n例 共変戻り値②\n\n```java\npublic Integer method() {\n    // any code\n}\n```\n\n以上のことから、選択肢Bは誤りです。\n\nオーバーライド（override）は、スーパークラスの定義を上書き（overwrite）するのではなく、スーパークラスの定義に加えて、サブクラスに新しい定義を追加（再定義）することです。そのため、サブクラスのインスタンスには、スーパークラスに定義されたメソッドと、サブクラスにオーバーライドされたメソッドの両方が同時に存在することになります。\n\n【オーバーライドのイメージ】\n\n```text\n設計時        実装時                         実行時\nA        ->   A.class  sample      ----->   sample\n↑\nB        ->   B.class  sample      ----->   sample\n                         ↑\n                  オーバーライドしたメソッド\n```\n\nこのように（論理的な）1つのインスタンス内に複数の同じメソッドがあった場合は、オーバーライドされたメソッドが使われます。\n\n抽象クラスに定義する抽象メソッドは、実装を持ちません。実装は、その抽象クラスを継承した具象クラスが提供しなければいけません。具象クラスでは、スーパークラスに定義された抽象メソッドをオーバーライドする義務が課せられます。\n\n以上のことから、選択肢Cは誤りです。\n\nオーバーロードは、メソッド名が同じで引数が異なる「新しいメソッド」を定義すること（多重定義）です。オーバーロードされたメソッドと、オーバーロードしたメソッドは、まったく異なるメソッドです。そのため、それぞれをサブクラスでオーバーライドすることは可能です。オーバーロードとオーバーライドは関係ありません。\n\n以上のことから、選択肢Dも誤りです。\n\n試験対策\n\nオーバーライドしたメソッドの戻り値型には、同じ型か、もしくはサブクラスを使えます。これを共変戻り値といいます。\n\n試験対策\n\nサブクラスでは、オーバーライドされたメソッドが使われます。\n\n参考実行するメソッドを決定する方法として、「メソッド・ディスパッチ・テーブル」という仕組みが使われます。これは、インスタンスが持つメソッドが呼び出されたときに、実際にはどのメソッドを実行するかを定義した表です。\n\nこの表はインスタンス生成時に作られ、JVMが管理します。あるクラスのインスタンスを生成したとき、そのクラスでメソッドがオーバーライドしていた場合、JVMはメソッド・ディスパッチ・テーブルの「実行するメソッド」をオーバーライドしたメソッドにします。そうすることで、そのメソッドを呼び出すと、オーバーライドしたメソッドが実行される仕組みを実現しています。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.304 / 5章 解説PDF p.304",
        "tags": [
          "override/overload"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q11",
        "number": 11,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーライド時のアクセス修飾子",
        "prompt": "protectedなhelloメソッドをサブクラスでオーバーライドするとき、付けられるアクセス修飾子として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "デフォルト（アクセス修飾子なし）"
          },
          {
            "key": "B",
            "text": "private"
          },
          {
            "key": "C",
            "text": "public"
          },
          {
            "key": "D",
            "text": "アクセス修飾子は変えられない"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問11）。",
          "pdfExplanation": "正解：C\n\nメソッドのオーバーライドには、次の3つのルールがあります。\n\n・シグニチャが同じであること\n\n・戻り値型は同じ型か、サブクラス型であること\n\n・アクセス修飾子は同じか、より緩いものを指定すること\n\n本設問は、3つ目のルールに関する問題です。オーバーライドしたメソッドは、元のメソッドよりも厳しいアクセス制御はできません。これは、ポリモーフィズムを使ったときに、正しく動作させるためです。\n\nポリモーフィズムを使えば、実際に動作しているインスタンスの種類を知らなくても、公開されている「型」さえわかれば、そのインスタンスを利用できます（型と実装については、解答3を参照）。もし、インスタンスが持つメソッド定義がオーバーライド元の定義よりも厳しいアクセス制御になっていると、使えることになっている型であるにもかかわらず、実際には動作できないという状態になってしまいます。\n\n次の図は、このような問題を表したものです。SubClassのインスタンスは、ポリモーフィズムによってSuperClassとして振る舞えるにもかかわらず、アクセス修飾子がprivateになっているためmethodメソッドは使えません。これでは、とても「SuperClassとして振る舞える」とはいえません。\n\n【オーバーライドしたメソッドは厳しいアクセス制御に変更できない】\n\n```text\nポリモーフィズムを使うと\nSubClassの存在を知らなくてもよい\nClient  -------------------->  SuperClass\n                               +method()\n                                  △\n                                  │\n                               SubClass\n                               -method()\nこちらはpublic                こちらはprivate\n\nポリモーフィズムを使うとSuperClassとして振る舞えるが、\nmethodメソッドはprivateなのでほかのクラスからは使えない\n```\n\nこのようなことが起こらないように、オーバーライドしたメソッドのアクセス修飾子は同じか、緩いものしか指定できないようになっています。\n\n以上のことから、選択肢Cが正解です。\n\n試験対策\n\nオーバーライドしたメソッドでは、元の定義よりもアクセス制御を緩くすることはできますが、厳しくはできません。\n\n参考オブジェクト指向設計には、「サブクラスは、スーパークラスと置き換え可能でなければいけない」という原則があります。この原則を提唱者であるバーバラ・リスコフの名から取って「リスコフの置換原則（LSV: Liskov Substitution Principle）」と呼びます。オブジェクト指向には、このLSVのほかにもたくさんの原則があります。よりよい設計をするためにも、ぜひこれらの原則をしっかりと学習することをお勧めします。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.304 / 5章 解説PDF p.304",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Sample {\n    protected void hello() {\n        System.out.println(\"hello\");\n    }\n}"
          }
        ],
        "tags": [
          "override/overload"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q12",
        "number": 12,
        "type": "single",
        "selectCount": 1,
        "title": "フィールドの隠蔽とメソッド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「ABAB」と表示される"
          },
          {
            "key": "B",
            "text": "「AAAA」と表示される"
          },
          {
            "key": "C",
            "text": "「AAAB」と表示される"
          },
          {
            "key": "D",
            "text": "Bクラスでコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問12）。",
          "pdfExplanation": "正解：B\n\n継承関係にある2つのクラスで同名のフィールドが使われているとき、どちらが優先されるかを問う問題です。設問のように、サブクラスでスーパークラスに定義されているフィールドと同じ名前のフィールドを定義することは可能です。そのため、Bクラスでコンパイルエラーが発生することはありません。したがって、選択肢Dは誤りです。\n\n解答1で解説したように、サブクラスのインスタンスは、スーパークラスのインスタンスと差分のインスタンスで構成されています。そのため、このように同じ名前のフィールドがあった場合、2つのインスタンスには同名の異なるフィールドが存在することになります。\n\n【スーパークラスと差分のインスタンス】\n\n```text\n設計時        実装時                         実行時\nA        ->   A.class  val        ----->   val\n↑\nB        ->   B.class  val        ----->   val\n```\n\nこのような状態にあったとき、どちらのフィールドが使われるかは、次のようなルールが決まっています。\n\n・フィールドを参照した場合には、変数の型で宣言されたほうを使う\n\n・メソッドを呼び出した場合には、メソッド内の指示に従う\n\nMainクラスの3行目と4行目では、AクラスとBクラスのインスタンスを生成し、どちらもA型の変数で扱うよう指示しています。そのため、5行目と6行目でフィールドを参照したときには、A型に定義されたフィールドの値が使われます。よって、この2行を実行するとコンソールには「AA」とAが2回表示されます。\n\n次に、7行目と8行目でprintメソッドを呼び出しています。このメソッドはAクラスに定義されています。メソッド内ではフィールドvalの値をコンソールに出力する処理だけが記述されています。Aクラスに定義されているメソッドは、Aクラスに定義されているフィールドを使います。そのため、コンソールには、「AA」とさらにAが2回表示されます。\n\nなお、もし次のようにBクラスでこのメソッドをオーバーライドしていた場合には、Bクラスに定義されているフィールドを使います。\n\n例 設問のBクラスでメソッドをオーバーライド\n\n```java\nclass B extends A {\n    String val = \"B\";\n    void print() {\n        System.out.print(val);\n    }\n}\n```\n\n以上のことから、選択肢Bが正解です。\n\n試験対策\n\nポリモーフィズムを使った場合、スーパークラスとサブクラスに同じ名前のフィールドがあったとき、どちらのフィールドを利用するかは、宣言した変数の型によって決まります。\n\n参考どの変数を使うかは、コンパイル時に決まります。コンパイル時には、どの型のインスタンスが動作するかをチェックできないため、変数の型だけが判断基準になります。そのため、「どちらのフィールドを使うか？」という問いは、変数の型によって判断することができます。一方、どのメソッドを使うかは実行時に決まります。そのため、ポリモーフィズムを使ったときには、「どのインスタンスが動作しているか？」「どのメソッドがオーバーライドされているか？」を確認しなければいけません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.304 / 5章 解説PDF p.304",
        "codeBlocks": [
          {
            "title": "A クラス",
            "code": "class A {\n    String val = \"A\";\n    void print() { System.out.print(val); }\n}"
          },
          {
            "title": "B クラス",
            "code": "class B extends A {\n    String val = \"B\";\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new A();\n        A b = new B();\n        System.out.print(a.val);\n        System.out.print(b.val);\n        a.print();\n        b.print();\n    }\n}"
          }
        ],
        "tags": [
          "field/static/scope",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q13",
        "number": 13,
        "type": "single",
        "selectCount": 1,
        "title": "継承メソッドによるインタフェース実装",
        "prompt": "次のクラスを利用するプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Engineerクラスでコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "「work」と表示される"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問13）。",
          "pdfExplanation": "正解：C\n\nインタフェースの実装に関する問題です。解答3で解説したように、インタフェースは型だけを定義し、その実装はインタフェースを実現したクラスが提供します。そのため、インタフェースはポリモーフィズムのために存在するといってもよいでしょう。\n\n設問では、1つのインタフェースと3つのクラスが登場します。ポイントは、EngineerクラスはWorkerインタフェースを実現しているものの、そのスーパークラスであるEmployeeはWorkerインタフェースを実現していない点です。まず、この関係を図で確認します。\n\n【設問のクラス、インタフェースの関係】\n\n```text\nEmployee        <<interface>>\n                   Worker\n   △               △\n   │               ┆\nEngineer ─────────┘\n```\n\n設問では、EngineerのインスタンスをWorker型として扱おうとしています。図からわかるとおり、EngineerクラスはWorkerインタフェースを実現しているため、このポリモーフィズムは成り立ちます。\n\nまた、Engineerクラスには、差分としては何も定義されていませんが、Employeeクラスの特徴を引き継いでいるため、workメソッドを持っています。そのため、Workerインタフェースに規定されたメソッドの実装を提供していると解釈されます。したがって、選択肢AのようにEngineerクラスでコンパイルエラーが発生することはありません。なお、実際の試験では、オーバーライドのルールと同じように、シグニチャや戻り値が一致しているかどうかを確認してください。設問のコードであれば、Workerインタフェースに規定されているメソッド宣言と、Employeeクラスが提供する実装が一致することを確認してください。\n\nMainクラスの4行目では、Workerインタフェースに規定されたメソッドを呼び出しており、EngineerクラスのスーパークラスであるEmployeeが提供するメソッドが実行されます。\n\n以上のことから、選択肢Cが正解です。\n\n試験対策\n\nポリモーフィズムは、継承関係にあるクラス同士だけでなく、インタフェースとの実現の関係でも成り立ちます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.305 / 5章 解説PDF p.305",
        "codeBlocks": [
          {
            "title": "Worker インタフェース",
            "code": "interface Worker { void work(); }"
          },
          {
            "title": "Employee クラス",
            "code": "class Employee {\n    public void work() { System.out.println(\"work\"); }\n}"
          },
          {
            "title": "Engineer クラス",
            "code": "class Engineer extends Employee implements Worker { }"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Worker worker = new Engineer();\n        worker.work();\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "inheritance/polymorphism",
          "main/args",
          "exception"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "参照型と呼び出せるメソッド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Mainクラスの6行目でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "Mainクラスの7行目でコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "Mainクラスの8行目でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "選択肢AとBの両方"
          },
          {
            "key": "E",
            "text": "選択肢BとCの両方"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問14）。",
          "pdfExplanation": "正解：A\n\nポリモーフィズムを使った問題です。解答3で解説したように、型と実装は異なる概念です。ポリモーフィズムを使えば、さまざまな実装を同じ型で扱うことができます。そのため、インスタンスがどのようなメソッドやフィールドを持っていたとしても、扱っている型で定義されているもの以外は使えません。たとえば、次のような2つのクラスがあったとします。\n\n例 Aクラス\n\n```java\npublic class A {\n    public void hello() {\n        // any code\n    }\n}\n```\n\n例 Aクラスを継承するBクラス\n\n```java\npublic class B extends A {\n    public void sample() {\n        // any code\n    }\n}\n```\n\nBクラスはAクラスを継承しているため、BのインスタンスをA型で扱うことができます。このとき、A型で扱っているインスタンスは、A型に定義されているものしか使えません。Bクラスには差分として新しいメソッドが追加されていますが、そのインスタンスをA型で扱っている間は、このメソッドを使うことはできません。次のようなコードはコンパイルエラーになります。\n\n例 Aクラスに定義されていないメソッドをBのインスタンスで呼び出し\n\n（コンパイルエラー）\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        a.sample(); // Aクラスには存在しないメソッド\n    }\n}\n```\n\nポリモーフィズムを使った出題の場合、次の2点を確認してください。\n\n・継承関係や実現関係があり、ポリモーフィズムが成り立つ条件を備えてい\n\nるかどうか\n\n・インスタンスを扱っている「型」に、呼び出しているメソッドが定義され\n\nているかどうか設問のコードを理解するために図に表します。\n\n【設問のクラス、インタフェースの関係】\n\n```text\n<<interface>>\nWorker\n+work()\n   △\n   ┆\nEmployee\n+work()\n+report()\n   △\n   │\nEngineer\n+create()\n```\n\nこの図からわかるように、コードに登場するインタフェースやクラスには、実現や継承の関係があります。mainメソッドでインスタンス化しているのは、3つともEngineer型であるため、ポリモーフィズムを使えば、そのインスタンスをWorker型やEmployee型として扱うことができます。\n\nmainメソッドでは、次にcreateメソッド、workメソッド、reportメソッドを呼び出しています。このとき、どの型で扱っているかがポイントです。6行目では、変数aを使ってcreateメソッドを呼び出しています。しかし、変数aはWorker型であり、このインタフェースにはcreateメソッドは定義されていません。したがって、この6行目でコンパイルエラーが発生します。\n\n7行目では、変数bのworkメソッドを呼び出しています。この変数bはEmployee型であり、workメソッドの定義を持っています。そのため、この行でコンパイルエラーが発生することはありません。\n\n最後の8行目では、変数cのreportメソッドを呼び出しています。この変数cはEngineer型であり、そのスーパークラスであるEmployeeクラスからreportメソッドを引き継いでいます。したがって、この行でコンパイルエラーが発生することはありません。\n\n以上のことから、選択肢Aが正解です。\n\n試験対策\n\nフィールドやメソッドの呼び出しは、変数で定義されたものしか使えません。ポリモーフィズムを使った問題では、変数が何型かを確認するようにしてください。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.306 / 5章 解説PDF p.306",
        "codeBlocks": [
          {
            "title": "Worker.java",
            "code": "public interface Worker { void work(); }"
          },
          {
            "title": "Employee クラス",
            "code": "class Employee implements Worker {\n    public void work() { System.out.println(\"work\"); }\n    public void report() { System.out.println(\"report\"); }\n}"
          },
          {
            "title": "Engineer クラス",
            "code": "class Engineer extends Employee {\n    public void create() { System.out.println(\"create future\"); }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Worker a = new Engineer();\n        Employee b = new Engineer();\n        Engineer c = new Engineer();\n        a.create();\n        b.work();\n        c.report();\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "main/args",
          "interface/default",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェース型配列",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "4行目でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "5行目でコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "6行目でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "7行目でコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "選択肢AとBの両方"
          },
          {
            "key": "F",
            "text": "選択肢CとDの両方"
          },
          {
            "key": "G",
            "text": "選択肢BとCの両方"
          },
          {
            "key": "H",
            "text": "正常に動作する"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問15）。",
          "pdfExplanation": "正解：F\n\n解答14では、ポリモーフィズムを使った出題で確認すべきポイントを2つ挙げました。本設問は、ポイントの1つである「ポリモーフィズムが成り立つかどうか？」についての問題です。\n\nポリモーフィズムは、実際に動作しているインスタンスを、インスタンスの元となった型とは「異なる型」で扱える仕組みです。このとき、互換性のない型にも変換できると、プログラムが動作しない可能性が出てしまいます。そこでJavaでは、無関係なものにはポリモーフィズムが使えないようにコンパイラがチェックしています。\n\n反対に、関係があるものであれば、ポリモーフィズムは成り立ちます。「関係がある」とは、「継承の関係」にあるか、「実現の関係」にあるかのどちらかを指します。ポリモーフィズムを使った問題が出題された場合は、継承や実現の関係にあるかを必ず確認しましょう。\n\n設問のコードを図で表すと次のようになります。\n\n【設問のクラス、インタフェースの関係】\n\n```text\n<<interface>>\nA\n△\n┆\nB\n△\n│\nC          D\n```\n\nこのように図で表すと、インタフェースやクラス同士の関係性が一目瞭然になります。設問のコードを追う前に、継承や実現の関係を図示する習慣を付けるとよいでしょう。\n\nこの図からわかるとおり、ポリモーフィズムを使えば、BのインスタンスをA型として、CのインスタンスをA型として扱うことはできます。しかし、Dクラスは何も関係を持っていないため、ポリモーフィズムを適用して、A型やB型として扱うことはできません。そのため、設問のMainクラスは7行目でコンパイルエラーが発生します。\n\nもう1箇所、設問のコードにはコンパイルエラーが発生する箇所があります。Mainクラスの6行目でAをインスタンス化していますが、Aはインタフェースであり、インスタンス化できません。そのため、この行でもコンパイルエラーが発生します。このように、インスタンス化できないものをインスタンス化して引っかけるような問題に注意して、しっかりコードを確認するようにしましょう。\n\n以上のことから、選択肢Fが正解です。\n\n試験対策\n\nポリモーフィズムが成り立つには、実現か継承関係になければいけないことを理解しましょう。\n\n試験対策\n\nポリモーフィズムについての問題では、UMLのクラス図を書いて関係を確認しましょう。\n\n試験対策\n\nインタフェースや抽象クラスはインスタンス化できません。出題されたコードでは、何をnewしているのかを確認するようにしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.307 / 5章 解説PDF p.307",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A { }"
          },
          {
            "title": "B.java",
            "code": "public class B implements A { }"
          },
          {
            "title": "C.java",
            "code": "public class C extends B { }"
          },
          {
            "title": "D.java",
            "code": "public class D { }"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A[] array = {\n            new B(),\n            new C(),\n            new A(),\n            new D()\n        };\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "array",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q16",
        "number": 16,
        "type": "single",
        "selectCount": 1,
        "title": "ダウンキャスト",
        "prompt": "次のプログラムで、Bのhelloメソッドを呼び出すため、空欄に入る正しいコードを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A b = a;"
          },
          {
            "key": "B",
            "text": "A b = new B();"
          },
          {
            "key": "C",
            "text": "A b = (A) a;"
          },
          {
            "key": "D",
            "text": "B b = a;"
          },
          {
            "key": "E",
            "text": "B b = (A) a;"
          },
          {
            "key": "F",
            "text": "B b = (B) a;"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問16）。",
          "pdfExplanation": "正解：F\n\n型変換に関する問題です。継承関係にある場合、サブクラスのインスタンスをスーパークラス型の変数で扱うことができます。このように、サブクラスをスーパークラス型に変換することを「アップキャスト」と呼びます。一方、スーパークラス型で扱っていたインスタンスを、元の型に戻すことを「ダウンキャスト」と呼びます。\n\n解答14で学習したように、たとえインスタンスがどのような差分を持っていようとも、扱っている型に定義されているものしか使えません。そこで、インスタンスをダウンキャストすることで、差分として定義したメソッドなどを使えるようにできます。\n\n【アップキャスト、ダウンキャスト】\n\n```text\n       A\n       △\n       │\n       B\n\nB -> A  アップキャスト\nA -> B  ダウンキャスト\n```\n\nアップキャストの場合は、型の互換性チェックが簡単に行えます。Aを継承したBというクラスがあったとき、Bクラスの定義には「Aクラスをextendsしている」と宣言されており、コンパイラはこの宣言に基づいて互換性をチェックすればよいからです。そのため、コンパイラの互換性チェックをクリアしていれば、変数の型変換（キャスト）は、自動的に行われます。\n\n一方、ダウンキャストは自動では行えません。先ほどのAを継承したBというクラスがあって、BのインスタンスをA型として扱っていたとします。コンパイラが確認できるのは変数の型だけで、実際にどの型のインスタンスが動作するかまではチェックできません。A型の変数で扱っている参照を、B型の変数に代入しようとしたとき、Aクラスの定義にはBと互換性があるという記述がどこにも見当たりません。そのため、コンパイラはA型の値がB型として扱えるかどうか判断できず、次のコードはコンパイルエラーとなります。互換性のない型（コンパイルエラー）\n\n```java\nA a = new B();\nB b = a; // コンパイルエラー\n```\n\nこれはコンパイル時に、どのインスタンスが動いているかを見ずに変数の型だけで判断することができないためです。しかし、上記のコードを見ればわかるとおり、実際に動作しているのはBのインスタンスです。したがって、実際に動作しているBのインスタンスをB型として扱えるように変更しても何ら問題ないはずです。このようなときに、コンパイラに「問題ない」と保証するためにキャスト式を記述します。先ほどのコードを次のように修正すると、コンパイルエラーは発生せず、A型で扱っていたBのインスタンスをB型に戻すことができ、B型にしかない差分を使うことができます。\n\n例 キャスト式でダウンキャスト\n\n```java\nA a = new B();\nB b = (B) a;\n```\n\nBクラスはAクラスを継承しているため、ここではダウンキャストをする必要があります。また、前述のとおりダウンキャストにはキャスト式が必要です。したがって、選択肢A、B、Dはキャスト式を記述していないため誤りです。キャスト式は、変換したい型をカッコ「（）」内に記述します。この問題ではB型に戻したいので、「(B)」と記述しなければいけません。\n\n以上のことから、選択肢Fが正解です。\n\n試験対策\n\nスーパークラス型をサブクラス型に、インタフェース型を実装クラス型に変換する際には、明示的にキャスト式を記述する必要があります。キャスト式は、コンパイラに対する「互換性の保証」と見なされます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.308 / 5章 解説PDF p.308",
        "codeBlocks": [
          {
            "title": "A クラス",
            "code": "class A { }"
          },
          {
            "title": "B クラス",
            "code": "class B extends A {\n    void hello() { System.out.println(\"hello\"); }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        // insert code here\n        b.hello();\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "operator/control",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q17",
        "number": 17,
        "type": "single",
        "selectCount": 1,
        "title": "不正なダウンキャスト",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Aが表示される"
          },
          {
            "key": "B",
            "text": "Bが表示される"
          },
          {
            "key": "C",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問17）。",
          "pdfExplanation": "正解：D\n\n解答16では、ダウンキャスト時にはキャスト式を記述しなければいけないことを学びました。キャスト式は、プログラマーがコンパイラに対して、互換性を保証することを意味します。本設問は、この「保証」を使った問題です。設問のコードは、Aクラスを継承したBクラスを用意し、mainメソッドではAのインスタンスをA型の変数aで扱っています(3行目）。ポイントは4行目で、この変数をキャストしてB型に変更しようとしています。AにはBとの互換性を示すものは何もないため、自動で型変換をすることはできません。そこで、設問ではキャスト式を記述して、プログラマーがコンパイラに対して、互換性の保証を行っています。そのため、コンパイルエラーが発生することはありません。よって、選択肢Bは誤りです。しかし、変数aの参照先にあるインスタンスは、Aのインスタンスです。AのインスタンスにはBの差分が含まれていないため、Bでオーバーライドしたメソッドを実行できません。AのインスタンスをBのインスタンスに変換することはできません。そのため、コンパイルは問題なく通りますが、実行すると型の変換に失敗した旨の例外がスローされます。キャストは「扱い方」を変える、つまり変数の型を変えるだけで、参照先にあるインスタンスの種類を変更できるわけではないことに注意してください。\n\n以上のことから、選択肢Dが正解です。\n\n試験対策\n\nキャスト式を記述して明示的に型変換をすると、コンパイルは成功します。ただし、型同士に互換性がない場合は、実行時に例外がスローされることを覚えておきましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.309 / 5章 解説PDF p.309",
        "codeBlocks": [
          {
            "title": "A クラス",
            "code": "class A { void hello() { System.out.println(\"A\"); } }"
          },
          {
            "title": "B クラス",
            "code": "class B extends A { void hello() { System.out.println(\"B\"); } }"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new A();\n        B b = (B) a;\n        b.hello();\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "operator/control",
          "main/args",
          "exception"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q18",
        "number": 18,
        "type": "multi",
        "selectCount": 2,
        "title": "コンストラクタでフィールドを初期化",
        "prompt": "Sampleクラスのコンストラクタの空欄に入り、コンソールに10と表示させるコードとして正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "this.num = num;"
          },
          {
            "key": "B",
            "text": "this->num = num;"
          },
          {
            "key": "C",
            "text": "num = num;"
          },
          {
            "key": "D",
            "text": "setNum(num);"
          },
          {
            "key": "E",
            "text": "super.setNum(num);"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問18）。",
          "pdfExplanation": "正解：A、D\n\nフィールドへのアクセス方法についての問題です。同じスコープ（有効範囲）内に同じ名前の変数は宣言できません。ただし、スコープが異なれば、同じ名前の変数を宣言することは可能です。次のコードを例に、スコープについて考えてみます。同じ名前の変数を宣言\n\n```java\npublic void sample() {\n    int num = 10;\n    if (num < 11) {\n        int num = 20;\n        int value = 100;\n    }\n    int value = 200;\n}\n```\n\n図中注記:\n\n・同じ変数名なのでコンパイルエラー\n\n・次の行までがスコープ\n\n・こちらはコンパイルエラーにならない\n\nこのメソッドでは、まず変数numを宣言しています。この変数は、 sample()メソッドブロック（中カッコの範囲）が終わるまで有効な変数です。そのため、4行目で同じ名前の変数を宣言することはできません。5行目では、変数valueを宣言しています。この変数のスコープはifブロックが終わるまでです。つまり、次の行の閉じカッコが出てくるまでがスコープです。そのため、7行目を処理する段階で、5行目で宣言した変数はスコープから外れることになります。変数のスコープは、その変数が属する直近のブロックが終わるまでということを覚えておきましょう。このルールはローカル変数同士（引数含む）のときに適用されます。フィールド同士も同じ名前で宣言はできません。しかし、次のようにフィールドと同じ名前のローカル変数は宣言できます。フィールドと同じ名前のローカル変数を宣言\n\n```java\npublic class Sample {\n    int num = 10;\n```\n\nvoid test() {\n\n```java\n        int num = 20;\n        System.out.println(num);\n    }\n}\n```\n\nこのtestメソッドを呼び出すと、コンソールには20が表示されます。この結果からわかるのは、フィールドとローカル変数の名前が重複した場合には、ローカル変数が優先されるということです。もし、この優先順位に反してフィールドを使いたい場合には、thisを使います。thisはJVMが用意してくれる変数の1つで、インスタンス自身への参照が入っています。そのため、この変数を使って「this.フィールド名」とすることで、ローカル変数ではなく、フィールドを明示的に使うことができます。設問のコードでは、Sampleクラスのコンストラクタでnumを受け取り、getNumメソッドで受け取った値を戻さなければコンソールに「10」と表示されません。ポイントとなるのは、コンストラクタの引数名とフィールド名が重複している点です。引数もローカル変数の一種であるため、「メソッド内ではローカル変数が優先される」というルールが適用されることを忘れないでください。選択肢Aのようにthisを使えば、明示的にフィールドを使うことを指定できます。そのため、引数として受け取った値をフィールドに代入し、その後、getNumメソッドが呼ばれたときに、その値を戻すことができます。よって、正解です。\n\n```text\n選択肢Bは、C++言語などで使われている記号「->」を使っています。Java\n```\n\nでは、この記号をswitch式などで使います。よって、誤りです。\n\n選択肢Cは、thisを付けていません。そのため、前述の「メソッド内ではローカル変数が優先される」というルールが適用され、引数numに引数numの値を「再代入」するという意味になります。これではフィールドの値は変更されず、デフォルト値のままになります。よって、誤りです。選択肢Dはコンストラクタ内で別のメソッドを呼び出しています。コンストラクタは、インスタンスが生成された後、「ほかのインスタンス」から使われる前に実施すべき準備をするためのメソッドです。このようにインスタンスはすでに生成済みであるため、コンストラクタ内からほかのメソッドを呼び出すことは何の問題もありません。この選択肢では、setNum メソッドを使い、フィールドに値をセットしています。そのため、setNumメソッドの実行後、getNumメソッドを呼び出したときには正しい値を戻すことができます。よって、正解です。解答1 で学習したように継承関係にあるサブクラスのインスタンスは、スーパークラスのインスタンスと差分のインスタンスの2つで構成されます。thisは、差分のインスタンス内で使えば差分のインスタンスを指し、スーパークラスのインスタンス内で使えばスーパークラスのインスタンスを指します。\n\n差分のインスタンス内から、スーパークラスのインスタンスにアクセスしたい場合は、thisではなくsuperを使います。設問のSampleクラスは何も継承していないため、暗黙的にそのスーパークラスはjava.lang.Objectクラスになります。Objectクラスには、setNumというメソッドは存在しません。よって、選択肢Eはコンパイルエラーになります。\n\n試験対策\n\nフィールドとローカル変数を同じ名前で宣言した場合、ローカル変数が優先されます。ローカル変数ではなく、フィールドを使いたい場合にはthisを使います。その場合の書式は「this.フィールド名」です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.310 / 5章 解説PDF p.310",
        "codeBlocks": [
          {
            "title": "Sample クラス",
            "code": "class Sample {\n    private int num;\n    public Sample(int num) {\n        // insert code here\n    }\n    public int getNum() { return num; }\n    public void setNum(int num) { this.num = num; }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample(10);\n        System.out.println(s.getNum());\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "field/static/scope",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q19",
        "number": 19,
        "type": "single",
        "selectCount": 1,
        "title": "同名フィールドと継承メソッド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「sample」と表示される"
          },
          {
            "key": "B",
            "text": "「null」と表示される"
          },
          {
            "key": "C",
            "text": "何も表示されない"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問19）。",
          "pdfExplanation": "正解：B\n\n解答18では、thisを使ってインスタンス自身にアクセスできることを学びました。また、継承関係にあるクラスの場合、thisは差分のインスタンス内で使えば差分のインスタンスを指し、スーパークラスのインスタンス内で使えばスーパークラスのインスタンスを指すことも学びました。本設問は、継承関係にあるクラスでthisが使われた場合についての問題です。継承関係にあるクラスのインスタンスは、スーパークラスと差分のインスタンスで構成され、各インスタンスがそれぞれ「this」という変数を持っています（解答18を参照）。次の図で示すように、継承関係にあるクラスのインスタンスを構成しているインスタンスが持つthisと、ほかの構成インスタンスのthisの中身は異なります。(thisの中身はインスタンスごとに異なる）\n\n【図表原本確認済み】\n\n設計時: BはAを継承する。実装時: A.classとB.classがある。実行時: 理論上は1つのインスタンスだが、構成する物理的なインスタンスごとにthisの参照先は異なる。A側のthisはメモリアドレス100、B側のthisはメモリアドレス101を指す。図中注記: 「thisにはそのインスタンスがある場所へのリンクが入っている」「物理的なインスタンスが異なればthisの参照の中身も変わる」。設問のmainメソッドでは、Childクラスのインスタンスを生成し、次の行でChild型に定義されたnameフィールドに「sample」という値を代入しています。解答12で学習した「フィールドへのアクセスはどの型の変数を使うかによって決まる」ということを思い出してください。\n\n［設問のParentクラスとChildクラスのインスタンス②］\n\n【図表原本確認済み】\n\n設計時: ChildはParentを継承する。実装時: Parent.classとChild.classがある。実行時: Parent側インスタンスにはnameとthisがあり、thisは100を指す。Child側差分インスタンスにもnameとthisがあり、thisは101を指す。Child側のnameには「sample」が入っている。図中注記: 「値が入っているのはこちらのインスタンス」。次に、設問のコードではgetNameメソッドを呼び出し、その戻り値をコンソールに表示しています。getNameメソッドはParentクラスに定義されているため、このメソッドのthisが示す先にはParentのインスタンスがあります。しかし、図からわかるとおり、Parentのインスタンスのnameフィールドの値は空のままつまりnullのままです。そのため、戻り値としてnullが戻され、コンソールには「null」という文字列が表示されます。\n\n以上のことから、選択肢Bが正解です。\n\n試験対策\n\nthisは、インスタンス自身への参照を持っています。サブクラスのインスタンスは、スーパークラスのインスタンスと差分のインスタンスの両方で構成されています。thisを使った場合、どちらのインスタンスを示すかに注意してください。\n\n試験対策\n\n名前が重複するスーパークラスのメンバにアクセスしたいときには、superを使います。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.311 / 5章 解説PDF p.311",
        "codeBlocks": [
          {
            "title": "Parent クラス",
            "code": "class Parent {\n    String name;\n    String getName() { return this.name; }\n}"
          },
          {
            "title": "Child.java",
            "code": "public class Child extends Parent {\n    String name;\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Child child = new Child();\n        child.name = \"sample\";\n        System.out.println(child.getName());\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "field/static/scope",
          "main/args",
          "exception"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q20",
        "number": 20,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタ呼び出し順",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「B」と表示される"
          },
          {
            "key": "C",
            "text": "「A」「B」と表示される"
          },
          {
            "key": "D",
            "text": "「B」「A」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問20）。",
          "pdfExplanation": "正解：C\n\n継承関係にあるクラスのインスタンスを作ったときのコンストラクタが、どのような動作をするのかについて問う問題です。コンストラクタは、インスタンスの準備をするためのメソッドで、すべてのインスタンスが持たなければいけません。定義しなかった場合でも、デフォルトコンストラクタが自動的に追加されます。また、継承関係にあるクラスのインスタンスは、スーパークラスと差分のインスタンスで構成されています。そのため、コンストラクタもそれぞれのインスタンスが持っています。継承関係にある場合、スーパークラスのインスタンスも差分のインスタンスも、それぞれ必要な準備を整えなければならないからです。この点を間違えやすいので、注意してください。サブクラスのインスタンスを作るとき、スーパークラスのインスタンスが持つコンストラクタと、差分のインスタンスが持つコンストラクタがあった場合、先に実行しなければいけないのはスーパークラスのインスタンスが持つコンストラクタです。これは、スーパークラスはサブクラスの共通部分を抽出して定義した、いわば「基盤」であり、先に基盤を作ってから差分を追加で載せる必要があるためです。しかし、実際のコードで、インスタンス生成をするときに指定しているコンストラクタは、差分に定義したものです。たとえば設問のコードであれば、Aクラスを継承したBのインスタンスを作るとき、次のようにBクラスのコンストラクタを呼び出しています。差分クラスのインスタンス化\n\n```java\nA a = new B(); // Bクラスのコンストラクタを指定\n```\n\nそのため、実際の動作はBクラスに定義したコンストラクタから始まります。しかし、それでは基盤を作ってから差分を追加するという考えが実現できません。そこで、コンパイラはコンストラクタの1 行目に、次のようなスーパークラスのコンストラクタ呼び出しのコードを追加します。\n\nスーパークラスのコンストラクタ呼び出し\n\n```java\npublic B() {\n    super(); // コンパイラによって自動追加されたコード\n    System.out.println(\"B\");\n}\n```\n\nこれで、サブクラスに定義したコンストラクタから処理が始まっても、実質上、スーパークラスのコンストラクタから処理を進めることができるようになります。設問のコードでは、Aクラスを継承したBのインスタンスを生成しています。そのため、Bのコンストラクタから処理が始まり、その1 行目に追加された\n\n```java\n「super();」というスーパークラスのコンストラクタ呼び出しによって、\n```\n\nAのコンストラクタが実行されます。Aのコンストラクタの処理が終われば、Bのコンストラクタに制御が戻り、残りの処理を実行します。\n\n以上のことから、コンソールには「A」「B」と表示されます。よって、選択肢Cが正解です。\n\n試験対策\n\n継承関係にあるクラスのインスタンス生成時のコンストラクタの動作について理解しましょう。\n\n・スーパークラスのインスタンスが持つコンストラクタが先に実行さ\n\nれなければいけない\n\n・サブクラスのコンストラクタには、スーパークラスのコンストラクタ\n\n```java\nを呼び出す「super();」が、コンパイラによって先頭行に追加される\n```\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.312 / 5章 解説PDF p.312",
        "codeBlocks": [
          {
            "title": "A クラス",
            "code": "class A {\n    public A() { System.out.println(\"A\"); }\n}"
          },
          {
            "title": "B クラス",
            "code": "class B extends A {\n    public B() { System.out.println(\"B\"); }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new B();\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "this()とsuper()を含むコンストラクタ連鎖",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「C」「D」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「B」と表示される"
          },
          {
            "key": "C",
            "text": "「B」「A」「D」「C」と表示される"
          },
          {
            "key": "D",
            "text": "「A」「B」「D」「C」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問21）。",
          "pdfExplanation": "正解：A\n\n解答20では、サブクラスのインスタンスを生成するとき、スーパークラスのコンストラクタから処理されることやそのためにコンパイラによってサブクラスのコンストラクタの先頭行にコードが追加されることを学びました。この問題は、自動的に追加されるコンストラクタではなく、明示的にコンストラクタを呼び出しながら、どのような順序で処理が進むかを問うものです。まず押さえるべきキーワードは、thisとsuper()の2つです。コンストラクタ内から、オーバーロードされた別のコンストラクタを呼び出すときに使うのが「this」です。一方、コンストラクタ内からスーパークラスのコンストラクタを呼び出すのが「super()」です。設問のコードでは、mainメソッドでChildクラスのインスタンスを作るときに次々とコンストラクタがつながって呼び出されていきます。この流れを図にすると、次のようになります。\n\n（設問のコードのコンストラクタ呼び出し）\n\n```java\nclass Parent {\n    public Parent() {\n        System.out.println(\"A\");\n    }\n```\n\n```java\n    public Parent(String val) {\n        this();\n        System.out.println(val);\n    }\n}\n```\n\n```java\nclass Child extends Parent {\n    public Child() {\n        super(\"B\");\n        System.out.println(\"C\");\n    }\n```\n\n```java\n    public Child(String val) {\n        this();\n        System.out.println(val);\n    }\n}\n```\n\n・String型の引数を受け取るコンストラクタを呼び出す\n\n・このコンストラクタでは、thisを使って引数なしの別のコンストラクタを\n\n呼び出す(1)\n\n・引数なしのコンストラクタは、superを使ってString型の引数を受け取るスーパークラスのコンストラクタを呼び出す\n\n(2)\n\n・引数ありのParentのコンストラクタは、thisを使って引数なしのコンストラ\n\nクタを呼び出す(3)\n\n・引数なしのコンストラクタでは、コンソールに「A」と表示し、引数あり\n\nのコンストラクタに戻る(4)\n\n・引数ありのParentのコンストラクタは、コンソールに「B」を表示し、\n\nChildの引数なしのコンストラクタに戻る(5)\n\n・引数なしのChildのコンストラクタは、コンソールに「C」を表示し、引数ありのコンストラクタに戻る\n\n(6)\n\n・引数ありのChildのコンストラクタは、コンソールに「D」を表示する\n\n以上のことから、コンソールには「A」「B」「C」「D」という文字列が表示されます。よって、選択肢Aが正解です。\n\n試験対策\n\nスーパークラスのインスタンスのコンストラクタを明示的に呼び出すときにはsuperを使います。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.313 / 5章 解説PDF p.313",
        "codeBlocks": [
          {
            "title": "Parent クラス",
            "code": "class Parent {\n    public Parent() { System.out.println(\"A\"); }\n    public Parent(String val) {\n        this();\n        System.out.println(val);\n    }\n}"
          },
          {
            "title": "Child クラス",
            "code": "class Child extends Parent {\n    public Child() {\n        super(\"B\");\n        System.out.println(\"C\");\n    }\n    public Child(String val) {\n        this();\n        System.out.println(val);\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        new Child(\"D\");\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "constructor",
          "field/static/scope",
          "main/args"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q22",
        "number": 22,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェースのprivateメソッド",
        "prompt": "インタフェース内の「// insert code here」に記述してコンパイルできるコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "private void a();"
          },
          {
            "key": "B",
            "text": "private void b() { /* do something */ }"
          },
          {
            "key": "C",
            "text": "private default void c() { /* do something */ }"
          },
          {
            "key": "D",
            "text": "上記の選択肢はいずれもコンパイルエラーとなる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問22）。",
          "pdfExplanation": "正解：B\n\nインタフェースのprivateメソッドに関する問題です。デフォルトメソッドをより簡潔にする目的で、インタフェースにprivateメソッドを追加することができます。これにより、複数のデフォルトメソッド内で同じ処理をしていた場合、その処理をまとめることでコードをより簡潔に記述できるようになります。インタフェースのprivateメソッドは、クラスに定義するprivateメソッドと同じ構文で記述できます。また、privateメソッドはデフォルトメソッドではないため、default修飾子は必要ありません。よって、選択肢Bが正解で、選択肢Cは誤りです。インタフェースは本来、公開する型を定義するためのものです。そのため、インタフェースに定義する抽象メソッドはpublicと見なされます。選択肢Aのように処理内容を持たない抽象メソッドをprivateにすることはできません。インタフェースのprivateメソッドは、あくまでもデフォルトメソッドから利用されることを想定しているのを忘れないようにしましょう。なお、インタフェースにはstaticメソッドを定義できますが、同じ処理を実行する複数のstaticメソッドをまとめるにはprivate staticなメソッドを使います。「staticなメソッドは、非staticなメソッドにはアクセスできない」というルールはprivateメソッドの場合も同じで、staticで修飾する必要があります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.314 / 5章 解説PDF p.314",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface Sample {\n    // insert code here\n}"
          }
        ],
        "tags": [
          "interface/default"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q23",
        "number": 23,
        "type": "multi",
        "selectCount": 3,
        "title": "final修飾子",
        "prompt": "finalを付けることができるものとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "abstractクラス"
          },
          {
            "key": "B",
            "text": "インタフェース"
          },
          {
            "key": "C",
            "text": "クラス"
          },
          {
            "key": "D",
            "text": "メソッド"
          },
          {
            "key": "E",
            "text": "フィールド"
          }
        ],
        "answer": [
          "C",
          "D",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問23）。",
          "pdfExplanation": "正解：C、D、E\n\nfinalで修飾できる宣言を問う問題です。クラスを宣言するときにクラス名をfinalで修飾すると、継承できないクラスを定義することができます。たとえば、次のような2 つのクラスがあったとしましょう。AクラスとBクラスの定義\n\n```java\npublic class A {\n    public void test() {\n        System.out.println(\"test\");\n    }\n    // something code\n}\n```\n\n```java\npublic class B {\n    public void test() {\n        System.out.println(\"test\");\n    }\n    // something code\n}\n```\n\nAクラスとBクラスは、共通のtestメソッドを持っています。そこで、スーパークラスを定義してこのメソッドを移動したとしましょう。共通のメソッドをスーパークラスで定義\n\n```java\npublic class Superclass {\n    public void test() {\n        System.out.println(\"test\");\n    }\n}\n```\n\nこのSuperclassクラスを継承することで、AとBにはtestメソッドを記述する必要がなくなります。Superclassクラスを継承\n\n```java\npublic class A extends Superclass {\n    // something code\n}\n```\n\n```java\npublic class B extends Superclass {\n    // something code\n}\n```\n\n継承はとても便利な機能ですが、スーパークラスの変更が強制的にサブクラスに及んでしまうというデメリットもあります。そのため、スーパークラスの変更の内容によっては、サブクラスの動作が予期せぬ形で変化してしまう可能性があります。特に継承の階層が深い場合には、その影響範囲が大きかったり、オーバーライドされてしまっていたりするため、スーパークラスを変更したときの影響が予測しづらくなります。そこで、それ以上継承できないようfinalで修飾しておきます。前述のSuperclassクラスのように、明確に継承されることを前提としたクラスのみfinalを外すのです。こうすると継承の階層を浅く保つことができ、スーパークラスの変更の影響を予測しやすくなるのです。次のコードが、前述のAとBをfinalで修飾した例です。\n\n継承できないようにする\n\n```java\npublic final class A extends Superclass {\n    // something code\n}\n```\n\n```java\npublic final class B extends Superclass {\n    // something code\n}\n```\n\nこのようにfinalで修飾されると、AとBを継承したサブクラスを定義できなくなります。(finalを使ったクラス図）\n\n【図表原本確認済み】\n\nSuperclass test(): void A {final} extends Superclass B {final} extends Superclass? extends A は不可。図中注記: 「これ以上はサブクラスを作れない」。final修飾子は、クラス以外にフィールドやメソッドにも付けることができます。フィールドに付ければ初期化後は変更できないフィールドを、メソッドに付ければオーバーライドできないメソッドを定義することができます。\n\n以上のことから、選択肢C、D 、Eが正解です。抽象クラスは継承することを前提としたクラスです。そのため、継承を制限するfinalで修飾することはできません。よって、選択肢Aは誤りです。また、インタフェースは実現するクラスを用意し、その使い方を規定するためのものです。そのため、やはりfinalで修飾することはできません。よって、選択肢Bも誤りです。明確に継承されることを前提としたクラスのことを、ソフトウェアの「拡張点」と呼びます。ソフトウェアはどこからでも拡張可能にしてしまうと意図しない継承が次々とできてしまう可能性があるため、拡張できる、つまり継承できる場所を限定的にすることで、保守性の低下を避けるようにします。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.314 / 5章 解説PDF p.314",
        "tags": [
          "interface/default",
          "field/static/scope"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "sealedクラスの宣言",
        "prompt": "継承できるクラスをAとBだけに制限したい。クラス宣言として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "public class Sample permits A, B { ... }"
          },
          {
            "key": "B",
            "text": "public sealed class Sample permits A, B { ... }"
          },
          {
            "key": "C",
            "text": "public abstract class Sample extends A, B { ... }"
          },
          {
            "key": "D",
            "text": "public sealed class Sample extends A, B { ... }"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問24）。",
          "pdfExplanation": "正解：B\n\nシールクラスの宣言に関する問題です。解答23で、finalで修飾したクラスはサブクラスを作れないことを学びました。こうすることで、継承の階層が深くなってしまうことを防ぐこともできます。しかし、不用意な継承の濫用を防ぐには、これでもまだ不十分です。たとえば、次のクラス図では、finalで修飾されているAクラスやBクラスを継承したクラスは作れませんが、Superclassクラスを継承すれば自由にサブクラスを作れてしまいます。\n\n【継承可能なサブクラスの作成を制限できない図】\n\n【図表原本確認済み】\n\nSuperclass test(): void A {final} extends Superclass B {final} extends Superclass C extends SuperClass D extends C E extends D F extends D Aの下には「?」があるが、Aはfinalのため継承不可。図中注記: 「これ以上はサブクラスを作れない」「finalではないサブクラスを追加すると...」「継承の階層をどんどん深くできてしまう」。この図からは、当初想定していなかったCクラスが後から追加され、しかもそのCクラスがfinalではなかったために、次々とサブクラス(D、E 、F) が作られてしまったことがわかります。しかし、finalだけでは継承可能な範囲を細かく制限できません。しかも、図のSuperclassクラスのように継承されることを前提としたクラスには、すでにサブクラスであるAやBがいるため、finalで継承を一律に禁止することもできません。長年にわたってプログラムの改修を何度も繰り返すうち、多様なスキルレベルの保守担当者によって想定外のサブクラスを次々と作られてしまい、気がつくと保守性が下がってしまうことがあるのです。このような問題を防ぐために、意図したクラスしか継承できないようにするのが、Java SE 17から導入されたシール（sealed）クラスです。シールクラスを定義するには、クラス宣言時にsealedで修飾し、かつ、permitsに続けて継承を許可するクラスをカンマ区切りで列挙します。たとえば、前述のSuperclassクラスをシールクラスに変更するには、次のように記述します。\n\nシール（sealed）クラス\n\n```java\npublic sealed class Superclass permits A, B {\n    public void test() {\n        System.out.println(\"test\");\n    }\n}\n```\n\nこの例では、Superclassはシールクラスとして宣言され、かつAとBのみ継承を許可しています。これにより、意図しないサブクラスが作られることを防ぐことができるようになります。\n\n以上のことから、sealedでクラス宣言を修飾し、permitsで継承できるクラスを指定している選択肢Bが正解です。\n\n選択肢Aは、sealedでクラス宣言を修飾していません。選択肢Cのabstractは抽象クラスを宣言するためのキーワードで、継承できるクラスを制限するためのものではありません。選択肢D は、permitsではなくextendsを使っています。extendsは継承元を指定するためのキーワードです。よって、これらの選択肢は誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.315 / 5章 解説PDF p.315",
        "tags": [
          "sealed",
          "inheritance/polymorphism"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q25",
        "number": 25,
        "type": "multi",
        "selectCount": 2,
        "title": "sealedクラスの直接サブクラス",
        "prompt": "次のsealedクラスを継承したクラスとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "public final class A extends Sample {}"
          },
          {
            "key": "B",
            "text": "public sealed class A extends Sample {}"
          },
          {
            "key": "C",
            "text": "public non-sealed class A extends Sample {}"
          },
          {
            "key": "D",
            "text": "public class A extends Sample {}"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問25）。",
          "pdfExplanation": "正解：A、C\n\nシールクラスの継承に関する問題です。シールクラスを継承したサブクラスは、次の3つのいずれかの修飾子で修飾されなければいけません。\n\n・final\n\n・sealed\n\n・non-sealed\n\nシールクラスを継承したサブクラスが、これらの修飾子のいずれかで修飾されていない場合は、コンパイルエラーとなります。たとえば、解答24 ではSuperclassクラスをシールクラスにしました。サブクラスであるAとBは、すでにfinalで修飾されているため、コンパイルエラーにはなりません。もしfinalを外してコンパイルすると、次のようにコンパイルエラーになります。コンパイルエラーになる\n\n```java\n> javac A.java\n```\n\nA.java:2:エラー：sealed、\n\n```text\nnon-sealedまたはfinal修飾子が必要です\npublic class A extends Superclass {\n```\n\nエラー1個シールクラスのサブクラスを定義するとき、これ以上継承を深くすることを禁止したい場合には、finalでクラスを修飾します。継承の階層が深くなればなるほど、スーパークラスの変更の影響がわかりにくくなるため、設計上の理由がなければfinalで修飾するようにしましょう。シールクラスのサブクラスをさらに継承したサブクラスを許可する場合は、\n\n```text\nsealedかnon-sealedのどちらかで修飾します。\n```\n\nsealedで修飾した場合は、継承できるサブクラスをpermitsで指定して、限定的な継承を許可します。\n\n```text\nnon-sealedで修飾した場合は、制限なく自由に継承可能なクラスになります。こ\n```\n\nれまで学んできたように、継承は強力な機能である一方で、スーパークラスの変更の影響範囲を特定しづらくなるなどの危険性も合わせ持つため、自由な継承を許可するような設計は、何らかの設計上の理由があるときだけに限定するようにしましょう。選択肢Aはfinalで修飾しており、これ以上サブクラスが定義できないクラスと\n\n```text\nして宣言しています。反対に選択肢Cはnon-sealedで修飾しており、自由にサブクラスを定義できるクラスとして宣言しています。以上のことから、選択肢A、Cが正解です。\n```\n\n選択肢Bはsealedで修飾し、限定されたクラスのみ継承を許可できるようにしていますが、permitsがなく、具体的にどのクラスに継承を許可するかが明示されていません。また、\n\n選択肢Dは、シールクラスのサブクラスであるにもかかわらず、final、sealed、\n\n```text\nnon-sealedで修飾していません。よって、これ\n```\n\nらはコンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.315 / 5章 解説PDF p.315",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public sealed class Sample permits A {\n    // something code\n}"
          }
        ],
        "tags": [
          "sealed",
          "inheritance/polymorphism"
        ],
        "status": "pdf_dense_paraphrase_v9"
      },
      {
        "id": "ch05-q26",
        "number": 26,
        "type": "single",
        "selectCount": 1,
        "title": "sealedインタフェースと直接実装クラス",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "hello、sampleの順に表示される"
          },
          {
            "key": "B",
            "text": "Aクラスでコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "Bクラスでコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第5章 問26）。",
          "pdfExplanation": "正解：B\n\nシールインタフェースに関する問題です。sealedは、クラスだけでなくインタフェースも修飾することができます。シールインタフェースは、シールクラスと同じように継承できるサブインタフェースを指定したり、インタフェースを実現できるクラスを限定したりすることができます。インタフェースを実現したクラスのバリエーションを有限にしたいときなどに、シールインタフェースを使います。以下のコードはシールインタフェースの例です。これまで学んできたシールクラスのように、シールインタフェースを宣言するにはsealedを使ってインタフェース宣言を修飾します。\n\n```java\npublic sealed interface Card permits Club, Heart, Spade, Diamond {\n    // something code\n}\n```\n\nこの例では、トランプのカードを表すインタフェースを表していますが、permitsに列挙されているように、このインタフェースを実現したクラスはClub、Heart、Spade、そしてDiamondの4つのクラスだけに限定されます。sealedインタフェースの実現\n\n```java\npublic final class Club implements Card { // something code }\npublic final class Heart implements Card { // something code }\npublic final class Spade implements Card { // something code }\npublic final class Diamond implements Card { // something code }\n```\n\nこのように、実現できるクラスの種類が将来にわたって有限である場合に、シールインタフェースを使うとよいでしょう。なお、シールインタフェースを継承したサブインタフェースは、次の2つのいずれかの修飾子で修飾されていなければいけません。\n\n・sealed\n\n・non-sealed\n\nまた、シールインタフェースを実装したクラスは、シールクラスと同様に次の3つのいずれかの修飾子で修飾されていなければいけません。\n\n・final\n\n・sealed\n\n・non-sealed\n\n設問のプログラムは、シールインタフェースTestを定義し、それを実現した抽象クラスAを定義しています。しかし、シールインタフェースを実現したクラスは、シールクラスのときと同じように3つの修飾子のいずれかで修飾されなければいけません。そのため、このコードはAクラスでコンパイルエラーが発生します。よって、選択肢Bが正解です。クラスを定義するときに、extends、implements、permitsという3つのキーワードのいくつかを組み合わせて使うときには、extends、implements、permitsの順に記述します。permitsをextendsやimplementsの前に記述するとコンパイルエラーとなります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter5_original_order_transcription_v7_integrated の統合全文から、問題番号ごとに分割して反映。原文寄せだが、OCR誤字・コード崩れ・図表崩れは補正済み。1文字単位の二重照合とjavac/java実行検証は未実施。"
        },
        "source": "5章 問題PDF p.316 / 5章 解説PDF p.316",
        "codeBlocks": [
          {
            "title": "Test.java",
            "code": "public sealed interface Test permits A {\n    void sample();\n}"
          },
          {
            "title": "A.java",
            "code": "public abstract class A implements Test {\n    abstract void hello();\n}"
          },
          {
            "title": "B.java",
            "code": "public final class B extends A {\n    @Override void hello() { System.out.println(\"hello\"); }\n    @Override public void sample() { System.out.println(\"sample\"); }\n}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        Test t = new B();\n        t.sample();\n        A a = (A) t;\n        a.hello();\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "sealed",
          "main/args",
          "exception"
        ],
        "status": "pdf_dense_paraphrase_v9"
      }
    ],
    "ch06": [
      {
        "id": "ch06-q01",
        "number": 1,
        "type": "single",
        "selectCount": 1,
        "title": "try-catchと配列の範囲外アクセス",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「finish」と表示される"
          },
          {
            "key": "B",
            "text": "「error」と表示される"
          },
          {
            "key": "C",
            "text": "「finish」「error」と表示される"
          },
          {
            "key": "D",
            "text": "「error」「finish」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問1）。",
          "pdfExplanation": "正解：B\n\n例外処理を記述するtry-catch文に関する問題です。\n\n例外とは、プログラム実行中に発生する何らかの「トラブル」を指します。トラブルは、プログラマーの不注意で作り込まれるバグだけでなく、要求仕様の間違い、実行マシンの不具合やほかのソフトウェアとの連携不具合など、その種類は多岐にわたります。\n\nしかし、ユーザーが利用するソフトウェアは、トラブルが発生したからといって停止してしまったり、動作しなくなったり、動作しても正常に処理をしないという事態が起きてはいけません。そのためプログラマーには、さまざまな事態に対応する万が一の場合に備えたプログラミングが要求されます。\n\n例外処理は、トラブルが発生したときに「どのように対処すべきか」を記述した処理のことです。Javaでは、例外処理をtry-catchという構文で記述します。例外が発生する可能性がある処理をtryブロックで括り、例外が発生したときの処理をtryブロックに続くcatchブロックに記述します。\n\n```java\ntry {\n    // 例外が発生する可能性がある処理\n} catch (例外クラス型 変数) {\n    // 例外が発生したときの処理\n}\n\n```\n\ntryブロック内には、複数の文を記述できます。もし例外が発生したらtryブロック内の処理は例外が発生するまでです。以降の処理はスキップされ、すぐに対応するcatchブロックに制御が移動します。\n\n設問のコードでは、存在しない1番目の要素としてargs[1]を示す処理で配列の要素外アクセスを行うため、ArrayIndexOutOfBoundsExceptionが発生し、すぐに対応するcatchブロックに移動します。前述のとおり、例外が発生するとそれ以降の処理は実行されないため、「finish」と表示されることはありません。よって、選択肢A、C、Dは誤りです。\n\ncatchブロックは、例外が発生したときの処理を記述するためのブロックです。catchブロックの目的はプログラムを正常な状態に復帰させることで、このブロックの処理が終了すると「トラブルは収束した」として、正常な動作に戻ります。なお、catchブロックは、発生した例外の種類ごとに複数記述できるため、例外の種類ごとに対処方法を変えることができます。\n\n設問のコードでは、配列の要素外アクセスをしているためにArrayIndexOutOfBoundsExceptionが発生しますが、これを受け取るcatchブロックが用意されているため、正しく例外が処理されます。よって、コンソールには「error」と表示され、プログラムは正常に終了します。以上のことから、選択肢Bが正解です。\n\n【試験対策】\n例外が発生すると、すぐに対応するcatchブロックに移動します。\n\n【補足】\n配列は、複数の要素をまとめて扱うオブジェクトであって、要素そのものではありません。そのため、（意味はなくても）要素を1つも扱わない配列を作ることができます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.374 / 6章 解説PDF p.373",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] array = {};\n            array[0] = 10;\n            System.out.println(\"finish\");\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"error\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "array",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q02",
        "number": 2,
        "type": "single",
        "selectCount": 1,
        "title": "try-catch-finallyと起動パラメータ",
        "prompt": "実行時に起動パラメータを何も渡さない場合、次のプログラムの結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「C」と表示される"
          },
          {
            "key": "C",
            "text": "「B」「C」と表示される"
          },
          {
            "key": "D",
            "text": "「A」「B」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問2）。",
          "pdfExplanation": "正解：B\n\n例外処理を記述するtry-catch-finally文に関する問題です。\n\n解答1で学習したように、例外が発生すると、すぐにcatchブロックに制御が移ります。そのため、もし例外が発生すると、それ以降のtryブロックの処理は実行されることはありません。\n\nしかし、接続中のネットワークの切断や、開いたままになっているファイルのクローズ、保持したままのデータベースの接続状態の解放など、例外発生の有無にかかわらず実行しなければならない処理が存在します。こうした例外発生の有無にかかわらず必ず実行したい処理を記述するためにfinallyブロックを使います。\n\nfinallyブロックを記述した場合、例外が発生しなければtryブロック実行後にfinallyブロックに記述した処理が実行されます。もし例外が発生したら、tryブロックからcatchブロックに制御が移り、その後finallyブロックが実行されます。\n\n```java\ntry {\n    // 例外が発生する可能性がある処理\n} catch (例外クラス型 変数) {\n    // 例外が発生したときの処理\n} finally {\n    // 例外発生の有無にかかわらず実行したい処理\n}\n\n```\n\n問題文には「実行時には起動パラメータを何も渡さないこととする」とあります。設問のMainクラスを実行すると、mainメソッドのString配列型引数には、要素数0の配列インスタンスへの参照が渡されます。そのため、lengthの結果は0となり、ifの条件に合致するためコンソールにはAが表示されます。このコードでは例外は発生しないため、catchブロックが実行されることはありません。最後に、finallyが実行されコンソールにCが表示されます。以上のことから、選択肢Bが正解です。\n\n【試験対策】\nfinallyブロックに記述された処理は、例外発生の有無にかかわらず必ず実行されます。実行の順番は以下のいずれかになります。\n\n・try→finally …… 例外が発生しない場合\n・try→catch→finally …… 例外が発生した場合\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.374 / 6章 解説PDF p.374",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            if (args.length == 0) {\n                System.out.println(\"A\");\n            }\n        } catch (NullPointerException e) {\n            System.out.println(\"B\");\n        } finally {\n            System.out.println(\"C\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "exception",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q03",
        "number": 3,
        "type": "single",
        "selectCount": 1,
        "title": "catchの到達可能性",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「B」と表示される"
          },
          {
            "key": "C",
            "text": "「B」「A」と表示される"
          },
          {
            "key": "D",
            "text": "何も表示されない"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問3）。",
          "pdfExplanation": "正解：E\n\ncatchブロックが複数記述されている場合の例外処理に関する問題です。\n\ncatchブロックは複数記述できます。tryブロック内で複数の種類の例外がスローされる可能性がある場合は、catchブロックも複数用意し、それぞれの例外に応じた処理を記述できます。\n\ncatchブロックを複数記述した場合、tryブロック内で例外がスローされると、記述順にcatchブロックでキャッチする例外の種類が評価されます。もし、スローされた例外とcatchブロックが受け取れる例外クラス型が異なる場合は、次のcatchブロックを評価するという具合に、次々とcatchブロックを評価していきます。\n\nこのような複数のcatchブロックが存在するコードが出題された場合は、catchブロックの例外クラスの型を確認します。設問の場合は、SampleExceptionとSubsampleExceptionという2つの例外クラスが用意され、それぞれを受け取るcatchブロックが用意されています。忘れてはならないのは、例外というクラスは「例外の種類を表す」という目的を持っているだけであり、それ以外は普通のクラスと何ら変わらない点です。\n\nそのため、例外クラスのインスタンスも、ほかのクラスと同様にポリモーフィズムを使うことが可能です。\n\n前述のようにcatchブロックは記述した順に評価されるため、SubsampleExceptionがスローされたとき、1つ目のcatchブロックはこのインスタンスへの参照をスーパークラスであるSampleException型で受け取ることが可能です。そのため、対応した例外処理が「あった」と判断され、2つ目のcatchブロックが実行されることはありません。\n\nこのように到達できないコードを記述することはできません。到達不可能なコードを記述した場合、コンパイラはコンパイルエラーを発生させます。よって、選択肢Eが正解です。\n\n【試験対策】\n複数のcatchブロックがある場合、どちらの例外が先にキャッチされるかを確認しましょう。到達可能なコードでなければ、コンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.375 / 6章 解説PDF p.375",
        "codeBlocks": [
          {
            "title": "SampleException.java",
            "code": "public class SampleException extends Exception {}"
          },
          {
            "title": "SubSampleException.java",
            "code": "public class SubSampleException extends SampleException {}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            sample();\n            sub();\n        } catch (SampleException e) {\n            System.out.println(\"A\");\n        } catch (SubSampleException e) {\n            System.out.println(\"B\");\n        }\n    }\n    private static void sample() throws SampleException {\n        throw new SampleException();\n    }\n    private static void sub() throws SubSampleException {\n        throw new SubSampleException();\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "try-finally-catchの順序",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「B」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「C」「B」と表示される"
          },
          {
            "key": "C",
            "text": "「A」「C」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問4）。",
          "pdfExplanation": "正解：D\n\ntry-catch-finally文の構文について問う問題です。\n\ntry-catch-finallyの構文は、その出現順を変更することはできません。したがって、catch-try-finallyやtry-finally-catchのように順番を変更することはできません。\n\n設問のコードは、try-finally-catchの順で記述しており、このルールに反します。そのため、このコードをコンパイルすると、コンパイルエラーが発生します。よって、選択肢Dが正解です。\n\n【試験対策】\ntry-catch-finallyの構文を確実に覚えましょう。catch-try-finallyやtry-finally-catchのように順番を変更することはできません。変更すると、コンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.376 / 6章 解説PDF p.376",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            Object obj = null;\n            System.out.println(obj.toString());\n            System.out.println(\"A\");\n        } finally {\n            System.out.println(\"B\");\n        } catch (NullPointerException e) {\n            System.out.println(\"C\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q05",
        "number": 5,
        "type": "single",
        "selectCount": 1,
        "title": "catch内returnとfinally",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「B」と表示される"
          },
          {
            "key": "C",
            "text": "「B」「A」と表示される"
          },
          {
            "key": "D",
            "text": "「C」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問5）。",
          "pdfExplanation": "正解：C\n\ntry-catch-finally文の例外処理に関する問題です。\n\nfinallyブロックは、例外発生の有無にかかわらず実行したい処理を記述するためのものです。これは設問のようにcatchブロック内でreturnされていても同じです。returnによって呼び出し元のメソッドに制御が戻る前に、finallyブロックは必ず実行されます。finallyブロックが終了してから制御が戻されるため、選択肢AとDは誤りです。\n\n設問のコードでは、testメソッドの引数にnullが渡されているため、tryブロック内でtoStringメソッドを呼び出そうとしてNullPointerExceptionが発生します。対応するcatchブロックでは、何の処理もせずreturnによって呼び出し元であるmainメソッドに値を戻そうとしますが、finallyブロックでBが表示されてから制御が戻ります。そのため、コンソールにはBAの順に表示されます。よって、選択肢Cが正解です。\n\n【補足】\nfinallyブロックが実行されないのは、tryブロックやcatchブロック内で、System.exitメソッドを呼び出してアプリケーションを強制終了したときか、JVMやOSがクラッシュしたときだけです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.377 / 6章 解説PDF p.377",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(test(null));\n    }\n    private static String test(Object obj) {\n        try {\n            System.out.println(obj.toString());\n        } catch (NullPointerException e) {\n            return \"A\";\n        } finally {\n            System.out.println(\"B\");\n        }\n        return \"C\";\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q06",
        "number": 6,
        "type": "single",
        "selectCount": 1,
        "title": "catchとfinallyが両方returnする場合",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "10が表示される"
          },
          {
            "key": "B",
            "text": "20が表示される"
          },
          {
            "key": "C",
            "text": "30が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問6）。",
          "pdfExplanation": "正解：B\n\ncatchブロックとfinallyブロックの両方がreturnで値を戻す場合、どちらの値が戻されるかについて問う問題です。この出題を理解するためには、次の図のように、returnするときに戻り値を格納する専用の変数が用意されていることをイメージしてください。\n\n【returnで戻される値を格納する変数】\n\n```text\n呼び出し元          メソッド\n    |                 |\n    | ----return----> |  戻り値\n\n```\n\n設問のコードの場合は、catchブロックで10という値が戻されます。そのため、図の「戻り値」変数の値は10になります。catchブロックの処理が終了すると、finallyブロックの処理を実行します。そのため、図の「戻り値」変数の値は20に変わります。その後、制御が呼び出し元のmainメソッドに移動するため、戻り値の値は20となります。以上のことから、選択肢Bが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.378 / 6章 解説PDF p.378",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int result = sample();\n        System.out.println(result);\n    }\n    private static int sample() {\n        try {\n            throw new RuntimeException();\n        } catch (RuntimeException e) {\n            return 10;\n        } finally {\n            return 20;\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q07",
        "number": 7,
        "type": "single",
        "selectCount": 1,
        "title": "finallyでローカル変数を変更する場合",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "10が表示される"
          },
          {
            "key": "B",
            "text": "20が表示される"
          },
          {
            "key": "C",
            "text": "30が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問7）。",
          "pdfExplanation": "正解：B\n\n解答6では、returnで戻り値を戻すときに使われる変数が存在することを学習しました。本設問は、この変数の値をfinallyブロックで変更できるかどうかを問うものです。注意してほしいのは、次の図のように戻り値のための変数と、メソッド内で使われている変数valは異なるという点です。\n\n【returnで戻される変数とメソッドの変数】\n\n```text\nメソッド内の変数 val\n        ↓\n戻り値用の変数\n\n```\n\nそのため、設問のようにfinallyブロックで値を変更したとしても、変数valの値が変わるだけで、戻り値のための変数の値は変わりません。以上のことから、選択肢Bが正解です。\n\nなお、これはプリミティブ型の場合で、参照型の場合は戻り値のための変数もメソッド内の変数も同じインスタンスへの参照を持っているため、finallyブロックで戻すインスタンスの値を変更することは可能です。\n\n【メソッドの変数が参照型の場合】\n\n```text\nメソッド内の変数 ─┐\n                  ├─ 同じインスタンス\n戻り値用の変数 ──┘\n\n```\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.379 / 6章 解説PDF p.378",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(sample());\n    }\n    private static int sample() {\n        int val = 10;\n        try {\n            val += 10;\n            return val;\n        } finally {\n            val += 10;\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "field/static/scope",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q08",
        "number": 8,
        "type": "single",
        "selectCount": 1,
        "title": "tryとfinallyの数",
        "prompt": "try-catch-finally文の構文に関する説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "tryブロックは複数記述できる"
          },
          {
            "key": "B",
            "text": "catchブロックは必ず1つだけ記述する"
          },
          {
            "key": "C",
            "text": "finallyブロックは複数記述できる"
          },
          {
            "key": "D",
            "text": "catchブロックは省略できるが、finallyブロックは1つだけである"
          },
          {
            "key": "E",
            "text": "tryブロックだけで例外処理文を構成できる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問8）。",
          "pdfExplanation": "正解：D\n\ntry-catch-finally文の構文に関する問題です。\n\n例外処理を記述するためのtry-catch-finallyの構文のうち、tryブロックとfinallyブロックは1つずつしか記述できません。catchブロックのみ複数記述できます。\n\nまた、catchブロックを省略することも可能です。catchブロックを省略するのは、そのメソッド内では例外処理の方法を決められないケースです。\n\nたとえば、次のコードでは、例外がスローされる可能性のあるメソッドであることを宣言（throws）しています。また、catchブロックを省略しているため、例外が発生した場合には、このメソッド内では一切の例外処理をしません。\n\nただし、finallyによって、スローの前に「必ず実行したい処理」が実行されます。\n\n【catchブロックの省略】\n\n```java\npublic void method() throws Exception {\n    try {\n        // 例外が発生する可能性のあるコード\n    } finally {\n        // 必ず実行したい処理\n    }\n}\n\n```\n\nfinallyブロックは、例外発生の有無にかかわらず実行したい処理を記述するためのものです。そのため、複数記述することはできません（コンパイルエラーになります）。catchブロックが複数記述できるのは、例外の種類によって処理内容を変更できるようにするためです。finallyブロックは、例外の種類によって分ける必要がありません。\n\n以上のことから、選択肢Dが正解です。\n\n【試験対策】\ncatchブロックは複数記述できますが、tryとfinallyは1つずつしか記述できません。複数記述した場合には、コンパイルエラーになります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.380 / 6章 解説PDF p.379",
        "tags": [
          "exception"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q09",
        "number": 9,
        "type": "single",
        "selectCount": 1,
        "title": "ネストしたtry-catch-finally",
        "prompt": "ネストしたtry-catch-finallyで、内側try内の配列範囲外アクセスが発生した場合の結果として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「C」「E」「G」と表示される"
          },
          {
            "key": "B",
            "text": "「D」「E」「G」と表示される"
          },
          {
            "key": "C",
            "text": "「E」「F」「G」と表示される"
          },
          {
            "key": "D",
            "text": "「D」「E」と表示される"
          },
          {
            "key": "E",
            "text": "「F」「G」と表示される"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問9）。",
          "pdfExplanation": "正解：B\n\n2つのtry-catchブロックがネストしている問題です。このときのポイントは、「スローされた例外は2つのtry-catchのうち、どちらが受け取るか？」です。このように複数のtry-catchがネストしている場合、スローされた例外を受け取るのは、その例外に対応したもっとも近いcatchブロックです。\n\n設問のコードでは、3つの要素を持った配列インスタンスを作り、存在しない4番目にアクセスすることで、ArrayIndexOutOfBoundsExceptionを発生させています。この例外は、もっとも近いcatchブロックがキャッチします。このcatchブロックでは、コンソールにDを表示する処理を行います。このcatchブロックの処理が終了した後、内側のfinallyブロックが処理され、その後、外側のfinallyブロックが処理されます。finallyブロックは必ず実行される点に注意してください。以上のことから、選択肢Bが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.381 / 6章 解説PDF p.380",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            try {\n                int[] array = {1, 2, 3};\n                System.out.println(array[3]);\n            } catch (ArrayIndexOutOfBoundsException e) {\n                System.out.println(\"D\");\n            } finally {\n                System.out.println(\"E\");\n            }\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"F\");\n        } finally {\n            System.out.println(\"G\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q10",
        "number": 10,
        "type": "single",
        "selectCount": 1,
        "title": "独自例外クラス",
        "prompt": "プログラマーが独自に作成する例外クラスに関する説明として、最も適切なものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "java.lang.RuntimeExceptionクラスのサブクラスでなければいけない"
          },
          {
            "key": "B",
            "text": "java.lang.Exceptionクラスのサブクラスでなければいけない"
          },
          {
            "key": "C",
            "text": "java.lang.Throwableクラスのサブクラスでなければいけない"
          },
          {
            "key": "D",
            "text": "java.lang.Errorクラスのサブクラスでなければいけない"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問10）。",
          "pdfExplanation": "正解：B\n\nJavaの標準クラスライブラリには、あらかじめ多くの例外クラスが用意されています。たとえば、次のようなものがあります。\n\n・参照先がないのに参照先のメソッドを呼び出そうとした\n・アクセス権限のないファイルにアクセスしようとした\n・数値を0（ゼロ）で除算しようとした\n・不正な引数でメソッドが呼び出された\n・データベースでSQLの実行に失敗した\n\nこのように、さまざまなプログラムの実行中のトラブルに対応する例外が用意されていますが、標準クラスライブラリの例外クラスではすべてをカバーしきれません。たとえば、業務上のルールに反していることを示すものや、ソフトウェアアーキテクチャの構造上不可欠なものなどは、ソフトウェア開発時に独自の例外クラスとして定義する必要があります。\n\nJavaでは、プログラムが対処できるトラブルは「例外」、プログラムで対処できないトラブルは「エラー」とされています。\n\n例外とエラーに共通しているのが、スロー（通知）できるという性質です。この性質を表すのが、すべてのエラーと例外のスーパークラスであるjava.lang.Throwableクラスです。エラーや例外の発生時、ThrowableクラスまたはそのサブクラスのインスタンスがJVMによってスローされます。Throwableの下のサブクラスには、エラーを表すjava.lang.Errorと例外を表すjava.lang.Exceptionがあります。独自の例外クラスを定義する際にはExceptionを継承しなければいけません。\n\nまた、Javaの例外は、例外処理（try-catch文、もしくはthrows宣言）の有無をコンパイラがチェックするチェック例外（検査例外）と、チェックしない非チェック例外（非検査例外）に分かれます。Exceptionクラスとそのサブクラスは基本的にチェック例外ですが、java.lang.RuntimeExceptionクラスとそのサブクラスだけは非チェック例外として扱われます。\n\n独自の例外クラスがExceptionクラスのサブクラスであることは必要条件ですが、RuntimeExceptionクラスのサブクラスである必要はありません。そのため、選択肢Bが正解となります。\n\n独自に定義した例外クラスは、Throwableクラスのサブクラスでなくてはいけませんが、Exceptionクラスのサブクラスでなくてはならないとしたほうが適切です。よって、選択肢Cは誤りです。Errorクラスは、プログラムで対処できないトラブルを表すクラスですので、独自の例外クラスを定義する目的には適しません。よって、選択肢Dも誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.382 / 6章 解説PDF p.383",
        "tags": [
          "exception"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q11",
        "number": 11,
        "type": "multi",
        "selectCount": 2,
        "title": "throws句とチェック例外",
        "prompt": "Sampleクラスのhelloメソッドの宣言に入るthrows句として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "throws SampleException, TestException"
          },
          {
            "key": "B",
            "text": "throws SampleException; TestException"
          },
          {
            "key": "C",
            "text": "throws TestException"
          },
          {
            "key": "D",
            "text": "throws SampleException"
          },
          {
            "key": "E",
            "text": "何も記述しなくてもよい"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問11）。",
          "pdfExplanation": "正解：A、D\n\nチェック例外と非チェック例外に関する問題です。\n\nJavaプログラムの実行中に発生するトラブルには、大きく分けて2つの種類があります。実行環境のトラブルなど、プログラムでは対処しようのない事態を表すエラーと、プログラムが対処できる例外の2つです。例外はさらに、チェック例外と非チェック例外に分かれます。チェック例外とは、例外処理を記述したかどうかをコンパイラが検査する例外を指します。もう一方の非チェック例外は、例外処理を記述したかどうかをコンパイラが検査しない例外を指します。\n\nJavaの例外は、チェック例外が基本です。これは、例外処理をプログラマーが記述し忘れることを防ぐためです。ソフトウェアが巨大化、複雑化していく歴史のなかで、例外処理をプログラマーが記述し忘れる失敗が増え、バグの原因となった反省から、コンパイラによる自動チェック機能が盛り込まれたことが背景にあります。\n\nJavaの例外クラスは、大きく分けてErrorとException、RuntimeExceptionに分かれ、それぞれエラー、チェック例外、非チェック例外を表しています。これらの関係を図示すると、次の図のようになります。\n\n【例外クラスの関係】\n\n```text\nThrowable\n├─ Error                    ← エラー\n└─ Exception                ← チェック例外\n   └─ RuntimeException      ← 非チェック例外\n\n```\n\nExceptionクラスのサブクラスはRuntimeExceptionとそのサブクラスを除いて、すべてチェック例外です。そのため、Exceptionクラスを継承している例外クラスは、try-catchしているか、もしくはthrows句で宣言しているかのどちらかを強制されます。一方、ExceptionのサブクラスであってもRuntimeExceptionとそのサブクラスは非チェック例外として扱われます。そのため、RuntimeExceptionとそのサブクラスは、try-catchを強制されません。もちろん、強制されないだけでtry-catchを記述することはできます。また、非チェック例外はthrows句で宣言してもしなくても、どちらでも問題ありません。\n\n設問のコードでは、2つの例外クラスを宣言しています。SampleExceptionは、Exceptionクラスのサブクラスでチェック例外の一種です。もう一方のTestExceptionクラスはRuntimeExceptionのサブクラスで、非チェック例外の一種です。2つの例外クラスの分類が異なる点に注意してください。\n\n設問のhelloメソッドは、引数の値がnullである場合にはSampleExceptionを、空文字である場合にはTestExceptionをスローします。前述のとおり、チェック例外をスローする場合には、メソッド宣言時にthrows句でどのような例外がスローされるかを宣言する必要があります。一方、非チェック例外の場合には、throws句で宣言してもしなくても、どちらでも問題ありません。そのため、選択肢Dは正解です。また、複数の例外をthrows句で宣言するには、カンマ区切りで列挙します。よって、選択肢Aも正解です。\n\n【試験対策】\n非チェック例外はtry-catchを強制されません。また、throws句で宣言しなくても問題ありません。例外クラスが宣言されているコードが出題されたときは、チェック例外と非チェック例外のどちらなのかを確認しましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.383 / 6章 解説PDF p.383",
        "codeBlocks": [
          {
            "title": "SampleException.java",
            "code": "public class SampleException extends Exception {}"
          },
          {
            "title": "TestException.java",
            "code": "public class TestException extends RuntimeException {}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public void hello(String name) /* ここに入る */ {\n        if (name == null) {\n            throw new SampleException();\n        }\n        if (\"\".equals(name)) {\n            throw new TestException();\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "string/reference",
          "inheritance/polymorphism",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q12",
        "number": 12,
        "type": "single",
        "selectCount": 1,
        "title": "Errorに関する説明",
        "prompt": "エラーに関する説明として、誤っているものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "エラーは、プログラムの実行環境にトラブルが発生したときにスローされる"
          },
          {
            "key": "B",
            "text": "エラーは、Errorクラスを継承しなければいけない"
          },
          {
            "key": "C",
            "text": "エラーはthrows句に宣言する必要はない"
          },
          {
            "key": "D",
            "text": "エラーは例外処理を記述できない"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問12）。",
          "pdfExplanation": "正解：D\n\nエラーに関する基本的な知識の問題です。\n\nエラーとは、プログラムからは回復不可能なトラブルが発生したことを指します。たとえば、実行マシンのメモリが不足していたり、データが保存されているディスクに対する読み取りや書き込みの権限がなかったり、ネットワークへの接続ができないといった実行環境に関するトラブルは、プログラムからは対処のしようがありません。\n\nエラーはErrorクラスが表しますが、実際に使われるのは、そのサブクラスです。たとえば、Errorを継承したサブクラスには、OutOfMemoryErrorやNoClassDefFoundError、StackOverflowErrorなどがあります。なお、エラーに分類されるためには、Errorを継承している必要があります。\n\nこれらのトラブルが発生した場合、対応するErrorのサブクラスのインスタンスをJVMが生成し、プログラムに通知します。これは例外と同じメカニズムですが、エラーの場合は例外と違って「プログラムで対処する」ことを求められていません。そのため、try-catchしたり、throwsで宣言したりする必要はありません。\n\nなお、エラーは例外処理をすることを「求められていない」だけであって、キャッチして処理することが可能です。たとえば、次のコードは強制的にStackOverflowErrorを発生させていますが、キャッチして例外処理を行っているため、正常に終了します。\n\n【エラーのキャッチと例外処理】\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            sample();\n        } catch (StackOverflowError e) {\n            // 何らかの例外処理\n        }\n        System.out.println(\"finish\");\n    }\n\n    private static void sample() {\n        sample();\n    }\n}\n\n```\n\n誤りを指摘する問題なので、選択肢Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.384 / 6章 解説PDF p.384",
        "tags": [
          "exception",
          "inheritance/polymorphism"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q13",
        "number": 13,
        "type": "single",
        "selectCount": 1,
        "title": "起動パラメータなしのargs[0]",
        "prompt": "次のプログラムを「java Main」のように起動パラメータなしで実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「null」と表示される"
          },
          {
            "key": "B",
            "text": "「0」と表示される"
          },
          {
            "key": "C",
            "text": "ArrayIndexOutOfBoundsExceptionが発生する"
          },
          {
            "key": "D",
            "text": "NullPointerExceptionが発生する"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問13）。",
          "pdfExplanation": "正解：C\n\n例外クラスに関する問題です。\n\nmainメソッドの引数で参照しているStringの配列は、mainメソッド実行前にJVMが生成したものです。設問のように、javaコマンド実行時に起動パラメータを記述しなかった場合であっても、要素を1つも持たないString配列型オブジェクトが生成され、その参照がmainメソッドの引数に渡されます。\n\n設問のコードでは1つ目の要素にアクセスしています。そのため、要素外アクセスをしたとして、ArrayIndexOutOfBoundsExceptionがスローされます。よって、選択肢Cが正解です。\n\n前述のとおり、起動パラメータを記述しなくても配列型変数の中身がnullになることはありません。したがって、選択肢DのようにNullPointerExceptionが発生することはありません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.384 / 6章 解説PDF p.384",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0].length());\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "string/reference",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "ArrayListの範囲外アクセス",
        "prompt": "次のプログラムをコンパイル、実行したときに発生する例外として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "IndexOutOfBoundsException"
          },
          {
            "key": "B",
            "text": "ArrayIndexOutOfBoundsException"
          },
          {
            "key": "C",
            "text": "StringIndexOutOfBoundsException"
          },
          {
            "key": "D",
            "text": "ListIndexOutOfBoundsException"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問14）。",
          "pdfExplanation": "正解：A\n\n例外クラスに関する問題です。\n\n設問のコードでは、ArrayListのインスタンスを作り、一度も要素を追加せずに、要素を取り出そうとしています。このように存在しない要素を取り出そうとするとIndexOutOfBoundsExceptionが発生します。よって、選択肢Aが正解です。\n\nIndexOutOfBoundsExceptionは、配列や文字列、コレクションの範囲外であることを示す例外クラスです。\n\n選択肢BのArrayIndexOutOfBoundsExceptionは、配列の要素外アクセスを表す例外クラスです。選択肢CのStringIndexOutOfBoundsExceptionは、文字列の範囲外アクセスを表す例外クラスです。IndexOutOfBoundsExceptionは、これらのスーパークラスです。なお、選択肢Dのような例外は存在しません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.385 / 6章 解説PDF p.385",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.get(0);\n    }\n}"
          }
        ],
        "tags": [
          "collection",
          "array",
          "package/import",
          "main/args"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "equals内の不正なキャスト",
        "prompt": "AクラスとBクラスを利用する次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "trueが表示される"
          },
          {
            "key": "B",
            "text": "falseが表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問15）。",
          "pdfExplanation": "正解：D\n\nクラスのキャストと例外クラスに関する問題です。\n\n継承関係や実現関係にないクラスにキャストしようとすると、ClassCastExceptionが発生します。\n\n設問のコードでは、AクラスとBクラスの間には、継承関係も実現関係もありません。AクラスとBクラスがオーバーライドしているequalsメソッドはObjectクラスに定義されているメソッドで、Object型の引数を受け取ります。そのため、引数で受け取る側の型と同じ型にダウンキャストして比較するという処理でオーバーライドするのが一般的です。\n\nequalsメソッドをオーバーライドする場合、本来はダウンキャストするタイミングで、instanceof演算子を使って型に互換性がなかった場合のことを想定してプログラミングするべきです。しかし、設問のコードでは引数で受け取ったオブジェクトをすぐにダウンキャストしています。そのため、Aクラスのequalsメソッドの引数に渡されるのは、互換性のないBクラス型のオブジェクトへの参照です。\n\n設問のコードは、文法上の問題はありません。また、キャスト演算子「()」を記述して明示的に型変換を行っています。そのため、2つのクラスの型に互換性がないことはコンパイル時に検出できません。よって、実行時にクラスがキャストできないという例外であるClassCastExceptionがJVMによってスローされます。以上のことから、選択肢Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.386 / 6章 解説PDF p.385",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    private int num;\n    public A(int num) { this.num = num; }\n    public boolean equals(Object obj) {\n        A a = (A) obj;\n        return this.num == a.num;\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B {\n    private int num;\n    public B(int num) { this.num = num; }\n    public boolean equals(Object obj) {\n        B b = (B) obj;\n        return this.num == b.num;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new A(10);\n        B b = new B(10);\n        System.out.println(a.equals(b));\n    }\n}"
          }
        ],
        "tags": [
          "string/reference",
          "inheritance/polymorphism",
          "operator/control",
          "main/args"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q16",
        "number": 16,
        "type": "single",
        "selectCount": 1,
        "title": "nullに対するメソッド呼び出し",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「blank」と表示される"
          },
          {
            "key": "B",
            "text": "「null」と表示される"
          },
          {
            "key": "C",
            "text": "IllegalArgumentExceptionが発生する"
          },
          {
            "key": "D",
            "text": "NullPointerExceptionが発生する"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問16）。",
          "pdfExplanation": "正解：D\n\n例外クラスに関する問題です。\n\nnullとはリテラルの一種で、変数が「何も参照しない」ことを表現するためのデータです。設問のコードでは、変数strがnullで初期化されています（3行目）。4行目のif文の条件式ではequalsメソッドを呼び出して空文字と等しいかどうかを比べていますが、変数strの中身はnullです。このように、nullに対してメソッドを呼び出すようなコードを記述した場合、実行時例外NullPointerExceptionがスローされます。よって、選択肢Dが正解です。\n\n選択肢CのIllegalArgumentExceptionは、不正な引数を渡した場合などに発生させる例外です。この例外は、JVMがスローするものではなく、プログラムが任意でスローするものです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.387 / 6章 解説PDF p.386",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = null;\n        if (str.equals(\"\")) {\n            System.out.println(\"blank\");\n        } else {\n            System.out.println(\"null\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "string/reference",
          "main/args",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q17",
        "number": 17,
        "type": "single",
        "selectCount": 1,
        "title": "再帰呼び出しとStackOverflowError",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "何も表示されない"
          },
          {
            "key": "B",
            "text": "StackOverflowErrorが発生する"
          },
          {
            "key": "C",
            "text": "IllegalStateExceptionが発生する"
          },
          {
            "key": "D",
            "text": "ExceptionInInitializerErrorが発生する"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問17）。",
          "pdfExplanation": "正解：B\n\n例外クラスに関する問題です。\n\nメソッドが呼び出されると、メソッドの実行に必要な情報がメモリのスタック領域に配置されます。次々とメソッドを呼び出せば、スタック領域にも次々とメソッドの情報が積み重なっていきます。\n\nもちろん、スタック領域は無限の広さを持つわけではなく、その広さは有限です。そのため、設問のコードのように同じメソッドを呼び続ける「再帰呼び出し」を行っていると、スタック領域が足りなくなることがあります。このようにスタック領域が足りなくなった場合、JVMはそのことを検知するとStackOverflowErrorをスローしてプログラムを強制終了します。したがって、選択肢Bが正解です。\n\n選択肢CのIllegalStateExceptionは、オブジェクトを異常な状態のまま利用しようとしたときにスローされる例外です。また、選択肢DのExceptionInInitializerErrorは、staticイニシャライザで何らかの例外が発生したときにJVMによってスローされるエラーです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.387 / 6章 解説PDF p.386",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        main(args);\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "string/reference",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q18",
        "number": 18,
        "type": "single",
        "selectCount": 1,
        "title": "マルチキャッチの記法",
        "prompt": "次のコードのうち、マルチキャッチとして正しく記述されているものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "catch (AException | BException b)"
          },
          {
            "key": "B",
            "text": "catch (AException || BException b)"
          },
          {
            "key": "C",
            "text": "catch (AException && BException b)"
          },
          {
            "key": "D",
            "text": "catch (AException ||| BException b)"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問18）。",
          "pdfExplanation": "正解：A\n\n例外のマルチキャッチに関する問題です。\n\nJavaの例外処理についての基本的な考え方は、「通常処理と例外処理を分けて記述する」です。Javaでは通常処理はtryブロックに、例外処理はcatchブロックに分けて記述することでコードの可読性を高め、仕様変更などのコード変更時に通常処理なのか、例外処理なのかの確認を容易にしようとしています。\n\nこれは重要な方法ですが開発するソフトウェアの規模が大きくなるにつれて新たな問題が発生します。\n\n通常処理を記述する1つのtryブロック内で、いくつもの種類の例外が発生する可能性はあります。そのとき、発生する例外がチェック例外であった場合、発生する例外の種類に応じてcatchブロックを作り、例外処理を記述しなくてはいけません。たとえば、tryブロック内の処理で2種類の例外が発生するのであれば2つ、3種類なら3つのcatchブロックを作り、それぞれ例外処理を記述する必要があります。\n\n【3種類の例外が発生する場合の例外処理】\n\n```java\ntry {\n    // 3種類の例外が発生する処理\n} catch (AException e) {\n    // 例外処理\n} catch (BException e) {\n    // 例外処理\n} catch (CException e) {\n    // 例外処理\n} finally {\n    // finally処理\n}\n\n```\n\nこの例からもわかるように、catchブロックがいくつもつながると煩雑であるだけなく、本来やりたかったコードが隠れてしまい、可読性を下げる原因にもなります。このような場合、マルチキャッチ機能を使うことによって、例外の種類ごとに記述していたcatchブロックの例外処理を1つにまとめることができるため、catchブロックがいくつも連なるようなコードを簡略化することができます。\n\n次のコード例は、マルチキャッチを使って先ほどの3つのcatchブロックを1つにまとめたものです。マルチキャッチを使うことで、コード量が劇的に減り、読みやすくなりました。\n\n【マルチキャッチを使った例外処理】\n\n```java\ntry {\n    // 3種類の例外が発生する処理\n} catch (AException | BException | CException e) {\n    // 例外処理\n} finally {\n    // finally処理\n}\n\n```\n\n以上のことから、選択肢Aが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.388 / 6章 解説PDF p.388",
        "tags": [
          "exception",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q19",
        "number": 19,
        "type": "single",
        "selectCount": 1,
        "title": "マルチキャッチと継承関係",
        "prompt": "複数の例外を同時にキャッチするマルチキャッチに関する説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "RuntimeExceptionを先に記述し、その後にExceptionを記述しなければならない"
          },
          {
            "key": "B",
            "text": "Exceptionを先に記述し、その後にRuntimeExceptionを記述しなければならない"
          },
          {
            "key": "C",
            "text": "例外クラスを記述する順序についての規定はない"
          },
          {
            "key": "D",
            "text": "ExceptionとRuntimeExceptionをマルチキャッチで同時に扱うことはできない"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問19）。",
          "pdfExplanation": "正解：D\n\n例外のマルチキャッチに関する問題です。\n\n例外のマルチキャッチでは、同じ例外処理を1つのcatchブロックにまとめて記述することができます。同じ例外処理をしないのであれば、まとめるべきではありません。たとえば、AExceptionとBExceptionが発生したときは同じ例外処理を実行し、CExceptionが発生したときに別の例外処理を実行したい場合には、次のようにcatchブロックを分けます。\n\n【マルチキャッチを使った例外処理】\n\n```java\ntry {\n    // 3種類の例外が発生する処理\n} catch (AException | BException e) {\n    // 例外処理\n} catch (CException e) {\n    // 例外処理\n} finally {\n    // finally処理\n}\n\n```\n\nただし、1つのcatchブロックに記述できるのは、継承関係にない例外だけです。たとえば次のように、BExceptionクラスはAExceptionクラスを継承しているとしましょう。\n\n【AExceptionクラスを継承するBExceptionクラス】\n\n```java\npublic class BException extends AException {\n}\n\n```\n\nこの場合、前述のマルチキャッチを使ったコードは「その例外はすでにキャッチされている」という旨のメッセージと共にコンパイルエラーが発生します。これは、継承関係にある例外は、ポリモーフィズムを使えばスーパークラス型の例外として扱えるためです。BExceptionへの参照は、BException型だけでなくAException型としても扱えるため、そもそもマルチキャッチにする必要がないのです。そのため、前述のコードは、次のようにAExceptionをキャッチするだけでよくなります。\n\n【ポリモーフィズムにより、例外をスーパークラス型で扱う】\n\n```java\ntry {\n    // 3種類の例外が発生する処理\n} catch (AException e) {\n    // 例外処理\n} catch (CException e) {\n    // 例外処理\n} finally {\n    // finally処理\n}\n\n```\n\nRuntimeExceptionクラスは、Exceptionクラスのサブクラスです。マルチキャッチでは継承関係にあるクラスを同時に扱うことはできません。以上のことから、選択肢Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.388 / 6章 解説PDF p.389",
        "tags": [
          "inheritance/polymorphism",
          "exception"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q20",
        "number": 20,
        "type": "single",
        "selectCount": 1,
        "title": "try-with-resourcesの目的",
        "prompt": "try-with-resourcesの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "catchブロックは必須である"
          },
          {
            "key": "B",
            "text": "finallyブロックは必須である"
          },
          {
            "key": "C",
            "text": "catchブロックかfinallyブロックのどちらかを記述しなければならない"
          },
          {
            "key": "D",
            "text": "try-with-resourcesの主な目的は例外処理ではない"
          },
          {
            "key": "E",
            "text": "選択肢A〜Dはすべて誤りである"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問20）。",
          "pdfExplanation": "正解：D\n\ntry-with-resourcesに関する問題です。\n\ntry-with-resources（リソース付きtryブロック）は、プログラムの中で扱うリソースを自動的に閉じるためのものです。\n\n一般的にプログラムで扱うリソースとは、プログラムからアクセスするデータを指しますが、Javaではデータだけでなく、アクセスするためのインスタンスなどもリソースとして扱います。データが書き込まれているファイルだけでなく、ファイルにアクセスするFileクラスやFileReaderクラスのインスタンスも含まれると考えてください。\n\nリソースは、使うときに開き、使い終わったら閉じなければいけません。大量のデータを効率よく管理するDBMSのように、リソースの種類によってはアクセスできる数に限りがあったり、対象となるリソースへのアクセス権を限定したりするものがあります。このようなリソースは、使用後に閉じなければ、アクセスできなくなる可能性があるのです。\n\n問題は、「リソースを使い終わったら閉じる」のは任意であって、必須ではないため、プログラマーが閉じ忘れる場合があることです。リソースを閉じるコードを記述しなくてもコンパイルエラーにはなりませんし、リソースを閉じなくても正常に処理できてしまうので、テストでも見つかりにくいのです。このようなミスを防ぐために、自動的にリソースを閉じるための構文として導入されたのが、try-with-resources文です。\n\nまず、try-with-resources文以前のコードを見てみましょう。次のコード例は、テキストファイルの内容をコピーするものです。finallyブロックで、入力のためのリソースと出力のためのリソースのcloseメソッドを呼び出し、リソースを閉じている点に注目してください。\n\n【try-with-resources文以前のコード】\n\n```java\nimport java.io.BufferedReader;\nimport java.io.BufferedWriter;\nimport java.io.File;\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class FileCopy {\n    public static void main(String[] args) {\n        BufferedReader in = null;\n        BufferedWriter out = null;\n        try {\n            in = new BufferedReader(new FileReader(new File(\"input.txt\")));\n            out = new BufferedWriter(new FileWriter(new File(\"result.txt\")));\n\n            String line = null;\n            while ((line = in.readLine()) != null) {\n                out.append(line);\n                out.newLine();\n            }\n            out.flush();\n        } catch (IOException e) {\n            throw new RuntimeException(e);\n        } finally {\n            if (in != null) {\n                try {\n                    in.close();\n                } catch (IOException e) {\n                    throw new RuntimeException(e);\n                }\n            }\n            if (out != null) {\n                try {\n                    out.close();\n                } catch (IOException e) {\n                    throw new RuntimeException(e);\n                }\n            }\n        }\n    }\n}\n\n```\n\nこのリソースを閉じるfinallyブロックを丸ごと削除してもコンパイルエラーにはなりません。リソースが解放されない可能性があっても、文法上の間違いはないからです。このプログラムはmainメソッド1つだけの簡単なものですが、数多くのクラスが連携し、データベースやネットワークを経由した別のシステムとの連携や並列処理などの実行中にリソースの閉じ忘れがあると、システム全体が動作しなくなる可能性があります。こうしたリソースの閉じ忘れによる不具合が発生しないように、try-with-resources文以前は、finallyブロックで必ずリソースを閉じるコードを記述する必要がありました。\n\nなお、このコードをtry-with-resourcesを使って記述したコード例は、解説22に掲載しています。コード量が減っていることを確認してみてください。\n\nこのように、try-with-resources文の主な目的は例外処理ではなく、リソースの閉じ忘れを防ぐことです。例外処理のためのtryブロックは、それに続くcatchブロックかfinallyブロックのいずれかが必須でしたが、try-with-resources文では、catchブロックかfinallyブロック、もしくはその両方が省略可能です。以上のことから、選択肢Dが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.389 / 6章 解説PDF p.390",
        "tags": [
          "exception",
          "try-with-resources"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "try-with-resourcesで扱えるリソース",
        "prompt": "try-with-resources文で自動的に閉じられるリソースを定義できるのは、次のうちどれか。",
        "options": [
          {
            "key": "A",
            "text": "java.io.Closeableインタフェースを実装したクラスのみ"
          },
          {
            "key": "B",
            "text": "java.lang.AutoCloseableインタフェースを実装したクラスのみ"
          },
          {
            "key": "C",
            "text": "CloseableとAutoCloseableの両方を実装したクラスのみ"
          },
          {
            "key": "D",
            "text": "CloseableまたはAutoCloseableのいずれかを実装したクラス"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問21）。",
          "pdfExplanation": "正解：D\n\ntry-with-resources文で処理できる対象についての問題です。\n\ntry-with-resources文のカッコ「()」で扱えるのは、java.lang.AutoCloseableインタフェース、もしくはjava.io.Closeableインタフェースを実装したクラスです。よって、選択肢Dが正解です。\n\n2つのインタフェースの違いは、導入された目的です。AutoCloseableインタフェースはtry-with-resourcesが導入されたとき、それに対応する形で導入されました。一方、Closeableインタフェースは、try-with-resourcesが導入される以前から存在しています。Closeableインタフェースは、java.io.BufferedReaderのようなストリームを扱うクラスがそれぞれ実装していたcloseメソッドが共通の型として扱えるように作られたものです。\n\nCloseableインタフェースは、AutoCloseableインタフェースのサブインタフェースとして定義されています。そのため、Closeableで扱えるインスタンスへの参照は、アップキャストすればAutoCloseableでも扱うことが可能です。\n\nまた、これら2つのインタフェースで定義されているcloseメソッドには、throwsで宣言している例外クラスの種類が違うという特徴もあります。次の2つのコード例は、それぞれのインタフェースの実装例です。\n\n【AutoCloseableを実装したクラス】\n\n```java\npublic class SampleResource implements AutoCloseable {\n    @Override\n    public void close() throws Exception {\n        System.out.println(\"close\");\n    }\n}\n\n```\n\nこのクラスは、AutoCloseableインタフェースを実装しており、その唯一の抽象メソッドであるcloseメソッドは、Exception型の例外をスローします。\n\n【Closeableを実装したクラス】\n\n```java\nimport java.io.Closeable;\nimport java.io.IOException;\n\npublic class SampleResource implements Closeable {\n    @Override\n    public void close() throws IOException {\n        System.out.println(\"close\");\n    }\n}\n\n```\n\n一方、Closeableインタフェースを実装したクラスでは、closeメソッドのシグニチャは同じものの、スローする例外クラスがIOException型となっています。このことからも、Closeableインタフェースはあくまでも入出力ストリームを扱うことを前提としたインタフェースであることがわかります。\n\nもし、try-with-resourcesで扱うリソースクラスを独自で定義するのであれば、入出力ストリームに特化したCloseableではなく、AutoCloseableを実装するのが適切でしょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.390 / 6章 解説PDF p.391",
        "tags": [
          "exception",
          "try-with-resources",
          "interface/default"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q22",
        "number": 22,
        "type": "multi",
        "selectCount": 2,
        "title": "try-with-resourcesの正しい記述",
        "prompt": "try-with-resourcesの記述として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "tryのカッコ内でリソースを生成して宣言する"
          },
          {
            "key": "B",
            "text": "tryの前でnull代入した変数をtryのカッコ内で再代入する"
          },
          {
            "key": "C",
            "text": "tryの前で生成した実質的finalなリソース変数をtryのカッコ内に指定する"
          },
          {
            "key": "D",
            "text": "try-with-resources内で宣言したリソース変数をtryブロック内で別インスタンスに代入する"
          },
          {
            "key": "E",
            "text": "tryブロック後にリソース変数を別インスタンスに代入する"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問22）。",
          "pdfExplanation": "正解：A、C\n\ntry-with-resourcesでは、tryキーワードの後ろのカッコ内で宣言したリソースが、自動的に閉じる対象となります。\n\n```java\ntry (自動的に閉じるリソースの宣言) {\n    // リソースを使った処理\n}\n\n```\n\n解答20で使用したテキストファイルの内容をコピーするプログラム（FileCopyクラス）を、try-with-resourcesを使って記述すると次のようになります。リソースが自動的に閉じるのに伴い、finallyブロックが必要なくなったことで、コードが簡潔になりました。\n\n【try-with-resourcesを使ったファイルコピーのプログラム】\n\n```java\nimport java.io.BufferedReader;\nimport java.io.BufferedWriter;\nimport java.io.File;\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class FileCopy {\n    public static void main(String[] args) {\n        try (BufferedReader in =\n                 new BufferedReader(new FileReader(new File(\"input.txt\")));\n             BufferedWriter out =\n                 new BufferedWriter(new FileWriter(new File(\"result.txt\")))) {\n\n            String line = null;\n            while ((line = in.readLine()) != null) {\n                out.append(line);\n                out.newLine();\n            }\n            out.flush();\n        } catch (IOException e) {\n            throw new RuntimeException(e);\n        }\n    }\n}\n\n```\n\nなお、複数のリソースを対象とする場合は、このコード例の10〜13行目のようにセミコロン「;」で区切って列挙します。対象とするリソースが1つだけの場合は、セミコロンは省略可能です（付けることもできます）。\n\ntry-with-resourcesで自動的に閉じる対象とするリソースは、tryに続くカッコだけでなく、次のようにtryブロックの前に宣言を記述することも可能です（選択肢C）。\n\n【tryブロック前でリソースを宣言】\n\n```java\npublic class SampleUsing {\n    public static void main(String[] args) throws Exception {\n        SampleResource resource = new SampleResource();\n        try (resource) {\n            // do something\n        }\n    }\n}\n\n```\n\nこのときの重要なポイントは、「リソースはfinalもしくは実質的にfinalでなくてはならない」ということです（選択肢D）。たとえば、次のようにtryブロック内で新しいインスタンスへの参照をリソースに代入することはできず、コンパイルエラーとなります。\n\n【実質的なfinalでないリソース】\n\n```java\npublic class SampleUsing {\n    public static void main(String[] args) throws Exception {\n        SampleResource resource = new SampleResource();\n        try (resource) {\n            resource = new SampleResource();\n        }\n    }\n}\n\n```\n\n同様に、たとえtryブロックの外であったとしても、リソースは変更できません。次のコードでは、tryブロックの後でリソースを変更しようとしていますが、コンパイルエラーとなります（選択肢E）。\n\n【実質的なfinalでないリソース（tryブロック後で宣言したリソースの変更）】\n\n```java\npublic class SampleUsing {\n    public static void main(String[] args) throws Exception {\n        SampleResource resource = new SampleResource();\n        try (resource) {\n            // do something\n        }\n        resource = new SampleResource();\n    }\n}\n\n```\n\n次のようなコードも、参照先がない（null）と宣言した変数をtryで変更しようとしているため、「実質的finalではない」としてコンパイルエラーとなります（選択肢B）。\n\nなお、自動的に閉じる対象の変数がnullでも、事前にnullチェックを行ってからcloseメソッドを呼び出すため、NullPointerExceptionが発生することはありません。\n\n【実質的なfinalでないリソース（tryブロック前で宣言したリソースの変更）】\n\n```java\npublic class SampleUsing {\n    public static void main(String[] args) throws Exception {\n        SampleResource resource = null;\n        try (resource) {\n            // do something\n        }\n    }\n}\n\n```\n\n選択肢Aは、tryブロックの宣言と同時にリソースのインスタンスを生成しています。よって、正解です。\n\n選択肢Bは、参照先がない（null）と宣言した変数をtryで変更しようとしているため、実質的finalではないという意味でコンパイルエラーとなります。よって、誤りです。\n\n選択肢Cは、tryブロック前で作ったリソースを、try-with-resources文のtryブロックで扱うことを宣言しているものです。よって、正解です。\n\n選択肢Dは、try-with-resources文のtryブロックで宣言した変数の参照を変更しようとしており、実質的finalではないという意味でコンパイルエラーとなります。よって、誤りです。\n\n選択肢Eは、try-with-resources文で宣言した変数の参照を、tryブロック後で変更しようとしているため、実質的finalではないという意味でコンパイルエラーとなります。よって、誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.391 / 6章 解説PDF p.392",
        "tags": [
          "exception",
          "try-with-resources",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q23",
        "number": 23,
        "type": "single",
        "selectCount": 1,
        "title": "リソースが閉じられる順番",
        "prompt": "A、B、Cの3つのリソースをtry-with-resourcesでA、B、Cの順に指定した場合、表示順として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「B」「C」「A」と表示される"
          },
          {
            "key": "C",
            "text": "「C」「B」「A」と表示される"
          },
          {
            "key": "D",
            "text": "「A」「C」「B」と表示される"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問23）。",
          "pdfExplanation": "正解：C\n\ntryで宣言されたリソースが閉じる順番についての問題です。\n\nリソースは、tryブロックの処理が終了すると、宣言したときと逆の順番で自動的に閉じていきます。このとき、tryで生成したインスタンスではなく、事前に生成したインスタンスであっても、tryに記述したのと逆の順番で閉じていきます。\n\n設問では、tryの前にAのインスタンスを生成しています。その後、tryでは、A、B、Cの順で記述しています。そのため、tryブロックが終わると、C、B、Aの順に閉じていきます。以上のことから、選択肢Cが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.392 / 6章 解説PDF p.393",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "try (A a = new A(); B b = new B(); C c = new C()) {\n    // do something\n}\n// close順は C -> B -> A"
          }
        ],
        "tags": [
          "exception",
          "try-with-resources"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "try-with-resourcesで例外が発生した場合の順序",
        "prompt": "try-with-resourcesのtryブロック内で例外が発生したとき、リソースのクローズ、catchブロック、finallyブロックはどの順で実行されるか。",
        "options": [
          {
            "key": "A",
            "text": "finally, catch, close"
          },
          {
            "key": "B",
            "text": "close, catch, finally"
          },
          {
            "key": "C",
            "text": "catch, finally, close"
          },
          {
            "key": "D",
            "text": "catch, close, finally"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問24）。",
          "pdfExplanation": "正解：B\n\ntry-with-resourcesを使う場合でも、catchブロックやfinallyブロックを付けて例外処理を実行することができます。例外発生の有無にかかわらず、リソースのクローズはtryブロックを抜けるタイミングで必ず実行されます。\n\nそのため、tryブロック内で例外が発生しなければ、リソースのクローズ、finallyブロックの順に実行されます。例外が発生すれば、リソースのクローズ、catchブロック、finallyブロックの順に実行されます。\n\n次のコードでは、tryブロック内で強制的に例外を発生させています。なお、ここで利用しているリソースクラスのSampleResourceは、解答21で使っているもので、closeメソッドは「close」とだけコンソールに表示します。\n\n【try-with-resources文と例外処理の例】\n\n```java\npublic class SampleUsing {\n    public static void main(String[] args) {\n        try (SampleResource resource = new SampleResource();) {\n            throw new Exception();\n        } catch (Exception e) {\n            System.out.println(\"catch\");\n        } finally {\n            System.out.println(\"finally\");\n        }\n    }\n}\n\n```\n\nこのクラスを実行すると、次のような結果がコンソールに表示され、リソースのクローズ、catchブロック、finallyブロックの順に実行されていることがわかります。以上のことから、選択肢Bが正解となります。\n\n【実行結果】\n\n```text\n> java SampleUsing\nclose\ncatch\nfinally\n\n```\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.393 / 6章 解説PDF p.396",
        "tags": [
          "exception",
          "try-with-resources"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      },
      {
        "id": "ch06-q25",
        "number": 25,
        "type": "single",
        "selectCount": 1,
        "title": "抑制された例外",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「B」と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時にエラーが発生し、プログラムが強制終了する"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第6章 問25）。",
          "pdfExplanation": "正解：B\n\n抑制された例外に関する問題です。\n\ntryブロック内で例外Aが発生した場合、catchブロックを処理する前にリソースのcloseメソッドが呼ばれます。このとき、リソースのcloseメソッド内でも何らかの例外Bが発生した場合、その例外Bは、tryブロック内で発生した例外Aの内側に隠されてしまい、catchブロックでキャッチすることはできません。catchブロックでキャッチできるのは、tryブロック内で発生した例外Aです。この例外Bのように隠されてしまう例外のことを「抑制された例外」と呼びます。\n\n【抑制された例外を意図的にスローする】\n\n```java\npublic class SampleResource implements AutoCloseable {\n    @Override\n    public void close() throws Exception {\n        System.out.println(\"sample\");\n        throw new RuntimeException(\"sample\");\n    }\n}\n\n```\n\nもし、抑制された例外を扱いたい場合には、java.lang.ThrowableクラスのgetSuppressedメソッドを使います。このメソッドは、抑制された例外への参照をThrowable配列型で戻します。\n\nたとえば次のコード例では、catchブロックでキャッチするのは、tryブロック内でスローした例外です。その例外からgetSuppressedメソッドを使って、抑制された例外の配列を取り出し、コンソールに表示しています。\n\n【キャッチした例外から、抑制された例外への参照を取り出す】\n\n```java\npublic class SampleUsing {\n    public static void main(String[] args) {\n        try (SampleResource resource = new SampleResource();) {\n            throw new Exception();\n        } catch (Exception e) {\n            for (Throwable t : e.getSuppressed()) {\n                System.out.println(t);\n            }\n        } finally {\n            System.out.println(\"finally\");\n        }\n    }\n}\n\n```\n\n【実行結果】\n\n```text\n> java SampleUsing\nsample\njava.lang.RuntimeException: sample\nfinally\n\n```\n\n設問のコードでは、AutoCloseableを実装したTroubleResourceをtry-with-resourcesで扱っています。tryブロック内でExceptionがスローされるため、まずTroubleResourceのcloseメソッドを呼び出して閉じようとしますが、そこでもRuntimeExceptionがスローされます。前述のとおり、例外が発生した際にリソースを閉じようとして、さらに例外が発生した場合、閉じる際に発生した例外は「抑制された例外」として扱われることになります。そのため、catchされるのはtryブロック内で発生したExceptionとなります。以上のことから、選択肢Bが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter6_original_order_transcription_v1 を基に表示用整形を行い、ページ見出しと書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "6章 問題PDF p.393 / 6章 解説PDF p.397",
        "codeBlocks": [
          {
            "title": "TroubleResource.java",
            "code": "public class TroubleResource implements AutoCloseable {\n    @Override\n    public void close() throws Exception {\n        throw new RuntimeException(\"trouble\");\n    }\n}"
          },
          {
            "title": "TroubleMaker.java",
            "code": "public class TroubleMaker {\n    public static void main(String[] args) {\n        try (TroubleResource a = new TroubleResource()) {\n            throw new Exception();\n        } catch (RuntimeException e) {\n            System.out.println(\"A\");\n        } catch (Exception e) {\n            System.out.println(\"B\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "main/args",
          "interface/default",
          "try-with-resources"
        ],
        "status": "pdf_visual_focused_audit",
        "explanationStatus": "dense_paraphrase_pdf_aligned_v10"
      }
    ],
    "ch07": [
      {
        "id": "ch07-q01",
        "number": 1,
        "type": "single",
        "selectCount": 1,
        "title": "デフォルトメソッドと起動パラメータ",
        "prompt": "このプログラムを次のコマンドで実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "「B」と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問1）。",
          "pdfExplanation": "正解：B\n\nデフォルトメソッドに関する問題です。設問には、AとBの2つのインタフェースと、Bを実現したCクラス、そしてmainメソッドを持つSampleクラスの4つのコードが出てきます。AとBの問にはインタフェースの継承関係があります。Bインタフェースでは、Aインタフェースで定義されたsearchメソッドのデフォルト実装を定義している点に注意してください。このデフォルト実装では、第1 引数の配列data内に第2引数targetが存在する回数をカウントし、1回以上存在する場合はtrueを戻します。もし、1つも含まれなければfalseを戻します。Javaコマンドに渡している起動パラメータは5 と2の2つですが、Sample クラスのmainメソッドではargs[0] としているため、最初の引数である5 しか使用されません。5は、searchメソッドの引数に渡した配列内に存在しないため、searchメソッドはfalseを戻します。この結果、コンソールにはBが出力されることになります。以上のことから、選択肢Aは誤りで、選択肢Bが正解です。設問のコードは、インタフェースAとBの継承関係やデフォルト実装、そのデフォルト実装を引き継いだCクラスの実装にも問題がないため、コンパイルエラーは発生しません。よって、選択肢Cは誤りです。選択肢Dのように実行時に例外がスローされるケースとしては、起動パラメータとして数字ではなくアルファベットなどの文字や文字列を渡すと、IntegerのparseIntメソッドが引数を数値に変換できずにNumberFormatExceptionをスローすることが考えられます。しかし、設問のコマンドでは数字を渡しているため、この例外がスローされることはありません。よって、選択肢Dも誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface A {\n    boolean search(int[] data, int target);\n}\n\npublic interface B extends A {\n    @Override\n    default boolean search(int[] data, int target) {\n        int cnt = 0;\n        for (int i : data) {\n            if (i == target) {\n                cnt++;\n            }\n        }\n        return cnt > 0;\n    }\n}\n\npublic class C implements B {\n}\n\npublic class Sample {\n    public static void main(String... args) {\n        if (new C().search(\n            new int[]{1, 2, 3, 7, 9},\n            Integer.parseInt(args[0]))) {\n            System.out.println(\"A\");\n        } else {\n            System.out.println(\"B\");\n        }\n    }\n}\n\n> java Sample 5 2"
          }
        ],
        "tags": [
          "main/args",
          "interface/default",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q02",
        "number": 2,
        "type": "multi",
        "selectCount": 2,
        "title": "別パッケージのimport宣言",
        "prompt": "上記の2つのクラスを次のプログラムで利用するために必要なimport文として、正しいものを選びなさい。（2つ選択）",
        "options": [
          {
            "key": "A",
            "text": "import ex.p1.A;"
          },
          {
            "key": "B",
            "text": "import ex.*;"
          },
          {
            "key": "C",
            "text": "import static ex.p1.*;\nimport static ex.p2.*;"
          },
          {
            "key": "D",
            "text": "import static ex.p1.A;\nimport static ex.p2.B;"
          },
          {
            "key": "E",
            "text": "import ex.p2.*;"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問2）。",
          "pdfExplanation": "正解：A、E\n\n別のパッケージに属するクラスを利用する際のimportの指定方法に関する問題です。設問のコードでは、ex. p 1 パッケージに属するAクラスと、ex. p2パッケージに属するBクラスを利用します。importに関する出題では、アスタリスクを使ったワイルドカードに注意しましょう。ワイルドカードが使えるのはクラス名\nだけで、パッケージ名の途中でワイルドカードを使うことはできません。よって、選択肢Bは誤りです。また、import staticから始まるstaticインポートは、指定されたクラス内のstaticメンバーを利用するときに使うものです。よって、選択肢CとDは誤りです.\n以上のことから、選択肢AとEが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "// ex/p1/A.java\npackage ex.p1;\n\npublic class A {\n}"
          },
          {
            "title": "B.java",
            "code": "// ex/p2/B.java\npackage ex.p2;\n\npublic class B {\n}"
          },
          {
            "title": "C.java",
            "code": "// C.java\npublic class C extends A {\n    public void sample() {\n        B b = new B();\n    }\n}"
          }
        ],
        "tags": [
          "package/import",
          "inheritance/polymorphism",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q03",
        "number": 3,
        "type": "single",
        "selectCount": 1,
        "title": "try-with-resourcesのクローズ順",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「C」と表示される"
          },
          {
            "key": "B",
            "text": "「B」「A」の順に表示される"
          },
          {
            "key": "C",
            "text": "「C」「A」「B」の順に表示される"
          },
          {
            "key": "D",
            "text": "「B」「A」「C」の順に表示される"
          },
          {
            "key": "E",
            "text": "「C」「B」「A」の順に表示される"
          },
          {
            "key": "F",
            "text": "「A」「B」「C」の順に表示される"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問3）。",
          "pdfExplanation": "正解：D\n\ntry-with-resources (リソース付きtryブロック)に関する問題です.\ntry-with-resourcesで宣言されたリソースは、宣言した順とは逆順にcloseメ\nソッドが呼ばれます.設問のコードでは、Aをコンストラクタに渡したリソースに続いてBを渡したリソースが宣言されているため、逆順にcloseメソッドが呼ばれてコンソールにはB、Aの順に表示されます。AutoCloseableのcloseメソッドは、tryブロックを抜けるタイミングで呼ばれるメソッドで、finallyブロックはその後に実行されます.そのため、前述のB、Aに続いてCがコンソールに表示されます.以上のことから、選択肢Dが正解です.\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A implements AutoCloseable {\n    private String name;\n\n    public A(String name) {\n        this.name = name;\n    }\n\n    public void close() throws Exception {\n        System.out.println(name);\n    }\n}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) throws Exception {\n        try (A a = new A(\"A\");\n            A b = new A(\"B\")) {\n        } finally {\n            System.out.println(\"C\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "try-with-resources",
          "main/args",
          "interface/default"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "Stringのinternと同一性比較",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「A」「F」と表示される"
          },
          {
            "key": "B",
            "text": "「A」と表示される"
          },
          {
            "key": "C",
            "text": "「A」「B」「C」「D」「E」「F」と表示される"
          },
          {
            "key": "D",
            "text": "「A」「D」と表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問4）。",
          "pdfExplanation": "正解：A\n\nStringのインスタンスへの参照、およびinternメソッドに関する問題です.設問のコードでは、各変数を次のように初期化しています.\n・変数aには、\nStringのインスタンスを新たに生成し、その参照を代入しています..変数bには、変数aの参照をコピーしています。つまり、2つの変数の参照先は同じになります.\n・変数cには、internメソッドによって生成され、コンスタントプールに保存\nされたインスタンスへの参照が代入されます.変数aはヒープ領域に生成されたインスタンスへの参照であるのに対し、変数cはコンスタントプールに生成されたインスタンスへの参照となる点に注意してください。\n・変数dには、コンスタントプールにあるインスタンスへの参照が使われま\nす•このインスタンスは、変数辺)初期化時に作られたものです.よって、変数cとdは同じインスタンスを参照しています。子は、2つの変数の中身が同じかどうかを比較するものです.そのため`戴霞のコードでは、2::)(7)変数が同じ参照を見ているかどうかという同一性」の判定が行われます.9 J x u n\n・変数aとbは、同じオブジェクトを参照しているため、a== bはtrueです。\nよって、コンソールにAが出力されます。\n・変数aはヒープ領域に生成されたインスタンス、変数cはコンスタントプー\nルに生成されたインスタンスへの参照であるため、a==cの結果はfalseとなります。\n・変数dもコンスタントプールにあるインスタンスへの参照であるため、\na==dの結果もfalseになります。\n・変数bは、変数aと同じインスタンスへの参照であるため、\nb==cおよびb==dの結果もfalseになります。\n・変数dは、コンスタントプールにあるインスタンスを参照しているため、\nc==dの結果はtrueとなります。よって、コンソールにFが出力されます。\n以上のことから、選択肢A、Fが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String a = new String(\"sample\");\n        String b = a;\n        String c = a.intern();\n        String d = \"sample\";\n\n        if (a == b) {\n            System.out.println(\"A\");\n        }\n        if (a == c) {\n            System.out.println(\"B\");\n        }\n        if (a == d) {\n            System.out.println(\"C\");\n        }\n        if (b == c) {\n            System.out.println(\"D\");\n        }\n        if (b == d) {\n            System.out.println(\"E\");\n        }\n        if (c == d) {\n            System.out.println(\"F\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "string/reference",
          "main/args",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q05",
        "number": 5,
        "type": "multi",
        "selectCount": 2,
        "title": "クラス宣言で使える修飾子",
        "prompt": "次のクラスのサブクラスとして、正しいものを選びなさい。（2つ選択）",
        "options": [
          {
            "key": "A",
            "text": "static class B extends A {}"
          },
          {
            "key": "B",
            "text": "protected class B extends A {}"
          },
          {
            "key": "C",
            "text": "sealed class B extends A {}"
          },
          {
            "key": "D",
            "text": "non-sealed class B extends A {}"
          },
          {
            "key": "E",
            "text": "public class B extends A {}"
          },
          {
            "key": "F",
            "text": "final class B extends A {}"
          },
          {
            "key": "G",
            "text": "private class B extends A {}"
          }
        ],
        "answer": [
          "E",
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問5）。",
          "pdfExplanation": "正解：E、F\n\nクラス宣言の際の修飾子に関する問題です。選択肢Aのstatic修飾子はインナークラスにのみ使用できます。選択肢Bのprotected修飾子は、クラス宣言では利用できません。選択肢Cのsealed修飾子~を使用する場合、そのクラスを拡張できるクラスを指定する必要があります。選択肢Dのnon-sealed修飾子は、シールクラスのサブクラスに使用されますが、継承元のAクラスはシールクラスではありません。選択肢Gのprivateは、インナークラスの宣言で利用できます。通常のクラス宣言では利用できません。\n以上のことから、選択肢A、\nB、C、D、Gは誤りで、選択肢E とFが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class A {\n}"
          }
        ],
        "tags": [
          "sealed",
          "inheritance/polymorphism",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q06",
        "number": 6,
        "type": "single",
        "selectCount": 1,
        "title": "varが使えない場所",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "正しくコンパイルされ、実行すると10が表示される"
          },
          {
            "key": "B",
            "text": "正しくコンパイルされ、実行すると20が表示される"
          },
          {
            "key": "C",
            "text": "(2) の行でコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "(3) の行で ClassCastException がスローされる"
          },
          {
            "key": "E",
            "text": "(4) の行でコンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "(5) の行で NumberFormatException がスローされる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問6）。",
          "pdfExplanation": "正解：E\n\nvarに関する問題です。varは、ローカル変数のデータ型を推論（型推論）するためのもので、以下の箇所では使えません。1 .フィールド(インスタンス変数・クラス変数) 2.メソッドの引数3.コンストラクタの引数4.メソッドの戻り値の型5. catchブロックのパラメータ6.ラムダ血パラメータ7.配列の要素の型\n設問のコードでは、(1) の行でnumフィールドの宣言でvarを使っているためコンパイルエラーが発生します。しかし「(1) の行でコンパイルエラーが発生する」という選択肢はないので、ほかの選択肢を検討します。(1) の行のコンパイルエラーにより、\n(4) の行で参照している変数numが宣言されてい\nないことになるため、この行もコンパイルエラーになると考えられます。以上のことから、選択肢Eが正解となります。コンパイルエラーが発生するため、選択肢AとBは誤りです。また、実行することもできないため、選択肢DとFも誤りです。varは予約語ではないため、変数名に使用してもコンパイルエラーにはなりません。よって、選択肢Cも誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    private var num = 10; // (1)\n\n    public A(String num) {\n        var var = Integer.parseInt(num); // (2)\n        this.num = var; // (3)\n    }\n\n    public void print() {\n        int var = num; // (4)\n        System.out.println(var); // (5)\n    }\n}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        new A(\"20\").print();\n    }\n}"
          }
        ],
        "tags": [
          "var",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q07",
        "number": 7,
        "type": "multi",
        "selectCount": 2,
        "title": "sealedクラスのサブクラス",
        "prompt": "次のクラスのサブクラスとして、正しいものを選びなさい。（2つ選択）",
        "options": [
          {
            "key": "A",
            "text": "public non-sealed class D extends A {}"
          },
          {
            "key": "B",
            "text": "public class C extends A {}"
          },
          {
            "key": "C",
            "text": "public class B extends A {}"
          },
          {
            "key": "D",
            "text": "public abstract class C extends A {}"
          },
          {
            "key": "E",
            "text": "public non-sealed class C extends A {}"
          },
          {
            "key": "F",
            "text": "public final class B extends A {}"
          },
          {
            "key": "G",
            "text": "public final class D extends A {}"
          }
        ],
        "answer": [
          "E",
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問7）。",
          "pdfExplanation": "正解：E、F\n\nシールクラスについての出題です。シールクラスは、permitsで許可したクラスに継承を許可するクラスです。設問のコードでは、シールクラスとして宣言されたAクラスは、BとCのみに継承を許可しています。そのため、選択肢AやGのように許可されていないDクラスがAクラスを継承することはできません。よって、これらの選択肢は誤りです。シールクラスを継承したサブクラスは、finalかsealed、もしくはnon-sealedで修飾しなければいけません。そのため、選択肢BやC、Dは誤りです。\n以上のことから、選択肢EとFが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public sealed class A permits B, C {\n}"
          }
        ],
        "tags": [
          "sealed",
          "array",
          "inheritance/polymorphism",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q08",
        "number": 8,
        "type": "multi",
        "selectCount": 2,
        "title": "チェック例外",
        "prompt": "次のうちコンパイラによってチェックされる例外はどれですか。（2つ選択）",
        "options": [
          {
            "key": "A",
            "text": "java.lang.ArrayIndexOutOfBoundsException"
          },
          {
            "key": "B",
            "text": "java.lang.ClassCastException"
          },
          {
            "key": "C",
            "text": "java.lang.Exception"
          },
          {
            "key": "D",
            "text": "java.lang.ArithmeticException"
          },
          {
            "key": "E",
            "text": "java.io.IOException"
          },
          {
            "key": "F",
            "text": "java.lang.NumberFormatException"
          },
          {
            "key": "G",
            "text": "java.lang.RuntimeException"
          }
        ],
        "answer": [
          "C",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問8）。",
          "pdfExplanation": "正解：C、E\n\nチェック例外に関する問題です。選択肢のうち、チェック例外なのは選択肢CとEです。ほかの選択肢はすべてRuntimeExceptionクラスのサブクラスであり、非チェック例外です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "次のうちコンパイラによってチェックされる例外はどれですか。"
          }
        ],
        "tags": [
          "exception",
          "array",
          "sealed",
          "inheritance/polymorphism"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q09",
        "number": 9,
        "type": "multi",
        "selectCount": 2,
        "title": "インタフェース実装メソッドの戻り値型",
        "prompt": "Sampleインタフェースを実装したクラスに記述できるメソッドの定義として、正しいものを選びなさい。（2つ選択）",
        "options": [
          {
            "key": "A",
            "text": "public B execute(Integer num) {\n return new B(num);\n}"
          },
          {
            "key": "B",
            "text": "public Object execute(int num) {\n return new A();\n}"
          },
          {
            "key": "C",
            "text": "public A execute(int num) {\n return new B(num);\n}"
          },
          {
            "key": "D",
            "text": "public B execute(int num) {\n return new B(num);\n}"
          },
          {
            "key": "E",
            "text": "public A execute(Integer num) {\n return new A(num);\n}"
          },
          {
            "key": "F",
            "text": "public B execute(int num) {\n return new A(num);\n}"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問9）。",
          "pdfExplanation": "正解：C、D\n\nメソッドのオーバーライドに関する問題です。サブクラスで再定義するメソッドが、オーバーライドであるためには次の要件を満たす必要があります。1 .メソッドのシグニチャが同じであること2 戻り値型が同じかもしくはサブクラス型であること3 .アクセス修飾子が同じか緩いこと7\n選択肢AとEは、引数の型が異なります。よって誤りです。選択肢Bは、戻り値型がAクラスのスーパークラスであるObject型になっています。よって、誤りです。選択肢Fは、スーパークラスであるAクラスのインスタンスへの参照を、サブクラスであるBクラス型として戻そうとしています。スーパークラスにはサブクラスの差分がないため、コンパイルエラーになります。よって、選択肢F\nも誤りです;\n以上のことから、選択肢C、\nDが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    public int num;\n\n    public A(int num) {\n        this.num = num;\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    public B(int num) {\n        super(num);\n    }\n}"
          },
          {
            "title": "Sample.java",
            "code": "public interface Sample {\n    A execute(int num);\n}"
          }
        ],
        "tags": [
          "override/overload",
          "interface/default",
          "array",
          "inheritance/polymorphism"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q10",
        "number": 10,
        "type": "single",
        "selectCount": 1,
        "title": "instanceofパターンマッチングと動的メソッド呼び出し",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "何も出力されない"
          },
          {
            "key": "B",
            "text": "A、Bの順に表示される"
          },
          {
            "key": "C",
            "text": "A、B、Cの順に表示される"
          },
          {
            "key": "D",
            "text": "Bが表示される"
          },
          {
            "key": "E",
            "text": "Cが表示される"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問10）。",
          "pdfExplanation": "正解：B\n\ninstanceof演算子に関する問題です。設問のコードでは、AクラスとそのサブクラスであるBクラスが定義されています。mainメソッドでは、AとB、そしてStringの3つのインスタンスへの参照を要素に持った配列を作り、拡張for文で順番に取り出しながら、testメソッドに引数として渡しています。そのため、testメソッドは3回呼ばれ、A、B 、Stringの順に引数が渡されます。testメソッドでは、引数の型が凡世と互換性があるかどうかをi nstanceof演算子を使って調べています。引数が凡世またはB型のときは、この演算子はtrueを戻しますが、String型のときにはfalseを戻します。そのため、引数が俎坦とB型のときのみ、executeメソッドが呼ばれることになります。以上のことから、コンソールに1払、80)順に表示されます。よって、選択肢Bが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    public void execute() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    private void test() {\n        System.out.println(\"B\");\n    }\n\n    public void execute() {\n        test();\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Object[] objects = {\n            new A(), new B(), \"C\"\n        };\n        for (Object obj : objects) {\n            test(obj);\n        }\n    }\n\n    private static void test(Object obj) {\n        if (obj instanceof A b) {\n            b.execute();\n        }\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q11",
        "number": 11,
        "type": "single",
        "selectCount": 1,
        "title": "インスタンス変数の変更",
        "prompt": "インスタンス変数 a, b, c, d の値を変更するメソッドはどれか。正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "setAメソッド"
          },
          {
            "key": "B",
            "text": "setBメソッド"
          },
          {
            "key": "C",
            "text": "setCメソッド"
          },
          {
            "key": "D",
            "text": "setDメソッド"
          },
          {
            "key": "E",
            "text": "setAllメソッド"
          },
          {
            "key": "F",
            "text": "どのメソッドも変更しない"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問11）。",
          "pdfExplanation": "正解：E\n\n変数のスコープに関する問題です。setAメソッドでは、引数として宣言したローカル変数aに、ローカル変数aの値を再代入しているだけで、フィールドaを変更していません。フィールドと同名のローカル変数を使う場合、ローカル変数のほうが有効になるため、同名のフィールドにアクセスするためにはthisを使わなければいけません。よって、選択肢Aは誤りです。setBメソッドでは.引数を受け取らず、またローカル変数も宣言していません。そのため.フィールドbにフィールドbの値を再代入しているだけです。フィールドbの値が変更されることはありません。よって、選択肢Bも誤りです。setCメソッドでは.フィールドcの値を戻すだけで.フィールドそのものを変更しません。よって選択肢Cも誤りです。setDメソッドでは、setAメソッドと同様にローカル変数d(こ、ローカル変数dの値を再代入しているだけでフィールドdを変更していません。, よって、選択肢Dも誤りです。\nsetAIIメソッドでは、setDメソッドを呼び出し、その戻り値をフィールドa、b 、C、dに代入しています。よって、このメソッドはフィールドを変更します。以眉上のことから、選択肢Eが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Test.java",
            "code": "public class Test {\n    int a, b, c, d;\n\n    void setA(int a) {\n        a = a;\n    }\n    void setB() {\n        this.b = b;\n    }\n    int setC() {\n        return c;\n    }\n    int setD(int d) {\n        d = d;\n        return d;\n    }\n    void setAll(int x) {\n        a = b = this.c = d = setD(x);\n    }\n}"
          }
        ],
        "tags": [
          "field/static/scope",
          "collection"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q12",
        "number": 12,
        "type": "single",
        "selectCount": 1,
        "title": "継承関係のコンストラクタ",
        "prompt": "次のプログラムが、コンパイルエラーとなる理由として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Aクラスは抽象クラスではなく、具象クラスでなくてはならない"
          },
          {
            "key": "B",
            "text": "Bクラスでオーバーライドしているsampleメソッドのアクセス修飾子をpublicからアクセス修飾子なしにしなくてはならない"
          },
          {
            "key": "C",
            "text": "Bクラスのコンストラクタ内でAクラスのコンストラクタを呼び出さなければならない"
          },
          {
            "key": "D",
            "text": "Bクラスをfinalクラスとして宣言しなくてはならない"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問12）。",
          "pdfExplanation": "正解：C\n\n継承関係にあるクラスのコンストラクタに関する問題です。設問のコードのBクラスのようにコンストラクタを明示的に宣言しなかった場合、デフォルトコンストラクタがコンパイラによって追加されます。デフオルトコンストラクタは、引数なしのスーパークラスのコンストラクタ呼び出しのみを実行するコンストラクタです。そのため、Bクラスのデフォルトコンストラクタは次のような定義になります。回lBクラスのデフォルトコンストラクタ\npublic BO f\nsuper();\n璽しかし、Bクラスの継承元であるAクラスに定義されているのは、int型を1つ受け取るコンストラクタです。このように明示的にコンストラクタが定蓑されていればデフォルトコンストラクタが追加されることはありません。よって、Aクラスには引数なしのコンストラクタは定蓑されていないことになります。そのため、Bクラスでコンパイルエラーが発生します。このコンバイルエラーを解消するには、たとえば次のコード例のように、i n涅奴)引数を受け取るAクラスのコンストラクタを、Bクラスのコンストラクタで呼び出す必要があります。□BクラスのコンストラクタからAクラスのコンストラクタを呼び出す\npublic B(int id) {\nsuper(id);\nJ\n以上のことから、選択肢Cが正解です。\nAクラスは紹承元のクラスであり、抽象クラスであっても影●はありません。よって、選択肢Aは誤りです。Bクラスでは、Aクラスから引き謎いだsam pleメソッドをオーバーライドし、アクセス修飾子をアクセス修飾子なしからpublicに変更しています。オーバー\nライドする際に、アクセス修飾子を厳しくすることはできませんが、ばめることは可能です.よって、選択肢Bも誤りです。AクラスがシールドクラスであればBクラスをfma1で宣言する必要はありますが、Aクラスはシールドクラスではありません。よって、選択肢Dも誤りです。\n(第se. 問難20)\nr13. A i云云fl\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public abstract class A {\n    private int id;\n    public A(int id) {\n        this.id = id;\n    }\n    void sample() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    public void sample() {\n        System.out.println(\"B\");\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "constructor",
          "override/overload",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q13",
        "number": 13,
        "type": "single",
        "selectCount": 1,
        "title": "ポリモーフィズム",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「A」が表示された後、例外がスローされる"
          },
          {
            "key": "C",
            "text": "「A」「B」「C」と表示された後、例外がスローされる"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問13）。",
          "pdfExplanation": "正解：A\n\nポリモーフィズムについての出題です.設問のコードでは、Aクラスと継承したBクラスとCクラスを定義しています.BもCもどちらもAクラスのサブクラスであるため、ポリモーフィズムを使えばAクラス型として参照を扱うことができます。そのため、設問のコードでコンパイルエラーが発生することはありません。よって、選択肢Dは誤りです.また.キャスト式を記述してダウンキャストしている図所もないため、実行時に例外がスローされることもありません。よって、選択肢B とCも誤りです。L壮のことから、選択肢ゆ’正解です.\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    public void sample() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    public void sample() {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "C.java",
            "code": "public class C extends A {\n    public void sample() {\n        System.out.println(\"C\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A[] list = {\n            new A(), new B(), new C()\n        };\n        for (A obj : list) {\n            obj.sample();\n        }\n    }\n}"
          }
        ],
        "tags": [
          "inheritance/polymorphism",
          "main/args",
          "exception",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文と通常for文",
        "prompt": "次のコード2行目から4行目と等しい処理はどれか。正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "for (int i = 0; i < array.length; i++) {\n    System.out.println(array[i]);\n}"
          },
          {
            "key": "B",
            "code": "for (int i = 0; i <= array.length; i++) {\n    System.out.println(array[i]);\n}"
          },
          {
            "key": "C",
            "code": "for (int i = 0; i <= array.length; ++i) {\n    System.out.println(array[i]);\n}"
          },
          {
            "key": "D",
            "code": "for (int i = 0; ++i < array.length;) {\n    System.out.println(array[i]);\n}"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問14）。",
          "pdfExplanation": "正解：A\n\n拡張for文についての出題です。設問のコードでは、配列の要素を順置にコンソールに表示しています。選択肢Aのfor文は、カウンタ変数1を0から始め、配列の要素数である5よりも小さい値まで1つすつインクリメントしながら、各要素を出力します.これにより、設問のコードと同じ結果となるため、正解です。選択肢Bのfor文は、カウンタ変数iを0から始め、配列の要素数以下の::ある5まで1つすつインクリメントしながら.各要素を出力しますとしてため、カウンタ変数iが5のときに、6置目の匿素にアクセスしようて、はArrayfndexOutOfBoundsExceptionがスローされることになります.ょっりです.選緬Cのfor文は、選択肢Bとほl辞じですが.インクリメントが前冨Iこがつ\nている点のみが舅なります.前■`犠冒にかかわらすカウンタ変数l(f)但;:\n増えることには変わりません.よって、選紐8と同様に5董目の要::呪力されてから•Arra加ndexOutOfBoundsExc叩ionがスローされることす.よって.舅りです.\n選択肢Dのfor文は、初期化文、条件文、更新文という3 つのfor文の構成要素のうち、更新文を省略しています。その代わり条件文でカウンタ変数を前四でインクリメントしています。その結果、カウンタ変数iが0のときに条件文で1 に増えてしまい、1番目の要素(添字番号が0のもの)をコンソールに出力することができません。よって、この選択肢も誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "int[] array = {1, 2, 3, 4, 5};\nfor (int num : array) {\n    System.out.println(num);\n}"
          }
        ],
        "tags": [
          "array",
          "operator/control"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "同一性比較と同値比較",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「B」「C」「E」「H」の順に表示される"
          },
          {
            "key": "B",
            "text": "「A」「C」「F」「G」の順に表示される"
          },
          {
            "key": "C",
            "text": "「A」「D」「F」「H」の順に表示される"
          },
          {
            "key": "D",
            "text": "「B」「C」「F」「H」の順に表示される"
          },
          {
            "key": "E",
            "text": "「B」「C」「F」「G」の順に表示される"
          },
          {
            "key": "F",
            "text": "「A」「D」「E」「G」の順に表示される"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問15）。",
          "pdfExplanation": "正解：D\n\n演算子とequalsメソッドの遠いに関する問難です。設問のコードでは、変数sは文字列プールに作られたインスタンスへの参照、変数tはヒープに作られたインスタンスへの参照を持っています。==演口子は、変数の中身が同じかどうかを比較するものです。そのため、\ns = =  tの結\n東はfalseとなり、コンソールに8が出力されます。よって、選択肢B、C、Fは誤りです。変数sとtの参照先のStringのインスタンスは、同じAという文字列を持っていま立つまり2つのインスタンスは同僅です。参照先のインスタンスが同田であるかを確認するには、eq ualsメソッドを使います。そのため、s.eq uals(t)の結乗はtrueとなり、コンソールにCが出力されます。変数a とbは、異なるTestクラスのインスタンスへの参照を持っています。そのため、a== bの結果はfalseとなり、コンソールにFが出力されます.よって、選択肢Aは誤りです。変数a とbの参照先のTestクラスのインスタンスは、同じ値を持っています.同●性の判定にはeq ualsメソッドを伎いますが、Testクラスがeq ualsメソッドをオーバーライドしていないことに注意してください。このメソッドは、Objectクラスに定義されているメソッドであり、すぺてのクラスがメソッドそのものは持っていますが、ObJectクラスのeq ualsメソッドは同一性の判定をしま立つまり、同じ値を持っているかではなく、参照先が同じかどうかの判定しかしません•そのため、a equals(b)はfalseを戻し、コンソールにはHが出力されます.以上のことから、選択肢Dが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Test.java",
            "code": "public class Test {\n    private int value;\n    public Test(int value) {\n        this.value = value;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"A\";\n        String t = new String(\"A\");\n        Test a = new Test(17);\n        Test b = new Test(17);\n\n        if (s == t) {\n            System.out.println(\"A\");\n        } else {\n            System.out.println(\"B\");\n        }\n        if (s.equals(t)) {\n            System.out.println(\"C\");\n        } else {\n            System.out.println(\"D\");\n        }\n        if (a == b) {\n            System.out.println(\"E\");\n        } else {\n            System.out.println(\"F\");\n        }\n        if (a.equals(b)) {\n            System.out.println(\"G\");\n        } else {\n            System.out.println(\"H\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "string/reference",
          "main/args",
          "array",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q16",
        "number": 16,
        "type": "single",
        "selectCount": 1,
        "title": "switch文とswitch式",
        "prompt": "次のプログラムの2行目から10行目と同じ結果となるコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "String str = switch (data) {\n    case 0x0000FF -> \"A\"; break;\n    case 0x008000 -> \"B\"; break;\n    case 0xFF0000 -> \"C\"; break;\n    case 0xFFFF00 -> \"D\"; break;\n    case 0xFFFFFF -> \"E\"; break;\n    default -> \"F\";\n};"
          },
          {
            "key": "B",
            "code": "String str = switch (data) {\n    case 0x0000FF -> \"A\";\n    case 0x008000 -> \"B\";\n    case 0xFF0000 -> \"C\";\n    case 0xFFFF00 -> \"D\";\n    case 0xFFFFFF -> \"E\";\n    default -> \"F\";\n};"
          },
          {
            "key": "C",
            "code": "String str = switch (data) {\n    case 0x0000FF -> \"A\";\n    case 0x008000 -> \"B\";\n    case 0xFF0000 -> \"C\";\n    case 0xFFFF00 -> \"D\";\n    case 0xFFFFFF -> \"E\";\ndefault : yield \"F\";\n};"
          },
          {
            "key": "D",
            "code": "String str = switch (data) {\ncase 0x0000FF : color = \"A\";\ncase 0x008000 : color = \"B\";\ncase 0xFF0000 : color = \"C\";\ncase 0xFFFF00 : color = \"D\";\ncase 0xFFFFFF : color = \"E\";\ndefault : color = \"F\";\n};"
          },
          {
            "key": "E",
            "code": "String str = switch (data) {\ncase 0x0000FF := \"A\";\ncase 0x008000 := \"B\";\ncase 0xFF0000 := \"C\";\ncase 0xFFFF00 := \"D\";\ncase 0xFFFFFF := \"E\";\ndefault := \"F\";\n};"
          },
          {
            "key": "F",
            "code": "String str = switch (data) {\ncase 0x0000FF : yield \"A\";\ncase 0x008000 : yield \"B\";\ncase 0xFF0000 : yield \"C\";\ncase 0xFFFF00 : yield \"D\";\ncase 0xFFFFFF : yield \"E\";\n};"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問16）。",
          "pdfExplanation": "正解：B\n\nswitch式に霞する問題です.1wltc心は.組集を戻す式を記述します.結果を戻す処理を必要としない場合には會->に続いて結票だけを記述することができます.紀景を戻すまでに1111萱記遠する珊合には、:(コロン)に続いてブロックを記述します.ブロック内で・を夏すにはreturnではなく、”eldを使います.\n·賣switch式で値か紀果を戻す式を記述するときは·>を使います:(コロン)ではありません.よって、選択肢Dは誤りです.また、選択肢Eの:=も誤りです.switch式では、選択肢Aのように値に続いてbreakを記述することはできません。また、選択肢Cのように1つのswitch式内で—>と:(コロン)を混在させたり、選臨Fのようにdefaultを省略したりすることはできません。以上のことから、選択肢Bが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "int data = 0xFF0000;\nString str = \"\";\nswitch (data) {\ncase 0x0000FF : str = \"A\"; break;\ncase 0x008000 : str = \"B\"; break;\ncase 0xFF0000 : str = \"C\"; break;\ncase 0xFFFF00 : str = \"D\"; break;\ncase 0xFFFFFF : str = \"E\"; break;\ndefault : str = \"F\";\n}"
          }
        ],
        "tags": [
          "operator/control",
          "interface/default",
          "string/reference",
          "literal"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q17",
        "number": 17,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェース実装とアクセス修飾子",
        "prompt": "次のプログラムがコンパイルエラーとなる理由として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Bクラスのsampleメソッドがprivateであるため、Cクラスでオーバーライドできない。"
          },
          {
            "key": "B",
            "text": "Bクラスのsampleメソッドがprivateであるため、Aインタフェースのsampleメソッドをオーバーライドできない。"
          },
          {
            "key": "C",
            "text": "sealedキーワードの使い方が間違っているため。"
          },
          {
            "key": "D",
            "text": "Bクラスがabstractであるため、sampleメソッドを定義する必要がある。"
          },
          {
            "key": "E",
            "text": "Cクラスのsampleメソッドがpublicであるため、アクセス修飾子が一致しない。"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問17）。",
          "pdfExplanation": "正解：B\n\nインタフェースの実袈に関する問題です.インタフェースを実装したクラスは、インタフェースに定穀されている抽象メソッドをオーバーライドしなければいけません。メソッドをオーバーライドするときには、次のルールに従う必要があります。\n・シグニチャが同じであること\n.戻り値型が同じかサブクラス型であること\n・アクセス●●子が同じか鱈いこと\n設問のコードでは、Aインタフェースを実装したBクラスを定義していますが、Bクラスでsam pleメソッドをオーバーライドする際にアクセス修飾子をより厳しいprivateにしています.そのため、上記のルールに反しているとしてコンバイルエラーが発生します.以上のことから、選択肢Bが正解です。privateメソッドをサブクラスでオーバーライドし直すことは可能です。よって、選択肢Aは誤りです.Bクラスはシールクラスとして定畏されていますが、シールクラスが抽象クラスであることに問題16ありません.また、permitsを省略していますが、同じソースファイル内にあるサブクラスを許可対象とする場合には、permitsを省略することができます.よって、選択肢Cも誤りです.抽象クラスは、インタフェースに定められている抽象メソッドを実装する必要はありません.よって、選択肢Dも誤りです.インタフェースに定められている抽象メソッドやデフォルトメソッドのアクセス修飾子は、暗黙的にpublICです.そのため、Cクラスのsampleメソッドは同じアクセス修飾子となります.よって、選択肢Eも誤りです.\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        ((A) new C()).sample();\n        ((B) new C()).sample();\n        ((C) new C()).sample();\n    }\n}"
          },
          {
            "title": "A インタフェース",
            "code": "interface A {\n    default void sample() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B クラス",
            "code": "abstract sealed class B implements A {\n    private void sample() {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "C クラス",
            "code": "final class C extends B {\n    public void sample() {\n        System.out.println(\"C\");\n    }\n}"
          }
        ],
        "tags": [
          "interface/default",
          "override/overload",
          "main/args",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q18",
        "number": 18,
        "type": "multi",
        "selectCount": 2,
        "title": "メソッドのオーバーロード",
        "prompt": "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "public long test(Integer i) {\n    return i.longValue();\n}"
          },
          {
            "key": "B",
            "code": "public int test(int x, int y) {\n    return x + y;\n}"
          },
          {
            "key": "C",
            "code": "public int test(Integer i, Integer j) {\n    return i + j;\n}"
          },
          {
            "key": "D",
            "code": "public void test(int a, int b) {\n    return a + b;\n}"
          },
          {
            "key": "E",
            "code": "private int test(int x, int y) {\n    return x + y;\n}"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問18）。",
          "pdfExplanation": "正解：A、C\n\nオーバーロードに関する問題です。メソッドのオーバーロードとは、同じクラス内で同じ名前のメソッドを複数定霧することです.ォーバーロードの条件は、戻り値型が同じで、引数の芸、\n型、順番のいずれかが異なることです。設問のコードでは、2つのint型の引数を受け取るtestメソッドが定義されています。選択肢Ala:、引数がIntegerではなくInteger型です。しかも、引数の数が1つです。これはオーバーロードの条件を潟たします。よって、正解です。選択肢Bは、引数の変数名が違いますが、変数名はオーバーロードの条件に含まれません。よって、誤りです。選択肢Cは、引数の数は同じでも、型が異なります。これはオーバーロードの条件を満たしているので、正解となります。選択肢Dは、引数は同じで戻り値型が異なります。これはオーバーロードの条件を満たしません。よって、誤りです。\n選択肢Eは、アクセス修飾子が異なります。これもオーバーロードの条件を潟たさないので、誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public int test(int a, int b) {\n        return a + b;\n    }\n\n    // insert code here\n}"
          }
        ],
        "tags": [
          "override/overload",
          "main/args",
          "interface/default",
          "string/reference"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q19",
        "number": 19,
        "type": "multi",
        "selectCount": 2,
        "title": "sealed / final / abstract",
        "prompt": "シールクラスやfinalクラスについて正しい説明を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "finalクラスはシールクラスのサブクラスとして宣言できる"
          },
          {
            "key": "B",
            "text": "finalクラスはシールクラスのサブクラスでなければならない"
          },
          {
            "key": "C",
            "text": "finalクラスはabstractクラスのサブクラスでなければならない"
          },
          {
            "key": "D",
            "text": "finalクラスはabstractメソッドを含むことはできない"
          },
          {
            "key": "E",
            "text": "abstractクラスはfinalメソッドを含むことができない"
          },
          {
            "key": "F",
            "text": "abstractクラスはfinalクラスのサブクラスとして宣言できる"
          },
          {
            "key": "G",
            "text": "シールクラスはfinalメソッドを含むことができない"
          },
          {
            "key": "H",
            "text": "シールクラスはfinalクラスとして宣言できる"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問19）。",
          "pdfExplanation": "正解：A、D\n\nシールクラスやfinalクラス、抽象クラスに関する問題です。シールクラスのサブクラスは、finalかsealed、もしくはnon-sealedで修飾しなければいけません。よって、選択肢Aは正しい説明です。一方、finalクラスはシールクラスのサブクラスでなければいけないわけではありません。継承を禁止したいときには、finalクラスにしておきます(選択肢B) 。同様に、finalクラスはスーパークラスの種類にかかわらす定義できます。よって、選択肢Cのように抽象クラスのサブクラスである必要はありません。finalクラスは継承ができないクラスです。一方、抽象メソッドはサブクラスに実装を強制するためのもので、継承することが籾是でなくてはいけません。よって、finalクラスはabstractメソッドを含むことはできないとした選択肢Dは、正しい説明です。逆に、抽象クラスにfinalメソッドを定義することはできます。finalメソッドは、サブクラスでオーバーライドすることを禁止しているメソッドで抽象クラスに定義することは可能です(選択肢E) 。前述のように、finalクラスは継承を禁止しているクラスです。よって、いかなる種類のクラスであってもサブクラスを作ることはできません(選択肢)。`ノールクラスは、継承できるサブクラスを限定したクラスです。サブクラスにオーバーライドさせたくないメソッドがある場合には、finalメソッドを定定義することが可能です(選択肢G) 。ンールクラスは、継承先を限定するクラスであるため、継承されることを前提としたクラスだともいえます。よって、シールクラスの継承を禁止するfinalクラスとして宣言することはできません(選即伎H) 。\n(第5謬:問題24、25 J\n5 4 4注エf a g u 9叶ぃ9 9 J t 3 7ふ4 1ベ7 9心ふ几円t f因足ぷPと8囚l aし4\n20. A 、8, D苓\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [],
        "tags": [
          "sealed",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q20",
        "number": 20,
        "type": "multi",
        "selectCount": 3,
        "title": "recordクラス",
        "prompt": "次のプログラムの「// insert code here」の箇所に記述するとコンパイルエラーになるものはどれですか。正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "a.name = \"C\";"
          },
          {
            "key": "B",
            "code": "Book c = new Book();"
          },
          {
            "key": "C",
            "code": "boolean isEqual = a == b;"
          },
          {
            "key": "D",
            "code": "String title = a.getName();"
          },
          {
            "key": "E",
            "code": "a = null;"
          },
          {
            "key": "F",
            "code": "Book c = new Book(\"C\");"
          },
          {
            "key": "G",
            "code": "String name = a.name();"
          }
        ],
        "answer": [
          "A",
          "B",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問20）。",
          "pdfExplanation": "正解：A、B、D\n\nレコードクラスに関する問題です。レコードクラスのフィールドはfinalであり、コンストラクタで初期唸後に変更することはできません。よって、選択肢Aはコンパイルェぅntcるコードです。ーになレコードクラスには引数なしのデフォルトコンストラクタはありませんペてのフィールドを初期化するコンストラクタが必要です。よって●すBもコンパイルエラーになるコードです。、選臨==演算子はオブジェクトの参照の比較を行います。よって、選斑政は、コンバイルエラーにはなりません。レコードクラスのフィールドにはg etName()のようなゲッターメソッドは目動知況されません。代わりに、フィールド名と同じ名前のメソッド(name())が生成されます。よって、選択肢Dはコンパイルエラーになるコードです.変数a にnullを代入することは単なる変数への再代入でしかなく、可能です.よって、選択肢Eはコンパイルエラーにはなりません。選択肢Fは、正しいコンストラクタの呼び出しです。コンパイルエラーにはなりません。選択肢Gは、レコードのアクセサメソッドを正しく呼び出しており、コンパイルエラーにはなりません。\n(第4a :問nl31)\n21. C-----で--\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Book.java",
            "code": "public record Book(String name) {}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n\n        Book a = new Book(\"A\");\n        Book b = new Book(\"B\");\n\n        // insert code here\n\n    }\n}"
          }
        ],
        "tags": [
          "record",
          "main/args",
          "string/reference",
          "array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "for文の制御",
        "prompt": "このプログラムの「// insert code here」の箇所に入るコードで、1、3、5、7、9 と表示できるものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "for (int i = 1; i < array.length; ++i) {\n if (i % 2 == 0) {\n System.out.println(array[i]);\n }\n}"
          },
          {
            "key": "B",
            "text": "for (int i = 0; ++i < array.length;) {\n if (i % 2 == 0) {\n System.out.println(array[i]);\n }\n}"
          },
          {
            "key": "C",
            "text": "for (int i = 0; i < array.length; i++) {\n if (i % 2 == 0) {\n System.out.println(array[i]);\n }\n}"
          },
          {
            "key": "D",
            "text": "for (int i = 0; i++ < array.length + 1; i++) {\n if (i % 2 == 0) {\n System.out.println(array[i]);\n }\n}"
          },
          {
            "key": "E",
            "text": "for (int i = 0; i < array.length; i++) {\n if (i % 2 == 1) {\n System.out.println(array[i]);\n }\n}"
          },
          {
            "key": "F",
            "text": "for (int i = 1; i <= array.length; i++) {\n if (i % 2 == 1) {\n System.out.println(array[i]);\n }\n}"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問21）。",
          "pdfExplanation": "正解：C\n\nfor文の制御に関する問題題です。for文は初期化文、条件文、更新文の3つの文で制御します。初期化文はfor又を実行する最初に実行されるだけで、それ以降は条件文、繰り返し処理、更新文の順に条件文がtrueを戻す間、反復します.設問のコードでは、1~10までの10酋の整数要素からなる配列から、奇数の数値だけを抜き出してコンソールに表示しなければいけません。奇数の数値だけを抜き出すには、配列の添字量号が0番、2蓄、4番、6番、8置のものを表示することになります•そのため.初期化文でカウンタ変数を0で初期化していない還択肢AとFは誤っていることがわかります。繰り返し処理では、政の条件式で2で割って余りが0の選択肢と1の選梃甜あります.2で割って余りが1 になるのは、カウンタ変数が奇数のときです•しかし、前述のとおり必饗なのは配列の添字量号訊量2蓄4置6畜、8蓄のものを表示することなので、選閃皮Eも麒りです.選紐Bは、初廟化文ではカウンタ変数が0で初期化されていますが、その次に評緬される条件文で前■インクリメントされているため、カウンタ虹即\n1 から始まることになります。前述の選択肢AやFと同じことになるため、この選団支も誤りです。選択肢Dは条件文と更新文の両方でインクリメントをしています。初期化文でカウンタ変数が0で初期化されたとしても、条件文のインクリメントで1に壇えます.繰り返し処理のif文は2で割って余りが0でなければコンソールに表示しないため、更新文に制御が移ります。更新文ではさらにインクリメントされてカウンタ変数の値が1 増えて2になります。その後、また条件文のインクリメントで1 増えて3 になるため、i戊の条件式を満たしません.以箔も更斬文と条件文で2回インクリメントされるため、i改の条件式で評価されるときにはカウンタ変数の領は5 、7 、9と2すつ増え、1 度もコンソールに表示することなくfor文を抜けてしまいます。よって、選択肢Dも誤りです。\n以上のことから、選択肢Cが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int[] array = {1,2,3,4,5,6,7,8,9,10};\n        // insert code here\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "loop",
          "for"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q22",
        "number": 22,
        "type": "single",
        "selectCount": 1,
        "title": "printlnとtoString / null",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A、B、C の順に表示される"
          },
          {
            "key": "B",
            "text": "B、C、null の順に表示される"
          },
          {
            "key": "C",
            "text": "Value@7344699f、C、null の順に表示される"
          },
          {
            "key": "D",
            "text": "Value@7344699f、Value@7344699f、C の順に表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問22）。",
          "pdfExplanation": "正解：B\n\nout.printlnメソッドに関する問題です。このメソッドは、引数として渡されたObjec~のtoStringメソッドを呼び出し奮その結果を出力します。また、引数がnullだったときには、nullという文字」を出力します.設問のコードのValueクラスは、toStri ngメソッドをオーバーライドし、dataフィールドの値を戻します。そのため、配列の2 番目の要素と3番目の要累を出力すると、B、Cとコンソールに表示されます。また、配列の4番目の要素はnullであるため、コンソールにはnullと表示されます。\n以上のことから、選沢伎BがiEMです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Value.java",
            "code": "public class Value {\n    public String data;\n\n    public Value(String data) {\n        this.data = data;\n    }\n\n    public String toString() {\n        return this.data;\n    }\n}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private static Value[] values = {\n        new Value(\"A\"),\n        new Value(\"B\"),\n        new Value(\"C\"),\n        null\n    };\n\n    public static void main(String[] args) {\n        System.out.println(values[1]);\n        System.out.println(values[2].data);\n        System.out.println(values[3]);\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "string/reference",
          "method"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q23",
        "number": 23,
        "type": "multi",
        "selectCount": 2,
        "title": "メソッド名の規則",
        "prompt": "次のうちメソッド定義として正しくないものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "public void sample3() {}"
          },
          {
            "key": "B",
            "text": "public void $sample() {}"
          },
          {
            "key": "C",
            "text": "public void sample@2() {}"
          },
          {
            "key": "D",
            "text": "public void _null() {}"
          },
          {
            "key": "E",
            "text": "public void sample() {}"
          },
          {
            "key": "F",
            "text": "public void 0_sample() {}"
          }
        ],
        "answer": [
          "C",
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問23）。",
          "pdfExplanation": "正解：C、F\n\niメソッドの命名親則に関する問題です.メソッド名はUnicode文字、数字、ドル記号(S)、およびアンダースコア(ー)を含むことができますが、数字で始めることはできません。遍択麟Cは'0が含まれています.利用できる記号は、ドル記号かアンダー三そで二’c宝ば.が使えるのは2文字:こ::m)I\nLこ11-----—て\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [],
        "tags": [
          "identifier",
          "method"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェースのフィールド",
        "prompt": "次のプログラムの空欄に記述できるコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "int i = c++;"
          },
          {
            "key": "B",
            "text": "int i = c + a++;"
          },
          {
            "key": "C",
            "text": "int i = ++a;"
          },
          {
            "key": "D",
            "text": "int i = b + 1;"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問24）。",
          "pdfExplanation": "正解：D\n\nインタフェースのフィールドに関する問題です。インタフェースには定数フィールドしか定義できません。インタフェースの\nフィールドは暗黙的にpublic static\nfinalであり、変更できない点に注意してください。設問の選択肢は、選択肢A、B、Cはインクリメント演算子を使ってフィールドの値を変更しようとしています。そのため、これらの選択肢ではコンパイルエラーb溌生します。\n以上のことから、選搾技Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    int a = 1;\n    static int b = 2;\n    static final int c = 3;\n}"
          },
          {
            "title": "B クラス",
            "code": "class B implements A {\n    public static void main(String[] args) {\n        A t = new B();\n        // insert code here\n    }\n}"
          }
        ],
        "tags": [
          "interface",
          "final",
          "field/static/scope"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q25",
        "number": 25,
        "type": "single",
        "selectCount": 1,
        "title": "switch文とアロー構文",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "1 が表示される"
          },
          {
            "key": "B",
            "text": "2 が表示される"
          },
          {
            "key": "C",
            "text": "4 が表示される"
          },
          {
            "key": "D",
            "text": "6 が表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問25）。",
          "pdfExplanation": "正解：A\n\n例外に霞する問題です。\n設問では、throws SampleExceptionを省略するとコンパイルエラーになるとい\nうことから. SampleExceptjonはチェック例外であることがわかります。よって、選閃即が四欝で、選択肢BとCは誤りです。throwsで璽言する例外クラスは.そのクラスかもしくはサブクラスをスローすることができます。よって.選沢伎Dが正解で.選択肢EとFが誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int result = new Test().execute(\"A\");\n        System.out.println(result);\n    }\n}"
          },
          {
            "title": "Test クラス",
            "code": "class Test {\n    int execute(String str) {\n        int total = 0;\n        switch (str) {\n            case \"A\" -> total++;\n            case \"B\", \"C\" -> total++;\n            case \"D\", \"E\" -> total++;\n            default -> total++;\n        };\n        return total;\n    }\n}"
          }
        ],
        "tags": [
          "switch",
          "operator"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q26",
        "number": 26,
        "type": "multi",
        "selectCount": 2,
        "title": "チェック例外とthrows",
        "prompt": "次のプログラムのthrows SampleExceptionを省略するとコンパイルエラーになります。SampleExceptionについて正しい説明はどれですか。正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "SampleExceptionはチェック例外である"
          },
          {
            "key": "B",
            "text": "SampleExceptionはエラーである"
          },
          {
            "key": "C",
            "text": "SampleExceptionは非チェック例外である"
          },
          {
            "key": "D",
            "text": "helloメソッドでは、SampleExceptionのサブクラスをスローできる"
          },
          {
            "key": "E",
            "text": "helloメソッドでは、SampleExceptionのみをスローできる"
          },
          {
            "key": "F",
            "text": "helloメソッドでは、Exceptionをスローできる"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問26）。",
          "pdfExplanation": "正解：A、D\n\nswit年に関する問題です。設問のコードのmainメソッドでは、Testクラスのインスタンスを作成し、executeメソッドに引数としでA・を渡して、その戻り値をコンソールに出力しています。executeメソッドでは、受け取った引数を使って分岐処理を実行しています。この分岐処理で利用されているswitchは、結果を戻さないためswitc収であることが分かります。switch文では、breakを記述しなければフォール刃レーが発生しましたが、アロー構文を使っている場合は、フォールスルーが発生しません。そのため、Aのケースが実行されて、totalの値が0から11コ菖えた後、ほかのcas辺洩環が実行されることはありません。以上のことから、コンソールには1 が表示され、選択肢ゆ`正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public void hello() throws SampleException {\n        // some code\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "throws"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q27",
        "number": 27,
        "type": "single",
        "selectCount": 1,
        "title": "パッケージをまたぐprotectedアクセス",
        "prompt": "次のプログラムの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Aクラスのコンストラクタはpublicである必要がある"
          },
          {
            "key": "B",
            "text": "Bクラスのコンストラクタはpublicである必要がある"
          },
          {
            "key": "C",
            "text": "BクラスはAクラスのサブクラスである必要がある"
          },
          {
            "key": "D",
            "text": "AクラスはBクラスのサブクラスである必要がある"
          },
          {
            "key": "E",
            "text": "Bクラスのhelloメソッドは、protectedである必要がある"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問27）。",
          "pdfExplanation": "正解：C\n\nアクセス修飾子に関する問題です。異なるパッケージに属するクラスのメンパーにアクセスするには、アクセス\nむ;円?,ubご‘:rotectedでなければいけません。デフォルト(アクセ\nはprivate(])メンパーは、別のパッケージに属するクラ9にJ\nスからアクセスすることはできません。設問のコードでは、AクラスとBクラスが定義されています。この2つのクラスは異なるパッケージに属している点に注意してください。Bクラスのhelloメソッド内で、Aクラスのhelloメソッドを呼び出していますが、このメソッドはprotectedで修飾されています。protectedはpublicと異なり、継承関係にあるサブクラスからであれば別のパッケージに属しているクラスからのアクセスを許可するものです。そのため、このコードはこのままではAクラスとBクラスの間に縫承関係がないためにコンパイルエラーとなります。正しくコンパイルするには、選択肢CのようにBクラスをAクラスのサブクラスとして定義する必要があります。以上のことから、選択肢Cが正解です\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "p1/A.java",
            "code": "package p1;\n\npublic class A {\n    protected void hello() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "p2/B.java",
            "code": "package p2;\n\nimport p1.A;\n\npublic class B {\n    private static B b;\n    public static B getInstance() {\n        if (b == null) {\n            b = new B();\n        }\n        return b;\n    }\n    public void hello() {\n        new A().hello();\n    }\n}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        B b = B.getInstance();\n        b.hello();\n    }\n}"
          }
        ],
        "tags": [
          "access",
          "protected",
          "package"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q28",
        "number": 28,
        "type": "single",
        "selectCount": 1,
        "title": "staticフィールドとインスタンス",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A1,B1,C1,B2,"
          },
          {
            "key": "B",
            "text": "A1,B1,C2,B2,"
          },
          {
            "key": "C",
            "text": "A1,B2,C2,B2,"
          },
          {
            "key": "D",
            "text": "C1,B2,C1,B2,"
          },
          {
            "key": "E",
            "text": "C1,B1,C1,B2,"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問28）。",
          "pdfExplanation": "正解：B\n\nstaticに関する問題です。設問のコードのItemクラスは2つのフィールドが定義されていますが、idは\nstatic、\nnameは非staticであることに注意してください。また、staticiJ:メンパへのアクセスは、変数名メンパ名と記述しても、コンパイル時にクラス名メンバ名に書き換わる点も注意してください。たとえば、変数aでアクセスするidは、a .idと記述しても、コンパイルするとI tem .idに●き換わります。mainメソッドの1 行目では、文字列Aを渡してItemのインスタンスを生成しています。ここで、このインスタンスのnameフィールドの値はAに、staticな箪tm.idは1 になります。そのため、2行目ではAl とコンソールに表示されます。3行目では、文字列Bを渡してItemのインスタンスをもう1つ生成しています。ここで、このインスタンスのnameフィールドの値はBになりますが、staticなHem. idは、また1 になります。そのため、4行目では81 とコンソールに表示されます。命目では、staticなItem.idの値を2に変更しています。6行目では、変数aで参罵できるインスタンスのnameフィールドの値をCに変更しています。そのため、7行目では、C2とコンソールに表示されます。しかし、変数bで参照できるインスタンスのnameフィールドの値は変更せすに元のままなので、8行目9では四とコンソールに表示されることになります。以上のことから、選択肢四正鯛です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        Item a = new Item(\"A\");\n        System.out.print(a.name + a.id + \",\");\n        Item b = new Item(\"B\");\n        System.out.print(b.name + b.id + \",\");\n        b.id = \"2\";\n        a.name = \"C\";\n        System.out.print(a.name + a.id + \",\");\n        System.out.print(b.name + b.id + \",\");\n    }\n}"
          },
          {
            "title": "Item クラス",
            "code": "class Item {\n    public static String id;\n    public String name;\n    public Item(String name) {\n        this.name = name;\n        id = \"1\";\n    }\n}"
          }
        ],
        "tags": [
          "static",
          "field/static/scope",
          "object"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q29",
        "number": 29,
        "type": "single",
        "selectCount": 1,
        "title": "コマンドライン引数",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。なお、実行には次のコマンドを使うものとする。\n\n> java Sample A B C",
        "options": [
          {
            "key": "A",
            "text": "\"A B C \""
          },
          {
            "key": "B",
            "text": "A B C"
          },
          {
            "key": "C",
            "text": "空文字"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問29）。",
          "pdfExplanation": "正解：A\n\nメータに調する問題です。\nこの設問では、Javaコマンドの引数として、A、B、Cの3つの文字列が渡されてプログラムが実行されます。3つの文字列は、配列型変数argsで参照できる配列に格納されています。mainメソッドでは、この配列をBクラスのsetValuesメソッドに渡しています。このメソッドでは、渡された配列から1つすつ文字列を取り出し、StringBuilderに追加しています。その際、文字列の後ろに空白スペースを1つ入れています。その後、このStringBuilderをString型に変換するtoStringメソッドを呼び出して「ABC 」という文字列をsetValueメソッドの引数に渡しています。このメソッドでは、文字列の始まりと終わりに「'」(ダブルクォーテーション)を付け足しているため、「ABC 」という文字列は「MAB C\"」という文字列に変更されます。そのため、getValueメソッドの結果をコンソールに表示すると、「\"ABC'」と出力されます。以上のことから、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        B b = new B();\n        b.setValues(args);\n        System.out.println(b);\n    }\n}"
          },
          {
            "title": "A クラス",
            "code": "class A {\n    private String value;\n\n    public String getValue() {\n        return value;\n    }\n\n    public void setValue(String name) {\n        this.value = name;\n    }\n\n    public String toString() {\n        return getValue();\n    }\n}"
          },
          {
            "title": "B クラス",
            "code": "class B extends A {\n    public void setValue(String value) {\n        super.setValue(\"\\\"\" + value + \"\\\"\");\n    }\n    public void setValues(String[] parts) {\n        var sb = new StringBuilder();\n        for (String part : parts) {\n            sb.append(part).append(' ');\n        }\n        this.setValue(sb.toString());\n    }\n}"
          }
        ],
        "tags": [
          "main/args",
          "StringBuilder",
          "inheritance/polymorphism",
          "override/overload"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q30",
        "number": 30,
        "type": "single",
        "selectCount": 1,
        "title": "javacとjavaコマンド",
        "prompt": "次の2つのコードのクラスファイルを生成するためのコマンドとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "java a/A.java"
          },
          {
            "key": "B",
            "text": "java b/B.java"
          },
          {
            "key": "C",
            "text": "javac b/B.java\njava a/A.java"
          },
          {
            "key": "D",
            "text": "javac a/A.java\njava a/A"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問30）。",
          "pdfExplanation": "正解：D\n\nJavaコマンドに関する問題です。\nJava SE 11 からソースファイルモードが追加され、javaコマンドで.java ファイ\nルを直接実行できるようになりました。ソースファイルモードは、ソースファイルをコンパイルし、クラスファイルに相当するパイトコードをメモリ上に生成して、そのクラスのパイトコードを実行できるようにする仕組みであり、javaコマンドがクラスファイルを生成するわけではありません。そのため、クラスファイルを作ることを目的とした本設問では選択肢AとBは誤りです。選択肢CとDは、javacコマンドをAとBのどちらに対して実行しているかが異なります。ここで、AクラスのソースコードではBクラスを利用していることに麓目します。Aをコンパイルすることで、Aクラスが依存するBクラスも目動的にコンパイルされ、AとBの両方のクラスファイルが生成されます。よって、選択肢Dが正解です。なお、選択肢Dのjavaコマンドは、バスではなく完全修飾クラス名「a.Al を指定することでAクラスを実行できます。選択肢Cは、javacコマンドでBクラスのコンパイルをしていますが、Aのクラスファイルは生成されません.よって、誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "b/B.java",
            "code": "package b;\n\npublic class B {\n}"
          },
          {
            "title": "a/A.java",
            "code": "package a;\nimport b.B;\n\npublic class A {\n    public static void main(String[] args) {\n        B b = new B();\n    }\n}"
          }
        ],
        "tags": [
          "javac/java",
          "package/import",
          "main/args"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q31",
        "number": 31,
        "type": "single",
        "selectCount": 1,
        "title": "import宣言とサブパッケージ",
        "prompt": "次のプログラムを確認し、Mainクラスの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "import java.lang.Integer;\nimport com.*;"
          },
          {
            "key": "B",
            "text": "import com.sample.*;"
          },
          {
            "key": "C",
            "text": "import com.sample.Sample;\nimport com.sample.test.*;"
          },
          {
            "key": "D",
            "text": "import java.lang.*;"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問31）。",
          "pdfExplanation": "正解：C\n\nパッケージのインポートに関する問題です。異なるパッケージに属するクラスを利用するには、完全修飾クラス名でクラスを記述するか、Import文を宣言しなければいけません。設問のMa inクラスノ\nでは、異なるパッケージに属するSampleクラスやTestクラスを完全修飾クラス名ではなく、クラス名だけで記述しているため、インポート宣言が必要です。なお、java.langパッケージに属するクラスはインポートする必要はありません。このパッケージは、Javaプログラミングで必要な基本的なクラスがまとめられているため、インポート宣言を省略できるようになっています。よって、選択肢AやDのようにJava.langパッケージをインポートする必要はありません。インポート宣言では、完全修飾クラス名を指定するか、パッケージ名に続いてクラス名をワイルドカードで指定するかのどちらかの方法を使います。パッケージ名をワイルドカードにすることはできません。そのため、選択肢Aのように「com.*」をインポートすると、comパッケージに属するクラスだけがインポートされます。しかし、設問のSampleクラスとTestクラスは、それぞれ「com.sam p le」と「com.sam ple. test」というパッケージに属しているため、この宣言ではインポートできません。よって、選択肢Alま誤りです。選択肢Bは、「com.sam p le.*」をインポートしているため、com.sam p leパッケージに属するクラスだけをクラス名で表記できます。Testクラスは、「com.sample. test」というパッケージに属しているため、この宣言ではインポートできません。よって、選択肢Bは誤りです。選択肢Dは、java.langパッケージのみインポートしており、「com.sam ple」と「com.sam p le. test」の2つのパッケージをインポートしていません。よって、誤りです。\n以上のことから、正しくインポート宣言が記述されている選択肢Cが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "// Sample.java\npackage com.sample;\npublic class Sample {\n    public void sample() {\n        // any code\n    }\n}"
          },
          {
            "title": "Test.java",
            "code": "// Test.java\npackage com.sample.test;\npublic class Test {\n    public void test(int num) {\n        // any code\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "// Main.java\npackage com;\n// 空欄\npublic class Main {\n    public static void main(String[] args) {\n        new Sample().sample();\n        int num = Integer.parseInt(args[0]);\n        new Test().test(num);\n    }\n}"
          }
        ],
        "tags": [
          "package/import",
          "main/args"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q32",
        "number": 32,
        "type": "single",
        "selectCount": 1,
        "title": "ローカル変数と同名フィールド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "23が表示される"
          },
          {
            "key": "B",
            "text": "想定外の結果が表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問32）。",
          "pdfExplanation": "正解：C\n\nインスタンス変数やクラス変数と、ローカル変数の優先度に関する問題です。インスタンス変数やクラス変数は、非staticなフィールドとstaticなフィールドであり、クラス定義の直下、メソッドの外に定義する変数です。一方、ローカル変数はメソッド内で宣言する変数です。インスタンス変数やクラス変数はクラス内すべてが有効範囲ですが、ローカル変数はその変数を宣言したメソッド内だけが有効範囲となります。インスタンス変数やクラス変数は、同じクラス内に同名のものを複数定義することはできません。同様に、ローカル変数も同じメソッド内に同名のものを複数定義することはできません。ただし、インスタンス変数やクラス変数r、\n^Q e窪!:れiズ夕k 3ぶしC唸層索賢8 5 c\n9し賣ふヘfクr.9`d吃K苔じt 9し氣じ格ぎh 9 i t五くi L匿亀`し匿\nと同名のローカル変数は定義できます。変数名だインスタンス変数やクラス変数と同名のローカル変数がある場9:タンス変けを記述するとコンパイラはローカル変数だと解釈します。イ\n数であることを明示したい場合には「this.フィールド名」を、クラス変数の\n場合には「クラス名フィールド名」の書式で記述します。設問のコードでは、2行目でクラス変数numが宣言されていますが、4行目でローカル変数numも宣言されています。そのため、設問のコードではint型のローカル変数numを宣言し、numの値を代入するというコードとしてコンパイラに解釈されます。4行目で宣言したローカル変数numは初期化されていないため、5行目でこの変数を参照するとコンパイルエラーが発生します。以上のことから、選択肢Cが正解です。設問のコードでクラス名を記述してクラス変数を使うことを明示ずれば、コンバイルエラーは発生することなく、23が表示されます。回クラス変数を使うことを明示\npublic class Sample {\nstatic int\nnum = 23;\npublic static void main(String[] args) {\nint num = Sample.num;\nSystem.out.println(num);\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Sample {\n    static int num = 23;\n    public static void main(String[] args) {\n        int num = num;\n        System.out.println(num);\n    }\n}"
          }
        ],
        "tags": [
          "static",
          "scope",
          "local-variable"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q33",
        "number": 33,
        "type": "single",
        "selectCount": 1,
        "title": "抽象メソッドの実装",
        "prompt": "次のプログラムのコンパイルを成功させるための方法として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "以下をposition 3に記述する\n@Override\npublic void x() {}"
          },
          {
            "key": "B",
            "text": "以下をposition 3に記述する\npublic void z() {}"
          },
          {
            "key": "C",
            "text": "以下をposition 2に記述する\nvoid x() {}"
          },
          {
            "key": "D",
            "text": "以下をposition 1に記述する\nimplements A"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問33）。",
          "pdfExplanation": "正解：B\n\n抽象メソッドの実装に関する問題です。設問のコードをクラス図で示すと次のようになります。インタフェースAには抽象メソッドxが、抽象クラスBには具象メソッドxと抽象メソッドzが定義されています。具象クラスであるCはインタフェースAを実現すると同時に、抽象クラスBを継承しています。また、インタフェースAと抽象クラスBの問には何も関係はありません。\n(設問のインタフェース、クラスの関係l\n<<interface>>\nA\nx():void\nB tabst ractl\n+x():void\nz():void\nA、B 、Cの三者の関係で考えると、抽象メソッドを実装するのは具象クラスであるCクラスです。ます、Cクラスは抽象クラスBを継承しているので、Bに定義されている抽象メソッドzを実装しなければいけません(選択肢B) 。また、インタフェースAと抽象クラスBの間には関係がないので、Aを実現している具象クラスCが、Aのメソッドxを実装しなければいけません。しかし、CとBの間には継承関係があるので、CはBから引き継いだ具象メソッドxの実装を持つていることになります。よって、Cクラスがxメソッドの実装を持つ必要はありません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    abstract void x();\n}"
          },
          {
            "title": "B.java",
            "code": "public abstract class B /* position 1 */ {\n    /* position 2 */\n    public void x() {}\n    public abstract void z();\n}"
          },
          {
            "title": "C.java",
            "code": "public class C extends B implements A {\n    /* position 3 */\n}"
          }
        ],
        "tags": [
          "abstract",
          "interface",
          "override"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q34",
        "number": 34,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文のvar型推論",
        "prompt": "次のプログラムを確認し、変数valueのデータ型として正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "String"
          },
          {
            "key": "B",
            "text": "String[]"
          },
          {
            "key": "C",
            "text": "Character"
          },
          {
            "key": "D",
            "text": "var"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問34）。",
          "pdfExplanation": "正解：A\n\nカル変数の型推論に関する問題です。mainメソッドの引数としてString型の集合を扱う可変長引数が使われています。その可変長引数から、1つすつ要素を取り出し、繰り返し処理をするのが拡張for文です。この拡張for文では一時変数valueを宣言していますが、この変数のデータ型をvarで型推愴しています。拡張for文は、集合から要素を取り出し、一時変数に格納します。設問のコードでは、String型の集合を扱う変数argsを拡張for文に渡しているので、取り出せる要素はString型となります。よって、変数valueのデータ型はString型となります。以上のことから、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String... args) {\n        for (var value : args) {\n            System.out.println(value);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "var",
          "enhanced-for",
          "main/args"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q35",
        "number": 35,
        "type": "single",
        "selectCount": 1,
        "title": "Stringのsubstringと不変性",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「ef gh 5」と表示される"
          },
          {
            "key": "B",
            "text": "「ef gh 4」と表示される"
          },
          {
            "key": "C",
            "text": "「abcd ef gh 4」と表示される"
          },
          {
            "key": "D",
            "text": "「abcd ef gh 5」と表示される"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問35）。",
          "pdfExplanation": "正解：D\n\nStringクラスのメソッドに関する問題です。java.lang .StringクラスのindexOfメソッドは、引数に渡された文字列が最初に現れる位置のインデックスを戻します。次のように文字列に0から番号を振るとわかりやすいでしょう。\n(設問の文字列のイメージ】\n詞c|d|\ne|f\n1 叩0 1 2 3 4 5 6 7 8 9設問のコードでは、i ndexOfメソッドを使って「ef」という文字列が始まる番号を調べています。最初に「ef」が始まるのは5番です。そのため、変数xには5が代入されます。次に、Stringクラスのsubst『ingメソッドを使って文字列を切り出しています。\n引数で渡しているのが切り出す位置になります。次のように文字の間に絲?を引いて番号を振るとわかりやすいでしょう。\n(設問の文字列のイメージJ\na |b I C |d|| e| f 0 1 2 3 4 5 6 7 lglhl 8 9 10設問のコードでは、変数xの値に3を足しているので、8番から後ろである「gh」が切り出されます。しかし、この切り出された文字列を受け取る変数が用意されていません。substringメソッドに限らす、Stringクラスはインスタンスが保持している文字列を変更しようとすると、その文字列をコピーし、変更した結果を戻します。つまり、変数strで参照される文字列は最初のまま「abed ef g h」です。\n以上のことから、コンソールには「abed ef gh\n5」と表示されます。よって、選択肢Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"abcd ef gh\";\n        int x = str.indexOf(\"ef\");\n        str.substring(x + 3);\n        x = str.indexOf(\"ef\");\n        System.out.println(str + \" \" + x);\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "substring",
          "indexOf"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q36",
        "number": 36,
        "type": "single",
        "selectCount": 1,
        "title": "switch文とnull",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「10def20」と表示される"
          },
          {
            "key": "B",
            "text": "「def20」と表示される"
          },
          {
            "key": "C",
            "text": "「null」と表示される"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問36）。",
          "pdfExplanation": "正解：D\n\nswitch文に関する問題です。switch文の条件式には、プリミティブ型やEnum 、String型を戻す式を指定することができます。このとき、式がnullを戻すとNullPo interExce pti onが発生します。これは、switch文の分岐にはハッシュコードが使われるためです。以下は、設問のコードをコンパイルしたクラスファイルをJavapコマンドで成形した結果の抜粋です。switchがコンパイルされるとこのような中問コードになります。口ハッシュコード化された文字列\n8: lookupswitch {\n1567: 36 1598: 48\ndefault\n85この中閻コードは、ハッシュコードが1567であれば36行目へ、1598であれば鵡行目、どちらでもなければ85行目へ飛ぶという意味です。ここで使われている1567や1598という数値がハッシュコードで、それぞれ10や20という文字列を表しています。\n引数で渡しているのが切り出す位置になります。次のように文字の間1こ知引いて番号を振るとわかりやすいでしょう。\n(設問の文字列のイメージ)\n1a1b1c1d1 le! f J 0 1 2 3 4 5 6 7 lglhl 8 9 10設問のコードでは、変数xの値に3を足しているので、8番から後ろである「gh」が切り出されます。しかし、この切り出された文字列を受け取る変数が用意されていません。substringメソッドに限らす、Stringクラスはインスタンスが保持している文字列を変更しようとすると、その文字列をコピーし、変更した結果を戻します。つまり、変数strで参照される文字列は最初のまま「abed ef g h」です。\n以上のことから、コンソールには「abed ef\ngh 5」と表示されます。よって、選択肢Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Sample {\n    static String str;\n    public static void main(String[] args) {\n        switch (str) {\n        case \"10\" : str += \"10\";\n        default : str += \"def\";\n        case \"20\" : str += \"20\";\n        }\n        System.out.println(str);\n    }\n}"
          }
        ],
        "tags": [
          "switch",
          "null",
          "static"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q37",
        "number": 37,
        "type": "single",
        "selectCount": 1,
        "title": "javac -d とクラスパス",
        "prompt": "次のプログラムをコンパイル、実行するためのコマンドとして、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "javac ex15/Sample.java ex15/Main.java\njava -cp build ex15.Main"
          },
          {
            "key": "B",
            "text": "javac -d build ex15/Sample.java ex15/Main.java\njava -cp build ex15.Main"
          },
          {
            "key": "C",
            "text": "javac -d build ex15/Sample.java ex15/Main.java\njava ex15.Main"
          },
          {
            "key": "D",
            "text": "javac -d build ex15/Sample.java ex15/Main.java\njava build.ex15.Main"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問37）。",
          "pdfExplanation": "正解：B\n\nswitch文に関する問題です。switch文の条件式には、プリミティブ型やEnum 、String型を戻す式を指定することができます。このとき、式がnullを戻すとNullPointerExceptionが発生します。これは、switch文の分岐にはハッシュコードが使われるためです。以下は、設問のコードをコンパイルしたクラスファイルをjavapコマンドで成形した結果の抜粋です。switchがコンパイルされるとこのような中問コードになります。回ハッシュコード化された文字列\n8: lookupswitch {\n1567: 36 1598: 48\ndefault\n85この中閻コードは、ハッシュコードが1567であれば36行目へ、1598であ已48行目、どちらでもなければ85行目へ飛ぶという意味です。ここで伎ば:タいる1567や1598という数値がハッシュコードで、それぞれ10や20と窃」を表しています。トし1しl h lヒ\n回ハッシュコードの確認System. out\nprintln (\"10\". hashCode ()); /\n1567と表示されるSystem. out\nprintln (\"20\". hashCode ()); // 1598と表示される\nこのようにswitch文でString型を戻す式が使われたときには、ます式の結果のString型オブジェクトのhashCodeメソッドを内部的に呼び出し、その値によって分岐処理を行っているのです。設問のコードでは、String型のクラス変数st rを宣言し\n(2行目)、その変数の\n値をswitch文の条件式に与えています\n(4行目)。しかし、このクラス変数は\n明示的に初期化されていないため、参照型フィールドのデフォルト値であるnullで暗黙的に初期化されています。そのため、switch文の実行時にhashCodeメソッドが呼び出されるとNu I Poi nterExceptio nが発生します。以上のことから、選択肢Dが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "// ex15/Sample.java\npackage ex15;\n\npublic class Sample {\n    private final String name;\n    public Sample(String name) {\n        this.name = name;\n    }\n    public String getName() {\n        return name;\n    }\n    public String toString() {\n        return name;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "// ex15/Main.java\npackage ex15;\n\nimport java.util.logging.Logger;\n\npublic class Main {\n    static final Logger logger = Logger.getAnonymousLogger();\n    public static void main(String[] args) {\n        var d = new Sample(\"sample\");\n        logger.info(d.toString());\n    }\n}"
          }
        ],
        "tags": [
          "javac",
          "classpath",
          "package"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q38",
        "number": 38,
        "type": "single",
        "selectCount": 1,
        "title": "参照型と呼び出せるメソッド",
        "prompt": "次のプログラムを確認し、これらのクラスを利用するMainクラスをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「bye」と表示される"
          },
          {
            "key": "B",
            "text": "「null」と表示される"
          },
          {
            "key": "C",
            "text": "何も表示されない"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問38）。",
          "pdfExplanation": "正解：D\n\njavacコマンドとjavaコマンドの出力先とクラスバスの関係性に関する問題です。javacコマンドでは、-dオプションを使って出力先を指定しない限り、ソースファイルと同じ場所にクラスファイルが出力されます。Javaコマンドでは、引数に完全修飾クラス名を指定します。完全修飾クラス名とディレクトリ構造はマッピングされているため、カレントディレクトリから見て完全修飾クラス名にマッピングされるディレクトリ構造が一致していないとクラスファイルを実行することはできません。また、カレントディレクトリ以外にあるクラスファイルを実行するときは、javaコマンドに—c pオプションを付けて、クラスパスを指定します。選択肢Aは、-dオプションなしでコンパイルしているため、ソースファイルと同じ場所にクラスファイルが出力されます。しかし、javaコマンドではbu i ldディレクトリをクラスパスに指定しているため、クラスファイルを見つけることができません。選択肢Bは、-dオプションでbu i ldディレクトリヘのクラスファイル出力を指定した上で、javaコマンドのクラスバスにbu i ldディレクトリを指定しています。よって、このコマンドは実行できます。選択肢Cは、Javacコマンドで出力先にbu i ldディレクトリを指定しているものの、javaコマンドでクラスパスを指定していません。よって、クラスファイルを見つけることができす、javaコマンドは失敗します。選択肢Dは、Javaコマンドの完全修飾クラス名が間違っているため、Java コマンドは失敗します。[第1章.’問題6 、7 】i‘i E fキ4 f tぶJ a賢メi t 5しぷ笠t 9 f 9 J了L 9 J 5 3合t i~ふ似に\nでぷ名え応食2\n讐}\n1こ1 9 fし九しヘ9 a 5ふ魯息をミ3事g tい鼻u J.-\n[38.D\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    public void hello() {\n        System.out.println(\"hello\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    public void bye() {\n        System.out.println(\"bye\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        a.bye();\n    }\n}"
          }
        ],
        "tags": [
          "inheritance",
          "polymorphism",
          "reference-type"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q39",
        "number": 39,
        "type": "single",
        "selectCount": 1,
        "title": "メソッド呼び出しと引数リスト",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
        "options": [
          {
            "key": "A",
            "text": "「A, 0」と表示される"
          },
          {
            "key": "B",
            "text": "「A, 1」と表示される"
          },
          {
            "key": "C",
            "text": "「A, null」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問39）。",
          "pdfExplanation": "正解：D\n\nポリモーフィズムを使った問題です。変数の型は、インスタンスへの参照を何型で扱いたいかを指定するものです。設問のコードでは、Bクラスのインスタンスを生成し、そのインスタンスへの参照を俎吸)変数に代入しています。そのため、Bのインスタンスへの参照は俎比して扱われます。これは、インスタンスの型を変更しているのではなく、参照の扱い方を変更しているだけです。Aクラスにはhelloメソッドが定義されていて、このメソッドはサブクラスであるBクラスにも引き継がれています。Bクラスは、このメソッドのほかにbyeメソッドを持っています。このメソッドはBクラス独自のものです。そのため、BのインスタンスをAとして扱っている間は、このメソッドを呼び出すことはできません。よって、設問のコードはコンパイルエラーが発生します。\n以上のことから、選択肢Dが正解です。\nこのような問題では、インスタンスを扱っている「型」(この場合はAクラス)に、呼び出しているメソッドが定義されているかどうかを確認してください。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Sample {\n    private char a;\n    private int b = 1;\n    String test(char a, int b) {\n        return a + \", \" + b;\n    }\n    public static void main(String[] args) {\n        Sample app = new Sample();\n        System.out.println(app.test('A'));\n    }\n}"
          }
        ],
        "tags": [
          "method",
          "overload",
          "argument"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q40",
        "number": 40,
        "type": "multi",
        "selectCount": 2,
        "title": "多次元配列の初期化",
        "prompt": "多次元配列のインスタンス化と初期化のコードとして、正しいものを選びなさい。（2つ選択）",
        "options": [
          {
            "key": "A",
            "text": "int[][] array = {{1,2,3},{4,5,6}};"
          },
          {
            "key": "B",
            "text": "int[][][] array = {{1,2},{3,4},{5,6}};"
          },
          {
            "key": "C",
            "text": "int[][] array = {0, 1};"
          },
          {
            "key": "D",
            "text": "int[][] array = new int[][2];\narray[0][0] = 1;\narray[0][1] = 2;\narray[1][0] = 3;\narray[1][1] = 4;"
          },
          {
            "key": "E",
            "text": "int[] array = {0, 1};\nint[][][] array2 = new int[2][2][2];\narray2[0][0] = array;\narray2[0][1] = array;\narray2[1][0] = array;\narray2[1][1] = array;"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問40）。",
          "pdfExplanation": "正解：A、E\n\nメソッドの呼び出しとシグニチャに関する問題です。JVMは、実行するメソッドをメソッド名と引数のセットから成るシグニチャで見分けます。設問のtestメソッドは、「char型とint型の引数を受け取るtestメソッド」というシグニチャです。しかし、9行目ではchar型の値を1つだけ受け取るtestメソッドを呼び出そうとしています。このようなシグニチャを持つメソッドはSampleクラスには存在しません。よって、コンパイルエラーが発生します。以上のことから、選択肢Dが正解です。JVMは、名前ではなく、シグニチャでメソッドを見分けていることを忘れないようにしましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [],
        "tags": [
          "array",
          "multi-dimensional-array"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q41",
        "number": 41,
        "type": "single",
        "selectCount": 1,
        "title": "アクセス修飾子とsuper",
        "prompt": "次のプログラムの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Bクラスのサブクラスでは、getValueメソッドでAクラスのフィールドにアクセスすることができる"
          },
          {
            "key": "B",
            "text": "Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにsuper.getValue()を使えるが、Aクラスのフィールドにはアクセスできない"
          },
          {
            "key": "C",
            "text": "Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにnew.getValue()を使う"
          },
          {
            "key": "D",
            "text": "Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにpublic.getValue()を使う"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問41）。",
          "pdfExplanation": "正解：A\n\n多次元配列の問題では、変数の次元数と、配列インスタンスの次元数が一五[しているかどうかを確認しましょう。\n初期化子「{}」を使った配列インスタンス生成では、中カッコがいくつネス\nトしているかで次元数を数えることができます。たとえば、次のように中カッコのなかに中カッコがあれば2次元配列のインスタンスです。\n3次元であれば、次のように中カッコのなかに中カッコが、さらにそのなかに中カッコが入ります。選択肢Aは、2次元配列型の変数を宣言しています。また、生成している配列のインスタンスを見ても中カッコのなかに中カッコがあるので、2次元配列であることがわかります。変数の次元数と配列インスタンスの次元数は一致しているため正しいコードです。一方、選択肢Bは3次元配列型の変数を用意していますが、生成している配列インスタンスは2次元です。また、選択肢Cは2次元配列型の変数と1 次元の配列インスタンスの組み合わせなので、次元数が一致しません。そのため、選択肢BとCは誤りです。多次元配列は、要素として配列への参照を持つ配列のことです。多次元配列のインスタンスを生成するとき、1 次元目の要素数は必ず指定しなければいけません。しかし、2次元目以降の配列インスタンスは後から生成して、1 次元目の配列の要素に参照を代入できるため、要素数をあらかじめ宣言する必要はありません。回2次元配列の生成int[][] array\nnew int[3][];\nこのように宣言すると、3つの要素を持った配列が生成され、その配列の各要素はnullで初期化されることになります。選択肢Dは、1 次元目の要素数は指定せすに、2次元目の要素数を指定しています。そのため、配列型変数が参照する配列インスタンスを生成できません。よって、このコードはコンパイルエラーになります。選択肢Eは、3次元配列を扱っています。3次元配列とは、1 次元目の配列インスタンスに2次元目への参照が入り、2次元目の配列インスタンスに3次元目への参照が入る配列のことです。そのため、2次元目の配列の要素には、3次元目の配列への参照を代入します。選択肢E は、2次元目の要素に変数arrayが保持している参照を代入しています。変数arrayの参照先にあるのは1 次元配列のインスタンスであるため、正しく3次元の構造を持つ配列となります。以上のことから、選択肢Eも正解です。\n(第2章.’問題29 、32 】\n;9: —ー^口•ユ\n·彎·疇`..1 J,.: •-.. •i i ~ヽし::、・鼻`巧\n;,,.會·\nし\"•‘`\n.,;ゼ,t\"\n:キ.3 、、ォヽ・亀・..島冒,C元\nr •・. ;\nル、:i:, •/..`年、・,.~ - ~ •• ~ •●‘·`吋• •, 9,:1 ,キ, •· •:し'•』.、..』\n「9  ` • ←、\n1 —•'-\n:が.'.,:\"t;,\n疇し·囁...,-\\n aャ9 -4、しi 9\nI41:A l | - - - - - - - - 1ー三日]\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    int num = 10;\n    public double getValue() {\n        return 0.0;\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    @Override\n    public double getValue() {\n        // ...\n        return 1.0;\n    }\n}"
          },
          {
            "title": "C.java",
            "code": "public class C extends B {\n    @Override\n    public double getValue() {\n        System.out.println(super.num);\n        return super.getValue();\n    }\n}"
          }
        ],
        "tags": [
          "inheritance",
          "super",
          "access"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q42",
        "number": 42,
        "type": "multi",
        "selectCount": 3,
        "title": "オーバーライドとオーバーロード",
        "prompt": "次のプログラムの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "a1.sample(list) を実行すると、Aが表示される"
          },
          {
            "key": "B",
            "text": "a2.sample(list) を実行すると、Aが表示される"
          },
          {
            "key": "C",
            "text": "a2.sample(list) を実行すると、Bが表示される"
          },
          {
            "key": "D",
            "text": "b1.sample(list) を実行すると、Bが表示される"
          },
          {
            "key": "E",
            "text": "b1.sample(list) を実行すると、Cが表示される"
          }
        ],
        "answer": [
          "A",
          "C",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問42）。",
          "pdfExplanation": "正解：A、C、E\n\nアクセス修飾子に関する問題です。設問のコードでは、Aクラスを継承したBクラス、Bクラスを継承したCクラスが定義されています。このような関係があるため、CクラスはAクラスのサブクラスだといえます。\nAクラスには、アクセス修飾子なしのnumフィールドと、公開(public) メソッ\nドであるgetValueメソッドの2つが定戟されています。アクセス修飾子がないということは、クラス間の継承に関係なく、同じパッケージ内に属するクラスからのみアクセス可能です。設問のコードにはパッケージ宣言が記述されていませんが、これは無名パッケージに属していると見なされます。そのため、Aクラスのnumフィールドは同じパッケージであればアクセス可能であることがわかります(選択肢A、選択肢B) 。スーパークラスのメソッドを呼び出すには、superを使います(選択肢C、D) 。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "import java.util.Collection;\n\npublic class A {\n    public void sample(Collection arg) {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "import java.util.Collection;\nimport java.util.List;\n\npublic class B extends A {\n    public void sample(Collection arg) {\n        System.out.println(\"B\");\n    }\n    public void sample(List arg) {\n        System.out.println(\"C\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        A a1 = new A();\n        A a2 = new B();\n        B b1 = new B();\n\n        List<String> list = new ArrayList<>();\n\n        // do something\n    }\n}"
          }
        ],
        "tags": [
          "override",
          "overload",
          "polymorphism",
          "collection"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q43",
        "number": 43,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェースのデフォルトメソッド",
        "prompt": "Dクラスの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Bインタフェースのsampleメソッドを実装している"
          },
          {
            "key": "B",
            "text": "Cインタフェースのsampleメソッドを実装している"
          },
          {
            "key": "C",
            "text": "Dクラスがsampleメソッドを使わないのであれば、オーバーライドをする必要はない"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問43）。",
          "pdfExplanation": "正解：D\n\nオーバーライドとオーバーロードに関する問題です。設問のMa i nクラスでは、Aクラスのインスタンス1つとBクラスのインスタンス2つを生成しています。これらのインスタンスを何型で扱うかによって、呼び出されるメソッドが異なります。Ma i nクラスの7行目では、AクラスのインスタンスをA型で扱っているため、Aクラスで定義したsampleメソッドが呼び出されます。よって、選択肢Aは正解です。設問のコードでは、Aクラスを継承したBクラスで、Aクラスのsam p leメソッドをオーバーライドしています。さらにBクラスでは、sampleメソッドをオーパーロードもしています。Ma i nクラスの8行目で生成したインスタンスは、この点に慧目します。BのインスタンスをA型として扱ったとき、JVM はA型に定義されているsampleメソッドの実装を探します。このときJVMは、インスタンスにオーバーライドしたメソッドがあればそのメソッドを、なければスーパークラスのメソッドを実行します。設問のコードのBクラスには、オーバーライドしたsam p leメソッドがあります。これにより、BクラスのインスタンスをA型として扱っていたとしても、Bクラスでオーバーライドしたメソッドが実行されます。そのため、「a2.\nsample{list)」を実行すると、\nBが表示されます。よって、選択肢Bは誤りで、1選択肢Cが正解となります。\nもう1つのポイントは、Ma i nクラスの9行目で生成したBクラスのインスタンスがB型として扱われていることです。Bクラスには、sam p leメソッドが2つ定義されています。1つはCollecti on型を受け取るメソッド、もう1つはList型を受け取るメソッドです。Collection型を受け取るメソッドは、Aクラスのオーバーライドでもあります。Collecti onはListインタフェースのスーパーインタフェースであり、Lis困奴)引数を渡したときにはどちらのメソッドの引数にも互換性があります。このような場合、JVMはより厳密なほうを選択します。つまり、Lis@の引数を渡しているのであれば、List型を受け取るほうを呼び出します。よって、選択肢Dは誤りで、選択肢Eが正解となります。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    void sample();\n}"
          },
          {
            "title": "B.java",
            "code": "public interface B extends A {\n    default void sample() {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "C.java",
            "code": "public interface C extends A {\n    @Override\n    default void sample() {\n        System.out.println(\"C\");\n    }\n}"
          },
          {
            "title": "D.java",
            "code": "public class D implements B, C {\n    @Override\n    public void sample() {\n        super.sample();\n    }\n}"
          }
        ],
        "tags": [
          "interface",
          "default-method",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q44",
        "number": 44,
        "type": "single",
        "selectCount": 1,
        "title": "ポリモーフィズムとコレクション",
        "prompt": "次のプログラムを確認し、コンパイルエラーとなるコードを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "List<A> listA = new ArrayList<>();\nlistA.add(new D());"
          },
          {
            "key": "B",
            "code": "List<B> listB = new ArrayList<>();\nlistB.add(new C());"
          },
          {
            "key": "C",
            "code": "List<B> listC = new ArrayList<>();\nlistC.add(new D());"
          },
          {
            "key": "D",
            "code": "List<D> listD = new ArrayList<>();\nlistD.add(new C());"
          },
          {
            "key": "E",
            "code": "List<A> listE = new ArrayList<>();\nlistE.add(new C());"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問44）。",
          "pdfExplanation": "正解：D\n\n三口lインタフェースの継承による菱形継承問題に関する問題です。設問のインタフェースとクラスをクラス図で表すと次のようになります。\n【設問のインタフェースとクラスの関係】\n<<interface>>\nA\n+ sample():void\n<<interface>>\n<<interface>>\n8 C\n+sanple():void\nsample():void\n4 4 l _______________,. _______________ !9サキt¥ `“9,• 9,r. •.ームD+sample():voidインタフェースAで宣言されているsam pleメソッドは、インタフェースB とCで実装されています。出題のポイントは、BとCを実現したDクラスのsam p leメソッドでsuperのsam pleメソッドを呼び出している点です。このsuperは、インタフエースBとCのどちらを表すかが明確ではありません。そのため、このコードはコンパイルエラーとなります(選択肢D) 。このようにインタフェースの多重実現をした結果、デフォルトメソッドが重複してしまう問題のことを「憂形継承問題」といいます。なお、菱形継承問題によるコンパイルエラーを解消するには、次のように\nsuper©前にどちらのインタフェースの実装を使うかを指定します。\n臼d\n回スーパーインタフェースBのsampleメソッドを呼び出し\npublic class D implements B, C {\n節verride\npublic void sample() f\na.super.sample(); •Bインタフェースのデフォルトメソッドを呼び出し\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public abstract class A {}"
          },
          {
            "title": "B.java",
            "code": "public interface B {}"
          },
          {
            "title": "C.java",
            "code": "public class C extends A implements B {}"
          },
          {
            "title": "D.java",
            "code": "public class D extends C {}"
          }
        ],
        "tags": [
          "generic",
          "inheritance",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q45",
        "number": 45,
        "type": "multi",
        "selectCount": 3,
        "title": "インタフェースと実装クラス",
        "prompt": "次のプログラムの説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Aはfinalにできない"
          },
          {
            "key": "B",
            "text": "Bはabstractにできる"
          },
          {
            "key": "C",
            "text": "Bはfinalにできない"
          },
          {
            "key": "D",
            "text": "AはBのサブタイプである"
          },
          {
            "key": "E",
            "text": "Aはabstractにできない"
          },
          {
            "key": "F",
            "text": "BはAのサブタイプである"
          }
        ],
        "answer": [
          "A",
          "B",
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問45）。",
          "pdfExplanation": "正解：A、B、F\n\nポリモーフィズムに関する問題です。クラスの継承やインタフェースの実現が絡みあうと複雑な関係に見えますが、次のようにクラス図を描くとわかりやすくなります。ポリモーフィズムは、関係する上位のクラスやインタフェース型としてインスタンスを扱うことです。関係がなければポリモーフィズムは成り立ちません。\n【設問のクラス・インタフェース間の関係】\nlabs~actl I l<<int~A I I\n<<interface>>\nr--- 、c D選択肢Aは、抽象クラスAを扱うコレクションを用意し、そこにDのインスタンスを追加しています。DはCを継承しており、そのCはAを継承しています。よって、Dは凡世として扱うことが可能です。以上のことから、正しいコードです。選択肢Bは、インタフェースBを扱うコレクションを用意し、そこにCのインスタンスを追加しています。CはAを継承すると同時にBも実現しています。よって、CはB型として扱うことが可能です。以上のことから、正しいコードです。選択肢Cは、インタフェースBを扱うコレクションを用意し、そこにDのインスタンスを追加しています。DはCを継承しており、そのCは、Aを継承するのと同時にBも実現しています。よって、CはB型として扱うことが可能です。\n以上のことから、正しいコードです。\n選択肢Dは、Dクラスを扱うコレクションを用意し、そこにCのインスタンスを追加しています。ポリモーフィズムは下位に属するクラスが上位に位置する型で扱えるというものです。そのため、このように上位のクラスを下位の型で扱うことはできません。よって、コンパイルエラーが発生します。サブクラスのインスタンスは、スーパークラスの定義を持っていますが、スーバークラスはサブクラスの定義を持っていないことに注意してください。選択肢Eは、抽象クラスAを扱うコレクションを用意し、そこにCのインスタンスを追加しています。CはAを継承しているため、Cのインスタンスを足臣で扱うことが可能です。よって、正しいコードです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    public A build(String str);\n}"
          },
          {
            "title": "B.java",
            "code": "public class B implements A {\n    public B(String str) {\n        // ...\n    }\n\n    @Override\n    public B build(String str) {\n        return new B(str);\n    }\n}"
          }
        ],
        "tags": [
          "interface",
          "abstract",
          "final",
          "covariant-return"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q46",
        "number": 46,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタの呼び出し順",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "CBA と表示される"
          },
          {
            "key": "B",
            "text": "C と表示される"
          },
          {
            "key": "C",
            "text": "ABC と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問46）。",
          "pdfExplanation": "正解：C\n\nクラスの実現や継承関係に関する問題です。インタフェースの主な特徴は、次の3つです。\n・公開すべき扱い方を定めるためのもの\n・インスタンス化できす、実現したクラスを必要とする\n・抽象メソッド(メソッドの宣言情報)を定義する\nJava SE 8からはデフオルトメソッドを記述できるようになったため、廠密には型情報(扱い方)だけを提供するとはいえませんが、基本的には公開される型情報を提供することがインタフェースの主な目的です。一方、抽象クラスには、主に次の3つの特徴があります。\n・インタフエースを実現したクラスの共通部分を定義するためのもの\n•そのままではインスタンス化できす、継承したサブクラスを必要とする\n・抽象メソッドと具象メソッドの両方を記述できる\n選択肢Aは、インタフェースはfinalにできないという意味です。インタフェースは実現されることを前提としているため、変更できないことを意味するfinalで修飾することはできません。よって、正しい説明です。選択肢Bは、具象クラスであるBクラスをabstractで修飾することによって抽象クラスにできるかどうかを問うています。Bクラスはbu i ldメソッドを持っており、このメソッド内でBクラスのインスタンスを生成しています。前述のとおり、抽象クラスはインスタンス化できないため、Bクラスを抽象クラ,合→•贔へ1傘9 U 9 Y 4 5こ守P qよ鼻9 iムなf t<i.t\n;r‘....\nじiご3 v z L 8 J:d tりf\n5`‘ヘごつl了こ\nd 9 9 J\n竺\nb p i t k仁い祐が茫戸p令恥しi t C J直ッ曇\n耐;\nbキi\nスにしようとするとコンパイルエラーが発生します。よって、正しい説明です。選択肢Cは、finalを付けることでこのクラスのサブクラスを定義できなくすることが可能かどうかを問うています。具象クラスであるBクラスを継承したサブクラスを定義することはできますが、finalを付けて継承を制限し、これ以上サブクラスを定義できないようにすることも可能です。よって、説明は誤りです。選択肢DとFは、AとBの関係性について問うています。インタフェースとその実現クラスで考えると難しく感じられるかもしれませんが、単純に継承関係に置き換えると、サブクラスはスーパークラスのサブタイプ(派生した型)であるといえます。反対に、スーパークラスはサブクラスを派生した型ではありません。派生されている側です。インタフェースとその実現クラスの関係も同様に説明できます。BはAを実現したクラスです。これにより、BはAのサブタイブ(派生した型)であるといえます。一方、その逆のAはBのサブタイプではありません。よって、選択胆:Dの説明は誤りで、選択肢Fが正しい説明です。選択肢Eは、インタフェースをabstractで宣言できるかどうかを問うています。abstractは、インスタンス化するための具体的な定義を必要とする抽象(データ型の情報)に対して宣言するものです。インタフェースも抽象クラスもインスタンス化できない抽象です。よって、インタフェースはabst ractを付けて宣言することができます。なお、インタフェースはabstractを付けて宣言できるだけであって、abst ractを付けすに宣言しても、コンパイラによって自動的にabstractであると解釈されます。よって、説明は誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A クラス",
            "code": "class A {\n    public A() {\n        System.out.print(\"A\");\n    }\n}"
          },
          {
            "title": "B クラス",
            "code": "class B extends A {\n    public B() {\n        System.out.print(\"B\");\n    }\n}"
          },
          {
            "title": "C クラス",
            "code": "class C extends B {\n    public C() {\n        System.out.print(\"C\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        new C();\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "inheritance"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q47",
        "number": 47,
        "type": "single",
        "selectCount": 1,
        "title": "privateメソッドとオーバーライド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A\nB と表示される"
          },
          {
            "key": "B",
            "text": "B\nB と表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問47）。",
          "pdfExplanation": "正解：A\n\n継承関係にあるクラスのコンストラクタの呼び出し順に関する問題です。継承関係にあるサブクラスのインスタンスを生成するには、そのクラスのコンストラクタだけでなく、継承元であるスーパークラスのコンストラクタも実行しなければいけません。このとき、スーパークラスのコンストラクタから処理され、その処理後にサブクラスのコンストラクタが処理されます。順番を間違えないようにしましょう。設問のコードはAクラスを継承したBクラスを定義し、さらにBクラスを継承したCクラスを定義しています。そしてCのインスタンスを生成していますが、前述のとおり、コンストラクタはスーパークラスから順に処理されるため、A、\nB 、Cの順に処理されることになります。よって、選択肢Cが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    private void print() {\n        System.out.println(\"A\");\n    }\n    public void a() {\n        print();\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    private void print() {\n        System.out.println(\"B\");\n    }\n    public void b() {\n        print();\n    }\n    public static void main(String... args) {\n        B b = new B();\n        b.a();\n        b.b();\n    }\n}"
          }
        ],
        "tags": [
          "private",
          "override",
          "method"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q48",
        "number": 48,
        "type": "multi",
        "selectCount": 2,
        "title": "メソッドの戻り値型",
        "prompt": "次のうち、メソッドの定義として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "public void methodA(int x) {\n    return ++x;\n}"
          },
          {
            "key": "B",
            "code": "public String methodB() {\n    System.out.println(\"B\");\n}"
          },
          {
            "key": "C",
            "code": "public boolean methodC(int a) {\n    return a < 0;\n}"
          },
          {
            "key": "D",
            "code": "public char methodD(String str) {\n    return str;\n}"
          },
          {
            "key": "E",
            "code": "public void methodE() {\n    return;\n}"
          }
        ],
        "answer": [
          "C",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問48）。",
          "pdfExplanation": "正解：C、E\n\nオーバーライドに関する問踵です。privateなメンパは、あくまでもそのメンパを定義したクラス内でのみ利用可能であるため、サブクラスではオーバーライドできません。そのため、次のように設問のコードに@Overr ideアノテーションを付けるとコンパイルエラーとなります。回ォーパーライドを明示した場合\npublic class B extends A {\n節verr i de\nprivate void print() {\nSystem.out.println(\"B\");\npublic void b() f\nprint();\npublic static void main(String... args) f\nB b = new BO;\nb. a();\nb.b();\ni\nン、一ヽ·キ9 n.m~l 4庄J f灼i i t V Lクと誓駐象し店f fにt uっ5設問のコードでは、Bのインスタンスを作り、B型の変数でその参照を扱っています。その後、スーパークラスであるAに定義されたaメソッドを呼び出しています。aメソッドではprintメソッドを呼び出していますが、ここでAのprintメソッドが呼び出されるのか、それともBのprintメソッドが呼び出されるのかが、この設問で問われているポイントです。前述のとおり、privateメソッドはオーバーライドできません。そのため、Aに定義したaメソッドから呼び出すのはAに定穀したprintメソッドです。よって、コンソールにはAが表示されます。次に、BクラスのbメソッドがBのprintメソッドを呼び出してBが表示されるので、コンソールには「A」「B」の順に表示されます。以上のことから、選択肢Aが正解です。なお、AクラスとBクラスのprintメソッドのアクセス修飾子をprivate以外に変更するとオーバーライドが成り立つので、コンソールには「B」「B」と表示i t\nされます。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [],
        "tags": [
          "method",
          "return",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q49",
        "number": 49,
        "type": "single",
        "selectCount": 1,
        "title": "起動パラメータの分割",
        "prompt": "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "AABAB と表示される"
          },
          {
            "key": "B",
            "text": "ABAB と表示される"
          },
          {
            "key": "C",
            "text": "TABAB と表示される"
          },
          {
            "key": "D",
            "text": "\"ABAB\" と表示される"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問49）。",
          "pdfExplanation": "正解：B\n\nlメソッドの定義に関する問題です。引数と戻り値型に着目してください。選択肢Aは、戻り値型をvoidとしていますが、return文で値を戻そうとしています。選択肢Bは、戻り値型をStringとしていますが、return文で値を戻していません。よって、これらはコンパイルエラーとなります。選択肢Cは、戻り値型をbooleanとし、比較演算の結果をreturnで戻しています。メソッド宣言の戻り値型と実際に戻す値の型が一致しており正しく定義iされています。選択肢D は、char型の戻り型であるのに対し、return文で戻しているのはString型です。char型とString型に互換性はないため、コンパイルエラーとなります。選択肢Eは、戻り値型をvoidとしていますが、値を戻さないreturn文を記述しています。このように値を戻さないreturn文は、「制御をこのメソッドの呼び出し元に戻す」という意味です。そのため、「メソッド宣言の戻り値を戻さない」という定穀には反しません。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "// command\n// > java A \"AB\" AB\n\npublic class A {\n    public static void main(String[] args) {\n        for (String str : args) {\n            System.out.print(str);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "main",
          "args",
          "command"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q50",
        "number": 50,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェース継承と共変戻り値",
        "prompt": "次のプログラムを確認し、Dインタフェースでコンパイルエラーが発生する理由として考えられるものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Dインタフェースが2つ以上継承しているため"
          },
          {
            "key": "B",
            "text": "BインタフェースがAインタフェースとは異なる戻り値型の同名メソッドを定義しているため"
          },
          {
            "key": "C",
            "text": "BとCインタフェースから継承したメソッドの戻り値型が異なるため"
          },
          {
            "key": "D",
            "text": "Dインタフェースで継承したメソッドを再定義しなかったため"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問50）。",
          "pdfExplanation": "正解：C\n\njavaコマンドの起動パラメータに関する問題です。javaコマンドの第1 引数には実行したいクラスの完全修飾クラス名、第2 引究[以降には起動パラメータを指定します。設問のコマンドであれば、次のように分解して考えましょう。\n【設問のコマンド】\njava A nA B\" AB\nT ―---一完全修飾クラス名起動パラメータ起動パラメータは、スペースで区切って複数の値を記述します。スペースを含む文字列を1つの値として渡したい場合には、ダブルクォーテーション「・」で括ります。そのため、設問のコマンドでは、「AB」「AJ「B」という3つの起動パラメータが渡されていることになります。設問のコード4行目では、起動パラメータをそのまま改行なしでコンソールに表示しているため、「AB」「A」「B」という3つを連結して「ABAB」と表示されます。以上のことから選択肢Bが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    public Iterable a();\n}"
          },
          {
            "title": "B.java",
            "code": "import java.util.Collection;\n\npublic interface B extends A {\n    public Collection a();\n}"
          },
          {
            "title": "C.java",
            "code": "import java.nio.file.Path;\n\npublic interface C extends A {\n    public Path a();\n}"
          },
          {
            "title": "D.java",
            "code": "public interface D extends B, C {\n}"
          }
        ],
        "tags": [
          "interface",
          "covariant-return",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q51",
        "number": 51,
        "type": "single",
        "selectCount": 1,
        "title": "フィールドの選択",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "実行時に例外がスローされる"
          },
          {
            "key": "C",
            "text": "A が表示される"
          },
          {
            "key": "D",
            "text": "B が表示される"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問51）。",
          "pdfExplanation": "正解：C\n\nインタフェースの継承と共変戻り値に関する問題です。設問のインタフェース間の関係を図で表すと、次のようになります。\n【設問のインタフェース間の関係】\n<<interface>>\nA a():lt erable\n<<interface>>\n<<interface>>\nB C a():Collectlon+8():Path\n<<interface>>\nD A•\n鳴憂ヽJavaではクラスの多重継承は禁止されていますが、インタフェースの多重継承は認められています(選択肢A) 。A、B 、Cの3つのインタフェースで異なるのは、aメソッドの戻り値型です。ただ、一見異なるように見えるものの、API ドキュメントを確認すると、java.lan g.lterableインタフェースはJava.u til. Collectionやjava.n io .fi le.Pathのスーバーインタフェースであることがわかります。このように、メソッドをオーバーライドした際に戻り値型をサブクラスやサブインタフェースにできる機能を「共変戻り値」と呼びます。BとCでオーバーライドしたメソッドは、共変戻り値の機能が働くためコンパイルエラーが起きることはありません(選択肢B) 。しかし、BとC両方のインタフェースを多重継承したサブインタフェースDでは、どちらの戻り値型を戻すメソッドを引き継ぐのかが不明瞭になるため、コンパイルエラーとなります。以上のことから、選択肢Cが正解です。サブインタフェースでは、スーバーインタフェースのメソッドのオーバーライド(再定義)が可能なだけであり、オーバーライドしなければいけないというルールはありません(選択肢D) 。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "package ex42.a;\n\npublic class A {\n    public String x = \"A\";\n    protected A() {}\n}"
          },
          {
            "title": "B.java",
            "code": "package ex42.b;\n\nimport ex42.a.A;\n\npublic class B extends A {\n    String x = \"B\";\n    public B() {\n        super();\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "package ex42;\n\nimport ex42.a.A;\nimport ex42.b.B;\n\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.x);\n    }\n}"
          }
        ],
        "tags": [
          "field",
          "polymorphism",
          "access"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q52",
        "number": 52,
        "type": "single",
        "selectCount": 1,
        "title": "this / superとコンストラクタ",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "sample 200 100\nsample 200 100"
          },
          {
            "key": "B",
            "text": "null 0 100\nsample 200 100"
          },
          {
            "key": "C",
            "text": "SubSampleクラスの3行目だけでコンパイルエラーになる"
          },
          {
            "key": "D",
            "text": "SubSampleクラスの8行目だけでコンパイルエラーになる"
          },
          {
            "key": "E",
            "text": "SubSampleクラスの3行目と8行目の両方でコンパイルエラーになる"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問52）。",
          "pdfExplanation": "正解：E\n\nフィールドの選択に関する問題です。設問のようにスーパークラスとサブクラスに同じ名前のフィールドがあった場合、そのインスタンスへの参照が何型で扱われているかで、どちらのフィールドが使われるかが決まります。設問のコードでは、Bクラスのインスタンスへの参照をA型の変数で扱っています。そのため、Aに定義したフィールドxが使われます。よって、選択肢cが正解です。なお、次のように変数のデータ型をBに変更するとコンパイルエラーとなります。回変数のデータ型をBに変更\npublic class Main {\npublic static void main(String[] args) f\nB a = new BO;\nSystem.out.println(a.x);\nこれは、Bクラスに定義したフィールドxがアクセス修飾子の付いていないデフォルトになっており、パッケージ外からアクセスできないためです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    String name;\n    int num;\n    public Sample(String name, int num) {\n        this.name = name;\n        this.num = num;\n    }\n}"
          },
          {
            "title": "SubSample.java",
            "code": "public class SubSample extends Sample {\n    int price;\n    public SubSample(int price) {\n        this.price = price;\n    }\n    public SubSample(String name, int num, int price) {\n        super(name, num);\n        this(price);\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        SubSample s1 = new SubSample(100);\n        SubSample s2 = new SubSample(\"sample\", 200, 100);\n        System.out.println(s1.name + \", \" + s1.num + \", \" + s1.price);\n        System.out.println(s2.name + \", \" + s2.num + \", \" + s2.price);\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "this",
          "super",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q53",
        "number": 53,
        "type": "single",
        "selectCount": 1,
        "title": "抽象メソッド未実装",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A と表示される"
          },
          {
            "key": "B",
            "text": "B と表示される"
          },
          {
            "key": "C",
            "text": "Bインタフェースでコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "Cクラスでコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "Dクラスでコンパイルエラーが発生する"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問53）。",
          "pdfExplanation": "正解：E\n\nコンストラクタに関する問題です。コンストラクタは、インスタンスの準備をするために欠かせません。そのため、もしプログラマーが明示的にコンストラクタを定義しなくても、コンバイラによってデフォルトコンストラクタが自動的に追加されます。ただし、設問のSampleクラスのようにコンストラクタが明示的に定義されている場合、デフォルトコンストラクタは追加されません。コンパイラの役割は、コンストラクタが定義されていないときにデフォルトコンストラクタを追加するだけではありません。クラスが継承関係にある場合、スーパークラスのインスタンスから先に準備を始めなければいけません。そのため、サブクラスのコンストラクタの先頭行には、スーパークラスのコンストラクタを呼び出すコードが必要です。プログラマーが明示的にスーパークラスのコンストラクタ呼び出しのコードを記述しなかった場合、コンパイラは引数なしのスーパークラスのコンストラクタ呼び出しのコードを自\n動的に追加します。そのため、設問のSubsam p leクラスは、コンパイルすると次のようなコードに変換されています。\n~super()が追加されたSubsampleクラス\npublic class Subsample extends Sample {\nint price;\npublic SubSample(int price) { // line A\nsuper();\n•••一I\nthis.price= price;\npublic SubSample(String\nname, int\nnum, int price) {\nsuper(name, num);\nthis\n(price);\n// line BスーパークラスであるSampleクラスには、2つの引数を取るコンストラクタは定襲されているものの、引数なしのコンストラクタは存在しません。また、コンストラクタが明示的に定義されているため、前述のようにデフォルトコンストラクタが追加されることもありません。そのため、l ine Aでコンパイルエラーが発生します。Subsam pleクラスはコンストラクタがオーバーロードされており、3つの引数を受け取るコンストラクタも定義されています。このコンストラクタでは、明示的にスーパークラスのコンストラクタを呼び出していますが、次の行でthisを使ってオーバーロードしたコンストラクタを呼び出しています。このとき、前述のようにスーパークラスのコンストラクタ呼び出しのコードが追加されているため、このコンストラクタでは2 回もスーパークラスのコンストラクタを呼び出すことになります。このような事態を防ぐため、スーバークラスのコンストラクタを呼び出した後は、オーバーロードしたコンストラクタを呼び出すことができないようになっています。よって、l ine Bでもコンパイルエラーが発生します。\n以上のことから、選択肢Eが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A インタフェース",
            "code": "interface A {\n    public void sample();\n}"
          },
          {
            "title": "B インタフェース",
            "code": "interface B extends A {\n    public void test();\n}"
          },
          {
            "title": "C クラス",
            "code": "abstract class C implements B {\n    public void test() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "D クラス",
            "code": "class D extends C {\n    public void test() {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        C c = new D();\n        c.test();\n    }\n}"
          }
        ],
        "tags": [
          "interface",
          "abstract",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q54",
        "number": 54,
        "type": "multi",
        "selectCount": 2,
        "title": "try-catch-finallyの構文",
        "prompt": "例外処理に関する説明として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "finallyブロックは、tryブロックまたはcatchブロックのすぐ後ろに配置しなければいけない"
          },
          {
            "key": "B",
            "text": "try-with-resourcesのリソースを閉じる前に、finallyブロックが実行される"
          },
          {
            "key": "C",
            "text": "tryブロックは複数のcatchブロックを持つことができる"
          },
          {
            "key": "D",
            "text": "catchブロックは、一般的な型から特定の型への順に並べなければいけない"
          },
          {
            "key": "E",
            "text": "tryブロックは、catchブロックとfinallyブロックを持たなければいけない"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問54）。",
          "pdfExplanation": "正解：A、C\n\n抽象メソッドの実装に関する問題です。インタフェースや抽象クラスに定義された抽象メソッドは、実現または継承した具象クラスが実装を定義しなければいけません。もし、すべての抽象メ.\",t.、5 1 p i 7今t J P 1へ泌9 5冒f J 5い\nf.;`{...`·”..-\nみへ9.i L亀骨9.f今ペJ Lシf 1バシ、9 a\nらi Lよふ笠埓泡肉翠\niぃ1 9マiテ.9•1•キy\nt d l p\nソッドが具象クラスで実装されなかった場合には、そのクラスは実行できないコードを持つためコンパイルエラーとなります。設問のコードでは、インタフェースAを継承したインタフェースBを定義し、さらにそのインタフェースを実現した抽象クラスC、そしてCを継承した具象クラスDを定義しています。\n(設問のクラスとインタフェース】\n<<interface>>\nA\n<<interface>>\nB C l abstractl Dこのような実現や継承関係のうち、抽象メソッドはインタフェースAのsam pleメソッドとインタフェースBのtestメソッドの2つです。そのため、具象クラスであるDクラスは両方の実装を持たなければいけません。しかし、Dクラスに実装されているのはtestメソッドだけで、sam pleメソッドはありません。よって、Dクラスはコンパイルエラーとなります。以上のことから、選択肢Eが正解です。なお、継承はクラス間だけでなく、インタフェース間でも行えます。インタフェースとクラスの間は継承ではなく、実現になるので混乱しないように注意しましょう。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [],
        "tags": [
          "exception",
          "try-catch-finally"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q55",
        "number": 55,
        "type": "single",
        "selectCount": 1,
        "title": "catchの到達可能性",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A が表示される"
          },
          {
            "key": "B",
            "text": "B が表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問55）。",
          "pdfExplanation": "正解：C\n\n例外処理の構文に関する問題です。例外処理の構文については、以下のポイントを押さえておきましょう。\n• try-catch-finallyもしくはtry-finally©順番になる(選択肢A)\n• try-catch-finally(!)順に記述するとき、finallyブロックは省略可能(選択肢E)\n• 1つの例外処理では、catchブロックは複数記述できるが、tryブロックとfinallyブロックは1つしか記述できない• catchブロックは例外の種類によって分ける\n• catchブロックは上から順番に処理されるので、ポリモーフィズムによって処理できるものが前にあると、後ろのcatchブロックは到達不能になるfinallyブロックは、次のいずれかの場所に記述します。• catchブロックに例外処理を記述する場合は、catchブロックの後ろ• throwsで例外を呼び出し元のメソッドにスローするなど、catchブロックによる例外処理を記述する必要がない場合は、tryブロックの後ろfinallyブロックは、例外処理の最後に実行されます。これはtry-with­resourcesであっても同様で、最後にfinallyブロックが実行されます(選択肢B) 。catchブロックは発生する可能性のある例外の種類こ•とに記述できます。複数の例外が発生する場合は、catchブロックを複数記述することができます(選択肢C) 。ただし、一般的な型(スーパークラス)から特定の型(サブクラス)の順にcatchブロックを並べることはできません。例外の型をポリモーフィズムによって汎化して扱うと、サブクラス型の例外はスーパークラス型のcatchブロックでキャッチできてしまうため、サブクラス型をキャッチするためのcatchブロックが到達不能なコードになってしまい、コンパイルエラーとなります(選択肢D) 。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            throw new Exception();\n        } catch (Exception e) {\n            throw new RuntimeException();\n        } catch (RuntimeException e) {\n            System.out.println(\"A\");\n        } finally {\n            System.out.println(\"B\");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "exception",
          "catch",
          "compile-error"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q56",
        "number": 56,
        "type": "single",
        "selectCount": 1,
        "title": "文字列プールとintern",
        "prompt": "次のプログラムをコンパイル、実行した結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "false, true, false と表示される"
          },
          {
            "key": "B",
            "text": "true, true, true と表示される"
          },
          {
            "key": "C",
            "text": "true, false, false と表示される"
          },
          {
            "key": "D",
            "text": "true, true, false と表示される"
          },
          {
            "key": "E",
            "text": "false, false, false と表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問56）。",
          "pdfExplanation": "正解：A\n\n複数のcatchブロックのある例外処理に関する問題です。設問のコードでは、複数のcatchブロックを記述して、スローされる例外の種類に応じて異なる例外処理ができるようになっています。継承関係にある複数の例外クラスをcatchブロックで指定する場合、必ずサブクラスのcatchブロックを先に記述しなければなりません。設問のコードの5~7行目にはExceptionクラスが指定されたcatchブロックが記述されているため、すべてのExceptionクラスのサブクラスがここでキャッチされます。そのため、ExceptionクラスのサブクラスであるRuntimeExceptionをキャッチするcatchブロックに処理が到達することはありません。このように到違不可能なコードを記述するとコンパイルエラーが発生します。したがって、選択肢Cが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String s1 = new String(\"Java\");\n        String s2 = \"Java\";\n        String s3 = s2.intern();\n        System.out.print((s1 == s2) + \", \");\n        System.out.print((s2 == s3) + \", \");\n        System.out.println(s1 == s3);\n    }\n}"
          }
        ],
        "tags": [
          "String",
          "intern",
          "equality"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q57",
        "number": 57,
        "type": "single",
        "selectCount": 1,
        "title": "2次元char配列と拡張for文",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "ad be cf と表示される"
          },
          {
            "key": "B",
            "text": "abc def と表示される"
          },
          {
            "key": "C",
            "text": "a d b e c f と表示される"
          },
          {
            "key": "D",
            "text": "adb ecf と表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問57）。",
          "pdfExplanation": "正解：A\n\n文字列のコンスタントプールに関する問題です。プログラム内では文字列が頻繁に使われます。同じ文字列のインスタンスを\n作るためにメモリの確保と解放を繰り返すのは、メモリを消費するだけでなく、バフォーマンスにも影響を及ぽします。そのため、Javaでは文字列を使い回す仕組みとしてコンスタントプールが用意されています。文字列の使い回しについてのポイントは次のとおりです。\n・リテラルとして記述した文字列は基本的に使い回される\n• newを使ってStringのインスタンス生成を明示的に記述した場合には、新しいString型オブジェクトが生成される• java.lang .Stringクラスのinternメソッドは、すでにメモリ上にあるString型オブジェクトヘの参照を戻す設問のコードでは、3つのString型変数を用意しています。1つ目のs1 には、実行時に生成したString型インスタンスの参照を代入しています\n(3行目)。\n2つ目のs2 には、文字列のリテラルを代入しています\n(4行目)。リテラルは\nコンパイル時に定数として扱われます。よって、生成されるタイミングが異なる1つ目と2つ目のStringは同じインスタンスではありません。そのため、「s1 ==s2」の結果はfalseとなります。3つ目のs3 には、2つ目のStringのインスタンスへの参照をi n ternメソッドで取り出して代入しています\n(5行目)。そのため、\n2つ目と3つ目は同じインスタンスヘの参照を持つことになります。よって、「s2==s3」の結果はtrueとなります。2つ目と3つ目が同じ参照先を持つているため、1つ目と2つ目が異なれば、1つ目と3つ目も異なることになります。よって、「sl ==s3」の結果はfalseとなります。==演算子は、インスタンスの参照が同じ(同一)かどうかを判定するということにも注意しましょう。\n以上のことから、コンソールには「false, true、false」と表示されます。よっ\nて、選択肢幼’正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        char[][] arrays = {{'a', 'd'}, {'b', 'e'}, {'c', 'f'}};\n        for (char[] array : arrays) {\n            for (char ch : array) {\n                System.out.print(ch);\n            }\n            System.out.print(\" \");\n        }\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "enhanced-for",
          "char"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q58",
        "number": 58,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタチェイン",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "2143 が表示される"
          },
          {
            "key": "B",
            "text": "1234 が表示される"
          },
          {
            "key": "C",
            "text": "4321 が表示される"
          },
          {
            "key": "D",
            "text": "3421 が表示される"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問58）。",
          "pdfExplanation": "正解：A\n\n2次元目の配列と二重ルーブに関する問題です。二重ループは、内側のルーブを簡単な説明に置き換えるとわかりやすくなります。設問のコードの二重ルーブの内側のルーブでは、配列から文字を取り出し、スペースを入れすに並べて出力しています。内側のfor文をこの説明に置き換えると次のようになります。これで二重ルーブが簡単な一重のルーブに置き換わります。\nEl 内側のfor文を説明に置き換えて考える\npublic class Main {\npublic static void main(String[] args) {\nchar[][] array\ns= {{'a','d'J\n{'b','e'}, {'c','f'}J;\nfor (char[] array: array\ns) {\n//翻jから文字を取り出し、スペースを入れすに並ぺて出力\nSystem.out.print('’\");\n會内●のルーブの処遷3 9 9 J 3-t F]··,'T•,9,9ヘ5 9バ7し9,9 2 f 9 P vへ1 l t rずJキ心`.,`ヽJ-\n•·... キ;,,:\ni•·、`,t.i、.^ぺ·、•\n・マ・\nさ•.•今',\n' 9·ゞらr'• キ:,.っ・←7·ど`J,..、'.`‘・`\n,;応―-‘\nレ··‘9...~ふ・ヽI~ヽ各‘\nこのループでは、2次元配列から1つすつ配列を取り出して、繰り返し処理を実行します。変数arraysで参照する配列には、配列が3つ入っているため、繰り返し処理が実行されるのは3回です。1回目は「a」「d」という文字を持った配列が取り出されます。繰り返し処理では、配列から文字を取り出し、スペースを入れすに並べて出力するので、コンソールには「ad」と表示されます。その後、スペースを出力します。2 回目は「b」「e」という文字を持った配列が取り出されます。1回目と同様に出力されるので、先ほどの出力結果と合わせて「ad be 」とコンソールに表示されます。3回目は「c」「f」という文字を持った配列が取り出されます。同様に、コンソールには先ほどの出力結果と合わせて「ad be cf」と表示されます。以上のことから、選択肢幻沢E解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    protected A() {\n        this(2);\n        System.out.print(\"1\");\n    }\n    protected A(int a) {\n        System.out.print(a);\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    B() {\n        this(4);\n        System.out.print(\"3\");\n    }\n    B(int b) {\n        System.out.print(b);\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        B b = new B();\n    }\n}"
          }
        ],
        "tags": [
          "constructor",
          "this",
          "super"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q59",
        "number": 59,
        "type": "single",
        "selectCount": 1,
        "title": "2次元配列のループ",
        "prompt": "次のプログラムを実行し、abcdと表示したい。「// insert code here」に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "for (int i = 1; i < 2; i++) {\n    for (int j = 1; j < 2; j++) {\n        System.out.print(array[i][j]);\n    }\n}"
          },
          {
            "key": "B",
            "code": "for (int i = 0; i < 2; ++i) {\n    for (int j = 0; j < i; ++j) {\n        System.out.print(array[i][j]);\n    }\n}"
          },
          {
            "key": "C",
            "code": "for (String a : array) {\n    for (String b : array) {\n        System.out.println(b);\n    }\n}"
          },
          {
            "key": "D",
            "code": "for (int i = 0; i < 2;) {\n    for (int j = 0; j < 2;) {\n        System.out.print(array[i][j]);\n        j++;\n    }\n    i++;\n}"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問59）。",
          "pdfExplanation": "正解：D\n\nコンストラクタチェインに関する問題です。サブクラスをコンパイルすると、サブクラスのコンストラクタには、次のよ\nうにスーパークラスのコンストラクタを呼び出すsuper();が追加されます。\nEl サブクラスのコンストラクタにsuper();が追加される\npublic class B extends A{\nBO {\nthis(4);\nSystem.out.print(\"3\");\nB(int\nb) {\nsuper();\n..スーパークラスのコンストラクタ呼び出し\nSystem.out.print(b);\n戸J畜9 9己5 y忍i b J、C f 9 4名五9 i 9文忘~図ぶ塁9 t層よ苔j i 3 q J 9ぶキ9\nそのため、Bクラスのインスタンスを生成すると、次の順番でコンストラクタが処理されます。1Bクラスの引数なしのコンストラクタを呼び出し、thisを使ってオーバーロードされたコンストラクタを呼び出す2Bクラスのint型の引数を受け取るコンストラクタを呼び出し、superを使ってAクラスの引数なしのコンストラクタを呼び出す3Aクラスの引数なしのコンストラクタを呼び出し、thisを使ってオーバーロードされたコンストラクタを呼び出す4Aクラスのint型の引数を受け取るコンストラクタで受け取った値「2」を表示し、Aクラスの引数なしのコンストラクタに戻る5Aクラスの引数なしのコンストラクタで値「1 」を表示する6Bクラスのint型を受け取るコンストラクタで、引数で受け取った値「4」を表示する7Bクラスの引数なしのコンストラクタで、値「3」を表示する\n以上のことから、選択肢Aが正解です。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String[][] array = new String[2][2];\n        array[0][0] = \"a\";\n        array[0][1] = \"b\";\n        array[1][0] = \"c\";\n        array[1][1] = \"d\";\n        // insert code here\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "loop",
          "for"
        ],
        "status": "pdf_visual_focused_audit"
      },
      {
        "id": "ch07-q60",
        "number": 60,
        "type": "single",
        "selectCount": 1,
        "title": "配列要素nullとString#concat",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "e0\ne1"
          },
          {
            "key": "B",
            "text": "null e0\nnull e1"
          },
          {
            "key": "C",
            "text": "null\nnull"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第7章 問60）。",
          "pdfExplanation": "正解：D\n\n2次元配列と二重ループに関する問題です。設問の配列は、次のような構造を持つ2次元配列です。\n【設問の配列の構造】\n```text\n1次元目: [0] [1]\n2次元目: [a][b]  [c][d]\n0  1    0  1\nこの配列のすべての要素をコンソールに出力するには、次のコードのようなループが必要です。\n例 配列の要素を出力する拡張for文\n```java\nfor (int i = 0; i < 2; i++) {\nfor (int j = 0; j < 2; j++) {\nSystem.out.print(array[i][j]);\nこのような二重ループが出題された場合は、内側のループが何をするコードなのかを見定めます。上記のコードでは、内側のループは2次元目の要素をコンソールに出力しています。そこで次のように簡略化すると、複雑に見える二重ループであっても理解しやすくなります。\n例 二重ループを簡略化した形\n```java\nfor (int i = 0; i < 2; i++) {\n// 2次元目の要素を表示する（内側のループ）\n本設問で重要なポイントは、2つの要素を持つ配列が2つある2次元配列を扱っているため、1つ目の配列の0番目と1番目、2つ目の配列の0番目と1番目を順に表示しなければいけない点です。しかし、選択肢Aは初期値を0からではなく1から始めています。そのため、2つ目の配列の1番目の要素しか出力されません。以上のことから、選択肢Aは誤りです。\nまた、上記の正しいコード例では、変数iとjの値、またそのときの結果の関係は次の表のとおりとなります。\n```text\n変数i  変数j  結果\n0      0      aが表示される\n0      1      bが表示される\n1      0      cが表示される\n1      1      dが表示される\n選択肢Bは、初期値は外側のループも内側のループも0から始まっていますが、内側の条件式が「j < i」となっているため、次のように条件を表にすると、すべての要素が表示されるわけではないことがわかります。\n```text\n変数i  変数j  結果\n0      0      条件に一致しないのでループの内側を抜ける\n0      1      実行されない\n1      0      cが表示される\n1      1      条件に一致しないのでループの内側を抜ける\nまた、拡張for文では2次元配列の1次元目だけを取り出して繰り返すことはできません。よって、選択肢Cは誤りです。\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter7_original_order_transcription_v1 を基に表示用整形を行い、ページ見出し・書籍ページ参照・OCR由来のページ装飾断片は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[] str = new String[2];\n        int i = 0;\n        for (String s : str) {\n            str[i].concat(\"e\" + i);\n            i++;\n        }\n        for (i = 0; i < str.length; i++) {\n            System.out.println(str[i]);\n        }\n    }\n}"
          }
        ],
        "tags": [
          "array",
          "null",
          "String",
          "exception"
        ],
        "status": "pdf_visual_focused_audit"
      }
    ],
    "ch08": [
      {
        "id": "ch08-q01",
        "number": 1,
        "type": "single",
        "selectCount": 1,
        "title": "ローカル変数の初期化",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        long a, b, c;\n        a = 1;\n        b = 10L;\n        System.out.println(a + \",\" + b + \",\" + c);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「1, 10, 0」が表示される"
          },
          {
            "key": "B",
            "text": "「1, 10L, null」が表示される"
          },
          {
            "key": "C",
            "text": "「1, 10, null」が表示される"
          },
          {
            "key": "D",
            "text": "「1, 10L, 0」が表示される"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問1）。",
          "pdfExplanation": "正解：F\n\n変数宣言と初期化に関する問題です。変数は必ず初期化してからしか使えません。しかし、設問のコードでは変数cが初期化されないまま、コンソールに出力しようと使われておりコンパイルエラーが発生します。以上のことから、選択肢Fが正解です。\n数値リテラルはint型の値として扱われるため、long型の値であることを明示するときには設問のように数値の後に小文字の「l」や大文字の「L」という接尾辞を付けます。この接尾辞は、コード中にリテラルを記述するときにのみ利用されるもので、データ型を厳密に宣言する以上の効果はありません。そのため、接尾辞を付けたリテラルを代入した変数の値をコンソールに出力しても接尾辞なしで表示されることになります。よって、選択肢BやDのように10Lと出力されることはありません。また、nullリテラルは参照型変数の参照先がないことを表すための特別な値であり、int型やlong型などのプリミティブ型の変数で扱うことはできません。よって、選択肢BやCも誤りです。\n【第2章：問題2、第4章：問題9】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "main/args",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q02",
        "number": 2,
        "type": "multi",
        "selectCount": 2,
        "title": "ソースファイルのコンパイルと実行",
        "prompt": "A.javaというファイルに保存された次のプログラムについて、正しい説明を選びなさい。",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B クラス",
            "code": "class B {\n    public static void main(String[] args) {\n        System.out.println(\"B\");\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "このコードは、javac A.javaでコンパイルでき、java Bで実行できる"
          },
          {
            "key": "B",
            "text": "このコードは、javac B.javaでコンパイルできるが、javaコマンドで実行できない"
          },
          {
            "key": "C",
            "text": "このコードは、javac A.javaでコンパイルできるが、javaコマンドで実行できない"
          },
          {
            "key": "D",
            "text": "このコードは、javac B.javaでコンパイルでき、java Bで実行できる"
          },
          {
            "key": "E",
            "text": "このコードは、javac A.javaでコンパイルでき、java Aで実行できる"
          },
          {
            "key": "F",
            "text": "このコードはコンパイルエラーになる。AとBは異なるソースファイルに保存しなければならない"
          },
          {
            "key": "G",
            "text": "このコードはコンパイルエラーになる。ファイル名をB.javaにする必要がある"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問2）。",
          "pdfExplanation": "正解：A、E\n\nJavaのソースファイルのコンパイルおよび実行に関する問題です。Javaのソースファイルは、publicなクラスの名前と同じファイル名でなくてはいけません。1つのソースファイルにpublicではない複数のクラスを記述することは可能です。設問のコードでは、Aクラスがpublicなので、ソースファイル名はA.javaである必要があります。よって、選択肢FとGは誤りです。ソースファイルをコンパイルするには、javacコマンドにファイル名を指定します。そのため、javacコマンドにB.javaを指定している選択肢BとDは誤りです。A.javaをコンパイルすると、A.classとB.classという2つのクラスファイルが生成されます。どちらのクラスにもmainメソッドが正しく記述されており、実行することができます。よって、実行できないとした選択肢Cは誤りです。\n以上のことから、選択肢AとEが正解です。\n【第1章：問題6】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "package/import",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q03",
        "number": 3,
        "type": "single",
        "selectCount": 1,
        "title": "staticメソッドとインスタンスフィールド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Value.java",
            "code": "public class Value {\n    private String contents;\n    public Value(String contents) {\n        super();\n        this.contents = contents;\n    }\n    public Value() {\n        this.contents = \"\";\n    }\n    public static void print() {\n        System.out.println(contents);\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Value.print();\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "何も表示されない"
          },
          {
            "key": "B",
            "text": "「\"\"」が表示される"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問3）。",
          "pdfExplanation": "正解：C\n\nstaticメソッドに関する問題です。staticメソッドから、インスタンスフィールドやインスタンスメソッドにアクセスすることはできません。staticメソッドからアクセスできるのは、staticなもののみです。設問のコードでは、staticなprintメソッドからstaticではないcontentsフィールドにアクセスしているためコンパイルエラーになります。よって、選択肢Cが正解です。\n【第4章：問題6】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "main/args",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "オートボクシングとinstanceof",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String result = test(0b0110);\n        System.out.println(result);\n    }\n\n    private static String test(Number n) {\n        if (n instanceof Byte b) {\n            return \"A\";\n        } else if (n instanceof Short s) {\n            return \"B\";\n        } else if (n instanceof Integer i) {\n            return \"C\";\n        } else if (n instanceof Long l) {\n            return \"D\";\n        } else {\n            return \"E\";\n        }\n    }\n}"
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
            "text": "D"
          },
          {
            "key": "E",
            "text": "E"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問4）。",
          "pdfExplanation": "正解：C\n\nオートボクシングとinstanceof演算子に関する問題です。int型に対するIntegerクラスやlong型に対するLongクラス、double型に対するDoubleクラスのように、プリミティブ型に対応したクラスのことをラッパークラスといいます。プリミティブ型が値そのものを扱うのに対し、ラッパークラスはインスタンスの参照を扱うため、両者の間で演算を行うにはプリミティブ型からラッパークラス、またはラッパークラスからプリミティブ型への変換が必要になります。Javaには、これらの変換を自動的に行う仕組みが用意されています。プリミティブ型からラッパークラスへの自動変換をオートボクシング、ラッパークラスからプリミティブ型への自動変換をアンボクシングといいます。たとえば次の例では、Integer型のインスタンスにint型の整数を直接代入しています。\n例 オートボクシングの例\nInteger numInt = 10;\nInteger型の変数に直接数値を代入することはできないので、このようなコードではオートボクシングが働き、コンパイル時に数値の10がInteger型のインスタンスに変換され、その参照がnumIntに代入されます。\nまた次の例では、Integer型のインスタンスの参照を、int型の変数に代入しています。\n例 アンボクシングの例\nInteger val = Integer.valueOf(10);\nint num = val;\nint型の変数にInteger型の参照を代入することはできないので、アンボクシングによってコードが自動的に変換されます。具体的には、Integer型のインスタンス内部にあるint型の値10がintValueメソッドによって取り出され、変数numに代入されます。\n設問のコードでは、testメソッドの引数に2進数表現の0b0110という数値を渡しています。これは10進数では6になります。表現方法が2進数なだけで、整数リテラルがデフォルトでint型として解釈されることは変わりません。testメソッドの引数はNumber型です。int型の値はそのままでは渡せないため、オートボクシングされてIntegerのインスタンスが作られ、その参照が引数に渡されることになります。NumberはIntegerのスーパークラスであり、ポリモーフィズムで扱えるため、コンパイルエラーが起きることはありません。testメソッド内では、instanceof演算子を使って型の互換性を順番に確認していきます。前述のように引数はInteger型のインスタンスへの参照なので、3つ目の条件式にマッチして、コンソールにはCが表示されることになります。\n以上のことから、選択肢Cが正解です。\n【第4章：問題30】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "boxing/instanceof",
          "inheritance/polymorphism",
          "main/args",
          "exception"
        ]
      },
      {
        "id": "ch08-q05",
        "number": 5,
        "type": "single",
        "selectCount": 1,
        "title": "例外のcatch順序",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        try {\n            test(null);\n        } catch (IllegalStateException e) {\n            System.out.println(\"A\");\n        } catch (RuntimeException e) {\n            System.out.println(\"B\");\n        } catch (Exception e) {\n            System.out.println(\"C\");\n        }\n    }\n\n    private static void test(String str) {\n        if (str.equalsIgnoreCase(\"\")) {\n            throw new IllegalStateException();\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Aが出力される"
          },
          {
            "key": "B",
            "text": "Bが出力される"
          },
          {
            "key": "C",
            "text": "Cが出力される"
          },
          {
            "key": "D",
            "text": "何も出力されない"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問5）。",
          "pdfExplanation": "正解：B\n\n例外と例外処理に関する問題です。設問のコードでは、mainメソッド内でtestメソッドを呼び出していますが、引数にnullを渡しています。そのため、testメソッド内でequalsIgnoreCaseメソッドを呼び出すとNullPointerExceptionが発生します。IllegalStateExceptionがスローされることはありません。NullPointerExceptionは、RuntimeExceptionのサブクラスです。そのため、2つ目のcatchブロックでキャッチされ、コンソールに「B」が表示されます。以上のことから、選択肢Bが正解となります。\n【第6章：問題22】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "exception",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q06",
        "number": 6,
        "type": "multi",
        "selectCount": 2,
        "title": "sealed interfaceとキャスト",
        "prompt": "次のプログラムで、コンパイルエラーになる箇所は(1)から(9)のどれか。",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        B b = new C();\n        A t = new C();\n\n        b.test(1); // (1)\n        (A)b.test(2); // (2)\n        ((A)b).test(3); // (3)\n        t.test(4); // (4)\n        (A)t.test(5); // (5)\n        ((A)t).test(6); // (6)\n    }\n}"
          },
          {
            "title": "A インタフェース",
            "code": "sealed interface A permits C { // (7)\n    void test(int i);\n}"
          },
          {
            "title": "B クラス",
            "code": "class B { // (8)\n    public static final int NUM = 2;\n}"
          },
          {
            "title": "C クラス",
            "code": "final class C extends B implements A { // (9)\n    @Override\n    public void test(int i) {\n        System.out.println(i * B.NUM);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          },
          {
            "key": "E",
            "text": "(5)"
          },
          {
            "key": "F",
            "text": "(6)"
          },
          {
            "key": "G",
            "text": "(7)"
          },
          {
            "key": "H",
            "text": "(8)"
          },
          {
            "key": "I",
            "text": "(9)"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問6）。",
          "pdfExplanation": "正解：A、B\n\nシールインタフェースとポリモーフィズムに関する問題です。設問のコードでは、Aインタフェースがシールインタフェースとして定義されており、Cクラスのみ実装を許可しています。sealedとpermitsを正しく使っているので、Aインタフェースに問題はありません。よって、選択肢Gは誤りです。Bクラスは、たんなるクラスであり、コンパイルエラーが発生する箇所はありません。よって、選択肢Hも誤りです。Cクラスは、Aインタフェースを実装したクラスです。同時にBクラスも継承しています。CクラスはAインタフェースを実装することを許可されたクラス\nです。シールインタフェースを実装したクラスはsealed、final、non-sealedのいずれかで修飾している必要がありますが、Cクラスはfinalで修飾されています。よって、このクラスでコンパイルエラーが発生することはありません。以上のことから、選択肢Iも誤りです。\nBクラスにtestメソッドは存在しません。そのため、(1)の箇所は、コンパイルエラーになります。一方、(2)の箇所はキャスト式を記述して型変換をしていますが、testメソッドの呼び出しが先に解釈されます。そのため、Bクラスにtestメソッドが存在しないと、コンパイルエラーになります。(3)の行のように、カッコを使ってキャスト式による型変換を優先するようにするとA型として扱われるため、コンパイルエラーは起きません。以上のことから、選択肢AとBが正解で、選択肢Cは誤りです。\n(4)の行は、Cクラスのインスタンスへの参照をA型として扱っている変数tを使ってtestメソッドを呼び出しています。Aにはtestメソッドが存在するため、この行でコンパイルエラーは発生しません。また、(5)の行は、A型のtestメソッドを呼び出しており、この行でもコンパイルエラーは起きません。(6)の行のように、カッコを使ってキャスト式による型変換を優先するようにしていますが、そもそも変数tはA型なので影響はなく、この行でコンパイルエラーは起きません。よって、選択肢DとE、およびFは誤りです。\n【第5章：問題16、24】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "interface/default",
          "sealed",
          "inheritance/polymorphism",
          "operator/control"
        ]
      },
      {
        "id": "ch08-q07",
        "number": 7,
        "type": "single",
        "selectCount": 1,
        "title": "フィールド隠蔽とオーバーライド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A b = new B();\n        System.out.print(b.data + \",\" + b.getData() + \"|\");\n        b.data = 20;\n        System.out.print(b.data + \",\" + b.getData() + \"|\");\n        B s = (B)b;\n        System.out.print(s.data + \",\" + s.getData() + \"|\");\n        s.data = 21;\n        System.out.print(s.data + \",\" + s.getData() + \"|\");\n    }\n}"
          },
          {
            "title": "A クラス",
            "code": "class A {\n    public int data = 10;\n    public int getData() {\n        return data;\n    }\n}"
          },
          {
            "title": "B クラス",
            "code": "class B extends A {\n    int data = 11;\n    public int getData() {\n        return data;\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "10,11|20,11|11,11|21,21|"
          },
          {
            "key": "B",
            "text": "10,10|10,10|20,20|21,21|"
          },
          {
            "key": "C",
            "text": "10,10|20,20|11,11|21,21|"
          },
          {
            "key": "D",
            "text": "10,11|20,20|11,11|21,21|"
          },
          {
            "key": "E",
            "text": "10,10|10,20|20,20|21,21|"
          },
          {
            "key": "F",
            "text": "10,11|10,11|20,11|21,21|"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問7）。",
          "pdfExplanation": "正解：A\n\nメソッドのオーバーライドと、サブクラスで同名のフィールドを定義したときの挙動に関する問題です。サブクラスにスーパークラスと同じ名前のフィールドがあった場合、アクセスするのがフィールドなのかメソッドなのかによって動作が変わります。サブクラス内のメソッドでは、superを付けてアクセスしない限り、サブクラスに定義したフィールドが使われます。一方、メソッドではなくフィールドに直接アクセスした場合、その変数の型に応じて、どちらのフィールドにアクセスするかが決まります。設問のコードでは、Aクラスを継承したBクラスで、dataというAクラスと同じ名前のフィールドを定義しています。そのため、BクラスのgetDataメソッドはBクラスのdataフィールドにアクセスした結果を戻します。mainメソッドでは、まずBクラスのインスタンスを生成し、その参照をA型の変数bで扱っています。変数の型はA型ですが、実際に動作するのはBクラスのインスタンスです。そのため、b.dataのようにフィールドにアクセスした場合には、Aクラスに定義したフィールドが使われ、b.getData()のようにメソッドにアクセスし、そのメソッド内からdataフィールドにアクセスした場合にはBクラスに定義したフィールドが使われます。よって、コンソールには、10,11と表示されます。以上のことから、選択肢B、C、Eが誤りとなります。\nその後、b.dataに20を代入していますが、これも前述のとおりAクラスに定義されたフィールドの値が10から20に変わります。Bクラスのフィールドは11のままです。そのため、b.dataとb.getData()の結果を表示すると、20,11となります。よって、選択肢Dも誤りです。\n次は、キャスト式を使ってA型の変数で扱っていた参照をB型の変数sで扱うようにしています。変数sはB型なので、s.dataでアクセスするとBクラスのフィールドが使われます。s.getData()も同様にBクラスのフィールドが使われます。そのため、コンソールには11,11が表示されます。以上のことから、選択肢Fも誤りです。\n最後に、s.dataに21を代入しています。これで、Bクラスのフィールドの値が11から21に変わります。そのため、s.dataもs.getData()も21を戻し、コンソールには21,21が表示されます。以上のことから、選択肢Aが正解です。\n【第5章：問題12】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "override/overload",
          "inheritance/polymorphism",
          "field/static/scope",
          "main/args"
        ]
      },
      {
        "id": "ch08-q08",
        "number": 8,
        "type": "single",
        "selectCount": 1,
        "title": "例外階層とfinally",
        "prompt": "次のプログラムを確認し、コンパイル、実行したときの結果として正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "SampleException.java",
            "code": "public class SampleException extends RuntimeException {}"
          },
          {
            "title": "ExceptionA.java",
            "code": "public class ExceptionA extends SampleException {}"
          },
          {
            "title": "ExceptionB.java",
            "code": "public class ExceptionB extends SampleException {}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        try {\n            test();\n        } catch (ExceptionA e) {\n            System.out.println(\"A\");\n        } catch (SampleException e) {\n            System.out.println(\"B\");\n        } catch (RuntimeException e) {\n            System.out.println(\"C\");\n        } catch (Exception e) {\n            System.out.println(\"D\");\n        } finally {\n            System.out.println(\"E\");\n        }\n    }\n\n    private static void test() throws ExceptionA {\n        throw new ExceptionA();\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Aのみ表示される"
          },
          {
            "key": "B",
            "text": "A、Eの順に表示される"
          },
          {
            "key": "C",
            "text": "Bのみ表示される"
          },
          {
            "key": "D",
            "text": "B、Eの順に表示される"
          },
          {
            "key": "E",
            "text": "Cのみ表示される"
          },
          {
            "key": "F",
            "text": "C、Eの順に表示される"
          },
          {
            "key": "G",
            "text": "Dのみ表示される"
          },
          {
            "key": "H",
            "text": "D、Eの順に表示される"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問8）。",
          "pdfExplanation": "正解：B\n\n例外処理に関する問題です。\n例外がスローされた後、try-catchブロック内で最初に一致するcatchブロックで例外がキャッチされます。testメソッドでスローされる例外はExceptionA型です。そのため、一番最初のcatchブロックでキャッチされ、コンソールにはAが出力されます。\ncatchブロックによる例外処理が終われば、finallyブロックが実行されます。そのため、コンソールにはEが出力されます。\n以上のことから、A、Eの順に表示されるとした選択肢Bが正解となります。\n【第6章：問題8】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "exception",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q09",
        "number": 9,
        "type": "single",
        "selectCount": 1,
        "title": "switch式",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[] values = {70, 80, 90, 95, 40, 20, 10, 60};\n        for (int i : values) {\n            System.out.print(test(i));\n        }\n    }\n\n    public static String test(int value) {\n        return switch (value) {\n            case 10, 20 -> \"D\";\n            case 30, 40 -> \"C\";\n            case 50, 60, 70 -> \"B\";\n            case 80, 90 -> \"A\";\n            case 100 -> \"S\";\n            default -> \"E\";\n        };\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "BAAECDDB"
          },
          {
            "key": "B",
            "text": "BASECDDB"
          },
          {
            "key": "C",
            "text": "BASEASEASEECDBASEDCDBASEBASE"
          },
          {
            "key": "D",
            "text": "コンパイルエラー"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問9）。",
          "pdfExplanation": "正解：A\n\nswitch式に関する問題です。switch式では、switch文のようにフォールスルーは発生しません。よって、breakを記述しなくても、一致したcase以降のcaseの処理が実行されることはありません。設問のコードでは、70、80、90、95、40、20、10、60の値を順に渡しながらtestメソッドを実行しています。このメソッドでは、caseに一致した文字列を戻します。最初は70なのでBが、次が80なのでAが、90もA、95は一致するcaseがないためにdefaultが使われてEが、40はC、20はD、10もD、最後の60はBが戻されます。\n以上のことから、選択肢Aが正解となります。\n【第3章：問題36】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "operator/control",
          "main/args",
          "interface/default",
          "exception"
        ]
      },
      {
        "id": "ch08-q10",
        "number": 10,
        "type": "multi",
        "selectCount": 2,
        "title": "recordとListへの追加",
        "prompt": "「// insert code here」に記述すると、コンパイルエラーまたは実行時例外が発生するものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Item.java",
            "code": "public record Item(String name) {\n}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        List<Item> list = new ArrayList<Item>();\n        // insert code here\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "list.add(new Item(null));"
          },
          {
            "key": "B",
            "text": "list.add(new Item(\"\"));"
          },
          {
            "key": "C",
            "text": "list.add(null);"
          },
          {
            "key": "D",
            "text": "list.add(new Item());"
          },
          {
            "key": "E",
            "text": "list.add((Item) new Object());"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問10）。",
          "pdfExplanation": "正解：D、E\n\nレコードクラスとコレクションに関する問題です。レコードクラスのコンストラクタはnullを受け入れることができます。よって、選択肢Aのコードはコンパイルエラーも実行時例外も発生しません。文字列を引数に受け取るレコードクラスのコンストラクタは空文字列も受け入れることができます。よって、選択肢Bのコードはコンパイルエラーも実行時例外も発生しません。ArrayListクラスはnullを許容します。よって、選択肢Cのコードはコンパイルエラーも実行時例外も発生しません。レコードクラスには引数なしのデフォルトコンストラクタはありません。よって、選択肢Dのコードはコンパイルエラーを引き起こします。ObjectクラスはItem型にダウンキャストできないため、選択肢Eのコードは実行時にClassCastExceptionがスローされます。\n以上のことから、選択肢Dと選択肢Eが正解です。\n【第2章：問題36、第4章：問題31】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "collection",
          "record",
          "main/args",
          "exception"
        ]
      },
      {
        "id": "ch08-q11",
        "number": 11,
        "type": "single",
        "selectCount": 1,
        "title": "Stringインスタンス数",
        "prompt": "次のプログラムをコンパイル、実行したとき、Stringクラスのインスタンスはいくつ作成されていますか。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String a = \"sample\";\n        String b = new String(\"sample\");\n        String c = \"sample\";\n        String d = new String(\"sample\");\n        String e = c;\n        String f = d;\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          },
          {
            "key": "E",
            "text": "5"
          },
          {
            "key": "F",
            "text": "6"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問11）。",
          "pdfExplanation": "正解：C\n\n文字列リテラルとコンスタントプールに関する問題です。文字列リテラルはコンスタントプールに置かれ、共有されます。一方、newを使ってStringのインスタンスを明示的に生成した場合には、ヒープにインスタンスが作られます。変数aで扱う文字列は、文字列リテラルとして作られたStringのインスタンスです。このインスタンスはコンスタントプールに置かれており、以降、同じ文字列が使われたときにはこのインスタンスへの参照が使い回されます。そのため、変数aとcは、同じインスタンスへの参照を持っていることになります。一方、変数bとdで扱う文字列は、newを使って明示的に生成されています。そのため、この2つの変数で扱う文字列は別々のインスタンスということになります。変数eとfは、参照をコピーしているだけなので、新たにインスタンスが作られることはありません。\n以上のことから、コンスタントプールの1つと、ヒープにある2つの合計3つのインスタンスが生成されます。よって、選択肢Cが正解です。\n【第2章：問題23】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "string/reference",
          "main/args",
          "array",
          "field/static/scope"
        ]
      },
      {
        "id": "ch08-q12",
        "number": 12,
        "type": "single",
        "selectCount": 1,
        "title": "try-with-resourcesと例外",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Test.java",
            "code": "public class Test implements AutoCloseable {\n    public void close() throws Exception {\n        System.out.println(\"C\");\n    }\n}"
          },
          {
            "title": "SampleException.java",
            "code": "public class SampleException extends Exception {}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        try (Test t = new Test()) {\n            throw new SampleException();\n        } catch (Exception e) {\n            System.out.println(\"A\");\n        } finally {\n            System.out.println(\"B\");\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "A、Bの順に表示される"
          },
          {
            "key": "B",
            "text": "A、Cの順に表示される"
          },
          {
            "key": "C",
            "text": "B、Aの順に表示される"
          },
          {
            "key": "D",
            "text": "A、B、Cの順に表示される"
          },
          {
            "key": "E",
            "text": "A、C、Bの順に表示される"
          },
          {
            "key": "F",
            "text": "C、A、Bの順に表示される"
          },
          {
            "key": "G",
            "text": "コンパイルエラー"
          },
          {
            "key": "H",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問12）。",
          "pdfExplanation": "正解：F\n\ntry-with-resources（リソース付きtryブロック）に関する問題です。\ntryブロック内で、例外が発生した場合、リソースの解放（closeメソッドの呼\nび出し）、catchブロック、finallyブロックの順に実行されます。設問のコードでは、tryブロック内でSampleExceptionがスローされ、Testクラスのcloseメソッド、catchブロック、finallyブロックの順に実行されることになります。以上のことから、選択肢Fが正解です。\n【第6章：問題11】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "exception",
          "try-with-resources",
          "main/args",
          "interface/default"
        ]
      },
      {
        "id": "ch08-q13",
        "number": 13,
        "type": "multi",
        "selectCount": 2,
        "title": "インタフェース実装",
        "prompt": "次のインタフェースを正しく実装しているクラスを選びなさい。",
        "codeBlocks": [
          {
            "title": "Test",
            "code": "interface Test {\n    void execute();\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "code": "public class A implements Test {\n    private void execute() {\n        System.out.println(\"sample\");\n    }\n}"
          },
          {
            "key": "B",
            "code": "public class B implements Test {\n    public void execute(String str) {\n        System.out.println(str);\n    }\n}"
          },
          {
            "key": "C",
            "code": "public class C implements Test {\n    public void execute() {\n        System.out.println(\"sample\");\n    }\n}"
          },
          {
            "key": "D",
            "code": "public class D implements Test {\n    public String execute() {\n        return \"sample\";\n    }\n}"
          },
          {
            "key": "E",
            "code": "public abstract class E implements Test {\n    public void print(String str) {\n        System.out.println(str);\n    }\n}"
          }
        ],
        "answer": [
          "C",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問13）。",
          "pdfExplanation": "正解：C、E\n\nインタフェース実装（オーバーライド）に関する問題です。オーバーライドが成り立つ条件は、以下の3つです。\n・シグニチャ（メソッド名と引数）が同じであること\n・戻り値型が同じかサブクラス型であること\n・アクセス修飾子が同じか緩いこと\nこの3つの条件を満たすのは、選択肢Cです。よって、この選択肢が正解です。インタフェースに定義する抽象メソッドは暗黙的にpublicです。そのため、オーバーライドしたメソッドではpublic以外のアクセス修飾子を使うことはできません。よって、privateとしている選択肢Aは誤りです。選択肢Bは、メソッド名は同じでも引数が異なります。これではオーバーロードとして扱われます。よって、この選択肢も誤りです。選択肢Dは、戻り値型が異なります。よって、この選択肢も誤りです。選択肢Eは、抽象クラスであるため、インタフェースに定義されている抽象メソッドを実装（オーバーライド）する必要がありません。そのため、このクラスは正しい実装です。よって、この選択肢も正解です。\n【第5章：問題11】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "interface/default",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "戻り値の到達可能性",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int[] numbers = {1,2,3,4,5,6,7,8,9,10};\n        for (int i : numbers) {\n            try {\n                if (test(i)) {\n                    System.out.println(i);\n                }\n            } catch (SampleException e) {\n                continue;\n            }\n        }\n    }\n\n    private static boolean test(int num) throws Exception {\n        for (int i = 2; i < num; i++) {\n            if (num % i == 0) {\n                throw new SampleException();\n            }\n            return true;\n        }\n    }\n}"
          },
          {
            "title": "SampleException クラス",
            "code": "class SampleException extends Exception {}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "1,2,3の順に表示される"
          },
          {
            "key": "B",
            "text": "1,2,3,5の順に表示される"
          },
          {
            "key": "C",
            "text": "1,3,5,7の順に表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問14）。",
          "pdfExplanation": "正解：D\n\n戻り値に関する問題です。戻り値型をvoid以外で宣言した場合、戻り値を戻さなければコンパイルエラーになります。設問のコードでは、testメソッドがboolean型を戻すメソッドとして定義されています。しかし、このメソッドはfor文内にreturnがあるものの、for文の外にはreturnがありません。これでは、何らかの方法（たとえばbreakなど）でfor文を抜けてしまうと戻り値を戻すことができません。そのため、このコードはコンパイルエラーとなります。以上のことから、選択肢Dが正解です。\n【第4章：問題10】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "exception",
          "override/overload",
          "main/args",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "defaultメソッドの競合",
        "prompt": "次のクラスの説明として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public interface A {\n    default void hello() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public interface B {\n    default void hello() {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample implements A, B {\n    // some code\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Sampleはhelloを実装する必要がある。Aの実装にアクセスするには、A.default.hello()のように記述する"
          },
          {
            "key": "B",
            "text": "Sampleはhelloを実装する必要がある。Bの実装にアクセスするには、B.super.hello()のように記述する"
          },
          {
            "key": "C",
            "text": "Sampleはhelloを実装する必要はない。helloが呼び出されるとAの実装が使われる"
          },
          {
            "key": "D",
            "text": "Sampleはhelloを実装する必要はない。helloが呼び出されるとBの実装が使われる"
          },
          {
            "key": "E",
            "text": "Sampleはhelloを実装する必要はない。利用したい実装を持つインタフェース型の変数からアクセスする必要がある"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問15）。",
          "pdfExplanation": "正解：B\n\nデフォルトメソッドの競合に関する問題です。設問のコードのSampleクラスは、インタフェースAとBを実装しています。このAとBの両方にデフォルトメソッドhelloが定義されており、競合してしまっている状態です。このような場合、Sampleクラスはhelloメソッドをオーバーライドして、どの実装を使用するかを明確にしなければいけません。そのため、helloを実装する必要がないとした、選択肢C、D、Eは誤りです。\nオーバーライドしたメソッドから、インタフェースに定義されているデフォルトメソッドにアクセスするには、インタフェース名.super.メソッド名()を使用します。以上のことから、選択肢Aが誤りで、選択肢Bが正解です。\n【第5章：問題6、7】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "interface/default",
          "inheritance/polymorphism"
        ]
      },
      {
        "id": "ch08-q16",
        "number": 16,
        "type": "multi",
        "selectCount": 2,
        "title": "sealed interfaceの実装",
        "prompt": "次のインタフェースを正しく実装しているものを選びなさい。",
        "codeBlocks": [
          {
            "title": "A",
            "code": "public sealed interface A permits B {\n    void sample();\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "code": "abstract class B implements A {\n    // some codes\n}"
          },
          {
            "key": "B",
            "code": "non-sealed class B implements A {\n    public void sample() {}\n}"
          },
          {
            "key": "C",
            "code": "final class B implements A {\n    public void sample() {}\n}"
          },
          {
            "key": "D",
            "code": "class B implements A {\n    public void sample() {}\n}"
          },
          {
            "key": "E",
            "code": "sealed class B implements A {\n    public void sample() {}\n}"
          },
          {
            "key": "F",
            "code": "abstract class B implements A {\n    public void sample() {}\n}"
          }
        ],
        "answer": [
          "B",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問16）。",
          "pdfExplanation": "正解：B、C\n\nシールインタフェースとその実装に関する問題です。シールインタフェースを実装するクラスは、次の2つの条件を満たす必要があります。\n・インタフェースのpermitsで許可されたクラスであること、もしくはインタフェースと同じソースファイルに記述されたクラスであること\n・sealed、non-sealed、もしくはfinalでクラス宣言が修飾されていること\n設問のコードでは、permitsでBクラスが指定されているため、すべての選択肢がこの条件を満たします。しかし、選択肢A、D、Fの3つの選択肢は、2つ目の条件を満たしません。また、選択肢Eにはpermits句がありません。以上のことから、選択肢BとCが正解となります。\n【第5章：問題26】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "interface/default",
          "sealed"
        ]
      },
      {
        "id": "ch08-q17",
        "number": 17,
        "type": "single",
        "selectCount": 1,
        "title": "sealed classとオーバーライド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        A b = new B();\n        b.test();\n    }\n}"
          },
          {
            "title": "A クラス",
            "code": "sealed class A {\n    public void test() {\n        System.out.println(\"A\");\n    }\n}"
          },
          {
            "title": "B クラス",
            "code": "final class B extends A {\n    private void hello() {\n        System.out.println(\"B\");\n    }\n    public void test() {\n        hello();\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Aが表示される"
          },
          {
            "key": "B",
            "text": "Bが表示される"
          },
          {
            "key": "C",
            "text": "A、Bが表示される"
          },
          {
            "key": "D",
            "text": "B、Aが表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問17）。",
          "pdfExplanation": "正解：B\n\nメソッドのオーバーライドに関する問題です。設問のコードでは、Aクラスを継承したBクラスを定義し、testメソッドをオーバーライドしています。シグネチャ、戻り値型、アクセス修飾子が同じであるため、コンパイルエラーは起きません。また、Aクラスはsealedクラスとして定義されています。permits句が省略されていますが、同じファイル内にあるBクラスがfinalクラスとして宣言されているため、こちらもコンパイルエラーは起きません。よって、選択肢Eは誤りです。\nBクラスでオーバーライドしたtestメソッドでは、helloメソッドを呼び出しています。そのため、Bクラスのtestメソッドを実行すると、helloメソッドに\nよってコンソールにはBと表示されます。設問のコードでは、mainメソッドでBクラスのインスタンスを作り、その参照をA型の変数で扱っています。ポリモーフィズムを使ってサブクラスのインスタンスへの参照をスーパークラス型の変数で扱うことはできますが、実際に動作するのはサブクラスのインスタンスです。そのため、testメソッドを呼び出すとBに定義したtestメソッドが実行され、前述のようにコンソールにはBが表示されることになります。\n以上のことから、選択肢Bが正解となります。\n【第5章：問題11】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "sealed",
          "override/overload",
          "main/args",
          "exception"
        ]
      },
      {
        "id": "ch08-q18",
        "number": 18,
        "type": "single",
        "selectCount": 1,
        "title": "論理演算子と短絡評価",
        "prompt": "次のプログラムを実行して「7」と表示したい。空欄に入るコードとして正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    private static int result = 0;\n    private static boolean a() {\n        result += 1;\n        return true;\n    }\n    private static boolean b() {\n        result += 2;\n        return true;\n    }\n    public static void test() {\n        if (/* blank */) {\n            result += 3;\n        } else {\n            result += 4;\n        }\n    }\n    public static void main(String[] args) {\n        test();\n        System.out.println(result);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "a() != b()"
          },
          {
            "key": "B",
            "text": "a() | b()"
          },
          {
            "key": "C",
            "text": "a() == b()"
          },
          {
            "key": "D",
            "text": "a() & b()"
          },
          {
            "key": "E",
            "text": "a() || b()"
          },
          {
            "key": "F",
            "text": "a() && b()"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問18）。",
          "pdfExplanation": "正解：A\n\n関数演算子と論理演算子に関する問題です。選択肢Aでは、aメソッドが実行されるとresultは1になります。次にbメソッドが実行されるとresultは3になります。aメソッドとbメソッドの戻り値はどちらもtrueなので、a() != b()の結果はfalseになり、elseブロックのresult += 4が実行されて、resultの値は7になります。以上のことから、選択肢Aが正解です。\n選択肢Bで使っている | 演算子は、左オペランドの結果にかかわらず、右オペランドも評価します。そのため、aメソッドが実行されてresultが1になり、次にbメソッドが実行されてresultが3になります。2つのメソッドはどちらもtrueを戻すため、if文のresult += 3が実行され、resultの値は6になります。以上のことから、選択肢Bは誤りです。\n選択肢Cでは、aメソッドとbメソッドが実行された結果は、これまでの選択肢と同じで、resultは3です。2つのメソッドはどちらもtrueを戻すため、if文のresult += 3が実行され、resultの値は6になります。以上のことから、選択肢Cは誤りです。\n選択肢Dも、aメソッドとbメソッドが実行された結果はこれまでの選択肢と同じで、resultは3です。2つのメソッドはどちらもtrueを戻すため、&演算の結果はtrueとなり、if文のresult += 3が実行されて、resultの値は6になります。以上のことから、選択肢Dは誤りです。\n選択肢Eは短絡演算子やショートサーキット演算子と呼ばれ、左オペランドの結果によっては右オペランドを実行しません。ショートサーキット演算のOR演算子である || は、左オペランドがtrueであれば右オペランドを実行しません。そのため、aメソッドが実行されてresultが1になり、trueを戻すと、右オペランドのbメソッドは実行されず、ifブロック内のresult += 3が実行されます。そのため、resultの値は4になります。以上のことから、選択肢Eも誤りです。\n選択肢Fも選択肢Eと同様にショートサーキット演算子の一種です。ショートサーキット演算子のAND演算子である&&は、左オペランドがfalseであれば右オペランドを実行しません。しかし、この演算子の左オペランドのaメソッドはtrueを戻すため、右オペランドのbメソッドも実行されます。そのため、この2つのメソッドが実行し終わった段階で、resultの値は3になります。左右のオペランドがtrueを戻すため、&&演算の結果はtrueとなり、if文のresult += 3が実行されて、resultの値は6になります。以上のことから、選択肢Fも誤りです。\n【第3章：問題4、5】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q19",
        "number": 19,
        "type": "multi",
        "selectCount": 2,
        "title": "staticメソッドとアクセス修飾子",
        "prompt": "Testクラスのメソッドをほかのクラスから呼び出せるものとして、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Test",
            "code": "class Test {\n    static int a() { return 1; }\n    private static int b() { return 2; }\n    public static int c() { return 3; }\n    public int d() { return 4; }\n    protected int e() { return 5; }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Test.a();"
          },
          {
            "key": "B",
            "text": "Test.b();"
          },
          {
            "key": "C",
            "text": "Test.c();"
          },
          {
            "key": "D",
            "text": "Test.d();"
          },
          {
            "key": "E",
            "text": "Test.e();"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問19）。",
          "pdfExplanation": "正解：A、C\n\nメソッドの修飾子に関する問題です。設問の選択肢は、クラス名.メソッド名でメソッドを呼び出しています。そこからstaticメソッドの呼び出しであることがわかります。よって、staticで修飾されていない、選択肢DとEは誤りです。選択肢Bは、staticメソッドですがアクセス修飾子がprivateとなっています。そのため、ほかのクラスからアクセスすることはできません。以上のことから、選択肢Bが誤りで、選択肢AとCが正解となります。\n【第4章：問題7】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "override/overload",
          "field/static/scope"
        ]
      },
      {
        "id": "ch08-q20",
        "number": 20,
        "type": "single",
        "selectCount": 1,
        "title": "クラス定義の修飾子",
        "prompt": "正しいクラスの定義を選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "final abstract class A {}"
          },
          {
            "key": "B",
            "code": "sealed class A permits B {}\nabstract class B extends A {}"
          },
          {
            "key": "C",
            "code": "class A {\n    abstract void method() {}\n}"
          },
          {
            "key": "D",
            "code": "abstract class A {\n    void method();\n}"
          },
          {
            "key": "E",
            "code": "abstract class A {\n    final void method() {}\n}"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問20）。",
          "pdfExplanation": "正解：E\n\n修飾子に関する問題です。サブクラスを作れないようにするにはクラス宣言をfinalで修飾します。一方、abstractは継承を前提とした抽象クラスを定義するときにクラス宣言を修飾するものです。よって、これらの修飾子は相反する性質を持っていることになります。以上のことから、選択肢Aは誤りです。\nsealedクラスのサブクラスは、sealed、non-sealed、もしくはfinalで修飾する必要があります。選択肢BのBクラスはこれらの修飾子で修飾されていません。よって、この選択肢も誤りです。\nabstractで修飾された抽象メソッドは、抽象クラスにしか定義できません。しかし、選択肢CのAクラスはabstractでクラス宣言が修飾されていないため抽象クラスではなく、具象クラスです。よって、Aクラスは抽象メソッドを持つことができません。以上のことから、選択肢Cも誤りです。抽象クラスに定義する抽象メソッドは、abstractで修飾しなければいけません。しかし、選択肢Dのmethodメソッドはabstractで修飾されていません。よって、この選択肢も誤りです。\n以上のことから、選択肢Eが正解です。抽象クラスでも具象メソッドを定義することは可能です。また、その具象メソッドがサブクラスでオーバーライドされるのを防ぐため、finalで修飾することもできます。\n【第5章：問題23、24】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "sealed",
          "override/overload",
          "inheritance/polymorphism"
        ]
      },
      {
        "id": "ch08-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "switch文・continue・break",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "import java.util.Arrays;\nimport java.util.List;\n\npublic class Sample {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(new String[]{\"A\", \"B\", \"C\", \"D\", \"E\"});\n        for (String word : words) {\n            switch (word) {\n            case \"B\" : continue;\n            case \"D\" : break;\n            default : System.out.print(word);\n            }\n            System.out.print(\":\");\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "A:B:C::E:"
          },
          {
            "key": "B",
            "text": "A::C:E:"
          },
          {
            "key": "C",
            "text": "A:C::E:"
          },
          {
            "key": "D",
            "text": "A:C:E:"
          },
          {
            "key": "E",
            "text": "A::C::E:"
          },
          {
            "key": "F",
            "text": "A:B:C:D:E:"
          },
          {
            "key": "G",
            "text": "A:C:D:E:"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問21）。",
          "pdfExplanation": "正解：C\n\nコードの流れの制御に関する問題です。continueは、ループ内の残りの繰り返し処理をスキップし、ループの条件判定に戻ります。breakは、ループそのものを抜けます。ただし、設問のコードはswitch文内でbreakが使われているため、このbreakはループではなくswitch文を抜けます。\n設問のコードでは、A〜Eの文字列を1つずつ繰り返し処理しています。変数wordがAのときswitch文のdefaultが実行され、Aが出力されます。その後、: が出力されます。これによって、コンソールには「A:」が表示されます。\n変数wordがBのとき、switch文のBのcaseが実行され、continueによってループの次の反復に移行します。そのため、コンソールには何も出力されません。\n変数wordがCのとき、switch文のdefaultが実行され、Cが出力されます。その後、: が出力されます。これによって、前の出力に続いてコンソールには「A:C:」が表示されています。\n変数wordがDのとき、switch文のDのcaseが実行され、breakによってswitch文を抜けます。その後、: が出力されます。そのため、前の出力に続いてコンソールには「A:C::」が表示されていることになります。\n変数wordがEのとき、switch文のdefaultが実行され、Eが出力され、その後、: が出力されます。これによって、前の出力に続いてコンソールには「A:C::E:」が表示されています。\n以上のことから、選択肢Cが正解です。\n【第3章：問題32、33】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "operator/control",
          "package/import",
          "main/args",
          "interface/default"
        ]
      },
      {
        "id": "ch08-q22",
        "number": 22,
        "type": "single",
        "selectCount": 1,
        "title": "whileとswitch",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int num = 2;\n        while (num < 5) {\n            switch (num % 2) {\n            case 0: num++; break;\n            case 1: num++;\n            }\n        }\n        System.out.println(num);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "2が表示される"
          },
          {
            "key": "B",
            "text": "3が表示される"
          },
          {
            "key": "C",
            "text": "4が表示される"
          },
          {
            "key": "D",
            "text": "5が表示される"
          },
          {
            "key": "E",
            "text": "6が表示される"
          },
          {
            "key": "F",
            "text": "whileループが終了せずに何も表示されない"
          },
          {
            "key": "G",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問22）。",
          "pdfExplanation": "正解：D\n\nswitch文と繰り返し処理に関する問題です。設問のコードでは、変数numが2で初期化され、5よりも小さい間while文によって繰り返し処理が実行されます。1回目のループでは、numの値は2であり、2で割った余りは0であるため、0のcaseが実行されます。ここでインクリメントされてnumの値は2から3に増えます。なお、インクリメント演算子を代入などの式の中で使っているわけではないため、前置か後置かによって結果が変わることはありません。また、ここのbreakはswitch文を抜けるためのものであって、while文の繰り返し処理を抜けるものではありません。2回目のループでは、numの値が5よりも小さいため繰り返し処理が実行され\nます。このときのnumの値は3であり、2で割った余りは1であるため、1のcaseが実行されます。ここでnumの値はインクリメントされて3から4に増えます。3回目のループでは、まだnumの値が5よりも小さいため繰り返し処理が実行されます。このときのnumの値は4であり、2で割った余りは0であるため、0のcaseが実行されます。ここでnumの値はインクリメントされて4から5に増えます。4回目のループでは、numの値が5と等しいため繰り返し処理が実行されず、while文を終了します。そのため、コンソールには5が表示されます。以上のことから、選択肢Dが正解です。\n【第3章：問題16、19】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "operator/control",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q23",
        "number": 23,
        "type": "single",
        "selectCount": 1,
        "title": "二次元配列の添字",
        "prompt": "次のプログラムを実行し、「F」が表示されたときの変数iとjの値として正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String[][] data = {{\"A\", \"B\", \"C\"}, {\"D\", \"E\", \"F\"}};\n        for (int i = 0; i < data.length; i++) {\n            for (int j = 0; j < data[i].length; j++) {\n                System.out.println(data[i][j]);\n            }\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "i=1, j=2"
          },
          {
            "key": "B",
            "text": "i=1, j=1"
          },
          {
            "key": "C",
            "text": "i=1, j=4"
          },
          {
            "key": "D",
            "text": "i=0, j=2"
          },
          {
            "key": "E",
            "text": "i=0, j=1"
          },
          {
            "key": "F",
            "text": "i=0, j=3"
          },
          {
            "key": "G",
            "text": "i=1, j=3"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問23）。",
          "pdfExplanation": "正解：A\n\n2次元配列と二重ループに関する問題です。設問のコードでは、2次元配列が宣言されています。1次元目には、2つの配列が格納されており、2次元目にはそれぞれ文字列が格納されています。fは、2つ目の配列の末尾にあります。そのため、1次元目は2つ目、2次元目は3つ目を指定すればよいことになります。配列の添字は0から始まるため、1次元目の2つ目は1、2次元目の3つ目は2です。設問のコードの二重ループは外側で1次元目を、内側で2次元目の添字を指定しているため、外側のカウンタ変数iと内側のカウンタ変数jの値が、それぞれ1と2のときにfが出力されることになります。以上のことから、選択肢Aが正解となります。\n【第3章：問題27】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "array",
          "main/args",
          "string/reference",
          "field/static/scope"
        ]
      },
      {
        "id": "ch08-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "instanceofパターン変数",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        System.out.println(test(\"A\"));\n    }\n    public static String test(Object obj) {\n        String s = \"\";\n        if (!(obj instanceof String str)) {\n            s = obj.toString();\n        } else {\n            s = str.toLowerCase();\n        }\n        return s;\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "aが表示される"
          },
          {
            "key": "B",
            "text": "Aが表示される"
          },
          {
            "key": "C",
            "text": "何も表示されない"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問24）。",
          "pdfExplanation": "正解：D\n\ninstanceof演算子とパターンマッチングに関する問題です。設問のコードでは、mainメソッドで大文字のAを渡してtestメソッドを呼び出しています。testメソッドでは、この引数をObject型で受け取っているため、instanceof演算子でString型と互換性があるかどうかをチェックしています。7行目のinstanceof演算子のパターンマッチングで宣言されている変数strは、ifブロックのなかで有効な変数です。そのため、elseブロックでtoLowerCaseメソッドを呼び出す箇所で（有効なスコープ内で）宣言されていない変数を使っているとしてコンパイルエラーとなります。よって、選択肢Dが正解です。\n【第4章：問題30】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "inheritance/polymorphism",
          "main/args",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q25",
        "number": 25,
        "type": "multi",
        "selectCount": 2,
        "title": "varの使用可能箇所",
        "prompt": "正しいクラス宣言を選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "class A {\n    public void hello() {\n        var x = new ArrayList<>();\n        x.add(0);\n        x.add(\"0\");\n        System.out.println(x);\n    }\n}"
          },
          {
            "key": "B",
            "code": "class B {\n    public void hello() {\n        var a = 0;\n        a = \"0\";\n    }\n}"
          },
          {
            "key": "C",
            "code": "class C {\n    var x = 10;\n}"
          },
          {
            "key": "D",
            "code": "record D(var x, var y) {\n}"
          },
          {
            "key": "E",
            "code": "class E {\n    private int x = 0;\n    public void hello() {\n        var x = \"hello\";\n        System.out.println(x);\n    }\n}"
          },
          {
            "key": "F",
            "code": "class F {\n    public void hello(int x) {\n        var x = 0;\n    }\n}"
          },
          {
            "key": "G",
            "code": "class G {\n    public void hello() {\n        var v = null;\n    }\n}"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問25）。",
          "pdfExplanation": "正解：A、E\n\nvarに関する問題です。varは、ローカル変数のデータ型を推論するためのもので、以下の箇所では使えません。\n・フィールド（インスタンス変数・クラス変数）\n・メソッドの引数\n・コンストラクタの引数\n・メソッドの戻り値の型\n・catchブロックのパラメータ\n・ラムダ式のパラメータ\n・配列の要素の型\nそのため、選択肢CとDは誤りです。\n選択肢Aは、ArrayListのインスタンスへの参照をvarで扱っています。このコードは、問題ないように見えますが、ArrayListはジェネリクスの型が指定されていないため、警告が出てしまいます。ただし、警告であってコンパイルエラーにはなりません。よって、正しいコードです。\n選択肢Bは、helloメソッドの一行目で変数aはint型だと推論されますが、その後文字列の0を代入しようとしているため、コンパイルエラーになります。よって、誤った選択肢です。\n選択肢Eは、helloメソッド内のローカル変数でvarを使用しています。文字列を代入しており、String型であることが推論可能です。よって、正しいコードです。\n選択肢Fは、メソッド引数の変数名と同名の変数をvarを使って宣言しています。そのため、このコードはコンパイルエラーとなります。よって、誤った選択肢です。\n選択肢Gは、varで宣言した変数にnullを代入しています。これでは型を推論できないため、varを使った変数の初期化にnullを使用することはできません。よって、誤った選択肢です。\n以上のことから、選択肢AとEが正解です。\n【第2章：問題5、6】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "var",
          "string/reference",
          "collection",
          "array"
        ]
      },
      {
        "id": "ch08-q26",
        "number": 26,
        "type": "single",
        "selectCount": 1,
        "title": "スコープと後置インクリメント",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    private int i;\n    public Sample(int i) {\n        i = ++i;\n    }\n    public void test() {\n        int total = 0;\n        for (var j = i; j < 10; j++) {\n            if (i++ % 3 != 0) {\n                continue;\n            }\n            total += j;\n        }\n        System.out.println(total);\n    }\n    public static void main(String[] args) {\n        new Sample(3).test();\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "0が表示される"
          },
          {
            "key": "B",
            "text": "13が表示される"
          },
          {
            "key": "C",
            "text": "18が表示される"
          },
          {
            "key": "D",
            "text": "無限ループになり何も表示されない"
          },
          {
            "key": "E",
            "text": "コンパイルエラー"
          },
          {
            "key": "F",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問26）。",
          "pdfExplanation": "正解：C\n\n変数のスコープに関する問題です。設問のコードでは、コンストラクタで受け取った値を、フィールドではなくローカル変数iに再代入しているため、フィールドiの値は0のままです。そのため、testメソッドのfor文の初期化式で変数jは0で初期化され、10回繰り返し処理が開始されます。\n繰り返し処理では、if文の条件式でiがインクリメントされますが、後置インクリメントであるため、iの値は1増えた後、元の値である0が戻ります。そのため、この式は、0 % 3 != 0となり、結果はfalseです。if文の処理は実行されず、その後、total += jが実行されますが、jは0なのでtotalの値は0のままです。\n2回目のループでは、変数iの値が1増えた後、元の値である1が戻ります。よって、この式は、1 % 3 != 0となり、結果はtrueです。そのため、if文のcontinueが実行されtotalの値は変更されません。\n3回目のループでは、変数iの値が1増えた後、元の値である2が戻ります。よって、この式は、2 % 3 != 0となり、結果はtrueです。そのため、if文のcontinueが実行され、またtotalの値は変更されません。\n4回目のループでは、変数iの値が1増えた後、元の値である3が戻ります。よって、この式は、3 % 3 != 0となり、結果はfalseです。if文の処理は実行されず、その後、total += jが実行されます。このときjは3なのでtotalの値は3になります。\n5回目のループでは、変数iの値が1増えた後、元の値である4が戻ります。よって、この式は、4 % 3 != 0となり、結果はtrueです。そのため、if文のcontinueが実行されtotalの値は変更されません。\n6回目のループでは、変数iの値が1増えた後、元の値である5が戻ります。よって、この式は、5 % 3 != 0となり、結果はtrueです。そのため、if文のcontinueが実行されtotalの値は変更されません。\n7回目のループでは、変数iの値が1増えた後、元の値である6が戻ります。よって、この式は、6 % 3 != 0となり、結果はfalseです。if文の処理は実行されず、その後、total += jが実行されます。このときjは6なのでtotalの値は3 + 6で9になります。\n8回目のループでは、変数iの値が1増えた後、元の値である7が戻ります。よっ\nて、この式は、7 % 3 != 0となり、結果はtrueです。そのため、if文のcontinueが実行されtotalの値は変更されません。\n9回目のループでは、変数iの値が1増えた後、元の値である8が戻ります。よって、この式は、8 % 3 != 0となり、結果はtrueです。そのため、if文のcontinueが実行されtotalの値は変更されません。\n10回目のループでは、変数iの値が1増えた後、元の値である9が戻ります。よって、この式は、9 % 3 != 0となり、結果はfalseです。if文の処理は実行されず、その後、total += jが実行されます。このときjは9なのでtotalの値は9 + 9で18になります。\n以上のことから、選択肢Cが正解です。\n【第5章：問題18】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "operator/control",
          "main/args",
          "exception"
        ]
      },
      {
        "id": "ch08-q27",
        "number": 27,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーロードとフィールド隠蔽",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        B b1 = new B();\n        A a1 = new B();\n        B b2 = new B(20);\n        A a2 = new B(10);\n\n        b1.print();\n        b2.print();\n        a1.print();\n        a2.print();\n    }\n}"
          },
          {
            "title": "A クラス",
            "code": "abstract class A {\n    int value;\n    public A() { this.value = 100; }\n    public A(int value) { this.value = value; }\n    public void print() { System.out.print(\"result=\" + value); }\n    abstract void print(int value);\n}"
          },
          {
            "title": "B クラス",
            "code": "class B extends A {\n    int value;\n    public B() { this.value = 200; }\n    public B(int value) { this.value = value; }\n    @Override\n    public void print(int value) { System.out.print(\"result=\" + value); }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "result=100 result=100 result=100 result=100"
          },
          {
            "key": "B",
            "text": "result=200 result=20 result=100 result=100"
          },
          {
            "key": "C",
            "text": "result=0 result=0 result=100 result=10"
          },
          {
            "key": "D",
            "text": "result=200 result=20 result=100 result=10"
          },
          {
            "key": "E",
            "text": "result=null result=null result=100 result=100"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問27）。",
          "pdfExplanation": "正解：A\n\nオーバーロードに関する問題です。設問のコードでは、Aクラスを継承したBクラスを定義しています。このとき、Aクラスはprintメソッドをオーバーロードして2つ持っていることに注意してください。Aクラスには、引数なしのprintメソッドとint型の引数を受け取るprintメソッドの2つがあります。一方、Bクラスにはint型の引数を受け取るprintメソッドしか定義していません。しかし、mainメソッドで呼び出しているのは、常に引数なしのprintメソッドです。そのため、4回printメソッドを呼び出していますが、4回ともAクラスに定義した引数なしのprintメソッドが使われます。また、2つのクラスは同名のフィールドを持っています。Aクラスのメソッドからアクセスするthis.valueはAクラスに定義されたフィールド、Bクラスのメソッドからアクセスするthis.valueはBクラスに定義されたフィールドです。mainメソッドで4つのインスタンスを生成していますが、すべてBクラスのものです。そのため、コンストラクタもBクラスのものが使われます。このコンストラクタで初期化するのは、Bクラスのvalueフィールドであり、Aクラスのvalueフィールドの値は100のままです。前述のとおり、mainメソッドで呼び出しているのはAクラスに定義された引数なしのprintメソッドです。そのため、このメソッドからアクセスするthis.valueはAクラスに定義されたものです。よって、コンソールには、result=100が合計4回表示されることになります。以上のことから、選択肢Aが正解です。\n【第4章：問題16】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "override/overload",
          "inheritance/polymorphism",
          "field/static/scope",
          "main/args"
        ]
      },
      {
        "id": "ch08-q28",
        "number": 28,
        "type": "single",
        "selectCount": 1,
        "title": "switch文のフォールスルー",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int[] values = {1, 4, 2, 5, 3};\n        int num = 0;\n        for (int value : values) {\n            switch (value) {\n            case 1: num++;\n            case 2: num++; break;\n            case 3: ++num;\n            case 4: ++num; break;\n            case 5: num++;\n            default: --num;\n            }\n        }\n        System.out.println(num);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "4が表示される"
          },
          {
            "key": "B",
            "text": "5が表示される"
          },
          {
            "key": "C",
            "text": "6が表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問28）。",
          "pdfExplanation": "正解：C\n\nswitch文のフォールスルーに関する問題です。設問のコードでは、1、4、2、5、3の順にswitch文を実行した結果を求めています。\n① valueが1のとき、1のcaseが実行され、numの値が1つ増えて0から1になります。このcaseには、breakがないため、フォールスルーが発生して、2のcaseの文も実行されます。そのため、numの値が1増えて1から2になり、ここでbreakしてswitch文を抜けます。\n② valueが4のとき、4のcaseが実行され、numの値が1つ増えて2から3になります。ここでbreakしてswitch文を抜けます。\n③ valueが2のとき、2のcaseが実行され、numの値が1つ増えて3から4になります。ここでbreakしてswitch文を抜けます。\n④ valueが5のとき、5のcaseが実行され、numの値が1つ増えて4から5になります。このcaseには、breakがないため、フォールスルーが発生して、defaultの文も実行されます。そのため、numの値が1減って5から4になります。\n⑤ valueが3のとき、3のcaseが実行され、numの値が1つ増えて4から5になります。このcaseには、breakがないため、フォールスルーが発生して、4のcaseの文も実行されます。そのため、numの値が1増えて5から6になり、ここでbreakしてswitch文を抜けます。\n以上のことから、このコードを実行するとコンソールには6が表示されます。よって、選択肢Cが正解です。\n【第3章：問題18】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "operator/control",
          "main/args",
          "interface/default",
          "exception"
        ]
      },
      {
        "id": "ch08-q29",
        "number": 29,
        "type": "multi",
        "selectCount": 3,
        "title": "継承とfinalメソッド",
        "prompt": "次のプログラムの説明として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Trash.java",
            "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Trash {\n    List<String> list = new ArrayList<>();\n    protected Trash(String val) {\n        add(val);\n    }\n    public boolean test(String val) {\n        return true;\n    }\n    public void delete(String val) {\n        list.remove(val);\n    }\n    public final void add(String val) {\n        list.add(val);\n    }\n}"
          },
          {
            "title": "CacheTrash.java",
            "code": "public class CacheTrash extends Trash {\n    private String tmp = null;\n    public CacheTrash() {\n        super(null);\n    }\n    public boolean test(String val) {\n        return list.contains(val);\n    }\n    public void delete(String val) {\n        this.tmp = val;\n    }\n    public void flush() {\n        super.delete(tmp);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "CacheTrashクラスのtestメソッドは常にtrueを戻す"
          },
          {
            "key": "B",
            "text": "CacheTrashクラスのdeleteメソッドは、Trashクラスのdeleteメソッドを呼び出す"
          },
          {
            "key": "C",
            "text": "CacheTrashクラスのaddメソッドは、引数をlistに追加する"
          },
          {
            "key": "D",
            "text": "Trashクラスのlistは、Trashクラスのすべてのサブクラスで参照できる"
          },
          {
            "key": "E",
            "text": "CacheTrashクラスのflushメソッドは、Trashクラスのdeleteメソッドを呼び出す"
          },
          {
            "key": "F",
            "text": "CacheTrashクラスのコンストラクタは、nullをlistに追加する"
          }
        ],
        "answer": [
          "C",
          "E",
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問29）。",
          "pdfExplanation": "正解：C、E、F\n\n継承に関する問題です。\nTrashクラスのtestメソッドは、常にtrueを戻すよう実装されていますが、サブクラスであるCacheTrashクラスのtestメソッドは、list内に引数で受け取った文字列が存在するかどうかをjava.util.ArrayListのcontainsメソッドを使って調べ、その結果を戻します。常にtrueを戻すわけではありません。よって、選択肢Aは誤りです。\nCacheTrashクラスのdeleteメソッドは、引数で受け取った文字列をフィールドに代入しているだけで、スーパークラスのdeleteメソッドを呼び出していません。よって、選択肢Bも誤りです。\nCacheTrashクラスのaddメソッドは、スーパークラスであるTrashクラスの定\n義を継承したものです。Trashクラスのaddメソッドでは、listに引数で受け取った文字列を追加する処理をしているため、選択肢Cは正しい説明です。\nTrashクラスのlistフィールドにはアクセス修飾子が付いていないため、同じパッケージに属するクラスであればアクセスできます。クラスが属するパッケージが異なる場合、たとえサブクラスであったとしてもアクセスできません。よって、選択肢Dは誤りです。\nCacheTrashクラスのflushメソッドは、superを使ってスーパークラスのdeleteメソッドを呼び出しています。よって、選択肢Eは正しい説明です。\nCacheTrashクラスのコンストラクタでは、スーパークラスのコンストラクタ呼び出しの引数にnullを渡しています。スーパークラスであるTrashクラスのコンストラクタでは、受け取った値をaddメソッドに渡し、addメソッドではlistに値を追加しています。以上のことから、選択肢Fも正しい説明です。\n【第5章：問題1、2】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "override/overload",
          "inheritance/polymorphism",
          "package/import",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q30",
        "number": 30,
        "type": "single",
        "selectCount": 1,
        "title": "ローカル変数とフィールド",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private String value;\n    public void setValue(String value) {\n        value = \"Hello, \" + value;\n    }\n    public String toString() {\n        return value;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        s.setValue(\"Java\");\n        System.out.println(s.toString());\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「Hello, Java」と表示される"
          },
          {
            "key": "B",
            "text": "「Hello, null」と表示される"
          },
          {
            "key": "C",
            "text": "「null」と表示される"
          },
          {
            "key": "D",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問30）。",
          "pdfExplanation": "正解：C\n\nカル変数の有効範囲に関する問題です。同名のフィールドとローカル変数がある場合、thisを使ってフィールドであることを明示しない限り、ローカル変数が優先されます。設問のコードのsetValueメソッドは、引数で受け取った値と文字列を連結して、引数として宣言したローカル変数に再代入しています。そのため、フィールドvalueの値はデフォルト値であるnullのままです。toStringメソッドはフィールドvalueの値を戻すので、コンソールには「null」と表示されます。よって、選択肢Cが正解です。\n【第5章：問題18】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "main/args",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q31",
        "number": 31,
        "type": "single",
        "selectCount": 1,
        "title": "ソースファイルモード",
        "prompt": "ソースファイルに次のコードが記述されています。このクラスを実行できるコマンドとして正しいものを選びなさい。カレントディレクトリにclassファイルはないものとします。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\");\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "javac Sample\njava Sample"
          },
          {
            "key": "B",
            "text": "javac Sample.java\njava Sample.class"
          },
          {
            "key": "C",
            "text": "javac Sample.java\njava -p. -m Sample"
          },
          {
            "key": "D",
            "text": "java Sample.java"
          },
          {
            "key": "E",
            "text": "java -m Sample.java"
          },
          {
            "key": "F",
            "text": "java Sample"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問31）。",
          "pdfExplanation": "正解：D\n\nコンパイルと実行のコマンドに関する問題です。\nコンパイルするときにはjavacコマンドにファイル名を指定します。publicなクラス名がSampleなので、ソースファイルはSample.javaであることがわかります。そのため、このコードをコンパイルするには、javac Sample.javaのようにコマンドを記述しなければいけません。しかし、選択肢Aはファイルの拡張子が抜けているので誤りです。\n実行するときには、javaコマンドにクラス名を指定します。ファイル名ではありません。そのため、選択肢Bのようにsample.classというファイル名を指定することはできません。よって、この選択肢も誤りです。選択肢Cのjavaコマンドには、-pや-mというオプションが指定されています。\npは、モジュールを検索するためのモジュールパスを指定するものです。また、javaコマンドに-mというオプションは存在しません。よって、この選択肢も誤りです。選択肢Eも同様の理由から誤りです。選択肢Dは、javaコマンドをソースファイルモードで実行したコマンドです。よって、正解です。選択肢Fは、コンパイルをせずに実行しようとしています。classファイルはカレントディレクトリに存在しないと設問で指定されているため、誤りです。\n【第1章：問題6、7】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "package/import",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q32",
        "number": 32,
        "type": "single",
        "selectCount": 1,
        "title": "数値からcharへのキャスト",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        short a = 97;\n        int b = 98;\n        System.out.print((char) a + \"\");\n        System.out.print((char) b);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「ab」と表示される"
          },
          {
            "key": "B",
            "text": "「a」と表示された後に例外が発生する"
          },
          {
            "key": "C",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "ClassCastExceptionがスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問32）。",
          "pdfExplanation": "正解：A\n\n型変換に関する問題です。数値型は文字に変換することが可能です。これは、文字が文字番号という数値で扱われているためです。数値を文字に変換するには、次のようにchar型の変数に直接数値を代入するか、数値型変数を用意してからキャスト式を記述するかのいずれかの方法で行います。\n例 数値型から文字への変換\nchar t = 97;\nint i = 97;\nchar j = (char) i;\n数値型変数をキャスト式なしでchar型に代入することはできないので、注意しましょう。\n設問のコードでは、97と98という値を持った数値型変数aとbを宣言しています。その後、それぞれをchar型へのキャスト式で型変換してからコンソールに出力しています。97はa、98はbという文字を表すので、コンソールには「ab」が出力されます。よって、選択肢Aが正解です。\n異なる型に変換する場合、int型からlong型への変換のように暗黙の型変換ができるものであればキャスト式は必要ありません。しかし、int型とchar型には本来互換性がないため、キャスト式を記述する必要があります。言い換えれば、キャスト式は安全に型変換できることをプログラマーが明示したことになるため、コンパイラは「問題なし」と判断して、実際に型変換できるかどうかに関係なくコンパイルを完了してしまいます。そのため、キャスト式が記述されている設問のコードでコンパイルエラーが発生することはありません。よって、選択肢Cは誤りです。\nまた、設問で扱われているshort型やint型、char型はプリミティブ型であり、\nインスタンスの型変換ができなかったときに発生するClassCastExceptionがスローされることはありません。よって、選択肢Dは誤りです。\n【第3章：問題2】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "inheritance/polymorphism",
          "operator/control",
          "main/args",
          "exception"
        ]
      },
      {
        "id": "ch08-q33",
        "number": 33,
        "type": "single",
        "selectCount": 1,
        "title": "protectedとパッケージアクセス",
        "prompt": "Bクラスの空欄への記述に関する説明として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "package ex06.a;\npublic class A {\n    String a = \"A\";\n    protected String b = \"B\";\n    public String c = \"C\";\n}"
          },
          {
            "title": "B.java",
            "code": "package ex06.b;\nimport ex06.a.A;\npublic class B extends A {\n    public void test() {\n        System.out.println(/* blank */);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "new B().b と new B().c の両方でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "new B().b のみでコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "new B().a のみでコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "new B().a と new B().b の両方でコンパイルエラーが発生する"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問33）。",
          "pdfExplanation": "正解：C\n\n継承関係にあるときのアクセス修飾子に関する問題です。継承関係にあるとき、サブクラスからアクセスできるスーパークラスのメンバのアクセス修飾子は、publicかprotectedです。アクセス修飾子なし（デフォルト）は、継承関係の有無にかかわらず同じパッケージでなければアクセスできません。また、privateは同じパッケージであっても異なるクラスからのアクセスはできません。\n設問のAクラスは、a、b、cと3つのフィールドを持ちますが、それぞれアクセス修飾子が異なります。また、AクラスとそのサブクラスであるBクラスが異なるパッケージに属していることに注意しましょう。Bクラスからアクセスできるのはprotectedで修飾されたフィールドbとpublicで修飾されたフィールドcです。したがって、「new B().b」と「new B().c」は空欄に記述しても正常にコンパイルできます。一方、フィールドaはアクセス修飾子が付いていないため、サブクラスからアクセスできません。よって、空欄に「new B().a」と記述するとコンパイルエラーが発生します。以上のことから、選択肢Cが正解です。\n【第4章：問題26】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "package/import",
          "string/reference",
          "inheritance/polymorphism"
        ]
      },
      {
        "id": "ch08-q34",
        "number": 34,
        "type": "multi",
        "selectCount": 2,
        "title": "varと配列初期化",
        "prompt": "正常にコンパイルされるコードを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "var a = {1.0, 2.0, 3.0, 4.0};"
          },
          {
            "key": "B",
            "text": "var b = new Double{1.0, 2.0, 3.0, 4.0};"
          },
          {
            "key": "C",
            "text": "var c = new Float[] {1.0F, 2.0F, 3.0F, 4.0F};"
          },
          {
            "key": "D",
            "text": "var d = new double[] {1.0, 2.0, 3.0, 4.0};"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問34）。",
          "pdfExplanation": "正解：C、D\n\nカル変数の型推論と配列の初期化子に関する問題です。\nvarを利用したローカル変数の型推論では、代入演算子の右辺の型からデータ型を推論します。また、配列の初期化子「{}」は、代入する変数の型から配列の型を推論します。\n選択肢Aは、代入演算子の右辺、左辺ともに推論できる型情報がありません。よって、コンパイルエラーとなります。選択肢Bは、Double配列型のインスタンスの生成と初期化をしているように見えますが、配列のインスタンスであることを示すには、以下のように大カッコ「[]」が必要です。よって、選択肢Bもコンパイルエラーとなります。\n例 Double配列型インスタンスの生成と初期化\nvar b = new Double[]{1.0, 2.0, 3.0, 4.0};  ← 大カッコが必要\n選択肢Cは、Float配列型のインスタンスを生成し、float型の要素をボクシングして扱っています。浮動小数点数のリテラルは、double型として解釈されますが、数値の後ろにfやFを付けることでfloat型であることを明示できます。以上のことから、正しくコンパイルできます。選択肢Dは、double配列型のインスタンスを生成し、doubleの要素で初期化しています。この構文に間違いはなく、正しくコンパイルできます。\n【第2章：問題5】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "array",
          "var"
        ]
      },
      {
        "id": "ch08-q35",
        "number": 35,
        "type": "single",
        "selectCount": 1,
        "title": "ポリモーフィズムと独自メソッド",
        "prompt": "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    private String value;\n    public String getValue() { return value; }\n    public void setValue(String value) { this.value = value; }\n    public String toString() { return getValue(); }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    public void setValue(String value) {\n        super.setValue(\"[\" + value + \"]\");\n    }\n    public void setValue(String... values) {\n        setValue(test(values));\n    }\n    private String test(String... values) {\n        var sb = new StringBuilder();\n        for (String value : values) {\n            sb.append(value + \",\");\n        }\n        return sb.toString();\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        a.setValue(args);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "BのインスタンスをA型で扱ったため"
          },
          {
            "key": "B",
            "text": "AクラスのtoStringメソッドをBクラスでオーバーライドしていないため"
          },
          {
            "key": "C",
            "text": "Bクラスのtestメソッドがprivateであるため"
          },
          {
            "key": "D",
            "text": "BクラスからAクラスのvalueにアクセスできないため"
          },
          {
            "key": "E",
            "text": "AクラスにはsetValue(String... values)というメソッドがないため"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問35）。",
          "pdfExplanation": "正解：E\n\nポリモーフィズムに関する問題です。ポリモーフィズムを使えば、サブクラスのインスタンスへの参照をスーパークラス型で扱うことができます。その場合、たとえ参照がサブクラスのインスタンスに対するものであったとしても、スーパークラスとして扱われるため、サブクラスで拡張した独自のメソッドなどを呼び出すことはできません。\n設問のコードでは、Aクラスを継承したBクラスを定義し、Bクラスのインスタンスへの参照をA型の変数で扱っています。そのため、Aクラスに存在しないBクラス独自のメソッドは呼び出せません。Aクラスに定義されているsetValueメソッドはString型の引数を受け取るものであり、String配列型を受け取りません。String配列型を受け取るのはBクラスで拡張した独自メソッドだからです。以上のことから、選択肢Eが正解です。\nBクラスはAクラスのサブクラスであるため、Bクラスのインスタンスへの参照をA型で扱うことは可能です。よって、選択肢Aは誤りです。スーパークラスに定義されているメソッドは、サブクラスが引き継ぎます。引き継いだメソッドのままでよいのであればオーバーライドする必要はありません。よって、選択肢Bも誤りです。BクラスのtestメソッドはBクラス内からしか使われていないため、testメソッドのアクセス修飾子がprivateでも問題ありません。よって、選択肢Cも誤りです。Bクラス内では、スーパークラスであるAのvalueフィールドに直接アクセスしている箇所はありません。setValueメソッドのような公開されているメソッドを経由してvalueフィールドにアクセスしています。よって、選択肢Dは誤りです。\n【第5章：問題14】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "inheritance/polymorphism",
          "main/args",
          "string/reference",
          "collection"
        ]
      },
      {
        "id": "ch08-q36",
        "number": 36,
        "type": "single",
        "selectCount": 1,
        "title": "フィールドアクセスとポリモーフィズム",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "package ex23.a;\npublic class A {\n    public int num = 10;\n}"
          },
          {
            "title": "B.java",
            "code": "package ex23.b;\nimport ex23.a.A;\npublic class B extends A {\n    int num = 20;\n}"
          },
          {
            "title": "Main.java",
            "code": "package ex23;\nimport ex23.a.A;\nimport ex23.b.B;\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.num);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Bクラスでコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "Mainクラスでコンパイルエラーが発生する"
          },
          {
            "key": "C",
            "text": "10が表示される"
          },
          {
            "key": "D",
            "text": "20が表示される"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問36）。",
          "pdfExplanation": "正解：C\n\nポリモーフィズムとアクセス修飾子によるフィールドの決定に関する問題です。\n設問のコードでは、AクラスとBクラスに同名のnumフィールドが定義されています。これらの違いはアクセス修飾子です。Aクラスのnumはpublicが付いているので、どこからでもアクセスできます。これに対して、Bクラスのnumはアクセス修飾子が付いていない（デフォルト）ので、別パッケージからはアクセスができません。\n変数の型で扱われるフィールドとインスタンスの型で扱われるフィールドがあり、これらの名前が同じ場合は、ポリモーフィズムによって、変数の型で宣言したフィールドが使われます。そのため、mainメソッドでアクセスしているa.numはAクラスに定義したnumフィールドの値を参照することになります。Aクラスのnumフィールドはpublicなので別パッケージからもアクセス可能です。よって、コンソールには10が表示されます。以上のことから、選択肢Cが正解です。\nなお、次のように変数をB型に変更すると、Bクラスのnumフィールドは別パッケージからのアクセスができないため、Mainクラスでコンパイルエラーとなります。\n例 変数aの型をBに変更（コンパイルエラー）\npackage ex23;\nimport ex23.a.A;\nimport ex23.b.B;\npublic class Main {\npublic static void main(String[] args) {\nB a = new B();\nSystem.out.println(a.num);\n【第5章：問題15】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "inheritance/polymorphism",
          "field/static/scope",
          "package/import",
          "main/args"
        ]
      },
      {
        "id": "ch08-q37",
        "number": 37,
        "type": "multi",
        "selectCount": 2,
        "title": "varが使えない場所",
        "prompt": "次のプログラムを確認し、Testクラスの何行目でコンパイルエラーが発生するかを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    String name;\n}"
          },
          {
            "title": "Test.java",
            "code": "import java.util.ArrayList;\n\npublic class Test {\n    var sample = new ArrayList<Sample>(); // 4\n    public var test() { // 5\n        var sample = new Sample(); // 6\n        var samples = new ArrayList<>(); // 7\n        samples.add(\"Java\"); // 8\n        samples.add(\"Lambda\"); // 9\n        for (var s : samples) { // 10\n            System.out.println(s); // 11\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "5行目"
          },
          {
            "key": "B",
            "text": "10行目"
          },
          {
            "key": "C",
            "text": "7行目"
          },
          {
            "key": "D",
            "text": "6行目"
          },
          {
            "key": "E",
            "text": "4行目"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問37）。",
          "pdfExplanation": "正解：A、E\n\nvarによるローカル変数の型推論に関する問題です。varが使えるのはローカル変数の宣言だけです。フィールドや戻り値型などの宣言には使うことができません。設問のコードでは、4行目のsampleフィールドの宣言と、5行目の戻り値型の宣言にvarを使っているため、コンパイルエラーとなります。よって、選択肢AとEが正解です。\n【第2章：問題5】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "var",
          "package/import",
          "string/reference",
          "collection"
        ]
      },
      {
        "id": "ch08-q38",
        "number": 38,
        "type": "single",
        "selectCount": 1,
        "title": "superによるコンストラクタ呼び出し",
        "prompt": "Bクラスのコンストラクタの空欄に入るコードとして、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "A.java",
            "code": "public class A {\n    private int num;\n    public A(int num) {\n        this.num = num;\n    }\n}"
          },
          {
            "title": "B.java",
            "code": "public class B extends A {\n    private String val;\n    public B(String val, int num) {\n        // blank\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "this(num);"
          },
          {
            "key": "B",
            "text": "super(num);"
          },
          {
            "key": "C",
            "text": "this(val);"
          },
          {
            "key": "D",
            "text": "super(val);"
          },
          {
            "key": "E",
            "text": "super();"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問38）。",
          "pdfExplanation": "正解：B\n\nクラスの継承とスーパークラスのコンストラクタ呼び出しに関する問題です。継承関係にあってもコンストラクタは引き継げません。また、サブクラスのインスタンスを生成すると、スーパークラスのインスタンスが同時に生成されます。このとき、スーパークラスのインスタンスを初期化するため、スーパークラスのコンストラクタが実行されます。\nそのため、サブクラスのコンストラクタには、スーパークラスのコンストラクタ呼び出しのコードが必要です。設問のコードではBクラスはAクラスを継承しており、Bクラスのコンストラクタを実行するときには、Aクラスのコンストラクタを呼び出さなければいけません。\nサブクラスのコンストラクタ内で、スーパークラスのコンストラクタを呼び出すには、superを使います。選択肢AやCのようにthisを使うと、Bクラスにあるオーバーロードした別のコンストラクタを呼び出すことになり、スーパークラスのコンストラクタは呼び出せません。\nまた、Aクラスのコンストラクタはint型の引数を受け取ります。そのため、String型を渡している選択肢Dや、何も渡していない選択肢Eは誤りです。以上のことから、選択肢Bが正解です。\n【第5章：問題20】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "inheritance/polymorphism",
          "constructor",
          "string/reference",
          "field/static/scope"
        ]
      },
      {
        "id": "ch08-q39",
        "number": 39,
        "type": "single",
        "selectCount": 1,
        "title": "明示的キャスト",
        "prompt": "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 10;\n        float b = 10.0f;\n        double c = 20;\n        a = b;\n        b = a;\n        c = b;\n        c = a;\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "6行目を「a = (int) b;」に置き換える"
          },
          {
            "key": "B",
            "text": "7行目を「b = (float) a;」に置き換える"
          },
          {
            "key": "C",
            "text": "8行目を「c = (double) b;」に置き換える"
          },
          {
            "key": "D",
            "text": "9行目を「c = (double) a;」に置き換える"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問39）。",
          "pdfExplanation": "正解：A\n\n型変換に関する問題です。型変換には、キャスト式が不要な暗黙の型変換と、キャスト式が必要な明示的な型変換の2種類があります。設問の6〜9行目の代入式は、キャスト式が記述されていないことから、暗黙の型変換を行っていることがわかります。\n暗黙の型変換は、データ型を変換してもデータの欠損がないことが条件です。そのため、小さなデータを大きな型の変数に代入するときなどは、暗黙の型変換が可能です。\n設問のコードでは、int型、float型、double型の3つの変数を用意しています。このうち、floatとdoubleは浮動小数点数型であることに注意してください。6行目では、float型の変数bの値をint型の変数aに代入しています。しかし、int型は整数型であるため、floatの小数点数を表すことができずにデータの欠損が発生します。そのため、6行目はコンパイルエラーとなります。これを修正するには、キャスト式を記述して、データの欠損はない、もしくは無視してよいことをコンパイラに伝えなければいけません。よって、選択肢Aが正\n解です。\n【第3章：問題2】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "inheritance/polymorphism",
          "operator/control",
          "main/args",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q40",
        "number": 40,
        "type": "single",
        "selectCount": 1,
        "title": "配列要素のデフォルト値",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            String[] array = new String[5];\n            array[1] = \"A\";\n            array[2] = \"B\";\n            array[3] = \"C\";\n            for (String str : array) {\n                System.out.println(str);\n            }\n        } catch (Exception e) {\n            System.out.println(\"Error\");\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「A」「B」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「null」「A」「B」「C」「null」と表示される"
          },
          {
            "key": "C",
            "text": "「Error」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問40）。",
          "pdfExplanation": "正解：B\n\n配列の要素のデフォルト値に関する問題です。プリミティブ型の配列の場合は、整数なら0、浮動小数点数なら0.0、文字なら\\u0000、真偽ならfalseがデフォルト値です。参照型の場合は、nullがデフォルト値になります。\n設問のコードのように、5つの要素を持つ配列インスタンスを生成し、最初と最後の要素だけ何も入れない場合、配列にはnull、\"A\"、\"B\"、\"C\"、nullの順で要素が入っています（正確にはStringなので参照が入っています）。\n拡張for文は、次に取り出すべきものがない場合は繰り返し処理を実行しません。配列の最初の要素はnullですが、次に取り出すべきものがあります。そのため、まずnullがコンソールに表示され、続いてA、B、Cが表示されます。最後の要素もnullですが、その後に取り出すものがないため、nullをコンソールに表示してから拡張for文を抜けます。以上のことから、選択肢Bが正解です。\n【第2章：問題30】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "array",
          "main/args",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q41",
        "number": 41,
        "type": "single",
        "selectCount": 1,
        "title": "staticメンバーとprivateフィールド",
        "prompt": "次のプログラムを実行し、「A:B」と表示したい。Mainクラスの空欄に入るコードとして正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    static String header = \"A:\";\n    private String value = \"B\";\n    public static String getValue() {\n        return new Sample().value;\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        // blank\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "System.out.println(Sample.getValue + s.header);"
          },
          {
            "key": "B",
            "text": "System.out.println(Sample.header + Sample.value);"
          },
          {
            "key": "C",
            "text": "System.out.println(new Sample().header + new Sample().value);"
          },
          {
            "key": "D",
            "text": "System.out.println(s.header + Sample.value);"
          },
          {
            "key": "E",
            "text": "System.out.println(Sample.header + Sample.getValue());"
          },
          {
            "key": "F",
            "text": "System.out.println(s.header + s.value);"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問41）。",
          "pdfExplanation": "正解：E\n\nアクセス修飾子に関する問題です。設問のSampleクラスにはheaderとvalueという2つのフィールドが定義されています。headerにはアクセス修飾子が付いていないため、同じパッケージ内であれば、ほかのクラスからアクセス可能です。一方、valueのアクセス修飾子はprivateであるため、ほかのクラスからアクセスできません（選択肢B、C、D）。valueの値を取得するときには、publicで公開されているgetValueメソッドを使うことになります。選択肢Aは、getValueの後ろにカッコ「()」がないため、メソッドへのアクセスではなくフィールドへのアクセスと見なされます。SampleクラスにはgetValueというフィールドは存在しないため、コンパイルエラーとなります。なお、headerフィールドやgetValueメソッドは、staticで修飾されたクラス変数とクラスメソッドです。そのため、それぞれを利用するには「クラス名.フィールド名」「クラス名.メソッド名」のように記述します。\n以上のことから、選択肢Eが正解です。\n【第4章：問題26】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "package/import",
          "main/args",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q42",
        "number": 42,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーロードと配列型",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public void test(Object[] val) { System.out.println(\"A\"); }\n    public void test(long[] val) { System.out.println(\"B\"); }\n    public void test(Object val) { System.out.println(\"C\"); }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        new Sample().test(new int[3]);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Aが表示される"
          },
          {
            "key": "B",
            "text": "Bが表示される"
          },
          {
            "key": "C",
            "text": "Cが表示される"
          },
          {
            "key": "D",
            "text": "Sampleクラスでコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "Mainクラスでコンパイルエラーが発生する"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問42）。",
          "pdfExplanation": "正解：C\n\nオーバーロードに関する問題です。設問のコードのSampleクラスでは、オーバーロードされた3つのtestメソッドが定義されています。Mainクラスの3行目ではSampleのインスタンスを作り、int配列型の引数を渡してtestメソッドを呼び出しています。オーバーロードされた複数のメソッドと完全一致しない引数を渡した場合、そのメソッドを呼び出しているコードがコンパイラにより型変換され、対応するメソッドを呼び出すように最適化されます。配列はObjectクラスのサブクラスであるため、配列をObject型として受け取るオーバーロードで処理することは可能です（選択肢C）。一方、Object型の配列は、プリミティブ型の配列とは互換性がありません。Object型（参照）の集合を扱う配列と、プリミティブ型（値）の集合を扱う配列は、そもそも扱っている集合の種類に互換性がないからです（選択肢A）。int型を扱う配列を、long型を扱う配列として扱うことはできません。int型を扱う配列を、long型を扱う配列に変換できないためです。「long型だけを扱う配列」と「int型だけを扱う配列」は、扱えるデータ型の制約が異なる別のものとして認識されるため互換性がありません。よって、選択肢Bは誤りです。なお、Integer型を扱う配列を、Object型やObject型を扱う配列として扱うことは可能です。これは配列そのものがObject型のサブクラスとして扱うことができたり、Integer型をObject型にキャストすることが可能だからです。\n以上のことから、選択肢Cが正解です。\n【第4章：問題16、17】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "array",
          "override/overload",
          "main/args",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q43",
        "number": 43,
        "type": "single",
        "selectCount": 1,
        "title": "staticメソッドからのフィールド参照",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main",
            "code": "public class Main {\n    int num;\n    private static void test() {\n        num++;\n        System.out.println(num);\n    }\n    public static void main(String[] args) {\n        Main.test();\n        Main.test();\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「1」「2」と表示される"
          },
          {
            "key": "B",
            "text": "1回表示される"
          },
          {
            "key": "C",
            "text": "testメソッドでコンパイルエラーが発生する"
          },
          {
            "key": "D",
            "text": "mainメソッドでコンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問43）。",
          "pdfExplanation": "正解：C\n\nstaticに関する問題です。staticで修飾されたメソッドからは、staticで修飾されたもの以外にはアクセスできません。設問のコードではstaticなmainメソッドから、testメソッドを呼び出していますが、これはstaticなメソッドからstaticなメソッドの呼び出しのため問題ありません。しかし、testメソッド内ではstaticでないnumフィールドをインクリメントしています。そのため、testメソッドでnumをインクリメントしている4行目でコンパイルエラーが発生します。以上のことから、選択肢Cが正解です。\n【第4章：問題5】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "main/args",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q44",
        "number": 44,
        "type": "single",
        "selectCount": 1,
        "title": "Stringの不変性",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String str = \"abcde\";\n        str.replace('c', 'x');\n        str.substring(2, 4);\n        System.out.println(str);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「abxde」と表示される"
          },
          {
            "key": "B",
            "text": "「abcde」と表示される"
          },
          {
            "key": "C",
            "text": "「cde」と表示される"
          },
          {
            "key": "D",
            "text": "「xde」と表示される"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問44）。",
          "pdfExplanation": "正解：B\n\nStringクラスのメソッドに関する問題です。java.lang.Stringクラスのメソッドは、インスタンスが保持する文字列を変更しません。設問のようにreplace（置き換え）やsubstring（抽出）といっ\nたメソッドは、内部の文字列を変更せずに新しい文字列をコピーし、その文字列を変更したものを戻します。そのため、次のように変更後の文字列を受け取るための変数を用意し、メソッドの結果を代入しなければ、変更した結果は残りません。\n例 変更後の文字列を受け取る変数にメソッドの結果を代入\npublic class Sample {\npublic static void main(String[] args) {\nString str = \"abcde\";\nstr = str.replace('c', 'x');  ← replaceの結果をstrに代入\nstr = str.substring(2, 4);    ← substringの結果をstrに代入\nSystem.out.println(str);\n設問のコードでは、replaceメソッドやsubstringメソッドを呼び出していますが、その結果を受け取っていません。そのため、変数strで参照されるStringのインスタンスは変更されません。よって、選択肢Bが正解です。\n【第2章：問題12、13】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "string/reference",
          "main/args",
          "array",
          "override/overload"
        ]
      },
      {
        "id": "ch08-q45",
        "number": 45,
        "type": "single",
        "selectCount": 1,
        "title": "インクリメントと文字列連結",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 0;\n        System.out.println(num++ + num + \",\" + ++num + num);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「1,22」と表示される"
          },
          {
            "key": "B",
            "text": "「2,22」と表示される"
          },
          {
            "key": "C",
            "text": "「2,4」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問45）。",
          "pdfExplanation": "正解：A\n\n演算の順番とインクリメント、文字列連結に関する問題です。インクリメント演算子は前置と後置で動作が異なります。前置すると値を1増やしてから変数の値を参照し、後置すると増やす前の値のコピーを戻してから変数の値を増やします。\n設問のコードでは、まず「num++ + num」という式を実行します。この式は、変更前のnumの値（0）をコピーして戻してから、変数numの値を1増やし、コピーした値と変数numの値（1）を加算するという意味になります。よって、この式の結果は「1」となります。この時点で、計算式は次のようになります。\n1 + \",\" + ++num + num\n数値と文字列を+演算子で演算すると、数字（文字列）に変換されて文字列同士の連結になります。文字列連結すると、計算式は次のようになります。\n\"1,\" + ++num + num\n+演算子による連結は、演算子の左右両方のオペランドが数値や文字列でなければ行われません。上記の計算式は文字列とインクリメント演算の加算になっているため、先にインクリメント演算を実行します。このインクリメント演算子は前置されているので、値を1増やして2に変更します。これにより、次のような計算式になります。\n\"1,\" + 2 + 2\n上記は文字列と数値の連結ですので、数値が数字に変換され、最終的な演算結果は「1,22」となります。以上のことから、選択肢Aが正解です。\n【第3章：問題3】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "string/reference",
          "operator/control",
          "main/args",
          "array"
        ]
      },
      {
        "id": "ch08-q46",
        "number": 46,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文とcontinue/break",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[] array = {\"A\", \"B\", \"C\", \"D\", \"E\"};\n        for (String str : array) {\n            if (\"B\".equals(str)) {\n                continue;\n            }\n            System.out.println(str);\n            if (\"C\".equals(str)) {\n                break;\n            }\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「A」「C」と表示される"
          },
          {
            "key": "B",
            "text": "「A」「C」「D」と表示される"
          },
          {
            "key": "C",
            "text": "「B」「C」と表示される"
          },
          {
            "key": "D",
            "text": "「C」と表示される"
          },
          {
            "key": "E",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問46）。",
          "pdfExplanation": "正解：A\n\n拡張for文とif文、continue、breakを組み合わせた問題です。\n設問のコードでは、A〜Eまでの文字を要素として持つ配列から1つずつ要素を取り出しながら、繰り返し処理を実行しています。繰り返し処理の途中で、条件に合致したときにcontinueやbreakが実行されます。\n1つ目のif文では、変数strの値が\"B\"のときに実行され、その後ろの行のコンソールへの出力をスキップしてしまいます。そのため、Bという文字がコンソールに出力されることはありません。\nまた、2つ目のif文では、変数strの値が\"C\"のときに実行され、breakによってループを抜けてしまいます。そのため、Cよりも後ろのDとEがコンソールに表示されることはありません。\n拡張for文は、配列の先頭から順に要素を取り出して処理していきます。そのため、最初に表示される文字は「A」です。「B」は前述のとおり表示されません。次の「C」が表示された後、breakによって繰り返しが終了するため、コンソールに表示されるのは「A」と「C」の2文字です。以上のことから、選択肢Aが正解です。\n【第3章：問題29、32、33】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "array",
          "operator/control",
          "main/args",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q47",
        "number": 47,
        "type": "single",
        "selectCount": 1,
        "title": "二次元配列の差し替え",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Main",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] array = new int[2][4];\n        array[0] = new int[]{1, 2, 3, 4};\n        array[1] = new int[]{1, 2};\n        for (int[] a : array) {\n            for (int b : a) {\n                System.out.print(b);\n            }\n            System.out.println();\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「1234」「12」と表示される"
          },
          {
            "key": "B",
            "text": "「12」「12」と表示される"
          },
          {
            "key": "C",
            "text": "「12」「1200」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問47）。",
          "pdfExplanation": "正解：A\n\n2次元配列と拡張for文に関する問題です。設問のコードでは、1次元目に2つ、2次元目に4つの要素を持つ2次元配列のインスタンスを生成しています。このタイミングで、次の図のようにすでに3つの配列のインスタンスが生成されています。\n【設問の配列のイメージ①】\n1次元目の配列インスタンス[0] [1]\n+--> 2次元目の配列インスタンス [0][1][2][3]\n+------> 2次元目の配列インスタンス [0][1][2][3]\nこの2次元配列に、1次元目の1つ目の要素として4つの要素と2つの要素を持つ1次元配列を2つ生成し、要素を置き換えています。そのため、配列のイメージは次の図のとおりとなります。\n【設問の配列のイメージ②】\n1次元目の配列インスタンス[0] [1]\n+--> 2次元目の配列インスタンス [1][2]\n+------> 2次元目の配列インスタンス [1][2][3][4]\n設問の二重ループは外側、内側とも拡張for文を使っています。拡張for文は、配列やコレクションから順番に要素を取り出し、取り出すべき要素がなくなるまで処理を繰り返します。外側の拡張for文では、2次元配列の1次元目を繰り返して取り出し、int配列型の変数aに代入しています。内側の拡張for文では、変数aで参照可能な、元は2次元目だった配列から1つずつ要素を取り出して、コンソールに表示していきます。上図からわかるとおり、1つ目の2次元目の配列には1、2、3、4という値が入っており、2つ目の2次元目の配列には1、2という値が入っているため、「1234」と「12」が表示されます。よって、選択肢Aが正解です。\n2次元配列を扱うときは、2次元目の配列の要素数が揃っていないといけないように思いがちですが、設問のように非対称であっても問題はないため、選択肢Dのようにコンパイルエラーとなることはありません。\n【第2章：問題30】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "array",
          "main/args",
          "exception",
          "string/reference"
        ]
      },
      {
        "id": "ch08-q48",
        "number": 48,
        "type": "single",
        "selectCount": 1,
        "title": "Stringのconcatとreplace",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String a = \"A\";\n        a = a.concat(\"B\");\n        String b = \"C\";\n        a = a.concat(b);\n        a.replace('C', 'D');\n        a = a.concat(b);\n        System.out.println(a);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "ABCDと表示される"
          },
          {
            "key": "B",
            "text": "ACDと表示される"
          },
          {
            "key": "C",
            "text": "ABCCと表示される"
          },
          {
            "key": "D",
            "text": "ABDと表示される"
          },
          {
            "key": "E",
            "text": "ABDcと表示される"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問48）。",
          "pdfExplanation": "正解：C\n\nStringの特徴に関する問題です。Stringは、immutable（不変）なクラスです。つまり、メソッドを呼び出しても内部の文字列データを変更せず、別の新しい文字列を生成して戻します。\n設問のコード3行目では、「A」という文字列を持つStringインスタンスを生成し、変数aでその参照を保持します。次に、concatメソッドを呼び出して文字列を連結し、「AB」という文字列を持つ新しいStringへの参照を戻します（4行目）。このコードでは、新しいStringへの参照で変数aを上書きしています。\n次に「C」という文字列を持ったStringインスタンスを生成し、6行目では変数aで参照するインスタンスのconcatメソッドを呼び出して文字列を連結しています。concatメソッドは、「ABC」という新しい文字列を持つStringインスタンスへの参照を戻し、変数aを上書きします。\n7行目では、変数aで参照するインスタンスのreplaceメソッドを呼び出し、インスタンスが持つ「ABC」という文字列のCをDに書き換えます。このとき、Stringは内部の「ABC」という文字列を変更せずに、CをDに書き換えた「ABD」という文字列を持つ新しいStringインスタンスを生成して、その参照を戻します。しかし、7行目のコードでは、この参照を受け取っていません。また、変数aの参照先も変更していないため、その参照先にあるStringインスタンスの「ABC」という文字列は変わっていません。\n8行目では、変数aで参照するインスタンスのconcatメソッドを呼び出して文字列を連結しています。その結果、「ABCC」という新しい文字列を持ったStringインスタンスへの参照が戻るので、この参照で変数aを上書きします。\nよって、コンソールには「ABCC」と表示されます。以上のことから、選択肢Cが正解です。\n【第2章：問題9、13、16】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "string/reference",
          "main/args",
          "array",
          "override/overload"
        ]
      },
      {
        "id": "ch08-q49",
        "number": 49,
        "type": "single",
        "selectCount": 1,
        "title": "try-with-resourcesの実行順",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample implements AutoCloseable {\n    @Override\n    public void close() throws Exception {\n        System.out.println(\"C\");\n    }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try (Sample s = new Sample()) {\n            throw new Exception();\n        } catch (Exception e) {\n            System.out.println(\"A\");\n        } finally {\n            System.out.println(\"B\");\n        }\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "A、B、Cと表示される"
          },
          {
            "key": "B",
            "text": "A、C、Bと表示される"
          },
          {
            "key": "C",
            "text": "C、A、Bと表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問49）。",
          "pdfExplanation": "正解：C\n\ntry-with-resourcesに関する問題です。\ntry-with-resourcesは、例外が発生したときに自動的にリソースのcloseメソッドを呼び出し、リソースを解放する便利な構文です。例外が発生した場合、try-with-resourcesでは次の順番で処理されます。\n① closeメソッドによるリソース解放の処理\n② catchブロックによる例外処理\n③ finallyブロックによる事後処理\n例外処理よりも先にcloseメソッドによるリソースの解放が行われる点に注意してください。\n設問では、java.lang.AutoCloseableインタフェースを実装したSampleクラスをリソースとして定義しています。このリソースを使い終わるとcloseメソッドが呼び出され、コンソールに「C」と表示されます。設問のMainクラスのtryブロック（3〜5行目）ではすぐに例外をスローしているので、まずリソースのクローズが行われ、コンソールに「C」が表示されます。その後、catchブロック、そしてfinallyブロックと続き、コンソールには「A」「B」と順に表示されます。以上のことから、選択肢Cが正解です。\n【第6章：問題11】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "exception",
          "try-with-resources",
          "main/args",
          "interface/default"
        ]
      },
      {
        "id": "ch08-q50",
        "number": 50,
        "type": "single",
        "selectCount": 1,
        "title": "到達不能コード",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int[] array = {1, 2, 3, 4, 5};\n        int key = 3;\n        int cnt = 0;\n        for (int i : array) {\n            if (i != key) {\n                continue;\n                cnt++;\n            }\n        }\n        System.out.println(cnt);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "3"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "1"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問50）。",
          "pdfExplanation": "正解：D\n\n繰り返しの制御に関する問題です。continueは、繰り返し処理の途中に現れると、それ以降の処理をスキップします。そのため、設問のコードでcontinueの次の行に記述されている変数cntのインクリメントは、実行できないコードです。このような実行できない到達不可能なコードがあった場合は、コンパイラエラーになります。よって、選択肢Dが正解です。\n【第3章：問題33】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "main/args",
          "string/reference",
          "array",
          "field/static/scope"
        ]
      },
      {
        "id": "ch08-q51",
        "number": 51,
        "type": "multi",
        "selectCount": 2,
        "title": "オーバーライド・オーバーロードとジェネリクス",
        "prompt": "Aクラスを継承したサブクラスに定義できるメソッドとして、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "A",
            "code": "import java.util.*;\n\npublic class A {\n    public List<Number> test(Set<CharSequence> s) {\n        return null;\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "public ArrayList<Integer> test(Set<String> s) { ... }"
          },
          {
            "key": "B",
            "text": "public List<Integer> test(TreeSet<String> s) { ... }"
          },
          {
            "key": "C",
            "text": "public List<Integer> test(Set<String> s) { ... }"
          },
          {
            "key": "D",
            "text": "public List<Object> test(Set<CharSequence> s) { ... }"
          },
          {
            "key": "E",
            "text": "public List<Integer> test(Set<CharSequence> s) { ... }"
          },
          {
            "key": "F",
            "text": "public ArrayList<Number> test(Set<CharSequence> s) { ... }"
          }
        ],
        "answer": [
          "B",
          "F"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問51）。",
          "pdfExplanation": "正解：B、F\n\nオーバーライドとオーバーロード、そして共変戻り値とジェネリクスに関する問題です。オーバーライドしたメソッドのジェネリクスの型パラメータは、完全一致でなければオーバーライドと見なされません。そのため、設問のコードのtestメソッドは、次の条件を満たさなければいけません。\n・型パラメータにCharSequence型を指定したSet型の引数を受け取ること\n・型パラメータにNumber型を指定したList型の戻り値を戻すこと\nそのため、戻り値型もしくは引数の型パラメータが異なる選択肢A、C、D、Eは誤りです。選択肢Bは、引数の型をSet型から実装クラスであるTreeSet型にしています。そのため、オーバーロードとして扱われ、ジェネリクスの型パラメータが一致しなくてもコンパイルエラーにはなりませんが、次のように@Overrideアノテーションを付けるとコンパイルエラーになります。\n例 選択肢Bの記述をオーバーライドとした場合\n@Override  ← オーバーライドを明示するとコンパイルエラー\npublic List<Integer> test(TreeSet<String> s) {\nreturn null;\n選択肢Fは、引数の型とジェネリクスの型パラメータは一致していますが、戻り値型が異なります。しかし、戻り値型として指定されているArrayListクラスはListインタフェースの実装クラスであり、互換性があります。そのため、共変戻り値として解釈されて、コンパイルエラーとはなりません。\n【第5章：問題10】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "override/overload",
          "package/import",
          "string/reference",
          "collection"
        ]
      },
      {
        "id": "ch08-q52",
        "number": 52,
        "type": "single",
        "selectCount": 1,
        "title": "配列生成構文",
        "prompt": "「// insert code here」に入るコードとして、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        // insert code here\n        array[0] = 2;\n        array[1] = 3;\n        System.out.println(array[0] + \",\" + array[1]);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "code": "int[] array = new int[2];"
          },
          {
            "key": "B",
            "code": "int[] array;\narray = int[2];"
          },
          {
            "key": "C",
            "code": "int array = new int[2];"
          },
          {
            "key": "D",
            "code": "int array[2];"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問52）。",
          "pdfExplanation": "正解：A\n\n配列の生成に関する問題です。配列の生成に関する問題では、次の点に注意します。\n1. 変数宣言時に大カッコ「[]」があるか（大カッコは省略不可）2. 変数宣言時に要素数を指定していないか3. インスタンスの生成でnewを記述しているか4. インスタンス生成時に要素数を指定しているか5. []以外のカッコを使っていないか\n選択肢Aは、上記に沿って、正しく記述されています。選択肢Bは、インスタンス生成時にnewを記述しておらず、上記の3に反しています。配列はインスタンスなので、生成しない限り使えないということを忘れないようにしましょう。選択肢Cは、変数宣言時に、配列型変数であることを表す大カッコを記述していません。上記の1のとおり、大カッコを省略することはできません。選択肢Dは、変数宣言時に要素数を指定しているため、上記2に反しています。変数は配列のインスタンスへの参照を保持するための器に過ぎず、変数内に配列が作られるわけではありません。いくつの要素を扱うかという情報が必要なのは、配列のインスタンスです。\n【第2章：問題27、32】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "array",
          "main/args",
          "string/reference",
          "field/static/scope"
        ]
      },
      {
        "id": "ch08-q53",
        "number": 53,
        "type": "single",
        "selectCount": 1,
        "title": "配列cloneの浅いコピー",
        "prompt": "trueを戻すコードとして正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "code",
            "code": "char[][] array1 = {{'a', 'b'}, {'c', 'd'}};\nchar[][] array2 = array1.clone();\nchar[] array3 = array1[1].clone();"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "array1[1] == array3"
          },
          {
            "key": "B",
            "text": "array1[1] == array3[1]"
          },
          {
            "key": "C",
            "text": "array1[1] == array2[1]"
          },
          {
            "key": "D",
            "text": "array1.equals(array2)"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問53）。",
          "pdfExplanation": "正解：C\n\n配列のcloneメソッドに関する問題です。cloneメソッドは、新しい配列を作り、その配列に同じ要素への参照をコピーします。そのため、cloneメソッドで作られた複製の配列と元の配列は同じ参\n照先を共有します。\n設問のコードでは、「array1.clone()」でarray1の要素のコピーをarray2に代入しています。そのため、array1とarray2は同じ要素への参照を共有していることになり、array1の要素を変更するとarray2が参照している要素も変更されます。よって、同一性を検証する==演算子はtrueと判定されます。以上のことから、選択肢Cが正解です。\n一方、array1の2番目の要素（char配列）のcloneメソッドを使った「array1[1].clone()」では、新しい配列を作り、その配列に同じ要素（char型の値）をコピーし直します。新しい配列を作っているため、array1とarray3は同じ値を持っている異なる配列への参照を持つことになります。よって、選択肢Aは誤りです。\n選択肢Bは2次元配列であるarray1の2番目の要素（char配列）と1次元配列であるarray3の2番目の要素（char）を比較しているため、コンパイルエラーとなります。よって、誤りです。\n配列は、java.lang.Objectクラスを継承したクラスとして実装されています。そのため、Objectクラスに定義されているequalsメソッドなども持っています。Objectクラスのequalsメソッドはオーバーライドされることが前提のメソッドで、オーバーライドしなかった場合は同値性ではなく同一性を検証します。array2には、array1のcloneメソッドの結果作られた新しい配列への参照が入っています。そのため、array1とarray2は異なる参照を持っていることから、equalsメソッドはfalseを戻します。よって、選択肢Dも誤りです。\n【第2章：問題35】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "array",
          "string/reference",
          "operator/control"
        ]
      },
      {
        "id": "ch08-q54",
        "number": 54,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタチェーン",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "A クラス",
            "code": "class A {\n    public A() { System.out.print(\"A\"); }\n}"
          },
          {
            "title": "B クラス",
            "code": "class B extends A {\n    public B() { System.out.print(\"B\"); }\n}"
          },
          {
            "title": "C クラス",
            "code": "class C extends B {\n    public C() { System.out.print(\"C\"); }\n}"
          },
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        new C();\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "ABCと表示される"
          },
          {
            "key": "B",
            "text": "Cと表示される"
          },
          {
            "key": "C",
            "text": "CBAと表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問54）。",
          "pdfExplanation": "正解：A\n\nコンストラクタチェインに関する問題です。継承関係にあるとき、サブクラスよりも先にスーパークラスのコンストラクタが実行されます。設問のコードでは、Aクラスを継承したBクラス、そのBクラスを継承したCクラスを定義しています。そのため、Cクラスのインスタンスを生成したときのコンストラクタはA、B、Cの順に実行されます。よって、選択肢Aが正解です。\n次のように、何らかのクラスを継承したクラスを定義すると、コンストラクタの先頭行に、スーパークラスのコンストラクタ呼び出しのコードがコンパイラによって自動的に追加されることを覚えておきましょう。\n例 スーパークラスのコンストラクタ呼び出し\nclass A {\npublic A() {\nsuper();  ← Objectクラスのコンストラクタ呼び出し\nSystem.out.print(\"A\");\nclass B extends A {\npublic B() {\nsuper();  ← Aクラスのコンストラクタ呼び出し\nSystem.out.print(\"B\");\nclass C extends B {\npublic C() {\nsuper();  ← Bクラスのコンストラクタ呼び出し\nSystem.out.print(\"C\");\n【第5章：問題21】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "constructor",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q55",
        "number": 55,
        "type": "multi",
        "selectCount": 3,
        "title": "抽象クラスに定義できるメソッド",
        "prompt": "「// insert code here」に入るコードとして、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Item",
            "code": "public abstract class Item {\n    int num;\n    // insert code here\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "public void print();"
          },
          {
            "key": "B",
            "code": "public int calculate() {\n    return num * 2;\n}"
          },
          {
            "key": "C",
            "code": "public abstract int getNum() {\n    return num;\n}"
          },
          {
            "key": "D",
            "text": "public abstract int test();"
          },
          {
            "key": "E",
            "code": "public static void sample() {\n    // some codes\n}"
          }
        ],
        "answer": [
          "B",
          "D",
          "E"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問55）。",
          "pdfExplanation": "正解：B、D、E\n\n抽象クラスに関する問題です。抽象クラスには、実装を持たない抽象メソッドと、実装を持つ具象メソッドの両方を定義できます。抽象メソッドを定義するときには、abstractで修飾しなくてはいけない点を忘れないようにしましょう。\n選択肢Aは、メソッドの宣言範囲を示す中カッコ「{}」が記述されていません。つまり、実装を持たない抽象メソッドとして定義していますが、abstractで修飾されていません。よって、コンパイルエラーとなります。\n選択肢Bは、実装を持つ具象メソッドです。中カッコ内に実施したい処理が記述されており、abstractで修飾されてもいません。よって、正しいコードです。\n選択肢Cは、実装を持つ具象メソッドです。しかし、abstractで修飾されているため、抽象メソッドとして解釈されます。抽象メソッドは、実装を持つことができないため、このコードはコンパイルエラーとなります。よって、誤\nりです。\n選択肢Dは、抽象メソッドです。abstractで修飾されており、かつメソッドの宣言範囲を示す中カッコが省略されています。よって、正しいコードです。\n選択肢Eは、具象メソッドです。中カッコ内に実施したい処理が記述されており、abstractで修飾されてもいません。よって、正しいコードです。\n【第5章：問題8】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope"
        ]
      },
      {
        "id": "ch08-q56",
        "number": 56,
        "type": "single",
        "selectCount": 1,
        "title": "フィールドとローカル変数",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    int a, b;\n    public Sample(int a, int b) {\n        init(a, b);\n    }\n    public void init(int a, int b) {\n        this.a = a * a;\n        this.b = b * b;\n    }\n    public static void main(String[] args) {\n        int a = 2, b = 3;\n        Sample s = new Sample(a, b);\n        System.out.println(a + \",\" + b);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "「4,9」と表示される"
          },
          {
            "key": "B",
            "text": "「0,0」と表示される"
          },
          {
            "key": "C",
            "text": "「2,3」と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問56）。",
          "pdfExplanation": "正解：C\n\n変数のスコープに関する問題です。変数には、メソッド内で宣言するローカル変数と、クラス内で宣言するフィールドの2種類があります。同じ名前の変数は宣言できませんが、種類が異なれば宣言できます。設問のコードでは、2行目でフィールドとしてaとbを宣言していますが、11行目ではmainメソッドのローカル変数aとbを宣言しています。このように同名の変数を宣言した場合、thisを使わない限り、ローカル変数が優先されます。そのため、mainメソッドの最後の行でコンソールに出力しているのは、フィールドの値ではなく、ローカル変数の値です。\n以上のことから、選択肢Cが正解です。\n【第5章：問題18】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q57",
        "number": 57,
        "type": "multi",
        "selectCount": 3,
        "title": "インスタンスフィールドの変更",
        "prompt": "次のプログラムを実行して「0」と表示したい。Mainクラスの空欄に入るコードとして、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Test クラス",
            "code": "class Test {\n    public int num;\n    public Test(int num) { this.num = num; }\n    public int getNum() { return num; }\n    public void modify(int x) { num += x; }\n}"
          },
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Test t = new Test(100);\n        // blank\n        System.out.println(t.getNum());\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "this.num = 0;"
          },
          {
            "key": "B",
            "text": "num = 0;"
          },
          {
            "key": "C",
            "text": "t(0);"
          },
          {
            "key": "D",
            "text": "t.num = 0;"
          },
          {
            "key": "E",
            "text": "t.getNum() = 0;"
          },
          {
            "key": "F",
            "text": "t.modify(0);"
          },
          {
            "key": "G",
            "text": "t.modify(-t.num);"
          },
          {
            "key": "H",
            "text": "t.modify(-t.getNum());"
          }
        ],
        "answer": [
          "D",
          "G",
          "H"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問57）。",
          "pdfExplanation": "正解：D、G、H\n\nインスタンスへのアクセスに関する問題です。インスタンスへのアクセス方法には、「フィールドに直接アクセスする」「メソッドを呼び出す」の2通りがあります。どちらの場合であっても、「参照.フィールド名」や、「参照.メソッド名」のようにインスタンスへの参照が不可欠です。\n設問のコードでは、変数tが参照しているTestのインスタンスにアクセスします。選択肢Aは、変数tを使わずthisを使ってアクセスしようとしています。このthisは、呼び出し元のMainクラスへの参照を表しています。また、mainメソッドはstaticなメソッドなので、インスタンスへの参照を表すthisを使うことはできません。よって、誤りです。\n選択肢Bは、変数名だけを記述しています。これではTestのインスタンスではなく、Mainクラスのフィールドにアクセスすることになります。よって、誤りです。\n選択肢Cは、メソッド名を記述していません。インスタンスが持つメソッドを呼び出すには、「参照.メソッド名」のように記述しなければいけません。よって、誤りです。\n選択肢Dは、「参照.フィールド名」の書式で、かつ変数tを使ってnumフィールドに0を代入しているため、正しく値が変更されます。\n選択肢Eは、変数tで参照できるインスタンスのgetNumメソッドの呼び出し結果に0を代入することを意味します。当然、戻り値に値を代入することはできないため、誤りです。\n選択肢Fは、modifyメソッドを使ってnumフィールドの値を変更しようとしています。Testのインスタンスは、コンストラクタで100という数値を与えられ、変数numの値は100で初期化されています。そのため、numフィールドの値を0にしなければいけません。しかし、modifyメソッドは、受け取った引数をnumフィールドに加算代入しているので、「100+0」という式になってnumフィールドの値は100のままです。よって、誤りです。\n選択肢Gは、numフィールドの値をマイナス演算子で反転させて-100にして、modifyメソッドの引数として渡しています。modifyメソッドは、受け取った引数をnumフィールドに加算代入しているので、「100+(-100)」という式になってnumフィールドの値は0になります。\n選択肢Hは、選択肢Gのようにnumフィールドの値をマイナス演算子でプラス／マイナス反転させるのではなく、getNumメソッドの戻り値を反転させています。getNumメソッドは、numフィールドの値を戻すため、modifyメソッドでは「100+(-100)」という式が実行されて、numフィールドの値は0になります。\n【第4章：問題7、第5章：問題18】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "main/args",
          "string/reference",
          "array"
        ]
      },
      {
        "id": "ch08-q58",
        "number": 58,
        "type": "single",
        "selectCount": 1,
        "title": "setterの定義",
        "prompt": "Sampleクラスに、引数で受け取った値でフィールドvalueを変更するメソッドを追加したい。正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    private String value;\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "code": "public void setValue(String value) {\n    value = value;\n}"
          },
          {
            "key": "B",
            "code": "public String setValue(String str) {\n    String value = str;\n    return value;\n}"
          },
          {
            "key": "C",
            "code": "public void setValue(String value) {\n    this.value = value;\n}"
          },
          {
            "key": "D",
            "code": "public void setValue() {\n    this.value = value;\n}"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問58）。",
          "pdfExplanation": "正解：C\n\n同名のフィールドとローカル変数に関する問題です。同名のフィールドとローカル変数がある場合、thisを使ってフィールドであることを明示しない限り、ローカル変数が優先されます。よって、thisを使ってフィールドであることを明示して、引数で受け取った値を代入している選択肢Cが正解です。\n選択肢Aは、引数で受け取った値を、引数として宣言した変数に再代入しているだけで、フィールドの値を変更していません。選択肢Bは、引数で受け取った値を、新しいローカル変数valueに代入しています。そのため、フィールドの値を変更していません。選択肢Dは、thisを使ってフィールドであることを明示していますが、引数を宣言していません。そのため、フィールドの値をフィールドに再代入しているだけとなります。\n【第5章：問題18】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "collection",
          "string/reference",
          "field/static/scope"
        ]
      },
      {
        "id": "ch08-q59",
        "number": 59,
        "type": "multi",
        "selectCount": 2,
        "title": "オーバーライド時のアクセス修飾子",
        "prompt": "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample クラス",
            "code": "abstract class Sample {\n    protected void doProcess() {}\n    abstract void doTest();\n}"
          },
          {
            "title": "Test.java",
            "code": "public class Test extends Sample {\n    void doProcess() {}\n    protected void doTest() {}\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Sampleクラスの2行目のメソッドをpublicにする"
          },
          {
            "key": "B",
            "text": "Sampleクラスの3行目のメソッドをpublicにする"
          },
          {
            "key": "C",
            "text": "Testクラスの2行目のメソッドをpublicにする"
          },
          {
            "key": "D",
            "text": "Testクラスの2行目のメソッドをprotectedにする"
          },
          {
            "key": "E",
            "text": "Testクラスの3行目のメソッドをpublicにする"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問59）。",
          "pdfExplanation": "正解：C、D\n\nオーバーライド時のアクセス修飾子に関する問題です。スーパークラスに定義されているメソッドをオーバーライドするとき、アクセス修飾子を緩くすることはできますが、厳しくすることはできません。設問のコードは、Sampleクラスに定義されているdoProcessメソッドをオーバーライドするとき、protectedをより厳しいデフォルトに変更しているため、コンパイルエラーが発生しています。\nこのようなコンパイルエラーを解消するには、アクセス修飾子をprotectedに戻すか、緩く（つまりpublicに）します。以上のことから、選択肢CとDが正解です。\n【第5章：問題11】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "override/overload",
          "inheritance/polymorphism"
        ]
      },
      {
        "id": "ch08-q60",
        "number": 60,
        "type": "single",
        "selectCount": 1,
        "title": "代入演算子とthis",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Sample",
            "code": "public class Sample {\n    int a;\n    int b;\n    int c;\n    int d;\n\n    void setA(int a) {\n        a = a;\n    }\n    void setB() {\n        this.b = b;\n    }\n    int setC() {\n        return c;\n    }\n    int setD(int num) {\n        d = num;\n        return d;\n    }\n    void setAll(int x) {\n        a = b = this.c = setD(x);\n    }\n    @Override\n    public String toString() {\n        return \"Sample [a=\" + a + \", b=\" + b + \", c=\" + c + \", d=\" + d + \"]\";\n    }\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        s.setAll(10);\n        System.out.println(s);\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "text": "Sample [a=10, b=10, c=10, d=10]"
          },
          {
            "key": "B",
            "text": "Sample [a=0, b=10, c=10, d=10]"
          },
          {
            "key": "C",
            "text": "Sample [a=0, b=0, c=0, d=10]"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "E",
            "text": "実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "PDF原文寄せ解説（第8章 問60）。",
          "pdfExplanation": "正解：A\n\nフィールドとローカル変数の有効範囲に関する問題です。フィールドとローカル変数が同じ変数名である場合、メソッド内ではthisを使った明示的な指定がない限りローカル変数が優先されます。\n設問のコードで呼び出されているsetAllメソッドは、1行に3つの代入演算子「=」を使った複雑なステートメントです。代入演算子は、右側の処理が終わってから代入するため、setAllメソッドの処理は右側から考えます。まず、受け取った引数を渡してsetDメソッドを実行します。このメソッドはdフィールドに値を代入し、その値を戻します。よって、setDメソッドの実行が終わった段階でのsetAllメソッドは、次のコードと同じ意味を持ちます。\na = b = this.c = 10;\n次はthisを使って明示的に指定されたcフィールドに10を代入します。その後、bに代入することになりますが、setAllメソッドで宣言されているローカル変数は引数のxだけです。よって、この変数bはbフィールドだとわかります。\na = b = 10;\nbフィールドに10を代入すれば、同じ要領でaフィールドにも値を代入します。\na = 10;\n以上のことから、Sampleクラスのインスタンスsのすべてのフィールドには10が代入されていることになります。最後にprintlnメソッドは内部でインスタンスのtoStringメソッドを呼び出すため、コンソールには選択肢Aのように表示されます。\n【第5章：問題18】\n",
          "pdfExplanationOnly": true,
          "pdfAlignmentNote": "chapter8_original_order_transcription_v4 を基に表示用整形を行い、ページ見出し・書籍ページ参照は表示から除去。PDF画像との1文字単位の全文二重照合は未実施。"
        },
        "source": "",
        "status": "pdf_visual_focused_audit",
        "tags": [
          "field/static/scope",
          "operator/control",
          "main/args",
          "exception"
        ]
      }
    ]
  }
}
