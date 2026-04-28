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
  },
  {
    id: "fx-market-basics",
    title: "本当に分かる為替相場",
    series: "Finance Literacy",
    tag: "為替",
    duration: "音声 4分 / 読了 6分",
    audio: "assets/audio/fx-market-summary.wav",
    lead: "為替は異なる通貨の交換。市場時間、経済指標、金利差を押さえると値動きの見え方が変わる。",
    body: [
      ["為替とは", "為替とは、異なる通貨を交換する取引。ドル円、ユーロ円のように、2つの通貨の交換レートとして表示される。ニュースで円相場やドル円という言葉が出てくるのは、この通貨交換の価格を見ている。"],
      ["市場の特徴", "為替市場は24時間動くグローバル市場。株式のような単一の取引所ではなく、インターバンク市場を中心に世界中で取引される。月曜早朝から金曜深夜まで、基本的に市場は開き続ける。"],
      ["主要時間帯", "オセアニア、東京、ロンドン、ニューヨークで特徴が違う。東京は比較的穏やか、ロンドンは取引量が増えやすく、ニューヨークは値動きが激しくなりやすい。ロンドンとニューヨークが重なる時間帯は、流動性が高い重要時間。"],
      ["経済指標", "為替は経済指標の影響を受ける。特にCPIは中央銀行の政策金利に関わるため重要。物価上昇が強ければ利上げ期待につながり、通貨が買われやすくなる。PCEも消費や景気の強さを見る指標として押さえたい。"],
      ["金利差", "為替を動かす大きな要因のひとつが金利差。金利が高い国には資金が流入しやすく、その通貨が買われやすい。長期的には、高金利通貨が選ばれやすい局面がある。"],
      ["まとめ", "為替は通貨の交換であり、24時間動く市場。主要市場の時間帯、CPIやPCEなどの指標、そして金利差を押さえることで、値動きを構造的に見られるようになる。"]
    ]
  },
  {
    id: "money-rules",
    title: "お金についての考え方",
    series: "Money Mind",
    tag: "家計",
    duration: "音声 4分 / 読了 6分",
    audio: "assets/audio/money-rules-summary.wav",
    lead: "お金の悩みは、知識不足だけでなく心理と仕組みの問題。比較、自動化、使い方のルールを整える。",
    body: [
      ["お金の不安", "お金が余っていて人に分けられる人は多くない。多くの人はお金に対して不安や恐怖を持っている。だから、お金の学習は早いほどいい。知識があるだけで、不要な不安はかなり減らせる。"],
      ["心理の影響", "お金の使い方は心理に強く影響される。最初に見た価格が基準になるアンカリング、周囲に流される消費、広告やSNSによる刺激。これらを自覚しないと、支出は簡単に増える。"],
      ["比較する力", "適正価格を判断する力は大切。同じ商品でも場所によって価格は違う。買う前に比較するだけで、無駄な支出はかなり減る。値段を見る習慣は、お金の守備力になる。"],
      ["不安を減らす仕組み", "お金の不安を減らすには、貯蓄、自動化、支出制限ルールが効く。給料から先に積み立てる。投資は解約しにくい形にする。無駄遣いしやすい場面には事前ルールを置く。"],
      ["幸せなお金の使い方", "お金は使い方で幸福度が変わる。他人のために使う、体験に使う、考えて選ぶ買い物に使う。買った瞬間がピークになる消費より、記憶や関係性に残る使い方のほうが満足度は高い。"],
      ["まとめ", "お金は思考、仕組み、知識で扱いやすくなる。無駄な消費を減らし、貯蓄を優先し、幸せにつながる使い方へ回すことが大切。"]
    ]
  },
  {
    id: "money-script",
    title: "マネースクリプトを見直す",
    series: "Money Mind",
    tag: "思い込み",
    duration: "音声 4分 / 読了 6分",
    audio: "assets/audio/money-script-summary.wav",
    lead: "お金の問題は収入だけでは解決しない。思い込み、周囲の影響、行動パターンを見直す。",
    body: [
      ["お金の呪い", "多くの人は、お金を避けるマネー忌避か、お金を過剰に求めるマネー崇拝のどちらかに寄りやすい。どちらも生活に悪影響を与える。大事なのは、お金との距離感を整えること。"],
      ["収入だけでは解決しない", "残業や副業で一時的に収入を増やしても、根本原因を見なければ問題は繰り返す。これは痛み止めで病気をごまかすのに近い。収入だけでなく、思い込みと行動を見直す必要がある。"],
      ["周囲と同じ行動のリスク", "人は周囲に影響されやすい。みんながやっているから自分もやる。この行動は安心に見えるが、同じ失敗につながることもある。市場でも人生でも、群衆心理は大きなリスクになる。"],
      ["コンフォートゾーン", "人には現状を維持しようとする力がある。挑戦しようとすると、元の環境に戻ろうとする。この力を理解しておかないと、新しい行動は続かない。"],
      ["実践ワーク", "自分のお金の価値観に影響を与えた人や経験を書き出す。良い影響も悪い影響も見える形にする。そこから、自分がどんなマネースクリプトを持っているかを理解する。"],
      ["まとめ", "お金の問題は収入だけでは解決しない。原因は思い込みと行動パターンにある。紙とペンで書き出し、理解し、修正することで、お金の不安は減らせる。"]
    ]
  },
  {
    id: "app-notice",
    title: "失敗ログから生まれる小さなアプリ",
    series: "Build Log",
    tag: "アプリ",
    duration: "音声 3分 / 読了 5分",
    audio: "assets/audio/new-app-notice-summary.wav",
    lead: "集中できない、家計が見えない。日常の小さな失敗は、改善ツールを作るきっかけになる。",
    body: [
      ["導入", "日々のログを見返すと、同じような失敗が繰り返し出てくる。集中が続かない。休憩を入れずに疲れる。収支を見ずにお金を使う。こうした失敗は、気合いだけでは解決しにくい。"],
      ["フォーカスタイマー", "長時間作業を続けると、判断の質は落ちる。そこで集中と休憩を自動で切り替えるタイマーを使う。スタート、停止、リセットだけのシンプルなUIにすることで、余計な操作を減らす。"],
      ["家計アプリ", "収入があっても、使い道が見えていなければ不安は残る。固定収入を入力し、貯蓄、住宅、食費、娯楽、自由枠を見える形にする。数字を見るだけで、次の行動を考えやすくなる。"],
      ["失敗から道具へ", "アプリがないから困るのではなく、失敗を仕組みに変えていないから困る。失敗ログを見て、繰り返し出る問題を小さなツールに落とし込む。これが改善の流れになる。"],
      ["まとめ", "集中できない、家計が見えない。こうした問題は、知識ではなく設計で改善できる。小さなアプリは、日常の失敗を次の行動へ変えるための道具になる。"]
    ]
  },
  {
    id: "past-spending-potential-finance",
    title: "見えない資産と負債",
    series: "Failure x Finance",
    tag: "資産設計",
    duration: "音声 5分 / 読了 7分",
    audio: "assets/audio/past-spending-potential-finance-summary.wav",
    lead: "支出の本質は金額ではなく、未来の自由度を増やすか減らすか。見えない資産と負債を整理する。",
    body: [
      ["支出の見方", "支出を見るとき、金額だけでは本質は分からない。大事なのは、その支出が未来のキャッシュフロー、時間、知識、信頼、健康にどう影響するか。安くても未来を狭める支出は負債になり、高くても未来を広げる支出は資産になる。"],
      ["見えない負債", "見えない負債には、悪い人間関係、未払いの感情、見栄の生活水準、固定費の重さ、睡眠不足、目的のない作業などがある。これらは家計簿には出にくいが、判断力や自由度を削っていく。"],
      ["見えない資産", "見えない資産には、スキル、知識、健康、信用、集中力、判断力、自由に使える時間がある。これらは数字に出にくいが、将来の選択肢を増やしてくれる。"],
      ["失敗を資産に変える", "過去の浪費や失敗を責めるだけでは何も変わらない。大事なのは、ログにして構造化し、次に使えるルールへ変えること。失敗は放置すれば負債だが、分析すれば資産になる。"],
      ["年齢ごとの視点", "若い時期は間違いを通じて学ぶ時期でもある。そこから先は、資源を組み替えて勝ちに行く時期になる。支出、時間、人間関係、学習、健康を同時に見ることが重要。"],
      ["まとめ", "お金だけを見ると、人生の財務状態を見誤る。通常の家計簿に出ない資産と負債を見える化し、未来の自由度を増やす支出へ切り替えることが大切。"]
    ]
  },
  {
    id: "rich-dad-literacy",
    title: "豊かになるためのリテラシー",
    series: "Finance Literacy",
    tag: "自己投資",
    duration: "音声 4分 / 読了 6分",
    audio: "assets/audio/rich-dad-summary.wav",
    lead: "お金のためだけに働く状態から、スキル、資産、自己投資を優先する状態へ移る。",
    body: [
      ["問い", "まず考えたいのは、お金のためだけに働いていないかという問い。もし答えがはいなら、短期的にはよくても、長期的には豊かになりにくい可能性がある。"],
      ["豊かにならない特徴", "豊かになりにくい人は、お金のためだけに働き、お金の流れをコントロールせず、会社や政府に依存しすぎる。収入が増えても支出が増えるなら、自由度は上がらない。"],
      ["お金の流れ", "大切なのは、先に自分に支払うこと。入ったお金をすぐ使うのではなく、先に貯める、先に学ぶ、先に資産へ回す。溢れた分だけ使うという順番に変える。"],
      ["小さな変化", "豊かになるには、小さな変化を積み重ねる必要がある。毎日少しだけリスクを取る。発信を改善する。新しい分野に触れる。変化耐性は、小さな行動から作られる。"],
      ["無知を認める", "知らないことを認める姿勢も重要。知らないことは恥ではない。学ばないことがリスクになる。新しい分野に挑戦し、本や学習で知識を増やす。"],
      ["まとめ", "豊かさは、お金だけではなく、スキル、価値、資産、学び続ける姿勢から生まれる。変化に適応し、自分でコントロールできる領域を増やすことが重要。"]
    ]
  },
  {
    id: "stock-market-basics",
    title: "本当に分かる株式相場",
    series: "Finance Literacy",
    tag: "株式",
    duration: "音声 4分 / 読了 6分",
    audio: "assets/audio/stocks-summary.wav",
    lead: "株式は企業の資金調達手段。株価は金利、未来期待、市場心理で動く。",
    body: [
      ["株式とは", "株式とは、企業が資金調達のために発行する証券。投資家が資金を出し、企業はその資金で事業を拡大する。投資と聞くと株を思い浮かべやすいが、金融商品には為替、債券、商品、不動産などもある。"],
      ["2つの市場", "株式市場には新発市場と流通市場がある。新発市場は企業が新しく株式を発行して資金調達する場所。流通市場は、すでに発行された株式を投資家同士が売買する場所。一般投資家が使うのは主に流通市場。"],
      ["株価を動かすもの", "株価は景気だけで動くわけではない。金利の影響が大きい。金利が上がると債券の魅力が増し、株から資金が抜けやすくなる。逆に金利が下がると、株式に資金が入りやすい。"],
      ["未来を織り込む", "株価は現在ではなく未来を見て動く。景気回復期待や企業利益の増加予想があれば、実際の景気より先に株価が上がることがある。期待が行き過ぎるとバブルになり、修正されると急落する。"],
      ["短期要因", "短期の株価は市場心理の影響が大きい。企業決算、金融政策、要人発言、突発ニュース、投資家心理が材料になる。大口資金の動きも、短期の価格を動かす。"],
      ["まとめ", "株式は企業の資金調達手段。株価は金利、未来期待、市場心理で動く。長期では企業価値を見つつ、短期ではニュースと心理の影響を受けることを理解しておく。"]
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
  const cache = await caches.open("quant-log-drive-study-v8");
  const urls = [
    "./",
    "index.html",
    "styles.css",
    "app.js",
    "manifest.webmanifest",
    "assets/audio/bonds-summary.wav",
    "assets/audio/die-with-zero-summary.wav",
    "assets/audio/fx-market-summary.wav",
    "assets/audio/money-rules-summary.wav",
    "assets/audio/money-script-summary.wav",
    "assets/audio/new-app-notice-summary.wav",
    "assets/audio/past-spending-potential-finance-summary.wav",
    "assets/audio/rich-dad-summary.wav",
    "assets/audio/stocks-summary.wav"
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
