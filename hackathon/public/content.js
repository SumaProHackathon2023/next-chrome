var Tailwind = document.createElement("script");
Tailwind.src = "https://cdn.tailwindcss.com";
var DaisyUI = document.createElement("link");
DaisyUI.href = "https://cdn.jsdelivr.net/npm/daisyui@4.4.17/dist/full.min.css";
DaisyUI.rel = "stylesheet";
DaisyUI.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(Tailwind);
document.getElementsByTagName("head")[0].appendChild(DaisyUI);
var SpamLikeAricle = document.createElement("article");
SpamLikeAricle.id = "spam-like";
SpamLikeAricle.innerHTML = "\n<h1 class=\"text-3xl\">Spam Like</h1>\n";
document.body.appendChild(SpamLikeAricle);
