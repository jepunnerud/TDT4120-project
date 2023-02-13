## What to do when you want to merge your changes

1. If it does not already exist, create an issue on GitLab regarding the changes you have made.

---

2. Create a branch with a suitable name. The name should be on the format `something-something` whit lowercase letters and a dash if more than one word is needed. To do this, open your terminal, cd to /bookhub and do:

```
git checkout -b something-something
```

---

3. Get the status of your current changes. To do this, cd to /bookhub and do:

```
git status
```

---

4. All files in red are files you have created or made changes to. If you are **100% SURE** that all these red files should be part of your merge request, do:

```
git add .
```

If you only want certain files to be part of your merge request, you can use git add -i to choose which files to add:

```
git add -i
```

---

5. Commit your added files by doing:

```
git commit -m "Description #issue"
```

Take note of the capitalized first letter in the commit message. #issue can be added if your commit is directly corrolated to an issue. For example issue 10, then you would do `git commit -m "Description #10`. If you wish to add a co-author to the commit, then do:

```
git commit --amend
```

This will open your commit message in vim. If you don't know how to edit text in vim, ask one of the other group members for assistance. Here you can add a co-author on the format:

```
Description #issue

Co-authored-by: Firstname LastName <username@stud.ntnu.no>
```

---

6. Now you can push your committed changes. Double check that you are currently in the correct branch by doing:

```
git branch
```

The highlighted branch is the branch you are currently in. If you are in the wrong branch, switch branch by doing:

```
git checkout branchname
```

When you are on the correct branch, you can push your changes by doing:

```
git push
```

This will give you the message:

```
fatal: The current branch branchname has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin branchname
```

Then you can copy this command, and do:

```
git push --set-upstream origin branchname
```

---

7. Now you can go to the GitLab repository and create a new merge request. The button to do this should appear automatically on the front page of the project's repository. The merge request's description should be on the format:

```
- I did this
- And this

Closes issue #1 #2 etc

Co-authored-by: Firstname Lastname <username@stud.ntnu.no>
```

Now, you have to wait for others in the group to review and approve your code before you merge. Any conflicts or enresolved threads must also be resolved before merging.
