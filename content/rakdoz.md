---
title: "rakdoz"
date: 2021-04-10T15:49:24+01:00
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
        <div id="rakdoz">
        <script>
            var spec = '/data/rakdoz.aa.json';
            vegaEmbed('#rakdoz', spec, {"height": 500}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="rakdoz1">
        <script>
            var spec = '/data/rakdoz_pie.aa.json';
            vegaEmbed('#rakdoz1', spec, {"height": 500}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="rakdoz2">
        <script>
            var spec = '/data/rakdoz_pie1.aa.json';
            vegaEmbed('#rakdoz2', spec, {"height": 500}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    </section>
</section>