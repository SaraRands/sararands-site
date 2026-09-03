---
layout: default
title: "Giftedness | Essays on Gifted Adults | Sara Rands, CMHC"
description: "Essays on giftedness, twice-exceptionality, high sensitivity, relationships, identity, and therapy for gifted adults."
permalink: /blog/giftedness/
og_image: /assets/images/blog-og-image.png
---

# Giftedness

Writing on giftedness, twice-exceptionality, high sensitivity, and what it's like to move through the world noticing more than the people around you.

---

{% assign gifted_posts = site.posts | where_exp: "post", "post.tags contains 'giftedness'" %}

{% include post-list.html posts=gifted_posts %}

---

{% include newsletter.html %}
