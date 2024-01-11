

export default function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { label, enabled = false } = props;

  // Construa a lista de classes condicionalmente
  const buttonClasses = `
    bg-button-bg-primary text-white rounded-md pr-[16px] pl-[16px] py-[8px] w-full font-normal
    ${enabled ? ' w-[100px] bg-white flex items-center pl-[0] justify-start  gap-2 rounded-md text-black font-bold font-dm-sans text-sm leading-5' : ''}
  `;

  return (
    <button className={buttonClasses} data-enabled={enabled}>
      {label}
    </button>
  );
}
