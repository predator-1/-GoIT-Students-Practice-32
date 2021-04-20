/**
 * Исправь ошибки и модифицируй
 */

const myself = {
  myName: 'Anna',
  myNickNames: ['Kitty', 'Dorsy'],
  printMyNickNames: function () {
    for (const nickName of this.myNickNames) {
      // const print = nick =>
      //   console.log(this.myName + ' is also known as ' + nick);

      const print = function (nick) {
        console.log(this.myName + ' is also known as ' + nick);
      };
      print.call(this, nickName);
    }
  },
};

myself.printMyNickNames();

// this.myNickNames.forEach(
//   // function (nickName) {
//   //   console.log(this.myName + ' is also known as ' + nickName);
//   // }.bind(this),
//   nickName => console.log(this.myName + ' is also known as ' + nickName),
// );
