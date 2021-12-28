Webruntime.define('lwc/navigationBar', ['lwc', 'lightning/navigation'], function (lwc, navigation) { 'use strict';

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return ".header" + shadowSelector + "\r{display: flex;align-items:center;}\n.logo" + shadowSelector + "\r{width: 40%;}\n.navigation" + shadowSelector + "\r{font-size:2vw;display: flex;align-items:center;}\n.navLinks" + shadowSelector + "\r{padding: 10px;list-style-type: none;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      h: api_element,
      t: api_text
    } = $api;
    return [api_element("div", {
      classMap: {
        "header": true
      },
      key: 17
    }, [api_element("div", {
      classMap: {
        "logo": true
      },
      key: 2
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 1
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://w7.pngwing.com/pngs/56/146/png-transparent-odin-viking-age-valknut-runes-norse-mythology-others-emblem-logo-old-norse.png"
      },
      key: 0
    }, [])])]), api_element("div", {
      key: 16
    }, [api_element("ul", {
      classMap: {
        "navigation": true
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
    hostAttribute: "lwc-navigationBar_navigationBar-host",
    shadowAttribute: "lwc-navigationBar_navigationBar"
  };

  class NavigationBar extends lwc.LightningElement {}

  var navigationBar = lwc.registerComponent(NavigationBar, {
    tmpl: _tmpl
  });

  return navigationBar;

});
