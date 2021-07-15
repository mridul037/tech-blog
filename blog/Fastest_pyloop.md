---
slug: "/blog/pyloop"
date: "2021-07-04"
title: "Fastest Way to Loop in Python"
---


#### Sum of numbers 0 to n-1 in diffrent ways🔁

<pre><code class="code"> 
def while_loop(n=1000_000_000):
    i = 0
    s = 0
    while i < n:
        s += i
        i +=1
    return s    
</code></pre>
##### while-loop : =====> Time: 15.257 ⏱️

<pre><code class="code"> 
def for_loop(n=1000_000_000):
     s=0
     for i in range(n):
          s += i
     return s
</code></pre>
##### For Loop : =====> Time: 9.333⏱️      

lets add some extra code in for loop and some check wrt to time
<pre><code class="code"> 
def for_loop(n=1000_000_000):
     s=0
     for i in range(n):
          s += i
          i +=1 
     return s
</code></pre>
##### i+=1 : increase time to 14.78⏱️
<pre><code class="code"> 

def for_loop(n=1000_000_000):
     s=0
     for i in range(n) :
          if i< n: pass
          s += i
     return s

</code></pre>
##### i < n : increase time to 12.56⏱️

#### Its still Slow 🐢🐢

lets do: 
<pre><code class="code"> 
def sum_range(n=1000_000_000):
    return sum(range(n))
</code></pre>

##### Sum range: 6.37 (wow..!! that was fast)

##### lets Use Numpy...
<pre><code class="code"> 
def sum_numpy(n=1000_000_000):
    return numpy.sum(numpy.arange(n))
</code></pre>

#### numpy-sum: ====> 0.8014⏱️
`
numpy is primarily written in c hence faster than python function's`

But there is one more faster way or we can say the fastest way to loop in python

---

the fastest way to loop in python is to not to loop at all.....😶‍🌫️
using math function to rescue.

<pre><code class="code"> 

def sum_numpy(n=1000_000_000):
    return  (n*(n - 1))//2

</code></pre>

#### math sum time:====> `2.80000000423867e-06 (way lesser time than before 😵‍💫)`


<style>
    .row {
        display:flex;
    }
    .wid {
       width:600px;
       height:200px;
    }
    .code {
        display: block;
    background: #f5f5f5;
    border: 1px solid #ccc;
    font-size: 18px;
    
    }
    @media screen and (max-width: 480px) {
        .row { flex-direction:column;}
        .wid {
            width:300px;
            height:140px;
        }
        .code {
       overflow:scroll;
       width:100%;
    }
     }

</style>