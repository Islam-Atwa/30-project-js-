// الهدف العام :
// تحويل كائن meetup إلى JSON نصي قابل للإرسال/التخزين


let room = { number: 23 }; // كائن يمثل قاعه

// يمثل مؤتمر
let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room  // مكان المؤتمر في القاعه
};

room.occupiedBy = meetup; // circular reference القاعه مشغولة بالمؤتمر

// stringify : replace object (meetup) to JSON text

// key : اسم الخاصية الحالية ()
let json = JSON.stringify(meetup, function replacer(key, value) {

  if (key === "occupiedBy") return undefined; // يتجاهل الخاصية occupiedBy
  return value; // يعيد القيمة كما هي
}, 2); // 2 : عدد المسافات البادئة في النص الناتج

console.log(json);
