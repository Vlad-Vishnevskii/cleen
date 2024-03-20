(() => {
  const gallery = document.querySelector('.gallery');
  const mainImg = gallery.querySelector('.gallery_mainImg');
  const btnList = gallery.querySelector('.gallery_btnList');

  const galleryBtnHandler = (e) => {
    if (e.target.closest('img')) {
      if (mainImg.classList.contains('animate')) {
        mainImg.classList.remove('animate');
      }
      const activeBtn = document.querySelector('.gallery_btnItem--active');
      activeBtn.classList.remove('gallery_btnItem--active');
      e.target.parentNode.classList.add('gallery_btnItem--active');
      setTimeout(() => {
        mainImg.classList.add('animate');
        mainImg.src = e.target.src;
      }, 200);
    }
  };

  btnList.addEventListener('click', galleryBtnHandler);
})();
