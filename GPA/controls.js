var initialViewportWidth = window.innerWidth;

window.addEventListener('resize', function() {
    var currentViewportWidth = window.innerWidth;

    if (currentViewportWidth !== initialViewportWidth) {
        // Viewport width has changed, do something here

        // Update the initialViewportWidth for the next comparison
        initialViewportWidth = currentViewportWidth;
    }
});

function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function show_menu() {
    s = document.getElementById("myBody");
    t = document.getElementById("menu_contents");
    document.getElementById("menu_button").innerHTML = "<i class='fas fa-times' onclick='hide_menu();'></i>";

    s.classList.remove('before_click');
    s.classList.add('after_click');

    t.style.display = "block";
    await sleep (10);
    if (initialViewportWidth <= 950) 
        s.style.display = 'none';

    t.classList.remove('button_unclicked');
    t.classList.add('button_clicked');
}

async function hide_menu() {
    s = document.getElementById("myBody");
    t = document.getElementById("menu_contents");
    document.getElementById("menu_button").innerHTML = "<i class='fas fa-bars' onclick='show_menu();'></i>";

    t.classList.remove('button_clicked');
    t.classList.add('button_unclicked');
    
    await sleep(200);
    t.style.display = "none";

    s.classList.remove('after_click');
    s.classList.add('before_click');
    s.style.display = 'block';

}