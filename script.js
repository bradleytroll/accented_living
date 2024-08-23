// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'swatch'
    const swatches = document.querySelectorAll('.swatch');
    
    // Select the element representing the accent wall
    const accentWall = document.getElementById('accentWall');

    // Loop through each swatch element
    swatches.forEach(swatch => {
        // Add a click event listener to each swatch
        swatch.addEventListener('click', function () {
            // Get the color from the 'data-color' attribute of the clicked swatch
            const color = this.getAttribute('data-color');
            
            // Apply the color to the background of the accent wall
            accentWall.style.backgroundColor = color;
        });
    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     const swatches = document.querySelectorAll('.swatch');
//     const accentWall = document.getElementById('accentWall');

//     swatches.forEach(swatch => {
//         swatch.addEventListener('click', function () {
//             const color = this.getAttribute('data-color');
//             accentWall.style.backgroundColor = color;
//         });
//     });
// });
