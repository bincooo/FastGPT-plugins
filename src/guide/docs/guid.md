---
title: guid(uuid)
author: bincooo
---

#### 环境

>FastGPT version: [V4.8](https://github.com/labring/FastGPT/releases/tag/v4.8)



#### 说明

用于生成一个随机uuid

[icon](https://github.com/bincooo/vuepress-doc/assets/36452456/ced2dce6-8367-4903-9572-5353fbd19d1a)

<img width="452" alt="Screenshot 2024-05-06 at 22 02 29" src="https://github.com/bincooo/vuepress-doc/assets/36452456/9ff4dae4-6b81-42aa-be53-cfe866a1b867">



#### 数据导入

```json
{"nodes":[{"nodeId":"txvo0nqswlqq","name":"定义插件输入","intro":"自定义配置外部输入，使用插件时，仅暴露自定义配置的输入","avatar":"/imgs/workflow/input.png","flowNodeType":"pluginInput","showStatus":false,"position":{"x":576.1575512684552,"y":11.96143919113372},"inputs":[],"outputs":[]},{"nodeId":"fpzucvyl2ebh","name":"定义插件输出","intro":"自定义配置外部输出，使用插件时，仅暴露自定义配置的输出","avatar":"/imgs/workflow/output.png","flowNodeType":"pluginOutput","showStatus":false,"position":{"x":1645.700161051856,"y":0.07679062515354929},"inputs":[{"key":"uuid","valueType":"string","label":"uuid","renderTypeList":["reference"],"required":false,"description":"","canEdit":true,"editField":{"key":true,"description":true,"valueType":true},"value":["3jvukq6l7cm5","oZ2d7JfoOHwR"]}],"outputs":[]},{"nodeId":"3jvukq6l7cm5","name":"HTTP 请求","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":1048.9162790530972,"y":-230.53993403572497},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"POST","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"http://proxy.io:8888/laf/eval"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[{"key":"Content-Type","type":"string","value":"text/plain"}],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"return \\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\\".replace(/[xy]/g, function(c) {\n    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)\n    return v.toString(16)\n})","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"oZ2d7JfoOHwR","type":"dynamic","key":"result","valueType":"string","label":"result"}]}],"edges":[{"source":"txvo0nqswlqq","target":"3jvukq6l7cm5","sourceHandle":"txvo0nqswlqq-source-right","targetHandle":"3jvukq6l7cm5-target-left"},{"source":"3jvukq6l7cm5","target":"fpzucvyl2ebh","sourceHandle":"3jvukq6l7cm5-source-right","targetHandle":"fpzucvyl2ebh-target-left"}]}
```

其中，

http模块内的 `http://proxy.io:8888/laf/eval` 地址改为实际的 `apis` 服务地址
