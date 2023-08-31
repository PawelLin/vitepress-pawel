import{_ as s,o as n,c as a,a as l}from"./app.b422cb96.js";const d='{"title":"iview-pc","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u6587\u4EF6\u7ED3\u6784","slug":"\u6587\u4EF6\u7ED3\u6784"},{"level":2,"title":"Links","slug":"links"}],"relativePath":"project/iview-pc.md"}',e={name:"project/iview-pc.md"},p=l(`<h1 id="iview-pc" tabindex="-1">iview-pc <a class="header-anchor" href="#iview-pc" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>iview-pc\u662F\u57FA\u4E8EVue2\uFF0C\u53C2\u8003iView admin\u62BD\u53D6\u7684\u4E00\u5957pc\u7BA1\u7406\u6A21\u677F\u3002 <a href="https://iview-pc.vercel.app/" target="_blank" rel="noopener noreferrer">\u5728\u7EBF\u8BBF\u95EE</a></p><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u767B\u5F55/\u767B\u51FA</li><li>\u7EC4\u4EF6 <ul><li>\u6587\u4EF6\u4E0A\u4F20</li><li>\u53EA\u9488\u5BF9label\u7684\u7B5B\u9009\u4E0B\u62C9\u6846</li></ul></li><li>\u56FA\u5B9A\u529F\u80FD <ul><li>\u7528\u6237\u7BA1\u7406</li><li>\u89D2\u8272\u7BA1\u7406</li></ul></li><li>\u8868\u683C\u6269\u5C55 <ul><li>\u6761\u4EF6\u8FC7\u6EE4</li><li>\u4E00\u5217\u5360\u591A\u884C</li><li>\u56FA\u5B9A\u5217&amp;\u56FA\u5B9A\u884C</li><li>\u4E00\u884C\u5360\u591A\u5217</li></ul></li><li>\u9519\u8BEF\u9875\u9762 <ul><li>403\u9875\u9762</li><li>404\u9875\u9762</li><li>500\u9875\u9762</li></ul></li><li>\u9AD8\u7EA7\u8DEF\u7531 <ul><li>\u52A8\u6001\u8DEF\u7531</li><li>\u5E26\u53C2\u9875\u9762</li></ul></li><li>\u6536\u7F29\u4FA7\u8FB9\u680F</li><li>tag\u6807\u7B7E\u5BFC\u822A</li></ul><h2 id="\u6587\u4EF6\u7ED3\u6784" tabindex="-1">\u6587\u4EF6\u7ED3\u6784 <a class="header-anchor" href="#\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 mock  \u6A21\u62DF\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 plugins  webpack\u6269\u5C55\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 public  \u6253\u5305\u6240\u9700\u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500\u2500 assets  \u9879\u76EE\u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 icons  \u81EA\u5B9A\u4E49\u56FE\u6807\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2514\u2500\u2500 images  \u56FE\u7247\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 components  \u901A\u7528\u516C\u5171\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 demo  \u81EA\u5B9A\u4E49\u6A21\u5757\u4F7F\u7528\u5C55\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 error  \u9519\u8BEF\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 input  \u8868\u5355\u6269\u5C55</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 main  \u516C\u5171\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2514\u2500\u2500 upload  \u6587\u4EF6\u4E0A\u4F20</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 directive  \u81EA\u5B9A\u4E49\u6307\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 clickoutside \u8282\u70B9\u4EE5\u5916\u70B9\u51FB</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 draggable \u62D6\u62FD</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 maxheight \u8BBE\u7F6E\u6700\u5927\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 money Input\u91D1\u989D\u8F93\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 number Input\u6570\u5B57\u8F93\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 thousands Input\u5343\u5206\u4F4D\u8F93\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2514\u2500\u2500 thousands Input\u5343\u5206\u4F4D\u81EA\u52A8\u683C\u5F0F\u8F93\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 libs  \u5C01\u88C5\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 rsa  \u52A0\u89E3\u5BC6</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 axios  http\u5C01\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 enums  \u679A\u4E3E\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 filters  \u8FC7\u6EE4\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 mixins  \u5168\u5C40\u6DF7\u5408</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 service  \u516C\u5171api</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 tools  \u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 utils  \u529F\u80FD\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2514\u2500\u2500 validate  \u9A8C\u8BC1\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 router  \u8DEF\u7531\u914D\u7F6E </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53EF\u914D\u7F6Eiframe</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 store  Vuex\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500\u2500 view  \u9875\u9762\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u251C\u2500\u2500 login  \u767B\u5F55\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2514\u2500\u2500 system  \u7CFB\u7EDF\u6A21\u5757</span></span>
<span class="line"></span></code></pre></div><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/iview/iview" target="_blank" rel="noopener noreferrer">iView</a></li><li><a href="https://github.com/vuejs/vue" target="_blank" rel="noopener noreferrer">Vue</a></li><li><a href="https://github.com/webpack/webpack" target="_blank" rel="noopener noreferrer">Webpack</a></li></ul>`,9),i=[p];function o(c,r,t,A,C,h){return n(),a("div",null,i)}var y=s(e,[["render",o]]);export{d as __pageData,y as default};
