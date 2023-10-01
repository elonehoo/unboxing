import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.cc795e4d.js";const u=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"editLink":true},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),p={name:"guide/index.md"},l=o(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Unboxing is a TypeScript tool library built on Vite, which is a Fast, small and purely functional utility library for TypeScript.</p><h2 id="adding-unboxing-to-your-project" tabindex="-1">Adding Unboxing to your Project <a class="header-anchor" href="#adding-unboxing-to-your-project" aria-label="Permalink to &quot;Adding Unboxing to your Project&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@unboxing/unboxing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@unboxing/unboxing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@unboxing/unboxing</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@unboxing/unboxing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@unboxing/unboxing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@unboxing/unboxing</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {pathOr,compose,toLower,map} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@unboxing/unboxing&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">toLowerName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">compose</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  toLower,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">pathOr</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(toLowerName)([{name: </span><span style="color:#9ECBFF;">&#39;testA&#39;</span><span style="color:#E1E4E8;">}, {name: </span><span style="color:#9ECBFF;">&#39;testb&#39;</span><span style="color:#E1E4E8;">}])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {pathOr,compose,toLower,map} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@unboxing/unboxing&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">toLowerName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">compose</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  toLower,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">pathOr</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">], </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(toLowerName)([{name: </span><span style="color:#032F62;">&#39;testA&#39;</span><span style="color:#24292E;">}, {name: </span><span style="color:#032F62;">&#39;testb&#39;</span><span style="color:#24292E;">}])</span></span></code></pre></div>`,7),e=[l];function t(r,c,y,E,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
