import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, requirement, date, source, timestamp } = body;

    const payload = {
      name: name || 'Not Provided',
      phone: phone || '',
      requirement: requirement || '2 BHK / General Enquiry',
      date: date || new Date().toLocaleDateString('en-IN'),
      source: source || 'Website Modal',
      timestamp: timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    console.log('[LEAD CAPTURED]:', payload);

    // Forward to Google Sheets Webhook if configured in environment variables
    const googleSheetWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_APPS_SCRIPT_URL;

    if (googleSheetWebhook) {
      try {
        await fetch(googleSheetWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        console.log('[GOOGLE SHEETS]: Lead successfully synced to Google Sheets.');
      } catch (sheetError) {
        console.error('[GOOGLE SHEETS SYNC ERROR]:', sheetError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Our sales advisor will connect with you shortly.',
    });
  } catch (error) {
    console.error('[LEAD SUBMISSION ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry. Please call us directly at 800 800 8946.' },
      { status: 500 }
    );
  }
}
