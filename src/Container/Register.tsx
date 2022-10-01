import Button from "../Components/base/button/button";
import Field from "../Components/base/field/field";
import Icon from "../Components/base/icon/icon";
import background from "../Assets/loginbgImage.svg";
import { useRegisterHooks } from "../Hooks/RegisterHooks";

export default function Register() {
  const {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    navigate,
    register,
    errors,
    onSubmit,
  } = useRegisterHooks();

  return (
    <div className="grid grid-cols-2 h-screen">
      <form
        className="bg-white flex flex-col justify-center items-center rounded-md"
        onSubmit={onSubmit}
      >
        <span className="text-xl text-center uppercase">
          Create an Account...!
        </span>
        <Field
          {...register("username")}
          error={errors?.username?.message}
          type="text"
          name="username"
          placeholder="User Name"
          className="mt-4"
        />
        <Field
          {...register("firstName")}
          error={errors?.firstName?.message}
          type="text"
          name="firstName"
          placeholder="First Name"
          className="mt-4"
        />
        <Field
          {...register("lastName")}
          error={errors?.lastName?.message}
          type="text"
          name="lastName"
          placeholder="Last Name"
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
        <div>
          <div className="relative">
            <Field
              {...register("confirmPassword")}
              error={errors?.confirmPassword?.message}
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder={"Confirm Password *"}
              id="input_confirm_password"
              className="px-2 h-12 mt-4"
            />
            {
              <span
                className="absolute top-4 right-4 cursor-pointer text-gray-400"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
              >
                {!showConfirmPassword ? (
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
          >{`Register`}</Button>
        </div>
        <div className="justify-center items-center flex flex-col py-5">
          <span
            className="text-md text-gray-600 cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Have an account...!
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
