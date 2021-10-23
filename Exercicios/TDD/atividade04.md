Números romanos para decimal
================

<h2>Descrição do problema</h2>

Você deve escrever uma função para converter números Romanos para Decimais. Para manter o problema mais simples, não iremos verificar se o numeral Romano informado é válido.

O sistema numeral Romano usa combinações de letras do alfabeto latim para representar valores. Eles são baseados em 7 símbolos:

| Símbolo  | Valor    |
| ------- | -------- |
| I       |    1     |
| V       |    5     |
| X       |   10     |
| L       |   50     |
| C       |  100     |
| D       |  500     |
| M       | 1000     |

Os números são formados pela combinação dos símbolos.

Geralmente, os símbolos são adicionandos na ordem do valor, começando pelo símbolo com maior valor.

Exemplo: CLII -> 152

Quando valores menores são sucedidos de valores maiores, o menor valor é subtraído do maior, e o resultao é adicionado ao total.

Exemplo:

| Número Romano  | Computação                                    | Valor      | Cometário                         |
| ------------- | ---------------------------------------------- | ---------- | ------------------------------- |
| MMVI          |  1000 + 1000 + 5 + 1                           | 2006       | apenas adição                   |
| MCMXLIV       |   1000 + (1000 - 100) + (50 - 10) + (5 - 1)    | 1944       | adição e subtração       |

<h2>Proposta com TDD</h2>

Escreva uma função `romanoParaDecimal(numeroRomano: string): number`; que realize a conversão correta quando o números Romanos forem válidos.