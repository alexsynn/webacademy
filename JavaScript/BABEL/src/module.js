export function createBlock(text) {
    var div = document.createElement('div');
    div.innerText = text;
    document.body.appendChild(div);
}