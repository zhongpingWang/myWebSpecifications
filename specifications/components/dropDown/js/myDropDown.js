"use strict";

;(function ($) {

  $.fn.myDropDown = function (opts) {

    var settings = {
      click: null, //点击事件
      zIndex: 9
    };

    this.settings = $.extend(settings, opts);

    //z-index
    $(this).css("z-index", this.settings.zIndex);

    this.init = function () {
      this.bindEvent();
    };

    this.bindEvent = function () {
      var $that = $(this),
          that = this;
      $that.on("click", ".myDropText", function () {

        $that.find(".myDropList").show().end().find(".myDropArrorw").addClass('down');
      });

      $that.on("click", ".myDropList .myItem", function () {

        $(this).closest(".myDropDown").find(".myDropText .text").text($(this).text());

        if ($.isFunction(that.settings.click)) {
          that.settings.click.call(that, $(this));
        }
        $(document).trigger('click.myDropDown');
      });

      $(document).on("click.myDropDown", function (event) {

        var $target = $(event.target);
        if ($target.closest($that).length <= 0) {
          $that.find(".myDropList").hide().end().find(".myDropArrorw").removeClass('down');
        }
      });
    };

    this.init();
  };
})(jQuery);