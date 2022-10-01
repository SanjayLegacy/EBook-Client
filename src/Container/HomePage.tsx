import BookCardLayout from "../Components/bookCard";
import { useEBookHooks } from "../Hooks/EBookHooks";

export default function HomePage() {
  const { ebooks } = useEBookHooks();

  return (
    <div className="overflow-hidden">
      <div className="flex items-start bg-white w-screen min-h-screen">
        <div className="container ml-auto mr-auto items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6 capitalize">
              Books 📚
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {ebooks?.map((eBooks, index) => {
              return <BookCardLayout bookId={eBooks.id} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
