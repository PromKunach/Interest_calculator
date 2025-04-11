


function validateInteger(input) {
    // Replace non-numeric characters (except for negative sign) with an empty string
    input.value = input.value.replace(/[^0-9\-]/g, '');
}

document.querySelector('.sum').addEventListener('mouseenter', function() {
    document.getElementById("Money-image").style.transform = 'rotate(-15deg)';
    document.getElementById("Money-image2").style.transform = 'rotate(-25deg)';
    document.getElementById("Money-image3").style.transform = 'rotate(-35deg)';


  });
  
  document.querySelector('.sum').addEventListener('mouseleave', function() {
    document.getElementById("Money-image").style.transform = 'rotate(0deg)';
    document.getElementById("Money-image2").style.transform = 'rotate(-0deg)';
    document.getElementById("Money-image3").style.transform = 'rotate(-0deg)';


  });
function resizeTextToFit(container) {
    let fontSize = 56;
    container.style.fontSize = `${fontSize}px`;

   
    while (container.scrollWidth > (container.clientWidth ) && fontSize > 8) { 
        fontSize -= 1;
        container.style.fontSize = `${fontSize}px`;
    }
}
function resizeTextToFit2(container) {
    let fontSize = 32;
    container.style.fontSize = `${fontSize}px`;
   
    while (container.scrollWidth > (container.clientWidth ) && fontSize > 8) { 
        fontSize -= 1;
        container.style.fontSize = `${fontSize}px`;
    }
}

function placeholder_color(){
    const selectElements = document.getElementsByClassName("styled-select");

 
    for (let i = 0; i < selectElements.length; i++) {
        const selectElement = selectElements[i];
    
       
        selectElement.addEventListener("change", function() {
            if (selectElement.value === "-") {
                selectElement.style.color = "gray";
            } else {
                selectElement.style.color = "black";
            }
        });
    
        
        selectElement.style.color = "gray";
    }

   
    
}
placeholder_color();

var prev_bank = "";
var current_bank = "";
var current_interest_rate = 0;
var banking_type = document.getElementById("banking-type");
var person_type = document.getElementById("person-type");

function banking_type_date() {

    let banking_selector = document.getElementById("banking-type");
    let range_selector  = document.getElementById("range-selector");
    let range_header  = document.getElementById("range-select-header");
    let date_selector_div = document.getElementById("date-input-container");
    let date_select_header = document.getElementById("date-input");
    let end_date = document.getElementById("end-date");
    let start_date = document.getElementById("start-date");
    let end_text = document.getElementById("end-text")
    let month_input = document.getElementById("month-input");
    let month_input_header = document.getElementById("range-select-month-header");
    month_input.style.display = "none";
    month_input_header.style.display = "none";
    banking_selector.addEventListener("change", function() {
        if (banking_selector.value === "daily") {
            range_selector.style.display = "none"; 
            range_header.style.display = "none";  
            date_selector_div.style.display = "flex";
            date_select_header.style.display = "block";
            end_date.style.display = "flex";
            end_text.style.display = "flex";
            month_input.style.display = "none";
            month_input_header.style.display = "none";
        }
        else if (banking_selector.value === "-"){
            
            month_input.style.display = "none";
            range_selector.style.display = "none"; 
            range_header.style.display = "none"; 
            date_selector_div.style.display = "none";
            date_select_header.style.display = "none";
            month_input_header.style.display = "none";
        }
        else if(banking_selector.value === "fix"){
          
            range_selector.style.display = "block";  
            range_header.style.display = "block";  
            date_selector_div.style.display = "flex";
            date_select_header.style.display = "block";
            end_date.style.display = "none";
            end_text.style.display = "none";
            month_input.style.display = "none";
            month_input_header.style.display = "none";
        }
        else if(banking_selector.value === "saving"){
            range_selector.style.display = "none"; 
            range_header.style.display = "none";  
            date_selector_div.style.display = "flex";
            date_select_header.style.display = "block";
            end_date.style.display = "block";
            end_text.style.display = "block";
            month_input.style.display = "none";
            month_input_header.style.display = "none";
        }
       
    }); 
    range_selector.style.display = "none"; 
    range_header.style.display = "none"; 
    date_selector_div.style.display = "none";
    date_select_header.style.display = "none";
}
banking_type_date();


const bank_logo = [
    "images/krungthai-logo.png",
    "images/dpa_bank_sb@2x.png",
    "images/bkk.png",
"images/Ayuthaya.png",
"images/KBANK.png",

"images/TTB.png",

"images/UOB.png",
"images/CIMB.png",
"images/kiatti.png",
"images/LnH.png"
];

const BankDetail = {
    "กรุงไทย": [`บัญชีเงินฝากออมทรัพย์พิเศษสำหรับผู้เยาว์ (Krungthai Kids Savings) 
จุดเด่น: เป็นบัญชีเงินฝากออมทรัพย์สำหรับผู้เยาว์ เป็นบัญชีสำหรับผู้เยาว์ที่อายุต่ำกว่า 15 ปีบริบูรณ์ การสั่งจ่ายธนาคารกำหนดให้ผู้ปกครองมีอำนาจสั่งจ่ายเพียงผู้เดียว หรือผู้ปกครองลงนามสั่งจ่ายร่วมกับผู้เยาว์
เงื่อนไขการฝาก: เปิดบัญชีขั้นต่ำที่ 2,000 บาท ฝากสูงสุดไม่เกิน 1,000,000 บาท สามารถฝาก-ถอน-โอนได้ไม่จำกัดจำนวนครั้ง อัตราดอกเบี้ย 0.3% ต่อปี และไม่ต้องฝากต่อเนื่องทุกเดือน หลังจากอายุ 15 ปี บัญชีออมทรัพย์พิเศษสำหรับผู้เยาว์จะเปลี่ยนเป็นบัญชีออมทรัพย์ปกติ
หมายเหตุ: สามารถเปิดได้คนละ 1 บัญชีเท่านั้น หากอายุเกิน 15 ปีบริบูรณ์แล้ว สามารถเปิดบัญชีเงินฝากออมทรัพย์แบบปกติ`],



    "ไทยพาณิชย์": ["-"],



    "กรุงเทพ": [`บัญชีเงินฝากสะสมทรัพย์ e-Savings

จุดเด่นบัญชี
- ไม่ต้องมีสมุดบัญชี
- เปิดบัญชีง่าย
- ฟรี ค่าธรรมเนียมข้ามเขต
- เติม โอน จ่าย ลงทุนได้ทันที
- เมื่อเปิดบัญชีสำเร็จ ก็พร้อมทำธุรกรรมได้ทันที

เงื่อนไขการฝาก: ผู้ขอเปิดบัญชีต้องเป็นบุคคลธรรมดาที่มีอายุ 15 ปีขึ้นไป โดยเป็นบุคคลที่มีสัญชาติไทย
ฝากขั้นต่ำ 500 ในการเปิดบัญชี ไม่มีสมุดคู่ฝาก
น้อยกว่า 10 ล้านบาท 0.2500%
หากตั้งแต่ 10 ล้านบาทขึ้นไป
0.3000% นิติบุคคล ราชการและ
รัฐวิสาหกิจ 0.550%
หมายเหตุ: เปิดบัญชีได้ 1 บัญชี ต่อรายลูกค้า และในนามบุคคลเดียวเท่านั้น

บัญชีเงินฝากสินมัธยะทรัพย์ทวี

จุดเด่นบัญชี
- ฝาก โอนได้ดั่งใจ สะดวก ทุกช่องทาง ทุกเวลา
- ดอกเบี้ยสูงอัตราสูงกว่าดอกเบี้ยเงินฝากประจำแบบ 12 เดือน
- ปลอดภาษีไม่ต้องเสียภาษีเงินได้จากดอกเบี้ย

การเปิดบัญชีใหม่
เพียงฝากประจำเท่ากันทุกเดือน ตั้งแต่ 1,000 บาท ถึง 25,000 บาท และมีจำนวนเงินฝากสูงสุดในบัญชีไม่เกิน 600,000 บาท เป็นระยะเวลาอย่างน้อย 2 ปี คุณก็จะได้รับดอกเบี้ยเพิ่มขึ้นอย่างสม่ำเสมอเป็นดอกเบี้ยทบต้น

เงื่อนไขการฝากเงิน:
24 เดือน 2.200%
36 48 60 เดือน 2.450%
ฝากเป็นประจำทุกเดือนในจำนวนที่เท่ากันตามที่ได้ตกลงไว้กับธนาคาร โดยนำฝากเงินประจำเดือนไม่เกินวันสุดท้ายของเดือนนั้นๆ`],




    "กรุงศรีอยุธยา": ["-"],




"ธกส.": [
        `ชื่อผลิตภัณฑ์เงินฝาก "โครงการ Young Smart eSavings"

ชื่อผลิตภัณฑ์: โครงการ Young Smart eSavings

ประเภทผลิตภัณฑ์: เงินฝากออมทรัพย์ (แบบไม่มีสมุดเงินฝาก)

กลุ่มลูกค้าเป้าหมาย: บุคคลธรรมดา อายุตั้งแต่ 15 ปีบริบูรณ์ขึ้นไป ถึง 22 ปีบริบูรณ์ และเป็นผู้มีถิ่นที่อยู่ในประเทศ (ท.ร.14)

อัตราดอกเบี้ยต่อปี: แบบขั้นบันไดตามยอดเงินฝากคงเหลือสิ้นวัน ดังนี้
1. ยอดเงินฝากไม่เกิน 100,000 บาท อัตราดอกเบี้ยร้อยละ 1.50 ต่อปี
2. ยอดเงินฝากส่วนที่เกิน 100,000 บาทขึ้นไป อัตราดอกเบี้ยร้อยละ 0.50 ต่อปี

เงื่อนไขการจ่ายดอกเบี้ย:
1. ธนาคารจ่ายดอกเบี้ยทบเป็นต้นเงินปีละ 2 ครั้ง วันเสาร์สุดท้ายของเดือนมีนาคมและกันยายน
2. บุคคลธรรมดาได้รับยกเว้นการเสียภาษีดอกเบี้ยเงินฝาก

เงื่อนไขหลัก:
1. ต้องสมัครใช้บริการแอปพลิเคชัน Mobile Banking ของ ธ.ก.ส.
2. เปิดบัญชีผ่าน Mobile Banking ของ ธ.ก.ส. เท่านั้น
3. เปิดบัญชีได้คนละ 1 บัญชี และเป็นบัญชีเจ้าของคนเดียว (Single) เท่านั้น
4. สามารถเปิดบัญชีได้ตลอด 24 ชั่วโมง
5. เปิดบัญชีเงินฝากจำนวนเงิน 0 (ศูนย์) บาทได้

เงื่อนไขการฝาก/ถอน/โอน สิทธิประโยชน์ และเงื่อนไขอื่น:
1. การฝากเงิน/รับโอนเงิน
  1.1 ฝากเงินครั้งแรก และฝากเงินครั้งต่อไปไม่กำหนดจำนวนเงินขั้นต่ำ และไม่จำกัดจำนวนเงินสูงสุด
  1.2 ฝากเงินผ่าน สาขา ธ.ก.ส. และเครื่อง CDM ได้
  1.3 โอนเงินจากบัญชีอื่นเข้าบัญชีเงินฝาก Young Smart eSavings ได้

2. การถอนเงิน/โอนเงิน
  2.1 การถอนเงินฝากไม่กำหนดจำนวนเงินการถอนขั้นต่ำ โดยจำกัดจำนวนเงินสูงสุดตามวงเงินการให้บริการ Mobile Banking ของ ธ.ก.ส.
  2.2 ไม่สามารถถอนเงินฝากผ่านสาขา ธ.ก.ส. ต้องทำธุรกรรมผ่าน Mobile Banking ของ ธ.ก.ส.
  2.3 สามารถใช้บริการถอนเงินไม่ใช้บัตร (Cardless) เพื่อขอรับเงินสดที่เครื่อง ATM/CDM ได้
  2.4 การถอนเงินเพื่อปิดบัญชี กรณีผู้ฝากเสียชีวิตให้ทายาทหรือผู้จัดการมรดกของเจ้าของบัญชีเงินฝาก ที่เสียชีวิตให้มาดำเนินการปิดบัญชีเงินฝากทุกบัญชีที่อยู่ภายใต้ข้อมูลลูกค้า (CIF) ของผู้เสียชีวิตให้เสร็จสิ้น

ค่าธรรมเนียมการรักษาบัญชี/ค่าธรรมเนียมอื่นๆ:
เป็นไปตามประกาศอัตราค่าบริการ และค่าธรรมเนียมของธนาคาร คลิกที่นี่ เพื่อดูประกาศอัตราค่าบริการและค่าธรรมเนียม

เงื่อนไขการปิดบัญชี:
1. บัญชียอดเงินฝากเป็น 0 (ศูนย์) บาท ตั้งแต่วันเปิดบัญชีและไม่มีรายการเคลื่อนไหวเกิน 365 วันธนาคารจะปิดบัญชีเงินฝากอัตโนมัติ
2. บัญชีมียอดเงินคงเหลือในบัญชีไม่เกิน 500 บาท และขาดการติดต่อกับธนาคารตั้งแต่ 1 ปีขึ้นไปหลังจากธนาคารหักค่าธรรมเนียมการรักษาบัญชีจนมียอดเงินฝากเป็น 0 (ศูนย์) ในเดือนถัดไปวันที่ 10 ธนาคารจะปิดบัญชีเงินฝากอัตโนมัติ

เงื่อนไขการครบกำหนด:
เมื่อผู้ฝากมีอายุครบ 22 ปีบริบูรณ์ บัญชีเงินฝาก Young Smart eSavings (SAV 2016) จะเปลี่ยนเป็นประเภทเงินฝากออมทรัพย์ (SAV 2001) ได้รับอัตราดอกเบี้ยเงินฝากออมทรัพย์ ตามประกาศอัตราดอกเบี้ยของธนาคาร ตั้งแต่วันที่ 1 ของเดือน ถัดจากเดือนที่ผู้ฝากอายุครบ 22 ปีบริบูรณ์

โครงการ Young Smart eSavings
จุดเด่น:บุคคลธรรมดาได้รับยกเว้นการเสียภาษีดอกเบี้ยเงินฝาก
รูปแบบบัญชี:เงินฝากออมทรัพย์ (แบบไม่มีสมุดเงินฝาก)
สำหรับบุคคลธรรมดา อายุตั้งแต่ 15 ปีบริบูรณ์ขึ้นไป ถึง 22 ปีบริบูรณ์ และเป็นผู้มีถิ่นที่อยู่ในประเทศ (ท.ร.14)เปิดบัญชีเงินฝากจำนวนเงิน 0 (ศูนย์) บาทได้
อัตราดอกเบี้ยต่อปี:แบบขั้นบันไดตามยอดเงินฝากคงเหลือสิ้นวัน ดังนี้
1. ยอดเงินฝากไม่เกิน 100,000 บาท อัตราดอกเบี้ยร้อยละ 1.50 ต่อปี
2. ยอดเงินฝากส่วนที่เกิน 100,000 บาทขึ้นไป อัตราดอกเบี้ยร้อยละ 0.50 ต่อปี
โดยธนาคารจ่ายดอกเบี้ยทบเป็นต้นเงินปีละ 2 ครั้ง วันเสาร์สุดท้ายของเดือนมีนาคมและกันยายน
เงื่อนไขการครบกำหนด:
เมื่อผู้ฝากมีอายุครบ 22 ปีบริบูรณ์ บัญชีเงินฝาก Young Smart eSavings (SAV 2016) จะเปลี่ยนเป็นประเภทเงินฝากออมทรัพย์ (SAV 2001) ได้รับอัตราดอกเบี้ยเงินฝากออมทรัพย์ ตามประกาศอัตราดอกเบี้ยของธนาคาร ตั้งแต่วันที่ 1 ของเดือน ถัดจากเดือนที่ผู้ฝากอายุครบ 22 ปีบริบูรณ์

หมายเหตุ:ต้องสมัครใช้บริการแอปพลิเคชัน Mobile Banking ของ ธ.ก.ส. เปิดบัญชีได้คนละ 1 บัญชี และเป็นบัญชีเจ้าของคนเดียว ไม่สามารถถอนเงินฝากผ่านสาขา ธ.ก.ส. ต้องทำธุรกรรมผ่าน Mobile Banking ของ ธ.ก.ส.`
    ],




     "กสิกรไทย": [`เงินฝากทวีทรัพย์ (อยู่ในรูปแบบฝากประจำ)
ระยะเวลาการฝาก 24 เดือน 
ฝากขั้นต่ำ 500 บาท สูงสุด 25,000 บาทต่อเดือน
อัตราดอกเบี้ยฝากต่อปี 2.35%

หมายเหตุ: เปิดบัญชี 1 คนต่อ 1 บัญชี รวมทุกธนาคาร
ได้รับยกเว้นภาษีดอกเบี้ยเงินฝาก ตามข้อกำหนดของกรมสรรพากร`],



    "ทหารไทยธนชาต": ["-"],



    "ออมสิน": [`บัญชีเงินฝากพื้นฐาน 
คุณสมบัติ: บุคคลธรรมดาที่ถือบัตรสวัสดิการแห่งรัฐที่ยังไม่หมดอายุ หรือ เป็นผู้มีสัญชาติไทยอายุ 65 ปีขึ้นไป
จุดเด่น: ยกเว้นค่ารักษาบัญชี ยกเว้นค่าธรรมเนียมแรกเข้า ค่าธรรมเนียมรายปี และค่าธรรมเนียมออกบัตรใหม่ กรณีบัตรหมดอายุ
เงื่อนไขในการฝาก: ยกเว้นค่าธรรมเนียมแรกเข้า ค่าธรรมเนียมรายปี และค่าธรรมเนียมออกบัตรใหม่ 
ถอนครั้งละเท่าใดก็ได้

เงินฝาก Youth Savings
เป็นเงินฝากสำหรับนักเรียน นักศึกษา
คุณสมบัติ: บุคคลธรรมดาอายุตั้งแต่ 7 – 23 ปีบริบูรณ์
เงื่อนไขการฝาก: เปิดบัญชีขั้นต่ำ 100 บาท ฝากเพิ่มครั้งละไม่ต่ำกว่า 50 บาท 
ต่ำกว่า 1 แสนบาท = 0.55 % ต่อปี
ตั้งแต่ 1 แสนบาทขึ้นไป = 0.30 % ต่อปี
ถอนเงินวันละกี่ครั้งก็ได้ ถอนครั้งละเท่าใดก็ได้ 
หมายเหตุ: เปิดบัญชีได้เพียง 1 คน ต่อ 1 บัญชี

เงินฝากเผื่อเรียกประชารัฐผู้สูงวัย
จุดเด่น: เป็นเงินฝากสำหรับผู้สูงอายุ ตั้งแต่ 60 ปีขึ้นไป
เงื่อนไขการฝาก: เปิดบัญชีขั้นต่ำ 100 บาท
(ไม่จำกัดวงเงินรับฝากสูงสุด)
การคิดดอกเบี้ย / ผลตอบแทน: 0.55 % ต่อปี
หมายเหตุ: ไม่รับฝากบัญชีเพื่อประโยชน์ของผู้เยาว์และบัญชีร่วม
**เปิดบัญชีได้คนละ 1 บัญชีเท่านั้น**

เงินฝากประจำรายเดือนยกเว้นภาษี
คุณสมบัติ: บุคคลธรรมดาอายุตั้งแต่ 7 ปีขึ้นไป
เงื่อนไขการฝาก: ตั้งแต่ 1,000 บาทขึ้นไป และไม่เกิน 25,000 บาท ต่อเดือน
อัตราดอกเบี้ย: 2.65% ต่อปี
ถอนเงินก่อนครบกำหนดระยะเวลาฝากไม่ได้ จะต้องถอนปิดบัญชีเท่านั้น
หมายเหตุ: เปิดบัญชีได้เพียง 1 คน ต่อ 1 บัญชี
บัญชีร่วมของบุตรผู้เยาว์กับบิดาหรือมารดา / สามี-ภรรยา`],
    "ยูโอบี": ["-"],
    "ซีไอเอ็มบี ไทย": ["-"],
    "เกียรตินาคินภัทร": ["-"],
    "แลนด์ แอนด์ เฮ้าส์ ": ["-"]
};




function scaleDown(element ,type) {
   
    prev_bank = current_bank;
    current_bank =  element.id;
    const bankName = current_bank;
    let bank_holder = document.getElementById("bank-name-value") 
    let interest_display = document.getElementById("interest-rate");

    bank_holder.textContent = "ธนาคาร"+bankName;   
    //console.log(bankName);
    let bank_image = document.getElementById("uni-bank-image");
    let req_header = document.getElementById("req-header");
        let req_header_thai = document.getElementById("req-header-name");
    if(type == 0 ){
      


        let detail = document.getElementById("detail");
        
        let detail_content = BankDetail[bankName][0];
        detail.textContent = detail_content;
        let principal        = document.getElementById("intInput").value;
        let interest_array = picking(range_selector.value);
        let interest_rate = getInterest(interest_array,bankName);
        interest_rate_display = interest_rate.toFixed(3);
        interest_display.textContent = interest_rate_display ;
        
       
    
        bank_image.src = bank_logo[bank_list.indexOf(bankName)];
    
        req_header.textContent = en_bank_name[bank_list.indexOf(bankName)];
        req_header_thai.textContent = "ธนาคาร" + bankName;
        let req = getReq(bankName,range_selector.value);
        let age_input = document.getElementById("age-input");
        //console.log(req);
        if(parseFloat(principal)>=parseFloat(req)){
            let tick = document.getElementById("tick");
            let req_display = document.getElementById("req-amount ");
            req_display.textContent
            tick.src = "images/Tick.png";
        }
        else{
            tick.src = "images/Tack.png";
        }
        if(parseFloat(principal)>=parseFloat(req)){
            let tick = document.getElementById("tick");
           
            tick.src = "images/Tick.png";
        }
        else{
            tick.src = "images/Tack.png";
          
        }
        if(age_input.value>=20){
            
            let tick = document.getElementById("tick2");
                tick.src = "images/Tick.png"
          
        }
        else{
            let tick = document.getElementById("tick2");
            tick.src = "images/Tack.png"
        }
        let req_display = document.getElementById("req-amount ");
        req_display.textContent = req;

    
    
   if(banking_type.value == "saving"){
        let startDate = document.getElementById("start-date").value;
        let endDate = document.getElementById("end-date").value;
        let input_money = document.getElementById("intInput").value;
        let interest_display = document.getElementById("sum-display");
        let interest_display_non = document.getElementById("in-display");

        let interest_array = picking(range_selector.value);
        let interest_rate = getInterest(interest_array,bankName)/100;

       
        let principal = parseFloat(input_money);
        
      
        let result = calculateInterest(startDate,endDate,principal,interest_rate);
        let float_result = parseFloat(result);
        let final_sum = (principal + float_result).toFixed(2)
 interest_display.textContent = final_sum;
 interest_display_non.textContent = float_result.toFixed(2);
        //console.log(principal + result);
    }


    if(banking_type.value == "fix"){
       
        let input_money = document.getElementById("intInput").value;
        let interest_display = document.getElementById("sum-display");
        let interest_display_non = document.getElementById("in-display");

        let interest_array = picking(range_selector.value);
        let interest_rate = getInterest(interest_array,bankName)/100;

       
        let principal = parseFloat(input_money);
        
      
        let result = fix_interestCalculating(principal,interest_rate);
        let float_result = parseFloat(result);
        let final_sum = (principal + float_result).toFixed(2)
 interest_display.textContent = final_sum;
 interest_display_non.textContent = float_result.toFixed(2);
        //console.log(principal + result);
    }
    
  
}




























else if(type == 1){
    if(bankName == "ธกส."){
        let detail = document.getElementById("detail");
        
        let detail_content = BankDetail[bankName][0];
        detail.textContent = detail_content;
        const baacInterest = [0.350,1.200,1.250,1.800,1.950,3.000];
        bank_image.src = "images/BAAC.png";
        req_header.textContent = "BAAC bank";
        req_header_thai.textContent = "ธนาคารธกส.";
        if(banking_type.value == "saving"){

            let startDate = document.getElementById("start-date").value;
        let endDate = document.getElementById("end-date").value;
        let input_money = document.getElementById("intInput").value;
        let interest_display = document.getElementById("sum-display");
        let interest_display_non = document.getElementById("in-display");

       
        let principal = parseFloat(input_money);
        let interestrate;
        let req;
        if(person_type.value == "บุคคลธรรมดา"){
            interestrate = baacInterest[0];
            req = 1000;
            
        }
        else if(person_type.value == "เกษตรกร"){
            interestrate = baacInterest[5];
            req = 50;
        }
        checkreq(req,principal);
        
 
        let result = calculateInterest(startDate,endDate,principal,interestrate/100);
        let float_result = parseFloat(result);
        let final_sum = (principal + float_result).toFixed(2);
 interest_display.textContent = final_sum;
 interest_display_non.textContent = float_result.toFixed(2);
 let pc_display = document.getElementById("interest-rate");
 pc_display.textContent = interestrate.toFixed(3);
        }
        else if(banking_type.value == "fix"){
            let input_money = document.getElementById("intInput").value;
        let interest_display = document.getElementById("sum-display");
        let interest_display_non = document.getElementById("in-display");
        let principal = parseFloat(input_money);
        let interestrate;
        if(range_selector.value == "3"){
            interestrate = baacInterest[1];
        }
        else if(range_selector.value == "6"){
            interestrate = baacInterest[2];
        }
        else if(range_selector.value == "12"){
            interestrate = baacInterest[3];
        }
        else if(range_selector.value == "24"){
            interestrate = baacInterest[4];
        }

        let req = 500;
        checkreq(req,principal);
        let result = fix_interestCalculating(principal,interestrate/100);
        let float_result = parseFloat(result);
        let final_sum = (principal + float_result).toFixed(2)
 interest_display.textContent = final_sum;
 interest_display_non.textContent = float_result.toFixed(2);
 let pc_display = document.getElementById("interest-rate");
 pc_display.textContent = interestrate.toFixed(3);

        }
      
    }
    else if(bankName == "ออมสิน"){
        let detail = document.getElementById("detail");
        
        let detail_content = BankDetail[bankName][0];
        detail.textContent = detail_content;
        const baacInterest = [0.30,1.20,1.30,1.70,2.10]
        bank_image.src = "images/GSB.png";
        req_header.textContent = "GSB bank";
        req_header_thai.textContent = "ธนาคารออมสิน";
        if(banking_type.value == "saving"){
            let startDate = document.getElementById("start-date").value;
            let endDate = document.getElementById("end-date").value;
            let input_money = document.getElementById("intInput").value;
            let interest_display = document.getElementById("sum-display");
            let interest_display_non = document.getElementById("in-display");
    
            let principal = parseFloat(input_money);
            let req = 1000;
            checkreq(req,principal);

            let interestrate = baacInterest[0];
            let result = calculateInterest(startDate,endDate,principal,interestrate/100);
        let float_result = parseFloat(result);
        let final_sum = (principal + float_result).toFixed(2);
 interest_display.textContent = final_sum;
 interest_display_non.textContent = float_result.toFixed(2);
 let pc_display = document.getElementById("interest-rate");
 pc_display.textContent = interestrate.toFixed(3);

        }
        else if(banking_type.value == "fix"){
            let input_money = document.getElementById("intInput").value;
            let interest_display = document.getElementById("sum-display");
            let interest_display_non = document.getElementById("in-display");
            let principal = parseFloat(input_money);
            let interestrate;
            if(range_selector.value == "3"){
                interestrate = baacInterest[1];
            }
            else if(range_selector.value == "6"){
                interestrate = baacInterest[2];
            }
            else if(range_selector.value == "12"){
                interestrate = baacInterest[3];
            }
            else if(range_selector.value == "24"){
                interestrate = baacInterest[4];
            }
            let req  = 500;
            checkreq(req,principal);
            let result = fix_interestCalculating(principal,interestrate/100);
        let float_result = parseFloat(result);
        let final_sum = (principal + float_result).toFixed(2)
 interest_display.textContent = final_sum;
 interest_display_non.textContent = float_result.toFixed(2);
 let pc_display = document.getElementById("interest-rate");
 pc_display.textContent = interestrate.toFixed(3);
        }
    }




}





























let sum_display = document.getElementById("sum-display");
let in_display = document.getElementById("in-display");
let sumtext =  comma_text(sum_display.textContent);

sum_display.textContent = sumtext;


in_display.textContent = comma_text(in_display.textContent);
  
    const textContainer = document.querySelector('.result_text_div');
    const textContainer2 = document.querySelector('.indisplay');

    resizeTextToFit(textContainer);
    resizeTextToFit2    (textContainer2);

    change_color();
}





function checkreq(req,principal){
    let req_display = document.getElementById("req-amount ");
    req_display.textContent = req;
    if(parseFloat(principal)>=parseFloat(req)){
        let tick = document.getElementById("tick");
       
        tick.src = "images/Tick.png";
    }
    else{
        tick.src = "images/Tack.png";
    }
    if(parseFloat(principal)>=parseFloat(req)){
        let tick = document.getElementById("tick");
       
        tick.src = "images/Tick.png";
    }
    else{
        tick.src = "images/Tack.png";
      
    }
    if(age_input.value>=20){
        
        let tick = document.getElementById("tick2");
            tick.src = "images/Tick.png"
      
    }
    else{
        let tick = document.getElementById("tick2");
        tick.src = "images/Tack.png"
    }
}

function calculateInterest(startDate, endDate, principal, interestRate) {
    let start = new Date(startDate); // Starting deposit date
    const end = new Date(endDate);   // Ending deposit date
    let currentPrincipal = principal; // Current principal to track interest
    let totalInterest = 0;            // Total accumulated interest
    let iterationCount = 0;           // Safeguard against infinite loops
  
    // Helper function to calculate interest for a given period
    function calculatePeriodInterest(periodStart, periodEnd, principal, rate) {
        const timeDifference = periodEnd - periodStart; // Time difference in ms
        const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
        const interest = (principal * rate * totalDays) / 365; // Interest calculation
        return interest;
    }
  
    // Loop through each period based on cutoff dates (30 Jun, 31 Dec)
    while (start < end) {
        let nextCutOff = new Date(start);

        // Determine the next cutoff date (June 30 or December 31)
        if (nextCutOff.getMonth() < 5) { // Before June 30
            nextCutOff.setMonth(5);  // Set to June
            nextCutOff.setDate(20);  // Set to 30th June
        } else { // After June 30, set to December 31
            nextCutOff.setMonth(11); // Set to December
            nextCutOff.setDate(31);  // Set to 31st December
        }

        // If the next cutoff is later than the end date, use the end date
        if (nextCutOff > end) {
            nextCutOff = end;
        }

        // Calculate the interest for this period
        const periodInterest = calculatePeriodInterest(start, nextCutOff, currentPrincipal, interestRate);
        totalInterest += periodInterest; // Add the interest to the total
        currentPrincipal += periodInterest; // Add the interest to the principal for the next period

        //console.log(`Start: ${start}, Next CutOff: ${nextCutOff}, Period Interest: ${periodInterest.toFixed(2)}, Total Interest: ${totalInterest.toFixed(2)}`);

        // Update start date to the next cutoff (next period)
        start = new Date(nextCutOff);
        start.setDate(start.getDate() + 1); // Move to the next day after the cutoff

        // Increment iteration counter and check safeguard
        iterationCount++;
        if (iterationCount > 1000) { // Arbitrary high limit to prevent infinite loop
            console.error('Loop iteration limit exceeded!');
            break;
        }
    }

    return totalInterest.toFixed(3); // Return the total interest, rounded to three decimal places
}

function fix_interestCalculating(principal,rate){
    let months = document.getElementById("months");
    let totalDays = parseInt(months.textContent);
    let interest = (principal * rate * totalDays) / 365; // Interest calculation
    //console.log(interest);
    return interest
}







function change_color(){
    let button = document.getElementById(current_bank);
    if (prev_bank != ""){
        let prev_button = document.getElementById(prev_bank);
        prev_button.style.backgroundColor= "#ccdedc"; 
        prev_button.querySelector('.bank-name').style.color = "#07260e"; 
    }
    
    button.style.backgroundColor= "#24645c"; 
  
    button.querySelector('.bank-name').style.color = "white"; 
    setTimeout(() => {
        button.style.transform = "scale(1)"; 

       
        setTimeout(() => {
            button.style.transform = "";
          
        }, 150);
    }, 0);
  
}


const bankValues = [
    "กรุงไทย",
    "ไทยพาณิชย์",
    "กรุงเทพ",
    "กรุงศรีอยุธยา",
    "ธกส.",
    "กสิกรไทย",
    "ทหารไทยธนชาต",
    "ออมสิน",
    "ยูโอบี",
    "ซีไอเอ็มบี ไทย",
    "เกียรตินาคินภัทร",
    "แลนด์ แอนด์ เฮ้าส์"
];
const Detail = {
  
}
const mocker = [0];


async function fetchData(bankName) {
    let stack = 0;
    const endDate = new Date().toISOString().split('T')[0];
    for(let i = 1;i<5;i++){
         let startDate = new Date(new Date().setDate(new Date().getDate() - i)).toISOString().split('T')[0];
    let url = `https://apigw1.bot.or.th/bot/public/DepositRate/v2/deposit_rate_/?start_period=${startDate}&end_period=${endDate}`;
    let response = await fetch(url, {
        headers: {
            'X-IBM-Client-Id': 'e2e66e15-7bd0-477e-8bc4-77624fc8ec30',
            'accept': 'application/json'
        }
    });
     data = await response.json();
    
    
       
            if(data.result?.data?.data_detail.length > 13){  
              
          
             
                console.log(`Fetching completed at:${i} tries `)
                console.log(data);
                return data
    
              
            }
       
            else if(k = 11){
                console.log("fetching failed");
               console.log(data);
               console.log(stack);
            } 
          
       
    
        
       
       
           
      
       
    
    
     
    }
   
  
}
async function mapping(data,bankName) {
    const filteredData = await data.result.data.data_detail.filter(entry => entry.bank_name_th.includes(bankName));
    if (filteredData.length > 0) {
        const info = filteredData.map(entry => `${entry.period}, ${entry.bank_name_th}, ${entry.bank_name_eng}, ${entry.saving_min}, ${entry.saving_max}, ${entry.fix_3_mths_min}, ${entry.fix_3_mths_max}, ${entry.fix_6_mths_min}, ${entry.fix_6_mths_max}, ${entry.fix_12_mths_min}, ${entry.fix_12_mths_max}, ${entry.fix_24_mths_min}, ${entry.fix_24_mths_max}` );
        let info_array = [];
       
        return info;
    }
    else {
        return mocker;
    }




}


var max = 0;
var max_bank = "";

const point_list = [];

const bank_list = ["ธกส."];

const en_bank_name = [];


const Interest_array = {
    interst_list_saving_min : [0.35],
    interest_list_saving_max  : [0.35],
    fix_interest_3_min  : [],
    fix_interest_3_max  : [],
    fix_interest_6_min  : [],
    fix_interest_6_max  : [],
    fix_interest_12_min  : [],
    fix_interest_12_max  : [],
    fix_interest_24_min  : [],
    fix_interest_24_max  : []
};

let interst_list_saving_min = Interest_array["interst_list_saving_min"];
let interest_list_saving_max = Interest_array["interest_list_saving_max"];
let fix_interest_3_min =Interest_array["fix_interest_3_min"];
let fix_interest_3_max =Interest_array["fix_interest_3_max"];
let fix_interest_6_min =Interest_array["fix_interest_6_min"];
let fix_interest_6_max =Interest_array["fix_interest_6_max"];
let fix_interest_12_min=Interest_array["fix_interest_12_min"];
let fix_interest_12_max =Interest_array["fix_interest_12_max"];
let fix_interest_24_min =Interest_array["fix_interest_24_min"];
let fix_interest_24_max =Interest_array["fix_interest_24_max"];




















function expand(){
    const content = document.querySelector(".Result");

    if (content.style.height === "0px" || content.style.height === "") {
        // Calculate the full height of the content
        content.style.width = "70%";

    }
       
   
}

async function maxing(element){
    for (const key in Interest_array) {
        if (Object.hasOwn(Interest_array, key)) {
            Interest_array[key] = []; 
        }
    }
    bank_list.length = 0;
    let interst_list_saving_min = Interest_array["interst_list_saving_min"];
    let interest_list_saving_max = Interest_array["interest_list_saving_max"];
    let fix_interest_3_min =Interest_array["fix_interest_3_min"];
    let fix_interest_3_max =Interest_array["fix_interest_3_max"];
    let fix_interest_6_min =Interest_array["fix_interest_6_min"];
    let fix_interest_6_max =Interest_array["fix_interest_6_max"];
    let fix_interest_12_min=Interest_array["fix_interest_12_min"];
    let fix_interest_12_max =Interest_array["fix_interest_12_max"];
    let fix_interest_24_min =Interest_array["fix_interest_24_min"];
    let fix_interest_24_max =Interest_array["fix_interest_24_max"];
    en_bank_name.length = 0;
    let splited_data = [];
    //console.log(person_type.value);
    //console.log(banking_type.value);
    const fetched_data = await fetchData();
    let range_selector = document.getElementById("range-selector");
    for (let i = 0; i < bankValues.length; i++) {
       
        all_data = await mapping(fetched_data,bankValues[i]);
        if (all_data[0] != 0){
            splited_data = all_data[0].split(", ");

         
            point_list.push(0);
            bank_list.push(splited_data[1]);
            Interest_array["interst_list_saving_min"].push(parseFloat(splited_data[3]));
            Interest_array["interest_list_saving_max"].push(parseFloat(splited_data[4]));
            Interest_array["fix_interest_3_min"].push(parseFloat(splited_data[5]));
            Interest_array["fix_interest_3_max"].push(parseFloat(splited_data[6]));
            Interest_array["fix_interest_6_min"].push(parseFloat(splited_data[7]));
            Interest_array["fix_interest_6_max"].push(parseFloat(splited_data[8]));
            Interest_array["fix_interest_12_min"].push(parseFloat(splited_data[9]));
            Interest_array["fix_interest_12_max"].push(parseFloat(splited_data[10]));
            Interest_array["fix_interest_24_min"].push(parseFloat(splited_data[11]));
            Interest_array["fix_interest_24_max"].push(parseFloat(splited_data[12]));
            en_bank_name.push(splited_data[2]);
        }
        
    }
    //console.log(bank_list)
    //console.log(fix_interest_3_min);
    //console.log(fix_interest_3_max);
    //console.log(fix_interest_6_min);
    //console.log(fix_interest_6_max);
    //console.log(fix_interest_12_min);
    //console.log(fix_interest_12_max);
    //console.log(fix_interest_24_min);
    //console.log(fix_interest_24_max);
    //console.log(max + " "+ max_bank);
    //console.log(en_bank_name);
    const ranges = days_calculating();
      
    let dateBlock1 = document.getElementById("date-1");
    let dateBlock2 = document.getElementById("date-2");
    dateBlock1.textContent = inputField.value;
    if(banking_type.value == "saving"){
        dateBlock2.textContent = inputField2.value;
    }
    else if(banking_type.value == "fix"){
        dateBlock2.textContent = ranges[1];
    }
    

     
    let days_block = document.getElementById("months");
    days_block.textContent =ranges[0];
    
    //console.log(banking_type.value);
    //console.log(person_type);
       top_picking();
       expand();
       
        

       
     
   

    

}





function top_picking(){
    if (person_type.value == "เกษตรกร" && banking_type.value == "saving"){
        let top_pick = document.getElementById("ธกส.");
        scaleDown(top_pick,1);
    }
    else {
        let top_pick = document.getElementById(get_score());
        scaleDown(top_pick,0);
    }
    
}


















const range_selector = document.getElementById("range-selector");



let premax_interest = [];
let premax_interest_saving = [];



function picking(month_range){
  
    
    premax_interest.splice(0, premax_interest.length);
    premax_interest_saving.splice(0, premax_interest.length);
    let range_selector = document.getElementById("range-selector");
    let interest_pick;
    let Money = document.getElementById('intInput');
    if(banking_type.value == "saving" /*&& person_type.value == "บุคคลธรรมดา"*/){
        for(let j = 0;j<bank_list.length;j++){
            if(bank_list[j] == "กรุงเทพ"){
                if(Money.value < 10000000){

                    interest_pick = Interest_array["interst_list_saving_min"];
                    premax_interest_saving[j] = interest_pick[j];
               
                }
                else if(Money.value >= 10000000){
                   
                    interest_pick = Interest_array["interest_list_saving_max"];
                    premax_interest_saving[j] = interest_pick[j];
                }
                

            }
            else{
               
                    interest_pick = Interest_array["interst_list_saving_min"];
                    premax_interest_saving[j] = interest_pick[j];
            }
        }
    return premax_interest_saving;
    }
    if(banking_type.value == "fix" /*&& person_type.value == "บุคคลธรรมดา"*/){
        for(let i = 0;i<bank_list.length;i++){
            if(bank_list[i] == "กสิกรไทย"){
                if(Money.value < 10000000){
                    let array_name = `fix_interest_${month_range}_min`;
                    interest_pick = Interest_array[array_name];
                    premax_interest[i] = interest_pick[i];
               
                }
                else if(Money.value >= 10000000){
                    let array_name = `fix_interest_${month_range}_max`;
                    interest_pick = Interest_array[array_name];
                    premax_interest[i] = interest_pick[i];
                }
                

            }
            else if(bank_list[i] == "เกียรตินาคินภัทร"){
                if(Money.value < 100000000){
                    let array_name = `fix_interest_${month_range}_max`;
                    interest_pick = Interest_array[array_name];
                    premax_interest[i] = interest_pick[i];
                }
                else{
                    let array_name = `fix_interest_${month_range}_min`;
                    interest_pick = Interest_array[array_name];
                    premax_interest[i] = interest_pick[i];
                }

            }
            else{
                let array_name = `fix_interest_${month_range}_min`;
                    interest_pick = Interest_array[array_name];
                    premax_interest[i] = interest_pick[i];
              
            }
          
        }
        return premax_interest;
        }
    

}






const saving_req_min = [0,0,500,500,0,0,100,100,0,100];

const array_fix_Req = {
    fix_req_min_3 :     [1000,10000,2000,1000,1000,1000,1000,1000,0,1000],
    fix_req_min_6 :     [1000,10000,2000,1000,1000,1000,1000,1000,0,1000],
    fix_req_min_12 :    [1000,10000,2000,1000,1000,1000,1000,1000,0,1000],
    fix_req_min_24 :    [1000,10000,2000,1000,1000,1000,1000,1000,0,1000]
}






function getReq(bank_name,period){
    if(banking_type.value == "saving" /*&& person_type.value == "บุคคลธรรมดา"*/){
        let req_saving = saving_req_min;
       
        return req_saving[bank_list.indexOf(bank_name)];

    }
    else if(banking_type.value == "fix" /*&& person_type.value == "บุคคลธรรมดา"*/){
        let fix_req_name = `fix_req_min_${period}`;
                    fix_req = array_fix_Req[fix_req_name];
                    return fix_req[bank_list.indexOf(bank_name)]
    }
}

const age_input = document.getElementById("age-input");



function get_score(){
    let score_board = [0,0,0,0,0,0,0,0,0,0];
    let input_money = document.getElementById("intInput");
    //console.log(picking(range_selector.value));
    final_interest = picking(range_selector.value);
    max_interest = Math.max(...final_interest);
   
    for(let i = 0;i<bank_list.length;i++){
        let req = getReq(bank_list[i],range_selector.value);
        if (final_interest[i] == max_interest){
            score_board[i] += 1;
        }
        if(input_money.value >= req){
            score_board[i] += 1;
        }
        if(age_input.value >= 20){
            score_board[i] += 1;
        }

    }

    //console.log("ธนาคารเเนะนำคือ ธนาคาร" + bank_list[score_board.indexOf(Math.max(...score_board))]);
    return bank_list[score_board.indexOf(Math.max(...score_board))];
}



function getInterest(Interest,bank_name){
    for(let i = 0 ; i <bank_list.length;i++){
        return Interest[bank_list.indexOf(bank_name)];
    }
}
























const inputField = document.getElementById("start-date");
const inputField2 = document.getElementById("end-date");


inputField.addEventListener('input', function() {
    const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");

    let minDate = new Date(startDate.value)
    minDate.setDate(minDate.getDate()+1);
   
    endDate.setAttribute("min",minDate.toISOString().split("T")[0]);
});


inputField2.addEventListener('input', function() {
    const startDate = document.getElementById("start-date");
    const endDate = document.getElementById("end-date");
    let maxDate = new Date(endDate.value)
    maxDate.setDate(maxDate.getDate()-1);
   
    startDate.setAttribute("max",maxDate.toISOString().split("T")[0]);


});





function days_calculating(){
    
    const startDate = document.getElementById("start-date").value;
            const endDate = document.getElementById("end-date").value;

            if (startDate && endDate && banking_type.value == "saving") {

                const d1 = new Date(startDate);
                const d2 = new Date(endDate);

       
                const diffInMilliseconds = Math.abs(d2 - d1);


                const daysDifference = diffInMilliseconds / (1000 * 60 * 60 * 24);
                return [daysDifference,0];
            }
            else if (startDate && banking_type.value == "fix"){
                const new_startDate = new Date(startDate); // Replace with your start date


                    const futureDate = new Date(new_startDate);
                    futureDate.setMonth(futureDate.getMonth() + parseInt(range_selector.value));
                    futureDate.setDate(startDate.split("-")[2]);
                    let diffInMilliseconds = Math.abs(futureDate - new_startDate );
                    let daysDifference = diffInMilliseconds / (1000 * 60 * 60 * 24);
                    let new_date = futureDate.toISOString().split("T")[0] 
                    return [daysDifference,  new_date];


                  

                
            }
        
}


function final_process(){
    let req_select =  document.querySelectorAll(".req-select")
    let check = 0;
    for (let i = 0; i < req_select.length; i++) {
        const element = req_select[i];
        if(element.value != "" ){
            check += 1;
            //console.log(element);
        }
       
    }
    if (check == req_select.length){

        if(banking_type.value == "saving"){
            let req_select =  document.querySelectorAll(".saving-select")
            let check = 0;
            for (let i = 0; i < req_select.length; i++) {
                const element = req_select[i];
                if(element.value != ""){
                    check += 1;

                }
                if(check == req_select.length){
                   success_input();
                  
                }
                else{
                 
                    miss_info();
                  
                }
}
        }


        else if(banking_type.value == "fix"){
            let req_select =  document.querySelectorAll(".fix-select")
            let check = 0;
            for (let i = 0; i < req_select.length; i++) {
                const element = req_select[i];
                if(element.value != ""){
                    check += 1;

                }
                if(check == req_select.length){
                   success_input();
                   
                }
                else{
                    
                    miss_info();
                   
                    
                }


            }
        }

        
    } 
    else{
    
        miss_info();
        
        
    }
}
let time = 0;
function miss_info(){
    let text = document.getElementById("status-text");
    text.textContent = "*กรุณากรอกข้อมูลให้ครบภ้วน*";
    text.style.color = "red";
}
function success_input(){
    let text = document.getElementById("status-text");
    text.textContent = "";
    time += 1;
    maxing();
}

document.querySelectorAll('.styled-select').forEach(input => {
    input.addEventListener('change', function () {
       let checkbox = document.getElementById("checkingbox");
       if(checkbox.checked && time >0){
        final_process();
        //console.log('Value changed to:', this.value);
       }
       else{
        //console.log(checkbox.value);
       }
        // Your function here
    });
});

function comma_text(text){
    let count = 0;
    let newtext = text.split(".")[0];
    let dot = "";
    if (text.split(".")[1] != ""){
        dot = "." + text.split(".")[1];
    }
    let first_letter = text[0];
    
    for (let i = 0  ; i<100 ; i++){
        let text_lenght = newtext.length;
        let current_index = (text_lenght)-i 
        count += 1;
        if(count == 3 &&  newtext[current_index-2] != undefined){
            newtext =    newtext.slice(0,(current_index-1))+ ","  + newtext.slice(current_index-1,newtext.length);

            count = 0;
            i += 1

        }
        else if(newtext[current_index-2] == undefined){
            
            break;
        }

    }
    newtext = newtext+dot;
    return newtext;
    console.log(newtext);

}

comma_text("1000");


let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;

  if (currentWidth !== lastWidth || currentHeight !== lastHeight) {
  
    const textContainer = document.querySelector('.result_text_div');
    const textContainer2 = document.querySelector('.indisplay');

    resizeTextToFit(textContainer);
    resizeTextToFit2(textContainer2);
  }
});