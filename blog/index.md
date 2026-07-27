---
layout: default
title: "Blog | Sara Rands, CMHC"
description: "Essays on giftedness, therapy, neurodivergence, identity, meaning, and post-religious life from Salt Lake City therapist Sara Rands, CMHC."
permalink: /blog/
---

# Blog

Reflections on giftedness, therapy, neurodivergence, meaning, post-religious life, and whatever else catches my attention.

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