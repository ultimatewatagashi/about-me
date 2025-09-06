document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav ul li a').forEach(function(a) {
        a.addEventListener('click', function(e) {
            e.preventDefault(); // ページ遷移を一旦止める
            const li = a.parentElement;
            li.classList.add('animate-click');
            setTimeout(function() {
                li.classList.remove('animate-click');
                window.location.href = a.href; // アニメーション後に遷移
            }, 400); // アニメーション時間と合わせる
        });
    });
});

