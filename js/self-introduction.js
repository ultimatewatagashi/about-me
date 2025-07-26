window.addEventListener('DOMContentLoaded', function() {
    // 時間帯ごとの挨拶リスト
    const greetings = {
        morning: [
            "お早うございます。",
            "朝のひととき、",
            "朝露きらめく頃、",
        ],
        afternoon: [
            "こんにちは。お元気でお過ごしでしょうか。",
            "お日様の高い時間に、",
            "お昼のひとやすみ、"
        ],
        evening: [
            "こんばんは。おくつろぎのところ、ようこそ。",
            "夜風が心地よいですね。",
            "星の瞬く頃に、お会いできて嬉しいです。",
        ]
    };

    const hour = new Date().getHours();
    let greetingList;
    if (hour >= 5 && hour < 12) {
        greetingList = greetings.morning;
    } else if (hour >= 12 && hour < 18) {
        greetingList = greetings.afternoon;
    } else {
        greetingList = greetings.evening;
    }

    // ランダムで挨拶を選択
    const greeting = greetingList[Math.floor(Math.random() * greetingList.length)];

    const h3Text = `${greeting}\n拙きサイトへお越しいただき、誠にありがとうございます。\nここでは、私のこれまでの歩みや、思いの丈などを、\nささやかに綴らせていただいております。\nお時間の許すかぎり、どうぞごゆるりとお楽しみくださいませ。`;
    const h3span = document.querySelector("#self-introduction .section-content");
    h3span.textContent = "";

    setTimeout(function() {
        let i = 0;
        function type() {
            if (i < h3Text.length) {
                if (h3Text[i] === "\n") {
                    h3span.innerHTML += "<br>";
                } else {
                    h3span.innerHTML += h3Text[i];
                }
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    }, 1400);
});