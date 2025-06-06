import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as Icons from 'lucide-react';

const companies = [
  {
    name: 'Royal Styles',
    img: '/royalstyles.jpg',
    button: { text: 'Explore', color: 'bg-[#FF3B5C]', locked: false },
  },
  {
    name: 'Lorem Ipsum',
    img: '/loremIpsum.jpg',
    button: { text: 'Explore', color: 'bg-[#FF3B5C]', locked: false },
  },
  {
    name: 'Global Logo',
    img: '/globalLogo.jpg',
    button: { text: 'Explore', color: 'bg-[#FF3B5C]', locked: false },
  },
  {
    name: 'Company Logo',
    img: '/companyBusiness.jpg',
    button: { text: 'Explore', color: 'bg-[#FF3B5C]', locked: false },
  },
  {
    name: 'Halal Indonesia',
    img: '/halalIndonesia.jpg',
    button: { text: 'Explore', color: 'bg-[#FF3B5C]', locked: false },
  },
  {
    name: 'Name Logo',
    img: '/NameLogo.jpg',
    button: { text: 'Locked', color: 'bg-gray-800', locked: true },
  },
  {
    name: 'Royal Styles',
    img: '/royalstyles.jpg',
    button: { text: 'Locked', color: 'bg-gray-800', locked: true },
  },
]

function App() {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      
      <header className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-3 px-4 sm:px-6 relative">
          <div className="flex items-left justify-between w-full sm:w-auto sm:justify-start gap-4 sm:gap-6">
            
            <div className="flex items-center gap-0.5">
              <button
                className="sm:hidden mr-4"
                aria-label="Open navigation"
                onClick={() => setNavOpen(!navOpen)}
              >
                <Icons.Menu className="w-8 h-8" />
              </button>

              <img
                src="/logo.jpg"
                alt="Logo"
                className="h-12 w-40 rounded-md mt-1 p-1"
              />

              {/* <div className="leading-none">
                <div className="text-sm font-semibold tracking-wide text-black">
                  APTITUDE GURU
                </div>
                <div className="text-md font-extrabold tracking-tight text-black">
                  HEMCHANDAR
                </div>
              </div> */}
            </div>

          </div>

         
          <nav
            className={`
              ${navOpen ? 'flex' : 'hidden'}
              flex-col absolute top-full left-0 w-full bg-white border-b z-20 sm:static sm:flex sm:flex-row sm:w-auto sm:bg-transparent sm:border-0
            `}
            onClick={() => setNavOpen(false)}
          >
            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-black font-semibold text-base px-4 py-2 sm:p-0">
              <li>
                <a href="#" className="hover:text-[#FF3B5C]">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF3B5C]">Practice</a>
              </li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-[#FF3B5C]">Assessment</a>
                <Icons.ChevronDown className="w-4 h-4" />
              </li>
              <li>
                <a href="#" className="hover:text-[#FF3B5C]">Leaderboard</a>
              </li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-[#FF3B5C]">Company Specific</a>
                <Icons.ChevronDown className="w-4 h-4" />
              </li>
            </ul>
          </nav>
        
          <div className="hidden sm:flex items-center gap-5">
            <div className="flex items-center gap-2">
              <img
                src="https://ui-avatars.com/api/?name=Muskan+Verma"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-bold text-black text-base">
                Muskan Verma
              </span>
            </div>
            <button className="flex items-center gap-2 bg-[#ff294f] hover:bg-[#e11d48] text-white px-5 py-2 rounded-[6px] text-[15px] font-normal shadow-none transition">
              Logout
              <Icons.LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

     
      <main className="max-w-5xl mx-auto py-6 px-2 sm:px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#404040] text-center mb-3 sm:mb-5">
          COMPANY SPECIFIC
        </h1>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 max-w-xl mx-auto">
          Welcome to AGH LMS, your ultimate learning companion! We're
          delighted to have you embark on this journey of knowledge and
          growth with us
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col items-center"
            >
             
              <div className="bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4" style={{ width: 150, height: 109 }}>
                <img
                  src={company.img}
                  alt={company.name}
                  className="object-contain max-h-[110px] max-w-[140px]"
                />
              </div>
             
              <div className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-6 text-center text-[#404040]">
                {company.name}
              </div>
              
              {company.button.locked ? (
                <button
                  className="w-full flex items-center justify-center gap-1 bg-gray-800 text-white py-2 rounded-lg text-base sm:text-lg font-normal"
                  disabled
                >
                  Locked
                  <Icons.Lock className="h-5 w-5" />
                </button>
              ) : (
                <button
                  className={`w-full flex items-center justify-center gap-2 ${company.button.color} text-white py-2 rounded-lg font-normal transition`}
                  onClick={() => navigate(`/company/${encodeURIComponent(company.name)}`)}
                >
                  {company.button.text}
                  <Icons.ArrowRight className="ml-1 w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App

