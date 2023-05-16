# Usa una imagen base con Node.js para construir la aplicación de React
FROM node:14-alpine as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación y las dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copia el código fuente y construye la aplicación de React
COPY . .
RUN npm run build

# Usa una imagen más liviana basada en Nginx para servir la aplicación construida
FROM nginx:alpine

# Copia los archivos construidos al directorio de trabajo de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación pueda ser accedida
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]