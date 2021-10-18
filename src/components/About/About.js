import React from 'react'
import './About.css';
import safe from '../../assets/img/safe.png';

import fb from '../../assets/img/FB.png';
import YT from '../../assets/img/YT.png';
import IN from '../../assets/img/IN.png';
import AM from '../../assets/img/AM.png';
import SC from '../../assets/img/SC.png';
import twitter from '../../assets/img/twitter.png';
import reddit from '../../assets/img/reddit.png';
import discord from '../../assets/img/discord.png';
import WA from '../../assets/img/WA.png';

import hacker from '../../assets/img/hacker.png';
import { Container, Row, Col } from 'reactstrap';

//import Marquee from 'react-css-marquee'


import { motion } from "framer-motion";

const About = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
      
    return (
        <>
        <div id ="about">
        <h4>01</h4>
        <h1>What is a Password Manager?</h1>

        <hr/>
        <br/>
        <br/>

        <img src={safe} id = "safe" />
        <motion.ul
                    className="con"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
            
                     <motion.img  src={fb}  variants={item} />
                     <motion.img  src={YT} variants={item} />
                     <motion.img  src={WA} variants={item} />
                     <motion.img  src={SC}  variants={item} />
                     <motion.img  class="no-icons"src={AM} variants={item} />
                     <motion.img  class="no-icons" src={reddit} variants={item} />
                     <motion.img  class="no-icons" src={twitter} variants={item} />
                     <motion.img  class="no-icons" src={IN} variants={item} />
                     <motion.img  class="no-icons" src={discord}  variants={item} />
                     <motion.img  class="no-icons" src={SC}  variants={item} />
        </motion.ul>
     
       <p>
       A password manager is a software application that is used to store and manage
       the passwords that a user has for various online accounts and security features. Password 
       managers store the passwords in an encrypted format and provide secure access to all the password 
       information with the help of a master password.
       </p>
       <div style= {{background:"#add8e6",paddingBottom:"10px",paddingTop:"10px", display:"inline-block"}}>
       <li>Don’t lose access to accounts that matter just because you forgot a password </li>
       <li>When creating new accounts, save your details in a click. </li>
       <li>Store your credit card details and shipping information for a smoother checkout.</li>
        </div>
        {/* <Marquee hoverStop cssNamespace="horizontal" speed={2}  text="Be Sure.  Be Secure.  Be Safe with Safe Accounts." /> */}
        </div>
        <div id ="why">
            <h4>02</h4>
            <h1>Why use a Password Manager?</h1>

        <div className="why-wrapper">
            <div className="box1">
            <h5 className= "heading">Prevent Thief</h5>
            <p>
                Over the past decades, cyber attacks have stolen over a million of 
                people's password and data. Due to the COVID-19 outbreak an uptick in sophisticated phishing email schemes 
                by cybercriminals has emerged.

            </p>
            </div>
            <div className="box2">
            <h5 className= "heading">Easy Use</h5>
            <p>
            Password managers allow users to come up with as many complicated passwords as they want and 
            lock them all behind one master password. People will never have to worry about there data being stolen with Safe Accounts.
            </p>
            </div>
            <div className="box3">
            <h5 className= "heading">Centeralized Access</h5>
            <p>
            Access you passwords from one place. With an encrypted master key that you only have 
            Safe Accounts is the centeral to keep one's password. If you only keep your passwords
            with us it will be easy to access your passwords.
            </p>
            </div>
            <div className="box4">
            <h5 className= "heading">No Need to Memorize</h5>
            <p>
            Create the longest and abstract passwords you can think of for every single application/company you sign up for. The 
            purpose of a password manager is to keep your passwords safe and also so you don't have to remember it.
        
            </p>
            </div>
            <div className="box5">
                <img id="hacker" src = {hacker}/>
            </div>
        </div>

        </div>

        </>
    )
}

export default About;