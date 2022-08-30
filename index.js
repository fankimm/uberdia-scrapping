const axios = require("axios");
let count = 1
const getHtml = async () => {
  try {
    return await axios.get("https://diablo2.io/dclonetracker.php?sk=p&sd=d&hc=2&ladder=2");
  } catch (error) {
    console.error(error);
  }
};
const printResult=()=>{
    getHtml().then(res=>{
        console.log(`current count : ${count}`)
        const steps = res.data.match(/[0-6]\/6/gi).filter((_item,idx)=>idx%2===0)
        const result = steps.map((item,idx)=>{
            if(idx===0){
                return {
                    server:'america',
                    step:item
                }
            }
            if(idx===1){
                return {
                    server:'eu',
                    step:item
                }
            }
            if(idx===2){
                return {
                    server:'asia',
                    step:item
                }
            }
        })
        console.log(result);
        count++
    })
}
printResult()
setInterval(()=>{
   printResult() 
},60000)

