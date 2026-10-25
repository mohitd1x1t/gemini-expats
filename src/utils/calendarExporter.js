/**
 * One-Click .ics iCalendar File Generator
 * Generates standards-compliant iCalendar format for Apple Calendar, Google Calendar, and Outlook.
 */

export function generateRelocationICS({
  departureDate,
  userProfile,
  countryData
}) {
  const now = new Date();
  const depDate = departureDate ? new Date(departureDate) : new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  const destName = countryData?.name || 'Destination';
  const destCity = userProfile?.destinationCity || 'Target City';

  const formatICSDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const addDays = (baseDate, days) => {
    const d = new Date(baseDate);
    d.setDate(d.getDate() + days);
    return d;
  };

  // Build scheduled relocation milestones relative to departure date
  const events = [
    {
      summary: `✈️ International Flight Departure: ${userProfile.origin} ➔ ${destCity}`,
      description: `Fly to ${destCity}, ${destName}. Ensure passport, consular visa, temporary housing confirmation, and emergency contacts are in hand luggage.`,
      start: depDate,
      durationHours: 12
    },
    {
      summary: `🏦 Mandatory Banking: Convert Savings to NRO/NRE Accounts`,
      description: `Finalize conversion of resident savings and demat accounts to Non-Resident status (FEMA Section 41).`,
      start: addDays(depDate, -14),
      durationHours: 2
    },
    {
      summary: `📦 Final Moving & Packing Dossier Inspection`,
      description: `Verify certified translations, Hague Apostilles, pediatric vaccination records, and international health insurance.`,
      start: addDays(depDate, -7),
      durationHours: 3
    },
    {
      summary: `🏛️ Critical: Municipal Address Registration (Anmeldung / BSN)`,
      description: `Mandatory municipal registration deadline at town hall / Bürgeramt within 14 days of arrival in ${destName}. Bring landlord confirmation.`,
      start: addDays(depDate, 5),
      durationHours: 2
    },
    {
      summary: `🏥 Local Health Card & Pediatrician Intake Appointment`,
      description: `Submit vaccination records to local pediatrician / health authority for school and Kita compliance in ${destCity}.`,
      start: addDays(depDate, 12),
      durationHours: 2
    }
  ];

  // If pet relocation active, add RNATT titer milestone
  if (userProfile.hasPets) {
    events.unshift({
      summary: `🐾 Pet Relocation: Rabies Titer RNATT Blood Draw (3-Month Delay)`,
      description: `Draw blood for ISO 11784 microchip and rabies antibody titer. Mandatory 90-day waiting period before entering ${destName}.`,
      start: addDays(depDate, -90),
      durationHours: 2
    });
  }

  // Generate .ics file format string
  let icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ExpatCompass//Relocation Navigator//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ];

  events.forEach((ev, idx) => {
    const dtStart = formatICSDate(ev.start);
    const end = new Date(ev.start.getTime() + ev.durationHours * 60 * 60 * 1000);
    const dtEnd = formatICSDate(end);
    const uid = `expatcompass-${Date.now()}-${idx}@expatcompass.app`;

    icsLines.push('BEGIN:VEVENT');
    icsLines.push(`UID:${uid}`);
    icsLines.push(`DTSTAMP:${formatICSDate(now)}`);
    icsLines.push(`DTSTART:${dtStart}`);
    icsLines.push(`DTEND:${dtEnd}`);
    icsLines.push(`SUMMARY:${ev.summary}`);
    icsLines.push(`DESCRIPTION:${ev.description}`);
    icsLines.push(`LOCATION:${destCity}, ${destName}`);
    icsLines.push('STATUS:CONFIRMED');
    icsLines.push('BEGIN:VALARM');
    icsLines.push('TRIGGER:-P1D');
    icsLines.push('ACTION:DISPLAY');
    icsLines.push(`DESCRIPTION:Reminder: ${ev.summary}`);
    icsLines.push('END:VALARM');
    icsLines.push('END:VEVENT');
  });

  icsLines.push('END:VCALENDAR');

  const icsBlob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(icsBlob);

  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', `expatcompass-relocation-${destCity.toLowerCase()}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
}
