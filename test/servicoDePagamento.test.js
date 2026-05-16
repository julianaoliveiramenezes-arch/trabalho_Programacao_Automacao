import assert from 'node:assert';
import  ServicoDePagamento from '../src/servicoDePagamento.js';  

describe('Testes do Módulo de Pagamento', function() {
    it('Consultar o último pagamento', () => {
        // Arrange (Criar constantes com dados de pagamento e resultado esperado)   
        const servicoDePagamento = new ServicoDePagamento();
        const codigoBarras = '0987-7656-3475';
        const empresa = 'Menezes S.A';    
        const valor = 56.87;
        const ultimoPagamentoEsperado = {
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: 'padrão'
        };

        // Act (Realizar o pagamento)
        servicoDePagamento.pagar(codigoBarras, empresa, valor);

        // Assert (Verificar se o último pagamento é o esperado)
        assert.deepStrictEqual(servicoDePagamento.consultarUltimoPagamento(), ultimoPagamentoEsperado);
    });

    it('Classificar o pagamento como "cara" quando o valor for maior que 100.00', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoBarras = '1234-5678-9012';
        const empresa = 'Oliveira Ltda';
        const valor = 250.00;
        const ultimoPagamentoEsperado = {
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: 'cara'
        };

        // Act
        servicoDePagamento.pagar(codigoBarras, empresa, valor);

        // Assert
        assert.deepStrictEqual(servicoDePagamento.consultarUltimoPagamento(), ultimoPagamentoEsperado);
    });

    it('Classificar o pagamento como "padrão" quando o valor não for maior que 100.00', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoBarras = '3456-7890-1234';
        const empresa = 'Automação Ltda';
        const valor = 90.00;
        const ultimoPagamentoEsperado = {
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: 'padrão'
        };

        // Act
        servicoDePagamento.pagar(codigoBarras, empresa, valor);

        // Assert
        assert.deepStrictEqual(servicoDePagamento.consultarUltimoPagamento(), ultimoPagamentoEsperado);
    });

}); 