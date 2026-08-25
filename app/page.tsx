"use client";

import { useMemo, useState } from "react";

const tracks = [
  { icon: "◎", title: "客户价值", tag: "主航道", text: "培训、问题答疑、带教搭建应用，把客户从“会点按钮”带到“能独立交付”。", items: ["客户培训", "问题答疑", "应用带教"] },
  { icon: "◇", title: "方案与验证", tag: "高频", text: "把模糊需求拆成可评估的流程，用 Demo 验证关键链路和风险。", items: ["需求评估", "流程分析", "Demo 搭建"] },
  { icon: "⌘", title: "内部建设", tag: "成长线", text: "从 RPA 走向 AI 与工程能力：内部系统、接口、数据与自动化协作。", items: ["系统开发", "API / 爬取", "AI 应用"] },
  { icon: "△", title: "人才与组织", tag: "协作", text: "参与客户专员面试，把真实交付经验转化为选人和培养标准。", items: ["面试评估", "能力画像", "知识传递"] },
];

const projects = [
  { status: "进行中", title: "AI 信息 → 个人输出系统", desc: "把每天看过的大量 AI 信息、工作记录和零散思考，沉淀成可检索记忆与稳定输出。", next: "先跑通每日采集—晚间总结—选题池", color: "lime" },
  { status: "持续积累", title: "RPA 教练方法论", desc: "将客户培训、需求评估、故障排查、带教和 Demo 经验，从个案整理成可复制的框架。", next: "整理 3 个代表性案例", color: "cyan" },
];

const signals = [
  ["职业", "RPA → AI", "把一线交付经验升级成 AI 时代的组织提效能力"],
  ["输出", "从收藏到观点", "让每天的输入至少留下一条可复用判断"],
  ["生活", "保持观察", "城市、旅行、游戏、历史与猫，都是理解世界的入口"],
];

const interests = ["Dota 2", "凉宫春日", "日本城市观察", "摇滚 / 电子 / 独立", "历史与政治", "AI 产品", "摩托与露营", "郭福柯 🐈"];

export default function Home() {
  const [mode, setMode] = useState<"overview" | "work" | "life">("overview");
  const date = useMemo(() => new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "short" }).format(new Date()), []);
  return (
    <main>
      <nav className="topbar"><a className="brand" href="#top"><span>S</span> SASHA / OS</a><div className="navlinks"><a href="#work">工作</a><a href="#projects">项目</a><a href="#thinking">思考</a><a href="#life">生活</a></div><div className="live"><i /> MEMORY ONLINE</div></nav>
      <section className="hero" id="top">
        <div className="eyebrow"><span>PERSONAL DASHBOARD</span><b>{date}</b></div>
        <div className="heroGrid"><div><p className="hello">你好，我是莎莎。</p><h1>在一线解决问题，<br />也在持续<span>理解世界。</span></h1><p className="lede">RPA 教练 / 技术支持 / 观察者。白天把模糊需求变成可运行流程，晚上把工作、AI、城市与人的碎片，慢慢拼成自己的知识系统。</p><div className="switcher" aria-label="切换看板视角">{([['overview','总览'],['work','工作模式'],['life','生活模式']] as const).map(([key,label]) => <button key={key} className={mode===key?'active':''} onClick={()=>setMode(key)}>{label}</button>)}</div></div>
          <aside className="statusCard"><div className="cardTop"><span>CURRENT STATUS</span><em>● ACTIVE</em></div><blockquote>“每天输入很多，<br />我想让它们真正留下来。”</blockquote><dl><div><dt>当前身份</dt><dd>RPA 教练</dd></div><div><dt>所在城市</dt><dd>杭州</dd></div><div><dt>当前主线</dt><dd>构建个人记忆与输出系统</dd></div><div><dt>工作方法</dt><dd>先观察，再拆解，然后动手验证</dd></div></dl></aside>
        </div>
      </section>
      <section className="ticker"><span>RPA COACH</span><span>AI NATIVE</span><span>PROBLEM SOLVER</span><span>CITY WALKER</span><span>LONG-FORM THINKER</span></section>
      {(mode === "overview" || mode === "work") && <><section className="section" id="work"><header className="sectionHead"><div><small>01 / WORK</small><h2>我在做什么</h2></div><p>站在客户、产品与技术之间，把问题一步步推到落地。</p></header><div className="trackGrid">{tracks.map((x,i)=><article className="track" key={x.title}><div className="trackNo">0{i+1}</div><div className="trackIcon">{x.icon}</div><span className="tag">{x.tag}</span><h3>{x.title}</h3><p>{x.text}</p><ul>{x.items.map(v=><li key={v}>{v}</li>)}</ul></article>)}</div></section>
        <section className="section projects" id="projects"><header className="sectionHead"><div><small>02 / PROJECTS</small><h2>正在生长的东西</h2></div><p>这些项目像几条长期生长的支线，各自都有下一步。</p></header><div className="projectList">{projects.map((x,i)=><article className="project" key={x.title}><div className={`projectMark ${x.color}`}>0{i+1}</div><div><span className="projectStatus">{x.status}</span><h3>{x.title}</h3><p>{x.desc}</p></div><div className="next"><span>NEXT MOVE</span>{x.next}</div></article>)}</div></section></>}
      {(mode === "overview" || mode === "life") && <><section className="section thinking" id="thinking"><header className="sectionHead"><div><small>03 / SIGNALS</small><h2>最近在想什么</h2></div><p>记录那些反复出现、值得继续追踪的信号。</p></header><div className="signalGrid">{signals.map(([k,t,d])=><article key={t}><span>{k}</span><h3>{t}</h3><p>{d}</p></article>)}</div><div className="outputBox"><div><small>OUTPUT ENGINE / v0.1</small><h3>把一天变成可以复利的材料</h3></div><div className="flow"><span>全天采集</span><b>→</b><span>自动归档</span><b>→</b><span>晚间总结</span><b>→</b><span>观点 / 案例 / 选题</span></div></div></section>
        <section className="section life" id="life"><header className="sectionHead"><div><small>04 / OFFLINE</small><h2>工作以外，我也由这些组成</h2></div><p>这些兴趣也是我观察世界的一组传感器。</p></header><div className="interestCloud">{interests.map((v,i)=><span key={v} style={{'--i':i} as React.CSSProperties}>{v}</span>)}</div><div className="principles"><article><b>01</b><h3>观察比结论更长久</h3><p>喜欢从城市动线、产品细节、人的措辞里找出背后的结构。</p></article><article><b>02</b><h3>关系不只由结果定义</h3><p>真诚地建立连接，同时学习接受边界、变化与无法控制的部分。</p></article><article><b>03</b><h3>乐观是一种行动</h3><p>相信世界螺旋上升，但不靠空想；先把眼前能做的事推一步。</p></article></div></section></>}
      <footer><div><span>SASHA / PERSONAL OS</span><p>一份持续更新的自我索引。</p></div><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
