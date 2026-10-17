{{--
    Full-screen loader: spinning ring + logo.
    Include right after <body>:   @include('partials.page-loader')

    Shows on the first page load; app.js hides it when Vue is ready and shows it
    during slow Inertia page visits. Styles: sass/components/_page-loader.scss
--}}
<div class="cl-page-loader" id="cl-page-loader" role="status" aria-live="polite">
    <div class="cl-page-loader__spinner">
        <span class="cl-page-loader__ring"></span>
        <img class="cl-page-loader__logo" src="{{ asset('images/clementra-icon.png') }}" alt="">
    </div>
    <span class="cl-page-loader__text">Loading&hellip;</span>
</div>

<script>
    (function () {
        var loader = document.getElementById('cl-page-loader');
        var hide = function () { loader.classList.add('is-hidden'); };
        var show = function () { loader.classList.remove('is-hidden'); };

        // for JS navigation:  window.clPageLoader.show(); window.location.href = url;
        window.clPageLoader = { show: show, hide: hide };

        // page ready (or give up after 8s so it can never block the screen)
        window.addEventListener('load', hide);
        setTimeout(hide, 8000);

        // coming back with the browser Back button: page is restored from cache
        window.addEventListener('pageshow', function (e) { if (e.persisted) hide(); });

        // moving between Inertia pages is handled in resources/js/app.js (router events)
    })();
</script>
