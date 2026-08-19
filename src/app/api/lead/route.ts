import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, requirement, date, source, timestamp } = body;

    const payload = {
      name: name ? String(name).trim() : '',
      phone: phone ? String(phone).trim() : '',
      requirement: requirement ? String(requirement).trim() : '',
      source: source ? String(source).trim() : 'Website Enquiry',
      date: date ? String(date).trim() : '',
      timestamp: timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    console.log('[LEAD CAPTURED]:', payload);

    // Forward to Google Sheets Webhook if configured in environment variables
    const googleSheetWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_APPS_SCRIPT_URL;

    if (googleSheetWebhook) {
      try {
        const sheetRes = await fetch(googleSheetWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          redirect: 'follow',
        });

        const resText = await sheetRes.text();
        console.log(`[GOOGLE SHEETS STATUS]: HTTP ${sheetRes.status} | Response:`, resText);
      } catch (sheetError) {
        console.error('[GOOGLE SHEETS SYNC ERROR]:', sheetError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Our team will connect with you shortly with complete details.',
    });
  } catch (error) {
    console.error('[LEAD SUBMISSION ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry. Please call us directly at 800 800 8946.' },
      { status: 500 }
    );
  }
}
