let playerScore = 0;
let komputerScore = 0;
const scoreP = document.getElementsByClassName("sP")[0];
const scoreK = document.getElementsByClassName("sK")[0];
const result = document.getElementsByClassName("result")[0];

function getPilihanKomputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") {
    if (comp == "orang") {
      setTimeout(() => {
        playerScore++;
        scoreP.innerHTML = "score kamu :" + playerScore;
      }, 1000);
      return "menang";
    } else {
      setTimeout(() => {
        komputerScore++;
        scoreK.innerHTML = "score komputer :" + komputerScore;
        return "kalah";
      }, 1000);
      return "kalah";
    }
  }
  if (player == "orang") {
    if (comp == "gajah") {
      setTimeout(() => {
        komputerScore++;
        scoreK.innerHTML = "score komputer :" + komputerScore;
        return "kalah";
      }, 1000);
      return "kalah";
    } else {
      setTimeout(() => {
        playerScore++;
        scoreP.innerHTML = "score kamu :" + playerScore;
      }, 1000);
      return "menang";
    }
  }
  if (player == "semut") {
    if (comp == "orang") {
      setTimeout(() => {
        komputerScore++;
        scoreK.innerHTML = "score komputer :" + komputerScore;
        return "kalah";
      }, 1000);
      return "kalah";
    } else {
      setTimeout(() => {
        playerScore++;
        scoreP.innerHTML = "score kamu :" + playerScore;
      }, 1000);
      return "menang";
    }
  }
}

function putar() {
  const imgKomputerr = document.getElementsByClassName("img-komputer")[0];
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputerr.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i++ == gambar.length) i = 0;
  }, 100);
}

const pilPlayer = document.querySelectorAll("#player img");
pilPlayer.forEach((el) => {
  el.addEventListener("click", () => {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = el.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(() => {
      const parent = document.getElementsByClassName("anti-click")[0];
      const compP = document.getElementsByClassName("comp")[0];
      const imgKomputer = document.getElementsByClassName("img-komputer")[0];

      imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

      if (playerScore == 3 && komputerScore !== 0) {
        result.textContent = "Kamu Menang😎👍";
        result.style.textAlign = "center";
        result.fontSize = "1rem";
        scoreP.style.display = "none";
        scoreK.style.display = "none";
        parent.classList.add("noclick");
      }
      if (komputerScore == 3) {
        result.textContent = "Kamu Kalah 😥";
        result.fontSize = "1rem";
        result.style.textAlign = "center";
        scoreP.style.display = "none";
        scoreK.style.display = "none";
        parent.classList.add("noclick");
      }
      if (playerScore == 3 && komputerScore === 0) {
        result.textContent = "karena kamu telah berhasil menamatkan game ini, ss teks ini kirim ke gw ntar gw kasih suprise 🤞😎🤞";
        result.style.fontSize = "1.3rem";
        result.style.lineHeight = "1.5rem";
        scoreP.style.display = "none";
        scoreK.style.display = "none";
        parent.classList.add("noclick");
      }

      const info = document.getElementsByClassName("info")[0];
      if (pilihanPlayer == pilihanKomputer) return (info.innerHTML = "hasilnya " + hasil);
      else return (info.innerHTML = "kamu " + hasil);
    }, 1000);
  });
});
