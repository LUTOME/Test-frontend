function getBotResponse(input) {
    
    
    if (input == "hola") {
        return "Hola bienvenido/a!";
    } else if (input == "adios") {
        return "Esperamos que regreses pronto!";
    } else if (input == "Me gustaría..."){
        return "Cuéntanos que estas buscando!"
    } else if (input == "Hay alguien ahí?"){
        return "Que tal, en breves te comunicaremos con un representante!"
    }   else {
        return "Creo que no te entiendo...";
    }
}