const { execSync } = require('child_process');
try {
  execSync('npx --yes create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm', { stdio: 'inherit' });
  console.log('Success');
} catch (e) {
  console.error('Failed:', e.message);
}
