
import React, { useState } from 'react';
import { Header } from './components/Header';
import { KeyFindings } from './components/KeyFindings';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { Section } from './components/Section';
import { CostTable } from './components/CostTable';
import { ComparisonTable } from './components/ComparisonTable';
import {
  technicalStack,
  oneTimeSetupCosts,
  monthlyCosts,
  scalabilityAnalysis,
  costComparison,
  setupTimeline
} from './constants';
import { ScalabilitySlider } from './components/ScalabilitySlider';

const App: React.FC = () => {
  const [selectedAgents, setSelectedAgents] = useState<5 | 10 | 20 | 50>(10);

  const selectedMonthlyCost = monthlyCosts[selectedAgents];

  return (
    <div className="bg-brand-gray min-h-screen font-sans text-slate-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8 space-y-8">
        <KeyFindings />
        
        <ArchitectureDiagram />

        <Section title="Technical Stack">
          <CostTable
            headers={['Layer', 'Component', 'Purpose']}
            data={technicalStack}
            isCurrency={false}
          />
        </Section>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Section title="One-Time Setup Costs">
            <CostTable
              headers={['Component', 'Description', 'Cost Range (INR)']}
              data={oneTimeSetupCosts}
            />
          </Section>
          <Section title="Setup Timeline">
             <ul className="space-y-4">
                {setupTimeline.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 bg-brand-teal text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">{item.week}</div>
                        <div>
                            <p className="font-semibold text-brand-blue">{item.title}</p>
                            <p className="text-slate-600">{item.description}</p>
                        </div>
                    </li>
                ))}
             </ul>
             <p className="mt-6 text-center font-bold text-brand-blue bg-brand-teal/10 p-3 rounded-lg">Total Time: 4-6 weeks from start to production deployment</p>
          </Section>
        </div>

        <Section title="Monthly Recurring & Scalability Analysis">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <ScalabilitySlider
              value={selectedAgents}
              onChange={(val) => setSelectedAgents(val as 5 | 10 | 20 | 50)}
            />
            <div className="mt-6 animate-fade-in">
              <CostTable
                headers={['Component', 'Specifications', 'Monthly Cost (INR)']}
                data={selectedMonthlyCost}
              />
            </div>
          </div>
        </Section>
        
        <Section title="Scalability Insights">
          <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {scalabilityAnalysis.headers.map(header => (
                            <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {scalabilityAnalysis.rows.map((row, idx) => (
                        <tr key={idx} className={row.agents === selectedAgents ? 'bg-brand-teal/10' : ''}>
                            <td className="px-6 py-4 whitespace-nowrap font-bold text-brand-blue">{row.agents} agents</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-700">{row.minutes.toLocaleString('en-IN')}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-700">₹{row.infrastructure.toLocaleString('en-IN')}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-700">₹{row.aiServices.toLocaleString('en-IN')}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-700">₹{row.crm.toLocaleString('en-IN')}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-700">₹{row.telephony.toLocaleString('en-IN')}</td>
                            <td className="px-6 py-4 whitespace-nowrap font-semibold text-brand-teal">₹{row.total.toLocaleString('en-IN')}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-700">₹{row.costPerAgent.toLocaleString('en-IN')}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-slate-700">₹{row.costPerMinute.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </Section>
        
        <Section title="Cost Comparison: Traditional vs AI Call Center (10 Agents)">
           <ComparisonTable data={costComparison}/>
        </Section>

      </main>
      <footer className="text-center p-6 text-slate-500 text-sm">
        <p>POC Generated from "Budget AI Call Center Architecture" Document. All figures are for illustrative purposes.</p>
      </footer>
    </div>
  );
};

export default App;
