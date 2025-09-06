const slider = document.querySelector('.slider');
  let position = 0;
  let direction = 1; // 1 右へ移動

  function animate() {
    position += direction * 0.05; // 速度
    slider.style.left = `-${position}px`;

    const maxSlide = window.innerWidth;

    if (position >= maxSlide) {
      // 右端に達したら一旦フェードアウト
      slider.style.opacity = 0;
      setTimeout(() => {
        // 左に戻してフェードイン
        position = 0;
        slider.style.left = `0px`;
        slider.style.opacity = 1;
      }, 1000); // フェードアウト時間と一致させる
    }

    requestAnimationFrame(animate);
  }

  animate();
