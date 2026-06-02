export const workbench = {
  user: { name: '李亮', org: '计算机科学系', role: '网格安全员', unread: 9 },
  modules: [
    { title: '安保对象', icon: '▰', color: '#1aa99b', url: '/pages/object/index' },
    { title: '安保资源', icon: '◆', color: '#2f7eea', url: '/pages/resource/index' },
    { title: '隐患排查', icon: '⚑', color: '#dd6f8d', url: '/pages/hazard/index' },
    { title: '安全随手拍', icon: '▣', color: '#e79b31', url: '/pages/event/index' },
    { title: '工作评价', icon: '↗', color: '#e6a641', url: '/pages/evaluation/index' },
    { title: '安全教育', icon: '◇', color: '#327fe8', url: '/pages/education/index' },
    { title: '接处警', icon: '☎', color: '#26a6a0', url: '/pages/todo/index' },
    { title: '应急处置', icon: '▧', color: '#d95564', url: '/pages/resource/list?type=plans' },
    { title: '物联报警', icon: '♨', color: '#ef7096', url: '/pages/todo/index' },
    { title: '日常办公', icon: '♙', color: '#21a08f', url: '/pages/workbench/index' }
  ],
  notices: [
    { title: '关于安全责任网格划分的通知', date: '2025-08-21' },
    { title: '实验室重点风险场所巡检安排', date: '2025-08-21' },
    { title: '开学季校园安全值守要求', date: '2025-08-20' },
    { title: '暑期消防通道专项检查通报', date: '2025-08-18' }
  ],
  education: [
    { title: '开学首日安全队伍全力护航', date: '2025-08-21' },
    { title: '实验室危化品使用安全提醒', date: '2025-08-18' },
    { title: '消防演练流程图学习材料', date: '2025-08-16' }
  ]
}

export const todoTasks = [
  { id: 'todo-1', type: '隐患检查', status: '未处理', title: '2026年二级风险场所每周安全检查', unit: '保卫处', due: '2026-02-01', place: '工科B112化学流体实验室' },
  { id: 'todo-2', type: '事件处置', status: '处理中', title: '校园治安事件待流转', unit: '化工学院', due: '2026-02-22', place: '工科楼B座21房间' },
  { id: 'todo-3', type: '复查任务', status: '逾期', title: '重大隐患复查确认', unit: '实验室管理处', due: '2026-01-25', place: '工科B112化学流体实验室' },
  { id: 'todo-4', type: '督办任务', status: '已处理', title: '二级网格督办记录归档', unit: '化工学院', due: '2026-01-28', place: '应用化学系网格' }
]

export const objectHome = {
  groups: [
    { title: '场所管理', items: [
      { label: '建筑物', value: '35', unit: '个', type: 'buildings' },
      { label: '房间', value: '6230', unit: '间', type: 'rooms' },
      { label: '风险点', value: '628', unit: '个', type: 'risks' }
    ] },
    { title: '人员管理(1.5)', items: [
      { label: '教职工', value: '3500', unit: '人', type: 'people' },
      { label: '学生', value: '35000', unit: '人', type: 'people' },
      { label: '务工人员', value: '628', unit: '人', type: 'people' }
    ] },
    { title: '重点管控人员(1.5)', items: [
      { label: '政保关注人员', value: '35', unit: '人', type: 'people' },
      { label: '消防重点人员', value: '6', unit: '人', type: 'people' },
      { label: '治安重点人员', value: '18', unit: '人', type: 'people' }
    ] }
  ]
}

export const objectLists = {
  buildings: [
    { id: 'b1', name: '工科楼B座', tag: '办公楼', campus: '唐岛湾校区', riskPoints: 15, hazards: 10 },
    { id: 'b2', name: '化学实验中心', tag: '实验楼', campus: '唐岛湾校区', riskPoints: 22, hazards: 6 },
    { id: 'b3', name: '学生公寓7号楼', tag: '学生公寓', campus: '古镇口校区', riskPoints: 8, hazards: 1 }
  ],
  rooms: [
    { id: 'r1', name: '工科楼B座1104-人工智能实验室', tag: '重大', owner: '李强', grid2: '计算机学院', grid3: '计算机科学与技术系' },
    { id: 'r2', name: '工科楼B座112-化学流体实验室', tag: '较大', owner: '张亮', grid2: '化工学院', grid3: '应用化学系' },
    { id: 'r3', name: '行政楼301会议室', tag: '一般', owner: '王敏', grid2: '保卫处', grid3: '综合管理网格' }
  ],
  risks: [
    { id: 'risk1', name: '工科楼B座1104-化学反应装置', tag: '重大', owner: '李强', grid2: '计算机学院', grid3: '计算机科学与技术系' },
    { id: 'risk2', name: '危化品暂存柜', tag: '较大', owner: '张亮', grid2: '化工学院', grid3: '应用化学系' }
  ],
  people: [
    { id: 'p1', name: '张发发', tag: '橙色等级', idNo: '371581XXXXXXXX6050', category: '学生', status: '在控', grid: '计算机科学系网格' },
    { id: 'p2', name: '刘明', tag: '黄色等级', idNo: '371581XXXXXXXX6021', category: '务工人员', status: '在控', grid: '后勤网格' }
  ]
}

export const resources = {
  grids: [
    { id: 'g1', name: '计算机学院', tag: '二级网格', rooms: 100, risks: 12, hazards: 3, owner: '张金强' },
    { id: 'g2', name: '化工学院', tag: '二级网格', rooms: 142, risks: 38, hazards: 9, owner: '李亮' }
  ],
  materials: [
    { id: 'm1', name: '空气呼吸器', tag: '有预警', store: '工科楼B座应急物资库', stock: 10, warn: 20 },
    { id: 'm2', name: '消防水带', tag: '无预警', store: '工科楼B座应急物资库', stock: 36, warn: 10 }
  ],
  stores: [
    { id: 's1', name: '工科楼B座应急物资库', tag: '有预警', location: '工科楼B座001房间', owner: '张伟' },
    { id: 's2', name: '体育馆应急物资库', tag: '无预警', location: '体育馆西侧库房', owner: '王华' }
  ],
  plans: [
    { id: 'plan1', name: '安全生产突发火情演练', tag: '重大', date: '2026-01-09', type: '安全生产/火灾' },
    { id: 'plan2', name: '实验室危化品泄漏处置预案', tag: '较大', date: '2026-02-12', type: '危化品/应急' }
  ]
}

export const hazard = {
  plans: [
    { id: 'hp1', name: '2026年重大风险场所每日安全检查', tag: '进行中', rate: '80%', unit: '保卫处', freq: '季检' },
    { id: 'hp2', name: '实验室安全专项检查', tag: '未开始', rate: '0%', unit: '实验室管理处', freq: '月检' }
  ],
  records: [
    { id: 'hr1', name: '工科B112化学流体实验室', tag: '转入复查', code: '[2026]HN-004', time: '2026-01-12 15:30:00', major: 1, left: 2 },
    { id: 'hr2', name: '工科楼B座1104人工智能实验室', tag: '通过', code: '[2026]HN-008', time: '2026-01-14 09:30:00', major: 0, left: 0 }
  ],
  reviews: [
    { id: 'rv1', name: '工科B112化学流体实验室', tag: '待复查', code: '[2026]HN-004', due: '2026-01-25', major: 1, left: 2 },
    { id: 'rv2', name: '化学实验中心危化品库', tag: '通过', code: '[2026]HN-009', due: '2026-01-29', major: 0, left: 0 }
  ],
  supervises: [
    { id: 'sp1', name: '工科B112化学流体实验室', tag: '督办中', code: '[2026]HN-004', due: '2026-01-25', owner: '化工学院 - 张亮' },
    { id: 'sp2', name: '实验楼消防通道', tag: '督办完成', code: '[2026]HN-013', due: '2026-02-03', owner: '保卫处 - 李亮' }
  ]
}

export const events = [
  { id: 'e1', code: '20260222-001', status: '办理中', type: '校园治安', source: '随手拍', reporter: '化工学院 - 应用化学系 - 1班 - 张亮', time: '2026-02-22 14:46:00', location: '工科楼B座21房间', content: '丢失手机 iPhone 14 Plus，需协助调取现场情况。' },
  { id: 'e2', code: '20260222-002', status: '已办结', type: '消防安全', source: '随手拍', reporter: '计算机学院 - 李强', time: '2026-02-22 16:20:00', location: '工科楼B座一层通道', content: '消防通道临时堆放杂物。' }
]

export const education = {
  knowledge: ['应急救援大会流程图', '实验室危化品安全使用指引', '消防疏散路线说明'],
  laws: ['应急救援法', '高校实验室安全管理规范', '高等学校实验室安全检查项目表'],
  cases: ['化学实验室试剂着火', '宿舍违规用电警示案例', '校园交通安全案例']
}

export const evaluation = [
  { unit: '计算机学院', rate: 60 },
  { unit: '化工学院', rate: 85 },
  { unit: '保卫处', rate: 65 },
  { unit: '实验室管理处', rate: 60 },
  { unit: '后勤处', rate: 90 }
]
