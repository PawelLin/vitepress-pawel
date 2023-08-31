import{_ as l,o as i,c as e,a}from"./app.b422cb96.js";const f='{"title":"\u4F60\u4E0D\u77E5\u9053\u7684Javascript(\u4E0A\u5377)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B2C1\u7AE0 \u4F5C\u7528\u57DF\u662F\u4EC0\u4E48","slug":"\u7B2C1\u7AE0-\u4F5C\u7528\u57DF\u662F\u4EC0\u4E48"},{"level":2,"title":"\u7B2C2\u7AE0 \u8BCD\u6CD5\u4F5C\u7528\u57DF","slug":"\u7B2C2\u7AE0-\u8BCD\u6CD5\u4F5C\u7528\u57DF"},{"level":2,"title":"\u7B2C3\u7AE0 \u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5757\u4F5C\u7528\u57DF","slug":"\u7B2C3\u7AE0-\u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5757\u4F5C\u7528\u57DF"},{"level":2,"title":"\u7B2C4\u7AE0 \u63D0\u5347","slug":"\u7B2C4\u7AE0-\u63D0\u5347"},{"level":2,"title":"\u7B2C5\u7AE0 \u4F5C\u7528\u57DF\u95ED\u5305","slug":"\u7B2C5\u7AE0-\u4F5C\u7528\u57DF\u95ED\u5305"},{"level":2,"title":"\u9644\u5F55A \u52A8\u6001\u4F5C\u7528\u57DF","slug":"\u9644\u5F55a-\u52A8\u6001\u4F5C\u7528\u57DF"},{"level":2,"title":"\u7B2C1\u7AE0 \u5173\u4E8Ethis","slug":"\u7B2C1\u7AE0-\u5173\u4E8Ethis"},{"level":2,"title":"\u7B2C3\u7AE0 \u5BF9\u8C61","slug":"\u7B2C3\u7AE0-\u5BF9\u8C61"}],"relativePath":"book/you-dont-know-JS-one.md"}',t={name:"book/you-dont-know-JS-one.md"},r=a('<h1 id="\u4F60\u4E0D\u77E5\u9053\u7684javascript-\u4E0A\u5377" tabindex="-1">\u4F60\u4E0D\u77E5\u9053\u7684Javascript(\u4E0A\u5377) <a class="header-anchor" href="#\u4F60\u4E0D\u77E5\u9053\u7684javascript-\u4E0A\u5377" aria-hidden="true">#</a></h1><h2 id="\u7B2C1\u7AE0-\u4F5C\u7528\u57DF\u662F\u4EC0\u4E48" tabindex="-1">\u7B2C1\u7AE0 \u4F5C\u7528\u57DF\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u7B2C1\u7AE0-\u4F5C\u7528\u57DF\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><ol><li>\u4E00\u5957\u5B58\u50A8\u548C\u8BBF\u95EE\u53D8\u91CF\u7684\u89C4\u5219\uFF0C\u8FD9\u5957\u89C4\u5219\u79F0\u4E3A\u4F5C\u7528\u57DF\u3002</li><li>\u4F20\u7EDF\u7F16\u8BD1\u8BED\u8A00\u7684\u6D41\u7A0B\uFF0CJavascript\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u7F16\u8BD1\u53D1\u751F\u5728\u4EE3\u7801\u6267\u884C\u524D\u7684\u51E0\u5FAE\u79D2(\u751A\u81F3\u66F4\u77ED)\u3002</li></ol><ul><li>\u5206\u8BCD/\u8BCD\u6CD5\u5206\u6790</li><li>\u89E3\u6790/\u8BED\u6CD5\u5206\u6790</li><li>\u4EE3\u7801\u751F\u6210</li></ul><ol start="3"><li>\u7F16\u8BD1\u6267\u884C\u8FC7\u7A0B\u7684\u4EA4\u4E92\u3002</li></ol><ul><li>\u7F16\u8BD1\u65F6\uFF1A\u7F16\u8BD1\u5668 (\u53D8\u91CF\u58F0\u660E) - \u4F5C\u7528\u57DF (\u5B58\u50A8\u548C\u8BBF\u95EE\u53D8\u91CF)</li><li>\u8FD0\u884C\u65F6\uFF1A\u5F15\u64CE (LHS\u67E5\u8BE2\u3001RHS\u67E5\u8BE2) - \u4F5C\u7528\u57DF (\u5B58\u50A8\u548C\u8BBF\u95EE\u53D8\u91CF)</li></ul><ol start="4"><li>\u4F5C\u7528\u57DF\u5D4C\u5957\u3002</li><li>LHS\u67E5\u8BE2\u5931\u8D25(\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B)\u3001RHS\u67E5\u8BE2\u5931\u8D25\uFF0C\u5F15\u64CE\u629B\u51FAReferenceError\u5F02\u5E38\uFF0C\u4E0D\u5408\u7406\u64CD\u4F5C\uFF0C\u5F15\u64CE\u629B\u51FATypeError\u5F02\u5E38\u3002</li></ol><h2 id="\u7B2C2\u7AE0-\u8BCD\u6CD5\u4F5C\u7528\u57DF" tabindex="-1">\u7B2C2\u7AE0 \u8BCD\u6CD5\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u7B2C2\u7AE0-\u8BCD\u6CD5\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><ol><li>\u4F5C\u7528\u57DF\u5171\u6709\u4E24\u79CD\u4E3B\u8981\u7684\u5DE5\u4F5C\u6A21\u5F0F</li></ol><ul><li>\u8BCD\u6CD5\u4F5C\u7528\u57DF (\u5927\u591A\u6570\u7F16\u7A0B\u8BED\u8A00\u6240\u91C7\u7528)</li><li>\u52A8\u6001\u4F5C\u7528\u57DF</li></ul><ol start="2"><li>\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u5B9A\u4E49\u5728\u8BCD\u6CD5\u9636\u6BB5\u7684\u4F5C\u7528\u57DF\uFF1B\u63D0\u4F9B\u4F4D\u7F6E\u4FE1\u606F\u4F9B\u5F15\u64CE\u67E5\u627E\u6807\u8BC6\u7B26\u7684\u4F4D\u7F6E\uFF0C\u8BCD\u6CD5\u4F5C\u7528\u57DF\u67E5\u627E\u53EA\u4F1A\u67E5\u627E\u4E00\u7EA7\u6807\u8BC6\u7B26\u3002</li><li>\u5728\u8FD0\u884C\u65F6\u6267\u884Ceval\u51FD\u6570\u3001with\u51FD\u6570\u52A8\u6001\u63D2\u5165\u4EE3\u7801\u6765\u4FEE\u6539(\u6B3A\u9A97)\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u65E0\u6CD5\u5728\u7F16\u8BD1\u9636\u6BB5\u5BF9\u4F5C\u7528\u57DF\u67E5\u627E\u53CA\u6570\u9879\u6027\u80FD\u4F18\u5316\u3002</li></ol><h2 id="\u7B2C3\u7AE0-\u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5757\u4F5C\u7528\u57DF" tabindex="-1">\u7B2C3\u7AE0 \u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5757\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u7B2C3\u7AE0-\u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5757\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><ol><li>\u51FD\u6570\u4F5C\u7528\u57DF\u7684\u542B\u4E49\u662F\u6307\uFF0C\u5C5E\u4E8E\u8FD9\u4E2A\u51FD\u6570\u7684\u5168\u90E8\u53D8\u91CF\u90FD\u53EF\u4EE5\u5728\u6574\u4E2A\u51FD\u6570\u7684\u8303\u56F4\u5185\u4F7F\u7528\u53CA\u590D\u7528\uFF08\u4E8B\u5B9E\u4E0A\u5728\u5D4C\u5957\u7684\u4F5C\u7528\u57DF\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528\uFF09\u3002</li><li>\u51FD\u6570\u4F5C\u7528\u57DF\u76F8\u5F53\u4E8E\u9690\u85CF\u5185\u90E8\u5B9E\u73B0\uFF0C\u53EA\u5411\u5916\u66B4\u9732\u5FC5\u8981\u7684\u5185\u5BB9\uFF0C\u8FBE\u5230\u6700\u5C0F\u6388\u6743\u6216\u6700\u5C0F\u66B4\u9732\u539F\u5219\uFF1B\u547D\u540D\u51B2\u7A81\u901A\u8FC7\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u6216\u6A21\u5757\u7BA1\u7406\u8FDB\u884C\u5904\u7406\u3002</li><li>\u51FD\u6570\u58F0\u660E\u548C\u8868\u8FBE\u5F0F\u7684\u533A\u522B\uFF0C\u533F\u540D\u548C\u5177\u540D\uFF0C\u5177\u540D\u51FD\u6570\u7684\u540D\u79F0\u672C\u8EAB\u2018\u6C61\u67D3\u2019\u4E86\u6240\u5728\u4F5C\u7528\u57DF\uFF0C\u53EF\u4F7F\u7528\u7ACB\u5373\u6267\u884C\u51FD\u6570\u8868\u8FBE\u5F0F\u8FDB\u884C\u89C4\u907F\u3002</li><li>\u51FD\u6570\u4F5C\u7528\u57DF\u662F\u6700\u5E38\u89C1\u7684\u4F5C\u7528\u57DF\u5355\u5143\uFF1B\u4ECEES3\u5F00\u59CB\uFF0Ccatch\u5206\u53E5\u5177\u6709\u5757\u4F5C\u7528\u57DF\uFF0C\u5757\u4F5C\u7528\u57DF\u662F\u5BF9\u6700\u5C0F\u6388\u6743\u539F\u5219\u8FDB\u884C\u6269\u5C55\u7684\u5DE5\u5177\uFF0CES6\u5F15\u5165\u7684let\u4E3A\u5176\u58F0\u660E\u7684\u53D8\u91CF\u9690\u5F0F\u5730\u52AB\u6301\u4E86\u6240\u5728\u7684\u5757\u4F5C\u7528\u57DF\uFF1B\u5757\u4F5C\u7528\u57DF\u6709\u5229\u4E8E\u5783\u573E\u56DE\u6536\u673A\u5236\u3002</li></ol><h2 id="\u7B2C4\u7AE0-\u63D0\u5347" tabindex="-1">\u7B2C4\u7AE0 \u63D0\u5347 <a class="header-anchor" href="#\u7B2C4\u7AE0-\u63D0\u5347" aria-hidden="true">#</a></h2><ol><li>\u4EFB\u4F55\u4EE3\u7801\u88AB\u6267\u884C\u524D\u5305\u62EC\u53D8\u91CF\u548C\u51FD\u6570\u5728\u5185\u7684<span style="color:var(--vp-c-red);">\u6240\u6709\u58F0\u660E</span>\u90FD\u4F1A\u9996\u5148\u88AB\u5904\u7406\u3002</li><li>\u51FD\u6570\u58F0\u660E\u4F1A\u9996\u5148\u88AB\u63D0\u5347\uFF0C\u7136\u540E\u624D\u662F\u53D8\u91CF\u3002\u5757\u5185\u90E8\u58F0\u660E\u7684\u51FD\u6570\u4E5F\u4F1A\u88AB\u63D0\u5347\u3002</li><li><code>var a = 2;</code>\u4F1A\u88AB\u5F15\u64CE\u5F53\u4F5C\u4E24\u4E2A\u5355\u72EC\u7684\u58F0\u660E\uFF0C\u7B2C\u4E00\u4E2A\u662F\u7F16\u8BD1\u9636\u6BB5\u7684\u4EFB\u52A1\uFF0C\u800C\u7B2C\u4E8C\u4E2A\u5219\u662F\u6267\u884C\u9636\u6BB5\u7684\u4EFB\u52A1\u3002</li></ol><h2 id="\u7B2C5\u7AE0-\u4F5C\u7528\u57DF\u95ED\u5305" tabindex="-1">\u7B2C5\u7AE0 \u4F5C\u7528\u57DF\u95ED\u5305 <a class="header-anchor" href="#\u7B2C5\u7AE0-\u4F5C\u7528\u57DF\u95ED\u5305" aria-hidden="true">#</a></h2><ul><li>\u95ED\u5305\u81EA\u5DF1\u7684\u7406\u89E3<br> \u6309\u7167\u4F5C\u7528\u57DF\u5D4C\u5957\uFF0C\u5185\u90E8\u4F5C\u7528\u57DF\u53EF\u4EE5\u8BBF\u95EE\u5916\u90E8\u4F5C\u7528\u57DF\u53D8\u91CF\u7684\u89C4\u5219\uFF1B\u5185\u5C42\u51FD\u6570\u8BBF\u95EE\u5916\u5C42\u51FD\u6570\u7684\u53D8\u91CF\uFF0C\u5373\u4F7F\u8BE5\u5185\u5C42\u51FD\u6570\u5728\u5916\u5C42\u51FD\u6570\u4EE5\u5916\u6267\u884C\u4E5F\u5E94\u8BE5\u9075\u5FAA\uFF1B\u6B64\u65F6\u9700\u8981\u4E00\u4E2A\u5F15\u7528\u6765\u6346\u7ED1\u5916\u5C42\u51FD\u6570\u4F5C\u7528\u57DF\uFF0C\u4ECE\u800C\u4EA7\u751F\u4E00\u4E2A\u95ED\u5305\u7684\u6982\u5FF5\uFF0C\u5373\u4E00\u4E2A\u65E0\u8BBA\u5728\u4F55\u5904\u8FD0\u884C\u90FD\u53EF\u4EE5\u5F15\u7528\u5230\u5916\u90E8\u4F5C\u7528\u57DF\u7684\u51FD\u6570\u3002</li><li>\u300AJavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\uFF08\u7B2C4\u7248\uFF09\u300B\u95ED\u5305\u6307\u7684\u662F\u90A3\u4E9B\u5F15\u7528\u4E86\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF\u7684\u51FD\u6570\uFF0C\u901A\u5E38\u662F\u5728\u5D4C\u5957\u51FD\u6570\u4E2D\u5B9E\u73B0\u7684\u3002</li><li>\u3010MDN\u3011\u4E00\u4E2A\u51FD\u6570\u548C\u5BF9\u5176\u5468\u56F4\u72B6\u6001\uFF08lexical environment\uFF0C\u8BCD\u6CD5\u73AF\u5883\uFF09\u7684\u5F15\u7528\u6346\u7ED1\u5728\u4E00\u8D77\uFF08\u6216\u8005\u8BF4\u51FD\u6570\u88AB\u5F15\u7528\u5305\u56F4\uFF09\uFF0C\u8FD9\u6837\u7684\u7EC4\u5408\u5C31\u662F\u95ED\u5305\uFF08closure\uFF09\u3002</li><li>\u95ED\u5305\u7684\u4F7F\u7528<br> \u6A21\u5757\u6A21\u5F0F</li></ul><h2 id="\u9644\u5F55a-\u52A8\u6001\u4F5C\u7528\u57DF" tabindex="-1">\u9644\u5F55A \u52A8\u6001\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u9644\u5F55a-\u52A8\u6001\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><p>\u8BCD\u6CD5\u4F5C\u7528\u57DF\u662F\u5728\u5199\u4EE3\u7801\u6216\u8005\u8BF4\u5B9A\u4E49\u65F6\u786E\u5B9A\u7684\uFF0C\u800C\u52A8\u6001\u4F5C\u7528\u57DF\u662F\u5728\u8FD0\u884C\u65F6\u786E\u5B9A\u7684\u3002\uFF08this\u4E5F\u662F\uFF01\uFF09</p><h2 id="\u7B2C1\u7AE0-\u5173\u4E8Ethis" tabindex="-1">\u7B2C1\u7AE0 \u5173\u4E8Ethis <a class="header-anchor" href="#\u7B2C1\u7AE0-\u5173\u4E8Ethis" aria-hidden="true">#</a></h2><ol><li>this\u65E2\u4E0D\u6307\u5411\u51FD\u6570\u81EA\u8EAB\u4E5F\u4E0D\u6307\u5411\u51FD\u6570\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u3002</li><li>this\u5B9E\u9645\u4E0A\u662F\u5728\u51FD\u6570\u88AB\u8C03\u7528\u65F6\u53D1\u751F\u7684\u7ED1\u5B9A\uFF0C\u5B83\u6307\u5411\u4EC0\u4E48\u5B8C\u5168\u53D6\u51B3\u4E8E\u51FD\u6570\u5728\u54EA\u91CC\u88AB\u8C03\u7528\u3002 \u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u6D3B\u52A8\u8BB0\u5F55(\u6267\u884C\u4E0A\u4E0B\u6587)\uFF0Cthis\u662F\u8FD9\u4E2A\u8BB0\u5F55\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u4F1A\u5728\u51FD\u6570\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u7528\u5230\u3002<br></li><li>\u4E00\u4E2A\u6D3B\u52A8\u8BB0\u5F55(\u6267\u884C\u4E0A\u4E0B\u6587)\u5305\u542B\uFF1A</li></ol><ul><li>\u8C03\u7528\u6808(\u51FD\u6570\u5728\u54EA\u91CC\u88AB\u8C03\u7528)</li><li>\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F</li><li>\u4F20\u5165\u7684\u53C2\u6570</li></ul><ol start="4"><li>\u7ED1\u5B9A\u89C4\u5219</li></ol><ul><li>\u9ED8\u8BA4\u7ED1\u5B9A <code>foo()</code></li><li>\u9690\u5F0F\u7ED1\u5B9A <code>obj.foo()</code></li><li>\u663E\u5F0F\u7ED1\u5B9A <code>foo.call(obj); [].forEach(foo, obj)</code></li><li>new \u7ED1\u5B9A <code>new foo()</code></li><li>\u7BAD\u5934\u51FD\u6570\u4E0D\u4F7F\u7528\u4EE5\u4E0A\u7684\u7ED1\u5B9A\u89C4\u5219\uFF0C\u800C\u662F\u7EE7\u627F\u5916\u5C42\u51FD\u6570\u8C03\u7528\u7684this\u7ED1\u5B9A\u3002</li></ul><h2 id="\u7B2C3\u7AE0-\u5BF9\u8C61" tabindex="-1">\u7B2C3\u7AE0 \u5BF9\u8C61 <a class="header-anchor" href="#\u7B2C3\u7AE0-\u5BF9\u8C61" aria-hidden="true">#</a></h2><ol><li>\u8BED\u6CD5</li></ol><ul><li>\u4E24\u79CD\u5F62\u5F0F\u5B9A\u4E49\uFF1A\u58F0\u660E(\u6587\u5B57)\u5F62\u5F0F\u548C\u6784\u9020\u5F62\u5F0F\u3002</li></ul><ol start="2"><li>\u7C7B\u578B</li></ol><table><thead><tr><th>\u7B80\u5355\u57FA\u672C\u7C7B\u578B</th><th>\u590D\u6742\u57FA\u672C\u7C7B\u578B</th><th>\u5185\u7F6E\u5BF9\u8C61</th></tr></thead><tbody><tr><td>string<br>number<br>boolean<br>null<br>undefined<br>symbol</td><td>object<br></td><td>String<br>Number<br>Boolean<br>Object<br>Function<br>Array<br>Date<br>RegExp<br>Error</td></tr></tbody></table>',29),o=[r];function d(h,n,s,c,u,b){return i(),e("div",null,o)}var p=l(t,[["render",d]]);export{f as __pageData,p as default};