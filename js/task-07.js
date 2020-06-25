const barRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function fontSizeChange() {
    textRef.setAttribute('style', `font-size: ${barRef.value}px`);
}
barRef.addEventListener('input', fontSizeChange);
