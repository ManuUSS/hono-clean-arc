import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export let users = [
  {
    id: "b7a9de7c-7095-4f38-9f35-f64b2128cbe3",
    name: "John",
    lastname: "Doe",
    email: "user489@example.com",
    photo: "https://randomuser.me/api/portraits/lego/6.jpg",
    role: "admin",
    store_id: "a07c8ddf-cb39-4c8e-8454-9b882c9db88e",
    password: "$2a$10$wzEq7tHtNv0aRBKFmBN9/O7rJeySAs9BBfOVv9z/WoVAPmlZ7Q.gK"
  },
  {
    id: "ff48bc4a-e37e-48c8-859d-61d63561a3fa",
    name: "John",
    lastname: "Doe",
    email: "user761@example.com",
    photo: "https://randomuser.me/api/portraits/lego/8.jpg",
    role: "user",
    store_id: "2f1c7af2-dc43-4aa8-96f2-afe0803fc9a2",
    password: "$2a$10$F3Cn6xInux8avXRAe21C3uybEqNMOorEVWWmMHhMT6tERPA1S7e36"
  },
  {
    id: "d3f4vbc4a-f37e-46c8-459d-61d63561a3fa",
    name: "John",
    lastname: "Doe",
    email: "user761@example.com",
    photo: "https://randomuser.me/api/portraits/lego/8.jpg",
    role: "user",
    store_id: "2f1c7af2-dc43-4aa8-96f2-afe0803fc9a2",
    password: "$2a$10$F3Cn6xInux8avXRAe21C3uybEqNMOorEVWWmMHhMT6tERPA1S7e36"
  }
]

export let products = [
  {
    id: "b7a9de7c-7095-4f38-9f35-f64b2128cbe3",
    store_id: "a07c8ddf-cb39-4c8e-8454-9b882c9db88e",
    name: "Product A",
    description: "Product A Description",
    price: 10.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "green"],
    category: "clothes",
  },
  {
    id: "ff48bc4a-e37e-48c8-859d-61d63561a3fa",
    store_id: "a07c8ddf-cb39-4c8e-8454-9b882c9db88e",
    name: "Product B",
    description: "Product B Description",
    price: 15.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["yellow", "#ff00ff", "#00ff00"],
    category: "clothes",
  },
  {
    id: "d3f4vbc4a-f37e-46c8-459d-61d63561a3fa",
    store_id: "a07c8ddf-cb39-4c8e-8454-9b882c9db88e",
    name: "Product C",
    description: "Product C Description",
    price: 20.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#e056bc", "#d8f988", "#f9f9f9"],
    category: "clothes",
  },
  {
    id: "d3f4vbc4a-f37e-46c8-459d-61d63561a3fa",
    store_id: "a07c8ddf-cb39-4c8e-8454-9b882c9db88e",
    name: "Product D",
    description: "Product D Description",
    price: 25.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#da984c", "#f9f9f9"],
    category: "clothes",
  }
];

