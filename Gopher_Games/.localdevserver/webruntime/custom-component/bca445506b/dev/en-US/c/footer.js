Webruntime.define('lwc/footer', ['lwc'], function (lwc) { 'use strict';

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return ".footNav" + shadowSelector + "\r{display: flex;justify-content: center;}\n.navLinks" + shadowSelector + "\r{padding: 5px;list-style-type: none;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      t: api_text,
      h: api_element
    } = $api;
    return [api_element("div", {
      classMap: {
        "footer": true
      },
      key: 14
    }, [api_element("div", {
      key: 13
    }, [api_element("ul", {
      classMap: {
        "footNav": true
      },
      key: 12
    }, [api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 1
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 0
    }, [api_text("Home")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 3
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 2
    }, [api_text("Games")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 5
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 4
    }, [api_text("Contact")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 7
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 6
    }, [api_text("Support")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 9
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 8
    }, [api_text("Careers")])]), api_element("li", {
      classMap: {
        "navLinks": true
      },
      key: 11
    }, [api_element("a", {
      attrs: {
        "href": "testPage.html"
      },
      key: 10
    }, [api_text("About Us")])])])])])];
  }

  var _tmpl = lwc.registerTemplate(tmpl);
  tmpl.stylesheets = [];

  if (_implicitStylesheets) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
  }
  tmpl.stylesheetTokens = {
    hostAttribute: "lwc-footer_footer-host",
    shadowAttribute: "lwc-footer_footer"
  };

  class Footer extends lwc.LightningElement {
    /*
    HomePage; 1
    Games;    2
    Contact;  3
    Support;  4
    Careers;  5
    AboutUs;  6
    */
    navigationToHome() {
      const selectedEvent = new CustomEvent("navigationswitch", {
        detail: 1
      });
      this.dispatchEvent(selectedEvent);
    }

    navigationToGames() {
      const selectedEvent = new CustomEvent("navigationswitch", {
        detail: 2
      });
      this.dispatchEvent(selectedEvent);
    }

    navigationToContact() {
      const selectedEvent = new CustomEvent("navigationswitch", {
        detail: 3
      });
      this.dispatchEvent(selectedEvent);
    }

    navigationToSupport() {
      const selectedEvent = new CustomEvent("navigationswitch", {
        detail: 4
      });
      this.dispatchEvent(selectedEvent);
    }

    navigationToCareers() {
      const selectedEvent = new CustomEvent("navigationswitch", {
        detail: 5
      });
      this.dispatchEvent(selectedEvent);
    }

    navigationToAboutUs() {
      const selectedEvent = new CustomEvent("navigationswitch", {
        detail: 6
      });
      this.dispatchEvent(selectedEvent);
    }

  }

  var footer = lwc.registerComponent(Footer, {
    tmpl: _tmpl
  });

  return footer;

});
