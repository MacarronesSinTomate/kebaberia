export default function SectionContact({
  contactForms = [
  {
    title: "Inquires",
    contact: "Correo@Gmail.com"
  },{
    title: "Order",
    contact: "Shipping@Gmail.com"
  },{
    title: "Phone",
    contact: "+34 123456789"
  }],
  buttonTitle = "Contact Us"
}) {

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-2/3 h-5/6 flex flex-col">
        <div className="text-white flex flex-col justify-around flex-[2]">
          {
            contactForms.map((contactForm) => {
              return ( 
                <div key={ contactForm.title } className="flex">
                  <p className="text-slate-500 flex-1">{ contactForm.title }</p>
                  <p className="flex-[4]">{ contactForm.contact }</p>
                </div>
              );
            })
          }
        </div>
        <div className="flex-1">
          <button className="bg-slate-800 w-1/2 h-10 text-white rounded-md"> { buttonTitle } </button>
        </div>
      </div>
    </div>
  );
}