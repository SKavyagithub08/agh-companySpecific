import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./css/Compnydetail.css";

export default function CompanyDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("aptitude");
  const [expanded, setExpanded] = useState(-1);

  const aptitudeTopics = [
    {
      name: "Quantitative Aptitude",
      progress: 4,
      total: 10,
      subtopics: [
        "Number System",
        "HCF & LCM",
        "Permutation & Combination",
        "Probability",
        "Time & Work",
        "Pipes & Cisterns",
        "Ratio & Proportions",
      ],
    },
    { name: "Logical Reasoning", progress: 0, total: 10, subtopics: [] },
    { name: "Verbal Ability", progress: 0, total: 10, subtopics: [] },
    { name: "Logical Reasoning", progress: 0, total: 10, subtopics: [] },
    { name: "Verbal Ability", progress: 0, total: 10, subtopics: [] },
  ];

  const technicalTopics = [
    {
      name: "Programming Basics",
      progress: 4,
      total: 10,
      subtopics: [],
    },
    { name: "C++", progress: 0, total: 10, subtopics: [] },
    { name: "Master DSA Patterns", progress: 0, total: 10, subtopics: [] },
  ];

  const topics = activeTab === "aptitude" ? aptitudeTopics : technicalTopics;

  return (
    <div className="page-container">
      {/* Desktop Header */}
      <header className="desktop-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <span className="back-arrow">&lt;</span> Back
        </button>
        <div className="user-block">
          <img
            src="https://ui-avatars.com/api/?name=Muskan+Verma"
            alt="User Avatar"
            className="avatar-img"
          />
          <span className="user-name">Muskan Verma</span>
          <button className="button-logout">
            Logout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H9m4-5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h6a2 2 0 002-2v-2"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Intro Section */}
      <div className="main-intro">
        <div className="logo_title_combo">
          <img
            src="/loremIpsum.jpg"
            alt="Company Logo"
            className="company-logo"
          />
          <p className="company-title">
            {name?.toUpperCase() || "COMPANY NAME"}
          </p>
        </div>
        <p className="company-description">
          Welcome To Your Aptitude & Technical Practice Hub!
          <br />
          Sharpen Your Skills With Topic-Wise Quizzes Designed To Boost Your
          Preparation.
        </p>
      </div>

      {/* Tabs */}
      <div className="tab-button-group">
        <div className="tab-container">
          <button
            className={`tab-button ${
              activeTab === "aptitude" ? "tab-active" : "tab-inactive"
            }`}
            onClick={() => {
              setActiveTab("aptitude");
              setExpanded(-1);
            }}
          >
            Aptitude
          </button>
          <button
            className={`tab-button ${
              activeTab === "technical" ? "tab-active" : "tab-inactive"
            }`}
            onClick={() => {
              setActiveTab("technical");
              setExpanded(-1);
            }}
          >
            Technical
          </button>
        </div>
      </div>

      {/* Topic List */}
      <div className="topic-container">
        {topics.map((topic, idx) => (
          <div key={idx}>
            <div
              className="topic-item"
              onClick={() => setExpanded(expanded === idx ? -1 : idx)}
            >
              <span className="topic-arrow">
                <svg
                  className="arrow-icon"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {expanded === idx && topic.subtopics.length > 0 ? (
                    <path d="M6 9l6 6 6-6" />
                  ) : (
                    <path d="M9 6l6 6-6 6" />
                  )}
                </svg>
              </span>
              <span className="topic-title">{topic.name}</span>
              <span className="topic-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(topic.progress / topic.total) * 100}%`,
                    }}
                  />
                </div>
                <span className="progress-count">
                  {topic.progress}/{topic.total}
                </span>
              </span>
            </div>

            {/* Subtopics if any */}
            {expanded === idx && topic.subtopics.length > 0 && (
              <div className="subtopics">
                {topic.subtopics.map((sub, subIdx) => (
                  <div key={subIdx} className="subtopic-item">
                    <input
                      type="checkbox"
                      className="subtopic-checkbox"
                      disabled
                    />
                    <span className="subtopic-title">{sub}</span>
                    <button className="subtopic-button">Start</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
