/*
var buf = new Buffer.alloc(100),
    buf2 = new Buffer.alloc(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii');

console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + 'caracteres',
    Buffer.byteLength(str, 'utf8') + 'bytes',
    buf2.length
);
*/
var buf = Buffer.alloc(100),
    buf2 = Buffer.alloc(26),// 26 letras del abecedario
    str = '\u00bd + \u00bc = \u00be'

for ( var i = 0; i < buf2.length; i++ )
{
    buf[i] = i + 97;
 
    // Buscar que número en ascii corresponde a la a en minúsculas y completar el array buf2
}
// Pintar el array completo para ver el abecedario
console.log(buf.toString('ascii'));