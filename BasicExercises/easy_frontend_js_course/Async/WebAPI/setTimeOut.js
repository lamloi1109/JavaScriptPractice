setTimeout(() => {
    console.log('Lam Phuoc Loi');
},0);
console.log('Loi');
console.log('Lam');

// Dù cho waiting time của setTimeout là 0 ms thì nó cũng không thực thi ngay lập tức như chúng ta tưởng
// Thực chất Engine không thể hiẻu được setTimeout là gì nên nó đã đẩy setTimeout sang cho webAPI
// Sau khi hết waiting time setTImeout được đưa sang callback Queue
// Event Loop sẽ chuyển setTimeout sang CallStack để thực thi nếu như CallStack rỗng
// Vì vậy nó phải chạy hết các câu lệnh tuyến tính để làm rỗng callStack rồi mới chuyển các câu lệnh 
// asynchronous từ CallBack Queue sang call stack để thực thi

// Call Stack          ------------  webAPI ----------   CallBack Queue
// console.log('Loi');            | setTimeout(0ms)   |
// console.log('Lam');            |                   |

// Call Stack          ------------  webAPI ----------   CallBack Queue
// console.log('Loi');            |                   |  setTimeout(0ms)
// console.log('Lam');            |                   |

// Call Stack          ------------  webAPI ----------   CallBack Queue
//                                |                   |  setTimeout
// console.log('Lam');            |                   |

// Loi


// Call Stack          ------------  webAPI ----------   CallBack Queue
//                                |                   |  setTimeout
//                                |                   |

// Lam



// Call Stack          ------------  webAPI ----------   CallBack Queue
//    setTimeout   |                   |

// Lam Phuoc Loi