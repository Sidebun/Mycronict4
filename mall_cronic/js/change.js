jQuery(function ($) {
    // 'use strict';

    $('#if_two').css({
        opacity: 0
    });



    var data_treat, tx = 'list',
        pages = [],
        xmlreq;
    var button = $('.js-button');
    var dropdown = $('.dropdown');
    //dong.get('main.php?first=' + tx);


    jQuery.ajaxSetup({
        async: false
    });


    xmlreq = "http://confluence.miclaser.net/rest/api/content/30125745";

    var header = "Basic " + btoa("SEBAER0" + ":" + "LkNQf5DV");
    document.cookie = "Authorization=" + header;




    function getAuthCookie() {
        var cn = "Authorization=";
        var idx = document.cookie.indexOf(cn)

        if (idx != -1) {
            var end = document.cookie.indexOf(";", idx + 1);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(idx + cn.length, end));
        } else {
            return "";
        }
    }


    jQuery.ajaxSetup({
        async: true
    });


    $.ajax({
        type: "POST",
        url: xmlreq,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", +getAuthCookie());
        },
        // type: 'POST',
        dataType: 'jsonp',
        contentType: 'application/json',
        processData: false,
        //    data: '{"foo":"bar"}',
        success: function (data) {
            console.log("success");
            console.log(JSON.stringify(data));
            console.log(data);
            console.log(jQuery.parseJSON(data));
        },
        error: function () {
            alert("Cannot get data");
        }
    });


    /*
       function getToken() {
           var cookie = Cookie.getCookie(cookieName);
           var auth = jQuery.parseJSON(cookie);
           var token = "Token " + "SEBAER0" + ":" + "LkNQf5DV";
       }

       function setHeader(xhr) {
           xhr.setRequestHeader('Authorization', getToken());
       }



       /*
           $.get(xmlreq, function (data) {
               data_treat = jQuery.parseJSON(data);

               console.log(" ");
               console.log(data);
               console.log(" ");
               console.log(datatreat);
               // console.log(typeof (data));
               console.log("Load was performed.");
               // console.log(dong + "dong");


           });

           jQuery.ajaxSetup({
               async: true
           });
           /*
           console.log(data_treat);
           console.log(data_treat.length);

           pages = data_treat;

           console.log(pages);


           dropdown.click(function () {
               dropdown.hide();
               console.log('clicked');

           });

        */



    /*
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

    */


});