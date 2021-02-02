// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function week(dia) {
    switch (dia) {
        case 1:
            console.log("Hoje é domingo, fim de semana");
            break;
        case 2:
            console.log("Hoje é segunda, dia útil");
            break;
        case 3:
            console.log("Hoje é terça, dia útil");
            break;
        case 4:
            console.log("Hoje é quarta, dia útil");
            break;
        case 5:
            console.log("Hoje é quinta, dia útil");
            break;
        case 6:
            console.log("Hoje é sexta, dia útil");
            break;
        case 7:
            console.log("Hoje é sábado, fim de semana");
            break;
        default:
            console.log("Dia inválido");
            break;
    }
}

week(4)