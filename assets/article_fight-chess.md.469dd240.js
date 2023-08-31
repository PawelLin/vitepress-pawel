import{_ as s,o as n,c as a,a as l}from"./app.b422cb96.js";var p="/vitepress-pawel/fight-chess/1.webp",e="/vitepress-pawel/fight-chess/2.webp",o="/vitepress-pawel/fight-chess/3.webp",c="/vitepress-pawel/fight-chess/4.webp";const v='{"title":"\u7528CSS\u7684Grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Grid\u5E03\u5C40\u7B80\u5355\u4ECB\u7ECD","slug":"_1-grid\u5E03\u5C40\u7B80\u5355\u4ECB\u7ECD"},{"level":2,"title":"2. Grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8","slug":"_2-grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8"},{"level":2,"title":"3. \u603B\u7ED3","slug":"_3-\u603B\u7ED3"}],"relativePath":"article/fight-chess.md"}',t={name:"article/fight-chess.md"},r=l(`<h1 id="\u7528css\u7684grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8" tabindex="-1">\u7528CSS\u7684Grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8 <a class="header-anchor" href="#\u7528css\u7684grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8" aria-hidden="true">#</a></h1><h2 id="_1-grid\u5E03\u5C40\u7B80\u5355\u4ECB\u7ECD" tabindex="-1">1. Grid\u5E03\u5C40\u7B80\u5355\u4ECB\u7ECD <a class="header-anchor" href="#_1-grid\u5E03\u5C40\u7B80\u5355\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u7F51\u683C\u5E03\u5C40Grid\uFF0C\u53EF\u4EE5\u5C06\u7F51\u9875\u5212\u5206\u6210\u4E00\u4E2A\u4E2A\u7F51\u683C\uFF0C\u7EC4\u5408\u4EFB\u610F\u4E0D\u540C\u7684\u5E03\u5C40\u3002\u91C7\u7528\u5BB9\u5668(container)\u5B9A\u4E49\u9879\u76EE(item)\u5206\u5E03\uFF0C\u9879\u76EE(item)\u53EF\u8BBE\u7F6E\u81EA\u8EAB\u884C\u5217\u9AD8\u5EA6\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49\u4E00\u4E2A2*2\u7684\u7F51\u683C\uFF0C\u4E0A\u4E0B\u5DE6\u53F3\u95F4\u8DDD\u4E3A2px</span></span>
<span class="line"><span style="color:#A6ACCD;">.container {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-columns: repeat(2, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-rows: repeat(2, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-gap: 2px 2px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49\u9879\u76EE\u884C\u5217\u5360\u6BD4\u90FD\u662F1</span></span>
<span class="line"><span style="color:#A6ACCD;">.item {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-area: span 1 / span 1; // \u53601\u884C / \u53601\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+p+'" alt="\u6548\u679C\u56FE"></p><h2 id="_2-grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8" tabindex="-1">2. Grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8 <a class="header-anchor" href="#_2-grid\u5E03\u5C40\u753B\u98DE\u884C\u68CB\u76D8" aria-hidden="true">#</a></h2><p>I. \u5206\u6790 <img src="'+e+`" alt="\u98DE\u884C\u68CB\u76D8\u5E03\u5C40\u5206\u6790"> \u5982\u56FE\uFF0C\u6A2A\u8F74\u4E0A\u957F\u5EA6\u53EF\u770B\u4F5C\u75319\u4E2A\u957F\u65B9\u5F62\u53CA4\u4E2A\u6B63\u65B9\u5F62\u7EC4\u6210(\u7EB5\u8F74\u4E5F\u662F)\uFF0C\u5047\u8BBE\u957F\u65B9\u5F62\u5BBD\u9AD8\u4E3A2 : 3\uFF0C\u6B63\u65B9\u5F62\u5BBD\u9AD8\u4E3A3\uFF0C\u53EF\u5C06\u98DE\u884C\u68CB\u76D8\u770B\u4F5C\u662F30 * 30\u7684\u7F51\u683C\u8FDB\u884C\u5E03\u5C40\u3002</p><ul><li>4\u4E2A\u89D2\u7684\u5927\u6B63\u65B9\u5F62\u53607\u884C7\u5217 ( [7, 7] )</li><li>\u4E2D\u95F4\u7684\u6B63\u65B9\u5F62\u53604\u884C4\u5217 ( [4, 4] )</li><li>\u4E2D\u95F4\u901A\u9053\u7684\u6B63\u65B9\u5F62\u53602\u884C2\u5217 ( [2, 2] )</li><li>\u5176\u4F59\u957F\u65B9\u5F62\u53602\u884C3\u5217 ( [2, 3] )</li><li>\u5176\u4F59\u6B63\u65B9\u5F62\u53603\u884C3\u5217 ( [3, 3] )</li><li>\u865A\u7EBF\u6846\u4E3A\u767D\u8272\u900F\u660E\u5757 ( [4, 4], [1, 4], [3, 5], [1, 4] )</li></ul><p>\u5404\u884C\u5217\u7684\u9879\u76EE\u5360\u6BD4\u77E9\u9635\u5982\u4E0B</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[7, 7], [3, 3], [3, 2], [3, 2], [3, 2], [3, 2], [3, 2], [3, 3], [7, 7]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3], [4, 4], [2, 2], [4, 4], [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3], [2, 2], [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[3, 3], [3, 2], [3, 2], [3, 3], [2, 4], [2, 2], [2, 4], [3, 3], [3, 2], [3, 2], [3, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 4], [2, 2], [1, 4]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3], [4, 4], [4, 2], [3, 5], [3, 5], [4, 2], [4, 4], [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3], [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 4], [4, 4], [1, 4]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3], [4, 4], [4, 2], [1, 4], [1, 4], [4, 2], [4, 4], [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[3, 5], [2, 2], [3, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3], [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">[3, 3], [3, 2], [3, 2], [3, 3], [1, 4], [1, 4], [3, 3], [3, 2], [3, 2], [3, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 4], [2, 2], [2, 4]</span></span>
<span class="line"><span style="color:#A6ACCD;">[7, 7], [2, 3], [4, 4], [2, 2], [4, 4], [2, 3], [7, 7]</span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3], [2, 2], [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">[3, 3], [3, 2], [3, 2], [3, 2], [3, 2], [3, 2], [3, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>II. \u5B9E\u73B0</p><ol><li>\u5B9A\u4E49\u4E00\u4E2A30 * 30\u7684\u7F51\u683C\u5BB9\u5668\uFF1B</li><li>\u6309\u987A\u5E8F\u8BBE\u7F6E\u6BCF\u4E2A\u9879\u76EE\u7684\u884C\u5217\uFF0C\u987A\u5E8F\u4ECE\u5DE6\u5F80\u53F3\uFF0C\u81EA\u4E0A\u800C\u4E0B\uFF1B</li><li>\u8BBE\u7F6E\u6BCF\u4E2A\u9879\u76EE\u7684\u80CC\u666F\u989C\u8272</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- \u6B64\u5904\u4F7F\u7528\u4E86vue\uFF0C\u65B9\u4FBF\u6570\u636E\u5904\u7406 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;grid&quot; v-cloak&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div v-for=&quot;item in items&quot; :ref=&quot;item.color&quot; :style=&quot;{ gridArea: \`span \${item.row || 1} / span \${item.col || 1}\` }&quot; :class=&quot;item.color &amp;&amp; \`bg-\${item.color}\`&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49\u4E00\u4E2A30 * 30\u7684\u7F51\u683C\uFF0C\u4E0A\u4E0B\u5DE6\u53F3\u95F4\u8DDD\u4E3A2px\uFF0C\u5BBD\u9AD8\u90FD\u4E3A\u6D4F\u89C8\u5668\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">.grid {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-columns: repeat(30, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-rows: repeat(30, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-gap: 2px 2px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 100vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u8BBE\u7F6E\u6BCF\u4E2A\u9879\u76EE\u7684\u884C\u5217\u53CA\u989C\u8272\uFF0C\u989C\u8272\u5B9A\u4E49\u89C1\u4E0B\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">        el: &#39;#grid&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            items: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u6B64\u5904\u53EA\u5217\u4E3E\u7B2C\u4E00\u884C\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 7, col: 7, color: &#39;yellow&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 3, col: 3, color: &#39;green-bottom-right&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 3, col: 2, color: &#39;red&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 3, col: 2, color: &#39;yellow&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 3, col: 2, color: &#39;blue&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 3, col: 2, color: &#39;green&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 3, col: 2, color: &#39;red&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 3, col: 3, color: &#39;yellow-bottom-left&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                { row: 7, col: 7, color: &#39;blue&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                ....</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u989C\u8272\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">.bg-yellow {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: #ffc66e;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.bg-blue {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: #70dfdf;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.bg-red {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: #ff8da3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.bg-green {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: #80d870;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5BF9\u89D2\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">.bg-green-bottom-right {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-image: linear-gradient(-45deg, #80d870 0%, #80d870 50%, transparent 50%, transparent 100%);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.bg-yellow-bottom-left {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-image: linear-gradient(45deg, #ffc66e 0%, #ffc66e 50%, transparent 50%, transparent 100%);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+o+'" alt="\u7B2C\u4E00\u884C\u6548\u679C\u56FE"></p><p>\u6309\u7167\u77E9\u9635\u7684\u6570\u636E\u7EE7\u7EED\u7ED8\u5236 <img src="'+c+'" alt="\u98DE\u884C\u68CB\u76D8\u6548\u679C\u56FE"></p><h2 id="_3-\u603B\u7ED3" tabindex="-1">3. \u603B\u7ED3 <a class="header-anchor" href="#_3-\u603B\u7ED3" aria-hidden="true">#</a></h2><p>Grid\u5E03\u5C40\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u7F51\u683C\u7684\u884C\u5217\u6570\u8FDB\u884C\u7075\u6D3B\u5E03\u5C40\uFF0C\u7ED8\u5236\u5404\u79CD\u6709\u8DA3\u7684\u56FE\u6848\u68CB\u76D8\u3002</p>',21),i=[r];function C(A,d,y,D,g,u){return n(),a("div",null,i)}var m=s(t,[["render",C]]);export{v as __pageData,m as default};
