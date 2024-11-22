import { Header } from './components/header'
import { Intro } from './components/intro'
import { ListOfCards } from './components/list-cards'

export function App() {
  return (
    <>
      <Header />
      <Intro />
      <main className="px-40 pt-8">
        <ListOfCards />
      </main>
    </>
  )
}
