import React from 'react'
import ReactDOM from 'react-dom/client'
import { Produto02 } from './Content';

interface AppProps {
    id: string
}

export default class ProdutoApp {
    constructor({id}: AppProps) {
        ReactDOM.createRoot(document.getElementById(id) as HTMLElement).render(
            <React.StrictMode>
                <Produto02 />
            </React.StrictMode>,
        )
    }
}