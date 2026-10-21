import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function exportRelocationBinderPDF(userProfile, countryData, budgetData, countdownData, packingCategories) {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;

  // Primary Theme Colors
  const primaryColor = [37, 99, 235]; // Royal Blue
  const darkTextColor = [30, 41, 59]; // Slate 800
  const grayTextColor = [100, 116, 139]; // Slate 500

  // 1. Cover / Header Banner
  doc.setFillColor(15, 23, 42); // Slate 900
  doc.rect(0, 0, pageWidth, 42, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('EXPATCOMPASS RELOCATION MASTER BINDER', 14, 20);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Personalized Transition Plan for: ${userProfile.origin || 'Home'} -> ${userProfile.destinationCity}, ${countryData.name}`, 14, 28);
  doc.text(`Generated on: ${new Date().toLocaleDateString()} | Persona: ${userProfile.persona.toUpperCase()} | Diet: ${userProfile.dietary.toUpperCase()}`, 14, 35);

  let startY = 50;

  // 2. Profile Summary Box
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, startY, pageWidth - 28, 26, 3, 3, 'FD');

  doc.setTextColor(...darkTextColor);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Relocation Profile Summary', 18, startY + 8);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`• Destination: ${userProfile.destinationCity}, ${countryData.name} (${countryData.flag || ''})`, 18, startY + 16);
  doc.text(`• Travel Party: ${userProfile.persona} | Religion/Faith: ${userProfile.faith || 'None'}`, 18, startY + 22);
  doc.text(`• Emergency Police: ${countryData.emergencyNumbers?.police || '112'} | Ambulance: ${countryData.emergencyNumbers?.ambulance || '112'}`, 120, startY + 16);
  doc.text(`• Official Currency: ${countryData.currency} (${countryData.symbol}) | Language: ${countryData.language}`, 120, startY + 22);

  startY += 34;

  // 3. Relocation & Monthly Budget Projection Table
  if (budgetData) {
    doc.setTextColor(...primaryColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('1. Estimated Relocation & Monthly Living Budget', 14, startY);
    startY += 4;

    const personaKey = userProfile.persona.toLowerCase().includes('family') ? 'family' : 'bachelor';
    const monthly = budgetData[personaKey] || {};
    const upfront = budgetData.upfrontRelocation || {};

    const tableRows = [
      ['Estimated Monthly Rent (Warm)', `${countryData.symbol}${monthly.rent || 0}`],
      ['Monthly Groceries & Dining', `${countryData.symbol}${(monthly.groceries || 0) + (monthly.leisure || 0)}`],
      ['Public Transit & Commuting', `${countryData.symbol}${monthly.transport || 0}`],
      ['Health Insurance & Utilities', `${countryData.symbol}${(monthly.healthInsurance || 0) + (monthly.utilities || 0)}`],
      ...(monthly.childcare ? [['Childcare / Schooling', `${countryData.symbol}${monthly.childcare}`]] : []),
      ['Initial Security Deposit (Kaution/Bond)', `${countryData.symbol}${(monthly.rent || 1000) * (upfront.depositRentMultiplier || 2)}`],
      ['Temporary 1-Month Stay & Sunk Costs', `${countryData.symbol}${upfront.temporaryStay1Month || 1800}`]
    ];

    doc.autoTable({
      startY: startY,
      head: [['Expense Category', `Estimated Cost (${countryData.currency})`]],
      body: tableRows,
      theme: 'striped',
      headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: 'bold' },
      styles: { fontSize: 8, cellPadding: 3 },
      margin: { left: 14, right: 14 }
    });

    startY = doc.lastAutoTable.finalY + 10;
  }

  // 4. Strict Local Laws & Warnings
  if (countryData.strictRulesAndLaws && countryData.strictRulesAndLaws.length > 0) {
    if (startY > pageHeight - 60) {
      doc.addPage();
      startY = 20;
    }

    doc.setTextColor(220, 38, 38); // Red
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`2. Essential Legal Rules & High-Fine Regulations in ${countryData.name}`, 14, startY);
    startY += 6;

    const lawRows = countryData.strictRulesAndLaws.map(law => [
      law.title,
      law.desc,
      law.severity.toUpperCase()
    ]);

    doc.autoTable({
      startY: startY,
      head: [['Rule / Regulation', 'Why It Matters & Penalties', 'Severity']],
      body: lawRows,
      theme: 'grid',
      headStyles: { fillColor: [220, 38, 38], textColor: 255, fontStyle: 'bold' },
      styles: { fontSize: 8, cellPadding: 2.5 },
      columnStyles: {
        0: { cellWidth: 45, fontStyle: 'bold' },
        1: { cellWidth: 115 },
        2: { cellWidth: 22, halign: 'center' }
      },
      margin: { left: 14, right: 14 }
    });

    startY = doc.lastAutoTable.finalY + 10;
  }

  // Page 2: Countdown & Packing
  doc.addPage();
  startY = 20;

  // 5. One Month Left Countdown (T-30 Checklist)
  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('3. T-30 Days Departure Countdown Protocol', 14, startY);
  startY += 5;

  const countdownRows = [];
  countdownData.forEach(stage => {
    stage.tasks.forEach(task => {
      countdownRows.push([
        stage.week.split(' ')[0],
        task.title,
        task.desc.length > 130 ? task.desc.substring(0, 130) + '...' : task.desc
      ]);
    });
  });

  doc.autoTable({
    startY: startY,
    head: [['Timeline', 'Task', 'Action Details']],
    body: countdownRows.slice(0, 12),
    theme: 'striped',
    headStyles: { fillColor: [15, 118, 110], textColor: 255 },
    styles: { fontSize: 7.5, cellPadding: 2.2 },
    columnStyles: {
      0: { cellWidth: 25, fontStyle: 'bold' },
      1: { cellWidth: 55, fontStyle: 'bold' },
      2: { cellWidth: 102 }
    },
    margin: { left: 14, right: 14 }
  });

  startY = doc.lastAutoTable.finalY + 10;

  // 6. Packing Matrix
  if (startY > pageHeight - 60) {
    doc.addPage();
    startY = 20;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`4. Personalized Packing Matrix (${userProfile.persona.toUpperCase()})`, 14, startY);
  startY += 5;

  const isFamily = userProfile.persona.toLowerCase().includes('family');
  const hasPet = userProfile.persona.toLowerCase().includes('pet');

  const packingRows = [];
  packingCategories.forEach(cat => {
    const items = [
      ...cat.bachelorItems,
      ...(isFamily ? cat.familyItems : []),
      ...(hasPet ? cat.petItems : [])
    ];
    items.forEach(item => {
      packingRows.push([
        cat.name,
        `[ ] ${item.title}`,
        item.priority.toUpperCase()
      ]);
    });
  });

  doc.autoTable({
    startY: startY,
    head: [['Category', 'Item / Requirement', 'Priority']],
    body: packingRows.slice(0, 18),
    theme: 'grid',
    headStyles: { fillColor: [79, 70, 229], textColor: 255 },
    styles: { fontSize: 7.5, cellPadding: 2 },
    columnStyles: {
      0: { cellWidth: 40, fontStyle: 'bold' },
      1: { cellWidth: 122 },
      2: { cellWidth: 20, halign: 'center' }
    },
    margin: { left: 14, right: 14 }
  });

  // 5. Visa Process & Pathways
  if (countryData.visaTypes && countryData.visaTypes.length > 0) {
    doc.addPage();
    startY = 20;

    doc.setTextColor(126, 34, 206); // Purple
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`5. Visa Process & Legal Entry Pathways for ${countryData.name}`, 14, startY);
    startY += 6;

    const visaRows = countryData.visaTypes.map(v => [
      v.name,
      v.timeframe,
      v.desc
    ]);

    doc.autoTable({
      startY: startY,
      head: [['Visa Type', 'Processing Time', 'Eligibility & Requirements']],
      body: visaRows,
      theme: 'grid',
      headStyles: { fillColor: [126, 34, 206], textColor: 255 },
      styles: { fontSize: 8, cellPadding: 3 },
      columnStyles: {
        0: { cellWidth: 50, fontStyle: 'bold' },
        1: { cellWidth: 32, halign: 'center' },
        2: { cellWidth: 100 }
      },
      margin: { left: 14, right: 14 }
    });
  }

  // Footer on each page
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...grayTextColor);
    doc.text(
      `ExpatCompass AI Master Relocation Binder • Page ${i} of ${pageCount} • Confidential & Personalized`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  // Save the PDF
  const filename = `ExpatCompass_${countryData.name}_${userProfile.destinationCity}_Plan.pdf`;
  doc.save(filename);
}
