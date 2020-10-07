$nodeJsPath = '/var/www/html/projectfolder/js/nodefunc.js';

$ret = exec("node ".$nodeJsPath.' 2>&1', $out, $err);
echo "OUT: ".json_encode($out);
echo "ERROR: ".json_encode($err);
