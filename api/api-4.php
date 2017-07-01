<?php

    header("Content-Type:application/json");
        $name = $_POST['name'];
        $birthday_year = $_POST['birthday_year'];
        $height = $_POST['height'];
        $weight = $_POST['weight'];
        $mobile = $_POST['mobile'];
        $glucos_value = $_POST['glucos_value'];
        $a1c_value = $_POST['a1c_value'];
        $diabetes_id = $_POST['diabetes_id'];
        $meter_id = $_POST['meter_id'];
        $doctor = $_POST['doctor'];
        echo json_encode(
                array(
                    'name'=>$name,
                    'height'=>$height,
                    'weight'=>$weight,
                    'mobile'=>$mobile,
                    'glucos_value'=>$glucos_value,
                    'a1c_value'=>$a1c_value,
                    'diabetes_id'=>$diabetes_id,
                    'meter_id'=>$meter_id,
                    'doctor'=>$doctor,
                    'birthday_year'=>$birthday_year,
                )
            );
?>