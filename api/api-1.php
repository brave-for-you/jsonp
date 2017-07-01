<?php
    header("Content-Type:application/json");
        $pageNum = $_GET['pageNum'];

        $pageSize = $_GET['pageSize'];

        $start=($pageNum-1)*$pageSize;
        $con = 'http://hengshan.biohermes.com/records/'. $pageNum .'/'. $pageSize;
        $list = file_get_contents($con);
        $arr = json_decode($list, true);
        $total = 1000;
            echo json_encode(
                array(
                    'rows'=>$arr,
                    'pageSize'=>intval($pageSize),
                    'pageNum'=>intval($pageNum),
                    'total'=> intval($total)
                )
            );
?>