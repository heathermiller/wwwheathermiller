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
