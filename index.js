import axios from "axios";

const apiUrl = "https://alternative.me/api/crypto/fear-and-greed-index/history";
const days = 1;
const apiBody = {
  days: days,
};

const checkIndex = (index) => {};

axios.post(apiUrl, apiBody).then((res) => {
  const index = res.data.data.datasets[0].data[0];
  checkIndex(index);
});
