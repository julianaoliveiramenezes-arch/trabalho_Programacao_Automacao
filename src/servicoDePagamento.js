/*
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento.
 Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos.
  Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor.
   Quando um pagamento for realizado e o valor for maior que 100.00, 
   o pagamento também terá a propriedade categoria como 'cara', caso contrário, 
   a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src 
  e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.
*/
// criar a classe ServicoDePagamento
export default class ServicoDePagamento {
  #pagamentos; // Propriedade Privada

  constructor() {
    this.#pagamentos = [];
  }

  //Validar se o pagamento é categoria "cara" ou "padrão" e armazenar o pagamento na lista de pagamentos.

  pagar(codigoBarras, empresa, valor) {
    if (valor > 100.0) {
      this.#pagamentos.push({
        codigoBarras: codigoBarras,
        empresa: empresa,
        valor: valor,
        categoria: "cara",
      });
    } else {
      this.#pagamentos.push({
        codigoBarras: codigoBarras,
        empresa: empresa,
        valor: valor,
        categoria: "padrão",
      });
    }
  }

  // Metodo para realizar pagamento

  realizarPagamento(codigoBarras, empresa, valor) {
    return this.pagar(codigoBarras, empresa, valor);
  }

  //Metodo para consultar o último pagamento.

  consultarUltimoPagamento() {
    return this.#pagamentos[this.#pagamentos.length - 1];
  }
}
