import Icon from "./base/icon/icon";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Role, UserModel } from "../Models/UserModel";
import axios from "axios";
import { Config } from "../Config/Config";

export default function NavBar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<UserModel>();

  useEffect(() => {
    if (!currentUser) {
      axios
        .get(Config.API_URL + "/auth/currentUser", {
          headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
        })
        .then((res: any) => {
          if (res.data.error) {
            console.log("Error getting current user data!");
          } else {
            setCurrentUser(res.data);
          }
        });
    }
  }, [currentUser]);

  return (
    <>
      <section>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 shadow-lg dark:bg-white">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div
              onClick={() => {
                navigate("/home");
              }}
              className="flex cursor-default items-center h-8 w-8"
            >
              <img src={require("../Assets/logo.png")} alt="img" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black pl-2">
                E-Book Store
              </span>
            </div>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-white">
                {currentUser?.role === Role.User && (
                  <>
                    <li>
                      <NavLink to="/cart">
                        <div className="block py-2 pr-4 pl-3 text-white bg-EB-yellow rounded md:bg-transparent md:text-black md:p-0">
                          Cart
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <span className="block py-2 pr-4 pl-3 text-white bg-EB-yellow rounded md:bg-transparent md:text-black md:p-0">
                        Wallet ${currentUser?.walletBalance}
                      </span>
                    </li>
                    <li>
                      <NavLink to="/myBooks">
                        <div className="block py-2 pr-4 pl-3 text-white bg-EB-yellow rounded md:bg-transparent md:text-black md:p-0">
                          My Books
                        </div>
                      </NavLink>
                    </li>
                  </>
                )}
                {currentUser?.role === Role.Admin && (
                  <>
                    <li>
                      <NavLink to="/newBook">
                        <div className="block py-2 pr-4 pl-3 text-white bg-EB-yellow rounded md:bg-transparent md:text-black md:p-0">
                          Add New Book
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/users">
                        <div className="block py-2 pr-4 pl-3 text-white bg-EB-yellow rounded md:bg-transparent md:text-black md:p-0">
                          Users
                        </div>
                      </NavLink>
                    </li>
                  </>
                )}
                <li>
                  <NavLink to="/ledger">
                    <div className="block py-2 pr-4 pl-3 text-white bg-EB-yellow rounded md:bg-transparent md:text-black md:p-0">
                      Transactions
                    </div>
                  </NavLink>
                </li>
                <li>
                  <span className="block py-2 pr-4 pl-3 text-white bg-EB-yellow rounded md:bg-transparent md:text-black md:p-0">
                    {currentUser?.firstName} {currentUser?.lastName}
                  </span>
                </li>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Icon
                      icon="LOGOUT"
                      onClick={() => {
                        sessionStorage.removeItem("accessToken");
                        navigate("/");
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
}
