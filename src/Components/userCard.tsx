import { useNavigate } from "react-router-dom";
import { useUsersHooks } from "../Hooks/UsersHooks";

interface _Props {
  userId: string | number;
}

export default function UserCard(props: _Props) {
  const { userId } = props;
  const navigate = useNavigate();
  const { user } = useUsersHooks(userId);

  return (
    <div className="flex flex-col w-[20rem]">
      <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition bg-white duration-300 cursor-pointer">
        <div
          className="rounded-lg p-4 bg-EB-yellow flex flex-col"
          onClick={() => navigate(`/userDetailsPage/${userId}`)}
        >
          <div>
            <span className="text-white text-lg font-bold leading-none flex-none">
              {user?.firstName} {user?.lastName}
            </span>
          </div>
          <div className="text-md mt-2 text-white font-bold">
            {user?.username}
          </div>
        </div>
      </div>
    </div>
  );
}
