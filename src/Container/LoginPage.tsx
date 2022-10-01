import Button from "../Components/base/button/button";
import Field from "../Components/base/field/field";
import Icon from "../Components/base/icon/icon";
import background from "../Assets/loginbgImage.svg";
import { useLoginHooks } from "../Hooks/LoginHooks";

export default function LoginPage() {
  const {
    register,
    errors,
    onSubmit,
    showPassword,
    setShowPassword,
    navigate,
  } = useLoginHooks();

  return (
    <div className="grid grid-cols-2 h-screen">
      <form
        className="bg-white flex flex-col justify-center items-center rounded-md"
        onSubmit={onSubmit}
      >
        <span className="text-xl text-center uppercase">Login Page...!</span>
        <Field
          {...register("username")}
          error={errors?.username?.message}
          type="text"
          name="username"
          placeholder="User Name"
          className="mt-4"
        />
        <div>
          <div className="relative">
            <Field
              {...register("password")}
              error={errors?.password?.message}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder={"Password *"}
              id="input_password"
              className="px-2 h-12 mt-4"
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
        <div className="justify-center items-center flex flex-col">
          <Button
            className=" py-3 text-white mt-4"
            color="primary"
            submit
          >{`Login`}</Button>
        </div>
        <div className="justify-center items-center flex flex-col py-5">
          <span
            className="text-md text-gray-600 cursor-pointer"
            onClick={() => {
              navigate("/register");
            }}
          >
            Create a new account...!
          </span>
        </div>
      </form>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
