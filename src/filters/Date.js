export default function (date){
    const time = new Date(date*1000);
    // return time.toLocaleDateString();
       var tYear = time.getFullYear();
       var tMonth = time.getMonth()+1;
       var tDate = time.getDate();
       var tTime = `${tYear}/${tMonth}/${tDate}`
       return tTime;
};