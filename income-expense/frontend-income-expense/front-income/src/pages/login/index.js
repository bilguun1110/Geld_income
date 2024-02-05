import Image from "next/image";

const Home = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <div>
        <Image
          src="/logo.png"
          width={100}
          height={500}
          className="w-[100px] h-[50px]"
        />
        <div>Түр хүлээнэ үү</div>
      </div>
    </div>
  );
};

export default Home;
