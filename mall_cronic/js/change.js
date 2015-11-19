jQuery(function ($) {
    // 'use strict';

    $('#if_two').css({
        opacity: 0
    });



    var data_treat, tx = 'list',
        pages = [];
    //dong.get('main.php?first=' + tx);


    jQuery.ajaxSetup({
        async: false
    });

    $.get('main.php?sec', function (data) {
        data_treat = jQuery.parseJSON(data);

        // console.log(typeof (data));
        console.log("Load was performed.");
        // console.log(dong + "dong");


    });

    jQuery.ajaxSetup({
        async: true
    });
    console.log(data_treat);
    console.log(data_treat.length);

    pages = data_treat;

    console.log(pages);


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




});