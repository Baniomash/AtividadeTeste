const { LinkedList, Node } = require("./lista.js");

const stringHead = "Head";
const string1 = "E1";
const string2 = "E2";
const int1 = 1;
const int2 = 2;
const obj1 = {id:0, name:"Marques"}
const obj2 = {id:1, name:"Jônatas"}
const float1 = 1.5;
const boolean1 = false;

//================================================================
// MODELO => TesteN° (método foco de teste): Descrição do teste...
//================================================================

//TESTE PASSOU; Criou uma lista vazia e retornou o tamanhou dela como 0.
 test("T1.0 (size): Criando lista sem nenhum elemento, esperando a lista retornar seu tamnho igual a 0", () => {
    var lista = new LinkedList();
    expect(lista.size()).toEqual(0);
 });

//TESTE PASSOU; Criou uma lista vazia e retornou a função isEmpity como true, indicando que a lista está vazia.
 test("T1.1 (isEmpity): Criando lista sem nenhum elemento, esperando que a lista esteja vazia", () => {
   var lista = new LinkedList();
   expect(lista.isEmpty()).toBeTruthy();
   });

//TESTE PASSOU; Criou uma lista, adicionou o elemento. Logo após, retornou a função isEmpity como false, indicando que a lista não está vazia.
test("T1.2 (isEmpity): Criando lista adicionando um elemento logo após, esperando que a lista não esteja vazia", () => {
   var lista = new LinkedList();
   lista.add(obj1);
   expect(lista.isEmpty()).toBeFalsy();
   });

//TESTE PASSOU; Criou uma lista, adicionou o elemento e depois apagou ele da lista. Logo após, retornou a função isEmpity como true, indicando que a lista está vazia.
test("T1.3 (isEmpity): Criando lista adicionando um elemento logo após e depois apagando esse elemento, esperando que a lista esteja vazia", () => {
   var lista = new LinkedList();
   lista.add(obj1);
   lista.remove(obj1);
   expect(lista.isEmpty()).toBeTruthy();
   });


 //TESTE PASSOU; Foi feito a primeira adição de elemento -String- a lista e retornou o head como esse elemento.
 test("T2.0 (add, head): Primeiro elemento -String- adicionado na lista, esperando o head ser o elemento adicionado", () => {
    var lista = new LinkedList();
    lista.add(string1);
    expect(lista.head().element).toEqual(string1);
 });

 //TESTE PASSOU; Foi feito a primeira adição de elemento -Inteiro- a lista e retornou o head como esse elemento.
 test("T2.1 (add, head): Primeiro elemento -Inteiro- adicionado na lista, esperando o head ser o elemento adicionado", () => {
    var lista = new LinkedList();
    lista.add(int1);
    expect(lista.head().element).toEqual(int1);
 });
//TESTE PASSOU; Foi feito a primeira adição de elemento -Objeto- a lista e retornou o head como esse elemento.
 test("T2.2 (add, head): Primeiro elemento -Objeto- adicionado na lista, esperando o head ser o elemento adicionado", () => {
    var lista = new LinkedList();
    lista.add(obj1);
    expect(lista.head().element).toEqual(obj1);
 });
//TESTE PASSOU; Foi feito a primeira adição de elemento -Float- a lista e retornou o head como esse elemento.
test("T2.3 (add, head): Primeiro elemento -Float- adicionado na lista, esperando o head ser o elemento adicionado", () => {
    var lista = new LinkedList();
    lista.add(float1);
    expect(lista.head().element).toEqual(float1);
 });
 //TESTE PASSOU; Foi feito a primeira adição de elemento -Boolean- a lista e retornou o head como esse elemento.
 test("T2.4 (add, head): Primeiro elemento -Boolean- adicionado na lista, esperando o head ser o elemento adicionado", () => {
    var lista = new LinkedList();
    lista.add(boolean1);
    expect(lista.head().element).toEqual(boolean1);
 });

 //TESTE FALHOU; Foi feito a primeira adição do elemento, ja no segundo elemento não foi possível adicionar.
  test("T2.4 (add, head): 2 elementos -Objeto com um parametro de valor Null- adicionados na lista, esperando o head ser o primeiro elemento adicionado e o tamanho da lista ser 2", () => {
   var lista = new LinkedList();
   lista.add({id: null});
   list.add({nome: null});
   expect(lista.head().element).toEqual({id: null});
   expect(lista.size()).toBe(2);
});

//TESTE FALHOU; Foi adicionado um valor null como elemento a lista, e após isso, não foi mais possível adicionar outro elemento a lista usando add.
test("T2.5 (add, head): Adiciona um elemento -Null-,e tenta adicionar mais um elemento -String-, esperando o head ser o primeiro elemento adicionado (null) e o tamanho da lista ser 2", () => {
   var lista = new LinkedList();
   lista.add(null);
   expect(lista.head().element).toEqual(null);
   list.add(string1);
   expect(lista.size()).toBe(2);
});



 //TESTE PASSOU; Criou uma lista vazia, que apos adicinado um elemento, comparou se o elemento 1 é diferente do elemento 2;
 test("T3 (add, elementAt): 2 elementos adicionados na lista vazia, esperando o head ser o primeiro elemento adicionado, o elemento no índece '0' ser diferente do elemento no índice '1' e o tamanho da lista ser 2", () => {
    var lista = new LinkedList();
    lista.add(stringHead);
    lista.add(string1);
    expect(lista.head().element).toEqual(stringHead);
    expect(lista.elementAt(0)).not.toEqual(lista.elementAt(1));
    expect(lista.size()).toEqual(2);
 });



//TESTE PASSOU; Criou uma lista vazia, e após, adicionou 2 elementos iguais após o head, e os elementos retornaram com iguais mesmo sendo de nós diferentes e a lista possui 3 elementos de tamanho.
 test("T4 (add): 3 Elementos adicionados, elementos 2 e 3 são iguais, espera que eles sejam adicioados, que sejam iguais e o tamanho da lista ser 3", () => {
    var lista = new LinkedList();
    lista.add(stringHead);
    lista.add(string1);
    lista.add(string1);
    expect(lista.elementAt(1)).toEqual(lista.elementAt(2));
    expect(lista.size()).toEqual(3);
 });



 //TESTE PASSOU; Após apagar o 2° elemento, a lista diminuiu 1 de tamanho.
 test("T5.0 (remove): Adicionado 3 elementos a uma lista vazia, verifica tamanho da lista, apagou-se o 2° elemento usando-o como referência, esperando lista diminuir 1 de tamanho", () => {
    var lista = new LinkedList();
    lista.add(stringHead);
    lista.add(string1);
    lista.add(string2);
    const listSize = lista.size();
    lista.remove(string1);
    expect(lista.size()).toEqual(listSize-1);
 });

//TESTE PASSOU; Após apagar o segundo elemento, ele não se encontra mais no indice que foi atribuido.
  test("T5.1 (remove): Adicionado 3 elementos a uma lista vazia, apagou-se o 2° elemento usando-o como referência, esperando o elemento apagado não existir mais onde ele foi adicionado", () => {
    var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   lista.add(string2);
   const listSize = lista.size();
    lista.remove(string1);
    expect(lista.size()).toEqual(listSize-1);
 });

 //TESTE FALHOU; Ao tentar apagar um elemento que não existe na lista, ele da erro na função "remove".
 test("T5.2 (remove): Adicionado 2 elementos a uma lista vazia, passa-se um elemento que não existe na lista como parametro da função 'remove', esperando o tamanho da lista não mudar", () => {
   var lista = new LinkedList();
  lista.add(stringHead);
  lista.add(string1);
  const listSize = lista.size();
   lista.remove(string2);
   expect(lista.size()).toBe(listSize);
});

 //TESTE PASSOU; Após apagar o segundo elemento, ele não se encontra mais no indice que foi atribuido.
 test("T5.3 (removeAt): Adicionado 3 elementos a uma lista vazia, apagou-se o 2° elemento usando o seu índice como referência, esperando lista diminuir o tamanho e o elemento apagado não existir mais onde ele foi adicionado", () => {
   var lista = new LinkedList();
  lista.add(stringHead);
  lista.add(string1);
  lista.add(string2);
  const listSize = lista.size();
   lista.removeAt(1);
   expect(lista.size()).toEqual(listSize-1);
});

//TESTE PASSOU: Não removeu nenhum elemento e a função retornou "null";
test("T5.4 (removeAt): Adicionado 2 elementos a uma lista vazia, e tenta apagar o 3° elemento da lista, esperando que a função retorne 'null' e não remover nada da lista continuando com 2 de tamanho.", () => {
   var lista = new LinkedList();
  lista.add(stringHead);
  lista.add(string1);
   const listSize = lista.size();
   expect(lista.removeAt(2)).toBeNull();
   expect(lista.removeAt(-1)).toBeNull();
   lista.removeAt(2)
   expect(lista.size()).toEqual(listSize);
});



//TESTE PASSOU; Após adicionar 2 elementos, o 3° elemento foi adicionado "entre" os dois anteriores, como era o previsto.
test("T6.0 (addAt): Adicionado 2 elementos a uma lista vazia, e adiciona um novo elemento no índice '1' (2° elemento da lista), esperando o elemento de índice '1' ser o elemento adicionado e a lista ficar com 3 de tamanho", () => {
   var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   lista.addAt(1, string2);
   expect(lista.elementAt(1)).toEqual(string2);
   expect(lista.size()).toEqual(3);
});

//TESTE PASSOU; Após adicionar 2 elementos, o 3° elemento foi adicionado ao índice "0" (Head), como era o previsto.
test("T6.1 (addAt): Adicionado 2 elementos a uma lista vazia, e adiciona um novo elemento no índice '0' (elemento Head da lista), esperando o Head ser o elemento adicionado", () => {
   var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   lista.addAt(0, string2);
   expect(lista.head().element).toEqual(string2);
});

//TESTE PASSOU; Não adicionou o elemento em um indice que não estava no escopo de índeces possíveis para serem usados no addAt e a lista continuou do mesmo tamanho
test("T6.2 (addAt): Adicionado 2 elementos a uma lista vazia, e adiciona um novo elemento no índice '3' (indice não existente na lista), esperando o elemento adicionado não ser adicionado e a lista continuar com o mesmo tamanho", () => {
   var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   const listSize = lista.size();
   expect(lista.addAt(3, string2)).toBeFalsy();
   lista.addAt(3, string2);
   expect(lista.size()).toEqual(listSize);
});



//TESTE PASSOU; retornou o índice do ultimo elemento adicionado tendo como parametro o elemento.
test("T7.0 (indexOf): Adiciona 6 elementos a uma lista vazia, e faz uma busca do indíce passando o ultimo elemento como parametro, deve retornar o indice do último item da lista quando receber o ultimo elemento adicionado", () => {
   var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   lista.add(obj1);
   lista.add(int1);
   lista.add(int2);
   lista.add(string2);
   expect(lista.indexOf(string2)).toEqual(lista.size()-1);
});

//TESTE PASSOU; Adicionou 2 elementos a uma lista vazia e retornou -1 como indice para os elemento não existente"
test("T7.1 (indexOf): Adiciona 2 elementos a uma lista vazia, e faz uma busca do indíce passando um elemento que não existe na lista, deve retornar -1 como indice para um elemento não existente", () => {
   var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   expect(lista.indexOf(string2)).toBe(-1);
   expect(lista.indexOf(obj1)).toBe(-1);
   expect(lista.indexOf(float1)).toBe(-1);
});



//TESTE FALHOU; Quando um índice não existente no escopo debusca da lista é passado em "elementAt", a função ecerra em um erro similar ao erro de "remove".
test("T8 (elementAt):Adicniona 2 elementos a uma lista vazia, e faz uma busca de um elemento passando um indíce que não existe na lista, deve retornar um valor 'null' como elemento", () => {
   var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   expect(lista.elementAt(2)).toBeNull();
   expect(lista.elementAt(-1)).toBeNull();

});



//TESTE PASSOU; O head se tornou o novo elemento adicionado à lista, e a lista ameuntou seu tamanho em 1
test("T9 (addAt): Adiciona 2 elementos a uma lista vazia, logo após, adciona um novo elemento no indice do Head, espera-se que o head se torne o novo elemento adicionado e a lista amente 1 de tamanho", () => {
   var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   const listSize = lista.size();
   const indice = lista.indexOf(lista.head().element)
   lista.addAt(indice, string2);
   expect(lista.head().element).toEqual(string2);
   expect(lista.size()).toBe(listSize+1);
});



//TESTE FALHOU; Ao remover o header, ele não consegue encontrar um elemento no header, pois o ínice proposto é diferente do parâmetro usado (Syntax Erro) 
test("Adiciona 2 elementos a uma lista vazia, tenta remover o head atravez do índice usando 'removeAt', deve retornar o segundo elemento adicionado como o novo header e a lista diminuir 1 de tamanho", () => {
   var lista = new LinkedList();
   lista.add(stringHead);
   lista.add(string1);
   const listSize = lista.size();
   const indice = lista.indexOf(lista.head().element)
   lista.removeAt(indice);
   expect(lista.head().element).toEqual(string1);
   expect(lista.size()).toBe(listSize-1);
});
