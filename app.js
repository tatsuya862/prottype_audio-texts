const episodes = [
  {
    id: "bonds-and-interest-rates",
    title: "本当に分かる債券と金利",
    series: "Finance Literacy",
    tag: "債券",
    duration: "音声 7分 / 読了 8分",
    audio: "assets/audio/bonds-summary.wav",
    lead: "債券はお金を貸す金融商品。金利と債券価格の逆相関を押さえると、ローンや投資の見え方が変わる。",
    body: [
      ["概要", "この教材では、債券市場と金利の仕組みを、資産運用と日常生活の両方に接続して整理する。対象は、自分で資産運用を考えたい人、株式だけではなく債券もポートフォリオに入れるか判断したい人。NISAでインデックス積立だけを淡々と続ける人にとっては優先度は少し下がるが、金利ニュースを理解する力としては重要度が高い。"],
      ["債券とは", "債券とは、国や企業が資金を借りるために発行する証券。投資家から見ると、債券を買うことはお金を貸すこと。発行体は国、企業、地方自治体などで、投資家はその発行体から定期的に利子を受け取り、満期には元本返済を受ける。つまり債券は、お金を貸す金融商品。"],
      ["株式との違い", "株式は企業への出資であり、会社が成長すれば値上がり益や配当が期待できるが、元本返済の約束はない。一方、債券は借金。発行体が破綻しない限り、決められた利息を受け取り、償還期限に元本返済を受ける仕組み。最大の違いは、債券には償還期限があること。"],
      ["3つの基本要素", "債券を見るときの基本要素は、発行体、償還期限、利回りの3つ。発行体は誰にお金を貸すのかという視点。国なら国債、企業なら社債、地方自治体なら地方債。償還期限は元本が返済される期限。利回り、またはクーポンは債券から得られる利息を指す。"],
      ["キャッシュフロー", "債券の大きな特徴は、安定したキャッシュフロー。利息が定期的に入り、満期で元本返済がある。この仕組みによって、株式より値動きが小さく、ポートフォリオの安定化に使いやすい金融商品になる。ただし、前提は発行体が破綻しないこと。"],
      ["金利との関係", "最重要ルールは、金利が上がると債券価格は下がり、金利が下がると債券価格は上がること。これは逆相関。例えば利回り2%の債券を買った後、市場金利が3%に上がると、新しく発行される3%の債券の方が魅力的になる。その結果、古い2%債券の価格は下がりやすくなる。"],
      ["生活への接続", "債券市場は私たちの生活にも直接つながっている。国債金利は社会全体の金利の土台になり、住宅ローン金利、自動車ローン、企業の借入金利、銀行金利にも影響する。国債金利を見ることは、社会全体の資金コスト、そして生活コストを見ることでもある。"],
      ["ポートフォリオでの役割", "債券は安定資産として使われる。例えば株式70%、債券30%という組み合わせ。株式だけでは値動きが大きくなりやすいが、そこに債券を入れることで、価格変動を抑え、安定収入を加え、リスク分散を狙える。"],
      ["注意点", "債券は安全資産と呼ばれることがあるが、絶対に安全という意味ではない。金利が上がれば保有債券の価格は下がる可能性があり、社債などでは発行体の信用リスクもある。発行体、償還期限、利回り、金利環境を見ることが大切。"],
      ["まとめ", "債券はお金を貸す金融商品。株式と違い償還期限があり、見るべき基本要素は発行体、償還期限、利回り。金利と債券価格は逆相関。社会の金利は債券市場の影響を受け、ローンや生活コストにもつながる。投資では、債券はポートフォリオの守りとして使われる。"]
    ]
  },
  {
    id: "die-with-zero-balance",
    title: "Die With Zeroから考えるお金の使い方",
    series: "Finance Literacy",
    tag: "お金と時間",
    duration: "音声 6分 / 読了 7分",
    audio: "assets/audio/die-with-zero-summary.wav",
    lead: "貯めるだけでも、使いすぎでも人生はズレる。収入、再現性、経験投資の順番を整える。",
    body: [
      ["この話のコア", "このテーマの主張は、貯金だけでは豊かにならないこと、経験や自己投資にお金を使うこと、そしてお金・時間・健康のバランスを取ること。この3つに集約できる。どれも正しい。ただし一番大事なのは順番。ここを間違えると、良い話が浪費の言い訳に変わる。"],
      ["現実的な順番", "まず優先するべきは収入を伸ばすこと。次に、稼ぎ方や資産形成の再現性を固めること。そのうえで、余剰のお金を経験に回す。つまり、経験に使えという考え方は、土台がある程度できている人の戦略。全員が同じ比率で当てはめると危険。"],
      ["節約の限界", "節約は防御で、収入は攻撃。支出を整えることは大切だが、資産を大きく増やすには攻撃力も必要になる。だから、固定費を締めるだけで終わらせず、収入源を増やす、スキルを伸ばす、仕組みを作る方向にエネルギーを向ける。"],
      ["体験投資の使い方", "体験投資は使い方次第。なんとなく旅行する、なんとなく趣味に使う、見栄で消費する。これは浪費になりやすい。一方で、思考を広げる経験、人との接点につながる場、スキルに転換できるものは良い投資になる。体験は、回収できる形に変換できるかが大事。"],
      ["時間にお金を使う", "一番本質的なのは、時間にお金を使うこと。分析や戦略のように自分で考えるべき部分は残し、事務処理や単純作業は外注やAIに任せる。これによって、収益効率と意思決定の質が上がる。お金は、時間を買うためにも使える。"],
      ["注意点", "このテーマには甘い部分もある。体験は正義と考えすぎると、浪費の言い訳になる。死を意識する考え方は短期的には強いが、長期戦略を崩すこともある。さらに、お金の優先度を早く下げすぎると、土台が固まる前に守りが弱くなる。"],
      ["戦略への変換", "最適なバランスは、お金を最優先にしながら、時間を効率化し、健康を維持すること。行動レベルでは、収入と再現性を優先して固める。無駄な作業は外注またはAI化する。経験投資は、回収できるものだけに絞る。"],
      ["まとめ", "貯めるだけの人生は負け。でも、使いすぎも負け。勝ちパターンは、稼ぐ力を最大化しながら、必要なところだけ使うこと。お金は目的ではないが、自由度を作るための重要な資源として扱う。"]
    ]
  }
];

const state = {
  activeId: episodes[0].id,
  mode: "audio"
};

const elements = {
  status: document.querySelector("#connectionStatus"),
  cacheButton: document.querySelector("#cacheButton"),
  modeButtons: document.querySelectorAll(".mode-button"),
  list: document.querySelector("#episodeList"),
  template: document.querySelector("#episodeTemplate"),
  count: document.querySelector("#lessonCount"),
  series: document.querySelector("#episodeSeries"),
  duration: document.querySelector("#episodeDuration"),
  title: document.querySelector("#episodeTitle"),
  lead: document.querySelector("#episodeLead"),
  audio: document.querySelector("#audioPlayer"),
  audioArea: document.querySelector("#audioArea"),
  audioNote: document.querySelector("#audioNote"),
  reader: document.querySelector("#reader")
};

function updateConnectionStatus() {
  const offline = !navigator.onLine;
  elements.status.textContent = offline ? "オフライン" : "オンライン";
  elements.status.classList.toggle("is-offline", offline);
}

function renderList() {
  elements.count.textContent = `${episodes.length}本`;
  elements.list.textContent = "";

  episodes.forEach((episode) => {
    const node = elements.template.content.firstElementChild.cloneNode(true);
    node.dataset.id = episode.id;
    node.classList.toggle("is-active", episode.id === state.activeId);
    node.querySelector(".episode-card__tag").textContent = episode.tag;
    node.querySelector("strong").textContent = episode.title;
    node.querySelector(".episode-card__desc").textContent = episode.lead;
    node.querySelector(".episode-card__time").textContent = episode.duration;
    node.addEventListener("click", () => {
      state.activeId = episode.id;
      render();
    });
    elements.list.append(node);
  });
}

function renderEpisode() {
  const episode = episodes.find((item) => item.id === state.activeId) || episodes[0];
  elements.series.textContent = episode.series;
  elements.duration.textContent = episode.duration;
  elements.title.textContent = episode.title;
  elements.lead.textContent = episode.lead;
  elements.audio.src = episode.audio;
  elements.audioNote.textContent = "初回保存後は、通信が切れてもローカルキャッシュから再生できます。";
  elements.reader.innerHTML = episode.body
    .map(([heading, text]) => `<h3>${heading}</h3><p>${text}</p>`)
    .join("");
}

function renderMode() {
  const textMode = state.mode === "text";
  elements.reader.classList.toggle("is-hidden", !textMode);
  elements.audioArea.classList.toggle("is-hidden", textMode);
  elements.modeButtons.forEach((button) => {
    const active = button.dataset.mode === state.mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function render() {
  renderList();
  renderEpisode();
  renderMode();
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    elements.cacheButton.textContent = "保存非対応";
    elements.cacheButton.disabled = true;
    return;
  }

  await navigator.serviceWorker.register("sw.js");
}

async function saveForOffline() {
  if (!("caches" in window)) return;
  const cache = await caches.open("quant-log-drive-study-v6");
  const urls = [
    "./",
    "index.html",
    "styles.css",
    "app.js",
    "manifest.webmanifest",
    "assets/audio/bonds-summary.wav",
    "assets/audio/die-with-zero-summary.wav"
  ];
  await cache.addAll(urls);
  elements.cacheButton.textContent = "保存済み";
}

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    renderMode();
  });
});

elements.cacheButton.addEventListener("click", saveForOffline);
window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

updateConnectionStatus();
render();
registerServiceWorker().catch(() => {
  elements.cacheButton.textContent = "保存準備エラー";
});
