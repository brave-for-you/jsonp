<?php
    header("Content-Type:application/json");
        $pageNum = $_GET['pageNum'];

        $pageSize = $_GET['pageSize'];

        $pageData = $_GET['pageData'];

        $start=($pageNum-1)*$pageSize;
        $con = 'http://hengshan.biohermes.com/records/'. $pageNum .'/'. $pageSize .'/'. $pageData;
        $list = file_get_contents($con);
        $arr = json_decode($list, true);
        $total = 100;
            echo json_encode(
                array(
                    'rows'=>$arr,
                    'pageSize'=>intval($pageSize),
                    'pageNum'=>intval($pageNum),
                    'total'=> intval($total)
                )
            );
?>