/** @format */
'use client'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/24/outline'

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className="inline-flex items-center">
      <SunIcon
        className={`mr-3 h-6 w-6 transition duration-300 cursor-pointer ${currentTheme === 'dark' ? 'text-coral-red' : 'text-slate-gray'}`}
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      />
    </div>
  )
}

export default ThemeSwitch
