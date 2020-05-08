const argv = require('../config/yargs.js').argv;

// importar archivos desde nuestro proyecto
const {crearArchivo, listarTabla	} = require('../multiplicar/multiplicar.js');

//este comando sirve para encontrar la posición del comando 'listar, crear, etc'
console.log(argv._[0]); 
let comando = argv._[0];
switch(comando){
	case 'listar':
		listarTabla(argv.base,argv.limite);
		break;

	case 'crear':
		console.log('crear');
		crearArchivo(argv.base,argv.limite)
			.then(archivo=>console.log(`archivo creado: ${archivo}`))
			.catch(e=>console.log(e));


		break;

	default:
		console.log('comando no reconocido');

}
//console.log(argv);

// en este caso se le envian los argumentos directamente desde la terminal 
//se usa en este caso la palabra process.argv para poder introducir argumentos


//console.log('Limite', argv.limite);
//console.log(argv1);

/*
//se separan los argumentos para encontrar el que necesitamos al ingresar en la terminal la base

let parametro = argv[2];
//se usa parametro.split para separar por el = la base y tomar el segundo argumento, que es [1]
// no olvidar que se cuenta desde cero
let base = parametro.split('=')[1]
  
*/

