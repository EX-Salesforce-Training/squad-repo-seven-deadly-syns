Webruntime.define('lwc/mainPage', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_text("<body>"), api_element("div", {
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
      }, [api_text("About Us")])])])])]), api_element("div", {
        classMap: {
          "titles": true
        },
        key: 32
      }, [api_element("div", {
        classMap: {
          "flagshipTitle": true
        },
        key: 20
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
      }, [])])]), api_element("div", {
        classMap: {
          "otherTitles": true
        },
        key: 31
      }, [api_element("div", {
        classMap: {
          "titles1stGroup": true
        },
        key: 25
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 22
      }, [api_element("img", {
        styleMap: {
          "width": "100%"
        },
        attrs: {
          "alt": "image",
          "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600"
        },
        key: 21
      }, [])]), api_element("a", {
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
          "src": "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg"
        },
        key: 23
      }, [])])]), api_element("div", {
        classMap: {
          "titles2ndGroup": true
        },
        key: 30
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 27
      }, [api_element("img", {
        styleMap: {
          "width": "100%"
        },
        attrs: {
          "alt": "image",
          "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600"
        },
        key: 26
      }, [])]), api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 29
      }, [api_element("img", {
        styleMap: {
          "width": "100%"
        },
        attrs: {
          "alt": "image",
          "src": "https://media.istockphoto.com/photos/3d-gold-white-number-5-five-isolated-white-background-picture-id518070002"
        },
        key: 28
      }, [])])])])]), api_element("div", {
        classMap: {
          "allTitles": true
        },
        key: 34
      }, [api_element("a", {
        classMap: {
          "btn": true
        },
        attrs: {
          "href": "testPage.html"
        },
        key: 33
      }, [api_text("All Titles")])]), api_element("div", {
        classMap: {
          "news": true
        },
        key: 45
      }, [api_element("div", {
        classMap: {
          "newsLeft": true
        },
        key: 39
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 36
      }, [api_element("img", {
        styleMap: {
          "width": "100%"
        },
        attrs: {
          "alt": "image",
          "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg"
        },
        key: 35
      }, [])]), api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 38
      }, [api_element("img", {
        styleMap: {
          "width": "100%"
        },
        attrs: {
          "alt": "image",
          "src": "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg"
        },
        key: 37
      }, [])])]), api_element("div", {
        classMap: {
          "newsRight": true
        },
        key: 44
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 41
      }, [api_element("img", {
        styleMap: {
          "width": "100%"
        },
        attrs: {
          "alt": "image",
          "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600"
        },
        key: 40
      }, [])]), api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 43
      }, [api_element("img", {
        styleMap: {
          "width": "100%"
        },
        attrs: {
          "alt": "image",
          "src": "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600"
        },
        key: 42
      }, [])])])]), api_element("div", {
        classMap: {
          "allNews": true
        },
        key: 47
      }, [api_element("a", {
        classMap: {
          "btn": true
        },
        attrs: {
          "href": "testPage.html"
        },
        key: 46
      }, [api_text("All News")])]), api_element("div", {
        classMap: {
          "footer": true
        },
        key: 62
      }, [api_element("div", {
        key: 61
      }, [api_element("ul", {
        classMap: {
          "footNav": true
        },
        key: 60
      }, [api_element("li", {
        classMap: {
          "navLinks": true
        },
        key: 49
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 48
      }, [api_text("Home")])]), api_element("li", {
        classMap: {
          "navLinks": true
        },
        key: 51
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 50
      }, [api_text("Games")])]), api_element("li", {
        classMap: {
          "navLinks": true
        },
        key: 53
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 52
      }, [api_text("Contact")])]), api_element("li", {
        classMap: {
          "navLinks": true
        },
        key: 55
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 54
      }, [api_text("Support")])]), api_element("li", {
        classMap: {
          "navLinks": true
        },
        key: 57
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 56
      }, [api_text("Careers")])]), api_element("li", {
        classMap: {
          "navLinks": true
        },
        key: 59
      }, [api_element("a", {
        attrs: {
          "href": "testPage.html"
        },
        key: 58
      }, [api_text("About Us")])])])])]), api_text("</body>")];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
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
