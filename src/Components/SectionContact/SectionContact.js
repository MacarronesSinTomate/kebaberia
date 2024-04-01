export default function SectionContact() {

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-2/3 h-5/6 flex flex-col">
        <div className="text-white flex flex-col justify-around flex-[2]">
          <div className="flex">
            <p className="text-slate-500 flex-1">Inquires</p>
            <p className="flex-[4]">Correo@Gmail.com</p>
          </div>
          <div className="flex">
            <p className="text-slate-500 flex-1">Order</p>
            <p className="flex-[4]">Shipping@Gmail.com</p>
          </div>
          <div className="flex">
            <p className="text-slate-500 flex-1">Phone</p>
            <p className="flex-[4]">+34 123456789</p>
          </div>
        </div>
        <div className="flex-1">
          <button className="bg-slate-800 w-1/2 h-10 text-white rounded-md"> Contact Us </button>
        </div>
      </div>
    </div>
  );
}