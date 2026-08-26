import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026年的夏天即将过去，我很怀念它。｜莎莎的个人看板",
  description: "从上海 TI 的一个周末，想到东欧 Dota、逐渐成熟的玩家，以及一代人的技能树如何变化。",
  openGraph: {
    title: "2026年的夏天即将过去，我很怀念它。",
    description: "现场、DOTA 与一个时代缓慢变化的瞬间。",
    images: ["/articles/2026-summer/venue-v2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026年的夏天即将过去，我很怀念它。",
    description: "现场、DOTA 与一个时代缓慢变化的瞬间。",
    images: ["/articles/2026-summer/venue-v2.jpg"],
  },
};

export default function SummerDotaArticle() {
  return (
    <main className="essayPage">
      <nav className="essayNav">
        <a href="/">← 返回个人看板</a>
        <span>SHASHA / NOTES 001</span>
      </nav>

      <article className="essay">
        <header className="essayHeader">
          <div className="essayKicker"><span>2026.08.23</span><span>DOTA 2 · 现场与时代</span></div>
          <h1>2026年的夏天即将过去，<br />我很怀念它。</h1>
          <p>从上海 TI 的一个周末，想到东欧 Dota、逐渐成熟的玩家，以及一代人的技能树如何变化。</p>
        </header>

        <figure className="essayFigure essayHeroImage">
          <img src="/articles/2026-summer/venue-v2.jpg" alt="上海 TI 场馆外墙投射着参赛战队标志" />
          <figcaption>上海，TI 现场。场馆外墙亮起各支战队的标志。</figcaption>
        </figure>

        <div className="essayBody">
          <p className="essayLead">这个周末可能会成为我 Dota 生涯里很难忘的一周。周六第一次来到 TI 现场，看着雪碧 2:0 拿下 Liquid 和 BB，当时所有人都在说，雪碧是不是又要在败者组化龙了，今年又拿的是什么剧本。结果周日 Spirit 2:0 拿下 Yandex，并在最后依旧打满 BO5 拿下 PV，恭喜 Spirit，恭喜 Yatoro 和 Collapse 成就三冠传奇。</p>

          <figure className="essayFigure essayWide">
            <img src="/articles/2026-summer/arena-v2.jpg" alt="坐满观众的 TI 比赛现场" />
            <figcaption>第一次坐进 TI 现场，比赛从直播画面变成了具体的生活经验。</figcaption>
          </figure>

          <p className="essayQuestion">但看完以后又忍不住想问，为什么四强全是东欧队伍？为什么舞台上几乎全是俄罗斯和乌克兰选手？其他地方的人呢？</p>

          <p>以前总有人说东欧 Dota 强，是因为战争导致年轻人没有出路，只能打游戏。但我一直不太认同这个说法，战争带来的首先应该是破坏，而不是电竞繁荣。于是我去看了一下现在活跃的队伍和选手，发现一个挺有意思的事实：现在还在不断诞生年轻天才的，似乎真的只剩东欧。Yatoro，23 岁；Larl，21 岁；Rue，21 岁；还有一批二十岁出头的新选手，他们后面还有新人接班。</p>

          <p>至于为什么？可能是因为东欧长期的 PC 电竞文化，可能是因为 Dota 和 CS 这些传统电竞项目在那里形成了完整的社区生态，也可能是因为冠军带来的反哺，让战队、青训和玩家之间形成了循环。当然也可能还有更多复杂的原因，但我不想简单归结成某一个因素。</p>

          <figure className="essayFigure essayWide">
            <img src="/articles/2026-summer/reflections-v2.jpg" alt="上海夜色中倒映在水面上的赛事灯光装置" />
            <figcaption>场馆外的灯光与倒影，也像各个赛区仍在延续的回声。</figcaption>
          </figure>

          <p>反观其他赛区，西欧依然强大，但更多依靠经验丰富的老将，今年 SumaiL 可能的告别，也像是在送别一个时代。CNDOTA 曾经辉煌无比，但今年 TI 甚至没有一支队伍进入八强。至于美洲、东南亚，他们有热情、有新人，也有自己的 Dota 文化，但距离最高舞台还有差距。</p>

          <p className="essayStatement">所以看完这届 TI，我突然有一种感觉：DOTA2 这个游戏，可能真的正在随着它的玩家一起慢慢老去。</p>

          <p>现场最有意思的也是这一点，台上的选手越来越年轻，台下的观众却越来越成熟。很多人已经工作，有的大哥甚至带着电脑来现场处理消息。但当比赛打到关键团战，整个场馆还是会一起欢呼。这些“中登”玩家，依然愿意为了一个陪伴了十几年的游戏买票、呐喊。</p>

          <p>我自觉还没到中登的年纪，但从 PC 时代成长起来的我，也开始意识到，也许再过几年，我也会成为别人眼里的“老玩家”。我们这一代人会一些只有那个时代才会掌握的技能，会找资源，会解决各种电脑问题，会判断一个软件是不是靠谱，会在互联网还没有完全规范化的时候摸索出一套属于自己的方法。这些技巧其实和 DOTA2 很像，复杂，但充满探索的乐趣。</p>

          <p>但现在的人也不会因此变笨，只是新一代的人会有新一代的技能树。他们可能不需要学习怎么装系统、怎么找资源、怎么处理各种弹窗，他们需要学习的是怎么深度定制自己的设备，怎么更好地使用 AI，怎么判断 AI 生成的信息是真是假。</p>

          <figure className="essayFigure essaySummary">
            <img src="/articles/2026-summer/summary-v2.jpg" alt="旧 PC 时代、电竞现场与 AI 技能树交汇的编辑插画" />
            <figcaption>旧时代的复杂与探索，新一代的技能树，在同一片屏幕光里交汇。</figcaption>
          </figure>

          <p>你问我会不会有一种被时代抛下的感觉？目前来说还没有，毕竟我的人生还没过两个地支，我也自认为还在科技浪潮里面。但当我玩着一个旧时代的游戏，看着场馆里的这些中登玩家，心里确实有一种说不出来的感觉。是惘然若失吗？是庆幸吗？还是只是突然意识到，自己也正在成为某个时代的一部分？我说不上来。可能等我真的年长十岁甚至九岁之后，再回头看今天的上海 TI，才会真正明白这一刻到底意味着什么。</p>

          <p>但至少在这个最爱的夏天，我见证了一场属于 DOTA 的比赛，见证了选手们一展拳脚，也见证了一个时代缓慢变化的瞬间。</p>

          <blockquote className="essayEnding">生活和游戏的车轮终究会滚滚向前，<strong>ENJOY DOTA，ENJOY LIFE.</strong></blockquote>
        </div>
      </article>

      <footer className="essayFooter"><span>SHASHA / PERSONAL OS</span><a href="/">回到首页 ↑</a></footer>
    </main>
  );
}
