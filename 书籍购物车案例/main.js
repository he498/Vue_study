const app = new Vue({
  el:'#app',
  data:{
    books: [
      {
        id: 1,
        name:'《算法导论》',
        date: '2006-9' ,
        price: 85.00,
        count: 1,
      },
      {
        id: 2,
        name :'《UNIX编程艺术》 ',
        date: '2006-2' ,
        price: 59.00,
        count: 1,
      },
      {
        id: 3,
        name :'《编程珠玑》',
        date: '2008-10' ,
        price: 39.00,
        count: 1,
      },
      {
        id: 4,
        name:'《代码大全》',
        date: '2006-3' ,
        price: 128.00,
        count: 1,
      },
    ]
  },
  methods:{
    // getFinalPrice(price){
    //   return '¥' + price.toFixed(2)
    // }
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandle(index){
      this.books.splice(index,1);
    },
  },
  computed:{
    totalPrice(){
      // 1.普通循环
      // let totalprice = 0;
      // for (let i = 0; i < this.books.length;i++){
      //   totalprice += this.books[i].price * this.books[i].count;
      // }
      // return totalprice;

      // 2.for (let i in this.books)
      // let totalprice = 0;
      // for (let i in this.books){
      //   totalprice += this.books[i].price * this.books[i].count;
      // }
      // return totalprice;

      // 3.for (let i of this.books)
      // let  totalPrice = 0;
      // for (let item of this.books){
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice;

      // 高阶函数：reduce
      return this.books.reduce(function (preValue,book) {
        return preValue + book.price * book.count;
      },0)
    }
  },
  filters:{
    showPrice(price){
      return '¥' + price.toFixed(2);
    }
  },
})

const nums = [10,20,111,222,333,555,40,50]

//filter/map/reduce

//filter
//filter中的回调函数有一个要求：必须返回一个boolean值
//true:当返回true时，函数内部会自动将这次回调的n计入到新数组中
//false:当返回为false是内部会过滤掉此次n
// let newNums = nums.filter(function (n) {
//   return n < 100;
// })
// //map
// let newNums2 = newNums.map(function () {
//   return n * 2;
// })
// //reduce
// //reduce作用对数组中的所有内容进行汇总
// let total = newNums2.reduce(function(prevValue,n) {
//   return preValue + n;
// },0)
//
// //简便写法：
// let total = nums.filter(function(n) {
//   return n < 100
// }).map(function(n) {
//   return n * 2
// }).reduce(function(prevValue,n) {
//   return prevValue + n
// },0)
// //究极写法：
// let tatal2 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n);

// //需求一：取出所有小于100的数字：
// let newnums=[]
// for (let n of nums) {
//   if (n < 100){
//     newnums.push(n)
//   }
// }
// //需求二：将所有小于100的数字进行转化：全部乘以2
// let newnums2=[]
// for(let n of newnums){
//   newnums2.push(n * 2)
// }
// //需求三：将所有newnums2数字相加得结果
// let total = 0
// for(let n of newnums2){
//   total += n;
// }
