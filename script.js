const validateWord = new RegExp(
    /Bagaimana cara memulai usaha bisnis|Bootcamp impact byte|Status covid hari ini/g
);

const button3 = document.getElementById("button3");

button3.addEventListener("click", () => {
    const kata = document.getElementById("text3").value;
    if (validateWord.test(kata) == true) {
        alert(`Oke! Ketemu`);
    } else {
        alert("Maaf Tidak Ditemukan");
    }
});
