import{_ as s,o as n,c as a,a as l}from"./app.b422cb96.js";const D='{"title":"Input\u8F93\u5165\u9650\u5236\u53CA\u683C\u5F0F\u5316(PC&Mobile)","description":"","frontmatter":{},"headers":[],"relativePath":"article/input-limit.md"}',p={name:"article/input-limit.md"},e=l(`<h1 id="input\u8F93\u5165\u9650\u5236\u53CA\u683C\u5F0F\u5316-pc-mobile" tabindex="-1">Input\u8F93\u5165\u9650\u5236\u53CA\u683C\u5F0F\u5316(PC&amp;Mobile) <a class="header-anchor" href="#input\u8F93\u5165\u9650\u5236\u53CA\u683C\u5F0F\u5316-pc-mobile" aria-hidden="true">#</a></h1><ul><li><strong>\u573A\u666F</strong></li></ul><ol><li>\u9650\u5236\u7528\u6237\u8F93\u5165\uFF0C\u5982\u7EAF\u6570\u5B57\u3001\u7EAF\u91D1\u989D\u7B49\u3002</li><li>\u683C\u5F0F\u5316\u7528\u6237\u8F93\u5165\uFF0C\u5982\u8EAB\u4EFD\u8BC1\u3001\u94F6\u884C\u5361\u3001\u624B\u673A\u53F7\u7B49\u3002 <a href="https://input-validate.vercel.app/" target="_blank" rel="noopener noreferrer">\u793A\u4F8B\u5730\u5740</a></li></ol><ul><li><strong>\u73B0\u8C61</strong></li></ul><ol><li>input\u4E8B\u4EF6\u89E6\u53D1\u65F6\uFF0C\u952E\u5165\u5185\u5BB9\u672A\u663E\u793A\u5728\u9875\u9762\u4E0A\uFF0C\u6B64\u65F6\u91CD\u65B0\u66F4\u66FFvalue\u503C\u8FBE\u5230\u9650\u5236\u8F93\u5165\u3002</li></ol><ul><li><strong>\u5B9E\u73B0 - \u539F\u751FJS / Vue\u9875\u9762 / Vue\u7EC4\u4EF6 / Vue\u6307\u4EE4</strong></li></ul><ol><li>\u539F\u751FJS\u6F14\u793A( \u6570\u5B57\u8F93\u5165\u6846 )</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;fieldset&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;legend&gt;\u539F\u751FJS\u6F14\u793A&lt;/legend&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;label for=&quot;js-input&quot;&gt;\u6570\u5B57\u8F93\u5165\u6846&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;input id=&quot;js-input&quot; type=&quot;tel&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/fieldset&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let value = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let regExp = new RegExp(\`^(0|[1-9]\\\\d*)$\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.getElementById(&#39;js-input&#39;).addEventListener(&#39;input&#39;, e =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">             if (e.target.value &amp;&amp; !(regExp.test(e.target.value))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                e.target.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">             } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value = e.target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>Vue\u9875\u9762\u6F14\u793A ( \u6570\u5B57\u8F93\u5165\u6846 )</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;fieldset&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;legend&gt;Vue\u6F14\u793A&lt;/legend&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;label for=&quot;number&quot;&gt;\u6570\u5B57\u8F93\u5165\u6846&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input id=&quot;number&quot; v-model=&quot;number&quot; type=&quot;tel&quot; @input=&quot;_input&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/fieldset&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">            el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    number: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    value: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            beforeCreate () {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.regExp = {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    number: new RegExp(\`^(0|[1-9]\\\\d*)$\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                _input (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (e.target.value &amp;&amp; !(this.regExp.number.test(e.target.value))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        this.number = this.value</span></span>
<span class="line"><span style="color:#A6ACCD;">                    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        this.value = this.number</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>Vue\u7EC4\u4EF6\u6F14\u793A ( \u6570\u5B57\u8F93\u5165\u6846 )</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input :value=&quot;value&quot; type=&quot;tel&quot; @input=&quot;_input&quot; :placeholder=&quot;placeholder&quot; :maxlength=&quot;maxlength&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;input-number&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        placeholder: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &#39;\u8BF7\u8F93\u5165&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxlength: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: [String, Number],</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &#39;9&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            val: this.value</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    created () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.regExp = new RegExp(\`^(0|[1-9]\\\\d*)$\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        _input (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (e.target.value &amp;&amp; !this.regExp.test(e.target.value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                e.target.value = this.val</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.val = e.target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$emit(&#39;input&#39;, this.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>Vue\u6307\u4EE4\u6F14\u793A</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const directives = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    number: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        inserted: (el, binding, vnode) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let input = el.tagName.toUpperCase() === &#39;INPUT&#39; ? el : null</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!input) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                for (let i of el.children) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (i.tagName.toUpperCase() === &#39;INPUT&#39;) input = i</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (input) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                let regExp = new RegExp(\`^(0|[1-9]\\\\d*)$\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let value = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                const handleInput = e =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (e.target.value &amp;&amp; !(regExp.test(e.target.value))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        e.target.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">                    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        value = e.target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                on(input, &#39;input&#39;, handleInput)</span></span>
<span class="line"><span style="color:#A6ACCD;">                on(input, &#39;change&#39;, handleInput)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>\u56E0\u4E3Av-model\u672C\u8D28\u662Finput\u4E8B\u4EF6\u5E76\u4E14\u5148\u4E8E\u81EA\u5B9A\u4E49\u6307\u4EE4\u89E6\u53D1\uFF0C\u5BFC\u81F4\u6700\u540E\u4E00\u4E2A\u8F93\u5165\u7684\u975E\u6570\u5B57\u5B57\u7B26\u65E0\u6CD5\u66F4\u65B0\u5230v-model\u7ED1\u5B9A\u7684\u5B57\u6BB5\uFF0C\u6545\u91C7\u7528\u4FEE\u9970\u7B26lazy\u8F6C\u53D8\u4E3A\u4F7F\u7528 change \u4E8B\u4EF6\u8FDB\u884C\u540C\u6B65\u3002</em></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;input type=&quot;tel&quot; v-model.lazy=&quot;dnumber&quot; v-number&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><strong>\u5EF6\u4F38 - \u91D1\u989D\u8F93\u5165 / \u683C\u5F0F\u5316\u8F93\u5165</strong></li></ul><ol><li>\u91D1\u989D\u8F93\u5165 ( input[type=number] )</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input :value=&quot;value&quot; type=&quot;number&quot; @input=&quot;_input&quot; :placeholder=&quot;placeholder&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;input-money&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        placeholder: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &#39;\u8BF7\u8F93\u5165&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxlength: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: [String, Number],</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: 9</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        point: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: [String, Number],</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            val: this.value</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    created () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.regExp = new RegExp(\`^(0|[1-9]\\\\d{0,\${this.maxlength - 1}})(\\\\.\\\\d{0,\${this.point}})?$\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        _input (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!e.target.value &amp;&amp; this.val.length === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.val = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if ((e.target.value &amp;&amp; !(this.regExp.test(e.target.value))) || isNaN(e.target.valueAsNumber)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    e.target.value = this.val</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.val = e.target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$emit(&#39;input&#39;, this.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>\u91D1\u989D\u8F93\u5165\u6D89\u53CA\u5230\u5C0F\u6570\u70B9\uFF0C\u5F53type=tel\u65F6\u90E8\u5206\u624B\u673A\u81EA\u5E26\u952E\u76D8\u6CA1\u6709\u5C0F\u6570\u70B9\u6309\u94AE\uFF0C\u6545\u4F7F\u7528type=number\uFF0C\u5F0A\u7AEF\u662F\u65E0\u6CD5\u63A7\u5236\u5149\u6807\u3002</em></p><ol start="2"><li>\u683C\u5F0F\u5316\u8F93\u5165 (\u4F8B\uFF1A\u8EAB\u4EFD\u8BC1\u683C\u5F0F\u5316) \u5728input\u4E8B\u4EF6\u4E2D\uFF0C\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u683C\u5F0F\u5316\u8F93\u5165\u7684\u8EAB\u4EFD\u8BC1\u53F7\u7801\uFF0C\u66F4\u6362e.target.value\u3002</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">created () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.format = format[this.type]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$refs.input.value = this.format.regExp(this.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    _input (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let selectionEnd = e.target.selectionEnd</span></span>
<span class="line"><span style="color:#A6ACCD;">        let _val = this.val</span></span>
<span class="line"><span style="color:#A6ACCD;">        let _format = this.format.regExp(_val)</span></span>
<span class="line"><span style="color:#A6ACCD;">        let val = e.target.value.replace(/[^\\d]/g, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // let char = /\\d/.test(e.target.value.substr(selectionEnd - 1, 1))</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5220\u9664\u540E\uFF0C\u524D\u540E\u7684value\u76F8\u540C\uFF0C\u8BF4\u660E\u5220\u9664\u7684\u662F\u7A7A\u683C\uFF0C\u9700\u8981\u5904\u7406\u6210\u628A\u7A7A\u683C\u524D\u9762\u7684\u6570\u5B57\u4E5F\u5220\u9664\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (_val === val &amp;&amp; e.target.value.length &lt; _format.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.val = (_format.substr(0, selectionEnd - 1) + _format.substr(selectionEnd, _format.length)).replace(/[^\\d]/g, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            // selectionEnd -= 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.val = val</span></span>
<span class="line"><span style="color:#A6ACCD;">            // selectionEnd -= (char ? 0 : 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.type === &#39;idCard&#39; &amp;&amp; this.val.length === 17) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let lastChar = e.target.value.substr(e.target.value.length - 1, 1).toUpperCase()</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (lastChar === &#39;X&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.val += lastChar</span></span>
<span class="line"><span style="color:#A6ACCD;">                // selectionEnd += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        e.target.value = this.format.regExp(this.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // if (e.target.value.length &gt; _format.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // selectionEnd += e.target.value.substr(selectionEnd - 1, 1) === &#39; &#39; ? 1 : 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        // } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // selectionEnd -= e.target.value.substr(selectionEnd - 1, 1) === &#39; &#39; ? 1 : 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        // }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // this.selectionEnd = selectionEnd</span></span>
<span class="line"><span style="color:#A6ACCD;">        // e.target.setSelectionRange(this.selectionEnd, this.selectionEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;input&#39;, this.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    _keydown (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // this.selectionEnd = e.target.selectionEnd</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">     _keyup (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // if (isMobile()) e.target.setSelectionRange(this.selectionEnd, this.selectionEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>\u4EE3\u7801\u6CE8\u91CA\u5757\u4E3A\u5149\u6807\u5904\u7406\uFF0C\u5728\u4E0B\u9762\u5355\u72EC\u8BF4\u660E\u3002</em></p><ul><li><strong>\u5149\u6807\u63A7\u5236</strong> \u5F53\u8F93\u5165\u4E0D\u7B26\u5408\u7684\u5185\u5BB9\u6216\u683C\u5F0F\u5316\u5185\u5BB9\u65F6\uFF0Cinput\u4E8B\u4EF6\u8FDB\u884C\u9650\u5236\u5904\u7406\u65F6\u4F1A\u5BFC\u81F4\u5149\u6807\u4F4D\u7F6E\u9519\u4E71\uFF0C\u9700\u624B\u52A8\u8FDB\u884C\u8BBE\u7F6E\u5149\u6807\u7684\u4F4D\u7F6E\uFF0C\u5229\u7528<code>HTMLInputElement.setSelectionRange</code>\u65B9\u6CD5\u8FDB\u884C\u8BBE\u7F6E\u3002</li></ul><ol><li>setSelectionRange(selectionStart, selectionEnd [, selectionDirection]); <img src="https://upload-images.jianshu.io/upload_images/14576157-4441806e1484bb25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="setSelectionRange\u517C\u5BB9\u6027"></li></ol><ul><li><strong>\u6269\u5C55 - Vue\u6307\u4EE4\u5E94\u7528\u7B2C\u4E09\u65B9UI\u6846\u67B6 ( \u4EE5iview\u4E3A\u4F8B )</strong></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const directives = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    iviewNumber: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        inserted: (el, binding, vnode) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let input = el.tagName.toUpperCase() === &#39;INPUT&#39; ? el : null</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!input) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                for (let i of el.children) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (i.tagName.toUpperCase() === &#39;INPUT&#39;) input = i</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (input) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                let regExp = new RegExp(\`^(0|[1-9]\\\\d*)$\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let value = input.value || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                const handleInput = e =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (e.target.value &amp;&amp; !(regExp.test(e.target.value))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        e.target.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">                    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        value = e.target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    vnode.componentInstance.$emit(&#39;input&#39;, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                const handleKeydown = e =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    value = e.target.value</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                on(input, &#39;input&#39;, handleInput)</span></span>
<span class="line"><span style="color:#A6ACCD;">                on(input, &#39;keydown&#39;, handleKeydown)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default directives</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>input\u52A8\u6001\u8BBE\u7F6E\u7684value\u503C\u901A\u8FC7keydown\u4E8B\u4EF6\u8BBE\u7F6E\u5B9A\u4E49\u7684value\u521D\u59CB\u503C\u3002</em></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;iview-input v-model=&quot;iviewInput&quot; v-iview-number type=&quot;tel&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span slot=&quot;prepend&quot;&gt;\u7EAF\u6570\u5B57\u8F93\u5165\u6846&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/iview-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><strong>\u603B\u7ED3</strong> \u5229\u7528input\u4E8B\u4EF6\u53EF\u4EE5\u5BF9\u8F93\u5165\u5185\u5BB9\u8FDB\u884C\u9650\u5236\uFF0C\u4F7F\u7528<code>HTMLInputElement.setSelectionRange</code>\u65B9\u6CD5\u5BF9\u8F93\u5165\u65F6\u7684\u5149\u6807\u8FDB\u884C\u63A7\u5236\uFF0C\u5728\u4F7F\u7528Vue\u65F6\u53EF\u4EE5\u65B9\u4FBF\u5730\u62BD\u53D6\u7EAF\u6570\u5B57\u7EC4\u4EF6\u3001\u91D1\u989D\u7EC4\u4EF6\u3001\u8EAB\u4EFD\u8BC1\u683C\u5F0F\u5316\u7EC4\u4EF6\u7B49\uFF0C\u5728\u4F7F\u7528\u7B2C\u4E09\u65B9UI\u6846\u67B6\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u6307\u4EE4\u5BF9\u57FA\u7840\u8F93\u5165\u7EC4\u4EF6\u8FDB\u884C\u9650\u5236\u53CA\u683C\u5F0F\u5316\u8F93\u5165\u3002 <a href="https://github.com/PawelLin/input-validate" target="_blank" rel="noopener noreferrer">github\u5730\u5740</a></li></ul>`,30),t=[e];function o(c,i,C,A,r,y){return n(),a("div",null,t)}var g=s(p,[["render",o]]);export{D as __pageData,g as default};
