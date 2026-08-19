import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, requirement, date, source, timestamp } = body;

    // Log the lead data
    console.log('[LEAD CAPTURED]', {
      name,
      phone,
      requirement,
      date,
      source,
      timestamp: timestamp || new Date().toISOString(),
    });

    // Here you can hook up Google Sheets API, Webhook, CRM, or email service
    return NextResponse.json({
      success: true,
      message: 'Lead received successfully',
    });
  } catch (error) {
    console.error('[LEAD SUBMISSION ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
