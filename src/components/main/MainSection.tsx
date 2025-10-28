import React from "react";
import { CoffeeBeanIcon } from "@phosphor-icons/react";
import bannerImage from "../../assets/images/banner-image-1.png";

const Main: React.FC = () => {
  return (
    <>
     <section 
        className="hero"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
     
        <div className="hero-content">
          {/* <h2>Smart Controls. Seamless Operations.</h2> */}
          <h2>Smart Controls. Seamless Operations.</h2>
           {/* <p>Store Recipes, Manage Opening and Closing Checklists, and more.</p> */}
          <a href="#" className="cta-button">
            Find Out More
          </a>
        </div>
     
      </section>

      <section className="features">
        <h2 className="section-title">
        Business Solutions for Growing Companies
        </h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Recipes & Menu</h3>
            <p>
              Track conditions, access levels, and task lists. metrics 24/7 with
              our distributed sensor network.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              {" "}
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Equipment & Maintenance</h3>
            <p>
              Automated tracking and reporting for regulatory requirements. Full
              audit trails and traceability.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              {" "}
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Team Messaging</h3>
            <p>
              Machine learning models identify issues before they impact yield.
              Optimize building cycles and resource allocation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Shift & Staff Management</h3>
            <p>
              Track conditions, access levels, and task lists. metrics 24/7 with
              our distributed sensor network.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Vendor & Supply Management</h3>
            <p>
              Track conditions, access levels, and task lists. metrics 24/7 with
              our distributed sensor network.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Barista and Roaster Training</h3>
            <p>
              Track conditions, access levels, and task lists. metrics 24/7 with
              our distributed sensor network.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h4>32%</h4>
            <p>Average Cost Decreases</p>
          </div>
          <div className="stat-item">
            <h4>99.9%</h4>
            <p>System Uptime</p>
          </div>
          <div className="stat-item">
            <h4>2+</h4>
            <p>Licensed Facilitators</p>
          </div>
          <div className="stat-item">
            <h4>24/7</h4>
            <p>Support Coverage</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Optimize Your Operation?</h2>
        <p>
        Designed for busy cafés, this app streamlines daily operations by organizing shift tasks, recipe management, staff training, and inventory tracking, helping teams run efficiently and consistently.
        </p>
        <a href="#" className="cta-button">
          Schedule Consultation
        </a>
      </section>
    </>
  );
};

export default Main;
