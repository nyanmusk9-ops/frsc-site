(function () {
  "use strict";

  var strings = {
    en: {
      topbar: "Community research archive · Est. from the 2014 Bitcointalk record",
      top_origin: "Creative Origin",
      top_live: "Live Fed desk",
      top_sources: "Sources",
      site_title: "Federal Reserve System Coin Virtual Currency",
      og_tagline: "The FRSC, the investors like tribe, provides the game player with a safe, flexible, and stable monetary and financial system.",
      site_subtitle: "In plain language: what Bitcointalk was, who btcpay86 was, what FRSC was trying to say — and why we brought the ticker back.",
      search_label: "Archive search",
      search_ph: "Search…",
      search_btn: "Search",
      ca_label: "CONTRACT (CA)",
      ca_copy: "Copy",
      nav_about_fed: "About Federal Reserve",
      nav_home: "Home",
      nav_origin: "Creative Origin",
      nav_story: "The story",
      status_home: "Archive: Bitcointalk · btcpay86 / CZ · FRSC concept · live Fed desk",
      status_disc: "Not affiliated with the U.S. Federal Reserve, CZ, or Binance",
      nav_bt: "Bitcointalk",
      nav_who: "Who posted it",
      nav_concept: "The concept",
      nav_timeline: "Timeline",
      nav_legacy: "Legacy",
      nav_live: "Live Fed",
      nav_purpose: "Token info",
      nav_sources: "Sources",
      nav_faq: "FAQ",
      origin_kicker: "From the original 2014 website",
      origin_title: "Creative Origin",
      origin_note: "Preserved from federalreservecoin.org — the project's own explanation of why FRSC existed.",
      origin_b1: "Two days before Christmas in 1913, Woodrow Wilson signed the Federal Reserve Act. The law sought to end bank failures by creating a central banking system. But a century later, the Federal Reserve has become an enabler of the financial havoc it was designed to prevent. A look at the Fed's history offers some insight into the problems.",
      origin_b2: "Federal Reserve system coin (FRSC) was born in the Federal Reserve 100th birthday. This's a virtual currency experiment at the Financial system function, the world of a not without inflation and devaluation, let us feel the true meaning of the Federal Reserve system.",
      origin_b3: "December 18, 2013, the Fed announced its withdrawal of quantitative easing (QE), its withdrawal from January 2014, the monthly scale bond purchases will be reduced from 10 billion to 75 billion U.S. Five years ago, the Fed opened a lot of people have been likened to \"printing machine\" QE monetary policy.",
      origin_b4: "FRSC use scrypt algorithm, produce one blocks per minute, each block of the first year of a 20% reduction coins every 30 days, In the second year unchanged, third year decreased by 50% per year, the total mining time is infinite.",
      origin_b5: "Open Source download: <strong>Local Download</strong> — port:5895 · rpc port:5894",
      origin_meta: "Wording kept close to the original site (including its grammar) so the 2014 voice stays intact.",
      origin_full_shot: "View full Creative Origin screenshot",
      banner1_small: "This is an experiment",
      banner1_big: "Said to Inflation: NO",
      banner2_top: "A WORLD WITHOUT INFLATION · WILL NOT BE DEVALUED COINS",
      banner2_bottom: "DEDICATE TO 100 YEARS OF THE FEDERAL RESERVE",
      fed_kicker: "About Federal Reserve",
      fed_title: "About the Federal Reserve — as FRSC framed it",
      fed_note: "This matches the original site's \"About Federal Reserve\" theme: not a civics textbook — a critique that justified the coin.",
      fed_p1: "Two days before Christmas in 1913, Woodrow Wilson signed the Federal Reserve Act. The law sought to end bank failures by creating a central banking system. But a century later — in the FRSC telling — the Federal Reserve had become an enabler of the financial havoc it was designed to prevent.",
      fed_p2: "By late 2013 the Fed was still associated with quantitative easing: years of large-scale bond buying that critics nicknamed the \"printing machine.\" On December 18, 2013, it announced a taper of those purchases. FRSC used that moment — and the Fed's 100th anniversary — as the stage for a virtual currency experiment about inflation, devaluation, and who controls money.",
      fed_th1: "Fed theme",
      fed_th2: "FRSC response",
      fed_r1a: "Central bank discretion",
      fed_r1b: "Supply rules written in code (Scrypt chain; emission schedule)",
      fed_r2a: "Inflation / devaluation",
      fed_r2b: "Motto: WILL NOT BE DEVALUED COINS · \"Said to Inflation: NO\"",
      fed_r3a: "100 years of the Fed",
      fed_r3b: "\"Dedicate to 100 Years of the Federal Reserve\" — ironic dedication",
      fed_r4a: "Official authority",
      fed_r4b: "Explicit disclaimer: This's Not The Fed's Official Website",
      fed_disc: "This section explains the original project's framing. It is not an official Federal Reserve publication.",
      side_origin: "Creative Origin",
      side_bt: "1. What Bitcointalk is",
      side_who: "2. Who btcpay86 is",
      side_concept: "3. What FRSC was",
      side_fed: "About Federal Reserve",
      side_timeline: "4. Timeline",
      side_legacy: "5. Why continue",
      side_live: "Live Fed desk",
      side_purpose: "Token info",
      side_sources: "Sources",
      side_faq: "FAQ",
      side_glance: "At a glance",
      method_h: "How the identification was made — step by step",
      method_intro: "Nobody \"revealed\" this. Anyone can rebuild the trail in about ten minutes, using nothing but public Bitcointalk pages. Here is the exact path, in order.",
      method_s1_h: "Start at the coin's own announcement",
      method_s1_p: "Open the 2014 <a href=\"https://bitcointalk.org/index.php?topic=493871.0\" target=\"_blank\" rel=\"noopener noreferrer\">[ANN] Federal Reserve Coin thread (topic 493871)</a>. The thread starter is the account that launched FRSC: <strong>btcpay86</strong>, user ID <strong>202137</strong>. That is the only starting fact you need.",
      method_s2_h: "Open that account's whole post history",
      method_s2_p: "Go to <a href=\"https://bitcointalk.org/index.php?action=profile;u=202137;sa=showPosts\" target=\"_blank\" rel=\"noopener noreferrer\">the profile's post list (user 202137)</a>. You are not looking for a confession — you are reading a job description: wallets, exchange plumbing, user support, in the years before Binance existed.",
      method_s3_h: "Check that he operated the coin, not just posted it",
      method_s3_p: "Read his <a href=\"https://bitcointalk.org/index.php?topic=484188.msg5330969#msg5330969\" target=\"_blank\" rel=\"noopener noreferrer\">FRSC support thread of 24 February 2014</a>: <em>\"Hi, guys, if you have some problems of FRSC, Please do not hesitate to tell me.\"</em> He ships the wallet, the source code and the mining software, and answers users' problems. That is the behaviour of whoever built it.",
      method_s4_h: "Search that history for blockchain.info",
      method_s4_p: "Much of the account writes in Chinese, so turn on your browser's translate, then use Ctrl+F for <strong>blockchain.info</strong>. You land on posts like <a href=\"https://bitcointalk.org/index.php?topic=608394.msg6722268#msg6722268\" target=\"_blank\" rel=\"noopener noreferrer\">this reply (msg 6722268)</a>, where the account answers blockchain.info support questions and speaks about working there.",
      method_s5_h: "Compare it with CZ's public timeline",
      method_s5_p: "CZ's own public career story runs through <strong>blockchain.info</strong> (today Blockchain.com) and OKCoin before he founded Binance in 2017. Same years, same employer, same kind of hands-on work — from a Chinese-speaking account that also happened to launch a coin mocking the Federal Reserve. That overlap is the whole basis of the identification.",
      method_caveat: "What the record proves: btcpay86 launched and operated FRSC, and discussed working at blockchain.info in 2014. What it does not contain: a signed confirmation of identity. Neither CZ nor Binance has commented. So this stays a community identification built on public sources — strong, but read it yourself and judge.",
      method_src_h: "Primary sources",
      method_src1: "The launch thread",
      method_src2: "btcpay86 post history",
      method_src3: "His FRSC support thread (Feb 2014)",
      method_src4: "blockchain.info discussion sample",
      lang_note: ""
    },
    zh: {
      topbar: "社区研究档案 · 源自 2014 年 Bitcointalk 记录",
      top_origin: "创作起源",
      top_live: "美联储实时看板",
      top_sources: "原始来源",
      site_title: "联邦储备系统币（虚拟货币）",
      og_tagline: "FRSC，投资者之族，为玩家提供安全、灵活、稳定的货币与金融系统。",
      site_subtitle: "通俗说明：Bitcointalk 是什么、btcpay86 是谁、FRSC 想表达什么——以及我们为何重启这一代号。",
      search_label: "档案搜索",
      search_ph: "搜索…",
      search_btn: "搜索",
      ca_label: "合约地址 (CA)",
      ca_copy: "复制",
      nav_about_fed: "关于美联储",
      nav_home: "首页",
      nav_origin: "创作起源",
      nav_story: "故事",
      status_home: "档案：Bitcointalk · btcpay86 / CZ · FRSC 理念 · 美联储实时看板",
      status_disc: "与美国联邦储备系统、CZ 或币安无关",
      nav_bt: "Bitcointalk",
      nav_who: "谁发布的",
      nav_concept: "核心理念",
      nav_timeline: "时间线",
      nav_legacy: "传承",
      nav_live: "实时美联储",
      nav_purpose: "代币信息",
      nav_sources: "来源",
      nav_faq: "常见问题",
      origin_kicker: "来自 2014 年原始网站",
      origin_title: "创作起源",
      origin_note: "保留自 federalreservecoin.org——项目自己对 FRSC 存在理由的说明。",
      origin_b1: "1913 年圣诞节前两天，伍德罗·威尔逊签署了《联邦储备法》。该法试图通过建立中央银行体系来终结银行倒闭。但一个世纪后，美联储已成为它本欲防止的金融乱局的推手。回顾美联储的历史，有助于理解这些问题。",
      origin_b2: "联邦储备系统币（FRSC）诞生于美联储百年诞辰。这是一个关于金融系统功能的虚拟货币实验——在一个并非没有通胀与贬值的世界里，让我们感受联邦储备体系的真正含义。",
      origin_b3: "2013 年 12 月 18 日，美联储宣布退出量化宽松（QE），自 2014 年 1 月起，每月债券购买规模将从 850 亿美元逐步下调（原文写作从 100 亿到 750 亿）。五年来，美联储开启的 QE 货币政策被许多人比作“印钞机”。",
      origin_b4: "FRSC 使用 Scrypt 算法，大约每分钟产出一个区块；第一年每 30 天减产 20%，第二年不变，第三年起每年减产 50%，总挖矿时间无限。",
      origin_b5: "开源下载：<strong>本地下载</strong> — 端口：5895 · RPC 端口：5894",
      origin_meta: "措辞尽量贴近原始网站（包括其语法），以保留 2014 年的原声。",
      origin_full_shot: "查看完整「创作起源」截图",
      banner1_small: "这是一场实验",
      banner1_big: "对通胀说：不",
      banner2_top: "一个没有通胀的世界 · 不会被贬值的币",
      banner2_bottom: "献给美联储一百周年",
      fed_kicker: "关于美联储",
      fed_title: "关于美联储——按 FRSC 的叙述",
      fed_note: "对应原站「About Federal Reserve」栏目：不是教科书，而是支撑这枚币存在的批判视角。",
      fed_p1: "1913 年圣诞节前两天，伍德罗·威尔逊签署《联邦储备法》，希望用中央银行体系终结银行倒闭。但在 FRSC 的叙述里，一个世纪后，美联储已变成它本想防止的金融乱局的推手。",
      fed_p2: "到 2013 年底，美联储仍与量化宽松联系在一起——多年大规模购债被批评者称为“印钞机”。2013 年 12 月 18 日，美联储宣布缩减购债。FRSC 借助这一时刻与美联储百年纪念，推出一场关于通胀、贬值与货币控制权的虚拟货币实验。",
      fed_th1: "美联储主题",
      fed_th2: "FRSC 的回应",
      fed_r1a: "央行自由裁量",
      fed_r1b: "用代码写明供给规则（Scrypt 链；发行计划）",
      fed_r2a: "通胀 / 贬值",
      fed_r2b: "口号：WILL NOT BE DEVALUED COINS · 「对通胀说不」",
      fed_r3a: "美联储一百年",
      fed_r3b: "「献给美联储一百周年」——带讽刺的致敬",
      fed_r4a: "官方权威",
      fed_r4b: "明确免责：这不是美联储官方网站",
      fed_disc: "本节说明原项目如何叙述美联储。并非美联储官方出版物。",
      side_origin: "创作起源",
      side_bt: "1. 什么是 Bitcointalk",
      side_who: "2. 谁是 btcpay86",
      side_concept: "3. FRSC 是什么",
      side_fed: "关于美联储",
      side_timeline: "4. 时间线",
      side_legacy: "5. 为何延续",
      side_live: "美联储实时看板",
      side_purpose: "代币信息",
      side_sources: "来源",
      side_faq: "常见问题",
      side_glance: "一览",
      method_h: "这个身份是如何被推断出来的——分步说明",
      method_intro: "没有人「爆料」。任何人只用公开的 Bitcointalk 页面，大约十分钟就能自己把这条线索重建一遍。以下是完整顺序。",
      method_s1_h: "第一步：从币本身的公告帖开始",
      method_s1_p: "打开 2014 年的 <a href=\"https://bitcointalk.org/index.php?topic=493871.0\" target=\"_blank\" rel=\"noopener noreferrer\">[ANN] Federal Reserve Coin 公告帖（topic 493871）</a>。发帖人就是发布 FRSC 的账号：<strong>btcpay86</strong>，用户 ID <strong>202137</strong>。这是唯一需要的起点事实。",
      method_s2_h: "第二步：打开该账号的全部发帖记录",
      method_s2_p: "进入 <a href=\"https://bitcointalk.org/index.php?action=profile;u=202137;sa=showPosts\" target=\"_blank\" rel=\"noopener noreferrer\">该用户的发帖列表（用户 202137）</a>。你要找的不是「自认」，而是一份工作画像：钱包、交易所后台、用户支持——全都发生在币安还不存在的那几年。",
      method_s3_h: "第三步：确认他是在运营这个币，而不只是发了个帖",
      method_s3_p: "读他 <a href=\"https://bitcointalk.org/index.php?topic=484188.msg5330969#msg5330969\" target=\"_blank\" rel=\"noopener noreferrer\">2014 年 2 月 24 日的 FRSC 支持帖</a>：<em>「大家好，如果你在使用 FRSC 时遇到问题，请随时告诉我。」</em> 他提供钱包、源代码和挖矿软件，并逐一回答用户的问题。这是搭建者本人才会有的行为。",
      method_s4_h: "第四步：在这些帖子里搜索 blockchain.info",
      method_s4_p: "该账号大量内容以中文写成；如需要可开启浏览器翻译，然后用 Ctrl+F 搜索 <strong>blockchain.info</strong>。你会找到像<a href=\"https://bitcointalk.org/index.php?topic=608394.msg6722268#msg6722268\" target=\"_blank\" rel=\"noopener noreferrer\">这条回复（msg 6722268）</a>这样的帖子：该账号在解答 blockchain.info 的用户问题，并谈到自己在那里工作。",
      method_s5_h: "第五步：与 CZ 公开的经历对照",
      method_s5_p: "CZ 本人公开的职业经历包括在 <strong>blockchain.info</strong>（今 Blockchain.com）与 OKCoin 任职，之后于 2017 年创办币安。相同的年份、相同的雇主、相同类型的一线技术支持工作——而这个中文账号恰好还发布了一个讽刺美联储的币。正是这些重叠构成了整个身份推断的基础。",
      method_caveat: "记录能证明的是：btcpay86 发布并运营了 FRSC，并在 2014 年谈及自己在 blockchain.info 工作。记录里没有的是：任何署名的身份确认。CZ 与币安均未就此表态。因此这始终是一项建立在公开资料之上的社区推断——证据有力，但请自己去读、自己判断。",
      method_src_h: "原始来源",
      method_src1: "公告帖",
      method_src2: "btcpay86 发帖记录",
      method_src3: "他的 FRSC 支持帖（2014 年 2 月）",
      method_src4: "blockchain.info 讨论示例",
      lang_note: ""
    }
  };

  function applyLang(lang) {
    var pack = strings[lang] || strings.en;
    var fallback = strings.en;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.body.setAttribute("data-lang", lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = pack[key] != null ? pack[key] : fallback[key];
      if (val != null && val !== "") el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var val = pack[key] != null ? pack[key] : fallback[key];
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = pack[key] != null ? pack[key] : fallback[key];
      if (val != null) el.setAttribute("placeholder", val);
    });

    var note = document.getElementById("lang-note");
    if (note) {
      if (pack.lang_note) {
        note.hidden = false;
        note.textContent = pack.lang_note;
      } else {
        note.hidden = true;
        note.textContent = "";
      }
    }

    try {
      localStorage.setItem("frsc-lang", lang);
    } catch (e) {}
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-set-lang"));
    });
  });

  var initial = "en";
  try {
    initial = localStorage.getItem("frsc-lang") || "en";
    if (initial !== "en" && initial !== "zh") initial = "en";
  } catch (e) {}
  if (!strings[initial]) initial = "en";
  applyLang(initial);

  window.FRSC_i18n = { set: applyLang, strings: strings };
})();
