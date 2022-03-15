const url = "https://meridiz.github.io";

function redirector(e) {
    if (e.key == "*") {
        window.location.replace(url);
    }
}

document.body.addEventListener('keyup', redirector);