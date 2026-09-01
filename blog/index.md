---
layout: default
title: "Blog | Sara Rands, CMHC"
description: "Essays on giftedness, therapy, neurodivergence, identity, meaning, and post-religious life from Salt Lake City therapist Sara Rands, CMHC."
permalink: /blog/
og_image: /assets/images/blog-og-image.png
---

# Blog

Reflections on giftedness, therapy, neurodivergence, meaning, post-religious life, and whatever else catches my attention.

---

<ul>
  {% for post in site.posts %}
  <li>
    <h3 class="blog-index-title">
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </h3>

    <small class="blog-index-date">
      {{ post.date | date: "%B %-d, %Y" }}
    </small>

    <p class="blog-index-excerpt">
      {{ post.excerpt | strip_html | truncate: 160 }}
    </p>
  </li>
  {% endfor %}
</ul>

---
<p>
  {% include newsletter.html %}  
</p>

<style>
  .blog-index-title {
    margin-bottom: 0.1rem;
  }

  .blog-index-date {
    display: block;
    margin-bottom: 0.75rem;
  }

  .blog-index-excerpt {
    margin-top: 0;
  }
</style>