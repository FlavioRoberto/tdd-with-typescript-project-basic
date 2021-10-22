# Atividade 01 de Testes unitários

Um professor de Matemática Discreta tem uma turma de alunos. Frustrado com a falta de disciplina, o professor decide cancelar a aula se menos do que um certo número de alunos estiver presente no início da aula. Os tempos de chegada variam de pontual tempoChegada <= 0 à atrasado tempoChegada > 0.

Dada a hora de chegada de cada aluno e um número limite de participantes, determine se a aula será cancelada.

## Exemplo:

Os primeiros 3 alunos chegaram a tempo. Os 2 últimos estavam atrasados. O limite são 3 alunos, então a aula continuará. Deverá ser retornado SIM.

<b>Nota:</b> `Horários de chegada negativos indicam que o aluno chegou mais cedo ou no horário; tempos de chegada positivos indicam que o aluno chegou atrasado.`

## Descrição da Função

Complete a função teraAula. A função deverá retornar SIM se a aula for cancelada, ou NÃO caso contrário.

teraAula deve ter os seguintes parametros:

* int quantidadeMinimaEstudantes: número minimo de estudantes
* int horarioChegada[n]: Array com o horário de chegada dos estudantes

Retorno:

string: sendo 'SIM' ou 'Não'

## Condições de entrada

2

4 3

-1 -3 4 2

4 2

0 -1 2 1

## Exemplos de saída
Sim

Não
