import Success from "../iconsSuccess";
import Close from "../iconsClose";
import Button from "../Button/Button";

export default function AlertBar() {
  return (
    <div className=" w-[500px] flex p-4 items-start gap-5 self-stretch rounded-md border border-solid border-secundary bg-background-primary">
      <div>
        <Success />
      </div>
      <div className="flex flex-col items-start gap-3 flex-1">
        <div className="flex flex-col items-start gap-1 self-stretch">
          <span className="self-stretch text-text-primary-900 font-bold text-md leading-6">
            Notification title
          </span>
          <p className="self-stretch font-normal leading-5 text-sm text-text-primary-900 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
            est amet eligendi reprehenderit dolorem natus dolore aliquam iure a
            ipsum, labore obcaecati facere quaerat voluptate perspiciatis
            expedita! Expedita, ad?
          </p>
        </div>
     
        <Button enabled={true}
         label='Click here' />
      </div>
      <div>
        <button>
          <Close />
        </button>
      </div>
    </div>
  );
}
