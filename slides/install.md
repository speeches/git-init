# Install and configure

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

---

# Install

- install git-scm

---

# Configure git

- EOL strategy
- Credential Manager
- Global Gitignore

```bash
# End of line on windows
$ git config --global core.autocrlf true

# Global gitignore
$ git config --global core.excludesfile "%USERPROFILE%\.gitignore"

# Global User
$ git config --global user.name "Claudio Bartoli"
$ git config --global user.email "claudio@barto.li"
```

https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup

---

# Try git

### the hard way

- new repo
- git status
- add file
- stage file
- commit file

---

# Install GUI

### the easy way

- install gitextensions
- configure difftools
- view previous repo
- do another commit

> there is also sourcetree on windows but is less powerful than gitex

---

# Git GUI inside IDE

- are very useful for day by day commits
- very limited for "complex" operations

### You should probably switch to gitex
> so... don't forget it!
