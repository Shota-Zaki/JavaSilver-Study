# Firestore学習履歴同期

学習履歴は、親ドキュメント1件へ全データを格納せず、次の構造で分割保存します。

```text
javaStudyProgress/{userId}
└─ historyChunks/{uploadId-index}
```

親ドキュメントには有効な保存世代、分割数、合計バイト数などのメタデータだけを保存します。履歴本体はUTF-8で最大700 KiBごとに分割します。

## 既存データとの互換性

従来の親ドキュメント内 `payload` 形式は読み込み可能です。次回のクラウド保存時に分割形式へ切り替わり、親ドキュメントの旧 `payload` は削除されます。

## Firestore Security Rules

サブコレクションへの読み書きを許可するため、同梱の `firestore.rules` をFirebaseプロジェクトへ反映してください。

Firebase CLIを使用する場合：

```bash
firebase deploy --only firestore:rules
```

Firebaseコンソールを使用する場合は、Firestore Databaseのルール画面へ `firestore.rules` の内容を反映して公開します。
