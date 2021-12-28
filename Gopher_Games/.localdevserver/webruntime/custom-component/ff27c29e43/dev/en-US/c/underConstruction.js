Webruntime.define('lwc/underConstruction', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "H2" + shadowSelector + "\r{text-align: center;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_element("h2", {
        key: 0
      }, [api_text("This Page is under Construction")])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-underConstruction_underConstruction-host",
      shadowAttribute: "lwc-underConstruction_underConstruction"
    };

    class UnderConstruction extends lwc.LightningElement {}

    var underConstruction = lwc.registerComponent(UnderConstruction, {
      tmpl: _tmpl
    });

    return underConstruction;

});
