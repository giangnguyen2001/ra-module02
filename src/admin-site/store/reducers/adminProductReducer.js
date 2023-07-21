import { createReducer } from "@reduxjs/toolkit";
import getNextId from "../../utility/getNextId";

const initState = [
  {
    id: 1,
    name: "Orange Inox Kettle",
    description: "Circle kettle's easy to use to boil water faster",
    unitPrice: 5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/02/28/15/35/kettle-653666_1280.jpg",
  },
  {
    id: 2,
    name: "Summer Hammock",
    description: "Hammock's use to relax or sleep",
    unitPrice: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/06/07/18/hammock-2589814_1280.jpg",
  },
  {
    id: 3,
    name: "Kitchen Utensils",
    description: "Things are use to cook",
    unitPrice: 10,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/30/09/34/wooden-spoon-1013566_1280.jpg",
  },
  {
    id: 4,
    name: "Paint Brush",
    description: "Brush which is use to make up",
    unitPrice: 6,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/04/11/26/cosmetics-5128784_1280.jpg",
  },
  {
    id: 5,
    name: "Flower Vase",
    description: "Use to decorate the house",
    unitPrice: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/05/31/18/12/flowers-7233987_1280.jpg",
  },
  {
    id: 6,
    name: "Travel Case",
    description: "Use to travel whenever you feel boring at home",
    unitPrice: 6,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg",
  },
  {
    id: 7,
    name: "Straw Hat",
    description: "Wear it to make you more cool",
    unitPrice: 3,
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/06/22/16/00/cap-7278216_1280.jpg",
  },
  {
    id: 8,
    name: "Soft Chair",
    description: "Relax when you feel tired",
    unitPrice: 6,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/11/09/17/07/chair-5727263_1280.jpg",
  },
  {
    id: 9,
    name: "Bucket",
    description: "Use to take water...",
    unitPrice: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/03/19/14/44/bucket-2156662_1280.jpg",
  },
];

const productReducer = createReducer(
  { products: initState },
  {
    ADMIN_ADD_PRODUCT: (state, action) => {
      const products=state.products;
      const newProduct = [
        ...products,
        {
          ...action.payload,
          id: getNextId(products),
        },
      ];

      return {
        ...state,
        products: newProduct,
      };
    },

    ADMIN_DELETE_PRODUCT: (state, action) => {
      let newProductList = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        products: newProductList,
      };
    },
    ADMIN_GET_PRODUCT: (state, action) => {
      // console.log(action.payload);
      return {
        ...state,
        initState: action.payload,
      };
    },
    ADMIN_UPDATE_PRODUCT: (state, action) => {
      const products=state.products;
      let newProduct = [];

      for (let i = 0; i < products.length; i++) {
        if (products[i].id === action.payload.id) {
          newProduct.push({ ...action.payload });
        } else {
          newProduct.push({ ...products[i] });
        }
      }

      return {
        ...state,
        products: newProduct,
      };
    },
    ADMIN_SEARCH_PRODUCT: (state, action) => {
      const products = state.products;
      return {
        ...state,
        products: state.products.filter((item) =>
          item.name.toLowerCase().includes(action.payload)
        ),
      };
    },
  }
);

export default productReducer;
