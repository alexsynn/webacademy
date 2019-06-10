var myGlobalFlagIsPainting = false;
var body = document.body;

function createElem(times) {

    for (var i = 1; i <= times; i++) {
        var div = document.createElement('div');
        body.appendChild(div);
    }
}

function fillDiv() {
    var divCollection = document.getElementsByTagName('div');
    for (var i = 0; i < divCollection.length; i++) {
        var divElem = divCollection[i];
        if (divElem) {
            divElem.onmouseover = function () {
                if (myGlobalFlagIsPainting) {
                    this.classList.add("fill");
                }
            }
        }
    }
}

createElem(5000);
body.onclick = function () {
    if (myGlobalFlagIsPainting === false) {
        myGlobalFlagIsPainting = true;
    } else {
        if (myGlobalFlagIsPainting) {
            myGlobalFlagIsPainting = false;
        }
    }
    fillDiv();
};

////----------------------------------------










