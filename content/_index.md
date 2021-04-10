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
        <script>
            var spec = '/data/totaldeaths.aa.json';
            vegaEmbed('#vis', spec, {"height": 500, "width":1300}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="pie">
        <script>
            var spec = '/data/pie.aa.json';
            vegaEmbed('#pie', spec, {"height": 500, "width": 500}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="vis1">
        <script>
            var spec = '/data/total_weaponname.aa.json';
            vegaEmbed('#vis1', spec, {"height": 500, "width": 400}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="pie1">
        <script>
            var spec = '/data/pie1.aa.json';
            vegaEmbed('#pie1', spec, {"height": 500, "width": 500}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="vis2">
        <script>
            var spec = '/data/total_weaponcolor.aa.json';
            vegaEmbed('#vis2', spec, {"height": 500, "width": 400}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="pie2">
        <script>
            var spec = '/data/pie2.aa.json';
            vegaEmbed('#pie2', spec, {"height": 500, "width": 500}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="vis3">
        <script>
            var spec = '/data/total_weapontype.aa.json';
            vegaEmbed('#vis3', spec, {"height": 500, "width": 400}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="vis4">
        <script>
            var spec = '/data/location.aa.json';
            vegaEmbed('#vis4', spec, {"height": 500, "width": 500}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="vis5">
        <script>
            var spec = '/data/locationbar.aa.json';
            vegaEmbed('#vis5', spec, {"height": 500, "width":400}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    <article>
        <div id="vis6">
        <script>
            var spec = '/data/timeline.aa.json';
            vegaEmbed('#vis6', spec, {"height": 500, "width":1300}).then(function(result) {
            }).catch(console.error);
        </script>
        </div>
    </article>
    </section>
</section>
