const stu = {
    name0: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name0= 'JACK';
        }
    }
}
// 你的代码
const {name0,address:{home : HOME},title:[ ,{year}]} = stu;
const [h1,h2,h3] = stu.hobby;
console.log(name0)  // MING
console.log(h1,h2,h3)  // play run sing
console.log(HOME)  // HENAN，这里的HOME就是大写哈
console.log(year)  // 2022