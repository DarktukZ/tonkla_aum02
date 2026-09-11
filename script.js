const IMG = {
  map: "__MAP_IMG__.png",
  b10: "building10th.png",
  hall: "building11th.png",
  canteen: "cafeteria.png"
};

/* only buildings that have real data get a pin + spotlight */
const DATA = [
  {
    id:"1", num:"1", x:24.71, y:36.31, level:"basic",
    mask:{cx:"25.9%",cy:"43.9%",rx:"6.4%",ry:"11.5%"},
    name:"อาคาร 1",
    sub:"ห้องนอน Staff หญิง / ห้องอำนวยการ 4 / Visitor",
    quick:"จุดพักฝ่ายพยาบาลหญิง — เลม่อน",
    status:"ใช้เป็นห้องนอนของสตาฟหญิง ห้องอำนวยการ 4 และรับรอง Visitor ไม่ใช่พื้นที่จัดกิจกรรมของน้อง ๆ",
    nanny:["ดูแลความเรียบร้อยของน้อง ๆ ตามภาพรวมกิจกรรม (ไม่มีจุดประจำเฉพาะที่อาคารนี้)"],
    welfare:["ไม่มีข้อมูลเฉพาะอาคารนี้ในเอกสาร"],
    nurse:["เลม่อน (ผู้ช่วยประธานฝ่ายพยาบาล) ประจำห้องนอนหญิง 1 คน ตลอดช่วงเวลาพักผ่อน"],
    schedule:null, photo:null
  },
  {
    id:"2", num:"2", x:77.43, y:50.60, level:"basic",
    mask:{cx:"78.3%",cy:"58.8%",rx:"10.5%",ry:"14.5%"},
    name:"อาคาร 2",
    sub:"ห้องนอนสตาฟชาย / ห้องฝ่ายกิจกรรมและนันทนาการ",
    quick:"จุดพักฝ่ายพยาบาลชาย — อ๋องน้อย",
    status:"ใช้เป็นห้องนอนของสตาฟชาย และห้องทำงานของฝ่ายกิจกรรมและนันทนาการ",
    nanny:["ดูแลความเรียบร้อยของน้อง ๆ ตามภาพรวมกิจกรรม (ไม่มีจุดประจำเฉพาะที่อาคารนี้)"],
    welfare:["ไม่มีข้อมูลเฉพาะอาคารนี้ในเอกสาร"],
    nurse:["อ๋องน้อย (ประธานฝ่ายพยาบาล) ประจำห้องนอนชาย 1 คน ตลอดช่วงเวลาพักผ่อน"],
    schedule:null, photo:null
  },
  {
    id:"3", num:"3", x:33.61, y:28.27, level:"basic",
    mask:{cx:"34.2%",cy:"36.5%",rx:"6.3%",ry:"11.5%"},
    name:"อาคาร 3",
    sub:"ห้องพยาบาล สำหรับอาจารย์ที่ปรึกษาโครงการพักผ่อน",
    quick:"ห้องพยาบาลสำรอง (ฝั่งอาจารย์ที่ปรึกษา)",
    status:"จุดพยาบาลสำรองที่จัดไว้สำหรับอาจารย์ที่ปรึกษาโครงการในช่วงเวลาพักผ่อน",
    nanny:["ไม่มีข้อมูลเฉพาะอาคารนี้ในเอกสาร"],
    welfare:["ไม่มีข้อมูลเฉพาะอาคารนี้ในเอกสาร"],
    nurse:["ห้องพยาบาลสำรองสำหรับอาจารย์ที่ปรึกษา (เอกสารไม่ได้ระบุชื่อผู้ประจำเพิ่มเติม)"],
    schedule:null, photo:null
  },
  {
    id:"10", num:"10", x:68.66, y:6.32, level:"full",
    mask:{cx:"70.7%",cy:"19.3%",rx:"12.0%",ry:"19.5%"},
    name:"อาคาร 10",
    sub:"ห้องเรียน 1022–1027 · ใช้จัดกิจกรรม Math Genius และ Math Marketplace",
    quick:"Math Genius / Math Marketplace",
    status:"ใช้ห้องเรียนชั้นบน (ห้อง 1022–1027) จัดกิจกรรมวิชาการหลักของค่ายทั้งสองวัน",
    nanny:["ดูแลความเรียบร้อยของน้อง ๆ ระหว่างทำกิจกรรมในห้องเรียน"],
    welfare:["ดูแลจัดการช่วง Break Time ระหว่างกิจกรรม (11 ต.ค. 14.00–14.10 น. และ 12 ต.ค. 09.55–10.05 น.)"],
    nurse:["Math Genius: ประจำห้อง 1023 และห้อง 1026 ห้องละ 1 คน","Math Marketplace: ประจำห้องชมรมบอร์ดเกม"],
    photo: "b10",
    schedule:[
      {day:"11 ตุลาคม 2569", rows:[
        {time:"12.50–14.00", act:"Math Genius I (1)", dept:"11 ฝ่ายวิชาการ"},
        {time:"14.00–14.10", act:"Break Time", dept:"22 ฝ่ายสวัสดิการ"},
        {time:"14.10–15.20", act:"Math Genius I (2)", dept:"11 ฝ่ายวิชาการ"}
      ]},
      {day:"12 ตุลาคม 2569", rows:[
        {time:"08.45–09.55", act:"Math Genius II (1)", dept:"11 ฝ่ายวิชาการ"},
        {time:"09.55–10.05", act:"Break Time", dept:"22 ฝ่ายสวัสดิการ"},
        {time:"10.05–11.15", act:"Math Genius II (2)", dept:"11 ฝ่ายวิชาการ"},
        {time:"12.15–13.05", act:"Math Marketplace", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"},
        {time:"13.05–13.15", act:"รวมตัว/เตรียมตัวกิจกรรมถัดไป", dept:"11 ฝ่ายวิชาการ"},
        {time:"13.15–14.30", act:"Math Greed", dept:"11 ฝ่ายวิชาการ"}
      ]}
    ]
  },
  {
    id:"11", num:"11", x:87.64, y:35.57, level:"full",
    mask:{cx:"87.2%",cy:"43.5%",rx:"8.8%",ry:"13.5%"},
    name:"หอประชุมคุณย่าชื่น (อาคาร 11)",
    sub:"หอประชุมใหญ่ · ใช้จัดพิธีการและกิจกรรมกลุ่มรวม",
    quick:"พิธีเปิด–ปิด / Math Talents / Ice Breaking",
    status:"หอประชุมหลักของค่าย ใช้ลงทะเบียน จัดพิธีเปิด–ปิด และกิจกรรมกลุ่มรวมเกือบทั้งหมด",
    nanny:["ดูแลความเรียบร้อยของน้อง ๆ ตลอดพิธีการและกิจกรรมกลุ่มใหญ่"],
    welfare:["ดูแลจัดการช่วง Break Time รอบเช้า (11 ต.ค. 09.40–09.50 น.)"],
    nurse:["พยาบาลประจำอยู่บริเวณด้านหลังหอประชุม ตลอดระยะเวลาที่มีกิจกรรม"],
    photo:"hall",
    schedule:[
      {day:"11 ตุลาคม 2569", rows:[
        {time:"07.00–07.45", act:"ลงทะเบียนนักเรียนผู้เข้าร่วมโครงการ", dept:"03 ฝ่ายทะเบียนและประเมินผล"},
        {time:"07.45–08.30", act:"พิธีเปิด", dept:"13 ฝ่ายปฏิคมและพิธีการ"},
        {time:"08.30–08.45", act:"กฎค่าย / โต้ค่าย", dept:"00 ประธานโครงการ"},
        {time:"08.45–09.40", act:"Math Ice Breaking", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"},
        {time:"09.40–09.50", act:"Break Time", dept:"22 ฝ่ายสวัสดิการ"},
        {time:"12.35–12.50", act:"รวมตัว/อธิบาย Math Genius พาขึ้นห้อง", dept:"11 ฝ่ายวิชาการ"},
        {time:"15.20–15.30", act:"รวมตัว/เตรียมตัวกิจกรรมถัดไป", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"},
        {time:"15.30–16.30", act:"Math Talents I", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"},
        {time:"16.30–16.45", act:"แนะนำกิจกรรม Marketplace", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"},
        {time:"16.45–16.50", act:"นัดหมายกิจกรรมวันถัดไป / ปล่อยน้องกลับบ้าน", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"}
      ]},
      {day:"12 ตุลาคม 2569", rows:[
        {time:"06.30–07.00", act:"ลงทะเบียนมัคคุเทศก์ปฏิบัติงาน", dept:"03 ฝ่ายทะเบียนและประเมินผล"},
        {time:"07.00–08.00", act:"ลงทะเบียนนักเรียนผู้เข้าร่วมโครงการ", dept:"03 ฝ่ายทะเบียนและประเมินผล"},
        {time:"08.00–08.30", act:"Math Ready", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"},
        {time:"08.30–08.45", act:"อธิบาย Math Genius และพาขึ้นห้อง", dept:"11 ฝ่ายวิชาการ"},
        {time:"14.30–14.35", act:"รวมตัว/เตรียมตัวกิจกรรมถัดไป", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"},
        {time:"14.35–15.45", act:"Math Talents II", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"},
        {time:"15.45–16.10", act:"Math Memory", dept:"13 ฝ่ายปฏิคมและพิธีการ"},
        {time:"16.10–16.50", act:"พิธีปิด", dept:"13 ฝ่ายปฏิคมและพิธีการ"}
      ]}
    ]
  },
  {
    id:"canteen", num:"🍽", x:54.61, y:28.27, level:"full",
    mask:{cx:"54.5%",cy:"31.5%",rx:"4.0%",ry:"6.5%"},
    name:"โรงอาหาร",
    sub:"อาคารสีเหลือง ระหว่างอาคาร 4 กับอาคาร 5 · เปิดบริการ 05.00–23.59 น.",
    quick:"มื้อเช้า / กลางวัน / มื้อดึก",
    status:"ศูนย์กลางเรื่องอาหารและน้ำดื่มของค่าย เปิดให้บริการตั้งแต่ 05.00–23.59 น.",
    nanny:["ดูแลความเรียบร้อยของน้อง ๆ ระหว่างรับประทานอาหาร"],
    welfare:[
      "ศูนย์กลางการทำงานหลักของฝ่ายสวัสดิการตลอดค่าย",
      "จัดเตรียมคูลเลอร์น้ำ + น้ำแดง สำหรับกรอกตลอดวัน",
      "ดูแลพื้นที่ทานอาหารกลางวันสำหรับทุกคน และอาหารเช้าสำหรับ Staff",
      "จัดตั้งจุดอาหารมื้อดึก: มาม่าคัพ กาแฟ และโอวัลตินซอง"
    ],
    nurse:["ไม่มีจุดประจำการของฝ่ายพยาบาลระบุไว้เฉพาะที่โรงอาหาร"],
    photo:"canteen",
    schedule:[
      {day:"11 ตุลาคม 2569", rows:[
        {time:"11.35–12.35", act:"รับประทานอาหารกลางวัน", dept:"22 ฝ่ายสวัสดิการ"},
        {time:"12.35–12.50", act:"รวมตัว/อธิบาย Math Genius ก่อนพาขึ้นห้อง", dept:"11 ฝ่ายวิชาการ"}
      ]},
      {day:"12 ตุลาคม 2569", rows:[
        {time:"11.15–12.05", act:"รับประทานอาหารกลางวัน", dept:"22 ฝ่ายสวัสดิการ"},
        {time:"12.05–12.15", act:"รวมตัว/เตรียมตัวกิจกรรมช่วงบ่าย", dept:"12 ฝ่ายกิจกรรมและนันทนาการ"}
      ]}
    ]
  }
];

/* ---------- nurse posts per activity period (Action Plan × ภาพรวมสถานที่) ---------- */
/* block ไม่มี post = เอกสารไม่ได้ระบุจุดพยาบาล · row: [เริ่ม, จบ, กิจกรรม, สถานที่(ถ้าต้องบอก)] */
const HALL_POST = { post:"หลังหอประชุม", at:"หอประชุมคุณย่าชื่น (อาคาร 11)" };
const GENIUS_POST = { post:"ห้อง 1023 และห้อง 1026", at:"อาคาร 10 · ห้องละ 1 คน" };
const NURSE_TIMELINE = [
  {day:"อาทิตย์ 11 ตุลาคม 2569", blocks:[
    {rows:[["06.30","07.00","ลงทะเบียนนิสิตผู้ปฏิบัติงาน","ไม่ระบุสถานที่"]]},
    {...HALL_POST, rows:[
      ["07.00","07.45","ลงทะเบียนนักเรียนผู้เข้าร่วมโครงการ"],
      ["07.45","08.30","พิธีเปิด"],
      ["08.30","08.45","กฎค่าย / โค้ดค่าย"],
      ["08.45","09.40","Math Ice Breaking"],
      ["09.40","09.50","Break Time"]
    ]},
    {rows:[
      ["09.50","11.35","Math Adventure","ไม่ระบุสถานที่"],
      ["11.35","12.35","รับประทานอาหารกลางวัน","โรงอาหาร"],
      ["12.35","12.50","รวมตัว / อธิบาย Math Genius","โรงอาหาร"]
    ]},
    {...GENIUS_POST, rows:[
      ["12.50","14.00","Math Genius I (1)"],
      ["14.00","14.10","Break Time"],
      ["14.10","15.20","Math Genius I (2)"]
    ]},
    {...HALL_POST, rows:[
      ["15.20","15.30","รวมตัว / เตรียมตัวกิจกรรมถัดไป"],
      ["15.30","16.30","Math Talents I"],
      ["16.30","16.45","แนะนำกิจกรรม Marketplace"],
      ["16.45","16.50","นัดหมายวันถัดไป / ปล่อยน้องกลับบ้าน"]
    ]}
  ]},
  {day:"จันทร์ 12 ตุลาคม 2569", blocks:[
    {...HALL_POST, rows:[
      ["06.30","07.00","ลงทะเบียนนิสิตผู้ปฏิบัติงาน"],
      ["07.00","08.00","ลงทะเบียนนักเรียนผู้เข้าร่วมโครงการ"],
      ["08.00","08.30","Math Ready"],
      ["08.30","08.45","อธิบาย Math Genius / พาขึ้นห้อง"]
    ]},
    {...GENIUS_POST, rows:[
      ["08.45","09.55","Math Genius II (1)"],
      ["09.55","10.05","Break Time"],
      ["10.05","11.15","Math Genius II (2)"]
    ]},
    {rows:[
      ["11.15","12.05","รับประทานอาหารกลางวัน","โรงอาหาร"],
      ["12.05","12.15","รวมตัว / เตรียมตัวช่วงบ่าย","โรงอาหาร"]
    ]},
    {post:"ห้องชมรมบอร์ดเกม", at:null, rows:[
      ["12.15","13.05","Math Marketplace","อาคาร 10"]
    ]},
    {rows:[
      ["13.05","13.15","รวมตัว / เตรียมตัวกิจกรรมถัดไป","อาคาร 10"],
      ["13.15","14.30","Math Greed","อาคาร 10"]
    ]},
    {...HALL_POST, rows:[
      ["14.30","14.35","รวมตัว / เตรียมตัวกิจกรรมถัดไป"],
      ["14.35","15.45","Math Talents II"],
      ["15.45","16.10","Math Memory"],
      ["16.10","16.50","พิธีปิด"]
    ]}
  ]}
];

function nurseTimelineHTML(){
  let html = '';
  NURSE_TIMELINE.forEach(day=>{
    html += '<div class="day-label">'+day.day+'</div>';
    day.blocks.forEach(bl=>{
      const r = bl.rows;
      const where = bl.post
        ? bl.post + (bl.at ? '<small>'+bl.at+'</small>' : '')
        : 'เอกสารไม่ได้ระบุจุดพยาบาล';
      html += '<div class="npost'+(bl.post ? '' : ' none')+'">'
        + '<div class="npost-head"><span class="npost-time">'+r[0][0]+'–'+r[r.length-1][1]+'</span>'
        + '<span class="npost-where">'+where+'</span></div>';
      r.forEach(x=>{
        html += '<div class="npost-act"><span>'+x[0]+'–'+x[1]+'</span>'+x[2]+(x[3] ? ' <em>· '+x[3]+'</em>' : '')+'</div>';
      });
      html += '</div>';
    });
  });
  return html;
}

/* ---------- department detail data ---------- */
const DEPTS = {
  nanny:{
    label:"ฝ่ายพี่เลี้ยง", cls:"nanny", teaser:"พี่ประจำบ้าน 10 บ้าน · ผู้รับผิดชอบ",
    lead:{ president:{name:null, contact:null}, deputy:{name:null, contact:null} },
    render:function(){
      let html = '<div class="dept-block nanny"><div class="dept-top">บทบาทหลัก</div><div class="dept-body"><ul>'
        + '<li>ดูแลความเรียบร้อยของน้อง ๆ ในทุกกิจกรรมตลอดค่าย</li></ul></div></div>';
      html += '<div class="sched-title">พี่ประจำบ้าน (10 บ้าน)</div>';
      html += '<div class="info-card">';
      for(let i=1;i<=10;i++){
        html += '<div class="row-line"><span class="k">บ้าน '+i+'</span><span class="v pending">รอข้อมูล</span></div>';
      }
      html += '</div>';
      html += '<div class="foot-note">ยังไม่ได้รับรายชื่อพี่เลี้ยงประจำบ้านและเบอร์ติดต่อ — จะอัปเดตให้ทันทีที่ได้รับข้อมูล</div>';
      return html;
    }
  },
  welfare:{
    label:"ฝ่ายสวัสดิการ", cls:"welfare", teaser:"เมนูอาหารแต่ละวัน · จุดบริการที่โรงอาหาร",
    lead:{ president:{name:null, contact:null}, deputy:{name:null, contact:null} },
    render:function(){
      let html = '<div class="dept-block welfare"><div class="dept-top">บทบาทหลัก</div><div class="dept-body"><ul>'
        + '<li>ศูนย์กลางการทำงานอยู่ที่โรงอาหาร เปิดบริการ 05.00–23.59 น.</li>'
        + '<li>จัดน้ำดื่ม + น้ำแดง ตลอดวัน และดูแลช่วง Break Time ตามตารางกิจกรรม</li>'
        + '</ul></div></div>';
      html += '<div class="sched-title">เมนูอาหารแต่ละวัน</div>';
      const days = [
        {d:"11 ตุลาคม 2569", rows:["มื้อเช้า","มื้อกลางวัน","เบรค 1","เบรค 2"]},
        {d:"12 ตุลาคม 2569", rows:["มื้อเช้า","มื้อกลางวัน","เบรค 1","เบรค 2"]},
        {d:"13 ตุลาคม 2569 (ข้าวกล่อง)", rows:["มื้อเช้า","มื้อดึก: มาม่าคัพ","มื้อดึก: กาแฟ","มื้อดึก: โอวัลติน"]},
      ];
      days.forEach(day=>{
        html += '<div class="info-card"><div class="info-card-title">'+day.d+'</div>';
        day.rows.forEach(r=>{
          html += '<div class="row-line"><span class="k">'+r+'</span><span class="v pending">รอข้อมูล</span></div>';
        });
        html += '</div>';
      });
      html += '<div class="foot-note">รายการเมนูจริงยังไม่ถูกกรอกในเอกสารต้นทาง — จะอัปเดตให้ทันทีที่ได้รับข้อมูล</div>';
      return html;
    }
  },
  nurse:{
    label:"ฝ่ายพยาบาล", cls:"nurse", teaser:"ข้อมูลยา · จุดประจำตามช่วงกิจกรรม",
    lead:{ president:{name:"อ๋องน้อย", contact:null}, deputy:{name:"เลม่อน", contact:null} },
    render:function(){
      let html = '<div class="sched-title">ข้อมูลยา</div>';
      html += '<div class="info-card">'
        + '<div class="row-line"><span class="k">กล่องพยาบาล</span><span class="v">2 กล่อง</span></div>'
        + '<div class="row-line"><span class="k">ยาแก้เมา</span><span class="v">1 แผง (8 เม็ด)</span></div>'
        + '<div class="row-line"><span class="k">ลูกอมแก้เจ็บคอ</span><span class="v">1 ขวด</span></div>'
        + '<div class="row-line"><span class="k">รายการยาอื่น ๆ</span><span class="v pending">รอข้อมูล</span></div>'
        + '</div>';
      html += '<div class="sched-title">จุดประจำตามช่วงกิจกรรม</div>';
      html += nurseTimelineHTML();
      html += '<div class="sched-title">ช่วงพักผ่อน (นอกเวลากิจกรรม)</div>';
      html += '<div class="info-card">'
        + '<div class="row-line"><span class="k">อาคาร 1</span><span class="v">เลม่อน (ห้องนอนหญิง)</span></div>'
        + '<div class="row-line"><span class="k">อาคาร 2</span><span class="v">อ๋องน้อย (ห้องนอนชาย)</span></div>'
        + '<div class="row-line"><span class="k">อาคาร 3</span><span class="v">ห้องพยาบาลสำรอง (อาจารย์ที่ปรึกษา)</span></div>'
        + '</div>';
      html += '<div class="foot-note">ช่วงที่ขึ้นว่า “เอกสารไม่ได้ระบุจุดพยาบาล” ยังไม่มีข้อมูลในเอกสารภาพรวมสถานที่ · รายการยาส่วนที่เหลือยังไม่ได้รับข้อมูล — จะอัปเดตให้ทันทีที่ได้รับ</div>';
      return html;
    }
  }
};

const mapFrame = document.getElementById('mapFrame');
const indexGrid = document.getElementById('indexGrid');
let tipEl = null;
let activePinEl = null;
let activeSpotEl = null;

function levelClass(l){ return l==="full" ? "full" : "basic"; }

DATA.forEach(b=>{
  const spot = document.createElement('div');
  spot.className = 'spot';
  spot.style.backgroundImage = "url('"+IMG.map+"')";
  spot.style.backgroundSize = "cover";
  spot.style.backgroundPosition = "center";
  spot.style.setProperty('--cx', b.mask.cx);
  spot.style.setProperty('--cy', b.mask.cy);
  spot.style.setProperty('--rx', b.mask.rx);
  spot.style.setProperty('--ry', b.mask.ry);
  spot.id = 'spot-'+b.id;
  mapFrame.appendChild(spot);
});

DATA.forEach(b=>{
  const pin = document.createElement('button');
  pin.className = 'pin ' + levelClass(b.level);
  pin.style.left = b.x + '%';
  pin.style.top = b.y + '%';
  pin.innerHTML = '<span class="head"><span class="num">'+b.num+'</span></span>';
  pin.addEventListener('mouseenter', ()=> highlight(b, pin));
  pin.addEventListener('mouseleave', ()=>{ if(!sheetOpenFor||sheetOpenFor!==b.id) unhighlight(); hideTip(); });
  pin.addEventListener('click', ()=>{ highlight(b, pin, true); openSheet(b); });
  mapFrame.appendChild(pin);

  const idx = document.createElement('button');
  idx.className = 'idx-btn ' + levelClass(b.level);
  idx.innerHTML = '<span class="idx-num">'+b.num+'</span><span class="idx-label">'+b.name.replace('หอประชุมคุณย่าชื่น (อาคาร 11)','หอประชุม 11')+'</span>';
  idx.addEventListener('click', ()=>{ highlight(b, pin, true); openSheet(b); });
  indexGrid.appendChild(idx);
});

function highlight(b, pinEl, isTap){
  if(activeSpotEl) activeSpotEl.classList.remove('active');
  if(activePinEl) activePinEl.classList.remove('active');
  const spot = document.getElementById('spot-'+b.id);
  spot.classList.add('active');
  pinEl.classList.add('active');
  activeSpotEl = spot;
  activePinEl = pinEl;
  if(!isTap) showTip(b, pinEl);
}
function unhighlight(){
  if(activeSpotEl) activeSpotEl.classList.remove('active');
  if(activePinEl) activePinEl.classList.remove('active');
  activeSpotEl = null; activePinEl = null;
}

function showTip(b, pinEl){
  hideTip();
  tipEl = document.createElement('div');
  tipEl.className = 'tip';
  tipEl.innerHTML = '<b>'+b.name+'</b>'+b.quick;
  mapFrame.appendChild(tipEl);
  // วางเหนือหมุด ถ้าชนขอบบนให้พลิกไปใต้หมุด และบีบไม่ให้ล้นซ้าย/ขวา
  const fw = mapFrame.clientWidth, tw = tipEl.offsetWidth, th = tipEl.offsetHeight;
  const pin = pinEl.offsetWidth, pad = 6;
  const px = b.x/100*fw, py = b.y/100*mapFrame.clientHeight;
  let top = py - pin/2 - 8 - th;
  if(top < pad) top = py + pin*0.71 + 8;
  tipEl.style.left = Math.min(Math.max(px - tw/2, pad), fw - tw - pad) + 'px';
  tipEl.style.top = top + 'px';
  requestAnimationFrame(()=> tipEl && tipEl.classList.add('show'));
}
function hideTip(){
  if(tipEl){ tipEl.remove(); tipEl=null; }
}

const overlay = document.getElementById('overlay');
const sheet = document.getElementById('sheet');
const sheetContent = document.getElementById('sheetContent');
let sheetOpenFor = null;

function deptBlock(cls, label, items){
  if(!items || !items.length) return '';
  const li = items.map(t=>'<li>'+t+'</li>').join('');
  return '<div class="dept-block '+cls+'"><div class="dept-top">'+label+'</div><div class="dept-body"><ul>'+li+'</ul></div></div>';
}

function scheduleHTML(schedule){
  if(!schedule) return '';
  let html = '<div class="sched-title">ตารางการใช้งาน (จาก Action Plan)</div>';
  schedule.forEach(day=>{
    html += '<div class="day-label">'+day.day+'</div>';
    day.rows.forEach(r=>{
      html += '<div class="sched-row"><div class="sched-time">'+r.time+'</div><div class="sched-main"><div class="sched-act">'+r.act+'</div><div class="sched-dept">'+r.dept+'</div></div></div>';
    });
  });
  return html;
}

function openSheet(b){
  sheetOpenFor = b.id;
  let html = '';
  if(b.photo){
    html += '<img class="sheet-photo" src="'+IMG[b.photo]+'" alt="'+b.name+'">';
  }
  html += '<div class="sheet-head">';
  html += '<div class="sheet-eyebrow">จุดปฏิบัติงาน 3 ฝ่าย</div>';
  html += '<div class="sheet-title">'+b.name+'</div>';
  html += '<div class="sheet-sub">'+b.sub+'</div>';
  html += '</div>';
  html += '<div class="status-line">'+b.status+'</div>';
  html += deptBlock('nanny','ฝ่ายพี่เลี้ยง', b.nanny);
  html += deptBlock('welfare','ฝ่ายสวัสดิการ', b.welfare);
  html += deptBlock('nurse','ฝ่ายพยาบาล', b.nurse);
  html += scheduleHTML(b.schedule);
  html += '<div class="foot-note">ข้อมูลรวบรวมจากเอกสาร “ภาพรวมสถานที่” และ “Action Plan” ของค่ายคณิตศาสตร์สัญจร ครั้งที่ 26</div>';

  sheetContent.innerHTML = html;
  sheetContent.scrollTop = 0;
  overlay.classList.add('show');
  sheet.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeSheet(){
  overlay.classList.remove('show');
  sheet.classList.remove('show');
  document.body.style.overflow = '';
  sheetOpenFor = null;
  unhighlight();
}

function leadCardHTML(dept){
  const p = dept.lead.president, d = dept.lead.deputy;
  function card(role, person){
    const nameHtml = person.name ? person.name : '<span class="lead-name pending">รอข้อมูล</span>';
    const contactHtml = person.contact ? person.contact : 'ช่องทางติดต่อ: <span style="color:#A87A2E;font-weight:600;">รอข้อมูล</span>';
    return '<div class="lead-card"><div class="lead-role">'+role+'</div>'
      + (person.name ? '<div class="lead-name">'+person.name+'</div>' : nameHtml)
      + '<div class="lead-contact">'+contactHtml+'</div></div>';
  }
  return '<div class="lead-wrap">'+card('ประธานฝ่าย', p)+card('ผู้ช่วยประธานฝ่าย', d)+'</div>';
}

function openDept(key){
  const dept = DEPTS[key];
  sheetOpenFor = 'dept-'+key;
  unhighlight();
  let html = '<button class="back-link" onclick="openChooser()">‹ เลือกฝ่ายอื่น</button>';
  html += '<div class="sheet-head">';
  html += '<div class="sheet-eyebrow">ข้อมูลฝ่าย</div>';
  html += '<div class="sheet-title">'+dept.label+'</div>';
  html += '<div class="sheet-sub">ประธานฝ่าย ผู้ช่วยประธานฝ่าย และข้อมูลเฉพาะของฝ่าย</div>';
  html += '</div>';
  html += leadCardHTML(dept);
  html += dept.render();

  sheetContent.innerHTML = html;
  sheetContent.scrollTop = 0;
  overlay.classList.add('show');
  sheet.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function openChooser(){
  sheetOpenFor = 'chooser';
  unhighlight();
  let html = '<div class="sheet-head">';
  html += '<div class="sheet-eyebrow">ภาพรวมทั้งค่าย</div>';
  html += '<div class="sheet-title">เลือกดูข้อมูลฝ่าย</div>';
  html += '<div class="sheet-sub">แตะเพื่อดูข้อมูลของแต่ละฝ่ายแยกกัน ไม่ผูกกับอาคารใดอาคารหนึ่ง</div>';
  html += '</div>';
  ['nanny','welfare','nurse'].forEach(key=>{
    const dept = DEPTS[key];
    html += '<div class="dchoose-card '+dept.cls+'" onclick="openDept(\''+key+'\')">'
      + '<div class="dchoose-dot">'+dept.label.slice(3,4)+'</div>'
      + '<div><div class="dchoose-txt-title">'+dept.label+'</div><div class="dchoose-txt-sub">'+dept.teaser+'</div></div>'
      + '<div class="dchoose-chev">›</div>'
      + '</div>';
  });
  html += '<div class="foot-note">ข้อมูลรวบรวมจากเอกสาร “ภาพรวมสถานที่” และ “Action Plan” ของค่ายคณิตศาสตร์สัญจร ครั้งที่ 26 ส่วนที่ยังไม่ครบจะอัปเดตให้ภายหลัง</div>';

  sheetContent.innerHTML = html;
  sheetContent.scrollTop = 0;
  overlay.classList.add('show');
  sheet.classList.add('show');
  document.body.style.overflow = 'hidden';
}
