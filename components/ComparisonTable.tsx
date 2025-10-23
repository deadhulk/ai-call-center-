
import React from 'react';
import { CostComparisonData } from '../types';

interface ComparisonTableProps {
    data: CostComparisonData[];
}

const SavingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


export const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Category</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional Call Center</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI-Powered Call Center</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row) => (
                        <tr key={row.category}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.traditional}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.ai}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-700">
                                {row.savings.startsWith('Higher') ? row.savings : <><SavingsIcon /> {row.savings}</>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
