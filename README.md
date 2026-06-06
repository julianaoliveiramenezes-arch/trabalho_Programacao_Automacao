Trabalho: 04 - Integração Contínua para Automação de Testes

Este repositório contém exercícios e testes automatizados em Node.js. Abaixo estão os passos para instalar dependências, rodar os testes e gerar relatórios com o mochawesome.

**Pré-requisitos:**

- Node.js (versão atual LTS) e `npm`
- Git

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

- No Windows: abra o arquivo `mochawesome-report/mochawesome.html` no navegador.
- Ou use um comando como:

```bash
start mochawesome-report/mochawesome.html
```

**Executar um arquivo de teste específico:**

```bash
npx mocha test/meuArquivo.test.js --reporter mochawesome
```

**Gerar relatório agregado (opcional, útil em CI quando há vários arquivos de saída):**

1. Instale as ferramentas de merge e geração de relatórios:

```bash
npm install --save-dev mochawesome-merge mochawesome-report-generator
```

2. Exemplo de comandos para agrupar e gerar o HTML:

```bash
npx mochawesome-merge mochawesome-report/*.json > mochawesome.json
npx marge mochawesome.json -f mochawesome -o mochawesome-report
```
