---
title: 获取天气信息
author: bincooo
---

#### 环境

>FastGPT version: [V4.8](https://github.com/labring/FastGPT/releases/tag/v4.8)
>
>Depend on:
>
>​       [REDIS SET](docs/redis-set.md)



#### 说明

用于抓取网站链接，内置过期时间1800s

[icon](https://github.com/lm-sys/FastChat/assets/36452456/2037b59e-8099-4145-a193-57477e925620)

<img width="445" alt="Screenshot 2024-05-14 at 10 42 29" src="https://github.com/lm-sys/FastChat/assets/36452456/730bde30-c32e-44b5-8c84-74d935e3c319">



#### 数据导入

```json
{"nodes":[{"nodeId":"zjwxtad4ckw2","name":"定义插件输入","intro":"自定义配置外部输入，使用插件时，仅暴露自定义配置的输入","avatar":"/imgs/workflow/input.png","flowNodeType":"pluginInput","showStatus":false,"position":{"x":-1527.3841986004204,"y":2532.393183964258},"inputs":[{"key":"province","valueType":"string","label":"省区","type":"target","required":true,"description":"省级地域名称","toolDescription":"省级地域名称","edit":true,"editField":{"key":true,"name":true,"description":true,"required":true,"dataType":true,"inputType":true,"isToolInput":true},"connected":true,"selectedTypeIndex":0,"renderTypeList":["reference"],"canEdit":true},{"key":"city","valueType":"string","label":"市区","type":"target","required":true,"description":"市级地域名称","toolDescription":"市级地域名称","edit":true,"editField":{"key":true,"name":true,"description":true,"required":true,"dataType":true,"inputType":true,"isToolInput":true},"connected":true,"selectedTypeIndex":0,"renderTypeList":["reference"],"canEdit":true}],"outputs":[{"id":"province","type":"static","key":"province","valueType":"string","label":"省区","canEdit":true},{"id":"city","type":"static","key":"city","valueType":"string","label":"市区","canEdit":true}]},{"nodeId":"26x8rn5wag4k","name":"定义插件输出","intro":"自定义配置外部输出，使用插件时，仅暴露自定义配置的输出","avatar":"/imgs/workflow/output.png","flowNodeType":"pluginOutput","showStatus":false,"position":{"x":4509.779673596491,"y":4898.426075614873},"inputs":[{"key":"data","valueType":"any","label":"data","renderTypeList":["reference"],"required":false,"description":"","canEdit":true,"editField":{"key":true,"description":true,"valueType":true},"value":["fqRC371d9Fg0","h6bljHEDElWI"]}],"outputs":[]},{"nodeId":"dsnEGM5xn4OI","name":"读取cache","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":-788.832128279879,"y":2250.4167033629033},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"city","valueType":"string","label":"city","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["zjwxtad4ckw2","city"]},{"key":"province","valueType":"string","label":"province","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["zjwxtad4ckw2","province"]},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"POST","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"http://proxy.io:8888/redis"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[{"key":"Content-Type","type":"string","value":"text/plain"}],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"GET/weather-{{province}}-{{city}}","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"aBsQh07YHGcp","type":"dynamic","key":"GET","valueType":"string","label":"GET"}]},{"nodeId":"fqRC371d9Fg0","name":"route","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":-236.93664705572945,"y":2268.791916321876},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"data","valueType":"string","label":"data","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["dsnEGM5xn4OI","aBsQh07YHGcp"]},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"POST","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"http://proxy.io:8888/laf/eval"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[{"key":"Content-Type","type":"string","value":"text/plain"}],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"let data = \\"{{data}}\\"\nif (!data || data == \\"null\\") {\n  return {\n    hvc: false\n  }\n}\n\nreturn {\n  hvc: true,\n  data: JSON.parse(decodeURIComponent(data))\n}","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"aBsQh07YHGcp","type":"dynamic","key":"result.hvc","valueType":"boolean","label":"result.hvc"},{"id":"h6bljHEDElWI","type":"dynamic","key":"result.data","valueType":"any","label":"result.data"}]},{"nodeId":"qUEi5vfQevqq","name":"判断器","intro":"根据一定的条件，执行不同的分支。","avatar":"/imgs/workflow/ifElse.svg","flowNodeType":"ifElseNode","showStatus":true,"position":{"x":443.44942545314143,"y":2501.7189672144095},"inputs":[{"key":"ifElseList","renderTypeList":["hidden"],"valueType":"any","label":"","value":[{"condition":"AND","list":[{"variable":["fqRC371d9Fg0","aBsQh07YHGcp"],"condition":"equalTo","value":"true"}]}]}],"outputs":[{"id":"ifElseResult","key":"ifElseResult","label":"判断结果","valueType":"string","type":"static"}]},{"nodeId":"vm6woV5lCphr","name":"加载省区","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":578.7324270204108,"y":3010.471735565488},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"GET","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"https://weather.cma.cn/api/dict/province"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"zOed6Y3k94tO","type":"dynamic","key":"data","valueType":"string","label":"data"}]},{"nodeId":"fQw1v5N5C0KL","name":"加载省区后置","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":578.1658213034376,"y":3785.0435851235907},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"province","valueType":"string","label":"province","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["zjwxtad4ckw2","province"]},{"key":"data","valueType":"string","label":"data","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["vm6woV5lCphr","zOed6Y3k94tO"]},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"POST","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"http://proxy.io:8888/laf/eval"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[{"key":"Content-Type","type":"string","value":"text/plain"}],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"const data = \\"{{data}}\\".split(\\"|\\")\nlet province = \\"{{province}}\\"\n\nif (province.endsWith(\\"省\\")) {\n  province = province.substr(0, province.length -1)\n}\n\nif (province == \\"\\") {\n  return {\n    ok: false\n  }\n}\n\nlet value = \\"\\"\nfor (let index = 0; index < data.length; index++) {\n  if (data[index].includes(province)) {\n    value = data[index].split(\\",\\")[0]\n    break\n  }\n}\n\nreturn (value == \\"\\") ? {} : {\n    value,\n    ok: true\n  }","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"aBsQh07YHGcp","type":"dynamic","key":"result.ok","valueType":"boolean","label":"result.ok"},{"id":"x0bye0bft5ug","type":"dynamic","key":"result.value","valueType":"string","label":"result.value"}]},{"nodeId":"gmrnsIISs8fQ","name":"判断器","intro":"根据一定的条件，执行不同的分支。","avatar":"/imgs/workflow/ifElse.svg","flowNodeType":"ifElseNode","showStatus":true,"position":{"x":1192.1930271328347,"y":4060.016379202493},"inputs":[{"key":"ifElseList","renderTypeList":["hidden"],"valueType":"any","label":"","value":[{"condition":"AND","list":[{"variable":["fQw1v5N5C0KL","aBsQh07YHGcp"],"condition":"equalTo","value":"false"}]}]}],"outputs":[{"id":"ifElseResult","key":"ifElseResult","label":"判断结果","valueType":"string","type":"static"}]},{"nodeId":"uO0MtO7pqBHU","name":"变量更新","intro":"可以更新指定节点的输出值或更新全局变量","avatar":"/imgs/workflow/variable.png","flowNodeType":"variableUpdate","showStatus":true,"position":{"x":3311.6172809872087,"y":4839.97604413446},"inputs":[{"key":"updateList","valueType":"any","label":"","renderTypeList":["hidden"],"editField":{"key":true,"valueType":true},"value":[{"variable":["fqRC371d9Fg0","h6bljHEDElWI"],"value":["","fetch failed"],"renderType":"input"}]}],"outputs":[]},{"nodeId":"mSrZlnMioWbb","name":"加载市区","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":1285.4930382686825,"y":4658.332156432834},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"province","valueType":"string","label":"province","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["fQw1v5N5C0KL","x0bye0bft5ug"]},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"GET","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"https://weather.cma.cn/api/dict/province/{{province}}"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"zOed6Y3k94tO","type":"dynamic","key":"data","valueType":"string","label":"data"}]},{"nodeId":"vK5rpdjQJzsg","name":"加载市区后置","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":1282.2013375749505,"y":5595.804581656349},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"city","valueType":"string","label":"city","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["zjwxtad4ckw2","city"]},{"key":"data","valueType":"string","label":"data","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["mSrZlnMioWbb","zOed6Y3k94tO"]},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"POST","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"http://proxy.io:8888/laf/eval"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[{"key":"Content-Type","type":"string","value":"text/plain"}],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"const data = \\"{{data}}\\".split(\\"|\\")\nlet city = \\"{{city}}\\"\n\nif (city.endsWith(\\"市\\")) {\n  city = city.substr(0, city.length -1)\n}\n\nlet value = \\"\\"\nfor (let index = 0; index < data.length; index++) {\n  if (city == \\"\\") {\n    value = data[index].split(\\",\\")[0]\n    break\n  }\n  if (data[index].includes(city)) {\n    value = data[index].split(\\",\\")[0]\n    break\n  }\n}\n\nreturn (value == \\"\\") ? {\n  ok: false\n} : {\n  value,\n  ok: true\n}","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"aBsQh07YHGcp","type":"dynamic","key":"result.ok","valueType":"boolean","label":"result.ok"},{"id":"x0bye0bft5ug","type":"dynamic","key":"result.value","valueType":"string","label":"result.value"}]},{"nodeId":"urhaaiX5ZcVn","name":"判断器","intro":"根据一定的条件，执行不同的分支。","avatar":"/imgs/workflow/ifElse.svg","flowNodeType":"ifElseNode","showStatus":true,"position":{"x":1906.1005336187802,"y":5871.501977091821},"inputs":[{"key":"ifElseList","renderTypeList":["hidden"],"valueType":"any","label":"","value":[{"condition":"AND","list":[{"variable":["vK5rpdjQJzsg","aBsQh07YHGcp"],"condition":"equalTo","value":"false"}]}]}],"outputs":[{"id":"ifElseResult","key":"ifElseResult","label":"判断结果","valueType":"string","type":"static"}]},{"nodeId":"rz0mLNa6IXZi","name":"加载天气信息","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":1902.0224226386724,"y":6370.352683574728},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"city","valueType":"string","label":"city","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["vK5rpdjQJzsg","x0bye0bft5ug"]},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"GET","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"https://weather.cma.cn/api/now/{{city}}"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"zOed6Y3k94tO","type":"dynamic","key":"data","valueType":"any","label":"data"}]},{"nodeId":"qInyh5bUzP6r","name":"缓存cache前置","intro":"可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）","avatar":"/imgs/workflow/http.png","flowNodeType":"httpRequest468","showStatus":true,"position":{"x":1901.3605947741046,"y":7227.625471716718},"inputs":[{"key":"system_addInputParam","renderTypeList":["addInputParam"],"valueType":"dynamic","label":"","required":false,"description":"core.module.input.description.HTTP Dynamic Input","editField":{"key":true,"valueType":true}},{"key":"city","valueType":"string","label":"city","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["zjwxtad4ckw2","city"]},{"key":"province","valueType":"string","label":"province","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["zjwxtad4ckw2","province"]},{"key":"data","valueType":"string","label":"data","renderTypeList":["reference"],"description":"","canEdit":true,"editField":{"key":true,"valueType":true},"value":["rz0mLNa6IXZi","zOed6Y3k94tO"]},{"key":"system_httpMethod","renderTypeList":["custom"],"valueType":"string","label":"","value":"POST","required":true},{"key":"system_httpReqUrl","renderTypeList":["hidden"],"valueType":"string","label":"","description":"core.module.input.description.Http Request Url","placeholder":"https://api.ai.com/getInventory","required":false,"value":"http://proxy.io:8888/laf/eval"},{"key":"system_httpHeader","renderTypeList":["custom"],"valueType":"any","value":[{"key":"Content-Type","type":"string","value":"text/plain"}],"label":"","description":"core.module.input.description.Http Request Header","placeholder":"core.module.input.description.Http Request Header","required":false},{"key":"system_httpParams","renderTypeList":["hidden"],"valueType":"any","value":[],"label":"","required":false},{"key":"system_httpJsonBody","renderTypeList":["hidden"],"valueType":"any","value":"return {\n  key: \\"weather-{{province}}-{{city}}\\",\n  data: encodeURIComponent(\\"{{data}}\\")\n}","label":"","required":false}],"outputs":[{"id":"system_addOutputParam","key":"system_addOutputParam","type":"dynamic","valueType":"dynamic","label":"","editField":{"key":true,"valueType":true}},{"id":"httpRawResponse","key":"httpRawResponse","label":"原始响应","description":"HTTP请求的原始响应。只能接受字符串或JSON类型响应数据。","valueType":"any","type":"static"},{"id":"x0bye0bft5ug","type":"dynamic","key":"result.key","valueType":"string","label":"result.key"},{"id":"bkdn8BConJbn","type":"dynamic","key":"result.data","valueType":"string","label":"result.data"}]},{"nodeId":"grKmwdSPbTYa","name":"REDIS SET","intro":"","avatar":"/api/system/img/662e480c6cf719ed834fe879","flowNodeType":"pluginModule","showStatus":true,"position":{"x":1932.6732739258978,"y":8306.703431167165},"inputs":[{"key":"key","valueType":"string","label":"key","renderTypeList":["reference"],"description":"","canEdit":false,"editField":{"key":true},"value":["qInyh5bUzP6r","x0bye0bft5ug"]},{"key":"value","valueType":"string","label":"value","renderTypeList":["reference"],"description":"","canEdit":false,"editField":{"key":true},"value":["qInyh5bUzP6r","bkdn8BConJbn"]},{"key":"exp","valueType":"number","label":"exp","renderTypeList":["numberInput"],"description":"","canEdit":false,"value":120,"editField":{"key":true},"maxLength":"","max":"1800","min":"0"}],"outputs":[],"pluginId":"662de9eb6cf719ed834fe418"},{"nodeId":"ovlCwgqsERaV","name":"变量更新","intro":"可以更新指定节点的输出值或更新全局变量","avatar":"/imgs/workflow/variable.png","flowNodeType":"variableUpdate","showStatus":true,"position":{"x":2553.9038915441965,"y":6624.122014940612},"inputs":[{"key":"updateList","valueType":"any","label":"","renderTypeList":["hidden"],"editField":{"key":true,"valueType":true},"value":[{"variable":["fqRC371d9Fg0","h6bljHEDElWI"],"value":["rz0mLNa6IXZi","zOed6Y3k94tO"],"renderType":"reference"}]}],"outputs":[]}],"edges":[{"source":"zjwxtad4ckw2","target":"dsnEGM5xn4OI","sourceHandle":"zjwxtad4ckw2-source-right","targetHandle":"dsnEGM5xn4OI-target-left"},{"source":"dsnEGM5xn4OI","target":"fqRC371d9Fg0","sourceHandle":"dsnEGM5xn4OI-source-right","targetHandle":"fqRC371d9Fg0-target-left"},{"source":"fqRC371d9Fg0","target":"qUEi5vfQevqq","sourceHandle":"fqRC371d9Fg0-source-right","targetHandle":"qUEi5vfQevqq-target-left"},{"source":"qUEi5vfQevqq","target":"vm6woV5lCphr","sourceHandle":"qUEi5vfQevqq-source-ELSE","targetHandle":"vm6woV5lCphr-target-top"},{"source":"vm6woV5lCphr","target":"fQw1v5N5C0KL","sourceHandle":"vm6woV5lCphr-source-bottom","targetHandle":"fQw1v5N5C0KL-target-top"},{"source":"fQw1v5N5C0KL","target":"gmrnsIISs8fQ","sourceHandle":"fQw1v5N5C0KL-source-right","targetHandle":"gmrnsIISs8fQ-target-left"},{"source":"gmrnsIISs8fQ","target":"uO0MtO7pqBHU","sourceHandle":"gmrnsIISs8fQ-source-IF","targetHandle":"uO0MtO7pqBHU-target-left"},{"source":"gmrnsIISs8fQ","target":"mSrZlnMioWbb","sourceHandle":"gmrnsIISs8fQ-source-ELSE","targetHandle":"mSrZlnMioWbb-target-top"},{"source":"mSrZlnMioWbb","target":"vK5rpdjQJzsg","sourceHandle":"mSrZlnMioWbb-source-bottom","targetHandle":"vK5rpdjQJzsg-target-top"},{"source":"vK5rpdjQJzsg","target":"urhaaiX5ZcVn","sourceHandle":"vK5rpdjQJzsg-source-right","targetHandle":"urhaaiX5ZcVn-target-left"},{"source":"urhaaiX5ZcVn","target":"uO0MtO7pqBHU","sourceHandle":"urhaaiX5ZcVn-source-IF","targetHandle":"uO0MtO7pqBHU-target-left"},{"source":"urhaaiX5ZcVn","target":"rz0mLNa6IXZi","sourceHandle":"urhaaiX5ZcVn-source-ELSE","targetHandle":"rz0mLNa6IXZi-target-top"},{"source":"rz0mLNa6IXZi","target":"qInyh5bUzP6r","sourceHandle":"rz0mLNa6IXZi-source-bottom","targetHandle":"qInyh5bUzP6r-target-top"},{"source":"qInyh5bUzP6r","target":"grKmwdSPbTYa","sourceHandle":"qInyh5bUzP6r-source-bottom","targetHandle":"grKmwdSPbTYa-target-top"},{"source":"rz0mLNa6IXZi","target":"ovlCwgqsERaV","sourceHandle":"rz0mLNa6IXZi-source-right","targetHandle":"ovlCwgqsERaV-target-left"},{"source":"uO0MtO7pqBHU","target":"26x8rn5wag4k","sourceHandle":"uO0MtO7pqBHU-source-right","targetHandle":"26x8rn5wag4k-target-left"},{"source":"ovlCwgqsERaV","target":"26x8rn5wag4k","sourceHandle":"ovlCwgqsERaV-source-right","targetHandle":"26x8rn5wag4k-target-left"},{"source":"qUEi5vfQevqq","target":"26x8rn5wag4k","sourceHandle":"qUEi5vfQevqq-source-IF","targetHandle":"26x8rn5wag4k-target-left"}]}
```

其中，

http模块内的 `http://proxy.io:8888/laf/eval` 地址改为实际的 `apis` 服务地址

http模块内的 `http://proxy.io:8888/redis` 地址改为实际的 `apis` 服务地址