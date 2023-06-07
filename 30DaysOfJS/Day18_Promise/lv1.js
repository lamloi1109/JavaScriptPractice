// Promise Lời hứa
// give cho
// receive nhận
// activity hoạt động
// lead dẫn đến
// discontentment bất mãn
// common chung
// handle xử lý
// asynchronous bất đồng bộ
// operations
// handlers người xử lý / trình xử lý
// eventual cuối cùng
// failure
// synchronous đồng bộ
// immediately
// supply cung cấp
// pending
// initial
// fulfilled hoàn thành
// rejected từ chối
// meaning nghĩa là
// completed hoàn thành
// associated có liên quan
// queued xếp hàng
// corresponding
// attached được đính kèm
// race chạy đua
// completing hoàn thành

// CallBack
// notice để ý
// followed
// parenthesis dấu ngoặc đơn
// resolve giải quyết
// settled đã giải quyết xong
// across ở trên
// familiar quen thuộc
// seem có vẻ
// anyone
// powerful mạnh mẽ
// flexible linh hoạt
// feature tính năng
// demonstrate chứng minh
// accessing truy cập
// elegant tao nhã
// real thật
// kept đã giữ
// reached
// settle
// ahead phía trước
// greatness sự vĩ đại
// brain não bộ
// muscles cơ bắp

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

async function fetchCountriesAPI(api) {
  try {
    const countriesAPI = api;
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.log(error);
  }
}

console.log(fetchCountriesAPI(countriesAPI));
