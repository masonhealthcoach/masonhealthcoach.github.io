// Free 15-minute call. Paste the Calendly link for the free call between the quotes,
// e.g. "https://calendly.com/yourname/free-15-min-call". Every "free call" button on the site updates.
// While it's empty, the buttons open an Instagram DM instead.
// With a Calendly link, the booking calendar pops up on the page instead of opening a new tab.
window.CALL_LINK = "https://calendly.com/masonhealthcoach/free-15-min-call";
window.callHref = function(){ return window.CALL_LINK || "https://ig.me/m/mason_havenstein_wellness"; };

(function(){
  var isCal = /calendly\.com/.test(window.CALL_LINK || "");
  var loading = null;
  function loadCalendly(){
    if (window.Calendly) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise(function(res, rej){
      var css = document.createElement("link");
      css.rel = "stylesheet"; css.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(css);
      var s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js"; s.async = true;
      s.onload = function(){ window.Calendly ? res() : rej(); };
      s.onerror = rej;
      document.head.appendChild(s);
      setTimeout(rej, 6000);
    });
    return loading;
  }
  function setLinks(){
    document.querySelectorAll("a[data-call]").forEach(function(a){
      a.href = window.callHref(); a.target = "_blank"; a.rel = "noopener";
    });
  }
  document.addEventListener("DOMContentLoaded", function(){
    setLinks();
    if (isCal) {
      // Warm up the popup once the page has settled, so the first click opens fast.
      setTimeout(function(){ loadCalendly().catch(function(){}); }, 2500);
    }
  });
  // One handler for every free-call button, including ones added later (quiz results).
  document.addEventListener("click", function(e){
    var a = e.target.closest && e.target.closest("a[data-call]");
    if (!a || !isCal) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    var url = window.CALL_LINK + (window.CALL_LINK.indexOf("?") > -1 ? "&" : "?") + "hide_gdpr_banner=1&primary_color=4a5a2e";
    loadCalendly().then(function(){
      window.Calendly.initPopupWidget({ url: url });
    }).catch(function(){
      window.open(window.CALL_LINK, "_blank", "noopener");
    });
  });
})();
