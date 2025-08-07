export function SectionPicker() {
  return (
    <div className={"flex justify-center"}>
      <div className={"flex justify-between w-[90%] lg:justify-around relative after:absolute " +
        "after:h-[0.5px] mx-6 after:w-full after:bottom-0 py-2 lg:pt-20 lg:mb-4 after:bg-gray-300"}
      >
        <Button title={"Product Details"}/>

        <Button title={"Rating & Reviews"}/>

        <Button title={"FAQs"}/>
      </div>
    </div>
  );
}

type ButtonProps = {
  title: string;
}

function Button({title}: Readonly<ButtonProps>) {
  return (
    <button>{title}</button>
  )
}