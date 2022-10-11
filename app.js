const sname = document.querySelector("#snameInput").value;
const fname = document.querySelector("#fnameInput").value;
let loading = false;

if (loading === true) {
  document.querySelector("button").textContent = "Loading";
}

const getRates = () => {
  loading = true;
  axios
    .get("https://love-calculator.p.rapidapi.com/getPercentagee", {
      params: { sname, fname },
      headers: {
        "X-RapidAPI-Key": "7bcad992ebmsh2045575058752a9p178d0ajsnd5053b41ab43",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    })
    .then((res) => {
      console.log(res, loading);

      document.querySelector("#relationshipPercentage").innerHTML = `<div>
        The strength of your relationship is ${res.data.percentage}%
      </div>`;

      document.querySelector("#relationshipMessage").innerHTML = `<div>
      ${res.data.result}
      </div>`;

      loading = false;

      if (loading === true) {
        document.querySelector("button").textContent = "Loading";
      } else {
        document.querySelector("button").textContent = "Check Rates";
      }
    })
    .catch((err) => {
      console.log(err);
      loading = false;
    });

  if (loading === true) {
    document.querySelector("button").textContent = "Loading";
  } else {
    document.querySelector("button").textContent = "Check Rates";
  }
};
