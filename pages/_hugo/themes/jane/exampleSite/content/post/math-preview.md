---
title: "Math Preview"
author: "Murray Bourne"
date: 2019-03-04T16:01:23+08:00
lastmod: 2019-03-05T16:01:23+08:00
draft: false
tags: ["preview", "math", "tag-6"]
categories: ["docs", "math", "index"]

# mathjax: true

# Use KaTeX
# See https://github.com/KaTeX/KaTeX
katex: true

# Use Mmark
# See https://gohugo.io/content-management/formats/#mmark
markup: mmark

menu:
  main:
    parent: "docs"
    weight: 5
---

[KaTeX and MathJax Comparison Demo, currently processed as KaTex](https://www.intmath.com/cg5/katex-mathjax-comparison.php)

<!--more-->

## Repeating fractions
$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} \equiv 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$


## Summation notation
$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$


## Sum of a Series
I broke up the next two examples into separate lines so it behaves better on a mobile phone. That's why they include \displaystyle.

$$
\displaystyle\sum_{i=1}^{k+1}i
$$

$$
\displaystyle= \left(\sum_{i=1}^{k}i\right) +(k+1)
$$

$$
\displaystyle= \frac{k(k+1)}{2}+k+1
$$

$$
\displaystyle= \frac{k(k+1)+2(k+1)}{2}
$$

$$
\displaystyle= \frac{(k+1)(k+2)}{2}
$$

$$
\displaystyle= \frac{(k+1)((k+1)+1)}{2}
$$

## Product notation
$$
\displaystyle 1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots = \displaystyle \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \displaystyle\text{ for }\lvert q\rvert < 1.
$$


## Inline math
And here is some in-line math: $$ k_{n+1} = n^2 + k_n^2 - k_{n-1} $$ , followed by some more text.


## Greek Letters
$$
\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega
\alpha\ \beta\ \gamma\ \delta\ \epsilon\ \zeta\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi \ \omicron\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \phi\ \chi\ \psi\ \omega\ \varepsilon\ \vartheta\ \varpi\ \varrho\ \varsigma\ \varphi
$$


## Arrows
$$
\gets\ \to\ \leftarrow\ \rightarrow\ \uparrow\ \Uparrow\ \downarrow\ \Downarrow\ \updownarrow\ \Updownarrow
$$

$$
\Leftarrow\ \Rightarrow\ \leftrightarrow\ \Leftrightarrow\ \mapsto\ \hookleftarrow
\leftharpoonup\ \leftharpoondown\ \rightleftharpoons\ \longleftarrow\ \Longleftarrow\ \longrightarrow
$$

$$
\Longrightarrow\ \longleftrightarrow\ \Longleftrightarrow\ \longmapsto\ \hookrightarrow\ \rightharpoonup
$$

$$
\rightharpoondown\ \leadsto\ \nearrow\ \searrow\ \swarrow\ \nwarrow
$$


## Symbols
$$
\surd\ \barwedge\ \veebar\ \odot\ \oplus\ \otimes\ \oslash\ \circledcirc\ \boxdot\ \bigtriangleup
$$

$$
\bigtriangledown\ \dagger\ \diamond\ \star\ \triangleleft\ \triangleright\ \angle\ \infty\ \prime\ \triangle
$$


## Calculus
$$
\int u \frac{dv}{dx}\,dx=uv-\int \frac{du}{dx}v\,dx
$$

$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x}
$$

$$
\oint \vec{F} \cdot d\vec{s}=0
$$


## Lorenz Equations
$$
\begin{aligned} \dot{x} & = \sigma(y-x) \\ \dot{y} & = \rho x - y - xz \\ \dot{z} & = -\beta z + xy \end{aligned}
$$


## Cross Product
This works in KaTeX, but the separation of fractions in this environment is not so good.

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \end{vmatrix}
$$

Here's a workaround: make the fractions smaller with an extra class that targets the spans with "mfrac" class (makes no difference in the MathJax case):

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \end{vmatrix}
$$


## Accents
$$
\hat{x}\ \vec{x}\ \ddot{x}
$$


## Stretchy brackets
$$
\left(\frac{x^2}{y^3}\right)
$$


## Evaluation at limits
$$
\left.\frac{x^3}{3}\right|_0^1
$$


## Case definitions
$$
f(n) = \begin{cases} \frac{n}{2}, & \text{if } n\text{ is even} \\ 3n+1, & \text{if } n\text{ is odd} \end{cases}
$$


## Maxwell's Equations
$$
\begin{aligned} \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\ \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\ \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\ \nabla \cdot \vec{\mathbf{B}} & = 0 \end{aligned}
$$

These equations are quite cramped. We can add vertical spacing using (for example) [1em] after each line break (\\). as you can see here:

$$
\begin{aligned} \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\[1em] \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\[0.5em] \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\[1em] \nabla \cdot \vec{\mathbf{B}} & = 0 \end{aligned}
$$


## Statistics
Definition of combination:

$$
\frac{n!}{k!(n-k)!} = {^n}C_k
{n \choose k}
$$

## Fractions on fractions
$$
\frac{\frac{1}{x}+\frac{1}{y}}{y-z}
$$


## n-th root
$$
\sqrt[n]{1+x+x^2+x^3+\ldots}
$$


## Matrices
$$
\begin{pmatrix} a_{11} & a_{12} & a_{13}\\ a_{21} & a_{22} & a_{23}\\ a_{31} & a_{32} & a_{33} \end{pmatrix}
\begin{bmatrix} 0 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & 0 \end{bmatrix}
$$


## Punctuation
$$
f(x) = \sqrt{1+x} \quad (x \ge -1)
f(x) \sim x^2 \quad (x\to\infty)
$$

Now with punctuation:

$$
f(x) = \sqrt{1+x}, \quad x \ge -1
f(x) \sim x^2, \quad x\to\infty
$$
