function TotalCalculate() {
  const license = parseInt(document.getElementById("license").value);
  const tracks = parseInt(document.getElementById("tracks").value);

  let Total = 0;

  if (license >= 1 && !isNaN(tracks)) {
    if (tracks <= 3) {
      Total = tracks * 2000 * license;
    } else if (tracks <= 5) {
      Total = tracks * 1800 * license;
    } else {
      Total = tracks * 1680 * license;
    }
  }

  document.getElementById("Total").value = !isNaN(Total) ? Total + "₸" : "";
}

document.addEventListener("click", function () {
  const license = document.getElementById("license");
  const tracks = document.getElementById("tracks");

  license.addEventListener("input", function () {
    if (parseInt(license.value) > 20) {
      license.value = "20";
    }
    TotalCalculate();
  });

  tracks.addEventListener("input", function () {
    if (parseInt(tracks.value) > 20) {
      tracks.value = "20";
    }
    TotalCalculate();
  });
});

const EmailButton = document.getElementById("Email");
const TelegramButton = document.getElementById("Telegram");
const EmailContent = document.querySelector(".frame-13");
const TelegramContent = document.querySelector(".frame-17");

EmailButton.addEventListener("click", function () {
  EmailContent.classList.remove("active");
  TelegramContent.classList.add("active");
});

TelegramButton.addEventListener("click", function () {
  TelegramContent.classList.remove("active");
  EmailContent.classList.add("active");
});
