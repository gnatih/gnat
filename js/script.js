$(function(){
  f = [];
  w = $("#wrapper");
  l = $("#left");
  r = $("#right");

  scroller = $('.box-wrap').antiscroll();

  l.hover(function(){
    w.addClass("active");
  }, function(){
    w.removeClass("active");
  });

  $(".works").isotope({
    getSortData : {
      title : function($elem){
        return $elem.find('.title').text();
      },

      year : function($elem){
        return $elem.attr("data-year");
      }
    }
  });

  $(".works").isotope( { filter: "*", sortBy: "year title", sortAscending: true });

  $(".element").click(function(e){
    $(".element").removeClass("current");
    $(".filter a").removeClass("active");
    
    $(this).addClass("current");
    href = $(this).attr("data-href");
    w.addClass("loading");

    $("#right iframe").load(function(){
      w.removeClass("loading");
    }).attr("src", href);

    var classes = $(this).attr("class").split(/\s+/);
    $(".filter a").each(function(){
      c = $(this).attr("href").slice(2);
      if($.inArray(c, classes) !== -1) $(this).addClass("active");
    });
  });

  $("#left ul.sort a").click(function(e){
    $("#left ul.sort a").removeClass("chosen");
    $(this).addClass("chosen");
    var type = $(this).attr('href').slice(1);
    var asc = (type == "year") ? false : true;
    $(".works").isotope({ sortBy: type, sortAscending: asc });
    return false;
  });

  $("#left ul.filter a").click(function(e){
    $("#left ul.filter a").removeClass("chosen");
    $(this).addClass("chosen");
    var type = $(this).attr('href').slice(1);
    $(".works").isotope({ filter: type });
    return false;
  });



});