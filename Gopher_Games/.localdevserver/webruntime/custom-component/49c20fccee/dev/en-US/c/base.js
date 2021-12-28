Webruntime.define('lwc/base', ['lwc', 'c/navigationBar', 'c/gameTitles', 'c/newsEvents', 'c/underConstruction', 'c/footer'], function (lwc, _cNavigationBar, _cGameTitles, _cNewsEvents, _cUnderConstruction, _cFooter) { 'use strict';

    _cNavigationBar = _cNavigationBar && Object.prototype.hasOwnProperty.call(_cNavigationBar, 'default') ? _cNavigationBar['default'] : _cNavigationBar;
    _cGameTitles = _cGameTitles && Object.prototype.hasOwnProperty.call(_cGameTitles, 'default') ? _cGameTitles['default'] : _cGameTitles;
    _cNewsEvents = _cNewsEvents && Object.prototype.hasOwnProperty.call(_cNewsEvents, 'default') ? _cNewsEvents['default'] : _cNewsEvents;
    _cUnderConstruction = _cUnderConstruction && Object.prototype.hasOwnProperty.call(_cUnderConstruction, 'default') ? _cUnderConstruction['default'] : _cUnderConstruction;
    _cFooter = _cFooter && Object.prototype.hasOwnProperty.call(_cFooter, 'default') ? _cFooter['default'] : _cFooter;

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        b: api_bind,
        c: api_custom_element
      } = $api;
      const {
        _m0,
        _m1
      } = $ctx;
      return [api_custom_element("c-navigation-bar", _cNavigationBar, {
        key: 0,
        on: {
          "navigationswitch": _m0 || ($ctx._m0 = api_bind($cmp.handleNavigation))
        }
      }, []), $cmp.HomePage ? api_custom_element("c-game-titles", _cGameTitles, {
        key: 1
      }, []) : null, $cmp.HomePage ? api_custom_element("c-news-events", _cNewsEvents, {
        key: 2
      }, []) : null, !$cmp.HomePage ? api_custom_element("c-under-construction", _cUnderConstruction, {
        key: 3
      }, []) : null, api_custom_element("c-footer", _cFooter, {
        key: 4,
        on: {
          "navigationswitch": _m1 || ($ctx._m1 = api_bind($cmp.handleNavigation))
        }
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

      handleNavigation(event) {
        this.HomePage = false;
        this.Games = false;
        this.Contact = false;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;

        switch (event.detail) {
          case 1:
            this.HomePage = true;
            break;

          case 2:
            this.Games = true;
            break;

          case 3:
            this.Contact = true;
            break;

          case 4:
            this.Support = true;
            break;

          case 5:
            this.Careers = true;
            break;

          case 6:
            this.AboutUs = true;
            break;
        }
      }

      toHome(event) {
        console.log("testing");
        this.HomePage = event.detail;
        this.Games = false;
        this.Contact = false;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;
      }

      toGames(event) {
        this.HomePage = false;
        this.Games = event.detail;
        this.Contact = false;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;
      }

      toContact(event) {
        this.HomePage = false;
        this.Games = false;
        this.Contact = event.detail;
        this.Support = false;
        this.Careers = false;
        this.AboutUs = false;
      }

      toSupport(event) {
        this.HomePage = false;
        this.Games = false;
        this.Contact = false;
        this.Support = event.detail;
        this.Careers = false;
        this.AboutUs = false;
      }

      toCareers(event) {
        this.HomePage = false;
        this.Games = false;
        this.Contact = false;
        this.Support = false;
        this.Careers = event.detail;
        this.AboutUs = false;
      }

      toAboutUs(event) {
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
