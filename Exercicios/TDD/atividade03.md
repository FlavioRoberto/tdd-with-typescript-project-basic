# The Greeting Kata

Esse [Kata](https://en.wikipedia.org/wiki/Kata_(programming)) é utilizado para ajudar a praticar e entender como os testes funcionam. É recomendável que se inicie a atividade com um desenvolvimento simples, e medida que as regras forem sendo adicionadas, alterar a complexidade do desenvolvimento. Lembrem de sempre utilizar o fluxo de trabalho do TDD, a prática leva a perfeição.

## Requirement 1

Escreva um método `greet(name)` que irá interpolar a variável `name` em uma simples saudação. Por exemplo, quando `name` for `"Bob"`, o método deve retornar uma string `"Hello, Bob."`.

## Requirement 2

Para variáveis nulas utilizes saudações substitutas. Por exemplo, quando `name` for null, então o método deve retornar a string `"Hello, my friend."`

## Requirement 3

Lidando com saudação em caixa alta. quando `name` for todos em caixa alta, então o método deve ser devolvido em caixa alta. Por exemplo, quando `name` for `"JERRY"` então o método deve retornar a string `"HELLO JERRY!"`

## Requirement 4

Lidando com dois nomes no input. quando `name` for um array de dois nomes, então ambos os nomes devem ser apresentados. Por exemplo, quando `name` for `["Jill", "Jane"]`, então o método deve retornar a string `"Hello, Jill and Jane."`

## Requirement 5

Lidando com um número arbritário de nomes como entrada. quando `name` representa mais de dois nomes, separe-os com vírgula e adicione "and" para o último nome. Por exemplo, quando `name` for `["Amy", "Brian", "Charlotte"]`, então o método deve retornar a string `"Hello, Amy, Brian, and Charlotte."`

## Requirement 6

Permitindo nomes em caixa Alta e caixa baixa. Por exemplo, quando `name` for `["Amy", "BRIAN", "Charlotte"]`, então o método deve retornar a string `"Hello, Amy and Charlotte. AND HELLO BRIAN!"`

## Requirement 7

Se algum valor em `name` for uma string contendo uma vírgula, separe os nomes. Por exemplo, quando `name` for `["Bob", "Charlie, Dianne"]`, então o método deve retornar a string `"Hello, Bob, Charlie, and Dianne."`.

## Requirement 8

Devera ser permitido que o input escape a vírgula de forma proposital. Eles podem ser escapados da mesma maneira que CSV para, com aspas duplas ao redor da entrada. Por exemplo, quando `name` for `["Bob", "\"Charlie, Dianne\""]`, então o método deve retornar a string `"Hello, Bob and Charlie, Dianne."`.