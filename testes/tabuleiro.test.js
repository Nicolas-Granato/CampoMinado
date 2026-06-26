import { describe, it,  expect } from "vitest";
import { setupRootAppContent } from "../setupRootAppContent";
import { Tabuleiro } from "../src/componentes/tabuleiro"; 

describe('Tabuleiro', async () => {
    it('cria um tabuleiro', async () => {
        document.body.innerHTML = setupRootAppContent();
        const app = document.querySelector('#app');
        const tabuleiro = document.createElement('tabuleiro-campominado');
        app.appendChild(tabuleiro);
        expect(tabuleiro).toBeInTheDocument();
    })

    it('cria as celulas', async () => {
        document.body.innerHTML = setupRootAppContent();
        const app = document.querySelector('#app');
        const tabuleiro = document.createElement('tabuleiro-campominado');
        app.appendChild(tabuleiro);

        const raizElemento = tabuleiro.shadowRoot;
        const celulaInicial = raizElemento.querySelector('#celula-0-0');
        const celulaFinal = raizElemento.querySelector('#celula-8-8');

        expect(celulaInicial).not.toBeNull();
        expect(celulaFinal).not.toBeNull();
    })
})
