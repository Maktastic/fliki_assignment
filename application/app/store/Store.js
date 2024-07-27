import { atom } from 'jotai';

const store = {
    titleAtom: atom('Product List'),
    products: atom([]),
    cart: atom([]),
    order: atom([])
}

export const cartCountAtom = atom((get) => {
    const cart = get(store.cart);
    return Array.isArray(cart) ? cart.reduce((count, item) => count + item.qty, 0) : 0;
});

export default store