# confectionery-frontend
<a name="introduction"></a>
## Введение

**Confectionery** это магазин кондитерских изделий,которые представляет из себя SPA приложение, написанное на React и NodeJS+Express с использованием MongoDB.<br><br>
Это frontend-часть данного проекта, поэтому здесть будет описан стэк используемых технологий, взаимодействие с бэкендом, а также краткое описание планов для дальнейшего развития проекта

## Навигация
- [Введение](#introduction)
- [Установка и запуск](#runproject)
- [Процесс разработки](#workflow)
- [Стэк технологий](#stack)
- [Взаимодействие с бэкендом](#backend)
- [Будущее проекта](#future)
- [Благодарности](#thanks)

<a name="runproject"></a>
## Установка и заупск
Для начала установите и запустите [backend](https://github.com/DendiRob/confectionery-backend), так как некоторые компоненты напрямую зависят от бэкенд-части.<br><br>
**Запуск Frontend-части:**<br><br>
Клонируйте репозиторий на ваш компьютер
```bash
git clone https://github.com/DendiRob/confectionery-frontend.git
```
Установите все необходимые зависимости
```bash
npm install
```
Запустите приложение
```
npm start
```
<a name="workflow"></a>
## Процесс разработки
Данный проект написан с моим хорошим другом, поэтому клиентская часть разделена на зоны ответсвенности по компонентам.<br>
Мои компоненты:
- Header
- VacancyPage
- VacancyInfoPage
- CatalogPage
- BasketPage
- PrivacyPolicyPage
- BasketCard
- Menu (мобильная версия меню)
- modals (все окна)
- CatalogCard
- VacancyCard

При разработке компонентов, я использовал Redux Toolkit (thunk/query) для управления состоянием компонентов и выполнения асинхронных запросов к бэкенду. Для стилизации компонентов мы воспользовались препроцессором SCSS и методологией БЭМ.
<br>
Наиболее интересными с точки зрения разработки являются каталог товаров и корзина. В корзине я использовал Local Storage для хранения массива товаров, а также переменные для отслеживания общего количества товаров и общей стоимости товаров. После добавления авторизаций,планируется привязать корзину к БД
<br>
Также в проекте реализованы компоненты с картами, используя библиотеку Яндекс для работы с картами. 

<a name="stack"></a>
## Стэк технологий
- react-helmet
- react-input-mask (использовалась в другой версий приложения, будет добавлена после авторизаций)
- react-redux
- react-router-dom
- scss
- swiper
- RTK(thunk/query)
- react-yandex-maps
- TypeScript
  
<a name="backend"></a>
## Взаимодействие с бэкендом
Для взаимодействия с бэкендом мы используем REST API через асинхронные запросы с помощью Redux Toolkit(Thunk/Query).

<a name="future"></a>
## Будущее проекта

- добавить авторизацию
- добавить админ панель

<a name="thanks"></a>
## Благодарности
Огромная благодарность [X6uddy](https://github.com/X6uddy), с которым мы писали этот проект!<br>
Огромная благодарность [Ghost-str](https://github.com/Ghost-str), чья помощь и советы сэкономили огромное количество врмени и нервных клеток))

  
