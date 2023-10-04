# confectionery-frontend
<a name="introduction"></a>
## Введение

**Confectionery** это магазин кондитерских изделий,которые представляет из себя SPA приложение, написанное на React и NodeJS+Express с использованием MongoDB.<br><br>
Это frontend-часть данного проекта, поэтому здесть будет описан стэк используемых технологий, взаимодействие с бэкендом, а также краткое описание планов для дальнейшего развития проекта

## Навигация
- [Введение](#introduction)
- [Процесс разработки](#workflow)
- [Стэк технологий](#stack)
- [Взаимодействие с бэкендом](#backend)
- [Будущее проекта](#future)
- [Благодарности](#thanks)


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
- ProductCard
- VacancyCard

При разработке компонентов, я использовал Redux Toolkit (thunk/query) для управления состоянием компонентов и выполнения асинхронных запросов к бэкенду. Для стилизации компонентов мы воспользовались препроцессором SCSS и методологией БЭМ.
<br>
Наиболее интересными с точки зрения разработки являются каталог товаров и корзина. В корзине я использовал Local Storage для хранения массива товаров, а также переменные для отслеживания общего количества товаров и общей стоимости товаров. После добавления авторизаций,планируется привязать корзину к БД
<br>
Также в проекте реализованы компоненты с картами, используя библиотеку Яндекс для работы с картами. 
<a name="stack"></a>
## Стэк технологий

<a name="backend"></a>
## Взаимодействие с бэкендом

<a name="future"></a>
## Будущее проекта

<a name="thanks"></a>
## Благодарности

  
