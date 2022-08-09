import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {//Propiedad 
  
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {//Desestructuracion del prototipo (Desde el inspect)
        setInputValue( target.value );//Valor de los nuevos eventos (cambios realizados en la app)
    };

    const onSubmit = ( event ) => {
        event.preventDefault();//Desactiva el refresco automatico
        if (inputValue.trim().length <= 1) return;//Elimina espacios adelante y atras evita que al presionar enter se cree una nueva entrada
        //setCategories( categories => [ inputValue, ...categories ]);//Incluye las categorias existentes y agrega las nuevas    
        onNewCategory( inputValue.trim() );//Mismo objetivo de la linea anterior pero usando la propiedad
        setInputValue('');//Reinicia (limpia) el campo
    }
  
    return (//El form actua como Fragment //El form refresca automaticamente la app

        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder='Buscar GIFs'
                value={ inputValue }
                onChange={ onInputChange } //Permite los cambios
            />
        </form>
        
    )
}
