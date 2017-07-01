<?php
    header("Content-Type:application/json");
        $con = "http://hengshan.biohermes.com/monthly-records/";
        $list = file_get_contents($con);
        $arr = json_decode($list, true);
            echo json_encode($arr);
?>