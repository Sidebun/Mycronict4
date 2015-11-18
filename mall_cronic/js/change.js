jQuery(function ($) {
    // 'use strict';

    $('#if_two').css({
        opacity: 0
    });

    /*
    var pages = [
            {
                page: 'http://jenkins-mw.miclaser.net/view/DV6%20Monitor/',
                dur: 3000
            },
            {
                page: 'http://jenkins-mw.miclaser.net/view/Syncra-build-monitor/',
                dur: 6000
            },
            {
                page: 'http://jenkins-mw.miclaser.net/view/P80%20Custom/',
                dur: 9000
            }
],
*/







    var data_treat, tx = 'list',
        treated, numbers, numbers_treat, texts, texts_treat, url, time, i, pages = [];
    //dong.get('main.php?first=' + tx);


    jQuery.ajaxSetup({
        async: false
    });

    $.get('main.php?sec', function (data) {
        data_treat = jQuery.parseJSON(data);

        console.log(typeof (data));
        console.log("Load was performed.");
        // console.log(dong + "dong");

        //jQuery.parseJSON(data);
    });
    jQuery.ajaxSetup({
        async: true
    });
    console.log(data_treat);
    console.log(data_treat.length);

    pages = data_treat;

    console.log(pages);

    /*MAIN
    
    //    console.log(test + "test");
    treated = data_treat.split('~~');
    texts_treat = treated[0];
    numbers_treat = treated[1];
    texts = texts_treat.split(' ');
    numbers = numbers_treat.split(' ');


    console.log("data treated");
    console.log(texts.length + "\n" + numbers.length);


    for (i = 0; i <= texts.length - 2; i++) {
        //  finish[i] = new Array()
        //    finish[i].page = treated[i];
        pages[i] = {
            page: texts[i],
            dur: numbers[i]
        };

        // console.log("some");
    }

    console.log(JSON.stringify(pages));
    console.log(pages);

    // console.log(finish[0].page);
   
        var foo, doo;
        foo = 'http://jenkins-mw.miclaser.net/view/DV6%20Monitor/';
        doo = 3000;

        
            finish[0] = [];
            finish[0].page = 'http://jenkins-mw.miclaser.net/view/DV6%20Monitor/';
            finish[0].dur = 3000;
        

        finish[0] = {
            page: foo,
            dur: doo
        };


        var test = new Array([{
            page: 'http://jenkins.com',
            dur: 3000
        }]);


        console.log(test);
        console.log(finish);
        console.log(pages);


    while (i >= treated.length - 1) {
        alert("hej");
    }
*/





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