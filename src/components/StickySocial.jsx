import { github, linkedin } from "../assets"

const StickySocial = () => {
  return (
    <div className='fixed z-10 bottom-20 right-0 flex flex-col gap-1'>
        <button
            onClick={() => window.open("https://www.linkedin.com/in/aqib-workspace/", "_blank")}
            className='h-[40px] w-[40px] hover:scale-110'>
            <img src={linkedin} alt="linkedin" />
        </button>
        <button 
            onClick={() => window.open("https://github.com/pRiMeXoMeGa", "_blank")}
            className='btn h-[40px] w-[40px] bg-gray-500 rounded-[3px] hover:scale-110'>
            <img src={github} alt="linkedin" />
        </button>
    </div>
  )
}

export default StickySocial