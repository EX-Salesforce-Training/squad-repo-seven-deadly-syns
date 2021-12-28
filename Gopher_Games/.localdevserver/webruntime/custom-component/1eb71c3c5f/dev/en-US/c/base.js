Webruntime.define('lwc/base', ['lwc', 'c/homePage', 'c/underConstruction'], function (lwc, _cHomePage, _cUnderConstruction) { 'use strict';

    _cHomePage = _cHomePage && Object.prototype.hasOwnProperty.call(_cHomePage, 'default') ? _cHomePage['default'] : _cHomePage;
    _cUnderConstruction = _cUnderConstruction && Object.prototype.hasOwnProperty.call(_cUnderConstruction, 'default') ? _cUnderConstruction['default'] : _cUnderConstruction;

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element
      } = $api;
      return [$cmp.HomePage ? api_custom_element("c-home-page", _cHomePage, {
        key: 0
      }, []) : null, api_custom_element("c-under-construction", _cUnderConstruction, {
        key: 1
      }, [])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
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

      hanldetoHome(event) {
        console.log("testing");
        this.HomePage = event.detail;
        this.Games = false;
        this.Contact = false;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;
      }

      hanldetoGames(event) {
        this.HomePage = false;
        this.Games = event.detail;
        this.Contact = false;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;
      }

      hanldetoContact(event) {
        this.HomePage = false;
        this.Games = false;
        this.Contact = event.detail;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;
      }

      hanldetoSupport(event) {
        this.HomePage = false;
        this.Games = false;
        this.Contact = false;
        this.Support = event.detail;
        this.Careers = false;
        this.AboutUs = false;
      }

      hanldetoCareers(event) {
        this.HomePage = false;
        this.Games = false;
        this.Contact = false;
        this.Support = false;
        this.Careers = event.detail;
        this.AboutUs = false;
      }

      hanldetoAboutUs(event) {
        this.HomePage = false;
        this.Games = false;
        this.Contact = false;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = event.detail;
      }

    }

    lwc.registerDecorators(Base, {
      fields: ["HomePage", "Games", "Contact", "Support", "Careers", "AboutUs"]
    });

    var base = lwc.registerComponent(Base, {
      tmpl: _tmpl
    });

    return base;

});
