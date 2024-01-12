import React from 'react'
import ReactDOM from 'react-dom/client'
import { Produto03 } from './Content';

interface AppProps {
    id: string
}

export default class ProdutoApp03 {
    constructor({id}: AppProps) {
        ReactDOM.createRoot(document.getElementById(id) as HTMLElement).render(
            <React.StrictMode>
                <Produto03 />
            </React.StrictMode>,
        )
    }
}