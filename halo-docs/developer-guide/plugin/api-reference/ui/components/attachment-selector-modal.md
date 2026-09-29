---
title: AttachmentSelectorModal
description: 在 Halo Console 中使用 AttachmentSelectorModal 打开附件选择器，限制可接受的文件类型与选择数量，并处理可见状态、关闭和选择事件
---

此组件用于调出附件选择器，以供用户选择附件。

:::note[仅支持 Console]
此组件当前仅在 Console 中可用。
:::

## 使用示例

```vue
<script lang="ts" setup>
import { ref } from "vue";

const visible = ref(false);

function onAttachmentSelect(attachments: AttachmentLike[]) {
  console.log(attachments);
}
</script>

<template>
  <VButton @click="visible = true">选择附件</VButton>

  <AttachmentSelectorModal
    v-model:visible="visible"
    @select="onAttachmentSelect"
  />
</template>
```

## Props

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 1  Props</div>

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `visible` | boolean | false | 控制组件是否可见。 |
| `accepts` | string[] | `() => ["*/*"]` | 可选，定义可接受的文件类型。 |
| `min` | number | undefined | 可选，定义最小选择数量。 |
| `max` | number | undefined | 可选，定义最大选择数量。 |

## Emits

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 2  Emits</div>

| 事件名称 | 参数 | 描述 |
| --- | --- | --- |
| update:visible | `visible`: boolean 类型，表示可见状态。 | 当可见状态更新时触发。 |
| close | 无 | 当弹框关闭时触发。 |
| select | `attachments`: AttachmentLike[] 类型，表示附件数组。 | 当选择确定按钮时触发。 |
