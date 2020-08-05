// <script> </script> after body
// document.querySelector("#container").style.backgroundColor = "red"


// Find the button
document.querySelector("#add-time")
// When click on the button
.addEventListener("click", cloneField)

function cloneField() {
    // console.log("Button found")
    // Constant variable
    const newFieldContainer = document.querySelector(".schedule-item")
    // Duplicate content
    .cloneNode(true)  // Node HTML element
    // Clean content
    const fields = newFieldContainer.querySelectorAll('input')

    // console.log(fields)
    // console.log(fields[0])
    // console.log(fields[0].value)

    // fields[0].value = ""
    // fields[1].value = ""

    fields.forEach(function(field) {
        // console.log(field)
        field.value = ""
    });


    // Put on the page
    document.querySelector("#schedule-items")
    .appendChild(newFieldContainer)
}



