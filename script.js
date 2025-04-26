async function checkLock() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/Kimsenpai88/Control-panel-/main/control.json?_=" + new Date().getTime());
        const data = await response.json();

        if (data.lock) {
            let userInput = prompt("Masukkan Password untuk membuka kunci:");
            if (userInput !== data.password) {
                document.body.innerHTML = `
                    <style>
                        body {
                            background-color: black;
                            color: red;
                            font-family: 'Courier New', Courier, monospace;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            text-align: center;
                        }
                    </style>
                    <div>
                        <h1>Perangkat Terkunci!</h1>
                        <p>Kontak: Kim | Author: Kim</p>
                    </div>
                `;
            }
        }
    } catch (e) {
        console.error("Gagal memuat kontrol:", e);
    }
}

checkLock();