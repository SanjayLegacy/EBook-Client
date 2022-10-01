import React from "react";
import BookCardLayout from "../Components/bookCard";
import { useMyBooksHooks } from "../Hooks/MyBooksHooks";
import { format } from "date-fns";

export default function MyBooks() {
  const { myBooks } = useMyBooksHooks();

  return (
    <div className="overflow-hidden">
      <div className="flex items-start bg-white w-screen min-h-screen">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6 capitalize">
              My Books 📚
            </h1>
          </div>
          {myBooks?.map((eBooks, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col mt-2">
                  <BookCardLayout bookId={eBooks.bookId} />
                  <span className="text-xs text-black">
                    Start Date:{" "}
                    {format(new Date(eBooks.startDate), "dd-MM-yyyy hh:mm a")}
                  </span>
                  <span className="text-xs text-black">
                    End Date:{" "}
                    {format(new Date(eBooks.endDate), "dd-MM-yyyy hh:mm a")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
