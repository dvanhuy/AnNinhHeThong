function getValueInput(id){
    const result = document.getElementById(id)
    return result.value 
}
const resultsc = document.getElementsByClassName("result")[0]
const buttontinh = document.getElementsByClassName("button_tinh")[0]
buttontinh.addEventListener("click",()=>{
    const sop = getValueInput("sop")
    const soq = getValueInput("soq")
    const soe = getValueInput("soe")
    const som = getValueInput("som")

    const n = sop * soq;
    const pi_n = (sop-1) * (soq-1);
    let sod;
    result = ""
    result +=  "n = "+ n
    result +=  "<br />∅(n) = "+ pi_n
    result +=  "<br />e = "+ soe
    result +=  "<br />d = {"
    for (let i = 0; i <= n; i++) {
        if (i*soe % pi_n == 1) result +=  i+" ; "
    }
    for (let i = 0; i <= n; i++){
        if (i*soe % pi_n == 1) {
            sod = i
            break
        }
    }
    result += "} (Lấy số nhỏ nhất)"
    result += "<br />𝑃𝑈 = {"+soe+", "+n+"}"
    result += "<br />𝑃𝑅 = {"+sod+", "+n+"}"
    soC = som**soe % n;
    result += "<br />Với M = "+som+" thì C = M^e mod n = "+soC
    let soMlan2 = bigInt(soC).pow(sod).mod(n)
    console.log(soC,sod,n);
    result += "<br />Thử lại thì M ="+soC+"^"+sod+" mod "+n+" = "+ soMlan2 + "(Nên tính lại)"
    resultsc.innerHTML = result
})