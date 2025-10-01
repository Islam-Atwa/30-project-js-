// 1- toJSON

let room = {
  number: 23,
  toJSON() { return this.number; }
};

JSON.stringify(room); // 23
// result : الكائن اتحول للرقم 23 بدل ما يتحول كائن

// 2-JSON.parse
// الي كائن[JSON]بتحول نص 

let str = '[0,1,2,3]';
let arr = JSON.parse(str);
console.log(arr[1]); // 1


// Proplem Dates
let Str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);

console.log(typeof meetup.date); // "string"
// result : التاريخ اتحول لنص مش لكائن تاريخ

// حل المشكلة

let strr = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetupp = JSON.parse(str, function(key, value) {
  if (key === "date") return new Date(value);
  return value;
});

console.log(meetup.date.getDate()); // شغال كـ Date


// الخلاصه
// toJSON → تتحكم في إزاي الكائن يتحول لـ JSON.
// JSON.parse → ممكن تاخد دالة لتحويل القيم أثناء التحويل من نص لكائن.
// JSON.stringify → ممكن تاخد دالة لتحويل القيم أثناء التحويل من كائن لنص.
// JSON.stringify → ممكن تاخد وسيط ثالث (space) للتحكم في تنسيق النص الناتج.
// JSON.stringify → ممكن تاخد وسيط ثاني (replacer) لتحديد إيه الخصائص اللي تتحول لنص.
// JSON.stringify → ممكن تتعامل مع المراجع الدائرية (circular references) عن طريق تجاهلها في دالة replacer.



// JSON.parse + reviver → تتحكم في إزاي النص يتحول تاني لكائن JavaScript (مع تحويل أنواع خاصة زي التواريخ).




