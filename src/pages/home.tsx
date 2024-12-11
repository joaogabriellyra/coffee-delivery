import { Intro } from '../components/intro'
import { ListOfCards } from '../components/list-cards'

export function Home() {
  return (
    <>
      <Intro />
      <main>
        <ListOfCards />
      </main>
    </>
  )
}
