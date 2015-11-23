jQuery(function ($) {
    // 'use strict';
    var data_treat, tx = 'list',
        treated, regtee, regfoo, dropvalue;

    var button = $('.js-button');
    var dropdown = $('.dropdown');
    var dropcontwrite = $('.js-place');


    var array = [],
        regtoo = [],
        pages = [],
        regfii = [],
        regname = [],
        regone = [];





    button.click(function () {
        init_array();

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






    function init_array() {
        jQuery.ajaxSetup({
            async: false
        });

        $.get('main.php?sdf55FF6477dsdjhfb46', function (data) {
            data_treat = jQuery.parseJSON(data);
            console.log(data_treat);
            console.log("Load was performed.");
        });

        jQuery.ajaxSetup({
            async: true
        });

        regone = data_treat.body.storage.value;

        regtee = regone.split('<tbody>');

        for (var i = 0; i <= regtee.length - 1; i++) {

            regtoo[i] = regtee[i].match(/(?:href=")(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\~\=\;\:\$\#\@\_\/\w %?\.\&-]*)/g);
            regfii[i] = regtee[i].match(/<td>(\d{4,6})/g);
            regname[i] = regtee[i].match(/<th>(<p>)?(\w+([\w\-\&\+\=\(\)]+)?)/);

        }
        console.log(regtoo);
        console.log(regfii);
        console.log(regname);


        for (var i = 1; i <= regtoo.length - 1; i++) {
            array[i] = []
            for (var u = 0; u <= regtoo[i].length - 1; u++) {

                array[i].name = (regname[i][2]);


                array[i][u] = {
                    page: ((regtoo[i][u]).split('"'))[1],
                    dur: ((regfii[i][u]).split('<td>'))[1]
                }
            }

        }

        console.log(array.length);
        console.log(array);

    }




    function getdropcontent() {



        var contentofdrop = "";

        for (var i = 1; i <= array.length - 1; i++) {
            contentofdrop += '<li><a href="#" class="contclick">' + array[i].name + '</a></li>';


        }
        dropcontwrite.html(contentofdrop);



    }



    function loadpage() {

        for (var i = 1; i <= array.length - 1; i++) {
            if (array[i].name == dropvalue) {

                pages = array[i];

            } else {
                console.log("nope");
            }



        }

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