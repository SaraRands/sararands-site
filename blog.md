---
layout: default
title: Blog
---

# Blog

A bloggy blog, where I share a little about how I see things.

---

<ul>
  {% for post in site.posts %}
  <li>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <small>{{ post.date | date: "%B %-d, %Y" }}</small>
    <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
  </li>
  {% endfor %}
</ul>