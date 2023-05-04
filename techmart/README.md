# TechMart Electronics Store
This is a simple e-commerce application for a fictional online electronics store called TechMart Electronics. The application allows users to browse and search for electronics products, filter them by category, add items to their shopping cart, and view their cart.
### Technologies Used
1. React: a popular JavaScript library for building user interfaces
2. HTML: a markup language used to structure content on the web
3. CSS: a styling language used to add visual styles to HTML documents
4. JavaScript
## Features
1. Browse and search for electronics products
2. Filter products by category
3. Add items to shopping cart
4. Remove items from shopping cart
5. View cart and total price of items in the cart
### Components
#### ElectronicsList
This is the main component that renders the entire application. It fetches the list of electronics products from a server and passes them down to its child components.
#### SearchBar
This component is responsible for handling search queries entered by the user. It passes the search query up to its parent component, ElectronicsList.
##### CategoryFilter
This component allows the user to filter the list of electronics products by category. It also passes the selected category up to its parent component, ElectronicsList.
#### Cart
This component displays the items in the shopping cart and allows the user to remove items or view the cart.
### Installation and Usage
1. To run this application, follow these steps:
2. Clone the repository to your local machine.
3. Install the dependencies by running npm install in the project directory.
4. Start the application by running npm start.
5. Open http://localhost:3000 in your web browser to use the application.
### API
The application fetches the list of electronics products from an API hosted on https://t-mart-data.onrender.com/electronics. The API returns an array of objects representing the products.
### Contributing
Contributions to this project are welcome. If you find a bug or have a feature request, please open an issue on the GitHub repository.
1. Jephat Maina
2. Kelly Koome
3. Ronald Luvega
4. Collins Kimani
5. Iqra

### Licence
MIT License
