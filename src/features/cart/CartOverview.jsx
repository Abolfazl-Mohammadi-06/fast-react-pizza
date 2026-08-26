import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function CartOverview() {
    const totalCartQuantity = useSelector((state) => state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0));
    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6">
            <p className="space-x-4font-semibold text-sm text-stone-300 sm:space-x-6 md:text-base">
                <span>{totalCartQuantity} pizzas</span>
                <span> $23.45</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    );
}

export default CartOverview;
