import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function CompanyDetail() {
    const navigate = useNavigate();
    const { name } = useParams();
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
                "Ration & Proportions",
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
        { name: "Practice", progress: 0, total: 10, subtopics: [] },
        { name: "Mock Tests", progress: 0, total: 10, subtopics: [] },
    ];

    const topics = activeTab === "aptitude" ? aptitudeTopics : technicalTopics;

    return (
        <div className="min-h-screen bg-white flex flex-col">
            
            <header className="w-full border-b bg-white block md:hidden">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-0.5">
                        <button
                            className="mr-4"
                            aria-label="Open navigation"
                        >
                            <svg
                                width="32"
                                height="32"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
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
                    <div className="w-8" />
                </div>
            </header>

           
            <header className="w-full border-b bg-white hidden md:block">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
                    <button
                        className="flex items-center gap-1 text-gray-700 hover:text-[#FF3B5C] font-medium"
                        onClick={() => navigate(-1)}
                    >
                        <span className="text-xl">&lt;</span> Back
                    </button>
                    <div className="flex items-center gap-5">
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={22}
                                height={18}
                                fill="none"
                                viewBox="0 0 22 22"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                className=""
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H9m4-5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h6a2 2 0 002-2v-2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto py-6 px-2 sm:px-4">
                <div className="flex flex-col items-center mb-6">
                    
                    <div className="flex items-center gap-2 mb-5">
                        <img
                            src="/loremIpsum.jpg"
                            alt="Company Logo"
                            className="h-16 w-16 object-contain"
                        />
                        <h1 className="text-2xl font-bold text-[#404040] tracking-tight text-center whitespace-nowrap">
                            COMPANY NAME
                        </h1>
                    </div>
                    <p className="text-center text-base text-gray-600 mb-6 leading-snug">
                        Welcome To Your Aptitude & Technical Practice Hub!<br />
                        Sharpen Your Skills With Topic-Wise Quizzes Designed To Boost Your Preparation.
                    </p>
                </div>

                <div className="flex justify-center md:justify-start mb-7">
                    <div className="flex border border-[#ff294f] rounded-full overflow-hidden w-full max-w-xs">
                        <button
                            className={`flex-1 px-0 py-2 font-semibold focus:outline-none rounded-full transition text-base ${activeTab === "aptitude"
                                ? "bg-[#ff294f] text-white"
                                : "bg-white text-[#ff294f]"
                                }`}
                            onClick={() => {
                                setActiveTab("aptitude");
                                setExpanded(-1);
                            }}
                        >
                            Aptitude
                        </button>
                        <button
                            className={`flex-1 px-0 py-2 font-semibold focus:outline-none rounded-full transition text-base ${activeTab === "technical"
                                ? "bg-[#ff294f] text-white"
                                : "bg-white text-[#ff294f]"
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

                <div className="bg-white border border-[#e0bcbc] rounded-xl overflow-hidden w-full max-w-xs md:max-w-full mx-auto">
                    <div className="divide-y divide-[#e0bcbc]">
                        {topics.map((item, idx) => (
                            <div key={idx}>
                               
                                <div
                                    className="flex items-center px-4 py-4 cursor-pointer"
                                    onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                                    style={{ minHeight: 56 }}
                                >
                                    <span className="w-1/12 flex items-center justify-center">
                                        <svg
                                            className="mr-2"
                                            width="22"
                                            height="22"
                                            fill="none"
                                            stroke="#757575"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            {expanded === idx && item.subtopics.length > 0 ? (
                                                <path d="M6 9l6 6 6-6" />
                                            ) : (
                                                <path d="M9 6l6 6-6 6" />
                                            )}
                                        </svg>
                                    </span>
                                    <span className="flex-1 text-lg font-bold text-[#212121]">
                                        {item.name}
                                    </span>
                                    
                                    <span className="hidden md:flex items-center gap-2 w-1/3">
                                        <div className="flex-1 h-2 rounded-full bg-[#f3f3f3] overflow-hidden">
                                            <div
                                                className="h-2 rounded-full bg-[#ff294f] transition-all"
                                                style={{
                                                    width: `${(item.progress / item.total) * 100}%`,
                                                }}
                                            />
                                        </div>
                                        <span className="text-[#404040] text-base font-semibold ml-2" style={{ minWidth: 40 }}>
                                            {item.progress}/{item.total}
                                        </span>
                                    </span>
                                </div>
                                {/* Subtopics(for aptitude) */}
                                {expanded === idx &&
                                    item.subtopics &&
                                    item.subtopics.length > 0 && (
                                        <div className="bg-white px-4 pb-2">
                                            
                                            <div className="flex items-center justify-center gap-2 mb-2 mt-1 md:hidden">
                                                <div className="w-1/2 h-2 rounded-full bg-[#f3f3f3] overflow-hidden">
                                                    <div
                                                        className="h-2 rounded-full bg-[#ff294f] transition-all"
                                                        style={{
                                                            width: `${(item.progress / item.total) * 100}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-[#404040] text-base font-semibold ml-2" style={{ minWidth: 40 }}>
                                                    {item.progress}/{item.total}
                                                </span>
                                            </div>
                                            {/* Subtopics */}
                                            {item.subtopics.map((sub, subIdx) => (
                                                <div
                                                    key={subIdx}
                                                    className="flex items-center px-2 py-2 border-t border-[#e0e0e0]"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="mr-3 w-4 h-4 rounded border border-gray-300 accent-[#e0e0e0]"
                                                        disabled
                                                    />
                                                    <span className="flex-1 text-[#2196f3] font-medium text-base cursor-pointer">
                                                        {sub}
                                                    </span>
                                                    <button className="bg-[#ff294f] text-white px-6 py-0.5 rounded-full font-medium text-base">
                                                        Start
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}