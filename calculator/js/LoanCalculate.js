
$(".detail1 .head1 span:nth-of-type(1)").tap(function(){
    $(".detail1 .jian").css({"display":"none"})
    $(".detail1 .p1").show()
    $(".detail1 .p2").hide()
    var YearData=$(".box-zh .lv_cont").text()//������
    var YearData1=$(".box-zh .lv_cont1").text()//������
//  console.log($(".box-zh .Num").val())//��ҵ�����
//  console.log($(".box-zh .loan_ceiling").val())//���������
//  console.log($("#years2 option:checked").prop('value'))//�������
//  console.log(CalLoan(240,400000,0.00408,300000,0.00270833,1,2))
    var month=$("#years2 option:checked").prop('value')*12//����
    var shadai=$(".box-zh .Num").val()*10000//�̴��ܶ�
    var gongjiging=$(".box-zh .loan_ceiling").val()*10000//�������ܶ�
    var data= YearData.substring(0,YearData.indexOf("%"))/(12*100)//�̴�����
    var data1= YearData1.substring(0,YearData1.indexOf("%"))/(12*100)//����������
//  console.log(Number($(".box-zh .Num").val())+Number($(".box-zh .loan_ceiling").val()))//��ҵ�����
//  console.log($(".box-zh .loan_ceiling").val())//���������
    circle($(".detail1 .total_head").html(),$(".detail1 .total_dai").html())//ͼ��
    $(this).css({"background":"#00b1ff","color":"#ffffff"})
    $(".detail1 .head1 span:nth-of-type(2)").css({"background":"#ffffff","color":"#00b1ff"})
    CalLoan(month,shadai,data,gongjiging,data1,1,2)
//  console.log( CalLoan(month,shadai,data,gongjiging,data1,1,2).MonthPayment)
    $(".detail1 .total").html(parseInt(CalLoan(month,shadai,data,gongjiging,data1,1,2).ResultCount))//�����ܶ�
    $(".detail1 .total_head").html(Number($(".box-zh .Num").val()*10000)+Number($(".box-zh .loan_ceiling").val()*10000))
    $(".detail1 .total_dai").html(parseInt(CalLoan(month,shadai,data,gongjiging,data1,1,2).Result))
    $(".detail1 .pay_more").html(parseInt(CalLoan(month,shadai,data,gongjiging,data1,1,2).MonthPayment))
    $(".detail1 .month-gei").html("��"+$(".detail1 .pay_more").html())
})
$(".detail1 .head1 span:nth-of-type(2)").tap(function(){
    $(".detail1 .jian").css({"display":"block"})
    $(".detail1 .p1").hide()
    $(".detail1 .p2").show()
    var YearData=$(".box-zh .lv_cont").text()//������
    var YearData1=$(".box-zh .lv_cont1").text()//������

    circle($(".detail1 .total_head").html(),$(".detail1 .total_dai").html())//ͼ��
//  console.log($(".box-zh .Num").val())//��ҵ�����
//  console.log($(".box-zh .loan_ceiling").val())//���������
//  console.log($("#years2 option:checked").prop('value'))//�������
//  console.log(CalLoan(240,400000,0.00408,300000,0.00270833,1,2))
    var month=$("#years2 option:checked").prop('value')*12//����
    var shadai=$(".box-zh .Num").val()*10000//�̴��ܶ�
    var gongjiging=$(".box-zh .loan_ceiling").val()*10000//�������ܶ�
    var data= YearData.substring(0,YearData.indexOf("%"))/(12*100)//�̴�����
    var data1= YearData1.substring(0,YearData1.indexOf("%"))/(12*100)//����������
    $(this).css({"background":"#00b1ff","color":"#ffffff"})
    $(".detail1 .head1 span:nth-of-type(2)").css({"background":"#ffffff","color":"#00b1ff"})
    CalLoan(month,shadai,data,gongjiging,data1,0,2)
//  console.log( CalLoan(month,shadai,data,gongjiging,data1,0,2))
//  console.log(CalLoan(month,shadai,data,gongjiging,data1,0,2).HouseLoan[0].ReplyPrincipalIntreest)
//  console.log(CalLoan(month,shadai,data,gongjiging,data1,0,2).HouseLoan[1].ReplyPrincipalIntreest)
    $(".detail1 .dijian").html(parseInt(CalLoan(month,shadai,data,gongjiging,data1,0,2).HouseLoan[0].ReplyPrincipalIntreest-CalLoan(month,shadai,data,gongjiging,data1,0,2).HouseLoan[1].ReplyPrincipalIntreest))
    $(".detail1 .total").html(parseInt(CalLoan(month,shadai,data,gongjiging,data1,0,2).ResultCount))//�����ܶ�
    $(".detail1 .total_head").html(shadai+gongjiging)//����ܼ�
    $(".detail1 .total_dai").html(parseInt(CalLoan(month,shadai,data,gongjiging,data1,0,2).Result))//֧����Ϣ
    $(".detail1 .pay_more").html(parseInt(CalLoan(month,shadai,data,gongjiging,data1,0,2).MaxPayment))//�����¹�
    $(".detail1 .month-gei").html("��"+$(".detail1 .pay_more").html())
})

$(".detail1 .head1 span:nth-of-type(2)").tap(function(){
    $(this).css({"background":"#00b1ff","color":"#ffffff"})
    $(".detail1 .head1 span:nth-of-type(1)").css({"background":"#ffffff","color":"#00b1ff"})
})

function CalLoan(yearPeriad, money, monthInterest, money1, monthInterest1, typeInterest, typeCal) {

    var HouseLoanObject = {};
    if (typeInterest == 0) {
        switch (typeCal) {
            case 0:
                HouseLoanObject = CalAverageCapitalComm(yearPeriad, money, monthInterest);
                break;
            case 1:
                HouseLoanObject = CalAverageCapitalComm(yearPeriad, money1, monthInterest1);
                break;
            case 2:
                var HouseLoanObject1 = CalAverageCapitalComm(yearPeriad, money, monthInterest);
                var HouseLoanObject2 = CalAverageCapitalComm(yearPeriad, money1, monthInterest1);
                HouseLoanObject.BusInterest = HouseLoanObject1.Result;
                HouseLoanObject.AccuInterest = HouseLoanObject2.Result;
                HouseLoanObject.Result = HouseLoanObject1.Result + HouseLoanObject2.Result;
                HouseLoanObject.ResultCount = HouseLoanObject1.ResultCount + HouseLoanObject2.ResultCount;
                HouseLoanObject.MaxPayment = HouseLoanObject1.MaxPayment + HouseLoanObject2.MaxPayment;
                HouseLoanObject.MaxInterest = HouseLoanObject1.MaxInterest + HouseLoanObject2.MaxInterest;

                var houseLoan = {};
                var houseLoanArray = new Array();

                for (var i = 1; i <= yearPeriad; i++) {
                    houseLoan =
                    {
                        ReplyPrincipalIntreest: (HouseLoanObject1.HouseLoan[i - 1].ReplyPrincipalIntreest + HouseLoanObject2.HouseLoan[i - 1].ReplyPrincipalIntreest),
                        ReplyInterest: (HouseLoanObject1.HouseLoan[i - 1].ReplyInterest + HouseLoanObject2.HouseLoan[i - 1].ReplyInterest),
                        ReplyPrincipal: (HouseLoanObject1.HouseLoan[i - 1].ReplyPrincipal + HouseLoanObject2.HouseLoan[i - 1].ReplyPrincipal),
                        SurplusPrincipal: (HouseLoanObject1.HouseLoan[i - 1].SurplusPrincipal + HouseLoanObject2.HouseLoan[i - 1].SurplusPrincipal)
                    };
                    houseLoanArray.push(houseLoan);
                }
                HouseLoanObject.HouseLoan = houseLoanArray;
                break;
        }
    }
    else {
        switch (typeCal) {
            case 0:
                HouseLoanObject = CalAverageCapitalPlusInterestComm(yearPeriad, money, monthInterest);
                break;
            case 1:
                HouseLoanObject = CalAverageCapitalPlusInterestComm(yearPeriad, money1, monthInterest1);
                break;
            case 2:
                var HouseLoanObject1 = CalAverageCapitalPlusInterestComm(yearPeriad, money, monthInterest);
                var HouseLoanObject2 = CalAverageCapitalPlusInterestComm(yearPeriad, money1, monthInterest1);
                HouseLoanObject.BusInterest = HouseLoanObject1.Result;
                HouseLoanObject.AccuInterest = HouseLoanObject2.Result;
                HouseLoanObject.Result = HouseLoanObject1.Result + HouseLoanObject2.Result;
                HouseLoanObject.ResultCount = HouseLoanObject1.ResultCount + HouseLoanObject2.ResultCount;
                HouseLoanObject.MonthPayment = HouseLoanObject1.MonthPayment + HouseLoanObject2.MonthPayment;
                HouseLoanObject.MaxPayment = HouseLoanObject1.MaxPayment + HouseLoanObject2.MaxPayment;
                HouseLoanObject.MaxInterest = HouseLoanObject1.MaxInterest + HouseLoanObject2.MaxInterest;

                var houseLoan = {};
                var houseLoanArray = new Array();

                for (var i = 1; i <= yearPeriad; i++) {
                    houseLoan =
                    {
                        ReplyPrincipalIntreest: (HouseLoanObject1.HouseLoan[i - 1].ReplyPrincipalIntreest + HouseLoanObject2.HouseLoan[i - 1].ReplyPrincipalIntreest),
                        ReplyInterest: (HouseLoanObject1.HouseLoan[i - 1].ReplyInterest + HouseLoanObject2.HouseLoan[i - 1].ReplyInterest),
                        ReplyPrincipal: (HouseLoanObject1.HouseLoan[i - 1].ReplyPrincipal + HouseLoanObject2.HouseLoan[i - 1].ReplyPrincipal),
                        SurplusPrincipal: (HouseLoanObject1.HouseLoan[i - 1].SurplusPrincipal + HouseLoanObject2.HouseLoan[i - 1].SurplusPrincipal)
                    };
                    houseLoanArray.push(houseLoan);
                }

                HouseLoanObject.HouseLoan = houseLoanArray;
                break;
        }
    }
    /*
     BusInterest:��ϼ�����ҵ�����Ϣ�ܶ�
     AccuInterest����ϼ��㹫�������Ϣ�ܶ�
     Result:��Ϣ�ܶ�
     ResultCount:�ۼƻ����ܶ�
     MonthPayment:ÿ���¹�
     MaxPayment:����¹�
     MaxInterest:�����Ϣ
     HouseLoan:�ۼƳ�����Ϣ����
     */
    return HouseLoanObject;
}

function CalAverageCapitalComm(yearPeriad, money, monthInterest) {
    /*�̴���Ϣ�ܶ�=��������(��)+1��* ���� *(������)/2 */
    var result = (yearPeriad + 1) * money * monthInterest / 2;
    result = Math.abs(result.toFixed(2));

    /*�ۼƻ����ܶ�=��Ϣ+����*/
    var resultCount = parseFloat(result.toFixed(2)) + parseFloat(money);
    resultCount = Math.abs(resultCount);

    /*����¹�=(����/������(��))+(����-0)*����Ϣ*/
    var maxPayment = (money / yearPeriad) + (money - 0) * monthInterest;
    maxPayment = Math.abs(maxPayment.toFixed(2));

    /*�����Ϣ=����*(������/12)^1*/
    var maxInterest = money * Math.pow(monthInterest, 1);
    maxInterest = Math.abs(maxInterest.toFixed(2));

    var houseLoan = {};
    var houseLoanArray = new Array();
    for (var i = 1; i <= yearPeriad; i++) {
        var replyPrincipalIntreest = (i != 1 ? ((money - (money / yearPeriad) * (i - 1)) * monthInterest) + (money / yearPeriad) : maxPayment); //������Ϣ
        var replyInterest = (i != 1 ? ((money - (money / yearPeriad) * (i - 1)) * monthInterest) : maxInterest); //������Ϣ
        var replyPrincipal = money / yearPeriad; //��������
        var surplusPrincipal = money - (money / yearPeriad) * i; //ʣ�౾��
        houseLoan = { ReplyPrincipalIntreest: replyPrincipalIntreest, ReplyInterest: replyInterest, ReplyPrincipal: replyPrincipal, SurplusPrincipal: surplusPrincipal };
        houseLoanArray.push(houseLoan);
    }
    var HouseLoanObject = {};
    HouseLoanObject.Result = result;
    HouseLoanObject.ResultCount = resultCount;
    HouseLoanObject.MaxPayment = maxPayment;
    HouseLoanObject.MaxInterest = maxInterest;
    HouseLoanObject.HouseLoan = houseLoanArray;
    return HouseLoanObject;
}

function CalAverageCapitalPlusInterestCommT(yearPeriad, money, monthInterest, money1, monthInterest1, typeInterest, typeCal) {

    var HouseLoanObject = CalLoan(yearPeriad, money, monthInterest, money1, monthInterest1, typeInterest, typeCal);
    if (typeCal == 2) {
        /*�̴���Ϣ�ܶ�*/
        $("#txtInterestResult").val(HouseLoanObject.BusInterest);
        /*�������Ϣ�ܶ�*/
        $("#txtReservedFunds").val(HouseLoanObject.AccuInterest);
    }
    $("#txtInterestCount").val(HouseLoanObject.Result);
    $("#txtRepayment").val(HouseLoanObject.ResultCount);

    $("#txtMonthPayment").val(HouseLoanObject.MonthPayment.toFixed(2));
    $("#txtMonthMaxPayment").val(HouseLoanObject.MaxPayment);

    $("#tblResult tbody").empty();
    var strHtml = ""
    for (var i = 1; i <= HouseLoanObject.HouseLoan.length; i++) {
        strHtml += "<tr style='line-height:30px;'>"
            + "<td>" + i + "</td>"
            + "<td>" + Math.abs(HouseLoanObject.HouseLoan[i - 1].ReplyPrincipalIntreest.toFixed(2)) + "</td>"
            + "<td>" + Math.abs(HouseLoanObject.HouseLoan[i - 1].ReplyInterest.toFixed(2)) + "</td>"
            + "<td>" + Math.abs(HouseLoanObject.HouseLoan[i - 1].ReplyPrincipal.toFixed(2)) + "</td>"
            + "<td>" + Math.abs(HouseLoanObject.HouseLoan[i - 1].SurplusPrincipal.toFixed(2)) + "</td>"
            + "</tr>";
    }
    $("#tblResult tbody").append(strHtml);
}

function CalAverageCapitalCommT(yearPeriad, money, monthInterest, money1, monthInterest1, typeInterest, typeCal) {

    var HouseLoanObject = CalLoan(yearPeriad, money, monthInterest, money1, monthInterest1, typeInterest, typeCal);
    if (typeCal == 2) {
        /*�̴���Ϣ�ܶ�*/
        $("#txtInterestResult").val(HouseLoanObject.BusInterest);
        /*�������Ϣ�ܶ�*/
        $("#txtReservedFunds").val(HouseLoanObject.AccuInterest);
    }
    /*�̴���Ϣ�ܶ�*/
    $("#txtInterestCount").val(HouseLoanObject.Result.toFixed(2));
    /*�ۼƻ����ܶ�*/
    $("#txtRepayment").val(HouseLoanObject.ResultCount);
    /*����¹�*/
    $("#txtMonthPayment").val(HouseLoanObject.MaxPayment);
    /*�����Ϣ*/
    $("#txtMonthMaxPayment").val(HouseLoanObject.MaxInterest);

    $("#tblResult tbody").empty();
    var strHtml = ""
    for (var i = 1; i <= HouseLoanObject.HouseLoan.length; i++) {
        strHtml += "<tr style='line-height:30px;'>"
            + "<td>" + i + "</td>"
            + "<td>" + Math.abs(HouseLoanObject.HouseLoan[i - 1].ReplyPrincipalIntreest.toFixed(2)) + "</td>"
            + "<td>" + Math.abs(HouseLoanObject.HouseLoan[i - 1].ReplyInterest.toFixed(2)) + "</td>"
            + "<td>" + Math.abs(HouseLoanObject.HouseLoan[i - 1].ReplyPrincipal.toFixed(2)) + "</td>"
            + "<td>" + Math.abs(HouseLoanObject.HouseLoan[i - 1].SurplusPrincipal.toFixed(2)) + "</td>"
            + "</tr>";
    }
    $("#tblResult tbody").append(strHtml);
}

function CalAverageCapitalBus() {
    var writeOrCommerical = $("#business_rate_select").val();
    var yearInterest = ""
    if (writeOrCommerical != -1)                    //���ֶ�����
    {
        yearInterest = $("#txtInterest").val() / 100; //��������Ϣ
    }
    else {
        yearInterest = $("#txtWrite").val() / 100;    //�ֶ���������Ϣ
    }
    var money = $("#txtMoney").val() * 10000;         //����
    var monthInterest = yearInterest / 12;          //����Ϣ
    var yearPeriad = $("#loan_period_select").val() * 12;  //������
    $("#divMaxMonthMoney").val("����¹�");
    CalAverageCapitalCommT(yearPeriad, money, monthInterest, 0, 0, 0, 0);

}

function CalAverageCapitalReserve() {
    var writeOrCommerical = $("#selPAFrate").val();
    var yearInterest = ""
    if (writeOrCommerical != -1)                    //���ֶ�����
    {
        yearInterest = $("#txtInterest1").val() / 100; //��������Ϣ
    }
    else {
        yearInterest = $("#txtWrite1").val() / 100;    //�ֶ���������Ϣ
    }
    var money = $("#txtMoney1").val() * 10000;         //����
    var monthInterest = yearInterest / 12;          //����Ϣ
    var yearPeriad = $("#loan_period_select2").val() * 12;  //������
    $("#divMaxMonthMoney").val("����¹�");

    CalAverageCapitalCommT(yearPeriad, 0, 0, money, monthInterest, 0, 1);
}

function CalAverageCapitalPlusInterestComm(yearPeriad, money, monthInterest) {
    /*������Ϣ=(������*����Ϣ��*(1+����Ϣ)^�������)/((1+����Ϣ)^�������-1��*/
    var repleyInterest = (money * monthInterest * Math.pow(1 + monthInterest, yearPeriad)) / (Math.pow(1 + monthInterest, yearPeriad) - 1);

    /*��Ϣ�ܶ�=������Ϣ*������ - ����*/
    var result = repleyInterest * yearPeriad - money;
    result = Math.abs(result.toFixed(2));

    /*�ۼƻ����ܶ�=������Ϣ* ������*/
    var resultCount = repleyInterest * yearPeriad;
    resultCount = Math.abs(resultCount.toFixed(2));

    /*ÿ���¹�=������Ϣ*/
    var monthPayment = Math.abs(repleyInterest.toFixed(2));


    /*��߸�����Ϣ= ���� * ��Ϣ^�ڴ�*/
    var maxPayment = money * Math.pow(monthInterest, 1);
    maxPayment = Math.abs(maxPayment.toFixed(2));
    var houseLoan = {};
    var houseLoanArray = new Array();
    for (var i = 1; i <= yearPeriad; i++) {
        var surplusPrincipal1 = money * Math.pow(1 + monthInterest, i) - repleyInterest * (Math.pow(1 + monthInterest, i) - 1) / monthInterest; /*ʣ�౾��*/
        var surplusPrincipal2 = money * Math.pow(1 + monthInterest, i - 1) - repleyInterest * (Math.pow(1 + monthInterest, i - 1) - 1) / monthInterest; /*ȡ��һ�εı������ÿ�³�����Ϣ*/
        var repeyInt = surplusPrincipal2 * monthInterest; /*ÿ�³�����Ϣ*/
        var repeyPrincipal1 = Math.abs((repleyInterest - repeyInt).toFixed(2)); /*ÿ�³�������*/

        var replyPrincipalIntreest = monthPayment; //������Ϣ
        var replyInterest = (i != 1 ? repeyInt : maxPayment); //������Ϣ
        var replyPrincipal = (i != 1 ? repeyPrincipal1 : (repleyInterest - maxPayment)); //��������
        var surplusPrincipal = (i != 1 ? surplusPrincipal1 : (money - repleyInterest + maxPayment)); //ʣ�౾��
        houseLoan = { ReplyPrincipalIntreest: replyPrincipalIntreest, ReplyInterest: replyInterest, ReplyPrincipal: replyPrincipal, SurplusPrincipal: surplusPrincipal };
        houseLoanArray.push(houseLoan);
    }
    var HouseLoanObject = {};
    HouseLoanObject.Result = result;
    HouseLoanObject.ResultCount = resultCount;
    HouseLoanObject.MonthPayment = monthPayment;
    HouseLoanObject.MaxPayment = maxPayment;
    HouseLoanObject.HouseLoan = houseLoanArray;
    return HouseLoanObject;
}

function CalAverageCapitalPlusInterestBus() {
    var writeOrCommerical = $("#business_rate_select").val();
    var yearInterest = ""
    if (writeOrCommerical != -1)                    //���ֶ�����
    {
        yearInterest = $("#txtInterest").val() / 100; //��������Ϣ
    }
    else {
        yearInterest = $("#txtWrite").val() / 100;    //�ֶ���������Ϣ
    }
    var money = $("#txtMoney").val() * 10000;         //����
    var monthInterest = yearInterest / 12;           //����Ϣ
    var yearPeriad = $("#loan_period_select").val() * 12;  //������
    $("#divMaxMonthMoney").val("ÿ���¹�");
    CalAverageCapitalPlusInterestCommT(yearPeriad, money, monthInterest, 0, 0, 1, 0);

}

function CalAverageCapitalPlusInterestReserve() {
    var writeOrCommerical = $("#selPAFrate").val();
    var yearInterest = ""
    if (writeOrCommerical != -1)                    //���ֶ�����
    {
        yearInterest = $("#txtInterest1").val() / 100; //��������Ϣ
    }
    else {
        yearInterest = $("#txtWrite1").val() / 100;    //�ֶ���������Ϣ
    }
    var money = $("#txtMoney1").val() * 10000;         //����
    var monthInterest = yearInterest / 12;          //����Ϣ
    var yearPeriad = $("#loan_period_select2").val() * 12;  //������
    CalAverageCapitalPlusInterestCommT(yearPeriad, 0, 0, money, monthInterest, 1, 1);
}

function CalAverageCapitalGropReserve() {
    /*��ҵ�������*/
    var writeOrCommerical = $("#business_rate_select1").val();
    var yearInterest = ""
    if (writeOrCommerical != -1)                    //���ֶ�����
    {
        yearInterest = $("#txtInterest2").val() / 100; //��������Ϣ
    }
    else {
        yearInterest = $("#txtWrite3").val() / 100;    //�ֶ���������Ϣ
    }
    var money = $("#txtMoney3").val() * 10000;         //����
    var monthInterest = yearInterest / 12;             //����Ϣ
    var yearPeriad = $("#loan_period_select3").val() * 12;  //������

    /*�����������*/
    var writeOrCommerical1 = $("#selPAFrate3").val();
    var yearInterest1 = ""
    if (writeOrCommerical1 != -1)                       //���ֶ�����
    {
        yearInterest1 = $("#txtInterest4").val() / 100; //��������Ϣ
    }
    else {
        yearInterest1 = $("#txtWrite4").val() / 100;    //�ֶ���������Ϣ
    }
    var money1 = $("#txtMoney4").val() * 10000;         //����
    var monthInterest1 = yearInterest1 / 12;            //����Ϣ

    CalAverageCapitalCommT(yearPeriad, money, monthInterest, money1, monthInterest1, 0, 2);

}

function CalAverageCapitalGropInsterest() {
    /*��ҵ���*/
    var writeOrCommerical = $("#business_rate_select1").val();
    var yearInterest = ""
    if (writeOrCommerical != -1)                       //���ֶ�����
    {
        yearInterest = $("#txtInterest2").val() / 100; //��������Ϣ
    }
    else {
        yearInterest = $("#txtWrite3").val() / 100;    //�ֶ���������Ϣ
    }
    var money = $("#txtMoney3").val() * 10000;         //����
    var monthInterest = yearInterest / 12;             //����Ϣ
    var yearPeriad = $("#loan_period_select3").val() * 12;  //������

    var writeOrCommerical1 = $("#selPAFrate3").val();
    var yearInterest1 = ""
    if (writeOrCommerical1 != -1)                       //���ֶ�����
    {
        yearInterest1 = $("#txtInterest4").val() / 100; //��������Ϣ
    }
    else {
        yearInterest1 = $("#txtWrite4").val() / 100;    //�ֶ���������Ϣ
    }
    var money1 = $("#txtMoney4").val() * 10000;         //����
    var monthInterest1 = yearInterest1 / 12;            //����Ϣ

    CalAverageCapitalPlusInterestCommT(yearPeriad, money, monthInterest, money1, monthInterest1, 1, 2);

}

function ChangeWrite() {
    var writeValue = $("#business_rate_select").val();
    if (writeValue == -1) {
        $("#txtWrite").show();
        $("#divWrite").hide();
    }
    else {
        $("#txtWrite").hide();
        $("#divWrite").show();
    }
}
function ChangeWrite2() {
    var writeValue = $("#business_rate_select1").val();
    if (writeValue == -1) {
        $("#txtWrite3").show();
        $("#divWrite3").hide();
    }
    else {
        $("#txtWrite3").hide();
        $("#divWrite3").show();
    }
}

function ChangeLoanPeriad() {
    $("#business_discount").get(0).selectedIndex = 0;
    var loadPeriad = $("#loan_period_select").val(); /*������� ��*/
    loadPeriad = parseInt(loadPeriad);
    var businessRate = $("#business_rate_select").val(); /*��ҵ�����Ϣ*/
    businessRate = parseInt(businessRate);
    var interest = "";
    if (businessRate == -1) {
        return;
    }
    if (loadPeriad == 1) {
        switch (businessRate) {
            case 1:
                interest = 6.00;
                break;
            case 2:
                interest = 6.31;
                break;
            case 3:
                interest = 6.56;
                break;
            case 4:
                interest = 6.31;
                break;
            case 5:
                interest = 6.06;
                break;
            default: break;
        }
    }
    else if (loadPeriad == 2 || loadPeriad == 3) {
        switch (businessRate) {
            case 1:
                interest = 6.15;
                break;
            case 2:
                interest = 6.40;
                break;
            case 3:
                interest = 6.65;
                break;
            case 4:
                interest = 6.40;
                break;
            case 5:
                interest = 6.10;
                break;
            default: break;
        }
    }
    else if (loadPeriad == 4 || loadPeriad == 5) {
        switch (businessRate) {
            case 1:
                interest = 6.40;
                break;
            case 2:
                interest = 6.65;
                break;
            case 3:
                interest = 6.90;
                break;
            case 4:
                interest = 6.65;
                break;
            case 5:
                interest = 6.45;
                break;
            default: break;
        }
    }
    else {
        switch (businessRate) {
            case 1:
                interest = 6.55;
                break;
            case 2:
                interest = 6.80;
                break;
            case 3:
                interest = 7.05;
                break;
            case 4:
                interest = 6.80;
                break;
            case 5:
                interest = 6.60;
                break;
            default: break;
        }
    }
    $("#txtInterest").val(interest);
}
function ChangeLoanPeriad1() {
    $("#business_discount3").get(0).selectedIndex = 0;
    var loadPeriad = $("#loan_period_select3").val(); /*������� ��*/
    loadPeriad = parseInt(loadPeriad);
    var businessRate = $("#business_rate_select1").val(); /*��ҵ�����Ϣ*/
    businessRate = parseInt(businessRate);
    var interest = "";
    if (businessRate == -1) {
        return;
    }
    if (loadPeriad == 1) {
        switch (businessRate) {
            case 1:
                interest = 6.00;
                break;
            case 2:
                interest = 6.31;
                break;
            case 3:
                interest = 6.56;
                break;
            case 4:
                interest = 6.31;
                break;
            case 5:
                interest = 6.06;
                break;
            default: break;
        }
    }
    else if (loadPeriad == 2 || loadPeriad == 3) {
        switch (businessRate) {
            case 1:
                interest = 6.15;
                break;
            case 2:
                interest = 6.40;
                break;
            case 3:
                interest = 6.65;
                break;
            case 4:
                interest = 6.40;
                break;
            case 5:
                interest = 6.10;
                break;
            default: break;
        }
    }
    else if (loadPeriad == 4 || loadPeriad == 5) {
        switch (businessRate) {
            case 1:
                interest = 6.40;
                break;
            case 2:
                interest = 6.65;
                break;
            case 3:
                interest = 6.90;
                break;
            case 4:
                interest = 6.65;
                break;
            case 5:
                interest = 6.45;
                break;
            default: break;
        }
    }
    else {
        switch (businessRate) {
            case 1:
                interest = 6.55;
                break;
            case 2:
                interest = 6.80;
                break;
            case 3:
                interest = 7.05;
                break;
            case 4:
                interest = 6.80;
                break;
            case 5:
                interest = 6.60;
                break;
            default: break;
        }
    }
    $("#txtInterest2").val(interest);
}

function ChangeBusinessRate() {
    ChangeLoanPeriad();
}
function ChangeBusinessRate1() {
    ChangeLoanPeriad1();
}

function CalculateRide() {
    var interestNum = $("#txtInterest").val();
    var multipleNum = $("#business_discount").val();
    var interestNum1 = 0;
    switch (parseInt(multipleNum)) {
        case 0:
            ChangeLoanPeriad();
            break;
        case 4:
            interestNum1 = 0.85 * interestNum;
            $("#txtInterest").val(interestNum1);
            break;
        case 5:
            interestNum1 = 0.9 * interestNum;
            $("#txtInterest").val(interestNum1);
            break;
        case 6:
            interestNum1 = 0.95 * interestNum;
            $("#txtInterest").val(interestNum1);
            break;
        case 7:
            interestNum1 = 1.05 * interestNum;
            $("#txtInterest").val(interestNum1);
            break;
        case 8:
            interestNum1 = 1.1 * interestNum;
            $("#txtInterest").val(interestNum1);
            break;
        case 9:
            interestNum1 = 1.15 * interestNum;
            $("#txtInterest").val(interestNum1);
            break;
        case 10:
            interestNum1 = 1.2 * interestNum;
            $("#txtInterest").val(interestNum1);
            break;
    }
}

function CalculateRide3() {
    var interestNum = $("#txtInterest2").val();
    var multipleNum = $("#business_discount3").val();
    var interestNum1 = 0;
    switch (parseInt(multipleNum)) {
        case 0:
            ChangeLoanPeriad1();
            break;
        case 4:
            interestNum1 = 0.85 * interestNum;
            $("#txtInterest2").val(interestNum1);
            break;
        case 5:
            interestNum1 = 0.9 * interestNum;
            $("#txtInterest2").val(interestNum1);
            break;
        case 6:
            interestNum1 = 0.95 * interestNum;
            $("#txtInterest2").val(interestNum1);
            break;
        case 7:
            interestNum1 = 1.05 * interestNum;
            $("#txtInterest2").val(interestNum1);
            break;
        case 8:
            interestNum1 = 1.1 * interestNum;
            $("#txtInterest2").val(interestNum1);
            break;
        case 9:
            interestNum1 = 1.15 * interestNum;
            $("#txtInterest2").val(interestNum1);
            break;
        case 10:
            interestNum1 = 1.2 * interestNum;
            $("#txtInterest2").val(interestNum1);
            break;
    }
}

function CalculateValue() {
    var val=$('input:radio[name="repay_radio"]:checked').val();
    if (val == 1) {/*�ȶ��*/
        CalAverageCapitalBus();
    }
    else {
        CalAverageCapitalPlusInterestBus();
    }
}

function CalculateReserveValue() {
    var val = $('input:radio[name="repay_radio1"]:checked').val();
    if (val == 1) {/*�ȶ��*/
        CalAverageCapitalReserve();
    }
    else {
        CalAverageCapitalPlusInterestReserve();
    }
}

function ChangePAFrate() {
    var writeValue = $("#selPAFrate").val();
    if (writeValue == -1) {
        $("#txtWrite1").show();
        $("#divWrite2").hide();
    }
    else {
        $("#txtWrite1").hide();
        $("#divWrite2").show();
    }
    ChangeLoanPeriod();
}
function ChangePAFrate1() {
    var writeValue = $("#selPAFrate3").val();
    if (writeValue == -1) {
        $("#txtWrite4").show();
        $("#divWrite4").hide();
    }
    else {
        $("#txtWrite4").hide();
        $("#divWrite4").show();
    }
    ChangeLoanPeriod1();
}

function ChangeLoanPeriod() {
    var loanPeriod = $("#loan_period_select2").val();
    var businessRate = $("#selPAFrate").val();
    var interest = "";
    if (loanPeriod <= 5) {
        switch (parseInt(businessRate)) {
            case 0:
                interest = 4.00;
                break;
            case 1:
                interest = 4.20;
                break;
            case 2:
                interest = 4.45;
                break;
            case 3:
                interest = 4.20;
                break;
            case 4:
                interest = 4.00;
                break;
        }
    }
    else {
        switch (parseInt(businessRate)) {
            case 0:
                interest = 4.50;
                break;
            case 1:
                interest = 4.70;
                break;
            case 2:
                interest = 4.90;
                break;
            case 3:
                interest = 4.70;
                break;
            case 4:
                interest = 4.50;
                break;
        }
    }
    var businessDiscount = $("#business_discount1").val();
    var discount = "";
    if (businessDiscount == 1) {
        discount = 1.0;
    }
    else {
        discount = 1.1;
    }
    $("#txtInterest1").val(Math.abs(interest * discount));
}
function ChangeLoanPeriod1() {
    var loanPeriod = $("#loan_period_select3").val();
    var businessRate = $("#selPAFrate3").val();
    var interest = "";
    if (loanPeriod <= 5) {
        switch (parseInt(businessRate)) {
            case 0:
                interest = 4.00;
                break;
            case 1:
                interest = 4.20;
                break;
            case 2:
                interest = 4.45;
                break;
            case 3:
                interest = 4.20;
                break;
            case 4:
                interest = 4.00;
                break;
        }
    }
    else {
        switch (parseInt(businessRate)) {
            case 0:
                interest = 4.50;
                break;
            case 1:
                interest = 4.70;
                break;
            case 2:
                interest = 4.90;
                break;
            case 3:
                interest = 4.70;
                break;
            case 4:
                interest = 4.50;
                break;
        }
    }
    var businessDiscount = $("#business_discount4").val();
    var discount = "";
    if (businessDiscount == 1) {
        discount = 1.0;
    }
    else {
        discount = 1.1;
    }
    $("#txtInterest4").val(Math.abs(interest * discount));
}

function CalculateRide1() {
    ChangeLoanPeriod();
}
function CalculateRide2() {
    ChangeLoanPeriod1();
}

function CalculateReserveAndBusValue() {
    var val = $('input:radio[name="repay_radio3"]:checked').val();
    if (val == 1) {/*�ȶ��*/
        CalAverageCapitalGropReserve();
    }
    else {
        CalAverageCapitalGropInsterest();
    }
}
