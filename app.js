let data = {
    A: { name: "Clap", sound: "sound/Clap.wav" },
    S: { name: "HiHat", sound: "sound/hiHat.wav" },
    D: { name: "Kick", sound: "sound/Kick.wav" },
    F: { name: "OpenHat", sound: "sound/openHat.wav" },
    G: { name: "Boom", sound: "sound/boom.wav" },
    H: { name: "Ride", sound: "sound/Ride.wav" },
    J: { name: "Sare", sound: "sound/sanre.wav" },
    K: { name: "Tom", sound: "sound/Tom.wav" },
    L: { name: "Think", sound: "sound/Tink.wav" }
};

const drumkit = document.getElementById("drumkit");

function createPads() {
    for (let key in data) {
        let pad = document.createElement("div");
        pad.classList.add("element");
        pad.setAttribute("data-key", key);

        let h2 = document.createElement("h2");
        h2.textContent = key;

        let label = document.createElement("span");
        label.textContent = data[key].name;

        pad.appendChild(h2);
        pad.appendChild(label);
        drumkit.appendChild(pad);

        pad.addEventListener("click", () => {
            playSound(key);
            triggerAnimation(key);
        });
    }
}

function playSound(key) {
    key = key.toUpperCase();
    if (data[key]) {
        const audio = new Audio(data[key].sound);
        audio.play();
    }
}

function triggerAnimation(key) {
    const pad = document.querySelector(`[data-key="${key}"]`);
    if (pad) {
        pad.classList.add("active");
        setTimeout(() => pad.classList.remove("active"), 200);
    }
}

document.addEventListener("keydown", (e) => {
    let key = e.key.toUpperCase();
    if (data[key]) {
        playSound(key);
        triggerAnimation(key);
    }
});

createPads();
