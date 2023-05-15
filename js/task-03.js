const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    alt: 'Group of Horses Running',
  },
];

// const itemEl = document.createElement('li');
// itemEl.classList.add('list');

// console.log(itemEl);

// const imgEl = document.createElement('img');
// imgEl.src = images[0].url;
// imgEl.alt = images[0].alt;
// imgEl.width = 640;

// console.log(imgEl);

// itemEl.append(imgEl);
// console.log(itemEl);

// const listEl = document.querySelector('.gallery');
// console.log(listEl);

// listEl.append(itemEl);

const addImg = images.map(element => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallery-item');

  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery-img');
  imgEl.src = element.url;
  imgEl.alt = element.alt;
  imgEl.width = 480;
  imgEl.height = 240;

  itemEl.append(imgEl);

  const listEl = document.querySelector('.gallery');

  listEl.append(itemEl);
});
