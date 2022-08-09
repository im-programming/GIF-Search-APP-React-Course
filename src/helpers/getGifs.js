//Funciones fuera de los componentes
//No olvidar exportar e importar en el destino (GifGrid)


export const getGifs = async ( category ) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=Cok89Wd0n0jtLr71tdJ0qmega3PUdWLA&q=${ category }&limit=10`//url desde Postman//limit es una de las propiedades del Endpoint
    
    const response = await fetch( url );
    
    const { data } = await response.json();//Recupera la info que envia la api y la JSONnifica

    const gifs = data.map( img => ({//Creo el objeto qcon las propiedades que quiero recuperar del la llamada al API que se JSONifica en el Inspect
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}