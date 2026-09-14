# 发布给学生 Demo

这是从飞象老师校园版项目中独立抽取的静态演示，不依赖构建工具。

## 页面

- `index.html`：Demo 总入口
- `homework-entry-index.html`：教师发布入口汇总
- `homework-closed-loop-demo.html`：统一发布流程
- `student-entry-demo.html`：飞象老师站内学生入口方案
- `feixiangxuesheng-demo.html`：独立学生站方案
- `teacher-task-center.html`：教师端学生名单、已布置任务与行为动态

## 本地预览

```bash
python3 -m http.server 8765
```

浏览器打开 `http://127.0.0.1:8765/`。

## GitHub Pages

进入仓库的 **Settings → Pages**，在 **Build and deployment** 中选择：

- Source：`Deploy from a branch`
- Branch：`main`
- Folder：`/ (root)`

保存后访问：`https://liulingjunbj.github.io/fabuxuesheng/`
