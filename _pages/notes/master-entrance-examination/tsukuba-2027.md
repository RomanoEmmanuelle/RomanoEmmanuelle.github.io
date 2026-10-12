---
layout: archive
title: "Tsukuba University 2027 Problem 3"
permalink: /notes/master-entrance-examination/tsukuba-2027/
author_profile: false
full_width: true
---

<p><a href="/notes/master-entrance-examination/">&larr; Master Entrance Examination</a></p>

<aside class="exam-disclaimer" aria-label="Disclaimer">
  <strong>Disclaimer.</strong> The solutions provided here are not official solutions, and the English translation of the questions is not an official translation. Both may contain errors.
</aside>

<article class="exam-problem" id="polynomial-evaluation">
  <div class="exam-problem__question">
    <p>Let <span class="exam-math exam-math--inline">\(a\)</span> be an integer. Consider the homomorphism of additive groups <span class="exam-math exam-math--inline">\(s_a:\mathbb Z[X]\to\mathbb Z\)</span> defined by</p>
    <div class="exam-math exam-math--display">\[s_a(f(X))=f(a).\]</div>
    <ol>
      <li>Determine <span class="exam-math exam-math--inline">\(\ker s_a\)</span> and prove your answer.</li>
      <li>For integers <span class="exam-math exam-math--inline">\(a,b\)</span>, define a homomorphism of additive groups
        <div class="exam-math exam-math--display">\[s_a\times s_b:\mathbb Z[X]\to\mathbb Z\times\mathbb Z,\qquad f(X)\mapsto(f(a),f(b)).\]</div>
        Find the necessary and sufficient condition for <span class="exam-math exam-math--inline">\(s_a\times s_b\)</span> to be surjective.
      </li>
      <li>Consider the polynomials
        <div class="exam-math exam-math--display">\[f_1(X)=X^3+1,\qquad f_2(X)=X^3+2X+1.\]</div>
        <p>Let</p>
        <div class="exam-math exam-math--display">\[p_1:\mathbb Z[X]\to\mathbb Z[X]/(f_1(X)),\qquad p_2:\mathbb Z[X]\to\mathbb Z[X]/(f_2(X))\]</div>
        <p>be the natural projections. Define the homomorphism of additive groups</p>
        <div class="exam-math exam-math--display">\[p_1\times p_2:\mathbb Z[X]\to\mathbb Z[X]/(f_1(X))\times\mathbb Z[X]/(f_2(X))\]</div>
        <p>by <span class="exam-math exam-math--inline">\((p_1\times p_2)(f(X))=(p_1(f(X)),p_2(f(X)))\)</span>. Determine <span class="exam-math exam-math--inline">\(\operatorname{coker}(p_1\times p_2)\)</span> as an additive group and find its order. For a homomorphism of additive groups <span class="exam-math exam-math--inline">\(\varphi:G\to H\)</span>, the cokernel is defined by</p>
        <div class="exam-math exam-math--display">\[\operatorname{coker}(\varphi)=H/\operatorname{im}(\varphi).\]</div>
      </li>
    </ol>
  </div>
  <details class="exam-solution">
    <summary>Solution</summary>
    <div class="exam-solution__body">
      <ol>
        <li><p>We have <span class="exam-math exam-math--inline">\(\ker s_a=(X-a)\)</span>.</p>
          <p>If <span class="exam-math exam-math--inline">\(f(X)\in(X-a)\)</span>, there exists <span class="exam-math exam-math--inline">\(g(X)\in\mathbb Z[X]\)</span> such that <span class="exam-math exam-math--inline">\(f(X)=g(X)(X-a)\)</span>. Therefore</p>
          <div class="exam-math exam-math--display">\[s_a(f(X))=g(a)(a-a)=0,\]</div>
          <p>so <span class="exam-math exam-math--inline">\((X-a)\subseteq\ker s_a\)</span>. Conversely, if <span class="exam-math exam-math--inline">\(f\in\ker s_a\)</span>, then <span class="exam-math exam-math--inline">\(f(a)=0\)</span>. Since <span class="exam-math exam-math--inline">\(X-a\)</span> is monic, division gives</p>
          <div class="exam-math exam-math--display">\[f(X)=(X-a)Q(X)+r,\qquad Q(X)\in\mathbb Z[X],\quad r\in\mathbb Z.\]</div>
          <p>Evaluating at <span class="exam-math exam-math--inline">\(a\)</span> gives <span class="exam-math exam-math--inline">\(r=f(a)=0\)</span>. Hence <span class="exam-math exam-math--inline">\(f(X)\in(X-a)\)</span>, proving the equality.</p>
        </li>
        <li><p>We prove that <span class="exam-math exam-math--inline">\(s_a\times s_b\)</span> is surjective if and only if <span class="exam-math exam-math--inline">\(a-b=\pm1\)</span>.</p>
          <p><strong>Proposition.</strong> For every <span class="exam-math exam-math--inline">\(f\in\mathbb Z[X]\)</span>, we have <span class="exam-math exam-math--inline">\(a-b\mid f(a)-f(b)\)</span>.</p>
          <p>Indeed, writing <span class="exam-math exam-math--inline">\(f(X)=k_0+k_1X+\cdots+k_nX^n\)</span>, we obtain</p>
          <div class="exam-math exam-math--display">\[f(a)-f(b)=\sum_{i=1}^n k_i(a^i-b^i).\]</div>
          <p>For every <span class="exam-math exam-math--inline">\(i\geq1\)</span>,</p>
          <div class="exam-math exam-math--display">\[a^i-b^i=(a-b)\sum_{j=0}^{i-1}a^{i-1-j}b^j,\]</div>
          <p>which proves the proposition.</p>
          <p>Suppose the map is surjective. Then some <span class="exam-math exam-math--inline">\(f\in\mathbb Z[X]\)</span> maps to <span class="exam-math exam-math--inline">\((1,0)\)</span>. The proposition gives</p>
          <div class="exam-math exam-math--display">\[a-b\mid f(a)-f(b)=1.\]</div>
          <p>Thus <span class="exam-math exam-math--inline">\(a-b=\pm1\)</span>.</p>
          <p>Conversely, suppose <span class="exam-math exam-math--inline">\(a-b=\pm1\)</span>. Given any <span class="exam-math exam-math--inline">\((m,n)\in\mathbb Z^2\)</span>, set</p>
          <div class="exam-math exam-math--display">\[f(X)=m+\frac{n-m}{b-a}(X-a).\]</div>
          <p>The coefficient is an integer because <span class="exam-math exam-math--inline">\(b-a=\pm1\)</span>. Moreover, <span class="exam-math exam-math--inline">\(f(a)=m\)</span> and <span class="exam-math exam-math--inline">\(f(b)=n\)</span>. Therefore the map is surjective.</p>
        </li>
        <li><p>Write <span class="exam-math exam-math--inline">\(R=\mathbb Z[X]\)</span>, <span class="exam-math exam-math--inline">\(\mathfrak a=(f_1)\)</span>, <span class="exam-math exam-math--inline">\(\mathfrak b=(f_2)\)</span>, and <span class="exam-math exam-math--inline">\(p=p_1\times p_2\)</span>. Consider the homomorphism of additive groups</p>
          <div class="exam-math exam-math--display">\[\Phi:R/\mathfrak a\times R/\mathfrak b\longrightarrow R/(\mathfrak a+\mathfrak b),\qquad(f+\mathfrak a,g+\mathfrak b)\longmapsto f-g+(\mathfrak a+\mathfrak b).\]</div>
          <div class="exam-diagram-scroll" role="group" aria-label="Commutative diagram: R maps to R modulo a times R modulo b by p, and then to R modulo a plus b by Phi. The composite is zero.">
            <svg class="exam-cokernel-diagram" viewBox="0 0 600 200" role="img" aria-labelledby="cokernel-diagram-title cokernel-diagram-description">
              <title id="cokernel-diagram-title">Cokernel commutative diagram</title>
              <desc id="cokernel-diagram-description">R maps to R/a × R/b by p₁ × p₂. The difference map Φ maps R/a × R/b to R/(a+b). The diagonal map from R to R/(a+b) is zero.</desc>
              <defs>
                <marker id="cokernel-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="currentColor" stroke-width="1.4" />
                </marker>
              </defs>
              <g fill="none" stroke="currentColor" stroke-width="1.4" marker-end="url(#cokernel-arrowhead)">
                <path d="M 90 45 H 330" />
                <path d="M 445 70 V 145" />
                <path d="M 85 65 L 360 165" stroke-dasharray="5 5" />
              </g>
              <g class="exam-diagram-math" fill="currentColor" text-anchor="middle" dominant-baseline="middle">
                <text x="60" y="45">R</text>
                <text x="445" y="45">R/𝔞 × R/𝔟</text>
                <text x="445" y="175">R/(𝔞 + 𝔟)</text>
                <text x="210" y="22" class="exam-diagram-map-label">p₁ × p₂</text>
                <text x="468" y="108" class="exam-diagram-map-label">Φ</text>
                <text x="220" y="135" class="exam-diagram-map-label exam-diagram-zero-label">0</text>
              </g>
            </svg>
          </div>
          <p>The diagonal map is zero: <span class="exam-math exam-math--inline">\(\Phi\circ(p_1\times p_2)=0\)</span>.</p>
          <p>It is well defined: if <span class="exam-math exam-math--inline">\(f-f'\in\mathfrak a\)</span> and <span class="exam-math exam-math--inline">\(g-g'\in\mathfrak b\)</span>, then</p>
          <div class="exam-math exam-math--display">\[(f-g)-(f'-g')=(f-f')-(g-g')\in\mathfrak a+\mathfrak b.\]</div>
          <p>It is surjective, since <span class="exam-math exam-math--inline">\(\Phi(h+\mathfrak a,0+\mathfrak b)=h+(\mathfrak a+\mathfrak b)\)</span> for every <span class="exam-math exam-math--inline">\(h\in R\)</span>.</p>
          <p>We next show <span class="exam-math exam-math--inline">\(\ker\Phi=\operatorname{im}p\)</span>. For any <span class="exam-math exam-math--inline">\(h\in R\)</span>,</p>
          <div class="exam-math exam-math--display">\[\Phi(p(h))=\Phi(h+\mathfrak a,h+\mathfrak b)=0+(\mathfrak a+\mathfrak b).\]</div>
          <p>Thus <span class="exam-math exam-math--inline">\(\operatorname{im}p\subseteq\ker\Phi\)</span>. Conversely, let <span class="exam-math exam-math--inline">\((f+\mathfrak a,g+\mathfrak b)\in\ker\Phi\)</span>. Then <span class="exam-math exam-math--inline">\(f-g\in\mathfrak a+\mathfrak b\)</span>, so we can write <span class="exam-math exam-math--inline">\(f-g=u+v\)</span> with <span class="exam-math exam-math--inline">\(u\in\mathfrak a\)</span> and <span class="exam-math exam-math--inline">\(v\in\mathfrak b\)</span>. Set <span class="exam-math exam-math--inline">\(h=f-u=g+v\)</span>. Then</p>
          <div class="exam-math exam-math--display">\[p(h)=(h+\mathfrak a,h+\mathfrak b)=(f+\mathfrak a,g+\mathfrak b).\]</div>
          <p>Hence <span class="exam-math exam-math--inline">\(\ker\Phi\subseteq\operatorname{im}p\)</span>. The first isomorphism theorem now gives</p>
          <div class="exam-math exam-math--display">\[\operatorname{coker}p=\bigl(R/\mathfrak a\times R/\mathfrak b\bigr)/\operatorname{im}p\cong R/(\mathfrak a+\mathfrak b).\]</div>
          <p>Since <span class="exam-math exam-math--inline">\(f_2-f_1=2X\)</span>,</p>
          <div class="exam-math exam-math--display">\[\mathfrak a+\mathfrak b=(X^3+1,2X)=(X^3+1,2).\]</div>
          <p>To justify the last equality, <span class="exam-math exam-math--inline">\(2X\in(X^3+1,2)\)</span>, while</p>
          <div class="exam-math exam-math--display">\[2=2(X^3+1)-X^2(2X)\in(X^3+1,2X).\]</div>
          <p>Reducing the coefficients modulo <span class="exam-math exam-math--inline">\(2\)</span>, we obtain</p>
          <div class="exam-math exam-math--display">\[\operatorname{coker}p\cong\mathbb F_2[X]/(X^3+1).\]</div>
          <p>Division by the monic polynomial <span class="exam-math exam-math--inline">\(X^3+1\)</span> shows that every class has a unique representative <span class="exam-math exam-math--inline">\(c_0+c_1X+c_2X^2\)</span>, with <span class="exam-math exam-math--inline">\(c_i\in\mathbb F_2\)</span>. Therefore <span class="exam-math exam-math--inline">\(\{\overline1,\overline X,\overline{X^2}\}\)</span> is a basis over <span class="exam-math exam-math--inline">\(\mathbb F_2\)</span>, and</p>
          <div class="exam-math exam-math--display">\[\boxed{\dim_{\mathbb F_2}\operatorname{coker}(p_1\times p_2)=3.}\]</div>
          <p>As an additive group,</p>
          <div class="exam-math exam-math--display">\[\operatorname{coker}(p_1\times p_2)\cong(\mathbb Z/2\mathbb Z)^3,\qquad\boxed{\left|\operatorname{coker}(p_1\times p_2)\right|=2^3=8.}\]</div>
        </li>
      </ol>
    </div>
  </details>
</article>
