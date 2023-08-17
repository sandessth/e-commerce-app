"use client"

import {store} from './store'
import { Provider } from 'react-redux'

export function ProdProvider({children}: {children: React.ReactNode}) {
    return <Provider store = {store}>{children}</Provider>

}