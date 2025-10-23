
import React from 'react';

const Arrow = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center mx-4 ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </div>
);

const VerticalArrow = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center my-2 ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
    </svg>
  </div>
);


const FlowBox = ({ title, description, children, className = '' }: { title: string, description: string, children?: React.ReactNode, className?: string }) => (
  <div className={`bg-white border-l-4 border-brand-teal p-4 rounded-r-lg shadow-md flex-grow ${className}`}>
    <h3 className="font-bold text-brand-blue">{title}</h3>
    <p className="text-sm text-slate-500">{description}</p>
    {children}
  </div>
);

export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-brand-blue mb-4">System Architecture Overview & Flow</h2>
      <p className="text-slate-600 mb-6">
        The proposed system follows a hybrid cloud architecture that combines open-source telephony (FreeSWITCH) with modern AI services, orchestrated through workflow automation (n8n).
      </p>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-0">
        <div className="flex flex-col space-y-4">
          <FlowBox title="SIP Trunks (India DIDs)" description="Virtual numbers from Exotel/MyOperator. Route incoming/outgoing calls" />
          <VerticalArrow />
          <FlowBox title="FreeSWITCH (SIP Server)" description="Open-source PBX for call routing. Handles dialplans, IVR, call recording" />
          <VerticalArrow />
          <FlowBox title="LiveKit Agents (Voice Layer)" description="Real-time voice AI agents. Low-latency audio, barge-in support">
            <div className="mt-4 border-t pt-4 space-y-2">
                <div className="flex items-start pl-2 border-l-2 border-dashed border-slate-300 relative">
                    <span className="absolute -left-1 top-2 h-0.5 w-3 bg-slate-300"></span>
                    <FlowBox title="STT Engine" description="Sarvam AI (₹30/hour). Multilingual support" className="shadow-none border-brand-blue !p-2" />
                </div>
                 <div className="flex items-start pl-2 border-l-2 border-dashed border-slate-300 relative">
                    <span className="absolute -left-1 top-2 h-0.5 w-3 bg-slate-300"></span>
                    <FlowBox title="RAG System" description="Vector DB (Pinecone). Retrieves contextual info" className="shadow-none border-brand-blue !p-2" />
                </div>
                 <div className="flex items-start pl-2 border-l-2 border-dashed border-slate-300 relative">
                    <span className="absolute -left-1 top-2 h-0.5 w-3 bg-slate-300"></span>
                    <FlowBox title="LLM Engine" description="GPT-4o-mini. Generates responses" className="shadow-none border-brand-blue !p-2" />
                </div>
            </div>
          </FlowBox>
        </div>
        
        <div className="hidden lg:flex flex-col justify-center items-center px-4">
            <div className="w-px h-full bg-slate-300"></div>
        </div>

        <div className="flex flex-col space-y-4 mt-4 lg:mt-0">
            <FlowBox title="TTS Engine" description="OpenAI TTS (₹1.3/1K chars). Natural voice synthesis" />
            <VerticalArrow />
            <FlowBox title="CRM System" description="Zoho CRM (₹35/user/month). Logs calls, updates records" />
            <VerticalArrow />
            <FlowBox title="n8n Workflows (Automation)" description="Orchestration & automation. Error handling, monitoring" />
        </div>
      </div>
    </div>
  );
};
