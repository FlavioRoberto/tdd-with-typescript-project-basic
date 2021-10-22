# Atividade 02 dos testes unitários

Alice e Bob criaram, cada um, um problema para o HackerRank. Um revisor avalia os dois desafios, atribuindo pontos em uma escala de 1 a 100 para três categorias: clareza do problema, originalidade e dificuldade.

A classificação do desafio de Alice é a trinca a = (a [0], a [1], a [2]), e a classificação do desafio de Bob é a trinca b = (b [0], b [1], b [2]).

A tarefa é encontrar seus pontos de comparação comparando a [0] com b [0], a [1] com b [1] e a [2] com b [2].

* `Se a [i]> b [i], então Alice recebe 1 ponto.`

* `Se a [i] <b [i], então Bob recebe 1 ponto.`

* `Se a [i] = b [i], então nenhuma pessoa recebe um ponto.`

Os pontos de comparação são o total de pontos que uma pessoa ganhou.

Dados a e b, determine seus respectivos pontos de comparação.

## Exemplos

a = [1, 2, 3]

b = [3, 2, 1]

* Para os elementos *0*, Bob ganhou o ponto devio ao a[0] ser maior que b[0].

* Para os elementos iguais a[1] e b[1], nenhum ponto foi concedido.

* Finalment, para o elemento 2, a[2] > b[2] Alice recebeu os pontos.

O retorno do array será [1, 1] com a pontuação da Alice em primeiro e do Bob em segundo.

## Entradas e Saídas

Abaixo segue o exemplo das entradas da função e como a saída será apresentada:

#### Exemplos de entrada

`[5, 6, 7]`

`[3, 6, 10]`

### Exemplos de saída
`[1, 1]`

`[2, 1]`

## Explicação 1

Comparando os primeiros elementos 17 < 99, então Bob recebe um ponto.

Comparando os segundos elementos 28 > 16, então Alice recebe um ponto.

Comparando os terceiros elementos 30 > 8, então Alice recebe um ponto.

O retorno do array será [2, 1].