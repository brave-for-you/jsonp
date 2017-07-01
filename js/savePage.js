/**
 * Created by sakura on 2017/6/14.
 */
$(function() {
    $("#msiId").bootstrapTable({
        url: "api/api-3.php",
        method: "get",
        sidePagination: "server",
        queryParams: function(params) {
            params.pageNum = params.offset / 10 + 1;
            params.pageSize = "10";
            return params;
        },
        striped: true,
        maintainSelected: true,
        pagination: true,
        pageList: [10],
        rowStyle: function(row, index) {
            if(row.type == "glycemic"){
                row.type = "血糖";
            }else if(row.type == "glycated"){
                row.type = "糖化"
            }
            row.date += "   "+ row.time;
            row.operate = "<a href='#' class='btn btn-primary'>编辑</a>";
            return row;
        },
        onLoadSuccess: function() {

        },
        columns: [{
            title: "编号",
            field: "id"
        }, {
            title: "姓名",
            field: "name"
        }, {
            title: "性别",
            field: "gender"
        },{
            title: "年龄",
            field: "birthday_year"
        }, {
            title: "身高",
            field: "height"
        }, {
            title: "腰围",
            field: "waist"
        }, {
            title: "糖化值",
            field: "a1c_value"
        },{
            title: "血糖值",
            field: "glucos_value"
        },{
            title: "体重",
            field: "weight"
        }, {
            title: "糖尿病类型",
            field: "diabetes_id"
        }, {
            title: "联系方式",
            field: "mobile"
        }, {
            title: "创建时间",
            field: "created_at"
        },{
            title: "录入时间",
            field: "updated_at"
        }, {
            title: "仪器编号",
            field: "meter_id"
        }, {
            title: "服务人员",
            field: "doctor"
        }, {
            title: "备注",
            field: "remarks"
        }]
    });
    $("#button_saveId").on("click", function() {
        var data = $("#formId").serialize();
        console.log(data);
        // function getString(Url) {
        //     var str = Url;
        //     var arr = str.split("&");
        //     var obj = new Object();
        //     for(var i = 0; i < arr.length; i++) {
        //         var tmp_arr = arr[i].split("=");
        //         obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
        //     }
        //     return obj;
        // }
        // var a = getString(data);
        // console.log(a);
        $.ajax({
            type: "post",
            url: "api/api-4.php",
            data: data,
            success: function(data) {
                console.log(data);
                if (data.status == 'ok') {
                    $("#button_closeId").click();
                    $("#teacherId").bootstrapTable("refresh");
                }
            }
        })
    });
});