document.getElementById("myForm").onsubmit = function (event) {
    let isValid = true;

    // Validate each field
    isValid &= validateNonEmpty("message", "messageError");
    isValid &= validateNonEmpty("zip", "zipError");
    isValid &= validateNonEmpty("date", "dateError");
    isValid &= validateNonEmpty("name", "nameError");
    isValid &= validateNonEmpty("phone", "phoneError");
    isValid &= validateNonEmpty("email", "emailError");

    if (!isValid) {
        event.preventDefault(); // Stop form submission if validation fails
    }
};

function validateNonEmpty(inputId, errorId) {
    let inputField = document.getElementById(inputId);
    let errorField = document.getElementById(errorId);

    if (inputField.value.trim() === "") {
        errorField.textContent = `Please enter ${inputField.name}.`;
        errorField.style.display = "inline"; // Show error message
        inputField.classList.add("error-border"); // Highlight field
        return false;
    } else {
        errorField.textContent = ""; // Clear error message
        errorField.style.display = "none"; // Hide error message
        inputField.classList.remove("error-border");
        return true;
    }
}
