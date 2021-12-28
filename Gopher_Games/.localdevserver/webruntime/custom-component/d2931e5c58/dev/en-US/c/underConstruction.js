Webruntime.define('lwc/underConstruction', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_element("p", {
        key: 0
      }, [api_text("This Page is under Construction")])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
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
