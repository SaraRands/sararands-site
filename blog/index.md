---
layout: default
title: "Reflections on Meaning, Healing & Post-Religious Life | Sara Rands, ACMHC"
description: "Essays on identity, grief, parenting, post-religious life, neurodivergence, and the quiet work of becoming. Written by Sara Rands, a Salt Lake City therapist and cancer survivor who works with deep thinkers and sensitive souls."
permalink: /blog/
---

# Blog

Welcome. This blog is where I put the things that don’t have a home elsewhere---reflections on therapy, attachment, meaning-making after religion, and the small human moments that keep me tethered. I write the way I think: in layers, with curiosity, and with permission not to have it all sorted out.

---

<ul>
  {% for post in site.posts %}
  <li>
    <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
    <small>{{ post.date | date: "%B %-d, %Y" }}</small>
    <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
  </li>
  {% endfor %}
</ul>