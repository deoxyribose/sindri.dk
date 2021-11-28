import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-blue-400 w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-gray-200 text-lg font-bold">Sindri</h1>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Team
                      </a>
                      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Cases
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col justify-center w-full absolute bg-gray-900 space-y-8">
              {" "}
              {/* px-2 pt-2 pb-3 */}
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button as="a" href="#" className="flex items-center justify-center text-6xl bg-gray-900  text-white  rounded-md font-medium">
                Team
              </Disclosure.Button>
              <Disclosure.Button as="a" href="#" className="flex items-center justify-center text-6xl text-gray-300  hover:bg-gray-700 hover:text-white rounded-md font-medium">
                Cases
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
