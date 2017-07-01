<?php

    header('Content-Type:text/html;charset=utf-8');

    $con = mysql_connect("127.0.0.1","root","root@biohermes");

    if (!$con){
        die('Could not connect: ' . mysql_error());
    }

    mysql_select_db("hengshan", $con);

    //sql 语句
    $sql="INSERT INTO bio_offline_examiners (a1c_value,birthday_year,diabetes_id,doctor,glucos_value,height,meter_id,mobile,name,weight)

    VALUES
    ('$_POST[a1c_value]','$_POST[birthday_year]','$_POST[diabetes_id]','$_POST[doctor]','$_POST[glucos_value]','$_POST[height]','$_POST[meter_id]','$_POST[mobile]','$_POST[name]','$_POST[weight]')";
    if (!mysql_query($sql,$con)){
      die('Error: ' . mysql_error());
    }

    //添加成功
    echo '{"status":"ok"}';
    //关闭跟数据库的连接
    mysql_close($con)
?>