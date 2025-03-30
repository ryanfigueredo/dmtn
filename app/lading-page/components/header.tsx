import Image from "next/image";
import CustomSheetHeader from "./sheet-header";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 z-50 mx-auto w-[calc(100%-48px)] rounded-full max-w-[70%] border-b bg-[#F5F5FF]">
      <div className="flex h-2 items-center justify-between p-6 md:p-8">
        <div>
          <Image
            height={30}
            width={50}
            className="md:h-[40px] md:w-[80px] filter brightness-0 invert-[10%] sepia-[40%] saturate-[1000%] hue-rotate-[210deg]"
            style={{
              filter: 'brightness(0) invert(10%) sepia(40%) saturate(1000%) hue-rotate(210deg)'
            }}
            src="/dmtn.svg"
            alt="Logo"
          />
        </div>
        <CustomSheetHeader />
      </div>
    </header>
  );
};

export default Header;