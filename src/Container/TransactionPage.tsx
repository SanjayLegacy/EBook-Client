import { useTransactionHooks } from "../Hooks/TransactionHooks";
import { Role } from "../Models/UserModel";

export default function TransactionPage() {
  const { transactions, userTransactions, currentUser } = useTransactionHooks();

  return (
    <div className="overflow-hidden">
      <div className="flex items-start bg-white w-screen min-h-screen">
        <div className="container ml-auto mr-auto items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6 capitalize">
              Transactions
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {currentUser?.role === Role.Admin &&
              transactions?.map((transaction, index) => {
                return (
                  <div className="flex flex-col w-full" key={index}>
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition bg-white duration-300 cursor-pointer">
                      <div className="rounded-lg p-4 bg-EB-yellow flex flex-col">
                        <div>
                          <span className="text-white text-lg font-bold leading-none flex-none">
                            UserID: {transaction?.userId}
                          </span>
                        </div>
                        <div className="text-md mt-2 text-white font-bold">
                          Transaction Amount: ${transaction?.amount}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            {currentUser?.role === Role.User &&
              userTransactions?.map((transaction, index) => {
                return (
                  <div className="flex flex-col w-full" key={index}>
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition bg-white duration-300 cursor-pointer">
                      <div className="rounded-lg p-4 bg-EB-yellow flex flex-col">
                        <div>
                          <span className="text-white text-lg font-bold leading-none flex-none">
                            UserID: {transaction?.userId}
                          </span>
                        </div>
                        <div className="text-md mt-2 text-white font-bold">
                          Transaction Amount: ${transaction?.amount}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
