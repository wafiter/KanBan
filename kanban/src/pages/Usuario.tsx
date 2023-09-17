import { useEffect, useState } from "react"
import { Coluna, Container, TituloColum } from "./stilos/kanban"
import Cards from "../componentes/cards/cards"
import { getAllCards } from "../Services/card-services"
import NewCard from "../componentes/novoCard"

export default function Kanban () {
  const [cards, setCards] = useState<Card[]>([])


  useEffect(() => {
    getAllCards()
      .then(setCards)
      .catch(e => {
        if (e instanceof Error) {
          alert(e.message)
        }
      })
  }, [])

  return (
    <Container>
      <Coluna>
        <TituloColum>New</TituloColum>
        <NewCard/>
      </Coluna>
      
      <Cards title="TO DO" cards={cards.filter(card => card.column === 'TODO')} setCards={setCards} />
      <Cards title="DOING" cards={cards.filter(card => card.column === 'DOING')} setCards={setCards} />
      <Cards title="DONE" cards={cards.filter(card => card.column === 'DONE')} setCards={setCards} />

    </Container>
  )
}