Webruntime.define('lwc/underConstruction', ['lwc', 'c/homePage', 'c/underConstruction'], function (lwc, _cHomePage, _cUnderConstruction) { 'use strict';

    _cHomePage = _cHomePage && Object.prototype.hasOwnProperty.call(_cHomePage, 'default') ? _cHomePage['default'] : _cHomePage;
    _cUnderConstruction = _cUnderConstruction && Object.prototype.hasOwnProperty.call(_cUnderConstruction, 'default') ? _cUnderConstruction['default'] : _cUnderConstruction;

    function tmpl($api, $cmp, $slotset, $ctx) {
      return [];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-underConstruction_underConstruction-host",
      shadowAttribute: "lwc-underConstruction_underConstruction"
    };

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element
      } = $api;
      return [$cmp.HomePage ? api_custom_element("c-home-page", _cHomePage, {
        key: 0
      }, []) : null, $cmp.HomePage ? api_custom_element("c-under-construction", _cUnderConstruction, {
        key: 1
      }, []) : null];
    }

    var _tmpl$1 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];
    tmpl$1.stylesheetTokens = {
      hostAttribute: "lwc-base_base-host",
      shadowAttribute: "lwc-base_base"
    };

    class Base extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.HomePage = false;
        this.Games = false;
        this.Contact = false;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;
      }

      connectedCallback() {
        this.HomePage = true;
      }

    }

    lwc.registerDecorators(Base, {
      fields: ["HomePage", "Games", "Contact", "Support", "Careers", "AboutUs"]
    });

    lwc.registerComponent(Base, {
      tmpl: _tmpl$1
    });

    class UnderConstruction extends LightningElement {}

    var underConstruction = lwc.registerComponent(UnderConstruction, {
      tmpl: _tmpl
    });

    return underConstruction;

});
