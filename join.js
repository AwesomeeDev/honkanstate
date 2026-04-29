(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

function sendForm() {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const message = document.getElementById("message").value;
  const reason = document.getElementById("reason").value;

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
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
