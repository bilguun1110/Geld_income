export const StepperButton = (props) => {
  const { onClick, text } = props;

  return (
    <button
      onClick={onClick}
      className="w-[100%] h-12 rounded-2xl bg-[#0166FF] mt-8 bg-p-2 mx-auto text-white text-base font-normal"
    >
      {text}
    </button>
  );
};
