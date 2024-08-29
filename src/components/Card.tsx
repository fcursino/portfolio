import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="shadow-md max-w-5xl w-full p-4 border m-auto border-accent-dark dark:border-accent-light rounded-lg justify-around">
        { children }
    </div>
  )
}
export default Card