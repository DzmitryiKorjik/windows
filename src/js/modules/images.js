const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.display = 'none';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    // Установка размеров для изображения
    bigImage.style.width = '500px'; 
    bigImage.style.height = '500px'; 

    imgPopup.appendChild(bigImage);

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = '';
    };

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            disableScroll(); // Запрещаем прокрутку при открытом изображении
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            enableScroll(); // Разрешаем прокрутку после закрытия изображения
        }
    });
};

export default images;