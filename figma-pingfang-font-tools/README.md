# PingFang Font Tools

这是一个本地 Figma Desktop 开发插件，用来在你的本机 Figma 插件上下文中检测并批量替换字体为 `PingFang SC`。

## 为什么需要它

Figma MCP 的 `use_figma` 运行环境无法读取你的本机字体库，所以自动生成稿暂时只能使用 `Noto Sans SC`。这个插件需要你在本机 Figma Desktop 中运行，它有机会访问本机字体服务，从而加载 `PingFang SC`。

## 安装

1. 打开 Figma Desktop。
2. 进入 `Plugins` -> `Development` -> `Import plugin from manifest...`。
3. 选择本目录下的 `manifest.json`：
   `C:\Users\14575\Documents\石大文件\figma-pingfang-font-tools\manifest.json`

## 使用

1. 打开目标 Figma 文件。
2. 运行 `Plugins` -> `Development` -> `PingFang Font Tools`。
3. 先点 `扫描苹方字体`。
4. 如果能看到 `PingFang SC / Regular`、`Medium` 等样式，选择：
   - 作用范围：`整个文件`
   - 替换模式：`只替换 Noto Sans SC / Inter / 常见占位字体`
5. 点 `开始替换`。

## 如果扫描不到 PingFang

- 确认你使用的是 Figma Desktop，不是浏览器版。
- 重启 Figma Desktop。
- 确认系统字体册/字体管理器里字体可用。
- 如果仍不可见，说明 Figma Desktop 本地字体服务没有暴露该字体给插件 API。可以改用插件里能扫描到的中文字体族名称。

