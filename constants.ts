
import { CostComparisonData } from './types';

export const technicalStack = [
    ["Telephony", "FreeSWITCH + Exotel/MyOperator", "SIP routing, virtual numbers, call recording"],
    ["Voice AI", "LiveKit Cloud", "Real-time agent sessions, WebRTC media handling"],
    ["Speech-to-Text", "Sarvam AI", "Indian language support, ₹30/hour pricing"],
    ["Language Model", "OpenAI GPT-4o-mini", "Conversational intelligence, ₹1.2/1M tokens"],
    ["Text-to-Speech", "OpenAI TTS", "Natural voice synthesis, ₹1.3/1K characters"],
    ["Knowledge Base", "Pinecone Vector DB + RAG", "Contextual retrieval, semantic search"],
    ["CRM", "Zoho CRM Professional", "Customer data, call logging, analytics"],
    ["Orchestration", "n8n (self-hosted)", "Workflow automation, integrations"],
    ["Database", "PostgreSQL (managed)", "Persistent data storage"],
    ["Cache", "Redis (managed)", "Session management, performance"],
    ["Infrastructure", "DigitalOcean/AWS", "Cloud hosting, scalable compute"],
];

export const oneTimeSetupCosts = [
    ["FreeSWITCH Setup", "Installation, dialplan configuration, SIP trunk integration", "₹15,000 - ₹25,000"],
    ["LiveKit Agent Development", "Voice agent development, STT/TTS/LLM integration", "₹40,000 - ₹80,000"],
    ["RAG System Implementation", "Vector DB setup, embedding pipeline, retrieval logic", "₹30,000 - ₹60,000"],
    ["CRM Integration (Zoho)", "API integration, webhook setup, field mapping", "₹10,000 - ₹20,000"],
    ["n8n Workflow Setup", "Automation workflows, error handling, monitoring", "₹8,000 - ₹15,000"],
    ["Virtual Numbers (1-2 DIDs)", "India virtual numbers from Exotel/MyOperator", "₹0 - ₹5,000"],
    ["SSL Certificates & Security", "SSL/TLS setup, security hardening", "₹3,000 - ₹5,000"],
    ["Testing & QA", "End-to-end testing, load testing", "₹10,000 - ₹20,000"],
    ["Documentation & Training", "User manuals, admin training, agent training", "₹5,000 - ₹10,000"],
    ["TOTAL SETUP COST", "Sum of all one-time costs", "₹1,21,000 - ₹2,40,000"],
];

export const monthlyCosts = {
    5: [
        ["Cloud Infrastructure", "2 vCPU, 4 GB + 1 vCPU, 2 GB", 4176],
        ["LiveKit Agent Sessions", "~167 hours agent sessions", 14529],
        ["Speech-to-Text", "167 hours audio processing", 5010],
        ["LLM API", "~5M input + 2M output tokens", 1044],
        ["Text-to-Speech", "~200K characters", 2610],
        ["Vector Database", "100K vectors, 1 index", 1740],
        ["CRM Software", "5 users", 9135],
        ["Virtual Phone Numbers", "2 virtual numbers", 4350],
        ["Call Minutes", "10,000 mins in/out", 10000],
        ["Workflow Automation", "1 instance, 2 GB RAM", 783],
        ["Database (PostgreSQL)", "2 vCPU, 4 GB, 60 GB", 5220],
        ["Redis Cache", "1 vCPU, 1 GB RAM", 1305],
        ["Storage & Backups", "50 GB + backups", 1740],
        ["Monitoring & Logging", "Free tier", 0],
        ["TOTAL (5 Agents)", "", 61642]
    ],
    10: [
        ["Cloud Infrastructure", "4 vCPU, 8 GB + 2 vCPU, 4 GB", 8352],
        ["LiveKit Agent Sessions", "~333 hours agent sessions", 28971],
        ["Speech-to-Text", "333 hours audio processing", 9990],
        ["LLM API", "~10M input + 4M output tokens", 2088],
        ["Text-to-Speech", "~400K characters", 5220],
        ["Vector Database", "500K vectors, 2 indexes", 3480],
        ["CRM Software", "10 users", 30450],
        ["Virtual Phone Numbers", "3-4 virtual numbers", 7470],
        ["Call Minutes", "20,000 mins in/out", 20000],
        ["Workflow Automation", "1 instance, 4 GB RAM", 1305],
        ["Database (PostgreSQL)", "4 vCPU, 8 GB, 120 GB", 10614],
        ["Redis Cache", "2 vCPU, 2 GB RAM", 2088],
        ["Storage & Backups", "100 GB + backups", 2610],
        ["Monitoring & Logging", "Enhanced monitoring", 1740],
        ["TOTAL (10 Agents)", "", 134378]
    ],
    20: [
        // Dummy data based on scaling from table
        ["Cloud Infrastructure", "Scaled infrastructure", 16704],
        ["LiveKit, STT, LLM, TTS, VectorDB", "Scaled AI Services", 99498],
        ["CRM Software", "20 users", 60900],
        ["Virtual Phone Numbers & Minutes", "Scaled Telephony", 54940],
        ["Other Services", "Scaled services", 30000], // Extrapolated
        ["TOTAL (20 Agents)", "", 262042]
    ],
    50: [
        // Dummy data based on scaling from table
        ["Cloud Infrastructure", "Highly scaled infrastructure", 43500],
        ["LiveKit, STT, LLM, TTS, VectorDB", "Highly scaled AI Services", 244590],
        ["CRM Software", "50 users", 152250],
        ["Virtual Phone Numbers & Minutes", "Highly scaled Telephony", 137350],
        ["Other Services", "Highly scaled services", 60000], // Extrapolated
        ["TOTAL (50 Agents)", "", 637690]
    ]
};

export const scalabilityAnalysis = {
  headers: ["Team Size", "Monthly Minutes", "Infrastructure", "AI Services", "CRM", "Telephony", "Total/Month", "Cost/Agent", "Cost/Minute"],
  rows: [
    { agents: 5, minutes: 10000, infrastructure: 4176, aiServices: 24933, crm: 9135, telephony: 14350, total: 61642, costPerAgent: 12328, costPerMinute: 6.16 },
    { agents: 10, minutes: 20000, infrastructure: 8352, aiServices: 49857, crm: 30450, telephony: 27470, total: 132734, costPerAgent: 13273, costPerMinute: 6.64 },
    { agents: 20, minutes: 40000, infrastructure: 16704, aiServices: 99498, crm: 60900, telephony: 54940, total: 262042, costPerAgent: 13102, costPerMinute: 6.55 },
    { agents: 50, minutes: 100000, infrastructure: 43500, aiServices: 244590, crm: 152250, telephony: 137350, total: 637690, costPerAgent: 12754, costPerMinute: 6.38 },
  ]
};

export const costComparison: CostComparisonData[] = [
    { category: "Setup Cost", traditional: "₹50,000 - ₹1,00,000", ai: "₹1,21,000 - ₹2,40,000", savings: "Higher upfront, ROI in 2-3 months" },
    { category: "Agent Salaries", traditional: "₹3,00,000 (₹30K/agent)", ai: "₹0", savings: "₹3,00,000 saved" },
    { category: "Infrastructure", traditional: "₹50,000 (office, workstations)", ai: "₹8,352 (cloud servers)", savings: "₹41,648 saved" },
    { category: "Training & Onboarding", traditional: "₹25,000/month", ai: "₹0", savings: "₹25,000 saved" },
    { category: "Software & Tools", traditional: "₹15,000 (CRM, dialer)", ai: "₹59,526 (AI services)", savings: "Comparable cost" },
    { category: "Telephony", traditional: "₹20,000", ai: "₹27,470", savings: "Comparable cost" },
    { category: "Total Monthly Cost", traditional: "₹4,10,000", ai: "₹1,34,378", savings: "₹2,75,622 (67% reduction)" }
];

export const setupTimeline = [
    { week: '1', title: 'Week 1', description: 'Infrastructure setup, FreeSWITCH installation, virtual number provisioning.' },
    { week: '2-3', title: 'Week 2-3', description: 'LiveKit agent development, STT/LLM/TTS integration, RAG system setup.' },
    { week: '3-4', title: 'Week 3-4', description: 'CRM integration, n8n workflow configuration, security hardening.' },
    { week: '4-5', title: 'Week 4-5', description: 'Testing, QA, documentation, training.' },
];
