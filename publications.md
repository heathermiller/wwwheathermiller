---
layout: inner
title: Publications
---


## Book

{% for pub in site.data.publications.books.pubs %}
<div class="columns is-mobile">
  <div class="column is-one-quarter publication">
    <div class="thumbnail"><img src="{{ pub.thumbnail }}"></div>
  </div>
  <div class="column publication">
    <div class="title">{{ pub.title }}</div>
    <div class="authors">{{ pub.authors }}</div>
    <div class="abstract">{{ pub.abstract  }}</div>
    <div class="source"><a href="{{ pub.source }}"><i class="fab fa-github"></i> Source</a></div>
  </div>
</div>
{% endfor %}

## Current Drafts

{% for pub in site.data.publications.in-preparation.pubs %}
<div class="columns">
  <div class="column publication">
    <div class="title">{{ pub.title }}</div>
    <div class="authors">{{ pub.authors }}</div>
    {% if pub.pdf %}<a class="button lil-pub-button" href="{{ pub.pdf }}">PDF</a>{% endif %}
  </div>
</div>
{% endfor %}

## Refereed Journal and Conference Papers

{% for pub in site.data.publications.refereed.pubs %}
<div class="columns is-mobile">
  <div class="column is-three-quarters publication">
    <div class="title">{{ pub.title }}</div>
    <div class="authors">{{ pub.authors }}</div>
    {% if pub.conference-full %}  
      <div class="venue">{{ pub.conference-full }}</div>
    {% elsif pub.journal %}
      <div class="venue">{{ pub.journal }}</div>
    {% endif %}
    <div class="year">{{ pub.year }}</div>
    {% if pub.pdf %}<a class="button lil-pub-button" href="{{ pub.pdf }}">PDF</a>{% endif %}
    {% if pub.acmdl %}<a class="button lil-pub-button" href="{{ pub.acmdl }}">ACM DL</a>{% endif %}
  </div>
  <div class="column publication"><div class="abbrv">{{ pub.abbrv }} {{ pub.year }}</div></div>
</div>
{% endfor %}

## Refereed Workshop Papers

{% for pub in site.data.publications.workshops.pubs %}
<div class="columns is-mobile">
  <div class="column is-three-quarters publication">
    <div class="title">{{ pub.title }}</div>
    <div class="authors">{{ pub.authors }}</div>
    {% if pub.conference-full %}  
      <div class="venue">{{ pub.conference-full }}</div>
    {% elsif pub.journal %}
      <div class="venue">{{ pub.journal }}</div>
    {% endif %}
    <div class="year">{{ pub.year }}</div>
    {% if pub.pdf %}<a class="button lil-pub-button" href="{{ pub.pdf }}">PDF</a>{% endif %}
    {% if pub.acmdl %}<a class="button lil-pub-button" href="{{ pub.acmdl }}">ACM DL</a>{% endif %}
  </div>
  <div class="column publication"><div class="abbrv">{{ pub.abbrv }} {{ pub.year }}</div></div>
</div>
{% endfor %}


## Language Proposals, White Papers, General Interest Articles

{% for pub in site.data.publications.etc.pubs %}
<div class="columns">
  <div class="column publication">
    <div class="title">{{ pub.title }}</div>
    <div class="authors">{{ pub.authors }}</div>
    <div class="year">{{ pub.month }} {{ pub.year }}</div>
    {% if pub.url %}<div class="article"><a href="{{ pub.url }}">article&nbsp;<i class="fas fa-external-link-square-alt"></i></a></div>{% endif %}
  </div>
</div>
{% endfor %}

## Technical Reports

{% for pub in site.data.publications.tech-reports.pubs %}
<div class="columns">
  <div class="column publication">
    <div class="title">{{ pub.title }}</div>
    <div class="authors">{{ pub.authors }}</div>
    <div class="year">{{ pub.month }} {{ pub.year }}</div>
    {% if pub.pdf %}<a class="button lil-pub-button" href="{{ pub.pdf }}">PDF</a>{% endif %}
  </div>
</div>
{% endfor %}


## Thesis

{% for pub in site.data.publications.thesis.pubs %}
<div class="columns">
  <div class="column publication">
    <div class="title">{{ pub.title }}</div>
    <div class="authors">{{ pub.authors }}</div>
    <div class="thesis">{{ pub.thesis-type }}</div>
    <div class="director">{{ pub.director }}</div>
    <div class="committee">{{ pub.committee }}</div>
    <div class="university">{{ pub.university }}</div>
    <div class="year">{{ pub.month }} {{ pub.year }}</div>
    {% if pub.pdf %}<a class="button lil-pub-button" href="{{ pub.pdf }}">PDF</a>{% endif %}
  </div>
</div>
{% endfor %}
