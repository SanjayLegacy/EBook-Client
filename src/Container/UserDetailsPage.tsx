import { useParams } from "react-router-dom";
import Button from "../Components/base/button/button";
import { useUsersHooks } from "../Hooks/UsersHooks";

export default function UserDetailsPage() {
  const { id } = useParams();
  const { user, deleteUser } = useUsersHooks(id ?? "");

  return (
    <>
      <div className="flex items-start bg-white w-screen max-h-screen overflow-hidden">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6">
              User Details
            </h1>
          </div>
          <div className="w-full mt-5">
            <div className="grid grid-cols-12 text-TT-gray md:gap-x-8 gap-y-4">
              <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                <span>
                  Name: {user?.firstName} {user?.lastName}
                </span>
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                <span>Username: {user?.username}</span>
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                <span>Wallet Balance: ${user?.walletBalance}</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-x-10 gap-y-2 md:mt-10 my-5 justify-center">
              <Button
                color="primary"
                className="py-1 md:w-fit h-fit w-full mx-0"
                onClick={() => {
                  if (id) {
                    deleteUser(id);
                  }
                }}
              >
                {"Delete User"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
