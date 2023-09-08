import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas een el use counter', () => {
    test('debe retornar los valores por defecto ', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(1);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('debe de generar el counter con valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);

    });
    test('increment deberia incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment } = result.current;
        act(() => {
            increment();
            increment();

        });
        expect(result.current.counter).toBe(3);

    })
    test('decrement deberia reducir el contador', () => {
        const { result } = renderHook(() => useCounter(5));
        const { decrement } = result.current;
        act(() => {
            decrement();
            

        });
        expect(result.current.counter).toBe(4);

    })
    test('reset deberia resetear el contador', () => {
        const { result } = renderHook(() => useCounter(5));
        const { reset,decrement } = result.current;
        act(() => {
            decrement();
            decrement();
            reset();

        });
        expect(result.current.counter).toBe(5);

    })


});