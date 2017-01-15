# Git remote
### Working with remote servers

---

# Server basically is
## just another copy of the repo

like your own copy, nothing else!

> File transfer can be done via https, ssh, ...

---

# A local repo 
## can be linked to 
# 0+ remote origins

---

## Fetching a project from a remote repo
# is
# Clone

```sh
$ git clone https://github.com/group/project.git
```

---

## You can
# Link a project to 
# a remote repo
### in a second moment

```sh
$ git remote add origin https://github.com/group/project.git
```

---

## In your graph you'll see 
# overlapped projects

- same commit is diplayed once
- different branches are separate 

---

# What is local and what is remote ?

Git use a naming convention to display remote branches:

`origin/master`

- `origin` - name of the remote location
- `master` - name of the remote branch

---

# Link between local and remote

### local `master`
### refers to remote `origin/master`

Pushing master to origin will update origin/master

---

# Fetch & Pull

Fetch: Fetch remote commit
Pull: Fetch + Move head

---

# Merge vs Rebase
## Strategies

---

# Merge

- very common on internet
- not suggested in day by day operations
- line history is hard to read
- additional merge commit

---

# Rebase

- suggested to "integrate" local work in origin
- plain line history
- no additional commit

---

# so...

```sh
$ git pull
$ git rebase
$ git push origin master

```

---

# Warning

- rewrite history (amend, ...)

---

# Q & A
## & Examples