import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGripHorizontal } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import Send from "./components/Send";
import Receive from "./components/Receive";
import Buy from "./components/Buy";
import Earn from "./components/Earn";
import Tabs from "./components/Tabs";
import CopyButton from "./components/CopyButton";
import NotificationBell from "./components/NotificationBell";

const App = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="bg-gray-100 bg-opacity-45 shadow-lg rounded-lg border border-gray-300 w-[510px] min-h-screen p-6">
        <div className="flex justify-between font-semibold font-mono">
          <div className="flex items-center space-x-2 cursor-pointer  hover:translate-y-1">
            <h3 className="font-medium text-base text-gray-900 text-opacity-70 leading-tight">
              Main Wallet 2
            </h3>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-lg text-gray-500 text-opacity-50"
            />
          </div>
          <div className="flex items-center gap-2">
            <CopyButton />

            <div className="bg-gray-400 bg-opacity-10 p-2 rounded-lg">
              <FaGripHorizontal className="text-2xl text-gray-500 cursor-pointer hover:translate-x-1" />
            </div>

           <NotificationBell />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-4xl mt-2 cursor-pointer hover:text-[34px]">
            $300,062,997,015,081,790.00
          </h1>
        </div>
        <div className="flex justify-start mt-8 space-x-16">
          {/* Send */}
          <Send />

          {/* receive */}
          <Receive />

          {/*   buy   */}
          <Buy />

          {/* earn */}
          <Earn />
        </div>

        {/* crypto and nfts tab */}
       <Tabs />

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <div className="mr-4 relative">
              <img
                src="/static/images/usdt.png"
                alt="usdt logo icon"
                className="rounded-full h-10 w-10 object-contain "
              />
              <div className="bg-gray-200/70 absolute -right-0 -bottom-0 rounded-full">
                <SiPrisma className="" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1>
                <span className="font-semibold text-gray-600">USDT</span>{" "}
                <span className="text-xs bg-gray-400 p-1 rounded-md bg-opacity-20">
                  Ethereum
                </span>
              </h1>
              <p className="text-sm">
                $1.00 <span className="text-red-500 text-sm">-0.03%</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <h1 className="text-lg font-semibold text-gray-600">
              300,000,000,000,000,000
            </h1>
            <p className="text-sm">$300,062,997,014,982,840.00</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <div className="mr-4">
              <img
                src="/static/images/xrp.png"
                alt="xrp logo icon"
                className="rounded-full h-10 w-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1>
                <span className="font-semibold text-gray-600">XRP</span>
              </h1>
              <p className="text-sm">
                $0.60 <span className="text-red-500 text-sm">-0.93%</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <h1 className="text-lg font-semibold text-gray-600">
              160,000.5485
            </h1>
            <p className="text-sm">$96,926.04</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <div className="mr-4">
              <img
                src="/static/images/doge.png"
                alt="doge logo icon"
                className="rounded-full h-10 w-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1>
                <span className="font-semibold text-gray-600">DOGE</span>
              </h1>
              <p className="text-sm">
                $0.08 <span className="text-gray-950/65 text-sm">+0.67%</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <h1 className="text-lg font-semibold text-gray-600">
              22,034.753092
            </h1>
            <p className="text-sm">$1,802.86</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
