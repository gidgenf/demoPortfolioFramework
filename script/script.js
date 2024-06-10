function changeText() {

    const activeItem = document.querySelector('#carouselExample .carousel-item.active img');
    const altText = activeItem.getAttribute('alt');
    let textContent = document.getElementById('project-description');

    if (altText == "colors") {
        textContent.textContent = "Coursera practical task where I practice the use of media queries";
    } else if (altText == "learnj") {
        textContent.textContent = "Learn japanese in an interactive way through cards with its characters";
    } else if (altText == "pokecards") {
        textContent.textContent = "A pokemon card finder using the pokemon API showing its attributes, stats, images as a card";
    }
}

document.getElementById('carouselExample').addEventListener('slid.bs.carousel', changeText);

document.addEventListener('DOMContentLoaded', changeText);