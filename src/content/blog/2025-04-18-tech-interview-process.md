---
title: "Refreshing the Tech Hiring Process"
date: 2025-04-18 10:00:00 -0700
categories: [managing, hiring]
tags: [interview, hiring, tech interviews]
---


While I was at my last company, one of the issues that came up was refining our tech hiring process. No one liked LeetCode-style tests.  We found that they were not indicative of how the person would write real world code or fit into the team. When people are nervous, as is normal for an interview, they aren’t at their best for solving these puzzles either. No job works like that in real life and the entire scenario has always felt like some rite of passage defined by someone in megatech then kept well past its expiration.

# The Problem
A reminder for anyone who isn’t already familiar, the hiring process at many companies looks like this:
1. Initial Screen – Basic questions about whether the person really matches the experience they are claiming. Some companies stick LeetCode here too!
2. 1 or 2 additional coding interviews – Yet more LeetCode timed challenges
3. 1or 2 System design – Design a large-scale system of some sort unrelated to anything else seen so far.
4. 1 or 2 Behavioral questions – Trying to suss out how the candidate works with others to some extent by asking fairly routine questions.
5. Project retrospective – deep dive into a recent project and the candidate’s role. In almost every case, unverifiable or quantifiable as it’s almost never possible to expose that level of detail on real work.
      
# What’s wrong with this?
1. It motivates people to practice and memorize LeetCode problems rather than actually improving their practical skills that you really need. Now there are even tools that let people secretly use AI to solve them, thus “cheating” – even though in 2025 you want to know how they would make use of AI! This interview process is at odds with your goals!
2.	LeetCode does not represent anything most engineers do or the skills required. For example, if the role is for a backend platform dev making REST APIs and deploying microservices, do they really know how to do this well? Are they just good interviewees, but a lousy engineer in a team?
3.	Engineering staff doing these LeetCode interviews are not cheap and are often quite busy working on your product, making this process expensive. Each interview is about 45 minutes long but requires time for feedback to the hiring team afterward, so each is really about an hour, bringing the total time across all these interviews to 6-9 hours – a grueling process for your team and the candidate who is likely doing this process with multiple companies. And how many interviewers accidentally ask overlapping or repeated questions? This is a time suck for everyone involved.
4.	All but the most low-EQ of us knows exactly what sorts of answers are acceptable for “tell me a time you had to deal with someone that disagreed with you” regardless of what happened in reality. After all these interviews, the interviewers still come out of this not knowing how the candidate will work with the team or whether they’ll turn out to be toxic.
5.	For candidates who have test-taking anxiety, LeetCode style interviews can filter out candidates who otherwise would be excellent in the trenches with the team in an actual work situation in favor of people who are really good at LeetCode style interviews. Interview nerves make everyone slower and error prone!
      
# Our Solution

So what did we do? First, we asked ourselves what we were specifically what we hoped for in a new software engineer for the team.
      
We wanted an engineer who:
* Fits in well with the team, knows the tools and tech stack the team uses, and ideally becomes productive writing quality, maintainable code shortly after joining.
* Can provide and accept constructive feedback in meetings or code reviews, is open to learning new things, and is not going to be a toxic jerk that destroy team morale.
* Communicates well cross-functionally, within the team, and via tickets and documentation.
* Can use AI to speed up their work without sacrificing quality. AI only works well if the engineer knows how to use it properly, when it helps versus when it creates more problems, as well as the security issues such tools can potentially create. This is a very important skill and tool to understand now. We wanted responsible users, not “vibe coders” or people who refuse to even try incorporating it into their workflow. The resulting code should be readable, well organized, secure, use best practices, and follow our code guidelines.
 
We decided to fix this process by making it reflect reality and the needs of the company.

First, the recruiter and hiring manager should be working closely together and meeting regularly about filtering through the candidate applications. It is vital that the recruiter actually understands tech and what the hiring manager needs to move this quickly without accidentally dropping the best candidates. The hiring manager has a busy schedule so they are very dependent on the recruiter knowing their stuff and forwarding good matches. Of the set of applicants that the hiring manager deems interesting candidates for the team, the recruiter can then reach out to set up the tech screen.

# The Initial Screen

During this call, ask questions as before. Then if the person seems like someone to move forward, we give them the project. The tiny project should be thoughtfully designed because it is going to form the foundation of the entire interview flow, as I’ll show in the following sections.

This well-defined project should be honestly **completable within 1-2 hours** and it should have ways in which it could be expanded upon later and potentially imagined as part of a larger system (even if that system is a little silly). You must respect their time as they are likely applying to lots of places and might have more than one of these to do. The candidate should be allowed to use whatever libraries or frameworks are available in support of the project goal.

Importantly, this tiny project ***_should obviously not be free labor for you_***. Respect the candidate’s time and remember you are in pursuit of a good team member for the long haul. Candidates know when you’re taking advantage of them and you can lose good people if you abuse this step. Worse yet, your company looks bad and you gain a reputation that leads to a harder time finding good talent that wants to work with you.

Give this step a reasonable deadline. You need the hiring process to move quickly both for your team and the candidate, but you should balance it with the fact that the person may be employed and struggling to find time. I like to try to make sure there is one weekend in between the time of assignment and the deadline.

Presuming the project the candidate turns in shows that they can follow instructions and submit code that meets your basic quality standards, then it’s time to schedule the rest of the interviews!

# The Pair-Programming Tech Interview

Next, you set up an interview where the candidate will quickly explain their code from the tech screen to your tech interviewer(s) even though you should already know how it works. This shows whether they paid attention to what AI helped them do. Then, together, they will pair program to add a new feature or two to the project while the candidate shares their screen. Instruct the candidate to work as they would normally work, using any AI tools they normally use and let them look things up freely if they need to.

It is amazing how much easier it is to get to the behaviors you want to see before hiring. You get to see how the person responds to questions about their code, asks questions, handles new ideas and feedback. You’ll see how they think about expanding an existing codebase to accommodate the new feature. If they use AI to speed up coding, you can see how they use it. If they don’t, you can ask about it.

If you are one of the organizations that currently requires multiple LeetCode timed tests because you want feedback from more than one engineer, you can add another team member to this interview too and maybe make it a 15-30 min longer instead of doing multiple individual interviews.

Aside from the benefit of more and better information for the hiring manager and team members doing the interview, this method comes with an added bonus for the candidate. It is always less anxiety inducing to work with your normal tools using your normal processes on existing code that you are familiar with! Your interviewers will get closer to seeing the actual person that might join their team than LeetCode timed challenges ever will. Ideally, we end up with happier candidates and better information for hiring decisions.

# Expanding on the Pair-Programming Tech Interview for System Design

Ok, so that interview shows whether they can code. What if the project could be extended into a system design problem? A thoughtful problem could potentially work this way while LeetCode challenges never could. For example, if the position is for someone who works on the backend platform making APIs and deploying microservices, the project should have an API and Dockerfile.

If this is the case, you have something to work with in terms of designing a system. Could this project be imagined as a service in a larger system? If your product took off and needed to handle Facebook levels of data, how would this scale? What other services are needed to make this a full-fledged backend system? What if this was the foundation of a product that took off? Where would the bottlenecks be and how might they be handled?

If your original tech screen project was well designed for the interview flow, this conversation is possible and it can reveal a lot about how the candidate thinks at a system level. It can also reveal even more about the candidate’s behavior as they work to whiteboard or otherwise describe this system under questioning and in collaboration with the interviewer.

A benefit of this is that the candidate is already thinking about this from the Pair-Programming Interview, but for you the benefit is you will not get another regurgitated, memorized design from a system design interview prep book. Everyone must think critically here!

# Rethinking Other Parts of the Interview

A tech interview process like ours can potentially help you hire faster and reduce the overhead of your interview process. You can still do your culture fit and behavioral interviews if you want as they can be helpful for non-technical colleagues, but it might be more valuable to couch them within interviews about cross-functional collaboration or business awareness. In most companies it isn’t necessary to put people through 7 or 8 interviews and the process isn’t actually getting you good intel on whether the person is going to be a good engineering hire.


 




