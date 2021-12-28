Webruntime.define('lwc/newsEvents', ['lwc'], function (lwc) { 'use strict';

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return ".newsLeft" + shadowSelector + "\r{margin-left: 10%;float: left;width: 40%;}\n.newsRight" + shadowSelector + "\r{margin-right: 10%;float: left;width: 40%;}\n.news" + shadowSelector + "::after\r{content: \"\";clear: both;display: table;}\n.allNews" + shadowSelector + "\r{background-color: yellow;display: flex;justify-content: center;font-size:2vw;padding: 2%;margin-right: 10%;margin-left: 10%;}\n.btn:hover" + shadowSelector + "{background-color: darkgreen;}\na:hover" + shadowSelector + " {opacity: 90%;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      h: api_element,
      t: api_text
    } = $api;
    return [api_element("div", {
      classMap: {
        "news": true
      },
      key: 10
    }, [api_element("div", {
      classMap: {
        "newsLeft": true
      },
      key: 4
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
    }, [])]), api_element("a", {
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
        "src": "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg"
      },
      key: 2
    }, [])])]), api_element("div", {
      classMap: {
        "newsRight": true
      },
      key: 9
    }, [api_element("a", {
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
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600"
      },
      key: 5
    }, [])]), api_element("a", {
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
        "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600"
      },
      key: 7
    }, [])])])]), api_element("div", {
      classMap: {
        "allNews": true
      },
      key: 12
    }, [api_element("a", {
      classMap: {
        "btn": true
      },
      attrs: {
        "href": "testPage.html"
      },
      key: 11
    }, [api_text("All News")])])];
  }

  var _tmpl = lwc.registerTemplate(tmpl);
  tmpl.stylesheets = [];

  if (_implicitStylesheets) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
  }
  tmpl.stylesheetTokens = {
    hostAttribute: "lwc-newsEvents_newsEvents-host",
    shadowAttribute: "lwc-newsEvents_newsEvents"
  };

  class NewsEvents extends lwc.LightningElement {}

  var newsEvents = lwc.registerComponent(NewsEvents, {
    tmpl: _tmpl
  });

  return newsEvents;

});
