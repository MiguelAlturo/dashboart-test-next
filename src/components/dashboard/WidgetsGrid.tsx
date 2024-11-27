'use client'

import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"
import { IoCarOutline } from "react-icons/io5"

export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counter.count)

    return (
        <div className="flex flex-wrap p-2 justify-center">
            <SimpleWidget
                title={`${count}`}
                subTitle="Carrito de compras"
                href="/dashboard/counter"
                icon={<IoCarOutline size={70} className="text-blue-600" />}
                label="Contador"
            />
        </div>
    )
}
