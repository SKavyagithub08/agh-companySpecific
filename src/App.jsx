import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./App.css";
import * as Icons from 'lucide-react';
import { Lock, ArrowRight, Menu, LogOut, ChevronDown } from "lucide-react";

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
    <div className="page_container">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <button className="menu-icon" onClick={() => setNavOpen(!navOpen)}><Menu size={16} /></button>
            <img src="/logo.jpg" alt="Logo" className="site-logo" />
          </div>

          <nav className={`nav-links ${navOpen ? "open" : ""}`}>
            <ul>
              <li className='nav_list_item'><a href="#">Home</a></li>
              <li className='nav_list_item'><a href="#">Practice</a></li>
              <li className='nav_list_item'><a href="#">Assessment</a><ChevronDown size={16} /></li>
              <li className='nav_list_item'><a href="#">Leaderboard</a></li>
              <li className='nav_list_item'><a href="#">Company Specific</a> <ChevronDown size={16} /></li>
            </ul>
          </nav>

          <div className="user-actions">
            <img src="https://ui-avatars.com/api/?name=Muskan+Verma" alt="User" className="avatar" />
            <span className="username">Muskan Verma</span>
            <button className="logout-btn">Logout <LogOut size={18} /></button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <h1 className="title">COMPANY SPECIFIC</h1>
        <p className="subtitle">
          Welcome to AGH LMS, your ultimate learning companion! We're delighted to have you embark on this journey of knowledge and growth with us
        </p>

        <div className="company-grid">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <div className="img-wrapper">
                <img src={company.img} alt={company.name} />
              </div>
              <div className="company-name">{company.name}</div>
              {company.button.locked ? (
                <button className="btn btn-dark" disabled>
                  Locked <Lock size={18} />
                </button>
              ) : (
                <button
                  className="btn btn-pink"
                  onClick={() => navigate(`/company/${encodeURIComponent(company.name)}`)}
                >
                  {company.button.text} <ArrowRight size={18} />
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

