const fs = require('fs');
const { execSync } = require('child_process');

try {
  console.log("Starting npm install...");
  const out = execSync('npm install', { encoding: 'utf-8' });
  fs.writeFileSync('npm_output.txt', out);
} catch (e) {
  fs.writeFileSync('npm_error.txt', e.message + '\n\n' + e.stdout + '\n\n' + e.stderr);
}
