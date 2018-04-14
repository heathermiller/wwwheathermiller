---
layout: course
course-ref: cs4240spring2018
---

# Final Project

Students join up in pairs, and will propose a significant data processing
application as a final project.

The project topic is your choice. We will be looking for you to demonstrate a
good understanding of the big data tools and how they are used to analyze data.
When evaluating your project, we will consider:

- The creation of a data set (by downloading/aggregating/cleaning info, ETL work, etc), if relevant.
- Data analysis and difficulty of computation.
- Decent presentation, summarization, visualization of your results.
- Technical difficulty: new technologies/techniques that you had to deal with to complete the project.
- **Scalability: if the data set grew even bigger, your solution should be able to process it.**

The final project accounts for the largest proportion of your final grade. As
such, you should approach this project accordingly. **We expect that you will
solve a non-trivial problem on a large, real-world dataset, in a scalable way on
a real cluster.**

## Implementation

Your implementation should use big data tools. This may include Spark, but is
not limited to Spark. You are welcome to explore new technologies and this will
be considered to add to the “difficulty” of your project. See the [The Big-Data
Ecosystem Table](http://bigdata.andreamostosi.name/) for many interesting
big-data technologies (some not so “big” and others not even so much about
“data”).

## How big should my data be?

Since this topic of this course is large-scale distributed data processing,
you will be expected to obtain a data set does not fit into memory on a single
machine. Anything less than around 20GB is probably too small.

## Datasets

Here are some datasets to serve as inspiration for your project:

- [Complete Public Reddit Comments Corpus](https://archive.org/details/2015_reddit_comments_corpus) (150GB compressed)
- [Page view statistics for Wikimedia projects](https://dumps.wikimedia.org/other/pagecounts-raw/) (∼2GB/day compressed)
- [Stack Exchange Data Dump](https://archive.org/details/stackexchange) (25GB)
- [Enron Emails](https://www.opensciencedatacloud.org/publicdata/enron-emails) (154.1GB)
- [Million Song Dataset](https://www.opensciencedatacloud.org/publicdata/million-song-dataset) (199GB)
- [Project Gutenberg](https://www.opensciencedatacloud.org/publicdata/gutenberg), The text of over 42,000 free ebooks. (742GB)
- [Dark Net Market archives, 2011-2015](https://archive.org/details/dnmarchives) (52GB compressed)

**Other lists of datasets:**

- [Reddit /r/datasets](https://www.reddit.com/r/datasets/)
- [Public data sets on AWS S3](https://archive.org/details/datasets)
- [Academic Torrents](http://academictorrents.com/)
- [Open Science Data Cloud](https://www.opensciencedatacloud.org/publicdata/)
- [Great Github list of public data sets](http://www.datasciencecentral.com/profiles/blog/show?id=6448529%3ABlogPost%3A268197)

## Final Project Report

Your report should provide a clear introduction and problem sketch, a detailed walkthrough of the computations that you performed, and a treatment of the results you obtained. Your report should be around 10-12 pages in length.

### Suggested format, three parts:

- **Part 1**: Introduction, problem motivation, data
  - Introduce and motivate the problem you're solving, **including a list of the specific questions you are answering with your analysis**. (1 page)
  - Introduction of the datasets you started with, including schema information (1 page)
- **Part 2**: Computation
  - High-level diagram and explanation of your entire pipeline, including data cleaning (1 page)
  - Description of the data cleaning that you have done. What did you transform the data _from_ and _to_? (1 page)
  - Choose 3 interesting computations, highlight them, and walk through them in depth in the text (1 page per computation)
  - Challenges that you came across and how you overcame them (1 page) (e.g., repartitioning data for performance improvements, etc.)
  - Description of resources and tools you used to do your project, and the overall cost and amount of time it took (1 page)
    - What cluster provider did you go with? How many machines did you use? Of what type, and in what datacenter?
    - What systems did you use, and what language did you write in? What libraries did you use? What did your dependencies look like?
    - How much did it cost overall, and how much time did each of your computations roughly take?
- **Part 3**: Results (minimum 3 pages)
  - Give a detailed treatment of what you results found, broken down into sections by the questions you set out to ask.
  - Include visualizations of your results and/or screenshots of your system in use.


### What I'm expecting each of you to deliver:

- The above final report (either in PDF or as a static website) submitted to Blackboard by **11:59pm Sunday April 22nd**.
- A link to a repository that I can reach that hosts your code. If your project is private, you can add me as a contributor (my GitHub username: heathermiller, my CCS GitHub username: heather)
