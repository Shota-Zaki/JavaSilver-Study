# Repository Operating Rules

## 1. 基本原則

- `task-list.md`をTask状態、scope、Acceptance Criteria、残件の唯一の文書正本とする。
- `NEXT_WORK.md`を次担当が行う直近1工程のポインタとする。
- 現在Taskが未設定の場合、ユーザーの明示指示なしに新規Taskを作成・開始しない。
- 既存の設計、技術仕様、データ仕様、検証方法は各Repository文書・コードを正とする。本ファイルは検証方法を新規定義・変更しない。

## 2. GitHub Actions

- GitHub Actionsは使用しない。
- workflowの起動・再実行・結果確認・Artifact取得を、作業、検証、レビュー、完了判定、公開判定に使用しない。
- `.github/workflows/`を新規追加・再追加しない。

## 3. Git操作

- 恒久作業Branchは`work`とする。
- `work`へのcommit / pushは、currentTaskのscope内なら都度のユーザー確認なしで実行してよい。
- 既存の作業Branchから`work`へのmergeも、scope内であれば都度確認なしで実行してよい。
- **`main`へのmergeは、実行直前に必ずユーザーへ確認し、明示承認後のみ行う。**
- `main`への直接push、force push、rebase、共有履歴の書き換えは禁止する。
- deploy、外部公開、課金、破壊的変更、重大な仕様変更は、既存ルールまたはユーザーの明示承認に従う。

## 4. 管理文書

- **すべての作業で、最終報告前に必ず`task-list.md`を更新する。**
- **すべての作業で、最終報告前に必ず`NEXT_WORK.md`を更新する。**
- 次Taskが未設定なら勝手に作らず、`未設定`と記録する。
- branch / PR / HEADなどのlive値は必要時にGitHubから取得し、READMEへ固定しない。

## 5. README

- READMEには現在Task、Current HEAD、Review HEAD、現在PR、liveな進捗率を書かない。
- READMEはプロジェクト概要、技術構成、セットアップ、静的な運用説明、管理文書への案内に限定する。

## 6. 最終報告

最終返答には最低限、次を含める。

1. `今回の作業内容` — Task ID、作業種類、実施内容
2. `検証結果` — Repositoryで既に定義されている検証結果。未実施を成功扱いしない
3. `現在の状態` — Status、Branch、PR、Review状態、main反映状態
4. `残タスク一覧` — Active / Ready / Planned / Blocked / Deferred等を区別して省略しない
5. `完成度` — **必ずXX%形式で表示**。currentTaskは原則 `完了Acceptance Criteria数 ÷ Acceptance Criteria総数 × 100` を整数丸めして算出し、別基準なら根拠を併記する
6. `問題・残件` — Blocking、Non-blocking、未達Acceptance Criteria
7. `次の作業` — Task ID、作業種類、次に行う1工程
8. `ユーザー確認が必要な操作` — 少なくとも`main`へのmerge。ほかに承認が必要な操作も併記する
