import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as r,a as e,d as t,b as n,e as c}from"./app-Wbe3UCav.js";const l={},p=e("h4",{id:"环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境"},[e("span",null,"环境")])],-1),d={href:"https://github.com/labring/FastGPT/releases/tag/v4.8-preview4",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/bincooo/huggingface-dk/tree/main/apis",target:"_blank",rel:"noopener noreferrer"},u={href:"https://xxxx.io",target:"_blank",rel:"noopener noreferrer"},h=c(`<h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h4><ol><li><p>通过docker部署apis服务，里面提供了基础的 javascript eval功能、web爬虫、redis restful</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/bincooo/huggingface-dk
<span class="token builtin class-name">cd</span> huggingface-dk
<span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>给FastGPT打补丁，以提供http组件非json body请求的能力</p><p>下载 <code>97274.js</code> 并挂载到容器里</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 编辑FastGPT的容器配置</span>
<span class="token function">vim</span> files/deploy/fastgpt/docker-compose.yml
<span class="token comment"># 在fastgpt容器一栏里的volumes属性下添加：</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span>
volumes:
  - ./config.json:/app/data/config.json
  - ./97274.js:/app/projects/app/.next/server/chunks/97274.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2);function g(v,b){const a=o("ExternalLinkIcon");return i(),r("div",null,[p,e("blockquote",null,[e("p",null,[t("FastGPT version: "),e("a",d,[t("V4.8-preview4"),n(a)])])]),e("blockquote",null,[e("p",null,[t("apis: "),e("a",m,[t("huggingface-dk/apis"),n(a)])])]),e("blockquote",null,[e("p",null,[t("patch: "),e("a",u,[t("97274.js"),n(a)])])]),h])}const k=s(l,[["render",g],["__file","前置准备.html.vue"]]),y=JSON.parse('{"path":"/guide/%E5%89%8D%E7%BD%AE%E5%87%86%E5%A4%87.html","title":"前置准备","lang":"zh-CN","frontmatter":{"title":"前置准备","icon":"code","author":"bincooo","description":"环境 FastGPT version: V4.8-preview4 apis: huggingface-dk/apis patch: 97274.js 步骤 通过docker部署apis服务，里面提供了基础的 javascript eval功能、web爬虫、redis restful 给FastGPT打补丁，以提供http组件非json body请求的...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/FastGPT-plugins/guide/%E5%89%8D%E7%BD%AE%E5%87%86%E5%A4%87.html"}],["meta",{"property":"og:site_name","content":"折戟沉沙、丿"}],["meta",{"property":"og:title","content":"前置准备"}],["meta",{"property":"og:description","content":"环境 FastGPT version: V4.8-preview4 apis: huggingface-dk/apis patch: 97274.js 步骤 通过docker部署apis服务，里面提供了基础的 javascript eval功能、web爬虫、redis restful 给FastGPT打补丁，以提供http组件非json body请求的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T13:40:53.000Z"}],["meta",{"property":"article:author","content":"bincooo"}],["meta",{"property":"article:modified_time","content":"2024-05-06T13:40:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前置准备\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T13:40:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"bincooo\\"}]}"]]},"headers":[],"git":{"createdTime":1715002853000,"updatedTime":1715002853000,"contributors":[{"name":"bincooo","email":"bingco.zn@gmail.com","commits":1}]},"readingTime":{"minutes":0.43,"words":130},"filePathRelative":"guide/前置准备.md","localizedDate":"2024年5月6日","autoDesc":true}');export{k as comp,y as data};
