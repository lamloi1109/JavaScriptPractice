// Bài 110: Cần có tổng 200000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng. Lập chương trình để tìm ra tất cả các phương án có thể

function DoiTienMat(tienCanDoi = 200000) {
  for (let i = 0; i <= tienCanDoi / 1000; i++) {
    for (let j = 0; j <= tienCanDoi / 2000; j++) {
      for (let z = 0; z <= tienCanDoi / 5000; z++) {
        if (1000 * i + 2000 * j + 5000 * z === tienCanDoi) {
          console.log(`${i} x 1000 + ${j} x 2000 ${z} x 5000 = `, 1000 * i + 2000 * j + 5000 * z);
        }
      }
    }
  }
}
DoiTienMat();
// 200 Tờ 1k
// 100 Tờ 2k
// 40 tờ 5k
