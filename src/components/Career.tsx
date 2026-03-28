import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Specialist</h4>
                <h5>Quazi Enterprises Limited</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Media buying, social media management, video production, AI automation workflows, AI commercial video production, full-stack website development, SEO/GEO/AEO, and lead generation campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Manager – Digital Marketing</h4>
                <h5>PurchaseHaat (Images Group)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Planned Meta & Google Ads campaigns, optimized conversion rates, managed e-commerce website product listings, led content production, and boosted online sales by 30% within 3 months.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Executive & E-Commerce</h4>
                <h5>Wholesale Club Ltd (Jamuna Group)</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Designed promotional content, managed website operations, handled customer orders and billing, and improved UX for the e-commerce platform, boosting page engagement by 45%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Manager</h4>
                <h5>Myth Lifestyle (Shinest Group)</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Managed retail operations, developed promotional displays, achieved sales targets through product placement, and handled billing, budget coordination, and team management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
