<?php
    header("Content-Type:application/json");
        $searchTime = $_GET['searchTime'];
        $con = "http://hengshan.biohermes.com/monthly-records/". $searchTime;
        $list = file_get_contents($con);
        $arr = json_decode($list, true);
            echo json_encode($arr);
?>