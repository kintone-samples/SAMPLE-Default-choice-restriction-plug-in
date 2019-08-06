/*
MIT License
Copyright (c) 2018 Cybozu
https://github.com/kintone/SAMPLE-Radio-button-validation-plug-in/blob/master/LICENSE
*/

jQuery.noConflict();
(function($, PLUGIN_ID) {
  'use strict';
  // Get configuration settings

  var CONF = kintone.plugin.app.getConfig(PLUGIN_ID);
  var $form = $('.js-submit-settings');
  var $cancelButton = $('#js-cancel-button');
  var $radioBtn = $('select[name="js-select-radio-button-field"]');
  var DEFAULT = {};

  function escapeHtml(htmlstr) {
    return htmlstr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function setDropDown() {
    // Retrieve field information, then set dropdown
    return kintone.api(kintone.api.url('/k/v1/preview/app/form/fields', true), 'GET',
      {'app': kintone.app.getId()}).then(function(resp) {
      var keys = Object.keys(resp.properties);
      keys.forEach(function(key) {
        var prop = resp.properties[key];
        var $option = $('<option>');
        switch (prop.type) {
          case 'RADIO_BUTTON':
            $option.attr('value', prop.code);
            $option.text(escapeHtml(prop.label));
            $radioBtn.append($option.clone());
            DEFAULT[prop.code] = prop.defaultValue;
            break;
          default:
            break;
        }

      });
      // Set default values
      $radioBtn.val(CONF.radio_button);
    }, function(resp) {
      return alert('Failed to retrieve field(s) information');
    });
  }
  // Set dropdown list
  setDropDown();
  // Set input values when 'Save' button is clicked
  $form.on('submit', function(e) {
    e.preventDefault();
    var config = [];
    var radio_button = $radioBtn.val();
    config.radio_button = radio_button;
    config.default_value = DEFAULT[radio_button];
    kintone.plugin.app.setConfig(config);
  });
  // Process when 'Cancel' is clicked
  $cancelButton.click(function() {
    window.location.href = '/k/admin/app/' + kintone.app.getId() + '/plugin/';
  });
})(jQuery, kintone.$PLUGIN_ID);
