A simple project as part of interviewing for Yummly. The goal was to index thousands of recipes quickly and make them 
queryable via a query language specified in the assignment. Then the entire project was supposed to be containerized 
and runnable with minimal effort by anyone evaluating the project.

### What It Does

- Given the command `index doc-id token1,..., tokenN` which is a "recipe" containing some list of ingredients, it should index the recipe so that it can be searched later.
- Queries are conducted via the command `query <query string>` using the specified query language. An example query might be `query (butter | potato) & salt`. 
- The commands and query DSL are defined in the [problem statement](https://github.com/jensawyer/indexService/blob/master/SearchEngine%20Programming%20Exercise.txt).

### Why It’s Interesting

- Most candidates implemented a reverse index, but as the instructions allowed for using any open source tools and they wanted to index thousands as part of testing, I went with Lucene.
- Lucene has a query language that looks very similar to the language defined, but it wasn't the same so I implmented the 
language using parser combinators.
- I included clear instructions to run the project locally and in a container, including the Dockerfile as required.
- This is an example of the sort of project that can be really useful for a pair programming interview where we add another fetaure.
- It was really fun for me as a candidate too!

### How It’s Built

- Scala 2.13.1
- scala parser combinators for th query language
- lucene4s to work with Lucene from Scala for indexing and querying
- Tests via scalatest 