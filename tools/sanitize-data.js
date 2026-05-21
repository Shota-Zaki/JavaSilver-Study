const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '../data/questions.js');
if (!fs.existsSync(file)) {
  console.error('data/questions.js が見つかりません。既存サイトへこのパッチを上書きした後に実行してください。');
  process.exit(1);
}
const prefix = 'window.JAVA_STUDY_DATA = ';
let raw = fs.readFileSync(file, 'utf8').trim();
if (!raw.startsWith(prefix)) throw new Error('questions.js の形式が想定外です。');
let data = JSON.parse(raw.slice(prefix.length).replace(/;\s*$/, ''));
const patterns = [
  /黒本/g,
  /\bPDF\b/gi,
  /[0-9０-９]+章[-ー－]?[12]?\s*[^\s/\\]*\.pdf/gi,
  /模擬試験\.pdf/gi,
  /模擬問題2?\.pdf/gi,
  /解説\.pdf/gi,
  /問題\.pdf/gi,
  /Z0[-ー－]?8\d{2}[-ー－]?JPN/gi
];
function cleanText(s) {
  if (typeof s !== 'string') return s;
  for (const p of patterns) s = s.replace(p, '');
  return s.replace(/\s{2,}/g, ' ').trim();
}
function walk(obj) {
  if (Array.isArray(obj)) return obj.map(walk);
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      if (key === 'source' || key === 'sourceRef' || key === 'copyright' || key === 'origin') {
        delete obj[key];
      } else {
        obj[key] = walk(obj[key]);
      }
    }
    return obj;
  }
  return cleanText(obj);
}
data = walk(data);
for (const ch of data.chapters || []) {
  if (ch.title) {
    ch.title = ch.title
      .replace(/^第\s*([0-9０-９]+)\s*章[：:　\s-]*/u, 'セクション$1：')
      .replace(/模擬試験/g, '総合演習')
      .replace(/模擬問題/g, '総合演習');
  }
}
data.version = (data.version || 'java-study') + '-clean-ui';
fs.writeFileSync(file, prefix + JSON.stringify(data, null, 2) + ';\n', 'utf8');
console.log('data/questions.js から危険な出典表記・source系フィールドを削除しました。');
