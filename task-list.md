# task-list.md

このファイルは進行・Task状態・scope・Acceptance Criteria・残件の唯一の文書正本です。

## Current Task

- currentTask: `未設定`
- status: `waiting`
- completionPercentage: `0%`
- branch: `work`

ユーザーが次Taskを明示するまで、新しい実装Taskを推測して開始しません。

## Remaining Tasks

- Active: なし
- Ready: なし
- Planned: なし
- Blocked / Deferred: なし
- Unset: Repository ownerによる次Task設定

## Repository operation policy

- GitHub Actionsは使用しない。
- `work`へのcommit / push / scope内mergeは都度確認なしで実行可能。
- `main`へのmergeは必ず直前にユーザー確認を行う。
- READMEへ現在TaskやHEAD等のlive値を記録しない。
- **すべての作業で、このファイルと`NEXT_WORK.md`を必ず更新する。**
- 検証方法は既存Repository仕様に従い、この運用統一では変更しない。

## Repository Operations Log

### 2026-09-02 — ChatGPT/Codex検証入口

- `npm run verify:agent`を追加した。
- 依存なしのローカル検査で管理ファイル、Actions不在、JSON parse、JavaScript構文、UTF-8を確認する。
- `VERIFY_AGENT.md`に固定SHA、Task固有追加検証、未実施の扱い、証拠記録ルールを定義した。
- 将来Taskで必要になるブラウザ・教材内容検証はAcceptance Criteriaから追加実行する。
