<?php

function insideOut($arr) {
    $len = count($arr);

    if ($len % 2 != 0) {
        return $arr;
    }

    $middle = $len / 2;

    $firstHalf = array_slice($arr, 0, $middle);
    $secondHalf = array_slice($arr, $middle);

    return array_merge($secondHalf, $firstHalf);
}


$numExample = [1, 2, 2, 1];
$result1 = insideOut($numExample);
print_r($result1);


$stringExample = ["Everyone", "says", "Rahul", "is", "REALLY", "awesome"];
$result2 = insideOut($stringExample);
print_r($result2);


?>
