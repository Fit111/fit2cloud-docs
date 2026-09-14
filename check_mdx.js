// 临时脚本：用站点自带的 @mdx-js/mdx 编译验证 integrate_third_party.md
const fs = require('fs');
const path = require('path');
const { compile } = require('@mdx-js/mdx');

const file = path.join(__dirname, 'ai-gateway-docs', 'integrate_third_party.md');
const src = fs.readFileSync(file, 'utf8');

compile(src, { jsx: false })
  .then(() => {
    console.log('MDX COMPILE OK');
    process.exit(0);
  })
  .catch((e) => {
    console.error('MDX COMPILE FAILED:', e.message);
    process.exit(1);
  });
