import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartHooks } from "../Hooks/CartHooks";
import { useEBookHooks } from "../Hooks/EBookHooks";
import { useMyBooksHooks } from "../Hooks/MyBooksHooks";
import { CartItemsModel } from "../Models/CartItemsModel";
import { UserBookModel } from "../Models/UserBookModel";
import { Role } from "../Models/UserModel";

interface _Props {
  bookId: string | number;
}

export default function BookCardLayout(props: _Props) {
  const { bookId } = props;
  const navigate = useNavigate();
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [alreadyInMyBooks, setAlreadyInMyBooks] = useState(false);
  const [showAddButton, setShowAddButton] = useState<boolean>(false);
  const { addToCart, book, removeFromCart, currentUser } =
    useEBookHooks(bookId);
  const { cart } = useCartHooks();
  const { myBooks, deleteBook } = useMyBooksHooks();

  useEffect(() => {
    if (cart && cart.items) {
      if (
        cart.items.find(
          (cartItem: CartItemsModel) => cartItem.itemId === bookId
        )
      ) {
        setAlreadyInCart(true);
      } else {
        setAlreadyInCart(false);
      }
    }
  }, [cart, bookId]);

  useEffect(() => {
    if (myBooks) {
      if (myBooks.find((book: UserBookModel) => book.bookId === bookId)) {
        setAlreadyInMyBooks(true);
      } else {
        setAlreadyInMyBooks(false);
      }
    }
  }, [myBooks, bookId]);

  useEffect(() => {
    if (showAddButton) {
      setShowAddButton(!showAddButton);
    }
  }, [showAddButton]);

  return (
    <div className="flex flex-col w-[20rem]">
      <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition bg-white duration-300 cursor-pointer">
        <figure
          onClick={() => {
            navigate(`/bookDetails/${bookId}`);
          }}
          className="mb-2"
        >
          {book?.thumbnailUrl ? (
            <img
              src={book?.thumbnailUrl}
              alt=""
              className="h-48 ml-auto mr-auto"
            />
          ) : (
            <img
              src={
                "https://emis.sikkimedutech.in/genweb/images/no-cover-image.jpg"
              }
              alt=""
              className="h-48 ml-auto mr-auto"
            />
          )}
        </figure>
        <div className="rounded-lg p-4 bg-EB-yellow flex flex-col">
          <div>
            <h5 className="text-white text-lg font-bold leading-none flex-none">
              {book?.title}
            </h5>
          </div>
          <div className="text-md mt-2 text-white font-bold">
            {`${"$"}${book?.rent} ${` / day`}`}
          </div>
          {currentUser?.role === Role.User && (
            <div className="flex items-center">
              {alreadyInCart ? (
                <button
                  className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  onClick={() => removeFromCart(bookId)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="stroke-current m-auto"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              ) : alreadyInMyBooks ? (
                <button
                  className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  onClick={() => deleteBook(bookId)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="stroke-current m-auto"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              ) : (
                <button
                  className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  onClick={() => addToCart(bookId)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="stroke-current m-auto"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
