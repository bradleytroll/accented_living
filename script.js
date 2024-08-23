document.addEventListener('DOMContentLoaded', function () {
    const swatches = document.querySelectorAll('.swatch');
    const accentWall = document.getElementById('accentWall');

    swatches.forEach(swatch => {
        swatch.addEventListener('click', function () {
            const color = this.getAttribute('data-color');
            accentWall.style.backgroundColor = color;
        });
    });
});
