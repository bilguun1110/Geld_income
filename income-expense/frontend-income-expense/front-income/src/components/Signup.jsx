import Image from "next/image";

export const Signup = ({ handleSwitchForm }) => {
  return (
    <div className="">
      <div className=" h-[100vh] w-[50%] flex flex-col  bg-white pt-64">
        <div className="w-96 h-[554px] flex flex-col gap-y-10 justify-center items-center  ml-56">
          <div className="flex">
            <Image
              src="/logo.png"
              width={92}
              height={34}
              className="w-23 h-9"
            />
          </div>
          <div className=" w-72 flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Create Geld account</h2>
            <p className="font-normal text-sm">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-4 robotoText">
            <input
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Name"
            />
            <input
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Email"
            />
            <input
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Password"
            />
            <input
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Re-Password"
            />
            <button className="w-[100%] h-12 rounded-2xl bg-[#0166FF] bg-p-2 mx-auto text-white text-base font-normal">
              Sign up
            </button>
          </div>
          <div className="flex font-normal text-sm gap-3">
            <p>Already have account?</p>
            <button className="text-[#0166FF]" onClick={handleSwitchForm}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
