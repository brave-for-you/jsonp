<?php
    header("Content-Type:application/json");
        $con = 'http://hengshan.biohermes.com/offline_data';
        $list = file_get_contents($con);
                $arr = json_decode($list, true);
                    //echo json_encode($arr);
                    //echo $list;
                    echo json_encode(
                                    array(
                                        'rows'=>$arr
                                    )
                                );
?>