const Message = {
  OPEN: 'Открыть меню',
  CLOSE: 'Закрыть меню',
};

const navElement = document.querySelector('.header__navigation');
const toggleElement = document.querySelector('.header__toggle');
const pageElement = document.querySelector('.page');
const pageMainElement = document.querySelector('.page__main');
const mapContainerElement = document.querySelector('#map');

if (navElement) {
  navElement.classList.remove('header__navigation--without-js');
}

if (pageMainElement) {
  pageMainElement.classList.remove('page__main--without-js');
}

const getMenuClosed = () => {
  toggleElement.classList.remove('header__toggle--opened');
  toggleElement.classList.add('header__toggle--closed');
  toggleElement.setAttribute('aria-label', Message.OPEN);
  navElement.classList.remove('header__navigation--opened');
  pageElement.classList.remove('page--fixed');
};

const getMenuOpened = () => {
  toggleElement.classList.remove('header__toggle--closed');
  toggleElement.classList.add('header__toggle--opened');
  toggleElement.setAttribute('aria-label', Message.CLOSE);
  navElement.classList.add('header__navigation--opened');
  pageElement.classList.add('page--fixed');
};

document.addEventListener('click', (evt) => {
  if (!evt.target.closest('.header__navigation') || evt.target.closest('.header__navigation a[href]')) {
    getMenuClosed();
  }
});

if (toggleElement) {
  toggleElement.addEventListener('click', () => {
    if (toggleElement.classList.contains('header__toggle--closed')) {
      getMenuOpened();

      return;
    }
    getMenuClosed();
  });
}

/* eslint-disable */

if (mapContainerElement) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map('map', {
      center: [59.93743985077966,30.322603015868893],
      zoom: 16,
      controls: [],
    });

    const myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {},
      {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22],
        }
      );

    myMap.geoObjects.add(myPlacemark);
  }
}

/* eslint-enable */
