# Git Basic
# concepts

---

# Working Folder

Git keep track for any changes starting from your root project directory

---

# Ignore List
You can define to ignore some files

globally: Machine Level

> i.e: 
> `.DSStore` on OsX
>
> `Thumbs.db` on Windows

---

# Ignore List
You can define to ignore some files

for your entire project

> i.e:
> `*.tmp`, `*obj` extensions
>
> `bin/` folder

Managed by `.gitignore` file on root project folder

---

# Ignore List
You can define to ignore some files

for any subfolder

> i.e:
> `*.tmp`, `*obj` extensions
>
> `bin/` folder

Managed by `.gitignore` file on target folder

---

# Respository

The repository with all changes is always with you!

Even offline!

> Magic happens becouse of hidden folder .git in your root project directory

If you are using a remote repository you can define where and when do sync

---

# Staging Area

When you make changes, you have 3 choices:

- Commit changes
- Revert changes
- Keep changes (but not commit)

All changes in staging area will be committed

### Changes are committed, not files! <!-- .element: class="fragment" data-fragment-index="0" -->
You can commit a part of changes in a file. <!-- .element: class="fragment" data-fragment-index="0" -->