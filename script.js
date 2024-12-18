// Таб функционал
const tabs = {
  description: document.querySelector('.tab-content-description'),
  details: document.querySelector('.tab-content-details'),
  shipping: document.querySelector('.tab-content-shipping'),
};

const buttons = document.querySelectorAll('#description, #details, #shipping');
document.querySelector('#description').classList.add('desc_header_item_active');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    Object.values(tabs).forEach((tab) => {
      tab.style.display = 'none';
    });

    buttons.forEach((btn) => btn.classList.remove('desc_header_item_active'));

    if (button.id === 'description') {
      tabs.description.style.display = 'block';
    } else if (button.id === 'details') {
      tabs.details.style.display = 'block';
    } else if (button.id === 'shipping') {
      tabs.shipping.style.display = 'block';
    }

    button.classList.add('desc_header_item_active');
  });
});

const minorImages = document.querySelectorAll('.thumbnail, .thumbnail-active');
const activeClass = 'thumbnail-active';

const activeDefault = document.querySelector('#active');

minorImages.forEach((minorImage) => {
  minorImage.addEventListener('click', () => {
    minorImages.forEach((img) => img.classList.remove(activeClass));
    activeDefault.classList.add('thumbnail');

    minorImage.classList.add(activeClass);
  });
});

const sizeButtons = document.querySelectorAll('.size-option, .size-option-active');
const sizeBaseClass = 'size-option';
const sizeActiveClass = 'size-option-active';

sizeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains(sizeActiveClass)) {
      button.classList.remove(sizeActiveClass);
      button.classList.add(sizeBaseClass);
    } else {
      button.classList.remove(sizeBaseClass);
      button.classList.add(sizeActiveClass);
    }
  });
});
