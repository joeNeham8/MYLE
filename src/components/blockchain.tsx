import React from 'react';
import './blockchain.css';
const BlockchainRewards: React.FC = () => {
  return (
    <section id="blockchain-rewards">
      <h2>Blockchain & Rewards</h2>
      <div className="blockchain-feature">
        <h3>Secure & Private</h3>
        <p>Your grocery data, fully encrypted and decentralized.</p>
      </div>
      <div className="blockchain-feature">
        <h3>Earn Rewards</h3>
        <p>Get tokens for reducing waste and being sustainable.</p>
      </div>
      <div className="blockchain-feature">
        <h3>Trustworthy Transactions</h3>
        <p>Smart contracts manage your purchases and rewards.</p>
      </div>
    </section>
  );
};

export default BlockchainRewards;
