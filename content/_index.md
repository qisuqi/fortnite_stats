---
title: "Fortnite Death Stats"
date: 2021-04-10T15:47:00+01:00
draft: false
---

<section class="page-content">
    <section class="search">
    <form>
        <input type="search" placeholder="Search...">
        <button type="submit" aria-lable="submit form">
        </button>
    </form>
    </section>
    <section class="grid">
    <article>
        <div id="vis">
            <script>renderSpec('totaldeaths.aa.json', 'vis', 500, 1300);</script>
        </div>
    </article>
    <article>
        <div id="pie">
            <script>renderSpec('pie.aa.json', 'pie', 500, 500);</script>
        </div>
    </article>
    <article>
        <div id="vis1">
            <script>renderSpec('total_weaponname.aa.json', 'vis1', 500, 400);</script>
        </div>
    </article>
    <article>
        <div id="pie1">
            <script>renderSpec('pie1.aa.json', 'pie1', 500, 500);</script>
        </div>
    </article>
    <article>
        <div id="vis2">
            <script>renderSpec('total_weaponcolor.aa.json', 'vis2', 500, 400);</script>
        </div>
    </article>
    <article>
        <div id="pie2">
            <script>renderSpec('pie2.aa.json', 'pie2', 500, 500);</script>
        </div>
    </article>
    <article>
        <div id="vis3">
            <script>renderSpec('total_weapontype.aa.json', 'vis3', 500, 400);</script>
        </div>
    </article>
    <article>
        <div id="vis4">
            <script>renderSpec('location.aa.json', 'vis4', 500, 500);</script>
        </div>
    </article>
    <article>
        <div id="vis5">
            <script>renderSpec('locationbar.aa.json', 'vis5', 500, 400);</script>
        </div>
    </article>
    <article>
        <div id="vis6">
            <script>renderSpec('timeline.aa.json', 'vis6', 500, 1300);</script>
        </div>
    </article>
    </section>
</section>
