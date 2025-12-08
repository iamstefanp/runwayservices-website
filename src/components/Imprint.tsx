export default function Imprint() {
  return (
    <div className="min-h-screen bg-[#19006A] text-white py-8 md:py-16 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8 md:mb-16">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 md:gap-3 text-white/60 hover:text-white transition-colors font-['ComputerSaysNo',sans-serif]"
            style={{ fontSize: 'clamp(1.125rem, 3.125vw, 1.5rem)', lineHeight: '1' }}
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ZURÜCK
          </a>
        </div>

        <h1 className="font-['ComputerSaysNo',sans-serif] mb-8 md:mb-16 break-words" style={{ fontSize: 'clamp(1.875rem, 5vw, 2.5rem)', lineHeight: '1.2', margin: '0 0 2rem 0' }}>IMPRESSUM</h1>
        
        <div className="font-['ComputerSaysNo',sans-serif] break-words" style={{ fontSize: 'clamp(1.0625rem, 2.75vw, 1.25rem)', lineHeight: '1.4', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ margin: 0 }}>ANGABEN GEMÄSS § 5 DDG (DIGITALE-DIENSTE-GESETZ)</div>
            <div style={{ margin: 0 }}>DIENSTEANBIETER:</div>
            <div style={{ margin: 0 }}>RUNWAY SERVICES</div>
            <div style={{ margin: 0, marginTop: '2rem' }}>ANSCHRIFT:</div>
            <div style={{ margin: 0 }}>STEFAN PETCOV</div>
            <div style={{ margin: 0 }}>BILKER STR. 22</div>
            <div style={{ margin: 0 }}>40213 DÜSSELDORF</div>
            <div style={{ margin: 0 }}>DEUTSCHLAND</div>
            <div style={{ margin: 0, marginTop: '2rem' }}>KONTAKT:</div>
            <div style={{ margin: 0 }}>TELEFON: +49 17676 86 7195</div>
            <div style={{ margin: 0 }}>E-MAIL: STEFAN@RUNWAYSERVICES.NET</div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <div style={{ margin: 0 }}>VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV</div>
            <div style={{ margin: 0 }}>STEFAN PETCOV</div>
            <div style={{ margin: 0 }}>BILKER STR. 22</div>
            <div style={{ margin: 0 }}>40213 DÜSSELDORF</div>
            <div style={{ margin: 0, marginTop: '2rem' }}>BERUFSBEZEICHNUNG: GESCHÄFTSFÜHRER</div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <div style={{ margin: 0 }}>VERBRAUCHERSTREITBEILEGUNG</div>
            <div style={{ margin: 0 }}>WIR SIND NICHT BEREIT UND NICHT VERPFLICHTET, AN STREITBEILEGUNGSVERFAHREN VOR EINER VERBRAUCHERSCHLICHTUNGSSTELLE TEILZUNEHMEN.</div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <div style={{ margin: 0 }}>HAFTUNGSAUSSCHLUSS</div>
            <div style={{ margin: 0, marginTop: '2rem' }}>HAFTUNG FÜR INHALTE</div>
            <div style={{ margin: 0 }}>DIE INHALTE UNSERER SEITEN WURDEN MIT GRÖSSTER SORGFALT ERSTELLT. FÜR DIE RICHTIGKEIT, VOLLSTÄNDIGKEIT UND AKTUALITÄT DER INHALTE KÖNNEN WIR JEDOCH KEINE GEWÄHR ÜBERNEHMEN. ALS DIENSTEANBIETER SIND WIR GEMÄSS § 7 ABS.1 DDG FÜR EIGENE INHALTE AUF DIESEN SEITEN NACH DEN ALLGEMEINEN GESETZEN VERANTWORTLICH. NACH §§ 8 BIS 10 DDG SIND WIR ALS DIENSTEANBIETER JEDOCH NICHT VERPFLICHTET, ÜBERMITTELTE ODER GESPEICHERTE FREMDE INFORMATIONEN ZU ÜBERWACHEN ODER NACH UMSTÄNDEN ZU FORSCHEN, DIE AUF EINE RECHTSWIDRIGE TÄTIGKEIT HINWEISEN.</div>
            <div style={{ margin: 0, marginTop: '2rem' }}>HAFTUNG FÜR LINKS</div>
            <div style={{ margin: 0 }}>UNSER ANGEBOT ENTHÄLT LINKS ZU EXTERNEN WEBSEITEN DRITTER, AUF DEREN INHALTE WIR KEINEN EINFLUSS HABEN. DESHALB KÖNNEN WIR FÜR DIESE FREMDEN INHALTE AUCH KEINE GEWÄHR ÜBERNEHMEN. FÜR DIE INHALTE DER VERLINKTEN SEITEN IST STETS DER JEWEILIGE ANBIETER ODER BETREIBER DER SEITEN VERANTWORTLICH. DIE VERLINKTEN SEITEN WURDEN ZUM ZEITPUNKT DER VERLINKUNG AUF MÖGLICHE RECHTSVERSTÖSSE ÜBERPRÜFT. RECHTSWIDRIGE INHALTE WAREN ZUM ZEITPUNKT DER VERLINKUNG NICHT ERKENNBAR.</div>
            <div style={{ margin: 0, marginTop: '2rem' }}>URHEBERRECHT</div>
            <div style={{ margin: 0 }}>DIE DURCH DIE SEITENBETREIBER ERSTELLTEN INHALTE UND WERKE AUF DIESEN SEITEN UNTERLIEGEN DEM DEUTSCHEN URHEBERRECHT. DIE VERVIELFÄLTIGUNG, BEARBEITUNG, VERBREITUNG UND JEDE ART DER VERWERTUNG AUSSERHALB DER GRENZEN DES URHEBERRECHTES BEDÜRFEN DER SCHRIFTLICHEN ZUSTIMMUNG DES JEWEILIGEN AUTORS BZW. ERSTELLERS. DOWNLOADS UND KOPIEN DIESER SEITE SIND NUR FÜR DEN PRIVATEN, NICHT KOMMERZIELLEN GEBRAUCH GESTATTET.</div>
          </div>

          <div style={{ paddingTop: '3rem', marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ margin: 0, opacity: 0.6 }}>ZULETZT AKTUALISIERT: NOVEMBER 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}