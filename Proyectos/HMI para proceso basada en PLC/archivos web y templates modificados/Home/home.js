// home_alarms.js
$(function () {
  const UPDATE_MS = 500;

  function updateAlarmIcons() {
    $('[SubParamId]').each(function () {
      const $row = $(this);
      const subId = $row.attr('SubParamId');
      const $icon = $row.find('#' + subId);

      if ($icon.length === 0) return;
      const state = $icon.attr('data-state'); // "0" o "1"

      if (state === '1') {
        $icon.addClass('active');
      } else {
        $icon.removeClass('active');
      }
    });
  }

  // Ejecutar una vez y luego en intervalo
  updateAlarmIcons();
  setInterval(updateAlarmIcons, UPDATE_MS);
});
