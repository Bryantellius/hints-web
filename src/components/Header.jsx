import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

const Header = ({ setShowModal }) => {
  return (
    <header className="flex text-center border-b-2 border-black-100 p-2">
      <div className="basis-1/3"></div>
      <div className="basis-1/3 header-title">
        <h1>S4N</h1>
      </div>
      <div className="basis-1/3 flex justify-end items-center pr-4">
        <QuestionMarkCircleIcon
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={(e) => setShowModal(true)}
        />
      </div>
    </header>
  );
};

export default Header;
