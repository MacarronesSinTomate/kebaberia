import Section from "@/Components/Section/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Section height={200} percentage={70} gap={1} className={"bg-white"} 
        propChildrenLeft={
          <p>KAKA</p>
        } 
        propChildrenRight={
          <p>prueba</p>
        } 
      />
    </main>
  );
}
