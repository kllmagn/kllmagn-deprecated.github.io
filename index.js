const url = "https://meridiz.github.io";

function redirector(e) {
    if (e.key == "*") {
        window.location.replace(url);
    }

    if (e.key == "/") {
        showGrips();
    }
}

document.body.addEventListener('keyup', redirector);

function animate({timing, draw, duration, loop}) {

    let start = performance.now();
    let backwards = false;

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction;

        if (backwards) {
            timeFraction = 1 - (time - start) / duration;
        }
        else {
            timeFraction = (time - start) / duration;
        }

        if (loop) {
            if (!backwards && timeFraction >= 1) {
                start = performance.now();
                backwards = true;

            } else if (backwards && timeFraction <= 0) {
                start = performance.now();
                backwards = false;
            }
        }

        if (timeFraction > 1) timeFraction = 1;
        if (timeFraction < 0) timeFraction = 0;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (loop || timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

function showGrips() {

    var audio = new Audio('https://thirdworlds.net/sites/default/files/albums/government-plates/01youmightthinkhelovesyouforyourmoneybutiknowwhathereallylovesyouforitsyourbrandnewleopardskinpillbo_0.m4a');
    audio.play();

    let elems = document.querySelectorAll("img")

    for (var i = 0, elem; elem = elems[i]; i++) {
        elem.src = "https://c.tenor.com/DBnigLNWjdUAAAAd/death-grips-mc-ride.gif";
    }

    wrapper = document.createElement("div");
    elem = document.createElement("img");
    elem.src = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Death_grips_2014_%28cropped%29.jpg";
    wrapper.style.position = "fixed";
    wrapper.style.top = '10%';
    wrapper.style.width = '50%';
    elem.style.width = '50%';
    text = document.createElement("div");
    text.textContent = "IM IN YOUR AREA";
    wrapper.appendChild(elem);
    wrapper.appendChild(text);
    document.body.appendChild(wrapper);
    animate({
        duration: 10000,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            wrapper.style.left = progress * 100 + '%';
        },
        loop: true
    });
}