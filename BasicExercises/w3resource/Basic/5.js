// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
// w3resource
// ew3resourc
// cew3resour
// rcew3resou
// urcew3reso
// ourcew3res
// sourcew3re
// esourcew3r
// resourcew3
// 3resourcew
// w3resource

function rotateRightString(str) {
  if (typeof str !== 'string' || str === '') {
    return undefined;
  }

  setInterval(() => {
    let strList = str.split('');
    let finalString = str[str.length - 1];

    for (let i = strList.length - 1; i > 0; i--) {
      strList[i] = strList[i - 1];
    }
    strList[0] = finalString;
    str = strList.join('');
    console.log(str);
  }, 1000);
}

rotateRightString('w3resource');
