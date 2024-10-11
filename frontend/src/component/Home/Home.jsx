import React from 'react';
import './Home.css';
import person1 from '../assets/person(1).jpg'
import person2 from '../assets/person(2).png'
import person3 from '../assets/person(3).jpeg'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'


const Home = () => {
  return (
    <div className="home-container">
        <section className="best-source">
        <h2>Best Source</h2>
        <div className="plans-carousel">
          <div className="plan-item">
            <h3>Striver’s DSA Sheet</h3>
              <p>Boost your DSA skills with our handy cheat sheets.</p>
              <button
                className="cta-btn"
                onClick={() => window.location.href = 'https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=4MwziwQXfE_-mYXo'}
              >
                Try it free
              </button>
            </div>
          <div className="plan-item">
            <h3>System Design</h3>
            <p>Design better systems with our simplified approach.</p>
            <button
                className="cta-btn"
                onClick={() => window.location.href = 'https://youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&si=KBpWUnq0QXw7HN9f'}
              >
                Try it free
              </button>
          </div>
          <div className="plan-item">
            <h3>Technical Blogs</h3>
            <p>Dive Deep into Tech Innovation with Our Engaging Blogs.</p>
            <button
                className="cta-btn"
                onClick={() => window.location.href = '/'}
              >
                Try it free
              </button>
          </div>
          <div className="plan-item">
            <h3>CS Subjects</h3>
            <p>Demystify CS topics with our easy-to-understand guides.</p>
            <button
                className="cta-btn"
                onClick={() => window.location.href = '/explore'}
              >
                Try it free
              </button>
          </div>
          
        </div>
      </section>
      <section className="our-team">
      <h2>Our Team</h2>
      <div className="achievements-container">
        <div className="person-container">
          <div className="person-photo">
            <img src={person1} alt="Person1" />
          </div>
          <div className="person-info">
            <h3>Kundan Kumar</h3>
            <h4>Software Engineer</h4>
          </div>
        </div>

        <div className="person-container">
          <div className="person-photo">
            <img src={person2} alt="Person2" />
          </div>
          <div className="person-info">
            <h3>Abhinab Dey</h3>
            <h4>Software Engineer</h4>
          </div>
        </div>

        <div className="person-container">
          <div className="person-photo">
            <img src={person3} alt="Person3" />
          </div>
          <div className="person-info">
            <h3>Karan Kumar</h3>
            <h4>Software Engineer</h4>
          </div>
        </div>
      </div>
    </section>


  <section className="contact-section">
  <div className="contact-left">
    <div className="tag">
      <h1>Contact</h1>
      <a href="/"><i className="fa-solid fa-house"></i>A-1/Bangalore/India</a>
      <a href="/"><i className="fa-solid fa-phone"></i>+91XXXXXXXX</a>
      <a href="/"><i className="fa-solid fa-envelope"></i>pixelcode@gmail.com</a>
    </div>

    <div className="tag">
      <h1>Get Help</h1>
      <a href="/" className="center">FAQ</a>
      <a href="/" className="center">Shipping</a>
      <a href="/" className="center">Returns</a>
      <a href="/" className="center">Payment Options</a>
    </div>

    <div className="tag">
      <h1>Our Stores</h1>
      <a href="/" className="center">Bangalore</a>
      <a href="/" className="center">Chennai</a>
      <a href="/" className="center">Mumbai</a>
      <a href="/" className="center">New Delhi</a>
    </div>

    <div className="tag">
  <h1>Follow Us</h1>
  <div className="social_link">
    <a href="https://www.linkedin.com/in/kundan-kumar-a5512624a/">
      <img src={linkedin} alt="LinkedIn" className="social-icon" />
    </a>
    <a href="https://www.facebook.com/profile.php?id=100094614171483&mibextid=ZbWKwL">
      <img src={facebook} alt="Facebook" className="social-icon" />
    </a>
    <a href="https://www.linkedin.com/in/kundan-kumar-a5512624a/">
      <img src={twitter} alt="Twitter" className="social-icon" />
    </a>
  </div>
</div>


   
  </div>

  <div className="contact-right">
    <h1>Contact Us</h1>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>

    </div>
  );
};

export default Home;
