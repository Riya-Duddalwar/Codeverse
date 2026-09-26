import React, { useState } from 'react';
import { Shield, User, Users, Mail, Phone, Github, BookOpen, Send, CheckCircle } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

interface Member {
  name: string;
  email: string;
  role: string;
  github: string;
}

interface RegistrationFormProps {
  onSuccess: (formData: any) => void;
  onPlayClick: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess, onPlayClick }) => {
  const [teamName, setTeamName] = useState('');
  const [track, setTrack] = useState('track-ai');
  const [leaderName, setLeaderName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderPhone, setLeaderPhone] = useState('');
  const [leaderGithub, setLeaderGithub] = useState('');
  const [college, setCollege] = useState('');
  const [projectIdea, setProjectIdea] = useState('');
  const [teamSize, setTeamSize] = useState(2);
  const [members, setMembers] = useState<Member[]>([
    { name: '', email: '', role: 'Frontend & UI', github: '' }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTeamSizeChange = (newSize: number) => {
    onPlayClick();
    setTeamSize(newSize);
    const needed = newSize - 1; // leader is 1
    const current = [...members];
    if (needed > current.length) {
      while (current.length < needed) {
        current.push({ name: '', email: '', role: 'Full Stack Engineer', github: '' });
      }
    } else {
      current.splice(needed);
    }
    setMembers(current);
  };

  const handleMemberChange = (index: number, field: keyof Member, val: string) => {
    const updated = [...members];
    updated[index][field] = val;
    setMembers(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlayClick();
    setIsSubmitting(true);

    const formData = {
      teamName,
      track,
      leader: { name: leaderName, email: leaderEmail, phone: leaderPhone, github: leaderGithub, college },
      members,
      projectIdea,
      registeredAt: new Date().toISOString()
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(formData);
    }, 1200);
  };

  return (
    <div
      className="glass-panel"
      style={{
        maxWidth: '850px',
        margin: '0 auto',
        padding: '3rem',
        border: '1px solid rgba(255, 30, 66, 0.4)',
        background: 'rgba(15, 17, 26, 0.95)',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)'
      }}
    >
      {/* Form Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="badge badge-crimson" style={{ marginBottom: '0.5rem' }}>
          SQUAD REGISTRATION // PROTOCOL 2.0
        </span>
        <h2 style={{ fontSize: '2.2rem', color: '#ffffff', textTransform: 'uppercase' }}>
          ENLIST YOUR <span className="text-crimson">OPERATIVE SQUAD</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Complete your infiltration credentials. All squad slots are reviewed by the syndicate.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Step 1: Team & Track Identity */}
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#ffd159', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={18} />
            SECTION 01: SQUAD IDENTIFICATION
          </h3>

          <div className="grid grid-cols-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                SQUAD CODENAME / TEAM NAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. CyberProfessors"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                TARGET VAULT TRACK *
              </label>
              <select
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: '#0e1018',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              >
                {EVENT_DATA.tracks.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title} ({t.bounty})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Squad Size Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              TOTAL SQUAD OPERATIVES (INCL. SQUAD LEADER)
            </label>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[2, 3, 4].map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => handleTeamSizeChange(size)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: teamSize === size ? 'rgba(255, 30, 66, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                    border: teamSize === size ? '1.5px solid #ff1e42' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {size} OPERATIVES
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step 2: Squad Leader Details */}
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#ff1e42', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <User size={18} />
            SECTION 02: SQUAD LEADER (THE PROFESSOR)
          </h3>

          <div className="grid grid-cols-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                FULL NAME *
              </label>
              <input
                type="text"
                required
                placeholder="Sergio Marquina"
                value={leaderName}
                onChange={(e) => setLeaderName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                PRIMARY EMAIL *
              </label>
              <input
                type="email"
                required
                placeholder="professor@codeverse.hack"
                value={leaderEmail}
                onChange={(e) => setLeaderEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={leaderPhone}
                onChange={(e) => setLeaderPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                GITHUB / PORTFOLIO
              </label>
              <input
                type="text"
                placeholder="https://github.com/username"
                value={leaderGithub}
                onChange={(e) => setLeaderGithub(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                INSTITUTION / COMPANY *
              </label>
              <input
                type="text"
                required
                placeholder="MIT / Google / Self-taught"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>

        {/* Step 3: Additional Squad Operatives */}
        {members.map((member, idx) => (
          <div key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#00f2fe', marginBottom: '1rem' }}>
              OPERATIVE #{idx + 2} DETAILS
            </h3>
            <div className="grid grid-cols-3" style={{ gap: '1rem' }}>
              <div>
                <input
                  type="text"
                  required
                  placeholder={`Operative #${idx + 2} Name`}
                  value={member.name}
                  onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder={`Operative #${idx + 2} Email`}
                  value={member.email}
                  onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="GitHub / Dev Profile"
                  value={member.github}
                  onChange={(e) => handleMemberChange(idx, 'github', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Step 4: Mission Concept Pitch */}
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
            BRIEF MISSION CONCEPT / BLUEPRINT (OPTIONAL - CAN BE FINALIZED AT CHECK-IN)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us what high-impact prototype or vault security tool your squad plans to engineer..."
            value={projectIdea}
            onChange={(e) => setProjectIdea(e.target.value)}
            style={{
              width: '100%',
              padding: '0.8rem 1rem',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '6px',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Submit Action */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary laser-shine"
          style={{
            padding: '1.2rem',
            fontSize: '1rem',
            width: '100%',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting ? (
            <span>ENCRYPTING & TRANSMITTING SQUAD DOSSIER...</span>
          ) : (
            <>
              <Send size={18} />
              <span>SUBMIT REGISTRATION & CLAIM SQUAD ACCESS</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
