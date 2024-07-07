interface CardProps {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className={`flex flex-col gap-2 w-full p-4 bg-card rounded shadow-sombra`}>
      {children}
    </div>
  )
}
