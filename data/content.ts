export type EntityKind = "project" | "event" | "person" | "organization" | "place" | "artifact" | "theme" | "source";

export type Project = {
  slug: string; title: string; titleEn: string; years: string; place: string; stage: string;
  summary: string; question: string; process: string[]; outputs: string[]; themes: string[];
  organizations: string[]; related: string[];
};

export const projects: Project[] = [
  {
    slug: "amend-pingnan", title: "茶盐古道：图书馆片段与公共种子", titleEn: "The Amend Project: Pingnan",
    years: "2026", place: "福建屏南 · 四坪村", stage: "正在发生",
    summary: "从制作、观察和参与开始。师生将一处既有空间共同转化为乡村图书馆，并从真实公共需求中寻找小型公共建筑的种子。",
    question: "什么是这个地方真正需要的，而不是我们预先想设计的？",
    process: ["读懂地方", "以片段建造图书馆", "使用已有与再生材料", "多人共建一座公共空间", "寻找公共需求的种子", "从屏南带回杭州继续发展"],
    outputs: ["社区图书馆与十二类空间片段", "材料、测绘与制作过程档案", "小型公共建筑种子提案", "分布式乡村公共基础设施设想"],
    themes: ["在地研究", "公共空间", "材料再用", "茶盐古道", "共同建造"],
    organizations: ["中国美术学院视觉传播学院", "乡土国际工作站（关系待确认）"],
    related: ["四坪村", "乡村图书馆", "杭州阶段汇报"]
  },
  {
    slug: "diverse-foods", title: "大食物馆与大食物观", titleEn: "Diverse Foods Project", years: "2023—2026", place: "福建屏南", stage: "持续研究",
    summary: "以食物系统连接生态、生产与生活，形成社区食物地图与共创者网络。", question: "如何以食物为入口理解乡土系统？",
    process: ["田野调查", "食物地图", "共创网络"], outputs: ["大食物馆", "社区食物地图"], themes: ["食物系统", "生态文明"], organizations: ["中国美术学院"], related: ["屏南硕博研习营"]
  },
  {
    slug: "doctoral-camp", title: "屏南硕博研习营", titleEn: "Pingnan Graduate Research Camp", years: "2025", place: "福建屏南", stage: "阶段成果",
    summary: "围绕生态、产业、社会、文化与空间五条线索展开的跨学科研习。", question: "如何把社会现场转化为持续研究？",
    process: ["生态", "产业", "社会", "文化", "空间"], outputs: ["生态农业与堆肥试验", "一亩田的 N 次方", "平讲戏非遗活化", "本草养生文化与茶盐古道"], themes: ["社会创新", "乡土研究"], organizations: ["中国美术学院"], related: ["大食物馆", "茶盐古道"]
  }
];

export const places = [
  { id:"siping", name:"四坪村", type:"乡村现场", note:"福建省宁德市屏南县；首版统一使用“屏南四坪村”。" },
  { id:"station", name:"乡土国际工作站／小院", type:"学习与驻地空间", note:"建设中；作为网站叙事入口。" },
  { id:"trail", name:"茶盐古道", type:"田野路径", note:"连接历史、材料景观与当代乡村生活的研究线索。" },
  { id:"hangzhou", name:"杭州", type:"教学节点", note:"工作坊成果汇报与下一阶段发展地。" }
];

export const organizations = [
  { id:"caa", name:"中国美术学院视觉传播学院", role:"发起与教学" },
  { id:"unam", name:"墨西哥国立自治大学 UNAM", role:"国际寻访资料中的合作线索" },
  { id:"open-city", name:"智利开放城市", role:"国际寻访资料中的研究节点" },
  { id:"station-org", name:"乡土国际工作站", role:"在地协作；正式从属关系待确认" }
];

export const themes = ["乡建教育", "社会创新", "共同建造", "食物系统", "生态农业", "公共空间", "非遗活化", "国际协作", "材料再用", "乡村基础设施"];
export const events = [
  { id:"workshop-2026-09", date:"2026.09", title:"屏南国际工作坊", project:"amend-pingnan", place:"四坪村", status:"进行中" },
  { id:"hangzhou-report", date:"2026.10", title:"杭州阶段汇报", project:"amend-pingnan", place:"杭州", status:"计划中" },
  { id:"turkey-2026-11", date:"2026.11", title:"土耳其期次", project:"amend-pingnan", place:"待确认", status:"信息待补" },
  { id:"global-forum-2025", date:"2025", title:"全球治理论坛 · 乡土国际倡议", project:"doctoral-camp", place:"杭州", status:"已完成" }
];

export const artifacts = [
  { id:"library-fragments", name:"图书馆空间片段", type:"建造成果", project:"amend-pingnan" },
  { id:"civic-seeds", name:"公共空间种子提案", type:"研究提案", project:"amend-pingnan" },
  { id:"food-map", name:"社区食物地图", type:"研究图谱", project:"diverse-foods" },
  { id:"world-visit-map", name:"世界寻访地图", type:"关系图谱", project:"doctoral-camp" }
];

export const sources = [
  { id:"brief-v01", name:"乡土国际网站建设 Brief v0.1", date:"2026-09-15", confidence:"已整理", note:"网站范围、架构与待确认事项" },
  { id:"overview-deck", name:"《乡土国际：以世界为视野，以乡土为学院》", date:"资料年份 2023—2025", confidence:"原始资料", note:"项目谱系、国际寻访与历年成果" },
  { id:"pingnan-outline", name:"The Amend Project: Pingnan", date:"2026", confidence:"原始资料", note:"图书馆片段与公共空间种子工作坊文本" },
  { id:"yuanxiang-key", name:"原乡社演示文稿", date:"待核对", confidence:"待进一步解析", note:"组织称谓与关系需由负责人确认" }
];

export const entityCounts: { kind: EntityKind; label: string; count: number }[] = [
  { kind:"project", label:"项目", count:projects.length }, { kind:"event", label:"活动", count:events.length },
  { kind:"person", label:"人物", count:0 }, { kind:"organization", label:"机构", count:organizations.length },
  { kind:"place", label:"地点", count:places.length }, { kind:"artifact", label:"成果", count:artifacts.length },
  { kind:"theme", label:"议题", count:themes.length }, { kind:"source", label:"资料", count:sources.length }
];
