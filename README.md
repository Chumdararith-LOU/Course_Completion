# Certificate Generator for Course Completion

This is the junior students from the **Department of Information and Communication Engineering** at the **Institute of Technology of Cambodia** for successfully finishing the "Database and MySQL Crash Course" as part of the “GIC Vacation Crash Course 2025”.

**Live Demo:** [**https://your-username.github.io/Course\_Completion/**](https://www.google.com/search?q=https://your-username.github.io/Course_Completion/)
*(Replace `your-username` with your actual GitHub username.)*

-----

## ✨ Features

  * **Dynamic Certificate Generation**: Automatically creates a unique certificate for each student listed in the data file.
  * **PDF Download**: Each certificate can be downloaded as a high-resolution PDF file, ready for printing.
  * **Easy to Customize**: Easily update the list of names or certificate details for your own use case.
  * **Ready to Deploy**: Comes with all the necessary scripts and configurations to deploy to GitHub Pages.

-----

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/Course_Completion.git](https://github.com/Chumdararith-LOU/Course_Completion.git)
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd Course_Completion
    ```
3.  **Install NPM packages**:
    ```bash
    npm install
    ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Your application should now be running on `http://localhost:5173/` (or the next available port).

-----

## 🛠️ How to Customize


### 1\. Change the Student List

The list of names is stored in a simple JavaScript array.

  * Open the file `src/data.js`.

  * Modify the `juniorNames` array with the names you want to generate certificates for.

    ```javascript
    export const juniorNames = [
      'NEW STUDENT NAME 1',
      'NEW STUDENT NAME 2',
      // ...add as many names as you need
    ];
    ```

### 2\. Update Certificate Text and Details

All the text on the certificate can be modified in the following component files:

  * **Main Text (`Template.jsx`)**: To change the course title, description, or date, edit the `src/Component/Template.jsx` file.
  * **Header (`header.jsx`)**: To change the institution names or logos, edit `src/Component/header.jsx`.
  * **Footer (`footer.jsx`)**: To change the signature names and titles, edit `src/Component/footer.jsx`.

-----

## 🚀 Deployment

This project is configured for easy deployment to GitHub Pages.

1.  **Update `vite.config.js`**:

      * Make sure the `base` property in `vite.config.js` matches your repository name. For example, if your repository is named `my-certificate-app`, the config should be:
        ```javascript
        export default defineConfig({
          plugins: [react()],
          base: '/my-certificate-app/',
        })
        ```

2.  **Run the Deploy Script**:

      * Once your changes are committed and pushed to the `main` branch, simply run:
        ```bash
        npm run deploy
        ```
      * This will build your project and push it to the `gh-pages` branch.

3.  **Configure GitHub Pages**:

      * In your GitHub repository settings, go to **Pages**.
      * Set the **Source** to **Deploy from a branch**.
      * Select **`gh-pages`** as the branch and `/root` as the folder.
      * Save the changes, and your site will be live in a few minutes\!


