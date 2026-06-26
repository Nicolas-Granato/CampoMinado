export class Celula extends HTMLElement{
    #shadow;
    #eixoX;
    #eixoY;
    #visualizado = false;
    #bomba = false;
    
    constructor(){
        super();
        this.#shadow = this.attachShadow({mode: 'open'});
    }

    #render(){
        this.#shadow.innerHTML = `
        <style>
            :host {
                display: flex;
                border: solid 2px black;
                background-color: light-gray;
                width: 22px;
                height: 22px;
                box-sizing: border-box;
                cursor: pointer;
                color: gray;
            }
        </style>
        `;
    }

    connectedCallback(){
        this.#render();
    }

    static get observedAttributes(){
        return ['visualizado'];
    }

    /* attributeChangedCallback(){

    }
 */

    set implantarBomba(valor){
        this.#bomba = valor;
    }
    
    set visualizar(valor){
        this.#visualizado = valor;
    }
    
    get visualizar(){
        return this.#visualizado;
    }

    set eixoX(x){
        this.#eixoX = x;
    }

    set eixoY(y){
        this.#eixoY = y;
    }
}

customElements.define('celula-unitaria', Celula);