import Groups from "../icons";
import Button from "../Button/Button";

export default function Card({ className }) {
  return (
    <div className="flex font-sans flex-col items-start w-[350px] border border-solid border-border-primary rounded-md gap-[16px]">
      <div className="flex items-center justify-center h-[160px] w-full p-[8px] bg-background-secundary border-b-border-secondary">
        image
      </div>
      <div className="flex flex-col w-full items-start p-[16px] gap-[16px]">
        <div className="flex flex-col items-start">
          <h1 className={`text-text-primary-900 font-bold text-[20px] ${className}`}>
            Card title
          </h1>
          <p className="text-quartenary-500 text-[14px] font-normal">
            Seconday text
          </p>
        </div>
        <div className="flex w-full">
          <p className=" text-[16px] font-normal text-tertiary-600">
            Lorem ipsum dolor sit amet consectetur. Leo sagittis id nascetur
            lectus. Est tincidunt ut euismod eu nisi posuere.
          </p>
        </div>
        <div className="flex w-full justify-between items-center border border-solid border-border-secondary rounded-md px-[8px] py-[12px]">
          <div className="flex items-center gap-1">
            <span className="text-quartenary-500">
              <Groups />
            </span>
            <span className="text-quartenary-500 text-[14px]">
              Opnião pública
            </span>
          </div>
          <div className="flex gap-1 rounded-md text-text-secundary-700 bg-zinc-100 px-2 py-1">
            😐
            <p className="text-[14px] font-semibold">Regular</p>
          </div>
        </div>
        <Button label='Button label' />
      </div>
    </div>
  );
}
