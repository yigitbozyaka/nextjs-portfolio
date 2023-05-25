import Image from "next/image";

function Header() {
  return (
    <>
      <div className="w-full h-[20vh] bg-black bg-[url('/600x200.png')] bg-no-repeat bg-contain bg-center">
        <Image
          className="relative z-10 top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-4 rounded-full"
          src="/IMG_1542.png"
          width={150}
          height={0}
          priority={true}
          alt="Yiğit Bozyaka"
        />
      </div>
    </>
  );
}

export default Header;
