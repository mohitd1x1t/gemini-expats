import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Circle,
  AlertTriangle,
  UploadCloud,
  FileCheck,
  Shield,
  Download,
  Plus,
  Sparkles,
  ExternalLink,
  Copy,
  Check
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

    // If all applicable checkboxes for this doc are checked, celebrate!
    const targetDoc = updated.find(d => d.id === docId);
    if (targetDoc.cloudBackup && targetDoc.physicalOriginal) {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#a855f7', '#3b82f6', '#10b981']
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
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            Expat Dossier & Document Readiness
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Document Vault & Legalization Tracker
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Track physical originals, Hague Apostilles, certified court translations, and encrypted cloud backups for {countryData.name}.
          </p>
        </div>

        {/* Completeness Card */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-purple-500/30 flex items-center gap-3 self-start md:self-auto min-w-[200px]">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Vault Readiness</div>
            <div className="text-2xl font-black text-purple-300">{completenessPercent}%</div>
            <div className="text-[10px] text-slate-500">{completedChecks} of {totalChecks} checks verified</div>
          </div>
        </div>
      </div>

      {/* Golden Document Preservation Notice */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-amber-300 block">The #1 Traveler Rule: Never Place Original Documents in Checked Luggage!</strong>
          <p className="text-amber-200/90 leading-relaxed text-xs">
            Always assemble original passports, apostilled degree certificates, marriage/birth certificates, work contracts, and police clearances in a <strong>clear, waterproof accordion binder kept inside your personal cabin backpack</strong>. Checked luggage can be delayed or lost.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Add Custom Doc */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 text-xs">
          {['all', 'Identification', 'Immigration', 'Education & Career', 'Family & Vital Records', 'Health & Medical', 'Transportation'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all border ${
                filterCategory === cat
                  ? 'bg-purple-600 border-purple-500 text-white shadow-sm'
                  : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? `All (${visibleDocs.length})` : cat}
            </button>
          ))}
        </div>

        {/* Add custom document input */}
        <div className="flex items-center gap-1.5">
          <input
            type="text"
            placeholder="Add custom document..."
            value={newDocName}
            onChange={(e) => setNewDocName(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={handleAddCustomDoc}
            className="p-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs transition-colors"
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
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <span>{doc.name}</span>
                    {doc.mandatory && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase">
                        Mandatory
                      </span>
                    )}
                    {doc.familyOnly && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase">
                        👨‍👩‍👧 Family
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>

              {/* Checkboxes Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80 text-[11px]">
                {/* Physical Original */}
                <button
                  onClick={() => toggleCheck(doc.id, 'physicalOriginal')}
                  className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all text-left ${
                    doc.physicalOriginal
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300 font-semibold'
                      : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  {doc.physicalOriginal ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                  <span>Original Copy</span>
                </button>

                {/* Cloud Scan */}
                <button
                  onClick={() => toggleCheck(doc.id, 'cloudBackup')}
                  className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all text-left ${
                    doc.cloudBackup
                      ? 'bg-blue-950/30 border-blue-500/40 text-blue-300 font-semibold'
                      : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  {doc.cloudBackup ? <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                  <span>Cloud 300 DPI</span>
                </button>

                {/* Hague Apostille */}
                {doc.apostilleNeeded ? (
                  <button
                    onClick={() => toggleCheck(doc.id, 'apostilleDone')}
                    className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all text-left ${
                      doc.apostilleDone
                        ? 'bg-purple-950/30 border-purple-500/40 text-purple-300 font-semibold'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {doc.apostilleDone ? <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                    <span>Apostilled</span>
                  </button>
                ) : (
                  <div className="p-2 rounded-xl bg-slate-900/40 text-slate-600 text-center text-[10px] flex items-center justify-center">
                    Apostille N/A
                  </div>
                )}

                {/* Sworn Translation */}
                {doc.swornTranslation ? (
                  <button
                    onClick={() => toggleCheck(doc.id, 'translationDone')}
                    className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all text-left ${
                      doc.translationDone
                        ? 'bg-amber-950/30 border-amber-500/40 text-amber-300 font-semibold'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {doc.translationDone ? <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                    <span>Translated</span>
                  </button>
                ) : (
                  <div className="p-2 rounded-xl bg-slate-900/40 text-slate-600 text-center text-[10px] flex items-center justify-center">
                    Translation N/A
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
