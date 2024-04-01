export default function SectionDiscount({
  className,
  discount = "15",
  sideImage = "",
  hashtag = "#HASHTAG"
}) {

  return (
    <div className={"w-full h-full flex items-center justify-center " + className}>
      <div className="w-4/6 h-2/3 rounded-xl bg-slate-800 absolute bottom-4 flex items-center justify-center">
        <div className="absolute top-0 -translate-y-1/2 text-white text-3xl"> LOGO </div>
        <div className="text-white text-2xl text-center flex flex-col"> 
          <p className="font-bold">{ discount + " % Off" }</p> 
          <p className="text-slate-500"> { hashtag } </p>
        </div>
        <div 
          className="absolute w-40 h-40 right-0 bottom-0 translate-x-1/2 translate-y-1/2 bg-center bg-contain bg-no-repeat" 
          style={{ backgroundImage: `url(${sideImage})` }}
        />
      </div>
    </div>
  );
}