
import React from 'react';

interface CostTableProps {
  headers: string[];
  data: (string | number)[][];
  isCurrency?: boolean;
}

export const CostTable: React.FC<CostTableProps> = ({ headers, data, isCurrency = true }) => {
  const lastColIndex = headers.length - 1;

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-500'
                  } ${cellIndex === lastColIndex ? 'font-semibold text-brand-teal' : ''}`}
                >
                  {isCurrency && cellIndex === lastColIndex && typeof cell === 'string' && !cell.startsWith('₹') ? '₹' : ''}
                  {isCurrency && cellIndex === lastColIndex && typeof cell === 'number' ? `₹${cell.toLocaleString('en-IN')}` : cell}
                  {(!isCurrency || cellIndex !== lastColIndex) && cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
