import { useState } from "react";
import { AddCategory, GifGrid } from "./components";//Importado desde /components //Como Barril
//import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']); //Valores Iniciales //Este es el FAmosos Hook
    
    const onAddCategory = ( onNewCategory ) => {
        //categories.push('Mazinger Z');//No usar .push
        if ( categories.includes( onNewCategory )) return;//Valida si la nueva categoria existe

        setCategories( [ onNewCategory, ...categories ] ); //Primera forma //Puede cambiarse el orden
        //setCategories( cat => [...cat, 'Mazinger Z']);//Segunda forma 
    };

  return (
    <>
        
        { /* Titulo */ }
        <h1>GIF Search APP</h1>

        {/* Input */}
        <AddCategory //Componente
            //setCategories={ setCategories }//
            onNewCategory={ onAddCategory }//Propiedad del componente // Emite el valor a agregar como value
            
        />

        {/* Listado */}
        
        { 
            categories.map( (category) => (
                //Incluir el nuevo componente (Update)
                //<li key={ category }> { category } </li>//Iteraciones siempre con key - value
                <GifGrid 
                    key={ category } 
                    category={ category}/>    
            ))        
        }

    </>
  )
}
