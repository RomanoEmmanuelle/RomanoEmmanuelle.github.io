---
layout: archive
title: "Chiba University 2027 Mathematics Entrance Examination"
permalink: /notes/chiba-2027/
author_profile: true
---
<aside class="exam-disclaimer" aria-label="Disclaimer">
  <strong>Disclaimer.</strong> The solutions provided here are not official solutions, and the English translation of the questions is not an official translation.
</aside>

<nav class="exam-index" aria-label="Problem index">
  <span>Index</span>
  <a href="#a0">A0</a>
    <a href="#a1">A1</a>
    <a href="#a2">A2</a>
    <a href="#a3">A3</a>
    <a href="#a4">A4</a>
    <a href="#a5">A5</a>
    <a href="#b1">B1</a>
    <a href="#b2">B2</a>
    <a href="#b3">B3</a>
    <a href="#b4">B4</a>
    <a href="#b5">B5</a>
    <a href="#b6">B6</a>
    <a href="#b7">B7</a>
    <a href="#b8">B8</a>
    <a href="#b9">B9</a>
    <a href="#b10">B10</a>
    <a href="#b11">B11</a>
</nav>

<article class="exam-problem" id="a0">
  <header class="exam-problem__header">
    <span class="exam-problem__label">A0</span>
    <a class="exam-problem__anchor" href="#a0" aria-label="Link to problem A0"></a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\(\mathbb{N}\)</span> be the set of all natural numbers and <span class="exam-math exam-math--inline">\(\mathbb{Z}\)</span> the set of all integers. For a map <span class="exam-math exam-math--inline">\(f:\mathbb{N}\to\mathbb{Z}\)</span>, consider the following condition.</p>
<div class="exam-math exam-math--display">\[(*)\quad \exists\,C\geq0\quad\forall m,n\in\mathbb{N}\quad |f(m)+f(n)-f(m+n)|\leq C.\]</div>
<p>Define the set <span class="exam-math exam-math--inline">\(F\)</span> by</p>
<div class="exam-math exam-math--display">\[F:=\{f:\mathbb{N}\to\mathbb{Z}\mid f\text{ satisfies condition $(*)$}\}.\]</div>
<p>Also consider the following binary relation on <span class="exam-math exam-math--inline">\(F\)</span>.</p>
<div class="exam-math exam-math--display">\[f\sim g\quad\Longleftrightarrow\quad\exists D\geq0\quad\forall m\in\mathbb{N}\quad |f(m)-g(m)|\leq D.\]</div>
<ol>
<li>Prove that the relation <span class="exam-math exam-math--inline">\(\sim\)</span> is an equivalence relation.
</li>
<li>Give elements <span class="exam-math exam-math--inline">\(f_1,f_2\)</span> of <span class="exam-math exam-math--inline">\(F\)</span> such that <span class="exam-math exam-math--inline">\(f_1\neq f_2\)</span> and <span class="exam-math exam-math--inline">\(f_1\sim f_2\)</span>. Also prove that the given <span class="exam-math exam-math--inline">\(f_1,f_2\)</span> belong to <span class="exam-math exam-math--inline">\(F\)</span> and that <span class="exam-math exam-math--inline">\(f_1\sim f_2\)</span>.
</li>
<li>Give elements <span class="exam-math exam-math--inline">\(g_1,g_2\)</span> of <span class="exam-math exam-math--inline">\(F\)</span> for which <span class="exam-math exam-math--inline">\(g_1\sim g_2\)</span> does not hold.
</li>
<li>Construct an injection from <span class="exam-math exam-math--inline">\(\mathbb{Z}\)</span> to the quotient set <span class="exam-math exam-math--inline">\(F/{\sim}\)</span> and show that it is injective.
</li>
</ol>
  </div>
<details class="exam-solution">
  <summary>Show solution</summary>
  <div class="exam-solution__body">
<ol>
<li>We show that (a) <span class="exam-math exam-math--inline">\(f\sim f\)</span>, (b) <span class="exam-math exam-math--inline">\(f \sim g \Rightarrow g\sim f\)</span>, and (c) <span class="exam-math exam-math--inline">\((f \sim g \text{ and } g \sim h) \Rightarrow f \sim h\)</span> for every <span class="exam-math exam-math--inline">\(f,g,h \in F\)</span>.
<ul>
<li>(a) Choose <span class="exam-math exam-math--inline">\(D=0\)</span> so that for each <span class="exam-math exam-math--inline">\(m \in \mathbb N\)</span>, <span class="exam-math exam-math--inline">\(f(m)-f(m)=0 \leq D\)</span>.
</li>
<li>(b) Suppose <span class="exam-math exam-math--inline">\(f \sim g\)</span>. There exists <span class="exam-math exam-math--inline">\(D \geq 0\)</span> such that for each <span class="exam-math exam-math--inline">\(m \in \mathbb N\)</span>, <span class="exam-math exam-math--inline">\(|f(m)-g(m)| \leq D\)</span>. Now, choose <span class="exam-math exam-math--inline">\(D&#39;:=D\)</span>. For each <span class="exam-math exam-math--inline">\(m \in \mathbb N\)</span>,
<div class="exam-math exam-math--display">\[|g(m)-f(m)|=|f(m)-g(m)| \leq D&#39; = D.\]</div>
<p>Therefore, <span class="exam-math exam-math--inline">\(g \sim f\)</span>.</p>
</li>
<li>(c) Suppose <span class="exam-math exam-math--inline">\(f \sim g\)</span> and <span class="exam-math exam-math--inline">\(g \sim h\)</span>. There exist <span class="exam-math exam-math--inline">\(D_1, D_2 \geq 0\)</span> such that for each <span class="exam-math exam-math--inline">\(m \in \mathbb N\)</span>:
<div class="exam-math exam-math--display">\[|f(m)-g(m)| \leq D_1 \qquad |g(m)-h(m)| \leq D_2.\]</div>
<p>Now, by triangle inequality:</p>
<div class="exam-math exam-math--display">\[\begin{aligned}
|f(m)-h(m)| &amp;= |f(m)-g(m) + g(m) - h(m)|\\
     &amp;\leq |f(m) - g(m)| + |g(m)-h(m)| \leq D_1+D_2
\end{aligned}\]</div>
<p>for each <span class="exam-math exam-math--inline">\(m \in \mathbb N\)</span>. Finally, setting <span class="exam-math exam-math--inline">\(D&#39;:=D_1+D_2\)</span>, we obtain <span class="exam-math exam-math--inline">\(f \sim h\)</span>.</p>
</li>
</ul>
</li>
<li>Define <span class="exam-math exam-math--inline">\(f_1(x):=x+1, f_2(x)=x-1\)</span> for every <span class="exam-math exam-math--inline">\(x \in \mathbb N\)</span>. Then, <span class="exam-math exam-math--inline">\(f_1 \neq f_2\)</span> but <span class="exam-math exam-math--inline">\(f_1 \sim f_2\)</span>. We show that <span class="exam-math exam-math--inline">\(f_1,f_2 \in F\)</span> and <span class="exam-math exam-math--inline">\(f_1 \sim f_2\)</span>.
<p>Choose <span class="exam-math exam-math--inline">\(C:=1\)</span>.</p>
<ul>
<li>We show <span class="exam-math exam-math--inline">\(f_1 \in F\)</span> (<span class="exam-math exam-math--inline">\(f_2 \in F\)</span> can be proven analogusly). For each <span class="exam-math exam-math--inline">\(m, n \in \mathbb N\)</span>
<div class="exam-math exam-math--display">\[|f_1(m)+f_1(n)-f_1(m+n)|=|m+1+n+1-(m+n+1)|=1 \leq C.\]</div>
</li>
<li>Choose <span class="exam-math exam-math--inline">\(D:=2\)</span>. For each <span class="exam-math exam-math--inline">\(m \in \mathbb N\)</span>, <span class="exam-math exam-math--inline">\(|f_1(m)-f_2(m)|=|2| \leq D.\)</span> Therefore, <span class="exam-math exam-math--inline">\(f_1 \sim f_2\)</span>.
</li>
</ul>
</li>
<li>Define <span class="exam-math exam-math--inline">\(g_1(x):=x\)</span>, <span class="exam-math exam-math--inline">\(g_2(x):=2x\)</span>. Then <span class="exam-math exam-math--inline">\(g_1,g_2 \in F\)</span> but <span class="exam-math exam-math--inline">\(g_1 \nsim g_2\)</span>. Indeed, choosing <span class="exam-math exam-math--inline">\(C_1=C_2=0\)</span> we have
<div class="exam-math exam-math--display">\[|g_i(m)+g_i(n)-g_i(m+n)| \leq C_i\]</div>
<p>for each <span class="exam-math exam-math--inline">\(m,n \in \mathbb N\)</span> and <span class="exam-math exam-math--inline">\(i=1,2\)</span>. Thus <span class="exam-math exam-math--inline">\(g_1,g_2 \in \mathbb F\)</span>. However, for each <span class="exam-math exam-math--inline">\(m \in \mathbb N\)</span>, there is no real number <span class="exam-math exam-math--inline">\(D\)</span> such that</p>
<div class="exam-math exam-math--display">\[|g_1(m)-g_2(m)|=|m|\leq D\]</div>
<p>since <span class="exam-math exam-math--inline">\(|m|\)</span> is unbounded.</p>
</li>
<li>Define
<div class="exam-math exam-math--display">\[\Phi: \mathbb Z \to F/\sim, \qquad n \mapsto [f_n(x)]\]</div>
<p>where <span class="exam-math exam-math--inline">\(f_n(x):=nx\)</span>. One can easily see that this is well defined. This map is injective. Indeed, if <span class="exam-math exam-math--inline">\(\Phi(n)=\phi(m)\)</span>, we have <span class="exam-math exam-math--inline">\([f_n(x)]=[f_m(x)]\)</span>, e.g., <span class="exam-math exam-math--inline">\(f_n \sim f_m\)</span>. This means there exists <span class="exam-math exam-math--inline">\(D\geq 0\)</span> such that for each <span class="exam-math exam-math--inline">\(x \in \mathbb N\)</span>,</p>
<div class="exam-math exam-math--display">\[|f_n(x)-f_m(x)|=|(n-m)x| \leq D.\]</div>
<p>Now, suppose that <span class="exam-math exam-math--inline">\(n\neq m\)</span>. Then <span class="exam-math exam-math--inline">\(|(n-m)x|\)</span> is unbounded, contradicting the existence of <span class="exam-math exam-math--inline">\(D\)</span>. Therefore <span class="exam-math exam-math--inline">\(n=m\)</span>, as desired.</p>
</li>
</ol>
  </div>
</details>
</article>

<article class="exam-problem" id="a1">
  <header class="exam-problem__header">
    <span class="exam-problem__label">A1</span>
    <a class="exam-problem__anchor" href="#a1" aria-label="Link to problem A1">#</a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\(V\)</span> be the real vector space of all real <span class="exam-math exam-math--inline">\(n\times n\)</span> matrices. Write <span class="exam-math exam-math--inline">\({}^{\mathrm t}X\)</span> for the transpose of a matrix <span class="exam-math exam-math--inline">\(X\)</span>. For <span class="exam-math exam-math--inline">\(A\in V\)</span>, define <span class="exam-math exam-math--inline">\(T_A:V\to V\)</span> by <span class="exam-math exam-math--inline">\(T_A(X)=AX+{}^tX {}^tA\)</span>. Then <span class="exam-math exam-math--inline">\(T_A\)</span> is a linear transformation of <span class="exam-math exam-math--inline">\(V\)</span> (you do not need to prove this).</p>
<ol>
<li>Let <span class="exam-math exam-math--inline">\(W_1,\ W_2\)</span> be the subspaces of <span class="exam-math exam-math--inline">\(V\)</span> consisting of symmetric and skew-symmetric matrices, respectively. Show that <span class="exam-math exam-math--inline">\(V\)</span> is the direct sum <span class="exam-math exam-math--inline">\(W_1\oplus W_2\)</span> of <span class="exam-math exam-math--inline">\(W_1\)</span> and <span class="exam-math exam-math--inline">\(W_2\)</span>.
</li>
<li>Let <span class="exam-math exam-math--inline">\(S=aI\)</span> be a scalar matrix (<span class="exam-math exam-math--inline">\(a\)</span> is a real number and <span class="exam-math exam-math--inline">\(I\)</span> is the identity matrix). Prove that <span class="exam-math exam-math--inline">\(T_S\)</span> is diagonalizable and find the trace <span class="exam-math exam-math--inline">\(\operatorname{Tr} T_S\)</span>.
</li>
<li>Let <span class="exam-math exam-math--inline">\(n=3,\ N=\begin{bmatrix}0&amp;0&amp;1\\0&amp;0&amp;0\\0&amp;0&amp;0\end{bmatrix}\)</span>. Find the smallest positive integer <span class="exam-math exam-math--inline">\(k\)</span> such that <span class="exam-math exam-math--inline">\(T_N^k=0\)</span>, and the dimension of <span class="exam-math exam-math--inline">\(\operatorname{Ker} T_N\)</span>.
</li>
<li>Find the Jordan canonical form of <span class="exam-math exam-math--inline">\(T_N\)</span>. You may write your answer using <span class="exam-math exam-math--inline">\(J_d(\alpha)\)</span>, where the Jordan block of size <span class="exam-math exam-math--inline">\(d\)</span> with eigenvalue <span class="exam-math exam-math--inline">\(\alpha\)</span> is <span class="exam-math exam-math--inline">\(J_d(\alpha)=\begin{bmatrix}\alpha&amp;1&amp;&amp;\\&amp;\alpha&amp;\ddots&amp;\\&amp;&amp;\ddots&amp;1\\&amp;&amp;&amp;\alpha\end{bmatrix}\)</span>. You do not need to find a basis with respect to which the representing matrix is in Jordan canonical form.
</li>
</ol>
  </div>
<details class="exam-solution">
  <summary>Show solution</summary>
  <div class="exam-solution__body">
<ol>
<li>From the statements we have <span class="exam-math exam-math--inline">\(W_1=\{X \in W \mid X = {}^tX\}\)</span> and <span class="exam-math exam-math--inline">\(W_2=\{X \in W \mid -X={}^tX\}\)</span>. We show that (a) <span class="exam-math exam-math--inline">\(V=W_1+V_2\)</span> and (b) <span class="exam-math exam-math--inline">\(W_1 \cap W_2=\varnothing\)</span>.
<ul>
<li>(a) For each <span class="exam-math exam-math--inline">\(X \in V\)</span>, we can write it as
<div class="exam-math exam-math--display">\[X=\frac{1}{2}\underbrace{(X+{}^{\mathrm t}X)}_{\in W_1}+\frac{1}{2}\underbrace{(X-{}^{\mathrm t}X)}_{\in W_2} \in W_1+W_2.\]</div>
<p>Thus <span class="exam-math exam-math--inline">\(V \subseteq W_1+W_2\)</span>. The other direction is obvious.</p>
</li>
<li>(b) If <span class="exam-math exam-math--inline">\(X \in W_1 \cap W_2\)</span>, then <span class="exam-math exam-math--inline">\(X={}^{\mathrm t}X=-X\)</span>. This is true for <span class="exam-math exam-math--inline">\(X=0\)</span> only.
</li>
</ul>
</li>
<li>Since <span class="exam-math exam-math--inline">\(S=aI\)</span>,
<div class="exam-math exam-math--display">\[T_S(X)=aIX+aI{}^{\mathrm t}X=a(X+{}^{\mathrm t}X).\]</div>
<p>If <span class="exam-math exam-math--inline">\(X \in W_1\)</span>, <span class="exam-math exam-math--inline">\(T_S(X)=2aX\)</span>. If <span class="exam-math exam-math--inline">\(X \in W_2\)</span>, <span class="exam-math exam-math--inline">\(T_S(X)=0\)</span>. By (1), the eigen bases of <span class="exam-math exam-math--inline">\(W_1\)</span> and <span class="exam-math exam-math--inline">\(W_2\)</span> forms <span class="exam-math exam-math--inline">\(V\)</span>. Thus <span class="exam-math exam-math--inline">\(T_S\)</span> is diagonalizable. Furthermore, the matrix representation of <span class="exam-math exam-math--inline">\(T_S\)</span> is as following:</p>
<div class="exam-math exam-math--display">\[[T_S]_{\text{rep}}=\begin{pmatrix}
    2aI_{\dim W_1} &amp; 0 \\
    0 &amp; 0_{\dim W_2}
  \end{pmatrix}.\]</div>
<p>Therefore, <span class="exam-math exam-math--inline">\(\operatorname{Tr} T_S=\underbrace{(2a+\cdots+2a)}_{\dim W_1\text{&#39;s of }2a} + \underbrace{(0+\cdots+0)}_{\dim W_2\text{&#39;s of }0}=2a\cdot \displaystyle \frac{n(n+1)}{2}=an(n+1)\)</span>.</p>
</li>
<li>Write <span class="exam-math exam-math--inline">\(X=\begin{pmatrix}
    a &amp; b &amp; c \\
    d &amp; e &amp; f \\
    g &amp; h &amp; i
  \end{pmatrix}\)</span>. If <span class="exam-math exam-math--inline">\(X \in \ker T_N\)</span>, we have <span class="exam-math exam-math--inline">\(NX+{}^tX {}^tN=0\)</span>.
<p>Notice that</p>
<div class="exam-math exam-math--display">\[NX=\begin{pmatrix}
    g &amp; h &amp; i\\
             \\
  \end{pmatrix}, \qquad -{}^tX {}^tN = \begin{pmatrix}
    -g &amp; &amp; \\
    -h &amp; &amp; \\
    -i &amp; &amp; 
  \end{pmatrix}.\]</div>
<p>Comparing these two yields <span class="exam-math exam-math--inline">\(g=h=i=0\)</span>. Therefore,</p>
<div class="exam-math exam-math--display">\[\ker T_N =\text{span}\left\{
    \begin{pmatrix}
  1 &amp; &amp; \\
   &amp; &amp; \\
   &amp; &amp; 
  \end{pmatrix},\begin{pmatrix}
   &amp;1 &amp; \\
   &amp; &amp; \\
   &amp; &amp; 
  \end{pmatrix}, \begin{pmatrix}
   &amp; &amp;1 \\
   &amp; &amp; \\
   &amp; &amp; 
  \end{pmatrix}, \begin{pmatrix}
   &amp; &amp; \\
   1&amp; &amp; \\
   &amp; &amp; 
  \end{pmatrix}, \begin{pmatrix}
   &amp; &amp; \\
   &amp; 1&amp; \\
   &amp; &amp; 
  \end{pmatrix}, \begin{pmatrix}
   &amp; &amp; \\
   &amp; &amp;1 \\
   &amp; &amp; 
  \end{pmatrix}\right\},\]</div>
<p>so <span class="exam-math exam-math--inline">\(\dim \ker T_N = 6\)</span>. Next, we claim that <span class="exam-math exam-math--inline">\(\min k=3\)</span>. Indeed,</p>
<div class="exam-math exam-math--display">\[\begin{aligned}
T_N(X) &amp;= NX + {}^t (NX);\\
  T^2_N(X) &amp;= N(NX + {}^t (NX)) + {}^t (N(NX + {}^t (NX))) = 2N {}^t X {}^t N;\\
  T^3_N(X) &amp;=0.
\end{aligned}\]</div>
</li>
<li>From (3) <span class="exam-math exam-math--inline">\(\dim \ker T_N = 6\)</span>, <span class="exam-math exam-math--inline">\(\dim \ker T^2_N=8\)</span>, and <span class="exam-math exam-math--inline">\(\dim \ker T^3_N=9\)</span>. This means that there are total <span class="exam-math exam-math--inline">\(6\)</span> jordan blocks. Moreover, <span class="exam-math exam-math--inline">\(k=3\)</span> implies that there is no jordan block larger than <span class="exam-math exam-math--inline">\(3\times 3\)</span>. Therefore,
<p>The Jordan form</p>
<div class="exam-math exam-math--display">\[J^a_3(0)\oplus J^b_2(0) \oplus J^c_1(0)\]</div>
<p>satisfies <span class="exam-math exam-math--inline">\(a+b+c=6\)</span> and <span class="exam-math exam-math--inline">\(3a+2b+1c=9\)</span>. Next, there are <span class="exam-math exam-math--inline">\(2\)</span> blocks of size atleast 2 since</p>
<div class="exam-math exam-math--display">\[\dim \ker T^2_N-\dim \ker T^1_N = 8-6=2.\]</div>
<p>On the other han, there is <span class="exam-math exam-math--inline">\(1\)</span> block of size atleast 3 since</p>
<div class="exam-math exam-math--display">\[\dim \ker T^3_N-\dim \ker T^2_N = 9-8=1.\]</div>
<p>This gives us <span class="exam-math exam-math--inline">\((a,b)=(1,1)\)</span>, implying <span class="exam-math exam-math--inline">\(c=6-1-1=4\)</span>. Finally, <span class="exam-math exam-math--inline">\(T_N\)</span> has jordan composition</p>
<div class="exam-math exam-math--display">\[J_3(0)\oplus J_2(0)\oplus J_1(0)\oplus J_1(0)\oplus J_1(0)\oplus J_1(0).\]</div>
</li>
</ol>
  </div>
</details>
</article>

<article class="exam-problem" id="a2">
  <header class="exam-problem__header">
    <span class="exam-problem__label">A2</span>
    <a class="exam-problem__anchor" href="#a2" aria-label="Link to problem A2">#</a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\(\alpha,\beta&gt;0\)</span>. For a positive integer <span class="exam-math exam-math--inline">\(n\)</span>, define</p>
<div class="exam-math exam-math--display">\[f_n:[0,1]\to\mathbb{R},\quad f_n(x)=n^\alpha x^\beta(1-x)^n\]</div>
<p>Answer the following questions.</p>
<ol>
<li>Find the pointwise limit of the sequence of functions <span class="exam-math exam-math--inline">\(\{f_n\}_n\)</span>.
</li>
<li>Let <span class="exam-math exam-math--inline">\(f\)</span> be the function determined in (1). Find a necessary and sufficient condition on <span class="exam-math exam-math--inline">\(\alpha,\beta\)</span> for <span class="exam-math exam-math--inline">\(\{f_n\}_n\)</span> to converge uniformly to <span class="exam-math exam-math--inline">\(f\)</span> on <span class="exam-math exam-math--inline">\([0,1]\)</span>.
</li>
<li>Show that if <span class="exam-math exam-math--inline">\(\alpha&lt;\beta=1\)</span>, then <span class="exam-math exam-math--inline">\(\displaystyle\sum_{n=1}^{\infty}f_n(x)\)</span> converges uniformly on <span class="exam-math exam-math--inline">\([0,1]\)</span>.
</li>
</ol>
  </div>
<details class="exam-solution">
  <summary>Show solution</summary>
  <div class="exam-solution__body">
<ol>
<li><strong>Claim.</strong> <span class="exam-math exam-math--inline">\(f_n(x)\)</span> converges pointwise to <span class="exam-math exam-math--inline">\(0\)</span> for <span class="exam-math exam-math--inline">\(x \in [0,1]\)</span>.<br>
<p>Indeed, for <span class="exam-math exam-math--inline">\(x=0,1\)</span>, <span class="exam-math exam-math--inline">\(f_n(x)=0\)</span>. For <span class="exam-math exam-math--inline">\(0&lt;x&lt;1\)</span>, notice that <span class="exam-math exam-math--inline">\(f_n(x) \geq 0\)</span>. Fix <span class="exam-math exam-math--inline">\(x\)</span>:</p>
<div class="exam-math exam-math--display">\[\frac{f_{n+1}(x)}{f_n(x)}=\left(1+\frac{1}{n}\right)^\alpha (1-x) \to 1-x\]</div>
<p>as <span class="exam-math exam-math--inline">\(n\to \infty\)</span>. Now, choose <span class="exam-math exam-math--inline">\(r\)</span> such that <span class="exam-math exam-math--inline">\(1-x&lt;r&lt;1\)</span>. Thus, by the definition of limit, for large enough <span class="exam-math exam-math--inline">\(n\)</span> we have</p>
<div class="exam-math exam-math--display">\[\frac{f_{n+1}(x)}{f_n(x)}\leq r.\]</div>
<p>Repeating the process, we obtain</p>
<div class="exam-math exam-math--display">\[0 \leq f_n(x) \leq f_N(x)\cdot r^{n-N}.\]</div>
<p>Notice that the right hand side of the inequality converges to <span class="exam-math exam-math--inline">\(0\)</span> as <span class="exam-math exam-math--inline">\(n \to \infty\)</span>. Therefore, by Squeeze Theorem we conclude that <span class="exam-math exam-math--inline">\(f_n(x)\)</span> converges pointwise to <span class="exam-math exam-math--inline">\(0\)</span> for <span class="exam-math exam-math--inline">\(x \in[0,1]\)</span>.</p>
</li>
<li><strong>Claim.</strong> <span class="exam-math exam-math--inline">\(f_n \to f\)</span> converges uniformly <span class="exam-math exam-math--inline">\(\Longleftrightarrow \alpha &lt; \beta\)</span>.<br>
<p>First, we find the candidate value of <span class="exam-math exam-math--inline">\(x\)</span> such that <span class="exam-math exam-math--inline">\(f_n\)</span> obtain its maximum value. Consider <span class="exam-math exam-math--inline">\(f&#39;_n(x)=n^\alpha x^{\beta -1}(\beta - (n+\beta)x)\)</span>. If <span class="exam-math exam-math--inline">\(f&#39;_n(x)=0\)</span>, we obtain <span class="exam-math exam-math--inline">\(x_{\text{crit}}=\beta/(n+\beta) \in (0,1)\)</span>. Since <span class="exam-math exam-math--inline">\(f_n(0)=f_n(1)=0\)</span> and <span class="exam-math exam-math--inline">\(f_n(x)&gt;0\)</span> for <span class="exam-math exam-math--inline">\(x \in(0,1)\)</span>, <span class="exam-math exam-math--inline">\(x_{\text{crit}}\)</span> is the maximum point for <span class="exam-math exam-math--inline">\(f_n\)</span>. Thus,</p>
<div class="exam-math exam-math--display">\[|f_n(x)|\leq |f_n(x_{\text{crit}})| \leq n^{\alpha-\beta}\left[\left(\frac{1}{1+\frac{\beta}{n}}\right)^{\displaystyle \frac{n}{\beta}}\right]^\beta \cdot \beta^\beta \longrightarrow 0\cdot e^\beta = 0\]</div>
<p>provided that <span class="exam-math exam-math--inline">\(\alpha &lt; \beta\)</span>.<br> Now, if <span class="exam-math exam-math--inline">\(\alpha \geq \beta\)</span>,</p>
<div class="exam-math exam-math--display">\[|f_n|\leq \beta^\beta \cdot n^{\alpha - \beta} \left[\left(\frac{1}{1+\displaystyle \frac{\beta}{n}}\right)^{\frac{n}{\beta}}\right]^\beta \longrightarrow \begin{cases}
    \beta^\beta \cdot e^\beta \qquad &amp;\alpha=\beta\\
    \infty \qquad &amp;\alpha \geq \beta
  \end{cases}\]</div>
<p>as <span class="exam-math exam-math--inline">\(n \to \infty\)</span>. Obviously this does not converge to <span class="exam-math exam-math--inline">\(0\)</span>.</p>
</li>
<li>From (2):
<div class="exam-math exam-math--display">\[|f_n(x)| \leq \left|n^{\alpha-\beta}\underbrace{\left(\frac{n}{n+\beta}\right)^n}_{\leq 1} \beta^\beta \right| \leq n^{\alpha - \beta} \beta^\beta.\]</div>
<p>By Weierstrass M-test, taking <span class="exam-math exam-math--inline">\(M_n := n^{\alpha-\beta}\beta^\beta\)</span> we have <span class="exam-math exam-math--inline">\(\sum M_n\leq \infty\)</span> (because <span class="exam-math exam-math--inline">\(\alpha-\beta&lt;1\)</span>). Hence, <span class="exam-math exam-math--inline">\(\displaystyle \sum_{n=1}^\infty f_n\)</span> is uniformly convergent.</p>
</li>
</ol>
  </div>
</details>
</article>

<article class="exam-problem" id="a3">
  <header class="exam-problem__header">
    <span class="exam-problem__label">A3</span>
    <a class="exam-problem__anchor" href="#a3" aria-label="Link to problem A3">#</a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\(a\in\mathbb{R}\)</span> be a real number satisfying <span class="exam-math exam-math--inline">\(1&lt;a\)</span>. Define an equivalence relation <span class="exam-math exam-math--inline">\(\sim\)</span> on <span class="exam-math exam-math--inline">\(\mathbb{R}^2\)</span> by</p>
<div class="exam-math exam-math--display">\[(x,y)\sim(x&#39;,y&#39;)\iff\exists n\in\mathbb{Z},x&#39;=a^nx,y&#39;=a^{-n}y\]</div>
<p>and let <span class="exam-math exam-math--inline">\(X=\mathbb{R}^2/{\sim}\)</span> be the quotient set. Denote the equivalence class determined by <span class="exam-math exam-math--inline">\((x,y)\in\mathbb{R}^2\)</span> by <span class="exam-math exam-math--inline">\([(x,y)]\)</span>. Equip <span class="exam-math exam-math--inline">\(\mathbb{R}^2\)</span> with the usual Euclidean topology and <span class="exam-math exam-math--inline">\(X\)</span> with the quotient topology.</p>
<ol>
<li>Determine, with proof, whether the subset <span class="exam-math exam-math--inline">\(\{[(x,y)]\in X\mid xy=1,0&lt;x\}\)</span> of <span class="exam-math exam-math--inline">\(X\)</span> is closed.
</li>
<li>Determine, with proof, whether <span class="exam-math exam-math--inline">\(X\)</span> is a Hausdorff space.
</li>
<li>Determine, with proof, whether <span class="exam-math exam-math--inline">\(X\)</span> is compact.
</li>
</ol>
  </div>
<details class="exam-solution">
  <summary>Show solution</summary>
  <div class="exam-solution__body">
<ol>
<li>Define natural projection <span class="exam-math exam-math--inline">\(\pi:\mathbb R^2 \to X:= \mathbb R^2/\sim\)</span>. Take <span class="exam-math exam-math--inline">\(\mathbf U:= \{[(x,y) \in X \mid xy=1, x&gt;0]\}\)</span>. Thus,
<div class="exam-math exam-math--display">\[\begin{aligned}
\pi^{-1}(\mathbf U) &amp;=\{(x,y) \in \mathbb R^2 \mid xy=1, x&gt;0\}\\
  &amp;= \underbrace{\{(x,y) \in \mathbb R^2 \mid xy=1\}}_{\text{closed in} \mathbb R^2} \cap \underbrace{\{(x,y) \in \mathbb R^2 \mid x \geq 0\}}_{\text{closed in} \mathbb R^2}.
\end{aligned}\]</div>
<p>The intersection of finitely many closed set is a closed set, so <span class="exam-math exam-math--inline">\(\pi^{-1}(\mathbf U)\)</span> is closed in <span class="exam-math exam-math--inline">\(\mathbb R^2\)</span>. Since <span class="exam-math exam-math--inline">\(\pi\)</span> is a continuous function, then <span class="exam-math exam-math--inline">\(\mathbf U\)</span> is closed in <span class="exam-math exam-math--inline">\(X\)</span>.</p>
</li>
<li>We claim that <span class="exam-math exam-math--inline">\(X\)</span> is not a hausdorff space! Consider <span class="exam-math exam-math--inline">\(u:=[(0,1)]\)</span>, <span class="exam-math exam-math--inline">\(v:=[(1,0)]\)</span>. Take open neighborhoods <span class="exam-math exam-math--inline">\(U \ni u, V \ni v\)</span> in <span class="exam-math exam-math--inline">\(X\)</span>. Then <span class="exam-math exam-math--inline">\(\pi^{-1}(U)\)</span> and <span class="exam-math exam-math--inline">\(\pi^{-1}(V)\)</span> are open in <span class="exam-math exam-math--inline">\(\mathbb R^2\)</span> such that
<div class="exam-math exam-math--display">\[\pi^{-1}(U) \ni (0,1) \qquad \pi^{-1}(V) \ni (1,0).\]</div>
<p>Since <span class="exam-math exam-math--inline">\(\pi^{-1}(U)\)</span> is open in <span class="exam-math exam-math--inline">\(\mathbb R^2\)</span>, there exists <span class="exam-math exam-math--inline">\(\varepsilon &gt;0\)</span> such that</p>
<div class="exam-math exam-math--display">\[\operatorname{Ball}_{\varepsilon}((0,1)) \subseteq \pi^{-1}(U).\]</div>
<p>Now, consider a sequence <span class="exam-math exam-math--inline">\(\{(a^{-n},1)\}\)</span> converging to <span class="exam-math exam-math--inline">\((1,0)\)</span> as <span class="exam-math exam-math--inline">\(n \to \infty\)</span>. Since <span class="exam-math exam-math--inline">\(a&gt;1\)</span>, <span class="exam-math exam-math--inline">\(a^{-n} \to 0\)</span> e.g., <span class="exam-math exam-math--inline">\(|a^{-n} -0|&lt;\varepsilon\)</span>, for some large enough <span class="exam-math exam-math--inline">\(n\)</span> we have</p>
<div class="exam-math exam-math--display">\[(a^{-n},1) \in \operatorname{Ball}_{\varepsilon}((0,1)) \subseteq \pi^{-1}(U).\]</div>
<p>Therefore, <span class="exam-math exam-math--inline">\((a^{-1},1) \in \pi^{-1}(U)\)</span>. Analogusly, <span class="exam-math exam-math--inline">\((1,a^{-n}) \in \pi^{-1}(V)\)</span> for some large <span class="exam-math exam-math--inline">\(n\)</span>.</p>
<p>On the other hand, <span class="exam-math exam-math--inline">\((1,a^{-n})=(a^{n}\cdot a^{-n},a^{-n}\cdot 1)\)</span> thus <span class="exam-math exam-math--inline">\((1,a^{-n})\)</span> and <span class="exam-math exam-math--inline">\((a^{-n},1)\)</span> belong to the same class. That is, <span class="exam-math exam-math--inline">\([(a^{-n},1)]=[(1,a^{-n})]\)</span>. This means that <span class="exam-math exam-math--inline">\([(a^{-n},1)]=U\cap V \neq \varnothing\)</span>. Finally, we have shown that there exist two different point that cannot be separated by open neighborhoods.</p>
</li>
<li>Define <span class="exam-math exam-math--inline">\(h: \mathbb R^2 \to \mathbb R\)</span>, <span class="exam-math exam-math--inline">\((x,y) \mapsto xy\)</span>. Notice that for each equivalence classes, the function is constant because
<div class="exam-math exam-math--display">\[x&#39;y&#39;=a^nxa^{-n}y=xy.\]</div>
<p><span class="exam-math exam-math--inline">\(h\)</span> induces <span class="exam-math exam-math--inline">\(\overline{h}: X \to \mathbb R, [(x,y)] \mapsto xy\)</span>. Notice that <span class="exam-math exam-math--inline">\(\overline{h}\)</span> is surjective: for each <span class="exam-math exam-math--inline">\(t \in \mathbb R\)</span>, choose <span class="exam-math exam-math--inline">\([(t,1)]\)</span> so <span class="exam-math exam-math--inline">\(\overline{h}([(t,1)])=t\)</span>. If <span class="exam-math exam-math--inline">\(X\)</span> is compact, then since <span class="exam-math exam-math--inline">\(\overline{h}\)</span> is continuous, <span class="exam-math exam-math--inline">\(\mathbb R = \overline{h}(X)\)</span> is compact, a contradiction. Therefore <span class="exam-math exam-math--inline">\(X\)</span> is not compact!</p>
</li>
</ol>
  </div>
</details>
</article>

<article class="exam-problem" id="a4">
  <header class="exam-problem__header">
    <span class="exam-problem__label">A4</span>
    <a class="exam-problem__anchor" href="#a4" aria-label="Link to problem A4">#</a>
  </header>
  <div class="exam-problem__question">
<p>For real numbers <span class="exam-math exam-math--inline">\(\mu,\ \sigma\)</span>, define the probability distribution <span class="exam-math exam-math--inline">\(\Lambda(\mu,\sigma^2)\)</span> on the positive real numbers by the probability density function</p>
<div class="exam-math exam-math--display">\[f(x)=\frac{1}{x\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(\log_e x-\mu)^2}{2\sigma^2}\right)\]</div>
<p>Answer the following questions.</p>
<ol>
<li>If <span class="exam-math exam-math--inline">\(X\)</span> follows <span class="exam-math exam-math--inline">\(\Lambda(\mu,\sigma^2)\)</span>, find the probability density function of the distribution of the random variable <span class="exam-math exam-math--inline">\(Y=\log_e X\)</span>.
</li>
<li>If <span class="exam-math exam-math--inline">\(X\)</span> follows <span class="exam-math exam-math--inline">\(\Lambda(\mu,\sigma^2)\)</span>, find the mean and variance of <span class="exam-math exam-math--inline">\(X\)</span>.
</li>
<li>If the random variables <span class="exam-math exam-math--inline">\(X_1,\ X_2\)</span> independently follow <span class="exam-math exam-math--inline">\(\Lambda(\mu_1,\sigma_1^2),\ \Lambda(\mu_2,\sigma_2^2)\)</span>, respectively, determine, with proof, the probability distribution of <span class="exam-math exam-math--inline">\(X_1X_2\)</span>.
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="a5">
  <header class="exam-problem__header">
    <span class="exam-problem__label">A5</span>
    <a class="exam-problem__anchor" href="#a5" aria-label="Link to problem A5">#</a>
  </header>
  <div class="exam-problem__question">
<p>Answer each question about the following Python program.</p>
<pre class="exam-code"><code>def f(n, q):
    if n &lt; q:
        return [n]
    else:
        return [n % q] + f(n//q, q)

def h(n, q):
    k = 0
    while n &gt; 1:
        n = len(f(n, q)) - 1
        k = k + 1
    return k</code></pre>
<ol>
<li>Find the array <span class="exam-math exam-math--inline">\([v_1,\ldots,v_m]\)</span> output by <span class="exam-math exam-math--inline">\(\mathtt{f}(20,4)\)</span>.
</li>
<li>Express the value of <span class="exam-math exam-math--inline">\(\mathtt{len}(\mathtt{f}(n,q))\)</span> in terms of <span class="exam-math exam-math--inline">\(n\)</span> and <span class="exam-math exam-math--inline">\(q\)</span>. Here <span class="exam-math exam-math--inline">\(n\)</span> and <span class="exam-math exam-math--inline">\(q\)</span> have type int, with <span class="exam-math exam-math--inline">\(n\geq0\)</span> and <span class="exam-math exam-math--inline">\(q\geq2\)</span>.
</li>
<li>Find the number of values of <span class="exam-math exam-math--inline">\(n\)</span> satisfying <span class="exam-math exam-math--inline">\(h(n,2)=3\)</span>. Here <span class="exam-math exam-math--inline">\(n\)</span> has type int and <span class="exam-math exam-math--inline">\(n\geq0\)</span>.
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b1">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B1</span>
    <a class="exam-problem__anchor" href="#b1" aria-label="Link to problem B1">#</a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\(F=\mathbb{F}_{11}\)</span> be the finite field of order <span class="exam-math exam-math--inline">\(11\)</span>, and let <span class="exam-math exam-math--inline">\(G=GL_2(F)\)</span> be the general linear group of degree <span class="exam-math exam-math--inline">\(2\)</span>. Let <span class="exam-math exam-math--inline">\(H\)</span> be the subgroup of <span class="exam-math exam-math--inline">\(G\)</span> generated by <span class="exam-math exam-math--inline">\(A=\begin{bmatrix}1&amp;1\\0&amp;1\end{bmatrix},\ B=\begin{bmatrix}3&amp;0\\0&amp;1\end{bmatrix}\)</span>.</p>
<ol>
<li>Find the order <span class="exam-math exam-math--inline">\(|H|\)</span> of <span class="exam-math exam-math--inline">\(H\)</span>.
</li>
<li>Let the centralizer and normalizer of <span class="exam-math exam-math--inline">\(H\)</span> be, respectively,
<div class="exam-math exam-math--display">\[\begin{aligned}
C_G(H)&amp;=\{X\in G\mid\text{$XY=YX$ for every $Y\in H$}\},\\
N_G(H)&amp;=\{X\in G\mid XH=HX\}
\end{aligned}\]</div>
<p>Find the orders <span class="exam-math exam-math--inline">\(|C_G(H)|,\ |N_G(H)|\)</span> of <span class="exam-math exam-math--inline">\(C_G(H)\)</span> and <span class="exam-math exam-math--inline">\(N_G(H)\)</span>.</p>
</li>
<li>Find the number of conjugate subgroups of <span class="exam-math exam-math--inline">\(H\)</span> in <span class="exam-math exam-math--inline">\(G\)</span>.
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b2">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B2</span>
    <a class="exam-problem__anchor" href="#b2" aria-label="Link to problem B2">#</a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\(K\)</span> be a field.</p>
<ol>
<li>When <span class="exam-math exam-math--inline">\(K\)</span> is the field <span class="exam-math exam-math--inline">\(\mathbb{R}\)</span> of real numbers, to which of the following rings (i)--(v) is <span class="exam-math exam-math--inline">\(K[x]/(x^3-1)\)</span> isomorphic? Give its number. Here <span class="exam-math exam-math--inline">\(\overline K\)</span> denotes an algebraic closure of <span class="exam-math exam-math--inline">\(K\)</span>.
<div class="exam-math exam-math--display">\[\text{(i) }\overline K\times K\qquad\text{(ii) }\overline K\qquad\text{(iii) }K\qquad\text{(iv) }K\times K\qquad\text{(v) }K\times K\times K\]</div>
</li>
<li>Give a proof that the ring you answered in (1) and <span class="exam-math exam-math--inline">\(K[x]/(x^3-1)\)</span> are isomorphic.
</li>
<li>When <span class="exam-math exam-math--inline">\(K\)</span> is a finite field <span class="exam-math exam-math--inline">\(\mathbb{F}_p\)</span> of prime order, give one prime <span class="exam-math exam-math--inline">\(p\)</span> for which <span class="exam-math exam-math--inline">\(K[x]/(x^3-1)\)</span> is isomorphic to <span class="exam-math exam-math--inline">\(K\times K\times K\)</span>.
</li>
<li>For the <span class="exam-math exam-math--inline">\(p\)</span> you answered in (3), give a proof that <span class="exam-math exam-math--inline">\(K[x]/(x^3-1)\)</span> is isomorphic to <span class="exam-math exam-math--inline">\(K\times K\times K\)</span>.
</li>
<li>When <span class="exam-math exam-math--inline">\(K\)</span> is a finite field <span class="exam-math exam-math--inline">\(\mathbb{F}_p\)</span> of prime order, give a necessary and sufficient condition on <span class="exam-math exam-math--inline">\(p\)</span> for <span class="exam-math exam-math--inline">\(K[x]/(x^3-1)\)</span> to be isomorphic to <span class="exam-math exam-math--inline">\(K\times K\times K\)</span>, and prove it.
</li>
<li>When <span class="exam-math exam-math--inline">\(K\)</span> is a finite field <span class="exam-math exam-math--inline">\(\mathbb{F}_p\)</span> of prime order and <span class="exam-math exam-math--inline">\(K[x]/(x^3-1)\)</span> is not isomorphic to <span class="exam-math exam-math--inline">\(K\times K\times K\)</span>, describe the ring structure of <span class="exam-math exam-math--inline">\(K[x]/(x^3-1)\)</span>.
</li>
</ol>
  </div>
<details class="exam-solution">
  <summary>Show solution</summary>
  <div class="exam-solution__body">
<ol>
<li>(i).
</li>
<li>By Chinese Remainder Theorem:
<div class="exam-math exam-math--display">\[K[x]/(x^3-1) \cong K[x]/(x-1) \times K[x]/(x^2+x+1) \cong K \times \overline{K} \cong \overline{K}\times K.\]</div>
</li>
<li><span class="exam-math exam-math--inline">\(p=7\)</span>.
</li>
<li>For <span class="exam-math exam-math--inline">\(p=7\)</span>, on <span class="exam-math exam-math--inline">\(\mathbb F_7\)</span> we have
<div class="exam-math exam-math--display">\[x^2+x+1 \equiv x^2+x-6 = (x+3)(x+5).\]</div>
<p>Thus, <span class="exam-math exam-math--inline">\(x^3-1\)</span> splits completely on <span class="exam-math exam-math--inline">\(K=\mathbb F_7\)</span>:</p>
<div class="exam-math exam-math--display">\[K[x]/(x^3-1) \cong K[x]/(x-1) \times K[x]/(x+3) \times K[x]/(x+5) \cong K \times K \times K.\]</div>
</li>
<li><strong>Claim.</strong> <span class="exam-math exam-math--inline">\(K[x]/(x^3-1) \cong K \times K \times K \Longleftrightarrow (p \text{ prime such that } p \equiv 1 \pmod 3)\)</span>.<br>
<p>Indeed, we check for <span class="exam-math exam-math--inline">\(p=2\)</span>. <span class="exam-math exam-math--inline">\(x^2+x+1\)</span> does not split. For <span class="exam-math exam-math--inline">\(p=3\)</span>, <span class="exam-math exam-math--inline">\(x^3-1=(x-1)^3\)</span>. But on <span class="exam-math exam-math--inline">\(K[x]/(x^3-1)\)</span>, <span class="exam-math exam-math--inline">\([(x-1)^3]=[x^3-1]=0\)</span> so we have <span class="exam-math exam-math--inline">\([x-1]^3=0\)</span> but <span class="exam-math exam-math--inline">\(x-1 \neq 0\)</span>. This does not happen in <span class="exam-math exam-math--inline">\(K \times K \times K\)</span>!<br> Now, we want to write <span class="exam-math exam-math--inline">\(x^3-1\)</span> as <span class="exam-math exam-math--inline">\((x-1)(x-b)(x-c)\)</span>. We need <span class="exam-math exam-math--inline">\(b^3=1\)</span> but <span class="exam-math exam-math--inline">\(b \neq 1\)</span> on <span class="exam-math exam-math--inline">\(b \in \mathbb F_p^\times\)</span>. This means, on multiplicative group <span class="exam-math exam-math--inline">\(\mathbb F_p^\times\)</span>, <span class="exam-math exam-math--inline">\(\operatorname{ord} b=3\)</span>. However, since <span class="exam-math exam-math--inline">\(\operatorname{ord} b \mid |\mathbb F_p^\times| = p-1\)</span>, we have <span class="exam-math exam-math--inline">\(3 \mid p-1\)</span> so <span class="exam-math exam-math--inline">\(p \equiv 1 \pmod 3\)</span>. Conversely, if <span class="exam-math exam-math--inline">\(p \equiv 1 \pmod 3\)</span>, we have <span class="exam-math exam-math--inline">\(3  \mid p-1 = |\mathbb F_p^\times|\)</span>. <span class="exam-math exam-math--inline">\(\mathbb F_p^\times\)</span> is cyclic so there exists <span class="exam-math exam-math--inline">\(w \in \mathbb F_p^\times\)</span> with order 3. This implies that <span class="exam-math exam-math--inline">\(1, w, w^2\)</span> are distinct numbers satisfying <span class="exam-math exam-math--inline">\(x^3-1=(x-1)(x-w)(x-w^2)\)</span>. Therefore,</p>
<div class="exam-math exam-math--display">\[K[x]/(x^3-1) \cong K[x]/(x-1) \times K[x]/(x-w) \times K[x]/(x-w^2) \cong K \times K \times K,\]</div>
<p>as desired.</p>
</li>
<li>The first case is <span class="exam-math exam-math--inline">\(p \equiv 2 \pmod 3\)</span>. We check <span class="exam-math exam-math--inline">\(x^2+x+1\)</span>: suppose there exists <span class="exam-math exam-math--inline">\(a \in \mathbb F_p\)</span> such that <span class="exam-math exam-math--inline">\(a^2+a+1=0\)</span>. If <span class="exam-math exam-math--inline">\(a=1\)</span>, we have <span class="exam-math exam-math--inline">\(1+1+1=3=0\)</span> but <span class="exam-math exam-math--inline">\(p \equiv 2 \pmod 3\)</span>, so <span class="exam-math exam-math--inline">\(a \neq 1\)</span>.
<div class="exam-math exam-math--display">\[0=(a-1)(a^2+a+1)=a^3-1\]</div>
<p>thus <span class="exam-math exam-math--inline">\(a^3=1\)</span>. On <span class="exam-math exam-math--inline">\(|\mathbb F_p^\times|\)</span>, <span class="exam-math exam-math--inline">\(\operatorname a=3\)</span> but <span class="exam-math exam-math--inline">\(|\mathbb F_p^\times| = p-1 \equiv 1 \pmod 3\)</span>. This implies <span class="exam-math exam-math--inline">\(\operatorname{ord} a \mid |\mathbb F_p^\times|\)</span>. Thus, <span class="exam-math exam-math--inline">\(3 \mid 1 \pmod 3\)</span>, a contradiction. Therefore, <span class="exam-math exam-math--inline">\(x^2+x+1\)</span> is irreducible on <span class="exam-math exam-math--inline">\(\mathbb F_p\)</span> if <span class="exam-math exam-math--inline">\(p \equiv 2 \pmod 3\)</span>. By Chinese Remainder Theorem,</p>
<div class="exam-math exam-math--display">\[\mathbb F_p[x]/(x^3-1) \cong \mathbb F_p / (x-1) \times \mathbb F_p[x]/(x^2+x;1) \cong \mathbb F_p \times \mathbb F_{p^2} \ncong K \times K \times K.\]</div>
<p>For the second case, <span class="exam-math exam-math--inline">\(p=3\)</span>. Repeating the above argument, set <span class="exam-math exam-math--inline">\(\delta=x-1\)</span>. We have</p>
<div class="exam-math exam-math--display">\[\mathbb F_3[x]/(x^3-1) \cong \mathbb F_3[x]/(x-1)^3 = \mathbb F_3[\delta]/(\delta ^3) \ncong \mathbb F_3 \times \mathbb F_3 \times \mathbb F_3.\]</div>
</li>
</ol>
  </div>
</details>
</article>

<article class="exam-problem" id="b3">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B3</span>
    <a class="exam-problem__anchor" href="#b3" aria-label="Link to problem B3">#</a>
  </header>
  <div class="exam-problem__question">
<p>Answer the following questions.</p>
<ol>
<li>Show that the subset
<div class="exam-math exam-math--display">\[S^2=\{(x,y,z)\in\mathbb{R}^3\mid x^2+y^2+z^2=1\}\]</div>
<p>of <span class="exam-math exam-math--inline">\(\mathbb{R}^3\)</span> is a submanifold of <span class="exam-math exam-math--inline">\(\mathbb{R}^3\)</span>.</p>
</li>
<li>Equip <span class="exam-math exam-math--inline">\(S^2\)</span> with the submanifold structure defined in (1), and define <span class="exam-math exam-math--inline">\(f:S^2\to\mathbb{R}\)</span> by
<div class="exam-math exam-math--display">\[f(x,y,z)=2x^2+3y^2+4z^2\]</div>
<p>Find the rank of <span class="exam-math exam-math--inline">\(df_p\)</span> at each point <span class="exam-math exam-math--inline">\(p\in S^2\)</span>.</p>
</li>
<li>Define an equivalence relation <span class="exam-math exam-math--inline">\(\sim\)</span> on <span class="exam-math exam-math--inline">\(\mathbb{R}^3\setminus\{0\}\)</span> by
<div class="exam-math exam-math--display">\[(x,y,z)\sim(x&#39;,y&#39;,z&#39;)\iff\exists a\in\mathbb{R}\setminus\{0\},x&#39;=ax,y&#39;=ay,z&#39;=az\]</div>
<p>and denote the quotient set by <span class="exam-math exam-math--inline">\(P\)</span>. Write <span class="exam-math exam-math--inline">\([x:y:z]\)</span> for the equivalence class determined by <span class="exam-math exam-math--inline">\((x,y,z)\in\mathbb{R}^3\setminus\{0\}\)</span>. Equip <span class="exam-math exam-math--inline">\(\mathbb{R}^3\setminus\{0\}\)</span> with the subspace topology induced by the usual Euclidean topology on <span class="exam-math exam-math--inline">\(\mathbb{R}^3\)</span>, and equip <span class="exam-math exam-math--inline">\(P\)</span> with the quotient topology. Define <span class="exam-math exam-math--inline">\(\pi:S^2\to P\)</span> by</p>
<div class="exam-math exam-math--display">\[\pi(x,y,z)=[x:y:z]\]</div>
<p>Show that <span class="exam-math exam-math--inline">\(P\)</span> admits a <span class="exam-math exam-math--inline">\(2\)</span>-dimensional manifold structure for which <span class="exam-math exam-math--inline">\(\pi\)</span> is smooth.</p>
</li>
<li>Equip <span class="exam-math exam-math--inline">\(P\)</span> with the manifold structure defined in (3). Define a map <span class="exam-math exam-math--inline">\(g:P\to\mathbb{R}^2\)</span> by
<div class="exam-math exam-math--display">\[g([x:y:z])=\frac{1}{x^2+y^2+z^2}(x^2,yz)\]</div>
<p>Find the rank of <span class="exam-math exam-math--inline">\(dg_p\)</span> at each point <span class="exam-math exam-math--inline">\(p\in P\)</span>.</p>
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b4">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B4</span>
    <a class="exam-problem__anchor" href="#b4" aria-label="Link to problem B4">#</a>
  </header>
  <div class="exam-problem__question">
<p>For a space <span class="exam-math exam-math--inline">\(X\)</span>, a subset <span class="exam-math exam-math--inline">\(\partial X\subset X\)</span>, and a homeomorphism <span class="exam-math exam-math--inline">\(\phi:X\to X\)</span> preserving <span class="exam-math exam-math--inline">\(\partial X\)</span>, consider the following construction.</p>
<div class="exam-math exam-math--display">\[\begin{aligned}
Y&amp;:=X\times[0,1]/{\sim},\quad (x,1)\sim(\phi(x),0)\quad(x\in X),\\
A&amp;:=\partial X\times[0,1]/{\sim},\quad (x,1)\sim(\phi(x),0)\quad(x\in\partial X),\\
\widetilde Y&amp;:=Y/A
\end{aligned}\]</div>
<p>Write <span class="exam-math exam-math--inline">\(*\)</span> for the point of <span class="exam-math exam-math--inline">\(\widetilde Y\)</span> obtained by collapsing <span class="exam-math exam-math--inline">\(A\subset Y\)</span>. Equip <span class="exam-math exam-math--inline">\(\widetilde Y\)</span> with the quotient topology. Let <span class="exam-math exam-math--inline">\(\widetilde\pi:Y\to\widetilde Y\)</span> be the projection.</p>
<p>Let <span class="exam-math exam-math--inline">\(U\)</span> be a neighborhood of <span class="exam-math exam-math--inline">\(A\)</span> in <span class="exam-math exam-math--inline">\(Y\)</span> that deformation retracts onto <span class="exam-math exam-math--inline">\(A\)</span>. That is, suppose there exists a continuous map <span class="exam-math exam-math--inline">\(\psi:U\times[0,1]\to U\)</span> such that <span class="exam-math exam-math--inline">\(\psi(x,0)=x,\ \psi(x,1)\in A\)</span>, and <span class="exam-math exam-math--inline">\(\psi(a,t)=a\)</span> for every <span class="exam-math exam-math--inline">\(a\in A,t\in[0,1]\)</span>. Let <span class="exam-math exam-math--inline">\(\mathring X:=X\setminus\partial X\)</span>, and write <span class="exam-math exam-math--inline">\(\mathring Y\subset\widetilde Y\)</span> for the image of <span class="exam-math exam-math--inline">\(\mathring X\times[0,1]/{\sim}\)</span> under <span class="exam-math exam-math--inline">\(\widetilde\pi\)</span>.</p>
<ol>
<li>Show that the image <span class="exam-math exam-math--inline">\(\widetilde\pi(U)\)</span> of <span class="exam-math exam-math--inline">\(U\)</span> under <span class="exam-math exam-math--inline">\(\widetilde\pi\)</span> deformation retracts onto <span class="exam-math exam-math--inline">\(*\)</span>.
</li>
<li>Let <span class="exam-math exam-math--inline">\(X=[-1,1],\ \partial X=\{-1,1\}\)</span>, and define <span class="exam-math exam-math--inline">\(\phi:X\to X\)</span> by <span class="exam-math exam-math--inline">\(\phi(x)=-x\)</span>. Compute the homology groups of <span class="exam-math exam-math--inline">\(\widetilde Y\)</span> with coefficients in <span class="exam-math exam-math--inline">\(\mathbb{R}\)</span>.<br>
<p>Hint: Set <span class="exam-math exam-math--inline">\(U:=([-1,-1+\epsilon)\cup(1-\epsilon,1])\times[0,1]\)</span> and use the Mayer-Vietoris long exact sequence for the open cover <span class="exam-math exam-math--inline">\(\widetilde\pi(U)\cup\mathring Y\)</span> of <span class="exam-math exam-math--inline">\(\widetilde Y\)</span>.</p>
</li>
<li>Let <span class="exam-math exam-math--inline">\(X&#39;=D^2=\{x^2+y^2\leq1\},\ \partial X&#39;=\{x^2+y^2=1\},\ \phi&#39;=\mathrm{id}_{X&#39;}:X&#39;\to X&#39;\)</span>.<br>
<p>(i) Compute the homology groups of <span class="exam-math exam-math--inline">\(\widetilde Y&#39;\)</span> with coefficients in <span class="exam-math exam-math--inline">\(\mathbb{R}\)</span>.<br> (ii) Does <span class="exam-math exam-math--inline">\(\widetilde Y&#39;\)</span> have the topology of a manifold?</p>
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b5">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B5</span>
    <a class="exam-problem__anchor" href="#b5" aria-label="Link to problem B5">#</a>
  </header>
  <div class="exam-problem__question">
<p>Answer the following questions.</p>
<ol>
<li>Define a complex function <span class="exam-math exam-math--inline">\(f(z)\)</span> by
<div class="exam-math exam-math--display">\[f(z)=\frac{e^{iz}}{z^4+10z^2+9}\]</div>
<p>Let the circle <span class="exam-math exam-math--inline">\(C\)</span> be given by</p>
<div class="exam-math exam-math--display">\[C=\{z\in\mathbb{C}\mid |z-2i|=4\}\]</div>
<p>and orient <span class="exam-math exam-math--inline">\(C\)</span> counterclockwise. Find the value of the integral</p>
<div class="exam-math exam-math--display">\[\oint_C f(z)dz\]</div>
</li>
<li>For a real number <span class="exam-math exam-math--inline">\(k\)</span>, find the value of the following improper integral.
<div class="exam-math exam-math--display">\[\int_{-\infty}^{\infty}\frac{e^{ikx}}{x^4+10x^2+9}dx\]</div>
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b6">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B6</span>
    <a class="exam-problem__anchor" href="#b6" aria-label="Link to problem B6">#</a>
  </header>
  <div class="exam-problem__question">
<p>With respect to Lebesgue measure on <span class="exam-math exam-math--inline">\([0,1]\)</span>, the inner product on the Hilbert space <span class="exam-math exam-math--inline">\(L^2[0,1]\)</span> is given by</p>
<div class="exam-math exam-math--display">\[\langle f,g\rangle=\int_0^1 f(x)\overline{g(x)}dx,\qquad f,g\in L^2[0,1]\]</div>
<p>Here <span class="exam-math exam-math--inline">\(\overline z\)</span> denotes the complex conjugate of a complex number <span class="exam-math exam-math--inline">\(z\)</span>. Define a sequence <span class="exam-math exam-math--inline">\((f_n)_{n=1}^{\infty}\)</span> in <span class="exam-math exam-math--inline">\(L^2[0,1]\)</span> by</p>
<div class="exam-math exam-math--display">\[f_n(x)=\sin(2\pi nx),\qquad x\in[0,1],n\in\mathbb{N}\]</div>
<p>Answer the following questions.</p>
<ol>
<li>Let <span class="exam-math exam-math--inline">\(0\leq a&lt;b\leq1\)</span> and <span class="exam-math exam-math--inline">\(g=1_{[a,b)}\in L^2[0,1]\)</span>. Show that <span class="exam-math exam-math--inline">\(\displaystyle\lim_{n\to\infty}\langle f_n,g\rangle=0\)</span>. Here <span class="exam-math exam-math--inline">\(1_A\)</span> is the characteristic function of a set <span class="exam-math exam-math--inline">\(A\subset[0,1]\)</span>.
</li>
<li>Show that <span class="exam-math exam-math--inline">\(\displaystyle\lim_{n\to\infty}\langle f_n,g\rangle=0\)</span> for every <span class="exam-math exam-math--inline">\(g\in L^2[0,1]\)</span>.
</li>
<li>Determine, with justification, whether there exists a subsequence <span class="exam-math exam-math--inline">\((f_{n_k})_{k=1}^{\infty}\)</span> of <span class="exam-math exam-math--inline">\((f_n)_{n=1}^{\infty}\)</span> that converges pointwise almost everywhere.
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b7">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B7</span>
    <a class="exam-problem__anchor" href="#b7" aria-label="Link to problem B7">#</a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\((\Omega,\mathcal F,P)\)</span> be a probability space, let <span class="exam-math exam-math--inline">\(A_n\in\mathcal F,\ n=1,2,\ldots\)</span> be a sequence of events, and let <span class="exam-math exam-math--inline">\(A=\displaystyle\bigcap_{k=1}^{\infty}\bigcup_{n=k}^{\infty}A_n\)</span>. Answer the following questions.</p>
<ol>
<li>Suppose that <span class="exam-math exam-math--inline">\(P\left(\displaystyle\bigcup_{n=k}^{\infty}A_n\right)=1\)</span> for every <span class="exam-math exam-math--inline">\(k=1,2,\ldots\)</span>. Show that <span class="exam-math exam-math--inline">\(P(A)=1\)</span>.
</li>
<li>Suppose that <span class="exam-math exam-math--inline">\(A_n,\ n=1,2,\ldots\)</span> are independent. Show that for every <span class="exam-math exam-math--inline">\(k=1,2,\ldots\)</span> and every <span class="exam-math exam-math--inline">\(N=k,k+1,\ldots\)</span>,
<div class="exam-math exam-math--display">\[1-e^{-\sum_{n=k}^N P(A_n)}\leq P\left(\bigcup_{n=k}^{\infty}A_n\right)\]</div>
</li>
<li>Suppose that <span class="exam-math exam-math--inline">\(A_n,\ n=1,2,\ldots\)</span> are independent and <span class="exam-math exam-math--inline">\(\displaystyle\sum_{n=1}^{\infty}P(A_n)=\infty\)</span>. Show that <span class="exam-math exam-math--inline">\(P(A)=1\)</span>.
</li>
<li>Let <span class="exam-math exam-math--inline">\(s_i,\ i=1,2,\ldots\)</span> be a sequence of real numbers satisfying <span class="exam-math exam-math--inline">\(0&lt;s_i&lt;1\)</span>. Use (3) to show that if <span class="exam-math exam-math--inline">\(\displaystyle\sum_{i=1}^{\infty}s_i=\infty\)</span>, then <span class="exam-math exam-math--inline">\(\displaystyle\prod_{i=1}^{\infty}(1-s_i)=0\)</span>.
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b8">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B8</span>
    <a class="exam-problem__anchor" href="#b8" aria-label="Link to problem B8">#</a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\(\theta\)</span> be a positive real number and <span class="exam-math exam-math--inline">\(n\)</span> an integer with <span class="exam-math exam-math--inline">\(n\geq2\)</span>. Suppose that the mutually independent random variables <span class="exam-math exam-math--inline">\(X_1,\ldots,X_n\)</span> all have probability density function</p>
<div class="exam-math exam-math--display">\[f(x\mid\theta)=\frac{1}{\theta}I_{[0,\theta]}(x)\]</div>
<p>Answer the following questions.</p>
<ol>
<li>Find the expectation and variance of <span class="exam-math exam-math--inline">\(X_1\)</span>.
</li>
<li>Find the probability density function of the maximum <span class="exam-math exam-math--inline">\(Y=\displaystyle\max_{1\leq i\leq n}X_i\)</span>.
</li>
<li>Find an unbiased estimator of <span class="exam-math exam-math--inline">\(\theta\)</span> that is a function of the maximum <span class="exam-math exam-math--inline">\(Y\)</span>.
</li>
<li>Find an unbiased estimator of <span class="exam-math exam-math--inline">\(\theta\)</span> that is a function of the sample mean <span class="exam-math exam-math--inline">\(\bar X=\displaystyle\sum_{i=1}^n\frac{X_i}{n}\)</span>.
</li>
<li>Find the variances of the estimators in (3) and (4), respectively, and state which is smaller.
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b9">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B9</span>
    <a class="exam-problem__anchor" href="#b9" aria-label="Link to problem B9">#</a>
  </header>
  <div class="exam-problem__question">
<p>Let <span class="exam-math exam-math--inline">\(k\)</span> be a positive integer, and let <span class="exam-math exam-math--inline">\(p=6k+1,\ q=12k+1,\ r=18k+1,\ n=pqr\)</span>. Suppose further that <span class="exam-math exam-math--inline">\(p,q,r\)</span> are all prime. Answer (1), (2), and (3) below.</p>
<ol>
<li>Show that <span class="exam-math exam-math--inline">\(n\)</span> is a Carmichael number.
</li>
</ol>
<p>Consider the following algorithm <span class="exam-math exam-math--inline">\(A\)</span>. For a finite set <span class="exam-math exam-math--inline">\(S\)</span>, &ldquo;<span class="exam-math exam-math--inline">\(x\overset{\$}{\leftarrow}S\)</span>&rdquo; denotes the operation &ldquo;select one element at random from the set <span class="exam-math exam-math--inline">\(S\)</span> and assign its value to <span class="exam-math exam-math--inline">\(x\)</span>,&rdquo; and <span class="exam-math exam-math--inline">\(\gcd\)</span> is the function that outputs the greatest common divisor of its arguments.</p>
<div class="exam-algorithm"><span class="exam-math exam-math--inline">\(\mathrm{Input}:n,t\)</span><br><br>
<span class="exam-math exam-math--inline">\(y\leftarrow(\mathsf{True},0);\quad i\leftarrow1\)</span><br>
<span class="exam-math exam-math--inline">\(\mathtt{while}\ i\leq t:\)</span><br>
<span class="exam-math exam-math--inline">\(a\overset{\$}{\leftarrow}\{0,1,2,\ldots,n-1\}\)</span><br>
<span class="exam-math exam-math--inline">\(\mathtt{if}\ a^n\ (\bmod\ n)\neq a:\quad\{\ y\leftarrow(\mathsf{False},1);\ \mathtt{break}\ \}\)</span><br>
<span class="exam-math exam-math--inline">\(\mathtt{if}\ 1&lt;\gcd(a,n)&lt;n:\quad\{\ y\leftarrow(\mathsf{False},2);\ \mathtt{break}\ \}\)</span><br>
<span class="exam-math exam-math--inline">\(i\leftarrow i+1\)</span><br>
<span class="exam-math exam-math--inline">\(\mathtt{return}\ y.\)</span><br></div>
<ol start="2">
<li>Express the probability <span class="exam-math exam-math--inline">\(\epsilon\)</span> that <span class="exam-math exam-math--inline">\(A(n,1)=(\mathsf{False},2)\)</span> in terms of <span class="exam-math exam-math--inline">\(p,q,r\)</span>.
</li>
<li>Let <span class="exam-math exam-math--inline">\(\ell\)</span> be the length of the binary representation of <span class="exam-math exam-math--inline">\(k\)</span>, and let <span class="exam-math exam-math--inline">\(c\)</span> be a positive integer. If <span class="exam-math exam-math--inline">\(\alpha\)</span> is the probability that <span class="exam-math exam-math--inline">\(A(n,\ell^c)=(\mathsf{True},0)\)</span>, find <span class="exam-math exam-math--inline">\(\displaystyle\lim_{\ell\to+\infty}\alpha\)</span>.
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b10">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B10</span>
    <a class="exam-problem__anchor" href="#b10" aria-label="Link to problem B10">#</a>
  </header>
  <div class="exam-problem__question">
<p>Consider formulas of (classical) propositional logic constructed from a single propositional variable <span class="exam-math exam-math--inline">\(p\)</span> and the logical connectives <span class="exam-math exam-math--inline">\(\neg\)</span> (negation) and <span class="exam-math exam-math--inline">\(\land\)</span> (conjunction). That is, a string belonging to the language defined by the following context-free grammar <span class="exam-math exam-math--inline">\(G=(V,\Sigma,P,S)\)</span> is called a formula. Here <span class="exam-math exam-math--inline">\(V=\{S\}\)</span> is the set of nonterminal symbols, <span class="exam-math exam-math--inline">\(\Sigma=\{p,\neg,\land,(,)\}\)</span> is the set of terminal symbols, <span class="exam-math exam-math--inline">\(P\)</span> is the set of production rules shown below, and <span class="exam-math exam-math--inline">\(S\)</span> denotes the nonterminal serving as the start symbol (also called the initial symbol). <br></p>
<div class="exam-math exam-math--display">\[P=\{S\to p,\ S\to(\neg S),\ S\to(S\land S)\}.\]</div>
<ol>
<li>Show that the language <span class="exam-math exam-math--inline">\(L_1=\{w\in\Sigma^*\mid w\)</span> is a formula whose truth value is true when the propositional variable <span class="exam-math exam-math--inline">\(p\)</span> is true<span class="exam-math exam-math--inline">\(\}\)</span> is context-free.
</li>
<li>Show that the language <span class="exam-math exam-math--inline">\(L_2=\{w\in\Sigma^*\mid w\)</span> is a tautological formula<span class="exam-math exam-math--inline">\(\}\)</span> is context-free.
</li>
<li>Show that <span class="exam-math exam-math--inline">\(L_2\)</span> is not a regular language (also called a rational language).
</li>
</ol>
  </div>

</article>

<article class="exam-problem" id="b11">
  <header class="exam-problem__header">
    <span class="exam-problem__label">B11</span>
    <a class="exam-problem__anchor" href="#b11" aria-label="Link to problem B11">#</a>
  </header>
  <div class="exam-problem__question">
<p>Answer the questions about the following OCaml program.</p>
<pre class="exam-code"><code>let rec fold_left f e = function
    [] -&gt; e
  | x :: rest -&gt; fold_left f (f e x) rest
let ofoldm pf e l =
  fold_left (fun o x -&gt; match o with
                         None -&gt; None
                       | Some v -&gt; pf v x) (Some e) l
type &#39;a tree = Lf | Br of &#39;a * &#39;a tree * &#39;a tree
let tsub t p =
  ofoldm (fun t b -&gt; match t with
                      Lf -&gt; None
                    | Br (_, left, right) -&gt;
                        Some (if b then right else left)) t p
let tref t p =
  match tsub t p with
    Some (Br (a, _, _)) -&gt; Some a
  | _ -&gt; None
let sample = Br (3,
                Br (2, Br (3, Lf, Lf), Br (5, Lf, Lf)),
                Br (1,
                    Br (4, Br (3, Lf, Lf), Br (2, Lf, Lf)),
                    Lf))</code></pre>
<ol>
<li>State the types of the functions <code>fold_left, ofoldm, tsub, tref</code>, respectively.
</li>
<li>List all <span class="exam-math exam-math--inline">\(p\)</span> for which <span class="exam-math exam-math--inline">\(\mathtt{tref\ sample}\ p\)</span> evaluates to <code>Some 3</code>.
</li>
<li>Let <span class="exam-math exam-math--inline">\(\tau\)</span> be a type for which equality can be tested using the operator &ldquo;<code>=</code>&rdquo;. Define a function <code>tfindall</code> such that, for any value <span class="exam-math exam-math--inline">\(a\)</span> of type <span class="exam-math exam-math--inline">\(\tau\)</span> and any value <span class="exam-math exam-math--inline">\(t\)</span> of type <span class="exam-math exam-math--inline">\(\tau\ \mathtt{tree}\)</span>, <span class="exam-math exam-math--inline">\(\mathtt{tfindall}\ t\ a\)</span> evaluates to a list collecting all <span class="exam-math exam-math--inline">\(p\)</span> satisfying the following condition.
<ul>
<li>Condition: <span class="exam-math exam-math--inline">\(\mathtt{tref}\ t\ p\)</span> evaluates to <span class="exam-math exam-math--inline">\(\mathtt{Some}\ a\)</span>.
</li>
</ul>
<p>The order of the elements in the resulting list does not matter, but there must be no duplicates. You may define and use auxiliary functions.</p>
</li>
</ol>
  </div>

</article>
