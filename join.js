(function () {
  emailjs.init("service_65o3kxs");
})();

function sendForm() {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const message = document.getElementById("message").value;
  const reason = document.getElementById("reason").value;

  emailjs.send("hyeYZ58wpy1jetnjc", "template_9z790xq", {
    subject: first + " " + last,
    message: message,
    reason: reason,
    banner: "https://awesomeedev.github.io/honkanstate/banner.jpg"
  })
  .then(() => {
    alert("Application sent successfully.");
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send application.");
  });
}
