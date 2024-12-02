import { Card } from './card'
import { coffeeCards } from './coffee-cards'

export function ListOfCards() {
  return (
    <div className="flex flex-col gap-14">
      <h1 className="text-[2rem] text-[#403937] font-extrabold leading-tight">
        Nossos cafés
      </h1>
      <div className="grid grid-cols-4 gap-y-10">
        {coffeeCards.map(
          ({ id, name, description, types, price, componentSvg }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                description={description}
                price={price}
                types={types}
                componentSvg={componentSvg}
              />
            )
          }
        )}
      </div>
    </div>
  )
}
