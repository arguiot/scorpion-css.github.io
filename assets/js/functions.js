setInterval(function () {

  var a = moment().utc();
  var b = 'December, 06, 2016';

  var d = -a.diff(b, 'days');
  var h = (-a.diff(b, 'hours')) - d * 24;
  var m = (-a.diff(b, 'minutes')) - (d * 24 * 60 + h * 60);
  var s = (-a.diff(b, 'seconds')) - (d * 24 * 3600 + h * 3600 + m * 60);;

  if (h < 10) {
    h = '0' + h;
  }

  if (m < 10) {
    m = '0' + m;
  }

  if (d < 10) {
    d = '0' + d;
  }

  if (s < 10) {
    s = '0' + s;
  }

  $('span.day').html(d + ':');
  $('span.hour').html(h + ':');
  $('span.min').html(m + ':');
  $('span.sec').html(s);

}, 500);

$(document).ready(function () {
  $('img.menu-togle').click(function () {
    $('nav ul').toggleClass('open');
  });
});

$(window).scroll(function () {
  var wScroll = $(document).height() - $(window).height() - $(window).scrollTop();

  if (wScroll > $('footer').height()) {
    $('footer').css({
      display: 'none',
    });
  } else if (wScroll < $('footer').height()) {
    $('footer').css({
      display: 'block',
    });
  }
});
