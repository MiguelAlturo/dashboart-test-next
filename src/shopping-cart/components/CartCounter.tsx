"use client"
import { useAppSelector } from "@/store"
import { addOne, initCounterState, substractOne } from "@/store/counter/conterSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

interface Props {
    value?: number
}

export interface CounterResponse {
    method: string,
    count: number
}

const getApiCounter = async () => {
    const data = await fetch('/api/counter').then(res => res.json())
    return data

}

export const CartCounter = ({ value = 0 }: Props) => {
    console.log(value);

    const count = useAppSelector(state => state.counter.count)



    const dispatch = useDispatch()
    // const [num, setNum] = useState(value);
    // useEffect(() => {
    //     dispatch(initCounterState(value))
    // }, [dispatch, value]);
    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispatch(initCounterState(count)))
    }, [dispatch]);

    return (
        <>
            <span className="text-9xl"> {count}</span>
            <div className="flex">

                <button
                    onClick={() => dispatch(substractOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
                <button
                    onClick={() => dispatch(addOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
            </div>
        </>

    )
}