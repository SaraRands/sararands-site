/*
 * Privacy-conscious blog engagement metrics.
 *
 * Measures four coarse engagement milestones to help
 * evaluate the usefulness of publicly available writing.
 *
 * Intentionally limited to blog posts.
 * No cookies, persistent identifiers, exact reading times,
 * continuous scroll tracking, or care-seeking activity.
 *
 * All calculations take place locally in the browser.
 * Only milestone events are transmitted to GoatCounter.
 */

(() => {
  "use strict";

  // Respect explicit browser privacy preferences.
  if (
    navigator.globalPrivacyControl === true ||
    navigator.doNotTrack === "1" ||
    window.doNotTrack === "1"
  ) {
    return;
  }

  const articlePath = window.location.pathname;
  const reported = new Set();

  function report(milestone) {
    if (reported.has(milestone)) return;

    const gc = window.goatcounter;

    // Don't interfere with the page if analytics is unavailable.
    if (typeof gc?.count !== "function") return;

    reported.add(milestone);

    gc.count({
      path: `${articlePath}:${milestone}`,
      title: "",
      referrer: "",
      event: true
    });
  }

  // ----------------------------------------
  // Scroll depth
  // ----------------------------------------

  let scrollPending = false;

  function checkScroll() {
    scrollPending = false;

    if (document.hidden) return;

    const documentHeight =
      document.documentElement.scrollHeight;

    const visibleBottom =
      window.scrollY + window.innerHeight;

    const depth = visibleBottom / documentHeight;

    if (depth >= 0.5) report("scroll_50");
    if (depth >= 0.9) report("scroll_90");

    if (
      reported.has("scroll_50") &&
      reported.has("scroll_90")
    ) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
  }

  function onScroll() {
    if (scrollPending) return;

    scrollPending = true;
    window.requestAnimationFrame(checkScroll);
  }

  window.addEventListener("scroll", onScroll, {
    passive: true
  });

  window.addEventListener("resize", onScroll, {
    passive: true
  });

  // ----------------------------------------
  // Cumulative visible-page time
  // ----------------------------------------

  let visibleTime = 0;
  let visibleSince = document.hidden
    ? null
    : performance.now();

  function checkTime() {
    if (visibleSince !== null) {
      const now = performance.now();
      visibleTime += now - visibleSince;
      visibleSince = now;
    }

    if (document.hidden) return;

    if (visibleTime >= 30000) {
      report("visible_30s");
    }

    if (visibleTime >= 120000) {
      report("visible_120s");
    }

    if (
      reported.has("visible_30s") &&
      reported.has("visible_120s")
    ) {
      clearInterval(timer);
      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange
      );
    }
  }

  function onVisibilityChange() {
    if (document.hidden) {
      if (visibleSince !== null) {
        visibleTime += performance.now() - visibleSince;
      }

      visibleSince = null;
    } else {
      visibleSince = performance.now();
      checkTime();
    }
  }

  document.addEventListener(
    "visibilitychange",
    onVisibilityChange
  );

  const timer = setInterval(checkTime, 1000);
})();
