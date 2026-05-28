/* ==========================================================================
   Marin & West — interactions, rendering & motion
   Vanilla JS. GSAP + Lenis are progressive enhancements (optional).
   Everything degrades gracefully if a CDN script is unavailable.
   ========================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var LISTINGS = window.LISTINGS || [];
  var COMMUNITIES = window.COMMUNITIES || [];
  var TESTIMONIALS = window.TESTIMONIALS || [];
  var AWARDS = window.AWARDS || [];
  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ----------------------------- helpers -------------------------------- */
  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }
  function $all(sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  }
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs)
      Object.keys(attrs).forEach(function (k) {
        n.setAttribute(k, attrs[k]);
      });
    if (html != null) n.innerHTML = html;
    return n;
  }
  function money(n) {
    if (n >= 1000000) {
      var m = n / 1000000;
      return "$" + (m % 1 === 0 ? m.toFixed(0) : m.toFixed(2)) + "M";
    }
    return "$" + n.toLocaleString("en-CA");
  }
  function bySlug(slug) {
    for (var i = 0; i < LISTINGS.length; i++)
      if (LISTINGS[i].slug === slug) return LISTINGS[i];
    return null;
  }
  // Graceful image fallback (if an Unsplash URL fails, fade in a tint)
  function imgFallback(img) {
    img.addEventListener("error", function () {
      img.style.background =
        "linear-gradient(135deg,#1f3a2e,#0e1311)";
      img.style.minHeight = "200px";
    });
  }

  /* =====================================================================
     CHROME — header, mobile menu, footer (one source of truth = SITE)
     ===================================================================== */
  var NAV = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "Listings", href: "listings.html", key: "listings" },
    { label: "Communities", href: "communities.html", key: "communities" },
    { label: "About", href: "about.html", key: "about" },
    { label: "Sell", href: "sell.html", key: "sell" },
    { label: "Contact", href: "contact.html", key: "contact" },
  ];

  function buildHeader() {
    var host = $("#header");
    if (!host) return;
    var page = document.body.getAttribute("data-page");
    var links = NAV.map(function (n) {
      var cur = n.key === page ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + ">" + n.label + "</a>";
    }).join("");

    host.innerHTML =
      '<div class="container">' +
      '<a class="logo" href="index.html" aria-label="' +
      SITE.brand +
      ' home">' +
      '<span class="logo__name">' +
      SITE.brand +
      "</span>" +
      '<span class="logo__sub">' +
      SITE.tagline +
      "</span>" +
      "</a>" +
      '<nav class="nav" aria-label="Primary">' +
      '<div class="nav__links">' +
      links +
      "</div>" +
      '<a class="btn btn--brass nav__cta" href="contact.html">Book a Consultation</a>' +
      '<button class="nav__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">' +
      "<span></span><span></span><span></span></button>" +
      "</nav>" +
      "</div>";

    // Mobile drawer
    var drawer = el("div", { class: "mobile-menu", id: "mobileMenu" });
    drawer.innerHTML =
      NAV.map(function (n) {
        return '<a href="' + n.href + '">' + n.label + "</a>";
      }).join("") +
      '<div class="mobile-menu__foot">' +
      '<a href="' +
      SITE.agent.phoneHref +
      '">' +
      SITE.agent.phone +
      "</a>" +
      '<a href="' +
      SITE.agent.emailHref +
      '">' +
      SITE.agent.email +
      "</a>" +
      "</div>";
    document.body.appendChild(drawer);

    var toggle = $("#navToggle");
    function closeMenu() {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $all("a", drawer).forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    // Scroll state. Pages without a dark hero get a solid header immediately
    // so the (otherwise light) header text stays legible over light content.
    var hasHero = !!($(".hero") || $(".page-hero"));
    function onScroll() {
      host.classList.toggle("scrolled", !hasHero || window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function buildFooter() {
    var host = $("#footer");
    if (!host) return;
    var year = new Date().getFullYear();
    var quick = NAV.map(function (n) {
      return '<a href="' + n.href + '">' + n.label + "</a>";
    }).join("");
    var communities = COMMUNITIES.map(function (c) {
      return '<a href="communities.html">' + c.name + "</a>";
    }).join("");

    host.innerHTML =
      '<div class="container">' +
      '<div class="footer-grid">' +
      '<div class="footer-col footer-brand">' +
      '<span class="logo__name">' +
      SITE.brand +
      "</span>" +
      "<p>" +
      "Boutique luxury real estate advisory serving Greater Victoria and the " +
      "Saanich Peninsula. By referral, and by reputation." +
      "</p>" +
      '<div class="flex-cta" style="margin-top:1.5rem">' +
      '<a class="btn btn--ghost" href="' +
      SITE.agent.phoneHref +
      '">Call ' +
      SITE.agent.phone +
      "</a></div>" +
      "</div>" +
      '<div class="footer-col"><h4>Explore</h4>' +
      quick +
      "</div>" +
      '<div class="footer-col"><h4>Communities</h4>' +
      communities +
      "</div>" +
      '<div class="footer-col"><h4>Get in touch</h4>' +
      '<a href="' +
      SITE.agent.emailHref +
      '">' +
      SITE.agent.email +
      "</a>" +
      '<a href="' +
      SITE.agent.phoneHref +
      '">' +
      SITE.agent.phone +
      "</a>" +
      "<p>" +
      SITE.address +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
      "<span>© " +
      year +
      " " +
      SITE.brand +
      ". " +
      SITE.brokerage +
      "</span>" +
      "<span>Design preview · Fictional brand · Not a real listing service</span>" +
      "</div>" +
      "</div>";
  }

  /* =====================================================================
     SMOOTH SCROLL (Lenis if present) + anchor handling
     ===================================================================== */
  function initSmoothScroll() {
    if (reduceMotion || typeof window.Lenis === "undefined") return null;
    var lenis = new window.Lenis({
      duration: 1.1,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return lenis;
  }

  /* =====================================================================
     REVEAL ON SCROLL
     ===================================================================== */
  function initReveal() {
    var items = $all("[data-reveal]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (i) {
        i.classList.add("in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (i, idx) {
      // auto-stagger siblings that share a parent group
      if (i.hasAttribute("data-stagger")) {
        i.style.setProperty("--d", (idx % 6) * 0.08 + "s");
      }
      io.observe(i);
    });
  }

  function applyStagger() {
    // For grids: stagger children based on order
    $all("[data-stagger-group]").forEach(function (group) {
      $all("[data-reveal]", group).forEach(function (child, i) {
        child.style.setProperty("--d", i * 0.09 + "s");
      });
    });
  }

  /* =====================================================================
     STAT COUNTERS
     ===================================================================== */
  function animateCount(node) {
    var target = parseFloat(node.getAttribute("data-count"));
    var prefix = node.getAttribute("data-prefix") || "";
    var suffix = node.getAttribute("data-suffix") || "";
    var decimals = target % 1 !== 0 ? (target < 10 ? 1 : 0) : 0;
    if (reduceMotion) {
      node.textContent = prefix + target + suffix;
      return;
    }
    var start = null;
    var dur = 1600;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      node.textContent =
        prefix +
        (decimals
          ? val.toFixed(1)
          : Math.round(val).toLocaleString("en-CA")) +
        suffix;
      if (p < 1) requestAnimationFrame(frame);
      else node.textContent = prefix + target + suffix;
    }
    requestAnimationFrame(frame);
  }

  function initCounters() {
    var nodes = $all("[data-count]");
    if (!nodes.length) return;
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(animateCount);
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            animateCount(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  function renderStats() {
    var host = $("#statsBand");
    if (!host || !SITE.stats) return;
    host.innerHTML = SITE.stats
      .map(function (s) {
        return (
          '<div class="stat" data-reveal data-stagger>' +
          '<div class="stat__value" data-count="' +
          s.value +
          '" data-prefix="' +
          (s.prefix || "") +
          '" data-suffix="' +
          (s.suffix || "") +
          '">' +
          (s.prefix || "") +
          "0" +
          (s.suffix || "") +
          "</div>" +
          '<div class="stat__label">' +
          s.label +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  /* =====================================================================
     HERO headline word-reveal
     ===================================================================== */
  function initHero() {
    var hero = $(".hero");
    if (!hero) return;
    var title = $(".hero__title", hero);
    if (title && !reduceMotion) {
      var words = title.textContent.trim().split(/\s+/);
      title.innerHTML = words
        .map(function (w) {
          return '<span class="word"><span>' + w + "</span></span> ";
        })
        .join("");
      $all(".word > span", title).forEach(function (s, i) {
        s.style.transitionDelay = 0.25 + i * 0.07 + "s";
      });
    }
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hero.classList.add("ready");
      });
    });
    $all(".hero__media img, .page-hero__media img").forEach(imgFallback);
  }

  /* =====================================================================
     LISTING CARD render
     ===================================================================== */
  function cardHTML(l) {
    var sold = l.status.toLowerCase() === "sold";
    return (
      '<a class="card" href="listing.html?id=' +
      l.slug +
      '" data-reveal data-stagger aria-label="' +
      l.address +
      ", " +
      l.area +
      '">' +
      '<div class="card__media">' +
      '<span class="card__badge' +
      (sold ? " sold" : "") +
      '">' +
      l.status +
      "</span>" +
      '<img src="' +
      l.hero +
      '" alt="' +
      l.address +
      '" loading="lazy">' +
      '<span class="card__price">' +
      money(l.price) +
      "</span>" +
      '<span class="card__view">View ›</span>' +
      "</div>" +
      '<div class="card__body">' +
      '<div class="card__addr">' +
      l.address +
      "</div>" +
      '<div class="card__area">' +
      l.area +
      " · " +
      l.type +
      "</div>" +
      '<div class="card__meta">' +
      "<span><strong>" +
      l.beds +
      "</strong> Beds</span>" +
      "<span><strong>" +
      l.baths +
      "</strong> Baths</span>" +
      "<span><strong>" +
      l.sqft.toLocaleString() +
      "</strong> Sq Ft</span>" +
      "</div>" +
      "</div>" +
      "</a>"
    );
  }

  function renderFeatured() {
    var host = $("#featuredGrid");
    if (!host) return;
    var slugs = SITE.featured || [];
    var items = slugs.map(bySlug).filter(Boolean);
    host.innerHTML = items.map(cardHTML).join("");
    $all("img", host).forEach(imgFallback);
  }

  /* =====================================================================
     LISTINGS PAGE + filters
     ===================================================================== */
  function renderListingsPage() {
    var host = $("#listingsGrid");
    if (!host) return;
    var fArea = $("#fArea");
    var fType = $("#fType");
    var fPrice = $("#fPrice");
    var fStatus = $("#fStatus");
    var count = $("#fCount");

    // populate area + type options
    function uniq(key) {
      var set = {};
      LISTINGS.forEach(function (l) {
        set[l[key]] = 1;
      });
      return Object.keys(set).sort();
    }
    if (fArea)
      uniq("area").forEach(function (a) {
        fArea.appendChild(el("option", { value: a }, a));
      });
    if (fType)
      uniq("type").forEach(function (t) {
        fType.appendChild(el("option", { value: t }, t));
      });

    function apply() {
      var area = fArea ? fArea.value : "";
      var type = fType ? fType.value : "";
      var status = fStatus ? fStatus.value : "";
      var price = fPrice ? fPrice.value : "";
      var out = LISTINGS.filter(function (l) {
        if (area && l.area !== area) return false;
        if (type && l.type !== type) return false;
        if (status && l.status !== status) return false;
        if (price) {
          if (price === "u2" && l.price >= 2000000) return false;
          if (price === "2-4" && (l.price < 2000000 || l.price > 4000000))
            return false;
          if (price === "o4" && l.price <= 4000000) return false;
        }
        return true;
      });
      host.innerHTML = out.length
        ? out.map(cardHTML).join("")
        : '<p class="muted" style="grid-column:1/-1;padding:3rem 0">No properties match those filters. <a class="link-underline" href="#" id="clearF">Clear filters</a></p>';
      if (count)
        count.textContent =
          out.length + " " + (out.length === 1 ? "property" : "properties");
      $all("img", host).forEach(imgFallback);
      $all("[data-reveal]", host).forEach(function (n) {
        n.classList.add("in");
      });
      var clear = $("#clearF");
      if (clear)
        clear.addEventListener("click", function (e) {
          e.preventDefault();
          [fArea, fType, fPrice, fStatus].forEach(function (s) {
            if (s) s.value = "";
          });
          apply();
        });
    }
    [fArea, fType, fPrice, fStatus].forEach(function (s) {
      if (s) s.addEventListener("change", apply);
    });
    apply();
  }

  /* =====================================================================
     LISTING DETAIL
     ===================================================================== */
  function renderListingDetail() {
    var host = $("#listingDetail");
    if (!host) return;
    var params = new URLSearchParams(window.location.search);
    var l = bySlug(params.get("id")) || LISTINGS[0];
    if (!l) {
      host.innerHTML = "<p>Listing not found.</p>";
      return;
    }
    document.title = l.address + " · " + l.area + " — " + SITE.brand;

    var sold = l.status.toLowerCase() === "sold";
    var gallery = (l.gallery && l.gallery.length ? l.gallery : [l.hero])
      .slice(0, 5)
      .map(function (src, i) {
        return '<img src="' + src + '" alt="' + l.address + ' photo ' + (i + 1) + '" data-lb="' + i + '" loading="lazy">';
      })
      .join("");

    var features = (l.features || [])
      .map(function (f) {
        return "<li>" + f + "</li>";
      })
      .join("");

    // similar = other listings in different slug, up to 3
    var similar = LISTINGS.filter(function (x) {
      return x.slug !== l.slug;
    }).slice(0, 3);

    host.innerHTML =
      '<section class="section" style="padding-top:calc(var(--header-h) + 2.5rem);padding-bottom:0">' +
      '<div class="container">' +
      '<p class="breadcrumb" style="color:var(--muted)"><a href="listings.html">Listings</a> / ' +
      l.area +
      "</p>" +
      '<div class="ld-head" style="margin-top:1rem" data-reveal>' +
      "<div>" +
      '<p class="eyebrow">' +
      l.status +
      " · " +
      l.type +
      "</p>" +
      '<h1 class="h1" style="margin-top:.8rem">' +
      l.address +
      "</h1>" +
      '<p class="lead" style="margin-top:.4rem">' +
      l.area +
      ", Victoria, BC</p>" +
      "</div>" +
      '<div class="ld-price">' +
      money(l.price) +
      "</div>" +
      "</div>" +
      '<div class="ld-gallery mt-2" data-reveal>' +
      gallery +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section" style="padding-bottom:0">' +
      '<div class="container split" style="align-items:flex-start">' +
      "<div data-reveal>" +
      '<div class="ld-facts">' +
      '<div class="ld-fact"><strong>' +
      l.beds +
      "</strong><span>Bedrooms</span></div>" +
      '<div class="ld-fact"><strong>' +
      l.baths +
      "</strong><span>Bathrooms</span></div>" +
      '<div class="ld-fact"><strong>' +
      l.sqft.toLocaleString() +
      "</strong><span>Sq Ft</span></div>" +
      '<div class="ld-fact"><strong>' +
      (l.lot || "—") +
      "</strong><span>Lot</span></div>" +
      "</div>" +
      '<p class="eyebrow">The Residence</p>' +
      '<h2 class="h3" style="margin:1rem 0">' +
      l.blurb +
      "</h2>" +
      '<p class="muted">' +
      l.description +
      "</p>" +
      '<p class="eyebrow" style="margin-top:2.5rem">Features</p>' +
      '<ul class="feature-list">' +
      features +
      "</ul>" +
      '<div class="map-embed" style="margin-top:2.5rem"><div class="map-pin"><div class="dot"></div>' +
      l.area +
      ", Victoria BC</div></div>" +
      "</div>" +
      // agent card
      "<aside>" +
      '<div class="agent-card" data-reveal>' +
      '<div style="display:flex;gap:1rem;align-items:center">' +
      '<img src="' +
      SITE.agent.portrait +
      '" alt="' +
      SITE.agent.name +
      '">' +
      "<div><div style=\"font-family:var(--font-serif);font-size:1.3rem\">" +
      SITE.agent.name +
      '</div><div class="muted" style="font-size:.85rem">' +
      SITE.agent.role +
      "</div></div>" +
      "</div>" +
      '<p class="muted" style="margin:1.3rem 0;font-size:.95rem">Private viewings by appointment. Reach out for a full information package and recent comparables.</p>' +
      '<a class="btn btn--brass" style="width:100%;justify-content:center" href="' +
      SITE.agent.phoneHref +
      '">Call ' +
      SITE.agent.phone +
      "</a>" +
      '<a class="btn btn--ghost" style="width:100%;justify-content:center;margin-top:.7rem;color:var(--ink);border-color:var(--line)" href="contact.html">Request Details</a>' +
      "</div>" +
      "</aside>" +
      "</div>" +
      "</section>" +
      // similar
      '<section class="section">' +
      '<div class="container">' +
      '<div class="section-head"><p class="eyebrow">Keep Exploring</p><h2 class="h2">Similar residences</h2></div>' +
      '<div class="listing-grid" data-stagger-group>' +
      similar.map(cardHTML).join("") +
      "</div>" +
      "</div>" +
      "</section>";

    $all("img", host).forEach(imgFallback);
    initLightbox(l.gallery && l.gallery.length ? l.gallery : [l.hero]);
  }

  /* =====================================================================
     LIGHTBOX
     ===================================================================== */
  function initLightbox(images) {
    var triggers = $all("[data-lb]");
    if (!triggers.length) return;
    var box = el("div", { class: "lightbox", role: "dialog", "aria-modal": "true" });
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Close">×</button>' +
      '<button class="lightbox__nav prev" aria-label="Previous">‹</button>' +
      '<img alt="">' +
      '<button class="lightbox__nav next" aria-label="Next">›</button>';
    document.body.appendChild(box);
    var img = $("img", box);
    var idx = 0;
    function show(i) {
      idx = (i + images.length) % images.length;
      img.src = images[idx];
    }
    function open(i) {
      show(i);
      box.classList.add("open");
    }
    function close() {
      box.classList.remove("open");
    }
    triggers.forEach(function (t) {
      t.addEventListener("click", function () {
        open(parseInt(t.getAttribute("data-lb"), 10) || 0);
      });
    });
    $(".lightbox__close", box).addEventListener("click", close);
    $(".prev", box).addEventListener("click", function () {
      show(idx - 1);
    });
    $(".next", box).addEventListener("click", function () {
      show(idx + 1);
    });
    box.addEventListener("click", function (e) {
      if (e.target === box) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(idx + 1);
      if (e.key === "ArrowLeft") show(idx - 1);
    });
  }

  /* =====================================================================
     COMMUNITIES
     ===================================================================== */
  function renderCommunities(limit) {
    var host = $("#communityGrid");
    if (!host) return;
    var items = limit ? COMMUNITIES.slice(0, limit) : COMMUNITIES;
    host.innerHTML = items
      .map(function (c) {
        return (
          '<article class="community" data-reveal data-stagger>' +
          '<img src="' +
          c.image +
          '" alt="' +
          c.name +
          '" loading="lazy">' +
          '<div class="community__body">' +
          '<div class="community__stat">' +
          c.stat +
          "</div>" +
          '<h3 class="community__name">' +
          c.name +
          "</h3>" +
          '<p class="community__tag">' +
          c.tagline +
          "</p>" +
          '<p class="community__blurb">' +
          c.blurb +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
    $all("img", host).forEach(imgFallback);
  }

  /* =====================================================================
     TESTIMONIALS carousel
     ===================================================================== */
  function renderTestimonials() {
    var host = $("#testimonials");
    if (!host) return;
    var slides = TESTIMONIALS.map(function (t, i) {
      return (
        '<div class="tslide' +
        (i === 0 ? " active" : "") +
        '">' +
        '<div class="tstars">★★★★★</div>' +
        '<blockquote class="tquote">“' +
        t.quote +
        '”</blockquote>' +
        '<div class="tmeta">' +
        t.name +
        " · " +
        t.area +
        "</div>" +
        "</div>"
      );
    }).join("");
    var dots = TESTIMONIALS.map(function (_, i) {
      return (
        '<button class="tdot' +
        (i === 0 ? " active" : "") +
        '" aria-label="Testimonial ' +
        (i + 1) +
        '" data-i="' +
        i +
        '"></button>'
      );
    }).join("");
    host.innerHTML =
      '<div class="tcarousel">' +
      slides +
      '<div class="tnav">' +
      dots +
      "</div></div>";

    var slideEls = $all(".tslide", host);
    var dotEls = $all(".tdot", host);
    var cur = 0;
    var timer;
    function go(i) {
      slideEls[cur].classList.remove("active");
      dotEls[cur].classList.remove("active");
      cur = (i + slideEls.length) % slideEls.length;
      slideEls[cur].classList.add("active");
      dotEls[cur].classList.add("active");
    }
    function auto() {
      if (reduceMotion) return;
      timer = setInterval(function () {
        go(cur + 1);
      }, 6000);
    }
    dotEls.forEach(function (d) {
      d.addEventListener("click", function () {
        clearInterval(timer);
        go(parseInt(d.getAttribute("data-i"), 10));
        auto();
      });
    });
    auto();
  }

  /* =====================================================================
     AWARDS marquee
     ===================================================================== */
  function renderAwards() {
    var host = $("#awardsMarquee");
    if (!host || !AWARDS.length) return;
    var run = AWARDS.map(function (a) {
      return "<span>" + a + "</span>";
    }).join("");
    host.innerHTML = '<div class="marquee__track">' + run + run + "</div>";
  }

  /* =====================================================================
     VALUATION multi-step (mock)
     ===================================================================== */
  function initValuation() {
    var form = $("#valuationForm");
    if (!form) return;
    var steps = $all(".vstep", form);
    var pills = $all(".step-pill", form);
    var cur = 0;
    function render() {
      steps.forEach(function (s, i) {
        s.classList.toggle("active", i === cur);
      });
      pills.forEach(function (p, i) {
        p.classList.toggle("done", i < cur);
        p.classList.toggle("current", i === cur);
      });
    }
    form.addEventListener("click", function (e) {
      var next = e.target.closest("[data-next]");
      var prev = e.target.closest("[data-prev]");
      if (next) {
        // simple required check within current step
        var ok = true;
        $all("input[required],select[required]", steps[cur]).forEach(function (
          inp
        ) {
          if (!inp.value) {
            ok = false;
            inp.style.borderColor = "#b04a3a";
          }
        });
        if (!ok) return;
        if (cur < steps.length - 1) {
          cur++;
          render();
        }
      }
      if (prev && cur > 0) {
        cur--;
        render();
      }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var wrap = form.parentNode;
      wrap.innerHTML =
        '<div class="form-success">' +
        '<h3 class="h3">Your estimate is on its way ✦</h3>' +
        "<p class='muted'>Thank you — " +
        SITE.agent.name +
        " will personally prepare a complimentary, no-obligation valuation and be in touch within one business day.</p>" +
        "</div>";
    });
    render();
  }

  /* =====================================================================
     CONTACT form (mock)
     ===================================================================== */
  function initContact() {
    var form = $("#contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.innerHTML =
        '<div class="form-success">' +
        '<h3 class="h3">Message received ✦</h3>' +
        "<p class='muted'>Thank you for reaching out. " +
        SITE.agent.name +
        " will respond personally within one business day.</p>" +
        "</div>";
    });
  }

  /* =====================================================================
     Hero parallax (subtle, GSAP optional / fallback rAF)
     ===================================================================== */
  function initParallax() {
    if (reduceMotion) return;
    var layers = $all("[data-parallax]");
    if (!layers.length) return;
    var ticking = false;
    function update() {
      var y = window.scrollY;
      layers.forEach(function (layer) {
        var speed = parseFloat(layer.getAttribute("data-parallax")) || 0.15;
        layer.style.transform = "translate3d(0," + y * speed + "px,0)";
      });
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* =====================================================================
     PRELOADER
     ===================================================================== */
  function hidePreloader() {
    var pre = $("#preloader");
    if (!pre) return;
    setTimeout(function () {
      pre.classList.add("hide");
    }, 450);
  }

  /* =====================================================================
     INIT
     ===================================================================== */
  function init() {
    buildHeader();
    buildFooter();
    renderStats();
    renderFeatured();
    renderListingsPage();
    renderListingDetail();
    renderCommunities(
      document.body.getAttribute("data-page") === "home" ? 4 : 0
    );
    renderTestimonials();
    renderAwards();
    applyStagger();
    initHero();
    initValuation();
    initContact();
    initParallax();
    initSmoothScroll();
    // reveal/counters after dynamic content is in the DOM
    initReveal();
    initCounters();
    hidePreloader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("load", hidePreloader);
})();
