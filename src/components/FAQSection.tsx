import React, { useState } from 'react';
import { eventData } from '../data/eventData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  onPlayClick?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onPlayClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    if (onPlayClick) onPlayClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={14} />
            INTEL & VERIFIED ANSWERS
          </span>
          <h2
            style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}
          >
            FREQUENTLY ASKED <span style={{ color: 'var(--color-red)' }}>QUESTIONS</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.15rem' }}>
            Official information for CodeVerse 2.0.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {eventData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="dossier-panel"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderColor: isOpen ? 'var(--color-border-red)' : 'var(--color-border)',
                  background: isOpen ? 'rgba(20, 21, 28, 0.95)' : 'var(--color-charcoal-card)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 1.75rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--color-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-primary)',
                    fontSize: '1.15rem',
                    fontWeight: 800
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-red)' }}>
                      0{idx + 1}.
                    </span>
                    {faq.question}
                  </span>

                  <div
                    style={{
                      background: isOpen ? 'var(--color-red)' : 'rgba(244, 240, 232, 0.08)',
                      color: isOpen ? '#ffffff' : 'var(--color-cream)',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s'
                    }}
                  >
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.75rem 1.75rem 1.75rem',
                      borderTop: '1px dashed rgba(244, 240, 232, 0.08)',
                      paddingTop: '1.25rem'
                    }}
                  >
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
