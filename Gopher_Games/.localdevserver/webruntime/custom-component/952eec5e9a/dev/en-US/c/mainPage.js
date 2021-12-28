Webruntime.define('lwc/mainPage', ['c/navigationBar', 'c/gameTitles', 'c/newsEvents', 'lwc'], function (_cNavigationBar, _cGameTitles, _cNewsEvents, lwc) { 'use strict';

  _cNavigationBar = _cNavigationBar && Object.prototype.hasOwnProperty.call(_cNavigationBar, 'default') ? _cNavigationBar['default'] : _cNavigationBar;
  _cGameTitles = _cGameTitles && Object.prototype.hasOwnProperty.call(_cGameTitles, 'default') ? _cGameTitles['default'] : _cGameTitles;
  _cNewsEvents = _cNewsEvents && Object.prototype.hasOwnProperty.call(_cNewsEvents, 'default') ? _cNewsEvents['default'] : _cNewsEvents;

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return "html" + shadowSelector + "\r{background-color: darkgrey;}\n.btn:hover" + shadowSelector + "{background-color: darkgreen;}\na:hover" + shadowSelector + " {opacity: 90%;}\n.footNav" + shadowSelector + "\r{display: flex;justify-content: center;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      c: api_custom_element,
      t: api_text,
      h: api_element
    } = $api;
    return [api_custom_element("c-navigation-bar", _cNavigationBar, {
      key: 0
    }, []), api_custom_element("c-game-titles", _cGameTitles, {
      key: 1
    }, []), api_custom_element("c-news-events", _cNewsEvents, {
      key: 2
    }, []), api_element("div", {
      classMap: {
        "footer": true
      },
      key: 17
    }, [api_element("div", {
      key: 16
    }, [api_element("ul", {
      classMap: {
        "footNav": true
      },
      key: 15
    }, [api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 4
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 3
    }, [api_text("Home")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 6
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 5
    }, [api_text("Games")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 8
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 7
    }, [api_text("Contact")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 10
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 9
    }, [api_text("Support")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 12
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 11
    }, [api_text("Careers")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 14
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 13
    }, [api_text("About Us")])])])])])];
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

  class MainPage extends lwc.LightningElement {}

  var mainPage = lwc.registerComponent(MainPage, {
    tmpl: _tmpl
  });

  return mainPage;

});
