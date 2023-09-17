type Coluna = 'TODO'|'DOING'|'DONE'

type Card = {
    _id: string
    title: string
    content: string
    column: Coluna
}