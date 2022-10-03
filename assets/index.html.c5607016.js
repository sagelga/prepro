import{_ as e,o as i,c as n,e as a}from"./app.865132aa.js";const d={},l=a(`<h1 id="min-median-max-hard" tabindex="-1"><a class="header-anchor" href="#min-median-max-hard" aria-hidden="true">#</a> Min, Median, Max (Hard)</h1><p>\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E04\u0E48\u0E32\u0E14\u0E31\u0E07\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E19\u0E35\u0E49\u0E08\u0E32\u0E01\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E21\u0E32 n \u0E08\u0E33\u0E19\u0E27\u0E19</p><ul><li>Min \u0E04\u0E48\u0E32\u0E15\u0E48\u0E33\u0E2A\u0E38\u0E14</li><li>Median \u0E04\u0E48\u0E32\u0E01\u0E25\u0E32\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02</li><li>Max \u0E04\u0E48\u0E32\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14</li></ul><p>\u0E42\u0E14\u0E22\u0E2B\u0E32\u0E01\u0E27\u0E48\u0E32\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 Median \u0E19\u0E31\u0E49\u0E19\u0E44\u0E1B\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E2A\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 \u0E43\u0E2B\u0E49\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2B\u0E32\u0E23\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E2A\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E19\u0E31\u0E49\u0E19</p><h2 id="\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02" tabindex="-1"><a class="header-anchor" href="#\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02" aria-hidden="true">#</a> \u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02</h2><ul><li>\u0E23\u0E31\u0E1A Input (integer/float) \u0E08\u0E19\u0E01\u0E27\u0E48\u0E32\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14 (no new line)</li><li>Output (integer/float) \u0E04\u0E48\u0E32\u0E15\u0E48\u0E33\u0E2A\u0E38\u0E14 (min)</li><li>Output (integer/float) \u0E04\u0E48\u0E32\u0E01\u0E25\u0E32\u0E07 (mean)</li><li>Output (integer/float) \u0E04\u0E48\u0E32\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 (max)</li></ul><h2 id="\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07-input-output" tabindex="-1"><a class="header-anchor" href="#\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07-input-output" aria-hidden="true">#</a> \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 Input / Output</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
1
2
3
4
5
6

Output
1
3.5
6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
10
90

Output
10
50
90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),s=[l];function t(r,u){return i(),n("div",null,s)}const v=e(d,[["render",t],["__file","index.html.vue"]]);export{v as default};
