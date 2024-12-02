import { Intro } from '../components/intro'
import { ListOfCards } from '../components/list-cards'

export function Home() {
  return (
    <>
      <Intro />
      <main className="px-40 pt-8">
        <ListOfCards />
      </main>
    </>
  )
}
