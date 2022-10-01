import { useCartHooks } from "../Hooks/CartHooks";
import { CartItemsModel } from "../Models/CartItemsModel";
import Field from "./base/field/field";
import BookCardLayout from "./bookCard";

interface _Props {
  bookId: string | number;
}
export default function CartItemCardLayout(props: _Props) {
  const { bookId } = props;
  const { cart, updateCartItem } = useCartHooks();
  const cartItem = cart?.items?.find(
    (item: CartItemsModel) => item.itemId === bookId
  );

  if (!cartItem) {
    return null;
  }

  const handleChange = (value: number) => {
    updateCartItem(bookId.toString(), value);
  };

  return (
    <div className="flex flex-col items-center justify-center" key={bookId}>
      <BookCardLayout bookId={bookId} />
      <div>
        <div className="flex flex-col mt-2">
          <span className="text-xs text-black">No.Of Days to be Rented</span>
          <Field
            key={bookId}
            value={cartItem?.noOfDays}
            type={"number"}
            name={bookId.toString()}
            placeholder={"Enter no.of days"}
            min="1"
            onChange={(e: any) => {
              handleChange(e.target.valueAsNumber);
            }}
          />
        </div>
      </div>
    </div>
  );
}
