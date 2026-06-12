Trabalho: 04 - Integração Contínua para Automação de Testes

![CI](https://github.com/julianaoliveiramenezes-arch/trabalho_Programacao_Automacao/actions/workflows/minhaPipeline.yaml/badge.svg)

Este repositório contém exercícios e testes automatizados em Node.js. Abaixo estão os passos para instalar dependências, rodar os testes e gerar relatórios com o mochawesome.

**Pré-requisitos:**


**Instalação das dependências:**

```bash
npm install
```

**Instalar mochawesome (se ainda não estiver instalado como devDependency):**

```bash
npm install --save-dev mochawesome
```

**Executar os testes (gera relatório mochawesome):**

```bash
npm test
```

O script `test` está configurado para usar o reporter `mochawesome` e salvará os relatórios em `mochawesome-report/`.

**Abrir o relatório HTML:**


```bash
start mochawesome-report/mochawesome.html
```

**Executar um arquivo de teste específico:**

```bash
npx mocha test/meuArquivo.test.js --reporter mochawesome
```

Descrição da solução

Este repositório contém uma implementação simples de um serviço de pagamento em Node.js e testes automatizados que comprovam o comportamento esperado. O objetivo é demonstrar práticas de design, encapsulamento e testes unitários com Mocha.

Arquivos principais

- [src/servicoDePagamento.js](src/servicoDePagamento.js) - implementação da classe ServicoDePagamento.
- [test/servicoDePagamento.test.js](test/servicoDePagamento.test.js) - testes unitários que verificam os métodos da classe.

Resumo da implementação

A classe `ServicoDePagamento` guarda os pagamentos em uma lista privada (`#pagamentos`). Ela expõe os métodos principais:

- `pagar(codigoBarras, empresa, valor)`: armazena um pagamento como objeto com as propriedades `codigoBarras`, `empresa`, `valor` e `categoria`. Valores maiores que `100.00` são classificados como `"cara"`, caso contrário `"padrão"`.
- `realizarPagamento(...)`: wrapper que delega para `pagar`.
- `consultarUltimoPagamento()`: retorna o último pagamento registrado na lista.

Conceitos usados

- Encapsulamento: uso de campo privado (`#pagamentos`) para proteger estado interno.
- Módulos ES: `export default` para facilitar importações nos testes.
- Testes unitários: Mocha + `node:assert` cobrindo casos limites (valor < 100, = 100, > 100).

Pipeline (minhaPipeline)

Existe uma GitHub Actions workflow em `.github/workflows/minhaPipeline.yaml` que automatiza execução de testes e preserva relatórios. Principais pontos:

- Triggers: `push` nas branches `main` e `BranchJu`, `workflow_dispatch` (manual) e `schedule` (cron diário).
- Runner: `ubuntu-latest`.
- Setup Node.js: `actions/setup-node@v4` com `node-version: '24'` e `cache: 'npm'` para acelerar instalações.
- Passos: `npm install` seguido de `npm test` (espera-se que gere relatórios em `mochawesome-report/`).
- Artifacts: `actions/upload-artifact@v4` publica `mochawesome-report/` para permitir download e inspeção; `retention-days` controla tempo de retenção.

