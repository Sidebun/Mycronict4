jQuery(function ($) {
    // 'use strict';
    var data_treat, tx = 'list',
        treated, pages = [],
        dropcont, dropvalue;

    var button = $('.js-button');
    var dropdown = $('.dropdown');
    var dropcontwrite = $('.js-place');




    button.click(function () {

        getdropcontent();


        console.log('menu clicked');

        $('.contclick').click(function () {

            console.log("content clicked");

            dropvalue = $(this).text()

            console.log(dropvalue);

            $('#if_two').css({
                opacity: 0
            });

            loadpage();
            showpage();
            console.log("the pages:");
            console.log(pages);
            dropdown.hide();
        });


    });


    function getdropcontent() {

        jQuery.ajaxSetup({
            async: false
        });

        $.get('main.php?content', function (data) {
            dropcont = jQuery.parseJSON(data);

            console.log("content-Load was performed.");
        });

        jQuery.ajaxSetup({
            async: true
        });

        var contentofdrop = "";

        for (var i = 0; i <= dropcont.length - 1; i++) {
            contentofdrop += '<li><a href="#" class="contclick">' + dropcont[i].name + '</a></li>';


        }
        dropcontwrite.html(contentofdrop);



    }



    function loadpage() {
        jQuery.ajaxSetup({
            async: false
        });

        $.get('main.php?first=' + dropvalue, function (data) {
            data_treat = jQuery.parseJSON(data);

            console.log("Load was performed.");
        });

        jQuery.ajaxSetup({
            async: true
        });
        // NEW BEST WAY
        pages = data_treat;

        console.log(pages);

    }


    function showpage() {

        var p = pages.length,
            cif = 0;


        while (--p > -1) {
            (function (p) {
                var a = document.createElement('a');
                a.href = pages[p].page;
                pages[p].page = a;
            })(p);
        }
        $('iframe').load(function () {
            $('iframe').not(this).animate({
                opacity: 0
            });
            $(this).animate({
                opacity: 1
            }, 'slow', function () {
                setTimeout(loadIframe, pages[p].dur);
            });
        });

        function loadIframe() {

            var page = pages[(p = ++p % pages.length)].page,
                bust = 'bustcache=' + new Date().getTime();
            page = page.search ? page.href + '&' + bust : page.href + '?' + bust;
            $('iframe').eq(cif).attr('src', page);
            cif = (++cif) % 2;
        }
        loadIframe();

    }


});