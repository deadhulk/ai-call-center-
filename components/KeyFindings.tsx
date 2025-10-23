
import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const findings = [
    { title: "Setup Cost", value: "₹1,21,000 - ₹2,40,000", description: "(one-time investment)" },
    { title: "Monthly Operating Cost (10 agents)", value: "₹1,34,378", description: "vs ₹4,10,000 traditional (67% savings)" },
    { title: "3-Year Total Savings", value: "₹96,52,392", description: "compared to traditional call centers" },
    { title: "ROI Timeline", value: "2-3 months", description: "for full investment recovery" },
    { title: "Availability", value: "24/7/365", description: "vs 8-10 hours/day traditional" },
    { title: "Scalability", value: "Instant", description: "vs 2-4 weeks hiring time" }
];

export const KeyFindings: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Executive Summary & Key Findings</h2>
            <p className="text-slate-600 mb-6">
                This document provides a comprehensive cost analysis for building an AI-powered call center system from scratch for the Indian telecommunications sector. The architecture leverages FreeSWITCH, LiveKit agents, Retrieval-Augmented Generation (RAG), and enterprise CRM integration to deliver 24/7 intelligent voice interactions at a fraction of traditional call center costs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {findings.map((finding) => (
                    <div key={finding.title} className="flex items-start space-x-4 p-4 bg-brand-gray rounded-md">
                        <div className="flex-shrink-0">
                           <CheckIcon />
                        </div>
                        <div>
                            <p className="font-semibold text-brand-blue">{finding.title}: <span className="font-bold text-brand-teal">{finding.value}</span></p>
                            <p className="text-sm text-slate-500">{finding.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
