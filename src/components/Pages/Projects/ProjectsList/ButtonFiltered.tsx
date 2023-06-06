'use client'

type ButtonFilteredProps = {
  filteredProducts: (type: 'Website' | 'App' | 'Event' | 'Server' | '') => void;
  activeType: 'Website' | 'App' | 'Event' | 'Server' | ''
}

type Button = {
  name: string;
  type: 'Website' | 'App' | 'Event' | 'Server' | ''
}

export function ButtonFiltered({ filteredProducts, activeType }: ButtonFilteredProps) {
  const buttons = [
    { name: 'Todos', type: '' },
    { name: 'Websites', type: 'Website' },
    { name: 'Aplicativos', type: 'App' },
    { name: 'Eventos', type: 'Event' },
    { name: 'Servidor (Back-end)', type: 'Server' },
  ] as Button[]

  return (
    <div className='w-full h-36 md:h-24 my-4 flex flex-col py-4'>
      <span className='text-center text-3xl mb-2'>Filtro:</span>

      <div className='w-full h-full mx-auto flex items-center justify-center gap-6 mt-2 flex-wrap md:flex-row'>
        {buttons.map((item, key) => (
          <button
            key={key}
            className={`min-w-fit px-2 py-1 rounded-lg bg-gray-600 transition-colors [&.active]:bg-emerald-600 [&.active]:hover:bg-emerald-500 ${item.type === activeType && 'active'}`}
            onClick={() => filteredProducts(item.type)}
          >
            <p className='text-gray-50'>{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}