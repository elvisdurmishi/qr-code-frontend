const Accordion = ({ text = 'Default accordion text', items = null }) => {
  return (
    <div className={'flex flex-col accordion group w-[100%] text-center'}>
      {text}
      <div className={'accordion-content'}>{items}</div>
    </div>
  );
};

export default Accordion;
