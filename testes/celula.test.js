import { describe, it,  expect } from "vitest";
import { setupRootAppContent } from "../setupRootAppContent";
import { Celula } from "../src/componentes/Celula";

describe('Celula', async () => {
    it('deve criar uma celula', async () => {
        document.body.innerHTML = setupRootAppContent();
        const app = document.querySelector('#app');
        const celula = document.createElement('celula-unitaria');
        celula.eixoX = 0;
        celula.eixoY = 0;
        app.appendChild(celula);
        expect(celula).toBeInTheDocument();
    })
})
