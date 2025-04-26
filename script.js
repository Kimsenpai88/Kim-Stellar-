setInterval(() => {
    fetch("https://raw.githubusercontent.com/Kimsenpai88/Control-panel-/main/control.json")
        .then(res => res.json())
        .then(data => {
            if (data.lock === true) {
                window.location.href = "locked.html";
            }
        });
}, 3000);
