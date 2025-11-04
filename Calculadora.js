
//Operadores y funciones

function sumar(a,b){
  return a+b;
}

function restar(a,b){
  return a-b;
}

function multi(a,b){
  return a*b;
}

function divi(a,b){
  if (b==0){
    return console.log("Error: no se puede dividir por cero");
  }else{
    return a/b;
  }
}

function modulo(a,b){
  if (b==0){
    return console.log("Error: no se puede dividir por cero");
  }else{
    return a%b;
  }
}
   
function potencia(a,b){
    if (b==0){
      return 1;
    }else{
      return a**b;
    }
  }       

function raiz(a){
  if (a<0){
    return console.log("Error: no se puede calcular la raíz cuadrada de un numero negativo");
  }else{
    return a**0.5;
  }
}
   

function menu(option) {
    console.log("--- Calculadora ----")
    console.log("1.Sumar")
    console.log("2.Restar")
    console.log("3.Multiplicar")  
    console.log("4.Dividir")
    console.log("5.Módulo")
    console.log("6.Potencia")
    console.log("7.Raíz cuadrada")
   
  switch (option) {
    case "1":
      console.log("El resultado de la suma es:");
      console.log(sumar(2,2));
      break;
    case "2":
      console.log("El resultado de la resta es:");
      console.log(restar(2,2));
      break;
    case "3":
      console.log("El resultado de la multiplicación es:");
      console.log(multi(2,2));
      break;
    case "4":
      console.log("El resultado de la division es:");
      console.log(divi(2,2));
      break;
    case "5":
      console.log("El resultado del modulo es:");
      console.log(modulo(2,2));
      break;
    case "6":
      console.log("El resultado de la potencia es:");
      console.log(potencia(2,2));
      break;
    case "7":
      console.log("El resultado de la raiz es:");
      console.log(raiz(2));
      break;
    default:
      console.log("Ingrese una opción válida");
  }
    
}

menu("1")