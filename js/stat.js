'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillText('Привет канвас!', 100, 100);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);

  var max = -1;

  for (var y = 0; y < times.length; y++) {
    var time = times[y];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var initialX = 150;
  var widthGistogramm = 40;
  var step = histogramHeight / max;

  for (var i = 0; i < times.length; i++) {
    var colorSaturation = Math.floor(Math.random() * (207 - 50 + 1)) + 50;
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + 90 * i, 260);
    ctx.fillText(times[i].toFixed(0), initialX + 90 * i, 80 + (histogramHeight - times[i] * step));

    ctx.fillStyle = 'rgba(29, 23, ' + colorSaturation + ', 1)';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(initialX + 90 * i, 90 + (histogramHeight - times[i] * step), widthGistogramm, times[i] * step);
  }

};
