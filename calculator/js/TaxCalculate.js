CalDues(1000000,0,0,100,1,0,1,10);
function CalDues(sumPrice, houseType, onlyBuy, areaHouse, isFiveYear, valSellHouse, levyWay, castPrice) {

    /*������˰*/
    var deedTax = CalDeedTax(sumPrice, houseType, onlyBuy, areaHouse);
    /*����Ӫҵ˰*/
    var busTax = DoBusTax(sumPrice, houseType, isFiveYear, castPrice);
    /*����������˰*/
    var incomeTax = CalIncomeTaxPerson(sumPrice, isFiveYear, valSellHouse, levyWay, houseType, castPrice);
    /*�����н��*/
    sumPrice = Math.abs((sumPrice * 0.01).toFixed(2));
    var taxesObj = {};
    /*
     DeedTax:��˰
     BusTax:Ӫҵ˰
     IncomeTax:�������˰
     SumPrice:�н��[���/����]
     */
    taxesObj = { DeedTax: deedTax, BusTax: busTax, IncomeTax: incomeTax, SumPrice: sumPrice };
    return taxesObj;
}

function CalSumHouse() {
    var area = $("#txtArea").val();
    var unitPrice = $("#txtUnitPrice").val();
    if($.trim(area).length<=0 || $.trim(unitPrice).length<=0)
    {
        return;
    }
    if ($("#selSumPrice").val() == "��Ԫ") {
        $("#txtSumPrice").val(Math.abs(((area * unitPrice) / 10000).toFixed(2)));
    }
    else {
        $("#txtSumPrice").val(Math.abs((area * unitPrice).toFixed(2)));
    }
}

CalDeedTax(1000000,0,0,100);

function CalDeedTax(sumPrice, houseType, onlyBuy, areaHouse) {
    var deedTax = 0;
    if (houseType == "0") {/*��ͨסլ*/
        if (onlyBuy == 0 && areaHouse < 90)/*�򷿼�ͥΨһסլ+ area<90*/
        {
            deedTax = sumPrice * 0.01;
        }
        else if (onlyBuy == 0) {
            deedTax = sumPrice * 0.015;
        }
        else {
            deedTax = sumPrice * 0.03;
        }

    }
    else {
        deedTax = sumPrice * 0.03;
    }
    return deedTax;
}


function DoBusTax(sumPrice, houseType, IsFiveYear,castPrice) {
    var busTax = 0;

    if (houseType == 0) {
        if (IsFiveYear == 0) {
            busTax = busTax;
        }
        else {
            busTax = sumPrice * 0.0565;
        }
    }
    else {
        if (IsFiveYear == 0) {
            busTax = (sumPrice - castPrice) * 0.0565;
        }
        else {
            busTax = sumPrice * 0.0565;
        }
    }
    return Math.abs(busTax.toFixed(2));
}

function CalIncomeTaxPerson(sumPrice, valYear, valSellHouse, levyWay, houseType,castPrice) {
    var incomeTax = 0;
    if (valYear == 0 && valSellHouse == 0) {
        return Math.abs(incomeTax.toFixed(2));
    }
    else {

        if (levyWay == 0 && houseType == 0) {
            incomeTax = sumPrice * 0.01;
        }
        else if (levyWay == 0 && houseType == 1) {
            incomeTax = sumPrice * 0.02;
        }
        else {
            incomeTax = (sumPrice - castPrice) * 0.2;
        }
    }
    return Math.abs(incomeTax.toFixed(2));
}

function ChangeLevyWay(){
    if($("#selLevyWay").val()==0)
    {
        $("#trCasePrice").hide();
    }
    else
    {
        $("#trCasePrice").show();
    }
}

function CalHouseTax() {
    if ($("#selLevyWay").val() == 1 && $.trim($("#txtCastPrice").val()).length <= 0) {
        alert("�����뷿��ԭ��!");
        return;
    }
    /*������˰*/
    var sumUnit = $("#selSumPrice").val();
    var sumPrice = $("#txtSumPrice").val();
    if (sumUnit == "��Ԫ") {
        sumPrice = sumPrice * 10000;
    }
    var castUnitPrice = $("#selCastPrice").val();
    var castPrice = $("#txtCastPrice").val();
    if (castUnitPrice == "��Ԫ") {
        castPrice = castPrice * 10000;
    }
    var houseType = $("#selHouseNature").val();
    var onlyBuy = $('input:radio[name="repay_radio2"]:checked').val();
    var areaHouse = $("#txtArea").val();
    var isFiveYear = $('input:radio[name="repay_radio1"]:checked').val();
    var valSellHouse = $('input:radio[name="repay_radio3"]:checked').val();
    var levyWay = $("#selLevyWay").val();
    //sumPrice = Math.abs((sumPrice * 0.01).toFixed(2));

    var Taxed = CalDues(sumPrice, houseType, onlyBuy, areaHouse, isFiveYear, valSellHouse, levyWay, castPrice);

    $("#txtDeedTax").val(Taxed.DeedTax);
    $("#txtBusinessTax").val(Taxed.BusTax);
    $("#txtIncomeTax").val(Taxed.IncomeTax);
    $("#txtBuyAgencyFee").val(Taxed.SumPrice);
    $("#txtSellAgencyFee").val(Taxed.SumPrice);
}
