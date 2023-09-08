import React from 'react'
import { useCounter,useFetch } from '../hooks/';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';




export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter();


    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}/`)


    // debido a que la data en las 2 primeras instancias de carga es null se debe de hacer la verificacion
    //  que la data exista antes de desestructurarla para poder usar la info
const { sprites,name,id } = !!data && data;
const {front_default,front_shiny} = !!sprites && sprites


    return (
        <><h1>POKEMON</h1>
            <hr />
            {
                isLoading ?

                    (<LoadingQuote/>) 
                    :
                    (<Quote   front={front_default} shiny={front_shiny} name={name} id = {id}/>)         
            }
            <button
                className='btn btn-primary'
                disabled={isLoading}
                onClick={() => increment(1)} >
                Next Pokemon
            </button>
            <button
                className='btn btn-primary'
                disabled={isLoading}
                onClick={() => increment(10)} >
                Next Pokemon x 10
            </button>
            <button
                className='btn btn-primary'
                disabled={isLoading}
                onClick={() => increment(100)} >
                Next Pokemon x 100
            </button>


        </>
    )
}
