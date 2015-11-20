jQuery(function ($) {
    // 'use strict';
    var data_treat, tx = 'list',
        treated,
        regone, regtee, regfoo;

    var button = $('.js-button');
    var dropdown = $('.dropdown');
    var dropcontwrite = $('.js-place');




    var array = [],
        regtoo = [],
        pages = [],
        regfii = [];




    jQuery.ajaxSetup({
        async: false
    });

    $.get('main.php?first', function (data) {
        //data_treat = encodeURIComponent(data);
        data_treat = jQuery.parseJSON(data);
        //data_treat = decodeURIComponent(data_treat);
        console.log(data_treat);
        console.log(typeof (data_treat))

        console.log("Load was performed.");
    });

    jQuery.ajaxSetup({
        async: true
    });
    // NEW BEST WAY
    pages = data_treat.body.storage.value;

    regtee = pages.split('<table>');


    var patthttp = new RegExp('(?:href=")(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w %?\.-]*)', 'g');


    for (var i = 0; i <= regtee.length - 1; i++) {

        regtoo[i] = regtee[i].match(/(?:href=")(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\~\=\_\/\w %?\.\&-]*)/g);
        regfii[i] = regtee[i].match(/<td>(\d{4,6})/g)

    }
    console.log(regtoo);



    for (var i = 1; i <= regtoo.length - 1; i++) {
        array[i] = []
        for (var u = 0; u <= regtoo[i].length - 1; u++) {

            array[i][u] = {
                page: ((regtoo[i][u]).split('"'))[1],
                dur: ((regfii[i][u]).split('<td>'))[1]
            }
        }

    }




    // regone = pages.match(/.{22}(\w+).{9}(\w+).{9}(\w+)/);
    // regtoo = pages.match(/href="((https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w %?\.-]*))/g);

    console.log(array);
    //console.log(regone);
    //    console.log(regtee);

    //    console.log(pages);








    /*
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

    */
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