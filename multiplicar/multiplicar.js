const fs = require('fs');

let listarTabla = (base,limite = 10)=>{
	for (let i =1; i <= limite; i++) {
			console.log (`${i} * ${base} = ${base*i}\n`)
	}			
}

// se va a hacer una funcion de promesa que devuelva la multiplicacion
let crearArchivo = (base,limite = 10)=> {
	return new Promise((resolve,reject) => {

		let data= '';

		for (var i =1; i <= limite; i++) {
			data+= `${i} * ${base} = ${base*i}\n`

		}

		fs.writeFile(`tabla-${base}.txt`, data, (err) => {
	  		if (err) reject (err);
	  			else
	  				resolve(`tabla-${base}.txt`);

	  		console.log(`se creo tabla-${base}`);

  		});
	});
}
module.exports= {
	crearArchivo,
	listarTabla
}