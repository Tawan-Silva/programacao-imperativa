function microondasSuperVeloz(opcao, tempo){
    if(opcao < 1 || opcao > 5) {
        console.log("Opção Inexistente!");
        console.log("Digite uma opção de 1 a 5");
    }   
            // Pipoca
    if(opcao == 1 && tempo >= 10 && tempo < 20){
        console.log("Pipoca pronta, bom apetite!");
    } 

    if(opcao == 1 && tempo >= 30) {
        console.log("Kabumm!");
    }

    if(opcao == 1 && tempo < 10) {
        console.log("Tempo insuficiente para fazer a pipoca");
    }
    
    if(opcao == 1 && tempo >= 20) {
        console.log("A pipoca queimou!");
    }
            // Macarrão
    if(opcao == 2 && tempo >= 8 && tempo < 16){
        console.log("Macarrão pronto, bom apetite!");
    } 

    if(opcao == 2 && tempo >= 24) {
        console.log("Kabumm!");
    }

    if(opcao == 2 && tempo < 8) {
        console.log("Tempo insuficiente para fazer o macarrão");
    }
    
    if(opcao == 2 && tempo >= 16) {
        console.log("A macarrão queimou!");
    }
            // Carne
    if(opcao == 3 && tempo >= 15 && tempo < 30){
        console.log("Carne pronta, bom apetite!");
    } 

    if(opcao == 3 && tempo >= 45) {
        console.log("Kabumm!");
    }

    if(opcao == 3 && tempo < 15) {
        console.log("Tempo insuficiente para fazer a carne");
    }
    
    if(opcao == 3 && tempo >= 30) {
        console.log("A comida queimou!");
    }
            // Feijão
    if(opcao == 4 && tempo >= 12 && tempo < 24){
        console.log("Feijão pronto, bom apetite!");
    } 

    if(opcao == 4 && tempo >= 36) {
        console.log("Kabumm!");
    }

    if(opcao == 4 && tempo < 12) {
        console.log("Tempo insuficiente para fazer o feijão");
    }
    
    if(opcao == 4 && tempo >= 24) {
        console.log("O feijão queimou!");
    }
            // Brigadeiro
    if(opcao == 5 && tempo >= 8 && tempo < 16){
        console.log("Feijão pronto, bom apetite!");
    } 

    if(opcao == 5 && tempo >= 48) {
        console.log("Kabumm!");
    }

    if(opcao == 5 && tempo < 8) {
        console.log("Tempo insuficiente para fazer o feijão");
    }
    
    if(opcao == 5 && tempo >= 32) {
        console.log("O feijão queimou!");
    }
}

microondasSuperVeloz(3, 20);
