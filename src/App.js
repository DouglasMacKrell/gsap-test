
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';

function App() {
  let videoContainer = [
    "./closeup-coding.mp4",
    "./closeup-coding2.mp4",
    "./closeup-coding3.mp4",
    "./closeup-coding4.mp4",
    "./closeup-coding5.mp4",
    "./closeup-coding6.mp4",
    "./closeup-coding7.mp4",
    "./closeup-coding8.mp4",
  ];

  let random = Math.floor(Math.random() * 8)

  let randomVideo = videoContainer[random]
  
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef()

  useEffect(() => {
    const element = ref.current

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.querySelector(".front-page"),
        start: 'top',
        end: '100%',
        // markers: true,
        scrub: true,
        pin: true
      }
    })
  
    tl.fromTo(
      element.querySelector(".front-page"),
      { clipPath: 'circle(5%)' },
      { clipPath: 'circle(75%)', duration: '3' }
    );

    tl.fromTo(
      element.querySelector('.pursuit-logo'),
      {scale: '1'}, 
      {scale: '0', opacity: '0', duration: '1'}, "-=3"
    );

    tl.fromTo(
      element.querySelector(".title"),
      {opacity: '0'},
      {opacity: '1', duration: '1'}
    )

    tl.fromTo(
      element.querySelector(".sub-title"),
      { opacity: "0" },
      { opacity: "1", duration: '1' }
    );

  }, [])


  return (
    <div className="App" ref={ref}>
      <div className='p1__wrapper'>
        <div className="front-page">
          <div className="intro-text">
            <h1 className="title">Advanced Basics For Web</h1>
            <h2 className="sub-title">
              Jordan Manley's ongoing classwork and curriculum for Pursuit's job
              readiness program
            </h2>
          </div>
          <div className="blend"></div>
          <img
            className="pursuit-logo"
            src="./pursuit-monogram-black.svg"
            alt="Pursuit logo"
          />
          <video src={randomVideo} autoPlay loop muted />
        </div>
      </div>
      <div className="second-page">
        <h2 className="second-page__title">Archive</h2>
        <div className="class-container">
          <h2 className="class-container__header">Section 1: SCSS and BEM</h2>
          <h3 className="class-container__title">Learning Objectives:</h3>
          <ol className="class-container__list">
            <li>Be able to Implement SCSS in a React Project</li>
            <li>
              Understand SCSS nesting, partials and variables and be able to use
              them in a React project
            </li>
          </ol>
          <a
            href="https://us06web.zoom.us/rec/share/rNUjdMBTVDzfy4nXCCPinBSRLUET4DI_6do1vSCszQ1a5GxLo1hTf73pocGNuRNB.qR5h4dfwGSXmvK1X"
            className="class-container__video-link"
          >
            <h4>Video Recording</h4>
          </a>
          <ol className="class-container__list">
            <li>
              <a href="https://github.com/werner33/AdvancedBasicsForWeb/blob/main/SCSS.md">
                What is SCSS
              </a>
            </li>
            <li>
              <a href="https://github.com/werner33/AdvancedBasicsForWeb/blob/main/UsingBEM.md">
                What is BEM
              </a>
            </li>
            <li>
              <a href="https://github.com/werner33/AdvancedBasicsForWeb/blob/main/SCSSInYourProject.md">
                Using SCSS in Your React Project
              </a>
            </li>
            <li>
              <a href="https://github.com/werner33/AdvancedBasicsForWeb/blob/main/SCSSFeatures.md">
                Other SCSS Features
              </a>
            </li>
          </ol>
        </div>
        <div className="class-container">
          <h2 className="class-container__header">
            Section 2: Building Responsive Components
          </h2>
          <h3 className="class-container__title">Learning Objectives:</h3>
          <ol className="class-container__list">
            <li>Able to explain what a responsive component is</li>
            <li>
              Able to use Media Queries to conditionally attach styles to the
              DOM
            </li>
            <li>Able to build responsive components in a React project</li>
          </ol>
          <a
            href="https://us06web.zoom.us/rec/share/XOdkPa1YWKnTllJ0GNMlYh4Mz9C90v0WMcjbkXuzl8x1YgSmsOFIBzUB7IE8ngLQ.s743OcrH7F9vsPdH"
            className="class-container__video-link"
          >
            <h4>Video Recording</h4>
          </a>
          <a
            href="https://github.com/werner33/react-responsive-navbar"
            className="class-container__video-link"
          >
            <h4>Source Code</h4>
          </a>
          <ol className="class-container__list">
            <li>
              <a href="https://github.com/werner33/AdvancedBasicsForWeb/blob/main/BuildingResponsiveComponents.md">
                What is a Responsive Component
              </a>
            </li>
            <li>
              <a href="https://github.com/werner33/AdvancedBasicsForWeb/blob/main/LayOutNavBar.md">
                Laying Out a Nav Bar
              </a>
            </li>
            <li>
              <a href="https://github.com/werner33/AdvancedBasicsForWeb/blob/main">
                Introducing Media Queries
              </a>
            </li>
            <li>
              <a href="https://github.com/werner33/AdvancedBasicsForWeb/blob/main">
                Using Hooks to Toggle Our Responsive Nav Bar
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
