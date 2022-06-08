const Accordion = ({ text = "Default accordion text", items = null }) => {
  return (
    <div className={"flex flex-col accordion group w-[100%] text-center"}>
      {text}
      <div
        className={"accordion-content group-hover:scale-100 group-hover:block"}
      >
        {items}
      </div>
    </div>
  );
};

export default Accordion;
