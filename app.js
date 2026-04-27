const episodes = [
  {
    id: "loss-log-as-asset",
    title: "負けログは最重要データ",
    series: "Failure x Finance",
    tag: "失敗ログ",
    duration: "音声 12分 / 読了 6分",
    audio: "assets/audio/launch-sample.m4a",
    lead: "サンプル不足、KPI後付け、感情トレードを、責める材料ではなく再現性を作るデータに変える。",
    body: [
      ["導入", "同じ失敗を繰り返す時、問題は意志の弱さではなく、記録の粒度が粗いことが多い。負けを曖昧にすると、次の判断も曖昧になる。だから負けログは最重要データとして扱う。"],
      ["金融リテラシー接続", "投資でも家計でも、数字を見ない判断は感情に引っ張られる。損失回避、サンクコスト、短期的な不安は、記録がないほど強くなる。"],
      ["実践ルール", "失敗直後に、事実、感情、判断、次のIf-Thenを1つだけ残す。例: If 焦ってエントリーしたくなったら、Then 15分待って根拠を3行で書く。"],
      ["持ち帰り", "失敗はデータ、成功は再現性。ログが残れば、次の自分が少しだけ楽になる。"]
    ]
  },
  {
    id: "money-anxiety-automation",
    title: "お金の不安は仕組みで薄める",
    series: "Money Mind",
    tag: "金融リテラシー",
    duration: "音声 15分 / 読了 7分",
    audio: "assets/audio/launch-sample.m4a",
    lead: "お金の不安で認知能力が落ちる前に、貯蓄、自動化、支出ルールで判断回数を減らす。",
    body: [
      ["導入", "お金の不安が強い時、人は短期的な判断に寄る。これは性格の問題ではなく、脳の帯域が不安に奪われるからだ。"],
      ["金融リテラシー接続", "貯蓄、自動積立、固定費の見直しは地味だが強い。投資テクニックより先に、生活の下振れ耐性を作る。"],
      ["失敗ログ接続", "固定給依存マインドや衝動消費は、将来不安と結びつきやすい。だから毎回の気合いではなく、買う前の比較、月初の自動化、飲み会ルールのような外部構造に任せる。"],
      ["持ち帰り", "判断力が高い日にルールを作り、判断力が低い日はルールに乗る。これが安全運転の金融版。"]
    ]
  },
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
    id: "time-capital-driving",
    title: "渋滞時間を資本に変える",
    series: "Time Capital",
    tag: "時間資本",
    duration: "音声 10分 / 読了 5分",
    audio: "assets/audio/launch-sample.m4a",
    lead: "高速道路の停止時間を、怒りではなく復習と再設計に使うためのオフライン学習導線。",
    body: [
      ["導入", "渋滞やトンネルで通信が切れる時、オンライン前提の学習は止まる。止まらない教材を用意しておけば、待ち時間は小さな学習ブロックになる。"],
      ["失敗ログ接続", "予期せぬ時間ロスは、コントロール喪失として怒りに変わりやすい。そこで、聞く教材を先に保存し、選択肢を減らしておく。"],
      ["金融リテラシー接続", "時間は資本。10分の音声を3本持っておくことは、移動中の意思決定を守る保険になる。"],
      ["持ち帰り", "通信が切れても、学習は切らさない。これがこのプロトタイプのコア価値。"]
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
  elements.audioNote.textContent = "初回保存後は、通信が切れてもローカルキャッシュから再生できます。実運用では10-20分の音声ファイルに差し替えます。";
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
  const cache = await caches.open("quant-log-drive-study-v5");
  const urls = [
    "./",
    "index.html",
    "styles.css",
    "app.js",
    "manifest.webmanifest",
    "assets/audio/launch-sample.m4a",
    "assets/audio/bonds-summary.wav"
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
