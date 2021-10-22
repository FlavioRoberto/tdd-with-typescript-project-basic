# Atividade 01 de Testes unitários

Dado um tempo em horas no formato AM/PM, converta para o horário militar (24 horas).

Nota: - 12:00:00AM no formato 12 horas é equivalente a 00:00:00 no formato 24 horas.
- 12:00:00PM no formato 12 horas é equivalente a 12:00:00 no formato 24 horas.

## Examplo

Para o horário igual a '12:01:00 PM'

Retorne '12:01:00'.

Para o horário igual a '12:01:00 AM'

Return '00:01:00'.

## Descrição da função

Complete a função conversaoTempo. Ela deverá retornar uma nova string representando o valor no formato de horas militar.

conversaoTempo terá os seguintes parametro(s):

string hora: hora no formato 12 horas.

## Formatacao do input

Uma string que representa o formato da hora a ser exibida.

### Exemplo: 

hh:mm:ssAM ou hh:mm:ssPM

### Exemplo de valores de entrada
07:05:45PM

### Exemplo de valores de saída
19:05:45