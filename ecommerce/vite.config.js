// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.ge, home page)
        about: resolve(__dirname, "about.html"),
        blog: resolve(__dirname, "blog.html"),
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "sproduct.html"),
        shop: resolve(__dirname, "shop.html"),
        addToCart: resolve(__dirname, "cart.html"),
      },
    },
  },
});
