import { Celula } from "./Celula.js";

export class Tabuleiro extends HTMLElement {
    #eixo = 9;
    #numeroBombas = 10;
    #shadow;

    constructor(){
        super();
        this.#shadow = this.attachShadow({mode: 'open'});
    }

    #render(){
        this.#shadow.innerHTML = `
        <style>
            :host{
                display: grid;
                background-color: gray;
                grid-template-columns: repeat(9,40px);
                grid-template-rows: repeat(9,40px);
                padding: 10px;
                border: 2px solid black;
                width: max-content;
                height: max-content;
            }
        </style>
        `

        for(let i = 0; i < this.#eixo; i++){
            for(let j = 0; j < this.#eixo; j++){
                let celula = document.createElement('celula-unitaria');
                celula.eixoX = i;
                celula.eixoY = j;
                celula.id = `celula-${i}-${j}`;

                this.#shadow.appendChild(celula);
            }
        }
    }

    connectedCallback(){
        this.#render();
    }

    get eixo(){
        return this.#eixo;
    }

    get quantidadeBombas(){
        return this.#numeroBombas;
    }
}

customElements.define('tabuleiro-campominado',Tabuleiro);