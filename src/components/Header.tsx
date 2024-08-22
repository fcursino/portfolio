import LanguageToggle from "./LanguageToggle"
import ThemeToggle from "./ThemeToggle"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between w-screen p-4 shadow-lg">
      <div className="flex gap-2 items-center">
        <AccountBoxIcon fontSize="large" />
        Fabrício
      </div>
      <div className="flex gap-5">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
export default Header