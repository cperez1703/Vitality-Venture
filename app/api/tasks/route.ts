import clientPromise from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('Vitality');
    const collection = db.collection('tasks');

    const { userId } = getAuth(req);

    if (!userId) {
      return new NextResponse(JSON.stringify({ error: 'User not authenticated' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const task = await req.json();

    const taskWithUserId = { ...task, userId };

    const result = await collection.insertOne(taskWithUserId);

    return new NextResponse(JSON.stringify({ insertedId: result.insertedId }), {
      status: 201,
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
