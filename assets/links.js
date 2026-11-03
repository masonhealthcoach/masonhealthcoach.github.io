// Free 15-minute call. Paste the Calendly link for the free call between the quotes,
// e.g. "https://calendly.com/yourname/free-15-min-call". Every "free call" button on the site updates.
// While it's empty, the buttons open an Instagram DM instead.
window.CALL_LINK = "";
window.callHref = function(){ return window.CALL_LINK || "https://ig.me/m/mason_havenstein_wellness"; };
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll("a[data-call]").forEach(function(a){ a.href = window.callHref(); a.target = "_blank"; a.rel = "noopener"; });
});
