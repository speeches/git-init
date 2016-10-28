# Git Basic
# concepts

---

# Working Folder

Git keeps track of any changes starting from your root project directory

---

# Ignore List
You can define file patterns to ignore

globally: Machine Level

> i.e: 
> `.DSStore` on OsX
>
> `Thumbs.db` on Windows

---

# Ignore List
You can define file patterns to ignore

for your entire project

> i.e:
> `*.tmp`, `*obj` extensions
>
> `bin/` folder

Managed by `.gitignore` file on root project folder

---

# Ignore List
You can define file patterns to ignore

for any subfolder

> i.e:
> `*.tmp`, `*obj` extensions
>
> `bin/` folder

Managed by `.gitignore` file on target folder

---

# Repository

The repository with all your changes is always to hand!

Even offline!

> Magic happens becouse of .git hidden folder in your root project directory

If you are using a remote repository you can define where and when to sync

---

# Staging Area

When you make changes, you have 3 choices:

- Commit changes
- Revert changes
- Keep changes (but not commit)

All changes in staging area will be committed

### Changes are committed, not files! <!-- .element: class="fragment" data-fragment-index="0" -->
You can commit partial changes of a file. <!-- .element: class="fragment" data-fragment-index="0" -->