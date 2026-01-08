import { contactInfo } from "@/data";

export default function Contact() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactInfo.email);
    alert("Email copied to clipboard!");
  };

  return (
    <section id="contact" className="content-view fade-in">
      <div className="contact-unique-grid">
        {/* Left Column: Big Statement */}
        <div className="contact-hero">
          <h2 className="section-title">Let’s start a conversation.</h2>
          <p className="contact-desc">
            Open to global roles in <strong>Data & Business Analytics</strong>. 
            Currently active in IST timezone but flexible for global partners.
          </p>
          <div className="availability-pill">
            <span className="pulse-icon"></span>
            {contactInfo.availability}
          </div>
        </div>

        {/* Right Column: Interactive Cards */}
        <div className="contact-actions">
          {/* Primary Action: Email Card */}
          <div className="action-card primary" onClick={copyToClipboard}>
            <span className="action-label">Drop an Email</span>
            <h3 className="action-value">{contactInfo.email}</h3>
            <span className="action-hint">Click to copy address</span>
          </div>

          {/* Secondary Action: LinkedIn */}
          <a href={contactInfo.linkedin} target="_blank" className="action-card linkedin">
            <span className="action-label">Professional Network</span>
            <h3 className="action-value">Connect on LinkedIn →</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
