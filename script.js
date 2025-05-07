 const filas = document.querySelector("tbody");
            const texto = document.querySelector("#promedio");
            var total = 0;
            async function notas() {
                let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
                let data = await consulta.json();
                console.log(data);

                data.forEach((d) => {
                    filas.innerHTML += `<tr><td>${d.nombre}</td><td>${barrita(d.nota)}</td><td>${carita(d.nota)}</td></tr>`;
                    total += d.nota;
                });
                texto.innerHTML = (total/12).toFixed(1);
            }
            notas("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json").catch((error) => console.error(error));

            function carita(n){
                    var emoji;
                    if(n > 5.9){
                        emoji = "😁";
                    } else if(n == 5.9) {
                        emoji = "🙂";
                    } else {
                        emoji = "🫠";
                    }
                    return emoji
                }

            function barrita(n) {
                let ancho = (n / 7) * 100;
                let color = "#4CAF50"; 
                if (n < 4) {
                color = "#f44336"; 
                } else if (n < 5.9) {
                color = "#FFC107"; 
                }

                 return `
        <svg width="100" height="20">
            <rect width="100" height="20" fill="#ffffff" rx="4" />
            <rect width="${ancho}" height="20" fill="${color}" rx="4" />

            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${ancho > 50 ? '#fff' : '#000'}" font-size="12">${n}</text>
        </svg>
    `;

}