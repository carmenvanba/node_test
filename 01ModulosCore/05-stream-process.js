var stdin = process.stdin,
   stdout = process.stdout,
   person = {
       name : null,
       age : 0
   }

function saveAge(newage){
    person.age = newage;

    if( person.age >= 18 )
    {
        stdout.write( person.name + ' es mayor de edad, tiene ' + person.age + ' años\n' )
    }
    else
    {
        stdout.write( person.name + ' es menor de edad, tiene ' + person.age + ' años\n' )
    }//Fin Si
    process.exit();
}

function saveName(newname){
    person.name = newname;
    // Vuelvo a preguntar
    var question = 'Hola ' + person.name + ' ¿Cuántos años tienes?';
   
    quiz(question, saveAge);
}

//callback o siguiente funcion o lo que sea
function quiz(question, callback)
{
    stdin.resume();
    stdout.write( question + ': ' );
    
    stdin.once('data', function (res){
        callback( res.toString().trim() )
    });
}

stdin.setEncoding('utf8');
//saveName es una funcion en la que no hay parametros
//porque está el stdin abierto arriba y lo introduce el usuario
quiz('¿Como te llamas', saveName);