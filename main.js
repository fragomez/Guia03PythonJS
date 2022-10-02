addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let contador = 1, candidatoA = 0, candidatoB = 0, candidatoC = 0;
        let cantEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes: "));

        while (contador <= cantEstudiantes) {
            let voto = prompt("Ingrese el candidato por el que desea votar (A, B o C)");
            if (voto == 'A' || voto == 'a') {
                candidatoA++;
            } else if (voto == 'B' || voto == 'b') {
                candidatoB++;
            } else if (voto == 'C' || voto == 'c') {
                candidatoC++;
            }
            contador++;
        }
        let votosCandidatoA = (candidatoA / cantEstudiantes) * 100;
        let votosCandidatoB = (candidatoB / cantEstudiantes) * 100;
        let votosCandidatoC = (candidatoC / cantEstudiantes) * 100;

        let contador2 = 1;
        candidatoA = 0, candidatoB = 0, candidatoC = 0;
        if (votosCandidatoA >= 51) {
            document.querySelector("#resultado").innerHTML = `El Candidato A ganó con ${candidatoA} votos`
        } else if (votosCandidatoB >= 51) {
            document.querySelector("#resultado").innerHTML = `El Candidato B ganó con ${candidatoB} votos`
        } else if (votosCandidatoC >= 51) {
            document.querySelector("#resultado").innerHTML = `El Candidato C ganó con ${candidatoC} votos`
        } else if (votosCandidatoA == votosCandidatoB && votosCandidatoB == votosCandidatoC) {
            document.querySelector("#resultado").innerHTML = "Hay un triple empate";
        } else if (votosCandidatoA > votosCandidatoB && votosCandidatoB > votosCandidatoC) {
            let votosCandidatoA = 0, votosCandidatoB = 0;
            while (cantEstudiantes >= contador2) {
                let voto = prompt("Ingrese el candidato por el que desea votar (A o B)");
                if (voto == 'A' || voto == 'a') {
                    candidatoA++;
                } else if (voto == 'B' || voto == 'b') {
                    candidatoB++;
                }
                votosCandidatoA = (candidatoA / cantEstudiantes) * 100;
                votosCandidatoB = (candidatoB / cantEstudiantes) * 100;
                contador2++;
            }
            if (votosCandidatoA > votosCandidatoB) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato A con ${candidatoA} votos`;
            } else if (votosCandidatoB > votosCandidatoA) {
                document.querySelector("#resultado").innerHTML = `El Candidato B ganó con ${candidatoB} votos`
            } else {
                document.querySelector("#resultado").innerHTML = "Hay un empate";
            }
        } else if (votosCandidatoA > votosCandidatoC && votosCandidatoC > votosCandidatoB) {
            let votosCandidatoA, votosCandidatoC = 0;
            while (cantEstudiantes >= contador2) {
                let voto = prompt("Ingrese el candidato por el que desea votar (A o C)");
                if (voto == 'A' || voto == 'a') {
                    candidatoA++;
                } else if (voto == 'C' || voto == 'C') {
                    candidatoC++;
                }
                votosCandidatoA = (candidatoA / cantEstudiantes) * 100;
                votosCandidatoC = (candidatoC / cantEstudiantes) * 100;
                contador2++;
            }
            if (votosCandidatoA > votosCandidatoC) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato A con ${candidatoA} votos`;
            } else if (votosCandidatoC > votosCandidatoA) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato C con ${candidatoC} votos`;
            } else {
                document.querySelector("#resultado").innerHTML = "Hay un empate";
            }
        } else if (votoCandidatoB > votosCandidatoC && votosCandidatoC > votosCandidatoA) {
            let votosCandidatoB = 0, votosCandidatoC = 0;
            while (cantEstudiantes >= contador2) {
                let voto = prompt("Ingrese el candidato por el que desea votar (B o C)");
                if (voto == 'B' || voto == 'b') {
                    candidatoB++;
                } else if (voto == 'C' || voto == 'c') {
                    candidatoC++;
                }
                votosCandidatoB = (candidatoB / cantEstudiantes) * 100;
                votosCandidatoC = (candidatoC / cantEstudiantes) * 100;
                contador2++;
            }
            if (votosCandidatoB > votosCandidatoC) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato B con ${candidatoB} votos`;
            } else if (votosCandidatoC > votosCandidatoB) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato C con ${candidatoC} votos`;
            } else {
                document.querySelector("#resultado").innerHTML = "Hay un empate";
            }
        } else if (votosCandidatoB > votosCandidatoA && votosCandidatoA > votosCandidatoC) {
            let votosCandidatoA = 0, votosCandidatoB = 0;
            while (cantEstudiantes >= contador2) {
                let voto = prompt("Ingrese el candidato por el que desea votar (A o B)");
                if (voto == 'A' || voto == 'a') {
                    candidatoA++;
                } else if (voto == 'B' || voto == 'b') {
                    candidatoB++;
                }
                votosCandidatoA = (candidatoA / cantEstudiantes) * 100;
                votosCandidatoB = (candidatoB / cantEstudiantes) * 100;
                contador2++;
            }
            if (votosCandidatoA > votosCandidatoB) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato A con ${candidatoA} votos`;
            } else if (votosCandidatoB > votosCandidatoA) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato B con ${candidatoB} votos`;
            } else {
                document.querySelector("#resultado").innerHTML = "Hay un empate";
            }
        } else if (votosCandidatoC > votosCandidatoA && votosCandidatoA > votosCandidatoB) {
            let votosCandidatoA = 0, votosCandidatoC = 0;
            while (cantEstudiantes >= contador2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (A o C)");
                if (voto == 'A' || voto == 'a') {
                    candidatoA++;
                } else if (voto == 'C' || voto == 'c') {
                    candidatoC++;
                }
                votosCandidatoA = (candidatoA / cantEstudiantes) * 100;
                votosCandidatoC = (candidatoC / cantEstudiantes) * 100;
                contador2++
            }
            if (votosCandidatoA > votosCandidatoC) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato A con ${candidatoA} votos`;
            } else if (votosCandidatoC > votosCandidatoA) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato C con ${candidatoC} votos`;
            } else {
                document.querySelector("#resultado").innerHTML = "Hay un empate";
            }
        } else if (votosCandidatoC > votosCandidatoB && votosCandidatoB > votosCandidatoA) {
            let votosCandidatoB = 0, votosCandidatoC = 0;
            while (cantEstudiantes >= contador2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (C o B)");
                if (voto == 'B' || voto == 'b') {
                    candidatoB++;
                } else if (voto == 'C' || voto == 'c') {
                    candidatoC++;
                }
                votosCandidatoB = (candidatoB / cantEstudiantes) * 100;
                votosCandidatoC = (candidatoC / cantEstudiantes) * 100;
                contador2++;
            }
            if (votosCandidatoB > votosCandidatoC) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato B con ${candidatoB} votos`;
            } else if (candidatoC > candidatoB) {
                document.querySelector("#resultado").innerHTML = `El ganador es el candidato C con ${candidatoC} votos`;
            } else {
                document.querySelector("#resultado").innerHTML = "Hay un empate";
            }
        }
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);