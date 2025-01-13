import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface ArticleContentProps {
  content: {
    sections: Array<{
      type: string;
      content: string;
      title?: string;
      items?: string[];
      tableData?: Array<Record<string, string | number>>;
      chartData?: Array<Record<string, string | number>>;
    }>;
  };
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  const renderSection = (section: ArticleContentProps['content']['sections'][0], index: number) => {
    switch (section.type) {
      case 'introduction':
        return <p key={index} className="mb-6 text-lg leading-relaxed">{section.content}</p>;
      
      case 'heading':
        return <h2 key={index} className="text-2xl font-bold mb-4">{section.title}</h2>;
      
      case 'subheading':
        return <h3 key={index} className="text-xl font-semibold mb-3">{section.title}</h3>;
      
      case 'paragraph':
        return <p key={index} className="mb-4">{section.content}</p>;
      
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
            {section.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      
      case 'table':
        return section.tableData ? (
          <div key={index} className="mb-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {Object.keys(section.tableData[0]).map((header) => (
                    <TableHead key={header}>{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.tableData.map((row, i) => (
                  <TableRow key={i}>
                    {Object.values(row).map((cell, j) => (
                      <TableCell key={j}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : null;
      
      case 'chart':
        return section.chartData ? (
          <div key={index} className="mb-6 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={section.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <article className="prose prose-invert max-w-none">
      {content.sections.map((section, index) => renderSection(section, index))}
    </article>
  );
};