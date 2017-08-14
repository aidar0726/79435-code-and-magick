'use strict';

window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  var HISTOGRAMHEIGHT = 150;
  var INITIALX = 150;
  var WIDTHGISTOGRAMM = 40;
  var YOURINITIAL = 'Вы';
  var SPACEGISTOGRAMM = 90;
  var TEXTNAMEY = 260;
  var TEXTTIMEY = 80;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);


  for (var y = 0; y < times.length; y++) {
    var time = times[y];
    if (time > max) {
      max = time;
    }
  }
  var step = HISTOGRAMHEIGHT / max;

  for (var i = 0; i < times.length; i++) {
    var colorSaturation = Math.floor(Math.random() * 158) + 50;
    var currentName = names[i];
    var currentTime = times[i];
    var personalHeight = currentTime * step;
    var DIFFERENCEHEIGHT = HISTOGRAMHEIGHT - personalHeight;

    ctx.fillStyle = 'black';
    ctx.fillText(currentName, INITIALX + SPACEGISTOGRAMM * i, TEXTNAMEY);
    ctx.fillText(currentTime.toFixed(0), INITIALX + SPACEGISTOGRAMM * i, TEXTTIMEY + DIFFERENCEHEIGHT);

    ctx.fillStyle = 'rgba(29, 23, ' + colorSaturation + ', 1)';

    if (currentName === YOURINITIAL) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(INITIALX + SPACEGISTOGRAMM * i, SPACEGISTOGRAMM + DIFFERENCEHEIGHT, WIDTHGISTOGRAMM, personalHeight);
  }

};
