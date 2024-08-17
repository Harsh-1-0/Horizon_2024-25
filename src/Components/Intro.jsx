import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

function Intro({ onFinish, onPlayAudio }) {
  const [playGif, setPlayGif] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showText, setShowText] = useState(true);

  const handleOption = (option) => () => {
    onPlayAudio(option === 'yes');
    setShowOptions(false);
    setTimeout(() => {
      setPlayGif(true);
      setTimeout(() => {
        setPlayGif(false);
        onFinish();
      }, 3000);
    }, 200);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(false);
      setShowOptions(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (showText || showOptions || playGif) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showText, showOptions, playGif]);

  return (
    <div className="intro-wrapper">
      <div className="bg-[#FEFBEC] min-h-screen">
        <CSSTransition
          in={showText}
          timeout={500}
          classNames="fade"
          unmountOnExit
          appear
        >
          <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className="text-center text-black font-gilroy text-5xl lg:text-7xl lowercase group">
              <span className='block'>welcome</span> to <span className="group-hover:text-[#F2C6AB] transition-colors duration-500">horizon</span>
            </h1>
          </div>
        </CSSTransition>
        <CSSTransition
          in={showOptions}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className="text-center text-black font-gilroy text-5xl lg:text-7xl lowercase">
              begin with <span className='text-[#F2C6AB]'>audio?</span>
            </h1>
            <div className="flex flex-row items-center mt-8 space-x-10">
              <button className="px-10 py-2 border-2 border-black text-black bg-transparent hover:bg-orange-200 shadow-custom font-poppins font-semibold" onClick={handleOption('yes')}>Yes</button>
              <button className="px-10 py-2 border-2 border-black text-black bg-transparent hover:bg-orange-200 shadow-custom font-poppins font-semibold" onClick={handleOption('no')}>No</button>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={playGif}
          timeout={200}
          classNames="fade-fast"
          unmountOnExit
        >
          <div className='fixed inset-0 flex justify-center items-center'>
          <video autoPlay loop muted className='w-full h-full object-cover'>
              <source src="/loadingthesixth.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Intro;
