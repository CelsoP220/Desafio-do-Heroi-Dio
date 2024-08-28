//Herói Vovó do Felipão
let heroi = "Vovó do Felipão";
let xpHeroi = 9500;

const valorXp = 100;
const numVezes = 5;

for (let i = 0; i < numVezes; i++) {
    xpHeroi += valorXp;
}

function obterCategoriaXP(xp) {
    let categoria;

    switch (true) {
        case (xp < 1000):
            categoria = "Ferro";
            break;
        case (xp >= 1001 && xp <= 2000):
            categoria = "Bronze";
            break;
        case (xp >= 2001 && xp <= 5000):
            categoria = "Prata";
            break;
        case (xp >= 5001 && xp <= 7000):
            categoria = "Ouro";
            break;
        case (xp >= 7001 && xp <= 8000):
            categoria = "Platina";
            break;
        case (xp >= 8001 && xp <= 9000):
            categoria = "Ascendente";
            break;
        case (xp >= 9001 && xp <= 10000):
            categoria = "Imortal";
            break;
        case (xp >= 10001):
            categoria = "Radiante";
            break;
        default:
            categoria = "Desconhecido";
    }

    return categoria;
}

const categoriaXP = obterCategoriaXP(xpHeroi);

console.log( heroi + "tem um XP total de:" + xpHeroi);
console.log("Categoria:" + categoriaXP);
