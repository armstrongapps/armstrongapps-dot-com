window.onload = function() {
    loadHeader();
    loadContent();
    loadFooter();
};

function loadHeader() {
    fetch('../html-layout/header.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('header-element').innerHTML = text)
}

function loadFooter() {
    fetch('../html-layout/footer.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('footer-element').innerHTML = text)
}

function loadContent() {
    fetch('../html-content/main.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content-element').innerHTML = text)
}