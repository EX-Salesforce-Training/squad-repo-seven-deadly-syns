Webruntime.define('lwc/homePage', ['lwc', 'c/navigationBar', 'c/gameTitles', 'c/newsEvents', 'c/footer', 'c/homePage'], function (lwc, _cNavigationBar, _cGameTitles, _cNewsEvents, _cFooter, _cHomePage) { 'use strict';

  _cNavigationBar = _cNavigationBar && Object.prototype.hasOwnProperty.call(_cNavigationBar, 'default') ? _cNavigationBar['default'] : _cNavigationBar;
  _cGameTitles = _cGameTitles && Object.prototype.hasOwnProperty.call(_cGameTitles, 'default') ? _cGameTitles['default'] : _cGameTitles;
  _cNewsEvents = _cNewsEvents && Object.prototype.hasOwnProperty.call(_cNewsEvents, 'default') ? _cNewsEvents['default'] : _cNewsEvents;
  _cFooter = _cFooter && Object.prototype.hasOwnProperty.call(_cFooter, 'default') ? _cFooter['default'] : _cFooter;
  _cHomePage = _cHomePage && Object.prototype.hasOwnProperty.call(_cHomePage, 'default') ? _cHomePage['default'] : _cHomePage;

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return "html" + shadowSelector + "\r{background-color: darkgrey;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      c: api_custom_element
    } = $api;
    return [api_custom_element("c-navigation-bar", _cNavigationBar, {
      key: 0
    }, []), api_custom_element("c-game-titles", _cGameTitles, {
      key: 1
    }, []), api_custom_element("c-news-events", _cNewsEvents, {
      key: 2
    }, []), api_custom_element("c-footer", _cFooter, {
      key: 3
    }, [])];
  }

  var _tmpl = lwc.registerTemplate(tmpl);
  tmpl.stylesheets = [];

  if (_implicitStylesheets) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
  }
  tmpl.stylesheetTokens = {
    hostAttribute: "lwc-homePage_homePage-host",
    shadowAttribute: "lwc-homePage_homePage"
  };

  function tmpl$1($api, $cmp, $slotset, $ctx) {
    const {
      c: api_custom_element
    } = $api;
    return [$cmp.HomePage ? api_custom_element("c-home-page", _cHomePage, {
      key: 0
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

  var Base$1 = lwc.registerComponent(Base, {
    tmpl: _tmpl$1
  });

  class HomePage extends Base$1 {
    constructor(...args) {
      super(...args);
      this.image1 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg";
      this.image2 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600";
      this.image3 = "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg";
      this.image4 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600";
      this.image5 = "https://media.istockphoto.com/photos/3d-gold-white-number-5-five-isolated-white-background-picture-id518070002";
    }

  }

  lwc.registerDecorators(HomePage, {
    fields: ["image1", "image2", "image3", "image4", "image5"]
  });

  var homePage = lwc.registerComponent(HomePage, {
    tmpl: _tmpl
  });

  return homePage;

});
