import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

// 注册自定义的大写 JSX 组件，用于文档里的"图 + 图注"标准模板。
// - PascalCase 让 MDX 编译期按 JSX 解析，属性里允许写 `style={{...}}` 对象写法；
// - 运行时再渲染成真正的 <img>/<div>，React 在 SSR 阶段也能拿到对象形式 style。
export default {
  ...MDXComponents,
  Img: (props) => <img {...props} />,
  FigCap: ({ children, ...props }) => (
    <div {...props}>{children}</div>
  ),
};
