export async function sendSMS(to: string, body: string): Promise<void> {
  // TODO: replace with Twilio or Infobip SDK call
  console.log(`[SMS stub] To: ${to} | Message: ${body}`);
}
