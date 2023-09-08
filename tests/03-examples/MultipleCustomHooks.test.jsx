import { fireEvent, render, screen,renderHook,act  } from "@testing-library/react";
import {MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import {  useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";


jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en MultipleCustomHooks', () => { 

    
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    })
    


    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null ,
            isloading: true ,
            hasError: null

        })
        render(<MultipleCustomHooks/>);

        // // expect(screen.getByText('Loading...'))
        // expect(screen.getByText('POKEMON'))

        // const nextButton = screen.getByRole('button',{name:'Next Pokemon'});
        // expect(nextButton.disabled).toBeTruthy();


    });
    test('debe de mostrar un pokemon', () => { 

        useFetch.mockReturnValue({
            data: {
                sprites: { front_default: "no img", front_shiny: "no img" },
                name: "missigno",
                id: 0 
        },
            isloading: false,
            hasError: null

        });
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('missigno'))
        expect(screen.getByText('POKEMON'))

        const nextButton = screen.getByRole('button',{name:'Next Pokemon'});
        expect(nextButton.disabled).toBeFalsy();

    });
    test('debe de llamar la funcion de incrementar', () => {
        



        useFetch.mockReturnValue({
            data: {
                sprites: { front_default: "no img", front_shiny: "no img" },
                name: "missigno",
                id: 0 
        },
            isloading: false,
            hasError: null

        });

        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button',{name:'Next Pokemon'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled()

     })
});

