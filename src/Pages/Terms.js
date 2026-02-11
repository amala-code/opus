export default function TermsAndConditions() {
  const company = {
    name: "OPUS ENGINEERING",
    address:
      "Plot No. 46 & 47, Beta Industrial Park, Aakriya, Opp. Aurobindo Hospital, Indore - 453555",
    registeredOffice:
      "1024, Scheme No. 114, Part-1, Vijay Nagar, Indore - 452010 (M.P.)",
    email: "opusengineeringindore@gmail.com",
    contact: "+91 9896888840",
    gst: "23AAGFO9149Q1ZD",
  };

  return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%);
          padding: 60px 20px;
        }

        .wrapper {
          max-width: 1400px;
          margin: 0 auto;
        }

        .header {
          background: white;
          padding: 80px 60px;
          border-radius: 30px 30px 0 0;
        }

        .title {
          font-size: 72px;
          font-weight: 900;
          color: #1a202c;
          margin: 0 0 20px 0;
          letter-spacing: -2px;
        }

        .subtitle {
          font-size: 24px;
          color: #718096;
          margin: 0;
        }

        .content {
          background: white;
          padding: 60px;
        }

        .intro {
          font-size: 22px;
          line-height: 1.8;
          color: #2d3748;
          padding-bottom: 60px;
          border-bottom: 3px solid #e2e8f0;
        }

        .intro strong {
          font-weight: 700;
        }

        .company-section {
          padding: 60px 0;
          border-bottom: 3px solid #e2e8f0;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          color: #1a202c;
          margin: 0 0 40px 0;
          display: flex;
          align-items: center;
        }

        .section-title::before {
          content: '';
          width: 8px;
          height: 60px;
          background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
          margin-right: 24px;
          border-radius: 4px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .info-card {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          padding: 40px;
          border-radius: 20px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
        }

        .info-label {
          font-size: 16px;
          font-weight: 700;
          color: #667eea;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 0 0 12px 0;
        }

       
        .terms-section {
          padding: 60px 0;
        }

        .term-item {
          margin-bottom: 50px;
          padding-left: 100px;
          position: relative;
        }

        .term-number {
          position: absolute;
          left: 0;
          top: 0;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 900;
          color: white;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .term-title {
          font-size: 38px;
          font-weight: 800;
          color: #1a202c;
          margin: 0 0 20px 0;
        }

        .term-content {
          font-size: 20px;
          line-height: 1.8;
          color: #4a5568;
        }

        .footer {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          padding: 50px 60px;
          border-radius: 0 0 30px 30px;
          text-align: center;
        }

        .footer-text {
          font-size: 18px;
          color: #cbd5e0;
          margin: 0;
        }

        @media (max-width: 1200px) {
          .title {
            font-size: 56px;
          }

          .section-title {
            font-size: 40px;
          }

          .term-title {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 30px 15px;
          }

          .header {
            padding: 50px 30px;
            border-radius: 20px 20px 0 0;
          }

          .title {
            font-size: 42px;
          }

          .subtitle {
            font-size: 18px;
          }

          .content {
            padding: 30px;
          }

          .intro {
            font-size: 18px;
          }

          .section-title {
            font-size: 32px;
          }

          .section-title::before {
            height: 50px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .info-card {
            padding: 30px;
          }

          .info-label {
            font-size: 14px;
          }

          .info-value {
            font-size: 18px;
          }

          .term-item {
            padding-left: 80px;
            margin-bottom: 40px;
          }

          .term-number {
            width: 60px;
            height: 60px;
            font-size: 28px;
          }

          .term-title {
            font-size: 26px;
          }

          .term-content {
            font-size: 18px;
          }

          .footer {
            padding: 40px 30px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 36px;
          }

          .subtitle {
            font-size: 16px;
          }

          .intro {
            font-size: 16px;
          }

          .section-title {
            font-size: 28px;
          }

          .term-title {
            font-size: 22px;
          }

          .term-content {
            font-size: 16px;
          }

          .info-card {
            padding: 25px;
          }
        }
      `}</style>

      <div className="container">
        <div className="wrapper">
          <div className="header">
            <h1 className="title">Terms & Conditions</h1>
            <p className="subtitle">
              Effective Date: {new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="content">
            <div className="intro">
              These Terms and Conditions govern the use of services and documents
              issued by <strong>{company.name}</strong>. By engaging with our
              services, you agree to comply with the policies described below.
            </div>

            <div className="company-section">
              <h2 className="section-title">Company Information</h2>
              <div className="info-grid">
                <div className="info-card">
                  <p className="info-label">Company Name</p>
                  <p className="info-value">{company.name}</p>
                </div>
                <div className="info-card">
                  <p className="info-label">Email</p>
                  <p className="info-value">
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </p>
                </div>
                <div className="info-card">
                  <p className="info-label">Address</p>
                  <p className="info-value">{company.address}</p>
                </div>
                <div className="info-card">
                  <p className="info-label">Registered Office</p>
                  <p className="info-value">{company.registeredOffice}</p>
                </div>
                <div className="info-card">
                  <p className="info-label">Contact</p>
                  <p className="info-value">{company.contact}</p>
                </div>
                <div className="info-card">
                  <p className="info-label">GST Number</p>
                  <p className="info-value">{company.gst}</p>
                </div>
              </div>
            </div>

            <div className="terms-section">
              <div className="term-item">
                <div className="term-number">1</div>
                <h3 className="term-title">Delivery & Documentation</h3>
                <p className="term-content">
                  All delivery challans, invoices, and related documents issued by the
                  company are subject to verification. Customers must review product
                  details at the time of delivery.
                </p>
              </div>

              <div className="term-item">
                <div className="term-number">2</div>
                <h3 className="term-title">Payments</h3>
                <p className="term-content">
                  Payments must be made according to agreed terms. Delays may result in
                  service suspension or additional charges where applicable.
                </p>
              </div>

              <div className="term-item">
                <div className="term-number">3</div>
                <h3 className="term-title">Liability</h3>
                <p className="term-content">
                  {company.name} shall not be responsible for damages arising from
                  misuse, improper handling, or unauthorized modifications of supplied
                  goods.
                </p>
              </div>

              <div className="term-item">
                <div className="term-number">4</div>
                <h3 className="term-title">Contact</h3>
                <p className="term-content">
                  For any queries related to terms, deliveries, or documentation,
                  contact us at {company.email} or call {company.contact}.
                </p>
              </div>
            </div>
          </div>

          <div className="footer">
            <p className="footer-text">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}