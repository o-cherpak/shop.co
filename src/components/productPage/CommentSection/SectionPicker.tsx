type SectionPickerProps = {
  setSelectedSection: (selectedSection: "productsDetails" | "comments" | "faq") => void;
  selectedSection: string;
}

export function SectionPicker({setSelectedSection, selectedSection}: Readonly<SectionPickerProps>) {
  return (
    <div className={"flex justify-center"}>
      <div className={"flex justify-between w-[90%] lg:justify-around relative after:absolute " +
        "after:h-[0.5px] mx-6 after:w-full after:bottom-0 py-2 lg:pt-20 lg:mb-4 after:bg-gray-300"}
      >
        <SectionButtonPicker
          title={"Product Details"}
          section={"productsDetails"}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />

        <SectionButtonPicker
          title={"Rating & Reviews"}
          selectedSection={selectedSection}
          section={"comments"} setSelectedSection={setSelectedSection}
        />

        <SectionButtonPicker
          title={"FAQs"}
          section={"faq"}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      </div>
    </div>
  );
}

type ButtonProps = {
  title: string;
  section: "productsDetails" | "comments" | "faq";
  setSelectedSection: (selectedSection: "productsDetails" | "comments" | "faq") => void;
  selectedSection: string;
}

export function SectionButtonPicker({title, section, setSelectedSection, selectedSection}: Readonly<ButtonProps>) {
  return (
    <button
      onClick={() => setSelectedSection(section)}
      className={`${selectedSection === section ? "font-semibold" : "font-normal"}`}
    >
      {title}
    </button>
  )
}