## 🏃‍♂️ Running Locally 

Before you begin, make sure you have `Node.js` and `yarn` installed.

```bash 
# Install dependencies
yarn

# Generate `zh` and `en` pages
yarn localize

# Run the website locally at http://localhost:3000
yarn dev

```

## 📝 Adding Content

This project follows a specific structure, and all news content is stored in the `src/content/news` directory. To add a news article, follow these steps:

1. Copy the `template-1.mdx` file in `src/content/news/template`.

    ```
    /
    └── src/
        └── content/
            └── news/
                └── template/
                    └── template-1.mdx
    ```

2. Modify the template to create Chinese and English version of the news.

3. Paste the copied file into the `en/` directory for the English version and the `zh/` directory for the Chinese version. If you want the news article to appear on both the English and Chinese sites, place it in the `common/` directory.

    ```
    /
    └── src/
        └── content/
            └── news/
                ├── template/
                |    └── template-1.mdx
                ├── common/
                |    └── (Files in this directory will be visible on both the English and Chinese websites)
                ├── en/
                |    └── news-1.mdx (English version of the news)
                └── zh/
                     └── news-1.mdx (Chinese version of the news)
    ```

## 🚀 Build and Deploy

To build and deploy your project, follow these steps:

```bash
# Install dependencies
yarn

# Generate `zh` and `en` pages
yarn localize

# Build your production site to ./dist/
yarn build
```

After running the build command, your site will be generated in the ./dist/ folder. To deploy your site, simply copy the contents of this folder to your desired deployment location.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`            | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:3000`      |
| `yarn build`              | Build your production site to `./dist/`          |
| `yarn localize`           | Generate `zh` and `en` pages                     |


## 👀 More Information?

For further inquiries or additional information, please contact Ethan-Chiu at ethanchiu0608@gmail.com.
