import { NextResponse } from 'next/server';

export async function GET() {
  // Mock buyback & burn transactions
  const transactions = [
    {
      hash: '0x7a8b9c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c2d3e4f5a6b7c8d9e0f1a2b',
      recipient: 'Burn Address: 0x0000000000000000000000000000000000000000',
      amount: 1250000.500,
      timestamp: '2024-01-15T14:30:00Z'
    },
    {
      hash: '0x8b9c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c2d3e4f5a6b7c8d9e0f1a2b3c',
      recipient: 'Burn Address: 0x0000000000000000000000000000000000000000',
      amount: 980750.250,
      timestamp: '2024-01-15T14:00:00Z'
    },
    {
      hash: '0x9c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c2d3e4f5a6b7c8d9e0f1a2b3c4d',
      recipient: 'Burn Address: 0x0000000000000000000000000000000000000000',
      amount: 1562300.750,
      timestamp: '2024-01-15T13:30:00Z'
    },
    {
      hash: '0xa2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c2d3e4f5a6b7c8d9e0f1a2b3c4d5e',
      recipient: 'Burn Address: 0x0000000000000000000000000000000000000000',
      amount: 875420.125,
      timestamp: '2024-01-15T13:00:00Z'
    },
    {
      hash: '0xb3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f',
      recipient: 'Burn Address: 0x0000000000000000000000000000000000000000',
      amount: 1123456.875,
      timestamp: '2024-01-15T12:30:00Z'
    }
  ];

  return NextResponse.json({ transactions });
} 