---
layout: default
title: "Giftedness"
description: "Essays on giftedness, twice-exceptionality, high sensitivity, relationships, identity, and therapy."
permalink: /blog/giftedness/
og_image: /assets/images/blog-og-image.png
---

# Giftedness

---
<p>
  {% include newsletter.html %}  
</p>
---

{% assign gifted_posts = site.posts | where_exp: "post", "post.tags contains 'giftedness'" %}

{% for post in gifted_posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

{% if post.description %}
{{ post.description }}
{% endif %}
{% endfor %}