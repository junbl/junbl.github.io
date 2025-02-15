#show link: underline

#v(100pt)

#align(center, text(17pt, smallcaps[
    *On the distribution of dice roll results in the Moxie Role-Playing Game System*
]))
#align(center)[Juniper Bloom]

= Introduction
Hi friends! This paper will lay out the math to calculate the probability of various outcomes when rolling dice according to the rules of the Moxie Role-Playing Game (RPG) System.

The intended audience is someone with a basic familiarity with the Moxie rules (though this is optional) and with minimal knowledge of probability or statistics.

I'll go over the basic rules of rolls in Moxie and how to calculate the probability of each outcome. The base probabilities of each roll are set based on the default rules of Moxie, but the equations are designed to adapt to changes in this setup, e.g. if you're interested in modifying the distribution or replacing the size of a die, either for designing games in the Moxie system or for existing mechanics that change the distribution (such as the "fives count as sixes, fours count as ones" mechanic).

= Dice, and how to roll them
This section will go over the basic rules of rolling dice in Moxie. If you're familiar, you can skip this.

Moxie makes use of two kinds of dice. The first is a six-sided die, notated with _*d*_. The second is an eight-sided die, called a *thorn*, notated with _*t*_. Together, for example, the expression 3d1t means to roll three six-sided dice and one eight-sided die (or thorn).

Rolls of this kind in Moxie are either "action" or "defense" rolls. The math is the same for either so I'll just refer to them as "rolls".

The five possible outcomes of a roll are as follows:

 - Disaster
 - Grim
 - Messy
 - Perfect
 - Critical

The outcome is determined by the maximum number rolled on the six-sided dice. If the maximum is a 1, 2, or 3, it's a Grim. If it's a 4 or 5, it's Messy. If it's a 6, it's Perfect. If multiple 6s are rolled, it's a Critical.

For each thorn, if you roll a 7 or an 8, that *cuts* the outcome by one level: Perfect to Messy, Messy to Grim, Grim to Disaster. Criticals ignore thorns.

= Probabilities of each outcome

First, I'll go over the probabilities of rolling each outcome, ignoring thorns for now. Then, in the next section, we'll expand this to take thorns into account.

== Disasters

Let's take this in order. First up is Disaster. You can only roll a Disaster if you get cut by a thorn, and we're not worrying about thorns yet, so that's easy!

#align(center, table(
    columns: (auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability*]),
    [Disaster], $0$
))

== Grims

Next is Grim. To roll a Grim, the maximum result on any of your six-sided dice needs to be a 1, 2, or 3. So, for a single die, the probability of rolling a Grim is:

$ p_G (1) = 1/2 $

Now, let's generalize that to multiple dice. If we have two dice, then both of them individually need to be Grim results: $1/2 dot 1/2 = 1/4$. If we have three, all need to be Grims: $1/2 dot 1/2 dot 1/2 = 1/8$. So for $d$ six-sided dice, that gives us the following equation:

$ p_G (d) = (1/2) ^ d $

Simple enough!

#align(center, table(
    columns: (auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability*]),
    [Disaster], $0$,
    [Grim], $(1/2) ^ d$,
))

== Messies

Next, we have Messy. This one is unfortunately the most complicated, since it's a little more difficult to get the probability that we roll something in the middle instead of the high or low end.

To roll a Messy, we need to have the highest die result on our six-sided dice be a 4 or a 5. This gives us a single-die probability of:

$ p_M (1) = 1/3 $

Let's think through our cases, starting with 2d (two six-sided dice). We have to roll at least one 4 or 5, which is a probability of 1/3. Then, the other die can be either a Grim or another Messy (but not a Perfect).

Let's start with the probability of rolling exactly one Grim and one Messy. Either the first die is a Messy and the second is Grim, or the first die is Grim and the second is Messy.

$
p_(M G) (2) &&=& 1/3 dot 1/2 + 1/2 dot 1/3 \
         &&=& 2 dot 1/3 dot 1/2 \
$

I'm leaving the individual probabilities $p_M (1)$ and $p_G (1)$ unsimplified here so that we can more easily see the pattern.

The other option is rolling two Messies:

$
p_(M M) (2) &&=& 1/3 dot 1/3 \
         &&=& (1/3)^2 \
$

So with the default distribution, we end up with a total of:

$
p_M (2) &&=& p_(M G) (2) + p_(M M) (2) \
        &&=& 2 dot 1/3 dot 1/2 + (1/3) ^ 2 \
        &&=& 1/3 + 1/9 \
        &&=& 4/9 \
$

That's fine and good, but we don't quite have a pattern yet. Let's try 3d.

For three dice, we have similar cases:
 - One Messy and two Grims
 - Two Messies and one Grim
 - Three Messies

Starting with the first, we're rolling one Messy and two Grims, with three possible orderings:

$ p_(M G G) = 1/3 dot 1/2 dot 1/2 + 1/2 dot 1/3 dot 1/2 + 1/2 dot 1/2 dot 1/3 $

You can see how this is getting a little complex. I'm gonna take a small detour here to talk about binomials - the distribution and the coefficient. If you're familiar, feel free to skip.

== An interlude on binomials

The binomial distribution represents the the number of "successes" in $n$ "trials" or "experiments". For instance: if you roll a six-sided die, how many times do you get a 6 if you roll it 4 times? In this case, the "success" is rolling a 6 (which has probability $p = 1/6$) and the trials is the number of rolls ($n = 4$).

To find the probability that you get a certain number of successes $k$, you need to multiply the probability that you "succeeded" $k$ times by the probability that you failed the rest of the times, and then also multiply that by the number of ways that you could select $k$ values out of $n$ total. Hopefully the successes and failures part makes intuitive sense, but that last part might be confusing, so let's dig into that. To illustrate why we need that, let's find a slightly different probability---what's the likelihood that we roll a 6 on the first trial, and then no more 6s on any of the other trials?

$ 1/6 dot 5/6 dot 5/6 dot 5/6 $

First we roll the 6 with probability 1/6, then all the others must be 1, 2, 3, 4, or 5 (probability 5/6). The probability of a failure is often written $q$ for a corresponding $p$; in this case, we have:

$ q = 1 - p = 5/6 $

However, for the binomial (and for our Moxie dice rolls), we don't care about the order, just the number of successes. No matter what the order is, it comes out to the same probability (as we saw above---probability of Messy then Grim is the same as the probability of a Grim then Messy). So we just need to multiply that by the number of possible orderings of successes and failures to count all those different options. We can rephrase this as the number of ways to pick $k$ successes out of $n$ total trials---you can think of an ordering as either e.g. _success, fail, fail, success_, or you can think of it as _the first and fourth are successes_.

So for $k = 1$, $n = 4$, and $p = 1/6$:

$ p(1) = 4 (1/6)^1 (5/6)^3 $

It's fairly intuitive to say that if you want to pick 1 item out of 4 options, you have 4 different ways to do that (you either pick the first, the second, the third, or the fourth). But what if you want to pick 2 items? If S denotes a success (one of the "items" we're "picking") and F denotes a failure, we could have any of the following permutations:

$
S S F F \
S F S F \
S F F S \
F S S F \
F S F S \
F F S S \
$

So 6 different options. If $n$ was 6 and we wanted to choose 2, we'd have 15 different options. If $n$ was $10$ and we chose $2$ we'd have 45 different options! This can balloon pretty quickly - luckily $n$ is pretty small for our purposes so we can keep it in our head more easily. However, we still want a way to represent this mathematically, instead of writing out all the different options.

This number, the number of ways to choose $k$ items out of a set of $n$, is referred to as the "binomial coefficient," due to its relevance to the common binomial distribution discussed above. In an equation, it's written like this:

$ binom(n, k) $

and read as "n choose k." The formula to calculate this is:

$ n!/(k! (n-k)!) $

where $!$ denotes the factorial, or the product of all numbers up to and including $n$.

$ n! = n dot (n-1) dot (n-2) dot (n-3) dot ... dot 2 dot 1 $

I won't go into the derivation of the equation for the binomial coefficient because I don't remember it. Wait, no, I mean---the derivation of this equation is left as an exercise to the reader. There we go.

Before we get back to our Messy probabilities, let's use this binomial coefficient to get a general form of the probability of getting $k$ successes in $n$ trials with probability $p$ of a single success. For $k = 1$, we have:

$ p(1) = 4 (1/6)^1 (5/6)^3 $

Since that 4 in there represents the number of ways we can choose 1 item from 4 options, let's replace that with our new binomial coefficient.

$ p(1) = binom(4, 1) (1/6)^1 (5/6)^3 $

Now we can see the general form a little better. So, let's define the "probability mass function" (or PMF) of the binomial distribution, which is the function that tells us the probability of a certain combination of $k$, $n$, and $p$:

$ p(k, n, p) = binom(n, k) (p)^k (1-p)^(n-k) $

So, we have $k$ trials that we need to succeed with probability $p$, multiplied by $n-k$ trials that fail with probability $1-p$, all multiplied by the number of ways to order those successes and failures.

== Back to our mess

So, how does the binomial relate to our calculations for rolling a Messy? Where we left off, we were trying to find the probability of a Messy rolling 3d, by adding up the probability of each of the following cases:
 - One Messy and two Grims
 - Two Messies and one Grim
 - Three Messies

For the first case, we left off with this equation:

$ p_(M G G) = 1/3 dot 1/2 dot 1/2 + 1/2 dot 1/3 dot 1/2 + 1/2 dot 1/2 dot 1/3 $

This should look pretty similar to what we were doing with the binomial, with the modification that the probability of what we were calling a "failure" is now not $1-p$, but instead the probability of rolling a Grim. This is because we're not just interested in the number of 4s and 5s rolled, but that the other dice rolled were 1, 2, or 3---instead of the more basic case above where the success and failure are just "did you roll this" or "did you roll anything else."

Let's write $p_(M G G)$ using our modified binomial function:

$ p_(M G G) = binom(3, 1) (1/3)^1 (1/2)^(3-1) $

Now we can start to see the pattern! To roll two Messies and one Grim, we have:

$ p_(M M G) = binom(3, 2) (1/3)^2 (1/2)^(3-2) $

And to roll three Messies:

$ p_(M M M) = binom(3, 3) (1/3)^3 (1/2)^(3-3) $

As a sanity check, we'd intuitively expect the probability of rolling three Messies to just be $(1/3)^3$. And so if we simplify the above, we get:

$
p_(M M M) &&=& binom(3, 3) (1/3)^3 (1/2)^(3-3) \
          &&=& 1 (1/3)^3 (1/2)^(0) \
          &&=& (1/3)^3 \
$

With that---we have our three cases:
$
p_M (3) &&=& p_(M G G) + p_(M M G) + p_(M M M) \
p_M (3) &&=& (binom(3, 1) (1/3)^1 (1/2)^(3-1)) + (binom(3, 2) (1/3)^2 (1/2)^(3-2)) + (binom(3, 3) (1/3)^3 (1/2)^(3-3)) \
p_M (3) &&=& 49/108
$

Finally, let's generalize it! The probability of each case is given by the function:

$ binom(d, k) (1/3)^k (1/2)^(d-k) $

But to get the probability of a full Messy result, we need to add up all the different options. So we end up with a sum:

$ sum_(k=1)^d binom(d, k) (1/3)^k (1/2)^(d-k) $

Now, you're probably looking at that sum and thinking #emoji.face.vomit, or perhaps #emoji.face.dizzy. And you'd be absolutely right. Sums in probability are the worst---you can barely ever simplify them to something nicer, especially once we get that binomial coefficient in there. But in probability, whenever we run up against a sum or something equally annoying to calculate, we have one approach to always turn to first: complement the complement!#footnote[No, not compliment. But I'll do that too. Thank you, complement, you're very fun and useful.]

The complement of a probability $p$ is just the probability that it doesn't happen, i.e. $1-p$. Like I mentioned above, I like to refer to this as $q$. In many cases, it's easier to calculate the probability that something doesn't happen than the probability that it does. Then, you just find that probability that your original event doesn't not happen, and you're good! Simple as that. Complement the complement.

$
q = 1 - p \
p = 1 - q \
$

So, for the Messy, what does the complement look like? To _not_ roll a Messy, we need to either roll a Grim, or get at least one 6. We don't have to worry about the exact probabilities of a Perfect versus a Critical here (we'll leave that for the next sections)#footnote[We could, of course, just not do this---keep going, calculate the Perfect and Critical probabilities, and take $1-(p_G + p_P + p_C)$. But that's a lot of confidence in our calculations for the Perfect and the Critical. It's preferable to calculate each one independently, that way we can sanity check that they all add up to 1.], since any 6 rolled means that we didn't get a Messy.

We already have the probability of getting a Grim result:

$ p_G (d) = (1/2) ^ d $

So what's the probability of getting at least one 6? Well, if we start going through it, we need to get the probability of rolling one 6, plus the probability of rolling two 6s, plus the probability of rolling three 6s...and just like that we've got another sum. So---complement the complement! What's the probability that we roll _no_ 6s? That's easy! We just have to roll a 1, 2, 3, 4, or 5 $d$ times.#footnote[You may have realized that this is the binomial we used in the example above! For $k = 0$, $n = d$, and $p = 1/6$, we have $binom(d, 0) (p) ^ 0 (1-p) ^ (d-0)$. It may not be immediately intuitive that $binom(d, 0)$ is 1, i.e. there is 1 way to choose 0 items out of $d$ options but... it is. It may help to think of it as two piles: one of the chosen items, and one of the unchosen. $binom(d, d)$ means to put everything in the chosen pile,while $binom(d, 0)$ means to put everything in the unchosen pile---either way, there's only one configuration.]

$ q_6 (d) = (5/6) ^ d $

Therefore, we have:

$
p_6 (d) &&=& 1 - q_6 (d) \
p_6 (d) &&=& 1 - (5/6) ^ d \
$

Bringing it all together, we finally have our equation for the probability of getting a Messy result on $d$ dice.

$
p_M (d) &&=& 1 - ( p_G (d) + p_6 (d) ) \
p_M (d) &&=& 1 - ( ((1/2) ^ d) + (1 - (5/6) ^ d )) \
$

Sanity check time. Let's verify that this new equation matches up with our sum approach, since they should just be different ways of calculating the same thing.


$
p_M (1) &&=& 1 - ( (1/2) ^ 1 + (1 - (5/6) ^ 1 )) \
p_M (1) &&=& 1 - ( 1/2 + (1 - 5/6) ) \
p_M (1) &&=& 1 - ( 1/2 + 1/6 ) \
p_M (1) &&=& 1 - 2/3 \
p_M (1) &&=& 1/3 \
$

And for $d=2$:

$
p_M (2) &&=& 1 - ( (1/2) ^ 2 + (1 - (5/6) ^ 2 )) \
p_M (2) &&=& 4/9 \
$

And finally $d=3$:

$
p_M (3) &&=& 1 - ( (1/2) ^ 3 + (1 - (5/6) ^ 3 )) \
p_M (2) &&=& 49/108 \
$

You love to see it.

#align(center, table(
    columns: (auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability*]),
    [Disaster], $0$,
    [Grim], $(1/2) ^ d$,
    [Messy], $1 - ( (1/2) ^ d + (1 - (5/6) ^ d ))$,
))

= Perfect
Perfects! This one should be easy, right, since it's on the end of the range? Well...it's better than Messy, but not as easy as Grim. The Criticals complicate things a little. Since you get a Critical any time you roll two or more 6s, to get a Perfect, you have to roll exactly one 6. Good thing we know exactly how to do that, armed with our mastery over the binomial.

$
p_P (d) &&=& binom(d, 1) (1/6)^1 (1-1/6)^(d-1) \
       &&=& d dot 1/6 (5/6)^(d-1) \
$

Not too bad at all.

#align(center, table(
    columns: (auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability*]),
    [Disaster], $0$,
    [Grim], $(1/2) ^ d$,
    [Messy], $1 - ( (1/2) ^ d + (1 - (5/6) ^ d ))$,
    [Perfect], $d dot 1/6 (5/6)^(d-1)$,
))

= Critical

To get the probability we roll a Critical, we need the probability that we roll two or more 6s. That's the probability we roll two 6s, plus the probability we roll three 6s, up to rolling $d$ 6s (i.e. all dice come up 6).

$
p_C(d) &&=& binom(d, 2) (1/6)^1 (5/6)^(d-1) + binom(d, 3) (1/6)^3 (5/6)^(d-3) + ... + binom(d, d) (1/6)^d (5/6)^(d-d) \
&&=& sum_(k=2)^d binom(d, k) (1/6)^k (5/6)^(d-k) \
$

Another sum. What do we do when we see a sum, bars and grills?#footnote[My partner tells me this is inclusive of non-binary people. Vote in the comments!]

That's right!#footnote[I assume.] The probability that we get two or more 6s is the same as the probability that we _don't_ get either zero or one 6s.

$
sum_(k=2)^d binom(d, k) (1/6)^k (5/6)^(d-k) &&=& 1 - (sum_(k=0)^1 binom(d, k) (1/6)^k (5/6)^(d-k)) \
&&=& 1 - (binom(d, 0) (1/6)^0 (5/6)^(d-0) + binom(d, 1) (1/6)^1 (5/6)^(d-1)) \
&&=& 1 - ((5/6)^d + d dot 1/6 (5/6)^(d-1)) \
$

#align(center, table(
    columns: (auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability*]),
    [Disaster], $0$,
    [Grim], $(1/2) ^ d$,
    [Messy], $1 - ( (1/2) ^ d + (1 - (5/6) ^ d ))$,
    [Perfect], $d dot 1/6 (5/6)^(d-1)$,
    [Critical], $1 - ((5/6)^d + d dot 1/6 (5/6)^(d-1))$,
))

== Conclusion

And with that, we're done! After all that talk about binomials we simplified all that weird stuff out. As one final verification step, we can add up our equations for each of the different outcomes, and indeed we come out with 1!#footnote[You best be gettin yuge with all the exercises I'm leaving to the reader!! or https://www.wolframalpha.com/input?i=%281+-+%28%285%2F6%29%5Ed+%2B+d+*+1%2F6+%285%2F6%29%5E%28d-1%29%29%29+%2B+%28d+*+1%2F6+%285%2F6%29%5E%28d-1%29%29+%2B+%281+-+%28+%281%2F2%29+%5E+d+%2B+%281+-+%285%2F6%29+%5E+d+%29%29%29+%2B+%28%281%2F2%29+%5E+d%29 ] All the $d$s cancel out as they should, and we can go home happy.

Aw hell I forgot about the dang thorns.

= Thorns
As mentioned above, thorns are eight-sided dice that have a chance to *cut* the outcome of a roll by one level. For each thorn that lands on a 7 or 8, the final result of the six-sided dice changes from a Perfect to a Messy, a Messy to a Grim, or a Grim to a Disaster---Criticals ignore thorns.

So, to start, what's the probability of getting cut by a single thorn? Of course, for one thorn:

$ p_T (1, 1) = 2/8 $

To generalize to multiple thorns, we need the probability of rolling $c$ cuts, each with probability $2/8$, out of $t$ dice. Wouldn't you know it --- everything's a binomial.

The probability of being cut $c$ times by $t$ thorns is:

$ p_T (t, c) = binom(t, c) (2/8) ^ c (1 - 2/8) ^ (t - c) $

Armed with this knowledge, let's adapt our above equations taking into account possible cuts. Let's start with the simplest case, one thorn. Now we finally get the chance to get a Disaster! (yay...) For one thorn, the probability of rolling a Disaster is the probability of getting a Grim result on the six-sided dice and rolling a cut on your thorn. So:

$
p_D (d, 1) &&=& p_G (d, 0) dot 2/8 \
           &&=& (1/2)^d dot 2/8 \
$

Note that now, our probability function is a function of both $d$ (the number of six-sided dice) and $t$ (the number of thorns), where $p(d) = p(d,0)$. For the probability of a Grim, we're using the above function to determine the probability of that result with no thorns, and then applying our thorn onto that.

Then, the probability of a Grim becomes the probability that either 1. you rolled a Grim and it didn't get cut or 2. you rolled a Messy and it _did_ get cut.

$
p_G (d, 1) &&=& p_G (d, 0) dot 6/8 + p_M (d, 0) dot 2/8 \
$

And so on for Messy and Perfect.

Since we only have one thorn, the only way to get a Disaster is by cutting a Grim. But if we have more thorns, then we have more paths to get lower results, by way of potential multiple cuts in one roll. So, for two thorns, the probability of a Disaster becomes:

$
p_D (d, 2) &&=& p_G (d) dot p_T (2, 1) + p_G (d) dot p_T (2, 2) + p_M (d) dot p_T (2, 2) \
           &&=& p_G (d) dot (p_T (2, 1) + p_T (2, 2)) + p_M (d) dot p_T (2, 2) \
$

Note that we get a Disaster if we roll a Grim and either one or two cuts (or more)---we can't get lower than Disaster.

This doesn't apply to Grims and above, though, so we get a relationship like:
$
p_G (d, 2) &&=& p_G (d) dot p_T (2, 0) + p_M (d) dot p_T (2, 1) + p_P (d) dot p_T (2, 2) \
$

And so on for Messy and Perfect. Now, we can generalize this to any number of thorns! This is fairly straightforward for Grims, Messies, and Perfects, though it is long.

For Disasters, though, you might already be feeling a certain tingle in your spine, a chill down your back---a sum is in the offing. So, we do what we do.

$
p_D (d, t) &&=& p_G (d) dot (1 - p_T (t, 0)) \
&&+& p_M (d) dot ( 1 - (p_T (t, 0) + p_T (t, 1))) \
&&+& p_P (d) dot ( 1 - (p_T (t, 0) + p_T (t, 1) + p_T (t, 2))) \
$

Smite me now if be she not ugly as sin, but at least she's closed form.#footnote[If you remember the exact right amount of probability (like me), you may be asking---why don't we use the CDF here? After all, that's what it's for! Well, because the CDF of the binomial is ass on a turkey stick. Something called the regularized incomplete beta function? Integrals of inverse sines of square roots? This isn't trig! Do me a favor and lose five pounds immediately or get out of my building like now! Get out!]


#align(center, table(
    columns: (auto, auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability $p(d)$*], [*Probability $p(d, t)$*]),
    [Disaster], $0$, $
        &&p_G& (d) dot ( 1 - p_T (t, 0) ) \
        &&+& p_M (d) dot ( 1 - (p_T (t, 0) + p_T (t, 1)) ) \
        &&+& p_P (d) dot ( 1 - (p_T (t, 0) + p_T (t, 1) + p_T (t, 2)) ) \
    $,
    [Grim], $(1/2) ^ d$, $
        p_G (d) dot p_T (t, 0) + p_M (d) dot p_T (t, 1) + p_P (d) dot p_T (t, 2) \
    $,
    [Messy], $1 - ( (1/2) ^ d + (1 - (5/6) ^ d ))$, $
        p_M (d) dot p_T (t, 0) + p_P (d) dot p_T (t, 1) \
    $,
    [Perfect], $d dot 1/6 (5/6)^(d-1)$, $
        p_P (d) dot p_T (t, 0) \
    $,
    [Critical], $1 - ((5/6)^d + d dot 1/6 (5/6)^(d-1))$, $p_C (d)$,
))


To verify that it all adds up to 1, due to the use of the complement in the Disaster row, we can see fairly clearly that all the thorns terms will cancel out, and we'll be left with just $p_G + p_M + p_P + p_C$, which we know is 1.

= Conclusion (for real this time)

That's all folks! If you want to see the probabilities for modifications to the distribution, you just need to update the constants for the probabilities of rolling a single-die Grim or Perfect that appear in the final probability functions.#footnote[Note that the single-die Messy probability of $1/3$ doesn't appear, since we calculated it based on the probability of a Perfect or Grim.] Most have been left unsimplified for this reason.

Here's what it looks like if you apply the "fives count as sixes, fours count as ones" transformation. This gives us a $2/3$ chance of rolling a Grim on a single die, and a $1/3$ chance of a Perfect. Obviously, there's no chance to roll a Messy (without thorns)---let's verify that by simplifying the function for a Messy result with this new distribution:

$
p_M &&=& 1 - ( p_G (1) ^ d + (1 - (1 - p_P (1)) ^ d ) )\
&&=& 1 - ( (2/3) ^ d + (1 - (1 - 1/3) ^ d )) \
&&=& 1 - (2/3) ^ d - 1 + (2/3) ^ d  \
&&=& 1 - 1 + (2/3) ^ d - (2/3) ^ d  \
&&=& 0 \
$

I feel so sane right now. Let's take a look at the others:

#align(center, table(
    columns: (auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability*]),
    [Disaster], $0$,
    [Grim], $(2/3) ^ d$,
    [Messy], $0$,
    [Perfect], $d dot 1/3 (2/3)^(d-1)$,
    [Critical], $1 - ((2/3)^d + d dot 1/3 (2/3)^(d-1))$,
))

The calculation with thorns is the same as above, using these different definitions for $p_G (d)$, $p_M (d)$, etc.

= Mastery dice
But wait, I hear you say! There are modifications to these results that _aren't_ just changing the distribution of single-roll results! Namely, mastery dice.

Mastery dice are special six-sided dice that result in a Critical every time they come up 6---no need for two rolls. If you do get multiple 6s, and one of them is a mastery die, then you get an additional bonus.

How does this change our calculations? Let's treat the mastery dice separately from the rest of the of the dice, so we'll call the number of mastery dice $m$. Mastery dice don't do anything special on a Grim or Messy, so we can say:

#align(center, table(
    columns: (auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability $p(d, m)$*]),
    [Disaster], $0$,
    [Grim], $(1/2) ^ (d + m)$,
    [Messy], $1 - ( (1/2) ^ (d + m) + (1 - (5/6) ^ (d + m) ))$,
    // [Perfect], $d dot 1/6 (5/6)^(d-1)$,
    // [Critical], $1 - ((5/6)^d + d dot 1/6 (5/6)^(d-1))$,
))

To get a Perfect, we now have to roll exactly one 6 in $d$ dice, and no 6s in any of our $m$ mastery dice.

$
p_M (d, m) &&=& d dot 1/6 (5/6)^(d-1) dot binom(m, m) (5/6)^m \
           &&=& d dot 1/6 (5/6)^(d - 1 + m) \
$

And to get a Critical, we now need to either roll exactly one 6 in our mastery dice and no other 6s, or two or more 6s in the non-mastery dice (our previous Critical condition). The probability that we get a Critical from the mastery dice is then:

$
&& & binom(m, 1)(1/6)^1 (5/6)^(m-1) \
&&=& m(1/6)^1 (5/6)^(m-1) \
$

So then the probability we get a 6 in the mastery dice _and_ no other 6s:

$
&& & m(1/6)^1 (5/6)^(m-1) dot (5/6)^d \
&&=& m(1/6)^1 (5/6)^(m-1 + d) \
$

And the probability that we get a normal Critical _and_ no 6s on the mastery dice:
$
(1 - ((5/6)^d + d dot 1/6 (5/6)^(d-1))) dot (5/6)^m \
$

Finally, we bring it all together to get:

$
p_C (d, m) &&=& m(1/6)^1 (5/6)^(m-1 + d) + (1 - ((5/6)^d + d dot 1/6 (5/6)^(d-1))) dot (5/6)^m \
$

#link("https://gifdb.com/images/high/kristen-bell-498-x-498-gif-qdv63seogtllbxgz.gif")[Woof.]

Finally, the new outcome---call it a "Double Critical"---will occur if we get at least one 6 in the mastery dice, and at least one 6 between the other mastery dice and the normal dice.

Let's break it down. We're pros at this part by now---at least one 6 in the mastery dice means not zero 6s in the mastery dice.

$ 1 - (5/6)^m $

But if we do it this way, the other part gets a little...screwy. We need to be careful about double counting. The above equation already includes the probability that you rolled multiple 6s in the mastery dice, so we can't easily just think about it as $m - 1 + d$ dice or something. So let's break it down further, into more individual cases:

 - Exactly one 6 in mastery dice and one or more 6s in non-mastery dice
 - Two or more 6s in mastery dice and any amount of 6s in non-mastery dice

This covers all the ways to get a Double Critical without double-counting anything, since the two cases are mutually exclusive, or disjoint.

For the first case:

 - Exactly one 6 in mastery dice and one or more 6s in non-mastery dice

we have (using the same complement for "not zero 6s" in the $d$ dice this time):

$
&& & binom(m, 1) (1/6)^1 (5/6)^(m-1) dot (1-(5/6)^d) \
&&=& m (1/6)^1 (5/6)^(m-1) dot (1-(5/6)^d) \
$

And the second:

 - Two or more 6s in mastery dice and any amount of 6s in non-mastery dice

"Any amount of 6s" means we can just ignore it, since there's probability 1 that there will be an amount of 6s (including zero of them). So, using our favorite complement, we find the probability that there aren't zero or one 6s in the mastery dice:

$
&& & 1 - ( binom(m, 0) (1/6)^0 (5/6)^m + binom(m, 1) (1/6)^1 (5/6)^(m-1)) \
&&=& 1 - ( (5/6)^m + m (1/6)^1 (5/6)^(m-1)) \
$

So, bringing it all together, we have:

$
p_(C 2) (d, m) = (1 - ( (5/6)^m + m (1/6)^1 (5/6)^(m-1)) ) + (m (1/6)^1 (5/6)^(m-1) dot (1-(5/6)^d)) \
$

#link("https://c.tenor.com/QC5Ol4W_POYAAAAM/ugh-no.gif")[Yeah...I know]. Not the cutest as math goes. I tried simplifying it and it just makes it make less sense. But we're done! Let's fill out the table.


#align(center, table(
    columns: (auto, auto),
    inset: 10pt,
    table.header([*Result*], [*Probability $p(d, m)$*]),
    [Disaster], $0$,
    [Grim], $(1/2) ^ (d + m)$,
    [Messy], $1 - ( (1/2) ^ (d + m) + (1 - (5/6) ^ (d + m) ))$,
    [Perfect], $d dot 1/6 (5/6)^(d - 1 + m) $,
    [Critical], $m(1/6) (5/6)^(m-1 + d) + (1 - ((5/6)^d + d dot 1/6 (5/6)^(d-1))) dot (5/6)^m$,
    [Double Critical], $(1 - ( (5/6)^m + m (1/6) (5/6)^(m-1)) ) + (m (1/6) (5/6)^(m-1) dot (1-(5/6)^d)) $
))

And there you are! Does it add up to 1? Who knows!

#figure(
  image("wolfram-alpha-too-big.png", width: 80%),
  caption: [Well now I'm helpless.#footnote[I got it to work eventually and it said it did add up to 1. Have no fear.]],
)

// 0+(1/2)^(d+m)+1-((1/2)^(d+m)+(1-(5/6)^(d+m)))+d*(1/6)(5/6)^(d-1+m)+m(1/6)(5/6)^(m-1+d)+(1-((5/6)^d+d*(1/6)(5/6)^(d-1)))*(5/6)^m+(1-((5/6)^m+m(1/6)(5/6)^(m-1)))+(m(1/6)(5/6)^(m-1)*(1-(5/6)^d))

= Conclusion (stg this is it)
Thanks for reading! You can see interactive graphs using these equations at https://junbl.github.io/dice/analysis/rollswiththorns.



= References
This paper is based on Moxie #sym.copyright 2024 by J.D. Maxwell and Oddity Press, licensed under CC BY 4.0.

https://www.odditypress.com/licensing