const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrImg = document.getElementById("qrImg");
const wrapper = document.querySelector(".wrapper");
const qrCodeDiv = document.querySelector(".qr-code");
const downloadBtn = document.getElementById("downloadBtn");
const copyBtn = document.getElementById("copyBtn");

let lastValue = "";

generateBtn.addEventListener("click", () => {
  const qrValue = qrInput.value.trim();
  if (!qrValue || qrValue === lastValue) return;

  lastValue = qrValue;
  generateBtn.innerText = "Generating...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrValue)}`;

  qrImg.onload = () => {
    qrCodeDiv.style.display = "block";
    document.querySelector(".actions").style.display = "flex";
    generateBtn.innerText = "Generate QR Code";
  };
});

downloadBtn.addEventListener("click", async () => {
  try {
    downloadBtn.innerText = "Downloading...";
    const response = await fetch(qrImg.src);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    window.open(qrImg.src, '_blank');
  } finally {
    downloadBtn.innerText = "Download";
  }
});

copyBtn.addEventListener("click", () => {
  const text = qrInput.value.trim();
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.innerText = "Copied!";
      setTimeout(() => (copyBtn.innerText = "Copy Link"), 1500);
    });
  }
});

qrInput.addEventListener("input", () => {
  if (!qrInput.value.trim()) {
    qrCodeDiv.style.display = "none";
    document.querySelector(".actions").style.display = "none";
    lastValue = "";
  }
});
