# reactjs-expressjs-fullstack
Full Stack Reactjs/expressjs project. easy shipping with docker.UI with Bootstrap 4.Testing with jest(and karma for the client side).


# Deploy with Docker
install docker
docker build -t ref/react-express .
docker run -p 49161:3000 -d ref/react-express

launch in the browser http://localhost:49161

