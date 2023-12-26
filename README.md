# acaoconsultoria

Este é um projeto que utiliza o framework Laravel para o backend e Next.js para o frontend. Ele consome a API RandomData pública gratuita para exibir informações de usuários.

Certifique-se de ter o PHP 7.2 ou superior instalado e nodeJs.

Entre na pasta de back-end com ```cd back-end``` e execute os comando
```composer install```, ```cp .env.example .env```, ```php artisan key:generate``` e ```php artisan serve```, terá o servidor rodando. Acesse em http://localhost:8000.

Entre na pasta de front-end com ```cd front-end``` e execute os comando
```npm i```e ```npm run dev``` para ver a tela em execução. Acesse em http://localhost:3000.

Para rodar o projeto via Docker, primeiro certifique-se de ter Docker instalado e execute o comando:
```docker-compose up --build```




