import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const requiredFiles = ['AGENTS.md', 'task-list.md', 'NEXT_WORK.md'];
const excludedDirs = new Set([
  '.git',
  'node_modules',
  '.gradle',
  '.cache',
  '.astro',
  'build',
  'dist',
  'coverage',
  'test-results',
]);
const textExtensions = new Set([
  '.md', '.html', '.css', '.js', '.mjs', '.cjs', '.json', '.txt', '.yml', '.yaml',
]);

const errors = [];
const counts = { text: 0, json: 0, javascript: 0 };

for (const relativePath of requiredFiles) {
  if (!existsSync(path.join(root, relativePath))) {
    errors.push(`missing required file: ${relativePath}`);
  }
}

const workflowsDir = path.join(root, '.github', 'workflows');
if (existsSync(workflowsDir) && readdirSync(workflowsDir).length > 0) {
  errors.push('GitHub Actions workflows must not exist under .github/workflows');
}

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const absolutePath = path.join(directory, entry);
    const relativePath = path.relative(root, absolutePath);
    const stat = statSync(absolutePath);

    if (stat.isDirectory()) {
      if (!excludedDirs.has(entry)) walk(absolutePath);
      continue;
    }

    const extension = path.extname(entry).toLowerCase();
    if (!textExtensions.has(extension)) continue;

    counts.text += 1;
    const text = readFileSync(absolutePath, 'utf8');
    if (text.includes('\uFFFD')) {
      errors.push(`invalid UTF-8 replacement character detected: ${relativePath}`);
    }

    if (extension === '.json') {
      counts.json += 1;
      try {
        JSON.parse(text);
      } catch (error) {
        errors.push(`invalid JSON: ${relativePath}: ${error.message}`);
      }
    }

    if (['.js', '.mjs', '.cjs'].includes(extension)) {
      counts.javascript += 1;
      const result = spawnSync(process.execPath, ['--check', absolutePath], {
        encoding: 'utf8',
      });
      if (result.status !== 0) {
        errors.push(`JavaScript syntax error: ${relativePath}: ${(result.stderr || result.stdout).trim()}`);
      }
    }
  }
}

walk(root);

if (errors.length > 0) {
  console.error(JSON.stringify({ result: 'FAIL', counts, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ result: 'PASS', counts }, null, 2));
