import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  
  
  const  playPause = () => {
    let track = document.getElementById("track");
    let controlBtn = document.getElementById("play-pause");
    track.volume = 0.05;
    if (track?.paused) {
      track?.play();
      //controlBtn.textContent = "Pause";
      controlBtn.className = "pause";
    } else {
      track?.pause();
      //controlBtn.textContent = "Play";
      controlBtn.className = "play";
    }
  }
  
  // controlBtn.addEventListener("click", playPause);
  const endedfunc =  () => {
    let controlBtn = document.getElementById("play-pause");
    controlBtn.className = "play";
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.padding} absolute insert-0 top-[30px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]"> Mohd Aqib</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full-Stack Developer with a passion for creating highly{" "}
            <br className="sm:block sm:hidden" /> dynamic applications.
            {/* and the <br className='sm:block sm:hidden'/> use of open source technologies <br className='sm:block sm:hidden'/> to meet business challenges in a <br className='sm:block sm:hidden'/> cost-effective and flexible manner. */}
          </p>
        </div>
      </div>
      {/* <br/>
      <br className='sm:block sm:hidden'/>
      <br className='sm:block sm:hidden'/> */}
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center flex-col">
        <audio id="track" onEnded={endedfunc}>
          <source src="src/assets/audio/cool.mp3" type="audio/mpeg" />
        </audio>

        <div id="player-container" className="mb-3">
          <div id="play-pause" class="play" onClick={playPause}>
            Play
          </div>
        </div>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
