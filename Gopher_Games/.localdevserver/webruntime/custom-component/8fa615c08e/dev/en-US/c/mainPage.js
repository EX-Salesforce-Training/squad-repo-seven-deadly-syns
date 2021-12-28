Webruntime.define('lwc/mainPage', ['c/navigationBar', 'c/gameTitles', 'lwc'], function (_cNavigationBar, _cGameTitles, lwc) { 'use strict';

  _cNavigationBar = _cNavigationBar && Object.prototype.hasOwnProperty.call(_cNavigationBar, 'default') ? _cNavigationBar['default'] : _cNavigationBar;
  _cGameTitles = _cGameTitles && Object.prototype.hasOwnProperty.call(_cGameTitles, 'default') ? _cGameTitles['default'] : _cGameTitles;

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return "html" + shadowSelector + "\r{background-color: darkgrey;}\n.newsLeft" + shadowSelector + "\r{margin-left: 10%;float: left;width: 40%;}\n.newsRight" + shadowSelector + "\r{margin-right: 10%;float: left;width: 40%;}\n.news" + shadowSelector + "::after\r{content: \"\";clear: both;display: table;}\n.allTitles" + shadowSelector + "\r{background-color: yellow;display: flex;justify-content: center;font-size:2vw;padding: 2%;margin-right: 10%;margin-left: 10%;}\n.allNews" + shadowSelector + "\r{background-color: yellow;display: flex;justify-content: center;font-size:2vw;padding: 2%;margin-right: 10%;margin-left: 10%;}\n.btn:hover" + shadowSelector + "{background-color: darkgreen;}\na:hover" + shadowSelector + " {opacity: 90%;}\n.footNav" + shadowSelector + "\r{display: flex;justify-content: center;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      c: api_custom_element,
      h: api_element,
      t: api_text
    } = $api;
    return [api_custom_element("c-navigation-bar", _cNavigationBar, {
      key: 0
    }, []), api_custom_element("c-game-titles", _cGameTitles, {
      key: 1
    }, []), api_element("div", {
      classMap: {
        "news": true
      },
      key: 12
    }, [api_element("div", {
      classMap: {
        "newsLeft": true
      },
      key: 6
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 3
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg"
      },
      key: 2
    }, [])]), api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 5
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg"
      },
      key: 4
    }, [])])]), api_element("div", {
      classMap: {
        "newsRight": true
      },
      key: 11
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 8
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600"
      },
      key: 7
    }, [])]), api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 10
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600"
      },
      key: 9
    }, [])])])]), api_element("div", {
      classMap: {
        "allNews": true
      },
      key: 14
    }, [api_element("a", {
      classMap: {
        "btn": true
      },
      attrs: {
        "href": "testPage.html"
      },
      key: 13
    }, [api_text("All News")])]), api_element("div", {
      classMap: {
        "footer": true
      },
      key: 29
    }, [api_element("div", {
      key: 28
    }, [api_element("ul", {
      classMap: {
        "footNav": true
      },
      key: 27
    }, [api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 16
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 15
    }, [api_text("Home")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 18
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 17
    }, [api_text("Games")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 20
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 19
    }, [api_text("Contact")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 22
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 21
    }, [api_text("Support")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 24
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 23
    }, [api_text("Careers")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 26
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 25
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
