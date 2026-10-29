---
title: 与其他插件交互
description: 实现 Halo 插件之间的协作，配置插件依赖、通过事件总线共享数据，并设计可供其他插件接入的稳定扩展点与接口
---

插件之间需要协作时，按是否共享 Java 类型选择方式：

- [插件依赖](./dependency.md)：必须直接调用另一个插件的 Java API 时，声明运行时依赖。
- [共享 Java API](./shared-java-api.md)：把公共接口放到独立 API 模块。
- [共享事件](./shared-events.md)：不共享类型时，通过事件总线传递数据。
- [让插件可被扩展](./making-plugin-extensible.md)：定义可供其他插件实现的扩展点。
