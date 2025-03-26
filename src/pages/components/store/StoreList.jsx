import { useState } from "react";
import CartIcon from "./icons/CartIcon";
import clsx from "clsx";

const StoreList = () => {
  const dummyList = [
    { id: 0, name: "Test" },
    { id: 1, name: "Test 2" },
    { id: 2, name: "Test" },
    { id: 3, name: "Test 2" },
    { id: 4, name: "Test" },
    { id: 5, name: "Test 2" },
    { id: 6, name: "Test" },
    { id: 7, name: "Test 2" },
  ];

  const [openSideMenu, setOpenSideMenu] = useState(false);
  const handleToggleSidemenu = () => {
    setOpenSideMenu((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <div
        className={clsx(
          "w-screen h-[10vh] bg-[#24152A] max-h-80 flex flex-col justify-center duration-400 ease-in-out items-center",
          { "blur-md": openSideMenu }
        )}
      >
        <h1 className="text-[#FFED68]  text-center tracking-normal font-[Dosis] w-fit font-extrabold text-[36px] md:text-[80px] lg:text-[80px] opacity-100">
          Store
        </h1>
      </div>
      {/* Search and Cart Area */}
      <div
        className={clsx(
          "h-30 w-full flex justify-between items-center px-14 py-6 duration-400 ease-in-out ",
          { "blur-md": openSideMenu }
        )}
      >
        <input
          type="email"
          placeholder="Search"
          className="bg-[#FFFFFF] border border-white/10 rounded-xl p-1 w-5/10 text-black placeholder-gray-400 text-[16px] md:text-[24px] focus:outline-none focus:border-black transition"
        />
        <button
          className="bg-[#24152A] hover:bg-[#44355A] cursor-pointer  p-4 h-fit w-fit aspect-square rounded-full"
          onClick={() => {}}
        >
          <CartIcon className="size-10" />
        </button>
      </div>
      {/* List Area */}
      <div
        className={clsx(
          "flex-grow w-full bg-[#372B59] px-10 text-3xl overflow-y-scroll grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 duration-400 ease-in-out ",
          {
            "blur-md": openSideMenu,
          }
        )}
      >
        {dummyList.map((item) => (
          <StoreItem key={item.id} onClick={handleToggleSidemenu} />
        ))}
      </div>
      {/* SideMenu */}
      <div
        className={clsx("w-full h-full absolute ", {
          " hidden": !openSideMenu,
        })}
        onClick={handleToggleSidemenu}
      ></div>
      <ItemDetails open={openSideMenu} />
    </>
  );
};

const StoreItem = ({ onClick }) => {
  return (
    <div className=" p-2 w-full text-black" onClick={onClick}>
      <div className="bg-gray-400 rounded-lg h-[450px]"></div>
    </div>
  );
};

const ItemDetails = ({ open }) => {
  return (
    <div
      className={clsx(
        "absolute max-w-8/10 2xl:max-w-[1000px] transition-width duration-400 ease-in-out h-full bg-white right-0 z-10",
        {
          "w-0": !open,
          "w-full": open,
        }
      )}
    ></div>
  );
};

export default StoreList;
