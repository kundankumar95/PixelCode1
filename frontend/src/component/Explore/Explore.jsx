import React from 'react'
import './Explore.css'
import image1 from '../assets/image(c1).png'
import image2 from '../assets/image(c2).png'
import image3 from '../assets/image(c3).png'
import image4 from '../assets/image(c4).png'
import image5 from '../assets/image(c5).png'
import image6 from '../assets/image(c6).png'
import image7 from '../assets/image(c7).png'
import image8 from '../assets/image(c8).png'
import image9 from '../assets/image(c9).png'
import image10 from '../assets/image(c10).png'
import image11 from '../assets/image(c11).png'
import image12 from '../assets/image(c12).png'
import image13 from '../assets/image(c13).png'
import image14 from '../assets/image(c14).png'
import image15 from '../assets/image(c15).png'
import image16 from '../assets/image(c16).png'
import image17 from '../assets/image(c17).png'
import image18 from '../assets/image(c18).png'


const Explore = () => {
  return (
     <div className="explore-container">
      <h1>Engineering Subjects and Videos</h1>

      {/* Interview Preparation Row */}
      <div className="branch-row">
        <h2>Interview Preparation</h2>
        <div className="subject-row">
          <div className="subject-card">
            <img src={image1} alt="#" />
            <h3>Common Coding Questions</h3>
            <a href="https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=4MwziwQXfE_-mYXo">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image2} alt="#" />
            <h3>System Design</h3>
            <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&si=KBpWUnq0QXw7HN9f">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image3} alt="#" />
            <h3>Behavioral Questions</h3>
            <a href="https://youtube.com/playlist?list=PLMufDeLh5x2DVLPcfJGUxd_Yd9LXJZ3NK&si=bj1dsUCORXz5nt7y">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image4} alt="#" />
            <h3>DataBase Management System</h3>
            <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=a384dMDcot0pjklF">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image5} alt="#" />
            <h3>Operating System</h3>
            <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=p2IgPxBL44xjlz4d">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image6} alt="#" />
            <h3>Artificial Intelligence And Machine Learning</h3>
            <a href="https://youtube.com/playlist?list=PLEiEAq2VkUULyr_ftxpHB6DumOq1Zz2hq&si=W6gLgfgjJasx4Wv8">Watch Videos</a>
          </div>
        </div>
      </div>

      {/* Existing Branch Rows */}
      <div className="branch-row">
        <h2>Computer Science Engineering</h2>
        <div className="subject-row">
          <div className="subject-card">
            <img src={image8} alt="#" />
            <h3>Data Structures & Algorithm</h3>
            <a href="https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=4MwziwQXfE_-mYXo">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image4} alt="#" />
            <h3>DataBase Management System</h3>
            <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=a384dMDcot0pjklF">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image5} alt="#" />
            <h3>Operating System</h3>
            <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=p2IgPxBL44xjlz4d">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image6} alt="#" />
            <h3>Artificial Intelligence And Machine Learning</h3>
            <a href="https://youtube.com/playlist?list=PLEiEAq2VkUULyr_ftxpHB6DumOq1Zz2hq&si=W6gLgfgjJasx4Wv8">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image7} alt="#" />
            <h3>Blockchain</h3>
            <a href="https://youtube.com/playlist?list=PLEiEAq2VkUUKmhU6SO2P73pTdMZnHOsDB&si=1RDT2u8hVRDi3HZL">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image10} alt="#" />
            <h3>Data Analyst</h3>
            <a href="https://youtube.com/playlist?list=PLxzTa0VPR9ryvGSuCm4RS8aeAvOLXz9XM&si=1RoGXimjt8_EOJkj">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image9} alt="#" />
            <h3>Python</h3>
            <a href="https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=3SC9JKnIP_Rk9T3v">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image12} alt="#" />
            <h3>Java</h3>
            <a href="https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=Uc8FKCy5gxxhf1Yf">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image11} alt="#" />
            <h3>Web Development</h3>
            <a href="https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=HLPatg97mcS1AHwB">Watch Videos</a>
          </div>
        </div>
      </div>

      <div className="branch-row">
        <h2>Electrical Engineering</h2>
        <div className="subject-row">
          <div className="subject-card">
            <img src={image13} alt="#" />
            <h3>Circuit Theory</h3>
            <a href="https://youtube.com/playlist?list=PL3eEXnCBViH-sapLfY9RfnNQWry7HpFBE&si=b6qXo7lWjFoaln3-">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image14} alt="#" />
            <h3>Electromagnetic Fields</h3>
            <a href="https://youtube.com/playlist?list=PLgwJf8NK-2e4I_YltJja47CwZJkzNWK89&si=JzVcOPrmr1KbUZuK">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image15} alt="#" />
            <h3>Control Systems</h3>
            <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93ezDo&si=OiVBehGqAszd6jKy">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image16} alt="#" />
            <h3>Power Systems</h3>
            <a href="https://youtube.com/playlist?list=PLgzsL8klq6DJd8AJm1Q3gTsEeNR_mqXrz&si=K73fY8-OgHOznuJk">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image17} alt="#" />
            <h3>Digital Signal Processing (DSP)</h3>
            <a href="https://youtube.com/playlist?list=PLnPkMfyANm0yc6SZKH76QyucOZBPUUEYP&si=zN5WgywI0mfnen7s">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image18} alt="#" />
            <h3>Electrical Machines</h3>
            <a href="https://youtube.com/playlist?list=PL3eEXnCBViH-bB5Iq9DRHbM_WCPruzP1B&si=JjA6Ot8JHF9-ahEu">Watch Videos</a>
          </div>
        </div>
      </div>

      

      <div className="branch-row">
        <h2>Notes will coming soon....</h2>
        <div className="subject-row">
          <div className="subject-card">
            <img src={image8} alt="#" />
            <h3>Data Structures & Algorithm</h3>
            <a href="/">Watch Notes</a>
          </div>
          <div className="subject-card">
            <img src={image4} alt="#" />
            <h3>DataBase Management System</h3>
            <a href="/">Watch Notes</a>
          </div>
          <div className="subject-card">
            <img src={image5} alt="#" />
            <h3>Operating System</h3>
            <a href="/">Watch Notes</a>
          </div>
          <div className="subject-card">
            <img src={image6} alt="#" />
            <h3>Artificial Intelligence</h3>
            <a href="/videos/behavioral-questions">Watch Notes</a>
          </div>
          <div className="subject-card">
            <img src={image7} alt="#" />
            <h3>Blockchain</h3>
            <a href="/">Watch Notes</a>
          </div>
          <div className="subject-card">
            <img src={image10} alt="#" />
            <h3>Data Science</h3>
            <a href="/videos/algorithms">Watch Notes</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
