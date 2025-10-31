<script>
document.addEventListener("DOMContentLoaded", () => {
  function fixBrazilianFlags() {
    document.querySelectorAll(".mediaInfoItem-audioLanguage").forEach(el => {
      if (el.textContent.includes("pob")) {
        el.innerHTML = el.innerHTML.replace("pob", "");
        const flag = document.createElement("img");
        flag.src = "https://flagcdn.com/w20/br.png";
        flag.alt = "Brazilian flag";
        flag.className = "flag-br";
        el.appendChild(flag);
        const label = document.createElement("span");
        label.textContent = "Portuguese (Brazil)";
        el.appendChild(label);
      }
    });
  }
  fixBrazilianFlags();
  const obs = new MutationObserver(fixBrazilianFlags);
  obs.observe(document.body, { childList: true, subtree: true });
});
</script>
