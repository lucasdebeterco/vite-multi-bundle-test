import React from 'react'
import ReactDOM from 'react-dom/client'
import { Produto01 } from './Content';

interface AppProps {
    id: string
}

export default class ProdutoApp01 {
    constructor({id}: AppProps) {
        ReactDOM.createRoot(document.getElementById(id) as HTMLElement).render(
            <React.StrictMode>
                <Produto01 />
            </React.StrictMode>,
        )
    }
}