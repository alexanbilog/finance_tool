//Function to transform NaN into a Number
function nN(val) {
    if (isNaN(val)) {
        return 0;
    } 
    return val;
}
// numCom is a function to put comma in thousand numbers
function numCom(x) {
    x=String(x).toString();
    var afterPoint = '';
    if(x.indexOf('.') > 0)
       afterPoint = x.substring(x.indexOf('.'),x.length);
    x = Math.floor(x);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    return otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree + afterPoint;
  }
     // Savings Calculator
     function computeSavings() {
         var amount = nN(document.getElementById('amount').value);
         var rate_of_return = nN(document.getElementById('rate').value);
         var years = nN(document.getElementById('years').value); 
         var result = (amount * Math.pow((1 + (rate_of_return/(1*100))), (1*years)));
         document.getElementById('title').innerHTML = "Your potential compounded return of investment is ";
         document.getElementById('payment').innerHTML = "₱" + " " + numCom(result.toFixed(2));
        //  document.getElementById('description').innerHTML = "with P"+amount + " at " + rate_of_return + " % annual rate for " + years + " year/years";
         }
     
    // 52-Week Challenge Calculator 
    function selectAmount() {
        var select = nN(parseInt(document.getElementById('start-amount').value));
        if (select === 0) {
            alert('Please Select Starting Amount');
        } else {
        document.getElementById('resdecript').innerHTML = "At the end of the 52nd week, you would have saved: "
        document.getElementById('week-result').innerHTML =   "₱" + " " + numCom(select.toFixed(2));
        }
    }

    // Retirement
    function selectRetireAmount() {
        var retAge = parseInt(document.getElementById('retirementAge').value);
        var curAge = parseInt(document.getElementById('currentAge').value);
        var contri = parseInt(document.getElementById('annualCon').value); 
        var interest = document.getElementById('interest').value;
        var diffAge = retAge - curAge; 
        var result = (contri * Math.pow((1 + (interest/(1*100))), (1*diffAge)));

        document.getElementById('retdescript').innerHTML = "If you set aside and invested" + " " + contri + " " + "starting at age" + " " + curAge + " " + "and hold it until" + " " + retAge + "." + " " + "You will have a retirement fund of:";
        document.getElementById('ret-result').innerHTML =   "₱" + " " + numCom(result.toFixed(2));
        // document.getElementById('retdescript2').innerHTML = ""
        
    }

    // SSS Pension Calculator
    function computeSss() {
        var cys = nN(parseInt(document.getElementById('cys').value));
        var amsc = nN(parseInt(document.getElementById('amsc').value));
        if (cys === 0 || amsc === 0) {
            alert('Please Fill In All Required Fields');
        } else {
            if (cys < 10) {
                document.getElementById('formula_1').textContent = "₱ 1,000.00";
            } else if (cys >= 10 && cys < 20) {
                document.getElementById('formula_1').textContent = "₱ 1,200.00";
            } else {
                document.getElementById('formula_1').textContent = "₱ 2,400.00";
            }
        // Formula 2
        var fortyamsc = amsc * (40 / 100);
        document.getElementById('formula_2').textContent = "₱" + " " + numCom(fortyamsc.toFixed(2));
        
        // Formula 3
        var twentyamsc = amsc * (20 / 100);
        var twoamsc = amsc * (2 / 100); 
        var minuscys = cys - 10;
        var result = 300 + twentyamsc + (twoamsc * minuscys); 
        document.getElementById('formula_3').textContent = "₱" + " " + numCom(result.toFixed(2));
        }
    }

        // Sickness Benefit Calculator
        function computeSicknessBenefit() {
        var nod = nN(parseInt(document.getElementById('numberOfDays').value));
        var msc = nN(parseInt(document.getElementById('monthlySalaryCredit').value));
        var tmc = (((msc * 6) / 180) * (90 / 100) * nod);
        document.getElementById('totalSickness').textContent = "₱" + ' ' + numCom(tmc.toFixed(2));
        
    }

        // SSS Loan Calculator
        function computeSssLoan() {
            var mpc = nN(parseInt(document.getElementById('monthlyPaidCon').value));
            var oneMonthLoan = nN(parseInt(document.getElementById('monthlySalCredit').value));
            var twoMonthLoan = oneMonthLoan * 2;
                if (mpc >= 36 && mpc < 72) {
                    document.getElementById('totalLoanableAmount').textContent = "₱" + ' ' + numCom(oneMonthLoan.toFixed(2));
                } else if (mpc >= 72) {
                    document.getElementById('totalLoanableAmount').textContent = "₱" + ' ' + numCom(twoMonthLoan.toFixed(2));
                }
        }


    // Income Tax Calculator 
    function computeTax() {
        var monthlyIncome = nN(parseInt(document.getElementById('monthlyIncome').value)); // 500 000
        // var status = nN(parseInt(document.getElementById('maritalStatus').value)); // 50 000
        // var children = nN(parseInt(document.getElementById('children').value)); // 25 000
        var result = monthlyIncome * 12;
        // var result = (annualIncome - status) - children; // 425 000
    
        document.getElementById('taxableIncome').innerHTML = "₱" + " " + numCom(result.toFixed(2));
        if (result < 250000) {
            document.getElementById('taxDue').innerHTML =  0.00 ;
        } else if (result >= 250000 && result < 400000) {
            var twentyper = (result - 250000) * (20 / 100) ; // 20% of excess of 250 000
            document.getElementById('taxDue').innerHTML =  "₱" + " " + numCom(twentyper.toFixed(2));
        } else if  (result >= 400000 && result < 800000) {
            var twentyfiveper = ((result - 400000) * (25 / 100)) + 30000 ;
            document.getElementById('taxDue').innerHTML =  "₱" + " " + numCom(twentyfiveper.toFixed(2));
        } else if  (result >= 400000 && result < 2000000) {
            var thirtyper = ((result - 800000) * (30 / 100)) + 130000 ;
            document.getElementById('taxDue').innerHTML =  "₱" + " " + numCom(thirtyper.toFixed(2));
        } else if  (result >= 2000000 && result < 8000000) {
            var thirtytwoper = ((result - 2000000) * (32 / 100)) + 490000 ;
            document.getElementById('taxDue').innerHTML = "₱" + " " +  numCom(thirtytwoper.toFixed(2));
        } else if  (result >= 8000000 ) {
            var thirtyfiveper = ((result - 8000000) * (35 / 100)) + 2410000 ;
            document.getElementById('taxDue').innerHTML = "₱" + " " +  numCom(thirtyfiveper.toFixed(2));
        }
        else {
            document.getElementById('taxDue').innerHTML =  "₱" + " " + numCom(thirtyfivepe.toFixed(2));
        }
    }

    function changeValue() {
        var value = parseInt(document.querySelector('#value').value);
        var investedYears =  parseInt(document.querySelector('#investedYears').value);
        var valTimes = value + investedYears;
        var saved = value * (Math.pow((1 + (.25/(1*100))), (1*investedYears)));
        var mutual = value * (Math.pow((1 + (8/(1*100))), (1*investedYears)));
        var stock = value * (Math.pow((1 + (10/(1*100))), (1*investedYears)));
        var currentYear = parseInt((new Date()).getFullYear());
        var matureYear = parseInt(currentYear + investedYears); 
        var timer =  setInterval(function() {run()}, 100);

        // Display variables
        document.getElementById('val').textContent = "₱" + " " + numCom(value.toFixed(2));
        document.getElementById('years').textContent = investedYears;
        document.getElementById('maturity').textContent = matureYear;
        document.getElementById('saving').textContent = "₱" + " " + numCom(saved.toFixed(2));
        document.getElementById('mutual').textContent = "₱" + " " + numCom(mutual.toFixed(2));
        document.getElementById('stock').textContent = "₱" + " " + numCom(stock.toFixed(2));
        
        function run() {
            //Display Maturity Years 
            document.querySelector('#numberYears').textContent = matureYear;
            // if (currentYear <= matureYear) {
            //     var displayYear = + currentYear;
            //     document.querySelector('#numberYears').textContent = displayYear;
            // }  else {
            //     clearInterval(timer);
            //     } currentYear++;
            
            // Display Growth
            if(value <= valTimes) {
                var save = (value - investedYears) * (Math.pow((1 + (.25/(1*100))), (1*investedYears))); 
                var mutualFund = (value - investedYears) * (Math.pow((1 + (8/(1*100))), (1*investedYears)));
                var stockMarket = (value - investedYears) * (Math.pow((1 + (10/(1*100))), (1*investedYears)));
                document.querySelector('#savings').textContent = "₱" + " " + numCom(save.toFixed(2));
                document.querySelector('#mutualFund').textContent = "₱" + " " + numCom(mutualFund.toFixed(2));
                document.querySelector('#stockMarket').textContent = "₱" + " " + numCom(stockMarket.toFixed(2));
            } else {
                clearInterval(timer);
                } value++;
            }
        }

        // Real Calculator
  //parseFloat is used to accept dot (.) in a number. Ex. 10.00
  function computeReal() {
    var real1 = parseFloat(document.getElementById('real1').value);
    var real2 = parseFloat(document.getElementById('real2').value);   
    var real3 = parseFloat(document.getElementById('real3').value);    
    var real4 = parseFloat(document.getElementById('real4').value);  
    var resRe = real1 + real2 + real3 + real4;  
    document.getElementById('realTotal').value = resRe.toFixed(2);      
}

// Personal
function computePer() {
    var per1 = parseFloat(document.getElementById('per1').value);
    var per2 = parseFloat(document.getElementById('per2').value);
    var per3 = parseFloat(document.getElementById('per3').value);
    var per4 = parseFloat(document.getElementById('per4').value);
    var per5 = parseFloat(document.getElementById('per5').value);
    var resPer = per1 + per2 +per3 + per4 + per5;
    //toFixed(2) is used to display two numbers after (.) dot.
    document.getElementById('perTotal').value = resPer.toFixed(2);      
}
// Investment
function inV() {
    var in1 = parseFloat(document.getElementById('in1').value);
    var in2 = parseFloat(document.getElementById('in2').value);
    var in3 = parseFloat(document.getElementById('in3').value);
    var in4 = parseFloat(document.getElementById('in4').value);
    var in5 = parseFloat(document.getElementById('in5').value);
    var resIn = in1 + in2 + in3 + in4 + in5;
    document.getElementById('invTotal').value = resIn.toFixed(2);      
}
// Liquid Asset
function liqAs() {
    var liq1 = parseFloat(document.getElementById('liq1').value);
    var liq2 = parseFloat(document.getElementById('liq2').value);
    var liq3 = parseFloat(document.getElementById('liq3').value);
    var liq4 = parseFloat(document.getElementById('liq4').value);
    var liq5 = parseFloat(document.getElementById('liq5').value);
    var resLiq = liq1 + liq2 + liq3 + liq4 + liq5;
    document.getElementById('liqTotal').value = resLiq.toFixed(2);      
}
// Other Asset
function otherAsset() {
    var oa1 = parseFloat(document.getElementById('oa1').value);
    var oa2 = parseFloat(document.getElementById('oa2').value);
    var oa3 = parseFloat(document.getElementById('oa3').value);
    var resOa = oa1 + oa2 + oa3;
    document.getElementById('oaTotal').value = resOa.toFixed(2);      
}

// Total Asset
function comAss() {
    var rT = parseFloat(document.getElementById('realTotal').value);
    var rt = numCom(rT.toFixed(2));  
    var pT = parseFloat(document.getElementById('perTotal').value);
    var pt = numCom(pT.toFixed(2));
    var iT = parseFloat(document.getElementById('invTotal').value);
    var it = numCom(iT.toFixed(2));
    var lT = parseFloat(document.getElementById('liqTotal').value);
    var lt = numCom(lT.toFixed(2));
    var oT = parseFloat(document.getElementById('oaTotal').value);
    var ot = numCom(oT.toFixed(2));
    var tA = rT + pT + iT + lT + oT;
    var ttA = numCom(tA.toFixed(2));
// percentage
    var rADec = 100 * (rT / tA);
    var pADec = 100 * (pT / tA);
    var iADec = 100 * (iT / tA);
    var lADec = 100 * (lT / tA);
    var oADec = 100 * (oT / tA);
    var totalPer = rADec + pADec + iADec + lADec + oADec;
    document.getElementById('rass').innerHTML = rADec.toFixed(3) + " %";
    document.getElementById('pass').innerHTML = pADec.toFixed(3) + " %";
    document.getElementById('inv').innerHTML = iADec.toFixed(3) + " %";
    document.getElementById('liq').innerHTML = lADec.toFixed(3) + " %";
    document.getElementById('oass').innerHTML = oADec.toFixed(3) + " %";
    document.getElementById('totalDec').innerHTML = totalPer.toFixed() + " %";
//Amount
    document.getElementById('real').innerHTML = rt;
    document.getElementById('personal').innerHTML = pt;
    document.getElementById('invest').innerHTML = it;
    document.getElementById('liquid').innerHTML = lt;
    document.getElementById('other').innerHTML = ot;
    document.getElementById('totalAss').innerHTML = ttA;
    document.getElementById('totalAsse').innerHTML = tA;
}

//=====================Liabilites===========================================
// Real Liabilites 
function realDis() {
    let rd1 = parseFloat(document.getElementById('rd1').value);
    let rd2 = parseFloat(document.getElementById('rd2').value);
    let resRd = rd1 + rd2;
    document.getElementById('rdTotal').value = resRd.toFixed(2);
}
// Personal Liabilites 
function perDis() {
    let pd1 = parseFloat(document.getElementById('pd1').value);
    let pd2 = parseFloat(document.getElementById('pd2').value);
    let pd3 = parseFloat(document.getElementById('pd3').value);
    let resPd = pd1 + pd2 + pd3;
    document.getElementById('pdTotal').value = resPd.toFixed(2);
}
// Credit Card 
function creditCard() {
    let cd1 = parseFloat(document.getElementById('cd1').value);
    let cd2 = parseFloat(document.getElementById('cd2').value);
    let cd3 = parseFloat(document.getElementById('cd3').value);
    let cd4 = parseFloat(document.getElementById('cd4').value);
    let resCredit = cd1 + cd2 + cd3 + cd4;
    document.getElementById('cdTotal').value = resCredit.toFixed(2);
}
// Other Liabilites 
function otherDis() {
    let ol1 = parseFloat(document.getElementById('ol1').value);
    let ol2 = parseFloat(document.getElementById('ol2').value);
    let ol3 = parseFloat(document.getElementById('ol3').value);
    let ol4 = parseFloat(document.getElementById('ol4').value);
    let ol5 = parseFloat(document.getElementById('ol5').value);
    let ol6 = parseFloat(document.getElementById('ol6').value);
    let ol7 = parseFloat(document.getElementById('ol7').value);
    let ol8 = parseFloat(document.getElementById('ol8').value);
    let resOtherDis = ol1 + ol2 + ol3 + ol4 + ol5 +ol6 + ol7 + ol8;
    document.getElementById('olTotal').value = resOtherDis.toFixed(2);
}

// Total Liabilities
function comLia() {
    var rdT = parseFloat(document.getElementById('rdTotal').value);
    var rd = numCom(rdT.toFixed(2));
    var pdT = parseFloat(document.getElementById('pdTotal').value);
    var pd = numCom(pdT.toFixed(2));
    var cdT = parseFloat(document.getElementById('cdTotal').value);
    var cd = numCom(cdT.toFixed(2));
    var olT = parseFloat(document.getElementById('olTotal').value);
    var ot = numCom(olT.toFixed(2));
    var totalLia = rdT + pdT + cdT + olT;
    var totalLi = numCom(totalLia.toFixed(2));
    // percentage
    var rdDec = 100 * (rdT / totalLia);
    var pdDec = 100 * (pdT / totalLia);
    var cdDec = 100 * (cdT / totalLia);
    var odDec = 100 * (olT / totalLia);
    var totalLiaDec = rdDec + pdDec + cdDec + odDec;
    document.getElementById('rper').innerHTML = rdDec.toFixed(3) + " %";
    document.getElementById('pper').innerHTML = pdDec.toFixed(3) + " %";
    document.getElementById('cper').innerHTML = cdDec.toFixed(3) + " %";
    document.getElementById('oper').innerHTML = odDec.toFixed(3) + " %";
    document.getElementById('toLiaDec').innerHTML = totalLiaDec.toFixed() + " %";
    
    // amount
    document.getElementById('realLoan').innerHTML = rd;
    document.getElementById('personalLoan').innerHTML = pd;
    document.getElementById('credit').innerHTML = cd;
    document.getElementById('otherLia').innerHTML = ot;
    document.getElementById('totalLiabilities').innerHTML = totalLi;
    document.getElementById('totalLia').innerHTML = totalLia; //no numCom
}
// ====================================================================

// NET WORTH
function calNet() {
    var rT = parseFloat(document.getElementById('realTotal').value);
    var pT = parseFloat(document.getElementById('perTotal').value); 
    var iT = parseFloat(document.getElementById('invTotal').value);
    var lT = parseFloat(document.getElementById('liqTotal').value);
    var oT = parseFloat(document.getElementById('oaTotal').value);
    var tA = rT + pT + iT + lT + oT;
    var rdT = parseFloat(document.getElementById('rdTotal').value);  
    var pdT = parseFloat(document.getElementById('pdTotal').value);  
    var cdT = parseFloat(document.getElementById('cdTotal').value);  
    var olT = parseFloat(document.getElementById('olTotal').value);
    var totalLia = rdT + pdT + cdT + olT;
    var net_worth = tA - totalLia;
    var sum_worth = tA + totalLia;
    var taPer = 100 * (tA / sum_worth);
    var tlPer = 100 * (totalLia / sum_worth);
    //Percentage
    document.getElementById('taPercent').innerHTML = taPer.toFixed(3);
    document.getElementById('tlPercent').innerHTML = tlPer.toFixed(3);
    //amount
    document.getElementById('nwAsset').innerHTML = numCom(tA.toFixed(2));
    document.getElementById('nwLia').innerHTML = numCom(totalLia.toFixed(2));
    document.getElementById('totalNw').innerHTML = numCom(net_worth.toFixed(2));
}

//==============================================================
//INCOME and EXPENSES//
//=============================================================
function computeIn() {
    var re = nN(parseFloat($('#re').val()));
    var st = nN(parseFloat($('#st').val()));
    var mf = nN(parseFloat($('#mf').val()));
    var oin = nN(parseFloat($('#otherIn').val()));
    var totalIn = nN(re + st + mf + oin);
    document.getElementById('totalIn').value = totalIn.toFixed(2);
}

function computeSocial() {
    var sss = nN(parseFloat($('#sss').val()));
    var phil = nN(parseFloat($('#phil').val()));
    var pagIbig = nN(parseFloat($('#pagIbig').val()));
    var or = nN(parseFloat($('#otherRet').val()));
    var totalSocial = nN(sss + phil + pagIbig + or);
    document.getElementById('totalSocialFund').value = totalSocial.toFixed(2);
}
function computeEmer() {
var me = nN(parseFloat($('#me').val()));
var be = nN(parseFloat($('#be').val()));
var totalEmer = nN(me + be);
document.getElementById('totalEmer').value = totalEmer.toFixed(2);
}
function week() {
var w = nN(parseFloat($('#wc').val()));
document.getElementById('totalWeek').value = w.toFixed(2);
}
function otherSave() {
var tithe = nN(parseFloat($('#tithe').val()));
var oO     = nN(parseFloat($('#otherOthers').val()));
var totaloO = nN(tithe + oO);
document.getElementById('totalOtherSave').value = totaloO.toFixed(2);
}

// =======Total Savings=====================
document.getElementById('ctS').addEventListener('click', function() {
    var tin = nN(parseFloat($('#totalIn').val()));
    var tsocial = nN(parseFloat($('#totalSocialFund').val()));
    var temer = nN(parseFloat($('#totalEmer').val()));
    var tw = nN(parseFloat($('#totalWeek').val()));
    var tos = nN(parseFloat($('#totalOtherSave').val()));
    var totalSavings = tin + tsocial + temer + tw + tos;
    var income = parseFloat($('#income').val());
    var balSave = income - totalSavings;// income minus expenses result
    document.getElementById('totalSavings').innerHTML = 'Php' + ' ' + numCom(totalSavings.toFixed(2));//totalsaving
    document.getElementById('totalSavingshide').value = totalSavings.toFixed(2);
});

//Income - Savings show button
document.getElementById('IncomeSaving').addEventListener('click', function() {
    var income = parseFloat($('#income').val());
    var totalSaving = parseFloat($('#totalSavingshide').val());
    var toInSa = income - totalSaving;
    document.getElementById('inSaved').innerHTML = 'Php' + ' ' + numCom(toInSa.toFixed(2));
});

//Income - Savings - expenses show button
document.getElementById('IncomeSavingEx').addEventListener('click', function() {
    var income = parseFloat($('#income').val());
    var totalSaving = parseFloat($('#totalSavingshide').val());
    var totalExpense = parseFloat($('#totalExpenseshide').val());
    if (totalExpense === 0) {
        alert('Please Compute your total Expenses First');
    } else {
    var toInSaEx = income - totalSaving - totalExpense;
    document.getElementById('inSaveEx').innerHTML = 'Php' + ' ' + numCom(toInSaEx.toFixed(2));
    };
});

// ========Bills Inputs=====================
function computeBill() {
    var e = nN(parseFloat($('#elec').val()));
    var g = nN(parseFloat($('#gas').val()));
    var w = nN(parseFloat($('#water').val()));
    var tr = nN(parseFloat($('#tr').val()));
    var t = nN(parseFloat($('#telIn').val()));
    var gr = nN(parseFloat($('#gr').val())); 
    var ob = nN(parseFloat($('#otherBill').val()));
    var totalBill = e + g + w + tr + t + gr + ob;
    document.getElementById('totalBill').value = totalBill.toFixed(2);
};
// ========Insurance Premiums Inputs=====================
function computeInsu() {
    var li = nN(parseFloat($('#life').val()));
    var hi = nN(parseFloat($('#healthInsu').val()));
    var pi = nN(parseFloat($('#pro').val()));
    var oi = nN(parseFloat($('#oinsu').val()));
    var totalInsu = li + hi + pi + oi;
    document.getElementById('totalInsuPre').value = totalInsu.toFixed(2);
};
// ========Health Inputs=====================
function computeHealth() {
    var med = nN(parseFloat($('#med').val()));
    var doc = nN(parseFloat($('#doc').val()));
    var der = nN(parseFloat($('#der').val()));
    var mu = nN(parseFloat($('#makeUp').val()));
    var gym = nN(parseFloat($('#gym').val()));
    var mb = nN(parseFloat($('#mb').val()));
    var oh = nN(parseFloat($('#oh').val()));
    var totalHealth = med + doc + der + mu + gym + mb + oh;
    document.getElementById('totalHealth').value = totalHealth.toFixed(2);
};
// ========Loan Inputs=====================
function computeLoan() {
    var hl = nN(parseFloat($('#hl').val()));
    var sl = nN(parseFloat($('#sl').val()));
    var pl = nN(parseFloat($('#pl').val()));
    var bl = nN(parseFloat($('#bl').val()));
    var ol = nN(parseFloat($('#ol').val()));
    var totalLoan = hl + sl + pl + bl + ol;
    document.getElementById('totalLoan').value = totalLoan.toFixed(2);
};
// ========Entertainment Inputs=====================
function computeEnter() {
    var c = nN(parseFloat($('#cable').val()));
    var sn = nN(parseFloat($('#sn').val()));
    var cd = nN(parseFloat($('#cd').val()));
    var sh = nN(parseFloat($('#sh').val()));
    var mb = nN(parseFloat($('#mb').val()));
    var lt = nN(parseFloat($('#lt').val()));
    var mv = nN(parseFloat($('#mv').val()));
    var ga = nN(parseFloat($('#ga').val()));
    var oen = nN(parseFloat($('#oen').val()));
    var totalEnter = c + sn + cd + sh + mb + lt + mv + ga + oen;
    document.getElementById('totalEnter').value = totalEnter.toFixed(2);
};
// ========Other Expenses=====================
function computeOtherEx() {
    var gd = nN(parseFloat($('#gd').val()));
    var oob = nN(parseFloat($('#oob').val()));
    var totalOtherEx =gd + oob;
    document.getElementById('totalOtherEx').value = totalOtherEx.toFixed(2);
};
// =======Total Expenses=====================
document.getElementById('ctE').addEventListener('click', function() {
    var tb = nN(parseFloat($('#totalBill').val()));
    var ti = nN(parseFloat($('#totalInsuPre').val()));
    var tl = nN(parseFloat($('#totalLoan').val()));
    var hb = nN(parseFloat($('#totalHealth').val()));
    var en = nN(parseFloat($('#totalEnter').val()));
    var toe = nN(parseFloat($('#totalOtherEx').val()));
    var income = parseFloat($('#income').val());
    var totalExpenses = tb + ti + tl + hb + en + toe;
    var balEx = income - totalExpenses;
    document.getElementById('totalExpenses').innerHTML = 'Php' + ' ' + numCom(totalExpenses.toFixed(2));
    document.getElementById('totalExpenseshide').value = totalExpenses;
//    document.getElementById('inEx').innerHTML = 'Php' + ' ' + numCom(balEx.toFixed(2)); 
});

//Income - Expenses show button
document.getElementById('IncomeExpense').addEventListener('click', function() {
    var income = parseFloat(document.getElementById('income').value);
    var totalExpense = parseFloat(document.getElementById('totalExpenseshide').value);
    var toInSa = income - totalExpense;
    document.getElementById('inEx').innerHTML = 'Php' + ' ' + numCom(toInSa.toFixed(2));
});

//Income - Expenses - Savings show button
document.getElementById('IncomeExpenseSa').addEventListener('click', function() {
    var income = parseFloat(document.getElementById('income').value);
    var totalSaving = parseFloat(document.getElementById('totalSavingshide').value);
    var totalExpense = parseFloat(document.getElementById('totalExpenseshide').value);
    if (totalSaving === 0) {
        alert('Please Compute your total Savings First');
    } else {
    var toInSaEx = income - totalSaving - totalExpense;
    document.getElementById('inExSa').innerHTML = 'Php' + ' ' + numCom(toInSaEx.toFixed(2));
    };
});
