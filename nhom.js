const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    alert("Trun iu Bống nhìu ạaaaaaaaaa😍😍");
    window.location.href = "https://xitrun711.github.io/tim/";
});