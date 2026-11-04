const scenarios = {
 financial: {
  title:"Money / UPI fraud",
  intro:"If money has been debited or transferred without your consent, act immediately. Do not wait for the checklist to be complete before reporting.",
  tasks:[
   "Call the national cyber financial-fraud helpline 1930 immediately.",
   "Contact your bank / wallet / payment provider through its official channel and request that the transaction be reported and the account or payment instrument secured.",
   "Submit the complaint at cybercrime.gov.in and follow the portal instructions. Keep the acknowledgement number.",
   "Collect transaction ID / UTR, date and time, amount, bank or wallet name, relevant account or UPI details, SMS alerts and screenshots.",
   "Do not share OTP, UPI PIN, CVV, passwords or screen-sharing access with anyone claiming they can recover your money.",
   "Preserve original messages, call details, payment requests and URLs. Do not delete or edit them.",
   "Follow up with your bank and the police / investigating authority using the acknowledgement details."
  ]
 },
 account: {
  title:"Account hacked",
  intro:"Use a trusted device and the service's official recovery route. Secure linked email and phone accounts too.",
  tasks:[
   "Use the platform's official account-recovery page or app. Do not use recovery links sent by strangers.",
   "Change the password from a trusted device; change reused passwords on other services.",
   "Sign out unknown sessions, remove unfamiliar recovery email addresses / phone numbers and revoke suspicious app access.",
   "Enable multi-factor authentication and store recovery codes securely.",
   "Warn contacts not to trust unusual payment requests or links from the compromised account.",
   "Save login alerts, profile changes, messages, suspicious URLs and timestamps.",
   "Report the incident through cybercrime.gov.in and contact local police if there is financial loss, threats or other immediate harm."
  ]
 },
 identity: {
  title:"Identity theft / impersonation",
  intro:"Document how your identity is being misused and report the impersonation through the official portal and the affected service.",
  tasks:[
   "Capture the impersonating profile, phone number, email address, URL, posts and timestamps without engaging with the suspected offender.",
   "Report the fake account or content using the platform's in-app impersonation / abuse reporting process.",
   "If financial accounts or identity documents may be affected, contact the relevant bank / issuer / service through official channels.",
   "Change compromised passwords, revoke unknown sessions and enable multi-factor authentication.",
   "File a complaint at cybercrime.gov.in. Provide accurate details and retain the acknowledgement number.",
   "Keep original messages, emails, screenshots and any transaction records. Do not alter the original files.",
   "Tell affected contacts not to send money or disclose information to the impersonating account."
  ]
 },
 harassment: {
  title:"Online harassment / threats",
  intro:"Prioritise personal safety. If there is an immediate threat of physical harm, contact local police or emergency services now.",
  tasks:[
   "If you are in immediate danger, contact local police / emergency services and move to a safer place if possible.",
   "Do not retaliate, threaten back or arrange to meet the person.",
   "Preserve messages, call logs, profile URLs, usernames, dates, times and screenshots. Keep original files.",
   "Use the platform's block and report controls when safe to do so; consider tightening privacy settings.",
   "Tell a trusted person and seek support. For threats, stalking or repeated harassment, contact local police.",
   "Submit a cybercrime complaint at cybercrime.gov.in with accurate details and available evidence.",
   "Keep complaint and platform report acknowledgement numbers for follow-up."
  ]
 },
 intimate: {
  title:"Private or intimate content",
  intro:"Your safety and privacy matter. Do not download, copy, forward or repost intimate material to prove that it exists.",
  tasks:[
   "If there is immediate danger, coercion or a threat to meet in person, contact local police / emergency services and a trusted person.",
   "Preserve safe evidence such as the page URL, account handle, message text, timestamps and report IDs. Avoid downloading or forwarding the intimate content.",
   "Report the content to the platform using its non-consensual intimate imagery / abuse reporting route.",
   "Report through cybercrime.gov.in. The portal has reporting routes for crimes against women and children; follow the current portal guidance.",
   "If a child may be depicted, do not save, screenshot, download or share the material. Report it immediately to the official portal / police.",
   "Consider support from a trusted person, counsellor or qualified legal professional. Do not pay an extorter or send more material.",
   "Keep acknowledgement numbers and follow up with the appropriate police authority."
  ]
 }
};
let selected = "financial";
const checklist = document.getElementById("checklist");
function renderScenario(key){
 selected = key;
 const item = scenarios[key];
 document.querySelectorAll(".scenario-option").forEach(btn=>btn.classList.toggle("active",btn.dataset.scenario===key));
 document.getElementById("scenario-title").textContent=item.title;
 document.getElementById("scenario-intro").textContent=item.intro;
 checklist.innerHTML="";
 item.tasks.forEach((task,i)=>{
  const label=document.createElement("label"); label.className="task";
  const input=document.createElement("input"); input.type="checkbox"; input.id=`task-${key}-${i}`;
  const span=document.createElement("span"); span.textContent=task;
  label.append(input,span); checklist.append(label);
 });
}
document.querySelectorAll(".scenario-option").forEach(btn=>btn.addEventListener("click",()=>renderScenario(btn.dataset.scenario)));
function checklistText(){
 const item=scenarios[selected];
 const lines=[`CYBERSAFE INDIA — ${item.title.toUpperCase()}`,"",item.intro,""];
 item.tasks.forEach((t,i)=>{const box=document.getElementById(`task-${selected}-${i}`);lines.push(`${box?.checked?"[x]":"[ ]"} ${t}`)});
 lines.push("","Official portal: https://cybercrime.gov.in/","Financial cyber fraud helpline: 1930","Educational guide only. Verify current procedures on official sources.");
 return lines.join("\n");
}
document.getElementById("copy-checklist").addEventListener("click",async()=>{
 const btn=document.getElementById("copy-checklist");
 try{await navigator.clipboard.writeText(checklistText());btn.textContent="Copied ✓";}catch(e){btn.textContent="Copy unavailable";} 
 setTimeout(()=>btn.textContent="Copy checklist",1800);
});
document.getElementById("download-checklist").addEventListener("click",()=>{
 const blob=new Blob([checklistText()],{type:"text/plain;charset=utf-8"});
 const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`cybersafe-${selected}-checklist.txt`;a.click();URL.revokeObjectURL(url);
});
renderScenario("financial");
