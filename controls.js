document.getElementById('starting').style.textAlign = 'center';

function show_menu() {
    document.getElementById('menu_contents').style.display = 'block';
    document.getElementById('menu_button').innerHTML = "<i class='fas fa-times' onclick='hide_menu();'></i>";
}

function hide_menu() {
    document.getElementById('menu_contents').style.display = 'none';
    document.getElementById('menu_button').innerHTML = "<i class='fas fa-bars' onclick='show_menu();'></i>";
}