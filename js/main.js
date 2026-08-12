(function () {
  "use strict";

  var copyBtn = document.getElementById("copy-contract");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var text = copyBtn.getAttribute("data-copy") || "";
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
  var sections = [];
  navLinks.forEach(function (link) {
    var id = (link.getAttribute("href") || "").replace("#", "");
    if (id) {
      var el = document.getElementById(id);
      if (el) sections.push({ id: id, el: el, link: link });
    }
  });

  function setActive(id) {
    navLinks.forEach(function (link) {
      if ((link.getAttribute("href") || "") === "#" + id) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      observer.observe(s.el);
    });
  }
})();
