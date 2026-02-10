import React from 'react';
import { InfoBoxProps } from '../types';

const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-50 flex flex-col items-center text-center transition-all hover:shadow-md group">
      <div className="mb-4 bg-blue-50 p-4 rounded-full group-hover:bg-[#407ADE]/10 transition-colors">
        <img src={icon} alt={title} className="w-12 h-12 grayscale group-hover:grayscale-0" />
      </div>
      <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide group-hover:text-[#407ADE] transition-colors">{title}</h4>
      <p className="text-gray-500 text-sm">{content}</p>
    </div>
  );
};

export default InfoBox;