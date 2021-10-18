<?php

// sql to create table

function codeCrear_tablas()
{
   $dbconn = Code_DB_conn();

   $sql_create_etapa_cliente =
   $dbconn->prepare(
      "CREATE TABLE IF NOT EXISTS  etapa_cliente (
      id_etapa int NOT NULL AUTO_INCREMENT,
      nombre_etapa varchar(10) not null,
      id_estado_etapa int null,
      PRIMARY KEY (id_etapa)
      )"
   );

   $sql_create_estado_etapa =
   $dbconn->prepare(
      "CREATE TABLE IF NOT EXISTS  estado_etapa (
      id_estado_etapa int NOT NULL AUTO_INCREMENT,
      fecha_inicio date null,
      fecha_fin date null,
      PRIMARY KEY (id_genero)
      )"
   );

   $sql_create_etapa_cliente->execute();
   $sql_create_etapa_cliente->closeCursor();
   $dbconn->beginTransaction();

   $sql_create_estado_etapa->execute();
   $sql_create_estado_etapa->closeCursor();
   $dbconn->beginTransaction();

   $sql_select =
   $dbconn->prepare(
      "SELECT * FROM etapa_cliente"
   );

   // $sql_select->execute();
   // $result = $sql_select->fetchAll();
   // // print_r($result);
   // echo count($result);

   // if (count($result) == 0) {

   //    $sql_select =
   //    $dbconn->prepare(
   //       "INSERT INTO etapa_cliente (nombre_etapa, lastname, email)
   //       VALUES ('John', 'Doe', 'john@example.com')");

   //    $sql_select->execute();

   //    $sql_select =
   //    $dbconn->prepare(
   //       "INSERT INTO etapa_cliente (nombre_etapa, lastname, email)
   //       VALUES ('John', 'Doe', 'john@example.com')");
   //    $sql_select->execute();

   //    $sql_select =
   //    $dbconn->prepare(
   //       "INSERT INTO etapa_cliente (nombre_etapa, lastname, email)
   //       VALUES ('John', 'Doe', 'john@example.com')");

   //    $sql_select->execute();

   // }

}
