Webruntime.define('lwc/gameTitles', ['lwc'], function (lwc) { 'use strict';

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return ".flagshipTitle" + shadowSelector + "\r{margin-left: 10%;float: left;width: 40%;}\n.titles1stGroup" + shadowSelector + "\r{float: left;width: 20%;}\n.titles2ndGroup" + shadowSelector + "\r{margin-right: 10%;float: left;width: 20%;}\n.titles" + shadowSelector + "::after\r{content: \"\";clear: both;display: table;}\n.allTitles" + shadowSelector + "\r{background-color: yellow;display: flex;justify-content: center;font-size:2vw;padding: 2%;margin-right: 10%;margin-left: 10%;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      h: api_element,
      t: api_text
    } = $api;
    return [api_element("div", {
      classMap: {
        "titles": true
      },
      key: 14
    }, [api_element("div", {
      classMap: {
        "flagshipTitle": true
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
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg"
      },
      key: 0
    }, [])])]), api_element("div", {
      classMap: {
        "otherTitles": true
      },
      key: 13
    }, [api_element("div", {
      classMap: {
        "titles1stGroup": true
      },
      key: 7
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 4
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600"
      },
      key: 3
    }, [])]), api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 6
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg"
      },
      key: 5
    }, [])])]), api_element("div", {
      classMap: {
        "titles2ndGroup": true
      },
      key: 12
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 9
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600"
      },
      key: 8
    }, [])]), api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 11
    }, [api_element("img", {
      styleMap: {
        "width": "100%"
      },
      attrs: {
        "alt": "image",
        "src": "https://media.istockphoto.com/photos/3d-gold-white-number-5-five-isolated-white-background-picture-id518070002"
      },
      key: 10
    }, [])])])])]), api_element("div", {
      classMap: {
        "allTitles": true
      },
      key: 16
    }, [api_element("a", {
      classMap: {
        "btn": true
      },
      attrs: {
        "href": "testPage.html"
      },
      key: 15
    }, [api_text("All Titles")])])];
  }

  var _tmpl = lwc.registerTemplate(tmpl);
  tmpl.stylesheets = [];

  if (_implicitStylesheets) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
  }
  tmpl.stylesheetTokens = {
    hostAttribute: "lwc-gameTitles_gameTitles-host",
    shadowAttribute: "lwc-gameTitles_gameTitles"
  };

  class GameTitles extends lwc.LightningElement {}

  var gameTitles = lwc.registerComponent(GameTitles, {
    tmpl: _tmpl
  });

  return gameTitles;

});
