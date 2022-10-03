import{_ as e,o as t,c as a,e as n}from"./app.865132aa.js";const i={},r=n('<h1 id="list-deduplication" tabindex="-1"><a class="header-anchor" href="#list-deduplication" aria-hidden="true">#</a> List Deduplication</h1><p>Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.</p><p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.</p><p>Return k after placing the final result in the first k slots of nums.</p><p>Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.</p><h2 id="\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02" tabindex="-1"><a class="header-anchor" href="#\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02" aria-hidden="true">#</a> \u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02</h2><p>The judge will test your solution with the following code:</p><p>int[] nums = [...]; // Input array int[] expectedNums = [...]; // The expected answer with correct length</p><p>int k = removeDuplicates(nums); // Calls your implementation</p><p>assert k == expectedNums.length; for (int i = 0; i &lt; k; i++) { assert nums[i] == expectedNums[i]; } If all assertions pass, then your solution will be accepted.</p><h2 id="\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02-1" tabindex="-1"><a class="header-anchor" href="#\u0E02\u0E49\u0E2D\u0E01\u0E4D\u0E32\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02-1" aria-hidden="true">#</a> \u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02</h2><h2 id="\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07-input-output" tabindex="-1"><a class="header-anchor" href="#\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07-input-output" aria-hidden="true">#</a> \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 Input / Output</h2>',12),s=[r];function o(h,l){return t(),a("div",null,s)}const d=e(i,[["render",o],["__file","index.html.vue"]]);export{d as default};
