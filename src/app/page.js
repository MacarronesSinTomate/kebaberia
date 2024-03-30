
import Section from "@/components/Section/Section";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Section height={400} percentage={50} gap={1} 
        classNameGeneral={"mt-10"} 
        classNameLeft={"bg-black text-white"}
        classNameRight={"bg-[#edab51]"}
        propChildrenLeft={
          <p className="text-[200px]">Kebab</p>
        } 
        maskRight={"https://cdn-icons-png.flaticon.com/512/135/135181.png"}
        propChildrenRight={
          <div className="h-full w-full absolute bg-no-repeat" style={{ backgroundPosition: "50% 100%", backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />
        } 
      />

      <Section height={400} percentage={50} gap={1} 
        classNameGeneral={"mt-10"} 
        classNameLeft={"bg-black text-white"}
        classNameRight={"bg-[#edab51]"}
        propChildrenLeft={
          <p className="text-[200px]">Kebab</p>
        } 
        maskRight={"https://cdn-icons-png.flaticon.com/512/135/135181.png"}
        propChildrenRight={
          <div className="h-full w-full absolute bg-no-repeat" style={{ backgroundPosition: "50% 100%", backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />
        } 
      />
    </main>
  );
}
