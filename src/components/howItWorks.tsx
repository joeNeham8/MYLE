import React from 'react';
import './howItWorks.css';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works">
      <h2>How It Works</h2>
      <ol>
        <li>Connect your devices (barcode scanner, smart fridge, etc.)</li>
        <li>Add groceries manually or automatically through the app.</li>
        <li>Receive shopping lists, recipes, and waste reduction tips.</li>
      </ol>
      <img src="/path/to/workflow.png" alt="How MYLE Works" className="workflow-image" />
    </section>
  );
};

export default HowItWorks;
