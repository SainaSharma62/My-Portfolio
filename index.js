function updateNavbarBackground() {
    let div = document.querySelector(".nav");
    let page1 = document.querySelector("#page1");
    let page2 = document.querySelector("#page2");
    let page3 = document.querySelector("#page3");
    let page4 = document.querySelector("#page4");
    let page5 = document.querySelector("#page5");
    let lio = document.querySelector("#lio");
    let li = document.querySelectorAll(".nav ul li");

    // Check which page is currently active based on its position relative to the viewport
    let pages = [page1, page2, page3, page4, page5];
    let activePage = null;
    for (let page of pages) {
        let rect = page.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) { // 50 is just a threshold, adjust as needed
            activePage = page;
            break;
        }
    }

    // Update navbar background color based on active page
    if (activePage === page1) {
        div.style.backgroundColor = "transparent";
        lio.style.color = "hsl(346, 92%, 42%)"
        document.body.classList.remove('hover-other-pages');
        document.body.classList.add('hover-page1');

    } else {
        div.style.backgroundColor = "#D81B60";
        lio.style.color = "white"
        document.body.classList.add('hover-other-pages');
        document.body.classList.remove('hover-page1');
    }
}

// Call the function on page load and scroll
window.addEventListener("load", updateNavbarBackground);
window.addEventListener("scroll", updateNavbarBackground);
