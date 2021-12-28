Webruntime.define('lwc/mainPage', ['lwc', 'c/navigationBar', 'c/gameTitles', 'c/newsEvents', 'c/footer'], function (lwc, _cNavigationBar, _cGameTitles, _cNewsEvents, _cFooter) { 'use strict';

  _cNavigationBar = _cNavigationBar && Object.prototype.hasOwnProperty.call(_cNavigationBar, 'default') ? _cNavigationBar['default'] : _cNavigationBar;
  _cGameTitles = _cGameTitles && Object.prototype.hasOwnProperty.call(_cGameTitles, 'default') ? _cGameTitles['default'] : _cGameTitles;
  _cNewsEvents = _cNewsEvents && Object.prototype.hasOwnProperty.call(_cNewsEvents, 'default') ? _cNewsEvents['default'] : _cNewsEvents;
  _cFooter = _cFooter && Object.prototype.hasOwnProperty.call(_cFooter, 'default') ? _cFooter['default'] : _cFooter;

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
    hostAttribute: "lwc-mainPage_mainPage-host",
    shadowAttribute: "lwc-mainPage_mainPage"
  };

  class MainPage extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this.image1 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg";
      this.image2 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600";
      this.image3 = "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg";
      this.image4 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600";
      this.image5 = "https://media.istockphoto.com/photos/3d-gold-white-number-5-five-isolated-white-background-picture-id518070002";
    }

    connectedCallback() {
      /*
      for(let element of document.getElementById("testimg"))
      {
        console.log(this.imagesTest);
        element.setAttribute.src = this.imagesTest;
      }
      */
    }

  }

  lwc.registerDecorators(MainPage, {
    fields: ["image1", "image2", "image3", "image4", "image5"]
  });

  var mainPage = lwc.registerComponent(MainPage, {
    tmpl: _tmpl
  });

  return mainPage;

});
