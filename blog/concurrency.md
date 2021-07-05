---
slug: "/blog/concurrency"
date: "2021-07-03"
title: "Understanding Concurrecy"
---

Concurrency means multiple computations are happening at the same time. Concurrency is everywhere in modern programming, whether we like it or not:

- Multiple computers in a network
- Multiple applications running on one computer
- Multiple processors in a computer (today, often multiple processor cores on a single chip)

#### There are two common models for concurrent programming: shared memory and message passing.

**Shared memory**. In the shared memory model of concurrency, concurrent modules interact by reading and writing shared objects in memory.

- A and B might be two processors sharing same physical memory
- A and B might be two threads in the same Java program (we’ll explain what a thread is below), sharing the same Java objects.

**Message passing**. In the message-passing model, concurrent modules interact by sending messages to each other through a communication channel

##### Processes, Threads, Time-slicing

_Process_. A process is an instance of a running program that is isolated.It makes the program feel like it has the entire machine to itself

_Thread_. A thread is a locus of control inside a running program

concurrency is simulated by _time slicing_, which means that the processor switches between threads

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
    font-size: 15px;
    }
    @media screen and (max-width: 480px) {
        .row { flex-direction:column;}
        .wid {
            width:300px;
            height:140px;
        }
        .code {
       overflow:scroll;
    }
     }

</style>
<div class="row">

> Imagine that a bank has cash machines that use a shared memory model, so all the cash machines can read and write the same account objects in memory.

<img src="https://web.mit.edu/6.005/www/fa14/classes/17-concurrency/figures/shared-memory-bank-account.png"  class="wid"/>
</div>

---

To illustrate what can go wrong

<pre><code class="code"> 
// suppose all the cash machines share a single bank account
private static int balance = 0;
private static void deposit() {
    balance = balance + 1;
}
 // highlight-next-line
private static void withdraw() {
    balance = balance - 1;
}
 </code></pre>

Customers use the cash machines to do transactions like this:

<pre><code class="code"> 
 deposit(); // put a Rupee in
withdraw(); // take it back out
 </code></pre>

Here’s one thing that can happen. Suppose two cash machines, A and B, are both working on a deposit at the same time. Here’s how the **deposit()** step typically breaks down into low-level processor instructions:

<pre><code  class="code"> 
get balance (balance=0)
add 1                 
write back the result (balance=1)
</code></pre>

so both A and B successfully put in a rupee. But what if the interleaving looked like this:

---

<pre><code class="code"> 
A get balance (balance=0)
                                    B get balance (balance=0)
A add 1
                                    B add 1
A write back the result (balance=1)
                                    B write back the result (balance=1)
 </code></pre>

---

##### The balance is now 1 – A’s Rupee was lost! A and B both read the balance at the same time, computed separate final balances, and then raced to store back the new balance – which failed to take the other’s deposit into account.

### RACE CONDITION

A race condition means that the correctness of the program (the satisfaction of postconditions and invariants) depends on the relative timing of events in concurrent computations A and B. When this happens, we say “A is in a race with B.”

---

### UNDER BUILD
