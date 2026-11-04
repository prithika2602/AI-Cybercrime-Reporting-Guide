// Standalone Node.js demonstration of the checklist automation.
// Usage: node scripts/checklist-generator.js financial
// Supported: financial, account, identity, harassment, intimate
const guides = {
 financial: ["Call 1930 immediately for financial cyber fraud.","Contact your bank/payment provider using an official channel.","Submit a complaint at https://cybercrime.gov.in/ and retain the acknowledgement.","Preserve transaction reference, date/time, amount and original messages.","Never share OTP, UPI PIN, CVV, passwords or screen-sharing access."],
 account: ["Use the platform's official account-recovery process.","Change compromised and reused passwords from a trusted device.","End unknown sessions and remove unfamiliar recovery methods.","Enable multi-factor authentication and secure linked email.","Preserve login alerts and report through the official portal where appropriate."],
 identity: ["Preserve fake profile URL, username, messages and timestamps.","Report the impersonating profile to the platform.","Secure affected accounts and financial services.","File a complaint at https://cybercrime.gov.in/ and keep the acknowledgement."],
 harassment: ["If physical danger is immediate, contact local police/emergency services.","Do not retaliate or arrange to meet the person.","Preserve messages, URLs, call logs and timestamps.","Use platform block/report tools when safe.","Report through the official portal and/or local police as appropriate."],
 intimate: ["Prioritise immediate safety and contact police if in danger.","Preserve safe metadata such as URLs, account handles and timestamps.","Do not download, save, screenshot or forward intimate content.","Report to the platform and https://cybercrime.gov.in/.","If a child may be depicted, do not save or share the material; report immediately."]
};
const key = process.argv[2] || "financial";
if (!guides[key]) {
  console.error("Usage: node scripts/checklist-generator.js financial|account|identity|harassment|intimate");
  process.exit(1);
}
const output = [
  `CYBERSAFE INDIA — ${key.toUpperCase()} CHECKLIST`,
  "",
  ...guides[key].map((step, i) => `[ ] ${i + 1}. ${step}`),
  "",
  "Educational guide only. Verify current procedures on official sources."
].join("\n");
console.log(output);
