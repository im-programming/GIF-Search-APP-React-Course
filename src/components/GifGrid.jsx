//Nuevo Componente
//useEffect ayuda a disparar un efecto secundario ()
//import { useEffect, useState } from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";//Reemplazado por el custom Hook
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {//Retorna la categoria como property

    //Custom Hook Para reemplazar el codigo que recupera las imagenes
    const { images, isLoading } = useFetchGifs ( category );

    return (//No olvidar el fragmento (si se necesita)//No se puede utilizar la palabra class en jsx, se usa className//Se puede esparcir las properties
    
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando ...</h2> )
            }
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }    
                        />
                    ))
                }
                
            </div>
        </>
    
  )
} 
