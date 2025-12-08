---
layout: default
title: "Contact Sara Rands, ACMHC | Therapy for Gifted Adults & Sensitive Minds in Salt Lake City"
description: "Get in touch with therapist Sara Rands for attachment-focused, neurodiversity-affirming therapy in Salt Lake City. Currently practicing through Symmetry Counseling."
---

# Blog

A bloggy blog where I think out loud about healing, identity, and the wonderfully complicated inner world.

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