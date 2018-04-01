---
layout: blog
tag: "spark"
title: "Running Spark on a Cluster: The Basics"
by: "Heather Miller"
subtitle: "Part 1: Start a Spark Cluster and Use The spark-shell"
---


In this short guide, we'll walk through how to run modest Spark jobs on a
cluster. We'll do this in 2 parts:

- **Part 1:** (the [previous guide]({{ site.baseurl }}/blog/launching-a-spark-cluster-part-1.html)) We'll cover how to start up a Spark cluster using the flintrock command-line tool, and we'll run a simple word count example using the `spark-shell`, Spark's interactive REPL.
- **Part 2:** (this guide) We'll connect our Spark job to an S3 bucket, add a simple library dependency, and we'll develop the job in a normal IDE, using `spark-submit` to submit our job and its dependencies to the cluster, without invoking the spark-shell.


## Downloading Spark

Head over to [https://spark.apache.org/downloads.html](https://spark.apache.org/downloads.html).
(*At the time of writing, Spark 2.2.0 will offer the smoothest set-up experience.*)

Simply select the 2.2.0 release of Spark, ensure that the "pre-built for Apache
Hadoop 2.7 and later" option is selected, and simply download [Spark 2.2.0,
pre-built for Apache Hadoop 2.7 and
later](https://www.apache.org/dyn/closer.lua/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz).

Reasons to use flintrock over AWS’s Elastic Map Reduce (EMR); with flintrock,
it's easier to pause a running cluster or do a number of Spark-specific cluster
tasks directly from the command-line.

Once downloaded, unzip, and cd into the `spark-2.2.0-bin-hadoop2.7` directory. To ensure everything works as expected, simply do:

```shell
$ ./bin/spark-shell
```

And you should see the following:

```
Spark context Web UI available at http://192.168.1.7:4040
Spark context available as 'sc' (master = local[*], app id = local-1522601680458).
Spark session available as 'spark'.
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /___/ .__/\_,_/_/ /_/\_\   version 2.2.0
      /_/

Using Scala version 2.11.8 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_121)
Type in expressions to have them evaluated.
Type :help for more information.

scala>
```
