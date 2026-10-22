import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Shield,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';

const DEFAULT_DOCUMENTS = [
  {
    id: 'doc_passport',
    name: 'International Passport',
    desc: 'Valid for at least 6-12 months beyond your initial visa expiration, with at least 3 blank pages.',
    mandatory: true,
    category: 'Identification',
    physicalOriginal: true,
    apostilleNeeded: false,
    swornTranslation: false,
    cloudBackup: false
  },
  {
    id: 'doc_visa',
    name: 'Visa Stamping / Digital Entry Authorization (eVisa / CoS)',
    desc: 'Physical consular visa sticker or official digital share-code and grant letter.',
    mandatory: true,
    category: 'Immigration',
    physicalOriginal: true,
    apostilleNeeded: false,
    swornTranslation: false,
    cloudBackup: false
  },
  {
    id: 'doc_degree',
    name: 'University Degree Certificates & Academic Transcripts',
    desc: 'Original bachelor/master/PhD degree certificates and marksheets for immigration equivalence evaluation.',
    mandatory: true,
    category: 'Education & Career',
    physicalOriginal: true,
    apostilleNeeded: true,
    swornTranslation: true,
    cloudBackup: false
  },
  {
    id: 'doc_contract',
    name: 'Signed Employment Contract / Remote Work Agreement',
    desc: 'Official signed job offer letter or remote service contract detailing job title, salary, and start date.',
    mandatory: true,
    category: 'Education & Career',
    physicalOriginal: true,
    apostilleNeeded: false,
    swornTranslation: true,
    cloudBackup: false
  },
  {
    id: 'doc_pcc',
    name: 'Police Clearance Certificate (PCC) / Criminal Background Check',
    desc: 'Must be issued less than 90 days before visa application from your national police or passport office.',
    mandatory: true,
    category: 'Immigration',
    physicalOriginal: true,
    apostilleNeeded: true,
    swornTranslation: true,
    cloudBackup: false
  },
  {
    id: 'doc_marriage',
    name: 'Original Marriage Certificate (for couples & families)',
    desc: 'Government marriage certificate; mandatory for family reunion visas and spouse dependent status.',
    mandatory: false,
    category: 'Family & Vital Records',
    physicalOriginal: true,
    apostilleNeeded: true,
    swornTranslation: true,
    cloudBackup: false,
    familyOnly: true
  },
  {
    id: 'doc_birth',
    name: 'Original Birth Certificates (for children & self)',
    desc: 'Official long-form birth certificates listing parents\' names. Mandatory for school admissions and residence cards.',
    mandatory: false,
    category: 'Family & Vital Records',
    physicalOriginal: true,
    apostilleNeeded: true,
    swornTranslation: true,
    cloudBackup: false,
    familyOnly: true
  },
  {
    id: 'doc_vaccines',
    name: 'Pediatric Immunization Record / Child Health Booklet',
    desc: 'Pediatrician-signed vaccination history (especially Measles/MMR, DTP, Polio) for daycare and school registration.',
    mandatory: false,
    category: 'Health & Medical',
    physicalOriginal: true,
    apostilleNeeded: false,
    swornTranslation: true,
    cloudBackup: false,
    familyOnly: true
  },
  {
    id: 'doc_medical',
    name: 'Chronic Medical Prescriptions & Doctor\'s English Letter',
    desc: 'Doctor letter on letterhead explaining diagnosis, active generic chemical substance, dosage, and 3-month supply.',
    mandatory: false,
    category: 'Health & Medical',
    physicalOriginal: true,
    apostilleNeeded: false,
    swornTranslation: false,
    cloudBackup: false
  },
  {
    id: 'doc_driving',
    name: 'Home Driving License + International Driving Permit (IDP)',
    desc: 'Original physical driving license plus 1949 or 1968 convention IDP issued before departure.',
    mandatory: false,
    category: 'Transportation',
    physicalOriginal: true,
    apostilleNeeded: false,
    swornTranslation: false,
    cloudBackup: false
  },
  {
    id: 'doc_photos',
    name: 'Biometric Passport Sized Photos (35mm x 45mm)',
    desc: 'Recent biometric photos meeting ICAO standard with white/light grey background (keep 6–8 physical copies in cabin bag).',
    mandatory: true,
    category: 'Identification',
    physicalOriginal: true,
    apostilleNeeded: false,
    swornTranslation: false,
    cloudBackup: false
  }
];

export default function DocumentVault({ userProfile, countryData }) {
  const isFamily = userProfile.persona.toLowerCase().includes('family');

  const [documents, setDocuments] = useState(() => {
    try {
      const saved = localStorage.getItem('expat_document_vault');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return DEFAULT_DOCUMENTS;
  });

  const [newDocName, setNewDocName] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const saveDocs = (newDocs) => {
    setDocuments(newDocs);
    localStorage.setItem('expat_document_vault', JSON.stringify(newDocs));
  };

  const toggleCheck = (docId, field) => {
    const updated = documents.map(d => {
      if (d.id === docId) {
        return { ...d, [field]: !d[field] };
      }
      return d;
    });
    saveDocs(updated);

    const targetDoc = updated.find(d => d.id === docId);
    if (targetDoc.cloudBackup && targetDoc.physicalOriginal) {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#1c1917', '#78716c', '#10b981']
      });
    }
  };

  const handleAddCustomDoc = () => {
    if (!newDocName.trim()) return;
    const newDoc = {
      id: `custom_${Date.now()}`,
      name: newDocName.trim(),
      desc: 'Custom relocation document added by you.',
      mandatory: false,
      category: 'Custom Documents',
      physicalOriginal: false,
      apostilleNeeded: false,
      swornTranslation: false,
      cloudBackup: false
    };
    saveDocs([...documents, newDoc]);
    setNewDocName('');
  };

  // Filter based on category and persona
  const visibleDocs = documents.filter(d => {
    if (!isFamily && d.familyOnly) return false;
    if (filterCategory === 'all') return true;
    return d.category === filterCategory;
  });

  // Calculate vault completeness
  let totalChecks = 0;
  let completedChecks = 0;
  visibleDocs.forEach(d => {
    totalChecks += 2; // physical + cloud
    if (d.physicalOriginal) completedChecks++;
    if (d.cloudBackup) completedChecks++;
    if (d.apostilleNeeded) {
      totalChecks++;
      if (d.apostilleDone) completedChecks++;
    }
    if (d.swornTranslation) {
      totalChecks++;
      if (d.translationDone) completedChecks++;
    }
  });

  const completenessPercent = totalChecks > 0 ? Math.round((completedChecks / totalChecks) * 100) : 0;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <FileText className="w-3.5 h-3.5 text-stone-700" />
            <span>Expat Dossier & Document Readiness</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Legal Document Vault & <em className="italic font-serif">Apostille Tracker</em>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Track certified physical originals, Hague apostilles, sworn court translations, and encrypted scans for {countryData.name}.
          </p>
        </div>

        {/* Completeness Card */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3.5 self-start md:self-auto min-w-[210px]">
          <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-stone-800" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Vault Readiness</div>
            <div className="text-2xl font-serif font-medium text-stone-900">{completenessPercent}%</div>
            <div className="text-[10px] text-stone-400 font-mono">{completedChecks} of {totalChecks} checks verified</div>
          </div>
        </div>
      </div>

      {/* Golden Document Preservation Notice */}
      <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs sm:text-sm flex items-start gap-3.5">
        <div className="w-8 h-8 rounded-full bg-white border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
          <AlertTriangle className="w-4 h-4 text-amber-800" />
        </div>
        <div className="space-y-1">
          <strong className="text-stone-900 block font-serif font-semibold text-sm">Essential Rule: Carry All Original Certificates in Your Cabin Luggage</strong>
          <p className="text-stone-700 leading-relaxed text-xs">
            Assemble your original passports, apostilled degree diplomas, birth & marriage certificates, and medical records in a <strong>waterproof document folder inside your personal carry-on bag</strong>. Never place irreplaceable legal documents in checked airline baggage.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Add Custom Doc */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
        <div className="flex flex-wrap gap-1.5 text-xs">
          {['all', 'Identification', 'Immigration', 'Education & Career', 'Family & Vital Records', 'Health & Medical', 'Transportation'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all border ${
                filterCategory === cat
                  ? 'bg-stone-900 border-stone-900 text-white shadow-sm'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {cat === 'all' ? `All Documents (${visibleDocs.length})` : cat}
            </button>
          ))}
        </div>

        {/* Add custom document input */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Add custom certificate..."
            value={newDocName}
            onChange={(e) => setNewDocName(e.target.value)}
            className="bg-white border border-stone-200 rounded-full px-4 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-400/20"
          />
          <button
            onClick={handleAddCustomDoc}
            className="p-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-full transition-colors"
            title="Add Document"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleDocs.map(doc => {
          return (
            <div
              key={doc.id}
              className="p-5 rounded-2xl bg-white border border-stone-200/90 hover:border-stone-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all space-y-3.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-serif text-stone-900 text-base flex items-center gap-2 flex-wrap">
                    <span>{doc.name}</span>
                    {doc.mandatory && (
                      <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                        Mandatory
                      </span>
                    )}
                    {doc.familyOnly && (
                      <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                        Family
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>

              {/* Checkboxes Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-stone-100 text-[11px]">
                {/* Physical Original */}
                <button
                  onClick={() => toggleCheck(doc.id, 'physicalOriginal')}
                  className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all text-left ${
                    doc.physicalOriginal
                      ? 'bg-stone-900 border-stone-900 text-white font-medium'
                      : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  {doc.physicalOriginal ? <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" /> : <Circle className="w-3.5 h-3.5 text-stone-300 shrink-0" />}
                  <span className="truncate">Original</span>
                </button>

                {/* Cloud Scan */}
                <button
                  onClick={() => toggleCheck(doc.id, 'cloudBackup')}
                  className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all text-left ${
                    doc.cloudBackup
                      ? 'bg-stone-900 border-stone-900 text-white font-medium'
                      : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  {doc.cloudBackup ? <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" /> : <Circle className="w-3.5 h-3.5 text-stone-300 shrink-0" />}
                  <span className="truncate">Cloud PDF</span>
                </button>

                {/* Hague Apostille */}
                {doc.apostilleNeeded ? (
                  <button
                    onClick={() => toggleCheck(doc.id, 'apostilleDone')}
                    className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all text-left ${
                      doc.apostilleDone
                        ? 'bg-stone-900 border-stone-900 text-white font-medium'
                        : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    {doc.apostilleDone ? <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" /> : <Circle className="w-3.5 h-3.5 text-stone-300 shrink-0" />}
                    <span className="truncate">Apostilled</span>
                  </button>
                ) : (
                  <div className="p-2 rounded-xl bg-stone-50 text-stone-400 text-center text-[10px] font-mono flex items-center justify-center border border-stone-100">
                    N/A
                  </div>
                )}

                {/* Sworn Translation */}
                {doc.swornTranslation ? (
                  <button
                    onClick={() => toggleCheck(doc.id, 'translationDone')}
                    className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all text-left ${
                      doc.translationDone
                        ? 'bg-stone-900 border-stone-900 text-white font-medium'
                        : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    {doc.translationDone ? <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" /> : <Circle className="w-3.5 h-3.5 text-stone-300 shrink-0" />}
                    <span className="truncate">Sworn Trans</span>
                  </button>
                ) : (
                  <div className="p-2 rounded-xl bg-stone-50 text-stone-400 text-center text-[10px] font-mono flex items-center justify-center border border-stone-100">
                    N/A
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
