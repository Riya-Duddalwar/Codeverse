import React, { useState } from 'react';
import { RULES_DATA } from '../data/rules';
import { ShieldCheck, FileDown, AlertTriangle, ChevronRight } from 'lucide-react';

export const Rules: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="rules" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>
            SECURITY & PROTOCOLS
          </span>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#ffffff' }}>
            RULES OF THE <span className="text-crimson">HEIST</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Even in the wildest infiltrations, the syndicate plays by unbreakable rules. Review our ethics, eligibility, and evaluation standards.
          </p>
        </div>

        {/* Tab Selection & Protocol Content */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden'
          }}
        >
          {/* Tabs Navigation */}
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(9, 10, 15, 0.6)',
              overflowX: 'auto'
            }}
          >
            {RULES_DATA.map((rule, idx) => (
              <button
                key={rule.category}
                onClick={() => setActiveTab(idx)}
                style={{
                  flex: 1,
                  padding: '1.25rem 1.5rem',
                  background: activeTab === idx ? 'rgba(255, 30, 66, 0.12)' : 'transparent',
                  border: 'none',
                  borderBottom: activeTab === idx ? '3px solid #ff1e42' : '3px solid transparent',
                  color: activeTab === idx ? '#ffffff' : 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {rule.codename}
              </button>
            ))}
          </div>

          {/* Active Tab Panel Content */}
          <div style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <ShieldCheck size={24} color="#ff1e42" />
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff' }}>
                {RULES_DATA[activeTab].category}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {RULES_DATA[activeTab].items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '1rem 1.25rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <ChevronRight size={18} color="#ffd159" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Rulebook PDF Download Card */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                padding: '1.5rem',
                borderRadius: '8px',
                background: 'rgba(255, 30, 66, 0.06)',
                border: '1px solid rgba(255, 30, 66, 0.25)'
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                  Looking for the complete mission guidelines?
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  Download the official 12-page PDF dossier detailing IP ownership, judging parameters, and mentor protocol.
                </p>
              </div>

              <a
                href="/rulebook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.85rem', padding: '0.7rem 1.5rem' }}
              >
                <FileDown size={16} />
                <span>DOWNLOAD FULL RULEBOOK</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
