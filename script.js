let currentFontSize = 14; 

document.addEventListener("DOMContentLoaded", function() {
    const cm = document.getElementById("custommenu");

    document.addEventListener('contextmenu', function(event) {
        event.preventDefault(); 
        
        cm.style.visibility = 'visible';
        cm.style.left = event.pageX + 'px';
        cm.style.top = event.pageY + 'px';
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('#custommenu')) {
            cm.style.visibility = 'hidden';
        }
    });
});

function doAction(actionType) {
    switch (actionType) {
        case "copy":
            document.execCommand('copy');
            break;
        case "close":
            window.close();
            break;
        case "fontIncrease":
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + "px";
            break;
        case "fontDecrease":
            currentFontSize -= 2;
            if (currentFontSize < 10) currentFontSize = 10;
            document.body.style.fontSize = currentFontSize + "px";
            break;
        case "changeBkg":
            const hue = Math.floor(Math.random() * 360);
            document.body.style.backgroundColor = `hsl(${hue}, 70%, 90%)`;
            break;
    }
    document.getElementById("custommenu").style.visibility = 'hidden';
}