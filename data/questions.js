window.JAVA_STUDY_DATA = {
  "title": "Java Silver 勉強用ページ",
  "version": "ch01-ch08-mobile-text-no-images-2026-05-21",
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
      "title": "模擬試験",
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
          "summary": "パッケージの主目的は、名前空間の提供、アクセス制御、クラス分類の3つ。ドメイン名を逆にした命名は慣習であって義務ではない。package宣言を省略したクラスも無名パッケージに属するため、『パッケージに属さないクラス』は存在しない。",
          "points": [
            "A: 正しい。完全修飾名によりクラス名の衝突を避ける。",
            "B: 誤り。逆ドメイン名は推奨・慣習であり、言語仕様上の必須条件ではない。",
            "C: 正しい。パッケージアクセスなど、アクセス制御と関係する。",
            "D: 正しい。関連クラスをパッケージ単位で分類できる。",
            "E: 誤り。package宣言がない場合も無名パッケージに属する。"
          ]
        },
        "source": "1章 問題PDF p.12 / 1章 解説PDF p.17"
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
          "summary": "package宣言はソースコードの先頭に置く。package宣言より前に書けるのはコメントだけ。import宣言はpackage宣言の後に書く。",
          "points": [
            "A: 誤り。importがpackageより前にある。",
            "B: 正しい。package → import → class の順。",
            "C/D: 誤り。Javaではpackageをブロックとして定義しない。"
          ]
        },
        "source": "1章 問題PDF p.12 / 1章 解説PDF p.19"
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
          "summary": "java.lang配下のクラスと、同一パッケージ内のクラスはimportなしで利用できる。サブパッケージは別パッケージなので自動インポートされない。",
          "points": [
            "A: 正しい。String、System、Integerなどを含むjava.langは暗黙的に利用できる。",
            "B: 誤り。StringとSystemだけではない。",
            "C: 正しい。同一パッケージ内のクラスはimport不要。",
            "D: 誤り。親子のような名前でもサブパッケージは別物。"
          ]
        },
        "source": "1章 問題PDF p.13 / 1章 解説PDF p.20"
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
          "summary": "Sampleはpackage宣言がないため無名パッケージに属する。一方、SampleImplはex4パッケージに属する。明示的なパッケージに属するクラスから無名パッケージのクラスは利用できないため、コンパイルエラーになる。",
          "points": [
            "protectedかどうか以前に、パッケージの所属が問題。",
            "無名パッケージは学習用の小さなコードでは出るが、実務では基本的に避ける。"
          ]
        },
        "source": "1章 問題PDF p.13 / 1章 解説PDF p.21"
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
          "summary": "エントリーポイントは public static void main(String[] args) または public static void main(String... args)。戻り値はvoidであり、intではない。",
          "points": [
            "A/B: 正しい。JVMがインスタンス生成なしで呼び出せる公開メソッドである必要がある。",
            "E: 正しい。String[]とString...はmainの引数として使える。",
            "D/F: 誤り。Javaのmainは戻り値を返さない。"
          ]
        },
        "source": "1章 問題PDF p.14 / 1章 解説PDF p.22"
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
          "summary": "javaコマンドでは、クラス名の後ろに続く値が起動パラメータとしてargsに入る。Mainは実行対象のクラス名であり、argsには入らない。",
          "points": [
            "args[0] は java。",
            "args[1] は one。",
            "したがって表示は java one。"
          ]
        },
        "source": "1章 問題PDF p.14 / 1章 解説PDF p.23"
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
          "summary": "クラスファイルを実行する基本形は java Test。Java SE 11以降では、java Test.java のソースファイルモードでも実行できる。javacはコンパイル用で、javapやjmodは実行用ではない。",
          "points": [
            "B: 正しい。コンパイル済みクラスを実行する。",
            "C: 正しい。ソースファイルモードで実行する。",
            "A/D: javacはコンパイルコマンド。",
            "E: javapはクラスファイル解析用。",
            "F: jmodはモジュール関連のコマンド。"
          ]
        },
        "source": "1章 問題PDF p.15 / 1章 解説PDF p.24"
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
          "summary": "起動パラメータはスペースで区切られる。ただし、ダブルクォーテーションで囲んだ範囲は1つの引数として扱われる。エスケープされたダブルクォーテーションは文字として扱われる。設問では引数数が5つになる。",
          "points": [
            "スペースは基本的に区切り。",
            "\"...\"で囲むとスペースを含んでも1引数。",
            "\\\" のようにエスケープされた引用符は区切り記号ではなく文字。"
          ]
        },
        "source": "1章 問題PDF p.15 / 1章 解説PDF p.27"
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
          "summary": "通常実行では、javac Sample.javaでコンパイルした後、java Sampleのようにクラス名を指定して実行する。java Sample.classのように.class付きで指定しない。Java SE 11以降なら、java Sample.javaのソースファイルモードでも実行できる。",
          "points": [
            "D: 正しい。通常のコンパイル → 実行の流れ。",
            "E: 正しい。ソースファイルモード。",
            "A/B: 誤り。javaコマンドにはSample.classではなくSampleを渡す。",
            "C: 単独では、事前にコンパイル済みであることが示されていないため不適切。"
          ]
        },
        "source": "1章 問題PDF p.16 / 1章 解説PDF p.29"
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
          "summary": "Javaの真偽値型は boolean であり、bool という型は存在しない。そのため4行目でコンパイルエラーになる。do-whileの挙動以前の問題。",
          "points": [
            "C: 正しい。bool flg = true; はJavaでは不正。",
            "A/B: do-whileの実行回数を考える前にコンパイルできない。",
            "D: 実行前に失敗するため実行時例外ではない。"
          ]
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
          "compile-error"
        ]
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
          "summary": "先頭が0の整数リテラルは8進数として解釈される。8進数に8は使えないため、0827はコンパイルエラーになる。",
          "points": [
            "B: 0413は8進数として有効。",
            "C: 0xは16進数。",
            "D: 0bは2進数。",
            "E: 8進数で8を含むため不正。"
          ]
        },
        "source": "2章 問題PDF p.32 / 2章 解説PDF p.58",
        "tags": [
          "literal",
          "integer"
        ]
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
          "summary": "数値リテラル内のアンダースコアは桁区切りとして使えるが、リテラルの先頭・末尾、小数点の前後、接尾辞の直前、進数接頭辞の直後には置けない。",
          "points": [
            "C: 先頭がアンダースコアなので数値リテラルではない。",
            "D/F: 末尾または接尾辞直前のアンダースコアは不可。",
            "E: 小数点直前のアンダースコアは不可。",
            "I: 0x直後のアンダースコアは不可。",
            "A/B/G/H: いずれも桁の間のアンダースコアなので有効。"
          ]
        },
        "source": "2章 問題PDF p.33 / 2章 解説PDF p.59",
        "tags": [
          "literal",
          "underscore"
        ]
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
          "summary": "識別子には英数字、_、$などを使えるが、波括弧やドットは変数名として使えない。",
          "points": [
            "A: $は識別子に使用可能。",
            "B/C: _を含む識別子として有効。ただし単独の _ は不可。",
            "D: { } は識別子に使えない。",
            "E: . はメンバアクセスなどに使う記号であり識別子には使えない。"
          ]
        },
        "source": "2章 問題PDF p.33 / 2章 解説PDF p.60",
        "tags": [
          "identifier"
        ]
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
          "summary": "配列初期化、charからshortへの明示的キャスト、boolean式、数値リテラルの桁区切りは有効。byte変数からcharへの暗黙変換、doubleリテラルからfloatへの代入、charからStringへの代入はできない。",
          "points": [
            "A: 2次元配列の初期化として正しい。",
            "B: charをshortへ明示的にキャストしている。",
            "C: byte変数は負数を取り得るためcharへ暗黙変換できない。",
            "D: 比較結果はboolean。",
            "E: 1.99はdoubleリテラル。floatにするなら1.99Fなどが必要。",
            "F: 数値リテラル内部の_は有効。",
            "G: シングルクォートはcharリテラル。Stringではない。"
          ]
        },
        "source": "2章 問題PDF p.33 / 2章 解説PDF p.61",
        "tags": [
          "type-conversion",
          "array",
          "literal"
        ]
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
          "summary": "varは初期化式から型を推論する。初期化なし、nullだけ、ラムダ式単独、配列初期化子単独では型を推論できない。new ArrayList<>() は型推論可能。",
          "points": [
            "A: 初期化式がない。",
            "B: nullだけでは型が決まらない。",
            "C: ラムダ式はターゲット型が必要。",
            "D: 配列初期化子だけでは不可。",
            "E: 右辺からArrayList型を推論できる。"
          ]
        },
        "source": "2章 問題PDF p.34 / 2章 解説PDF p.62",
        "tags": [
          "var",
          "type-inference"
        ]
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
          "summary": "varはローカル変数の型推論専用であり、フィールドやコンストラクタ引数には使えない。Sampleクラスでコンパイルエラーになる。",
          "points": [
            "2行目 private var value; が不正。",
            "3行目 public Sample(var value) も不正。",
            "varはメソッド内のローカル変数で使う。"
          ]
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
          "compile-error"
        ]
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
          "summary": "var a = new B(); により変数aの型はBに固定される。CはAのサブクラスだがBのサブクラスではないため、a = new C(); はコンパイルエラーになる。",
          "points": [
            "varは動的型ではない。コンパイル時に型が決まる。",
            "BとCは兄弟クラスであり、B型変数にCインスタンスは代入できない。"
          ]
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
          "polymorphism"
        ]
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
          "summary": "Stringはnew String(\"...\")でも文字列リテラルでも作成できる。String.newInstanceというメソッドはなく、単一引用符で複数文字のリテラルは書けない。",
          "points": [
            "A/B: 正しい。",
            "C: String.newInstanceは存在しない。",
            "D: 'sample' はcharリテラルとしても不正。"
          ]
        },
        "source": "2章 問題PDF p.36 / 2章 解説PDF p.65",
        "tags": [
          "String"
        ]
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
          "summary": "Stringは不変オブジェクト。replaceAllは変更後の新しいStringを返すが、戻り値を変数に代入していないためstrは変わらない。",
          "points": [
            "helloメソッドのmsgはstrと同じ文字列を参照するが、文字列そのものは変更されない。",
            "msg.replaceAll(...) の戻り値を使っていない点がひっかけ。"
          ]
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
          "immutable"
        ]
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
          "summary": "charAtの添字は0始まり。\"abcde\"の有効な添字は0から4までであり、charAt(5)は範囲外なので実行時例外になる。",
          "points": [
            "lengthは5だが、最後の文字の添字は4。",
            "添字範囲外はStringIndexOutOfBoundsException。"
          ]
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
          "runtime-exception"
        ]
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
          "summary": "indexOfは指定した文字列が見つからない場合に-1を返す。\"abcde\"の中に\"abcdef\"は存在しない。",
          "points": [
            "存在する部分文字列なら開始位置を返す。",
            "見つからない場合は例外ではなく-1。"
          ]
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
          "indexOf"
        ]
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
          "summary": "substring(2, 4) は開始添字2を含み、終了添字4を含まない。\"abcde\"では添字2がc、添字3がdなので、結果は\"cd\"。",
          "points": [
            "終了位置は含まない。",
            "範囲は 2 <= index < 4。"
          ]
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
          "substring"
        ]
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
          "summary": "replaceは対象文字列を左から順に、重ならない範囲で置換する。\"aaaa\"内の\"aa\"は2回置換され、\"bb\"になる。",
          "points": [
            "先頭のaaがb、残りのaaもbに置換される。",
            "重複する位置を再利用して置換するわけではない。"
          ]
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
          "replace"
        ]
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
          "summary": "length()は文字数5を返すが、charAtに指定できる最大添字は4。charAt(str.length())は範囲外アクセスになる。",
          "points": [
            "Stringの添字は0始まり。",
            "最後の文字を取り出すなら charAt(str.length() - 1)。"
          ]
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
          "charAt"
        ]
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
          "summary": "substring(1, 3) の結果は \"bc\"。その文字列は \"b\" で始まるため startsWith(\"b\") はtrueを返す。",
          "points": [
            "substringの終了位置3は含まない。",
            "Stringメソッドの戻り値に対してさらにメソッドを呼ぶ形はメソッドチェーン。"
          ]
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
          "startsWith"
        ]
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
          "summary": "Stringで文字列を連結するメソッドはconcat。appendはStringBuilderなどのメソッドで、Stringにはaddやplusはない。",
          "points": [
            "A: 正しい。concatは新しいStringを返す。",
            "B: appendはStringBuilder系。",
            "C/D: Stringにそのようなメソッドはない。"
          ]
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
          "concat"
        ]
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
          "summary": "StringBuilder(String) コンストラクタで作成した場合、初期capacityは「文字数 + 16」。\"abcde\"は5文字なのでcapacityは21。",
          "points": [
            "lengthは5だがcapacityは内部バッファ容量。",
            "空のStringBuilderなら初期capacityは16。"
          ]
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
          "capacity"
        ]
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
          "summary": "append後はabcde、reverse後はedcba。replace(1, 3, \"a\") は添字1から3未満、つまりdcをaに置き換えるため eaba になる。",
          "points": [
            "StringBuilderの操作は自身を変更する。",
            "replaceの第2引数は含まない。"
          ]
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
          "replace"
        ]
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
          "summary": "\"abcde\"の中で\"bcd\"は添字1から始まる。StringBuilderのindexOfもStringと同様、見つかった開始位置を返す。",
          "points": []
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
          "indexOf"
        ]
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
          "summary": "テキストブロックは複数行文字列をそのまま書けるため、通常の改行に\nを書く必要はない。",
          "points": [
            "A/B/C: テキストブロックの説明として正しい。",
            "D: 誤り。行を分けて書けば改行を含められる。"
          ]
        },
        "source": "2章 問題PDF p.42 / 2章 解説PDF p.78",
        "tags": [
          "text-block"
        ]
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
            "code": "String str = \"\"\"\nthis is textblock sample.\n\"\"\";"
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
            "code": "String str = \"\nthis is textblock sample.\"\"\";"
          },
          {
            "key": "E",
            "code": "String str = \"\"\"this is textblock sample.\n\"\"\";"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "テキストブロックは開始の \"\"\" の直後に改行が必要。Aだけが開始デリミタ後に改行し、終了デリミタも正しく書かれている。",
          "points": [
            "B: トリプルクォーテーションではない。",
            "C/E: 開始の \"\"\" の直後に文字列を書いているため不正。",
            "D: 開始デリミタが不正。"
          ]
        },
        "source": "2章 問題PDF p.42 / 2章 解説PDF p.81",
        "tags": [
          "text-block",
          "compile-error"
        ]
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
          "summary": "テキストブロックのインデントは自動調整されるが、終了デリミタより右にある空白は残る。設問ではA/B/Cの相対的なインデントが残るため、Aの形で出力される。",
          "points": [
            "終了デリミタの位置が、削除される共通インデント量の基準になる。",
            "空白の有無が出力に影響する問題なので、文字だけでなく開始位置を見る。"
          ]
        },
        "source": "2章 問題PDF p.43 / 2章 解説PDF p.82",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        String str = \"\"\"\n            A\n              B\n                C\n          \"\"\";\n        System.out.println(str);\n    }\n}"
          }
        ],
        "tags": [
          "text-block",
          "indent"
        ]
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
          "summary": "同じ文字列リテラルは文字列プール上の同じインスタンスを参照するため a == b はtrue。内容も同じなので equals もtrue。",
          "points": []
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
          "=="
        ]
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
          "summary": "new String(\"sample\")は新しいインスタンスを作るため、リテラルとは参照が異なる。==はfalseだが、内容比較のequalsはtrue。",
          "points": []
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
          "=="
        ]
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
          "summary": "intern()は文字列プール上のインスタンスへの参照を返す。aもbもintern()後は同じ\"abc\"リテラルの参照になるため、3つのif文すべてでcountが増える。",
          "points": []
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
          "intern"
        ]
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
          "summary": "配列参照をそのままprintlnに渡すと、要素数や中身ではなく、配列オブジェクトの文字列表現が出力される。形式は型情報とハッシュコードを含む。",
          "points": [
            "new int[0] は要素数0の配列インスタンスであり、nullではない。",
            "中身を表示したいならArrays.toStringなどを使う。"
          ]
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
          "println"
        ]
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
          "summary": "配列を表す[]は、型の後ろにも変数名の後ろにも書ける。多次元配列でも int[][] c、int d[][]、int[] e[]、int[][] f[] はすべて有効。",
          "points": []
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
          "declaration"
        ]
      },
      {
        "id": "ch02-q29",
        "number": 29,
        "type": "single",
        "selectCount": 1,
        "title": "配列サイズと変数宣言",
        "prompt": "本5I型変数の宣言として、正しいものを選びなさい。",
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
          "summary": "配列変数の宣言時に[]の中へ要素数を書くことはできない。要素数はnewで配列インスタンスを生成するときに指定する。",
          "points": [
            "int[] a; は正しいが、int[3] a; は不正。",
            "int b[]; は正しいが、int b[2]; は不正。"
          ]
        },
        "source": "2章 問題PDF p.46 / 2章 解説PDF p.92",
        "tags": [
          "array",
          "declaration"
        ]
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
          "summary": "Aは1次元配列変数に2次元配列を代入している。Bは配列サイズにdoubleリテラルを使っている。Fは多次元配列生成で先頭次元を省略している。",
          "points": [
            "C/D: 配列サイズはint式なので有効。",
            "E: 先頭次元だけ指定した2次元配列生成は有効。",
            "F: 後ろの次元だけ指定することはできない。"
          ]
        },
        "source": "2章 問題PDF p.47 / 2章 解説PDF p.93",
        "tags": [
          "array",
          "compile-error"
        ]
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
          "summary": "new Item[3] はItemインスタンスを3個作るのではなく、Item参照を3個入れられる配列を作るだけ。各要素の初期値はnullなので、items[i].priceでNullPointerExceptionが発生する。",
          "points": []
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
          "runtime-exception"
        ]
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
          "summary": "String配列の要素にはnullを代入できる。System.out.printにnull参照を渡すと文字列\"null\"が出力され、その後B、C、Dが続く。",
          "points": []
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
          "null"
        ]
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
          "summary": "配列初期化子を使う場合、new int[2]{...} のようにサイズ指定と初期化子を同時に使えない。また、{2,3}だけの代入は宣言時以外では不可。",
          "points": [
            "B: 空の2次元配列初期化として有効。",
            "C: new int[][]{} は有効。",
            "D: 宣言後でも new int[]{...} なら代入できる。",
            "A/E: 不正。"
          ]
        },
        "source": "2章 問題PDF p.48 / 2章 解説PDF p.98",
        "tags": [
          "array",
          "initializer"
        ]
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
          "summary": "2次元配列の要素は1次元配列への参照。途中の要素にnullが入っているため、tmp.lengthを参照した時点でNullPointerExceptionが発生する。",
          "points": []
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
          "runtime-exception"
        ]
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
          "summary": "CとDはAを実装した型として扱える。A[]は参照型配列でありObject[]へ代入できるため、4行目もコンパイルできる。",
          "points": [
            "配列はObjectのサブタイプ。",
            "参照型配列には共変性がある。"
          ]
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
          "polymorphism"
        ]
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
          "summary": "arrayA.clone()で外側の配列は複製される。arrayBを拡張for文でたどると、各int[]の要素1+2、1+2、1+2+3を合計するため12になる。",
          "points": []
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
          "enhanced-for"
        ]
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
          "summary": "ArrayListはサイズを動的に変更できる配列のようなコレクション。nullや重複値を扱える。標準ではスレッドセーフではなく、add(index, value)で追加位置を指定できる。",
          "points": []
        },
        "source": "2章 問題PDF p.51 / 2章 解説PDF p.106",
        "tags": [
          "ArrayList"
        ]
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
          "summary": "左辺がraw型のArrayListなので、String、Integer、Characterを混在して追加できる。拡張for文ではObjectとして取り出すため、順にA、10、Bが出力される。",
          "points": [
            "raw型は型安全ではないが、このコード自体はコンパイル・実行できる。",
            "charリテラル'B'はCharacterとして扱われる。"
          ]
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
          "raw-type"
        ]
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
          "summary": "list.add(2, \"B\") を呼ぶ時点でリストのサイズは1。addで指定できるindexは0以上size以下なので、index 2は範囲外となり実行時例外が発生する。",
          "points": []
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
          "runtime-exception"
        ]
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
          "summary": "setは既存要素の置換。Aを追加後に0番目をBに置換し、Cを追加後に1番目をDに置換するため、最終的なリストは[B, D]。",
          "points": [
            "addは要素を増やす。setは要素数を増やさず置き換える。"
          ]
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
          "set"
        ]
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
          "summary": "remove(Object)はequalsで等しい最初の要素を削除する。Item.equalsはnameだけを比較しているため、new Item(\"A\", 500) は先頭のItem(\"A\", 100)と等しいと判定され、最初のAが削除される。",
          "points": [
            "priceはequals判定に使われていない。",
            "削除されるのは一致した最初の1件だけ。"
          ]
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
          "equals"
        ]
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
          "summary": "Aは出力される。Bのときにlist.remove(str)でBが削除されると、内部イテレータのカーソル位置とリストサイズの関係により次の要素確認でループが終了し、Cは出力されない。",
          "points": [
            "拡張for文中のリスト変更は基本的に危険。",
            "ただしこのケースではConcurrentModificationExceptionが発生する前にループ終了条件に達する。"
          ]
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
          "remove"
        ]
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
          "summary": "拡張for文の内部ではIteratorが使われる。ループ中にlist.remove(str)で構造変更すると、次の取り出し時にConcurrentModificationExceptionが発生する。",
          "points": [
            "Q42と違い、削除後もhasNextがtrueになる位置関係のため、次のnextで変更検出される。",
            "拡張for文中にコレクションを直接変更するのは避ける。"
          ]
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
          "runtime-exception"
        ]
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
          "summary": "List.ofは変更不可リストを作る。Arrays.asListは配列を backed する固定長リストを返すため、要素の追加・削除はできない。new ArrayListは可変長。",
          "points": [
            "A: 変更不可。setもadd/removeも不可。",
            "C: 固定長。setは可能だがadd/removeは不可。",
            "B/D: 通常のArrayListなので要素の追加・削除が可能。"
          ]
        },
        "source": "2章 問題PDF p.56 / 2章 解説PDF p.115",
        "tags": [
          "List.of",
          "Arrays.asList",
          "ArrayList"
        ]
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
          "summary": "a += 5 は a = a + 5 と同じで、a は 3 から 8 になる。その値が b に代入されるので a + b は 16。",
          "points": [
            "複合代入は右辺評価後に代入される。",
            "b = a += 5 は、a を更新してから b に代入する。"
          ]
        },
        "source": "3章 問題PDF p.118 / 3章 解説PDF p.144",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = a += 5;\n        System.out.println(a + b);\n    }\n}"
          }
        ]
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
          "summary": "byte に代入できる範囲は -128〜127。0b10000000 は int として 128 なので byte へ代入不可。2 * 3L は long、10.0 は double なので、それぞれ int / float へ代入不可。",
          "points": [
            "Bは定数式 256 で short の範囲内なのでコンパイル可能。",
            "浮動小数点リテラルは何も付けなければ double。float には 10.0F のようにする。"
          ]
        },
        "source": "3章 問題PDF p.118 / 3章 解説PDF p.145"
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
          "summary": "式は a++ + a + a-- - a-- + ++a。a=10 から順に評価すると 10 + 11 + 11 - 10 + 10 = 32。",
          "points": [
            "後置は現在値を式に使ってから増減する。",
            "前置は増減後の値を式に使う。"
          ]
        },
        "source": "3章 問題PDF p.118-119 / 3章 解説PDF p.147",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = a++ + a + a-- - a-- + ++a;\n        System.out.println(b);\n    }\n}"
          }
        ]
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
          "summary": "<= は大小比較用の関係演算子で、boolean 同士には使えない。",
          "points": [
            "boolean は == / != では比較できるが、< <= > >= では比較できない。"
          ]
        },
        "source": "3章 問題PDF p.119 / 3章 解説PDF p.149",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        boolean a = true;\n        boolean b = true;\n        System.out.println(a <= b);\n    }\n}"
          }
        ]
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
          "summary": "10 < a は false。&& は左辺が false の時点で右辺を評価しないため ++b は実行されない。a=10、b=10 のままなので 20。",
          "points": [
            "& なら右辺も評価されるが、&& はショートサーキットする。"
          ]
        },
        "source": "3章 問題PDF p.119-120 / 3章 解説PDF p.151",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 10;\n        if (10 < a && 10 < ++b) {\n            a++;\n        }\n        System.out.println(a + b);\n    }\n}"
          }
        ]
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
          "summary": "%、*、/ は + より優先され、同じ優先順位なら左から評価する。100 % 20 は 0、0 * 30 は 0、100 / 20 は 5。合計は 5。",
          "points": [
            "剰余 % と乗除算は同順位。",
            "整数除算では小数は出ない。"
          ]
        },
        "source": "3章 問題PDF p.120 / 3章 解説PDF p.152",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 100, b = 20, c = 30;\n        System.out.println(a % b * c + a / b);\n    }\n}"
          }
        ]
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
          "summary": "括弧内は 2 * 5 = 10。12 / 10 は整数除算で 1。したがって 30 - 1 + 1 = 30。",
          "points": [
            "整数同士の除算は整数結果になる。",
            "加算・減算は同じ優先順位なので左から評価する。"
          ]
        },
        "source": "3章 問題PDF p.120 / 3章 解説PDF p.153",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int result = 30 - 12 / (2 * 5) + 1;\n        System.out.println(result);\n    }\n}"
          }
        ]
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
          "summary": "s2 = s1 の時点では同じインスタンスを参照するが、その後 s1 に new Sample(10) を代入しているため、s1 と s2 は別インスタンスを参照する。== は参照の同一性を比較するので false。",
          "points": [
            "フィールド値が同じでも、new で別に作ったインスタンスは同一ではない。"
          ]
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
        ]
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
          "summary": "equals(Object obj) をオーバーライドしており、obj が Sample なら num の値だけを比較する。a と b は name は異なるが num はどちらも10なので true。",
          "points": [
            "equalsのシグネチャは equals(Object obj)。",
            "この実装では name は比較対象ではない。"
          ]
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
        ]
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
          "summary": "Sample には equals(Sample obj) があるが、これは equals(Object) のオーバーライドではなくオーバーロード。変数 a は Object 型なので Object.equals(Object) が呼ばれ、参照が異なるため false。",
          "points": [
            "オーバーライドはメソッド名だけでなく引数型も一致する必要がある。",
            "Object型変数から見えるのはObjectのメソッド。"
          ]
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
        ]
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
          "summary": "a は null ではない Object インスタンス。Object.equals は参照の同一性を比較するので、null を渡すと false になる。",
          "points": [
            "null.equals(...) なら NullPointerException だが、今回は a.equals(null)。"
          ]
        },
        "source": "3章 問題PDF p.124 / 3章 解説PDF p.158",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Object a = new Object();\n        Object b = null;\n        System.out.println(a.equals(b));\n    }\n}"
          }
        ]
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
          "summary": "status は 0b1011 で FLAG_C は 0b0100。status & FLAG_C は 0 になるため、(status & FLAG_C) != 0 は false。",
          "points": [
            "ビットフラグの有無確認には & を使う。",
            "&& は boolean 専用、| はビットORなので今回の判定目的と違う。"
          ]
        },
        "source": "3章 問題PDF p.124 / 3章 解説PDF p.160",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    private final static int FLAG_A = 0b0001;\n    private final static int FLAG_B = 0b0010;\n    private final static int FLAG_C = 0b0100;\n    private final static int FLAG_D = 0b1000;\n\n    public static void main(String[] args) {\n        int status = 0b1011;\n        boolean result = (status ____ FLAG_C) != 0;\n        System.out.println(result);\n    }\n}"
          }
        ]
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
          "summary": "Javaのif文は if (条件式) { ... } の形で書く。条件式の括弧は省略できず、then も使わない。",
          "points": [
            "JavaはPythonやVB風のif構文ではない。"
          ]
        },
        "source": "3章 問題PDF p.125 / 3章 解説PDF p.164",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        ____\n            System.out.println(\"ok\");\n    }\n}"
          }
        ]
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
          "summary": "if に中カッコがない場合、条件の対象になるのは直後の1文だけ。false なので A は表示されず、次の println(\"B\") は通常実行される。",
          "points": [
            "試験では中カッコ省略時にどこまでがif対象かを必ず確認する。"
          ]
        },
        "source": "3章 問題PDF p.125 / 3章 解説PDF p.165",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        if (false)\n            System.out.println(\"A\");\n        System.out.println(\"B\");\n    }\n}"
          }
        ]
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
          "summary": "num < 10 は false なので else 側の B が表示される。その後の if (num == 10) は別のif文なので C も表示される。",
          "points": [
            "else は直前の対応する if に結び付く。",
            "2つ目の if は独立して評価される。"
          ]
        },
        "source": "3章 問題PDF p.126 / 3章 解説PDF p.166",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        if (num < 10)\n            System.out.println(\"A\");\n        else\n            System.out.println(\"B\");\n        if (num == 10)\n            System.out.println(\"C\");\n    }\n}"
          }
        ]
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
          "summary": "num == 100 は false、10 < num も false。次の else に属する if (num == 10) が true なので C が表示される。ここでelse-ifチェーンの処理は終わるため D は表示されない。",
          "points": [
            "else if の連鎖では、最初に一致した箇所だけが実行される。"
          ]
        },
        "source": "3章 問題PDF p.126-127 / 3章 解説PDF p.166",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        if (num == 100)\n            System.out.println(\"A\");\n        else if (10 < num)\n            System.out.println(\"B\");\n        else\n            if (num == 10)\n                System.out.println(\"C\");\n            else\n                if (num == 10)\n                    System.out.println(\"D\");\n    }\n}"
          }
        ]
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
          "summary": "switch文で使える代表的な型は char、byte、short、int、そのラッパークラス、String、enum。long と boolean は使えない。",
          "points": [
            "Java Silverでは long と boolean を選ばないことが重要。"
          ]
        },
        "source": "3章 問題PDF p.127 / 3章 解説PDF p.168"
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
          "summary": "switch条件式は int だが、6行目の case \"10\" は String なので型不一致。8行目の case num は変数であり定数ではないため不可。10行目の 2 * 5 は定数式、12行目の NUM は final 定数なので可。",
          "points": [
            "case値には条件式と互換性のある定数を指定する。"
          ]
        },
        "source": "3章 問題PDF p.127-128 / 3章 解説PDF p.170",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        final int NUM = 0;\n        int num = 10;\n        switch (num) {\n            case \"10\": System.out.println(\"A\");\n                break;\n            case num: System.out.println(\"B\");\n                break;\n            case 2 * 5: System.out.println(\"C\");\n                break;\n            case NUM: System.out.println(\"D\");\n                break;\n        }\n    }\n}"
          }
        ]
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
          "summary": "num は 1 なので case 1 から入る。case 1 と case 2 には処理がなく、case 3 で A、break がないので case 4 で B、default で C が表示される。",
          "points": [
            "switch文は break がないと下へフォールスルーする。"
          ]
        },
        "source": "3章 問題PDF p.128 / 3章 解説PDF p.171",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int num = 1;\n        switch (num) {\n            case 1:\n            case 2:\n            case 3: System.out.println(\"A\");\n            case 4: System.out.println(\"B\");\n            default:\n                System.out.println(\"C\");\n        }\n    }\n}"
          }
        ]
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
          "summary": "data は 1 で case 0 / case 10 に一致しないため default に入る。default の後に break がないので case 0 にフォールスルーし、C と A が表示されて break する。",
          "points": [
            "default は最後に書かなくてもよい。",
            "defaultからもbreakがなければ下へ進む。"
          ]
        },
        "source": "3章 問題PDF p.129 / 3章 解説PDF p.171",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int data = 1;\n        switch (data) {\n            default: System.out.print(\"C\");\n            case 0: System.out.print(\"A\");\n                break;\n            case 10: System.out.print(\"B\");\n                break;\n        }\n    }\n}"
          }
        ]
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
          "summary": "switch式の -> はフォールスルーしない。a は 2 なので case 2 の B だけが表示される。",
          "points": [
            "switch文の : と switch式の -> を混同しない。"
          ]
        },
        "source": "3章 問題PDF p.129-130 / 3章 解説PDF p.172",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int a = 2;\n        switch (a) {\n            case 1 -> System.out.println(\"A\");\n            case 2 -> System.out.println(\"B\");\n            case 3 -> System.out.println(\"C\");\n            default -> System.out.println(\"D\");\n        };\n    }\n}"
          }
        ]
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
          "summary": "switch式は値を返す式なので、すべての可能性を網羅する必要がある。このコードは score / 10 が 0〜5 などになる場合を処理しておらず default もないためコンパイルエラー。",
          "points": [
            "switch文ではdefault省略可能だが、値を返すswitch式では網羅性が必要。"
          ]
        },
        "source": "3章 問題PDF p.130 / 3章 解説PDF p.174",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int score = 85;\n        String grade = switch (score / 10) {\n            case 10, 9 -> \"A\";\n            case 8 -> \"B\";\n            case 7 -> \"C\";\n            case 6 -> \"D\";\n        };\n        System.out.println(\"Grade: \" + grade);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch03-q23",
        "number": 23,
        "type": "single",
        "selectCount": 1,
        "title": "switch式の戻り値",
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
          "A"
        ],
        "explanation": {
          "summary": "switch式の -> では、右側に値を返す式を書ける。a は 3 なので result は \"C\" になり、C が表示される。",
          "points": [
            "switch式内で return を書く必要はない。",
            "switch式全体を代入文として使うため、式の後にはセミコロンが必要。"
          ]
        },
        "source": "3章 問題PDF p.131 / 3章 解説PDF p.175",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int a = 3;\n        String result = switch (a) {\n            case 1 -> \"A\";\n            case 2 -> \"B\";\n            case 3 -> \"C\";\n            default -> \"D\";\n        };\n        System.out.println(result);\n    }\n}"
          }
        ]
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
          "summary": "switch式のブロック内で値を返すには yield を使う。case 2 では b を3倍にした後、yield b; として result に値を返す必要がある。",
          "points": [
            "break はswitch式の値を返せない。",
            "return はメソッドから戻る。throw は例外送出。"
          ]
        },
        "source": "3章 問題PDF p.131-132 / 3章 解説PDF p.176",
        "codeBlocks": [
          {
            "title": "Sample.java",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int a = 2;\n        int b = 100;\n\n        int result = switch (a) {\n            case 1 -> b * 2;\n            case 2 -> {\n                b = b * 3;\n                ____ b;\n            }\n            default -> b;\n        };\n        System.out.println(result);\n    }\n}"
          }
        ]
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
          "summary": "表示しているのは b で、b は 0 から増えていく。0〜4を表示したいので条件は b < 5。",
          "points": [
            "a は 11 から減っていく補助変数で、出力値そのものではない。"
          ]
        },
        "source": "3章 問題PDF p.132 / 3章 解説PDF p.184",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 11;\n        int b = 0;\n        while (____) {\n            if (5 < a) {\n                System.out.println(b);\n            }\n            a--;\n            b++;\n        }\n    }\n}"
          }
        ]
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
          "summary": "do-while は do { 処理 } while (条件式); の形。a++ を表示した後に a < 5 を判定することで 0〜4 が表示される。",
          "points": [
            "do の後に条件式は書かない。",
            "while の条件式の後にはセミコロンが必要。"
          ]
        },
        "source": "3章 問題PDF p.133 / 3章 解説PDF p.185",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 0;\n        ① {\n            System.out.println(a++);\n        } ②\n    }\n}"
          }
        ]
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
          "summary": "while (a < 5) の対象は直後の do-while 文だけだが、その do では中カッコを省略して複数文を書いている形になっており、構文として成立しない。",
          "points": [
            "do-whileで複数文を繰り返すなら do { ... } while (...); と中カッコが必要。"
          ]
        },
        "source": "3章 問題PDF p.133 / 3章 解説PDF p.186",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 0;\n        while (a < 5)\n            do\n                a++;\n                System.out.print(a);\n            while (true);\n    }\n}"
          }
        ]
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
          "summary": "for文の初期化文で複数変数を宣言する場合、同じ型でなければならない。int i と long j を同時に宣言しているためコンパイルエラー。",
          "points": [
            "初期化文では int i = 1, j = 2 のように同じ型なら複数宣言できる。"
          ]
        },
        "source": "3章 問題PDF p.134 / 3章 解説PDF p.187",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1, long j = 2; i < 5; i++) {\n            System.out.print(i * j);\n        }\n    }\n}"
          }
        ]
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
          "summary": "total は for 文の初期化文で宣言されているため、for文の外では使えない。7行目の System.out.println(total) でコンパイルエラー。",
          "points": [
            "for文内で宣言した変数のスコープはfor文の中だけ。"
          ]
        },
        "source": "3章 問題PDF p.134 / 3章 解説PDF p.187",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 1;\n        for (int b = 2, total = 0; b <= 5; b++) {\n            total += a * b;\n        }\n        System.out.println(total);\n    }\n}"
          }
        ]
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
          "summary": "i は 0 で初期化される。1回だけ 0 を表示するには、最初だけ true になり、更新後に false になる i == 0 が適切。",
          "points": [
            "D は常に true なので無限ループになる。"
          ]
        },
        "source": "3章 問題PDF p.135 / 3章 解説PDF p.188",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; ____; i++)\n            System.out.println(i);\n    }\n}"
          }
        ]
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
          "summary": "for文の条件部は1つのboolean式でなければならない。i < 3, j < 5 のようにカンマで複数条件は書けない。",
          "points": [
            "複数条件にしたい場合は i < 3 && j < 5 のように論理演算子を使う。"
          ]
        },
        "source": "3章 問題PDF p.135 / 3章 解説PDF p.189",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0, j = 0; i < 3, j < 5; i++) {\n            System.out.println(i++);\n            j += i;\n        }\n    }\n}"
          }
        ]
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
          "summary": "forの更新文は各ループ本体の後に実行される。print(i) の後に i++ と period() が実行されるため、0,1,2, のように最後にもカンマが付く。",
          "points": [
            "更新文にはメソッド呼び出しも書ける。"
          ]
        },
        "source": "3章 問題PDF p.136 / 3章 解説PDF p.189",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++, period()) {\n            System.out.print(i);\n        }\n    }\n    private static void period() {\n        System.out.print(\",\");\n    }\n}"
          }
        ]
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
          "A"
        ],
        "explanation": {
          "summary": "外側の i に対応する内側配列の要素をすべて合計するには、j を 0 から array[i].length 未満まで回す。",
          "points": [
            "array[j].length を条件にすると、jの値に応じて参照先が変わり危険。",
            "jをiから始めると一部要素を飛ばす。"
          ]
        },
        "source": "3章 問題PDF p.136-137 / 3章 解説PDF p.190",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] array = new int[][] { {1, 2}, {3, 4} };\n        int total = 0;\n        for (int i = 0; i < array.length; i++) {\n            for (____) {\n                total += array[i][j];\n            }\n        }\n        System.out.println(total);\n    }\n}"
          }
        ]
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
          "summary": "内側の代入ループは b < array.length なので各行2要素だけ代入する。2行目は長さ5だが、後ろ3要素は null のまま。",
          "points": [
            "array.length は一次元目の要素数。array[a].length ではない。"
          ]
        },
        "source": "3章 問題PDF p.137 / 3章 解説PDF p.193",
        "codeBlocks": [
          {
            "title": "Test.java",
            "code": "public class Test {\n    public static void main(String[] args) {\n        String[][] array = new String[2][];\n        array[0] = new String[2];\n        array[1] = new String[5];\n        int i = 97;\n        for (int a = 0; a < array.length; a++) {\n            for (int b = 0; b < array.length; b++) {\n                array[a][b] = \"\" + i;\n                i++;\n            }\n        }\n        for (String[] tmp : array) {\n            for (String s : tmp) {\n                System.out.print(s + \" \" );\n            }\n            System.out.println();\n        }\n    }\n}"
          }
        ]
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
          "summary": "条件が true のA、条件式省略のCは無限ループ。Dは更新文がないため i が0のままで i < 5 が常に true。Bは最初から false。",
          "points": [
            "for文の条件式・更新式は省略可能。",
            "条件式を省略した場合は true 扱い。"
          ]
        },
        "source": "3章 問題PDF p.138 / 3章 解説PDF p.194",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        for (____) {\n            System.out.println(i);\n        }\n    }\n}"
          }
        ]
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
          "summary": "拡張for文は 型 変数名 : 配列 の順。String[][] の1要素は String[] で、配列は Object と互換性があるため Object obj : array はコンパイル可能。",
          "points": [
            "BはString[][]の要素型と合わない。",
            "D〜Fは拡張for文の順序が逆。"
          ]
        },
        "source": "3章 問題PDF p.138 / 3章 解説PDF p.195",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[][] array = { { \"A\", \"B\", \"C\" } };\n        for (____) {\n            System.out.print(obj);\n        }\n    }\n}"
          }
        ]
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
          "summary": "拡張for文の変数 str に \"D\" を代入しても、配列要素そのものは置き換わらない。2回目のループでは元の ABC が表示される。",
          "points": [
            "拡張forの一時変数は要素の値・参照のコピー。配列の格納先を書き換えるわけではない。"
          ]
        },
        "source": "3章 問題PDF p.139 / 3章 解説PDF p.196",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[] array = { \"A\", \"B\", \"C\" };\n        for (String str : array) {\n            str = \"D\";\n        }\n        for (String str : array) {\n            System.out.print(str);\n        }\n    }\n}"
          }
        ]
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
          "summary": "元コードは do 本体で num++ により11、while条件の ++num < 10 で12になって終了し、12を表示する。A〜Dはいずれも同じ最終値にならない。",
          "points": [
            "do-whileは必ず1回本体を実行してから条件判定する。",
            "前置・後置インクリメントも同時に追う必要がある。"
          ]
        },
        "source": "3章 問題PDF p.139-140 / 3章 解説PDF p.197",
        "codeBlocks": [
          {
            "title": "元コード",
            "code": "int num = 10;\ndo {\n    num++;\n} while (++num < 10);\nSystem.out.println(num);"
          }
        ]
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
          "summary": "x は array.length で 5。最初に x を 4 にしてから array[4] を表示すれば5から始まる。DとEはその条件を満たし、xが0になるまで表示できる。",
          "points": [
            "配列添字は0始まり。array[5] は範囲外。",
            "Bは最後に x が -1 になってから条件判定前に表示対象になりうるため不適切。"
          ]
        },
        "source": "3章 問題PDF p.140-141 / 3章 解説PDF p.199",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[] array = {1, 2, 3, 4, 5};\n        int x = array.length;\n        ____\n    }\n}"
          }
        ]
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
          "summary": "内側ループで b が \"A\" のときだけ出力し、b が \"B\" になると break で内側ループを抜ける。外側ループは2回あるので A が2回表示される。",
          "points": [
            "breakが抜けるのは直近のループだけ。"
          ]
        },
        "source": "3章 問題PDF p.141 / 3章 解説PDF p.200",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String[] array = { \"A\", \"B\" };\n        for (String a : array) {\n            for (String b : array) {\n                if (\"B\".equals(b))\n                    break;\n                System.out.print(b);\n            }\n        }\n    }\n}"
          }
        ]
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
          "summary": "偶数は continue で加算処理をスキップする。1、3、5 だけが total に加算されるので 9。",
          "points": [
            "continueは以降の処理を飛ばして次の繰り返しへ進む。"
          ]
        },
        "source": "3章 問題PDF p.142 / 3章 解説PDF p.201",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int[] array = { 1, 2, 3, 4, 5 };\n        int total = 0;\n        for (int i : array) {\n            if (i % 2 == 0)\n                continue;\n            total += i;\n        }\n        System.out.println(total);\n    }\n}"
          }
        ]
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
          "summary": "Javaのラベルは、ループ文だけでなく、if文、switch文、ブロック、return文、tryブロックなど多くの文に付けられる。",
          "points": [
            "ただし実用上よく使うのは、多重ループで break / continue の対象を明示する場合。"
          ]
        },
        "source": "3章 問題PDF p.142 / 3章 解説PDF p.201"
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
          "summary": "i が偶数のときは continue a で外側ループの次回へ進む。i が1と3のときだけ内側ループで j=0〜3 を加算し、4で break b。各回 0+1+2+3=6、2回で12。",
          "points": [
            "continue a はラベルaのループを次の繰り返しへ進める。",
            "break b は内側ループだけを抜ける。"
          ]
        },
        "source": "3章 問題PDF p.143 / 3章 解説PDF p.203",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int total = 0;\n        a: for (int i = 0; i < 5; i++) {\n            b: for (int j = 0; j < 5; j++) {\n                if (i % 2 == 0) continue a;\n                if (3 < j) break b;\n                total += j;\n            }\n        }\n        System.out.println(total);\n    }\n}"
          }
        ]
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
          "summary": "a と b は別インスタンス。b.setNum(20) は b の num だけを変更するため、a.getNum() は初期値10を返す。",
          "points": [
            "インスタンスフィールドはインスタンスごとに別々に保持される。"
          ]
        },
        "source": "4章 問題PDF p.206 / 4章 解説PDF p.231",
        "codeBlocks": [
          {
            "title": "Item.java / Main.java",
            "code": "public class Item {\n    private int num = 10;\n    public void setNum(int num) { this.num = num; }\n    public int getNum() { return this.num; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Item a = new Item();\n        Item b = new Item();\n        b.setNum(20);\n        System.out.println(a.getNum());\n    }\n}"
          }
        ]
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
          "summary": "a = b により、a は b と同じインスタンスを参照する。b の name は banana、price は100なので banana, 100 が出力される。",
          "points": [
            "参照型変数に入るのはオブジェクトそのものではなく参照。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "codeBlocks": [
          {
            "title": "Item.java / Main.java",
            "code": "public class Item {\n    public String name;\n    public int price;\n    public void printInfo() {\n        System.out.println(name + \", \" + price);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Item a = new Item();\n        Item b = new Item();\n        a.name = \"apple\";\n        b.price = 100;\n        a.price = 200;\n        b.name = \"banana\";\n        a = b;\n        a.printInfo();\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q03",
        "number": 3,
        "type": "single",
        "selectCount": 1,
        "title": "nullと空文字",
        "prompt": "「NULL」と表示したい。空欄に入るコードとして正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "Object obj = null;"
          },
          {
            "key": "B",
            "code": "Object obj = false;"
          },
          {
            "key": "C",
            "code": "Object obj = NULL;"
          },
          {
            "key": "D",
            "code": "Object obj = \"\";"
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
          "summary": "Javaのnullを出力すると表示されるのは小文字の「null」。大文字の「NULL」はリテラルではない。空文字は何も表示されない。",
          "points": [
            "null と空文字は別物。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "ガベージコレクション対象",
        "prompt": "7行目終了時点でガベージコレクションの対象となるインスタンスはどれか。",
        "options": [
          {
            "key": "A",
            "text": "3行目で作成したインスタンスだけ"
          },
          {
            "key": "B",
            "text": "4行目で作成したインスタンスだけ"
          },
          {
            "key": "C",
            "text": "3行目と4行目で作成したインスタンス"
          },
          {
            "key": "D",
            "text": "対象となるインスタンスは存在しない"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "c = a により3行目のインスタンスは c から参照され続ける。b = null により4行目のインスタンスは参照されなくなる。",
          "points": [
            "GC対象は「どこからも参照されなくなったインスタンス」。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF",
        "codeBlocks": [
          {
            "title": "Main.java",
            "code": "Object a = new Object();\nObject b = new Object();\nObject c = a;\na = null;\nb = null;"
          }
        ]
      },
      {
        "id": "ch04-q05",
        "number": 5,
        "type": "single",
        "selectCount": 1,
        "title": "staticフィールド",
        "prompt": "staticフィールドを複数の参照から変更したときの結果として正しいものを選びなさい。",
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
          "summary": "staticフィールドはインスタンスごとではなくクラスに1つ。Sample.num=10、s.num+=10、s2.num=30 はすべて同じ変数を変更する。",
          "points": [
            "staticフィールドは「クラス名.フィールド名」で考える。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q06",
        "number": 6,
        "type": "multi",
        "selectCount": 2,
        "title": "staticメンバのアクセス",
        "prompt": "次の中から正しい説明を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "staticなメソッドからはstaticなメソッドを呼び出せない"
          },
          {
            "key": "B",
            "text": "staticなメソッドからはstaticではないフィールドにアクセスできる"
          },
          {
            "key": "C",
            "text": "staticなメソッドからはstaticではないメソッドを呼び出せる"
          },
          {
            "key": "D",
            "text": "staticなメソッドからはstaticなフィールドにアクセスできる"
          },
          {
            "key": "E",
            "text": "staticではないメソッドからはstaticなフィールドにアクセスできる"
          },
          {
            "key": "F",
            "text": "staticではないメソッドからはstaticなメソッドを呼び出せない"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": {
          "summary": "staticメソッドから直接扱えるのはstaticメンバだけ。インスタンスメソッドからはstaticメンバにもアクセスできる。",
          "points": [
            "staticメソッドには暗黙のthisがない。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q07",
        "number": 7,
        "type": "single",
        "selectCount": 1,
        "title": "インスタンスメソッド呼び出し",
        "prompt": "helloメソッドを呼び出して「hello」と表示するコードとして正しいものを選びなさい。",
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
          "summary": "helloはstaticではないインスタンスメソッドなので、生成済みインスタンスの参照 sample から呼び出す。",
          "points": [
            "メソッド呼び出しには丸括弧が必要。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q08",
        "number": 8,
        "type": "single",
        "selectCount": 1,
        "title": "メソッド引数の個数",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
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
          "summary": "add(Integer a, Integer b) は2引数のメソッド。呼び出し側は1引数しか渡していないためコンパイルエラー。",
          "points": [
            "オートボクシング以前に、引数の個数が一致していない。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q09",
        "number": 9,
        "type": "multi",
        "selectCount": 2,
        "title": "ローカル変数のスコープ",
        "prompt": "5行目に記述できるコードとして正しいものを選びなさい。",
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
          "summary": "5行目時点で宣言済みなのは a と b。c は6行目で宣言されるためまだ使えず、d は未宣言。",
          "points": [
            "ローカル変数は宣言より前では使えない。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q10",
        "number": 10,
        "type": "single",
        "selectCount": 1,
        "title": "メソッド宣言",
        "prompt": "メソッド宣言として正しいものを選びなさい。",
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
          "summary": "戻り値なしのメソッドは void を使う。voidメソッドで値をreturnすることはできない。",
          "points": [
            "Voidはクラス名であり、戻り値なしを表す予約語ではない。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q11",
        "number": 11,
        "type": "single",
        "selectCount": 1,
        "title": "voidメソッドの戻り値",
        "prompt": "次のプログラムの説明として正しいものを選びなさい。",
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
            "text": "4行目と5行目でコンパイルエラーが発生する"
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
          "summary": "setValueはvoidなので戻り値をString変数に代入できない。",
          "points": [
            "voidメソッドは式として値を返さない。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q12",
        "number": 12,
        "type": "multi",
        "selectCount": 2,
        "title": "戻り値型と代入可能性",
        "prompt": "floatを返すメソッドの戻り値を代入できる型として正しいものを選びなさい。",
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
          "summary": "float値はfloatに代入でき、より広いdoubleにも代入できる。intやInteger、Stringには代入できない。",
          "points": [
            "プリミティブの拡大変換を確認する。"
          ]
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q13",
        "number": 13,
        "type": "single",
        "selectCount": 1,
        "title": "引数リスト不一致",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
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
          "summary": "method(int a, int b) は2引数のメソッド。s.method(2) は引数が1つなので該当メソッドがない。",
          "points": []
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "可変長引数",
        "prompt": "メソッド宣言として正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "void method(void) {}"
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
          "summary": "Javaにvoid型の引数はなく、可変長引数は「型... 変数名」で最後の引数に1つだけ記述できる。",
          "points": []
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "到達不能コード",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
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
          "summary": "return の直後に通常の文があるため、6行目は到達不能コードとなりコンパイルエラー。",
          "points": []
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q16",
        "number": 16,
        "type": "multi",
        "selectCount": 2,
        "title": "オーバーロードではない定義",
        "prompt": "提示されたcalcメソッドをオーバーロードしていないメソッド定義を選びなさい。",
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
          "summary": "Bは戻り値型だけが違う同一シグネチャ。Dは引数名が違うだけで型と順序が同じ。どちらもオーバーロードではない。",
          "points": []
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q17",
        "number": 17,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーロード解決の曖昧さ",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
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
            "text": "BとCの両方"
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
          "summary": "calc(2,3) は calc(double,int) と calc(int,double) の両方に適合し、どちらがより適切か決められないため呼び出しが曖昧になる。",
          "points": []
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q18",
        "number": 18,
        "type": "single",
        "selectCount": 1,
        "title": "オーバーロード条件",
        "prompt": "void method() をオーバーロードするメソッド定義として正しいものを選びなさい。",
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
            "text": "選択肢A〜Cまですべて正しい"
          },
          {
            "key": "E",
            "text": "選択肢A〜Cはすべて誤りである"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "オーバーロードは引数リストが異なる必要がある。アクセス修飾子だけを変えてもオーバーロードにはならない。",
          "points": []
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q19",
        "number": 19,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタのアクセス修飾子",
        "prompt": "コンストラクタを修飾できるアクセス修飾子について正しい説明を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "publicのみ定義できる"
          },
          {
            "key": "B",
            "text": "publicかprotectedのみ定義できる"
          },
          {
            "key": "C",
            "text": "private以外が定義できる"
          },
          {
            "key": "D",
            "text": "制限はない"
          },
          {
            "key": "E",
            "text": "アクセス修飾子で修飾できない"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "コンストラクタには public / protected / private / 修飾子なしを指定できる。",
          "points": []
        },
        "source": "4章 問題PDF / 4章 解説PDF"
      },
      {
        "id": "ch04-q20",
        "number": 20,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタではないメソッド",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。",
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
            "text": "Sampleクラスでコンパイルエラー"
          },
          {
            "key": "D",
            "text": "Mainクラスでコンパイルエラー"
          },
          {
            "key": "E",
            "text": "実行時に例外"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "void Sample() はコンストラクタではなくメソッド。new Sample() 後に s.Sample() を呼ぶことで1回だけ表示される。",
          "points": []
        },
        "source": "4章 問題PDF p.219 / 4章 解説PDF p.254",
        "codeBlocks": [
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    void Sample() {\n        System.out.println(\"hello.\");\n    }\n}"
          },
          {
            "title": "Mainクラス",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        s.Sample();\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "インスタンス初期化子とコンストラクタ",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。",
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
            "text": "Sampleクラスでコンパイルエラー"
          },
          {
            "key": "F",
            "text": "Mainクラスでコンパイルエラー"
          },
          {
            "key": "G",
            "text": "実行時に例外"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "インスタンス初期化子はコンストラクタ本体より先に実行されるため、「B」「A」の順に表示される。",
          "points": [
            "インスタンス初期化子は、コンストラクタ本体より前に実行される。"
          ]
        },
        "source": "4章 問題PDF p.221 / 4章 解説PDF p.257",
        "codeBlocks": [
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    Sample() {\n        System.out.println(\"A\");\n    }\n    {\n        System.out.println(\"B\");\n    }\n}"
          },
          {
            "title": "Mainクラス",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q22",
        "number": 22,
        "type": "single",
        "selectCount": 1,
        "title": "staticフィールドと初期化子",
        "prompt": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
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
          "summary": "インスタンスを生成していないため、インスタンス初期化子もコンストラクタも実行されず、static int の初期値0が表示される。",
          "points": [
            "Sample.numにアクセスしても、Sampleインスタンスは生成されない。"
          ]
        },
        "source": "4章 問題PDF p.222 / 4章 解説PDF p.258",
        "codeBlocks": [
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    static int num;\n    {\n        num = 10;\n    }\n    public Sample() {\n        num = 100;\n    }\n}"
          },
          {
            "title": "Mainクラス",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(Sample.num);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q23",
        "number": 23,
        "type": "single",
        "selectCount": 1,
        "title": "デフォルトコンストラクタの有無",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「A」と表示される"
          },
          {
            "key": "B",
            "text": "nullと表示される"
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
            "text": "実行時に例外"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "String引数コンストラクタを宣言しているため、引数なしデフォルトコンストラクタは追加されない。new Sample() でコンパイルエラー。",
          "points": [
            "void Sample() はメソッドであり、コンストラクタではない。String引数のコンストラクタがあるため、引数なしコンストラクタは自動生成されない。"
          ]
        },
        "source": "4章 問題PDF p.223 / 4章 解説PDF p.259",
        "codeBlocks": [
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    void Sample() {\n        System.out.println(\"A\");\n    }\n    Sample(String str) {\n        System.out.println(str);\n    }\n}"
          },
          {
            "title": "Mainクラス",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n    }\n}"
          }
        ]
      },
      {
        "id": "ch04-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "thisによるコンストラクタ呼び出し",
        "prompt": "次のプログラムを実行し、コンソールに「ok.」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。",
        "options": [
          {
            "key": "A",
            "code": "Sample(null, 0);"
          },
          {
            "key": "B",
            "code": "this(null, 0);"
          },
          {
            "key": "C",
            "code": "super(null, 0);"
          },
          {
            "key": "D",
            "code": "this.Sample(null, 0);"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "同一クラスの他コンストラクタ呼び出しは this(...) を使い、コンストラクタの先頭に記述する。",
          "points": [
            "同一クラスの別コンストラクタを呼び出すには this(...) を使う。"
          ]
        },
        "source": "4章 問題PDF p.223-224 / 4章 解説PDF p.260",
        "codeBlocks": [
          {
            "title": "Sampleクラス",
            "code": "public class Sample {\n    public Sample() {\n        // ここにコードを入れる\n    }\n    public Sample(String str, int num) {\n        System.out.println(\"ok.\");\n    }\n}"
          },
          {
            "title": "Mainクラス",
            "code": "public class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n    }\n}"
          }
        ]
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
          "summary": "this(\"B\") による別コンストラクタ呼び出しは、コンストラクタ本体の先頭に書く必要がある。printlnの後に書いているためコンパイルエラー。",
          "points": [
            "コンストラクタ内の this(...) / super(...) は最初の文でなければならない。"
          ]
        },
        "source": "4章 問題PDF p.221 / 4章 解説PDF p.261"
      },
      {
        "id": "ch04-q26",
        "number": 26,
        "type": "single",
        "selectCount": 1,
        "title": "パッケージアクセスとstatic文脈",
        "prompt": "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "Parentクラス",
            "code": "package ex26;\n\npublic class Parent {\n    int num = 10;\n}"
          },
          {
            "title": "Childクラス",
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
          "summary": "numはインスタンスフィールドであり、staticメソッドmain内から単独では参照できない。そのためChildクラス6行目でコンパイルエラー。",
          "points": [
            "別パッケージかどうか以前に、static文脈からインスタンスメンバを直接参照している点が問題。"
          ]
        },
        "source": "4章 問題PDF p.222 / 4章 解説PDF p.262"
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
          "summary": "protectedメソッドは、別パッケージから無条件に呼び出せるわけではない。MainはBookのサブクラスではないため、story.printInfo()でコンパイルエラー。",
          "points": [
            "protectedは「同一パッケージ」または「継承関係を通じたアクセス」で使える。"
          ]
        },
        "source": "4章 問題PDF p.223 / 4章 解説PDF p.263"
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
          "summary": "modifyにはs.numの値だけが渡される。引数numを変更しても、元のフィールドs.numは変わらない。",
          "points": [
            "Javaの引数渡しは値渡し。プリミティブ値を渡した場合、呼び出し元の変数やフィールド自体は変更されない。"
          ]
        },
        "source": "4章 問題PDF p.225 / 4章 解説PDF p.265"
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
          "summary": "参照型変数の参照値が渡されるため、modify内のsは呼び出し元と同じインスタンスを参照する。s.num *= 2 によりフィールドが20になる。",
          "points": [
            "参照そのものも値渡しだが、渡された参照を使って同じオブジェクトの中身を変更することはできる。"
          ]
        },
        "source": "4章 問題PDF p.226 / 4章 解説PDF p.266"
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
          "summary": "パターン変数bは、a instanceof B b がtrueになるifブロック側でだけ安全に使える。elseブロックではbを参照できないためコンパイルエラー。",
          "points": [
            "instanceofのパターン変数はスコープを正確に見る。else側では「Bではない」ことが確定しているため、bは使えない。"
          ]
        },
        "source": "4章 問題PDF p.226-227 / 4章 解説PDF p.267"
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
          "summary": "recordは暗黙的にfinalであり、サブクラスを作ることはできない。したがってBが誤り。",
          "points": [
            "recordはデータキャリア用の簡潔なクラス定義で、java.lang.Recordを継承し、コンポーネントに対応したアクセサなどが生成される。"
          ]
        },
        "source": "4章 問題PDF p.227 / 4章 解説PDF p.273"
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
          "summary": "トップレベルrecordはpublicまたは修飾子なしで宣言できる。protected/privateはトップレベルでは不可。recordは暗黙的にfinalなのでabstractやsealedも不可。",
          "points": [
            "record自体に暗黙的なfinal性があるため、継承前提の修飾子とは相性がない。"
          ]
        },
        "source": "4章 問題PDF p.227 / 4章 解説PDF p.273"
      },
      {
        "id": "ch04-q33",
        "number": 33,
        "type": "single",
        "selectCount": 1,
        "title": "recordの生成",
        "prompt": "次のレコードのインスタンスを生成し、利用するコードとして正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "レコード",
            "code": "public record Data(String value) {\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "code": "Data data = new Data();\ndata.value = \"sample\";"
          },
          {
            "key": "B",
            "code": "Data data = Data.of(\"sample\");"
          },
          {
            "key": "C",
            "code": "Data data = Data.value(\"sample\");"
          },
          {
            "key": "D",
            "code": "Data data = new Data(\"sample\");"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "record Data(String value) は、コンポーネントvalueを受け取るコンストラクタで生成する。正しい生成方法は new Data(\"sample\")。",
          "points": [
            "recordのフィールドはprivate final相当で直接代入できない。of/valueのようなファクトリメソッドは自動生成されない。"
          ]
        },
        "source": "4章 問題PDF p.228 / 4章 解説PDF p.279"
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
          "summary": "recordには追加の非staticフィールドを宣言できない。recordコンポーネントから生成されるフィールドだけを持つ。",
          "points": [
            "コンストラクタ、メソッド、staticフィールド、static初期化子、内部型は宣言可能。"
          ]
        },
        "source": "4章 問題PDF p.228 / 4章 解説PDF p.280"
      },
      {
        "id": "ch04-q35",
        "number": 35,
        "type": "single",
        "selectCount": 1,
        "title": "recordアクセサ",
        "prompt": "次のレコードを利用するコードとして、正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "レコード",
            "code": "public record Data(String value) {\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "code": "Data data = new Data(\"sample\");\nSystem.out.println(data.value());"
          },
          {
            "key": "B",
            "code": "Data data = new Data();\ndata.value = \"sample\";\nSystem.out.println(data.value());"
          },
          {
            "key": "C",
            "code": "Data data = new Data(\"sample\");\nSystem.out.println(data.value);"
          },
          {
            "key": "D",
            "code": "Data data = new Data(\"sample\");\ndata.setValue(\"test\");\nSystem.out.println(data.value());"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "record component value には value() アクセサが自動生成される。new Data(\"sample\") で生成し、data.value()で値を取得するAが正しい。",
          "points": [
            "getter名はgetValue()ではなく、コンポーネント名と同じ value()。フィールドへの直接アクセスやsetterは不可。"
          ]
        },
        "source": "4章 問題PDF p.228-229 / 4章 解説PDF p.282"
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
          "summary": "recordの代替コンストラクタは、標準コンストラクタと同じ引数を受け取り、コンポーネントに対応するフィールドを初期化する必要がある。したがってAとC。",
          "points": [
            "スーパークラスコンストラクタ呼び出しやgetter追加では、recordコンポーネントの初期化不足は解消しない。"
          ]
        },
        "source": "4章 問題PDF p.229 / 4章 解説PDF p.283"
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
          "summary": "recordのコンストラクタはrecord自体より狭いアクセス修飾子にできない。このrecordは修飾子なしなので、publicまたは修飾子なしが利用できる。",
          "points": [
            "privateはrecord本体より狭いため不可。"
          ]
        },
        "source": "4章 問題PDF p.229-230 / 4章 解説PDF p.285"
      },
      {
        "id": "ch04-q38",
        "number": 38,
        "type": "single",
        "selectCount": 1,
        "title": "recordの追加コンストラクタ",
        "prompt": "次のプログラムは、コンパイルエラーとなる。コンパイルエラーを解消するために「// insert code here」の箇所に入るコードとして正しいものを選びなさい。",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public record Data(String value) {\n    public Data() {\n        // insert code here\n    }\n}"
          }
        ],
        "options": [
          {
            "key": "A",
            "code": "this();"
          },
          {
            "key": "B",
            "code": "super();"
          },
          {
            "key": "C",
            "code": "this.value = value;"
          },
          {
            "key": "D",
            "code": "this(\"sample\");"
          },
          {
            "key": "E",
            "code": "super(\"sample\");"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "引数なしの追加コンストラクタでは、標準コンストラクタへ委譲して全コンポーネントを初期化する必要がある。this(\"sample\"); が正しい。",
          "points": [
            "super()ではrecordコンポーネントvalueを初期化できない。this(); は自分自身の再帰呼び出しになり不正。"
          ]
        },
        "source": "4章 問題PDF p.230 / 4章 解説PDF p.286"
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
          "summary": "コンパクトコンストラクタ内で this.value を参照しているが、recordのフィールド代入はコンパクトコンストラクタ本体の後に行われるため、初期化前フィールド参照となりコンパイルエラー。",
          "points": [
            "null判定をしたい場合は、コンポーネント引数 value を使って if (value == null) と判定する。"
          ]
        },
        "source": "4章 問題PDF p.230 / 4章 解説PDF p.289"
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
          "summary": "record Data(String value) では String value() アクセサが自動生成される。一方、Testには default void value() があるため、同名メソッドの戻り値型が一致せずコンパイルエラー。",
          "points": [
            "recordがinterfaceを実装する場合、自動生成アクセサもメソッド衝突の対象になる。"
          ]
        },
        "source": "4章 問題PDF p.230 / 4章 解説PDF p.294"
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
          "summary": "Child内で name を使用しているが、Childには name が宣言されていない。継承元の Parent に name フィールドがなければコンパイルエラーになる。",
          "points": [
            "helloメソッドはChild側で定義されているためParentに必須ではない。",
            "コンストラクタは継承されない。"
          ]
        },
        "source": "5章 問題PDF p.298 / 5章 解説PDF p.317",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Child extends Parent {\n    Child() {\n        name = \"java\";\n    }\n    void hello() {\n        System.out.println(\"hello, \" + name);\n    }\n}"
          }
        ]
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
          "summary": "継承してもコンストラクタは引き継がれない。privateメンバもサブクラスから直接アクセスできない。",
          "points": [
            "デフォルトアクセスは同一パッケージ内だけ。別パッケージのサブクラスからはアクセスできない。",
            "protectedは同一パッケージだけでなく、別パッケージでも継承関係があればアクセス可能。"
          ]
        },
        "source": "5章 問題PDF p.298 / 5章 解説PDF p.318"
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
          "summary": "インタフェースの抽象メソッドは暗黙的に public。抽象クラスは未実装メソッドを残せるため、インタフェースのメソッドを必ず実装する必要はない。",
          "points": [
            "インタフェースのフィールドは public static final の定数として定義できる。",
            "クラスは複数のインタフェースをimplementsできる。",
            "インタフェース同士はextendsで継承できる。"
          ]
        },
        "source": "5章 問題PDF p.299 / 5章 解説PDF p.319"
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
          "summary": "インタフェース内でメソッド本体を持たせるには default などが必要。単なる抽象メソッドに本体を書くとコンパイルエラーになる。",
          "points": [
            "インタフェースの抽象メソッドは本体を持てない。",
            "defaultメソッドなら実装を持てる。"
          ]
        },
        "source": "5章 問題PDF p.299 / 5章 解説PDF p.320",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface A {\n    void sample() {\n        System.out.println(\"sample\");\n    }\n}\npublic class B implements A { }\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        a.sample();\n    }\n}"
          }
        ]
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
          "summary": "インタフェースのdefaultメソッドで、Objectクラス由来のtoStringを再定義することはできないため、Aインタフェースでコンパイルエラーになる。",
          "points": [
            "クラスB側でtoStringをpublicにオーバーライドすること自体は可能。"
          ]
        },
        "source": "5章 問題PDF p.300 / 5章 解説PDF p.300",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface A {\n    @Override\n    default String toString() {\n        return \"A\";\n    }\n}\npublic class B implements A {\n    @Override\n    public String toString() {\n        return \"B\";\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch05-q06",
        "number": 6,
        "type": "single",
        "selectCount": 1,
        "title": "スーパーインタフェースのdefaultメソッド呼び出し",
        "prompt": "Cクラスの空欄に入り、Hello、Javaの順に表示するコードとして正しいものを選びなさい。",
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
          "summary": "Cは直接Aをimplementsしておらず、Bをimplementsしている。設問の選択肢には正しく呼び出せる形がないため、すべて誤り。",
          "points": [
            "インタフェースのdefaultメソッド呼び出しは、直接のスーパーインタフェース名.super.メソッド名() の形が基本。"
          ]
        },
        "source": "5章 問題PDF p.301 / 5章 解説PDF p.301",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface A {\n    default void sample() {\n        System.out.println(\"Hello\");\n    }\n}\npublic interface B extends A { }\npublic class C implements B {\n    @Override\n    public void sample() {\n        // insert code here\n        System.out.println(\"Java\");\n    }\n}"
          }
        ]
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
          "summary": "MainはAとBの両方を実装しており、同じシグネチャのdefaultメソッドtestが衝突する。どちらを使うかを明示的にオーバーライドしないためコンパイルエラー。",
          "points": [
            "複数インタフェースのdefaultメソッド衝突は、実装クラス側で解決する必要がある。"
          ]
        },
        "source": "5章 問題PDF p.302 / 5章 解説PDF p.302",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface A {\n    default void test() { System.out.println(\"A\"); }\n}\npublic interface B {\n    default void test() { System.out.println(\"B\"); }\n}\npublic class Main implements A, B {\n    public static void main(String[] args) {\n        new Main().test();\n    }\n}"
          }
        ]
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
          "summary": "抽象クラスはインスタンス化できず、抽象クラスを継承した抽象クラスも定義できる。公開フィールドはサブクラスからアクセス可能。",
          "points": [
            "抽象クラスの具象メソッドはオーバーライドできる。",
            "抽象メソッドは最初の具象サブクラスが実装すればよい。抽象サブクラスでは未実装のまま残せる。"
          ]
        },
        "source": "5章 問題PDF p.302 / 5章 解説PDF p.302"
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
          "summary": "AbstractSample型の参照でも実体はConcreteSampleなので、sample内のtest呼び出しはConcreteSample.testに動的に解決される。結果はA、B、C。",
          "points": [
            "抽象メソッドはサブクラスの実装が実行される。"
          ]
        },
        "source": "5章 問題PDF p.303 / 5章 解説PDF p.303",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "abstract class AbstractSample {\n    public void sample() {\n        System.out.println(\"A\");\n        test();\n        System.out.println(\"C\");\n    }\n    protected abstract void test();\n}\nclass ConcreteSample extends AbstractSample {\n    protected void test() { System.out.println(\"B\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        AbstractSample s = new ConcreteSample();\n        s.sample();\n    }\n}"
          }
        ]
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
          "summary": "オーバーライドではメソッドシグネチャが同じである必要がある。引数の型・数・順番が一致しなければならない。",
          "points": [
            "戻り値型は同じ、または共変戻り値としてサブクラス型にできる。",
            "抽象メソッドも実装時にオーバーライドする。"
          ]
        },
        "source": "5章 問題PDF p.304 / 5章 解説PDF p.304"
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
          "summary": "オーバーライドではアクセス権を狭くできない。protectedより広いpublicは指定できる。",
          "points": [
            "privateやデフォルトアクセスはprotectedより狭いため不可。"
          ]
        },
        "source": "5章 問題PDF p.304 / 5章 解説PDF p.304",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Sample {\n    protected void hello() {\n        System.out.println(\"hello\");\n    }\n}"
          }
        ]
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
          "summary": "フィールドはオーバーライドされず、参照変数の型で決まる。bはA型なのでb.valはAのval。printもAで定義されており、Aのvalを出力する。",
          "points": [
            "メソッドは実体の型で動的に選択されるが、フィールドは参照型で静的に決まる。"
          ]
        },
        "source": "5章 問題PDF p.304 / 5章 解説PDF p.304",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "class A {\n    String val = \"A\";\n    void print() { System.out.print(val); }\n}\nclass B extends A {\n    String val = \"B\";\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new A();\n        A b = new B();\n        System.out.print(a.val);\n        System.out.print(b.val);\n        a.print();\n        b.print();\n    }\n}"
          }
        ]
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
          "summary": "EngineerはEmployeeを継承し、Employeeのpublic workメソッドを持っている。これによりWorkerのworkを満たすため、Worker型で扱えてworkを実行できる。",
          "points": [
            "インタフェースの実装メソッドは、継承したpublicメソッドでも満たせる。"
          ]
        },
        "source": "5章 問題PDF p.305 / 5章 解説PDF p.305",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "interface Worker { void work(); }\nclass Employee {\n    public void work() { System.out.println(\"work\"); }\n}\nclass Engineer extends Employee implements Worker { }\npublic class Main {\n    public static void main(String[] args) {\n        Worker worker = new Engineer();\n        worker.work();\n    }\n}"
          }
        ]
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
          "summary": "aの型はWorkerであり、Workerに定義されているのはworkだけ。実体がEngineerでも、Worker型の変数からcreateは呼び出せない。",
          "points": [
            "呼び出せるメソッドは参照変数の型で決まる。",
            "b.work() と c.report() は型上利用できる。"
          ]
        },
        "source": "5章 問題PDF p.306 / 5章 解説PDF p.306",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface Worker { void work(); }\nclass Employee implements Worker {\n    public void work() { System.out.println(\"work\"); }\n    public void report() { System.out.println(\"report\"); }\n}\nclass Engineer extends Employee {\n    public void create() { System.out.println(\"create future\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Worker a = new Engineer();\n        Employee b = new Engineer();\n        Engineer c = new Engineer();\n        a.create();\n        b.work();\n        c.report();\n    }\n}"
          }
        ]
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
          "summary": "BとCはA型として扱える。Aはインタフェースなのでnew A()は不可。DはAを実装していないためA[]に入れられない。",
          "points": [
            "インタフェースはインスタンス化できない。",
            "配列の要素型と互換性がないインスタンスは初期化子に入れられない。"
          ]
        },
        "source": "5章 問題PDF p.307 / 5章 解説PDF p.307",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface A { }\npublic class B implements A { }\npublic class C extends B { }\npublic class D { }\npublic class Main {\n    public static void main(String[] args) {\n        A[] array = {\n            new B(),\n            new C(),\n            new A(),\n            new D()\n        };\n    }\n}"
          }
        ]
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
          "summary": "aの実体はBだが、変数の型はA。B型の変数に代入してhelloを呼ぶには、Bへ明示的にダウンキャストする必要がある。",
          "points": [
            "A型のままではB独自のhelloは呼び出せない。"
          ]
        },
        "source": "5章 問題PDF p.308 / 5章 解説PDF p.308",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "class A { }\nclass B extends A {\n    void hello() { System.out.println(\"hello\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        // insert code here\n        b.hello();\n    }\n}"
          }
        ]
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
          "summary": "aの実体はAであり、Bではない。B b = (B) a; はコンパイルは通るが、実行時にClassCastExceptionが発生する。",
          "points": [
            "キャスト式はコンパイル時の型チェックを通しても、実体が互換性を持たなければ実行時例外になる。"
          ]
        },
        "source": "5章 問題PDF p.309 / 5章 解説PDF p.309",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "class A { void hello() { System.out.println(\"A\"); } }\nclass B extends A { void hello() { System.out.println(\"B\"); } }\npublic class Main {\n    public static void main(String[] args) {\n        A a = new A();\n        B b = (B) a;\n        b.hello();\n    }\n}"
          }
        ]
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
          "summary": "フィールドnumに引数numを代入するにはthis.num = numが正しい。setNum(num)を呼び出しても同じ結果になる。",
          "points": [
            "num = num は引数自身への代入であり、フィールドは変更されない。",
            "Javaにthis->という構文はない。",
            "super.setNumは親クラスがないため使えない。"
          ]
        },
        "source": "5章 問題PDF p.310 / 5章 解説PDF p.310",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "class Sample {\n    private int num;\n    public Sample(int num) {\n        // insert code here\n    }\n    public int getNum() { return num; }\n    public void setNum(int num) { this.num = num; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample(10);\n        System.out.println(s.getNum());\n    }\n}"
          }
        ]
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
          "summary": "ChildのnameとParentのnameは別フィールド。child.nameへの代入はChild側のnameを変更するが、Parent.getNameはParent側のnameを返すためnull。",
          "points": [
            "フィールドはオーバーライドされず、同名フィールドは隠蔽になる。"
          ]
        },
        "source": "5章 問題PDF p.311 / 5章 解説PDF p.311",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "class Parent {\n    String name;\n    String getName() { return this.name; }\n}\npublic class Child extends Parent {\n    String name;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Child child = new Child();\n        child.name = \"sample\";\n        System.out.println(child.getName());\n    }\n}"
          }
        ]
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
          "summary": "Bのコンストラクタ実行前に、暗黙的にsuper()でAのコンストラクタが呼ばれる。よってA、Bの順に表示される。",
          "points": [
            "サブクラスのインスタンス生成では、まずスーパークラスの初期化が行われる。"
          ]
        },
        "source": "5章 問題PDF p.312 / 5章 解説PDF p.312",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "class A {\n    public A() { System.out.println(\"A\"); }\n}\nclass B extends A {\n    public B() { System.out.println(\"B\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n    }\n}"
          }
        ]
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
          "summary": "new Child(\"D\") → Child(String) → this() → Child() → super(\"B\") → Parent(String) → this() → Parent() の順に進む。表示順はA、B、C、D。",
          "points": [
            "this()またはsuper()はコンストラクタの先頭で一度だけ呼び出せる。"
          ]
        },
        "source": "5章 問題PDF p.313 / 5章 解説PDF p.313",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "class Parent {\n    public Parent() { System.out.println(\"A\"); }\n    public Parent(String val) {\n        this();\n        System.out.println(val);\n    }\n}\nclass Child extends Parent {\n    public Child() {\n        super(\"B\");\n        System.out.println(\"C\");\n    }\n    public Child(String val) {\n        this();\n        System.out.println(val);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Child(\"D\");\n    }\n}"
          }
        ]
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
          "summary": "インタフェースのprivateメソッドは実装本体を持つ必要がある。private void b() { ... } は正しい。",
          "points": [
            "private抽象メソッドは不可。",
            "private defaultという組み合わせも不可。"
          ]
        },
        "source": "5章 問題PDF p.314 / 5章 解説PDF p.314",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public interface Sample {\n    // insert code here\n}"
          }
        ]
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
          "summary": "finalはクラス、メソッド、フィールドに付けられる。abstractクラスやインタフェースには付けられない。",
          "points": [
            "final classは継承不可。",
            "final methodはオーバーライド不可。",
            "final fieldは再代入不可。"
          ]
        },
        "source": "5章 問題PDF p.314 / 5章 解説PDF p.314"
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
          "summary": "継承可能なクラスを制限するにはsealedとpermitsを使う。permitsだけでは使えない。Javaのクラスは複数クラスをextendsできない。",
          "points": [
            "sealed class Sample permits A, B が正しい形。"
          ]
        },
        "source": "5章 問題PDF p.315 / 5章 解説PDF p.315"
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
          "summary": "sealedクラスの直接サブクラスはfinal、sealed、non-sealedのいずれかで修飾する必要がある。ただしsealedにする場合はさらに継承先を指定する必要があり、この選択肢だけでは不十分。",
          "points": [
            "finalは継承打ち切り。",
            "non-sealedは以降の継承制限を解除する。"
          ]
        },
        "source": "5章 問題PDF p.315 / 5章 解説PDF p.315",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public sealed class Sample permits A {\n    // something code\n}"
          }
        ]
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
          "summary": "sealedインタフェースTestがpermits Aとしているため、直接実装するAはfinal、sealed、non-sealedのいずれかで修飾する必要がある。Aはabstractのみなのでコンパイルエラー。",
          "points": [
            "sealedインタフェースを直接実装するクラスにも継承制限の指定が必要。"
          ]
        },
        "source": "5章 問題PDF p.316 / 5章 解説PDF p.316",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public sealed interface Test permits A {\n    void sample();\n}\npublic abstract class A implements Test {\n    abstract void hello();\n}\npublic final class B extends A {\n    @Override void hello() { System.out.println(\"hello\"); }\n    @Override public void sample() { System.out.println(\"sample\"); }\n}\npublic class Sample {\n    public static void main(String[] args) {\n        Test t = new B();\n        t.sample();\n        A a = (A) t;\n        a.hello();\n    }\n}"
          }
        ]
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
          "summary": "要素数0の配列に array[0] = 10 を実行するため ArrayIndexOutOfBoundsException が発生し、対応するcatchで処理されて「error」が表示される。",
          "points": [
            "例外発生後、tryブロック内の残りの処理は実行されない。",
            "catchで処理されるため、プログラムは異常終了しない。"
          ]
        },
        "source": "6章 問題PDF p.374 / 6章 解説PDF p.373",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] array = {};\n            array[0] = 10;\n            System.out.println(\"finish\");\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"error\");\n        }\n    }\n}"
          }
        ]
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
          "summary": "起動パラメータなしでも args は null ではなく要素数0のString配列。args.length == 0 がtrueなのでAを表示し、例外は発生しない。最後にfinallyでCを表示する。",
          "points": [
            "mainのargsは、引数なし実行時も空配列になる。",
            "finallyは例外の有無にかかわらず実行される。"
          ]
        },
        "source": "6章 問題PDF p.374 / 6章 解説PDF p.374",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            if (args.length == 0) {\n                System.out.println(\"A\");\n            }\n        } catch (NullPointerException e) {\n            System.out.println(\"B\");\n        } finally {\n            System.out.println(\"C\");\n        }\n    }\n}"
          }
        ]
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
          "summary": "SampleExceptionをcatchした後に、そのサブクラスであるSubSampleExceptionをcatchしているため、後続のcatchが到達不能になりコンパイルエラーになる。",
          "points": [
            "複数catchは、サブクラス側から先に並べる。",
            "スーパークラスを先にcatchすると、サブクラスのcatchには到達できない。"
          ]
        },
        "source": "6章 問題PDF p.375 / 6章 解説PDF p.375",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class SampleException extends Exception {}\npublic class SubSampleException extends SampleException {}\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            sample();\n            sub();\n        } catch (SampleException e) {\n            System.out.println(\"A\");\n        } catch (SubSampleException e) {\n            System.out.println(\"B\");\n        }\n    }\n    private static void sample() throws SampleException {\n        throw new SampleException();\n    }\n    private static void sub() throws SubSampleException {\n        throw new SubSampleException();\n    }\n}"
          }
        ]
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
          "summary": "try-catch-finallyの構文順序は変更できない。try-finally-catchの順に書くことはできないためコンパイルエラーになる。",
          "points": [
            "catchはtryの直後、またはfinallyの前に置く。",
            "finallyの後にcatchを書くことはできない。"
          ]
        },
        "source": "6章 問題PDF p.376 / 6章 解説PDF p.376",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            Object obj = null;\n            System.out.println(obj.toString());\n            System.out.println(\"A\");\n        } finally {\n            System.out.println(\"B\");\n        } catch (NullPointerException e) {\n            System.out.println(\"C\");\n        }\n    }\n}"
          }
        ]
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
          "summary": "test(null)でNullPointerExceptionが発生し、catchで戻り値Aが決まる。しかしreturnで呼び出し元に戻る前にfinallyが実行されBを表示し、その後main側のprintlnでAが表示される。",
          "points": [
            "finallyはcatch内returnより前に実行される。",
            "finally内にreturnがない場合、catchで決まった戻り値は維持される。"
          ]
        },
        "source": "6章 問題PDF p.377 / 6章 解説PDF p.377",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(test(null));\n    }\n    private static String test(Object obj) {\n        try {\n            System.out.println(obj.toString());\n        } catch (NullPointerException e) {\n            return \"A\";\n        } finally {\n            System.out.println(\"B\");\n        }\n        return \"C\";\n    }\n}"
          }
        ]
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
          "summary": "catchでreturn 10が実行されようとするが、finallyのreturn 20が後から実行され、戻り値を上書きする。",
          "points": [
            "finallyでreturnを書くと、それ以前のreturnを上書きする。",
            "試験ではfinallyのreturnは強いひっかけポイント。"
          ]
        },
        "source": "6章 問題PDF p.378 / 6章 解説PDF p.378",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        int result = sample();\n        System.out.println(result);\n    }\n    private static int sample() {\n        try {\n            throw new RuntimeException();\n        } catch (RuntimeException e) {\n            return 10;\n        } finally {\n            return 20;\n        }\n    }\n}"
          }
        ]
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
          "summary": "return val の時点で戻り値用の値は20として確定する。finallyでvalに10加算しても、プリミティブ型の戻り値には反映されない。",
          "points": [
            "return式の評価後にfinallyが実行される。",
            "finallyでローカル変数を書き換えても、確定済みの戻り値は変わらない。"
          ]
        },
        "source": "6章 問題PDF p.379 / 6章 解説PDF p.378",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(sample());\n    }\n    private static int sample() {\n        int val = 10;\n        try {\n            val += 10;\n            return val;\n        } finally {\n            val += 10;\n        }\n    }\n}"
          }
        ]
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
          "summary": "try-catch-finallyでは、tryとfinallyは1つだけ。catchは複数記述でき、省略も可能。ただしcatchを省略するならfinallyが必要。",
          "points": [
            "tryのみは不可。",
            "catchを省略したtry-finallyは可能。"
          ]
        },
        "source": "6章 問題PDF p.380 / 6章 解説PDF p.379"
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
          "summary": "例外は最も近い対応catchである内側catchに捕捉されDが表示される。その後、内側finallyでE、外側finallyでGが表示される。",
          "points": [
            "ネストしたtryでは、まず内側の対応catchを確認する。",
            "finallyは内側から外側へ実行される。"
          ]
        },
        "source": "6章 問題PDF p.381 / 6章 解説PDF p.380",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            try {\n                int[] array = {1, 2, 3};\n                System.out.println(array[3]);\n            } catch (ArrayIndexOutOfBoundsException e) {\n                System.out.println(\"D\");\n            } finally {\n                System.out.println(\"E\");\n            }\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"F\");\n        } finally {\n            System.out.println(\"G\");\n        }\n    }\n}"
          }
        ]
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
          "summary": "独自の例外クラスは、基本的にExceptionクラスのサブクラスとして作成するのが適切。RuntimeExceptionに限定する必要はない。",
          "points": [
            "Throwableのサブクラスであることは必要だが、例外として作るならExceptionを継承する。",
            "Errorはプログラムで対処しない重大なトラブルを表す。"
          ]
        },
        "source": "6章 問題PDF p.382 / 6章 解説PDF p.383"
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
          "summary": "SampleExceptionはExceptionを継承するチェック例外なのでthrows宣言が必要。TestExceptionはRuntimeExceptionを継承する非チェック例外なので、宣言してもしなくてもよい。",
          "points": [
            "複数の例外をthrowsに書く場合はカンマ区切り。",
            "非チェック例外はthrows宣言を強制されない。"
          ]
        },
        "source": "6章 問題PDF p.383 / 6章 解説PDF p.383",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class SampleException extends Exception {}\npublic class TestException extends RuntimeException {}\n\npublic class Sample {\n    public void hello(String name) /* ここに入る */ {\n        if (name == null) {\n            throw new SampleException();\n        }\n        if (\"\".equals(name)) {\n            throw new TestException();\n        }\n    }\n}"
          }
        ]
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
          "summary": "Errorは原則としてプログラムで回復を期待しない重大なトラブルだが、catchで捕捉するコード自体は書ける。したがって「例外処理を記述できない」は誤り。",
          "points": [
            "Errorはthrows宣言を強制されない。",
            "OutOfMemoryErrorやStackOverflowErrorなどが代表例。"
          ]
        },
        "source": "6章 問題PDF p.384 / 6章 解説PDF p.384"
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
          "summary": "起動パラメータなしの場合、argsは要素数0の配列。args[0]へアクセスすると配列範囲外アクセスになり、ArrayIndexOutOfBoundsExceptionが発生する。",
          "points": [
            "args自体はnullではない。",
            "存在しない要素にアクセスするため、NullPointerExceptionではなく配列範囲外例外。"
          ]
        },
        "source": "6章 問題PDF p.384 / 6章 解説PDF p.384",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0].length());\n    }\n}"
          }
        ]
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
          "summary": "空のArrayListに対してlist.get(0)を呼び出すため、IndexOutOfBoundsExceptionが発生する。",
          "points": [
            "ArrayIndexOutOfBoundsExceptionは配列用。",
            "StringIndexOutOfBoundsExceptionは文字列用。",
            "ListIndexOutOfBoundsExceptionという標準例外はない。"
          ]
        },
        "source": "6章 問題PDF p.385 / 6章 解説PDF p.385",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.get(0);\n    }\n}"
          }
        ]
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
          "summary": "A.equalsの中で引数objをAへキャストしている。実際に渡されるのはBのインスタンスであり、AとBに継承関係がないためClassCastExceptionが発生する。",
          "points": [
            "equalsをオーバーライドするときは、通常instanceofで型確認してからキャストする。"
          ]
        },
        "source": "6章 問題PDF p.386 / 6章 解説PDF p.385",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class A {\n    private int num;\n    public A(int num) { this.num = num; }\n    public boolean equals(Object obj) {\n        A a = (A) obj;\n        return this.num == a.num;\n    }\n}\npublic class B {\n    private int num;\n    public B(int num) { this.num = num; }\n    public boolean equals(Object obj) {\n        B b = (B) obj;\n        return this.num == b.num;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new A(10);\n        B b = new B(10);\n        System.out.println(a.equals(b));\n    }\n}"
          }
        ]
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
          "summary": "strはnullなので、str.equals(\"\")の呼び出し時にNullPointerExceptionが発生する。",
          "points": [
            "nullに対してインスタンスメソッドは呼び出せない。",
            "安全に比較するなら \"\".equals(str) の形にする。"
          ]
        },
        "source": "6章 問題PDF p.387 / 6章 解説PDF p.386",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        String str = null;\n        if (str.equals(\"\")) {\n            System.out.println(\"blank\");\n        } else {\n            System.out.println(\"null\");\n        }\n    }\n}"
          }
        ]
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
          "summary": "mainメソッドが自分自身を呼び続ける再帰になっている。スタック領域を使い切るとStackOverflowErrorが発生する。",
          "points": [
            "StackOverflowErrorはErrorの一種。",
            "無限再帰はコンパイルエラーではなく実行時のスタック枯渇につながる。"
          ]
        },
        "source": "6章 問題PDF p.387 / 6章 解説PDF p.386",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class Main {\n    public static void main(String[] args) {\n        main(args);\n    }\n}"
          }
        ]
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
          "summary": "マルチキャッチでは、例外型を縦棒1本「|」で区切って列挙する。",
          "points": [
            "論理演算子の||や&&ではない。",
            "変数名は最後に1つだけ書く。"
          ]
        },
        "source": "6章 問題PDF p.388 / 6章 解説PDF p.388"
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
          "summary": "RuntimeExceptionはExceptionのサブクラス。マルチキャッチでは継承関係にある例外型を同時に指定できない。",
          "points": [
            "継承関係がある場合はスーパークラス側だけで捕捉できる。",
            "別々のcatchにする場合も、サブクラスを先に書く必要がある。"
          ]
        },
        "source": "6章 問題PDF p.388 / 6章 解説PDF p.389"
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
          "summary": "try-with-resourcesの主目的は、例外処理そのものではなく、リソースの閉じ忘れを防ぐこと。catchやfinallyは省略可能。",
          "points": [
            "通常のtry文ではcatchまたはfinallyが必要。",
            "try-with-resourcesではリソース管理が構文に組み込まれている。"
          ]
        },
        "source": "6章 問題PDF p.389 / 6章 解説PDF p.390"
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
          "summary": "try-with-resourcesで扱えるのはAutoCloseableまたはCloseableを実装したクラス。CloseableはAutoCloseableのサブインタフェース。",
          "points": [
            "独自リソースを作る場合はAutoCloseableを実装すればよい。",
            "closeメソッドが自動呼び出しされる。"
          ]
        },
        "source": "6章 問題PDF p.390 / 6章 解説PDF p.391"
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
          "summary": "tryのカッコ内で直接生成・宣言する形は正しい。また、tryの前で宣言済みの実質的finalなリソース変数も指定できる。",
          "points": [
            "リソース変数はfinalまたは実質的finalである必要がある。",
            "tryブロック内外でリソース変数を再代入すると実質的finalではなくなる。"
          ]
        },
        "source": "6章 問題PDF p.391 / 6章 解説PDF p.392"
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
          "summary": "try-with-resourcesのリソースは、宣言した順番とは逆順にcloseされる。A、B、Cの順に指定すれば、C、B、Aの順にcloseされる。",
          "points": [
            "複数リソースはセミコロンで区切る。",
            "リソースのクローズ順は試験で頻出。"
          ]
        },
        "source": "6章 問題PDF p.392 / 6章 解説PDF p.393",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "try (A a = new A(); B b = new B(); C c = new C()) {\n    // do something\n}\n// close順は C -> B -> A"
          }
        ]
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
          "summary": "tryブロックを抜けるタイミングでまずリソースがcloseされ、その後catch、最後にfinallyが実行される。",
          "points": [
            "例外が起きない場合も、tryブロック終了時にcloseされる。",
            "try-with-resourcesにfinallyを付けても、closeはfinallyより先。"
          ]
        },
        "source": "6章 問題PDF p.393 / 6章 解説PDF p.396"
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
          "summary": "tryブロック内でExceptionが発生し、その後closeでもRuntimeExceptionが発生する。close側の例外は抑制された例外となり、catchされる主例外はtryブロック内のExceptionなので、ExceptionのcatchでBが表示される。",
          "points": [
            "try-with-resourcesでは、try内の例外が主例外になる。",
            "close時の例外はsuppressedとして主例外に保持される。"
          ]
        },
        "source": "6章 問題PDF p.393 / 6章 解説PDF p.397",
        "codeBlocks": [
          {
            "title": "コード",
            "code": "public class TroubleResource implements AutoCloseable {\n    @Override\n    public void close() throws Exception {\n        throw new RuntimeException(\"trouble\");\n    }\n}\npublic class TroubleMaker {\n    public static void main(String[] args) {\n        try (TroubleResource a = new TroubleResource()) {\n            throw new Exception();\n        } catch (RuntimeException e) {\n            System.out.println(\"A\");\n        } catch (Exception e) {\n            System.out.println(\"B\");\n        }\n    }\n}"
          }
        ]
      }
    ],
    "ch07": [
      {
        "id": "ch07-q01",
        "number": 1,
        "type": "single",
        "selectCount": 1,
        "title": "デフォルトメソッドと起動パラメータ",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は B。論点は「デフォルトメソッドと起動パラメータ」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: デフォルトメソッドと起動パラメータ"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "1. 次のプログラムを確認してください。\n\npublic interface A {\n    boolean search(int[] data, int target);\n}\n\npublic interface B extends A {\n    @Override\n    default boolean search(int[] data, int target) {\n        int cnt = 0;\n        for (int i : data) {\n            if (i == target) {\n                cnt++;\n            }\n        }\n        return cnt > 0;\n    }\n}\n\npublic class C implements B {\n}\n\npublic class Sample {\n    public static void main(String... args) {\n        if (new C().search(\n                new int[]{1, 2, 3, 7, 9},\n                Integer.parseInt(args[0]))) {\n            System.out.println(\"A\");\n        } else {\n            System.out.println(\"B\");\n        }\n    }\n}\n\nこのプログラムを次のコマンドで実行したときの結果として、正しいものを選びなさい。（1つ選択）\n> java Sample 5 2"
          }
        ]
      },
      {
        "id": "ch07-q02",
        "number": 2,
        "type": "multiple",
        "selectCount": 2,
        "title": "別パッケージのimport宣言",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は A・E。論点は「別パッケージのimport宣言」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 別パッケージのimport宣言"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "2. 次のプログラムを確認してください。\n\npackage ex.p1;\npublic class A {\n}\n\npackage ex.p2;\npublic class B {\n}\n\n上記の2つのクラスを次のプログラムで利用するために必要なimport文として、正しいものを選択肢から選びなさい。（2つ選択）\n\npublic class C extends A {\n    public void sample() {\n        B b = new B();\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q03",
        "number": 3,
        "type": "single",
        "selectCount": 1,
        "title": "try-with-resourcesのクローズ順",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「c」 と表示される"
          },
          {
            "key": "B",
            "text": "「B」「Al の順に表示される c. 「cl「Al「B」 の順に表示される"
          },
          {
            "key": "D",
            "text": "『B」「Al「c」 の順に表示される"
          },
          {
            "key": "E",
            "text": "「cl「B」 TA) の順に表示される"
          },
          {
            "key": "F",
            "text": "F FAL (8) 「c」 の順に表示される 402"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "正解は D。論点は「try-with-resourcesのクローズ順」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: try-with-resourcesのクローズ順"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 3. 次のプログラムをコンパイル 、 実行したとさの結果として 、 正しいも\nを選びなさい。(1 つ選択 )\n\n1. public class A implements AutoCloseable {\n2. private String name;\n3 public A(String name) {\n4, this.name = name;\n5. }\n6. public void close() throws Exception {\nif System.out.println(name) ;\n8. }\n9. }\n1. public class Sample {\n2. public static void main(String[] args)\n3. throws Exception {\n4, try (A a = new A(\"A\");\n55 A b = new A(\"B\")) $\n6. 3 finally {\n7. System.out.println(\"C\");\n8. }\n9. }\n10. }\n\nA. 「c」 と表示される\n\nB. 「B」「Al の順に表示される\n\nc. 「cl「Al「B」 の順に表示される\n\nD. 『B」「Al「c」 の順に表示される\n\nE. 「cl「B」 TA) の順に表示される\n\nFF FAL (8) 「c」 の順に表示される\n\n402"
          }
        ]
      },
      {
        "id": "ch07-q04",
        "number": 4,
        "type": "single",
        "selectCount": 1,
        "title": "String#internと同一性",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "TA [re] と表示される"
          },
          {
            "key": "B",
            "text": "TA] と表示される"
          },
          {
            "key": "C",
            "text": "TA] [BJ fc) [oJ fel fr) と表示される"
          },
          {
            "key": "D",
            "text": "[Al [D] ERMANS 403"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "正解は A。論点は「String#internと同一性」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: String#internと同一性"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "| 4. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n\n1. public class Sample {\n2. public static void main(String[] args) {\n3.\n4. String a = new String(\"sample\");\n5. String b = a;\n6. String c = a.intern();\n7. String d = \"sample\";\n8.\n\n9. if (a == b) { 8\n10. System.out.println(\"A\"); 問\n11. } 題\n12. if (a ==c) { \n13. System.out.println(\"B\"); 問\n14. } |\n15. if (a == d) {\n16. System.out.println(\"C\");\n7. }\n18. if (b == cc) {\n19. System.out.println(\"D\");\n20. }\n21. if (b == d) {\n22. System.out.println(\"E\");\n23. }\n24. if (c == d) f{\n2s. System.out.println(\"F\");\n26. }\n27. }\n28. }\n\nA. TA [re] と表示される\n\nB. TA] と表示される\n\nCc. TA] [BJ fc) [oJ fel fr) と表示される\n\nD. [Al [D] ERMANS\n\n403"
          }
        ]
      },
      {
        "id": "ch07-q05",
        "number": 5,
        "type": "multiple",
        "selectCount": 2,
        "title": "クラス宣言の修飾子",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は E・F。論点は「クラス宣言の修飾子」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: クラス宣言の修飾子"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "5. 次のクラスのサブクラスとして、正しいものを選びなさい。（2つ選択）\n\npublic class A {\n}\n\nA. static class B extends A {}\nB. protected class B extends A {}\nC. sealed class B extends A {}\nD. non-sealed class B extends A {}\nE. public class B extends A {}\nF. final class B extends A {}\nG. private class B extends A {}"
          }
        ]
      },
      {
        "id": "ch07-q06",
        "number": 6,
        "type": "single",
        "selectCount": 1,
        "title": "varが使えない場所",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "正しくコンパイルされ 、 実行すると 10 が表示される B, 正しくコンパイルされ 、 実行すると 20 が表示される C (2) の行でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "public class C extends A {} a"
          },
          {
            "key": "C",
            "text": "public class B extends A {3 ~"
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
            "text": "(5) の行で NumberFormatException がスローされる | [] 7% 次のクラスのサブクラスとして 、 正しいものを選びなさい。(2 つ選択 ) E~ sealed class A permits B, C {"
          },
          {
            "key": "G",
            "text": "public final class D extends A {} 回 3. wossarynrsicco TF ry VensaMAsENTTD. (29 選択 )"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": {
          "summary": "正解は E。論点は「varが使えない場所」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: varが使えない場所"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "L[] 6. 次のプログラムをコンパイル 、 実行したとさきの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n\n1. public class A {\n\n2. private var num = 10; // (4)\n3, public A(String num) {\n\n4, var var = Integer.parseInt(num); // (2)\n5. this.num = var; ll (3)\n6. }\n\n7. public void print() {\n\n8. int var = num; II (4)\n9: System.out.println(var); // (8)\n10. }\nha\n\n1. public class Sample {\n\n2. public static void main(String[] args) {\n\n3. new A(\"20\").print();\n\n4, }\n\n5. }\n\nA. 正しくコンパイルされ 、 実行すると 10 が表示される\nB, 正しくコンパイルされ 、 実行すると 20 が表示される\nC (2) の行でコンパイルエラーが発生する\nD. (3) の行で ClassCastException がスローされる\nE. (4) の行でコンパイルエラーが発生する\nFT (5) の行で NumberFormatException がスローされる\n| [] 7% 次のクラスのサブクラスとして 、 正しいものを選びなさい。(2 つ選択 )\nE~ sealed class A permits B, C {\nA. public non-sealed class D extends A {3 \nB. public class C extends A {} a\nC. public class B extends A {3 ~\nD. public abstract class C extends A {}\nE. public non-sealed class C extends A $3\nSE: E public final class B extends A {}\nG. public final class D extends A {}\n回 3. wossarynrsicco TF ry VensaMAsENTTD. (29\n選択 )\n= A. java.lang.ArrayIndexOutOfBoundsException\n— B. java. lang.ClassCastException\ni = Be: C.  java.lang.Exception\n'a eae = _-—*D«z-~—Ssjava.lang.ArithmeticException\n— ———S*&SSCsjava. io. 10Exception\no a rig) FE java.lang.NumberFormatException\n4 ff  GO java.lang.RuntimeException\n4 er me st"
          }
        ]
      },
      {
        "id": "ch07-q07",
        "number": 7,
        "type": "multiple",
        "selectCount": 2,
        "title": "sealedクラスのサブクラス",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "正しくコンパイルされ 、 実行すると 10 が表示される B, 正しくコンパイルされ 、 実行すると 20 が表示される C (2) の行でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "public class C extends A {} a"
          },
          {
            "key": "C",
            "text": "public class B extends A {3 ~"
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
            "text": "(5) の行で NumberFormatException がスローされる | [] 7% 次のクラスのサブクラスとして 、 正しいものを選びなさい。(2 つ選択 ) E~ sealed class A permits B, C {"
          },
          {
            "key": "G",
            "text": "public final class D extends A {} 回 3. wossarynrsicco TF ry VensaMAsENTTD. (29 選択 )"
          }
        ],
        "answer": [
          "E",
          "F"
        ],
        "explanation": {
          "summary": "正解は E・F。論点は「sealedクラスのサブクラス」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: sealedクラスのサブクラス"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "A. 正しくコンパイルされ 、 実行すると 10 が表示される\nB, 正しくコンパイルされ 、 実行すると 20 が表示される\nC (2) の行でコンパイルエラーが発生する\nD. (3) の行で ClassCastException がスローされる\nE. (4) の行でコンパイルエラーが発生する\nFT (5) の行で NumberFormatException がスローされる\n| [] 7% 次のクラスのサブクラスとして 、 正しいものを選びなさい。(2 つ選択 )\nE~ sealed class A permits B, C {\nA. public non-sealed class D extends A {3 \nB. public class C extends A {} a\nC. public class B extends A {3 ~\nD. public abstract class C extends A {}\nE. public non-sealed class C extends A $3\nSE: E public final class B extends A {}\nG. public final class D extends A {}\n回 3. wossarynrsicco TF ry VensaMAsENTTD. (29\n選択 )\n= A. java.lang.ArrayIndexOutOfBoundsException\n— B. java. lang.ClassCastException\ni = Be: C.  java.lang.Exception\n'a eae = _-—*D«z-~—Ssjava.lang.ArithmeticException\n— ———S*&SSCsjava. io. 10Exception\no a rig) FE java.lang.NumberFormatException\n4 ff  GO java.lang.RuntimeException\n4 er me st"
          }
        ]
      },
      {
        "id": "ch07-q08",
        "number": 8,
        "type": "multiple",
        "selectCount": 2,
        "title": "チェック例外",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "正しくコンパイルされ 、 実行すると 10 が表示される B, 正しくコンパイルされ 、 実行すると 20 が表示される C (2) の行でコンパイルエラーが発生する"
          },
          {
            "key": "B",
            "text": "public class C extends A {} a"
          },
          {
            "key": "C",
            "text": "public class B extends A {3 ~"
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
            "text": "(5) の行で NumberFormatException がスローされる | [] 7% 次のクラスのサブクラスとして 、 正しいものを選びなさい。(2 つ選択 ) E~ sealed class A permits B, C {"
          },
          {
            "key": "G",
            "text": "public final class D extends A {} 回 3. wossarynrsicco TF ry VensaMAsENTTD. (29 選択 )"
          }
        ],
        "answer": [
          "C",
          "E"
        ],
        "explanation": {
          "summary": "正解は C・E。論点は「チェック例外」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: チェック例外"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "A. 正しくコンパイルされ 、 実行すると 10 が表示される\nB, 正しくコンパイルされ 、 実行すると 20 が表示される\nC (2) の行でコンパイルエラーが発生する\nD. (3) の行で ClassCastException がスローされる\nE. (4) の行でコンパイルエラーが発生する\nFT (5) の行で NumberFormatException がスローされる\n| [] 7% 次のクラスのサブクラスとして 、 正しいものを選びなさい。(2 つ選択 )\nE~ sealed class A permits B, C {\nA. public non-sealed class D extends A {3 \nB. public class C extends A {} a\nC. public class B extends A {3 ~\nD. public abstract class C extends A {}\nE. public non-sealed class C extends A $3\nSE: E public final class B extends A {}\nG. public final class D extends A {}\n回 3. wossarynrsicco TF ry VensaMAsENTTD. (29\n選択 )\n= A. java.lang.ArrayIndexOutOfBoundsException\n— B. java. lang.ClassCastException\ni = Be: C.  java.lang.Exception\n'a eae = _-—*D«z-~—Ssjava.lang.ArithmeticException\n— ———S*&SSCsjava. io. 10Exception\no a rig) FE java.lang.NumberFormatException\n4 ff  GO java.lang.RuntimeException\n4 er me st"
          }
        ]
      },
      {
        "id": "ch07-q09",
        "number": 9,
        "type": "multiple",
        "selectCount": 2,
        "title": "オーバーライドの条件",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "public B execute(Integer num) { return new B(num); 3"
          },
          {
            "key": "B",
            "text": "public 0bject execute(int num) { return new A(); 3"
          },
          {
            "key": "C",
            "text": "public A execute(int num) { return new B(num); 3"
          },
          {
            "key": "D",
            "text": "public B execute(int num) { return new B(num); | 3"
          },
          {
            "key": "E",
            "text": "public A execute(Integer num) { return new A(num); 3"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": {
          "summary": "正解は C・D。論点は「オーバーライドの条件」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: オーバーライドの条件"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 9. 次のプログラムを確認してください 。\n1. public class A {\n2. public int num;\n3. public A(int num) {\n4, this.num = num;\n5, }\n6. $\n1. public class B extends A {\n(26 public B(int num) {\n3. super (num) ;\n4. }\n5. {\n1. public interface Sample {\n2. A execute(int num);\n3, $\nSample インタフェースを実装したクラスに記述できるメソッドの定義\nとして 、 正しいものを選びなさい。(2 つ選択 )\nA. public B execute(Integer num) {\nreturn new B(num);\n}\nB. public 0bject execute(int num) {\nreturn new A();\n}\nGC. public A execute(int num) {\nreturn new B(num);\n}\nD. public B execute(int num) {\nreturn new B(num);\n| 3\nE. public A execute(Integer num) {\nreturn new A(num);\n}"
          }
        ]
      },
      {
        "id": "ch07-q10",
        "number": 10,
        "type": "single",
        "selectCount": 1,
        "title": "instanceofとポリモーフィズム",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "B",
            "text": "A.B の順に表示される"
          },
          {
            "key": "C",
            "text": "A.B.C の順に表示される"
          },
          {
            "key": "D",
            "text": "B が表示される"
          },
          {
            "key": "E",
            "text": "CC が表示される"
          },
          {
            "key": "F",
            "text": "コンパイルエラーが発生する"
          },
          {
            "key": "G",
            "text": "実行時に例外がスローされる es"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "正解は B。論点は「instanceofとポリモーフィズム」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: instanceofとポリモーフィズム"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]10. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1. public class A {\n2. public void execute() { B78\n3. System.out.println(\"A\");\n4.、 3 模\n5. } 4\n題\n1. public class B extends A { o\n2. private void test() { 問\n3. System.out.println(\"B\"); g\n4, }\n5. public void execute() {\n6. test();\n7 }\n8. }\n1, public class Main {\n2. public static void main(String[] args) {\n3. 0bject[] objects = {\n4. new A(), new B(), \"C\"\n5. }\n6. for (0bject obj : objects) {\n7. test(obj);\n8. }\n9. }\n10.\n11, private static void test(0bject obj) {\n12, if (obj instanceof A b) {\n13. b.execute();\n14. }\n15. }\n16. }\n407\n\n| A. 何も出力されない\nB. A.B の順に表示される\nC. A.B.C の順に表示される\nD. B が表示される\nE. CC が表示される\nF コンパイルエラーが発生する\nG. 実行時に例外がスローされる\nes"
          }
        ]
      },
      {
        "id": "ch07-q11",
        "number": 11,
        "type": "single",
        "selectCount": 1,
        "title": "スコープとフィールド更新",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は E。論点は「スコープとフィールド更新」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: スコープとフィールド更新"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "11. インスタンス変数 a, b, c, d の値を変更するメソッドはどれか。正しいものを選びなさい。（1つ選択）\n\npublic class Test {\n    int a, b, c, d;\n\n    void setA(int a) {\n        a = a;\n    }\n    void setB() {\n        this.b = b;\n    }\n    int setC() {\n        return c;\n    }\n    int setD(int d) {\n        d = d;\n        return d;\n    }\n    void setAll(int x) {\n        a = b = this.c = d = setD(x);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q12",
        "number": 12,
        "type": "single",
        "selectCount": 1,
        "title": "継承関係のコンストラクタ",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は C。論点は「継承関係のコンストラクタ」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 継承関係のコンストラクタ"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "12. 次のプログラムが、コンパイルエラーとなる理由として正しいものを選びなさい。（1つ選択）\n\npublic abstract class A {\n    private int id;\n    public A(int id) {\n        this.id = id;\n    }\n    void sample() {\n        System.out.println(\"A\");\n    }\n}\n\npublic class B extends A {\n    public void sample() {\n        System.out.println(\"B\");\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q13",
        "number": 13,
        "type": "single",
        "selectCount": 1,
        "title": "ポリモーフィズム",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "[Al [Bl [c] cRMANS"
          },
          {
            "key": "B",
            "text": "「Al が表示された後 、 例外がスローされる"
          },
          {
            "key": "C",
            "text": "「Al「B」「c」 と表示された後 、 例外がスローされる"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する = Pa54"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "正解は A。論点は「ポリモーフィズム」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: ポリモーフィズム"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]13. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1. public class A {\nee public void sample() {\n3. System.out.println(\"A\");\n4. }\n5. }\n1. public class B extends A {\n8. public void sample() {\n3. System.out.println(\"B\");\n4. }\n5. }\n※ 次ページに続く\n409\n\n1. public class C extends A {\n(Mk public void sample() {\nds System.out.println(\"C\");\n4. }\n5. }\n1. public class Main {\n2. public static void main(String[] args) {\n35 A[] list = {\n4, new A(), new B(), new C()\n5. お\n6. for (A obj : list) {\nUs obj.sample();\n8. }\n9. }\na0 sing.\nA. [Al [Bl [c] cRMANS\nB. 「Al が表示された後 、 例外がスローされる\nC. 「Al「B」「c」 と表示された後 、 例外がスローされる\nD. コンパイルエラーが発生する\n= Pa54"
          }
        ]
      },
      {
        "id": "ch07-q14",
        "number": 14,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文と添字",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "for (int i = 0; i < array.length; i++) { System.out.println(array[i]); 3"
          },
          {
            "key": "B",
            "text": "for (int i = 0; i <= array.length; i++) { System.out.println(array[i]); 3"
          },
          {
            "key": "C",
            "text": "for (int i = 0; i <= array.length; ++i) f System.out.println(array[i]); 3"
          },
          {
            "key": "D",
            "text": "for (int i = 0; ++i < array.length;) { System.out.println(array[i]); EEE]"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "正解は A。論点は「拡張for文と添字」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 拡張for文と添字"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "(14. 次のコード 2 行目から 4 行目と等しい処理はどれか 。 正しいものを思び\nなさい 。(1 つ選択 )\n1. int[] array = {1,8,3,4,5¥;\n2. for (int num : array) {\n3. System.out.println(num) ;\nAout\nA. for (int i = 0; i < array.length; i++) {\nSystem.out.println(array[i]);\n}\nB. for (int i = 0; i <= array.length; i++) {\nSystem.out.println(array[i]);\n}\nCc. for (int i = 0; i <= array.length; ++i) f\nSystem.out.println(array[i]);\n}\n410 |\n\nD. for (int i = 0; ++i < array.length;) {\nSystem.out.println(array[i]);\nEEE]"
          }
        ]
      },
      {
        "id": "ch07-q15",
        "number": 15,
        "type": "single",
        "selectCount": 1,
        "title": "==とequals",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「B」「C」「E」「G」の順に表示される"
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
          "summary": "正解は D。論点は「==とequals」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: ==とequals"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "15. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\npublic class Test {\n    private int value;\n    public Test(int value) {\n        this.value = value;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"A\";\n        String t = new String(\"A\");\n        Test a = new Test(17);\n        Test b = new Test(17);\n\n        if (s == t) {\n            System.out.println(\"A\");\n        } else {\n            System.out.println(\"B\");\n        }\n        if (s.equals(t)) {\n            System.out.println(\"C\");\n        } else {\n            System.out.println(\"D\");\n        }\n        if (a == b) {\n            System.out.println(\"E\");\n        } else {\n            System.out.println(\"F\");\n        }\n        if (a.equals(b)) {\n            System.out.println(\"G\");\n        } else {\n            System.out.println(\"H\");\n        }\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q16",
        "number": 16,
        "type": "single",
        "selectCount": 1,
        "title": "switch式",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "switch式内で -> の後にbreakを記述しているコード"
          },
          {
            "key": "B",
            "text": "case 0x0000FF -> \"A\"; など、すべて -> で値を返し、default -> \"F\"; を持つコード"
          },
          {
            "key": "C",
            "text": "途中で default : yield \"F\"; のようにコロン形式を混在させたコード"
          },
          {
            "key": "D",
            "text": "switch式内で color = \"A\"; のように別変数へ代入するコード"
          },
          {
            "key": "E",
            "text": "case 0x0000FF := \"A\"; のように := を使うコード"
          },
          {
            "key": "F",
            "text": "yieldは使うがdefaultがないコード"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "正解は B。論点は「switch式」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: switch式"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "16. 次のプログラムの2行目から10行目と同じ結果となるコードとして、正しいものを選びなさい。（1つ選択）\n\n1. int data = 0xFF0000;\n2. String str = \"\";\n3. switch (data) {\n4.     case 0x0000FF : str = \"A\"; break;\n5.     case 0x008000 : str = \"B\"; break;\n6.     case 0xFF0000 : str = \"C\"; break;\n7.     case 0xFFFF00 : str = \"D\"; break;\n8.     case 0xFFFFFF : str = \"E\"; break;\n9.     default : str = \"F\";\n10. }"
          }
        ]
      },
      {
        "id": "ch07-q17",
        "number": 17,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェース実装とアクセス修飾子",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Bクラスのsampleメソッドがprivateであるため、Cクラスではオーバーライドできない"
          },
          {
            "key": "B",
            "text": "Bクラスのsampleメソッドがprivateであるため、Aインタフェースのsampleメソッドをオーバーライドできない"
          },
          {
            "key": "C",
            "text": "sealedキーワードの使い方が間違っているため"
          },
          {
            "key": "D",
            "text": "Bクラスがabstractであるため、sampleメソッドを定義する必要がある"
          },
          {
            "key": "E",
            "text": "Cクラスのsampleメソッドがpublicであるため、アクセス修飾子が一致しない"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "正解は B。論点は「インタフェース実装とアクセス修飾子」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: インタフェース実装とアクセス修飾子"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "17. 次のプログラムがコンパイルエラーとなる理由として、正しいものを選びなさい。（1つ選択）\n\npublic class Main {\n    public static void main(String[] args) {\n        ((A) new C()).sample();\n        ((B) new C()).sample();\n        ((C) new C()).sample();\n    }\n}\n\ninterface A {\n    default void sample() {\n        System.out.println(\"A\");\n    }\n}\n\nabstract sealed class B implements A {\n    private void sample() {\n        System.out.println(\"B\");\n    }\n}\n\nfinal class C extends B {\n    public void sample() {\n        System.out.println(\"C\");\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q18",
        "number": 18,
        "type": "multiple",
        "selectCount": 2,
        "title": "オーバーロード",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "BIDADsamplexY y Kd\\privateCHSO. CISATA— バーライドできない 。"
          },
          {
            "key": "B",
            "text": "B クラスの sample メソッドが private であるため 、A インタフェー スの sample メソッドをオーバーライドできない 。"
          },
          {
            "key": "C",
            "text": "sealed キーワードの使い方が間違っているため 。"
          },
          {
            "key": "D",
            "text": "_B クラスが abstract であるため 、sample メソッドを定義する必要 がある 。"
          },
          {
            "key": "E",
            "text": "C クラスの sample メソッドが public であるため 、 アクセス修飾子 が一致しない 。 Piz"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": {
          "summary": "正解は A・C。論点は「オーバーロード」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: オーバーロード"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "C17. 次のプログラムがコンパイルエラーとなる理由として 、 正しいものを選\nびなさい 。(1 つ選択 )\n1. public class Main {\n2. public static void main(String[] args) {\n3. ((A) new C()).sample();\n4, ((B) new C()).sample();\n5. ((C) new C()).sample();\n6. }\n7. }\n8.\n9. interface A {\n10. default void sample() {\n11. System.out.println(\"A\");\nle. }\n13. }\n14,\n15. abstract sealed class B implements A {\n16. private void sample() {\n17. System.out.println(\"B\");\n18. }\n19. }\n20.\n21. final class C extends B {\n22, public void sample() {\n23. System.out.println(\"C\");\n24, }\n25. }\nA. BIDADsamplexY y Kd\\privateCHSO. CISATA—\nバーライドできない 。\nB.B クラスの sample メソッドが private であるため 、A インタフェー\nスの sample メソッドをオーバーライドできない 。\nC. sealed キーワードの使い方が間違っているため 。\nD. _B クラスが abstract であるため 、sample メソッドを定義する必要\nがある 。\nE.  C クラスの sample メソッドが public であるため 、 アクセス修飾子\nが一致しない 。\nPiz\n[] 18. ROFOFSLOZMICASI—KELT. ELUSOSBVITEL.\n(2D BR)\n|\n|"
          }
        ]
      },
      {
        "id": "ch07-q19",
        "number": 19,
        "type": "multiple",
        "selectCount": 2,
        "title": "sealed / final / abstract",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "final クラスはシールクラスのサブクラスとして神言できる"
          },
          {
            "key": "B",
            "text": "final クラスはシールクラスのサブクラスでなければならない"
          },
          {
            "key": "C",
            "text": "final クラスは abstract クラスのサブクラスでなければならない"
          },
          {
            "key": "D",
            "text": "final クラスは abstract メソッドを含むどことはできない"
          },
          {
            "key": "E",
            "text": "abstract クラスは final メソッドを含むことができない"
          },
          {
            "key": "F",
            "text": "abstract クラスは finl クラスのサブクラスとして宣言できる"
          },
          {
            "key": "G",
            "text": "シールクラスは final メソッドを含むことができない . H. シールクラスは final クラスとして宣言できる re 415"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": {
          "summary": "正解は A・D。論点は「sealed / final / abstract」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: sealed / final / abstract"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]19. シールクラスや final クラスについて正しい説明を選びなさい。(2 つ選\n択 )\nA. final クラスはシールクラスのサブクラスとして神言できる\nB. final クラスはシールクラスのサブクラスでなければならない\nC. final クラスは abstract クラスのサブクラスでなければならない\nD. final クラスは abstract メソッドを含むどことはできない\nE. abstract クラスは final メソッドを含むことができない\nFE abstract クラスは finl クラスのサブクラスとして宣言できる\nG. シールクラスは final メソッドを含むことができない\n. H. シールクラスは final クラスとして宣言できる\nre 415"
          }
        ]
      },
      {
        "id": "ch07-q20",
        "number": 20,
        "type": "multiple",
        "selectCount": 3,
        "title": "recordクラス",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "a.name = \"C\":"
          },
          {
            "key": "B",
            "text": "Book c = new Book();"
          },
          {
            "key": "C",
            "text": "boolean isEqual = a == b;"
          },
          {
            "key": "D",
            "text": "String title = a.getName();"
          },
          {
            "key": "E",
            "text": "a = nul};"
          },
          {
            "key": "F",
            "text": "Book c = new Book(\"C\");"
          },
          {
            "key": "G",
            "text": "String name = a.name();"
          }
        ],
        "answer": [
          "A",
          "B",
          "D"
        ],
        "explanation": {
          "summary": "正解は A・B・D。論点は「recordクラス」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: recordクラス"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[J 20. 次のプログラムの 「/ insert code here 」 の箇所に記述するとコソ\nルエラーになるものはどれですか 。 正しいものを選びなさい。 Ga\n択 )\n1. public record Book(String name) {}\n1. public class Main {\n2. public static void main(String[] args) {\n3.\n4. Book a = new Book(\"A\");\n5. Book b = new Book(\"B\");\n6.\nis // insert code here\n8.\n9. }\n10. }\nA. a.name = \"C\":\nB. Book c = new Book();\nC. boolean isEqual = a == b;\nD. String title = a.getName();\nE. a = nul};\nF Book c = new Book(\"C\");\nG. String name = a.name();"
          }
        ]
      },
      {
        "id": "ch07-q21",
        "number": 21,
        "type": "single",
        "selectCount": 1,
        "title": "for文の制御",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "for (int i = 1; i < array.length; ++i) {\n    if (i % 2 == 0) {\n        System.out.println(array[i]);\n    }\n}"
          },
          {
            "key": "B",
            "text": "for (int i = 0; ++i < array.length;) {\n    if (i % 2 == 0) {\n        System.out.println(array[i]);\n    }\n}"
          },
          {
            "key": "C",
            "text": "for (int i = 0; i < array.length; i++) {\n    if (i % 2 == 0) {\n        System.out.println(array[i]);\n    }\n}"
          },
          {
            "key": "D",
            "text": "for (int i = 0; i++ < array.length + 1; i++) {\n    if (i % 2 == 0) {\n        System.out.println(array[i]);\n    }\n}"
          },
          {
            "key": "E",
            "text": "for (int i = 0; i < array.length; i++) {\n    if (i % 2 == 1) {\n        System.out.println(array[i]);\n    }\n}"
          },
          {
            "key": "F",
            "text": "for (int i = 1; i <= array.length; i++) {\n    if (i % 2 == 1) {\n        System.out.println(array[i]);\n    }\n}"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "正解は C。論点は「for文の制御」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: for文の制御"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "21. 次のプログラムを確認してください。\n\npublic class Sample {\n    public static void main(String[] args) {\n        int[] array = {1,2,3,4,5,6,7,8,9,10};\n        // insert code here\n    }\n}\n\nこのプログラムの「// insert code here」の箇所に入るコードで、1、3、5、7、9 と表示できるものを選びなさい。（1つ選択）"
          }
        ]
      },
      {
        "id": "ch07-q22",
        "number": 22,
        "type": "single",
        "selectCount": 1,
        "title": "printlnとtoString / null",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A.B.C の順に表示される"
          },
          {
            "key": "B",
            "text": "B.C.null の順に表示される | C. Value@7344699f、C.null の順に表示される | D. Value@7344699f、Value@7344699f、C の順に表示される"
          },
          {
            "key": "F",
            "text": "6. new Value(\"C\"), Ts null | 8"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "正解は B。論点は「printlnとtoString / null」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: printlnとtoString / null"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 22. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1. public class Value {\n2, public String data;\n3,\n4, public Value(String data) {\n= this.data = data;\n6. }\n| 7\n: 8. public String toString() {\n9. return this.data;\n10. }\n11. }\n1. public class Sample {\n\"dR\n| 3. private static Value[] values = {\n4 4, new Value(\"A\"),\n| 5. new Value(\"B\"),\nF 6. new Value(\"C\"),\nTs null\n| 8\na 10. public static void main(String[] args) {\n, 11. System.out.println(values[1]);\nj 12, System.out.println(values[2].data);\na3. System.out.println(values[3]);\n14. }\n15. }\nA. A.B.C の順に表示される\nB.B.C.null の順に表示される\n| C. Value@7344699f、C.null の順に表示される\n| D. Value@7344699f、Value@7344699f、C の順に表示される\n: E. コンパイルエラーが発生する\n! F 実行時に例外がスローされる\n| i\n418"
          }
        ]
      },
      {
        "id": "ch07-q23",
        "number": 23,
        "type": "multiple",
        "selectCount": 2,
        "title": "メソッド名の規則",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "public void sample3() {3"
          },
          {
            "key": "B",
            "text": "public void $sample() {3"
          },
          {
            "key": "C",
            "text": "public void sample@2() $3"
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
            "text": "public void O_sample() {{3 oO F = - : . 47s"
          }
        ],
        "answer": [
          "C",
          "F"
        ],
        "explanation": {
          "summary": "正解は C・F。論点は「メソッド名の規則」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: メソッド名の規則"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 23. 次のうちメソッド定義として正しくないものを選びなさい。(2 つ選択 )\nA. public void sample3() {3\nB. public void $sample() {3\nC. public void sample@2() $3\nD. public void _null() {}\nE. public void sample() {}\nF public void O_sample() {{3\noO F = - : . 47s"
          }
        ]
      },
      {
        "id": "ch07-q24",
        "number": 24,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェースのフィールド",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "int i = ctt;"
          },
          {
            "key": "B",
            "text": "int i = Cc + att;"
          },
          {
            "key": "C",
            "text": "int i = ++a;"
          },
          {
            "key": "D",
            "text": "inti=b+}; 419"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "正解は D。論点は「インタフェースのフィールド」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: インタフェースのフィールド"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "24. ROFOFSLOBZMIciAMTESI-KELT. ELUSOERVG :\nさい 。(1 つ選択 )\ni fal\n1. public interface A { 題\n2. int a = 1; @\noe static int b = 2; 問\n4. static final int c = 3; 題\n5. }\n6.\n7. class B implements A {\n8. public static void main(String[] args) {\n9. A t = new B();\n10. EE |\nbp 3\ni. -t\nA. int i = ctt;\nB. int i = Cc + att;\nC. int i = ++a;\nD. inti=b+};\n419"
          }
        ]
      },
      {
        "id": "ch07-q25",
        "number": 25,
        "type": "single",
        "selectCount": 1,
        "title": "switch文とアロー構文",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は A・D。論点は「例外とthrows」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 例外とthrows"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "25. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\npublic class Sample {\n    public static void main(String[] args) {\n        int result = new Test().execute(\"A\");\n        System.out.println(result);\n    }\n}\n\nclass Test {\n    int execute(String str) {\n        int total = 0;\n        switch (str) {\n            case \"A\" -> total++;\n            case \"B\", \"C\" -> total++;\n            case \"D\", \"E\" -> total++;\n            default -> total++;\n        }\n        return tota};\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q26",
        "number": 26,
        "type": "multiple",
        "selectCount": 2,
        "title": "チェック例外とthrows",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "SampleException はチェック例外である"
          },
          {
            "key": "B",
            "text": "SampleException はエラーである"
          },
          {
            "key": "C",
            "text": "SampleException は非チェック例外である"
          },
          {
            "key": "D",
            "text": "hello メソッドでは、SampleException のサブクラスをスローできる"
          },
          {
            "key": "E",
            "text": "hello メソッドでは、SampleException のみをスローできる"
          },
          {
            "key": "F",
            "text": "hello メソッドでは、Exception をスローできる"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": {
          "summary": "正解は C。論点は「protectedとパッケージ」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: protectedとパッケージ"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "26. 次のプログラムの throws SampleException を省略するとコンパイルエラーになります。SampleException について正しい説明はどれですか。正しいものを選びなさい。（2つ選択）\n\npublic class Sample {\n    public void hello() throws SampleException {\n        // some code\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q27",
        "number": 27,
        "type": "single",
        "selectCount": 1,
        "title": "パッケージをまたぐprotectedアクセス",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A クラスのコンストラクタは public である必要がある"
          },
          {
            "key": "B",
            "text": "B クラスのコンストラクタは public である必要がある"
          },
          {
            "key": "C",
            "text": "8B クラスは A クラスのサブクラスである必要がある"
          },
          {
            "key": "D",
            "text": "A クラスは B クラスのサブクラスである必要がある"
          },
          {
            "key": "E",
            "text": "B クラスの hello メソッドは 、protected である必要がある"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "正解は C。論点は「パッケージをまたぐprotectedアクセス」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: パッケージをまたぐprotectedアクセス"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 27. 次のプログラムの説明として 、 正しいものを選びなさい。(1 つ選択 ) need\n1. package p1; 模\n2. Be\n3. public class A { =|\n4, protected void hello() { oO)\nA System.out.println(\"A\"); fa\n7. 3 ー\n1. package p2;\n2,\n3. import p1.A;\n4,\n5. public class B {\n6. private static B b;\n7. Public static B getInstance() {\n8. if (b == null) {\n9. b = new B();\n10. }\n11. return b;\n12. }\n13. public void hello() {\n14, new A().hello();\n15. }\n16. }\n1. public class Sample {\n2. public static void main(String[] args) {\n3. B b = B.getInstance();\n4, b.hello();\n5. }\n6. }\n421\n\nA. A クラスのコンストラクタは public である必要がある\nB.B クラスのコンストラクタは public である必要がある\nC. 8B クラスは A クラスのサブクラスである必要がある\nD. A クラスは B クラスのサブクラスである必要がある\nE.  B クラスの hello メソッドは 、protected である必要がある"
          }
        ]
      },
      {
        "id": "ch07-q28",
        "number": 28,
        "type": "single",
        "selectCount": 1,
        "title": "staticフィールドとインスタンス",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "A1,B1,C1,B2,"
          },
          {
            "key": "B",
            "text": "Al1,B1,C2,B2,"
          },
          {
            "key": "C",
            "text": "A1,B2,C2,B2, Dz. C1,B2,C1,B2,"
          },
          {
            "key": "E",
            "text": "C1,B1,C1,B2 422 | _"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "正解は B。論点は「staticフィールドとインスタンス」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: staticフィールドとインスタンス"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "28. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいも o\nを選びなさい。(1 つ選択 )\n\n1. public class Sample {\n\nas public static void main(String[] args) {\n\n3.\n\n4, Item a = new Item(\"A\");\n\n5. System.out.print(a.name + a.id + \",\");\n\n6. Item b = new Item(\"B\");\n\n7. System.out.print(b.name + b.id + \",\")>:\n\n8. b.id = \"2\";\n\n9. a.name = \"C\";\n\n10. System.out.print(a.name + a.id + \",\"):\n\n11. System.out.print(b.name + b.id + \",\");\n\n12.\n\n13 }\n\n14. }\n\n15.\n\n16. class Item {\n\n17. public static String id;\n\n18, public String name;\n\n19. public Item(String name) {\n\n20. this.name = name;\n\nel. id = \"1\";\n\n22, }\n\n23. }}\nA. A1,B1,C1,B2,\nB. Al1,B1,C2,B2,\nC. A1,B2,C2,B2,\nDz. C1,B2,C1,B2,\nE. C1,B1,C1,B2\n\n422\n| _"
          }
        ]
      },
      {
        "id": "ch07-q29",
        "number": 29,
        "type": "single",
        "selectCount": 1,
        "title": "コマンドライン引数",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は A。論点は「コマンドライン引数」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: コマンドライン引数"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "29. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\nなお、実行には次のコマンドを使うものとする。\n\n> java Sample A B C\n\npublic class Sample {\n    public static void main(String[] args) {\n        B b = new B();\n        b.setValues(args);\n        System.out.println(b);\n    }\n}\n\nclass A {\n    private String value;\n\n    public String getValue() {\n        return value;\n    }\n\n    public void setValue(String name) {\n        this.value = name;\n    }\n\n    public String toString() {\n        return getValue();\n    }\n}\n\nclass B extends A {\n    public void setValue(String value) {\n        super.setValue(\"\"\" + value + \"\"\");\n    }\n    public void setValues(String[] parts) {\n        var sb = new StringBuilder();\n        for (String part : parts) {\n            sb.append(part).append(' ');\n        }\n        this.setValue(sb.toString());\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q30",
        "number": 30,
        "type": "single",
        "selectCount": 1,
        "title": "javacとjavaコマンド",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "java a/A.java"
          },
          {
            "key": "B",
            "text": "java b/B. java"
          },
          {
            "key": "C",
            "text": "javac b/B. java java a/A. java"
          },
          {
            "key": "D",
            "text": "javac a/A.java java a/A ="
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "正解は D。論点は「javacとjavaコマンド」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: javacとjavaコマンド"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[1] 30. 次の 2 つのコードのクラスファイルを生成するためのコマンドとして\n正しいものを選びなさい。(1 つ選択 )\n1. package b;\n2.\n3, public class B {\n4,\neek\n1. package a;\n2. import b.B;\n3.\n4. public class A {\n5, public static void main(String[] args) {\n6. B b = new B();\n7. }\n8. }\nA. java a/A.java\nB. java b/B. java\nC.  javac b/B. java\njava a/A. java\nD. javac a/A.java\njava a/A = P46"
          }
        ]
      },
      {
        "id": "ch07-q31",
        "number": 31,
        "type": "single",
        "selectCount": 1,
        "title": "importとワイルドカード",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "import java.lang. Integer;"
          },
          {
            "key": "B",
            "text": "import com.sample.*;"
          },
          {
            "key": "C",
            "text": "import com.sample.Sample;"
          },
          {
            "key": "D",
            "text": "import java.lang.*; |"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "正解は C。論点は「importとワイルドカード」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: importとワイルドカード"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "(31. 次のプログラムを確認し 、 Main クラスの空凌に入るコードとして 、 正\nしいものを選びなさい。(1 つ選択 )\n\n1. package com.sample;\n2. public class Sample {\n3. public void sample() {\n4, // any code\n5. }\n6. }\n1. package com.sample.test;\n2. public class Test {\n3. public void test(int num) {\n4. // any code\n5. }\n6. }\n1. package com;\ni |\n3. public class Main {\n4. public static void main(String[] args) {\n5. new Sample().sample();\n6. int num = Integer.parseInt(args[0]);\nNis new Test().test(num) ;\n8. }\nOnt\n\nA. import java.lang. Integer;\n\nimport com.*;\nB. import com.sample.*;\nC. import com.sample.Sample;\nimport com.sample.test.*;\nD. import java.lang.*;\n| P462 |\nAY"
          }
        ]
      },
      {
        "id": "ch07-q32",
        "number": 32,
        "type": "single",
        "selectCount": 1,
        "title": "ローカル変数とクラス変数",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "23 が表示される"
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
          "summary": "正解は C。論点は「ローカル変数とクラス変数」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: ローカル変数とクラス変数"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 32. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1, public class Sample { = \n2, static int num = 23; : i |\n3. public static void main(String[] args) { = s\n4, int num = num; a ag\n5 System.out.println (num) ; 2 oo :\nA. 23 が表示される\nB. 想定外の結果が表示される\nCc. コンパイルエラーが発生する\nD. 実行時に例外がスローされる"
          }
        ]
      },
      {
        "id": "ch07-q33",
        "number": 33,
        "type": "single",
        "selectCount": 1,
        "title": "抽象メソッドの実装",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は B。論点は「抽象メソッドの実装」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 抽象メソッドの実装"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "33. 次のプログラムのコンパイルを成功させるための方法として、正しいものを選びなさい。（1つ選択）\n\npublic interface A {\n    abstract void x();\n}\n\npublic abstract class B /* position 1 */ {\n    /* position 2 */\n    public void x() {}\n    public abstract void z();\n}\n\npublic class C extends B implements A {\n    /* position 3 */\n}"
          }
        ]
      },
      {
        "id": "ch07-q34",
        "number": 34,
        "type": "single",
        "selectCount": 1,
        "title": "拡張for文のvar型推論",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は A。論点は「拡張for文のvar型推論」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 拡張for文のvar型推論"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "34. 次のプログラムを確認し、変数valueのデータ型として正しいものを選びなさい。（1つ選択）\n\npublic class Main {\n    public static void main(String... args) {\n        for (var value : args) {\n            System.out.println(value);\n        }\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q35",
        "number": 35,
        "type": "single",
        "selectCount": 1,
        "title": "Stringメソッドと不変性",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "abcd ef gh -1"
          },
          {
            "key": "B",
            "text": "abcd gh 5"
          },
          {
            "key": "C",
            "text": "abcd ef gh 0"
          },
          {
            "key": "D",
            "text": "abcd ef gh 5"
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
          "D"
        ],
        "explanation": {
          "summary": "正解は D。論点は「Stringメソッドと不変性」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: Stringメソッドと不変性"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "35. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\npublic class Main {\n    public static void main(String[] args) {\n        String str = \"abcd ef gh\";\n        int x = str.indexOf(\"ef\");\n        str.substring(x + 3);\n        x = str.indexOf(\"ef\");\n        System.out.println(str + \" \" + x);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q36",
        "number": 36,
        "type": "single",
        "selectCount": 1,
        "title": "switch文とnull",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は D。論点は「switch文とnull」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: switch文とnull"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "36. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\npublic class Sample {\n    static String str;\n    public static void main(String[] args) {\n        switch (str) {\n            case \"10\" : str += \"10\";\n            default : str += \"def\";\n            case \"20\" : str += \"20\";\n        }\n        System.out.println(str);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q37",
        "number": 37,
        "type": "single",
        "selectCount": 1,
        "title": "クラスパスと出力先",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "javac ex1S/Sample.java ex15/Main. java java -cp build ex15.Main"
          },
          {
            "key": "B",
            "text": "javac -d build ex15/Sample.java ex15/Main. java java -cp build ex15.Main"
          },
          {
            "key": "C",
            "text": "javac -d build ex15/Sample.java ex15/Main. java java ex15.Main"
          },
          {
            "key": "D",
            "text": "javac -d build ex15/Sample.java ex15/Main. java java build.ex15.Main 429"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "正解は B。論点は「クラスパスと出力先」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: クラスパスと出力先"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]37. 次のプログラムをコンパイル 、 実行するためのコマンドとして 、 正しい\nものを選びなさい。(1 つ選択 )\n1. package ex15;\n2.\n3, public class Sample {\n4. private final String name;\n5. public Sample(String name) {\n6. this.name = name;\nnH. 4 第 7 章\n8. public String getName() {\n9. return name; 模\n10. }\n11. public String toString() { 題\nte. return name; 0)\nA\n13. } 問\n14. 3 題\n1. package ex15;\nas\n3. import java.util. logging.Logger;\n4,\n5. public class Main {\n6. static final Logger logger = Logger.getAnonymousLogger();\nie public static void main(String[] args) {\n8. var d = new Sample(\"sample\") ;\n9, logger. info(d.toString());\n10.° sig\n11. }\nA. javac ex1S/Sample.java ex15/Main. java\njava -cp build ex15.Main\nB. javac -d build ex15/Sample.java ex15/Main. java\njava -cp build ex15.Main\nC. javac -d build ex15/Sample.java ex15/Main. java\njava ex15.Main\nD. javac -d build ex15/Sample.java ex15/Main. java\njava build.ex15.Main\n429"
          }
        ]
      },
      {
        "id": "ch07-q38",
        "number": 38,
        "type": "single",
        "selectCount": 1,
        "title": "参照型と呼び出せるメソッド",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "[bye] と表示される"
          },
          {
            "key": "B",
            "text": "null] と表示される"
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
            "text": "実行時に例外がスローされる | 430 i"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "正解は D。論点は「参照型と呼び出せるメソッド」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 参照型と呼び出せるメソッド"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "L)38. 次のプログラムを確認し 、 これらのクラスを利用する Main クラス x、\nンパバイル 、 実行したときの結果として 、 正しいものを選びなさい ;\nつ選択 )\n1, public class A {\n2. public void hello() {\n3. System.out.println(\"hello\");\n4 3\n5. }\n1. public class B extends A {\n2. public void bye() {\n3. System.out.println(\"bye\");\n4. }\n5. }\n1. public class Main {\n2. public static void main(String[] args) {\n3. A a = new B();\n4, a.bye();\n5. }\n| 8. 1\nA. [bye] と表示される\nB. null] と表示される\nCc 何も表示されない\nD. コンパイルエラーが発生する\nE. 実行時に例外がスローされる\n|\n430 i\na —_—"
          }
        ]
      },
      {
        "id": "ch07-q39",
        "number": 39,
        "type": "single",
        "selectCount": 1,
        "title": "メソッドシグネチャ",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "[A,0] と表示される a"
          },
          {
            "key": "B",
            "text": "「A, 1」 と表示される ~"
          },
          {
            "key": "C",
            "text": "fA, null] と表示される"
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
          "summary": "正解は D。論点は「メソッドシグネチャ」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: メソッドシグネチャ"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[|] 39. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1. public class Sample {\n2. private char a;\n3, private int b = 1;\n4. String test(char a, int b) {\n5. returnat\", \"+b;\n\" 6.  }\n7. public static void main(String[] args) {\n8. Sample app = new Sample();\n9. System.out.println(app.test('A')); 模\n0 3 Bt\n110} a\n\nA. [A,0] と表示される a\nB. 「A, 1」 と表示される ~\nC. fA, null] と表示される\nD. コンパイルエラーが発生する"
          }
        ]
      },
      {
        "id": "ch07-q40",
        "number": 40,
        "type": "multiple",
        "selectCount": 2,
        "title": "多次元配列",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は A・E。論点は「多次元配列」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 多次元配列"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "40. 多次元配列のインスタンス化と初期化のコードとして、正しいものを選びなさい。（2つ選択）"
          }
        ]
      },
      {
        "id": "ch07-q41",
        "number": 41,
        "type": "single",
        "selectCount": 1,
        "title": "アクセス修飾子とsuper",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "B クラスのサブクラスでは 、getValue メソッドで A クラスの フィールドにアクセスすることができる"
          },
          {
            "key": "B",
            "text": "B クラスのサブクラスでは 、B クラスのメソッドを呼び出すため に super.getValue( ) を使えるが 、A クラスのフィールドにはアク セスできない"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "正解は A。論点は「アクセス修飾子とsuper」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: アクセス修飾子とsuper"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 41. 次のプログラムの説明として 、 正しいものを選びなさい。 (Dap)\n1. public class A {\n2. int num = 10;\n3. public double getValue() {\n4, return 0.0;\n5 3\n6. }\n1. public class B extends A {\n2. @Override\nis public double getValue() {\n4. Lhe vee\n5; return 1.0;\n6. }\neet\n1. public class C extends B {\n2. @0verride\n; Bs public double getValue() {\n! 4, System.out.println(super.num) ;\n5. return super.getValue();\n6. }\n71. }\nA. B クラスのサブクラスでは 、getValue メソッドで A クラスの\nフィールドにアクセスすることができる\nB.B クラスのサブクラスでは 、B クラスのメソッドを呼び出すため\nに super.getValue( ) を使えるが 、A クラスのフィールドにはアク\nセスできない\n| Cc.。 BISROYIDSATIA. BISR0xY y KEHULSEY\n[Cnew.getValue( ) を使う\n| D。 8B クラスのサブクラスでは 、B クラスのメソッドを呼び出すた\n| に public.getValue( ) を使う ra PAT)\n432"
          }
        ]
      },
      {
        "id": "ch07-q42",
        "number": 42,
        "type": "multiple",
        "selectCount": 3,
        "title": "オーバーライドとオーバーロード",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は A・C・E。論点は「オーバーライドとオーバーロード」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: オーバーライドとオーバーロード"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "42. 次のプログラムの説明として、正しいものを選びなさい。（3つ選択）\n\nimport java.util.Collection;\n\npublic class A {\n    public void sample(Collection arg) {\n        System.out.println(\"A\");\n    }\n}\n\nimport java.util.Collection;\nimport java.util.List;\n\npublic class B extends A {\n    public void sample(Collection arg) {\n        System.out.println(\"B\");\n    }\n    public void sample(List arg) {\n        System.out.println(\"C\");\n    }\n}\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        A a1 = new A();\n        A a2 = new B();\n        B b1 = new B();\n\n        List<String> list = new ArrayList<>();\n        // do something\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q43",
        "number": 43,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェースの菱形継承",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "B インタフェースの sample メソッドを実装している"
          },
          {
            "key": "B",
            "text": "C インタフェースの sample メソッドを実装している 2"
          },
          {
            "key": "C",
            "text": "D クラスが sample メソッドを使わないのであれば 、 オーバープ イドをする必要はない"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する 7 sl"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "正解は D。論点は「インタフェースの菱形継承」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: インタフェースの菱形継承"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[し] 43. Dp クラスの説明として正しいものを選びなさい。(1 つ選択 )\n1. public interface A {\n2. void sample();\n3. }\n1. public interface B extends A {\n2. default void sample() {\n3. System.out.println(\"B\");\n4. }\n5. }\n| 1. public interface C extends A {\n2. @Override\n| 3. default void sample() {\n4, System.out.println(\"C\");\n5. }\n6. }\n1. public class D implements B, C {\n2. @Override\n3. public void sample() {\n4, super.sample();:\n5. }\n8. }\nA. B インタフェースの sample メソッドを実装している\nB.C インタフェースの sample メソッドを実装している 2\nC.D クラスが sample メソッドを使わないのであれば 、 オーバープ\nイドをする必要はない\nD. コンパイルエラーが発生する 7\nsl"
          }
        ]
      },
      {
        "id": "ch07-q44",
        "number": 44,
        "type": "single",
        "selectCount": 1,
        "title": "ポリモーフィズムとコレクション",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "List<A> listA = new ArrayList<>(); 2 listA.add(new D()); fed A"
          },
          {
            "key": "B",
            "text": "List<B> listB = new ArrayList<>(); a listB.add(new C()); a ~~ |"
          },
          {
            "key": "D",
            "text": "List<D> listD = new ArrayList<>(); : listD.add(new C());"
          },
          {
            "key": "E",
            "text": "List<A> listE = new ArrayList<>(); listE.add(new C());"
          },
          {
            "key": "G",
            "text": "List<B> listC = new ArrayList<>(); listC.add(new D());"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "正解は D。論点は「ポリモーフィズムとコレクション」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: ポリモーフィズムとコレクション"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 44. 次のプログラムを確認し 、 コンパイルエラーとなるコードを選びなさい。\n(1 つ選択 )\n1. public abstract class A 5}\n1. public interface B {}\n1. public class C extends A implements B {}\ny 1. public class D extends C {3 875\nA. List<A> listA = new ArrayList<>(); 2\nlistA.add(new D()); fed\nA\nB. List<B> listB = new ArrayList<>(); a\nlistB.add(new C()); a\n~~ |\nG. List<B> listC = new ArrayList<>();\nlistC.add(new D());\nD. List<D> listD = new ArrayList<>(); :\nlistD.add(new C());\nE. List<A> listE = new ArrayList<>();\nlistE.add(new C());"
          }
        ]
      },
      {
        "id": "ch07-q45",
        "number": 45,
        "type": "multiple",
        "selectCount": 3,
        "title": "インタフェースと抽象クラス",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "Al&finall C&L"
          },
          {
            "key": "B",
            "text": "Bldabstractlo C&M) c. _B は final にできない"
          },
          {
            "key": "D",
            "text": "A は B のサブタイプである"
          },
          {
            "key": "E",
            "text": "A は abstract にできない"
          },
          {
            "key": "F",
            "text": "F B は A のサブタイプである (pars"
          }
        ],
        "answer": [
          "A",
          "B",
          "F"
        ],
        "explanation": {
          "summary": "正解は A・B・F。論点は「インタフェースと抽象クラス」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: インタフェースと抽象クラス"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 45. 次のプログラムの説明として 、 正しいものを選びなさい。(3 つ選択 )\n1. public interface A {\n2. public A build(String str);\n3. }\n1. public class B implements A {\n2. public B(String str) {\n3. I] ave\n4, }\n5. @Override\n6. public B build(String str) {\nTis return new B(str);\na ee 435\n9. }\n\nA. Al&finall C&L\nB. Bldabstractlo C&M)\nc. _B は final にできない\nD. A は B のサブタイプである\nE. A は abstract にできない\nFEF B は A のサブタイプである\n(pars"
          }
        ]
      },
      {
        "id": "ch07-q46",
        "number": 46,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタの呼び出し順",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "[cBA] と表示される"
          },
          {
            "key": "B",
            "text": "「c」 と表示される"
          },
          {
            "key": "C",
            "text": "[ABC] と表示される"
          },
          {
            "key": "D",
            "text": "コンパイルエラーが発生する | 436"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "正解は C。論点は「コンストラクタの呼び出し順」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: コンストラクタの呼び出し順"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]46. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1. class A {\n2. public A() {\n3. System.out.print(\"A\");\n4. }\n5. }\n1. class B extends A {\n2. public B() $\n3. System.out.print(\"B\");\n4. }\n5. }\n1. class C extends B {\n2. public C() {\n3. System.out.print(\"C\");\n4. }\n5. }\n1. public class Main {\n2. public static void main(String[] args) {\n3. new C();\n| 4, 3\n| 3\nA. [cBA] と表示される\nB. 「c」 と表示される\nCc. [ABC] と表示される\nD. コンパイルエラーが発生する |\n436"
          }
        ]
      },
      {
        "id": "ch07-q47",
        "number": 47,
        "type": "single",
        "selectCount": 1,
        "title": "privateメソッドとオーバーライド",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "[Al [a] と表示される"
          },
          {
            "key": "B",
            "text": "「B」「B」 と表示される C コンパイルエラーが発生する D 実行時に例外がスローされる"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "正解は A。論点は「privateメソッドとオーバーライド」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: privateメソッドとオーバーライド"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]47. 次のブプログラムをコンパイル 、 実行したとをの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1. public class A { |\n2, private void print() { |\n3. System.out.println(\"A\"); |\n4. }\n5, public void a() {\n6. print();\ni, } |\n8. }\n1. public class B extends A { a\n2. private void print() { |\n3. System.out .println(\"B\"); @\n4. 3 問\n5. public void b() { 題\n6. print(); |\n7. ¥\n8. public static void main(String... args) { |\n9. B b = new B();\n10. b.a(); |\n11. b.b();\n2. 3 |\n13, }\nA. [Al [a] と表示される\nB. 「B」「B」 と表示される\nC コンパイルエラーが発生する\nD 実行時に例外がスローされる\n|\n|\n437"
          }
        ]
      },
      {
        "id": "ch07-q48",
        "number": 48,
        "type": "multiple",
        "selectCount": 2,
        "title": "メソッドの戻り値型",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "public void methodA(int x) { return ++x; 3"
          },
          {
            "key": "B",
            "text": "public String methodB() { System.out.println(\"B\"); 3"
          },
          {
            "key": "C",
            "text": "public boolean methodC(int a) { return a < 0; 3"
          },
          {
            "key": "D",
            "text": "public char methodD(String str) {{ return str; 3"
          },
          {
            "key": "E",
            "text": "public void methodE() { return; 3"
          }
        ],
        "answer": [
          "C",
          "E"
        ],
        "explanation": {
          "summary": "正解は C・E。論点は「メソッドの戻り値型」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: メソッドの戻り値型"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "し | 48. 次のうち 、 メソッドの定義として正しいものを選びなさい。 (2 っ選 i\nA. public void methodA(int x) {\nreturn ++x;\n}\nB. public String methodB() {\nSystem.out.println(\"B\");\n}\nC. public boolean methodC(int a) {\nreturn a < 0;\n}\nD. public char methodD(String str) {{\nreturn str;\n}\nE. public void methodE() {\nreturn;\n}"
          }
        ]
      },
      {
        "id": "ch07-q49",
        "number": 49,
        "type": "single",
        "selectCount": 1,
        "title": "起動パラメータの分割",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "JAABAB] と表示される"
          },
          {
            "key": "B",
            "text": "「ABAB」 と表示される"
          },
          {
            "key": "C",
            "text": "TABAB] と表示される"
          },
          {
            "key": "D",
            "text": "「ABAB] と表示される 438"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": {
          "summary": "正解は B。論点は「起動パラメータの分割」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 起動パラメータの分割"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "| 49. 次のプログラムを以下に示したコマンドで実行したときの結果として 、\n| 正しいものを選びなさい。(1 つ選択 )\n4 > java A\"ABY AB\n1. public class A {\n2. public static void main(String[] args) {\n3. for (String str : args) {\n4. System.out.print(str);\n5. }\n6. t\nI. 3\nA. JAABAB] と表示される\nB. 「ABAB」 と表示される\nCc. TABAB] と表示される\nD. 「ABAB] と表示される\n438"
          }
        ]
      },
      {
        "id": "ch07-q50",
        "number": 50,
        "type": "single",
        "selectCount": 1,
        "title": "インタフェース継承と共変戻り値",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "D インタフェースが 2 つ以上継承しているため"
          },
          {
            "key": "B",
            "text": "B インタフェースが A インタフェースとは異なる戻り値型の同名 メソッドを定義しているため"
          },
          {
            "key": "C",
            "text": "B と cC インタフェースから継承したメソッドの戻り値型が異なる ため"
          },
          {
            "key": "D",
            "text": "_D インタフェースで継承したメソッドを再定乾しなかったため 439"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "正解は C。論点は「インタフェース継承と共変戻り値」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: インタフェース継承と共変戻り値"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[] 50. 次のプログラムを確認し 、D インタフェースでコンパイルエラーが発生\nする理由として考えられるものを選びなさい。(1 つ選択 )\n1. public interface A {\nro public Iterable a();\n3. }\n1. import java.util.Collection;\n3. public interface B extends A { 問\n4, public Collection a(); a\n5. 3 ①\na\n1. import java.nio.file.Path; 題\ne.\n3. public interface C extends A {\n4, public Path a();\n5. }\n1. public interface D extends B, C {\nee\n3.\nA. D インタフェースが 2 つ以上継承しているため\nB.B インタフェースが A インタフェースとは異なる戻り値型の同名\nメソッドを定義しているため\nCc. B と cC インタフェースから継承したメソッドの戻り値型が異なる\nため\nD. _D インタフェースで継承したメソッドを再定乾しなかったため\n439"
          }
        ]
      },
      {
        "id": "ch07-q51",
        "number": 51,
        "type": "single",
        "selectCount": 1,
        "title": "フィールドの選択",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "コンパイルエラーが発生する B. 実行時に例外がスローされる"
          },
          {
            "key": "C",
            "text": "A が表示される"
          },
          {
            "key": "D",
            "text": "«BARRENS"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": {
          "summary": "正解は C。論点は「フィールドの選択」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: フィールドの選択"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]51. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n\n1. package ex42.a;\n\n2.\n\n3. public class A {\n\n4, public String x = \"A\";\n\nHig protected A() { 3}\n\n6. }\n\n1. package ex42.b;\n\n2.\n\n3. import ex42.a.A;\n\n4,\n\n5. public class B extends A {\n\n6. String x = \"B\";\n\nVs public B() {\n\n8. super();\n\n9. }\n\n10. }\n\n1. package ex42;\n\n8.\n\n3. import ex42.a.A;\n\n4. import ex42.b.B;\n\n5.\n\n6. public class Main {\n\n7. public static void main(String[] args) {\n\n8. A a = new B();\n\n9, System.out.println(a.x);\n\n10. }\n\n11. }\nA. コンパイルエラーが発生する\nB. 実行時に例外がスローされる\nC. A が表示される\nD. «BARRENS"
          }
        ]
      },
      {
        "id": "ch07-q52",
        "number": 52,
        "type": "single",
        "selectCount": 1,
        "title": "this / superとコンストラクタ",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は E。論点は「this / superとコンストラクタ」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: this / superとコンストラクタ"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "52. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\npublic class Sample {\n    String name;\n    int num;\n    public Sample(String name, int num) {\n        this.name = name;\n        this.num = num;\n    }\n}\n\npublic class SubSample extends Sample {\n    int price;\n    public SubSample(int price) {\n        this.price = price;\n    }\n    public SubSample(String name, int num, int price) {\n        super(name, num);\n        this(price);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        SubSample s1 = new SubSample(100);\n        SubSample s2 = new SubSample(\"sample\", 200, 100);\n        System.out.println(s1.name + \",\" + s1.num + \",\" + s1.price);\n        System.out.println(s2.name + \",\" + s2.num + \",\" + s2.price);\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q53",
        "number": 53,
        "type": "single",
        "selectCount": 1,
        "title": "抽象メソッド未実装",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は E。論点は「抽象メソッド未実装」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 抽象メソッド未実装"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "53. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\ninterface A {\n    public void sample();\n}\n\ninterface B extends A {\n    public void test();\n}\n\nabstract class C implements B {\n    public void test() {\n        System.out.println(\"A\");\n    }\n}\n\nclass D extends C {\n    public void test() {\n        System.out.println(\"B\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        C c = new D();\n        c.test();\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q54",
        "number": 54,
        "type": "multiple",
        "selectCount": 2,
        "title": "try-catch-finallyの構文",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は A・C。論点は「try-catch-finallyの構文」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: try-catch-finallyの構文"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "PDF原文照合済みテキスト",
            "code": "54. 例外処理に関する説明として、正しいものを選びなさい。（2つ選択）"
          }
        ]
      },
      {
        "id": "ch07-q55",
        "number": 55,
        "type": "single",
        "selectCount": 1,
        "title": "catchの到達可能性",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は C。論点は「catchの到達可能性」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: catchの到達可能性"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]55. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1. public class Main {\n2. public static void main(String[] args) {\n3. try {\n4. throw new Exception();\nDe } catch (Exception e) {\n6. throw new RuntimeException();\n1. } catch (RuntimeException e) {\n8. System.out.println(\"A\");\n9. } finally {\n10. System.out.println(\"B\");\n11. }\n12, }\n13. }\nA. A が表示される\nB.B が表示される\nCc. コンパイルエラーが発生する\nD. 実行時に例外がスローされる"
          }
        ]
      },
      {
        "id": "ch07-q56",
        "number": 56,
        "type": "single",
        "selectCount": 1,
        "title": "文字列プールとintern",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "[false, true, false] CRMANSD"
          },
          {
            "key": "B",
            "text": "[true, true, true]」 と表示される"
          },
          {
            "key": "C",
            "text": "「true, false, false]」 と表示される"
          },
          {
            "key": "D",
            "text": "「true, true, false] と表示される"
          },
          {
            "key": "E",
            "text": "[false, false, false] と表示される | = Pasi"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": {
          "summary": "正解は A。論点は「文字列プールとintern」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 文字列プールとintern"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]56. 次のプログラムをコンパイル 、 実行した結果として 、 正しいものを\nなさい 。(1 つ選択 )\n1. public class Main {\n2s public static void main(String[] args) {\n3. String s1 = new String(\"Java\");\n4. String s2 = \"Java\";\n5, String s3 = s2.intern();\n6. System.out.print((s1 == s2) +\", \");\nTe System.out.print((s2 == $3) +\", \");\n8. System.out.println(s1 == s3);\n9, }\n10. }\nA.  [false, true, false] CRMANSD\nB. [true, true, true]」 と表示される\nC. 「true, false, false]」 と表示される\nD. 「true, true, false] と表示される\nE. [false, false, false] と表示される\n| = Pasi"
          }
        ]
      },
      {
        "id": "ch07-q57",
        "number": 57,
        "type": "single",
        "selectCount": 1,
        "title": "2次元char配列と拡張for文",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "「ad be cf 」と表示される"
          },
          {
            "key": "B",
            "text": "「abc def」と表示される"
          },
          {
            "key": "C",
            "text": "「ad be c f」と表示される"
          },
          {
            "key": "D",
            "text": "「adbecf 」と表示される"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "正解は E。論点は「2次元配列と二重ループ」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 2次元配列と二重ループ"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "57. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\npublic class Main {\n    public static void main(String[] args) {\n        char[][] arrays = {{'a', 'd'}, {'b', 'e'}, {'c', 'f'}};\n        for (char[] array : arrays) {\n            for (char ch : array) {\n                System.out.print(ch);\n            }\n            System.out.print(\" \");\n        }\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q58",
        "number": 58,
        "type": "single",
        "selectCount": 1,
        "title": "コンストラクタチェイン",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
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
          "summary": "正解は A。論点は「コンストラクタチェイン」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: コンストラクタチェイン"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "58. 次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\npublic class A {\n    protected A() {\n        this(2);\n        System.out.print(\"1\");\n    }\n    protected A(int a) {\n        System.out.print(a);\n    }\n}\n\npublic class B extends A {\n    B() {\n        this(4);\n        System.out.print(\"3\");\n    }\n    B(int b) {\n        System.out.print(b);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        B b = new B();\n    }\n}"
          }
        ]
      },
      {
        "id": "ch07-q59",
        "number": 59,
        "type": "single",
        "selectCount": 1,
        "title": "2次元配列のループ",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "for (int i = 1; i < 2; i++) { for (int j = 1; j < 2; j++) f System.out.print(array[i][j]);"
          },
          {
            "key": "B",
            "text": "for (int i = 0; i < 2; ++i) { for (int j = 0; j < i; t+) { System.out.print(array[iJ[j]);"
          },
          {
            "key": "C",
            "text": "for (String a: array) { for (String b : array) { System.out.println(b);"
          },
          {
            "key": "D",
            "text": "for (int i= 0; i < 2s) for (int j = 0; j < 2s) f System.out.print(array[iJ][j]);"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": {
          "summary": "正解は D。論点は「2次元配列のループ」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 2次元配列のループ"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "[]59. 次のプログラムを実行し 、 [abcd] と表示したい 。「// insert cog.\nhere] に入るコードとして 、 正しいものを選びなさい。(1 つ選択)\n1, public class Sample {\n2. public static void main(String[] args) {\n3, String[][] array = new String[2][2];\n4, array[0][0] = \"a\";\n5. array[0][1] = \"b\";\n6. array[1][0] = \"c\";\nLs array(1](1] = \"d\";\n8. // insert code here\n9. }\n10. }\nA. for (int i = 1; i < 2; i++) {\nfor (int j = 1; j < 2; j++) f\nSystem.out.print(array[i][j]);\n}\n}\nB. for (int i = 0; i < 2; ++i) {\nfor (int j = 0; j < i; t+) {\nSystem.out.print(array[iJ[j]);\n}\n}\nC. for (String a: array) {\nfor (String b : array) {\nSystem.out.println(b);\n}\n| }\nD. for (int i= 0; i < 2s)\nfor (int j = 0; j < 2s) f\nSystem.out.print(array[iJ][j]);\njtt;\n}\ni++;\n}"
          }
        ]
      },
      {
        "id": "ch07-q60",
        "number": 60,
        "type": "single",
        "selectCount": 1,
        "title": "配列要素nullとString#concat",
        "prompt": "次の問題文・コード・選択肢を読み、正しい選択肢を選びなさい。",
        "options": [
          {
            "key": "A",
            "text": "e0 el"
          },
          {
            "key": "B",
            "text": "null e0 null e1"
          },
          {
            "key": "C",
            "text": "null null"
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
          "summary": "正解は D。論点は「配列要素nullとString#concat」。問題文・コード・選択肢はPDF原文照合を強化したテキスト形式です。",
          "points": [
            "選択肢本文はこの問題カード内のテキストを基準にしてください。",
            "Javaコード中の記号・大文字小文字・括弧・セミコロンは、テキスト化時に記号・大文字小文字を確認しています。",
            "この問題の中心論点: 配列要素nullとString#concat"
          ]
        },
        "source": "7章-1 模擬試験.pdf / 7章-2 解説.pdf（PDF原文照合強化版）",
        "codeBlocks": [
          {
            "title": "問題文・コード（テキスト化）",
            "code": "(160. 次のプログラムをコンパイル 、 実行したときの結果として 、 正しいもの\nを選びなさい。(1 つ選択 )\n1. public class Main {\n2. public static void main(String[] args) {\n3. String[] str = new String[2];\n4, int i = 0;\n5. for (String s : str) {\n6. str[i].concat(\"e\" + i);\n7. i++;\n8. }\n9, for (i = 0; i < str.length; i++) {\n10. System.out.println(str[i]);\n11. }\n12. }\n13. }\nA. e0\nel\nB. null e0\nnull e1\nC. null\nnull\nD. 実行時に例外がスローされる"
          }
        ]
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
          "summary": "ローカル変数cが初期化されないまま参照されるためコンパイルエラー。longリテラルのLは表示結果には出ない。",
          "points": [
            "ローカル変数は使用前に明示的な初期化が必要。",
            "nullは参照型用の値であり、longには入らない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "code": "public class A {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n\nclass B {\n    public static void main(String[] args) {\n        System.out.println(\"B\");\n    }\n}"
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
          "summary": "publicクラス名がAなのでファイル名A.javaは正しい。AとBの両方にmainがあるため、A.class/B.class生成後はjava Aもjava Bも実行できる。",
          "points": [
            "1つのソースファイルにpublicでないクラスを複数書ける。",
            "実行時はクラス名を指定する。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Value / Main",
            "code": "public class Value {\n    private String contents;\n    public Value(String contents) {\n        super();\n        this.contents = contents;\n    }\n    public Value() {\n        this.contents = \"\";\n    }\n    public static void print() {\n        System.out.println(contents);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Value.print();\n    }\n}"
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
          "summary": "staticメソッドprintから非staticフィールドcontentsを直接参照しているためコンパイルエラー。",
          "points": [
            "staticメソッドから直接扱えるのはstaticメンバーだけ。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "0b0110はintリテラルの6。Number型引数に渡すとIntegerへオートボクシングされるため、Integerの分岐に入る。",
          "points": [
            "intはIntegerにボクシングされる。",
            "ByteやShortにはならない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "test(null)によりstr.equalsIgnoreCase(\"\")でNullPointerExceptionが発生する。これはRuntimeExceptionのサブクラスなのでBが出力される。",
          "points": [
            "catchは上から評価され、最初に互換性のある型で処理される。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Main / A / B / C",
            "code": "public class Main {\n    public static void main(String[] args) {\n        B b = new C();\n        A t = new C();\n\n        b.test(1);        // (1)\n        (A)b.test(2);     // (2)\n        ((A)b).test(3);   // (3)\n        t.test(4);        // (4)\n        (A)t.test(5);     // (5)\n        ((A)t).test(6);   // (6)\n    }\n}\n\nsealed interface A permits C { // (7)\n    void test(int i);\n}\n\nclass B { // (8)\n    public static final int NUM = 2;\n}\n\nfinal class C extends B implements A { // (9)\n    @Override\n    public void test(int i) {\n        System.out.println(i * B.NUM);\n    }\n}"
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
          "summary": "B型にはtestメソッドが存在しないため、b.test(1)と(A)b.test(2)がコンパイルエラー。キャストよりメソッド呼び出しが先に解釈される点が罠。",
          "points": [
            "((A)b).test(3)のように括弧でキャストを先に評価させればよい。",
            "sealed interface A permits Cとfinal class C implements Aは成立する。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Main / A / B",
            "code": "public class Main {\n    public static void main(String[] args) {\n        A b = new B();\n        System.out.print(b.data + \",\" + b.getData() + \"|\");\n        b.data = 20;\n        System.out.print(b.data + \",\" + b.getData() + \"|\");\n        B s = (B)b;\n        System.out.print(s.data + \",\" + s.getData() + \"|\");\n        s.data = 21;\n        System.out.print(s.data + \",\" + s.getData() + \"|\");\n    }\n}\n\nclass A {\n    public int data = 10;\n    public int getData() {\n        return data;\n    }\n}\n\nclass B extends A {\n    int data = 11;\n    public int getData() {\n        return data;\n    }\n}"
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
          "summary": "フィールドアクセスは参照変数の型で決まり、メソッド呼び出しは実体の型で決まる。A型のb.dataはA.data、b.getData()はB側メソッドになる。",
          "points": [
            "B#getData内のdataはB.dataを指す。",
            "キャスト後のB型変数ではB.dataに直接アクセスする。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "SampleException / Sample",
            "code": "public class SampleException extends RuntimeException {}\npublic class ExceptionA extends SampleException {}\npublic class ExceptionB extends SampleException {}\n\npublic class Sample {\n    public static void main(String[] args) {\n        try {\n            test();\n        } catch (ExceptionA e) {\n            System.out.println(\"A\");\n        } catch (SampleException e) {\n            System.out.println(\"B\");\n        } catch (RuntimeException e) {\n            System.out.println(\"C\");\n        } catch (Exception e) {\n            System.out.println(\"D\");\n        } finally {\n            System.out.println(\"E\");\n        }\n    }\n\n    private static void test() throws ExceptionA {\n        throw new ExceptionA();\n    }\n}"
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
          "summary": "ExceptionAがスローされ、最初のcatch(ExceptionA)でAが出力される。その後finallyでEが出力される。",
          "points": [
            "catch後でもfinallyは実行される。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "switch式のアロー形式はフォールスルーしない。70→B、80→A、90→A、95→E、40→C、20→D、10→D、60→B。",
          "points": [
            "switch式では全分岐が値を返す必要がある。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Item / Sample",
            "code": "public record Item(String name) {\n}\n\npublic class Sample {\n    public static void main(String[] args) {\n        List<Item> list = new ArrayList<Item>();\n        // insert code here\n    }\n}"
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
          "summary": "record Item(String name)には引数なしコンストラクタがない。ObjectをItemへダウンキャストすると実行時にClassCastException。",
          "points": [
            "recordの標準コンストラクタはnullや空文字列自体は拒否しない。",
            "ArrayListはnull要素を許容する。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "文字列リテラル\"sample\"はコンスタントプールで1つ共有される。new String(\"sample\")が2回あるため、合計3つ。",
          "points": [
            "参照のコピーでは新しいインスタンスは作られない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Test / SampleException / Sample",
            "code": "public class Test implements AutoCloseable {\n    public void close() throws Exception {\n        System.out.println(\"C\");\n    }\n}\n\npublic class SampleException extends Exception {}\n\npublic class Sample {\n    public static void main(String[] args) {\n        try (Test t = new Test()) {\n            throw new SampleException();\n        } catch (Exception e) {\n            System.out.println(\"A\");\n        } finally {\n            System.out.println(\"B\");\n        }\n    }\n}"
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
          "summary": "tryブロックで例外が発生すると、先にリソースのcloseが呼ばれC、次にcatchでA、最後にfinallyでB。",
          "points": [
            "try-with-resourcesはcatchより前にcloseを実行する。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "interfaceの抽象メソッドは暗黙的にpublic。Cは正しく実装し、Eはabstractクラスなので未実装でもよい。",
          "points": [
            "privateにするとアクセスを狭めるため不可。",
            "引数や戻り値が違うとオーバーライドにならない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int[] numbers = {1,2,3,4,5,6,7,8,9,10};\n        for (int i : numbers) {\n            try {\n                if (test(i)) {\n                    System.out.println(i);\n                }\n            } catch (SampleException e) {\n                continue;\n            }\n        }\n    }\n\n    private static boolean test(int num) throws Exception {\n        for (int i = 2; i < num; i++) {\n            if (num % i == 0) {\n                throw new SampleException();\n            }\n            return true;\n        }\n    }\n}\nclass SampleException extends Exception {}"
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
          "summary": "testメソッドはbooleanを返す必要があるが、for文の外にreturnがなく、戻り値が保証されないためコンパイルエラー。",
          "points": [
            "コンパイラは全経路でreturnがあるかを見る。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "A / B / Sample",
            "code": "public interface A {\n    default void hello() {\n        System.out.println(\"A\");\n    }\n}\n\npublic interface B {\n    default void hello() {\n        System.out.println(\"B\");\n    }\n}\n\npublic class Sample implements A, B {\n    // some code\n}"
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
          "summary": "複数インタフェースの同名defaultメソッドが競合するため、Sampleはhelloを実装して明示的に解決する必要がある。default実装の呼び出しはInterfaceName.super.method()。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "sealed interfaceを実装するクラスは、許可されたクラスであり、かつsealed/non-sealed/finalのいずれかで修飾される必要がある。BとCが条件を満たす。",
          "points": [
            "sealed classにするならpermits句または許可サブクラスが必要。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample / A / B",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        A b = new B();\n        b.test();\n    }\n}\n\nsealed class A {\n    public void test() {\n        System.out.println(\"A\");\n    }\n}\n\nfinal class B extends A {\n    private void hello() {\n        System.out.println(\"B\");\n    }\n    public void test() {\n        hello();\n    }\n}"
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
          "summary": "A型変数でBインスタンスを参照しても、オーバーライドされたB#testが実行される。その中でhelloが呼ばれBが表示される。",
          "points": [
            "同一ファイル内のfinal class B extends Aによりsealed Aのpermits省略が成立する。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "a()でresultは1、b()で3。どちらもtrueなのでa()!=b()はfalseとなりelseで+4、合計7。",
          "points": [
            "|と&は右辺も評価する。||は左辺trueなら右辺を評価しない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "クラス名.メソッド名で呼べるのはstaticメソッド。さらにprivateは他クラスから呼べないため、aとpublic staticのcが正しい。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "abstract classに具象finalメソッドを定義することは可能。finalとabstractの同時指定、sealedのサブクラス修飾不足、抽象メソッドの誤記述は不可。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "code": "import java.util.Arrays;\nimport java.util.List;\n\npublic class Sample {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(new String[]{\"A\", \"B\", \"C\", \"D\", \"E\"});\n        for (String word : words) {\n            switch (word) {\n                case \"B\" : continue;\n                case \"D\" : break;\n                default : System.out.print(word);\n            }\n            System.out.print(\":\");\n        }\n    }\n}"
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
          "summary": "Bではcontinueでループ次回へ進み、Dではswitch内break後に「:」だけ出る。結果はA:C::E:。",
          "points": [
            "switch内のbreakはswitchだけを抜ける。",
            "continueは外側のforの次反復へ進む。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int num = 2;\n        while (num < 5) {\n            switch (num % 2) {\n                case 0: num++; break;\n                case 1: num++;\n            }\n        }\n        System.out.println(num);\n    }\n}"
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
          "summary": "numは2→3→4→5と増え、num<5がfalseになってwhileを抜けるため5が表示される。",
          "points": [
            "switch内breakはwhileを抜けるものではない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "Fは2つ目の配列の3番目の要素。配列添字は0始まりなのでi=1、j=2。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "PDF解説上は、パターン変数strのスコープ外参照としてコンパイルエラー。実際のJavaバージョン差が出やすい論点なので、必要ならコンパイラで確認すること。",
          "points": [
            "PDFの正答はD。",
            "instanceofパターン変数のフロースコープは試験バージョン依存で要注意。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "varはローカル変数に使える。Aは警告はあり得るがコンパイル可能、Eはフィールドxとローカル変数xの別スコープなので可能。",
          "points": [
            "フィールド、recordコンポーネント、引数にはvarを使えない。",
            "varでnull単独初期化は型推論できない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "コンストラクタのi=++iは引数ローカル変数への代入で、フィールドiは0のまま。i++の値で3の倍数判定を行い、j=0,3,6,9を加算して18。",
          "points": [
            "this.iに代入していない点が罠。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample / A / B",
            "code": "public class Sample {\n    public static void main(String[] args) {\n        B b1 = new B();\n        A a1 = new B();\n        B b2 = new B(20);\n        A a2 = new B(10);\n\n        b1.print();\n        b2.print();\n        a1.print();\n        a2.print();\n    }\n}\n\nabstract class A {\n    int value;\n    public A() { this.value = 100; }\n    public A(int value) { this.value = value; }\n    public void print() { System.out.print(\"result=\" + value); }\n    abstract void print(int value);\n}\n\nclass B extends A {\n    int value;\n    public B() { this.value = 200; }\n    public B(int value) { this.value = value; }\n    @Override\n    public void print(int value) { System.out.print(\"result=\" + value); }\n}"
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
          "summary": "呼び出しているのは常に引数なしprint()で、A側のメソッド。A#printはA.valueを表示するため、B側valueの設定に関係なく100が4回出る。",
          "points": [
            "Bのprint(int)はオーバーロードであり、A#print()のオーバーライドではない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "code": "public class Sample {\n    public static void main(String[] args) {\n        int[] values = {1, 4, 2, 5, 3};\n        int num = 0;\n        for (int value : values) {\n            switch (value) {\n                case 1: num++;\n                case 2: num++; break;\n                case 3: ++num;\n                case 4: ++num; break;\n                case 5: num++;\n                default: --num;\n            }\n        }\n        System.out.println(num);\n    }\n}"
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
          "summary": "case 1とcase 5はbreakがないためフォールスルーする。順に処理するとnumは6になる。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Trash / CacheTrash",
            "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Trash {\n    List<String> list = new ArrayList<>();\n    protected Trash(String val) {\n        add(val);\n    }\n    public boolean test(String val) {\n        return true;\n    }\n    public void delete(String val) {\n        list.remove(val);\n    }\n    public final void add(String val) {\n        list.add(val);\n    }\n}\n\npublic class CacheTrash extends Trash {\n    private String tmp = null;\n    public CacheTrash() {\n        super(null);\n    }\n    public boolean test(String val) {\n        return list.contains(val);\n    }\n    public void delete(String val) {\n        this.tmp = val;\n    }\n    public void flush() {\n        super.delete(tmp);\n    }\n}"
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
          "summary": "addはfinalなのでTrashの実装を継承し、listに追加する。flushはsuper.delete(tmp)を呼ぶ。コンストラクタsuper(null)によりnullがaddされる。",
          "points": [
            "パッケージアクセスのlistは、異なるパッケージのサブクラスからは参照できない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample / Main",
            "code": "public class Sample {\n    private String value;\n    public void setValue(String value) {\n        value = \"Hello, \" + value;\n    }\n    public String toString() {\n        return value;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        s.setValue(\"Java\");\n        System.out.println(s.toString());\n    }\n}"
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
          "summary": "setValue内のvalueは引数ローカル変数であり、フィールドvalueは変更されない。toStringはフィールドを返すのでnull。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "classファイルがない状態でも、単一ファイルのソースファイルモードとしてjava Sample.javaで実行できる。",
          "points": [
            "javacには拡張子付きファイル名が必要。",
            "javaの通常実行はクラス名を指定する。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "97と98をcharへキャストすると、それぞれaとbになる。文字列連結によりabと表示される。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "A / B",
            "code": "package ex06.a;\npublic class A {\n    String a = \"A\";\n    protected String b = \"B\";\n    public String c = \"C\";\n}\n\npackage ex06.b;\nimport ex06.a.A;\npublic class B extends A {\n    public void test() {\n        System.out.println(/* blank */);\n    }\n}"
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
          "summary": "A#aはパッケージアクセスなので別パッケージのBからアクセス不可。protectedのbとpublicのcはアクセス可能。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "varでは右辺から型推論できる必要がある。配列生成式new Float[]やnew double[]なら推論できる。",
          "points": [
            "配列初期化子だけではvarの型推論はできない。",
            "new Double{...}は[]がないため不正。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "A / B / Main",
            "code": "public class A {\n    private String value;\n    public String getValue() { return value; }\n    public void setValue(String value) { this.value = value; }\n    public String toString() { return getValue(); }\n}\n\npublic class B extends A {\n    public void setValue(String value) {\n        super.setValue(\"[\" + value + \"]\");\n    }\n    public void setValue(String... values) {\n        setValue(test(values));\n    }\n    private String test(String... values) {\n        var sb = new StringBuilder();\n        for (String value : values) {\n            sb.append(value + \",\");\n        }\n        return sb.toString();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        a.setValue(args);\n    }\n}"
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
          "summary": "変数aの型はAなので、呼び出せるのはAに定義されたメソッドだけ。AにはString[]を受け取るsetValue(String...)がない。",
          "points": [
            "実体がBでも、コンパイル時のメソッド解決は参照変数の型で行う。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "A / B / Main",
            "code": "package ex23.a;\npublic class A {\n    public int num = 10;\n}\n\npackage ex23.b;\nimport ex23.a.A;\npublic class B extends A {\n    int num = 20;\n}\n\npackage ex23;\nimport ex23.a.A;\nimport ex23.b.B;\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.num);\n    }\n}"
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
          "summary": "aの型はAなのでa.numはAのpublicフィールドを参照する。Bにもnumはあるが、フィールドはポリモーフィックに解決されない。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample / Test",
            "code": "public class Sample {\n    String name;\n}\n\nimport java.util.ArrayList;\n\npublic class Test {\n    var sample = new ArrayList<Sample>();        // 4\n    public var test() {                          // 5\n        var sample = new Sample();               // 6\n        var samples = new ArrayList<>();         // 7\n        samples.add(\"Java\");                    // 8\n        samples.add(\"Lambda\");                  // 9\n        for (var s : samples) {                  // 10\n            System.out.println(s);               // 11\n        }\n    }\n}"
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
          "summary": "varはローカル変数宣言専用。4行目のフィールド宣言、5行目の戻り値型には使えない。",
          "points": [
            "for (var s : samples) はローカル変数なので使用可能。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "A / B",
            "code": "public class A {\n    private int num;\n    public A(int num) {\n        this.num = num;\n    }\n}\n\npublic class B extends A {\n    private String val;\n    public B(String val, int num) {\n        // blank\n    }\n}"
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
          "summary": "BはAを継承しており、Aにはint引数のコンストラクタしかない。サブクラスのコンストラクタ先頭でsuper(num)を呼ぶ必要がある。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "floatからintへの代入はデータ欠損の可能性があるため暗黙変換できない。明示的キャストが必要。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "String配列の未代入要素はnull。要素数5の0番目と4番目はnullのまま表示される。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample / Main",
            "code": "public class Sample {\n    static String header = \"A:\";\n    private String value = \"B\";\n    public static String getValue() {\n        return new Sample().value;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        // blank\n    }\n}"
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
          "summary": "headerはstaticでパッケージアクセス、getValue()はpublic static。privateなvalueへは外部から直接アクセスできない。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample / Main",
            "code": "public class Sample {\n    public void test(Object[] val) { System.out.println(\"A\"); }\n    public void test(long[] val) { System.out.println(\"B\"); }\n    public void test(Object val) { System.out.println(\"C\"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Sample().test(new int[3]);\n    }\n}"
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
          "summary": "int[]はObjectとして扱えるが、Object[]やlong[]とは互換性がない。最も適用可能なのはtest(Object)。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "staticメソッドtestから非staticフィールドnumを直接参照しているためコンパイルエラー。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "Stringのreplaceやsubstringは新しい文字列を返すだけで、元のStringは変更しない。戻り値を代入していないためabcdeのまま。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "num++ + numは0+1で1。その後文字列連結になり、++numで2、最後のnumも2なので「1,22」。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "Bはcontinueで表示されず、Cを表示した後にbreakでループ終了。表示されるのはAとC。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "int[2][4]で作った2次元目の配列を、それぞれ長さ4と長さ2の配列に差し替えている。拡張for文は実際の配列長だけ回る。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "concatの戻り値は代入しているが、replaceの戻り値は捨てているためABCのまま。最後にCを連結してABCC。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample / Main",
            "code": "public class Sample implements AutoCloseable {\n    @Override\n    public void close() throws Exception {\n        System.out.println(\"C\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        try (Sample s = new Sample()) {\n            throw new Exception();\n        } catch (Exception e) {\n            System.out.println(\"A\");\n        } finally {\n            System.out.println(\"B\");\n        }\n    }\n}"
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
          "summary": "try内で例外が発生した場合、リソースのcloseでC、catchでA、finallyでBの順に出力される。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "continueの直後にあるcnt++は到達不能コードになるためコンパイルエラー。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "Fは引数が同じで戻り値がList<Number>のサブタイプなのでオーバーライド可能。Bは引数がTreeSetで別シグネチャのオーバーロードになるため定義可能。",
          "points": [
            "ジェネリクスの型引数が違うだけのSet<String>は型消去後の衝突に注意。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "配列変数は[]で宣言し、new 型[要素数]でインスタンスを生成する。要素数は変数宣言側には書かない。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "二次元配列array1.clone()は1次元目だけ新しい配列を作り、内側のchar[]参照は共有する。したがってarray1[1]とarray2[1]は同じ。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "A / B / C / Sample",
            "code": "class A {\n    public A() { System.out.print(\"A\"); }\n}\nclass B extends A {\n    public B() { System.out.print(\"B\"); }\n}\nclass C extends B {\n    public C() { System.out.print(\"C\"); }\n}\npublic class Sample {\n    public static void main(String[] args) {\n        new C();\n    }\n}"
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
          "summary": "C生成時にスーパークラスのコンストラクタが先に実行される。A→B→Cの順に表示。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "抽象クラスには具象メソッドも抽象メソッドも定義できる。実装なしならabstractが必要で、abstractメソッドに本体は書けない。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "コンストラクタでフィールドa,bは二乗されるが、mainで表示しているのはローカル変数a,b。したがって2,3が表示される。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Test / Main",
            "code": "class Test {\n    public int num;\n    public Test(int num) { this.num = num; }\n    public int getNum() { return num; }\n    public void modify(int x) { num += x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Test t = new Test(100);\n        // blank\n        System.out.println(t.getNum());\n    }\n}"
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
          "summary": "t.numに直接0を代入すればよい。modifyは加算なので、現在値100の符号反転値-100を渡せば0になる。",
          "points": [
            "static main内でthisは使えない。",
            "戻り値に代入することはできない。"
          ]
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "引数名とフィールド名が同じなので、this.valueでフィールドを明示して代入する必要がある。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
            "title": "Sample / Test",
            "code": "abstract class Sample {\n    protected void doProcess() {}\n    abstract void doTest();\n}\n\npublic class Test extends Sample {\n    void doProcess() {}\n    protected void doTest() {}\n}"
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
            "text": "Testクラスの2行目のメソッドをpublicにする"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": {
          "summary": "protectedメソッドをオーバーライドするとき、アクセスをより狭いデフォルトにできない。Test#doProcessをprotectedまたはpublicにすればよい。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
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
          "summary": "setAllで右からsetD(x)が10を返し、this.c、b、aに順に10が代入される。toStringの表示は全フィールド10。",
          "points": []
        },
        "source": "8章-1 模擬問題2.pdf / 8章-2 解説.pdf",
        "status": "verified_text_from_pdf"
      }
    ]
  }
};
