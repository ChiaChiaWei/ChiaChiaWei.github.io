var currentScene = 0;

var change = function(a) {
	console.log(currentScene);
    switch (currentScene) {
        case 0:
            currentScene = 2;
            break;
        case 2:
            currentScene = a === 1 ? 10 : 3;
            break;
        case 3:
            currentScene = a === 1 ? 4 : 5;
            break;
        case 5:
            currentScene = a === 1 ? 6 : 7;
            break;
        case 7:
            currentScene = a === 1 ? 9 : 8;
            break;
        case 10:
            currentScene = a === 1 ? 4 : 11;
            break;
    }
    document.getElementById("scene").src = currentScene + ".jpg";
    console.log(currentScene);
};
