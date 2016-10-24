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

## Git really is

- An DSCM `=>` Distributed* Source Control Management
- It's by Linus Torvalds
- Was born by Linus bad experience using CVS

## Git really isn't
- Another Version Control (CVS, SVN, TFS, Mercurial)
- Dropbox, One Drive, Google Drive, *Drive
- A network share

===

# ...ok
## but how it works ?

nice definitions, what is git actually?

You can imagine git like a virtual file system, with a great support for snapshot

*(not like windows's restore point)*

---

## Snapshots are not automatic 
### but it is an explicit operation!

... and is not a bug, it's a feature :-)

---

### I use Dropbox: is maybe like Dropbox

| Dropbox                                                                 | Git                                                           |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| Each file is synced server side: if I haven't connection, no versioning | I don't need a server to take a snapshot of my work           | 
| Each file is synced and versioned automatically, indipendently          | Each version is about the whole project, not any single file. | 
| *(potential inconsistency)*                                             | *(potential consistency)*                                     |

---

### I use SVN: is maybe like SVN

| SVN                                                                     | Git                                                      |
|-------------------------------------------------------------------------|----------------------------------------------------------|
| Each file is synced server side: if I haven't connection, no versioning | I don't need a server to take a snapshot of my work      | 
| I can perform a lock                                                    | No lock strategy: merge (potential) conflict at the end. | 

---

# Shopping list

### Minimal

- Git
- desire to use git
- ~~Server, Account, Permissions~~

### Nice to have

- GUI Git Client
- Server, Account, Permissions