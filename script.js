const sumbit = document.getElementById("submit");
const qr_img = document.getElementById("qr-img");
const container = document.getElementById("container");
sumbit.addEventListener("click", () => {
  let urlValue = document.getElementById("url").value;
  if (isUrlValid(urlValue)) {
    console.log(urlValue);
    const qr =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      urlValue;
    qr_img.src = qr;
    sumbit.hidden = true;
    container.innerHTML += `<button class="btn btn-primary" id="reload">Generate Again! <i class="fa-solid fa-arrows-rotate"></i></button>`;
    const reloadPage = document.getElementById('reload');
    reloadPage.addEventListener('click',()=> location.reload());
  } else {
    document.getElementById("url").classList.add('url-color')
    document.getElementById("url").value = "Not a valid URL!"
    setTimeout(() => {
      document.getElementById("url").value = "https://www.google.com";
      document.getElementById("url").classList.remove('url-color');
    }, 1000);
    console.log("Not a valid url!");
  }
});
function isUrlValid(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
