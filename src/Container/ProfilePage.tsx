import { useEffect, useState } from "react";
import Button from "../Components/base/button/button";
import Field from "../Components/base/field/field";
import Icon from "../Components/base/icon/icon";
import NavBar from "../Components/NavBar";

export default function ProfilePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  useEffect(() => {
    if (showPasswordFields) {
      setShowPasswordFields(!showConfirmPassword);
    }
  }, [showPasswordFields]);

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex items-start bg-white w-screen min-h-screen">
          <div className="container ml-auto mr-auto flex flex-wrap items-start">
            <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
              <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6">
                Profile Page...😀
              </h1>
            </div>
            <div className="w-full mt-5">
              <form id="profileForm" onSubmit={() => {}}>
                <div className="grid grid-cols-12 text-TT-gray md:gap-x-8 gap-y-4">
                  <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                    <Field
                      name=""
                      type="text"
                      placeholder={`First Name`}
                      id="firstName"
                      className="px-2 h-12 md:ml-1"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                    <Field
                      name=""
                      type="text"
                      placeholder={`Last Name`}
                      id="lastName"
                      className="px-2 h-12 md:ml-1"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                    <Field
                      name=""
                      type="text"
                      placeholder={"User Name"}
                      id="email"
                      className="px-2 h-12 md:ml-1"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                    <Field
                      name=""
                      type="number"
                      placeholder={"Wallet balance"}
                      id="phone"
                      className="px-2 h-12 md:ml-1"
                    />
                  </div>
                  {showPasswordFields && (
                    <>
                      <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                        <div className="relative">
                          <Field
                            name="password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder={"Password"}
                            id="input_password"
                            className="px-2 h-12"
                          />
                          {
                            <span
                              className="absolute top-4 right-4 cursor-pointer text-gray-400"
                              onClick={() => {
                                setShowConfirmPassword(!showConfirmPassword);
                              }}
                            >
                              {!showPassword ? (
                                <Icon icon="EYE_SLASH" />
                              ) : (
                                <Icon icon="EYE" />
                              )}
                            </span>
                          }
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                        <div className="relative">
                          <Field
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder={"Confirm Password"}
                            id="input_password"
                            className="px-2 h-12"
                          />
                          {
                            <span
                              className="absolute top-4 right-4 cursor-pointer text-gray-400"
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                            >
                              {!showPassword ? (
                                <Icon icon="EYE_SLASH" />
                              ) : (
                                <Icon icon="EYE" />
                              )}
                            </span>
                          }
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex flex-col md:flex-row gap-x-10 gap-y-2 md:mt-10 my-5 justify-center">
                  <Button
                    color="plain"
                    className="py-1 md:w-fit h-fit w-full mx-0"
                    form="profileForm"
                    onClick={() => {
                      setShowPasswordFields(!showPasswordFields);
                    }}
                  >
                    {"Change Password"}
                  </Button>
                  <Button
                    color="primary"
                    className="py-1 md:w-fit h-fit w-full mx-0"
                    form="profileForm"
                    submit
                  >
                    {"Save"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
