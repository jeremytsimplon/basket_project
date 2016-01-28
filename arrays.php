<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Arrays</title>
  </head>
  <body>
    <?php
// Afficher les erreurs à l'écran
ini_set('display_errors', 1);
// Enregistrer les erreurs dans un fichier de log
ini_set('log_errors', 1);
// Nom du fichier qui enregistre les logs (attention aux droits à l'écriture)
ini_set('error_log', dirname(__file__) . '/log_error_php.txt');
?>
    <h2>Saving arrays</h2>
    <?php
      // Saving arrays
      $array["a"] = "Foo";
      $array["b"] = "Bar";
      $array["c"] = "Baz";
      $array["d"] = "Womez";

      // serialize un array, permet son enregistrement dans un fichier par exemple
      $str = serialize($array);
      // encode pour le convertir en une version safe pour le passer sur le web
      $strenc = urlencode($str);
      print $str . "\n";
      print $strenc . "\n";

      // decode
      $arr = unserialize(urldecode($strenc));
      var_dump($arr);

      ?>
      <h2>Holes in arrays</h2>
      <?php
      //holes in arrays
      $array["a"] = "Foo";
      $array["b"] = "";
      $array["c"] = "Baz";
      $array["d"] = "Wom";
      print end($array);

      while($val = prev($array)) {
          print $val;
      }
      ?>
      <h2>Sort in array</h2>
      <?php
        $capitalcities['England'] = 'London';
        $capitalcities['Wales'] = 'Cardiff';
        $capitalcities['Scotland'] = 'Edinburgh';
        // echo "Fonction sort()";
        // sort($capitalcities);
        // var_dump($capitalcities);
        echo "Fonction ksort()";
        ksort($capitalcities);
        var_dump($capitalcities);
        // echo "Fonction asort()";
        // asort($capitalcities);
        // var_dump($capitalcities);
      ?>
      <h2></h2>
  </body>
</html>
