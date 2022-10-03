import{_ as e,o as n,c as i,e as s}from"./app.865132aa.js";const l={},t=s(`<h1 id="top-three" tabindex="-1"><a class="header-anchor" href="#top-three" aria-hidden="true">#</a> Top Three</h1><blockquote><p>\u0E44\u0E21\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49 sort \u0E2B\u0E23\u0E37\u0E2D min/max</p></blockquote><p>\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E32\u0E21\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32\u0E2A\u0E39\u0E07\u0E17\u0E36\u0E48\u0E2A\u0E38\u0E14\u0E15\u0E32\u0E21\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 n \u0E04\u0E48\u0E32</p><h2 id="\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02" tabindex="-1"><a class="header-anchor" href="#\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02" aria-hidden="true">#</a> \u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02</h2><ul><li><strong>Input</strong> (integer) \u0E08\u0E33\u0E19\u0E27\u0E19 Input \u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E31\u0E1A\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E19\u0E35\u0E49 n \u0E08\u0E33\u0E19\u0E27\u0E19</li><li>\u0E23\u0E31\u0E1A <strong>Input</strong> (integer/float) \u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E08\u0E30\u0E19\u0E33\u0E21\u0E32\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A \u0E42\u0E14\u0E22\u0E21\u0E35\u0E04\u0E48\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07 -1000 \u0E41\u0E25\u0E30 1000 \u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19 n \u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14</li><li><strong>Output</strong> (integer/float) \u0E04\u0E48\u0E32\u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48 1 (\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E2B\u0E19\u0E36\u0E48\u0E07)</li><li><strong>Output</strong> (integer/float) \u0E04\u0E48\u0E32\u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48 2 (\u0E23\u0E2D\u0E07\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E2B\u0E19\u0E36\u0E48\u0E07)</li><li><strong>Output</strong> (integer/float) \u0E04\u0E48\u0E32\u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48 3 (\u0E23\u0E2D\u0E07\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E2A\u0E2D\u0E07)</li></ul><h2 id="\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07-input-output" tabindex="-1"><a class="header-anchor" href="#\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07-input-output" aria-hidden="true">#</a> \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 Input / Output</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
5
1
2
3
4
5

Output
5
4
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
5
1.2
1.3
1.4
1.5
2

Output
2
1.5
1.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[t];function a(r,u){return n(),i("div",null,d)}const v=e(l,[["render",a],["__file","index.html.vue"]]);export{v as default};
