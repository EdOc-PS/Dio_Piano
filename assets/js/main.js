const pianokeys = document.querySelectorAll(".keyboard .piano-key");
const volume = document.querySelector(" .volume input");
const keyscheck = document.querySelector(" .switch-notes input");

let mapKeys = [];
let audio = new Audio("assets/audio/a.wav");

const playAudio = (key) => {

    audio.src = `assets/audio/${key}.wav`;
    audio.play();

    const click = document.querySelector(`[data-key="${key}"]`);
    click.classList.add("active");
    setTimeout(() => {
        click.classList.remove("active")
    }, 150);
};
pianokeys.forEach((key) => {

    key.addEventListener("click", () => playAudio(key.dataset.key));
    mapKeys.push(key.dataset.key);
});



document.addEventListener("keydown", (e) => {
    if (mapKeys.includes(e.key)) {
        playAudio(e.key);
    }
});

const controlVolume = (e) => {
    audio.volume = e.target.value;
}

const hideKeys = () => {
    pianokeys.forEach((key => key.classList.toggle("hidden")
    ));
}
volume.addEventListener("input", controlVolume);
keyscheck.addEventListener("click", hideKeys)