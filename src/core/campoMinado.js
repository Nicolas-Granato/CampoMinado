import { Tabuleiro } from "../componentes/Tabuleiro.js"
import { Celula } from "../componentes/Celula.js";

const CampoMinado = {
    app: document.querySelector('#app'),
    #tabuleiro: document.createElement('tabuleiro-campominado'),
    #posicaoBombas: [],

    criarTabuleiro(){
        this.app.appendChild(this.#tabuleiro);
    },

    mapearBombas(){
        for(let i = 0; i < this.#tabuleiro.quantidadeBombas; i++){
            let eixoX = Math.floor(Math.random * this.#tabuleiro.eixo);
            let eixoY = Math.floor(Math.random * this.#tabuleiro.eixo);

            
        }
    },

}