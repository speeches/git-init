<!-- .element: id="definition" -->

# Git definition

---

# Git is

1. A completely ignorant, childish person with no manners.
2. A person who feels justified in their callow behaviour.
3. A pubescent kid who thinks it's totally cool to act like a moron on the internet, only because no one can actually reach through the screen and punch their lights out.

> That n00b is behaving like a bloody git.

*Source: [urbandictionary.com][1]*

[1]: http://www.urbandictionary.com/define.php?term=Git

---

# Git is

> Git is a distributed revision control system with an emphasis on speed, data integrity, and support for distributed, non-linear workflows.

*Source: [wikipedia.org][1]*

[1]: http://en.wikipedia.org/wiki/Git

---

# Git is

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

*Source: [git-scm.com][1]*

[1]: http://git-scm.com

---

## Git really isn't
- A deep copy of others VCS* (CVS, SVN, TFS, Mercurial)
- Dropbox, One Drive, Google Drive, *Drive
- A network share
- Magical <!-- .element: class="fragment" -->

*VCS: Version Control System

===

# ...ok
## but how it works ?

nice definitions, what is git actually?

---

## You can imagine 

# Git

like a virtual file system

with a great support for snapshot
<br /><br />

*(not like windows's restore point)* <!-- .element: class="fragment" -->

===
 <!-- .element: id="comparison" -->

# Comparison with known monster

---

### I use Dropbox: is maybe like Dropbox

<table>
<thead>
  <tr>
    <th>Dropbox</th>
    <th>Git</th>
  </tr>
</thead>
<tbody>
  <tr class="fragment">
    <td>Each file is synced server side: no connection means no versioning</td>
    <td>I don't need a server to take a snapshot of my work</td>
  </tr>  
  <tr class="fragment">
    <td>Each file is synced and versioned automatically, indipendently</td>
    <td>Each version is about the whole project, not any single file.</td>
  </tr>
  <tr class="fragment">
    <td>(~~potential~~ inconsistency)</td>
    <td>(~~potential~~ inconsistency)</td>
  </tr>
</tbody>
</table>

---

### I use SVN: is maybe like SVN

<table>
<thead>
  <tr>
    <th>Svn</th>
    <th>Git</th>
  </tr>
</thead>
<tbody>
  <tr class="fragment">
    <td>Each file is synced server side: no connection means no versioning</td>
    <td>I don't need a server to take a snapshot of my work</td>
  </tr>  
  <tr class="fragment">
    <td>I can perform a lock</td>
    <td>No lock strategy: merge (potential) conflict at the end.</td>
  </tr>
</tbody>
</table>

---

## Commits are not automatic 
### but it is an explicit operation!

>  <!-- .element: class="fragment" -->
> ... is not a bug, it's a feature :-)

---

# Shopping list

### Minimal

- Git
- desire to use git <!-- .element: class="fragment" data-fragment-index="0" -->
- no Server, Account, Permissions needed<!-- .element: class="fragment" data-fragment-index="1"-->
<br />
<br />

### Suggested <!-- .element: class="fragment" data-fragment-index="3"-->

- GUI Git Client (becouse cmd line is hard) <!-- .element: class="fragment" data-fragment-index="3"-->
- Server, Account, Permissions <!-- .element: class="fragment" data-fragment-index="3"-->