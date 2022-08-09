//Custom Hook
//Un hook es una funcion que regresa algo

import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../src/helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    //Se necesita crear un useState para cargar las imagenes cada vez que sea necesario
    
    const [images, setImages] = useState([])//Se puede dejar vacio para inicializarlo o null
    const [isLoading, setIsLoading] = useState( true );//Para cargar una unica vez como un nuevo useState


    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages); 
        setIsLoading(false);//Para el nuevo useState
    }

    useEffect(() => {//
        getImages();//Se llama la funcion desde fuera siempre, no se permiten promesas, solo funciones
    }, []); //El arrglo vacio hace que la funcion se ejecute una sola vez
  
    return {
        images,
        isLoading
  }
}
