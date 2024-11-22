import { Card } from './card'

export function ListOfCards() {
  return (
    <div className="flex flex-col gap-14">
      <h1 className="text-[2rem] text-[#403937] font-extrabold leading-tight">
        Nossos cafés
      </h1>
      <div className="grid grid-cols-4 gap-y-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
