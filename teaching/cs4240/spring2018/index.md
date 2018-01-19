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
[Piazza]({{ piazza-url }}). If you wish to contact the instructor privately,
send a private note.

Grades will be managed, and assignments will be collected through [the course's Blackboard page]({{ blackboard-url }}).

## Recommended Books

There is no required textbook for this course. Given that this is a quickly
evolving area, there are several specialized developer books that you will find
useful for reference and self-study.

- [Learning Spark](https://www.amazon.com/Learning-Spark-Lightning-Fast-Data-Analysis/dp/1449358624/ref=sr_1_4?s=books&ie=UTF8&qid=1516313171&sr=1-4&keywords=learning+spark) (2015), by Holden Karau,‎ Andy Konwinski,‎ Patrick Wendell,‎ Matei Zaharia
- [High Performance Spark](https://www.amazon.com/High-Performance-Spark-Practices-Optimizing/dp/1491943203/ref=sr_1_1?s=books&ie=UTF8&qid=1516313190&sr=1-1&keywords=high+performance+spark) (2017), by Holden Karau,‎ Rachel Warren

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
      <td>DataFrames</td>
    </tr>    
    <tr>
      <td>7</td>
      <td>Feb 22</td>
      <td>Datasets</td>
    </tr>    
    <tr>
      <td>8</td>
      <td>Mar 1</td>
      <td>Midterm</td>
    </tr>    
    <tr>
      <td>9</td>
      <td>Mar 8</td>
      <td>No class (Spring Break)</td>
    </tr>    
    <tr>
      <td>10</td>
      <td>Mar 15</td>
      <td>Intro to Streaming and Spark Streaming</td>
    </tr>    
    <tr>
      <td>11</td>
      <td>Mar 22</td>
      <td>Intro to Apache Kafka</td>
    </tr>    
    <tr>
      <td>12</td>
      <td>Mar 29</td>
      <td>Apache Kafka</td>
    </tr>    
    <tr>
      <td>13</td>
      <td>Apr 5</td>
      <td></td>
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
      <td><a href="assignments/1-anagrams.html">Assignment 1: Intro to Scala</a></td>
      <td>January 19, noon</td>
      <td>January 25, noon</td>
    </tr>                                                   
  </tbody>
</table>

## Final Project

Students join up in pairs, and will propose a significant data processing
application as a final project. A one page project proposal will be due midway
through the semester describing the project plan.


## Special Accommodations

If the Disability Resource Center has formally approved you for an academic
accommodation in this class, please present the instructor with your “Professor
Notification Letter” during the class session, so that we can address your
specific needs as early as possible.


## Resources

Slides and other materials will be posted here.

### Jan 18: Intro, Data Parallelism, and Scala

**Slides:**

- [Intro, Why Scala, Why Spark]({{ site.baseurl }}/teaching/spring2018/cs4240/pdf/spark-1-1.pdf)
- [Data-Parallel to Distributed Data-Parallel]({{ site.baseurl }}/teaching/spring2018/cs4240/pdf/spark-1-2.pdf)
- [Latency]({{ site.baseurl }}/teaching/cs4240/spring2018/pdf/spark-1-3.pdf)

**Intro to Scala**
