// const prevProfit = 1170;
// const main = 6300;

// const a = ((prevProfit/main)*100);
// const main2 = 14050;
// const result = parseInt(((main2/100)*a))

// console.log(result)

const calulateFun = () => {
    const prevProfit = parseInt(document.getElementById('prevProfit').value);
    const main1 = parseInt(document.getElementById('main1').value);
    const main2 = parseInt(document.getElementById('main2').value);


    const a = ((prevProfit/main1)*100);
    const result = parseInt((main2/100)*a);

    if(isNaN(result)){
        document.getElementById('showCase1').innerHTML="Please Enter a Valid Number";
        document.getElementById('showCase2').innerHTML="";
    }else{
        document.getElementById('showCase2').innerHTML=result;
        document.getElementById('showCase1').innerHTML="";
    }

    console.log()



    // console.log(prevProfit)
    // console.log(main1)
    // console.log(main2)
}
