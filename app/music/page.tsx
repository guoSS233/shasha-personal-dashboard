import "./music.css";

const songUrl = "https://music.163.com/#/song?id=2692445514";
const playlistUrl = "https://music.163.com/#/playlist?id=7360186132";
const songPlayer = "https://music.163.com/outchain/player?type=2&id=2692445514&auto=0&height=66";
const playlistPlayer = "https://music.163.com/outchain/player?type=0&id=7360186132&auto=0&height=430";

export default function MusicPage() {
  return (
    <main className="musicPage">
      <nav className="musicNav"><a href="/#life">← 返回生活</a><span>SHASHA / MUSIC</span></nav>
      <header className="musicHero"><div><small>LIFE / MUSIC</small><h1>最近在听，<br />也长期收藏。</h1></div><p>一些最近反复播放的声音，以及一份不断变化的歌单。播放器使用网易云音乐原生外链。</p></header>
      <section className="nativeSong"><div className="musicCover"><img src="/music/rifle-cover.jpg" alt="i felt like a sketch 专辑封面" /></div><div className="nativeSongBody"><small>NOW LISTENING / KEY VS. LOCKET</small><h2>rifle</h2><p>i felt like a sketch · 2025</p><div className="nativeEmbed"><iframe title="RIFLE 网易云音乐播放器" frameBorder="0" width="100%" height="86" src={songPlayer} loading="lazy" /></div><a href={songUrl} target="_blank" rel="noreferrer">在网易云打开 ↗</a></div></section>
      <section className="nativePlaylist"><div className="playlistHeading"><img src="/music/playlist-cover.jpg" alt="憋摇滚说唱了，全都来吧！歌单封面" /><div><small>MY PLAYLIST / 10 TRACKS</small><h2>憋摇滚说唱了，<br />全都来吧！</h2><p>不只是摇滚</p><a href={playlistUrl} target="_blank" rel="noreferrer">查看完整歌单 ↗</a></div></div><div className="playlistEmbed"><iframe title="我的网易云音乐歌单播放器" frameBorder="0" width="100%" height="450" src={playlistPlayer} loading="lazy" /></div></section>
      <footer className="musicFooter"><span>SHASHA / MUSIC</span><a href="/#life">BACK TO LIFE ↑</a></footer>
    </main>
  );
}
