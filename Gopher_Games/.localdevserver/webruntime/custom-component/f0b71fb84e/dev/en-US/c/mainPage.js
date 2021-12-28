Webruntime.define('lwc/mainPage', ['c/navigationBar', 'lwc'], function (_cNavigationBar, lwc) { 'use strict';

  _cNavigationBar = _cNavigationBar && Object.prototype.hasOwnProperty.call(_cNavigationBar, 'default') ? _cNavigationBar['default'] : _cNavigationBar;

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return "html" + shadowSelector + "\r{background-color: darkgrey;}\n.header" + shadowSelector + "\r{background-color: grey;display: flex;align-items:center;}\n.logo" + shadowSelector + "\r{margin-left: 30%;width: 20%;}\n.navigation" + shadowSelector + "\r{font-size:2vw;display: flex;}\n.navLinks" + shadowSelector + "\r{background-color: darkolivegreen;padding: 2%;list-style-type: none;}\n.flagshipTitle" + shadowSelector + "\r{margin-left: 10%;float: left;width: 40%;}\n.titles1stGroup" + shadowSelector + "\r{float: left;width: 20%;}\n.titles2ndGroup" + shadowSelector + "\r{margin-right: 10%;float: left;width: 20%;}\n.titles" + shadowSelector + "::after\r{content: \"\";clear: both;display: table;}\n.newsLeft" + shadowSelector + "\r{margin-left: 10%;float: left;width: 40%;}\n.newsRight" + shadowSelector + "\r{margin-right: 10%;float: left;width: 40%;}\n.news" + shadowSelector + "::after\r{content: \"\";clear: both;display: table;}\n.allTitles" + shadowSelector + "\r{background-color: yellow;display: flex;justify-content: center;font-size:2vw;padding: 2%;margin-right: 10%;margin-left: 10%;}\n.allNews" + shadowSelector + "\r{background-color: yellow;display: flex;justify-content: center;font-size:2vw;padding: 2%;margin-right: 10%;margin-left: 10%;}\n.btn:hover" + shadowSelector + "{background-color: darkgreen;}\na:hover" + shadowSelector + " {opacity: 90%;}\n.footNav" + shadowSelector + "\r{display: flex;justify-content: center;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      t: api_text,
      c: api_custom_element,
      h: api_element
    } = $api;
    return [api_custom_element("c-navigation-bar", _cNavigationBar, {
      key: 0
    }, [api_text("test")]), api_element("div", {
      classMap: {
        "titles": true
      },
      key: 15
    }, [api_element("div", {
      classMap: {
        "flagshipTitle": true
      },
      key: 3
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 2
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg"
      },
      key: 1
    }, [])])]), api_element("div", {
      classMap: {
        "otherTitles": true
      },
      key: 14
    }, [api_element("div", {
      classMap: {
        "titles1stGroup": true
      },
      key: 8
    }, [api_element("a", {
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
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600"
      },
      key: 4
    }, [])]), api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 7
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg"
      },
      key: 6
    }, [])])]), api_element("div", {
      classMap: {
        "titles2ndGroup": true
      },
      key: 13
    }, [api_element("a", {
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
    }, [])]), api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 12
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://media.istockphoto.com/photos/3d-gold-white-number-5-five-isolated-white-background-picture-id518070002"
      },
      key: 11
    }, [])])])])]), api_element("div", {
      classMap: {
        "allTitles": true
      },
      key: 17
    }, [api_element("a", {
      classMap: {
        "btn": true
      },
      attrs: {
        "href": "testPage.html"
      },
      key: 16
    }, [api_text("All Titles")])]), api_element("div", {
      classMap: {
        "news": true
      },
      key: 28
    }, [api_element("div", {
      classMap: {
        "newsLeft": true
      },
      key: 22
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 19
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg"
      },
      key: 18
    }, [])]), api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 21
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg"
      },
      key: 20
    }, [])])]), api_element("div", {
      classMap: {
        "newsRight": true
      },
      key: 27
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 24
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600"
      },
      key: 23
    }, [])]), api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 26
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600"
      },
      key: 25
    }, [])])])]), api_element("div", {
      classMap: {
        "allNews": true
      },
      key: 30
    }, [api_element("a", {
      classMap: {
        "btn": true
      },
      attrs: {
        "href": "testPage.html"
      },
      key: 29
    }, [api_text("All News")])]), api_element("div", {
      classMap: {
        "footer": true
      },
      key: 45
    }, [api_element("div", {
      key: 44
    }, [api_element("ul", {
      classMap: {
        "footNav": true
      },
      key: 43
    }, [api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 32
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 31
    }, [api_text("Home")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 34
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 33
    }, [api_text("Games")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 36
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 35
    }, [api_text("Contact")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 38
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 37
    }, [api_text("Support")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 40
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 39
    }, [api_text("Careers")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 42
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 41
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
