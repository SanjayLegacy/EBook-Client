import Button from "../Components/base/button/button";
import CartItemCardLayout from "../Components/CartItemCard";
import { useCartHooks } from "../Hooks/CartHooks";

export default function CartPage() {
  const { cart, confirmOrder } = useCartHooks();

  return (
    <div className="overflow-hidden">
      <div className="flex items-start bg-white w-screen min-h-screen">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6 capitalize">
                Books in your cart...🛒
              </h1>
              <Button
                color="primary"
                className="py-1 md:w-fit h-fit w-full mx-0"
                onClick={() => confirmOrder()}
              >
                Confirm Order
              </Button>
            </div>
          </div>
          {cart?.items?.map((eBooks: any, index: number) => {
            return <CartItemCardLayout bookId={eBooks.itemId} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
