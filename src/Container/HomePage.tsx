import axios from "axios";
import { useEffect, useState } from "react";
import Field from "../Components/base/field/field";
import BookCardLayout from "../Components/bookCard";
import { Config } from "../Config/Config";
import { useEBookHooks } from "../Hooks/EBookHooks";
import { EBookModel } from "../Models/EBookModel";

export default function HomePage() {
  const { ebooks, setSearchTerm, searchTerm, searchEBooks } = useEBookHooks();

  return (
    <div className="overflow-hidden">
      <div className="flex items-start bg-white w-screen min-h-screen">
        <div className="container ml-auto mr-auto items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6 capitalize">
              Books 📚
            </h1>
          </div>
          <Field
            name="searchText"
            type={"text"}
            placeholder={"Search Book By Genre, Title & Author..."}
            id="searchText"
            className="px-2 h-12 mt-4"
            onChange={(e: any) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div className="h-4" />
          <div className="flex flex-row flex-wrap justify-center items-center">
            {searchTerm && searchEBooks?.length && searchEBooks?.length > 0 ? (
              <>
                {searchEBooks?.map((eBooks, index) => {
                  return <BookCardLayout bookId={eBooks.id} key={index} />;
                })}
              </>
            ) : searchTerm && searchEBooks?.length == 0 ? (
              <>
                <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                  <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6 capitalize">
                    Empty!
                  </h1>
                </div>
              </>
            ) : (
              <>
                {ebooks?.map((eBooks, index) => {
                  return <BookCardLayout bookId={eBooks.id} key={index} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
