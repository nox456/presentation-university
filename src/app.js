const letters = Array.from(document.querySelectorAll(".letter"));

letters.forEach((letter) => {
    letter.addEventListener("click", () => {
        letter.classList.toggle("letter-disactive");
        letter.classList.toggle("letter-active");
        const allLettersIsActive = letters.every((letter) =>
            letter.classList.contains("letter-active"),
        );
        if (allLettersIsActive) {
            setTimeout(() => {
                const header = document.querySelector("header");
                header.classList.remove("hidden");
                setTimeout(() => {
                    const img = header.querySelector("img");
                    img.classList.replace("opacity-0", "opacity-1");
                }, 300);
                document.body.classList.replace(
                    "justify-center",
                    "justify-around",
                );
                const main = document.querySelector("main");
                main.children[0].classList.add("opacity-0");
                main.children[1].classList.add("opacity-0");
                main.children[2].classList.add("opacity-0");
                main.children[3].classList.add("opacity-0");
                setTimeout(() => {
                    main.children[0].classList.add("hidden");
                    main.children[1].classList.add("hidden");
                    main.children[2].classList.add("hidden");
                    main.children[3].classList.add("hidden");
                }, 1000);
                main.children[4].classList.replace("opacity-0", "opacity-1");
                main.children[4].classList.remove("h-0");
            }, 1000);
        }
    });
});
