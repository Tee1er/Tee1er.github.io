const accordionItems = document.getElementsByClassName("accordion-item");

for (element of accordionItems) {
    const accordionLabel = element.getElementsByClassName("accordion-label")[0];
    const accordionContent = element.getElementsByClassName("accordion-content")[0];
    accordionLabel.addEventListener("click", function () {
        accordionContent.classList.toggle("accordion-active");
    });
}