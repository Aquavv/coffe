# 1. Crear estructura del proyecto
mkdir coffee-break-events && cd coffee-break-events

# 2. Configurar backend
mkdir backend && cd backend
npm init -y
npm install express cors nodemailer dotenv
npm install -D nodemon
# Copiar server.js y crear .env

# 3. Configurar frontend
cd .. && npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npx tailwindcss init -p
# Copiar todos los archivos del frontend

# 4. Ejecutar
# Terminal 1: cd backend && npm run dev
# Terminal 2: cd frontend && npm run dev