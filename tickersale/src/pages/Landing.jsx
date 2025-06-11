import React from "react";
import styles from "./Landing.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Landing = ({ onNavigateToLogin, onNavigateToRegister }) => {
  return (
    <div className={styles.landing}>
      {/* Navigation Bar */}
      <Navbar onNavigateToLogin={onNavigateToLogin} />

      {/* Main content sections */}
      <main className={styles.main}>
        {/* Hero Section - Main banner with CTA */}
        <Hero onNavigateToRegister={onNavigateToRegister} />

        {/* Features Section - Key benefits */}
        <Features />

        {/* Testimonials Section - User reviews */}
        <Testimonials />

        {/* Call to Action Section - Final conversion */}
        <CallToAction onNavigateToRegister={onNavigateToRegister} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
