import{_ as i,o as n,c as e,e as d}from"./app.865132aa.js";const l={},s=d(`<h1 id="multiplication-table" tabindex="-1"><a class="header-anchor" href="#multiplication-table" aria-hidden="true">#</a> Multiplication Table</h1><blockquote><p>\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49 Loop (For / While) \u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E35\u0E22\u0E19</p></blockquote><p>\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E31\u0E25\u0E01\u0E2D\u0E23\u0E34\u0E17\u0E36\u0E21\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E15\u0E32\u0E23\u0E32\u0E07\u0E2A\u0E39\u0E15\u0E23\u0E04\u0E39\u0E13 (Multiplication Table) \u0E42\u0E14\u0E22\u0E17\u0E35\u0E48\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E41\u0E21\u0E48\u0E2A\u0E39\u0E15\u0E23\u0E04\u0E39\u0E13\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E04\u0E39\u0E13\u0E44\u0E14\u0E49</p><h2 id="\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02" tabindex="-1"><a class="header-anchor" href="#\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02" aria-hidden="true">#</a> \u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02</h2><h2 id="\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07-input-output" tabindex="-1"><a class="header-anchor" href="#\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07-input-output" aria-hidden="true">#</a> \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 Input / Output</h2><h2 id="input-output" tabindex="-1"><a class="header-anchor" href="#input-output" aria-hidden="true">#</a> Input / Output</h2><ul><li><strong>Input</strong> \u0E15\u0E31\u0E27\u0E04\u0E39\u0E13: \u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E15\u0E47\u0E21\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1A\u0E27\u0E01 (Positive Integer)</li><li><strong>Input</strong> \u0E41\u0E21\u0E48\u0E2A\u0E39\u0E15\u0E23\u0E04\u0E39\u0E13: \u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E15\u0E47\u0E21\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1A\u0E27\u0E01 (Positive Integer)</li><li><strong>Output</strong> \u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C: \u0E15\u0E32\u0E23\u0E32\u0E07\u0E2A\u0E39\u0E15\u0E23\u0E04\u0E39\u0E13\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 \u0E41\u0E1A\u0E48\u0E07\u0E41\u0E16\u0E27\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E41\u0E17\u0E47\u0E1A (Tab \u0E2B\u0E23\u0E37\u0E2D <code>\\t</code>) \u0E2B\u0E19\u0E36\u0E48\u0E07\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E42\u0E14\u0E22\u0E40\u0E27\u0E49\u0E19\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E41\u0E21\u0E48\u0E2A\u0E39\u0E15\u0E23\u0E04\u0E39\u0E13\u0E41\u0E25\u0E49\u0E27</li></ul><h2 id="sample-input-output" tabindex="-1"><a class="header-anchor" href="#sample-input-output" aria-hidden="true">#</a> Sample Input / Output</h2><p>\u0E42\u0E14\u0E22\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E41\u0E25\u0E49\u0E27\u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E01\u0E32\u0E23\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E04\u0E2D\u0E25\u0E25\u0E31\u0E21\u0E19\u0E4C 3 \u0E41\u0E16\u0E27\u0E14\u0E31\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
3
5

Output
1 x 1 = 1       2 x 1 = 2       3 x 1 = 3
1 x 2 = 2       2 x 2 = 4       3 x 2 = 6
1 x 3 = 3       2 x 3 = 6       3 x 3 = 9
1 x 4 = 4       2 x 4 = 8       3 x 4 = 12
1 x 5 = 5       2 x 5 = 10      3 x 5 = 15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
5
6

Output
1 x 1 = 1       2 x 1 = 2       3 x 1 = 3
1 x 2 = 2       2 x 2 = 4       3 x 2 = 6
1 x 3 = 3       2 x 3 = 6       3 x 3 = 9
1 x 4 = 4       2 x 4 = 8       3 x 4 = 12
1 x 5 = 5       2 x 5 = 10      3 x 5 = 15
1 x 6 = 6       2 x 6 = 12      3 x 6 = 18

4 x 1 = 4       5 x 1 = 5
4 x 2 = 8       5 x 2 = 10
4 x 3 = 12      5 x 3 = 15
4 x 4 = 16      5 x 4 = 20
4 x 5 = 20      5 x 5 = 25
4 x 6 = 24      5 x 6 = 30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input
12
12

Output
1 x 1 = 1       2 x 1 = 2       3 x 1 = 3
1 x 2 = 2       2 x 2 = 4       3 x 2 = 6
1 x 3 = 3       2 x 3 = 6       3 x 3 = 9
1 x 4 = 4       2 x 4 = 8       3 x 4 = 12
1 x 5 = 5       2 x 5 = 10      3 x 5 = 15
1 x 6 = 6       2 x 6 = 12      3 x 6 = 18
1 x 7 = 7       2 x 7 = 14      3 x 7 = 21
1 x 8 = 8       2 x 8 = 16      3 x 8 = 24
1 x 9 = 9       2 x 9 = 18      3 x 9 = 27
1 x 10 = 10     2 x 10 = 20     3 x 10 = 30
1 x 11 = 11     2 x 11 = 22     3 x 11 = 33
1 x 12 = 12     2 x 12 = 24     3 x 12 = 36

4 x 1 = 4       5 x 1 = 5       6 x 1 = 6
4 x 2 = 8       5 x 2 = 10      6 x 2 = 12
4 x 3 = 12      5 x 3 = 15      6 x 3 = 18
4 x 4 = 16      5 x 4 = 20      6 x 4 = 24
4 x 5 = 20      5 x 5 = 25      6 x 5 = 30
4 x 6 = 24      5 x 6 = 30      6 x 6 = 36
4 x 7 = 28      5 x 7 = 35      6 x 7 = 42
4 x 8 = 32      5 x 8 = 40      6 x 8 = 48
4 x 9 = 36      5 x 9 = 45      6 x 9 = 54
4 x 10 = 40     5 x 10 = 50     6 x 10 = 60
4 x 11 = 44     5 x 11 = 55     6 x 11 = 66
4 x 12 = 48     5 x 12 = 60     6 x 12 = 72

7 x 1 = 7       8 x 1 = 8       9 x 1 = 9
7 x 2 = 14      8 x 2 = 16      9 x 2 = 18
7 x 3 = 21      8 x 3 = 24      9 x 3 = 27
7 x 4 = 28      8 x 4 = 32      9 x 4 = 36
7 x 5 = 35      8 x 5 = 40      9 x 5 = 45
7 x 6 = 42      8 x 6 = 48      9 x 6 = 54
7 x 7 = 49      8 x 7 = 56      9 x 7 = 63
7 x 8 = 56      8 x 8 = 64      9 x 8 = 72
7 x 9 = 63      8 x 9 = 72      9 x 9 = 81
7 x 10 = 70     8 x 10 = 80     9 x 10 = 90
7 x 11 = 77     8 x 11 = 88     9 x 11 = 99
7 x 12 = 84     8 x 12 = 96     9 x 12 = 108

10 x 1 = 10     11 x 1 = 11     12 x 1 = 12
10 x 2 = 20     11 x 2 = 22     12 x 2 = 24
10 x 3 = 30     11 x 3 = 33     12 x 3 = 36
10 x 4 = 40     11 x 4 = 44     12 x 4 = 48
10 x 5 = 50     11 x 5 = 55     12 x 5 = 60
10 x 6 = 60     11 x 6 = 66     12 x 6 = 72
10 x 7 = 70     11 x 7 = 77     12 x 7 = 84
10 x 8 = 80     11 x 8 = 88     12 x 8 = 96
10 x 9 = 90     11 x 9 = 99     12 x 9 = 108
10 x 10 = 100   11 x 10 = 110   12 x 10 = 120
10 x 11 = 110   11 x 11 = 121   12 x 11 = 132
10 x 12 = 120   11 x 12 = 132   12 x 12 = 144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),x=[s];function v(a,u){return n(),e("div",null,x)}const c=i(l,[["render",v],["__file","index.html.vue"]]);export{c as default};
