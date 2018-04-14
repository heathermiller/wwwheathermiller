---
layout: course
course-ref: cs4240spring2018
---

This course covers techniques for analyzing very large data sets, with an
emphasis on approaches that scale out effectively as more compute nodes are
added. Introduces principles of distributed data management and strategies for
problem-driven data partitioning through a selection of design patterns from
various application domains, including graph analysis, databases, text
processing, and data mining.

In this edition of the course, we will be focusing predominantly on Apache Spark
and Apache Kafka.


## Organization

This course is part traditional lecture, part studio course. That is, the first
half of most course sessions will be traditional lectures. The second half will
vary from live coding, to hands-on exercises (based on the lecture material), to
student codewalks.

## Communication

Communication with the instructor and teaching assistants is exclusively through
[Piazza]({{ site.data.courses[page.course-ref].piazza-url }}). If you wish to contact the instructor privately,
send a private note.

Grades will be managed and assignments will be collected through [the course's Blackboard page]({{ site.data.courses[page.course-ref].blackboard-url }}).

## Recommended Books

There is no required textbook for this course. Given that this is a quickly
evolving area, there are several specialized developer books that you will find
useful for reference and self-study.

- [Learning Spark](https://www.amazon.com/Learning-Spark-Lightning-Fast-Data-Analysis/dp/1449358624/ref=sr_1_4?s=books&ie=UTF8&qid=1516313171&sr=1-4&keywords=learning+spark) (2015), by Holden Karau,‎ Andy Konwinski,‎ Patrick Wendell,‎ Matei Zaharia
- [High Performance Spark](https://www.amazon.com/High-Performance-Spark-Practices-Optimizing/dp/1491943203/ref=sr_1_1?s=books&ie=UTF8&qid=1516313190&sr=1-1&keywords=high+performance+spark) (2017), by Holden Karau,‎ Rachel Warren
- [Kafka: The Definitive Guide](https://www.amazon.com/Kafka-Definitive-Real-Time-Stream-Processing/dp/1491936169) (2017), by Gwen Shapira, Neha Narkhede, Todd Palino ([free PDF](https://www.confluent.io/wp-content/uploads/confluent-kafka-definitive-guide-complete.pdf))

Some of these books are available online (and for free) for Northeastern
University students from [Safari Books Online](http://proquest.safaribooksonline.com.ezproxy.neu.edu/).


## Policies

- There are no deadline extensions or make-up assignments/exams unless you have a major emergency with appropriate documentation. The following scenarios aren't considered emergencies: I have an interview scheduled, my other course has a big homework or project deadline.
- Please note that you are not allowed to share homework solutions with others, or copy anybody else’s homework entirely or in parts. We will check for originality during the grading process. Violations will be reported both to OSCCR and to the college, and all involved parties will receive an F for the course.


## Schedule

<table class="table">
  <thead>
    <tr>
      <th>Week</th>
      <th>Date</th>
      <th>Topic</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Jan 11</td>
      <td>No class (POPL)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jan 18</td>
      <td>Intro, Data Parallelism, and Scala</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Jan 25</td>
      <td>Intro to Spark</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Feb 1</td>
      <td>Key-Value Pairs and Joins</td>
    </tr>    
    <tr>
      <td>5</td>
      <td>Feb 8</td>
      <td>Shuffling, Partitioning</td>
    </tr>    
    <tr>
      <td>6</td>
      <td>Feb 15</td>
      <td>DataFrames & Datasets</td>
    </tr>    
    <tr>
      <td>7</td>
      <td>Feb 22</td>
      <td>Midterm</td>
    </tr>    
    <tr>
      <td>8</td>
      <td>Mar 1</td>
      <td>Other Big Data Tools, Introduction to Streaming</td>
    </tr>    
    <tr>
      <td>9</td>
      <td>Mar 8</td>
      <td>No class (Spring Break)</td>
    </tr>    
    <tr>
      <td>10</td>
      <td>Mar 15</td>
      <td>Spark Streaming</td>
    </tr>    
    <tr>
      <td>11</td>
      <td>Mar 22</td>
      <td>Stateful & Structured Streaming</td>
    </tr>    
    <tr>
      <td>12</td>
      <td>Mar 29</td>
      <td>Apache Kafka</td>
    </tr>    
    <tr>
      <td>13</td>
      <td>Apr 5</td>
      <td>TensorFlow & Hadoop</td>
    </tr>    
    <tr>
      <td>14</td>
      <td>Apr 12</td>
      <td>Final project presentations</td>
    </tr>                                                        
  </tbody>
</table>


## Grading

- In-class quizzes: 10%
- Assignments: 20%
- Midterm: 30%
- Final project proposal: 5%
- Final project: 35%

## Quizzes

Throughout the semester, there will be short quizzes at the end of most
lectures. These quizzes will be very brief, and are not meant to be challenging
or cause students grief. They will contain very straightforward questions right
out of the current lecture. The purpose of these quizzes is merely to encourage
students to follow along with the lecture material.

The lowest quiz score will be dropped; this should make up for a bad day or
unexcused absence from class.

Thus, as a consequence, attendance is expected.

## Assignments

There will be a handful of projects distributed approximately every two weeks.
Projects are due by noon on Thursdays.

Assignments can be submitted on [the course's Blackboard page]({{ site.data.courses[page.course-ref].blackboard-url }})


<table class="table">
  <thead>
    <tr>
      <th>Assignment</th>
      <th>Distributed</th>
      <th>Due</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="assignments/1-anagrams.html">Assignment 1: Anagrams</a></td>
      <td>January 19, noon</td>
      <td>January 25, noon</td>
    </tr>      
    <tr>
      <td><a href="assignments/2-wikipedia.html">Assignment 2: Wikipedia</a></td>
      <td>January 25, noon</td>
      <td>February 1, noon</td>
    </tr>
    <tr>
      <td><a href="assignments/3-stackoverflow.html">Assignment 3: StackOverflow</a></td>
      <td>February 1, noon</td>
      <td>February 15, noon</td>
    </tr>
    <tr>
      <td><a href="assignments/4-timeusage.html">Assignment 4: Time Usage</a></td>
      <td>February 8, noon</td>
      <td>February 22, noon</td>
    </tr>    
  </tbody>
</table>

## Final Project

Students join up in pairs, and will propose a significant data processing
application as a final project. A one page project proposal will be due midway
through the semester describing the project plan.

[More details about the final project]({{ site.baseurl }}/teaching/cs4240/spring2018/final-project.html).

### Timeline for Final Project

**March 1st** Names of partners for final project due in class.

**March 15-19th** Brainstorming meeting about final project topic with Heather. [Claim an appointment slot here](http://heathercmiller.youcanbook.me).

**March 22nd** Project proposal due.

**April 12th** Project demos/presentations in class.

**April 22nd** Project reports in Blackboard before midnight.


## Special Accommodations

If the Disability Resource Center has formally approved you for an academic
accommodation in this class, please present the instructor with your “Professor
Notification Letter” during the class session, so that we can address your
specific needs as early as possible.


## Resources

Slides and other materials will be posted here.

### Jan 18: Intro, Data Parallelism, and Scala

**Slides:**

- [Intro, Why Scala, Why Spark]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-1-1.pdf)
- [Data-Parallel to Distributed Data-Parallel]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-1-2.pdf)
- [Latency]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-1-3.pdf)

**Intro to Scala**

- [Intro to Scala](scala-tutorial/slides.html), slide deck used in class.
- Scala 101, [a free set of short video lectures](https://cognitiveclass.ai/courses/introduction-to-scala/) on cognitiveclass.ai. Taught by [Jamie Allen](https://twitter.com/jamie_allen).
  - Corresponding slides:
  - [2.1 Classes](pdf/2-1.pdf)
  - [2.2 Immutable and Mutable Fields](pdf/2-2.pdf)
  - [2.3 Methods](pdf/2-3.pdf)
  - [2.4 Default and Named Arguments](pdf/2-4.pdf)
  - [2.5 Objects](pdf/2-5.pdf)
  - [3.1 Companion Objects](pdf/3-1.pdf)
  - [3.2 Case Classes and Case Objects](pdf/3-2.pdf)
  - [3.3 Apply and Unapply](pdf/3-3.pdf)
  - [3.4 Synthetic Methods](pdf/3-4.pdf)
  - [3.5 Immutability and Thread Safety](pdf/3-5.pdf)
  - [4.1 Collections Overview](pdf/4-1.pdf)
  - [4.2 Sequences and Sets](pdf/4-2.pdf)
  - [4.3 Option](pdf/4-3.pdf)
  - [4.4 Tuples and Maps](pdf/4-4.pdf)
  - [4.5 Higher Order Functions](pdf/4-5.pdf)
  - [5.1 For Expressions](pdf/5-1.pdf)
  - [5.2 Pattern Matching](pdf/5-2.pdf)
  - [5.3 Handling Options](pdf/5-3.pdf)
  - [5.4 Handling Failures](pdf/5-4.pdf)
  - [5.5 Handling Futures](pdf/5-5.pdf)
  - [All slides](pdf/scala101.pdf)
- [Scala: an Introduction](http://janvitek.org/pdpmr/f17/notes/scala.html), by [Konrad Siek](http://www.cs.put.poznan.pl/ksiek/).
- [Twitter's Scala School](https://twitter.github.io/scala_school/), Scala onboarding materials used by Twitter.

### Jan 25: Intro to Spark

**Slides:**

- [Resilient Distributed Datasets (RDDs)]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-1-4.pdf)
- [Transformations and Actions]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-1-5.pdf)
- [Evaluation in Spark: Unlike Scala Collections!]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-1-6.pdf)
- [Cluster Toplogy Matters!]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-1-7.pdf)
- [Reduction Operations]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-2-1.pdf)


### Feb 1: Key-Value Pairs and Joins

**Slides:**

- [Distributed Key-Value Pairs (Pair RDDs)]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-2-2.pdf)
- [Transformations and Actions on Pair RDDs]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-2-3.pdf)
- [Joins]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-2-4.pdf)


### Feb 8: Shuffling, Partitioning

**Slides:**

- [Shuffling: What it is and why it's important]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-3-1.pdf)
- [Partitioning]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-3-2.pdf)
- [Optimizing with Partitioners]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-3-3.pdf)
- [Wide vs Narrow Dependencies]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-3-4.pdf)

### Feb 15: SQL, Dataframes, and Datasets

**Slides**

- [Structure and Optimization]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-4-1.pdf)
- [Spark SQL]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-4-2.pdf)
- [DataFrames (1)]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-4-3.pdf)
- [DataFrames (2)]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-4-4.pdf)
- [Datasets]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-4-5.pdf)

### Mar 1: Other Big Data Tools, Intro to Stream Processing

**Slides**

- [Other Big Data Tools]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-5-1.pdf)
- [Introduction to Stream Processing]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-5-2.pdf)


### Mar 15: Spark Streaming

**Slides**

- [Spark Streaming and DStreams]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-6-1.pdf)
- [Using foreachRDD]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-6-2.pdf)
- [Windowing]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-6-3.pdf)

### Mar 15: Stateful & Structured Streaming

**Slides**

- [State and DStreams]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-7-1.pdf)
- [Structured Streaming]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-7-2.pdf)

### Mar 29: Apache Kafka

**Slides**

- [Publish-Subscribe]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-8-1.pdf)
- [Kafka Core Concepts]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-8-2.pdf)
- [Kafka Producers]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-8-3.pdf)
- [Kafka Consumers]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-8-4.pdf)

### Apr 5: TensorFlow & Hadoop

**Slides**

- [TensorFlow]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/tensorflow.pdf)
- [Hadoop]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/hadoop.pdf)
