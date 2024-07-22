import clientPromise from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  try {
    const { points } = await req.json();

    const { userId } = getAuth(req);

    if (!userId) {
      return new NextResponse(JSON.stringify({ error: 'User not authenticated' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const client = await clientPromise;
    const db = client.db('Vitality');
    const collection = db.collection('users');

    const result = await collection.updateOne(
      { userId },
      { $set: { points } },
      { upsert: true }
    );

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
