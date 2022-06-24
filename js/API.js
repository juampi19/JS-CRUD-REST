const url = 'http://localhost:4000/clientes';

/**
 * POST => para la creacion de datos, independiente del backEnd se utiliza el metodo POST,
 * body => Contenido de la petición, puede ser string u objeto
 * headers => Informacion de los tipos de datos que estamos mandando
 */


//Funcion POST para agregar un cliente
const nuevoCliente = async ( cliente ) => {
    
    try {
        
        await fetch( url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        } );

        window.location.href = 'index.html';

    } catch (error) {
        console.log( error );
    }
}

// funcion GET para mostrar los clientes
const obtenerClientes = async () =>  {

    try {

        const resultado = await fetch( url );

        return await resultado.json();

        
    } catch (error) {
        console.log( error );
    }

}

//Funcion DELETE para eliminar cliente
const eliminarCliente = async( id ) => {
    try {
        await fetch( `${ url }/${ id }`, {
            method: 'DELETE',  
        } );
    } catch (error) {
        console.log( error );
    }
}

//Funcion PUT para editar clientes, se debe con hacer con body y headers
const editarCliente = async( cliente ) => {
    
    try {
        await fetch( `${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        } );
    
        window.location.href = 'index.html'
    } catch (error) {
        console.log( error );
    }
}



//Metodo get para obtener un solo cliente
const obtenerCliente = async ( id ) => {
    try {
      
        const resultado = await fetch( `${url}/${id}` );
        return await resultado.json();

    } catch (error) {
        console.log( error )
    }
}

export {
    nuevoCliente,
    obtenerClientes,
    eliminarCliente,
    obtenerCliente,
    editarCliente
}