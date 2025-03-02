import { github, linkedin, cv, Resume } from "../assets"

const StickySocial = () => {
  const onButtonClick = () => {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className='fixed z-10 bottom-20 right-0 flex flex-col gap-1'>
        <button
            onClick={() => window.open(Resume, "_blank")}
            className='h-[40px] w-[40px] hover:scale-110'>
            <img src={cv} alt="Resume" />
        </button>
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