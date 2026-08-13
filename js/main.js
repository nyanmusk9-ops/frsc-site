(function () {
  "use strict";

  var copyBtn = document.getElementById("copy-contract");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var addr = document.getElementById("contract-address");
      var text = (addr && addr.textContent ? addr.textContent.trim() : "") ||
        copyBtn.getAttribute("data-copy") ||
        "";
      var original = copyBtn.textContent;

      function done(ok) {
        copyBtn.textContent = ok ? "Copied" : "Failed";
        setTimeout(function () {
          copyBtn.textContent = original;
        }, 1400);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          done(true);
        }).catch(function () {
          done(fallbackCopy(text));
        });
      } else {
        done(fallbackCopy(text));
      }
    });
  }

  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "absolute";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  var navLinks = document.querySelectorAll(".main-nav a");
  var path = (window.location.pathname.split("/").pop() || "index.html");
  var isHome = path === "" || path === "index.html";

  // Multi-page tabs: keep the current page highlighted
  if (!isHome) {
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      link.classList.toggle("active", href === path || href.endsWith("/" + path));
    });
  } else {
    var sections = [];
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      if (href.charAt(0) === "#") {
        var el = document.getElementById(href.slice(1));
        if (el) sections.push({ id: href.slice(1), el: el, link: link });
      }
    });

    function setActive(id) {
      navLinks.forEach(function (link) {
        var href = link.getAttribute("href") || "";
        if (href === "#" + id) link.classList.add("active");
        else if (href.charAt(0) === "#") link.classList.remove("active");
      });
    }

    if ("IntersectionObserver" in window && sections.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
      );
      sections.forEach(function (s) {
        observer.observe(s.el);
      });
    }
  }

  /* —— Live Fed desk —— */
  var liveRoot = document.getElementById("live");
  if (liveRoot) {
    var NY_EFFR = "https://markets.newyorkfed.org/api/rates/unsecured/effr/last/1.json";
    var NY_SOFR = "https://markets.newyorkfed.org/api/rates/secured/sofr/last/1.json";
    var FED_RSS = "https://www.federalreserve.gov/feeds/press_monetary.xml";
    var RSS_PROXY = "https://api.allorigins.win/raw?url=" + encodeURIComponent(FED_RSS);

    function $(id) {
      return document.getElementById(id);
    }

    function fmtPct(n) {
      if (n === null || n === undefined || isNaN(n)) return "—";
      return Number(n).toFixed(2) + "%";
    }

    function setText(id, text) {
      var el = $(id);
      if (el) el.textContent = text;
    }

    function buildReadout(effr, targetFrom, targetTo) {
      var el = $("live-readout");
      if (!el) return;
      if (effr == null) {
        el.textContent = "Rate feed unavailable right now. Charts and sources below still show the longer tape.";
        return;
      }
      var range = "";
      if (targetFrom != null && targetTo != null) {
        range = " The FOMC target range is " + fmtPct(targetFrom) + "–" + fmtPct(targetTo) + ".";
      }
      el.innerHTML =
        "Right now the <strong>effective federal funds rate</strong> is <strong>" +
        fmtPct(effr) +
        "</strong>." +
        range +
        " That is still a committee setting the price of overnight money — the core of the 2014 FRSC critique. The motto answered with code: <strong>WILL NOT BE DEVALUED COINS</strong>.";
    }

    function renderFeed(items) {
      var feed = $("live-feed");
      if (!feed) return;
      if (!items.length) {
        feed.innerHTML =
          '<li class="meta">Could not load the Board feed in this browser. <a href="' +
          FED_RSS +
          '" target="_blank" rel="noopener noreferrer">Open the official RSS directly</a>.</li>';
        return;
      }
      feed.innerHTML = items
        .map(function (item) {
          return (
            "<li><span class=\"lf-date\">" +
            item.date +
            "</span><a href=\"" +
            item.link +
            "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
            item.title +
            "</a></li>"
          );
        })
        .join("");
    }

    function parseRss(xmlText) {
      var items = [];
      try {
        var doc = new DOMParser().parseFromString(xmlText, "text/xml");
        var nodes = doc.querySelectorAll("item");
        for (var i = 0; i < nodes.length && i < 5; i++) {
          var node = nodes[i];
          var title = (node.querySelector("title") || {}).textContent || "Untitled";
          var link = (node.querySelector("link") || {}).textContent || FED_RSS;
          var pub = (node.querySelector("pubDate") || {}).textContent || "";
          var date = pub ? new Date(pub) : null;
          var dateLabel = date && !isNaN(date.getTime())
            ? date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
            : pub || "Recent";
          items.push({
            title: title.replace(/&#39;/g, "'"),
            link: link.trim(),
            date: dateLabel
          });
        }
      } catch (e) {
        items = [];
      }
      return items;
    }

    function loadRates() {
      return Promise.all([
        fetch(NY_EFFR, { cache: "no-store" }).then(function (r) { return r.json(); }),
        fetch(NY_SOFR, { cache: "no-store" }).then(function (r) { return r.json(); })
      ]).then(function (results) {
        var effrWrap = results[0] && results[0].refRates && results[0].refRates[0];
        var sofrWrap = results[1] && results[1].refRates && results[1].refRates[0];

        var effr = effrWrap ? Number(effrWrap.percentRate) : null;
        var targetFrom = effrWrap ? Number(effrWrap.targetRateFrom) : null;
        var targetTo = effrWrap ? Number(effrWrap.targetRateTo) : null;
        var sofr = sofrWrap ? Number(sofrWrap.percentRate) : null;

        setText("live-effr", fmtPct(effr));
        setText(
          "live-effr-meta",
          effrWrap && effrWrap.effectiveDate
            ? "Effective " + effrWrap.effectiveDate + " · NY Fed"
            : "NY Fed"
        );
        if (targetFrom != null && targetTo != null && !isNaN(targetFrom)) {
          setText("live-target", fmtPct(targetFrom) + " – " + fmtPct(targetTo));
        } else {
          setText("live-target", "—");
        }
        setText("live-sofr", fmtPct(sofr));
        setText(
          "live-sofr-meta",
          sofrWrap && sofrWrap.effectiveDate
            ? "Effective " + sofrWrap.effectiveDate + " · NY Fed"
            : "Secured Overnight Financing Rate"
        );
        buildReadout(effr, targetFrom, targetTo);
      }).catch(function () {
        setText("live-effr", "—");
        setText("live-target", "—");
        setText("live-sofr", "—");
        setText("live-effr-meta", "Rate API unreachable — try Refresh");
        buildReadout(null);
      });
    }

    function loadFeed() {
      return fetch(RSS_PROXY, { cache: "no-store" })
        .then(function (r) {
          if (!r.ok) throw new Error("proxy");
          return r.text();
        })
        .then(function (text) {
          renderFeed(parseRss(text));
        })
        .catch(function () {
          renderFeed([]);
        });
    }

    function refreshLive() {
      setText("live-updated", "updating…");
      return Promise.all([loadRates(), loadFeed()]).then(function () {
        setText(
          "live-updated",
          "updated " + new Date().toLocaleString(undefined, {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          })
        );
      });
    }

    var refreshBtn = $("live-refresh");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", function () {
        refreshLive();
      });
    }

    refreshLive();
    setInterval(refreshLive, 5 * 60 * 1000);
  }
})();
