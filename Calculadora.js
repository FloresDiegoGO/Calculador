alert('1. SUMA 2. RESTA');
let op = parseInt(prompt('Opcion: '));

class Calcula {

  sumando(){
    
    if(op == 1){
      alert('Está sumando');
      let a = parseInt(prompt('Opcion 1: '));
      let b = parseInt(prompt('Opcion 2: '));
      document.write('SUMA: '+(a+b));
    }
    
    else if (op == 2){
      alert('Está restando');
      let a = parseInt(prompt('Opcion 1: '));
      let b = parseInt(prompt('Opcion 2: '));
      document.write('RESTA: ' + (a-b));
    }
    
    else 
      document.write('NADA: ');
    }
}
let suma1 = new Calcula();
suma1.sumando(op); 