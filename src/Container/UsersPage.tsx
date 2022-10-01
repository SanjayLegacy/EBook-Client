import UserCard from "../Components/userCard";
import { useUsersHooks } from "../Hooks/UsersHooks";

export default function UsersPage() {
  const { users } = useUsersHooks();

  return (
    <div className="overflow-hidden">
      <div className="flex items-start bg-white w-screen min-h-screen">
        <div className="container ml-auto mr-auto items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6 capitalize">
              USERS
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {users?.map((user, index) => {
              return <UserCard userId={user.id} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
