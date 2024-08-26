import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="shadow-md max-w-full w-full p-4 border border-accent-dark dark:border-accent-light rounded-lg justify-around">
        { children }
    </div>
  )
}
export default Card