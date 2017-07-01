/**
 * Created by sakura on 2017/6/14.
 */
$(function() {
    $("#search_02").on("click",function () {
        var pageData = $("#search_01").val();
        $("#msiId").bootstrapTable('destroy');
        $("#msiId").bootstrapTable({
            url: "api/api-2.php",
            method: "get",
            sidePagination: "server",
            queryParams: function(params) {
                params.pageNum = params.offset / 10 + 1;
                params.pageSize = "10";
                params.pageData = pageData;
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
                row.operate = "<a href='#' class='btn btn-primary' data-toggle='modal' data-target='#clickId'>编辑</a>";
                return row;
            },
            onLoadSuccess: function() {

            },
            columns: [{
                checkbox: true
            }, {
                title: "编号",
                field: "id"
            }, {
                title: "标准时间",
                field: "created_at"
            }, {
                title: "仪器时间",
                field: "date"
            },{
                title: "仪器序列号",
                field: "meter_id"
            }, {
                title: "测试结果",
                field: "value"
            }, {
                title: "结果类型",
                field: "type"
            }, {
                title: "测试温度",
                field: "temperature"
            }, {
                title: "本设备糖化累计",
                field: "a1c_num"
            }, {
                title: "本设备血糖累计",
                field: "glucos_num"
            }, {
                title: "测试人",
                field: "people"
            }, {
                title: "设备拥有者",
                field: "own"
            }, {
                title: "操作",
                field: "operate",
                align: "center"
            }]
        });
    });
    $("#msiId").bootstrapTable({
        url: "api/api-1.php",
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
            row.operate = "<a href='#' class='btn btn-primary' data-toggle='modal' data-target='#clickId'>编辑</a>";
            return row;
        },
        onLoadSuccess: function() {

        },
        columns: [{
            checkbox: true
        }, {
            title: "编号",
            field: "id"
        }, {
            title: "标准时间",
            field: "created_at"
        }, {
            title: "仪器时间",
            field: "date"
        },{
            title: "仪器序列号",
            field: "meter_id"
        }, {
            title: "测试结果",
            field: "value"
        }, {
            title: "结果类型",
            field: "type"
        }, {
            title: "测试温度",
            field: "temperature"
        }, {
            title: "本设备糖化累计",
            field: "a1c_num"
        }, {
            title: "本设备血糖累计",
            field: "glucos_num"
        }, {
            title: "测试人",
            field: "people"
        }, {
            title: "设备拥有者",
            field: "own"
        }, {
            title: "操作",
            field: "operate",
            align: "center"
        }]
    });
});