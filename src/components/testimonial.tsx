import React from 'react';
import './testimonial.css';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <h2>What Our Users Are Saying</h2>
      <blockquote>
        <p>"for the future. all the best"</p>
        <cite>— baap</cite>
      </blockquote>
      <blockquote>
        <p>" only self promotion for now $$"</p>
        <cite>— baap ke baap</cite>
      </blockquote>
    </section>
  );
};

export default Testimonials;
