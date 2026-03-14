# AgriSmart Backend API Documentation

The AgriSmart backend provides a robust API for farm management, crop tracking, weather updates, and a marketplace for agricultural products.

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB (running locally or a cloud instance)

### Installation
1. Install dependencies: `npm install`
2. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   WEATHER_API_KEY=your_openweathermap_api_key
   ```
3. Start the server: `npm start` (or `npm run dev` if using nodemon)

## 🛤 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get token

### Farm Management
- `POST /api/farms` - Create a new farm (Protected)
- `GET /api/farms` - Get your farms (Protected)
- `GET /api/farms/:id` - Get specific farm details (Protected)

### Crop Management
- `POST /api/crops` - Add a crop to a farm (Protected)
- `GET /api/crops/:farmId` - Get crops for a farm (Protected)

### Weather
- `GET /api/weather/:city` - Get current weather for a city (Protected)

### Marketplace
- `GET /api/products` - List all products
- `POST /api/products` - Create a product listing (Protected)
- `GET /api/products/:id` - Get product details

## 🛠 Tech Stack
- Express.js
- MongoDB/Mongoose
- JWT
- Axios (for weather service)
- Morgan, Helmet, Cors (Middleware)
