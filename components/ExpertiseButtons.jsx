import React from 'react';

const ExpertiseButtons = ({ className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      <button className="flex items-center bg-slate-200 hover:bg-slate-300 text-white font-medium py-2 px-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-button" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
        <span className="text-[#263C48]">ReactJS / NextJS</span>
      </button>

      <button className="flex items-center bg-slate-200 hover:bg-slate-300 text-white font-medium py-2 px-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-button" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.255 0 2.443.29 3.5.804V4.804z" />
          <path d="M15 8c-1.254 0-2.443.29-3.5.804v10A7.968 7.968 0 0015 18c1.255 0 2.443-.29 3.5-.804V8.804A7.968 7.968 0 0015 8z" />
        </svg>
        <span className="text-[#263C48]">Wordpress</span>
      </button>

      <button className="flex items-center bg-slate-200 hover:bg-slate-300 text-white font-medium py-2 px-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-button" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        <span className="text-[#263C48]">Php</span>
      </button>

      <button className="flex items-center bg-slate-200 hover:bg-slate-300 text-white font-medium py-2 px-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-button" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
        </svg>
        <span className="text-[#263C48]">GoHighLevel</span>
      </button>
    </div>
  );
};

export default ExpertiseButtons;