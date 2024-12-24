// Responsive Menu
function toggleMenu() {
    const nav = document.querySelector("header nav ul");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Countdown Timer
const countdown = () => {
    const target = new Date("December 28, 2024 00:00:00").getTime();
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = target - now;

        if (distance <= 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Borders are Open!";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById("timer").innerHTML = `${days} Days Remaining`;
        }
    }, 1000);
};

countdown();
