function open_menu(){
    var x = document.getElementById("appear");
    if (x.className === 'appear_menu_mobiel'){
        x.className += ' open';
        document.getElementById("appear").style.transition = "2s";
    }
    else{
        x.className = 'appear_menu_mobiel';
    }
    
}