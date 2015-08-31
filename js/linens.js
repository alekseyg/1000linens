---
---
(function () {

var linens = {{ site.linens | jsonify }};
var words = 'One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen|Fourteen|Fifteen|Sixteen|Seventeen|Eighteen|Nineteen|Twenty'
.split('|');

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(function () {
  $.each(linens[getRandomInt(0,linens.length)].slides, function (i, slide) {
    slide.src = '{{ site.baseurl }}{{ site.slides }}'+slide.src;
    var li    = $('<li />').attr('id', 'linen_'+(i+1));
    if (i === 0) li.addClass('show');
    $('.slideshow').append(li
      .append($('<h3 />').append(words[i]))
      .append($('<img />').attr(slide))
    );
  });
});

})();
