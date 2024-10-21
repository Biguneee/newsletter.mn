document.addEventListener(
    "click",
    function (event) {
        var target = event.target;
        var replyForm;
        if (target.matches("[data-toggle='reply-form']")) {
            replyForm = document.getElementById(target.getAttribute("data-target"));
            replyForm.classList.toggle("d-none");
        }
    },
    false
);

// Display today's date in 'YYYY.MM.DD' format under the header
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.querySelector('.date'); // Select the date element
    const today = new Date();
    const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
    dateElement.textContent = formattedDate; // Set the formatted date text
});