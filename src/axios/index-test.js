// var test= {
//     t:10,
//     add(){
//         this.t++
//     },
//     show(){
//         console.log(this.t)
//     }
// }
// export default test

var t = 10;

  function add(){
      t++
  }
  function show(){
      console.log(t)
  }

module.exports = {
  add,
  show
}
